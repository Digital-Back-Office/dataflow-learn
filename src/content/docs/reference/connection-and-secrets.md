---
title: "Using Connections, Variables, and Secrets"
lastUpdated: 2025-06-27
---

This page demonstrates how to access **connections, variables, and secrets** within your Python scripts in Dataflow for streamlined and secure development workflows.

---

## What Are They?

- **Connections:** Secure database or external system configurations (PostgreSQL, MySQL, etc.) stored centrally.
- **Variables:** Key-value pairs stored in Dataflow for dynamic values such as configuration parameters.
- **Secrets:** Sensitive credentials like API keys stored securely in Dataflow’s secret manager, ensuring they remain encrypted and never exposed in plaintext in notebooks or scripts.

---

## Example: Using All Three in a Single Script

Below is a minimal, clear example showing how to use a database connection, a variable, and a secret within a Python script or notebook cell.

```python
from dataflow.dataflow import Dataflow
from sqlalchemy import text
import google.generativeai as genai

# Initialise Dataflow SDK
dataflow = Dataflow()

# 🔗 Retrieve a Database Connection (e.g. PostgreSQL)
db_conn = dataflow.connection("my_postgres_conn")
result = db_conn.execute(text("SELECT COUNT(*) FROM my_table"))
count = result.scalar()
print(f"Row count in my_table: {count}")

# 📝 Retrieve a Variable (e.g. model version)
model_version = dataflow.variable("default_model_version")
print(f"Using model version: {model_version}")

# 🔒 Retrieve a Secret (e.g. Gemini API Key)
gemini_api_key = dataflow.secret("gemini_api_key")

# Example: Using Gemini API key with Google Generative AI
genai.configure(api_key=gemini_api_key)
model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content("Hello from Dataflow!")
print(response.text)
