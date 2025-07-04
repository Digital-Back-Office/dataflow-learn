---
title: "Managing Server Access"
lastUpdated: 2025-06-27
---

As an Admin, you can manage which users and roles have access to specific server configurations within your workspace. This ensures secure, cost-efficient, and role-appropriate compute allocation across your teams.

---

## What is Server Access Management?

Server Access Management allows you to:

- Control which roles can launch specific server configurations  
- Edit server names and descriptions for clarity  
- Restrict high-cost or GPU-enabled servers to specific users or teams to optimise resource usage

---

## Managing Server Configurations

### Viewing Existing Servers

1. Navigate to **Admin → Server Access** from the sidebar.  
2. You will see a list of all **predefined server configurations** available in your workspace.

Each entry displays:

- **Server Name**  
- **Description**  
- **CPU, GPU, Memory Specs**  
- **Assigned Roles and Users**

---
# Editing Server Access

1. **Navigate to the Server Access page.**

2. Click **Edit** next to the server you want to modify.

3. In the **Edit Server** panel, you can:

   - **Update Server Name:** Rename for clarity (e.g. “Data Science GPU Server”).
   - **Update Description:** Add context such as recommended use cases or team ownership.
   - **Add Roles:** Assign additional roles within the same panel.

4. Click **Save** to apply your changes.


### Removing Access

1. Click **Manage Access** next to the server.  
2. Deselect roles you want to remove from access.  
3. Click **Save Access Settings** to update.

---

### Deleting a Server Configuration

> **Note:** Server deletion is generally restricted and may require platform support depending on your Dataflow setup.

If allowed:

1. Click **Delete** next to the server configuration.  
2. Confirm deletion to permanently remove it from your workspace.

---

## Best Practices

- Assign GPU or high-memory servers only to roles that require them to optimise costs.  
- Use clear server names and descriptions to guide users on appropriate selection.  
- Review access permissions regularly to maintain security and budget compliance.

---

## Summary

Through **Server Access Management**, you can:

- View all predefined server configurations  
- Edit server names and descriptions for clarity  
- Assign or revoke access to roles  
- Ensure controlled and optimised usage of compute resources in your Dataflow workspace

Effective server access control ensures your teams have the right resources while maintaining security, cost efficiency, and operational clarity.