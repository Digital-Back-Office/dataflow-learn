---
title: "Runtime Settings & Project Management"
lastUpdated: 2025-06-27
---

The **Runtime** settings allow Admins to **create, deploy, and manage projects** across different runtime environments such as Streamlit, Dash, Airflow, and OpenWebUI within your workspace.

This ensures seamless orchestration and deployment of applications, pipelines, and dashboards with controlled configurations.

---

## What is Runtime?

A **Runtime** is an isolated execution environment where your applications or workflows run. Currently, the platform supports:

- **Streamlit** – For interactive data apps and dashboards  
- **Dash** – For production-grade analytical dashboards  
- **Airflow** – For orchestration pipelines (DAGs)  
- **OpenWebUI** – For deploying other web-based applications

---

## Creating a Project in Runtime

To create a new project within a runtime:

1. Navigate to **Admin → Runtimes**.  
2. Click **“Create Project”**.  
3. Fill in the required fields:

- **Project Name:** A unique, descriptive name for the project  
- **Slug:** URL-friendly identifier auto-generated or customised  
- **App Type:** Select one of the supported runtime types:  
  - Streamlit  
  - Dash  
  - Airflow  
  - OpenWebUI

4. Provide additional required details:

- **Python Environment:** Select the environment for dependency execution  
- **Git Repository URL:** Repository containing your app code  
- **Branch:** The branch to deploy (e.g. main, dev)  
- **Path:** The directory within the repo containing the main app file (e.g. `/src/app.py`)

---

### SSH Key Integration

After creating the project:

- The system will generate an **SSH Key** for the project.  
- Copy this key and add it as a **Deploy Key** in your Git repository settings to allow secure cloning and updates.

> **Note:** This is mandatory for successful deployment.

---

## Project States

- **Created:** Project has been configured but not yet deployed  
- **Deployed:** Project is cloned and running in the selected runtime environment  
- **Stopped:** Project is currently not running  
- **Failed:** Deployment or startup failed;

---

## Deploying a Project

1. Once the SSH key is added to your repository, click **Deploy**.  
2. The system will **clone the repository** and attempt to start the project.  
3. Ensure that:

- The repository path specified contains the `app.py` file (or appropriate entrypoint) required for execution.

---

## Managing Projects

For each project, you can:

- **Start:** Launch a stopped project  
- **Stop:** Shut down a running project  
- **Restart:** Restart the running project for updates or resource refresh  
- **Delete:** Permanently remove the project configuration and deployment  
- **Pull:** Fetch the latest code changes from the Git repository  
- **Update:** Modify certain project configurations (see limitations below)

> ⚠️ **Important:** To **update** a project, it must first be stopped. Only fields  **Name**, **Environment**, and **Git Path** can be edited after creation for integrity and stability reasons.

---

## Variables, Secrets, and Connections Per Project

Each project allows you to:

- **Define Variables:** Store reusable parameters or configurations.  
- **Define Secrets:** Store sensitive credentials securely.  
- **Configure Connections:** Link to external databases or systems needed by the app.

These settings ensure your applications are fully integrated and securely configured for their execution requirements.

---

## SSH Key Management

- **Copy SSH Key:** Retrieve the SSH key anytime from the project details page.  

---

## Best Practices

- Always confirm the **app.py entrypoint** exists at the specified path before deployment.  
- Use clear project names and slugs for easy identification.  
- Ensure Git repositories are configured with the generated SSH key before deployment attempts.  

---

## Summary

Using **Runtime Settings**, Admins can:

- Deploy apps across multiple runtime environments seamlessly  
- Manage project lifecycle with control over resources and configurations  
- Ensure secure, reliable, and efficient application deployments across the data platform

---

Explore the next sections on **Monitoring Runtime Projects** and **Managing Application Logs** for operational insights and performance management.
