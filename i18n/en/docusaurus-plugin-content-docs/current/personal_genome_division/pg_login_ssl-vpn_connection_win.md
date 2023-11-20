---
id: pg_login_ssl-vpn_connection_win
title: "How to connect to the VPN (Windows)"
---


For Windows, connect using the FortiClient GUI.

## 1. Configure the SSL-VPN client

1. Start FortiClient, select Remote Access from the menu and click "VPN Setting".


![figure](VPNwin_11.png)

2. On the New VPN Connection screen, enter the information as shown in the table below and click 'Save'.

<table>
<tr>
	<td>VPN</td><td> Select "SSL-VPN"</td>
</tr>
<tr>
	<td>Connection name</td><td>Any string</td>.
</tr>
<tr>
	<td>Remote GW</td><td>133.39.24.254</td>
</tr>
<tr>
	<td>Port number</td><td>443 (check box r)</td>
</tr>
<tr>
	<td>Authentication</td><td>Select "Enter username"</td>.
</tr>
</table>

![figure](sslvpn-win-443.png)


## 2. Connect to VPN

1. Enter a username and password.

![figure](VPNwin_13.png) 


2. If you see a Security Alert pop-up message, click Yes. 

![figure](VPNwin_14.png)

A one-time password will be sent to the email address linked to the SSL-VPN account as follows.

![figure](VPNwin_15.png)

If the message is not sent, see [FAQ:Login > FAQ(Login)](/faq/faq_login_personal/#🆀-what-to-do-if-you-cannot-log-in-to-the-nig-supercomputer-via-ssh).

- Windows

3. Enter the one-time password (269274 in the example above) in the "Token" field and click "OK".

![figure](VPNwin_16.png)

4. When the following screen appears, VPN connection is established.

![figure](VPNwin_17.png)
