---
title: Skalierungsplan
description: "Wie man den Skalierungsplan für AVD konfiguriert"
sidebar_position: 0
slug: /avd-autoscale
authors: [Tobias]
date: 2024-02-16
keywords: [AVD,Azure Virtual Desktop,Hibernate,Autoscale]
tags: [AVD,Azure Virtual Desktop,Hibernate,Autoscale]
last_update: 
 date: 2024-09-08
 author: Tobias
---

### Berechtigung {#fecdb63c0b41427da6b01b22664f12d1}

Um einen Skalierungsplan für AVD bereitzustellen, muss dem Dienstprinzipal von Azure Virtual Desktop die Rolle **Virtualization Power On Off Contributor** auf dem **Abonnement** zugewiesen werden.

| Dienstprinzipal                             | Anwendungs-ID                        |
| ------------------------------------------- | ------------------------------------ |
| Azure Virtual DesktopWindows Virtual Desktop | 9cdead84-a844-4324-93f2-b2e6bb768d07 |

Beispiel:

![](./avd-autoscale.fd0fa36d-1da6-43ac-98b3-8ec2b46bcb40.png)

Quellen:

- [https://learn.microsoft.com/en-us/azure/virtual-desktop/autoscale-scaling-plan?WT.mc_id=Portal-HubsExtension&tabs=portal#assign-the-desktop-virtualization-power-on-off-contributor-role-with-the-azure-portal](https://learn.microsoft.com/en-us/azure/virtual-desktop/autoscale-scaling-plan?WT.mc_id=Portal-HubsExtension&tabs=portal#assign-the-desktop-virtualization-power-on-off-contributor-role-with-the-azure-portal)
- [https://learn.microsoft.com/en-us/azure/virtual-desktop/service-principal-assign-roles](https://learn.microsoft.com/en-us/azure/virtual-desktop/service-principal-assign-roles)
