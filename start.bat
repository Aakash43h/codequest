@echo off
cd /d "%~dp0"

echo ======================================================================
echo    CODEQUEST: B.SC. I.T. FINAL YEAR PROJECT LAUNCHER
echo    Topic: Coding Awareness and Career Readiness for College Students
echo ======================================================================
echo.

echo [1/2] Verifying Python and installing required packages...
py -m pip install -r requirements.txt >nul 2>&1
if errorlevel 1 (
    python -m pip install -r requirements.txt >nul 2>&1
)

echo [2/2] Starting Flask Backend Server with SQLite Database Engine...
echo.
echo ======================================================================
echo    Server is live! Access CodeQuest in Google Chrome or any browser:
echo    http://127.0.0.1:5000
echo ======================================================================
echo.

py app.py
if errorlevel 1 python app.py
pause
