# Kubernetes Core Concepts

## 1. Kubernetes Role

Kubernetes is a **container orchestration platform** that:

- Automates **deployment** of containers.
- Manages **scaling** (auto-increase or decrease of replicas).
- Maintains **desired state** (restarts containers if they fail).
- Handles **networking, storage, and secrets** for containers.

> Analogy: Kubernetes is the “operating system” for your containerized apps.

---

## 2. Node

- A **Node** is a **worker machine** in Kubernetes (physical or virtual).
- Runs **Pods** (smallest deployable units).
- Components:
  - `kubelet` – ensures containers run on the Node.
  - `kube-proxy` – handles networking for Pods.
  - Container runtime – e.g., Docker, containerd.

> Analogy: Node = a worker computer in the cluster.

---

## 3. Master (Control Plane)

- The **Master** manages the cluster.
- Components:
  - **API Server** – front door for commands.
  - **Scheduler** – assigns Pods to Nodes.
  - **Controller Manager** – monitors cluster state.
  - **etcd** – stores cluster configuration.

> Analogy: Master = the brain of the cluster.

---

## 4. Pod

- Smallest deployable unit in Kubernetes.
- Contains **one or more containers**.
- Shares:
  - Network namespace (IP, ports)
  - Storage volumes

> Analogy: Pod = a mini virtual machine for your containerized app.

---

## 5. Service

- Exposes Pods for access internally or externally.
- Types:
  - **ClusterIP** – internal only.
  - **NodePort** – access via Node IP + port.
  - **LoadBalancer** – external cloud load balancer.
  - **ExternalName** – maps service to external DNS.

> Analogy: Service = a stable IP or endpoint for ephemeral Pods.

---

## 6. Ingress

- Manages **external HTTP/S traffic** to Services.
- Features:
  - URL routing
  - TLS/HTTPS termination
  - Host/path-based routing

> Analogy: Ingress = traffic controller / reverse proxy.

---

## 7. ConfigMap

- Stores **non-sensitive configuration** (env variables, config files).
- Can be injected into Pods as:
  - Environment variables
  - Files via volumes

> Analogy: ConfigMap = a “config folder” for your app.

---

## 8. Secret

- Stores **sensitive data** (passwords, API keys, TLS certs).
- Injected as environment variables or files.
- Stored base64-encoded for security.

> Analogy: Secret = a locked safe for sensitive configs.

---

## 9. Volumes

- Provides **persistent or temporary storage** for Pods.
- Types:
  - **emptyDir** – temporary, tied to Pod lifecycle.
  - **hostPath** – storage on Node filesystem.
  - **PersistentVolumeClaim (PVC)** – request for long-term storage.

> Analogy: Volume = a disk or folder mounted into your container.

---

## Summary Table

| Concept   | Role / Function                            |
| --------- | ------------------------------------------ |
| Node      | Worker machine running Pods                |
| Master    | Cluster control plane                      |
| Pod       | Smallest unit, runs one or more containers |
| Service   | Stable network endpoint to access Pods     |
| Ingress   | Manages external HTTP/S traffic routing    |
| ConfigMap | Non-sensitive configuration data           |
| Secret    | Sensitive data storage (passwords, keys)   |
| Volume    | Persistent or temporary storage for Pods   |
