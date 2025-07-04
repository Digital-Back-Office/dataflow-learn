---
title: "Git Settings"
lastUpdated: 2025-06-27
---


Integrating your Git repositories with Dataflow enables seamless version control for notebooks, scripts, and pipelines using SSH keys for secure authentication.

---

## Why Integrate Git?

Connecting Git allows you to:

- Clone, pull, and push notebooks and code securely  
- Collaborate with your team on version-controlled projects  
- Maintain reproducibility and track changes effectively

---

## Prerequisites

> **Note:** Ensure your **Studio server is turned on** before using Git integration features. The SSH key is securely stored in your configured secret storage location within Dataflow.

---

## Setting Up Git Integration

Follow these steps to set up Git integration in Dataflow:

### 1. Navigate to Git Settings

1. In the **Studio settings sidebar**, click **Git Settings**.  
2. You will see a list of your existing SSH keys (if any).

---

### 2. Add a New SSH Key

1. Click **Add SSH Key**.  
2. Enter:
   - **Key Name:** A unique identifier for the key (e.g. Personal GitHub Key)  
   - **Description:** Optional, for clarity or team reference
3. Click **Save**.

Dataflow will generate:

- **SSH Public Key:** To add to your Git provider (e.g. GitHub)  
- **SSH Private Key:** Stored securely in your configured secret storage; not visible for download

---

### 3. Copy the Public Key to Git Provider

1. Click **Copy** next to the **Public Key** field.  
2. Go to your Git provider (e.g. GitHub).  
3. Navigate to **Settings → SSH and GPG Keys → New SSH Key**.  
4. Paste the copied public key, give it a descriptive name, and **save**.

---

### 4. Clone Repositories in Studio

Once your SSH key is added to your Git provider:

- Open **Notebooks** or **VS Code** within Studio  
- Use standard Git commands to clone repositories:

```bash
git clone git@github.com:username/repository.git
