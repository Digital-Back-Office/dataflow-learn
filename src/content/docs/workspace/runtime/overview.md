---
title: "Runtime Overview"
lastUpdated: 2025-06-27
---

The **Runtime** section in Dataflow provides a central console to view and manage your deployed applications and workflows across different environments. It helps you track the status of your projects, launch them when needed, and organise them efficiently.

---

## What is Runtime?

A **runtime** in Dataflow represents the live environment where your applications, dashboards, models, or workflows are running. It acts as the execution layer, enabling your deployed components to function seamlessly.

Currently, Dataflow supports two types of runtimes:

- **Live:** Production-grade deployments intended for end users or operational consumption.  
- **Preview:** Temporary or development deployments used for testing, validation, or review before promoting to live.

These runtimes ensure your development and production workflows are separated and organised securely.

---

## Home View in Runtime

Upon navigating to **Runtime → Home**, you will see a dashboard displaying all your projects with details including:

- **Project Name:** The name of your deployed app or workflow  
- **Status:** Indicates whether the project is *Stopped*, *Created*, *Deployed*, or *Failed*  
- **Pinned Status:** Pin or unpin projects for quick access in the sidebar  
- **Launch Button:** Available for deployed projects to open them in a new browser tab

---

:::note
you can only pin or launch deployed projects
:::

### Project Status Types

- **Created:** The project has been created but not yet deployed.  
- **Deployed:** The project is live and accessible via the launch button.  
- **Stopped:** The project is inactive and not consuming compute resources.  
- **Failed:** The project failed during deployment and may require debugging or reconfiguration.

---

## Pinning and Unpinning Projects

You can **pin important projects** to keep them accessible directly from your sidebar. To pin or unpin:

1. Click the **pin icon** next to the project name in the Runtime Home view.  
2. Pinned projects will automatically appear under the **Pinned Projects** section in the sidebar for quick access.

---


## Recent Projects

Recent projects will be listed in the sidebar itself.

---

## Launching Deployed Projects

For any project in **Deployed** status:

- Click the **Launch button** beside it.  
- The application, dashboard, or workflow will open in a **new browser tab**, enabling direct interaction with your live deployment.

---

## Why Use Runtime?

The Runtime console is essential to:

- Monitor your deployed workflows and applications efficiently  
- Manage development (preview) and production (live) environments separately  
- Quickly launch or review active projects  
- Pin frequently accessed projects for streamlined workflows

---

## Summary

The **Runtime** area ensures you have clear visibility and control over all your deployed components within Dataflow. With the ability to pin projects, track deployment statuses, and launch applications seamlessly, it acts as the operational hub for your data workflows and applications.

Explore your Runtime Home today to manage and launch your projects effectively.