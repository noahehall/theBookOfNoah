# k8s

- bookmark
  - reading: 46 ch3: listing 3.2
  - copying: not started
- todos
  - chap2 lab: page 39
- largely taken from learn k8s in a month of lunches by elton stoneman
- recommendations
  - k8s in action by Marko Luksa

## links

- learn
  - [elton stonemans blogs](https://blog.sixeyed.com/)
  - [pdf: k8s with buildkit](https://static.sched.com/hosted_files/kccnceu19/12/Building%20images%20%20efficiently%20and%20securely%20on%20Kubernetes%20with%20BuildKit.pdf)
- examples
  - [buildkits k8s examples](https://github.com/moby/buildkit/tree/master/examples/kubernetes)
  - [forked: k8s in a month lab](https://github.com/nohallcaesars/kiamol)
- docs
  - [k8s docs home](https://kubernetes.io/docs/home/)

## put somwhere

- k3s: tool for running stripped down k8s
- kubectl: pronounced cube-cuttle; cli tool for controlling k8s

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
