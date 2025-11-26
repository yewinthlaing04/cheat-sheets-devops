### Kubernetes Configuration Files

#### Every config file has 3 parts

- 1 . metadata
- 2 . specification
- 3 . status ( automatically generated and added by Kubernetes )

#### Layer of Abstraction

- `Deployment` manages a
- `ReplicaSet` manages a
- `Pod` is an abstraction of
- `Container`

```
# nginx deployment.yaml

apiVersion: apps/v1
kind: Deployment
metadata:
    name: nginx-deployment
    labels:
        app: nginx
spec:
    replicas: 2
    selector:
        matchLabels:
            app: nginx
    template:
        metadata:
            labels:
                app: nginx
        spec:
            containers:
            - name: nginx
              image: nginx:1.16
              ports:
              - containerPort: 8080
```

#### Template

- has it's own "metadata" and "spec" section
- applies to Pod
- `blueprint` for a pod

```
# nginx service .yaml
apiVersion: v1
kind: Service
metadata:
    name: nginx-service
spec:
    selector:
        app: nginx
    ports:
        - protocol: TCP
          port: 80
          targetPort: 8080
```
