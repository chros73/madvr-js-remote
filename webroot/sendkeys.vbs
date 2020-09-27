'!c:/windows/system32/cscript //nologo
' Send URL-encoded keyboard shortcuts to mpc-hc/be application
'   (CTRL+SHIFT+ALT+i = ^+%i = %5e%2b%25i)


' process name of mpc-hc/be as on Details tab of Task Manager
PROCESS_NAME = "mpc-%.exe"

' get shell object
Set WshShell = WScript.CreateObject("WScript.Shell")
' get Process array that includes the query string
Set wshUserEnv = WshShell.Environment("Process")

' urldecode querystring
param = unescape(wshUserEnv("QUERY_STRING"))

' find running mpc applications
Set objWMIService = GetObject("winmgmts:\\.\root\cimv2")
Set colItems = objWMIService.ExecQuery("Select * From Win32_Process WHERE Name Like '" & PROCESS_NAME & "'")

' set the first found mpc application to foreground and send keystroke
For Each objItem in colItems
	WshShell.AppActivate objItem.ProcessID
	'WScript.Sleep 100
	WshShell.SendKeys param
	Exit For
Next

' delete used objects
Set colItems = Nothing
Set objWMIService = Nothing
Set wshUserEnv = Nothing
Set WshShell   = Nothing
' quit script with exit code 0
Wscript.Quit 0
