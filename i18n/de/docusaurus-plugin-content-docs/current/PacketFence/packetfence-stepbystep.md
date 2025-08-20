---
title: Schritt-für-Schritt-Anleitung – PacketFence für Network Access Control in Unternehmen einrichten
description: "Umfassende Anleitung zur Einrichtung von PacketFence für sichere Netzwerkzugangskontrolle, inklusive Konfiguration, Zertifikaten und Intune-Integration."
sidebar_position: 0
slug: /packetfence-stepbystep
authors: [Tobias]
date: 2025-07-28
keywords: [PacketFence,Intune,Security]
tags: [PacketFence,Intune,Security]
last_update: 
 date: 2025-07-31
 author: Tobias
---



## Einführung {#23efa6da3fef80459bb9e27415f35118}

PacketFence ist eine leistungsfähige Open-Source-Lösung für Network Access Control (NAC), die robuste Sicherheitsfunktionen für Unternehmensnetzwerke bereitstellt. Sie steuert den Netzwerkzugang durch Authentifizierung, Autorisierung und Accounting und bietet zusätzlich Captive-Portal-Funktionen, BYOD-Registrierung sowie die Isolierung nicht konformer Geräte. Diese umfassende Anleitung führt IT-Systemingenieurinnen und -ingenieure durch Installation und Konfiguration – inklusive Zertifikaten, PKI-Integration und Intune-Anbindung.


## Erstkonfiguration {#23efa6da3fef80a29cbaeb2c6367d5e2}


### Zugriff auf den Konfigurator {#23efa6da3fef80758b1df759dc0cd2d6}

Nach dem ersten Start zeigt PacketFence eine Konsolenoberfläche. Die Standard-Zugangsdaten sind:

```shell
Username: root
Password: p@ck3tf3nc3
```


#### Root-Passwort ändern {#23efa6da3fef80f2bbbdc14a0d4e33b3}

Aus Sicherheitsgründen das Standard-Root-Passwort sofort ändern:

```shell
# als root
passwd

# den Eingabeaufforderungen folgen
```

![](./packetfence-stepbystep.23efa6da-3fef-8050-a9d2-eab9fc1d5cb0.png)


#### Netzwerkkonfiguration {#23efa6da3fef80c29e90cd0b786c61ae}

Während der Ersteinrichtung müssen die Netzwerkeinstellungen korrekt gesetzt werden. Passen Sie die Adaptereinstellungen an Ihre Umgebung an. PacketFence nutzt typischerweise mehrere Netzwerkschnittstellen, um Management-Traffic von Enforcement-Netzen zu trennen.

:::tip
Tipp: Planen Sie die Netzsegmentierung vorab. Optimal sind klar getrennte Management-, Registrierungs-, Isolations- und Produktivnetze. Die Management-Schnittstelle gehört in ein sicheres Management-VLAN; weitere Interfaces übernehmen Registrierung und Isolation.
:::

Bei der Interface-Konfiguration vergeben Sie feste IPs für die Management-Schnittstelle und bestimmen, welche Interfaces PacketFence-Enforcements übernehmen. Der Konfigurator führt durch die Einrichtung von:

- Management-Netz (für Administration)
- Registrierungsnetz (Geräte-Onboarding)
- Isolationsnetz (Quarantäne nicht konformer Geräte)
- Produktivnetze (normaler Netzwerkzugang)


#### Basissetup abschließen {#23efa6da3fef800098b7cee7d8f0734f}

Folgen Sie den Bildschirmhinweisen. Die Fingerbank-Integration kann zunächst übersprungen werden – sie ist nicht zwingend erforderlich. Fingerbank verbessert die Geräteerkennung und kann später aktiviert werden.

Notieren Sie alle während der Einrichtung ausgegebenen Passwörter – sie werden später benötigt. Der Konfigurator erzeugt mehrere Zugangsdaten (Datenbank, Admin-Portal und interne Dienste).

Nach Abschluss der Grundkonfiguration ist das Admin-Interface per Browser erreichbar. Melden Sie sich mit den Admin-Daten an.


## Webserver-Zertifikate einrichten {#23efa6da3fef800fa909dc18293f29e4}

Für den produktiven Betrieb sind sauber signierte SSL-Zertifikate essenziell. Wir verwenden ein öffentlich signiertes Wildcard-Zertifikat für den Webserver. So erhalten Benutzer am Captive Portal keine Zertifikatswarnungen – das erhöht Vertrauen und verhindert schlechte Gewohnheiten.


### Zertifikatsformate konvertieren {#23efa6da3fef804980e4c723a4f20c3b}

Liegt das Zertifikat als p12/pfx vor, extrahieren Sie die Komponenten wie folgt:

#### Unter macOS: {#23efa6da3fef80c8a004fdd68c463d52}

```bash
# unverschlüsselten RSA-Private Key extrahieren
openssl pkcs12 -in bundle.p12 -nocerts -nodes | tee tmp.key | openssl pkcs8 -topk8 -nocrypt -in /dev/stdin -out server.key

# Server-Zertifikat extrahieren (inkl. SANs)
openssl pkcs12 -in bundle.p12 -clcerts -nokeys -out server.crt

# Aufräumen
rm -f tmp.key
```

Diese Befehle extrahieren den Private Key und das Zertifikat aus einem PKCS#12-Bundle. Der Zwischenschritt mit tmp.key stellt sicher, dass das Format zu PacketFence passt. Das Ergebnis sind ein unverschlüsselter Private Key im PKCS#8-Format (server.key) und das Zertifikat inkl. SANs (server.crt).

:::tip
:::note
Wichtig: Der Private-Key-Block muss mit -----BEGIN RSA PRIVATE KEY----- beginnen und korrekt enden. Stellen Sie außerdem sicher, dass die Intermediate-CA enthalten ist, sonst ist der Portal-Dienst auf Port 443 nicht erreichbar.
:::
:::


### Web-Zertifikat installieren {#23efa6da3fef8079a738cc4144542e28}

1. Im Admin-Portal: **System Configuration → SSL Certificates → Edit HTTP Certificates**
2. **HTTP Server Certificate** mit Inhalt von **server.crt** ersetzen (inkl. BEGIN/END)
3. Optional: **Find HTTPs Server intermediate CA(s) automatically** deaktivieren und die Intermediate-CA manuell einfügen
4. **HTTP Server Private Key** mit **server.key** ersetzen (inkl. BEGIN/END)
5. **Save** klicken

	![](./packetfence-stepbystep.23efa6da-3fef-806a-8c9c-f3a8f175d938.png)

6. **WICHTIG:** Dienste neu starten (Button „Restart“) – damit wird u. a. HTTP/80 verfügbar

	![](./packetfence-stepbystep.23efa6da-3fef-8088-babe-cb603b9901c8.png)

:::note
:::tip
Prüfen Sie nach Zertifikatswechsel, ob HTTP und HTTPS korrekt laufen. Browser-Zertifikatsinfos helfen bei der Validierung. Das Captive Portal muss auf HTTP und HTTPS funktionieren, um Umleitungen sauber zu verarbeiten.
:::
:::


## PKI-Infrastruktur einrichten {#23efa6da3fef800f8622cc4052a009dc}

PacketFence enthält eine integrierte PKI (Public Key Infrastructure) zur Erstellung und Verwaltung von Zertifikaten. Das ist besonders für 802.1X-Zertifikatsauthentifizierung relevant und sicherer als Passwörter.


### Certificate Authority erstellen {#23efa6da3fef80239851e54cc97e3fce}

1. In der PKI-Sektion **New Certificate Authority** anlegen

	![](./packetfence-stepbystep.23efa6da-3fef-80b8-969c-efe7d8555376.png)

2. CA-Daten der Organisation ausfüllen und speichern (Organization, OU, Common Name sinnvoll befüllen)

	![](./packetfence-stepbystep.23efa6da-3fef-80ca-b8b1-c6dd2463bc51.png)

3. Öffentliches CA-Zertifikat als **ca.crt** sichern – wird später für Geräte-Configs und RADIUS benötigt

	![](./packetfence-stepbystep.23efa6da-3fef-808d-98f7-fd1994e78bd2.png)

Die CA ist das Fundament Ihrer PKI. Alle von PacketFence ausgestellten Zertifikate werden damit signiert. Clients müssen diese CA vertrauen.


### Microsoft Intune integrieren {#23efa6da3fef80f9a1b5e527023a94d6}

Vor dem Erstellen von Templates richten wir die Intune-Integration ein, um Zertifikate automatisiert auf Mobilgeräte zu verteilen:

1. In Microsoft Entra ID (Azure AD) eine App-Registrierung anlegen
2. Folgende Berechtigungen hinzufügen:
	- DeviceManagementConfiguration.ReadWrite.All
	- DeviceManagementManagedDevices.ReadWrite.All
	- DeviceManagementServiceConfig.ReadWrite.All

	![](./packetfence-stepbystep.23efa6da-3fef-80c4-8188-d4749bab2849.png)

3. Einen Client-Secret erstellen und den Wert sichern (wird nur einmal angezeigt)

	![](./packetfence-stepbystep.23efa6da-3fef-80ef-b685-f7b8adf2774b.png)

4. In PacketFence: **Configuration → Cloud Services → New Cloud Service → Intune**

	![](./packetfence-stepbystep.23efa6da-3fef-80f3-9b79-e5e315fe6861.png)

5. Profilname, Tenant-ID, Client-ID und Secret eintragen – verbindet PacketFence mit Intune und ermöglicht das Pushen von Zertifikat-Profilen

Diese Integration ermöglicht die automatisierte Zertifikatverteilung an verwaltete Geräte – weniger Aufwand und höhere Sicherheit.


### Zertifikat-Templates erstellen {#23efa6da3fef8062b3e9f4d74caabcb6}

Wir benötigen zwei Templates mit spezifischen Einstellungen:

![](./packetfence-stepbystep.23efa6da-3fef-800d-b782-fe29ebfebde2.png)

#### 1. RADIUS-Server-Zertifikat-Template {#23efa6da3fef80efa5f2ce9b97a206b2}

- Maximale Gültigkeit: 825 Tage (Best Practice für Serverzertifikate)
- Zweck: RADIUS-Serverauthentifizierung
- Key Usage: Digital Signature, Key Encipherment
- Extended Key Usage: Server Authentication

![](./packetfence-stepbystep.23efa6da-3fef-80fb-96e9-cdbce12c3ade.png)

Dieses Template erzeugt das Zertifikat, mit dem die TLS-Verbindung zwischen Clients und RADIUS während 802.1X geschützt wird.

#### 2. Benutzer-Zertifikat-Template {#23efa6da3fef802b977de668863160b3}

- Gültigkeit: 365 Tage (Balance zwischen Sicherheit und Aufwand)
- SCEP aktiviert (für automatische Verteilung)
- Cloud-Intune-Integration aktiviert
- Key Usage: Digital Signature
- Extended Key Usage: Client Authentication

	![](./packetfence-stepbystep.23efa6da-3fef-80ae-b32c-d9fbc52702f9.png)

Dieses Template erzeugt Zertifikate für Benutzer-Authentifizierung – sichere 802.1X-Verbindungen ohne Passwortabfrage.

Für das Benutzer-Template beachten:

1. SCEP im Tab aktivieren (automatische Enrollment)
2. Sicheres Challenge-Passwort generieren
3. Cloud Integration aktivieren und das Intune-Profil verknüpfen

	![](./packetfence-stepbystep.23efa6da-3fef-8065-8b37-c7d514fef880.png)

SCEP ermöglicht automatische Zertifikatsanforderungen, Intune sorgt dafür, dass nur verwaltete Geräte Zertifikate erhalten.


### RADIUS-Serverzertifikat erstellen und installieren {#23efa6da3fef805a8629dab40ebe6952}

Für RADIUS benötigen wir ein Zertifikat auf Basis des RADIUS-Server-Templates. Es sichert die Authentisierung beim Verbindungsaufbau:

1. **Integration → PKI → Certificates → Certificates** und neues Zertifikat mit RADIUS-Server-Template anlegen

	![](./packetfence-stepbystep.23efa6da-3fef-80ee-97fb-c90616f12b7e.png)

2. Zertifikatsdetails eintragen – FQDN des RADIUS-Servers als **Common Name** und **DNS Names** verwenden (Server-Identität für Clients prüfbar)

	![](./packetfence-stepbystep.23efa6da-3fef-80ba-82b7-c0e83477420c.png)

3. Bei mehreren erreichbaren Namen/IPs alle als SAN hinterlegen
4. Zertifikatsbundle herunterladen

	![](./packetfence-stepbystep.23efa6da-3fef-8029-bfa3-fe99debafcb9.png)

:::tip
:::note
Hinweis: Das heruntergeladene p12 nutzt ein älteres Verschlüsselungsformat. Für OpenSSL-Extraktion ggf. `-legacy` verwenden. Windows/macOS können das i. d. R. importieren. Das p12 enthält Zertifikat und Private Key (passwortgeschützt).
:::
:::

#### Zertifikatskomponenten extrahieren {#23efa6da3fef809eae0fc436efe041ba}

Unter macOS die benötigten Dateien aus dem Bundle extrahieren:

```bash
# unverschlüsselten RSA-Private Key extrahieren
openssl pkcs12 -in bundle.p12 -nocerts -nodes -legacy | tee tmp.key | openssl pkcs8 -topk8 -nocrypt -in /dev/stdin -out server.key

# Server-Zertifikat (inkl. SANs) extrahieren
openssl pkcs12 -in bundle.p12 -clcerts -nokeys -out server.crt -legacy

# Aufräumen
rm -f tmp.key
```

![](./packetfence-stepbystep.23efa6da-3fef-80f1-8804-cccaaa6c2bf8.png)

`-legacy` ist nötig, weil PacketFence ältere PKCS#12-Formate verwendet. Ergebnis: server.key (Private Key) und server.crt (Zertifikat).

#### RADIUS-Zertifikat installieren {#23efa6da3fef8063a62fe9e352550032}

1. **System Configuration → SSL Certificates → RADIUS → Edit RADIUS Certificate**
2. **RADIUS Server Certificate** mit **server.crt** ersetzen
3. **RADIUS Server Private Key** mit **server.key** ersetzen
4. **Certification Authority certificate** mit **ca.crt** ersetzen
5. **Save** und Details im Dialog prüfen

![](./packetfence-stepbystep.23efa6da-3fef-8099-a358-e7ad5550d5ee.png)

![](./packetfence-stepbystep.23efa6da-3fef-8046-af1e-ee2844821fcf.png)

Damit nutzt RADIUS das eigene Zertifikat für alle 802.1X-Vorgänge. Clients können die Server-Identität vor Anmeldeinformationen prüfen.


## SCEP für Mobile-Device-Management veröffentlichen {#23efa6da3fef8028b8f2e60dba42d735}

Damit mobile Geräte Zertifikate anfordern können, veröffentlichen wir den SCEP-Endpunkt im Internet. Microsoft Entra ID Application Proxy ermöglicht das selektiv, ohne den gesamten Server freizugeben.

:::tip
Aus Sicherheitsgründen nur den SCEP-Pfad veröffentlichen (z. B. `/scep/`). So bleibt die Angriffsfläche minimal.
:::


### Application Proxy einrichten {#23efa6da3fef80c4b968fd230678ce90}

1. Entra ID Admin-Portal → Application Proxy: [https://entra.microsoft.com/#view/Microsoft_AAD_IAM/AppProxyOverviewBlade](https://entra.microsoft.com/#view/Microsoft_AAD_IAM/AppProxyOverviewBlade)
2. **Configure an app** wählen
3. Für die interne URL:

	![](./packetfence-stepbystep.23efa6da-3fef-8081-8468-df430733b512.png)

	- HTTP verwenden (nicht HTTPS) – der PacketFence-SCEP-Endpunkt läuft auf HTTP
	- Format: `http://packetfence.ihredomain.tld/scep/`
	- `/scep/` am FQDN anfügen, um nur diesen Pfad zu veröffentlichen
4. Externe URL:
	- Zufälligen, schwer zu ratenden Namen verwenden (z. B. `scep-r4nd0m-n4m3`)
	- Standarddomain `msappproxy.net` ist ausreichend (oder eigene Domain)
	- Ebenfalls HTTP konfigurieren, passend zur internen URL
5. Pre-Authentication auf **Passthrough** setzen (SCEP-Clients können keine interaktive Anmeldung)

Der Application Proxy erstellt einen sicheren Tunnel vom Internet zu Ihrem internen PacketFence-SCEP, ohne den Server vollständig zu exponieren.


## SSCEP kompilieren und verwenden (Tests) {#23efa6da3fef80ca837bdb2d1aebfbc3}

Zum Testen der SCEP-Konfiguration können Sie **SSCEP** bauen und gegen Ihren PacketFence-SCEP-Endpunkt prüfen.

### SSCEP unter macOS bauen {#23efa6da3fef8034806bf2b2cdd835e2}

```bash
# 1) Xcode Command Line Tools
xcode-select --install

# 2) Laufzeit- & Build-Abhängigkeiten
brew install autoconf automake libtool pkg-config openssl

# 3) Quellcode holen
git clone https://github.com/certnanny/sscep.git
cd sscep

# 4) Autotools-Dateien regenerieren
glibtoolize
aclocal
automake -a -c -f
autoreconf

# 5) Konfigurieren – Homebrew-OpenSSL zeigen
export PKG_CONFIG_PATH="$(brew --prefix openssl@1.1)/lib/pkgconfig"
./configure

# 6) Kompilieren und installieren
make
sudo make install    # /usr/local/bin/sscep
```

### SCEP-Enrollment testen {#23efa6da3fef80d6b533e078395eb7cb}

```bash
# Schlüsselpaar und CSR erzeugen
openssl req -newkey rsa:2048 -keyout PRIVATEKEY.key -out MYCSR.csr

# CA-Zertifikat abrufen
sscep getca -u http://[your-app-proxy-url]/scep/UserCert -c ca.crt

# Enrollment ausführen
sscep enroll -c ./ca-prefix -k ./private.key -r ./MYCSR.csr -u http://[your-packetfence-server]/scep/UserCert -l cert.crt -d -v
```

So prüfen Sie, ob der SCEP-Endpunkt korrekt funktioniert, bevor Sie Geräte produktiv anbinden.


## Intune-Konfiguration {#23efa6da3fef807fa1b7f87dba7773ff}

Mit veröffentlichtem SCEP-Endpunkt verteilen wir CA-Zertifikat und SCEP-Profile via Microsoft Intune.

### CA-Zertifikat installieren {#23efa6da3fef80d59d80f249363b4bd1}

Alle Geräte müssen der Root-CA vertrauen. Erstellen Sie für jede Plattform passende Profile:

#### Windows-Geräte {#23efa6da3fef809fa045fa3d2901c398}

Trusted-Certificate-Profil mit **ca.crt** anlegen:

- Devices → Configuration profiles → Create profile
- Platform: Windows 10 and later
- Profile type: Templates → Trusted certificate
- Certificate file: **ca.crt** hochladen
- Destination: Computer certificate store – Root
- Auf Zielgruppen zuweisen

![](./packetfence-stepbystep.23efa6da-3fef-8067-adfc-e904ae966f81.png)

#### macOS-Geräte {#23efa6da3fef8058ae26f08089802ae8}

Separat für Benutzer- und Systemstore Profile erstellen, falls beide benötigt werden:

- Devices → Configuration profiles → Create profile
- Platform: macOS
- Profile type: Templates → Trusted certificate
- Certificate file: **ca.crt** hochladen
- Zwei Profile: User-Store und System-Store
- Auf Zielgruppen zuweisen

Bei Einsatz von Benutzer- und Gerätezertifikaten beide Stores bedienen.

![](./packetfence-stepbystep.23efa6da-3fef-807e-a85e-eab9c83f74cd.png)

#### iOS-Geräte {#23efa6da3fef80c9920de522115c0431}

iOS-spezifisches Trusted-Certificate-Profil erstellen:

- Devices → Configuration profiles → Create profile
- Platform: iOS/iPadOS
- Profile type: Templates → Trusted certificate
- **ca.crt** hochladen
- Auf Zielgruppen zuweisen

![](./packetfence-stepbystep.23efa6da-3fef-8063-9378-c06894bf2814.png)

### SCEP-Profile erstellen {#23efa6da3fef80728c7ec7e368c690fa}

Für jede Plattform ein SCEP-Zertifikatsprofil mit Ihrer veröffentlichten SCEP-URL anlegen:

```javascript
http://[your-unique-name].msappproxy.net/scep/UserCert
```

Für Windows u. a.:

- Certificate type: User
- Subject name format: Common Name als E-Mail oder UPN
- Validity: 1 Jahr
- Key usage: Digital signature
- Extended key usage: Client Authentication
- SCEP Server URLs: Ihre veröffentlichte SCEP-URL

	![](./packetfence-stepbystep.23ffa6da-3fef-80c3-92ad-eec91f67eadf.png)

Ähnliche Profile für macOS und iOS anlegen (plattformabhängige Optionen beachten). Weisen Sie die Profile denselben Gruppen zu wie das Trusted-Cert.


## RADIUS-Clients konfigurieren {#23efa6da3fef802abd50cce0e6609ab6}

Konfigurieren Sie Ihre Netzwerkgeräte (Switches, WLAN-Controller, APs) als RADIUS-Clients. Diese leiten Authentifizierungsanfragen an PacketFence weiter.

PacketFence-Doku für zahlreiche Hersteller:
[https://www.packetfence.org/doc/PacketFence_Network_Devices_Configuration_Guide.html](https://www.packetfence.org/doc/PacketFence_Network_Devices_Configuration_Guide.html)

In PacketFence definieren Sie jedes Netzgerät als RADIUS-Client:

- Configuration → Policies and Access Control → Network Devices
- Gerät mit IP und Shared Secret hinzufügen
- Rollen und Access-Policies nach Bedarf


### Beispiel: Ubiquiti-WLAN-Controller {#23efa6da3fef807db352d32adc517809}

Schritte zur Konfiguration:

1. Management-Oberfläche öffnen
2. Settings → RADIUS
3. Neuen RADIUS-Server mit PacketFence-IP anlegen
4. Shared Secret setzen (muss exakt mit PacketFence übereinstimmen)
5. Ports: 1812 (Auth), 1813 (Accounting)
6. Wireless Networks bearbeiten, die 802.1X nutzen
7. Security: „WPA Enterprise“, RADIUS-Profil wählen
8. Übernehmen und mit Client testen

Nach der Konfiguration leitet der Controller Anfragen an PacketFence, das Zertifikate prüft und Entscheidungen trifft.


## 802.1X-Authentifizierung testen {#23efa6da3fef80de9476cbdd44c5e184}

Vor dem Rollout sollte die 802.1X-Authentifizierung verifiziert werden. **eapol_test** eignet sich hervorragend, um ohne Hardware Clients zu simulieren.

### eapol_test.exe für Authentifizierungstests {#23efa6da3fef801b890ffeee3dcba4f6}

Das Tool stammt aus dem FreeRADIUS-Projekt und ist unter Windows als eapol_test.exe verfügbar. Es simuliert 802.1X-Clients mit diversen EAP-Methoden.

:::tip
:::note
Download: [https://github.com/janetuk/eapol_test](https://github.com/janetuk/eapol_test)
:::
:::

#### Test-Konfigurationsdateien erstellen {#23efa6da3fef8079baabdeb96e00d8dc}

Vor Tests Konfigurationsdateien je Methode anlegen. Beispiele für gängige Szenarien:

#### 1. Zertifikatsbasierte Authentifizierung (EAP-TLS) {#23efa6da3fef80059b34ffceda6af5cd}

Datei `eapol.conf`:

```bash
network={
    ssid="[NETWORK_NAME]"
    key_mgmt=WPA-EAP
    eap=TLS
    identity="[IDENTITY]"            # CN oder UPN im Client-Zertifikat
    ca_cert="[CA_CERT_PATH]"         # Root (und optional Intermediate) CA
    private_key="[PRIVATE_KEY_PATH]" # Client-Zertifikat + Key im PKCS#12-Format
    private_key_passwd="[PASSWORD]"  # Passwort aus dem Export
}
```

#### 2. Benutzer/Passwort mit AD (PEAP-MSCHAPv2) {#23efa6da3fef80849428c2d56092ead5}

Datei `eapolPEAP.conf`:

```bash
network={
    ssid="[NETWORK_NAME]"
    key_mgmt=WPA-EAP
    eap=PEAP
    identity="[USERNAME]"
    password="[PASSWORD]"
    ca_cert="[CA_CERT_PATH]"
    phase2="auth=MSCHAPV2"
}
```

#### Authentifizierungstests ausführen {#23efa6da3fef804ca796e6e74563733e}

Mit vorbereiteten Dateien gegen den PacketFence-RADIUS testen. Verwenden Sie die RADIUS-IP und das korrekte Shared Secret:

```shell
# EAP-TLS
eapol_test -a [RADIUS IP ADDRESS] -p 1812 -s [PASSPHRASE] -M 00:11:22:33:44:55 -c eapol.conf

# PEAP-MSCHAPv2
eapol_test -a [RADIUS IP ADDRESS] -p 1812 -s [PASSPHRASE] -M 00:11:22:33:44:55 -c eapolPEAP.conf
```

Parameter:

- -a: RADIUS-Server-IP
- -p: Port (typisch 1812)
- -s: Shared Secret (wie in PacketFence)
- -M: simulierte MAC-Adresse
- -c: Pfad zur Konfigurationsdatei

#### Testergebnisse analysieren {#23efa6da3fef809b82fce6998148ac88}

Bei Erfolg erscheint „SUCCESS“. Bei Fehlern helfen Meldungen bei der Diagnose. Prüfen Sie u. a.:

- Läuft und ist RADIUS korrekt konfiguriert?
- Ist das Client-Zertifikat gültig und der CA vertraut?
- Ist die CA auf dem RADIUS korrekt installiert?
- Stimmt das Shared Secret?
- Für AD: Stimmen die Zugangsdaten, funktioniert die AD-Integration?

Für detailliertes Debugging während des Tests Logs einsehen:

```bash
sudo raddebug -t 300 -f /usr/local/pf/var/run/radiusd.sock
```

Das zeigt Authentifizierungsversuche in Echtzeit und hilft bei komplexen Problemen.

:::tip
:::note
Hinweis: Warnungen wie „No EAP types configured“ können oft ignoriert werden – sie sind informativ, keine Fehler.
:::
:::


## Fehlerbehebung {#23efa6da3fef80ce8325e019033d4816}

### MySQL-Datenbankberechtigungen {#23efa6da3fef8092898fcb66883ed0a6}

Treten Datenbankfehler auf, Berechtigungen prüfen:

```bash
mysql -u root -p       # oder sudo mysql
GRANT ALL PRIVILEGES ON pf.* TO 'pf'@'localhost';
FLUSH PRIVILEGES;
```

### Detailliertes RADIUS-Logging {#23efa6da3fef80c295dafc0807b00d14}

Für detaillierte RADIUS-Logs:

```bash
sudo raddebug -t 300 -f /usr/local/pf/var/run/radiusd.sock
```

Zeigt Authentifizierungen in Echtzeit – hilfreich bei Zertifikats- oder Konfigurationsproblemen.

### Datenbankkonfiguration {#23efa6da3fef80048f37f7d259294c91}

Passwortänderungen und Konfiguration prüfen:

```shell
# MySQL-Passwort ändern
ALTER USER 'pf'@'localhost' IDENTIFIED BY 'new_secure_password';
FLUSH PRIVILEGES;

# Grants aktualisieren
GRANT SELECT,INSERT,UPDATE,DELETE,EXECUTE,LOCK TABLES ON pf.* TO pf@'%' IDENTIFIED BY 'new_secure_password';
GRANT SELECT,INSERT,UPDATE,DELETE,EXECUTE,LOCK TABLES ON pf.* TO pf@'localhost' IDENTIFIED BY 'new_secure_password';
FLUSH PRIVILEGES;

# DB-Konfiguration anzeigen
/usr/local/pf/bin/pfcmd pfconfig show resource::Database

# Konfiguration neu laden
/usr/local/pf/bin/pfcmd configreload hard

# PacketFence-Dienste neu starten
sudo /usr/local/pf/bin/pfcmd service pf restart
```

Nach Passwortänderungen ggf. Secrets in integrierten Diensten (z. B. Entra App) aktualisieren.


## Fazit {#23efa6da3fef806f9c9af5d08467c026}

Sie haben PacketFence als NAC-Lösung mit PKI und Intune-Anbindung eingerichtet. Das ermöglicht zertifikatsbasierte Authentifizierung und sicheres Gerätemanagement im Unternehmensnetz.

Die Vorteile:

- Zertifikatsauthentifizierung eliminiert Passwortschwachstellen
- Automatisierte Zertifikatsverteilung reduziert Aufwand
- Intune-Integration stellt sicher, dass nur verwaltete Geräte Zertifikate erhalten
- Zentrale Richtlinien verbessern die Sicherheitslage

Sichern Sie regelmäßig die PacketFence-Konfiguration und halten Sie das System aktuell. Planen Sie Zertifikatsrotation und überwachen Sie Auth-Fehler als Indikator für Konfigurationsprobleme.

Nutzen Sie die Reporting-Funktionen von PacketFence, um Trends zu beobachten und mögliche Sicherheitsvorfälle zu erkennen.

TESt


## Komplette Einrichtungsanleitung: PacketFence-Netzwerksicherheit {#241fa6da3fef80948346d9f5e8eeab1c}

### Was Sie lernen {#241fa6da3fef80b5b4ece19de5f1a050}

Diese Anleitung führt durch die Einrichtung von PacketFence – einer Sicherheitslösung, die kontrolliert, wer Zugriff auf Ihr Netzwerk erhält. Am Ende haben Sie ein Netzwerk, in dem nur autorisierte Geräte mit Zertifikaten verbinden dürfen.

**Geschätzte Zeit:** 4–6 Stunden

**Schwierigkeitsgrad:** Mittel

**Voraussetzungen:** Grundkenntnisse in Netzwerken

---

### Was ist PacketFence? {#241fa6da3fef80e392bbf2d5d26a6e70}

PacketFence ist der „digitale Sicherheitsdienst“ für Ihr Netz. Es:

- **Kontrolliert Zugriffe**: Nur autorisierte Geräte kommen rein
- **Stellt Zertifikate aus**: Digitale Ausweise für vertrauenswürdige Geräte
- **Überwacht Aktivitäten**: Wer ist im Netz, was passiert?
- **Erzwingt Richtlinien**: Ihre Sicherheitsregeln werden automatisch umgesetzt

**Screenshot-Platzhalter: [PacketFence Dashboard Overview]**

---

### Einstieg: Grundkonfiguration {#241fa6da3fef803bac37da1e32e210c0}

#### Schritt 1: Erste Anmeldung {#241fa6da3fef809a88caca6784f5c7ba}

Beim ersten Start erscheint ein textbasiertes Setup.

**Standard-Zugangsdaten:**

- Username: `root`
- Password: `p@ck3tf3nc3`

**Screenshot-Platzhalter: [Initial Login Screen]**

> ⚠️ Sicherheit: Das Passwort sofort ändern – Standardpasswörter sind ein Risiko.

**So ändern Sie das Passwort:**

1. Nach Login `passwd` eingeben
2. Den Anweisungen folgen
3. Passwort sicher im Passwortmanager ablegen

#### Schritt 2: Netzwerkplanung {#241fa6da3fef80bba21fd65a7d00fe88}

Vor der Konfiguration das Netzlayout planen. Ideal sind getrennte Segmente für unterschiedliche Zwecke:

**Screenshot-Platzhalter: [Network Diagram Example]**

**Segmente:**

- **Management**: Admin-Zugriff
- **Registrierung**: Onboarding neuer Geräte
- **Isolation**: Quarantänebereich
- **Produktion**: Regelbetrieb

> 💡 Tipp: IP-Bereiche und VLANs vorab dokumentieren – spart Zeit und Fehler.

#### Schritt 3: Basiskonfiguration abschließen {#241fa6da3fef80cb9336da257f237ba8}

Wizardschritte:

1. **Interfaces**: IPs pro Segment
2. **DNS**: Unternehmens-DNS
3. **Zeit**: Zeitzone/NTP
4. **Datenbank**: wird automatisch angelegt

**Optional zunächst überspringen:**

- **Fingerbank** (später aktivierbar)
- **Erweiterte Features** (erst Kernfunktionen aufbauen)

> ⚡ Wichtig: Alle Passwörter/Einstellungen sichern – werden später benötigt.

---

### Sicherheitszertifikate einrichten {#241fa6da3fef804a8fd0c74b0d999fc8}

Zertifikate sind digitale Ausweise für Geräte – sie sichern die Verbindungen.

#### Warum Zertifikate? {#241fa6da3fef80c1970cfefae8c7d2b7}

Ohne korrekte Zertifikate:

- Warnungen im Browser/Client
- Ablehnung von Verbindungen
- Schwächere Sicherheit

Mit korrekten Zertifikaten:

- Nahtlose, sichere Verbindungen
- Keine irreführenden Warnungen
- Starker Schutz vor unbefugtem Zugriff

#### Schritt 4: Web-Zertifikate installieren {#241fa6da3fef8053bf14faffbb77fd4f}

Mit Zertifikaten von Anbietern (DigiCert, Let’s Encrypt, …):

**Unter Mac/Linux:**

```shell
# Zertifikatsdateien extrahieren
openssl pkcs12 -in your-certificate.p12 -nocerts -nodes | \
openssl pkcs8 -topk8 -nocrypt -out server.key

openssl pkcs12 -in your-certificate.p12 -clcerts -nokeys -out server.crt
```

**In PacketFence:**

1. **System Configuration → SSL Certificates → Edit HTTP Certificates**
2. **HTTP Server Certificate** mit `server.crt`
3. **HTTP Server Private Key** mit `server.key`
4. **Save**
5. **Restart** bei Aufforderung

**Screenshot-Platzhalter: [SSL Certificate Configuration Screen]**

---

### Eigene CA (PKI) erstellen {#241fa6da3fef80d1bb11f9e1ae7faf17}

#### Schritt 5: Certificate Authority anlegen {#241fa6da3fef806cbb8bc941c052005f}

**Screenshot-Platzhalter: [PKI Setup Screen]**

1. **Integration → PKI → Certificate Authorities**
2. **New Certificate Authority**
3. Felder ausfüllen (Organization, Country, Common Name)
4. **Save**
5. **ca.crt** sichern – wird mehrfach benötigt

> 📋 Doku-Tipp: Dokument mit Zertifikatsdetails, Passwörtern, Speicherorten anlegen.

#### Schritt 6: Microsoft-Integration (optional, empfohlen) {#241fa6da3fef80709dc0d34d9365d52e}

**In Entra ID:**

1. App-Registrierung
2. Berechtigungen für Gerätemanagement
3. Client Secret erstellen (sicher ablegen)

**In PacketFence:**

1. **Configuration → Cloud Services → New Cloud Service → Intune**
2. Profilname, Tenant-ID, Client-ID, Client Secret eintragen

**Screenshot-Platzhalter: [Intune Integration Setup]**

---

### Zertifikat-Templates {#241fa6da3fef80c1acccc70584559df8}

#### Schritt 7: RADIUS-Server-Template {#241fa6da3fef807e81c3eb322d725514}

- **Validity**: 825 Tage
- **Purpose**: Server Authentication
- **Key Usage**: Digital Signature, Key Encipherment
- **EKU**: Server Authentication

**Screenshot-Platzhalter: [RADIUS Certificate Template]**

#### Schritt 8: User-Template {#241fa6da3fef805498bfc867862e78c8}

- **Validity**: 365 Tage
- **SCEP**: aktiviert
- **Intune**: aktiviert
- **Key Usage**: Digital Signature
- **EKU**: Client Authentication

**Wichtig:**

1. SCEP aktivieren
2. Starkes Challenge-Passwort
3. Intune-Profil verknüpfen

**Screenshot-Platzhalter: [User Certificate Template Configuration]**

---

### Server-Zertifikate erstellen & installieren {#241fa6da3fef8027b5b1f65711baf906}

#### Schritt 9: RADIUS-Serverzertifikat erzeugen {#241fa6da3fef800ead56e7659dcede0d}

1. **Integration → PKI → Certificates → Certificates**
2. **New Certificate** → RADIUS-Server-Template
3. **Common Name**: FQDN (z. B. `radius.company.com`)
4. **DNS Names**: alle genutzten Namen
5. Bundle herunterladen

**Screenshot-Platzhalter: [Certificate Creation Screen]**

#### Schritt 10: Dateien extrahieren & installieren {#241fa6da3fef80fa9b1dc6f422e04e8d}

**Unter Mac/Linux:**

```shell
# Zertifikat und Key extrahieren
openssl pkcs12 -in bundle.p12 -nocerts -nodes -legacy | \
openssl pkcs8 -topk8 -nocrypt -out server.key

openssl pkcs12 -in bundle.p12 -clcerts -nokeys -out server.crt -legacy
```

**In PacketFence:**

1. **System Configuration → SSL Certificates → RADIUS → Edit RADIUS Certificate**
2. **RADIUS Server Certificate**: `server.crt`
3. **RADIUS Server Private Key**: `server.key`
4. **Certification Authority certificate**: `ca.crt`
5. **Save**

**Screenshot-Platzhalter: [RADIUS Certificate Installation]**

---

### Zertifikate für mobile Geräte bereitstellen {#241fa6da3fef80769c36c19bee0aab62}

#### Schritt 11: Application Proxy (Microsoft) {#241fa6da3fef80b2be42c928dda6c97a}

Sicherer Tunnel, damit Geräte überall Zertifikate anfordern können.

1. **Entra ID Admin → Application Proxy** → **Configure an app**
2. **Internal URL**: `https://your-packetfence-server/scep/UserCert`
3. **External URL**: vom Proxy bereitgestellt
4. **Pre-Authentication**: **Passthrough**

**Screenshot-Platzhalter: [Application Proxy Configuration]**

> 🔒 Sicherheit: Nur den Enrollment-Pfad veröffentlichen – nicht den gesamten Server.

---

### Verteilung über Microsoft Intune {#241fa6da3fef80d4892aea05bb134067}

#### Schritt 12: Root-CA auf allen Geräten {#241fa6da3fef80148ececa8b0fe3b040}

**Windows:**

1. Devices → Configuration profiles → Create profile
2. Platform: Windows 10 and later
3. Profile type: Templates → Trusted certificate
4. Datei: `ca.crt`
5. Ziel: Computer-Root-Store
6. Zuweisen

**macOS:**

- Je ein Profil für User- und System-Store

**iOS/iPadOS:**

- iOS-spezifisches Trusted-Cert-Profil

**Screenshot-Platzhalter: [Intune Certificate Policy Configuration]**

#### Schritt 13: Automatisches Enrollment (SCEP) {#241fa6da3fef80c2a2b8e759f0e5e535}

- **Type**: User
- **Subject**: E-Mail/UPN
- **Validity**: 1 Jahr
- **Key usage**: Digital signature
- **EKU**: Client Authentication
- **SCEP URL**: aus Schritt 11

**Screenshot-Platzhalter: [SCEP Profile Configuration]**

---

### Tests {#241fa6da3fef80c2bccbe08d6cc02ebb}

#### Schritt 14: Verteilung prüfen {#241fa6da3fef808e89f4ef5a900b0d14}

1. Erhalten Geräte die Profile?
2. Sind Root-CA und User-Zertifikat installiert?
3. Funktioniert die 802.1X-Verbindung?

**Häufige Probleme:**

| Problem | Lösung |
| --- | --- |
| Keine Zertifikate | Intune-Zielgruppen & Enrollment prüfen |
| Zertifikatsfehler | SCEP-URL und Challenge-Passwort prüfen |
| Auth-Fehler | RADIUS-Shared-Secrets kontrollieren |

---

### Netzgeräte konfigurieren {#241fa6da3fef80979525cf4f9fb97034}

#### Schritt 15: Infrastruktur anbinden {#241fa6da3fef803299caf4a5475e62ff}

**In PacketFence:**

1. **Configuration → Policies and Access Control → Network Devices**
2. Pro Gerät: IP, Shared Secret, Typ/Modell

**Ubiquiti-Beispiel:**

1. Controller öffnen
2. **Settings → RADIUS**
3. RADIUS-Server: PacketFence-IP
4. Ports: 1812/1813; Secret passend zum Server
5. WLANs: **WPA Enterprise**, RADIUS-Profil

**Screenshot-Platzhalter: [Network Device Configuration]**

---

### Tests & Troubleshooting {#241fa6da3fef80a78c70e994947fcd1c}

#### Schritt 16: Gesamtfunktion prüfen {#241fa6da3fef80a5b155d84c7fefef98}

**Checkliste:**

- [ ] Automatische Zertifikatsverteilung ok?
- [ ] Installation ohne Benutzereingriff?
- [ ] 802.1X-Verbindung erfolgreich?
- [ ] Logs zeigen erfolgreiche Authentifizierungen?

**Troubleshooting:**

1. **Logs**: Status → System Logs
2. **RADIUS-Konnektivität**: Secrets/Ports prüfen
3. **Zertifikate**: Root + User vorhanden? Laufzeiten korrekt?

**Screenshot-Platzhalter: [Log Analysis Screen]**

---

### Betrieb & Best Practices {#241fa6da3fef80908fc3fd825f202fff}

#### Laufende Aufgaben {#241fa6da3fef80c78b23d4aaafcb9c5e}

**Wöchentlich:**

- Auth-Logs prüfen
- Zertifikatslaufzeiten überwachen
- Systemressourcen im Blick behalten

**Monatlich:**

- Shared Secrets rotieren
- Sicherheitsrichtlinien prüfen
- PacketFence-Updates

**Vierteljährlich:**

- Zugriffs- und Compliance-Audits
- Templates/Laufzeiten prüfen
- Backup-/Recovery-Tests

#### Sicherheits-Best-Practices {#241fa6da3fef80c687f2e15a9228a870}

1. Regelmäßige Passwortwechsel
2. Zertifikats-Monitoring mit Alerts
3. Adminzugriffe regelmäßig auditieren
4. Sichere Backups aller Zertifikate/Konfigurationen
5. Aktuelle, gepflegte Dokumentation

---

### Kurzübersicht {#241fa6da3fef806e9b78de3ba511afa2}

#### Wichtige Dateien {#241fa6da3fef8085bc90f89290f88e9f}

- **Root-CA**: `ca.crt` (auf allen Geräten verteilen)
- **RADIUS-Server-Zertifikat**: `server.crt`
- **RADIUS-Server-Key**: `server.key`

#### Wichtige URLs {#241fa6da3fef8042b4c8efca948b5c55}

- **PacketFence Admin**: `https://your-server-ip:1443`
- **SCEP Enrollment**: `http://your-app-proxy-url/scep/UserCert`

#### Notfallkontakte {#241fa6da3fef8088b370d48a4b8155b9}

- **PacketFence Support**: [Supportvertrag]
- **Netzwerkteam**: [intern]
- **Sicherheitsteam**: [intern]

---

### Hilfe erhalten {#241fa6da3fef80df8112fc620047a70d}

**Wenn Unterstützung nötig ist:**

1. **Logs prüfen** – viele Fehler lassen sich dort erkennen
2. **Diese Anleitung** – viele Antworten stehen bereits oben
3. **PacketFence-Dokumentation** – offizielle, detaillierte Infos
4. **Community** – aktive Foren
5. **Professional Services** – für komplexe Deployments

**Vor Kontaktaufnahme:**

- Exakte Fehlermeldungen notieren
- Schritte zur Reproduktion dokumentieren
- Systemkonfiguration bereithalten
- Systemressourcen (CPU, RAM, Disk) checken

---

_Diese Anleitung bietet eine umfassende Grundlage für die Einführung von PacketFence. Netzwerksicherheit ist ein fortlaufender Prozess und erfordert kontinuierliche Pflege._

