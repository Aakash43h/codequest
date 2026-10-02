// =========================================================
// CodeQuest - Clean, Interactive JavaScript Engine
// 9 Comprehensive Courses (Python, Java, C, C++, C#, JS, HTML, SQL, PHP)
// 10-Question Knowledge Quizzes
// =========================================================

// ---------------------------------------------------------
// 1. COURSE DATA (9 Programming Tracks, 8 Chapters Each)
// ---------------------------------------------------------
const courses = {
    python: {
        name: "Python",
        icon: "🐍",
        category: "core",
        desc: "Learn Python fundamentals, syntax, conditions, loops, and functions.",
        chapters: [
            {
                title: "1. Hello World & Print",
                text: "Python uses the print() function to display text or values to the screen.",
                code: 'print("Hello, Young Coder!")\nprint("Welcome to Python programming.")',
                challenge: "What function outputs text to the screen in Python?",
                answer: "print"
            },
            {
                title: "2. Variables & Data Types",
                text: "Variables store data. Common types include integers, floats, strings and booleans.",
                code: 'student_name = "Akash"\nage = 20\ngpa = 8.5\nis_registered = True\n\nprint(student_name, age, gpa, is_registered)',
                challenge: "What data type stores whole numbers like 20?",
                answer: "int"
            },
            {
                title: "3. User Input & Output",
                text: "Use input() to take keyboard input from the user and format strings with f-strings.",
                code: 'name = input("Enter your name: ")\nprint(f"Hello, {name}! Good luck with your studies.")',
                challenge: "Which built-in function accepts user keyboard input in Python?",
                answer: "input"
            },
            {
                title: "4. Arithmetic Operators",
                text: "Operators allow mathematical calculations: + (add), - (subtract), * (multiply), / (divide), % (modulus).",
                code: 'a = 15\nb = 4\nprint("Addition:", a + b)\nprint("Multiplication:", a * b)\nprint("Remainder (modulus):", a % b)',
                challenge: "Which symbol is used for multiplication in Python?",
                answer: "*"
            },
            {
                title: "5. If-Else Decision Making",
                text: "If-else statements let a program choose different actions based on a condition.",
                code: 'marks = 75\n\nif marks >= 40:\n    print("Exam Passed! Congratulations.")\nelse:\n    print("Needs improvement. Try again.")',
                challenge: "Which keyword checks an alternative condition in Python if the first is false?",
                answer: "elif"
            },
            {
                title: "6. Loops (for & while)",
                text: "Loops repeat a block of code multiple times. Use for loops to count through a range.",
                code: 'for i in range(1, 6):\n    print("Iteration number:", i)',
                challenge: "Which keyword is used to iterate over a sequence in Python?",
                answer: "for"
            },
            {
                title: "7. Functions",
                text: "Functions are reusable blocks of code declared with def that execute when called.",
                code: 'def calculate_total(subject1, subject2):\n    return subject1 + subject2\n\ntotal = calculate_total(45, 48)\nprint("Total Marks:", total)',
                challenge: "Which keyword defines a function in Python?",
                answer: "def"
            },
            {
                title: "8. Lists & Dictionaries",
                text: "Lists store ordered sequences of items, while dictionaries store key-value pairs for fast data lookups.",
                code: 'fruits = ["Apple", "Mango", "Banana"]\nfruits.append("Orange")\n\nstudent = {\n    "name": "Akash",\n    "course": "B.Sc IT",\n    "year": 3\n}\n\nprint("Fruits list:", fruits)\nprint(f"Student: {student[\'name\']} | Course: {student[\'course\']}")',
                challenge: "Which dictionary method returns all the keys stored in a dictionary?",
                answer: "keys"
            }
        ]
    },

    java: {
        name: "Java",
        icon: "☕",
        category: "core",
        desc: "Core Java programming: classes, methods, variables, and loops.",
        chapters: [
            {
                title: "1. Java Class & Main Method",
                text: "Every Java program must have a class and a main method where execution begins.",
                code: 'class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java World!");\n    }\n}',
                challenge: "What is the name of the starting method in a Java application?",
                answer: "main"
            },
            {
                title: "2. Variables & Data Types",
                text: "Java is statically typed. Variables must be declared with their type (int, double, String, boolean).",
                code: 'class Main {\n    public static void main(String[] args) {\n        int rollNo = 101;\n        double marks = 85.5;\n        String name = "Akash";\n        System.out.println(name + " | Roll: " + rollNo + " | Marks: " + marks);\n    }\n}',
                challenge: "Which keyword declares a whole number variable in Java?",
                answer: "int"
            },
            {
                title: "3. User Input using Scanner",
                text: "The Scanner class from java.util is used to read input from the keyboard.",
                code: 'import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print("Enter your name: ");\n        String name = sc.nextLine();\n        System.out.println("Hello, " + name);\n    }\n}',
                challenge: "Which class is commonly used for user input in Java?",
                answer: "Scanner"
            },
            {
                title: "4. Arithmetic Operators",
                text: "Perform math operations using +, -, *, /, and % in Java.",
                code: 'class Main {\n    public static void main(String[] args) {\n        int a = 20, b = 6;\n        System.out.println("Sum: " + (a + b));\n        System.out.println("Product: " + (a * b));\n        System.out.println("Remainder: " + (a % b));\n    }\n}',
                challenge: "Which operator gives the remainder of a division?",
                answer: "%"
            },
            {
                title: "5. If-Else Conditions",
                text: "Use if, else if, and else to control code execution based on conditions.",
                code: 'class Main {\n    public static void main(String[] args) {\n        int score = 82;\n        if (score >= 75) {\n            System.out.println("Distinction!");\n        } else {\n            System.out.println("Pass");\n        }\n    }\n}',
                challenge: "Which keyword checks a condition in Java?",
                answer: "if"
            },
            {
                title: "6. For & While Loops",
                text: "Loops repeat statements as long as a condition holds true.",
                code: 'class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println("Count: " + i);\n        }\n    }\n}',
                challenge: "Which loop is used when the number of iterations is known?",
                answer: "for"
            },
            {
                title: "7. Methods",
                text: "Methods are functions inside a class that perform specific actions and can return values.",
                code: 'class Main {\n    static int add(int x, int y) {\n        return x + y;\n    }\n    public static void main(String[] args) {\n        int result = add(10, 20);\n        System.out.println("Result: " + result);\n    }\n}',
                challenge: "What do we call a reusable function inside a Java class?",
                answer: "method"
            },
            {
                title: "8. Arrays & ArrayList",
                text: "Arrays hold fixed-size elements, while ArrayList from java.util dynamically resizes as items are added.",
                code: 'import java.util.ArrayList;\n\nclass Main {\n    public static void main(String[] args) {\n        ArrayList<String> subjects = new ArrayList<>();\n        subjects.add("Database Systems");\n        subjects.add("Java Programming");\n        subjects.add("Web Technology");\n\n        System.out.println("Enrolled Subjects: " + subjects.size());\n        for (String sub : subjects) {\n            System.out.println("- " + sub);\n        }\n    }\n}',
                challenge: "Which method adds a new element to an ArrayList in Java?",
                answer: "add"
            }
        ]
    },

    c: {
        name: "C",
        icon: "🔵",
        category: "core",
        desc: "Master programming fundamentals, memory, pointers, and functions with C.",
        chapters: [
            {
                title: "1. C Structure & printf()",
                text: "A C program includes standard headers like <stdio.h> and starts inside the main() function.",
                code: '#include <stdio.h>\n\nint main() {\n    printf("Hello from C programming!\\n");\n    return 0;\n}',
                challenge: "Which function prints text to the screen in C?",
                answer: "printf"
            },
            {
                title: "2. Variables & Format Specifiers",
                text: "In C, format specifiers like %d (int), %f (float), and %c (char) format output.",
                code: '#include <stdio.h>\n\nint main() {\n    int roll = 101;\n    float score = 88.5;\n    printf("Roll: %d, Score: %.1f\\n", roll, score);\n    return 0;\n}',
                challenge: "What format specifier is used for integers in printf?",
                answer: "%d"
            },
            {
                title: "3. Input using scanf()",
                text: "The scanf() function reads input from the user using memory address (&variable).",
                code: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    printf("You entered: %d\\n", num);\n    return 0;\n}',
                challenge: "What symbol gives the address-of a variable in scanf?",
                answer: "&"
            },
            {
                title: "4. If-Else Decision Making",
                text: "Test expressions to run conditional statements in C.",
                code: '#include <stdio.h>\n\nint main() {\n    int age = 19;\n    if (age >= 18) {\n        printf("Eligible to vote.\\n");\n    } else {\n        printf("Not eligible.\\n");\n    }\n    return 0;\n}',
                challenge: "What value in C represents boolean false in conditional checks?",
                answer: "0"
            },
            {
                title: "5. Loops (for, while)",
                text: "Iterate over code using for and while loops with loop control variables.",
                code: '#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        printf("Count: %d\\n", i);\n    }\n    return 0;\n}',
                challenge: "What operator increments a variable by 1 in C?",
                answer: "++"
            },
            {
                title: "6. Functions",
                text: "Modularize your C code with reusable functions.",
                code: '#include <stdio.h>\n\nint multiply(int x, int y) {\n    return x * y;\n}\n\nint main() {\n    int result = multiply(6, 7);\n    printf("Result: %d\\n", result);\n    return 0;\n}',
                challenge: "What return type means a function returns no value in C?",
                answer: "void"
            },
            {
                title: "7. Arrays",
                text: "An array stores a collection of elements of the same type at contiguous memory locations.",
                code: '#include <stdio.h>\n\nint main() {\n    int scores[3] = {85, 90, 78};\n    printf("First score: %d\\n", scores[0]);\n    return 0;\n}',
                challenge: "What is the index of the first element in a C array?",
                answer: "0"
            },
            {
                title: "8. Pointers & Memory Addresses",
                text: "A pointer is a variable that stores the memory address of another variable using the * and & operators.",
                code: '#include <stdio.h>\n\nint main() {\n    int score = 95;\n    int *ptr = &score;\n\n    printf("Score value: %d\\n", score);\n    printf("Pointer address: %p\\n", (void*)ptr);\n    printf("Value via pointer: %d\\n", *ptr);\n    return 0;\n}',
                challenge: "Which dereference operator accesses the value at a pointer address in C?",
                answer: "*"
            }
        ]
    },

    cpp: {
        name: "C++",
        icon: "⚡",
        category: "core",
        desc: "Object-oriented programming, classes, cin/cout, and data structures with C++.",
        chapters: [
            {
                title: "1. C++ Structure & cout",
                text: "C++ uses cout and the << stream insertion operator from <iostream> for output.",
                code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Welcome to C++ Programming!" << endl;\n    return 0;\n}',
                challenge: "What object is used for standard console output in C++?",
                answer: "cout"
            },
            {
                title: "2. Input using cin",
                text: "Read console input with cin and the >> stream extraction operator.",
                code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age;\n    cout << "Enter your age: ";\n    cin >> age;\n    cout << "Next year you will be: " << (age + 1) << endl;\n    return 0;\n}',
                challenge: "What object is used for standard console input in C++?",
                answer: "cin"
            },
            {
                title: "3. Calculations & Operators",
                text: "Perform math, relational comparisons, and logical checks in C++.",
                code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 25, b = 4;\n    cout << "Product: " << (a * b) << endl;\n    cout << "Remainder: " << (a % b) << endl;\n    return 0;\n}',
                challenge: "Which header file is required to use cin and cout?",
                answer: "iostream"
            },
            {
                title: "4. If-Else Decisions",
                text: "Check conditions using boolean expressions to execute branching paths.",
                code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 78;\n    if (score >= 70) {\n        cout << "Grade: A" << endl;\n    } else {\n        cout << "Grade: B" << endl;\n    }\n    return 0;\n}',
                challenge: "What boolean type stores true or false in C++?",
                answer: "bool"
            },
            {
                title: "5. Loops in C++",
                text: "Count and repeat statements with for, while, and do-while loops.",
                code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        cout << "Step: " << i << endl;\n    }\n    return 0;\n}',
                challenge: "Which loop runs at least once even if the condition is false initially?",
                answer: "do-while"
            },
            {
                title: "6. Functions",
                text: "Encapsulate logic into reusable functions with parameters and return values.",
                code: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    cout << "Total: " << add(15, 30) << endl;\n    return 0;\n}',
                challenge: "Which statement sends a value back from a function to its caller?",
                answer: "return"
            },
            {
                title: "7. Classes & Objects",
                text: "Create custom user-defined data types using classes with methods and attributes.",
                code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int roll;\n    void display() {\n        cout << "Name: " << name << " | Roll: " << roll << endl;\n    }\n};\n\nint main() {\n    Student s1;\n    s1.name = "Akash";\n    s1.roll = 101;\n    s1.display();\n    return 0;\n}',
                challenge: "What keyword specifies that class members can be accessed outside the class?",
                answer: "public"
            },
            {
                title: "8. Constructors & Encapsulation",
                text: "A constructor is a special member function that initializes class objects automatically upon creation.",
                code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\nprivate:\n    int id;\npublic:\n    string name;\n\n    Student(int sId, string sName) {\n        id = sId;\n        name = sName;\n    }\n\n    void show() {\n        cout << "Student ID: " << id << " | Name: " << name << endl;\n    }\n};\n\nint main() {\n    Student s(101, "Akash");\n    s.show();\n    return 0;\n}',
                challenge: "What special member function has the same name as its class and runs on creation?",
                answer: "constructor"
            }
        ]
    },

    csharp: {
        name: "C# (.NET)",
        icon: "🔷",
        category: "core",
        desc: "Build modern object-oriented software with Microsoft C#, .NET classes, and methods.",
        chapters: [
            {
                title: "1. C# Class & Console.WriteLine",
                text: "C# programs are structured into classes and namespaces, starting inside static void Main().",
                code: 'using System;\n\npublic class Program {\n    public static void Main() {\n        Console.WriteLine("Hello from C# and .NET!");\n        Console.WriteLine("Welcome to software application development.");\n    }\n}',
                challenge: "What method writes a line of text to the console in C#?",
                answer: "WriteLine"
            },
            {
                title: "2. Variables & Data Types",
                text: "C# supports strongly-typed variables: int, double, string, bool, and implicit var.",
                code: 'using System;\n\npublic class Program {\n    public static void Main() {\n        string student = "Akash";\n        int roll = 101;\n        double gpa = 8.8;\n        bool enrolled = true;\n        Console.WriteLine($"{student} | Roll: {roll} | GPA: {gpa} | Active: {enrolled}");\n    }\n}',
                challenge: "What keyword declares an implicitly typed local variable in C#?",
                answer: "var"
            },
            {
                title: "3. Operators & Calculations",
                text: "Calculate values using arithmetic (+, -, *, /, %) and format with string interpolation ($).",
                code: 'using System;\n\npublic class Program {\n    public static void Main() {\n        int x = 45, y = 10;\n        Console.WriteLine($"Sum: {x + y}");\n        Console.WriteLine($"Product: {x * y}");\n        Console.WriteLine($"Remainder: {x % y}");\n    }\n}',
                challenge: "What symbol prefixes an interpolated string in C#?",
                answer: "$"
            },
            {
                title: "4. If-Else Decision Making",
                text: "Direct program flow using boolean conditional expressions in C#.",
                code: 'using System;\n\npublic class Program {\n    public static void Main() {\n        int marks = 82;\n        if (marks >= 75) {\n            Console.WriteLine("Grade: Distinction!");\n        } else {\n            Console.WriteLine("Grade: Pass");\n        }\n    }\n}',
                challenge: "Which statement handles multi-way branch selection in C#?",
                answer: "switch"
            },
            {
                title: "5. Loops in C#",
                text: "Repeat statements using for, while, and foreach loops.",
                code: 'using System;\n\npublic class Program {\n    public static void Main() {\n        for (int i = 1; i <= 5; i++) {\n            Console.WriteLine($"Count: {i}");\n        }\n    }\n}',
                challenge: "Which loop easily iterates through collections without an index counter?",
                answer: "foreach"
            },
            {
                title: "6. Methods & Functions",
                text: "Define reusable methods with parameter types and explicit return types.",
                code: 'using System;\n\npublic class Program {\n    public static int Multiply(int a, int b) {\n        return a * b;\n    }\n    public static void Main() {\n        int result = Multiply(8, 7);\n        Console.WriteLine($"Result: {result}");\n    }\n}',
                challenge: "What return type indicates a method returns no data?",
                answer: "void"
            },
            {
                title: "7. Classes & Objects",
                text: "Encapsulate fields and properties in C# classes to create modular software components.",
                code: 'using System;\n\npublic class Student {\n    public string Name;\n    public int Roll;\n    public void Display() {\n        Console.WriteLine($"Student: {Name}, Roll: {Roll}");\n    }\n}\n\npublic class Program {\n    public static void Main() {\n        Student s = new Student();\n        s.Name = "Akash";\n        s.Roll = 101;\n        s.Display();\n    }\n}',
                challenge: "What keyword instantiates a new object in C#?",
                answer: "new"
            },
            {
                title: "8. Lists & LINQ Basics",
                text: "The List<T> class provides dynamically sized collections, and foreach allows easy iteration.",
                code: 'using System;\nusing System.Collections.Generic;\n\npublic class Program {\n    public static void Main() {\n        List<string> modules = new List<string> { "Variables", "OOP", "LINQ" };\n        modules.Add("Async Programming");\n\n        Console.WriteLine($"Total Modules: {modules.Count}");\n        foreach (string m in modules) {\n            Console.WriteLine($"* {m}");\n        }\n    }\n}',
                challenge: "Which property gets the total count of elements in a C# List?",
                answer: "Count"
            }
        ]
    },

    javascript: {
        name: "JavaScript",
        icon: "💛",
        category: "web",
        desc: "Build interactive web applications with JavaScript variables, functions, and arrays.",
        chapters: [
            {
                title: "1. Console & Variables",
                text: "Use console.log() to print data and let/const to store values.",
                code: 'console.log("Hello from JavaScript!");\nconst platform = "CodeQuest";\nlet students = 150;\nconsole.log(platform, "Active students:", students);',
                challenge: "Which method logs messages to the browser console in JavaScript?",
                answer: "console.log"
            },
            {
                title: "2. Data Types & Operators",
                text: "JavaScript supports numbers, strings, booleans, objects, and arrays.",
                code: 'let name = "Alex";\nlet age = 21;\nlet isEnrolled = true;\nconsole.log(typeof name, typeof age, typeof isEnrolled);',
                challenge: "Which operator checks both value and data type equality in JavaScript?",
                answer: "==="
            },
            {
                title: "3. If-Else Conditions",
                text: "Make decisions in code using if, else if, and else blocks.",
                code: 'let score = 85;\nif (score >= 75) {\n    console.log("Grade: Distinction");\n} else {\n    console.log("Grade: Pass");\n}',
                challenge: "Which keyword is used for conditional checks?",
                answer: "if"
            },
            {
                title: "4. For Loops",
                text: "Iterate through numbers or arrays using for loops.",
                code: 'for (let i = 1; i <= 5; i++) {\n    console.log("Count:", i);\n}',
                challenge: "Which keyword declares a variable with block scope that can be reassigned?",
                answer: "let"
            },
            {
                title: "5. Functions & Arrow Syntax",
                text: "Create reusable blocks of logic using traditional or modern arrow functions.",
                code: 'const greet = (student) => {\n    return "Welcome, " + student + "!";\n};\n\nconsole.log(greet("Akash"));',
                challenge: "What symbol creates an arrow function in ES6?",
                answer: "=>"
            },
            {
                title: "6. Arrays & Array Methods",
                text: "Store lists in arrays and iterate over them easily using methods like forEach.",
                code: 'let languages = ["Python", "Java", "C++", "JavaScript"];\nlanguages.push("C#");\n\nconsole.log("Total Languages:", languages.length);\nconsole.log("First Language:", languages[0]);',
                challenge: "Which array method adds an item to the end of an array?",
                answer: "push"
            },
            {
                title: "7. Objects & Key-Value Pairs",
                text: "Objects store related properties and methods as key-value pairs.",
                code: 'let student = {\n    name: "Akash",\n    course: "Coding Awareness",\n    completed: true\n};\n\nconsole.log(student.name, "Status:", student.completed);',
                challenge: "Which brackets are used to declare an object in JavaScript?",
                answer: "{}"
            },
            {
                title: "8. Array Methods (map & filter)",
                text: "Modern JavaScript uses functional array methods like map() to transform data and filter() to extract matching items.",
                code: 'const scores = [65, 82, 45, 91, 74, 58];\n\nconst passedScores = scores.filter(score => score >= 60);\nconst formattedGrades = passedScores.map(score => `Score: ${score}/100`);\n\nconsole.log("All Passed Scores:", passedScores);\nconsole.log("Formatted Grades:", formattedGrades);',
                challenge: "Which array method creates a new array with elements that pass a test condition?",
                answer: "filter"
            }
        ]
    },

    html: {
        name: "HTML & CSS",
        icon: "🌐",
        category: "web",
        desc: "Learn HTML5 web tags, styles, layouts, buttons, and responsive web design.",
        chapters: [
            {
                title: "1. HTML5 Page Structure",
                text: "Every webpage starts with <!DOCTYPE html>, followed by <html>, <head>, and <body> tags.",
                code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to Web Design</h1>\n  <p>HTML creates the structure of every website on the Internet.</p>\n</body>\n</html>',
                challenge: "What tag defines the largest primary heading in HTML?",
                answer: "h1"
            },
            {
                title: "2. Links & Images",
                text: "Hyperlinks connect pages using <a> tags with href attributes, and <img> embeds graphics.",
                code: '<a href="https://codequest.edu" target="_blank">Visit School Coding Portal</a>\n<br><br>\n<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Laptop Code" style="border-radius: 8px; width: 280px;">',
                challenge: "Which attribute specifies the destination URL of a link in an <a> tag?",
                answer: "href"
            },
            {
                title: "3. Lists & Data Tables",
                text: "Use <ul> for bulleted lists, <ol> for numbered lists, and <table> for structured data.",
                code: '<h3>Core Subjects:</h3>\n<ul>\n  <li>Python Programming</li>\n  <li>Web Design & CSS</li>\n  <li>Database Management (SQL)</li>\n</ul>',
                challenge: "Which tag defines an unordered (bulleted) list in HTML?",
                answer: "ul"
            },
            {
                title: "4. Form Inputs & Buttons",
                text: "Collect user submissions using forms, input fields, labels, and action buttons.",
                code: '<form style="padding: 10px; background: #f1f5f9; border-radius: 6px;">\n  <label>Student Name:</label><br>\n  <input type="text" placeholder="Enter full name" style="padding: 6px; margin: 6px 0;"><br>\n  <button type="button" style="background: #4361ee; color: white; padding: 6px 12px; border: none; border-radius: 4px;">Submit</button>\n</form>',
                challenge: "Which tag creates a clickable action button in HTML?",
                answer: "button"
            },
            {
                title: "5. CSS Colors & Typography",
                text: "CSS styles HTML elements. Use color, background-color, and font-family to design pages.",
                code: '<style>\n  .card {\n    background: #eef2ff;\n    color: #312e81;\n    padding: 16px;\n    border-radius: 8px;\n    font-family: sans-serif;\n  }\n</style>\n\n<div class="card">\n  <h2>Styled Web Component</h2>\n  <p>CSS turns plain HTML into beautiful digital experiences.</p>\n</div>',
                challenge: "Which CSS property specifies the text color of an element?",
                answer: "color"
            },
            {
                title: "6. CSS Box Model (Padding, Margin, Border)",
                text: "The box model consists of content, padding (inner space), border, and margin (outer space).",
                code: '<style>\n  .box {\n    width: 220px;\n    padding: 18px;\n    border: 2px solid #2ec4b6;\n    border-radius: 8px;\n    margin: 10px auto;\n    text-align: center;\n    background: #ffffff;\n  }\n</style>\n\n<div class="box">\n  <strong>Box Model</strong>\n  <p style="margin-top: 6px;">Padding + Border + Margin</p>\n</div>',
                challenge: "Which CSS property adds spacing inside an element's border?",
                answer: "padding"
            },
            {
                title: "7. Flexbox Layouts",
                text: "Flexbox aligns and distributes elements easily with display: flex and justify-content.",
                code: '<style>\n  .nav {\n    display: flex;\n    gap: 12px;\n    background: #1e293b;\n    padding: 12px;\n    border-radius: 6px;\n  }\n  .nav a {\n    color: #ffffff;\n    text-decoration: none;\n    font-family: sans-serif;\n  }\n</style>\n\n<div class="nav">\n  <a href="#">🏠 Home</a>\n  <a href="#">📚 Courses</a>\n  <a href="#">💻 Lab</a>\n</div>',
                challenge: "What display value enables a CSS flex container?",
                answer: "flex"
            },
            {
                title: "8. CSS Grid & Card Layouts",
                text: "CSS Grid enables two-dimensional layouts with rows and columns, ideal for responsive modern cards.",
                code: '<style>\n  .grid-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n    font-family: sans-serif;\n  }\n  .card-item {\n    background: #e0f2fe;\n    color: #0369a1;\n    padding: 14px;\n    border-radius: 8px;\n    border: 1px solid #bae6fd;\n    text-align: center;\n  }\n</style>\n\n<div class="grid-container">\n  <div class="card-item"><strong>Track 1</strong><br>Python</div>\n  <div class="card-item"><strong>Track 2</strong><br>Web Design</div>\n</div>',
                challenge: "What CSS display property value turns an element into a grid container?",
                answer: "grid"
            }
        ]
    },

    sql: {
        name: "SQL Database",
        icon: "🗄️",
        category: "web",
        desc: "Query relational databases, retrieve records, filter criteria, and sort tables.",
        chapters: [
            {
                title: "1. Relational Databases & SELECT",
                text: "SQL retrieves records from database tables using the SELECT statement.",
                code: 'SELECT * FROM students;',
                challenge: "Which SQL keyword is used to retrieve data from a database?",
                answer: "SELECT"
            },
            {
                title: "2. Selecting Specific Columns",
                text: "Instead of retrieving all columns with *, specify only the columns you need.",
                code: 'SELECT roll_no, name, marks FROM students;',
                challenge: "Which wildcard symbol selects all columns in a SQL query?",
                answer: "*"
            },
            {
                title: "3. Filtering with WHERE",
                text: "The WHERE clause filters records based on conditions (=, >, <, >=, <=, !=).",
                code: 'SELECT roll_no, name, branch, marks\nFROM students\nWHERE marks >= 80;',
                challenge: "Which SQL clause is used to filter records based on a condition?",
                answer: "WHERE"
            },
            {
                title: "4. Text & Branch Filtering",
                text: "Filter text values using string literals in single quotes with WHERE.",
                code: "SELECT name, branch, city\nFROM students\nWHERE branch = 'IT';",
                challenge: "Which keyword connects multiple conditions in a WHERE clause?",
                answer: "AND"
            },
            {
                title: "5. Sorting with ORDER BY & LIMIT",
                text: "Sort rows using ORDER BY in ascending (ASC) or descending (DESC) order, and limit rows with LIMIT.",
                code: 'SELECT name, marks, city\nFROM students\nORDER BY marks DESC\nLIMIT 3;',
                challenge: "Which keyword sorts query results in descending order?",
                answer: "DESC"
            },
            {
                title: "6. Aggregate Functions (COUNT, AVG, MAX)",
                text: "Perform summary calculations on column values using COUNT(), AVG(), MAX(), and MIN().",
                code: 'SELECT COUNT(*) AS total_students, AVG(marks) AS average_marks, MAX(marks) AS top_score\nFROM students;',
                challenge: "Which SQL aggregate function calculates the average value of a numeric column?",
                answer: "AVG"
            },
            {
                title: "7. Inserting New Records",
                text: "Add new rows to a table using the INSERT INTO statement followed by VALUES.",
                code: "INSERT INTO students (roll_no, name, branch, marks, city)\nVALUES (106, 'Karan', 'IT', 91, 'Thane');\n\nSELECT * FROM students;",
                challenge: "Which SQL statement is used to add new records into a table?",
                answer: "INSERT"
            },
            {
                title: "8. Updating & Deleting Records",
                text: "Modify existing rows using UPDATE and SET, and safely specify target rows using WHERE.",
                code: 'UPDATE students\nSET marks = 95\nWHERE roll_no = 101;\n\nSELECT roll_no, name, marks FROM students WHERE roll_no = 101;',
                challenge: "Which SQL clause specifies which row to modify in an UPDATE statement?",
                answer: "WHERE"
            }
        ]
    },

    php: {
        name: "PHP",
        icon: "🐘",
        category: "web",
        desc: "Learn server-side web scripting, variables, associative arrays, functions, and forms with PHP.",
        chapters: [
            {
                title: "1. PHP Structure & echo",
                text: "PHP scripts are executed on the server. Code blocks start with <?php and print with echo.",
                code: '<?php\necho "Hello from PHP Server Scripting!";\n?>',
                challenge: "What tag opens a PHP code block?",
                answer: "<?php"
            },
            {
                title: "2. Variables & Data Types",
                text: "In PHP, every variable name starts with a dollar sign ($) followed by the variable name.",
                code: '<?php\n$student_name = "Akash";\n$roll_no = 101;\n$marks = 88.5;\necho "Student: " . $student_name . " | Roll: " . $roll_no . " | Marks: " . $marks;\n?>',
                challenge: "What symbol must every variable name start with in PHP?",
                answer: "$"
            },
            {
                title: "3. String Concatenation & Math",
                text: "Strings in PHP are concatenated using the dot (.) operator rather than plus (+).",
                code: '<?php\n$val1 = 25;\n$val2 = 10;\necho "Addition: " . ($val1 + $val2) . "\\n";\necho "Multiplication: " . ($val1 * $val2);\n?>',
                challenge: "Which character is used for string concatenation in PHP?",
                answer: "."
            },
            {
                title: "4. If-Else Decisions",
                text: "Branch logic using if, elseif, and else conditional statements.",
                code: '<?php\n$score = 82;\nif ($score >= 75) {\n    echo "Result: Distinction!";\n} else {\n    echo "Result: Passed";\n}\n?>',
                challenge: "Which keyword checks an alternative condition in PHP?",
                answer: "elseif"
            },
            {
                title: "5. Loops in PHP",
                text: "Iterate using for, while, and foreach loops.",
                code: '<?php\nfor ($i = 1; $i <= 5; $i++) {\n    echo "Count: " . $i . "\\n";\n}\n?>',
                challenge: "Which loop is designed specifically for iterating over arrays in PHP?",
                answer: "foreach"
            },
            {
                title: "6. Reusable Functions",
                text: "Create modular functions declared with the function keyword.",
                code: '<?php\nfunction calculateGrade($marks) {\n    return $marks >= 40 ? "Passed" : "Needs Improvement";\n}\necho "Status: " . calculateGrade(85);\n?>',
                challenge: "Which keyword is used to declare a function in PHP?",
                answer: "function"
            },
            {
                title: "7. Associative Arrays",
                text: "Associative arrays store key-value pairs using the => double arrow operator.",
                code: '<?php\n$student = [\n    "name" => "Akash",\n    "branch" => "IT",\n    "year" => "Final"\n];\necho "Name: " . $student["name"] . " | Branch: " . $student["branch"];\n?>',
                challenge: "What operator assigns values to keys in PHP associative arrays?",
                answer: "=>"
            },
            {
                title: "8. Superglobals & Form Data",
                text: "PHP accesses form and session data via predefined superglobal arrays like $_POST and $_GET.",
                code: '<?php\n$username = "akash_dev";\n$role = "Student";\n$status = "Active";\n\necho "Username: " . $username . "\\n";\necho "Assigned Role: " . $role . "\\n";\necho "Session Status: " . $status;\n?>',
                challenge: "Which superglobal array collects form data sent with method=\'POST\' in PHP?",
                answer: "$_POST"
            }
        ]
    }
};

// ---------------------------------------------------------
// 2. KNOWLEDGE QUIZZES (10 Questions per Course)
// ---------------------------------------------------------
const quizzes = {
    python: [
        { q: "1. Which keyword defines a function in Python?", opts: ["def", "function", "fun", "method"], ans: 0 },
        { q: "2. What is the output of print(2 ** 3)?", opts: ["6", "8", "9", "5"], ans: 1 },
        { q: "3. Which collection type is immutable in Python?", opts: ["list", "tuple", "dict", "set"], ans: 1 },
        { q: "4. How do you start a single-line comment in Python?", opts: ["//", "/*", "#", "--"], ans: 2 },
        { q: "5. Which built-in function gets the length of a string or list?", opts: ["size()", "count()", "len()", "length()"], ans: 2 },
        { q: "6. What is the correct file extension for Python files?", opts: [".pyt", ".pt", ".py", ".p"], ans: 2 },
        { q: "7. Which keyword is used to handle exceptions in Python?", opts: ["catch", "try", "except", "error"], ans: 1 },
        { q: "8. What does range(1, 5) return?", opts: ["1 to 4", "1 to 5", "0 to 4", "2 to 5"], ans: 0 },
        { q: "9. Which operator is used for integer floor division?", opts: ["/", "//", "%", "^"], ans: 1 },
        { q: "10. Which statement exits a loop prematurely?", opts: ["exit", "stop", "break", "return"], ans: 2 }
    ],

    java: [
        { q: "1. Where does execution start in a Java program?", opts: ["start()", "init()", "main()", "run()"], ans: 2 },
        { q: "2. Which data type is used for whole numbers?", opts: ["int", "double", "float", "char"], ans: 0 },
        { q: "3. What keyword creates a new object instance in Java?", opts: ["create", "new", "make", "instantiate"], ans: 1 },
        { q: "4. Which package contains the Scanner class?", opts: ["java.io", "java.util", "java.lang", "java.net"], ans: 1 },
        { q: "5. What symbol ends most statements in Java?", opts: [":", ".", ";", ","], ans: 2 },
        { q: "6. Which keyword prevents a variable or method from being modified?", opts: ["static", "const", "final", "sealed"], ans: 2 },
        { q: "7. Which access modifier makes a member accessible only within its own class?", opts: ["public", "protected", "private", "default"], ans: 2 },
        { q: "8. What is the default value of a boolean variable in Java?", opts: ["true", "false", "0", "null"], ans: 1 },
        { q: "9. Which keyword is used to inherit a class in Java?", opts: ["implements", "inherits", "extends", "import"], ans: 2 },
        { q: "10. What tool compiles Java source code into bytecode?", opts: ["java", "javac", "javadoc", "jvm"], ans: 1 }
    ],

    c: [
        { q: "1. Which function is used to print formatted output in C?", opts: ["cout", "printf", "print", "write"], ans: 1 },
        { q: "2. What format specifier is used for integers in C?", opts: ["%s", "%f", "%d", "%c"], ans: 2 },
        { q: "3. Which symbol represents the memory address operator?", opts: ["*", "&", "#", "@"], ans: 1 },
        { q: "4. What is the index of the first array element in C?", opts: ["1", "0", "-1", "none"], ans: 1 },
        { q: "5. Which header file contains printf and scanf?", opts: ["<stdlib.h>", "<conio.h>", "<stdio.h>", "<math.h>"], ans: 2 },
        { q: "6. What operator accesses the value at a pointer address?", opts: ["&", "*", "->", "."], ans: 1 },
        { q: "7. What does the sizeof operator return in C?", opts: ["Number of elements", "Memory size in bytes", "Length of string", "Data type"], ans: 1 },
        { q: "8. Which escape sequence produces a new line in C?", opts: ["\\t", "\\r", "\\n", "\\0"], ans: 2 },
        { q: "9. What value does main() return on successful execution?", opts: ["-1", "1", "0", "null"], ans: 2 },
        { q: "10. Which statement skips to the next iteration of a loop?", opts: ["break", "continue", "skip", "pass"], ans: 1 }
    ],

    cpp: [
        { q: "1. Which stream object is used for output in C++?", opts: ["cout", "cin", "printf", "system.out"], ans: 0 },
        { q: "2. Which operator is used with cout for printing?", opts: [">>", "<<", "==", "->"], ans: 1 },
        { q: "3. What keyword specifies private or public access in classes?", opts: ["access", "scope", "public", "secure"], ans: 2 },
        { q: "4. Which header file provides cin and cout?", opts: ["<stdio.h>", "<iostream>", "<stream.h>", "<string>"], ans: 1 },
        { q: "5. Which keyword declares a variable that cannot be modified?", opts: ["final", "const", "static", "fixed"], ans: 1 },
        { q: "6. What method is automatically called when an object is created?", opts: ["Destructor", "Initializer", "Constructor", "Builder"], ans: 2 },
        { q: "7. Which symbol represents the scope resolution operator?", opts: ["::", "->", ".", ":"], ans: 0 },
        { q: "8. Which keyword dynamically allocates memory in C++?", opts: ["malloc", "alloc", "new", "create"], ans: 2 },
        { q: "9. What allows functions with same name but different parameters?", opts: ["Overriding", "Overloading", "Encapsulation", "Inheritance"], ans: 1 },
        { q: "10. What symbol precedes the name of a class destructor?", opts: ["#", "!", "~", "$"], ans: 2 }
    ],

    csharp: [
        { q: "1. What is the standard entry point method in a C# application?", opts: ["start()", "Init()", "Main()", "Run()"], ans: 2 },
        { q: "2. Which namespace contains the Console class in C#?", opts: ["System", "System.IO", "Microsoft", "System.Console"], ans: 0 },
        { q: "3. What method prints a line of text to the console in C#?", opts: ["Console.Print()", "Console.Write()", "Console.WriteLine()", "PrintLine()"], ans: 2 },
        { q: "4. Which keyword creates an instance of a class in C#?", opts: ["create", "new", "make", "instantiate"], ans: 1 },
        { q: "5. What character prefixes an interpolated string in C#?", opts: ["@", "$", "#", "%"], ans: 1 },
        { q: "6. Which keyword declares an implicitly typed local variable?", opts: ["auto", "var", "let", "dynamic"], ans: 1 },
        { q: "7. Which access modifier restricts access to only the containing class?", opts: ["internal", "protected", "private", "public"], ans: 2 },
        { q: "8. Which symbol or keyword is used to inherit from a base class in C#?", opts: ["extends", "implements", ":", "inherits"], ans: 2 },
        { q: "9. What does CLR stand for in the .NET Framework?", opts: ["Common Language Runtime", "Core Logic Registry", "Central Language Runner", "Compiled Language Routine"], ans: 0 },
        { q: "10. Which statement ensures proper disposal of disposable resources?", opts: ["try-finally", "using", "dispose", "clean"], ans: 1 }
    ],

    javascript: [
        { q: "1. Which method outputs messages to the web console?", opts: ["console.log()", "print()", "echo()", "alert()"], ans: 0 },
        { q: "2. Which keyword declares a block-scoped reassignable variable?", opts: ["var", "let", "const", "dim"], ans: 1 },
        { q: "3. What is the type of NaN in JavaScript?", opts: ["undefined", "string", "number", "null"], ans: 2 },
        { q: "4. Which symbol is used for strict equality (checks type and value)?", opts: ["==", "=", "===", "!="], ans: 2 },
        { q: "5. Which bracket type is used to declare arrays?", opts: ["()", "{}", "[]", "<>"], ans: 2 },
        { q: "6. What does DOM stand for in web development?", opts: ["Document Object Model", "Data Object Mode", "Digital Ordinance Method", "Desktop Output Management"], ans: 0 },
        { q: "7. Which method converts a JSON string into a JavaScript object?", opts: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.toObj()"], ans: 1 },
        { q: "8. Which array method adds an item to the end of an array?", opts: ["push()", "pop()", "shift()", "unshift()"], ans: 0 },
        { q: "9. What keyword creates a constant variable that cannot be reassigned?", opts: ["static", "let", "const", "fixed"], ans: 2 },
        { q: "10. Which function executes code after a specified delay in milliseconds?", opts: ["wait()", "sleep()", "setTimeout()", "delay()"], ans: 2 }
    ],

    html: [
        { q: "1. Which HTML tag creates a hyperlink?", opts: ["<link>", "<a>", "<href>", "<url>"], ans: 1 },
        { q: "2. Which CSS property adds space inside an element's border?", opts: ["margin", "padding", "border", "spacing"], ans: 1 },
        { q: "3. What does HTML stand for?", opts: ["HyperText Markup Language", "HighText Machine Language", "Hyperlinks Text Language", "Home Tool Markup"], ans: 0 },
        { q: "4. Which tag embeds an image in HTML?", opts: ["<picture>", "<photo>", "<img>", "<src>"], ans: 2 },
        { q: "5. Which CSS property rounds element corners?", opts: ["corner-radius", "border-radius", "box-curve", "round-edge"], ans: 1 },
        { q: "6. What tag is used for the largest primary heading in HTML?", opts: ["<heading>", "<h6>", "<h1>", "<head>"], ans: 2 },
        { q: "7. Which HTML attribute is used to provide alternate text for images?", opts: ["title", "alt", "desc", "src"], ans: 1 },
        { q: "8. Which CSS display value enables a flexbox container?", opts: ["inline", "block", "flex", "grid-box"], ans: 2 },
        { q: "9. Which HTML tag creates an unordered (bulleted) list?", opts: ["<ol>", "<ul>", "<li>", "<list>"], ans: 1 },
        { q: "10. Which CSS property changes the background color of an element?", opts: ["color", "bgcolor", "background-color", "surface-color"], ans: 2 }
    ],

    sql: [
        { q: "1. Which command retrieves data from a database in SQL?", opts: ["GET", "EXTRACT", "SELECT", "FETCH"], ans: 2 },
        { q: "2. Which clause filters records in SQL?", opts: ["FILTER", "WHERE", "HAVING", "LIMIT"], ans: 1 },
        { q: "3. Which keyword sorts query results in descending order?", opts: ["DOWN", "BOTTOM", "DESC", "REVERSE"], ans: 2 },
        { q: "4. Which aggregate function counts the number of rows?", opts: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"], ans: 1 },
        { q: "5. What does SQL stand for?", opts: ["Structured Query Language", "Simple Question Language", "System Query Logic", "Standard Quick Link"], ans: 0 },
        { q: "6. Which SQL statement is used to add new rows into a table?", opts: ["ADD RECORD", "INSERT INTO", "UPDATE", "CREATE ROW"], ans: 1 },
        { q: "7. Which keyword eliminates duplicate records in a SELECT query?", opts: ["UNIQUE", "DISTINCT", "DIFFERENT", "SEPARATE"], ans: 1 },
        { q: "8. Which SQL statement is used to modify existing records in a table?", opts: ["MODIFY", "CHANGE", "UPDATE", "ALTER"], ans: 2 },
        { q: "9. Which operator is used in a WHERE clause to search for a specified pattern?", opts: ["LIKE", "MATCH", "CONTAINS", "SEARCH"], ans: 0 },
        { q: "10. Which SQL command deletes a table and its entire structure?", opts: ["REMOVE TABLE", "DELETE TABLE", "DROP TABLE", "CLEAR TABLE"], ans: 2 }
    ],

    php: [
        { q: "1. What tag opens a PHP code block?", opts: ["<script>", "<?php", "<&", "<php>"], ans: 1 },
        { q: "2. Which symbol must every PHP variable start with?", opts: ["@", "#", "$", "&"], ans: 2 },
        { q: "3. Which operator is used for string concatenation in PHP?", opts: ["+", ".", "&", "%"], ans: 1 },
        { q: "4. Which function outputs text to the browser in PHP?", opts: ["print_screen()", "echo", "cout", "display()"], ans: 1 },
        { q: "5. What superglobal array in PHP holds form data sent via POST?", opts: ["$_GET", "$_REQUEST", "$_POST", "$_FORM"], ans: 2 },
        { q: "6. What function returns the number of elements in an array in PHP?", opts: ["size()", "count()", "len()", "length()"], ans: 1 },
        { q: "7. Which symbol ends statements in PHP?", opts: [":", ".", ";", ","], ans: 2 },
        { q: "8. What does PHP stand for originally?", opts: ["Personal Home Page", "Private Hypertext Parser", "Public Hosting Protocol", "Programmed HTML Pages"], ans: 0 },
        { q: "9. Which loop is specifically designed to iterate through arrays in PHP?", opts: ["while", "for", "foreach", "loop"], ans: 2 },
        { q: "10. Which function includes and evaluates a specified file in PHP?", opts: ["import", "include", "fetch", "load"], ans: 1 }
    ]
};

// ---------------------------------------------------------
// 3. SYNTAX CHEAT SHEETS
// ---------------------------------------------------------
const cheatSheets = {
    python: "• Variables: x = 10, name = 'Akash'\n• Output: print('Hello')\n• Input: val = input('Enter:')\n• Condition: if x > 5: ... elif ... else:\n• Loop: for i in range(5): ...\n• Function: def add(a, b): return a + b",
    java: "• Class: class Main { public static void main(String[] args) { ... } }\n• Output: System.out.println('Hello');\n• Variables: int age = 20; String name = 'Akash';\n• Loop: for (int i = 0; i < 5; i++) { ... }\n• Condition: if (x > 10) { ... } else { ... }",
    c: "• Include: #include <stdio.h>\n• Main: int main() { return 0; }\n• Print: printf('Hello %d\\n', num);\n• Scan: scanf('%d', &num);\n• Loop: for (int i = 0; i < 5; i++) { ... }",
    cpp: "• Include: #include <iostream> using namespace std;\n• Output: cout << 'Hello' << endl;\n• Input: cin >> variable;\n• Class: class Student { public: string name; };",
    csharp: "• Namespace: using System;\n• Class: public class Program { public static void Main() { ... } }\n• Output: Console.WriteLine($\"Hello {name}\");\n• Variables: int age = 20; string name = \"Akash\"; var x = 5;\n• Loop: for (int i = 0; i < 5; i++) { ... } / foreach (var item in list) { ... }",
    javascript: "• Variables: let x = 10; const PI = 3.14;\n• Output: console.log('Hello');\n• Function: function greet(name) { return 'Hi ' + name; }\n• Arrow: const add = (a, b) => a + b;\n• Array: let list = [1, 2, 3]; list.push(4);",
    html: "• Tags: <h1>Heading</h1>, <p>Paragraph</p>\n• Links: <a href='url'>Link</a>\n• Image: <img src='pic.jpg' alt='desc'>\n• CSS: color: blue; background: #eee; font-size: 16px;\n• Box Model: margin: 10px; padding: 15px; border: 1px solid black;\n• Flexbox: display: flex; justify-content: center; gap: 10px;",
    sql: "• Select All: SELECT * FROM table_name;\n• Filter: SELECT * FROM table WHERE condition;\n• Order: SELECT * FROM table ORDER BY column DESC;\n• Limit: SELECT * FROM table LIMIT 5;\n• Count: SELECT COUNT(*) FROM table;\n• Insert: INSERT INTO table (c1, c2) VALUES (v1, v2);",
    php: "• Open Tag: <?php ... ?>\n• Variables: $name = 'Akash'; $roll = 101;\n• Output: echo 'Hello ' . $name;\n• Arrays: $arr = ['a' => 1, 'b' => 2];\n• Loop: foreach ($arr as $k => $v) { ... }\n• Function: function test($x) { return $x * 2; }"
};

// ---------------------------------------------------------
// 4. APPLICATION STATE
// ---------------------------------------------------------
let currentUser = JSON.parse(localStorage.getItem("cq_user")) || null;
let currentLanguage = "python";
let currentChapterIndex = 0;
let userProgress = JSON.parse(localStorage.getItem("cq_progress")) || {};
let currentAuthMode = "login";
let currentCourseFilter = "all";

// ---------------------------------------------------------
// 5. INTERACTIVE CELEBRATION (CONFETTI EFFECT)
// ---------------------------------------------------------
function triggerConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";

    const pieces = [];
    const colors = ["#4361ee", "#2ec4b6", "#ffb703", "#e63946", "#8338ec", "#3a86ff", "#10b981"];

    for (let i = 0; i < 65; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * (canvas.height / 3),
            size: Math.random() * 8 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: (Math.random() - 0.5) * 4,
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 8
        });
    }

    let animationFrame;
    let opacity = 1;
    const startTime = Date.now();

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const elapsed = Date.now() - startTime;

        if (elapsed > 2000) {
            opacity -= 0.04;
        }

        if (opacity <= 0) {
            cancelAnimationFrame(animationFrame);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.style.display = "none";
            return;
        }

        ctx.globalAlpha = opacity;
        pieces.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotSpeed;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        });

        animationFrame = requestAnimationFrame(render);
    }
    render();
}

// ---------------------------------------------------------
// 6. AUTHENTICATION & LOGIN PORTAL (FIRST PAGE)
// ---------------------------------------------------------
function switchAuthTab(mode) {
    currentAuthMode = mode;
    const loginBtn = document.getElementById("loginTabBtn");
    const signupBtn = document.getElementById("signupTabBtn");
    const nameBox = document.getElementById("nameFieldBox");
    const confirmBox = document.getElementById("confirmPasswordFieldBox");
    const submitBtn = document.getElementById("authSubmitBtn");
    const msg = document.getElementById("authMessage");
    const hint = document.getElementById("passwordMatchHint");

    msg.textContent = "";
    if (hint) hint.textContent = "";

    if (mode === "signup") {
        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
        if (nameBox) nameBox.classList.remove("hidden");
        if (confirmBox) confirmBox.classList.remove("hidden");
        submitBtn.textContent = "Sign Up";
    } else {
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
        if (nameBox) nameBox.classList.add("hidden");
        if (confirmBox) confirmBox.classList.add("hidden");
        submitBtn.textContent = "Login";
    }
}

function checkPasswordMatch() {
    if (currentAuthMode !== "signup") return;
    const pass = document.getElementById("userPassword").value;
    const confirmInput = document.getElementById("userConfirmPassword");
    const hint = document.getElementById("passwordMatchHint");
    if (!hint || !confirmInput) return;

    const confirm = confirmInput.value;
    if (!confirm) {
        hint.textContent = "";
        return;
    }

    if (pass === confirm) {
        hint.textContent = "✓ Passwords match";
        hint.className = "password-match-hint success";
    } else {
        hint.textContent = "❌ Passwords do not match";
        hint.className = "password-match-hint error";
    }
}

async function submitAuth() {
    const email = document.getElementById("userEmail").value.trim().toLowerCase();
    const password = document.getElementById("userPassword").value.trim();
    const msg = document.getElementById("authMessage");

    if (!email || !password) {
        msg.textContent = "Please fill in all fields.";
        msg.className = "auth-msg error";
        return;
    }

    if (currentAuthMode === "signup") {
        const name = document.getElementById("userName").value.trim();
        const confirmPass = (document.getElementById("userConfirmPassword") ? document.getElementById("userConfirmPassword").value : "").trim();

        if (!name) {
            msg.textContent = "Please enter your full name.";
            msg.className = "auth-msg error";
            return;
        }

        if (password.length < 4) {
            msg.textContent = "Password must be at least 4 characters long.";
            msg.className = "auth-msg error";
            return;
        }

        if (password !== confirmPass) {
            msg.textContent = "❌ Passwords do not match. Please verify your password.";
            msg.className = "auth-msg error";
            document.getElementById("userConfirmPassword").focus();
            return;
        }

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });
            const data = await res.json();

            if (data.success) {
                currentUser = data.user;
                localStorage.setItem("cq_user", JSON.stringify(currentUser));
                msg.textContent = "Account created! Logging you in...";
                msg.className = "auth-msg success";
                triggerConfetti();
                setTimeout(loginSuccess, 500);
            } else {
                msg.textContent = data.message || "Registration failed.";
                msg.className = "auth-msg error";
            }
        } catch (e) {
            currentUser = { name, email };
            localStorage.setItem("cq_user", JSON.stringify(currentUser));
            loginSuccess();
        }
    } else {
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();

            if (data.success) {
                currentUser = data.user;
                localStorage.setItem("cq_user", JSON.stringify(currentUser));
                if (data.progress) {
                    userProgress = data.progress;
                    localStorage.setItem("cq_progress", JSON.stringify(userProgress));
                }
                msg.textContent = "Login successful!";
                msg.className = "auth-msg success";
                setTimeout(loginSuccess, 500);
            } else {
                msg.textContent = data.message || "Invalid email or password.";
                msg.className = "auth-msg error";
            }
        } catch (e) {
            currentUser = { name: email.split("@")[0], email };
            localStorage.setItem("cq_user", JSON.stringify(currentUser));
            loginSuccess();
        }
    }
}

function loginSuccess() {
    document.getElementById("authPage").classList.add("hidden");
    document.getElementById("mainHeader").classList.remove("hidden");
    updateNavBadge();
    showPage("homePage");
}

function logout() {
    currentUser = null;
    localStorage.removeItem("cq_user");
    document.getElementById("mainHeader").classList.add("hidden");
    showPage("authPage");
    switchAuthTab("login");
}

function updateNavBadge() {
    if (currentUser) {
        const name = currentUser.name || "Student";
        const userNameEl = document.getElementById("navUserName");
        if (userNameEl) userNameEl.textContent = name;

        const initialEl = document.getElementById("navUserInitial");
        if (initialEl) {
            const initial = name.trim().charAt(0).toUpperCase() || "S";
            initialEl.textContent = initial;
        }

        const welcomeName = document.getElementById("welcomeStudentName");
        if (welcomeName) welcomeName.textContent = name;

        const homeName = document.getElementById("homeStudentName");
        if (homeName) homeName.textContent = name;
    }
}

// ---------------------------------------------------------
// RESET PROGRESS MODAL & LOGIC
// ---------------------------------------------------------
function openResetModal() {
    const modal = document.getElementById("resetModal");
    if (!modal) return;
    const courseName = courses[currentLanguage] ? courses[currentLanguage].name : "Current Course";
    const nameEl = document.getElementById("modalCurrentCourseName");
    if (nameEl) nameEl.textContent = courseName;
    modal.classList.remove("hidden");
}

function closeResetModal() {
    const modal = document.getElementById("resetModal");
    if (modal) modal.classList.add("hidden");
}

function resetCurrentCourseProgress() {
    const lang = currentLanguage;
    const cName = courses[lang] ? courses[lang].name : lang;

    userProgress[lang] = { completed: [], testPassed: false };
    localStorage.setItem("cq_progress", JSON.stringify(userProgress));
    syncProgressToServer();
    updateStatsOverview();
    renderCourseCards();

    closeResetModal();

    if (document.getElementById("chapterPage") && !document.getElementById("chapterPage").classList.contains("hidden")) {
        loadChapter(0);
    }
    if (document.getElementById("certificatePage") && !document.getElementById("certificatePage").classList.contains("hidden")) {
        updateCertificatePreview();
    }

    showToast(`🔄 Progress for ${cName} has been reset! You can now practice from Chapter 1.`);
}

function confirmResetAllProgress() {
    if (!confirm("Are you sure you want to reset all progress across all 9 tracks? This will reset all chapters, quiz scores, and locked certificates so you can practice everything from scratch.")) {
        return;
    }

    userProgress = {};
    localStorage.setItem("cq_progress", JSON.stringify(userProgress));
    syncProgressToServer();
    updateStatsOverview();
    renderCourseCards();

    closeResetModal();

    if (document.getElementById("chapterPage") && !document.getElementById("chapterPage").classList.contains("hidden")) {
        loadChapter(0);
    }
    if (document.getElementById("certificatePage") && !document.getElementById("certificatePage").classList.contains("hidden")) {
        updateCertificatePreview();
    }

    showToast("🎉 All progress has been reset! All 9 tracks are fresh and ready for practice.");
}

function showToast(message) {
    let toast = document.getElementById("cqToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "cqToast";
        toast.className = "cq-toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}

// ---------------------------------------------------------
// 7. NAVIGATION & PAGE SWITCHING
// ---------------------------------------------------------
function showPage(pageId) {
    const pages = ["authPage", "homePage", "coursesPage", "chapterPage", "labPage", "quizPage", "certificatePage", "profilePage"];
    pages.forEach(p => {
        const el = document.getElementById(p);
        if (el) el.classList.add("hidden");
    });

    const target = document.getElementById(pageId);
    if (target) target.classList.remove("hidden");

    // Close mobile nav menu
    const navLinks = document.getElementById("navLinks");
    if (navLinks) navLinks.classList.remove("show-mobile");

    // Update active nav button
    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
    const profileBtn = document.getElementById("navProfileBtn");
    if (profileBtn) profileBtn.classList.remove("active");

    if (pageId === "homePage") {
        const b = document.getElementById("navHomeBtn");
        if (b) b.classList.add("active");
        renderHomePage();
    } else if (pageId === "coursesPage") {
        const b = document.getElementById("navCoursesBtn");
        if (b) b.classList.add("active");
        renderCourseCards();
        updateStatsOverview();
    } else if (pageId === "labPage") {
        const b = document.getElementById("navLabBtn");
        if (b) b.classList.add("active");
        changeLabLanguage();
    } else if (pageId === "quizPage") {
        const b = document.getElementById("navQuizBtn");
        if (b) b.classList.add("active");
        loadQuiz();
    } else if (pageId === "certificatePage") {
        const b = document.getElementById("navCertBtn");
        if (b) b.classList.add("active");
        populateCertLangDropdown();
        updateCertificatePreview();
    } else if (pageId === "profilePage") {
        if (profileBtn) profileBtn.classList.add("active");
        renderProfilePage();
    }

    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show-mobile");
}

// ---------------------------------------------------------
// 8. COURSES & STATS OVERVIEW
// ---------------------------------------------------------
function isCourseEligibleForCert(lang) {
    if (!courses[lang]) return false;
    const prog = userProgress[lang];
    if (!prog) return false;
    const totalChs = courses[lang].chapters ? courses[lang].chapters.length : 8;
    const completedList = prog.completed || [];
    const chaptersDone = completedList.length >= totalChs;
    const quizPassed = Boolean(prog.testPassed);
    return chaptersDone && quizPassed;
}

function getCompletedCount(lang) {
    if (userProgress[lang] && userProgress[lang].completed) {
        return userProgress[lang].completed.length;
    }
    return 0;
}

function updateStatsOverview() {
    const courseKeys = Object.keys(courses);
    let totalCompleted = 0;
    let certCount = 0;

    courseKeys.forEach(k => {
        const done = getCompletedCount(k);
        totalCompleted += done;
        if (isCourseEligibleForCert(k)) {
            certCount++;
        }
    });

    const totalChapters = courseKeys.reduce((acc, k) => acc + (courses[k].chapters ? courses[k].chapters.length : 8), 0);
    const overallPercent = Math.round((totalCompleted / totalChapters) * 100);

    const elTracks = document.getElementById("statTracksCount");
    const elChapters = document.getElementById("statCompletedChapters");
    const elCerts = document.getElementById("statCertificatesCount");
    const elPercent = document.getElementById("statOverallPercent");

    if (elTracks) elTracks.textContent = courseKeys.length;
    if (elChapters) elChapters.textContent = `${totalCompleted} / ${totalChapters}`;
    if (elCerts) elCerts.textContent = `${certCount} / ${courseKeys.length}`;
    if (elPercent) elPercent.textContent = `${overallPercent}%`;
}

function filterCourses(category) {
    currentCourseFilter = category;
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    event.target.classList.add("active");
    renderCourseCards();
}


// ---------------------------------------------------------
// HOME / OVERVIEW HUB RENDERING
// ---------------------------------------------------------
function renderHomePage() {
    if (currentUser) {
        const nameEl = document.getElementById("homeStudentName");
        if (nameEl) nameEl.textContent = currentUser.name;
    }

    const courseKeys = Object.keys(courses);
    let totalCompleted = 0;
    let tracksDoneCount = 0;
    let quizzesPassedCount = 0;
    let certCount = 0;

    const totalChapters = courseKeys.reduce((acc, k) => acc + (courses[k].chapters ? courses[k].chapters.length : 8), 0);

    courseKeys.forEach(k => {
        const done = getCompletedCount(k);
        totalCompleted += done;
        const totalChs = courses[k].chapters ? courses[k].chapters.length : 8;
        if (done >= totalChs) tracksDoneCount++;
        
        const prog = userProgress[k];
        if (prog && prog.testPassed) quizzesPassedCount++;
        if (isCourseEligibleForCert(k)) certCount++;
    });

    const elChapters = document.getElementById("homeStatChapters");
    const elTracks = document.getElementById("homeStatTracks");
    const elQuizzes = document.getElementById("homeStatQuizzes");
    const elCerts = document.getElementById("homeStatCerts");

    if (elChapters) elChapters.textContent = `${totalCompleted} / ${totalChapters}`;
    if (elTracks) elTracks.textContent = `${tracksDoneCount} / ${courseKeys.length}`;
    if (elQuizzes) elQuizzes.textContent = `${quizzesPassedCount} / ${courseKeys.length}`;
    if (elCerts) elCerts.textContent = `${certCount} / ${courseKeys.length}`;
}

function renderCourseCards() {
    const grid = document.getElementById("courseCardsGrid");
    grid.innerHTML = "";

    Object.keys(courses).forEach(key => {
        const c = courses[key];
        if (currentCourseFilter !== "all" && c.category !== currentCourseFilter) {
            return;
        }

        const done = getCompletedCount(key);
        const totalChs = c.chapters ? c.chapters.length : 8;
        const percent = Math.round((done / totalChs) * 100);

        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
            <div class="course-card-top">
                <div class="card-icon">${c.icon}</div>
                <h4>${c.name}</h4>
                <p>${c.desc}</p>
                <div class="card-progress-bar">
                    <div class="card-progress-fill" style="width: ${percent}%;"></div>
                </div>
                <div class="card-progress-text">${done} of ${totalChs} Chapters Completed (${percent}%)</div>
                <div>${isCourseEligibleForCert(key) ? '<span class="badge-cert-unlocked">🎓 Certificate Unlocked</span>' : '<span class="badge-cert-locked">🔒 Certificate Locked</span>'}</div>
            </div>
            <button class="btn primary-btn btn-full" onclick="openCourse('${key}')">
                ${done > 0 ? "Continue Course →" : "Start Learning →"}
            </button>
        `;
        grid.appendChild(card);
    });
}

function openCourse(lang) {
    currentLanguage = lang;
    const done = getCompletedCount(lang);
    const totalChs = courses[lang].chapters ? courses[lang].chapters.length : 8;
    currentChapterIndex = done < totalChs ? done : 0;
    showPage("chapterPage");
    loadChapter(currentChapterIndex);
}

// ---------------------------------------------------------
// 9. CHAPTER VIEW & INTERACTIVE LESSONS
// ---------------------------------------------------------
function loadChapter(index) {
    currentChapterIndex = index;
    const c = courses[currentLanguage];
    const ch = c.chapters[index];

    document.getElementById("activeCourseTitle").textContent = `${c.icon} ${c.name} Course`;
    document.getElementById("chapterCountIndicator").textContent = `Chapter ${index + 1} of ${c.chapters.length}`;

    // Render Tabs
    const tabsNav = document.getElementById("chapterTabsNav");
    tabsNav.innerHTML = "";
    const completedList = (userProgress[currentLanguage] && userProgress[currentLanguage].completed) || [];

    for (let i = 0; i < c.chapters.length; i++) {
        const btn = document.createElement("button");
        btn.className = "tab-btn";
        if (i === index) btn.classList.add("active");
        if (completedList.includes(i)) btn.classList.add("completed");
        btn.textContent = `Ch ${i + 1}`;
        btn.onclick = () => loadChapter(i);
        tabsNav.appendChild(btn);
    }

    // Populate Content
    document.getElementById("lessonTitle").textContent = ch.title;
    document.getElementById("lessonExplanation").textContent = ch.text;
    document.getElementById("exampleCodeText").textContent = ch.code;
    document.getElementById("chapterCodeEditor").value = ch.code;
    document.getElementById("challengeQuestion").textContent = ch.challenge;
    
    const ansBox = document.getElementById("challengeAnswerBox");
    if (ansBox) ansBox.classList.add("hidden");

    if (completedList.includes(index)) {
        document.getElementById("challengeAnswer").value = ch.answer;
        const totalChs = c.chapters ? c.chapters.length : 8;
        const allDone = completedList.length >= totalChs;
        const quizPassed = Boolean(userProgress[currentLanguage] && userProgress[currentLanguage].testPassed);
        if (allDone && quizPassed) {
            document.getElementById("challengeFeedback").textContent = "🎉 All chapters completed and Quiz passed! Certificate UNLOCKED! 🎓";
        } else if (allDone && !quizPassed) {
            document.getElementById("challengeFeedback").textContent = "🎉 All chapters completed! Take the Knowledge Quiz to unlock your Certificate 📝";
        } else {
            document.getElementById("challengeFeedback").textContent = "✅ Chapter completed! (Answer: " + ch.answer + ")";
        }
        document.getElementById("challengeFeedback").className = "feedback-msg success";
    } else {
        document.getElementById("challengeAnswer").value = "";
        document.getElementById("challengeFeedback").textContent = "";
    }

    // Syntax cheat sheet content
    document.getElementById("cheatSheetContent").textContent = cheatSheets[currentLanguage] || "";
    document.getElementById("cheatSheetDrawer").classList.add("hidden");

    // Manage HTML preview vs terminal
    const previewBox = document.getElementById("chapterHtmlPreviewBox");
    const stdinBox = document.getElementById("chapterStdinBox");

    if (currentLanguage === "html") {
        previewBox.classList.remove("hidden");
        stdinBox.classList.add("hidden");
        renderHtmlPreview("chapterHtmlIframe", ch.code);
        document.getElementById("chapterOutput").textContent = "HTML mode ready. Click 'Run Code' to update live preview.";
    } else {
        previewBox.classList.add("hidden");
        stdinBox.classList.remove("hidden");
        document.getElementById("chapterOutput").textContent = "Click 'Run Code' to execute.";
    }

    const nextBtn = document.getElementById("nextChapterBtn");
    nextBtn.textContent = index < c.chapters.length - 1 ? "Next Chapter →" : "Take Course Quiz 📝";
}

function loadExampleIntoEditor() {
    const ch = courses[currentLanguage].chapters[currentChapterIndex];
    const editor = document.getElementById("chapterCodeEditor");
    editor.value = ch.code;
    editor.focus();

    if (currentLanguage === "html") {
        renderHtmlPreview("chapterHtmlIframe", ch.code);
    }
}

function toggleCheatSheet() {
    const drawer = document.getElementById("cheatSheetDrawer");
    drawer.classList.toggle("hidden");
}

function renderHtmlPreview(iframeId, htmlContent) {
    const iframe = document.getElementById(iframeId);
    if (!iframe) return;
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(htmlContent);
    doc.close();
}

function showChallengeAnswer() {
    const ch = courses[currentLanguage].chapters[currentChapterIndex];
    if (!ch) return;

    const input = document.getElementById("challengeAnswer");
    const ansBox = document.getElementById("challengeAnswerBox");
    const ansText = document.getElementById("challengeAnswerText");
    const fb = document.getElementById("challengeFeedback");

    // Automatically fill the input with the correct answer
    input.value = ch.answer;

    // Reveal the answer banner
    if (ansBox && ansText) {
        ansText.textContent = ch.answer;
        ansBox.classList.remove("hidden");
    }

    if (fb) {
        fb.textContent = `💡 Answer revealed: "${ch.answer}". Click 'Pass Chapter ✓' or 'Check' to complete.`;
        fb.className = "feedback-msg info";
    }

    input.focus();
}

function autoPassChallenge() {
    const ch = courses[currentLanguage].chapters[currentChapterIndex];
    if (!ch) return;
    document.getElementById("challengeAnswer").value = ch.answer;
    checkChallenge();
}

function checkChallenge() {
    const val = document.getElementById("challengeAnswer").value.trim().toLowerCase();
    const fb = document.getElementById("challengeFeedback");
    const ch = courses[currentLanguage].chapters[currentChapterIndex];

    if (!val) {
        fb.textContent = "Please enter an answer.";
        fb.className = "feedback-msg error";
        return;
    }

    const cleanAns = ch.answer.toLowerCase();
    const isMatch = val === cleanAns || 
                    (cleanAns.startsWith("$") && val === cleanAns.substring(1)) ||
                    (ch.altAnswer && val === ch.altAnswer.toLowerCase());

    if (isMatch) {
        fb.textContent = "✅ Correct! Great job.";
        fb.className = "feedback-msg success";
        triggerConfetti();

        // Save progress
        if (!userProgress[currentLanguage]) {
            userProgress[currentLanguage] = { completed: [], testPassed: false };
        }
        if (!userProgress[currentLanguage].completed.includes(currentChapterIndex)) {
            userProgress[currentLanguage].completed.push(currentChapterIndex);
            localStorage.setItem("cq_progress", JSON.stringify(userProgress));
            syncProgressToServer();
            updateStatsOverview();
        }

        const totalChs = courses[currentLanguage].chapters ? courses[currentLanguage].chapters.length : 8;
        const allDone = userProgress[currentLanguage].completed.length >= totalChs;
        const quizPassed = Boolean(userProgress[currentLanguage].testPassed);

        if (allDone && quizPassed) {
            fb.textContent = "✅ Correct! All 8 chapters completed and Quiz passed! Certificate UNLOCKED! 🎓";
        } else if (allDone && !quizPassed) {
            fb.textContent = "✅ Correct! All 8 chapters completed! Now pass the Knowledge Quiz to unlock your Certificate 📝";
        }

        // Highlight tab
        loadChapter(currentChapterIndex);
    } else {
        fb.textContent = "❌ Not quite right. Review the explanation and try again!";
        fb.className = "feedback-msg error";
    }
}

async function runChapterCode() {
    const code = document.getElementById("chapterCodeEditor").value;
    const input = document.getElementById("chapterStdin").value;
    const out = document.getElementById("chapterOutput");

    out.textContent = "Running code...";

    if (currentLanguage === "html") {
        renderHtmlPreview("chapterHtmlIframe", code);
        out.textContent = "HTML & CSS rendered successfully in live preview above!";
        return;
    }

    if (currentLanguage === "javascript") {
        try {
            let logs = [];
            const oldLog = console.log;
            console.log = (...args) => logs.push(args.join(" "));
            eval(code);
            console.log = oldLog;
            out.textContent = logs.join("\n") || "Code executed successfully with no output.";
            return;
        } catch (err) {
            out.textContent = "JavaScript Error:\n" + err.message;
            return;
        }
    }

    try {
        const res = await fetch("/run", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ language: currentLanguage, code, input })
        });
        const data = await res.json();
        out.textContent = data.output || "Program finished with no output.";
    } catch (e) {
        out.textContent = "Could not run code. Ensure Flask server is running.";
    }
}

function goToNextChapter() {
    if (currentChapterIndex < courses[currentLanguage].chapters.length - 1) {
        loadChapter(currentChapterIndex + 1);
    } else {
        document.getElementById("quizCourseSelect").value = currentLanguage;
        showPage("quizPage");
    }
}

// ---------------------------------------------------------
// 10. CODE LAB (PRACTICE)
// ---------------------------------------------------------
const defaultSnippets = {
    python: 'print("Hello from Python Code Lab!")\nfor i in range(1, 6):\n    print("Number:", i)',
    java: 'class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from Java!");\n    }\n}',
    c: '#include <stdio.h>\n\nint main() {\n    printf("Hello from C!\\n");\n    return 0;\n}',
    cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello from C++!" << endl;\n    return 0;\n}',
    csharp: 'using System;\n\npublic class Program {\n    public static void Main() {\n        Console.WriteLine("Hello from C# .NET Code Lab!");\n        for (int i = 1; i <= 5; i++) {\n            Console.WriteLine($"Step: {i}");\n        }\n    }\n}',
    javascript: 'console.log("Hello from JavaScript!");\nlet numbers = [10, 20, 30];\nnumbers.forEach(n => console.log("Value:", n));',
    html: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body { font-family: sans-serif; text-align: center; padding: 20px; background: #eef2ff; }\n    h2 { color: #4361ee; }\n    button { background: #4361ee; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <h2>🌐 Live HTML & CSS Playground</h2>\n  <p>Edit this markup and click Run Program to see live changes.</p>\n  <button onclick="alert(\'Welcome to Web Design!\')">Click Me!</button>\n</body>\n</html>',
    sql: '-- Sample College Students Table Query\nSELECT roll_no, name, class_grade, marks, city\nFROM students\nWHERE marks >= 75\nORDER BY marks DESC;',
    php: '<?php\n$greeting = "Hello from PHP Code Lab!";\necho $greeting . "\\n";\nfor ($i = 1; $i <= 5; $i++) {\n    echo "Count: " . $i . "\\n";\n}\n?>'
};

function changeLabLanguage() {
    const lang = document.getElementById("labLanguageSelect").value;
    document.getElementById("labEditor").value = defaultSnippets[lang] || "";
    document.getElementById("labOutput").textContent = "Ready. Click 'Run Program' above.";

    const previewBox = document.getElementById("labHtmlPreviewBox");
    const stdinBox = document.getElementById("labStdinBox");

    if (lang === "html") {
        previewBox.classList.remove("hidden");
        stdinBox.classList.add("hidden");
        renderHtmlPreview("labHtmlIframe", defaultSnippets.html);
    } else {
        previewBox.classList.add("hidden");
        stdinBox.classList.remove("hidden");
    }
}

async function runLabCode() {
    const lang = document.getElementById("labLanguageSelect").value;
    const code = document.getElementById("labEditor").value;
    const input = document.getElementById("labStdin").value;
    const out = document.getElementById("labOutput");

    out.textContent = "Executing...";

    if (lang === "html") {
        renderHtmlPreview("labHtmlIframe", code);
        out.textContent = "Webpage rendered live in preview above!";
        return;
    }

    if (lang === "javascript") {
        try {
            let logs = [];
            const oldLog = console.log;
            console.log = (...args) => logs.push(args.join(" "));
            eval(code);
            console.log = oldLog;
            out.textContent = logs.join("\n") || "Code executed successfully with no output.";
            return;
        } catch (err) {
            out.textContent = "JavaScript Error:\n" + err.message;
            return;
        }
    }

    try {
        const res = await fetch("/run", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ language: lang, code, input })
        });
        const data = await res.json();
        out.textContent = data.output || "Done.";
    } catch (e) {
        out.textContent = "Error executing code. Check connection.";
    }
}

// ---------------------------------------------------------
// 11. QUIZ & ASSESSMENT (10 Questions, Pass >= 6/10)
// ---------------------------------------------------------
function loadQuiz() {
    const lang = document.getElementById("quizCourseSelect").value;
    const list = document.getElementById("quizQuestionsList");
    const questions = quizzes[lang] || [];

    document.getElementById("quizResultMsg").textContent = "";
    list.innerHTML = "";

    questions.forEach((q, idx) => {
        let opts = "";
        q.opts.forEach((opt, optIdx) => {
            opts += `
                <label class="quiz-option">
                    <input type="radio" name="quiz_q_${idx}" value="${optIdx}">
                    <span>${opt}</span>
                </label>
            `;
        });

        const item = document.createElement("div");
        item.className = "quiz-item";
        item.innerHTML = `
            <h4>${q.q}</h4>
            <div class="quiz-options-group">${opts}</div>
        `;
        list.appendChild(item);
    });
}

function submitQuiz() {
    const lang = document.getElementById("quizCourseSelect").value;
    const questions = quizzes[lang] || [];
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const checked = document.querySelector(`input[name="quiz_q_${i}"]:checked`);
        if (!checked) {
            alert(`Please answer Question ${i + 1} before submitting.`);
            return;
        }
        if (parseInt(checked.value) === questions[i].ans) {
            score++;
        }
    }

    const msg = document.getElementById("quizResultMsg");

    // Passing threshold: 6 out of 10 (60% passing mark)
    if (score >= 6) {
        msg.textContent = `🎉 Congratulations! You passed with ${score}/10! You have unlocked your Certificate!`;
        msg.className = "quiz-result success";
        triggerConfetti();

        if (!userProgress[lang]) {
            userProgress[lang] = { completed: [], testPassed: true };
        } else {
            userProgress[lang].testPassed = true;
        }
        localStorage.setItem("cq_progress", JSON.stringify(userProgress));
        syncProgressToServer();
        updateStatsOverview();

        const totalChs = courses[lang].chapters ? courses[lang].chapters.length : 8;
        const chDone = (userProgress[lang].completed || []).length;
        const allChaptersDone = chDone >= totalChs;

        if (allChaptersDone) {
            msg.textContent = `🎉 Congratulations! You scored ${score}/10 and completed all ${totalChs} chapters! Your Certificate is UNLOCKED! 🎓`;
            msg.className = "quiz-result success";
            triggerConfetti();

            setTimeout(() => {
                document.getElementById("certLangSelect").value = lang;
                showPage("certificatePage");
            }, 1200);
        } else {
            msg.textContent = `✅ Quiz Passed with ${score}/10! To unlock your Certificate, please complete all ${totalChs} chapters (${chDone}/${totalChs} done so far).`;
            msg.className = "quiz-result success";
            triggerConfetti();
        }
    } else {
        msg.textContent = `You scored ${score}/10. A score of 6/10 (60%) is required to pass. Review the lessons and try again!`;
        msg.className = "quiz-result error";
    }
}

// ---------------------------------------------------------
// 12. CERTIFICATE VIEW
// ---------------------------------------------------------
function populateCertLangDropdown() {
    const select = document.getElementById("certLangSelect");
    if (!select) return;
    const currentVal = select.value || "python";
    select.innerHTML = "";
    Object.keys(courses).forEach(k => {
        const c = courses[k];
        const unlocked = isCourseEligibleForCert(k);
        const opt = document.createElement("option");
        opt.value = k;
        opt.textContent = `${c.name} ${unlocked ? "🎓 (Unlocked)" : "🔒 (Locked)"}`;
        select.appendChild(opt);
    });
    if (courses[currentVal]) {
        select.value = currentVal;
    }
}

function updateCertificatePreview() {
    const select = document.getElementById("certLangSelect");
    if (!select) return;
    const lang = select.value || "python";
    const c = courses[lang];
    if (!c) return;

    const prog = userProgress[lang] || { completed: [], testPassed: false };
    const totalChs = c.chapters ? c.chapters.length : 8;
    const completedList = prog.completed || [];
    const chaptersDone = completedList.length >= totalChs;
    const quizPassed = Boolean(prog.testPassed);
    const unlocked = chaptersDone && quizPassed;

    const lockedBox = document.getElementById("certLockedBox");
    const certCard = document.getElementById("certificateCard");
    const printBtn = document.getElementById("printCertBtn");
    const lockedCourseName = document.getElementById("lockedCourseName");

    if (lockedCourseName) lockedCourseName.textContent = c.name;

    if (!unlocked) {
        if (lockedBox) lockedBox.classList.remove("hidden");
        if (certCard) certCard.classList.add("hidden");
        if (printBtn) {
            printBtn.disabled = true;
            printBtn.style.opacity = "0.4";
            printBtn.style.cursor = "not-allowed";
        }

        // Checklist 1: Chapters
        const reqCh = document.getElementById("reqChapters");
        const reqChIcon = document.getElementById("reqChaptersIcon");
        const reqChText = document.getElementById("reqChaptersText");
        const reqChBtn = document.getElementById("reqChaptersBtn");

        if (chaptersDone) {
            if (reqCh) reqCh.className = "req-item completed";
            if (reqChIcon) reqChIcon.textContent = "✅";
            if (reqChText) reqChText.textContent = `All ${totalChs} chapters completed! (${totalChs}/${totalChs})`;
            if (reqChBtn) reqChBtn.textContent = "Review Chapters";
        } else {
            if (reqCh) reqCh.className = "req-item pending";
            if (reqChIcon) reqChIcon.textContent = "🔒";
            if (reqChText) reqChText.textContent = `${completedList.length} of ${totalChs} chapters completed`;
            if (reqChBtn) reqChBtn.textContent = "Complete Chapters →";
        }

        // Checklist 2: Quiz
        const reqQz = document.getElementById("reqQuiz");
        const reqQzIcon = document.getElementById("reqQuizIcon");
        const reqQzText = document.getElementById("reqQuizText");
        const reqQzBtn = document.getElementById("reqQuizBtn");

        if (quizPassed) {
            if (reqQz) reqQz.className = "req-item completed";
            if (reqQzIcon) reqQzIcon.textContent = "✅";
            if (reqQzText) reqQzText.textContent = "Knowledge Quiz Passed! (Score: 6+/10)";
            if (reqQzBtn) reqQzBtn.textContent = "Retake Quiz";
        } else {
            if (reqQz) reqQz.className = "req-item pending";
            if (reqQzIcon) reqQzIcon.textContent = "🔒";
            if (reqQzText) reqQzText.textContent = "Quiz not passed yet (Need 6/10 to pass)";
            if (reqQzBtn) reqQzBtn.textContent = "Take Quiz 📝";
        }
    } else {
        if (lockedBox) lockedBox.classList.add("hidden");
        if (certCard) certCard.classList.remove("hidden");
        if (printBtn) {
            printBtn.disabled = false;
            printBtn.style.opacity = "1";
            printBtn.style.cursor = "pointer";
        }

        document.getElementById("certStudentName").textContent = currentUser ? currentUser.name : "Student";
        document.getElementById("certCourseName").textContent = `${c.name} Programming`;

        const now = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        document.getElementById("certDate").textContent = `${months[now.getMonth()]} ${now.getFullYear()}`;
    }
}

function goToCourseFromCert() {
    const lang = document.getElementById("certLangSelect").value;
    openCourse(lang);
}

function goToQuizFromCert() {
    const lang = document.getElementById("certLangSelect").value;
    document.getElementById("quizCourseSelect").value = lang;
    loadQuiz();
    showPage("quizPage");
}

// ---------------------------------------------------------
// 13. SERVER SYNC
// ---------------------------------------------------------
function syncProgressToServer() {
    if (!currentUser) return;
    fetch("/api/progress/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: currentUser.email, progress: userProgress })
    }).catch(e => console.log("Progress saved locally."));
}


// ---------------------------------------------------------
// STUDENT PROFILE & PROGRESS TRACKING
// ---------------------------------------------------------
function renderProfilePage() {
    if (!currentUser) return;

    // 1. Student Identity & Avatar Initials
    const name = currentUser.name || "Student";
    const email = currentUser.email || (name.toLowerCase().replace(/[^a-z0-9]/g, '') + "@student.codequest.edu");
    const initials = name.trim().split(/\s+/).map(n => n[0]).slice(0, 2).join('').toUpperCase() || "S";

    const avatarEl = document.getElementById("profileAvatar");
    if (avatarEl) avatarEl.textContent = initials;

    const nameEl = document.getElementById("profileStudentName");
    if (nameEl) nameEl.textContent = name;

    const emailEl = document.getElementById("profileStudentEmail");
    if (emailEl) emailEl.textContent = email;

    // 2. Metrics calculation
    const courseKeys = Object.keys(courses);
    let totalChaptersCompleted = 0;
    let tracksDoneCount = 0;
    let quizzesPassedCount = 0;
    let certsEarnedCount = 0;

    const totalPossibleChapters = courseKeys.reduce((acc, k) => acc + (courses[k].chapters ? courses[k].chapters.length : 8), 0);
    const unlockedCerts = [];

    courseKeys.forEach(k => {
        const c = courses[k];
        const done = getCompletedCount(k);
        totalChaptersCompleted += done;
        const totalChs = c.chapters ? c.chapters.length : 8;
        
        if (done >= totalChs) {
            tracksDoneCount++;
        }

        const prog = userProgress[k];
        const quizPassed = Boolean(prog && prog.testPassed);
        if (quizPassed) {
            quizzesPassedCount++;
        }

        if (isCourseEligibleForCert(k)) {
            certsEarnedCount++;
            unlockedCerts.push({
                key: k,
                name: c.name,
                icon: c.icon,
                completedChapters: done,
                totalChapters: totalChs
            });
        }
    });

    const masteryPercent = Math.round((totalChaptersCompleted / totalPossibleChapters) * 100);

    // Update KPI metrics
    const mChapters = document.getElementById("profMetricChapters");
    const mTracks = document.getElementById("profMetricTracks");
    const mQuizzes = document.getElementById("profMetricQuizzes");
    const mCerts = document.getElementById("profMetricCerts");

    if (mChapters) mChapters.textContent = `${totalChaptersCompleted} / ${totalPossibleChapters}`;
    if (mTracks) mTracks.textContent = `${tracksDoneCount} / ${courseKeys.length}`;
    if (mQuizzes) mQuizzes.textContent = `${quizzesPassedCount} / ${courseKeys.length}`;
    if (mCerts) mCerts.textContent = `${certsEarnedCount} / ${courseKeys.length}`;

    // Mastery bar
    const masteryBadge = document.getElementById("profMasteryPercent");
    const masteryFill = document.getElementById("profMasteryFill");
    if (masteryBadge) masteryBadge.textContent = `${masteryPercent}%`;
    if (masteryFill) masteryFill.style.width = `${masteryPercent}%`;

    // Rank Badge
    const rankEl = document.getElementById("profileRankBadge");
    if (rankEl) {
        if (certsEarnedCount >= 5) {
            rankEl.textContent = "🏆 Master Developer";
        } else if (certsEarnedCount >= 1) {
            rankEl.textContent = "🎓 Certified Developer";
        } else if (totalChaptersCompleted >= 8) {
            rankEl.textContent = "⭐ Coding Enthusiast";
        } else {
            rankEl.textContent = "🌱 Rising Learner";
        }
    }

    // 3. Render Certificates Showcase
    const certsContainer = document.getElementById("profileCertificatesList");
    if (certsContainer) {
        certsContainer.innerHTML = "";
        if (unlockedCerts.length === 0) {
            certsContainer.innerHTML = `
                <div class="empty-certs-card">
                    <div class="empty-certs-icon">📜</div>
                    <h4>No Certificates Unlocked Yet</h4>
                    <p>Complete all 8 chapters and score 6+/10 on the Knowledge Quiz in any course to unlock your official verified certificate!</p>
                    <button class="btn primary-btn btn-sm" onclick="openCourse('python')">🚀 Start Learning Python</button>
                </div>
            `;
        } else {
            unlockedCerts.forEach(cert => {
                const card = document.createElement("div");
                card.className = "earned-cert-card";
                card.innerHTML = `
                    <div class="earned-cert-top">
                        <div class="cert-gold-seal">★</div>
                        <span class="cert-verified-pill">✓ Verified</span>
                    </div>
                    <div class="earned-cert-body">
                        <div class="cert-track-icon">${cert.icon}</div>
                        <h4>${cert.name} Specialist</h4>
                        <p class="cert-recipient-name">Awarded to <strong>${name}</strong></p>
                        <span class="cert-modules-done">8 / 8 Modules & Quiz Completed</span>
                    </div>
                    <div class="earned-cert-footer">
                        <button class="btn primary-btn btn-sm btn-full" onclick="viewCourseCertificate('${cert.key}')">
                            🎓 View & Print Certificate
                        </button>
                    </div>
                `;
                certsContainer.appendChild(card);
            });
        }
    }

    // 4. Render Track-by-Track Table
    const tableWrap = document.getElementById("profileCourseProgressList");
    if (tableWrap) {
        tableWrap.innerHTML = "";
        const table = document.createElement("table");
        table.className = "profile-status-table";
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Programming Track</th>
                    <th>Chapter Progress</th>
                    <th>Quiz Status</th>
                    <th>Certificate</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        const tbody = table.querySelector("tbody");

        courseKeys.forEach(k => {
            const c = courses[k];
            const done = getCompletedCount(k);
            const totalChs = c.chapters ? c.chapters.length : 8;
            const pct = Math.round((done / totalChs) * 100);
            const prog = userProgress[k] || { completed: [], testPassed: false };
            const quizPassed = Boolean(prog.testPassed);
            const certUnlocked = isCourseEligibleForCert(k);

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>
                    <div class="course-name-cell">
                        <span class="track-emoji">${c.icon}</span>
                        <div>
                            <strong>${c.name}</strong>
                            <span class="cell-sub">${totalChs} Chapters</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="table-progress-wrap">
                        <div class="table-progress-bar">
                            <div class="table-progress-fill" style="width: ${pct}%"></div>
                        </div>
                        <span class="table-progress-text">${done}/${totalChs} (${pct}%)</span>
                    </div>
                </td>
                <td>
                    ${quizPassed 
                        ? '<span class="status-chip chip-passed">✓ Passed</span>' 
                        : (done >= totalChs 
                            ? '<span class="status-chip chip-ready">Ready to Take</span>' 
                            : '<span class="status-chip chip-locked">Locked</span>')}
                </td>
                <td>
                    ${certUnlocked 
                        ? '<span class="status-chip chip-unlocked">🎓 Unlocked</span>' 
                        : '<span class="status-chip chip-pending">⏳ In Progress</span>'}
                </td>
                <td>
                    ${certUnlocked 
                        ? `<button class="table-action-btn btn-cert" onclick="viewCourseCertificate('${k}')">View Cert 🎓</button>`
                        : (done >= totalChs 
                            ? `<button class="table-action-btn btn-quiz" onclick="openQuizForCourse('${k}')">Take Quiz 📝</button>`
                            : `<button class="table-action-btn btn-learn" onclick="openCourse('${k}')">Learn →</button>`)}
                </td>
            `;
            tbody.appendChild(row);
        });

        tableWrap.appendChild(table);
    }
}

function viewCourseCertificate(lang) {
    showPage('certificatePage');
    const sel = document.getElementById('certLangSelect');
    if (sel) {
        sel.value = lang;
        updateCertificatePreview();
    }
}

function openQuizForCourse(lang) {
    const sel = document.getElementById('quizCourseSelect');
    if (sel) {
        sel.value = lang;
        loadQuiz();
    }
    showPage('quizPage');
}

// ---------------------------------------------------------
// 14. INITIALIZATION
// ---------------------------------------------------------
if (currentUser) {
    document.getElementById("authPage").classList.add("hidden");
    document.getElementById("mainHeader").classList.remove("hidden");
    updateNavBadge();
    showPage("homePage");
} else {
    document.getElementById("mainHeader").classList.add("hidden");
    showPage("authPage");
    switchAuthTab("login");
}
