---
title: Endpoint Privilege Management
description: "Endpoint Privilege Management information"
sidebar_position: 0
slug: /endpoint-privilige-management
authors: [Tobias]
date: 2024-05-31
keywords: [Intune,EPM,Endpoint Privilege Management]
tags: [Intune,EPM,Endpoint Privilege Management]
last_update: 
 date: 2024-09-08
 author: Tobias
---


- HowTo Endpoint Privilege Management
[Introducing Endpoint Privilege Management in Intune - A First Impression (intunestuff.com)](https://intunestuff.com/2024/04/04/endpoint-privilege-management-in-intune/)

```powershell
# To get file hashes
Get-FileHash "your exe file path here" | select-object Hash

# To export certificate
Get-AuthenticodeSignature "your exe file path here" | Select-Object -ExpandProperty SignerCertificate | Export-Certificate -Type CERT -FilePath "c:\temp\YourExeFileCert.cer"
```

