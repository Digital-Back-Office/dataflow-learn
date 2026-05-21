---
title: "Shared Airflow Tenancy"
lastUpdated: 2026-05-21
---

Shared Airflow lets multiple projects run DAGs in a single Airflow instance. This is useful for lightweight orchestration, but it has strict rules for safety and isolation.

## Key Rules

- **Visibility is always Public.** Shared Airflow is visible to all Dataflow users, so avoid sensitive data or credentials in shared DAGs.
- **Airflow config is not editable.** Shared Airflow uses platform-managed configuration only.
- **Environment applies to tasks only.** The selected Python environment is mounted for task execution only. Do not import DAG specific modules at the top level, **Scheduler** may not recognize it since it runs on a different environment.
- **No secrets, variables, or connections at top level.** Access them inside task functions only.

If any of these rules cannot be followed, use **Dedicated Tenancy** instead of shared tenancy where a separate Airflow deployment is done for each project.

## Import Rules (Top-Level vs Task-Level)

In shared tenancy, top-level imports must be Airflow or Python standard library modules. Any other libraries must be imported inside task definitions.

**Not allowed (Top-level Non-Stdlib import):**

```diff
-import requests
-import google.generativeai as genai
from airflow import DAG
from airflow.decorators import task
from datetime import datetime

with DAG("news_summarizer", schedule_interval=None, start_date=datetime(2024, 3, 19)) as dag:
    @task()
    def fetch_news():
        ...
```

**Allowed (Import inside task):**

```diff
from airflow import DAG
from airflow.decorators import task
from datetime import datetime

with DAG("news_summarizer", schedule_interval=None, start_date=datetime(2024, 3, 19)) as dag:
    @task()
    def fetch_news():
+       import requests
        from airflow.models import Variable

        news_api_key = Variable.get("news_api_key")
        response = requests.get(f"https://newsapi.org/v2/top-headlines?country=us&apiKey={news_api_key}")
        ...

    @task()
    def summarize_news(news_texts):
+       import google.generativeai as genai
        from airflow.models import Variable

        gemini_api_key = Variable.get("gemini_api_key")
        genai.configure(api_key=gemini_api_key)
        ...
```

## Secrets, Variables, and Connections

Do not read Airflow Variables, Connections, or Secrets etc., outside the task definitions. Access them only inside tasks.

**Not allowed (Top-level access):**

```diff
from airflow import DAG
from airflow.decorators import task
-from airflow.models import Variable
from datetime import datetime

-NEWS_API_KEY = Variable.get("news_api_key")
-GEMINI_API_KEY = Variable.get("gemini_api_key")
```

**Allowed (Inside task):**

```diff
from airflow import DAG
from airflow.decorators import task
from datetime import datetime

with DAG(
    "news_summarizer",
    schedule_interval=None,
    start_date=datetime(2024, 3, 19),
    catchup=False
) as dag:
  @task()
  def fetch_news():
+    from airflow.models import Variable
+    news_api_key = Variable.get("news_api_key")
    ...

    @task()
    def summarize_news(news_texts):
+    from airflow.models import Variable
+    gemini_api_key = Variable.get("gemini_api_key")
    ...
```

:::warning
Shared tenancy is public. Do not run DAGs that handle sensitive data or protected credentials.
:::

## Airflow Config Limitations

Shared Airflow does not allow custom Airflow config edits. If you need custom configuration, use **Dedicated** tenancy.

## DAG ID Suffix (Info)

After deployment, DAG IDs in shared tenancy are suffixed with the project slug. Example: `news_summarizer` becomes `news_summarizer__<my-slug>`.

## When to Use Shared Airflow

Use shared tenancy for:

- Non-sensitive workloads
- Lightweight or demo pipelines
- Team-wide visibility workflows

Use dedicated tenancy for:

- Sensitive or regulated data
- Custom Airflow configuration needs
- Strict isolation requirements
