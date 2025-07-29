---
title: MS-700 - Microsoft 365 Teams Administrator
description: "MS-700 notes"
sidebar_position: 3
slug: /ms-700-teams-administrator-notes
authors: [Tobias]
date: 2024-02-02
keywords: [MS 700,Notes,Trainings,Teams]
tags: [MS 700,Notes,Trainings,Teams]
last_update: 
 date: 2024-09-08
 author: Tobias
---



:::tip

Notes from March 2022

:::




### Group naming policy {#fc055f6c7fe643598647bdb6c3806a59}


- Azure AD P1 license
- Admiistrator also needs to the license to create the group naming policies
- Repfix-Suffix naming policy: The prefixes can be string ot user attributes
- Custom blocked words: Words can be uploaded to be blocked from group creation
- The naming policy can also be help to categorize groups in the address book
	- Blocked words are not case senstitive
	- Will show an error when using a blocked word
	- No character restrictions
	- Limit of 5000 words that can be blocked
- Exempted from the policies are Global Admin, User account admin and Directory writers, Partner Tier 1/2 Support
- Group expiration
	- Group lifetime can be defined
		- 180,365 or custom
	- Notifcations are being set 30,15 and 1 day for expiration
	- Group owners need to have a Exchange mailbox to get a expiration email
	- A email contact for groups without owners can be configured
	- Certain groupsc an be activted for group expiration
- Archiving, Restoring and Deleting a Team
	- Teams can be archived through the Teams client by clicking on the gear in the Teams group overview
		- Will put the Team into a read only state, settings and roles can still be changed
	- Deleted groups can be restored in M365 admin center under groups



### Configuring and Managing Guest Access {#987ade46e6fa4c78a33fd62c455b5d7a}

- Configuring options for guests
	- Guide [Collaborate with guests in a team | Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/solutions/collaborate-as-team?view=o365-worldwide)
	- Configure Guest access in the Teams Admin center for Calling, Meeting, and Messaging
	- Allow External/user Guest access in Azure AD under User settings
		- Custom user flow can be activated
		- User flow is configured under External identites
		- Custom attributes can be added
	- Allow guest access in Teams under M365 Admin center -> Settings - > Microsoft Teams
	- Manage external sharing for M365 groups under M365 Admin center -> Settings -> Microsoft 365 groups
	- Set Sharing settings in SharePoint
		- Available link types
		- Settings for Anyone links
		- Expiration of Anyone links
		- Default link permission (View / Edit)
- Azure AD access reviews
	- Azure AD P2 needed
	- Group owners need to verfiy current members of group
	- If group owner doesnt answer user can be removed
	- Review type
		- Type: Teams + Groups or Applications
		- All groups or selected groups
		- Scope: Guest users only
	- Review settings
		- Reviewers:
			- Group owners
			- Selected user or groups
			- User view own access
			- Managers of users
		- Recurrences:
			- Weekly, Monthly, Quarterly, Semi-annually, Annually
			- Ist possible to set an end date or maxinum number of occurences
	- Settings
		- Upon completion
			- Auto apply results to resource (Enable / Disable)
			- If reviewers dont respond
				- No change, Remove accesss, Approve access, Take recommendations
		- Enable reviewer decision helpers
			- Shows to reviewer if user had a sign in the last 30 days
			- No sign-in within 30 days
		- Advanced settings
			- Justification required
			- Email notifications
			- Reminders
			- Additional content for reviewer email

### Managing Chat and Collaboration Experiences {#fd139b54322240bc9f1db78ac622f7a5}


- Messaging Policies
	- One default policies where all users are included
	- Examples:
		- Owners can delete sent message
		- Edit sent messages
		- Read receipts (User controlled)
		- Use Giphys
		- Allow URL previews
		- Send urgent messages using prio notifications
		- Create voice messages
		- On mobiled evices, display favorite channelsabove recent chats
		- Remove usersf rom group chats
- External Access
	- Users can communicate with other Skype for Business and Team uses
	- Users can communicate with Skype users
	- By default all usersc can communicate with all domains
	- Domains can added as either Allowed or Blocked
		- If Allowed are added, all others are blocked
		- If you add Blocked, then all others are allowed
- Teams settings
	- Creation of private channels can be deactivated
	- Policies can be assigned to groups
		- Priority can be set
- Email integration
	- Allows users to send emails to a channel email address
	- Accept channel email from these SMTP domains



### Meetings {#3a3947b277b0449e99748e895f863aa4}


- Settings
	- Anonymous users can join a meeting
	- Email invitiation
		- URLs for Logo, Legal and Help can be added
		- Footer text can be set
	- Network
		- QoS markers can be inserted in real time
		- Port range for each type of real-media traffic can be set
			- Audio, Video, Screen sharing
- Live events settings
	- Support URL
	- Third party distribution provider can be used
		- Supported providers can be selected, no self configuration
- Conference Bridge Settings
	- Allows a user to call in with a phone system/phone
	- Bridge settings
		- Meeting entry and exit notification
		- PIN length
- **Information barriers** are policies that an admin can configure to prevent individuals or groups from communicatin with each other
- Information Barrier Triggers
	- Members are added to a team
	- A new chat is requested
	- A user is invited to join a meeting
	- A screen is shared between two or more users
	- A user places a phone call (VOIP) in TeamsGuest users in Teams
	- Guest users In Teams
- Segments are sets of users that are defined in the Security & Compliance Center using a selected user account attribute
- Two kind of policies
	- Block policiesprevent one segment from communicating with another segment
	- Allow policies allow one segment to communicate with only certain other segments
- Policy application isdone after all information barrier policies are defined and you are readyto apply them in your organization



### Network {#10be5025a68e4322b9e37d457753e7b9}


- PowerShell Module NetworkTestingCompanien can be used to check network requirements (ports)
- With Invoke-ToolsCreationShortcuts it can be installed as shortcut to start the GUI
- QoS identifies and marks all packets in real-time streams helps to assign a dedicated portion of network bandwidth
- With QoS following issues can occur
	- Jitter - media packets arriving at different rates
	- Packet loss
	- Delaying round trip time (RTT)
- Router/Switch: Without QoS there is just one queue
- Two common solutions
	- QoS via port-based tagging using ACLs
	- Insert Differentiated Services Code Point (DSCP) markers via GPO


