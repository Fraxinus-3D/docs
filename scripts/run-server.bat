@echo off

cd /d %~dp0\..

hugo.exe server --bind=0.0.0.0 --watch --minify --gc
pause
