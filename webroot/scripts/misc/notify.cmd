REM set working directory to the current one
cd "%~dp0"

PowerShell -NoProfile -ExecutionPolicy Bypass -Command "& './notify.ps1'"
