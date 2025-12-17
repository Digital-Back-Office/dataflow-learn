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
- HTTP
- SMTP
- SQLite
- IMAP
- AWS S3
- Python Package Index
- and more

Once created, these connections can be used across your notebooks, pipelines, and apps, ensuring consistency and security in your workflows.

---

## Creating a Connection

Follow these steps to create a new connection:

1. Navigate to the **Connections** section from the Studio sidebar.  
2. Click **"New Connection"**.  
3. Select the **database type** from the options (PostgreSQL, MySQL, etc.).  
4. Fill in the required fields:
   - Connection Name (unique) - this will be used as `conn_id`
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

## Deleting a Connection

To remove a connection:

1. Click **"Delete"** next to the connection you wish to remove.  
2. Confirm deletion in the dialog prompt.

> Caution: Deleting a connection will cause any workflows using it to fail until a replacement connection with the same name is configured.

---

## Best Practices for Connections

- Use **unique and descriptive names** for each connection to avoid confusion in large projects.  
- Store sensitive credentials only within connections to ensure security and avoid hardcoding in scripts.  
- When deleting connections, verify which workflows depend on them to prevent unexpected failures.

---

## Using Connections in Python Scripts

Connections created in Dataflow can be accessed in your Python code using Airflow hooks. Each connection is identified by its `conn_id` which you specified when creating the connection.

### Example: PostgreSQL Connection

```python
from airflow.providers.postgres.hooks.postgres import PostgresHook

# Initialize the hook using Airflow connection ID
hook = PostgresHook(postgres_conn_id="my_postgres_conn")

conn = hook.get_conn()
cursor = conn.cursor()

# Execute SQL query
cursor.execute("SELECT version();")
version = cursor.fetchone()
print("Postgres version:", version)
```

### Example: HTTP Connection

```python
from airflow.providers.http.hooks.http import HttpHook

hook = HttpHook(http_conn_id="my_http_conn", method="GET")
response = hook.run("/api/endpoint")

print(response.status_code)
print(response.text)
```

### Example: SMTP Connection

```python
from airflow.providers.smtp.hooks.smtp import SmtpHook

hook = SmtpHook(smtp_conn_id="my_smtp_conn")

# Initialize the SMTP client
hook.get_conn()

# Send email
hook.send_email_smtp(
    to="receiver@example.com",
    subject="SMTP Hook Test",
    html_content="<b>Hello!</b>"
)

print("Email sent ✔️")
```

### Example: SQLite Connection

```python
from airflow.providers.sqlite.hooks.sqlite import SqliteHook

hook = SqliteHook(sqlite_conn_id="my_sqlite_conn")

conn = hook.get_conn()
cursor = conn.cursor()

cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()

print(tables)
```

### Example: IMAP Connection

```python
from airflow.providers.imap.hooks.imap import ImapHook

with ImapHook(imap_conn_id="my_imap_conn") as hook:
    hook.mail_client.select("INBOX")

    # Get newest mail id
    latest_id = list(hook._list_mail_ids_desc("ALL"))[0]

    # Get raw mail body as text
    raw = hook._fetch_mail_body(latest_id)
    if isinstance(raw, bytes):
        raw = raw.decode("utf-8", errors="ignore")

    # Print subject and recipient
    lines = raw.splitlines()
    for line in lines:
        if line.startswith("Subject:") or line.startswith("Delivered-To:"):
            print(line)
```

### Example: Python Package Index Connection

```python
from airflow.hooks.package_index import PackageIndexHook

hook = PackageIndexHook(pi_conn_id="my_python_conn")
url = hook.get_connection_url()

print(url)
```

### Example: AWS S3 Connection

```python
from airflow.providers.amazon.aws.hooks.s3 import S3Hook

def list_buckets():
    hook = S3Hook(aws_conn_id="my_aws_conn")
    client = hook.get_conn()
    response = client.list_buckets()
    print([b["Name"] for b in response["Buckets"]])

list_buckets()
```
