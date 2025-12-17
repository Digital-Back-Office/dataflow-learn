---
title: "Using Connections, Variables, and Secrets"
lastUpdated: 2025-06-27
---

This page demonstrates how to access **connections, variables, and secrets** within your Python scripts in Dataflow using Airflow hooks for streamlined and secure development workflows.

---

## What Are They?

- **Connections:** Secure database or external system configurations (PostgreSQL, MySQL, HTTP, AWS, etc.) stored centrally and accessed via Airflow hooks using `conn_id`.
- **Variables:** Key-value pairs stored in Airflow for dynamic values such as configuration parameters.
- **Secrets:** Sensitive credentials like API keys stored securely, ensuring they remain encrypted and never exposed in plaintext in notebooks or scripts.

---

## Using Connections with Airflow Hooks

Connections are accessed using Airflow provider hooks. Each hook type requires a specific `conn_id` parameter to identify the connection.

### Example: PostgreSQL Connection

```python
from airflow.providers.postgres.hooks.postgres import PostgresHook

# Initialize the hook using Airflow connection ID
hook = PostgresHook(postgres_conn_id="my_postgres_conn")

conn = hook.get_conn()
cursor = conn.cursor()

# Execute SQL query
cursor.execute("SELECT COUNT(*) FROM my_table;")
count = cursor.fetchone()[0]
print(f"Row count in my_table: {count}")
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
    subject="Test Email",
    html_content="<b>Hello from Dataflow!</b>"
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

hook = S3Hook(aws_conn_id="my_aws_conn")
client = hook.get_conn()
response = client.list_buckets()
print([b["Name"] for b in response["Buckets"]])
```

---

## Using Variables

Variables can be accessed using Airflow's Variable class.

```python
from airflow.models import Variable

# Retrieve a variable
model_version = Variable.get("default_model_version")
print(f"Using model version: {model_version}")

# Set a variable
Variable.set("my_variable", "my_value")

# Get with default value
timeout = Variable.get("timeout_seconds", default_var="30")
```

---

## Using Secrets

Secrets can be accessed through Airflow's Variable class or connection extra fields.

```python
from airflow.models import Variable
import google.generativeai as genai

# Retrieve a secret (stored as a variable or in secrets backend)
gemini_api_key = Variable.get("gemini_api_key")

# Example: Using Gemini API key with Google Generative AI
genai.configure(api_key=gemini_api_key)
model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content("Hello from Dataflow!")
print(response.text)
```

---

## Complete Example: Using All Three

Below is a complete example showing how to use a database connection, a variable, and a secret within a Python script.

```python
from airflow.providers.postgres.hooks.postgres import PostgresHook
from airflow.models import Variable
import google.generativeai as genai

# 🔗 Retrieve a Database Connection (e.g. PostgreSQL)
hook = PostgresHook(postgres_conn_id="my_postgres_conn")
conn = hook.get_conn()
cursor = conn.cursor()
cursor.execute("SELECT COUNT(*) FROM my_table;")
count = cursor.fetchone()[0]
print(f"Row count in my_table: {count}")

# 📝 Retrieve a Variable (e.g. model version)
model_version = Variable.get("default_model_version")
print(f"Using model version: {model_version}")

# 🔒 Retrieve a Secret (e.g. Gemini API Key)
gemini_api_key = Variable.get("gemini_api_key")

# Example: Using Gemini API key with Google Generative AI
genai.configure(api_key=gemini_api_key)
model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content("Hello from Dataflow!")
print(response.text)
```
