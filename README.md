
# 🐳 Docker Commands Cheatsheet

This README serves as a complete reference for common Docker and Docker Compose commands with clear descriptions and usage context.

---

## 📋 General Docker Commands

| Command                                 | Description                                       |
|-----------------------------------------|---------------------------------------------------|
| `docker --version`                      | Check installed Docker version                   |
| `docker info`                           | Display detailed system-wide Docker info         |

---

## 🔧 Image Commands

| Command                                      | Description                                               |
|----------------------------------------------|-----------------------------------------------------------|
| `docker build -t <image_name> .`             | Build Docker image from Dockerfile                        |
| `docker images`                              | List all local Docker images                              |
| `docker rmi <image_name>`                    | Remove Docker image                                       |
| `docker pull <image_name>`                   | Download image from Docker Hub                            |
| `docker push <image_name>`                   | Upload image to Docker Hub                                |

---

## 🧱 Container Commands

| Command                                                       | Description                                                           |
|----------------------------------------------------------------|-----------------------------------------------------------------------|
| `docker run <image>`                                           | Run a container from an image                                        |
| `docker run -it <image>`                                       | Run container in interactive mode (terminal access)                  |
| `docker run -d <image>`                                        | Run container in detached (background) mode                          |
| `docker run -p <host_port>:<container_port> <image>`           | Bind container port to host port                                     |
| `docker ps`                                                    | List running containers                                              |
| `docker ps -a`                                                 | List all containers (including stopped ones)                         |
| `docker stop <container_id>`                                   | Stop a running container                                             |
| `docker start <container_id>`                                  | Start a stopped container                                            |
| `docker restart <container_id>`                                | Restart a container                                                  |
| `docker rm <container_id>`                                     | Remove a stopped container                                           |
| `docker logs <container_id>`                                   | View logs from container                                             |
| `docker exec -it <container_id> bash`                          | Execute bash shell inside a running container                        |
| `docker exec -it <container_id_or_name> sh`                    | Execute shell (sh) in a running container                            |

---

## 📦 Volume Commands

| Command                                 | Description                             |
|-----------------------------------------|-----------------------------------------|
| `docker volume create <volume_name>`    | Create a named volume                   |
| `docker volume ls`                      | List all volumes                        |
| `docker volume inspect <volume_name>`   | View detailed info about a volume       |
| `docker volume rm <volume_name>`        | Remove a named volume                   |

---

## 📁 Network Commands

| Command                                 | Description                             |
|-----------------------------------------|-----------------------------------------|
| `docker network ls`                     | List available Docker networks          |
| `docker network create <network_name>`  | Create a custom network                 |
| `docker network inspect <network_name>` | Inspect network configuration/details   |
| `docker network rm <network_name>`      | Remove a Docker network                 |

---

## 🧰 Docker Compose Commands

| Command                                         | Description                                                               |
|-------------------------------------------------|---------------------------------------------------------------------------|
| `docker-compose up`                             | Start all services in docker-compose.yml                                  |
| `docker-compose up -d`                          | Start services in detached (background) mode                              |
| `docker-compose up --build`                     | Build images and then start services (recommended after Dockerfile change)|
| `docker-compose down`                           | Stop and remove containers, networks, volumes created by Compose          |
| `docker-compose build`                          | Only build images defined in docker-compose.yml                           |
| `docker-compose ps`                             | List running containers from Compose                                      |
| `docker-compose logs`                           | View logs for all services in Compose                                     |
| `docker-compose logs <service>`                 | View logs for a specific service                                          |
| `docker-compose exec <service> sh`              | Exec into a running service's shell                                       |

---

## 🧹 Cleanup Commands

| Command                          | Description                                      |
|----------------------------------|--------------------------------------------------|
| `docker system prune`            | Remove all unused containers, networks, images   |
| `docker container prune`         | Remove all stopped containers                    |
| `docker image prune`             | Remove unused Docker images                      |
| `docker volume prune`            | Remove unused volumes                            |

---

## 🧠 When to Use What? (Accordion-style Guide)

<details>
  <summary><strong>📌 When to use <code>docker build</code>?</strong></summary>

Use `docker build` when:
- You are working with a **single service** app.
- You are **not** using `docker-compose`.
- You want to **manually** build a Docker image from a Dockerfile.

**Example:**
```bash
docker build -t my-app-image .
docker run -p 3000:3000 my-app-image
```

</details>

<details>
  <summary><strong>📌 When to use <code>docker-compose up --build</code>?</strong></summary>

Use `docker-compose up --build` when:
- You are managing **multiple services** (e.g., Node.js, MongoDB, Redis, etc.).
- You have a `docker-compose.yml` file and a `Dockerfile`.
- You made changes to your Dockerfile or environment variables and need to rebuild.

**Recommended Command:**
```bash
docker-compose up --build
```

</details>

<details>
  <summary><strong>📌 When to use <code>docker-compose up -d</code>?</strong></summary>

Use this to:
- Run all services defined in `docker-compose.yml` in the background (detached mode).
- You already have images built or don't need to rebuild.

**Example:**
```bash
docker-compose up -d
```

</details>

<details>
  <summary><strong>📌 When to use <code>docker-compose down</code>?</strong></summary>

Use this when:
- You want to stop and clean up all services, networks, and volumes created by Docker Compose.

**Example:**
```bash
docker-compose down
```

</details>

---

