# k8s syntax

## cluster


## quickies

- todos
  - google some handy `--output` formats for querying common details and save as a bash fn

```sh
# inspection
##  -o/--output ... : query specify data output in various formats
kubectl get
  nodes # list all nodes in a cluster
  pods # all pods in a cluster
  pod mypod # specific pod
kubectl describe pod mypod # list the pod specification, events, networking, etc
kubectl wait --for=condition=Ready pod mypod # wait for pod to be in Ready state

# instantiation
## run a pod with a single container
kubectl run mypod --restart=Never --image=kiamol/ch02-hello-kiamol

# removal
kubectl delete pod mypod
```
