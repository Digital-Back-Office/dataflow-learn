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