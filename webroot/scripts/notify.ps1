[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")

$objNotifyIcon = New-Object System.Windows.Forms.NotifyIcon

$objNotifyIcon.Icon = [System.Drawing.SystemIcons]::Information
$objNotifyIcon.BalloonTipIcon = "Info" 
$objNotifyIcon.BalloonTipText = "Script has run." 
$objNotifyIcon.BalloonTipTitle = "SCRIPT POPUP!"
$objNotifyIcon.Visible = $True

$objNotifyIcon.ShowBalloonTip(10000)
