---
title: Step-by-Step Guide- Setting Up PacketFence for Enterprise Network Access Control
description: "Comprehensive guide to setting up PacketFence for enterprise network access control, covering configuration, PKI, and Intune integration."
sidebar_position: 0
slug: /packetfence-stepbystep
authors: [Tobias]
date: 2025-07-28
keywords: [PacketFence,Security,Intune]
tags: [PacketFence,Security,Intune]
last_update: 
 date: 2025-10-28
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

