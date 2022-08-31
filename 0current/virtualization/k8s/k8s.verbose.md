# kubernetes

- bookmark
  - reading: 73 start after figure 4.6
  - copying:
    - verbose: pg 18 try it now
    - examples: page 18 try it now
- todos
  - all the labs
- largely taken from learn k8s in a month of lunches by elton stoneman
- recommendations
  - k8s in action by Marko Luksa: more focused on administration
    - both books should prepare you for certification
      - CKA: certified kubernetes administrator
      - CKAD: certified kubernetes application developer

## links

- [kubectl cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- learn
  - [elton stonemans blogs](https://blog.sixeyed.com/)
  - [pdf: k8s with buildkit](https://static.sched.com/hosted_files/kccnceu19/12/Building%20images%20%20efficiently%20and%20securely%20on%20Kubernetes%20with%20BuildKit.pdf)
- examples
  - [buildkits k8s examples](https://github.com/moby/buildkit/tree/master/examples/kubernetes)
  - [forked: k8s in a month lab](https://github.com/nohallcaesars/kiamol)
- docs
  - [k8s docs home](https://kubernetes.io/docs/home/)

## basics

- a container orchestrator
  - infrastructure-level concerns like load balancing, networking, storage and compute into app configuration
  - platform for running containers: instantiation, updates, maintenance, scaling, security, etc
  - all k8s objects/resources/etc are abstractions around lowerlevel things, same way docker containers/images/etc are abstractions


### terms

## components

### API

- how you define your applications; generally in yaml and send the specification state to the k8s API, which is responsible for ensuring the runtime state matches the specification state (like terraform)

#### application manifests

- IaaC adhering to the k8s api; defines one of the kubernetes object
- yaml definition
- json definition?

##### services

- objects for managing network access: from the outside into the cluster and between containers in the cluster

##### Pods

- k8s object for managing 1/more containers
  - every container belongs to a pod, typically one-to-one,
    - you can deploy many containers to a single pod and they will all share the same virtual env, network address, and can communicate over localhost
  - pods inturn are generally managed by other k8s objects (e.g. deployments)
- a unit of compute; basic building block of k8s;
  - runs on a single node in a cluster
  - k8s manages the pod, but not the container
    - instead it passes the responsibilty container management to the container runtime installed on the node, e.g. docker/containerd/etc
- state
  - virtual ip: managed by k8s

##### Deployments

- k8s object for managing pods

##### ReplicaSets

##### Volumes

##### Secret

##### ConfigMap

### cluster

- a bunch of servers, which run containers, joined into a group
- a single logical unit composed of many server nodes
- state
  - virtual network: all pods in a cluster can communicate with each other, even if deployed to different nodes within the cluster

#### distributed db

- every cluster has a distributed db
- use cases
  - store application configuration files
  - store secrets

#### storage

- every cluster has storage (think docker volumes)
  - physically stored on disks in the cluster nodes
  - or a shared storage system
- use cases
  - maintain data outside of containers
  - supports high availabliilty for stateful apps

#### networking

- every cluster manages inbound traffic (via the k8s api) and sends it to the right containers for processing

### nodes

- every node has a container runtime (e.g. docker/containerd)

#### application nodes

- this is your normal container, and can be arbitrarily configured as long as it abides by the k8s api
  - cloud-native architecture across microservices in multiple containers
  - legacy monoliths in one big containers
  - linux, (fk) windows OS

#### API nodes

- the k8s API always runs on linux nodes, regardless of how you configure the application nodes

#### containers

- everything you know about docker goes here, so we'll keep it k8s specific
- containers are distributed to nodes in the cluster and communicate using standard network (UDP & TCP, ICMP not supported)

## tools

- kubectl: manages kubernetes on the cli; pronounced `cube-cuttle`
  - connects to & manages a k8s cluster via the API
