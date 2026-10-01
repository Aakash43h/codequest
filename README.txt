================================================================================
CODEQUEST - CODING AWARENESS FOR COLLEGE STUDENTS
================================================================================

PROJECT OVERVIEW:
-----------------
CodeQuest is an interactive, clean coding awareness platform designed for
college students. It features 9 comprehensive programming tracks with 8 chapters
each (72 total learning modules), live in-browser execution, interactive
chapter challenges, 10-question knowledge quizzes, and verifiable completion
certificates locked behind full course and assessment completion.

HOW TO RUN THE PROJECT:
-----------------------
1. Double-click "start.bat" to start the Flask server.
2. Open your web browser (Chrome / Edge / Firefox) and visit:
   http://127.0.0.1:5000
3. The first screen is the classic, centered Registration & Login Portal:
   - Clean Login / Sign Up card (Name, Email, Password).
   - Instant guest access or full account registration to save progress.

9 PROGRAMMING TRACKS AVAILABLE (8 CHAPTERS EACH):
--------------------------------------------------
1. Python       -> Print, Variables, Input, Operators, If-Else, Loops, Functions, Lists & Dictionaries
2. Java         -> Class/Main, Data Types, Scanner, Math, Conditions, Loops, Methods, Arrays & ArrayList
3. C            -> Structure/printf, Specifiers, scanf, If-Else, Loops, Functions, Arrays, Pointers
4. C++          -> cout, cin, Operators, If-Else, Loops, Functions, Classes, Constructors & Encapsulation
5. C# (.NET)    -> WriteLine, Types/var, Interpolation, If-Else/Switch, Loops, Methods, Classes, Lists & LINQ
6. JavaScript   -> Console/let, Types, If-Else, Loops, Arrow Functions, Arrays, Objects, Map & Filter
7. HTML & CSS   -> Page Structure, Links/Images, Lists/Tables, Forms, Colors, Box Model, Flexbox, CSS Grid
8. SQL Database -> SELECT *, Specific Columns, WHERE, Text Filters, ORDER BY/LIMIT, Aggregates, INSERT, UPDATE/DELETE
9. PHP          -> Syntax/echo, Variables ($), Concatenation (.), If-Else, Loops, Functions, Arrays, Form Handling

LOCKED CERTIFICATE SYSTEM:
---------------------------
Certificates are strictly locked and cannot be generated prematurely.
To unlock a course certificate, a student MUST satisfy two mandatory requirements:
1. Complete all 8 chapter exercises & challenges for that course.
2. Pass the 10-Question Knowledge Quiz with a score of at least 6/10 (60%).
The Certificate page provides an interactive real-time checklist for each requirement,
direct navigation buttons to missing steps, and visual unlocked/locked indicators.

INTERACTIVE FEATURES:
---------------------
• Classic, Centered Login Portal: Clean and simple design without clutter.
• Progress Stats Bar: Live counter of 9 tracks, 72 modules, and locked/unlocked certificates.
• Locked Certificate System: Real-time verification checklist with PDF printing upon unlocking.
• Interactive Course Filter: Toggle between All Tracks, Core & Systems, and Web & Database.
• "Load in Editor" Button: Instantly copies chapter example code into the interactive runner.
• Quick Syntax Cheat Sheets: Collapsible tips for quick reference during lessons.
• Live HTML Rendered Web Preview: Watch your HTML and CSS design render right on the screen.
• Live SQL Query Runner: Query database tables and view formatted ASCII results.
• 10-Question Knowledge Quizzes: Comprehensive 10-question quiz per track (6/10 to pass).
• Celebration Confetti: Rewarding particle celebration when solving challenges and passing quizzes.
• Mobile Responsive: Fully adapted for smartphones, tablets, and desktop computers.

--------------------------------------------------------------------------------
HOW TO EXPLAIN THIS PROJECT TO YOUR TEACHER (SIMPLE VIVA GUIDE)
--------------------------------------------------------------------------------

1. Teacher asks: "What is your project about?"
   Your answer:
   "Teacher, my project is CodeQuest - Coding Awareness for College Students.
   It provides an interactive learning environment across 9 programming
   tracks (8 chapters each, totaling 72 interactive modules): Python, Java, C,
   C++, C#, JavaScript, HTML/CSS Web Design, SQL, and PHP.
   Students practice coding right in their browser, solve interactive
   challenges, take 10-question quizzes, and earn verifiable certificates."

2. Teacher asks: "How does the certificate locking system work?"
   Your answer:
   "To ensure academic rigor and authentic learning, certificates are locked
   by default. A certificate is only unlocked when a student completes all 8
   chapters and passes the 10-question knowledge quiz with at least 60% (6/10).
   The frontend dynamically tracks these conditions via an interactive checklist
   and prevents unauthorized generation or printing until both are fulfilled."

3. Teacher asks: "How does the in-browser execution work?"
   Your answer:
   "For backend and compiled languages (Python, Java, C, C++, C#, PHP), the frontend
   posts code to Flask's '/run' route. Flask executes the code safely in a
   controlled subprocess with a 5-second timeout and returns the console output.
   For C#, in-memory compilation via PowerShell is used for fast and safe execution.
   For JavaScript and HTML/CSS, execution and visual rendering run directly
   in the browser. For SQL, Flask runs queries against an in-memory SQLite
   database populated with sample student records and returns formatted tables."

4. Teacher asks: "How is user data and progress stored?"
   Your answer:
   "We use an embedded SQLite database (codequest.db) with 'users' and 'progress'
   tables. When students register and complete chapters or quizzes, their progress
   is synchronized with their account so they can resume anytime."

5. Teacher asks: "What interactive features did you build?"
   Your answer:
   "We built a classic clean login portal, locked certificate checklist with
   print-to-PDF support, instant 'Load in Editor' buttons, quick syntax cheat
   sheets, category filtering for tracks, live HTML visual rendering, 10-question
   assessment quizzes, and celebratory confetti animations."

================================================================================
FILES IN THIS PROJECT:
----------------------
• app.py          -> Flask web server, SQLite database, and code runner backend
• index.html      -> Website structure (Auth, Courses, Code Lab, Quiz, Cert)
• style.css       -> Clean, responsive styling for mobile, tablet, and desktop
• script.js       -> Course syllabus, 10-question quizzes, locked certificates, confetti
• requirements.txt-> Python packages (Flask)
• start.bat       -> One-click Windows launcher
================================================================================
