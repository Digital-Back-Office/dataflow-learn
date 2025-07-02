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
