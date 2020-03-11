'!c:/windows/system32/cscript //nologo
' Send URL-encoded keyboard shortcuts to forground application
'   (CTRL+SHIFT+ALT+i = ^+%i = %5e%2b%25i)

' get shell object
Set WshShell = WScript.CreateObject("WScript.Shell")
' get Process array that includes the query string
Set wshUserEnv = WshShell.Environment("Process")

' urldecode querystring
param = unescape(wshUserEnv("QUERY_STRING"))
' send keystroke
WshShell.SendKeys param

' delete used objects
Set wshUserEnv = Nothing
Set WshShell   = Nothing
' quit script with exit code 0
Wscript.Quit 0
