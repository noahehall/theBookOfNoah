# kubernetes

- bookmark
  - reading: 46 ch3: listing 3.2
  - copying: not started
- todos
  - all the labs
- largely taken from learn k8s in a month of lunches by elton stoneman
- recommendations
  - k8s in action by Marko Luksa: more focused on administration
    - both books should prepare you for certification
      - CKA: certified kubernetes administrator
      - CKAD: certified kubernetes application developer

## links

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

### terms

## components

### API

- how you define your applications; generally in yaml and send the specification state to the k8s API, which is responsible for ensuring the runtime state matches the specification state (like terraform)


#### application manifests

- IaaC adhering to the k8s api; defines one of the kubernetes object
- yaml definition
- json definition

##### services

- objects for managing network access: from the outside into the cluster and between containers in the cluster

##### Pods

##### Deployments

##### ReplicaSets

##### Volumes

##### Secret

##### ConfigMap

### cluster

- a bunch of servers, which runc ontainers, joined into a group
- a single logical unit composed of many server nodes

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
