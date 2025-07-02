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
