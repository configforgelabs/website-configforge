---
title: docusaurus
description: "Anleitung für DocuSaurus"
sidebar_position: 1
slug: /docusaurus
authors: [Tobias]
date: 2024-09-06
keywords: [Docusaurus]
tags: [Docusaurus]
last_update: 
 date: 2024-09-08
 author: Tobias
---



### Installieren {#2eafeda96ec54b51a28ac43f90334e3e}


1. Installieren Sie Node.js von [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. Wechseln Sie in das Verzeichnis, in dem die Docusaurus-Instanz sein soll
3. Führen Sie npx create-docusaurus@latest aus, setzen Sie den Instanznamen und das Template (klassisch)
4. Wie man Azure Static WebApp verwendet
[#11: Inhalte mit Docusaurus & Azure Static Web Apps teilen - DEV Community](https://dev.to/azure/11-share-content-with-docusaurus-azure-static-web-apps-30hc)
5. Führen Sie `npx create-docusaurus@latest website-justinn classic --typescript` aus



### Ausführen {#3e342a47361545b9bf8777815eb528c4}


1. Erstellen `npm run build`
2. Erstellen und starten `npm run start`
3. Starten `npm run serve`
4. Erstellen `npm run docusaurus build`
5. Erstellen und starten `npm docusaurus start`



### Aktualisieren {#e786ca280b004a2ea6d600d1cfa38de3}


Holen Sie sich den Aktualisierungsbefehl mit `npx docusaurus --version`, wenn es eine neuere Version gibt, wird der Befehl bereitgestellt:


![](./docusaurus.bcbe9f7b-bf19-40c3-933c-498c376bfd99.png)


Beispiel:
`npm i @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/theme-live-codeblock@latest @docusaurus/module-type-aliases@latest @docusaurus/tsconfig@lates`

