---
title: Zusammenarbeit in Mehrmandanten-Umgebungen
description: "Zusammenarbeit in Mehrmandanten-Umgebungen"
sidebar_position: 1
slug: /multitenant-collaboration
authors: [Tobias]
date: 2024-05-20
keywords: [Entra ID, Zusammenarbeit in Mehrmandanten-Umgebungen]
tags: [Entra ID, Zusammenarbeit in Mehrmandanten-Umgebungen]
last_update: 
 date: 2024-09-08
 author: Tobias
---



### Fehlerbehebung {#6743eef4cf1d452e96051f4e2a2d25f6}


Wenn Sie Probleme bei der Konfiguration im Admin-Portal haben oder keines der Zusammenarbeitsmitglieder Eigentümer ist, können Sie Graph-Abfragen verwenden, um das Problem zu beheben.


In meinem Fall hatte ich einen verwaisten Mitgliedsmandanten. Da der Eigentümer nicht mehr existierte, war es unmöglich, die Konfiguration zu entfernen.


Durch Ändern der Einstellungen für die Zusammenarbeit in Mehrmandanten-Umgebungen über Graph konnte ich den fehlenden Mandanten hinzufügen und einen Mandanten von Mitglied zu Eigentümer ändern.


**Beispielcode:**


```powershell
# Hinzufügen eines Mandanten
$params = @{
	tenantId = "a62c1c56-49e8-46c8-a6a3-c465bbff8ae5"
	displayName = "Tenant DisplayName"
}

New-MgTenantRelationshipMultiTenantOrganizationTenant -BodyParameter $params

# Ändern des Mandanten von Mitglied zu Eigentümer
$json= '{"role": "owner"}'
$tenantID = "a62c1c56-49e8-46c8-a6a3-c465bbff8ae5"
Invoke-MGGraphRequest -Method PATCH -Uri https://graph.microsoft.com/v1.0/tenantRelationships/multiTenantOrganization/tenants/$tenantID  -Body $json -ContentType "application/json"

# Abrufen des Mandantenstatus
$tenantID = "a62c1c56-49e8-46c8-a6a3-c465bbff8ae5"
Invoke-Mggraphrequest -Method GET -Uri https://graph.microsoft.com/v1.0/tenantRelationships/multiTenantOrganization/tenants/$tenantID

# Ändern des Mandanten-Anzeigenamens
$json= '{"displayName": "Tenant DisplayName"}'
$tenantID = "a62c1c56-49e8-46c8-a6a3-c465bbff8ae5"
Invoke-Mggraphrequest -Method PATCH -Uri https://graph.microsoft.com/v1.0/tenantRelationships/multiTenantOrganization/tenants/$tenantID -Body $json -ContentType "application/json"

```


#### Synchronisation über Mandanten hinweg {#e806312ea70842ce85bf6c5a0b0c6118}


Aufgrund eines GUI-Fehlers konnte ich die Synchronisationskonfiguration nicht speichern.


Es hat mit Graph funktioniert, indem ich diesen Anweisungen gefolgt bin:


[Konfigurieren der Synchronisation über Mandanten hinweg mit PowerShell oder Microsoft Graph API - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure-graph?tabs=ms-powershell)
