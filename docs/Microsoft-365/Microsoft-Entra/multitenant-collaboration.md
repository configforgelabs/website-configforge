---
title: Multitenant collaboration
description: "Multitenant collaboration"
sidebar_position: 1
slug: /multitenant-collaboration
authors: [Tobias]
date: 2024-05-20
keywords: [Entra ID,Multitenant collaboration]
tags: [Entra ID,Multitenant collaboration]
last_update: 
 date: 2024-09-08
 author: Tobias
---



### Troubleshooting {#6743eef4cf1d452e96051f4e2a2d25f6}


If you have issues configuring in the admin portal or none of the collaboration members are owners, then you can use Graph queries to fix the issue.


In my case I had a orphaned member tenant. Because the owner did not exist anymore it was impossible to remove the configuration.


By changing the multitenant collaboration settings via graph I was able to add the missing tenant and to change a tenant from member to owner.


**Example code:**


```powershell
# Adding a tenant
$params = @{
	tenantId = "a62c1c56-49e8-46c8-a6a3-c465bbff8ae5"
	displayName = "Tenant DisplayName"
}

New-MgTenantRelationshipMultiTenantOrganizationTenant -BodyParameter $params

# Change tenant from memer to Owner
$json= '{"role": "owner"}'
$tenantID = "a62c1c56-49e8-46c8-a6a3-c465bbff8ae5"
Invoke-MGGraphRequest -Method PATCH -Uri https://graph.microsoft.com/v1.0/tenantRelationships/multiTenantOrganization/tenants/$tenantID  -Body $json -ContentType "application/json"

# Get tenant status
$tenantID = "a62c1c56-49e8-46c8-a6a3-c465bbff8ae5"
Invoke-Mggraphrequest -Method GET -Uri https://graph.microsoft.com/v1.0/tenantRelationships/multiTenantOrganization/tenants/$tenantID

# Change tenant DisplayName
$json= '{"displayName": "Tenant DisplayName"}'
$tenantID = "a62c1c56-49e8-46c8-a6a3-c465bbff8ae5"
Invoke-Mggraphrequest -Method PATCH -Uri https://graph.microsoft.com/v1.0/tenantRelationships/multiTenantOrganization/tenants/$tenantID -Body $json -ContentType "application/json"



```


#### Cross tenant sync {#e806312ea70842ce85bf6c5a0b0c6118}


Due to a GUI bug I wasn’t able to save the sync configuration.


It worked with Graph by following these instructions:


[Configure cross-tenant synchronization using PowerShell or Microsoft Graph API - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/multi-tenant-organizations/cross-tenant-synchronization-configure-graph?tabs=ms-powershell)

