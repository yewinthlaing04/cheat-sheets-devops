# Docker – Building Images

As we saw earlier, Docker allows us to build images using the **`docker buildx build`** command.  
We will now look at how to construct a Dockerfile.

---

## 🌟 `FROM`

Specifies the base image used to build the Docker image.  
This is the **first instruction** in a Dockerfile.

---

## 🏷️ `LABEL`

Adds metadata to an image, such as descriptions or authors.  
These labels can be used to organize and manage images.

---

## 📌 `ARG`

Defines variables that can be passed to Docker **during the image build**.  
Unlike `ENV`, `ARG` values **are not available after** the image is built.

---

## 🖥️ `ENV`

Sets environment variables inside the container.  
These variables can be used by applications running in the container and remain accessible after creation.

---

## 📁 `WORKDIR`

Defines the working directory inside the container where subsequent instructions will be executed.

---

## 👤 `USER`

Specifies the user that will execute commands in the image.  
Files copied **after** this directive will belong to this user.

---

## 🗂️ `COPY`

Copies files or directories from the host into the container filesystem at the specified path.

---

## ➕ `ADD`

Similar to `COPY`, but can also extract `.tar` archives and download files from URLs.

---

## 🐚 `SHELL`

Specifies which shell to use for executing `RUN`, `CMD`, and `ENTRYPOINT` commands.

---

## ▶️ `RUN`

Executes a command inside the container during image build.  
Often used to install packages.

---

## 📦 `VOLUME`

Creates a mount point in the container to store persistent data.

---

## 🌐 `EXPOSE`

Informs Docker that the container listens on a specific network port at runtime.

---

## 🔐 `CMD`

Specifies the default command to run when the container starts.  
It can be overridden at container execution.

---

## 🔐 `ENTRYPOINT`

Defines the command that will always run when the container starts, and allows passing arguments from the command line.

### `Demo DockerFile`

```
# Use a lightweight base image to keep the final image small
FROM node:20-slim

# Add metadata to the image
LABEL maintainer="hello@example.com" version="1.0" desc="Example Node.js dockerfile"

# Build Argument
ARG build_version=1.0

# Environment variables
ENV  APP_HOME=/opt/app

# Create and set the working directory
WORKDIR /opt/app

# Copy project files into the container
COPY . .

# Install system dependencies and node.js packages
RUN apt-get update && apt-get install -y && npm install --production

# Create volume for persistent storage
VOLUME /data

# Expose the app port
EXPOSE  5000

# Define the user to run the container
USER node

# Default command to run the container
CMD ["node" , "app.js"]

# Define the container entrypoint
ENTRYPOINT ["node"]
```
