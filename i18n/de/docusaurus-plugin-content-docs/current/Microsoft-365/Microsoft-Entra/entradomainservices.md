---
title: Entra Domain Services
description: "Alles über Entra Domain Services"
sidebar_position: 0
slug: /entradomainservices
authors: [Tobias]
date: 2025-02-10
keywords: [Fehlerbehebung,Entra Domain Services,PowerShell,Anleitung]
tags: [Fehlerbehebung,Entra Domain Services,PowerShell,Anleitung]
last_update: 
 date: 2025-02-12
 author: Tobias
---



### Fehlerbehebung {#196fa6da3fef80fe8070e92f791174ed}


#### Passwörter nicht verfügbar, aber Password Hash Sync aktiviert {#196fa6da3fef807b8f5cee6ce00f53d8}


**Synchronisation pro Benutzer**


Ich hatte das Problem, dass in einer Umgebung mit aktivierter Password Hash Sync die Passwörter nicht mit den Entra Domain Services synchronisiert wurden:


![](./entradomainservices.196fa6da-3fef-80cd-bc36-e0b05a507c04.png)


Entra Connect zeigte keine Probleme mit den Troubleshooting PowerShell Cmdlets.


Die von mir gefundene Lösung besteht darin, das PowerShell Cmdlet `Invoke-ADSyncCSObjectPasswordHashSync` für alle synchronisierten Benutzer zu verwenden.


```powershell
 # Definieren Sie den OU-Pfad zur Suche nach Benutzern
$ouPath = "OU=OU,DC=configforge,DC=local"

# Geben Sie den Connector-Namen an
# Normalerweise der Name der Quelldomain, z.B. configforge.local
$connectorName = "configforge.local"

# Holen Sie alle Benutzer in der angegebenen OU
# Ändern Sie den Filter, um selektiver zu sein
$users = Get-ADUser -Filter * -SearchBase $ouPath

# Durchlaufen Sie jeden Benutzer und synchronisieren Sie deren Passworthash
foreach ($user in $users) {
    try {
        # Synchronisieren Sie den Passworthash für den aktuellen Benutzer
        Invoke-ADSyncCSObjectPasswordHashSync -DistinguishedName $user.DistinguishedName -ConnectorName $connectorName
        
        # Ausgabe der Erfolgsmeldung
        Write-Host "Passworthash synchronisiert für Benutzer: $($user.SamAccountName)"
    }
    catch {
        # Ausgabe der Fehlermeldung, wenn die Synchronisation fehlschlägt
        Write-Host "Fehler bei der Synchronisation des Passworthashes für Benutzer: $($user.SamAccountName). Fehler: $_"
    }
} 

```


Nach manueller Synchronisation:


![](./entradomainservices.196fa6da-3fef-8055-9774-c09e2f3dd51b.png)


**Alle synchronisieren**


Wenn Sie den Anweisungen von MS auf [https://learn.microsoft.com/en-us/entra/identity/domain-services/tutorial-configure-password-hash-sync#enable-synchronization-of-password-hashes](https://learn.microsoft.com/en-us/entra/identity/domain-services/tutorial-configure-password-hash-sync#enable-synchronization-of-password-hashes) folgen, können wir auch so eine Passworthash-Synchronisation erzwingen:


```powershell
# Ausführen auf dem Entra Connect Server

# Definieren Sie die Namen der Azure AD Connect Connectors und importieren Sie das erforderliche PowerShell-Modul
# Namen mit Get-ADSyncConnector abrufen
$azureadConnector = "<CASE SENSITIVE AZURE AD CONNECTOR NAME>"
$adConnector = "<CASE SENSITIVE AD DS CONNECTOR NAME>"

Import-Module "C:\Program Files\Microsoft Azure AD Sync\Bin\ADSync\ADSync.psd1"
Import-Module "C:\Program Files\Microsoft Azure Active Directory Connect\AdSyncConfig\AdSyncConfig.psm1"

# Erstellen Sie ein neues ForceFullPasswordSync Konfigurationsparameter-Objekt und dann
# aktualisieren Sie den bestehenden Connector mit dieser neuen Konfiguration
$c = Get-ADSyncConnector -Name $adConnector
$p = New-Object Microsoft.IdentityManagement.PowerShell.ObjectModel.ConfigurationParameter "Microsoft.Synchronize.ForceFullPasswordSync", String, ConnectorGlobal, $null, $null, $null
$p.Value = 1
$c.GlobalParameters.Remove($p.Name)
$c.GlobalParameters.Add($p)
$c = Add-ADSyncConnector -Connector $c

# Deaktivieren und reaktivieren Sie Azure AD Connect, um eine vollständige Passwortsynchronisation zu erzwingen
Set-ADSyncAADPasswordSyncConfiguration -SourceConnector $adConnector -TargetConnector $azureadConnector -Enable $false
Set-ADSyncAADPasswordSyncConfiguration -SourceConnector $adConnector -TargetConnector $azureadConnector -Enable $true
```
