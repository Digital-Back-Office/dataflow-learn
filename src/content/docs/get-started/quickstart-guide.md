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