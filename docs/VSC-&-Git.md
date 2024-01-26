---
title: VSC & Git
sidebar_position: 12
slug: /6a3e358f-5836-48b3-a8fc-47e74b2c23ff
---



This is the short description


# Git {#f37ef6ea52cd4bbcbbf030e6500dce5f}


**Installation**

- Download from;

	[Git - Downloading Package (git-scm.com)](https://git-scm.com/download/win)

- Git bash needs to be installed

## Configure for Github and VSC {#5402046c79ab46a8a2377787aef2c40a}


Instructions:


[Beginner Friendly: Using Multiple SSH keys (github.com)](https://gist.github.com/aprilmintacpineda/f101bf5fd34f1e6664497cf4b9b9345f)

- When private repositories are created a SSH key needs to be used to connect
- SSH key needs to assigned to the repositories
	- Can also be assigned globally in the user settings

**Create SSH key**


`ssh-keygen -t rsa -b 4096`

- Two files are being created
	- id_rsa
	- id_rsa.pub

**Add key to Github repository**

- Go to Settings → Deploy keys → Add deploy key
- Copy the text of .pub into the field and fill it into Key
- Activate "Allow write access"
- Click on **Add key**

**Clone repository**

- Use the Github extension to clone/pull a repository
- Use the cli to clone

	`git clone` [`git@github.com`](mailto:git@github.com)`:JustInnIO/terraform-cloud-azure-demo01.git`


# How to use Git {#521e0638192b4bc58789cfb211052c0c}


Basic command


```javascript
# GIT CLONE
git clone LINK

# GIT STATUS
git status

# Git Local Comment
git add .
git comment -am "TF Files First Commit"

# Push to Repository
git push
```

