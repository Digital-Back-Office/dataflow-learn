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
