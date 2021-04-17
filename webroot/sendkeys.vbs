'!c:/windows/system32/cscript //nologo
' Send URL-encoded keyboard shortcuts to mpc-hc/be application (CTRL+SHIFT+ALT+i = ^+%i = %5e%2b%25i)
'   or run batch files from scripts directory

Dim queryString
Dim arrParams
Dim arrParam

' get shell object
Set WshShell = WScript.CreateObject("WScript.Shell")
' get Process array that includes the query string
Set wshUserEnv = WshShell.Environment("Process")

' urldecode querystring
queryString = unescape(wshUserEnv("QUERY_STRING"))


' Process all the get parameters
arrParams = Split(queryString, "&")

For i = 0 To Ubound(arrParams)
	arrParam = Split(arrParams(i), "=")

	Select Case arrParam(0)
		Case "key": sendKey(arrParam(1))
		Case "cmd": runBatch(arrParam(1))
		Case Else: sendKey(arrParam(0))
	End Select
Next


' runBatch function
Private Function runBatch(BatchFile)
	Dim SCRIPTS_DIR
	
	' scripts directory
	SCRIPTS_DIR = "scripts\"

	' Run batch file in hidden window:
	WshShell.Run Chr(34) & SCRIPTS_DIR & BatchFile & Chr(34), 0
End Function


' sendKey function
Private Function sendKey(Key1)
	Dim PROCESS_NAME

	' process name of mpc-hc/be as on Details tab of Task Manager
	PROCESS_NAME = "mpc-%.exe"

	' find running mpc applications
	Set objWMIService = GetObject("winmgmts:\\.\root\cimv2")
	Set colItems = objWMIService.ExecQuery("Select * From Win32_Process WHERE Name Like '" & PROCESS_NAME & "'")

	' set the first found mpc application to foreground and send keystroke
	For Each objItem in colItems
		WshShell.AppActivate objItem.ProcessID
		'WScript.Sleep 100
		WshShell.SendKeys Key1
		Exit For
	Next

	' delete used objects
	Set colItems = Nothing
	Set objWMIService = Nothing
End Function


' delete used objects
Set wshUserEnv = Nothing
Set WshShell   = Nothing
' quit script with exit code 0
Wscript.Quit 0
