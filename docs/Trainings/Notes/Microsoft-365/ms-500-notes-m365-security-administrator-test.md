---
title: MS-500 - Security Administrator Test
description: "MS-500 - Security Administrator notes-test"
sidebar_position: 0
slug: /ms-500-notes-m365-security-administrator-test
authors: [Tobias]
date: 2025-07-29
keywords: [Trainings,Notes,Azure,Microsoft 365,Security]
tags: [Trainings,Notes,Azure,Microsoft 365,Security]
last_update: 
 date: 2025-07-29
 author: Tobias
---



Configuring Privileged Identity Management


Implementing MFA


Mit O365 Einzelaktivierung möglich


Implementing Self Service Password Reset


All users or certain groups


AAD P1 needed


Password Alternatives


Windows Hello for Business


PIN


Facial and finger print


FIDO2


Authenticator App


Needs to be activated


Azure AD Access Reviews (Identity Governance)


AAD P2 needed for users who do and create accessreview


Azure AD Security Defaults


Contain preconfigured security settings to prevent common atacks


Basic level of securiy at no additional cost


In conflict with CA


All registers must register MFA in 14 days


All Admins need MFA


Old protocolsl ike IMAP, SMTP and POP3 will be blocked


AAD Identity Protection


AAD P2 needed


Risky signin detection


Enable automated responses to suspicious actions


Types of risks detected:


Sign in from infected device


Leaked credential


Impossible travel


Sign in from unusual location


Sign in from suspicious or anonymous IP address


Remediate risk events


Manually reset user password


Configure automated policy to remediate issue


Receive notifications


User risk detected messages


Weekly digest email


**## **Identity Synchronization**** 


SSO Options


Azure AD Connect and AD FS


Azure AD Connect with Password Synchronization and Seamless SSO


Azure AD Connect with Pass through Authentication and Seamless SSO


Azure AD Connect Health


Shows sync errors


Sync services shows Azure AD Connects


Agent for ADFS and ADDS available


Planning Azure Connect with Multi Forest


Autodiscover   Each Exchange forest must be authorative for at least one SMTP namespace and the coreesponding Autodiscover namespace


Certificates  a single digitalcertificatec annot beused for multiple AD forests.


Common Name must match the host being authenticated and is typically the etxernal hostname for the Client Access server in the AD forest


Issuer   third party Certificate Authority that verfied the orgainzation information and issued the certificate, such as VeriSIgn or GoDaddy


Every Forest will need to communicate with the Azure AD Connect agent on the server


Azure AD Security Groups


Created as local groups on domain joined servers and as domain groups if installed on a domain controller


ADSyncAdmins


FullAccess to AAD Connect


ADSyncOperators


Access to Azure AD Sync service manager


ADSyncBrowser


Has permission to gather information about a user's lineage when resetting password


ADSyncPasswordSet


Can perform all operations by using the password management interface


Understanding Identity Federation


Creates a trust relartionship between two organizations


User authenticates against AD DS


ADFS generates a claims token trusted by federation partner


Access granted to resource based on Claims token


**## **Managing External Access****


External sharing


Office 365


Azure AD B2B


Azure AD free capabilities are available for guest users without additional licensing


Guests dont needed licenses


License calculation 1:5


**## **M365 Security**** 


MS Strategy


Effective defense dramatically increases the costs to the attacker


Assume identities are always under attack


Defense in depth is a must


Protect, detect and respond


Always assume you have been compromised


Attacker only needs to find one vulnerability


One advantage of the cloud is the shareds responsibility


Cloud also provides better threat detection


Large public cloud providers can invest billions


Increate Attackers Cost


Defend against cheapest attacks


Prossess a good detection ands response process to limit attackers lateral movement


Develop defense against potential and future attacks


O365 ATP provides an attack simulator


Using the secure score


Improvement actions


What is the Anti Malware Pipeline?


First mail is processed by techniques such as IP and sender reputation, combined with heuristics


Next it is scanned by multiple signature based anti virus scanners


EOP scans inviditual files


Heuristic clustering is used to identitfy suspicious mail


A sample from a cluster is sent to a hypervisor sandbox and the file is opened for further analysis


Signals are collected, the results are run through a machine learning (ML) method


IF M365 ATP is eanbled, ATP extens the protection


Zero Hour Auto Purge


Monitor updates to spam and malware signatures and can identify previously undetected malicious messages already in users inboxes


Unopened spam is moved to junk mail


Malware is stripped from mail regardless if it has been opened or not


Reverse is also true


Spoofing and Phishing Protection


EOP supports email authentication technique


Sender Policy Framwork (SPF)


Domain Keys Identified Mail (DKIM)


Domain based Messaging and Reporting Compliance (DMARC)


Spoof intelligence can provide insight into senders who are spoofing your domain


E5 Plan needed or ATP license


Safe Attachments


Needs ATP


Dynamic Delivery not supported for OnPremise Hybrid System. Replace will be used instead


Safe Links


Microsoft Defender for Identity


Monitor on premises domain controllers


Captures network traffic and Windows events directly from your domain controllers


Analyzes the data for attacks and threats


AATP Sensor needed


Application Guard


Using hardware isolation, it helps prevent old and newly emerging attacks to help keep employees productive


Define trusted web sites and everything not on your list is considered untrusted


User opens untrusted site through Edge, then Edge opens the site in an isolated Hyper V enabled container


Application Control


W10 Entterprise license needed


Applications are untrusted by default


Can block unsigned scripts and MSIs


Application control policies apply to the computer as a whole and affect all users


Applications control rules include


Attributes of the codesigning certificate


Attributes of the apps binaries such as filename, version or hash


The reputation determined by MS Intelligent Security Graph


The identity of the process that initiated the installation


The path from which the app or file is launched


The process that launched the app or binary


Defender Exploit Protection


On by default


Host intrusion prevention capabilities from Windows 10


Exploit protection


Attack surface reduction rule


Network protection


**## **Threat intelligence**** 


Azure Sentinel


Cloud native SIEM (Security information and event management) tool that is built on Azure


Using the cloud and artifical intelligence to help security operations teams identify and stop cyber attacks before they cause harm


Includes MS threat intelligence stream and external threat intelligence streams


Collect data cloud scale


Detect previously undetected threats


Investigae threats with artifical intelligence


Automate response to incidents


**## **Information Protection****


Classifying Data


Create or view a document with protection enabled you will have four data classification option


Automatic, Recommended, Reclassification, User set


When a user sets a manual label, then it wont be automatically replaed


Sensitivity Labels (Unified labeling)


Metadata written to documents


Stay in clear text so DLP can read them


Travel with document regardless of location


Creation within compliance center  &gt; information protection


Preview: Labels for Azure, including SQL columns, files Azure Blob Storage and more


Documents can be encrypted and expire


Assign permissions can be: users, group, all auth users, specific email addresses or domains


Content marking: watermark, add a header/footer


Protection setting for groups and sites: Privacy and external user access settings, external sharing and conditional access settubgs


Labels are distributed by label policies to users


Apply this label by default?


Justification needed to remove label?


Enforces user to set a label


Provide user with a link to help page


Auto labeling policy avilable


AIP Super User


Ensures authorized people and services can always read and inspect the data that Azure Rights Management protectsf for your organization


If not Enabled by default


Must use PowerShell to enable Super User and assign users or groups to it


Enable AadrmSuperUserFeature


Set AadrmSuperUserGroup


Once enabled and assigned, can use it to manage protected content via PowerShell


Protect RMSFile


Unrpotect RMSFile


Set AIPFIleLabel


To monitor activity of RMS Admins


Get AadrmAdminLog


Customer Lockbox (E5 / Security Addon)


If Customer Lockbox is activated, then the Support Engineer sends a request from their superior and the customer needs to approve the access


Protecting Data Access in Microsoft 365


MSFT_cloud_architecture_identity&device_protection.pdf


Windows Information Protection


Differentiates between corporate and personal data


Data generated by or coming from a corporate app is tagged as work


WIP provides the ability to:


Encrypt enterprise data on corporate owned and employee owned (BYOD) devices


Remotely wipe corporate work data off managed computers


Stop non protected apps from accessing corporate work data


WIP prerequisites


Deivce or Application Management solution that supports WIP (Intune)


WIP policies with app protection settings


Determine which Encyprtion Key to use


Determine which Policy Protection Mode to use


Configure your intelligent network boundaries


M365 Encryption


Data at rest


Distributed Key Manager (DKM) or BItLocker in Microsoft datacenters


Data in Transit


TLS for files in transit


Message Encryption with Azure Rights Management, S/MIME, and TLS for email in transit


Rights Management in Exchange


Can be applied by user manually or automatically in Outlook or OWA or via transport rules in Exchange Online


Helps to protect restricted content


Prevent forwaring, modifying, printing, faxing, saving, or cuttin and pasting the content


Supports expiration of IRM protected messages and attachments


Prevents IRM protected content from being copied using snipping tool


Connect prevent all methods such as cameras, transcription or third party screen grab


Automatically attaches a pre license to proteced messages


Client does not need repeated trips to server to get a user license


Enables offline viewing IRM protected messages and files


Enables messages to be viewed in Outlook on the web


Rights Management in SharePoint


Needs to be activated/refreshed in the SharePoint Admincenter settings for all sites


Under the library settings IRM can be enforced for alle files/documents


Comparing IRM vs AIR in SharePoint


When working with IRM protection


Connot use the default or custom protection templates that you manage in the Azure Portal


Protected PDF files are not supported (ppdf)


Co authoring is not supported


AIP works on the client side vs IRM working on the server side


Secure Multipurpose Internet Mail Extension (S/MIME)


A protocal to digitally sign and encrypt email messages


Append a digital signature to an email message


Encryption an email message body and attachments


Digital Signatures


Provides Authentication, Data integrity and Nonrepudiation


Signing process


Message body is captured


Hash value of the message is calculated


Sender's private key is retrieved


Hash value in ecrypted with the sender's private key


Encrypted hash value is appended tothe message as the digital signature


Digital Signatures and Encryption


Message is captured


Hash value of the message is calculated


Sender's private key is retrieved


Recipient's public key is retrieved


Hash value is encrypted with the sender's private key


Encrypted hash value is appended to the message as a digital signature


One time symmetric session key is generated


Encryption operation is performed on a message using the session key


Session key in encrypted using the recipient's piblic key


Encrypted session key is included withthe encrypted message


Message is sent


Data Loss Prevention (DLP)


Infos


Used to identify, monitor, report, and protect sensitive data


Protect content in Exchangeemail, Teams chats and channel messages, and OneDrive/SharePoint documents


Customize level of restrictions by creating DLP policies


Simply warn users


Black from sharing sensitive data to unauthorized users


Block from sharing sensitive data altogether


DLP conditions


Content, such as the type of sensitive information you're looking


Also, context such as who the document is shared with


DLP actions


Block access to the content


Send a notification


Display a policy tip


Allow usersto override the configured action


Document Protection through DLP Policies


Leverage FCI properties or properties applied in SharePoint


Create a managed property in the SharePoint admin center


Content is protected after property is detected which does not happen instantly


Cloud App Security


Overview


Discover and control the use of Shadow IT


Protect your sensitive information anywhere in the cloud


Protect against cyberthreats and anomalies


Assess the compliance of your cloud apps


Cloud discovery


Provide log files from local firewall


Archiving and Retention


In place Archiving in Exchange


Online archive


Not cached as part of the offline store files (.ost)


Reduce compliance issue caused by personal store files (pst)


Included in E3 and higher plans, can be added on to others


Unlimited archive starts at 100GB, can turn on auto expanding archiving via PowerSHell using Set OrganizationConfig  AutoExpendingArchive


In place Records Management in SharePoint


Activated by site collection


A records Center site


Manage Records in Place


Activate in Place Records Management at the Site Collection Level


Configure Record Declaration Settigns at the Site, List or Library Level


Messaging Records Management


Supports users by cleaning up their primary mailboxes to improve performance


Uses retention tags to apply retention settings to items and folder


Default policy tag


Retention policy tag


Overrides default policy tag


Personal tag


Overrides retention policy tag


Retention policies


Retain items to comply with industry regulations and internal policies


Can apply retention across all services in O365


Allow users to continue to work while still meeting compliance requirements


Reduce your risk in the event of litigation or a security breach


Decide proactively whetere to retain content, delete content, or both


Data Gorvernant

