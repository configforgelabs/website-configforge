---
title: Step-by-Step Guide- Setting Up PacketFence for Enterprise Network Access Control
description: "Comprehensive guide to setting up PacketFence for secure network access control, including configuration, certificates, and Intune integration."
sidebar_position: 0
slug: /packetfence-stepbystep
authors: [Tobias]
date: 2025-07-28
keywords: [PacketFence,Security,Intune]
tags: [PacketFence,Security,Intune]
last_update: 
 date: 2025-08-20
 author: Tobias
---



## Introduction {#23efa6da3fef80459bb9e27415f35118}


PacketFence is a powerful open-source Network Access Control (NAC) solution that provides robust security features for enterprise networks. It manages network access by enforcing authentication, authorization, and accounting while providing captive portal capabilities, BYOD registration, and network isolation for non-compliant devices. This comprehensive guide walks IT system engineers through the installation and configuration process, including setting up certificates, PKI integration, and Intune connectivity.


## Initial Configuration {#23efa6da3fef80a29cbaeb2c6367d5e2}


### Accessing the Configurator {#23efa6da3fef80758b1df759dc0cd2d6}


When you first boot up PacketFence, you'll be presented with a console interface. The default credentials are:


```shell
Username: root
Password: p@ck3tf3nc3
```


#### Changing the Root Password {#23efa6da3fef80f2bbbdc14a0d4e33b3}


For security reasons, change the default root password immediately:


```shell
# as root
passwd

# follow prompts to set a new password
```


![](./packetfence-stepbystep.23efa6da-3fef-8050-a9d2-eab9fc1d5cb0.png)


#### Network Configuration {#23efa6da3fef80c29e90cd0b786c61ae}


During initial setup, you'll need to configure your network settings. Make sure to properly configure your network adapter settings based on your environment requirements. PacketFence typically requires multiple network interfaces to separate management traffic from enforcement networks.


:::tip

Tip: Plan your network segmentation carefully before configuring PacketFence. The solution works best when you have clearly defined management, registration, isolation, and production networks. The management interface should be connected to your secure management VLAN, while additional interfaces handle registration and isolation functions.

:::




When configuring network interfaces, you'll need to assign static IP addresses to your management interface and determine which interfaces will handle PacketFence's enforcement mechanisms. The configurator will guide you through setting up:


- Management network (for administration)
- Registration network (for device onboarding)
- Isolation network (for quarantining non-compliant devices)
- Production networks (for normal network access)



#### Finishing Basic Setup {#23efa6da3fef800098b7cee7d8f0734f}


Complete the configurator by following the on-screen prompts. When asked about Fingerbank integration, you can skip this step as it's not required for basic functionality. Fingerbank provides device fingerprinting capabilities that enhance PacketFence's ability to identify device types, but this can be configured later.


Make sure to save all provided passwords during setup - you'll need them later! The configurator will generate several credentials for database access, admin portal, and various services that PacketFence uses internally.


After the initial configuration completes, you'll be able to access the PacketFence admin interface using the web browser. Login with the admin credentials provided during setup.


## Setting Up Web Service Certificates {#23efa6da3fef800fa909dc18293f29e4}


Using properly signed SSL certificates is crucial for a production PacketFence deployment. We'll implement a public signed wildcard certificate for the web server. This ensures that users connecting to the captive portal don't receive certificate warnings, which improves security perception and prevents users from developing the habit of ignoring certificate warnings.


### Converting Certificate Formats {#23efa6da3fef804980e4c723a4f20c3b}


If you have a certificate in p12/pfx format, use these commands to extract the key components:


#### On macOS: {#23efa6da3fef80c8a004fdd68c463d52}


```bash
# extract unencrypted RSA private key
openssl pkcs12 -in bundle.p12 -nocerts -nodes | tee tmp.key | openssl pkcs8 -topk8 -nocrypt -in /dev/stdin -out server.key

# extract server cert (includes SANs)
openssl pkcs12 -in bundle.p12 -clcerts -nokeys -out server.crt

# cleanup
rm -f tmp.key
```


These commands extract the private key and certificate from a PKCS#12 bundle. The intermediate step using tmp.key ensures that the key is properly formatted for PacketFence's requirements. The resulting server.key file contains an unencrypted private key in PKCS#8 format, while server.crt contains your certificate including any Subject Alternative Names (SANs).


:::tip

:::note

Important: The private key string needs to start with -----BEGIN RSA PRIVATE KEY----- and end with the corresponding footer. Also, make sure the intermediate certificate is added, otherwise the portal service over port 443 won't be available.

:::

:::




### Installing the Web Certificate {#23efa6da3fef8079a738cc4144542e28}


1. Navigate to **System Configuration → SSL Certificates → Edit HTTP Certificates** in the PacketFence admin portal
2. Replace **HTTP Server Certificate** with the content of **server.crt** - copy the full text including BEGIN and END CERTIFICATE lines
3. Optional: Deselect **Find HTTPs Server intermediate CA(s) automatically** and add your intermediate cert content manually. This ensures you have the exact certificate chain you want rather than relying on automatic discovery
4. Replace **HTTP Server Private Key** with the content of **server.key** - include the full text with BEGIN and END PRIVATE KEY lines
5. Click **Save** to apply changes

	![](./packetfence-stepbystep.23efa6da-3fef-806a-8c9c-f3a8f175d938.png)

6. **IMPORTANT:** Restart services to make HTTP/80 available by clicking on the "Restart" button in the confirmation dialog

	![](./packetfence-stepbystep.23efa6da-3fef-8088-babe-cb603b9901c8.png)




:::note

:::tip

After making certificate changes, verify that both HTTP and HTTPS services are functioning correctly. Use browser tools to check certificate validity. If you access the management interface and see a valid HTTPS connection without warnings, your certificate installation was successful. Remember that the captive portal needs to work on both HTTP and HTTPS to handle various client redirections properly.

:::

:::




## Setting Up PKI Infrastructure {#23efa6da3fef800f8622cc4052a009dc}


PacketFence includes an integrated PKI (Public Key Infrastructure) that allows you to create and manage certificates. This is particularly useful for certificate-based authentication with 802.1X, which provides stronger security than password-based methods.


### Creating a Certificate Authority {#23efa6da3fef80239851e54cc97e3fce}


1. Navigate to the PKI section and select **New Certificate Authority** to establish a Certificate Authority that will sign all certificates used in your environment

	![](./packetfence-stepbystep.23efa6da-3fef-80b8-969c-efe7d8555376.png)

2. Enter your organization's CA details and save. Include meaningful information in fields like Organization, Organizational Unit, and Common Name to identify your CA properly

	![](./packetfence-stepbystep.23efa6da-3fef-80ca-b8b1-c6dd2463bc51.png)

3. Copy and save the CA public cert as **ca.crt** - you'll need this file later for device configurations and RADIUS setup

	![](./packetfence-stepbystep.23efa6da-3fef-808d-98f7-fd1994e78bd2.png)




The Certificate Authority is the foundation of your PKI. It's used to sign all certificates issued by PacketFence, and client devices must trust this CA for certificate-based authentication to work.


### Configuring Microsoft Intune Integration {#23efa6da3fef80f9a1b5e527023a94d6}


Before creating certificate templates, we need to set up Intune integration to enable automated certificate enrollment for mobile devices:


1. In Microsoft Entra ID (Azure AD), create a new app registration with appropriate permissions for device management
2. Add the following permissions to the app registration:
	- DeviceManagementConfiguration.ReadWrite.All
	- DeviceManagementManagedDevices.ReadWrite.All
	- DeviceManagementServiceConfig.ReadWrite.All

	![](./packetfence-stepbystep.23efa6da-3fef-80c4-8188-d4749bab2849.png)

3. Create a client secret and copy its value - note that this secret will only be shown once during creation

	![](./packetfence-stepbystep.23efa6da-3fef-80ef-b685-f7b8adf2774b.png)

4. In PacketFence, go to **Configuration → Cloud Services → New Cloud  Service → Intune**

	![](./packetfence-stepbystep.23efa6da-3fef-80f3-9b79-e5e315fe6861.png)

5. Enter a profile name, tenant ID, client ID, and the secret created in the previous step. These values connect PacketFence to your Microsoft Intune environment, allowing it to push certificate profiles to devices



This integration allows PacketFence to communicate with Intune for certificate management, enabling automated distribution of certificates to managed devices, which streamlines the enrollment process and reduces administrative overhead.


### Creating Certificate Templates {#23efa6da3fef8062b3e9f4d74caabcb6}


We need to create two certificate templates with specific configurations:


![](./packetfence-stepbystep.23efa6da-3fef-800d-b782-fe29ebfebde2.png)


#### 1. RADIUS Server Certificate Template {#23efa6da3fef80efa5f2ce9b97a206b2}


- Maximum validity: 825 days (complies with industry standards for server certificates)
- Purpose: Used for the RADIUS Server authentication
- Key Usage: Digital Signature, Key Encipherment
- Extended Key Usage: Server Authentication



![](./packetfence-stepbystep.23efa6da-3fef-80fb-96e9-cdbce12c3ade.png)


This template is used to generate the certificate that secures communications between wireless clients and the RADIUS server during 802.1X authentication.


#### 2. User Certificate Template {#23efa6da3fef802b977de668863160b3}


- Validity: 365 days (standard for user certificates to balance security and management overhead)
- SCEP enabled (Simple Certificate Enrollment Protocol for automated deployment)
- Cloud Intune Integration enabled (connects to the Intune profile created earlier)
- Key Usage: Digital Signature
- Extended Key Usage: Client Authentication

	![](./packetfence-stepbystep.23efa6da-3fef-80ae-b32c-d9fbc52702f9.png)




This template generates certificates for user authentication, enabling secure 802.1X connections without password prompts.


For the User Certificate template, make sure to:


1. Enable SCEP in the SCEP tab to allow automated certificate enrollment
2. Create a secure challenge password - this should be complex and randomly generated
3. Enable Cloud Integration and select your Intune profile to link certificate enrollment with your MDM solution



![](./packetfence-stepbystep.23efa6da-3fef-8065-8b37-c7d514fef880.png)


SCEP allows devices to request certificates automatically without manual intervention, while the Intune integration ensures that only managed devices can obtain certificates.


### Creating and Installing RADIUS Server Certificate {#23efa6da3fef805a8629dab40ebe6952}


For RADIUS to function properly, we need to create a certificate using the RADIUS Server template. This certificate secures the authentication process when clients connect to your network:


1. Go to **Integration → PKI → Certificates → Certificates** and create a new certificate with the RADIUS Server template

	![](./packetfence-stepbystep.23efa6da-3fef-80ee-97fb-c90616f12b7e.png)

2. Enter certificate details, using the FQDN of your RADIUS server for both **Common Name** and **DNS Names**. This ensures that clients can verify the server's identity during authentication

	![](./packetfence-stepbystep.23efa6da-3fef-80ba-82b7-c0e83477420c.png)

3. If your RADIUS server has multiple DNS names or IP addresses that clients might use to connect, include them all as Subject Alternative Names (SANs)
4. Download the certificate bundle after creation

	![](./packetfence-stepbystep.23efa6da-3fef-8029-bfa3-fe99debafcb9.png)




:::tip

:::note

Note: The downloaded p12 file uses an older encryption format. When using OpenSSL to extract keys, you may need to add the -legacy parameter. Windows and macOS can generally import these files without issues. The p12 file contains both the certificate and private key in a password-protected format.

:::

:::




#### Extract Certificate Components {#23efa6da3fef809eae0fc436efe041ba}


On macOS, use these commands to extract the necessary files from the certificate bundle:


```bash
# extract unencrypted RSA private key
openssl pkcs12 -in bundle.p12 -nocerts -nodes -legacy | tee tmp.key | openssl pkcs8 -topk8 -nocrypt -in /dev/stdin -out server.key

# extract server cert (includes SANs)
openssl pkcs12 -in bundle.p12 -clcerts -nokeys -out server.crt -legacy

# cleanup
rm -f tmp.key
```


![](./packetfence-stepbystep.23efa6da-3fef-80f1-8804-cccaaa6c2bf8.png)


The -legacy parameter is needed because PacketFence uses an older encryption format in its PKCS#12 files. The extracted files include server.key (the private key) and server.crt (the public certificate).


#### Install the RADIUS Certificate {#23efa6da3fef8063a62fe9e352550032}


1. Navigate to **System Configuration → SSL Certificates → RADIUS → Edit RADIUS Certificate**
2. Replace **RADIUS Server Certificate** with the content of **server.crt**
3. Replace **RADIUS Server Private Key** with the content of **server.key**
4. Replace **Certification Authority certificate** with the content of **ca.crt** saved earlier
5. Click **Save** and verify the certificate details are correct in the confirmation dialog



![](./packetfence-stepbystep.23efa6da-3fef-8099-a358-e7ad5550d5ee.png)


![](./packetfence-stepbystep.23efa6da-3fef-8046-af1e-ee2844821fcf.png)


These steps configure the RADIUS server to use your custom certificate for all 802.1X authentication transactions. This is critical for secure wireless deployments as it allows clients to verify the identity of the RADIUS server before sending credentials.


## Publishing SCEP for Mobile Device Management {#23efa6da3fef8028b8f2e60dba42d735}


To enable certificate enrollment for mobile devices, we need to publish the SCEP endpoint to the internet. This allows devices to request certificates regardless of their location. Microsoft Entra ID Application Proxy provides an easy method to accomplish this without exposing your entire PacketFence server.


:::tip

For security purposes, only publish the specific SCEP endpoint rather than exposing the entire server to the internet. Using a path-based approach (/scep/) ensures that only the certificate enrollment functionality is accessible externally.

:::




### Setting Up Application Proxy {#23efa6da3fef80c4b968fd230678ce90}


1. Go to the Entra ID admin portal Application Proxy section at [https://entra.microsoft.com/#view/Microsoft_AAD_IAM/AppProxyOverviewBlade](https://entra.microsoft.com/#view/Microsoft_AAD_IAM/AppProxyOverviewBlade)
2. Select **Configure an app** to create a new application proxy configuration
3. For the Internal URL:

	![](./packetfence-stepbystep.23efa6da-3fef-8081-8468-df430733b512.png)

	- Use HTTP (not HTTPS) - PacketFence's SCEP endpoint runs on HTTP
	- Format should be: http://packetfence.yourdomain.com/scep/
	- Add /scep/ to the FQDN for security (limit exposure to only the SCEP endpoint)
4. For the External URL:
	- Use a random, hard-to-guess name for better security (e.g., scep-r4nd0m-n4m3)
	- The default msappproxy.net domain can be used unless you have a custom domain configured
	- Configure with HTTP (not HTTPS) to match the internal configuration
5. Set Pre-Authentication to **Passthrough** - this is critical as SCEP clients cannot handle interactive authentication



The Application Proxy creates a secure tunnel between your internal PacketFence server and the internet, allowing mobile devices to enroll for certificates while keeping your server protected.


## Building and Using SSCEP for Testing {#23efa6da3fef80ca837bdb2d1aebfbc3}


To test your SCEP configuration, you can build and use the SSCEP tool, which allows you to test certificate enrollment against your PacketFence SCEP server:


### Building SSCEP on macOS {#23efa6da3fef8034806bf2b2cdd835e2}


```bash
# 1) Xcode command-line tools (needed for clang & make)
xcode-select --install      # one-time on a fresh Mac

# 2) Runtime & build deps
brew install autoconf automake libtool pkg-config openssl

# 3) Grab the source or use GitHub Desktop
git clone https://github.com/certnanny/sscep.git
cd sscep

# 4) Regenerate Autotools files
glibtoolize          # GNU libtool on macOS is called 'glibtool'
aclocal
automake -a -c -f
autoreconf           # wraps autoconf & friends

# 5) Configure — tell it where Homebrew puts OpenSSL
export PKG_CONFIG_PATH="$(brew --prefix openssl@1.1)/lib/pkgconfig"
./configure

# 6) Compile and install
make
sudo make install    # installs to /usr/local/bin/sscep by default
```


### Testing SCEP Enrollment {#23efa6da3fef80d6b533e078395eb7cb}


Once SSCEP is installed, you can test your SCEP configuration with these commands:


```bash
# Generate a new key pair and CSR
openssl req -newkey rsa:2048 -keyout PRIVATEKEY.key -out MYCSR.csr

# Get the CA certificate 
sscep getca -u http://[your-app-proxy-url]/scep/UserCert -c ca.crt

# Attempt to enroll with the SCEP server
sscep enroll -c ./ca-prefix -k ./private.key -r ./MYCSR.csr -u http://[your-packetfence-server]/scep/UserCert -l cert.crt -d -v
```


This testing process helps verify that your SCEP endpoint is correctly configured and can issue certificates before deploying to actual devices.


## Intune Configuration {#23efa6da3fef807fa1b7f87dba7773ff}


With the SCEP endpoint published, we now need to configure Microsoft Intune to distribute the CA certificate and SCEP profile to managed devices.


### Installing the CA Certificate {#23efa6da3fef80d59d80f249363b4bd1}


All devices must have the root CA certificate installed as trusted for authentication and SCEP enrollment to work. Create policies in Intune for each platform:


#### Windows Devices {#23efa6da3fef809fa045fa3d2901c398}


Create a Trusted Certificate profile using the ca.crt file:


- Navigate to Devices &gt; Configuration profiles &gt; Create profile
- Platform: Windows 10 and later
- Profile type: Templates &gt; Trusted certificate
- Certificate file: Upload the ca.crt file
- Certificate destination: Computer certificate store - Root
- Target this profile to appropriate device groups



![](./packetfence-stepbystep.23efa6da-3fef-8067-adfc-e904ae966f81.png)


#### macOS Devices {#23efa6da3fef8058ae26f08089802ae8}


Create separate policies for User and Device certificates if you plan to use both authentication methods:


- Navigate to Devices &gt; Configuration profiles &gt; Create profile
- Platform: macOS
- Profile type: Templates &gt; Trusted certificate
- Certificate file: Upload the ca.crt file
- Create two profiles - one for User certificate store and one for System certificate store
- Target these profiles to appropriate device groups



If you want to use User and Device certificates for authentication, you need to install the device certificate in both User and Device certificate stores using separate policies.


![](./packetfence-stepbystep.23efa6da-3fef-807e-a85e-eab9c83f74cd.png)


#### iOS Devices {#23efa6da3fef80c9920de522115c0431}


Create a Trusted Certificate profile specifically configured for iOS:


- Navigate to Devices &gt; Configuration profiles &gt; Create profile
- Platform: iOS/iPadOS
- Profile type: Templates &gt; Trusted certificate
- Certificate file: Upload the ca.crt file
- Target this profile to appropriate device groups



![](./packetfence-stepbystep.23efa6da-3fef-8063-9378-c06894bf2814.png)


### Creating SCEP Profiles {#23efa6da3fef80728c7ec7e368c690fa}


Create SCEP certificate profiles for each platform, using your published SCEP URL. Replace the placeholder with your actual URL:


```javascript
http://[your-unique-name].msappproxy.net/scep/UserCert
```


For Windows devices, configure a SCEP certificate profile with:


- Certificate type: User
- Subject name format: Common name as email or UPN
- Certificate validity period: 1 year
- Key usage: Digital signature
- Extended key usage: Client Authentication
- SCEP Server URLs: Your published SCEP URL

	![](./packetfence-stepbystep.23ffa6da-3fef-80c3-92ad-eec91f67eadf.png)




Similar configurations should be created for macOS and iOS devices, adjusting platform-specific settings as needed. Each platform requires its own SCEP profile tailored to the operating system's certificate handling capabilities.


Configure appropriate certificate settings for each platform (Windows, macOS, and iOS) according to your security requirements. Remember to target these profiles to the same groups that received the trusted certificate profiles.


## Configuring RADIUS Clients {#23efa6da3fef802abd50cce0e6609ab6}


The final step is to configure your network devices (switches, wireless controllers, access points) as RADIUS clients. These devices will forward authentication requests to PacketFence for validation.


PacketFence provides detailed documentation for dozens of vendors at:
[https://www.packetfence.org/doc/PacketFence_Network_Devices_Configuration_Guide.html](https://www.packetfence.org/doc/PacketFence_Network_Devices_Configuration_Guide.html)


In PacketFence, you'll need to define each network device as a RADIUS client:


- Navigate to Configuration &gt; Policies and Access Control &gt; Network Devices
- Add each switch or wireless controller, specifying its IP address and RADIUS shared secret
- Configure appropriate roles and access policies based on your security requirements



### Example: Configuring an Ubiquiti Wireless Controller {#23efa6da3fef807db352d32adc517809}


Follow these general steps to configure an Ubiquiti Controller:


1. Access your Ubiquiti Controller management interface
2. Navigate to the Settings &gt; RADIUS section
3. Add a new RADIUS server using your PacketFence server's IP address
4. Configure the shared secret (must match exactly what you set in PacketFence)
5. Set authentication ports (typically 1812 for authentication, 1813 for accounting)
6. Under the Wireless Networks section, edit each SSID that will use 802.1X
7. Set Security to "WPA Enterprise" and select your RADIUS profile
8. Apply and test the configuration by attempting to connect with a properly configured client



Once configured, the wireless controller will forward all authentication requests to PacketFence, which will validate certificates and provide access decisions based on your security policies.


## Testing 802.1X Authentication {#23efa6da3fef80de9476cbdd44c5e184}


Before deploying to your entire network, it's critical to test your 802.1X authentication setup to ensure it's working correctly. The eapol_test utility is an excellent tool for this purpose as it allows you to simulate client authentication without actual hardware.


### Using eapol_test.exe for Authentication Testing {#23efa6da3fef801b890ffeee3dcba4f6}


The eapol_test utility can be found in the FreeRADIUS project and is available for Windows as eapol_test.exe. This tool simulates a client attempting to authenticate via 802.1X using various EAP methods.


:::tip

:::note

You can download eapol_test from the following repository: [https://github.com/janetuk/eapol_test](https://github.com/janetuk/eapol_test)

:::

:::




#### Creating Test Configuration Files {#23efa6da3fef8079baabdeb96e00d8dc}


Before running tests, create configuration files for each authentication method you want to test. Here are examples for the most common scenarios:


#### 1. Certificate-Based Authentication (EAP-TLS) {#23efa6da3fef80059b34ffceda6af5cd}


Create a file named eapol.conf with the following content:


```bash
network={
    ssid="[NETWORK_NAME]"
    key_mgmt=WPA-EAP
    eap=TLS
    identity="[IDENTITY]"            # CN or UPN in client certificate
    ca_cert="[CA_CERT_PATH]"         # Root (and optionally intermediate) CA
    private_key="[PRIVATE_KEY_PATH]" # Client certificate + key in PKCS#12 format
    private_key_passwd="[PASSWORD]"  # Password set during certificate export
}
```


#### 2. Username/Password Authentication with AD (PEAP-MSCHAPv2) {#23efa6da3fef80849428c2d56092ead5}


Create a file named eapolPEAP.conf with the following content:


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


#### Running Authentication Tests {#23efa6da3fef804ca796e6e74563733e}


With your configuration files prepared, you can now run tests against your PacketFence RADIUS server. Use the IP address of your RADIUS server (not hostname) and the shared secret configured for your test client:


```shell
# Test EAP-TLS certificate authentication
eapol_test -a [RADIUS IP ADDRESS] -p 1812 -s [PASSPHRASE] -M 00:11:22:33:44:55 -c eapol.conf

# Test PEAP-MSCHAPv2 username/password authentication
eapol_test -a [RADIUS IP ADDRESS] -p 1812 -s [PASSPHRASE] -M 00:11:22:33:44:55 -c eapolPEAP.conf
```


Parameter explanation:


- -a: RADIUS server IP address
- -p: RADIUS server port (typically 1812)
- -s: Shared secret configured in PacketFence for this test client
- -M: Simulated MAC address of the client device
- -c: Path to configuration file



#### Analyzing Test Results {#23efa6da3fef809b82fce6998148ac88}


A successful authentication will show "SUCCESS" in the output, while failures will show error messages that can help diagnose issues. If authentication fails, check the following:


- Verify the RADIUS server is properly configured and running
- Ensure the client certificate is valid and trusted by the CA
- Check that the CA certificate is correctly installed on the RADIUS server
- Confirm that the shared secret matches between eapol_test and PacketFence
- For AD authentication, verify that the credentials are correct and the AD integration is working



For more detailed debugging, you can view the RADIUS server logs during testing:


```bash
sudo raddebug -t 300 -f /usr/local/pf/var/run/radiusd.sock
```


This command shows real-time authentication attempts and can be extremely helpful for troubleshooting complex authentication issues.


:::tip

:::note

Note: When reviewing logs, you may see some warning messages about "No EAP types configured". These can safely be ignored as they are not errors, but rather informational messages from the RADIUS server.Note: When reviewing logs, you may see some warning messages about "No EAP types configured". These can safely be ignored as they are not errors, but rather informational messages from the RADIUS server.

:::

:::




## Troubleshooting {#23efa6da3fef80ce8325e019033d4816}


### MySQL Database Permissions {#23efa6da3fef8092898fcb66883ed0a6}


If you encounter errors related to database access, ensure the MySQL user has appropriate permissions:


```bash
mysql -u root -p       # or sudo mysql
GRANT ALL PRIVILEGES ON pf.* TO 'pf'@'localhost';
FLUSH PRIVILEGES;
```


### Detailed RADIUS Logging {#23efa6da3fef80c295dafc0807b00d14}


To view detailed logs from the RADIUS server for troubleshooting authentication issues:


```bash
sudo raddebug -t 300 -f /usr/local/pf/var/run/radiusd.sock
```


This command shows real-time RADIUS authentication attempts, helping diagnose certificate or configuration problems.


### Database Configuration {#23efa6da3fef80048f37f7d259294c91}


If you need to change the database password or check the current configuration:


```shell
# Change MySQL password
ALTER USER 'pf'@'localhost' IDENTIFIED BY 'new_secure_password';
FLUSH PRIVILEGES;

# Update grants if needed
GRANT SELECT,INSERT,UPDATE,DELETE,EXECUTE,LOCK TABLES ON pf.* TO pf@'%' IDENTIFIED BY 'new_secure_password';
GRANT SELECT,INSERT,UPDATE,DELETE,EXECUTE,LOCK TABLES ON pf.* TO pf@'localhost' IDENTIFIED BY 'new_secure_password';
FLUSH PRIVILEGES;

# View database configuration
/usr/local/pf/bin/pfcmd pfconfig show resource::Database

# Reload configuration
/usr/local/pf/bin/pfcmd configreload hard

# Restart PacketFence services
sudo /usr/local/pf/bin/pfcmd service pf restart
```


After changing the database password, you'll need to reconfigure any secrets for integrated services like Entra ID App integration.


## Conclusion {#23efa6da3fef806f9c9af5d08467c026}


You have now successfully set up PacketFence as a Network Access Control solution with PKI integration and Intune connectivity. This powerful setup allows for certificate-based authentication and secure device management across your enterprise network.


This configuration provides several key benefits:


- Certificate-based authentication eliminates password-related vulnerabilities
- Automated certificate deployment reduces administrative overhead
- Integration with Intune ensures only managed devices receive certificates
- Centralized policy enforcement improves security posture



Remember to regularly backup your PacketFence configuration and update the system to maintain security and access to the latest features. Consider implementing regular certificate rotation schedules and monitoring for any authentication failures that might indicate configuration issues.


For ongoing management, familiarize yourself with PacketFence's reporting capabilities to monitor authentication trends and identify potential security incidents.


TESt


## Complete Setup Guide: PacketFence Network Security System {#241fa6da3fef80948346d9f5e8eeab1c}


### What You'll Learn {#241fa6da3fef80b5b4ece19de5f1a050}


This guide walks you through setting up PacketFence, a security system that controls who can access your organization's network. By the end, you'll have a secure network where only authorized devices with proper certificates can connect.


**Estimated Time:** 4-6 hours


**Difficulty:** Intermediate


**Prerequisites:** Basic understanding of network concepts


---


### What is PacketFence? {#241fa6da3fef80e392bbf2d5d26a6e70}


PacketFence is like a digital security guard for your network. It:


- **Controls Access**: Only allows authorized devices to connect
- **Issues Certificates**: Provides digital IDs to trusted devices
- **Monitors Activity**: Tracks who's on your network and what they're doing
- **Enforces Policies**: Automatically applies your security rules



**Screenshot Placeholder: [PacketFence Dashboard Overview]**


---


### Getting Started: Initial Setup {#241fa6da3fef803bac37da1e32e210c0}


#### Step 1: First Time Login {#241fa6da3fef809a88caca6784f5c7ba}


When you first start PacketFence, you'll see a text-based setup screen.


**Default Login Credentials:**

- Username: `root`
- Password: `p@ck3tf3nc3`

**Screenshot Placeholder: [Initial Login Screen]**


> ⚠️ Security Note: Change this password immediately! Using default passwords is a major security risk.


**To Change Your Password:**


1. After logging in, type: `passwd`
2. Follow the prompts to create a strong, unique password
3. Store this password in your organization's password manager



#### Step 2: Network Setup Planning {#241fa6da3fef80bba21fd65a7d00fe88}


Before configuring PacketFence, plan your network layout. PacketFence works best with separate network segments for different purposes:


**Screenshot Placeholder: [Network Diagram Example]**


**Network Segments Needed:**


- **Management Network**: For administrators to access PacketFence
- **Registration Network**: Where new devices get registered
- **Isolation Network**: For quarantining suspicious devices
- **Production Networks**: For normal business operations



> 💡 Planning Tip: Document your IP address ranges and VLAN assignments before starting. This will save time later and prevent configuration errors.


#### Step 3: Complete Basic Configuration {#241fa6da3fef80cb9336da257f237ba8}


Follow the on-screen setup wizard:


1. **Network Interfaces**: Assign IP addresses to each network segment
2. **DNS Settings**: Configure your organization's DNS servers
3. **Time Settings**: Set timezone and time synchronization
4. **Database**: The system will create necessary databases automatically



**Optional Settings to Skip Initially:**

- **Fingerbank Integration**: Can be configured later for device identification
- **Advanced Features**: Focus on core functionality first

> ⚡ Important: Save all passwords and settings provided during setup. You'll need these later!


---


### Setting Up Security Certificates {#241fa6da3fef804a8fd0c74b0d999fc8}


Certificates are like digital ID cards that prove devices are authorized to access your network. This section covers setting up your certificate system.


#### Why Certificates Matter {#241fa6da3fef80c1970cfefae8c7d2b7}


Without proper certificates:


- Users see scary security warnings
- Devices might refuse to connect
- Your security can be compromised



With proper certificates:


- Seamless, secure connections
- No user warnings or confusion
- Strong protection against unauthorized access



#### Step 4: Install Your Web Certificates {#241fa6da3fef8053bf14faffbb77fd4f}


If you have certificates from a trusted provider (like DigiCert, Let's Encrypt, etc.):


**On Mac/Linux Systems:**


```shell
# Extract your certificate files
openssl pkcs12 -in your-certificate.p12 -nocerts -nodes | \
openssl pkcs8 -topk8 -nocrypt -out server.key

openssl pkcs12 -in your-certificate.p12 -clcerts -nokeys -out server.crt

```


**In PacketFence Web Interface:**


1. Go to **System Configuration → SSL Certificates → Edit HTTP Certificates**
2. Replace **HTTP Server Certificate** with contents of `server.crt`
3. Replace **HTTP Server Private Key** with contents of `server.key`
4. Click **Save**
5. **CRITICAL**: Click **Restart** when prompted to apply changes



**Screenshot Placeholder: [SSL Certificate Configuration Screen]**


---


### Creating Your Certificate Authority (PKI) {#241fa6da3fef80d1bb11f9e1ae7faf17}


PacketFence can create and manage certificates for your devices. Think of this as setting up your own "ID card printing office."


#### Step 5: Create a Certificate Authority {#241fa6da3fef806cbb8bc941c052005f}


**Screenshot Placeholder: [PKI Setup Screen]**


1. Navigate to **Integration → PKI → Certificate Authorities**
2. Click **New Certificate Authority**
3. Fill in your organization details:
	- **Organization**: Your company name
	- **Country**: Two-letter country code (US, CA, etc.)
	- **Common Name**: Something like "YourCompany Root CA"
4. Click **Save**
5. **Important**: Copy and save the CA certificate as `ca.crt` - you'll need this file multiple times



> 📋 Documentation Tip: Create a secure document listing all certificate details, passwords, and file locations. This will be essential for future maintenance.


#### Step 6: Set Up Microsoft Integration (Optional but Recommended) {#241fa6da3fef80709dc0d34d9365d52e}


If your organization uses Microsoft systems, this integration allows automatic certificate distribution to managed devices.


**In Microsoft Entra ID (Azure AD):**


1. Create a new app registration
2. Add required permissions for device management
3. Create a client secret (save this securely!)



**In PacketFence:**

1. Go to **Configuration → Cloud Services → New Cloud Service → Intune**
2. Enter:
	- Profile name (descriptive name)
	- Tenant ID (from Azure)
	- Client ID (from Azure)
	- Client Secret (created above)

**Screenshot Placeholder: [Intune Integration Setup]**


---


### Certificate Templates: Digital ID Formats {#241fa6da3fef80c1acccc70584559df8}


Templates define what information goes on certificates and how they can be used. You need two types:


#### Step 7: Create RADIUS Server Template {#241fa6da3fef807e81c3eb322d725514}


This certificate secures communication between devices and your authentication server.


**Settings:**


- **Maximum Validity**: 825 days (industry standard)
- **Purpose**: Server authentication
- **Key Usage**: Digital Signature, Key Encipherment
- **Extended Key Usage**: Server Authentication



**Screenshot Placeholder: [RADIUS Certificate Template]**


#### Step 8: Create User Certificate Template {#241fa6da3fef805498bfc867862e78c8}


This template creates certificates for individual users/devices.


**Settings:**


- **Validity**: 365 days (balances security and management)
- **SCEP Enabled**: ✅ (allows automatic distribution)
- **Intune Integration**: ✅ (if using Microsoft)
- **Key Usage**: Digital Signature
- **Extended Key Usage**: Client Authentication



**Important Configuration Steps:**


1. Go to the **SCEP** tab and enable SCEP
2. Create a strong challenge password (save this securely!)
3. In **Cloud Integration** tab, select your Intune profile



**Screenshot Placeholder: [User Certificate Template Configuration]**


---


### Creating and Installing Server Certificates {#241fa6da3fef8027b5b1f65711baf906}


#### Step 9: Generate Your RADIUS Server Certificate {#241fa6da3fef800ead56e7659dcede0d}


1. Go to **Integration → PKI → Certificates → Certificates**
2. Click **New Certificate**
3. Select your **RADIUS Server** template
4. Enter certificate details:
	- **Common Name**: Your server's domain name (e.g., radius.company.com)
	- **DNS Names**: Add all names devices might use to connect
5. Click **Create**
6. Download the certificate bundle when complete



**Screenshot Placeholder: [Certificate Creation Screen]**


#### Step 10: Extract and Install Certificate Files {#241fa6da3fef80fa9b1dc6f422e04e8d}


**On Mac/Linux:**


```shell
# Extract the server certificate and key
openssl pkcs12 -in bundle.p12 -nocerts -nodes -legacy | \
openssl pkcs8 -topk8 -nocrypt -out server.key

openssl pkcs12 -in bundle.p12 -clcerts -nokeys -out server.crt -legacy

```


**In PacketFence:**


1. Navigate to **System Configuration → SSL Certificates → RADIUS → Edit RADIUS Certificate**
2. Replace **RADIUS Server Certificate** with contents of `server.crt`
3. Replace **RADIUS Server Private Key** with contents of `server.key`
4. Replace **Certification Authority certificate** with contents of `ca.crt`
5. Click **Save**



**Screenshot Placeholder: [RADIUS Certificate Installation]**


---


### Making Certificates Available to Mobile Devices {#241fa6da3fef80769c36c19bee0aab62}


To allow phones, tablets, and laptops to automatically get certificates, you need to publish your certificate service to the internet securely.


#### Step 11: Set Up Microsoft Application Proxy {#241fa6da3fef80b2be42c928dda6c97a}


This creates a secure tunnel so devices can get certificates from anywhere.


1. Go to **Microsoft Entra ID Admin Portal → Application Proxy**
2. Click **Configure an app**
3. Configure settings:
	- **Internal URL**: `https://your-packetfence-server/scep/UserCert`
	- **External URL**: (Microsoft will provide this)
	- **Pre-Authentication**: **Passthrough** (important for automated systems)



**Screenshot Placeholder: [Application Proxy Configuration]**


> 🔒 Security Note: Only publish the specific certificate enrollment endpoint, not your entire server. This limits exposure while enabling functionality.


---


### Distributing Certificates via Microsoft Intune {#241fa6da3fef80d4892aea05bb134067}


#### Step 12: Install Root Certificate on All Devices {#241fa6da3fef80148ececa8b0fe3b040}


Every device needs to trust your certificate authority. Create policies for each device type:


**For Windows Devices:**


1. **Devices → Configuration profiles → Create profile**
2. **Platform**: Windows 10 and later
3. **Profile type**: Templates → Trusted certificate
4. **Certificate file**: Upload your `ca.crt` file
5. **Destination**: Computer certificate store - Root
6. Target to appropriate device groups



**For Mac Devices:**

- Create similar profiles for both User and System certificate stores
- This ensures compatibility with different authentication methods

**For iOS/iPad Devices:**

- Create iOS-specific trusted certificate profiles
- These will automatically install on managed devices

**Screenshot Placeholder: [Intune Certificate Policy Configuration]**


#### Step 13: Create Automatic Certificate Enrollment {#241fa6da3fef80c2a2b8e759f0e5e535}


Set up profiles that automatically request and install user certificates:


**Configuration for All Platforms:**


- **Certificate type**: User
- **Subject name format**: Common name as email or UPN
- **Validity**: 1 year
- **Key usage**: Digital signature
- **Extended key usage**: Client Authentication
- **SCEP Server URL**: Your published endpoint from Step 11



**Screenshot Placeholder: [SCEP Profile Configuration]**


---


### Testing Your Setup {#241fa6da3fef80c2bccbe08d6cc02ebb}


#### Step 14: Verify Certificate Distribution {#241fa6da3fef808e89f4ef5a900b0d14}


Before going live, test that certificates are being distributed correctly:


1. **Check Device Policies**: Ensure devices are receiving certificate policies
2. **Verify Certificate Installation**: Check that both root CA and user certificates are installed
3. **Test Network Access**: Try connecting to your 802.1X network



**Common Issues and Solutions:**


| Problem                          | Solution                                                         |
| -------------------------------- | ---------------------------------------------------------------- |
| Devices not getting certificates | Check Intune policy targeting and device enrollment              |
| Certificate errors               | Verify SCEP URL is accessible and challenge password is correct  |
| Authentication failures          | Ensure RADIUS clients are configured with correct shared secrets |


---


### Network Device Configuration {#241fa6da3fef80979525cf4f9fb97034}


#### Step 15: Configure Your Network Equipment {#241fa6da3fef803299caf4a5475e62ff}


Your wireless controllers, switches, and access points need to be configured to use PacketFence for authentication.


**In PacketFence:**

1. Go to **Configuration → Policies and Access Control → Network Devices**
2. Add each network device with:
	- Device IP address
	- RADIUS shared secret (create strong, unique secrets)
	- Device type and model

**Example: Ubiquiti Controller Setup**


1. Access controller web interface
2. Go to **Settings → RADIUS**
3. Add RADIUS server:
	- **Server**: PacketFence IP address
	- **Port**: 1812 (authentication), 1813 (accounting)
	- **Secret**: Match what you configured in PacketFence
4. Configure wireless networks:
	- **Security**: WPA Enterprise
	- **RADIUS Profile**: Select your configured profile



**Screenshot Placeholder: [Network Device Configuration]**


---


### Testing and Troubleshooting {#241fa6da3fef80a78c70e994947fcd1c}


#### Step 16: Verify Everything Works {#241fa6da3fef80a5b155d84c7fefef98}


**Testing Checklist:**


- [ ] Can devices get certificates automatically?
- [ ] Do certificates install without user intervention?
- [ ] Can devices connect to 802.1X networks successfully?
- [ ] Are authentication logs showing successful connections?



**Common Troubleshooting Steps:**


1. **Check PacketFence Logs**:
	- Location: **Status → System Logs**
	- Look for authentication attempts and errors
2. **Verify Network Device Communication**:
	- Test RADIUS connectivity between PacketFence and network devices
	- Confirm shared secrets match exactly
3. **Certificate Validation**:
	- Ensure client devices have both root CA and user certificates
	- Check certificate expiration dates



**Screenshot Placeholder: [Log Analysis Screen]**


---


### Maintenance and Best Practices {#241fa6da3fef80908fc3fd825f202fff}


#### Ongoing Tasks {#241fa6da3fef80c78b23d4aaafcb9c5e}


**Weekly:**


- Review authentication logs for anomalies
- Check certificate expiration warnings
- Monitor system performance



**Monthly:**


- Update network device shared secrets
- Review and update security policies
- Check for PacketFence software updates



**Quarterly:**


- Audit user access and device compliance
- Review certificate templates and validity periods
- Test backup and recovery procedures



#### Security Best Practices {#241fa6da3fef80c687f2e15a9228a870}


1. **Regular Password Updates**: Change all system passwords quarterly
2. **Certificate Monitoring**: Set up alerts for expiring certificates
3. **Access Reviews**: Regularly audit who has administrative access
4. **Backup Strategy**: Maintain secure backups of all certificates and configurations
5. **Documentation**: Keep all procedures and configurations documented and current



---


### Quick Reference {#241fa6da3fef806e9b78de3ba511afa2}


#### Key File Locations {#241fa6da3fef8085bc90f89290f88e9f}


- **Root CA Certificate**: `ca.crt` (distribute to all devices)
- **RADIUS Server Certificate**: `server.crt`
- **RADIUS Server Key**: `server.key`



#### Important URLs {#241fa6da3fef8042b4c8efca948b5c55}

- **PacketFence Admin**: `https://your-server-ip:1443`
- **SCEP Enrollment**: `http://your-app-proxy-url/scep/UserCert`

#### Emergency Contacts {#241fa6da3fef8088b370d48a4b8155b9}


- **PacketFence Support**: [Your support contract information]
- **Network Team**: [Internal team contact]
- **Security Team**: [Internal security contact]



---


### Getting Help {#241fa6da3fef80df8112fc620047a70d}


**When You Need Assistance:**


1. **Check the Logs First**: Most issues can be diagnosed from system logs
2. **Review This Guide**: Many questions are answered in previous sections
3. **PacketFence Documentation**: Visit official documentation for detailed technical information
4. **Community Support**: Active community forums for peer assistance
5. **Professional Support**: Consider professional services for complex deployments



**Before Contacting Support:**


- Note exact error messages
- Document steps that led to the issue
- Have your system configuration details ready
- Check system resource usage (CPU, memory, disk space)



---


_This guide provides a comprehensive foundation for PacketFence deployment. Remember that network security is an ongoing process requiring regular attention and updates._

