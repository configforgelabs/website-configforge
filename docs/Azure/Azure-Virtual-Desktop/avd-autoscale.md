---
title: Scaling Plan
description: "How to configure Scaling Plan for AVD"
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



### Permission {#fecdb63c0b41427da6b01b22664f12d1}


To deploy a scaling plan for AVD, the service principal of Azure Virtual Desktop needs to be assigned the role **Virtualization Power On Off Contributor** on the **subscription.**


| Service principal                            | Application ID                       |
| -------------------------------------------- | ------------------------------------ |
| Azure Virtual DesktopWindows Virtual Desktop | 9cdead84-a844-4324-93f2-b2e6bb768d07 |


Example:


![](./avd-autoscale.fd0fa36d-1da6-43ac-98b3-8ec2b46bcb40.png)


Sources:

- [https://learn.microsoft.com/en-us/azure/virtual-desktop/autoscale-scaling-plan?WT.mc_id=Portal-HubsExtension&tabs=portal#assign-the-desktop-virtualization-power-on-off-contributor-role-with-the-azure-portal](https://learn.microsoft.com/en-us/azure/virtual-desktop/autoscale-scaling-plan?WT.mc_id=Portal-HubsExtension&tabs=portal#assign-the-desktop-virtualization-power-on-off-contributor-role-with-the-azure-portal)
- [https://learn.microsoft.com/en-us/azure/virtual-desktop/service-principal-assign-roles](https://learn.microsoft.com/en-us/azure/virtual-desktop/service-principal-assign-roles)
