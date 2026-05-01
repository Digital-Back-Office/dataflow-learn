

---
# FILE: src/content/docs/get-started/access-and-onboarding.md
---

---
title: "Access and Onboarding"
lastUpdated: 2025-06-27
---

Welcome to **Dataflow**. Getting access to your workspace is simple and guided to ensure your team can start building immediately.

## How to Get Access

There are two primary ways to get started with Dataflow:

### Start Your Free Trial

Experience the full power of Dataflow with a **14-day free trial**.

1. Visit our [Start Free Trial page](https://dataflow-marketing.netlify.app/start-free-trail/).
2. Fill out the form with:
   - Your name
   - Work email address
   - Organisation name
   - Intended use case or workflow needs
3. Click **“Start Free Trial”**.

Our team will review your request and provision your workspace within **1 business day**.

---

###  Book a Personalised Demo

If you prefer a guided walkthrough before trial access:

1. Visit our [Book a Demo page](https://dataflow-marketing.netlify.app/book-demo/).
2. Select your preferred date and time for the demo.
3. Provide your contact information and a brief overview of your goals.

A Dataflow solutions engineer will:

- Conduct a **30-minute live demo** tailored to your use case.
- Answer any technical or operational questions.
- Guide you on setting up your first pipelines efficiently.

---

## What Happens Next?

 **Workspace Provisioning:**  
After approval or your demo session, you will receive an onboarding email containing:

- Your workspace URL  
- Login credentials or SSO setup instructions  
- Links to your Quickstart Guide

 **Onboarding Call (Optional):**  
For enterprise customers, we offer an onboarding call to:

- Review your architecture and integration needs  
- Set up initial projects and pipelines  
- Train your team on Dataflow best practices

---

## Need Assistance?

If you encounter any issues during access or onboarding:

- Visit our [Support & Help](/support) page  
- Email us at **support@dataflow.zone**

We are here to ensure your onboarding is seamless and your team is ready to build confidently with Dataflow.


---
# FILE: src/content/docs/get-started/introduction-to-dataflow.md
---

---
title: "Introduction to Dataflow"
lastUpdated: 2025-06-27
---

Welcome to **Dataflow**, your all-in-one platform for building, deploying, and managing complex data workflows with speed and efficiency.

Dataflow empowers organisations to:

- **Simplify data engineering workflows**  
  Build, test, and deploy scalable data pipelines seamlessly using our intuitive UI and powerful orchestration features.

- **Accelerate analytics and AI projects**  
  Run your data processing, machine learning, and analytics tasks on a unified platform optimised for performance and collaboration.

- **Ensure reliability and scalability**  
  Built on robust cloud-native infrastructure, Dataflow scales effortlessly with your workloads, ensuring minimal downtime and maximum throughput.

## Key Features

- **Unified Platform:** Build, manage, and deploy all your data pipelines, transformations, and machine learning workflows seamlessly within a single integrated platform.

- **Advanced Orchestration:** Design complex workflows with ease, scheduling tasks with precise dependency management and real-time monitoring to ensure reliability at scale.

- **Team Collaboration:** Enable your entire data team to collaborate securely with granular role-based access controls and shared project workspaces.

- **Elastic Compute Scaling:** Automatically scale compute resources to match your workload demands, optimising for both performance and cost-efficiency.

- **Robust Integrations:** Connect effortlessly to your existing data warehouses, data lakes, and external systems to create end-to-end data solutions without integration bottlenecks.

## Dataflow Architecture

Dataflow is built on a **distributed, cloud-native architecture** optimised for scalability, modularity, and ease of use.

![Dataflow Architecture](../../../assets/dataflow-architecture.jpg)

*Figure: Dataflow Architecture Overview*

### **Architecture Overview**

**Dataflow Studio**

Includes:

- Streamlit
- Airflow
- VS Code
- Jupyter
- and more...

**Dataflow Runtime (Prod / Preview)**

Supports:

- Airflow Pipelines
- Streamlit Applications
- Generative AI Applications
- Superset Dashboards
- and more...

**Shared Services**

- Shared Variables and Secrets
- Shared Connections

**Core Infrastructure Layers**

- Dataflow Core
- Shared Python Environments
- Dataflow Infrastructure Framework

> **Deployment**: Works seamlessly on **AWS, GCP, and Azure**.


---

## Why Dataflow?

Organisations choose Dataflow to:

- Reduce time-to-insight by streamlining data operations
- Minimise operational overhead with automated scheduling and monitoring
- Enable data scientists and engineers to focus on building value instead of managing infrastructure

## Get Started

Ready to build your first data pipeline?

Head over to our [Access & Onboard](/get-started/access-and-onboarding/) page to sign up and set up your workspace.

---

For questions, visit our [Support & Help](/get-started/support-and-help/) page or contact our team directly.


---
# FILE: src/content/docs/get-started/quickstart-guide.md
---

---
title: "Quickstart: Build and Launch an AI Chatbot Streamlit App"
description: "Learn how to build and deploy a Streamlit AI chatbot using Google Gemini API in Dataflow"
publishDate: 2025-06-27
lastUpdated: 2025-06-27
tags: ["streamlit", "ai", "chatbot", "gemini", "dataflow"]
---

## Introduction

Dataflow allows you to build and launch Streamlit apps seamlessly within your unified workspace. Users can create projects in any directory under:

- `/jovyan/` (personal workspace)
- `/jovyan/shared/` (shared team workspace)

**Important:** Each Streamlit project **must include an entry file named `app.py`** to function as the launch point for your app.

---

## Step 1: Add Gemini API Key as a Secret

Before running the chatbot app, you need to securely store your Gemini API key as a secret in Dataflow.

1. Go to **Settings → Secrets** in the sidebar
2. Click **"Add Secret"**
3. Enter the following details:
   - **Key:** `gemini_api_key` (must match the key used in your code)
   - **Value:** Your actual Gemini API key
   - **Description:** (optional) e.g., *Google Gemini API Key for Chatbot*
4. Click **"Save"** to store the secret securely

> **Note:** Studio server must be running to create secrets.

---

## Step 2: Create Your Project Directory

In **VS Code**, create a folder for your chatbot project. For example:

```
/home/jovyan/my-ai-chatbot/
```

> You can create the project under any folder you prefer (`/home/jovyan/` or `/home/jovyan/shared/`).

---

## Step 3: Create `app.py` as Entry File

Inside your project folder, create a new file named `app.py`. This is mandatory for launching apps in Streamlit.

Here is a **production-ready single-page chatbot code** using Google Gemini API:

```python
import streamlit as st
import google.generativeai as genai
from dataflow.dataflow import Dataflow
import time
from typing import Dict, List

# Page configuration
st.set_page_config(
    page_title="AI Chatbot",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for better styling
st.markdown("""
<style>
    .chat-message {
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
    }
    .user-message {
        background-color: #e3f2fd;
        margin-left: 20%;
    }
    .bot-message {
        background-color: #f5f5f5;
        margin-right: 20%;
    }
    .message-header {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    .error-message {
        background-color: #ffebee;
        color: #c62828;
        border-left: 4px solid #f44336;
    }
    .stTextInput > div > div > input {
        background-color: white;
    }
</style>
""", unsafe_allow_html=True)

@st.cache_resource
def initialize_gemini():
    """Initialize Gemini model with caching for better performance"""
    try:
        dataflow = Dataflow()
        api_key = dataflow.secret("gemini_api_key")
        genai.configure(api_key=api_key)
        
        # Configure generation settings for better responses
        generation_config = {
            "temperature": 0.7,
            "top_p": 0.8,
            "top_k": 40,
            "max_output_tokens": 2048,
        }
        
        model = genai.GenerativeModel(
            "gemini-1.5-flash",
            generation_config=generation_config
        )
        return model
    except Exception as e:
        st.error(f"Failed to initialize Gemini: {e}")
        return None

def display_chat_message(role: str, message: str, timestamp: str = None):
    """Display a chat message with proper styling"""
    css_class = "user-message" if role == "User" else "bot-message"
    
    if "Error:" in message:
        css_class += " error-message"
    
    st.markdown(f"""
    <div class="chat-message {css_class}">
        <div class="message-header">
            {role} {f"• {timestamp}" if timestamp else ""}
        </div>
        <div>{message}</div>
    </div>
    """, unsafe_allow_html=True)

def clear_chat():
    """Clear chat history"""
    st.session_state.messages = []
    st.session_state.chat_started = False

def export_chat():
    """Export chat history as text"""
    if "messages" in st.session_state and st.session_state.messages:
        chat_text = "\n".join([
            f"{msg['role']}: {msg['content']}"
            for msg in st.session_state.messages
        ])
        return chat_text
    return "No chat history to export."

# Initialize session state
if "messages" not in st.session_state:
    st.session_state.messages = []
if "chat_started" not in st.session_state:
    st.session_state.chat_started = False

# Initialize Gemini model
model = initialize_gemini()

# Sidebar
with st.sidebar:
    st.header("Chat Settings")
    
    # Model status
    if model:
        st.success("✅ Gemini Model Ready")
    else:
        st.error("❌ Model Not Available")
    
    st.divider()
    
    # Chat controls
    st.subheader("Chat Controls")
    
    col1, col2 = st.columns(2)
    with col1:
        if st.button("🗑️ Clear Chat", use_container_width=True):
            clear_chat()
    
    with col2:
        chat_export = export_chat()
        st.download_button(
            "📥 Export",
            data=chat_export,
            file_name="chat_history.txt",
            mime="text/plain",
            use_container_width=True
        )
    
    st.divider()
    
    # Statistics
    st.subheader("Statistics")
    message_count = len(st.session_state.messages)
    user_messages = len([m for m in st.session_state.messages if m['role'] == 'User'])
    bot_messages = len([m for m in st.session_state.messages if m['role'] == 'Bot'])
    
    st.metric("Total Messages", message_count)
    st.metric("Your Messages", user_messages)
    st.metric("Bot Messages", bot_messages)

# Main chat interface
st.title("🤖 AI Chatbot")
st.markdown("Chat with Gemini AI - powered by Google's Generative AI")

# Display welcome message if chat hasn't started
if not st.session_state.chat_started and not st.session_state.messages:
    st.info("👋 Welcome! Start a conversation by typing a message below.")

# Chat container
chat_container = st.container()

with chat_container:
    # Display chat history
    for message in st.session_state.messages:
        display_chat_message(
            message['role'], 
            message['content'], 
            message.get('timestamp')
        )

# Input section
st.divider()

# Create columns for input and button
col1, col2 = st.columns([4, 1])

with col1:
    user_input = st.text_input(
        "Type your message:",
        key="user_input",
        placeholder="Ask me anything...",
        label_visibility="collapsed"
    )

with col2:
    send_button = st.button("Send 📤", use_container_width=True, type="primary")

# Handle message sending
if (send_button or user_input) and user_input.strip() and model:
    # Add user message
    timestamp = time.strftime("%H:%M")
    user_message = {
        "role": "User",
        "content": user_input.strip(),
        "timestamp": timestamp
    }
    st.session_state.messages.append(user_message)
    st.session_state.chat_started = True
    
    # Show typing indicator
    with st.spinner("🤔 Thinking..."):
        try:
            # Generate response with context awareness
            # Include recent chat history for better context
            context_messages = st.session_state.messages[-10:]  # Last 10 messages
            conversation_context = "\n".join([
                f"{msg['role']}: {msg['content']}" 
                for msg in context_messages[:-1]  # Exclude the current message
            ])
            
            if conversation_context:
                prompt = f"Previous conversation:\n{conversation_context}\n\nUser: {user_input}"
            else:
                prompt = user_input
            
            response = model.generate_content(prompt)
            
            if response.text:
                bot_message = {
                    "role": "Bot",
                    "content": response.text,
                    "timestamp": time.strftime("%H:%M")
                }
                st.session_state.messages.append(bot_message)
            else:
                error_message = {
                    "role": "Bot",
                    "content": "I couldn't generate a response. Please try again.",
                    "timestamp": time.strftime("%H:%M")
                }
                st.session_state.messages.append(error_message)
                
        except Exception as e:
            error_message = {
                "role": "Bot",
                "content": f"Error: {str(e)}",
                "timestamp": time.strftime("%H:%M")
            }
            st.session_state.messages.append(error_message)
    
    # Clear input and rerun
    st.session_state.user_input = ""
    st.rerun()

elif send_button and not model:
    st.error("❌ Gemini model is not available. Please check your configuration.")

# Footer
st.divider()
st.markdown(
    """
    <div style='text-align: center; color: #666; padding: 1rem;'>
        Powered by Google Gemini AI • Built with Streamlit
    </div>
    """, 
    unsafe_allow_html=True
)

```

---

## Step 4: Launching Your Streamlit App

1. **Open Streamlit** from the sidebar
2. Click the **launch button** in the top-right corner
3. A directory selector will appear – **choose your project folder** containing `app.py`
4. Click **Launch** to start your app

> **Important:** Streamlit will only launch projects with an `app.py` entry file.

---

## Conclusion

You have successfully:

- **Added your Gemini API Key as a secret** in Dataflow
- Created a new **Streamlit chatbot project** in your preferred workspace
- Written a **minimal and functional** `app.py` for immediate testing
- Learned how to **launch apps by selecting directories in Streamlit**

Continue enhancing your chatbot with UI styling, prompt templates, and advanced LLM features as you progress.

---

## Next Steps

Consider these enhancements for your chatbot:

- Add custom CSS styling for better UI/UX
- Implement conversation memory and context
- Add prompt templates for different use cases
- Integrate additional LLM providers
- Add file upload capabilities
- Implement user authentication

---
# FILE: src/content/docs/get-started/support-and-help.md
---

---
title: "Support and Help"
lastUpdated: 2025-06-27
---


We’re here to ensure your experience with **Dataflow** is seamless, efficient, and fully supported.

## Contact Support

If you have questions, encounter issues, or need assistance with the platform, our support team is ready to help.

###  Email Support

Reach out to us at:

**support@dataflow.zone**

Please include:

- Your name and organisation
- Workspace URL (if applicable)
- Detailed description of your issue or question
- Screenshots or logs if relevant

We aim to respond within **1 business day**.

---

### Book a Support Session or Demo

For personalised assistance:

1. Visit our [Contact Us page](https://dataflow-marketing.netlify.app/contact-us/).
2. Choose **“Book a Demo or Support Call”**.
3. Select your preferred date and time.
4. Provide your contact details and describe your use case or issue.

Our solutions engineer will:

- Walk you through features or troubleshoot issues live  
- Provide best practices for your workflows  
- Ensure you maximise your use of Dataflow

---

##  Documentation and Resources

- [Quickstart Guide](/get-started/quickstart-guide/)  
  Step-by-step instructions to launch your first data project quickly.

- [Access and Onboarding](/get-started/access-and-onboarding)  
  Learn how to set up your workspace and run your first pipeline.


---

## We're Here to Help

Whether you are troubleshooting a workflow, exploring advanced features, or onboarding your team, our support team is committed to your success with Dataflow.



---
# FILE: src/content/docs/index.mdx
---

---
title: Welcome to Dataflow
description: Get started with Dataflow.
template: splash
hero:
  tagline: Welcome to Dataflow 🚀
  image:
    file: ../../assets/favicon.svg
  actions:
    - text: Get Started Guide
      link: /get-started/introduction-to-dataflow/
      icon: right-arrow
      variant: primary
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Next Steps

<CardGrid stagger>
  <Card title="Explore Dataflow" icon="rocket">
    Learn what Dataflow offers, including Studio, Runtime, Workflows, and Administration. Start with our [Introduction to Dataflow](/get-started/introduction-to-dataflow/).
  </Card>

  <Card title="Launch Studio Server" icon="play-circle">
    Begin developing by [launching your Studio server](/workspace/studio/launch-studio-server/) to use notebooks, VS Code, MLFlow, and apps seamlessly.
  </Card>

  <Card title="Manage Environments" icon="layers">
    [Create, build, and publish Python environments](/workspace/studio/environments/) for your team to ensure reproducibility and scalability.
  </Card>

  <Card title="Use Workflows" icon="flow">
    Automate tasks with [Airflow workflows](/workspace/studio/workflows/) for scheduling data pipelines and periodic jobs efficiently.
  </Card>

  <Card title="Manage variables & Secrets" icon="key">
    Securely [configure  variables, and secrets](/workspace/studio/variables-and-secrets/) for database access and credential management.
  </Card>

  <Card title="Read the Docs" icon="open-book">
    Dive deeper in the [full documentation](/get-started/introduction-to-dataflow/) to master every feature Dataflow provides.
  </Card>
</CardGrid>



---
# FILE: src/content/docs/reference/connection-and-secrets.md
---

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
---

## Using Connections in Jupyter Notebooks with JupySQL

Dataflow supports **JupySQL** magic commands in Jupyter notebooks, allowing you to execute SQL queries directly using your configured connections with a simple and intuitive syntax.

### Basic Usage

```python
# Connect to your database using the connection ID
%sql conn_id

# Execute SQL queries directly
%sql SELECT * FROM users LIMIT 10;

# Multi-line queries
%%sql
SELECT 
    user_id,
    username,
    created_at
FROM users
WHERE status = 'active'
ORDER BY created_at DESC;
```

### Important Notes

> **Kernel Restart Required**: If you add a new connection in Dataflow Studio while a notebook kernel is already running, you need to **restart the kernel** to use the new connection with `%sql conn_id`.

> **Alternative Without Restart**: To avoid restarting the kernel, you can use the `--section` parameter:
> ```python
> %sql --section conn_id
> ```
> This will work immediately without requiring a kernel restart.


---
# FILE: src/content/docs/reference/streamlit-chatbot.md
---

---
title: "Building an AI Chatbot with Streamlit on Dataflow"
lastUpdated: 2025-06-27
---

This example shows how to build a simple **AI Chatbot** using **Google Gemini API** with Streamlit on Dataflow. Follow each step to set up secrets, organize your project, and launch it seamlessly.

---

##  Prerequisites

- You have **access to Streamlit** on Dataflow  
- Your **Studio server is running** to use Streamlit  
- You have a valid **Gemini API Key**

---

##  Step 1: Add Your Gemini API Key as a Secret

1. Go to the **Secrets** page in Dataflow settings.  
2. Click **“Add Secret”**.  
3. Enter:
   - **Key Name:** `gemini_api_key`  
   - **Value:** *Your Gemini API Key*  
   - **Description:** *(Optional)*  

4. Click **Save**.  
Your secret will now be stored securely in the platform's secrets manager.
![add-secret](../../../assets/streamlit-example/add-secret.png)
---

##  Step 2: Create Your Chatbot Project Folder

1. Navigate to your **Studio workspace** in VS Code or JupyterLab.  
2. Inside your desired location (e.g., `/jovyan/` or `/jovyan/shared/`), create a new folder named:

3. Inside this `chatbot` folder, create a new file:app.py

```python
import streamlit as st
import google.generativeai as genai
from dataflow.dataflow import Dataflow
import time
from typing import Dict, List

# Page configuration
st.set_page_config(
    page_title="AI Chatbot",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for better styling
st.markdown("""
<style>
    .chat-message {
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
    }
    .user-message {
        background-color: #e3f2fd;
        margin-left: 20%;
    }
    .bot-message {
        background-color: #f5f5f5;
        margin-right: 20%;
    }
    .message-header {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    .error-message {
        background-color: #ffebee;
        color: #c62828;
        border-left: 4px solid #f44336;
    }
    .stTextInput > div > div > input {
        background-color: white;
    }
</style>
""", unsafe_allow_html=True)

@st.cache_resource
def initialize_gemini():
    """Initialize Gemini model with caching for better performance"""
    try:
        dataflow = Dataflow()
        api_key = dataflow.secret("gemini_api_key")
        genai.configure(api_key=api_key)
        
        # Configure generation settings for better responses
        generation_config = {
            "temperature": 0.7,
            "top_p": 0.8,
            "top_k": 40,
            "max_output_tokens": 2048,
        }
        
        model = genai.GenerativeModel(
            "gemini-1.5-flash",
            generation_config=generation_config
        )
        return model
    except Exception as e:
        st.error(f"Failed to initialize Gemini: {e}")
        return None

def display_chat_message(role: str, message: str, timestamp: str = None):
    """Display a chat message with proper styling"""
    css_class = "user-message" if role == "User" else "bot-message"
    
    if "Error:" in message:
        css_class += " error-message"
    
    st.markdown(f"""
    <div class="chat-message {css_class}">
        <div class="message-header">
            {role} {f"• {timestamp}" if timestamp else ""}
        </div>
        <div>{message}</div>
    </div>
    """, unsafe_allow_html=True)

def clear_chat():
    """Clear chat history"""
    st.session_state.messages = []
    st.session_state.chat_started = False

def export_chat():
    """Export chat history as text"""
    if "messages" in st.session_state and st.session_state.messages:
        chat_text = "\n".join([
            f"{msg['role']}: {msg['content']}"
            for msg in st.session_state.messages
        ])
        return chat_text
    return "No chat history to export."

# Initialize session state
if "messages" not in st.session_state:
    st.session_state.messages = []
if "chat_started" not in st.session_state:
    st.session_state.chat_started = False

# Initialize Gemini model
model = initialize_gemini()

# Sidebar
with st.sidebar:
    st.header("Chat Settings")
    
    # Model status
    if model:
        st.success("✅ Gemini Model Ready")
    else:
        st.error("❌ Model Not Available")
    
    st.divider()
    
    # Chat controls
    st.subheader("Chat Controls")
    
    col1, col2 = st.columns(2)
    with col1:
        if st.button("🗑️ Clear Chat", use_container_width=True):
            clear_chat()
    
    with col2:
        chat_export = export_chat()
        st.download_button(
            "📥 Export",
            data=chat_export,
            file_name="chat_history.txt",
            mime="text/plain",
            use_container_width=True
        )
    
    st.divider()
    
    # Statistics
    st.subheader("Statistics")
    message_count = len(st.session_state.messages)
    user_messages = len([m for m in st.session_state.messages if m['role'] == 'User'])
    bot_messages = len([m for m in st.session_state.messages if m['role'] == 'Bot'])
    
    st.metric("Total Messages", message_count)
    st.metric("Your Messages", user_messages)
    st.metric("Bot Messages", bot_messages)

# Main chat interface
st.title("🤖 AI Chatbot")
st.markdown("Chat with Gemini AI - powered by Google's Generative AI")

# Display welcome message if chat hasn't started
if not st.session_state.chat_started and not st.session_state.messages:
    st.info("👋 Welcome! Start a conversation by typing a message below.")

# Chat container
chat_container = st.container()

with chat_container:
    # Display chat history
    for message in st.session_state.messages:
        display_chat_message(
            message['role'], 
            message['content'], 
            message.get('timestamp')
        )

# Initialize message processing flag
if "processing" not in st.session_state:
    st.session_state.processing = False

# Input section
st.divider()

# Create columns for input and button
col1, col2 = st.columns([4, 1])

with col1:
    # Use a unique key that changes to reset the input
    input_key = f"user_input_{len(st.session_state.messages)}"
    user_input = st.text_input(
        "Type your message:",
        key=input_key,
        placeholder="Ask me anything...",
        label_visibility="collapsed",
        disabled=st.session_state.processing
    )

with col2:
    send_button = st.button(
        "Send 📤", 
        use_container_width=True, 
        type="primary",
        disabled=st.session_state.processing or not user_input.strip()
    )

# Handle message sending
if send_button and user_input.strip() and model and not st.session_state.processing:
    st.session_state.processing = True
    
    # Add user message
    timestamp = time.strftime("%H:%M")
    user_message = {
        "role": "User",
        "content": user_input.strip(),
        "timestamp": timestamp
    }
    st.session_state.messages.append(user_message)
    st.session_state.chat_started = True
    
    # Show typing indicator
    with st.spinner("🤔 Thinking..."):
        try:
            # Generate response with context awareness
            # Include recent chat history for better context
            context_messages = st.session_state.messages[-10:]  # Last 10 messages
            conversation_context = "\n".join([
                f"{msg['role']}: {msg['content']}" 
                for msg in context_messages[:-1]  # Exclude the current message
            ])
            
            if conversation_context:
                prompt = f"Previous conversation:\n{conversation_context}\n\nUser: {user_input}"
            else:
                prompt = user_input
            
            response = model.generate_content(prompt)
            
            if response.text:
                bot_message = {
                    "role": "Bot",
                    "content": response.text,
                    "timestamp": time.strftime("%H:%M")
                }
                st.session_state.messages.append(bot_message)
            else:
                error_message = {
                    "role": "Bot",
                    "content": "I couldn't generate a response. Please try again.",
                    "timestamp": time.strftime("%H:%M")
                }
                st.session_state.messages.append(error_message)
                
        except Exception as e:
            error_message = {
                "role": "Bot",
                "content": f"Error: {str(e)}",
                "timestamp": time.strftime("%H:%M")
            }
            st.session_state.messages.append(error_message)
    
    # Reset processing flag and rerun
    st.session_state.processing = False
    st.rerun()

elif send_button and not model:
    st.error("❌ Gemini model is not available. Please check your configuration.")

# Footer
st.divider()
st.markdown(
    """
    <div style='text-align: center; color: #666; padding: 1rem;'>
        Powered by Google Gemini AI • Built with Streamlit
    </div>
    """, 
    unsafe_allow_html=True
)
```

![notebook](../../../assets/streamlit-example/notebook.png)

Save the file after pasting your code.

 **Step 4: Launch Your Streamlit Chatbot**

In Dataflow, go to the **Streamlit** page from the sidebar.
![launch](../../../assets/streamlit-example/launch-dir.png)
1. Click “Launch Project” (top-right corner).
2. Choose the **chatbot** folder you just created as your project directory.
3. Click **Launch**.
![streanlit-app](../../../assets/streamlit-example/chatbot.png)

Dataflow will start your Streamlit app, and your AI Chatbot will be ready to use!

---

**Summary**

- You created and saved your **Gemini API Key** as a secret
- You built your chatbot project in the **chatbot** folder
- You launched it via **Streamlit in Dataflow**

This workflow makes it easy to build interactive AI apps directly in your Dataflow environment with proper secret management and project organization.



---
# FILE: src/content/docs/workspace/admin/manage-environment.md
---

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

---

## Managing Pip Sources

As an Admin, you can configure organization-wide pip sources that will be available to all users when building their Python environments. This allows you to set up private package repositories, internal mirrors, or alternative package indexes for the entire workspace.

![Admin Pip Sources Management](../../../../assets/workspace/admin/pip-sources.png)

### What are Pip Sources?

Pip sources define where Python packages are downloaded from during environment builds. You can configure:

- **Index URL:** The primary package source (replaces PyPI as the default)
- **Extra Index URLs:** Additional package sources that complement the main index

### Organization-Level Management

**Benefits of Centralized Control:**
- Ensure all users access approved package repositories
- Configure private or internal package indexes
- Maintain security and compliance across all environments
- Standardize package sources for consistent builds

### Managing Index URL

**Setting a Custom Index URL:**
1. Navigate to **Admin → Environment Settings** from the sidebar
2. In the **Index URL** section, click **"Add Index URL"** if none exists
3. Enter a **Name** for identification (e.g., "Internal PyPI Mirror")
4. Enter the **URL** of your package index (e.g., `https://internal-pypi.company.com/simple`)
5. Click **"Add"** to save

**Editing or Removing Index URL:**
- Click the **pencil icon** to edit the existing index URL
- Click the **trash icon** to remove and revert to PyPI default
- Changes apply to all future environment builds

### Managing Extra Index URLs

**Adding Extra Sources:**
1. In the **Extra Index URLs** section, click **"Add URL"**
2. Enter a **Name** and **URL** for the additional source
3. Click **"Add"** to save

**Managing Existing Sources:**
- **Edit:** Click the pencil icon to modify name or URL
- **Delete:** Click the trash icon to remove the source

### User vs Admin Sources

**Admin (Organization) Sources:**
- Configured by you and visible to all users
- Cannot be modified by individual users
- Automatically included in all environment builds
- Marked as "(Organization)" in user interfaces

**User Sources:**
- Personal extra index URLs added by individual users
- Only visible to the user who created them
- Complement the organization sources you configure
- Users can add, edit, and delete their own sources

### Important Considerations

**Impact on Users:**
- Changes to pip sources affect all new environment builds
- Existing environments are not automatically updated
- Users will see organization sources in their environment settings



---
# FILE: src/content/docs/workspace/admin/manage-server-access.md
---

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

---
# FILE: src/content/docs/workspace/admin/manage-spark..md
---

---
title: "Manage Spark"
lastUpdated: 2025-06-27
---


The **Manage Spark** section allows Admins to control the availability of Spark clusters for both **Studio** and **Runtime** environments within your workspace.

Spark is essential for distributed data processing, large-scale transformations, and ML workloads. Admins can start or stop the Spark server to optimise resource usage and manage costs effectively.

---

## What is Spark?

**Apache Spark** is a powerful distributed processing engine that enables:

- **Large-scale data processing**  
- **Complex transformations and aggregations**  
- **Machine learning pipelines**  

Spark integrates with your Studio workflows and Runtime projects to handle workloads that go beyond single-node processing capabilities.

---

## Starting the Spark Server

To start the Spark server:

1. Navigate to **Admin → Manage Spark**.  
2. Click **“Start Spark Server”**.  
3. Confirm your action in the dialog box.

> **Note:** Starting the Spark server typically takes **5 to 10 minutes** as resources are provisioned and the cluster is initialised.

---

### Server Start Status

- During startup, the Spark server will show a **“Starting”** status.  
- Once ready, the status will change to **“Running”** and Spark will be available for use in both **Studio notebooks and pipelines** as well as **Runtime projects**.

---

## Stopping the Spark Server

To stop the Spark server:

1. Navigate to **Admin → Manage Spark**.  
2. Click **“Stop Spark Server”**.  
3. Confirm your action to shut down the Spark cluster.

> **Best Practice:** Always stop the Spark server when not in use to save on infrastructure costs.

---

## Where is Spark Used?

| **Area**  | **Usage** |
|-----------|-----------|
| **Studio** | Use Spark for distributed data exploration, ETL processing, and scalable ML workloads within notebooks, VS Code, or workflows. |
| **Runtime** | Deployed applications or pipelines that require Spark will utilise the running cluster for execution. |

---

## Summary

Managing Spark efficiently ensures:

- Optimal **resource utilisation** across your platform  
- Availability of Spark when required by users  
- Cost savings by stopping unused clusters

---

Explore the next sections on **Data Processing Workflows with Spark** to learn how to integrate Spark into your data pipelines effectively.


---
# FILE: src/content/docs/workspace/admin/overview.md
---

---
title: "Admin Overview"
lastUpdated: 2025-06-27
---

The **Admin** area is the central management console in Dataflow, enabling administrators to configure, control, and oversee the platform’s operations, user access, and runtime settings.

---

## What Can Admins Do?

### 1. Manage Users

Admins can:

- Add, edit, or remove users from the platform  
- Assign users to specific teams and roles  
- Control individual user permissions for accessing Studio, Runtime, or Admin features

---

### 2. Manage Teams and Roles

Admins can:

- Create and manage **teams** to organise users based on departments, projects, or responsibilities  
- Define **roles** with specific access permissions to enforce security and efficient workflow management

---

### 3. Manage Studio Server Access

Admins can:

- Control which users or teams have access to the Studio environment  
- Configure available server specifications and compute resources for different user groups  
- Monitor server usage for cost and performance optimisation

---

### 4. Approve Python Environments

Admins oversee the lifecycle of Python environments created by users:

- **Review and approve** newly built environments before they are published for organisation-wide use  
- **Reject or revert** environments back to draft if configurations do not meet organisational standards  
- Ensure secure and compliant Python environment management

---

### 5. Manage Spark Servers

Admins can:

- Configure and manage Spark servers used across both **Studio** and **Runtime**  
- Control access, resources, and project allocations for Spark-based workloads  
- Monitor Spark server usage and performance to ensure optimal data processing capabilities

---

### 6. Runtime Settings

Admins can:

- Create and manage **projects within different runtimes** (e.g. Airflow, Spark, MLFlow) for various data workflows  
- Define project-level configurations and metadata  
- Manage global or project-specific **variables, secrets, and connections** to maintain security and flexibility across environments

---

## Summary

The Admin console empowers platform administrators to:

- Control **who** can access **what** within Dataflow  
- Manage and optimise **compute resources** for cost and performance efficiency  
- Ensure secure management of **environments, runtimes, variables, and secrets**  
- Oversee the organisation’s entire data infrastructure from a single interface

Explore the detailed documentation for each feature under the **Admin** section to unlock its full capabilities for your platform governance and operational excellence.

---

---
# FILE: src/content/docs/workspace/admin/runtime-settings/introduction.md
---

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

>  **Important:** To **update** a project, it must first be stopped. Only fields  **Name**, **Environment**, and **Git Path** can be edited after creation for integrity and stability reasons.

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


---
# FILE: src/content/docs/workspace/admin/runtime-settings.md
---

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


---
# FILE: src/content/docs/workspace/admin/runtime-settings/runtime-airflow-config.md
---

---
title: "Airflow Runtime Configuration Guide"
lastUpdated: 2025-06-27
---

This document explains how to configure Airflow settings for a runtime in Dataflow. Administrators can define custom Airflow configurations during runtime creation or later through the Edit section. Any modifications require the runtime to be stopped before editing.

## When You Can Configure Airflow

Airflow configuration can be applied in two scenarios:

1. **During Runtime Creation**  
   When creating an Airflow-based project, you can provide a airflow config as part of the setup.

2. **After Creation (Edit Section)**  
   You may modify configurations later through the Edit option.  
   To enable editing:  
   - The Airflow runtime must be stopped.  
   - Changes can only be saved while the server is not running.  
   - Editing is blocked while the runtime is active.

:::note
The following sections and their attributes are automatically
overridden by the Dataflow at runtime.
:::

## Auto-Overridden Settings (Do Not Edit)

The following sections and attributes are always controlled by Dataflow at runtime. Any changes made to them will be ignored:

- **[core]**  
  - hostname_callable  
  - executor  
  - load_examples  
  - test_connection  

- **[database]**  
  - load_default_connections  

- **[webserver]**  
  - base_url  
  - web_server_host  
  - authenticate  
  - rbac  
  - xframe_enabled  
  - enable_proxy_fix  
  - proxy_fix_*  

- **[secrets]**  
  - backend  

These values ensure deployment consistency and workspace security.


## Editing Workflow

![Update Airflow Config](../../../../../assets/workspace/admin/runtime-airflow-config.png)

### Add or Modify Configuration During Creation

1. Go to **Admin → Runtimes**.  
2. Select **Create Project**.  
3. Choose **Airflow** as the runtime.  
4. After creation click update Airflow config and update configuration in the relevant field.

### Update Configuration After Creation

1. Go to the specific Airflow project.  
2. click Three dots
3. Select **details**.  
4. Select **Edit**.  
5. click update Airflow config and update configuration in the relevant field.  
6. Save changes and start the project.  


## Best Practices

- Add only supported sections under the user customization area.  
- Avoid modifying system-managed attributes.  
- Keep configurations minimal and scoped to your workflows.  
- Always cross-check with official Airflow references before applying changes.  

**Documentation reference**:  
https://airflow.apache.org/docs/apache-airflow/2.10.5/configurations-ref.html

## Summary

Airflow configuration in Dataflow supports controlled customization while preserving platform-managed stability:  
- Configuration is allowed during creation or in Edit mode after stopping the runtime.  
- System-managed attributes are automatically overridden.  


---
# FILE: src/content/docs/workspace/admin/users-roles-teams.md
---

---
title: "Managing Users, Roles, and Teams"
lastUpdated: 2025-06-27
---

As an Admin in Dataflow, you can manage your organisation’s access and structure efficiently by creating users, assigning roles, and organising them into teams. This ensures clear responsibilities, access control, and streamlined collaboration within your workspace.

---

## Users Management

### Creating a User

1. Navigate to the **Admin → Users** section in the sidebar.  
2. Click **Add User**.  
3. Enter the following details:
   - **Username:** Unique identifier for the user  
   - **Email:** User’s email address for notifications and login  
   - **Role:** Assign the appropriate role at creation  
   - **Additional Fields:** Based on your workspace settings (e.g. department)
4. Click **Save** to create the user. The user will receive an invitation email (if configured).
---

### Editing a User

1. Go to the **Users** page.  
2. Click **Edit** next to the user you want to modify.  
3. Update details such as:
   - Username  
   - Email  
   - Assigned Role
4. Click **Save Changes** to apply updates.

> **Note:** Editing user details or roles will immediately affect their access permissions within the workspace.

---

## Roles Management

Roles define what actions a user can perform in Dataflow. Typical default roles include:

- **Admin:** Full access to all settings, deployments, and user management.  
- **Developer:** Can create, edit, and deploy workflows and apps.  
- **Viewer:** Can view deployments and outputs but cannot modify resources.

### Managing Roles

1. Navigate to the **Admin → Roles** section.  
2. You can:
   - View existing roles and their permissions  
   - **Edit Role:** Modify permissions associated with a role  
   - **Create Role:** Add custom roles tailored to your organisation’s needs
3. Save changes to update role configurations.

---

## Teams Management

Organising users into teams helps structure your workspace for projects, access management, and reporting.

### Creating a Team

1. Go to **Admin → Teams**.  
2. Click **Add Team**.  
3. Enter:
   - **Team Name:** A unique name for the team  
   - **Description:** Optional, for clarity  
4. Click **Save**.

---

### Adding Users to a Team

1. In the **Teams** page, select the team you want to manage.  
2. Click **Add Member**.  
3. Choose users from the list to add them to the team.  
4. Assign specific roles to team members if required.

---

### Editing a Team

1. Click **Edit** next to the team name.  
2. Update the team name or description as needed.  
3. Save changes to apply updates.

---

---

## Summary

- **Users:** Create, edit, and delete users; manage their access roles  
- **Roles:** Define and customise role-based permissions for security and clarity  
- **Teams:** Organise users into structured groups for efficient project and access management

By effectively managing users, roles, and teams, you ensure secure, scalable, and organised operations within your Dataflow workspace.

---
# FILE: src/content/docs/workspace/overview.md
---

---
title: "Workspace Overview"
lastUpdated: 2025-06-27
---

Your **Workspace** is the unified environment where you can build, deploy, and manage all your data workflows securely and efficiently. It is divided into three primary areas: **Studio**, **Runtime**, and **Admin**.

---

## Workspace Areas

### 1. Studio

The **Studio** is your interactive development and workflow design environment.

In Studio, you can:

- **Create DAGs:** Design and define data workflows using Airflow  
- **Develop Visualisations:** Build interactive apps and dashboards with Streamlit  
- **Manage Python Environments:** Create and approve custom Python environments for your pipelines and notebooks  
- **Set Variables, Connections, and Secrets:** Manage configuration securely for your workflows  
- **Connect to Git Repositories:** Use version control for notebooks and scripts  
- **Develop in Notebooks and IDE:** Create, edit, and run notebooks for data exploration and model development

**Note:** All development and workflows in Studio run on the **Studio server**, ensuring an integrated and consistent environment for your team.

---

### 2. Runtime

The **Runtime** area provides visibility into your execution environments.

In Runtime, you can:

- **View Projects Running:** Monitor active projects and their statuses  
- **See Pinned and Recent Projects:** Quickly access your pinned favourites and recently opened projects for efficiency

**Note:** Runtime is read-only; users cannot modify or control runtimes directly here. All executions are managed through pipelines and orchestrators configured in Admin.

---

### 3. Admin

The **Admin** area is your workspace management console.

In Admin, you can:

- **Manage Users and Access:** Add or remove users, assign roles, and manage team permissions  
- **Create Runtime Projects:** Provision and configure projects in different runtimes (e.g. Airflow, Spark)  
- **Manage Studio Server Access:** Control which users have access to Studio features  
- **Approve Python Environments:** Review and approve environments created by users in Studio  
- **Manage Teams and Roles:** Define team structures, roles, and permissions  
- **Manage App access:** Define App access for users  
- **Monitor Metrics:** View workspace usage and performance metrics for optimised operations

---

## Switching Between Areas

You can easily switch between **Studio**, **Runtime**, and **Admin** using the workspace area switcher at the top of your interface.

![Workspace Area Switcher](../../../assets/workspace/overview/switch-workspace.png)

**Tip:** Switching ensures you are always working in the correct context, whether developing workflows, monitoring executions, or managing users and settings.

---

## Summary

Your workspace areas provide:

- **Studio:** A development hub to create, build, and manage workflows and environments  
- **Runtime:** A monitoring console to track running projects and jobs  
- **Admin:** A management console to control users, runtimes, environments, and overall workspace configuration

Explore each area in detail in the following documentation sections to unlock the full capabilities of your platform.


---
# FILE: src/content/docs/workspace/runtime/overview.md
---

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

---
# FILE: src/content/docs/workspace/studio/connections.md
---

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

### Example: Snowflake Connection

**Install Package:**
```bash
pip install apache-airflow-providers-snowflake
```

```python
from airflow.providers.snowflake.hooks.snowflake import SnowflakeHook

hook = SnowflakeHook(snowflake_conn_id="my_snowflake_conn")

conn = hook.get_conn()
cur = conn.cursor()

cur.execute("SELECT CURRENT_WAREHOUSE()")
print(cur.fetchone())
```

### Example: MongoDB Connection

**Install Package:**
```bash
pip install apache-airflow-providers-mongo
```

```python
from airflow.providers.mongo.hooks.mongo import MongoHook

hook = MongoHook(conn_id="my_mongo_conn")
client = hook.get_conn()

db = client["my_database"]
collection = db["my_collection"]

docs = list(collection.find())
print(docs)
```

### Example: Google BigQuery Connection

**Install Package:**
```bash
pip install apache-airflow-providers-google
```

```python
from airflow.providers.google.cloud.hooks.bigquery import BigQueryHook

hook = BigQueryHook(gcp_conn_id="my_bigquery_conn")

# Run a query
query = """
    SELECT name, count
    FROM `project.dataset.table`
    LIMIT 10
"""

records = hook.get_records(sql=query)
for record in records:
    print(record)
```

---

## Using Connections in Jupyter Notebooks with JupySQL

Dataflow supports **JupySQL** magic commands in Jupyter notebooks, allowing you to execute SQL queries directly using your configured connections with a simple and intuitive syntax.

### Basic Usage

```python
# Connect to your database using the connection ID
%sql conn_id

# Execute SQL queries directly
%sql SELECT * FROM users LIMIT 10;

# Multi-line queries
%%sql
SELECT 
    user_id,
    username,
    created_at
FROM users
WHERE status = 'active'
ORDER BY created_at DESC;
```

### Important Notes

> **Kernel Restart Required**: If you add a new connection in Dataflow Studio while a notebook kernel is already running, you need to **restart the kernel** to use the new connection with `%sql conn_id`.

> **Alternative Without Restart**: To avoid restarting the kernel, you can use the `--section` parameter:
> ```python
> %sql --section conn_id
> ```
> This will work immediately without requiring a kernel restart.


---
# FILE: src/content/docs/workspace/studio/environments.md
---

---
title: "Environments"
lastUpdated: 2025-06-27
---


The **Environments** section in Studio allows you to create, build, manage, and activate custom Python environments tailored to your workflows and apps. These environments ensure consistency, reproducibility, and compatibility for your data engineering and data science projects.

---
![Environment Status Flow](../../../../assets/workspace/studio/environment.png)

##  What are Environments?

An **Environment** is a Python setup with specific libraries and versions. It defines the exact dependencies your notebooks, pipelines, and apps require.

- Avoid version conflicts  
- Ensure reproducibility across team members  
- Optimise resource usage by installing only what is needed

---


## Creating a New Environment

Follow these steps to create a new environment:

1. **Click "New Environment":** Opens the environment creation form  
2. **Enter Details:**  
   - **Short Name:** A quick identifier and maximum length should be 5 (e.g. `mlenv`)  
   - **Full Name:** Descriptive name (e.g. `Machine Learning Environment`)  
   - **Base Environment:** Choose a base environment and if it is set as `None` then no base image is chosen and you need to mention python version
   - **Python Version:** Only available if no base environment (`None`) is chosen
3. **Add Libraries:** 
   - **Conda Libraries:** Mention the conda libraries that needs to be installed.
   - **Pip Libraries:** Mention the pip libraries that needs to be installed.

> **Note:** The requirements for both `pip` and `conda` should follow one of the following formats:
>     • `library`
>     • `library=version`
>     • `library==version`
>     • `library<=version`
>     • `library>=version`
>     Also library[dependencies] format with any of the above is allowed.


![Environment Status Flow](../../../../assets/workspace/studio/env-creation.png)


4. **Click "Save":** Saves your environment in **Saved** state

5. **Click "Build":** Initiates the build process to install the specified libraries and prepare your environment image

>  **Note:** The **short name** is unique across an organization. If a short name is rejected then it is used by someone else so try a different one
---

---

##  Environment Status

Environments will have one of these statuses:

- **Saved:** Initial state after creation  
- **In Progress**: When the build process is undergoing
- **Draft:** Built successfully and ready for use or publishing  
- **Failed:** Build failed due to some reason
- **Published:** Approved by Admin and available to all users

---

## Environment Versioning

Studio provides versioning for environments to track changes and maintain build history:

- When you first build an environment, **Version 1** is created
- A version dropdown appears below the environment name showing all available versions
- Each subsequent build creates a new version (1, 2, 3, etc.)
- Selecting a version from the dropdown displays libraries and logs specific to that version

![Environment Versioning](../../../../assets/workspace/studio/env-versioning.png)

### Version Behavior and Rules

- **Latest Version Only:** While you can view all versions for audit purposes, only the latest successful version is available for activation or publishing
- **Library Management:** 
  - New libraries in requirements will be installed in new versions
  - Libraries removed from requirements may still remain in the environment
  - Version changes to existing libraries are not guaranteed to take effect
- **Revert Option:** You can revert to a previous version, which creates a new version identical to the one you're reverting to
- **Failed Builds:** 
  - If a build fails then the status will be shown as the same. Only the latest version can be in failed state.
  - Failure logs are available for troubleshooting
  - The environment remains on the last successful version for use
  - When errors are fixed and built again, the same failed version will update with the new status and logs.
- **Approval Process:** When requesting approval for an environment, all failed versions are permanently deleted, and only the last successful draft version is submitted for admin approval

---


###  **Build & Approval Process**

1. After clicking **Build**, your environment is queued for build on backend servers 
2. During building the environments's will be in "In Progress" state and during this time it will be unusable until the build completes. 
2. If the build is successful, it moves to **Draft** state  
3. From **Draft**, you can:

   - **Use it yourself:** Activate in your Studio sessions  
   - **Submit for Publish:** Sends the environment to Admin for approval

4. If **Approved by Admin**, it moves to **Published** and becomes available to all workspace users  
5. If **Rejected**, it moves back to **Draft**, and you can edit or re-submit after corrections

---

---

## Activating an Environment

You can **activate an environment** in your Studio server if it is in:

- **Draft** state (private use)  
- **Published** state (shared use)

>  **Note:** Activation is not possible for environments still in **Saved** state or if it does not have atleast one successful build.

---

## Checking Build Logs

For each environment, you can:

- View **build logs** to troubleshoot installation failures  
- Monitor **build progress** live for long installations

---

## Local vs Dataflow Environments

In your Notebook interface, you will see two categories:

- **Local Environments:** Kernels created and managed within your current Notebook server session only  
- **Dataflow Environments:** Studio-wide environments created in this Environments page, accessible across notebooks and apps

### Copying Between Local and Dataflow

- **Copy to Local:** Import a Dataflow Environment to use as a local kernel  
- **Copy to Dataflow:** Promote a Local Environment to a Studio-wide Dataflow Environment for reuse and collaboration

---

## Pip Sources Management

The **Pip Sources** feature in the Environment Settings allows you to manage custom Python package sources for your personal use. This is particularly useful when you need to install packages from private repositories or alternative package indexes.

![Pip Sources Interface](../../../../assets/workspace/studio/pip-sources.png)

### Organization vs User Level Sources

**Organization Level Sources:**
- Configured by administrators for the entire workspace
- Automatically available to all users
- Cannot be modified by individual users
- Displayed with "(Organization)" label for identification

**User Level Sources:**
- Personal extra index URLs that you can add and manage
- Only visible and usable in your environments
- You have full control to add, edit, and delete these sources
- Complement the organization-level sources

### What You Can Do

As a user, you can:

1. **View Organization Sources:** See all pip sources configured by your administrator
2. **Add Personal Extra Index URLs:** Add your own private or additional package sources
3. **Edit Your Sources:** Modify the name and URL of sources you created
4. **Delete Your Sources:** Remove sources you no longer need

### Managing Your Pip Sources

**To Add a New Source:**
1. Click **"Add URL"** in the Extra Index URLs section
2. Enter a **Name** for easy identification (letters, digits, hyphens, and underscores only)
3. Enter the **URL** of your package index (e.g., `https://your-private-repo.com/simple`)
4. Click **"Add"** to save

**To Edit an Existing Source:**
1. Click the **pencil icon** next to the source you want to edit
2. Modify the name or URL as needed
3. Click **"Update"** to save changes

**To Delete a Source:**
1. Click the **trash icon** next to the source you want to remove
2. Confirm the deletion in the dialog that appears

### Important Notes

- Only sources you created can be edited or deleted
- Organization sources are read-only and managed by administrators
- Changes to pip sources are automatically applied to new environment builds
- Your personal sources are private and not visible to other users

---

##  Summary

1. **Create a new environment** by defining name, base image, and libraries  
2. **Save and Build** to install dependencies  
3. **Check build status** and logs for success or errors  
4. **Activate the environment** in Studio once in Draft or Published state  
5. **Submit for Publish** to share with all users upon Admin approval  
6. **Manage local and Dataflow environments** for flexible development workflows

---

By managing your environments effectively, you ensure robust, reproducible, and optimised workflows across your data projects. Explore the next sections on **Connections and Secrets** to integrate external data systems securely within your environment.


---
# FILE: src/content/docs/workspace/studio/explore-and-engineer-data.md
---

---
title: "Data Exploration & Engineering"
lastUpdated: 2025-06-27
---

The **Data Exploration & Engineering** section is your dedicated workspace for exploring datasets, building data pipelines, developing models, and deploying analytical or ML applications efficiently.

Studio integrates powerful tools such as **Notebooks, VS Code IDE, Streamlit, Dash, Airflow, and MLFlow** within a unified environment, enabling seamless transitions from data exploration to robust production workflows.

---

## Jovyan Volume

All apps within Studio – including Notebooks, VS Code, Streamlit, Dash, and others – are connected to a **Jovyan volume**.

### **What does this mean for you?**

- Files created or saved in Notebooks are instantly accessible in VS Code and vice versa  
- ML models trained in Notebooks can be used directly in Streamlit or Dash apps for visualisation  
- Enables a **unified file system**, eliminating the need to re-upload or duplicate data across apps

---

##  Using Activated Environments in Notebooks

When you **start your Studio server** and select a **Python environment**, that environment is:

- **Automatically activated** within your Notebook kernel  
- Preloaded with all required libraries for your workflows

This ensures your development experience is **consistent, efficient, and ready-to-use** without manual activation.

You can also **switch to a different Python environment** anytime from the **Environments** page if your workflow requires different dependencies.

---

![Notebook Development](../../../../assets/workspace/studio/explore-and-engineer/notebook.png)

> 📝 **Notebook Example:** The image above shows an active Jupyter Notebook running in your selected environment, ready for data exploration, processing, or ML tasks.

---

##  Developing with VS Code IDE

Studio includes an integrated **VS Code IDE** that connects to the same shared volume. You can:

- Develop scripts, modules, and packages  
- Build and manage pipeline scripts efficiently  
- Access all your files created in Notebooks directly within VS Code

---

![VS Code Development](../../../../assets/workspace/studio/explore-and-engineer/ide.png)

> 💡 **IDE Example:** The above screenshot shows VS Code within Studio, enabling powerful development workflows with direct access to your shared files and environments.

---

## 🔗 Git Integration via SSH

Studio supports **secure Git integration via SSH keys**, enabling you to:

- Clone repositories to your shared Jovyan volume  
- Push changes to remote repositories securely  
- Manage version control efficiently for all notebooks, scripts, and projects

> 💡 **Tip:** Configure your Git SSH keys in the **Git Integration** section before cloning or pushing code to ensure seamless connectivity.

---

## ✅ **Best Practices**

1. Organise your files within structured folders for easy navigation across apps  
2. Check the **activated kernel** in Notebooks matches your selected Python environment  
3. Switch environments as needed from the **Environments page** for different workflows  
4. Configure **Git SSH keys** before cloning or pushing to repositories  
5. Stop your server when not in use to optimise resource costs  
6. Use version control (Git) for collaborative, secure, and reproducible development workflows

---

Explore the next section on **Workflows (Airflow DAGs)** to automate your data processing and pipeline orchestration seamlessly.


---
# FILE: src/content/docs/workspace/studio/git-settings.md
---

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


---
# FILE: src/content/docs/workspace/studio/launch-studio-server.md
---

---
title: "Launching Your Studio Server"
lastUpdated: 2025-06-27
---

After logging into Studio, you will be prompted to **start your development server**. This ensures that all your workflows, notebooks, and applications run within a secure and isolated environment tailored to your resource needs.

---

## Home or Start Studio Server

Upon login, you will see an option to:

- **Go to Home:** Navigate to your workspace dashboard to access recent and pinned projects, documentation, and announcements.
- **Start Studio Server:** Launch your interactive development server to begin working on notebooks, pipelines, models, and apps.

If you have used Studio previously, the platform will automatically display your **last used server configuration and Python environment** for quick resumption.

---

## Choosing a Server

If no default server is set, or if you want to start a new session, Studio will display a list of **available server configurations**. Each option includes:

- **Server Name:** The name or type of the server configuration
- **CPU, GPU, and Memory Specs:** Details of the compute resources provisioned for the server
- **Cost Per Hour:** Estimated hourly cost to help you choose based on your budget and workload needs

This flexibility ensures you can select lightweight servers for data exploration or GPU-enabled high-memory servers for ML training and intensive computation tasks.

---

![Server Selection Screen](../../../../assets/workspace/studio/launch-server/server.png)

---

## Selecting a Python Environment

After choosing your server, you will be prompted to **select a Python environment**. Each environment displays:

- **Environment Name:** Custom name defined when created  
- **Installed Libraries and Versions:** Key libraries pre-installed in the environment for compatibility

The selected environment is **automatically activated** on the server once it starts, ensuring your notebooks, scripts, and pipelines run with the correct dependencies.

> **Tip:** You can switch environments later using the **Environments** section in Studio if your workflow requires a different setup.

---

![Python Environment Selection](../../../../assets/workspace/studio/launch-server/env.png)

---

## Server Start Time

Starting a server generally takes between **3 to 7 minutes**, depending on:

- Selected compute specs  
- Current cluster load  
- Environment initialisation time

You will see a loading screen in the apps during this process, and apps will start to run automatically once your server is ready for use.

---

## Changing or Stopping Your Server

  To stop your server and save costs, you currently need to log out of Studio, which will automatically terminate your active server session. All your files, notebooks, and configurations remain safely saved within your workspace storage, so you can resume work seamlessly the next time you log in.

:::caution
If your server status is **“Not Running”** or **“Pending”**, some features like activation of environments, connections, or apps may not function correctly. Always wait for the server to be **fully running** before using notebooks, IDE, workflows, or visualisation tools to ensure a seamless and error-free experience.
:::

## Summary

1. Login and choose **Start Studio Server**  
2. **Select your server configuration** based on resource and cost needs  
3. **Choose your Python environment** with required libraries  
4. Wait **3-7 minutes** for the server to start  
5. Begin developing confidently in your selected environment  
6. Switch environments or change server configurations as your workflows evolve  
7. Always **stop your server** when not in use to manage costs efficiently

---

Explore the next section on **Explore and Engineer Data** to start working with Notebooks and VS Code in your newly launched Studio server.

---
# FILE: src/content/docs/workspace/studio/mlflow.md
---

---
title: "MLflow"
lastUpdated: 2025-06-27
---

**MLflow** is an open-source platform that helps you manage the **end-to-end machine learning lifecycle**, from tracking experiments to registering and deploying models efficiently within Studio.

---

## What is MLflow?

MLflow provides four core functionalities:

 **Experiment Tracking:** Log and compare parameters, metrics, and outputs across multiple model training runs  
 **Project Packaging:** Package data science code into reproducible formats for consistent execution  
 **Model Registry:** Store, version, and manage ML models with stage transitions (e.g. Staging, Production)  
 **Model Deployment:** Deploy models seamlessly for batch or real-time inference

---

## MLflow in Studio

Studio integrates MLflow directly within your development environment, enabling you to:

- Track experiments systematically for each notebook or script run  
- Save and manage models centrally in the **shared Jovyan volume**  
- View, compare, and analyse experiments within the MLflow UI  
- Register models for team usage and promote them to production confidently

---

<!-- ![MLflow Launch Screen](../../../../assets/workspace/studio/mlflow/mlflow-launch.png) -->

> **Example:** The MLflow launch interface within Studio, accessible from your apps list.

---

## Key Features

### 1 Experiment Tracking

Log all training details such as:

- **Parameters:** Hyperparameters or configuration values used for each run  
- **Metrics:** Model performance results like accuracy or loss  
- **Artifacts:** Outputs such as model files, plots, or evaluation reports  
- **Models:** Save trained models with metadata for reuse or deployment

---

### 2 Model Registry

Manage your models with:

- **Version Control:** Track multiple versions of the same model seamlessly  
- **Stage Transitions:** Move models through stages like **Staging**, **Production**, or **Archived**  
- **Team Collaboration:** Allow team members to view, promote, or roll back models as needed

---

<!-- ![MLflow Model Registry](../../../../assets/workspace/studio/mlflow/mlflow-registry.png) -->

>  **Example:** The Model Registry interface showing models, versions, and stage statuses.

---

### 3 Integrated Deployment

Registered models can be used for:

- **Batch Inference:** Run predictions in notebooks or pipelines  
- **App Integration:** Embed models in Streamlit or Dash apps for interactive use cases  
- **Automated Pipelines:** Combine with Airflow for scheduled retraining and deployment workflows

---

## Security and Environment

 MLflow runs within your activated **Python environment** in Studio, ensuring compatibility  
 Models and artifacts are securely stored in the **shared Jovyan volume**  
 Access is controlled based on your workspace permissions and roles

---

##  Summary

MLflow enables you to:

1. Track and compare your machine learning experiments  
2. Manage models efficiently with versioning and stage transitions  
3. Deploy models seamlessly into pipelines, notebooks, or apps  
4. Collaborate with your team to promote the best performing models to production  
5. Maintain full reproducibility and visibility for every stage of your ML workflow

---

Explore the next section on **Connections and Secrets** to integrate your ML workflows securely with external databases and deployment environments.


---
# FILE: src/content/docs/workspace/studio/overview.md
---

---
title: "Studio Overview"
lastUpdated: 2025-06-27
---

The **Studio** is your interactive development environment where you can build, test, and manage data workflows, pipelines, applications, and machine learning models – all within a single unified workspace. It empowers data engineers, analysts, and scientists to work collaboratively without needing to switch between multiple disconnected tools. With Studio, your team can seamlessly move from development to deployment in an integrated and secure environment, boosting productivity and operational efficiency.

---

![Studio Interface Overview](../../../../assets/workspace/studio/studio.jpeg)

---

##  What You Can Do in Studio

###  Notebooks and IDE

The **Notebooks** feature enables you to perform data exploration, cleaning, transformation, and analysis in an interactive way, leveraging Jupyter's intuitive interface. You can visualise datasets, create quick plots, build prototypes for ML models, and document your workflows in the same place.

The integrated **IDE (VS Code)** provides a powerful coding environment directly within Studio, enabling you to build robust data pipelines, develop production-grade scripts, and manage large codebases efficiently. It supports extensions, Git integration, linting, and debugging, offering a complete development experience for your projects.

These two tools combined allow you to switch seamlessly between exploratory notebook work and structured code development, keeping your workflow efficient and organised.

---

###  Workflow Design and Orchestration

Using **Airflow (DAGs)** in Studio, you can create and manage complex ETL pipelines and data workflows with ease. Its visual DAG editor allows you to define task dependencies, schedule executions, and orchestrate end-to-end processes without writing YAML or configuration files manually.

This orchestration capability is critical for automating repetitive data tasks, managing dependencies between different processes, and ensuring data freshness across your systems. With Airflow integrated into Studio, you get full visibility and control over your workflows in the same place where you develop them.

You can also test and validate DAGs interactively before deploying them to production, reducing errors and improving deployment confidence.

---

###  Machine Learning Models

**MLFlow** is integrated within Studio to help you manage the entire machine learning lifecycle efficiently. You can track experiments, compare model runs, and manage model versions all within one interface, ensuring reproducibility and transparency in your ML workflows.

This integration supports registering and deploying models directly from Studio to your production environments or apps. It also allows team collaboration on ML experiments, making it easy to share, review, and approve models before deployment.

By having MLFlow in Studio, data scientists can move seamlessly from training and tuning models to registering and deploying them, eliminating manual tracking and disconnected tools.

---

### Visualisation and Applications

With **Superset**, you can build rich, interactive dashboards to analyse datasets, monitor key metrics, and share insights with stakeholders easily. It supports a wide variety of visualisation types, advanced filtering, and SQL-based data exploration within your workspace.

**Streamlit & Dash** enable you to develop and deploy custom interactive web apps for internal tools, data apps, or business intelligence applications. You can build apps with minimal code and share them instantly with your team for rapid feedback and iteration.

This visualisation ecosystem in Studio ensures that your data insights, ML results, and workflows can be presented in impactful ways for decision-making and operational monitoring.

---

### Python Environments

Studio allows you to **create and activate custom Python environments** tailored to your project requirements. You can specify exact library versions, install dependencies, and ensure consistency across development and production.

This prevents environment mismatch issues that cause pipeline failures or model incompatibility. Approved environments can be reused by your team, promoting standardisation and operational reliability.

Environment management is integrated with notebooks, IDE, workflows, and apps, making it seamless to select and activate the required environment context for each task.

---

### Configurations and Secrets

Managing **variables, connections, and secrets** is centralised within Studio, ensuring your workflows remain secure and configurable. You can define database connections, external API keys, cloud storage credentials, or environment variables securely, without hardcoding them into scripts.

This ensures that sensitive information is managed according to security best practices while keeping your workflows flexible and portable across environments.

Secrets and configurations can be updated centrally, instantly reflecting across your pipelines and applications without requiring code changes, enhancing maintainability and compliance.

---

### Customisable Compute

Studio supports launching your development server with **custom CPU, GPU, and memory configurations**, enabling you to match resource allocation to workload demands. For lightweight data exploration, you can choose a minimal instance, while ML training jobs can leverage GPU-enabled servers.

This flexibility optimises cost while providing the compute performance needed for different tasks. Developers can scale up or down without needing cluster management expertise, focusing purely on their work.

Compute customisation is integrated with the Studio server lifecycle, ensuring resources are used efficiently and responsibly within your workspace.

---

##  Integration and Git Connectivity

Studio integrates all these tools cohesively, making it easy to progress from **data exploration ➔ pipeline development ➔ model tracking ➔ visualisation and deployment** without context switching. All artefacts and workflows are centrally stored and managed, enabling seamless collaboration within your team.

Additionally, you can **connect to Git repositories via SSH keys**, ensuring version control and CI/CD practices are integrated into your workflow. This facilitates code reviews, rollback, and collaborative development following software engineering best practices.

Your Git connection also allows notebooks, pipelines, and app code to be maintained in source control, enabling reproducibility, traceability, and safe deployment workflows.

---

##  Summary Process

1. **Start your Studio server** with the required compute specs for your tasks  
2. **Develop code** in notebooks for quick analysis or VS Code IDE for robust pipelines  
3. **Build and test DAGs** for ETL workflows using Airflow integration  
4. **Train and track models** seamlessly with MLFlow for reproducible ML workflows  
5. **Create dashboards or apps** with Superset, Streamlit, or Dash to visualise results  
6. **Configure environments, variables, connections, and secrets** securely  
7. **Connect to Git** for version control and collaboration workflows  
8. **Run, test, and deploy** your data and ML projects confidently to production

---

Explore each tool in detail in the following Studio documentation to unlock the full capabilities of your platform.


---
# FILE: src/content/docs/workspace/studio/spark.md
---

---
title: "Spark"
lastUpdated: 2025-06-27
---

**Apache Spark** is a powerful, open-source distributed processing engine designed for large-scale data processing and analytics. Studio integrates Spark seamlessly into your development workflows, enabling scalable data transformations, feature engineering, and ETL pipelines within your secure workspace environment.

---

## What is Spark?

Apache Spark enables:

- **Fast processing of big data:** In-memory computation for efficient analytics  
- **Distributed execution:** Run jobs across multiple cores or cluster nodes  
- **Flexible APIs:** Work with data using PySpark (Python), Scala, Java, or R  
- **Integrated modules:** Perform SQL queries, machine learning, streaming, and graph processing with built-in libraries

---

## Spark in Studio

In Studio:

- Spark is pre-installed in your **default Python environments**  
- You can run Spark jobs from **Notebooks or VS Code apps**  
- Spark utilises your **shared Jovyan volume** for reading and writing datasets  
- Spark jobs run on your selected server resources (CPU/GPU and memory specs) ensuring performance according to your workload needs

---

##  Shared Volume Integration

Your Spark scripts can access data stored in the **shared Jovyan volume**, allowing seamless integration with other tools like Notebooks, Airflow, MLflow, and Streamlit apps.

>  **Example path:** `/home/jovyan/shared/<project-folder>/`

All outputs written to the shared volume remain accessible for downstream workflows, collaboration, and analysis.

---

## 💻 Example: Reading and Exploring Data

Below is a **simple and practical example** of using PySpark in Studio to read a dataset and perform basic analysis.

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import avg

# Initialize Spark session
spark = SparkSession.builder.appName("BasicDataAnalysis").getOrCreate()

# Read CSV file into DataFrame
df = spark.read.csv("/home/jovyan/shared/sample-data.csv", header=True, inferSchema=True)

# Display top 5 rows
df.show(5)

# Calculate average of a numeric column (example: "value")
df.select(avg("value")).show()

# Stop Spark session
spark.stop()


---
# FILE: src/content/docs/workspace/studio/variables-and-secrets.md
---

---
title: "Variables and Secrets"
lastUpdated: 2025-06-27
---


Managing variables and secrets efficiently is essential for building secure, flexible, and scalable workflows in Dataflow. This comprehensive guide explains their definitions, differences, and implementation strategies for optimal security and configuration management.

## Overview

Variables and secrets serve as the foundation for secure configuration management in Dataflow environments. Understanding their proper usage ensures maintainable, secure, and scalable data workflows.

## Variables

Variables are key-value pairs stored in the Dataflow database, designed for non-sensitive configuration values that can be reused across projects and workflows.

### Common Use Cases

Variables are ideal for storing:

- API base URLs and endpoint configurations
- Default processing parameters such as thresholds and batch sizes
- Reusable configuration settings across notebooks and pipelines
- Environment-specific settings that change between development and production

### Creating Variables

Follow these steps to create a new variable:

1. Navigate to the **Variables** page under Studio settings
2. Click **Add Variable**
3. Configure the following fields:
   - **Key:** Unique identifier for the variable
   - **Value:** String, integer, boolean, or JSON data
   - **Description:** Optional documentation for clarity
4. Click **Save** to store the variable

:::tip[Naming Convention]
Use descriptive, consistent naming conventions such as `API_BASE_URL` or `processing_batch_size` for better maintainability.
:::

### Updating Variables

To modify an existing variable:

1. Access the Variables page
2. Locate the target variable and click **Edit**
3. Modify the value or description as required
4. Click **Save** to apply changes

### Deleting Variables

:::caution[Dependency Warning]
Deleting a variable will affect any active workflows or scripts that reference it. Always verify dependencies before proceeding with deletion.
:::

To remove a variable:

1. Click **Delete** next to the target variable
2. Confirm the deletion in the prompted dialog

### Using Variables in Python

Access variables securely in your scripts using the Dataflow SDK:

```python
from dataflow.dataflow import Dataflow

# Initialize Dataflow SDK
dataflow = Dataflow()

# Retrieve a variable by name
variable_value = dataflow.variable("variable_name")

# Use the variable in your workflow
print(f"Configuration value: {variable_value}")
```

:::note[Parameter Reference]
Replace `"variable_name"` with the exact key defined in your Variables configuration.
:::

## Secrets

Secrets are key-value pairs stored securely in the Dataflow Secret Manager, specifically designed for sensitive information such as passwords, API tokens, and credentials.

### Common Use Cases

Secrets should be used for:

- Database passwords and connection strings
- Cloud provider API keys and access tokens
- OAuth tokens and service credentials
- SSL certificates and private keys
- Any sensitive configuration data

### Security Benefits

Secrets provide enhanced security by ensuring that sensitive data is:

- Never exposed directly in notebooks or scripts
- Stored with encryption at rest
- Accessed through secure API calls
- Auditable for compliance requirements

### Creating Secrets

To create a new secret:

1. Navigate to the **Secrets** page under Studio settings
2. Click **Add Secret**
3. Enter the required information:
   - **Key:** Unique identifier for the secret
   - **Value:** Sensitive data (password, token, etc.)
   - **Description:** Optional documentation
4. Click **Save** to securely store the secret

### Updating Secrets

To modify an existing secret:

1. Go to the Secrets page
2. Click **Edit** next to the target secret
3. Update the value or description
4. Click **Save** to apply changes

### Deleting Secrets

:::danger[Critical Warning]
Deleting a secret will break any workflows or scripts that depend on it. Ensure all dependent configurations are updated before deletion.
:::

To remove a secret:

1. Click **Delete** next to the target secret
2. Confirm the deletion

### Using Secrets in Python

Retrieve secrets securely using the Dataflow SDK:

```python
from dataflow.dataflow import Dataflow

# Initialize Dataflow SDK
dataflow = Dataflow()

# Retrieve a secret by name
secret_value = dataflow.secret("secret_name")

# Use the secret securely in your application
database_connection = create_connection(password=secret_value)
```

:::warning[Security Note]
Never log or print secret values directly. Always handle secrets with appropriate security measures.
:::

## Comparison Matrix

| Feature | Variables | Secrets |
|---------|-----------|---------|
| **Storage Location** |  Database |  Secret Manager |
| **Primary Purpose** | Non-sensitive configurations | Sensitive data and credentials |
| **Security Level** | Standard | Enhanced encryption |
| **Access Method** | `dataflow.variable("key")` | `dataflow.secret("key")` |
| **Use Cases** | URLs, parameters, settings | Passwords, tokens, keys |

## Best Practices

### Security Guidelines

- **Use Variables** for general configuration values and non-sensitive parameters
- **Use Secrets** exclusively for sensitive data such as passwords and API tokens
- **Never hardcode** sensitive data directly in notebooks or scripts
- **Implement least privilege** access patterns for secret retrieval

### Operational Excellence

- **Provide descriptive names** for easy identification and maintenance
- **Document dependencies** before making changes to existing variables or secrets
- **Implement version control** for configuration changes where possible
- **Regular auditing** of unused variables and secrets to maintain security hygiene

### Development Workflow

- **Environment separation** using different variable sets for development, staging, and production
- **Consistent naming conventions** across teams and projects
- **Error handling** for missing or inaccessible variables and secrets
- **Testing strategies** that work with both variables and secrets

## Implementation Examples

### Configuration Management Pattern

```python
from dataflow.dataflow import Dataflow

class ConfigManager:
    def __init__(self):
        self.dataflow = Dataflow()
    
    def get_api_config(self):
        return {
            'base_url': self.dataflow.variable('api_base_url'),
            'timeout': self.dataflow.variable('api_timeout'),
            'api_key': self.dataflow.secret('api_key')
        }
    
    def get_database_config(self):
        return {
            'host': self.dataflow.variable('db_host'),
            'port': self.dataflow.variable('db_port'),
            'password': self.dataflow.secret('db_password')
        }
```


## Summary

This documentation covered:

- **Fundamental differences** between Variables and Secrets
- **Complete lifecycle management** including creation, updates, and deletion
- **Secure access patterns** using the Dataflow SDK
- **Best practices** for security and operational excellence
- **Practical implementation examples** for real-world scenarios

Proper implementation of variables and secrets ensures your Dataflow projects maintain security compliance, configuration flexibility, and production readiness while supporting scalable development practices.

---
# FILE: src/content/docs/workspace/studio/visualisation-and-apps.md
---

---
title: "Visualisation & Apps"
lastUpdated: 2025-06-27
---

Studio integrates powerful tools like **Streamlit, Dash, and Superset** to enable you to build interactive visualisations, analytical dashboards, and lightweight internal applications – all within your data engineering and ML workflows.

---

##  Why Visualisation Matters

- Communicate insights effectively to stakeholders  
- Build interactive dashboards for real-time data analysis  
- Develop internal tools to streamline operations  
- Deploy lightweight web apps for model inference and data-driven decisions

---

##  Available Tools

###  **Streamlit**

**Streamlit** is an open-source Python framework that lets you build interactive web apps with minimal code.

**Key Features:**

- Rapid prototyping of data apps  
- Supports charts, tables, and model inference interfaces  
- Auto-reloads on script changes for fast iterations

**In Studio:**

- Launch Streamlit by selecting your app folder using the **Launch Directory** feature  
- The app runs in the selected folder, accessing any scripts, models, or data files within your shared and Jovyan volume  
- Reuse the previous working directory for quick re-launch if needed

---

### **Dash**

**Dash** is a Python framework by Plotly for building analytical web applications with rich interactive graphs.

**Key Features:**

- Advanced visualisations powered by Plotly  
- Supports callbacks for interactivity  
- Ideal for deploying analytical dashboards internally

**In Studio:**

- Select the app folder via **Launch Directory** before running Dash  
- Dash uses your shared Jovyan volume for data files, models, or scripts  
- Reuse previous working directories for faster launches

---

### **Superset**

**Apache Superset** is a modern, enterprise-ready data exploration and visualisation platform.

**Key Features:**

- Drag-and-drop dashboard builder  
- SQL-based data exploration and charting  
- Integrates with multiple databases securely

**In Studio:**

- Use Superset to connect to your configured data warehouses or databases  
- Build charts, dashboards, and data exploration queries  
- Accessible via the same Studio server for secure and consistent access

---

##  Launch Directory Feature

![Select Working Directory](../../../../assets/workspace/studio/airflow_launch_folder.png)


For **Streamlit and Dash**, Studio provides a custom **Launch Directory** feature to control where your apps are launched from.

- **Select Folder:** Choose the specific folder containing your app scripts  
- **Reuse Previous:** Quickly use the previously selected folder for faster launches  
- **Default:** If skipped, Studio uses the default app workspace linked to your shared Jovyan volume

---

##  Best Practices

1. Organise each app within its own folder for clarity  
2. Ensure required libraries are installed in your active Python environment  
3. Version control app scripts using Git for collaboration and rollback  
4. Use environment variables or secrets for sensitive configurations  
5. Test locally in Notebooks or VS Code before deploying as apps

---

##  Summary

- **Streamlit:** Rapid data apps with simple Python scripts  
- **Dash:** Analytical dashboards with advanced interactive graphs  
- **Superset:** Drag-and-drop BI dashboards and SQL exploration

All apps are powered by your **shared Jovyan volume** and run within the secure, scalable Studio server environment.

---


---
# FILE: src/content/docs/workspace/studio/workflows.md
---

---
title: "Workflows with Airflow"
lastUpdated: 2025-06-27
---
The **Workflows** section in Studio enables you to design, orchestrate, and manage complex data pipelines using **Apache Airflow**, an industry-standard workflow orchestration tool.

---

## What is Apache Airflow?

**Apache Airflow** is a powerful open-source platform for programmatically authoring, scheduling, and monitoring workflows. It allows you to define **DAGs (Directed Acyclic Graphs)** that describe the steps of your data pipeline and their dependencies.

- Automate ETL (Extract, Transform, Load) jobs  
- Manage dependencies between tasks  
- Schedule jobs to run at desired intervals  
- Monitor runs, logs, and task statuses

---

## What is a DAG?

A **DAG** (Directed Acyclic Graph) is a collection of tasks organized in a way that clearly defines execution order and dependencies. Each task represents a step in your workflow — for example, ingesting data, transforming it, and loading it into a data warehouse.

In Studio, you can build and manage DAGs directly from your project folders, version them using Git, and run them using Airflow’s orchestration engine.

---

##  Launch Working Directory

When launching your Airflow environment in Studio, you can use our **custom Working Directory feature** to control where your DAGs are sourced from.

###  How it works:

- **Select a Folder:** Pick the specific folder that contains your DAG files. This makes it easy to test and run only what you need.

- **Use Previous Directory:** If you’ve used Airflow in Studio before, you can quickly launch with your previously selected working directory for faster workflow resumption.

- **Skip & Use Default:** If no directory is selected, Studio will use the default Airflow workspace linked to your shared Jovyan volume.

---

![Select Working Directory](../../../../assets/workspace/studio/airflow_launch_folder.png)

>  **Example:** The image above shows the custom folder selection modal where you can choose your DAG folder or reuse the last working directory.

---

## Running Airflow

Once you launch Airflow, Studio connects your selected DAG folder to the Airflow server.

You can then:

- View all available DAGs in the Airflow UI  
- Trigger DAGs manually or on a schedule  
- Monitor task execution, logs, and dependencies  
- Pause or resume workflows as needed

---

<!-- ![Airflow UI](../../../../assets/workspace/studio/workflows/airflow-ui.png) -->

>  **Example:** The above screenshot shows the Airflow UI inside Studio, where you can monitor DAG runs, task statuses, and logs.

---

##  Airflow Features in Studio

Your integrated Airflow environment in Studio includes:

- **Visual DAG Designer:** Use your IDE or Notebook to define and update DAGs programmatically  
- **Flexible Working Directory:** Organise and isolate DAGs for easier testing and management  
- **Shared Storage:** All DAGs and related scripts stay in the shared Jovyan volume, accessible from VS Code and Notebooks  
- **Secure Execution:** DAGs run inside the controlled Studio server environment  

---

## Best Practices

1. Organise your DAG files in clear project folders  
2. Use descriptive DAG names and clear task dependencies  
3. Use variables, connections, and secrets securely for all data workflows

---

Explore the next sections to learn more about how to build visualisations, deploy apps, and manage your data workflows end-to-end within Studio.
