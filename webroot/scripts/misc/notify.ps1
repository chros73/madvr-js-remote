[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")

$objNotifyIcon = New-Object System.Windows.Forms.NotifyIcon

$objNotifyIcon.Icon = [System.Drawing.SystemIcons]::Information
$objNotifyIcon.BalloonTipIcon = "Info" 
$objNotifyIcon.BalloonTipText = "Script2 has run." 
$objNotifyIcon.BalloonTipTitle = "SCRIPT2 POPUP!"
$objNotifyIcon.Visible = $True

$objNotifyIcon.ShowBalloonTip(10000)
