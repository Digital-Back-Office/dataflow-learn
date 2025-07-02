---
title: "Connections"
lastUpdated: 2025-06-27
---

Managing **connections** efficiently in Dataflow is essential for building robust and secure data workflows. Connections allow you to link your workspace to external databases and services seamlessly, ensuring your pipelines, notebooks, and applications can interact with data sources without hardcoding credentials.

---

## What are Connections?

A **connection** is a secure configuration that stores authentication details for external databases or services. For example, you can create connections for:

- PostgreSQL
- MySQL

Once created, these connections can be used across your notebooks, pipelines, and apps, ensuring consistency and security in your workflows.

---

## Creating a Connection

Follow these steps to create a new connection:

1. Navigate to the **Connections** section from the Studio sidebar.  
2. Click **"New Connection"**.  
3. Select the **database type** from the options (PostgreSQL, MySQL, etc.).  
4. Fill in the required fields:
   - Connection Name (unique)
   - Database Type
   - Host
   - Port
   - Username (Login)
   - Password
   - Extra settings (if applicable, such as SSL options)
5. Click **"Save"** to create the connection.

<!-- ![Create Connection Screenshot](../../../assets/workspace/studio/connections/create-connection.png) -->

---

## Updating a Connection

To modify an existing connection:

1. Go to the **Connections** page.  
2. Click **Edit** next to the desired connection.  
3. Update any fields as required.  
4. Click **"Save"** to apply the changes.

> Note: Updating a connection does not interrupt running workflows unless the credentials change.

---

## Testing a Connection

It is recommended to test your connection after creation or updates:

- Click the **"Test Connection"** button next to your connection.
- The system will verify the credentials and return the connection status.

<!-- ![Test Connection Screenshot](../../../assets/workspace/studio/connections/test-connection.png) -->

---

## Deleting a Connection

To remove a connection:

1. Click **"Delete"** next to the connection you wish to remove.  
2. Confirm deletion in the dialog prompt.

> Caution: Deleting a connection will cause any workflows using it to fail until a replacement connection with the same name is configured.

---

## Best Practices for Connections

- Use **unique and descriptive names** for each connection to avoid confusion in large projects.  
- **Test connections regularly** especially if credentials or database hosts change.  
- Store sensitive credentials only within connections to ensure security and avoid hardcoding in scripts.  
- When deleting connections, verify which workflows depend on them to prevent unexpected failures.

---

## Using Connections in Python Scripts

Connections created in Dataflow can be accessed in your Python code for executing database operations without exposing credentials.

### Example: Using a Connection in Python

```python
from dataflow.dataflow import Dataflow
from sqlalchemy import text

# Initialize Dataflow SDK
dataflow = Dataflow()

# Retrieve connection by ID
db = dataflow.connection("conn_id")

# Execute SQL query
result = db.execute(text("SELECT 1"))

# Fetch first row
row = result.fetchone()
print(row)
