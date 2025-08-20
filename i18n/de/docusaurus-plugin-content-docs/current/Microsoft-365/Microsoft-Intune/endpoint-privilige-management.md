---
title: Verwaltung von Endpunktprivilegien
description: "Informationen zur Verwaltung von Endpunktprivilegien"
sidebar_position: 0
slug: /endpoint-privilige-management
authors: [Tobias]
date: 2024-05-31
keywords: [Intune,EPM,Verwaltung von Endpunktprivilegien]
tags: [Intune,EPM,Verwaltung von Endpunktprivilegien]
last_update: 
 date: 2024-09-08
 author: Tobias
---


- HowTo Verwaltung von Endpunktprivilegien
[Einführung in die Verwaltung von Endpunktprivilegien in Intune - Ein erster Eindruck (intunestuff.com)](https://intunestuff.com/2024/04/04/endpoint-privilege-management-in-intune/)

```powershell
# Um Datei-Hashes zu erhalten
Get-FileHash "Ihr Pfad zur exe-Datei hier" | select-object Hash

# Um Zertifikat zu exportieren
Get-AuthenticodeSignature "Ihr Pfad zur exe-Datei hier" | Select-Object -ExpandProperty SignerCertificate | Export-Certificate -Type CERT -FilePath "c:\temp\IhrExeDateiZert.cer"
```