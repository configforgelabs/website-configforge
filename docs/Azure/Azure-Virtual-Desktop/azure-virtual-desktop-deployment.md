---
title: Deployment
description: "How deploy Azure Virtual Desktop"
sidebar_position: 2
slug: /azure-virtual-desktop-deployment
authors: [Tobias]
date: 2024-03-27
keywords: [Azure Virtual Desktop,FSLogix,Entra,Cloud Kerberos Trust]
tags: [Azure Virtual Desktop,FSLogix,Entra,Cloud Kerberos Trust]
last_update: 
 date: 2024-12-06
 author: Tobias
---



### FSLogix {#ba106c701fb14a9d8a41c37d4261ed7f}


#### Cloud Keberos Ticket Retrieval Enabled {#23930720e2c54032a1318d7931152fc8}


[https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-kerberos#cloudkerberosticketretrievalenabled](https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-kerberos#cloudkerberosticketretrievalenabled)


#### Configuration examples {#46f23780e50945f78baf913f97d5009e}


Example FSLogix configuration recommendations by Microsoft


[Configuration examples - FSLogix | Microsoft Learn](https://learn.microsoft.com/en-us/fslogix/concepts-configuration-examples)


## Scripts {#2420bf8eb2f141239bd846949a4dd303}


Links with useful script collections

- [https://github.com/Azure/RDS-Templates/tree/master/CustomImageTemplateScripts/CustomImageTemplateScripts_2024-03-27](https://github.com/Azure/RDS-Templates/tree/master/CustomImageTemplateScripts/CustomImageTemplateScripts_2024-03-27)
	- Includes several client scripts to configure Windows with all apps

## Sysprep {#62791b1ae64a414a8f8182b1c1749d29}


### **Package xy installed for a user, but not provisioned for all users** {#e4476ec982df42e9b9f884c0ca3c4564}


(Fix is part of [https://support.microsoft.com/en-us/topic/march-26-2024-kb5035941-os-build-19045-4239-preview-a170797c-503e-4372-b3b6-89f290b4f2cb](https://support.microsoft.com/en-us/topic/march-26-2024-kb5035941-os-build-19045-4239-preview-a170797c-503e-4372-b3b6-89f290b4f2cb))


Remove packages with


```powershell
$aProvPackages=@(Get-AppxProvisionedPackage -Online).PackageName
Get-AppxPackage -AllUsers | ?{ -not ($aProvPackages -contains $_.PackageFullName ) } | %{write-host $_;Remove-AppxPackage -AllUsers -Package $_}
```


Workaround, by removing the AppX check from sysprep


```powershell
cd C:\Windows\system32\sysprep\Actionfiles
takeown /F Generalize.xml
icacls Generalize.xml /grant username:(m)
notepad Generalize.xml 
```


Remove the following XML node from the Generalize.xml file


```powershell
<imaging exclude="">
    <assemblyIdentity name="Microsoft-Windows-AppX-Sysprep" version="10.0.19041.1566" publicKeyToken="31bf3856ad364e35" processorArchitecture="amd64" versionScope="NonSxS"/>
    <sysprepOrder order="0x1A00"/>
    <sysprepValidate methodName="SysprepGeneralizeValidate" moduleName="$(runtime.system32)\AppxSysprep.dll"/>
    <sysprepModule methodName="SysprepGeneralize" moduleName="$(runtime.system32)\AppxSysprep.dll"/>
</imaging>
```


Sysprep will now run without error. Future AppX problems may occur after provisioning

