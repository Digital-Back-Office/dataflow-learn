---
title: "Use Dataflow from AI Apps (MCP)"
lastUpdated: 2026-11-04
---

You can connect AI apps such as **Claude Code**, **Claude Desktop**, **Cursor** and **VS Code** to Dataflow. Once connected, you can ask the app in plain language to work in your Dataflow workspace for you, for example to read a notebook, fix a cell, create a diagram or deploy an app to Preview.

The connection uses the **Model Context Protocol (MCP)**, an open standard that AI apps use to connect to other services.

---

## What the AI App Can Do

After you connect an app, it can do the following as you, with your permissions:

- Read, edit and delete files and notebooks in your workspace
- Use your connections, variables and secrets
- Create and manage Preview deployments and diagrams
- Start and stop your Studio server

The app can't do anything you can't do yourself in Studio.

---

## Before You Begin

- You need a Dataflow account and access to **https://app.dataflow.zone**.
- The **AI assistant** must be enabled for your organization. If it isn't, ask your admin to enable it.
- You need an AI app that supports remote MCP servers, such as Claude Code, Claude Desktop, Cursor or VS Code.

> **Note:** You never need to create or copy a token. You sign in on the Dataflow login page, the same way you sign in to Studio.

---

## Connect Your AI App

Use this address for the Dataflow MCP server:

```
https://app.dataflow.zone/hub/ai/mcp
```

### Claude Code

1. Run this command in a terminal:

   ```bash
   claude mcp add --transport http dataflow https://app.dataflow.zone/hub/ai/mcp
   ```

2. Open Claude Code and run `/mcp`.
3. Select **dataflow**, then choose **Authenticate**.
4. Your browser opens the Dataflow login page. Sign in, then approve the app. See [Sign In and Approve](#sign-in-and-approve).

> **Tip:** You can copy this command from Studio. Go to **Settings → Connected Apps**, find **Connect Claude Code**, and click the copy icon.

### Claude Desktop and claude.ai

1. Open **Settings → Connectors**.
2. Click **Add custom connector**.
3. Enter **Dataflow** as the name and `https://app.dataflow.zone/hub/ai/mcp` as the URL.
4. Click **Connect**, then sign in and approve the app in the browser window that opens.

### Cursor

1. Open **Cursor Settings → MCP**, then click **Add new MCP server**. You can also edit `~/.cursor/mcp.json` directly.
2. Add the Dataflow server:

   ```json
   {
     "mcpServers": {
       "dataflow": {
         "url": "https://app.dataflow.zone/hub/ai/mcp"
       }
     }
   }
   ```

3. When Cursor asks you to log in to **dataflow**, sign in and approve the app in your browser.

### VS Code

1. Create or open `.vscode/mcp.json` in your project.
2. Add the Dataflow server:

   ```json
   {
     "servers": {
       "dataflow": {
         "type": "http",
         "url": "https://app.dataflow.zone/hub/ai/mcp"
       }
     }
   }
   ```

3. Start the server from the file, then sign in and approve the app in your browser.

---

## Sign In and Approve

When you connect an app for the first time:

1. Your browser opens the **Dataflow login page**. Sign in with your usual account.
2. The page shows a consent screen, **Connect *app name* to Dataflow**, with your user name and organization.
3. Check the list of what the app will be able to do, then click **Allow**. Click **Deny** if you don't want to connect it.
4. You're sent back to your AI app, which is now connected.

The app works in the organization shown on the consent screen. To use a different organization, switch to it in Studio first, then connect again.

---

## Using Dataflow from Your AI App

Ask for what you need in plain language. For example:

- *"List the notebooks in my workspace."*
- *"Open `sales/report.ipynb` and fix the failing cell."*
- *"Create a diagram for the orders and customers tables."*
- *"Deploy my sales dashboard to Preview."*

### Approving Actions

- **Your AI app asks before it uses a tool.** Most apps show each action and let you approve or reject it.
- **Dataflow asks again before risky actions,** such as deleting a file, deploying, stopping a deployment, or starting or stopping your server. Files are deleted one at a time, never whole folders, and a deleted file can't be restored from Studio. The app shows you the question and any choices, such as the server size or environment, and goes ahead only after you agree.
- **After an edit, the app can show you what changed** in your files, notebooks and diagrams.

### Long-Running Tasks

Deployments and server start-ups can take a few minutes. While they run, the app shows progress updates, such as *"Redeploying the app"*, *"App started"* or *"Starting server: still starting, 60s elapsed"*.

### Live Updates in Studio

Keep Studio open while you work, and the changes the AI app makes appear there right away, without reloading:

- **Notebooks** update live if you have them open.
- **Diagrams** open in the editor reload with the new version.
- **Deployment lists** in Preview show new and changed apps.
- **Your server's status** on the home page and the bottom bar follows when the app starts or stops it.

Plain files open in a code editor don't refresh on their own. Reopen the file to see the app's changes.

### Deployments

The AI app can create, deploy and manage deployments in the **Preview** runtime only. Deploy to **Live** from Studio, the same way you do today.

---

## Staying Signed In

- You stay signed in for up to **30 days** after you approve an app. After that, the app asks you to sign in again.
- If your sign-in stops working for any other reason, the app asks you to sign in again automatically. Sign in and approve the app, and it carries on.

---

## Manage or Disconnect Apps

To see the apps you've connected:

1. In Studio, open **Settings**.
2. Click the **Connected Apps** tab.

Each app shows its organization, when it was connected, when it was last used and when its sign-in expires.

To disconnect an app, click the delete icon next to it, then confirm. The app is signed out immediately. To use it again, connect it and approve it again.

> **Tip:** Disconnect any app you no longer use, or one on a device you've lost.

---

## Troubleshooting

| Problem | What to do |
|---|---|
| The consent screen says the AI assistant isn't enabled | Ask your admin to enable the AI assistant for your organization, or switch to an organization where it's enabled and connect again. |
| The app says it needs authentication, or shows *"Sign in again"* | Your sign-in has expired or was disconnected. Choose **Authenticate** or **Connect** in the app, then sign in and approve it. In Claude Code, run `/mcp`, select **dataflow** and choose **Authenticate**. |
| The app says your server isn't running | Ask the app to start your server, or start it from Studio. Some tasks, such as working with files and notebooks, need a running server. |
| The app works in the wrong organization | Disconnect the app in **Settings → Connected Apps**, switch organization in Studio, then connect the app again. |
| A task you asked for didn't happen | Check whether the app is waiting for you to approve an action or answer a question. Nothing is deleted or deployed until you agree. |

For anything else, see [Support & Help](/get-started/support-and-help/).
