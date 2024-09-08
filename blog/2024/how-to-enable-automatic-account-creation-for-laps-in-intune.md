---
title: How to Create a Local Admin Account on Windows Devices with Intune
sidebar_position: 6
slug: /how-to-enable-automatic-account-creation-for-laps-in-intune
keywords: [Azure]
description: Seventh blog entry
tags: [Azure]
image: https://ourcloudnetwork.com/wp-content/uploads/2023/12/How-to-Create-a-Local-Admin-Account-on-Windows-Devices-with-Intune.png
date: 2024-02-08
authors: tobias
last_edited: 2024-01-03
---



In this tutorial, I will show you how to create a new local administrator account on your Windows devices using Microsoft Intune. While there are a few preferred methods among professionals and MVPs for creating local admin accounts, here we are going to use a simple PowerShell script for the detection and creation of the account.


# **Should you use the built-in local admin account?** {#221a56e76ac541199e4e7e9036acbd00}


It is often questioned why you need the added complexity of creating a new local admin account and why you cannot just use the built-in Windows account instead. Well, the rationale behind this can be broken down quite simply into the following points:

- **The built-in administrator account has a well-known SID.** Even if the account is renamed, it can be easily enumerated by an attacker.
- **The account cannot be locked out by default.** This makes it susceptible to brute-force attacks. _(As of October 11, 2022, account lockout can be enforced on this account, but it is not enabled by default)_.
- **CIS recommends you don’t use it**. The Center for Internet Security (COS) provides well-respected recommendations for best practice configurations across a variety of products within the industry. Sometimes companies must simply conform to policy and adhere to a standard to meet compliance requirements.

# **Really simple local admin account** {#0a193b455d2149cb9be293c284c33f6f}


The process of creating a local admin account on Windows devices using Microsoft Intune can be summarised in the following steps:

1. Create a PowerShell script to detect if the account is present and is a local administrators group member.
2. Create a PowerShell script to create the account if it doesn’t exist and add it to the local administrators group.
3. Upload as a remediation script package to Intune

You must consider with this approach that you should have a method to change and manage the password for the account after it has been deployed. The best way of doing that is to use [Windows LAPS with Microsoft Entra and Intune](https://ourcloudnetwork.com/how-to-deploy-microsoft-entra-laps-with-intune-step-by-step/).


# **Detection script** {#8490055193844d1b97cb9a2eeeb78653}


```powershell
<#
Written by Daniel Bradley
https://ourcloudnetwork.com/
https://www.linkedin.com/in/danielbradley2/
#>

#The name of the account
$AccountName = 'localadmin'

#Check if user exisis
$Userexist = (Get-LocalUser).Name -Contains $AccountName
if ($userexist) {
  Write-Host "$AccountName exists"
}
Else {
  Write-Host "$AccountName does not Exists"
  Exit 1
}

#Check if user is a local admin
$localadmins = ([ADSI]"WinNT://./Administrators").psbase.Invoke('Members') | % {
 ([ADSI]$_).InvokeGet('AdsPath')
}

if ($localadmins -like "*localadmin*") {
    Write-Host "localadmin is a member of local admins"
    exit 0
} else {
    Write-Host "localadmin is NOT a member of local admins"
    exit 1
}
```


# **Remediation script** {#a120ee8d2a40434fbc0177264e659281}


```powershell
<#
Written by Daniel Bradley
https://ourcloudnetwork.com/
https://www.linkedin.com/in/danielbradley2/
#>

#The name of the account
$accountName = 'localadmin'

#Add system.web assembly
Add-Type -AssemblyName 'System.Web'

#Check if user exisis
$Userexist = (Get-LocalUser).Name -Contains $AccountName
if (!$userexist) {
    $password = [System.Web.Security.Membership]::GeneratePassword(20,5)
    $Securepassword = ConvertTo-SecureString $Password -AsPlainText -force
    $params = @{
        Name        = $accountName
        Password    = $Securepassword
    }
    New-LocalUser @params
}

# Add the account to the Administrators group
Add-LocalGroupMember -Group "Administrators" -Member $accountName
```


# **Uploading the remediation script to Microsoft Intune** {#7b070c8468c04d28ba26c915f6b189f7}


Both the detection script and remediation script first need to be saved into a PowerShell file. You can do this by copying and pasting each of the above scripts to a notepad file and saving them with the .ps1 file extension. Once you have done that follow the below steps to upload them to Intune:

1. Log in to **Microsoft Intune**.
2. Select **Devices** then **Remediations**.

	![](./2087523864.png)

3. Select **Create Script package**.
4. Define the basic remediation settings such as the **name** of the package and a meaningful **description**.

	![](./1650708964.png)

5. On the settings page, upload both script files to the corresponding location, then ensure the script is not run in the users context and the enforce script signature check is set to No. As all of the workstations in scope of this package should be 64-bit, set **Run script in 64-bit PowerShell** to **Yes**.

	![](./99030132.png)

1. On the **Assignments** page, assign the package to the target group of users and define the frequency at which the remediation package will run.

	![](./1559781962.png)

2. Then click **Create**.

# **Monitoring deployment progress** {#c96ab5b565df404a99d7f0bedffcbb4b}


You should allow the remediation package some time to run based on the schedule you defined. Otherwise you can run the remediation package manually on a target device as a test from the Intune devices blade.


![](./1940650662.png)


To monitor the status of your deployment, select the remediation package and click the **Overview** menu option. You will immediately see a high level overview of the total devices that have been detected and remediated. You can also see more detailed information on the **Device status** menu page, like below:


![](./1550846755.png)

