# Log output (Exercise 1.1)

## Run locally
npm start

## Build Docker image
docker build -t log-output:1.1 .

## k3d / Kubernetes
k3d cluster create -a 2
k3d image import log-output:1.1 -c k3s-default
kubectl apply -f k8s/deployment.yaml
kubectl logs -l app=log-output -f
