@ECHO OFF
SET MyProcess=nds32
TASKLIST | FIND /I "%MyProcess%"

if not errorlevel 1 goto end
echo start building....

REM set PATH=%SystemRoot%\system32;%SystemRoot%;%PATH%
REM echo %SystemRoot%
REM echo %PATH%
D:\Andestech\AndeSight_STD_v322\cygwin\bin\bash D:\Andestech\AndeSight_STD_v322\cygwin\bin\build_star_server.sh
::pause
exit

:end
echo another process is running.
exit