---
title: Bereitstellung
description: "Wie man Azure Virtual Desktop bereitstellt"
sidebar_position: 2
slug: /azure-virtual-desktop-deployment
authors: [Tobias]
date: 2024-03-27
keywords: [Azure Virtual Desktop,FSLogix,Entra,Cloud Kerberos Trust]
tags: [Azure Virtual Desktop,FSLogix,Entra,Cloud Kerberos Trust]
last_update: 
 date: 2025-07-30
 author: Tobias
---



## Cloud Kerberos Ticket Abruf aktiviert {#23930720e2c54032a1318d7931152fc8}


[https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-kerberos#cloudkerberosticketretrievalenabled](https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-kerberos#cloudkerberosticketretrievalenabled)


### Konfigurationsbeispiele {#46f23780e50945f78baf913f97d5009e}


Beispielhafte FSLogix Konfigurationsempfehlungen von Microsoft


[Konfigurationsbeispiele - FSLogix | Microsoft Learn](https://learn.microsoft.com/en-us/fslogix/concepts-configuration-examples)


## Skripte {#2420bf8eb2f141239bd846949a4dd303}


Links zu nützlichen Skriptsammlungen

- [https://github.com/Azure/RDS-Templates/tree/master/CustomImageTemplateScripts/CustomImageTemplateScripts_2024-03-27](https://github.com/Azure/RDS-Templates/tree/master/CustomImageTemplateScripts/CustomImageTemplateScripts_2024-03-27)
	- Enthält mehrere Client-Skripte zur Konfiguration von Windows mit allen Apps

## Sysprep {#62791b1ae64a414a8f8182b1c1749d29}


### **Paket xy für einen Benutzer installiert, aber nicht für alle Benutzer bereitgestellt** {#e4476ec982df42e9b9f884c0ca3c4564}


(Die Lösung ist Teil von [https://support.microsoft.com/en-us/topic/march-26-2024-kb5035941-os-build-19045-4239-preview-a170797c-503e-4372-b3b6-89f290b4f2cb](https://support.microsoft.com/en-us/topic/march-26-2024-kb5035941-os-build-19045-4239-preview-a170797c-503e-4372-b3b6-89f290b4f2cb))


Pakete entfernen mit


```powershell
$aProvPackages=@(Get-AppxProvisionedPackage -Online).PackageName
Get-AppxPackage -AllUsers | ?{ -not ($aProvPackages -contains $_.PackageFullName ) } | %{write-host $_;Remove-AppxPackage -AllUsers -Package $_}
```


Umgehungslösung, indem die AppX-Prüfung aus Sysprep entfernt wird


```powershell
cd C:\Windows\system32\sysprep\Actionfiles
takeown /F Generalize.xml
icacls Generalize.xml /grant username:(m)
notepad Generalize.xml 
```


Entfernen Sie den folgenden XML-Knoten aus der Datei Generalize.xml


```powershell
<imaging exclude="">
    <assemblyIdentity name="Microsoft-Windows-AppX-Sysprep" version="10.0.19041.1566" publicKeyToken="31bf3856ad364e35" processorArchitecture="amd64" versionScope="NonSxS"/>
    <sysprepOrder order="0x1A00"/>
    <sysprepValidate methodName="SysprepGeneralizeValidate" moduleName="$(runtime.system32)\AppxSysprep.dll"/>
    <sysprepModule methodName="SysprepGeneralize" moduleName="$(runtime.system32)\AppxSysprep.dll"/>
</imaging>
```


Sysprep wird nun ohne Fehler ausgeführt. Zukünftige AppX-Probleme können nach der Bereitstellung auftreten