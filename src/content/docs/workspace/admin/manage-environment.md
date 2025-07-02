---
title: "Manage Python Environment"
lastUpdated: 2025-06-27
---

The **Python Environment Approval** process allows Admins to review and control which custom environments are published for use across your workspace. This ensures security, compatibility, and standardisation for all workflows.

---

## What is Environment Approval?

When users create a custom Python environment in Studio, they can:

- **Save it as a draft** for personal use and further editing  
- **Submit it for publishing**, making it available to all users after Admin approval

The Admin review process ensures only tested, secure, and compatible environments are published in the workspace.

---

## Approving or Rejecting an Environment

### 1 Viewing Pending Environments

1. Navigate to **Admin → Python Environments** from the sidebar.  
2. You will see a list of environments needs approval:  

---

### 2 Reviewing Environment Details

Click on the environment name to view:

- **Environment Name and Base Environment**  
- **Creator (user who built it)**  
- **Installed Libraries and Versions** (e.g. pandas==1.3.5, scikit-learn==1.1.3)  
- **Description** (optional notes from the creator)

You can also **compare libraries and versions** with existing published environments to ensure consistency, security compliance, or avoid duplication.

---

### 3 Approving an Environment

- Click **Approve** if the environment meets your workspace standards.  
- The status will change to **Published** and it becomes available for all users in Studio for selection during server launch and in runtimes.

---

### 4 Rejecting an Environment

- Click **Reject** if the environment does not meet requirements or needs modification.  
- The status will revert to **Draft**, and the user can update and resubmit the environment for approval.

---

## Approval Workflow Summary

1. **User creates and builds environment → Saves as draft**  
2. **User submits environment for publishing**  
3. **Admin reviews environment details and libraries**  
4. Admin **approves** ➔ Environment status changes to **Published**  
5. Admin **rejects** ➔ Environment status reverts to **Draft**, user can edit and resubmit

---

## Best Practices

- Approve only environments with **validated, secure, and workspace-compliant libraries**.  
- Reject and provide feedback for environments with outdated or conflicting library versions.  
- Periodically review published environments to deprecate unused ones and maintain a clean, standardised environment list.

---

## Summary

Through the **Python Environment Approval** process, Admins ensure:

- Only verified environments are published and used across the platform  
- Workspace compatibility, security, and cost-efficiency are maintained  
- Users can build custom environments confidently while adhering to governance policies

