# Why We Need Two Files: Deployment and Service

In Kubernetes, a **Deployment** and a **Service** solve different problems.  
Even though they work together, they are not the same thing.

---

## 1. What a Deployment Does

A **Deployment** manages **Pods**.

It defines:

- The container image to run
- The number of replicas
- Rolling update strategy
- Self-healing (restarting pods)
- Labels & selectors
- Environment variables
- Resource limits

**Without a Deployment → your app can run, but it will not be scalable or self-healing.**

---

## 2. What a Service Does

A **Service** exposes **network access** to the Pods created by the Deployment.

It provides:

- A stable IP address
- A stable DNS name
- Load balancing across Pods
- Port mapping
- Internal or external access options

**Without a Service → your app runs but nobody can reliably reach it.**

---

## 3. Why They Are Separate

### ✔ Separation of concerns

- Deployment = how the app **runs**
- Service = how the app is **reached**

### ✔ Different layers

- Deployment = **compute**
- Service = **networking**

### ✔ Reusability

You can have:

- One Service for multiple Deployments
- Multiple Services for one Deployment

### ✔ Scaling

Deployment replicas can change from 1 → 10  
**Service remains the same** and auto-load-balances.

### ✔ Pod IPs change

Pods are ephemeral and get new IPs.  
A Service gives a **permanent address**.

---

## Simple Analogy

- **Deployment** = “Run and manage these servers.”
- **Service** = “Give me one phone number that always connects to one of them.”

---
