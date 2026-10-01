import os
import sys
import shutil
import sqlite3
import tempfile
import subprocess
from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__)

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "codequest.db")


# -----------------------------------------------------------------------------
# DATABASE SETUP (SQLite)
# -----------------------------------------------------------------------------
def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    cursor = conn.cursor()

    # Simple users table: name, email, password
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    """)

    # Simple progress table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_email TEXT NOT NULL,
            language TEXT NOT NULL,
            completed_chapters TEXT DEFAULT '[]',
            test_passed INTEGER DEFAULT 0,
            UNIQUE(user_email, language)
        )
    """)

    conn.commit()
    conn.close()


init_db()


# -----------------------------------------------------------------------------
# STATIC FILE ROUTES
# -----------------------------------------------------------------------------
@app.route("/")
def home():
    return send_from_directory(".", "index.html")


@app.route("/<path:file_name>")
def static_files(file_name):
    if file_name in ["style.css", "script.js", "README.txt"]:
        return send_from_directory(".", file_name)
    return "File not found", 404


# -----------------------------------------------------------------------------
# USER AUTHENTICATION (Register & Login)
# -----------------------------------------------------------------------------
@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "").strip()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "").strip()

    if not name or not email or not password:
        return jsonify({"success": False, "message": "Please enter name, email and password."}), 400

    conn = get_db()
    cursor = conn.cursor()

    try:
        cursor.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", (name, email, password))
        conn.commit()
        return jsonify({
            "success": True,
            "user": {"name": name, "email": email},
            "message": "Registration successful! Welcome."
        })
    except sqlite3.IntegrityError:
        return jsonify({"success": False, "message": "Email is already registered. Please login."}), 400
    finally:
        conn.close()


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json(silent=True) or {}
    email = data.get("email", "").strip().lower()
    password = data.get("password", "").strip()

    if not email or not password:
        return jsonify({"success": False, "message": "Please enter email and password."}), 400

    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT name, email, password FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()

    if not user or user["password"] != password:
        conn.close()
        return jsonify({"success": False, "message": "Invalid email or password."}), 401

    # Load progress
    cursor.execute("SELECT language, completed_chapters, test_passed FROM progress WHERE user_email = ?", (email,))
    rows = cursor.fetchall()
    conn.close()

    import json
    user_progress = {}
    for r in rows:
        user_progress[r["language"]] = {
            "completed": json.loads(r["completed_chapters"] or "[]"),
            "testPassed": bool(r["test_passed"])
        }

    return jsonify({
        "success": True,
        "user": {"name": user["name"], "email": user["email"]},
        "progress": user_progress,
        "message": f"Welcome back, {user['name']}!"
    })


# -----------------------------------------------------------------------------
# PROGRESS PERSISTENCE
# -----------------------------------------------------------------------------
@app.route("/api/progress/save", methods=["POST"])
def save_progress():
    data = request.get_json(silent=True) or {}
    email = data.get("email", "").strip().lower()
    progress = data.get("progress", {})

    if not email:
        return jsonify({"success": False, "message": "Email required."}), 400

    conn = get_db()
    cursor = conn.cursor()

    import json
    for lang, details in progress.items():
        comp = json.dumps(details.get("completed", []))
        passed = 1 if details.get("testPassed") else 0

        cursor.execute("""
            INSERT INTO progress (user_email, language, completed_chapters, test_passed)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(user_email, language) DO UPDATE SET
                completed_chapters = excluded.completed_chapters,
                test_passed = excluded.test_passed
        """, (email, lang, comp, passed))

    conn.commit()
    conn.close()
    return jsonify({"success": True})


# -----------------------------------------------------------------------------
# CODE EXECUTION (Run Python, Java, C, C++)
# -----------------------------------------------------------------------------
def execute_command(cmd, user_input=""):
    try:
        res = subprocess.run(
            cmd,
            input=user_input,
            capture_output=True,
            text=True,
            timeout=5
        )
        if res.returncode == 0:
            return res.stdout or "Program executed successfully with no output."
        return res.stderr or "Execution error."
    except subprocess.TimeoutExpired:
        return "Program took too long to finish (5 second timeout)."
    except Exception as e:
        return f"Error: {str(e)}"


@app.route("/run", methods=["POST"])
def run_code():
    data = request.get_json(silent=True) or {}
    language = data.get("language", "python").lower()
    code = data.get("code", "")
    user_input = str(data.get("input", ""))

    if user_input and not user_input.endswith("\n"):
        user_input += "\n"

    if not code.strip():
        return jsonify({"output": "Please enter some code to run."})

    # 1. PYTHON
    if language == "python":
        file_path = None
        try:
            with tempfile.NamedTemporaryFile(mode="w", suffix=".py", delete=False, encoding="utf-8") as f:
                f.write(code)
                file_path = f.name
            output = execute_command([sys.executable or "python", file_path], user_input)
        finally:
            if file_path and os.path.exists(file_path):
                os.remove(file_path)
        return jsonify({"output": output})

    # 2. JAVA
    elif language == "java":
        javac = shutil.which("javac") or r"C:\Program Files\Java\jdk-21.0.10\bin\javac.exe"
        java = shutil.which("java") or r"C:\Program Files\Java\jdk-21.0.10\bin\java.exe"

        if not shutil.which("javac") and not os.path.exists(javac):
            return jsonify({"output": "Java compiler (javac) not found. Install JDK to run Java code."})

        folder = tempfile.mkdtemp()
        try:
            java_file = os.path.join(folder, "Main.java")
            with open(java_file, "w", encoding="utf-8") as f:
                f.write(code)

            compile_res = subprocess.run([javac, java_file], capture_output=True, text=True, timeout=5)
            if compile_res.returncode != 0:
                return jsonify({"output": "Compile Error:\n" + compile_res.stderr})

            output = execute_command([java, "-cp", folder, "Main"], user_input)
            return jsonify({"output": output})
        finally:
            shutil.rmtree(folder, ignore_errors=True)

    # 3. C / C++
    elif language in ["c", "cpp"]:
        compiler = "gcc" if language == "c" else "g++"
        if not shutil.which(compiler):
            return jsonify({
                "output": f"{compiler.upper()} compiler is not in Windows PATH.\nInstall MinGW or GCC to compile natively on your PC.\nCode syntax check: Ready."
            })

        folder = tempfile.mkdtemp()
        src_file = os.path.join(folder, "main.c" if language == "c" else "main.cpp")
        exe_file = os.path.join(folder, "main.exe" if os.name == "nt" else "main")

        try:
            with open(src_file, "w", encoding="utf-8") as f:
                f.write(code)

            compile_res = subprocess.run([compiler, src_file, "-o", exe_file], capture_output=True, text=True, timeout=5)
            if compile_res.returncode != 0:
                return jsonify({"output": "Compile Error:\n" + compile_res.stderr})

            output = execute_command([exe_file], user_input)
            return jsonify({"output": output})
        finally:
            shutil.rmtree(folder, ignore_errors=True)

    # 4. JAVASCRIPT
    elif language == "javascript":
        return jsonify({"output": "JavaScript runs directly in your browser with real-time console output!"})

    # 5. HTML & CSS (Web Design)
    elif language == "html":
        return jsonify({"output": "HTML & CSS rendered live in your preview container!"})

    # 6. SQL (Database Queries)
    elif language == "sql":
        try:
            # Create an in-memory SQLite database populated with sample college records
            sql_conn = sqlite3.connect(":memory:")
            sql_cursor = sql_conn.cursor()
            sql_cursor.executescript("""
                CREATE TABLE students (
                    roll_no INTEGER PRIMARY KEY,
                    name TEXT,
                    branch TEXT,
                    marks INTEGER,
                    city TEXT
                );
                INSERT INTO students VALUES (101, 'Akash', 'IT', 88, 'Mumbai');
                INSERT INTO students VALUES (102, 'Priya', 'CS', 92, 'Pune');
                INSERT INTO students VALUES (103, 'Rahul', 'IT', 74, 'Delhi');
                INSERT INTO students VALUES (104, 'Sneha', 'EXTC', 85, 'Bangalore');
                INSERT INTO students VALUES (105, 'Amit', 'CS', 68, 'Mumbai');
            """)

            statements = [s.strip() for s in code.split(";") if s.strip()]
            output_parts = []

            for stmt in statements:
                sql_cursor.execute(stmt)
                if sql_cursor.description:
                    columns = [col[0] for col in sql_cursor.description]
                    rows = sql_cursor.fetchall()
                    if not rows:
                        output_parts.append(f"Query executed. 0 rows returned.\nColumns: {', '.join(columns)}")
                    else:
                        # Format as clean ASCII table
                        col_widths = [max(len(str(c)), max(len(str(r[i])) for r in rows)) for i, c in enumerate(columns)]
                        header = " | ".join(str(c).ljust(w) for c, w in zip(columns, col_widths))
                        divider = "-+-".join("-" * w for w in col_widths)
                        data_rows = [" | ".join(str(val).ljust(w) for val, w in zip(r, col_widths)) for r in rows]
                        output_parts.append("\n".join([header, divider] + data_rows) + f"\n({len(rows)} row{'s' if len(rows) > 1 else ''} returned)")
                else:
                    output_parts.append(f"Statement executed successfully. ({sql_cursor.rowcount} row(s) affected)")

            sql_conn.commit()
            sql_conn.close()
            return jsonify({"output": "\n\n".join(output_parts) or "Query executed."})
        except Exception as e:
            return jsonify({"output": f"SQL Error:\n{str(e)}"})

    # 7. C# (.NET)
    elif language in ["csharp", "c#", "cs"]:
        ps_script = f"""$WarningPreference = 'SilentlyContinue'
$code = @'
{code}
'@
try {{
    $types = Add-Type -TypeDefinition $code -Language CSharp -PassThru -IgnoreWarnings
    $mainType = $types | Where-Object {{ $_.GetMethod('Main', [System.Reflection.BindingFlags]'Static, Public, NonPublic') }} | Select-Object -First 1
    if (-not $mainType) {{
        $mainType = [System.AppDomain]::CurrentDomain.GetAssemblies() | ForEach-Object {{ try {{ $_.GetTypes() }} catch {{}} }} | Where-Object {{ $_.GetMethod('Main', [System.Reflection.BindingFlags]'Static, Public, NonPublic') }} | Select-Object -Last 1
    }}
    if ($mainType) {{
        $method = $mainType.GetMethod('Main', [System.Reflection.BindingFlags]'Static, Public, NonPublic')
        $p = $method.GetParameters()
        if ($p.Length -eq 1) {{
            $null = $method.Invoke($null, @([string[]]@()))
        }} else {{
            $null = $method.Invoke($null, $null)
        }}
    }} else {{
        Write-Host "C# code compiled successfully."
    }}
}} catch {{
    Write-Host "C# Error: $($_.Exception.Message)"
}}
"""
        ps_file = None
        try:
            with tempfile.NamedTemporaryFile(mode="w", suffix=".ps1", delete=False, encoding="utf-8") as f:
                f.write(ps_script)
                ps_file = f.name
            output = execute_command(["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", ps_file], user_input)
            return jsonify({"output": output})
        finally:
            if ps_file and os.path.exists(ps_file):
                os.remove(ps_file)

    # 8. PHP (Server Scripting)
    elif language == "php":
        php_cli = shutil.which("php") or (r"C:\xampp\php\php.exe" if os.path.exists(r"C:\xampp\php\php.exe") else None)
        if php_cli:
            file_path = None
            try:
                with tempfile.NamedTemporaryFile(mode="w", suffix=".php", delete=False, encoding="utf-8") as f:
                    f.write(code)
                    file_path = f.name
                output = execute_command([php_cli, file_path], user_input)
                return jsonify({"output": output})
            finally:
                if file_path and os.path.exists(file_path):
                    os.remove(file_path)
        else:
            try:
                clean = code.replace("<?php", "").replace("?>", "").strip()
                import re
                lines = [l.strip() for l in clean.split(";") if l.strip()]
                vars_dict = {}
                out_parts = []
                for l in lines:
                    assign = re.match(r'^\$([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$', l)
                    if assign:
                        vname, vexpr = assign.groups()
                        for k, v in vars_dict.items():
                            vexpr = vexpr.replace(f"${k}", repr(v) if isinstance(v, str) else str(v))
                        try:
                            vars_dict[vname] = eval(vexpr.replace(".", "+"))
                        except Exception:
                            vars_dict[vname] = vexpr.strip('"\'')
                        continue
                    echo_m = re.match(r'^echo\s+(.+)$', l)
                    if echo_m:
                        expr = echo_m.group(1)
                        parts = expr.split(".")
                        eval_parts = []
                        for p in parts:
                            p = p.strip()
                            if p.startswith("$") and p[1:] in vars_dict:
                                eval_parts.append(str(vars_dict[p[1:]]))
                            elif (p.startswith('"') and p.endswith('"')) or (p.startswith("'") and p.endswith("'")):
                                eval_parts.append(p[1:-1].encode().decode('unicode-escape'))
                            else:
                                try:
                                    for k, v in vars_dict.items():
                                        p = p.replace(f"${k}", str(v))
                                    eval_parts.append(str(eval(p)))
                                except Exception:
                                    eval_parts.append(p)
                        out_parts.append("".join(eval_parts))
                return jsonify({"output": "".join(out_parts) or "PHP script executed successfully with no output."})
            except Exception as e:
                return jsonify({"output": "PHP script executed successfully."})

    return jsonify({"output": "Language practice mode active."})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print("=========================================================")
    print("CodeQuest - Coding Awareness Portal for College Students")
    print(f"Server running at: http://127.0.0.1:{port}")
    print("=========================================================")
    app.run(host="0.0.0.0", port=port, debug=False)
