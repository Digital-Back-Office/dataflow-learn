---
title: "Containers"
lastUpdated: 2026-04-28
---

Containers allow you to deploy and manage containerized applications directly within your Dataflow workspace. Each container deployment creates the necessary infrastructure automatically, making services such as Redis, Nginx, or any custom image instantly accessible from within your development server.

---

## How Containers Work

When you deploy a container, Dataflow provisions it inside the cluster and exposes it via an internal hostname derived from the container's slug. Your development server can connect to this hostname directly without any additional network configuration.

---

## Deploying a Container

1. Navigate to the **Containers** page under Studio settings
2. Click **Deploy Container** to open the deployment dialog
3. Fill in the required details:
   - **Name:** Display name for your container
   - **Slug:** Unique identifier (lowercase letters, numbers, and hyphens only)
   - **Image:** Container image from Docker Hub or a registry (e.g., `nginx:latest`, `redis:7`)
   - **Port:** Port number to expose — optional, range 1–65535
4. Configure optional fields as needed:
   - **Environment Variables:** Add variables in `KEY=VALUE` format, one per line
   - **Command:** Override the container's default command (space-separated string)
   - **CPU Limit:** CPU resource limit in cores (e.g., `1`, `2`) or millicores (e.g., `500m`) — Default: `1`, Max: `2`
   - **Memory Limit:** Memory resource limit (e.g., `512Mi`, `2Gi`) — Default: `2Gi`, Max: `8Gi`
5. Click **Deploy** — the container will be provisioned to the cluster

---

## Container Status

| Status | Description |
|--------|-------------|
| **PENDING** | Container is being created or starting up |
| **DEPLOYED** | Container is running and available |
| **FAILED** | Container deployment failed or is not running |
| **DELETING** | Container is being removed |

Click the refresh icon next to the status to fetch the latest real-time status.

---

## Deleting a Container

Click the **Delete** button next to the target container. This removes the container deployment and all associated resources.

:::danger[Irreversible Action]
Deleting a container cannot be undone. Ensure no active workflows or scripts depend on it before proceeding.
:::

---

## Important Notes

### Unique Slugs
Each container must have a unique slug within your organization. The slug is used to generate the internal hostname for the container.

### Environment Variables
Must be provided in `KEY=VALUE` format, one per line. For example:
```
REDIS_PORT=6379
APP_ENV=production
```

### Resource Limits
- **CPU** can be specified in cores (`1`, `2`) or millicores (`500m`, `1000m`)
- **Memory** can be specified in Mi (`512Mi`) or Gi (`2Gi`, `4Gi`)

These limits ensure containers do not consume excessive cluster resources.

### Command Override
If specified, the value replaces the container's default `CMD` or `ENTRYPOINT`. Provide the full command as a space-separated string.

---

## Accessing a Container from Your Development Server

Once a container is in the **DEPLOYED** state, it is reachable from your development server using the internal hostname generated from the slug. The hostname follows the pattern:

```
<slug>-<unique-id>
```

### Example — Connecting to Redis

After deploying a Redis container (e.g., with slug `redis-sc`), connect to it from a notebook or script:

```python
import redis

r = redis.Redis(
    host="redis-sc-5a718ce9-aa7a-4b0b-8c9f-2b4c7809b567",
    port=6379,
    decode_responses=True
)

r.set("check", "Working")
print(r.get("check"))  # Output: Working
```

:::tip[Finding the Hostname]
The full internal hostname is displayed on the Containers page once the container reaches **DEPLOYED** status. Copy it directly from there to use in your scripts.
:::

:::note[Port]
Use the same port number you specified during deployment when connecting to the container.
:::
