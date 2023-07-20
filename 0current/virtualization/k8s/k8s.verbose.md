# kubernetes

- recommendations
  - aws EKS skillboard courses are great
  - learn k8s in a month of lunches by elton stoneman
  - k8s in action by Marko Luksa: more focused on administration
    - both books should prepare you for certification
      - CKA: certified kubernetes administrator
      - CKAD: certified kubernetes application developer

## links

- [kubectl cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

### tools

- [from k8s](https://kubernetes.io/docs/tasks/tools/)
- [aws: karpenter](https://karpenter.sh/)
- [flagger: automated deployments](https://www.weave.works/oss/flagger/)

### learn

- [elton stonemans blogs](https://blog.sixeyed.com/)
- [pdf: k8s with buildkit](https://static.sched.com/hosted_files/kccnceu19/12/Building%20images%20%20efficiently%20and%20securely%20on%20Kubernetes%20with%20BuildKit.pdf)

### examples

- [buildkits k8s examples](https://github.com/moby/buildkit/tree/master/examples/kubernetes)
- [forked: k8s in a month lab](https://github.com/nohallcaesars/kiamol)

### docs

- [docs home](https://kubernetes.io/docs/home/)
- [components](https://kubernetes.io/docs/concepts/overview/components/)
- [kubectl](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)
- [statefulsets](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)
- [daemonset](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)

## basics

- a container orchestrator
  - infrastructure-level concerns like load balancing, networking, storage and compute into app configuration
  - platform for running containers: instantiation, updates, maintenance, scaling, security, etc
  - all k8s objects/resources/etc are abstractions around lowerlevel things, same way docker containers/images/etc are abstractions
- coredns: provides name resolution and service discovery; can be integrated with consul

### terms

## tools

### kubectl

- cli for communication with control plane nodes via the API server
  - create resources
  - inspect cluster and resource state
  - access troubgle shooting tools
  - deploy and scale resources
- kubectl version must be within one minor version of the control plane cluster

```sh
# install latest
## can also replace the inner curl with a version, e.g. 1.27.3
mkdir -p /opt/k8s && cd /opt/k8s
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl ../kubectl
```

### kind

- run k8s on your local computer, requires eitehr docker/podman

### minikube

- like kind, but runs an all-in-one or multi-node local k8s cluster for daily development work

### kubeadm

- create and management k8s clusters in a user friendly way

## cluster

- a bunch of servers, which run containers, joined into a group
  - a cluster consists of a control and data plane
- a single logical unit composed of many server nodes
- state
  - virtual network: all pods in a cluster can communicate with each other, even if deployed to different nodes within the cluster
- every cluster has a distributed db
  - use cases
    - store application configuration files
    - store secrets
- every cluster has storage (think docker volumes)
  - physically stored on disks in the cluster nodes
  - or a shared storage system
  - use cases
    - maintain data outside of containers
    - supports high availabliilty for stateful apps
- every cluster manages inbound traffic (via the k8s api) and sends it to the right containers for processing

## control plane

- each cluster has a control plane that runs services that manage the cluster
  - control plane nodes
  - etcd
- determines when tasks are schedule and where they should be routed to
- make global dicisions for the cluster, as well as deteting and responding to cluster events

### etcd

- the core persistence layer for k8s
- this is where the critical cluster data and state are stored

### control plane nodes

- manage the worker nodes in the data plane and the pods in the cluster
- a node can be a virtual or physical machine, depending on the cluster
  - every node has a container runtime (e.g. docker/containerd) to run pods
- each node is managed by the control plane and contains services necessary to run pods

#### kube-scheduler

- mechanism for selecting nodes for newly created containers to run on
- runs a series of filters to exclude ineligible nodes for pod placement
  - volume filters: volume requirements and constraints
  - resource filters: e.g. cpu, memory and networking
  - topology filters: scheduling constraints set at the node/pod level
  - prioritization: selection of container instances for placement

#### kube-controller-manager

- runs bg threads that detect and respond to cluster events

#### kube-cloud-controller

- interacts with the underlying cloud provider

#### kube-apiserver

- exposes the k8s api and is the frontend for k8s control plane
- handles all communication from the cluster to the control plane
  - through the API server to kubelete
- none of the other control plan components expose remote services
- scales horizontally

## data plane

- k8s runs workloads by grouping containers into pods and assigning those pods to run on nodes

### worker nodes

- worker nodes host pods that are the components of the application workload
- this is where your tasks are run
- application nodes
  - this is your normal container, and can be arbitrarily configured as long as it abides by the k8s api
    - cloud-native architecture across microservices in multiple containers
    - legacy monoliths in one big containers
    - linux, (fk) windows OS
- api nodes
  - the k8s API always runs on linux nodes, regardless of how you configure the application nodes

#### kube-proxy

- networking mechanism: maintains network rules on the host and performs connection forwarding if required

#### container runtime

- e.g. docker/containerd

#### kubelet

- the primarty agent that runs on worker nodes
- ensures that the right containers are running a pod and performs health checks

### pods

- the basic building block within k8s for deployment, scaling and replication
- manages 1/more groups of colocated ephemeral containers
  - every container belongs to a pod, typically one-to-one,
    - you can deploy many containers to a single pod and they will all share the same virtual env, network address, and can communicate over localhost
    - you cannot split containers ina pod across nodes
  - pods inturn are generally managed by other k8s objects (e.g. deployments)
- a unit of compute; basic building block of k8s;
  - runs on a single node in a cluster
  - k8s manages the pod, but not the container
    - instead it passes the responsibilty of container management to the container runtime installed on the node, e.g. docker/containerd/etc
- state
  - virtual ip: managed by k8s

#### containers

- everything you know about docker goes here, so we'll keep it k8s specific
- containers are distributed to nodes in the cluster and communicate using standard network (UDP & TCP, ICMP not supported)

#### PodSpec file

- specification for how to run containers

#### volumes

- applications in a pod have access to shared volumes
- facilitates data sharing within the pod and persistence of data across container restarts
- types
  - ephemeral: when a pod ceases to exist, k8ds destroys the volume
  - peristent: lifecycle is independent of any individual pod that uses it
    - backed by storage subsystems independent of cluster nodes

##### storage class

- automates persistent volume management within a k8s cluster
  - used by admins to present persistent storage options to cluster users
- Container Storage Interface: CSI: api standard for exposing arbitrary block and file storage systems to containerized workloads on container orchastration systems like k8s
  - e.g. EBS and EFS have CSI drivers to interacting with the each aws service

##### persistent volumes PV

- similar to ephemeral volumes but has a lifecycle independent of any individual pod

##### persistent volume claim PVC

- a request for storage by a cluster user
  - total storage
  - kind of storage: the storage class
  - performance

### services

- a logical collection of pods and a means to access (north-south, east-west) them
  - provides a constant IP addr and comms port as an entry point to the pods it fronts
    - its futile to integrate with an ephemeral pod as they scale in/out
- the service is always updated with its associated pods
  - theres no need for pods to track other pods

#### ClusterIP

- creates a static ip addr that maps to its pods
- only available internall within a cluster

#### NodePort

- exposed on each node using a static port accessible outside the cluster
- can be accessed via the service by requesting nodeip:nodeport
- internally it connects to the clusterip service

#### LoadBalancer

- exposed externally with the cloud providers load balancer
- extends the nodeport service by adding a load balancer in front of all nodes
  - is also accessible outside the cluster
- connects to the both the ClusterIP and NodePort service

#### ingress objects

- exposes HTTP/S routes from outside the cluster to your services and defines traffic rules
- helps reduce the number of load balancers you use

#### ExternalName

- maps an internal ip addr (clusterip) to an external DNS name
  - makes it looks like a resource is internal to your cluster, but its really external
- useful when your planning to migrate a service into a cluster at a later point in time
  - but dont want to have your routing change
  - e.g. an external database

### workloads

- built-in apis for declarative management of pods as workloads

#### deployments

- owns and manages replicasets or individual pods
- you describge a desired state in the deployment, and the the deployment changes the actual state of the cluster

#### ReplicaSet

- ensures that a specific number of pod replicas are running at any given time

#### StatefulSets

#### DaemonSet

#### Jobs

#### ReplicationController

### namespaces

- a virtual cluster that is backed by the same physical cluster
- physical clusters can have resources with the same name as long as they are in different namespaces
  - useful when you have multiple teams/proejcts using the same clsuter

### ConfigMap

- an api object that stores nonconfidential data as key-value pairs used by other k8s objects, like pods
- enables you to separate configuration data from application code

### secrets

- storage for all confidential/secret data
- make sure they are encrypted

## custom resources

- created by extending the k8s api
- coudl be a new object like a service mesh, or a combination of native k8s resources

### Custom Resource Definition

- how you define new objects

### custom controllers

- controls custom resources
- operators: custom controllers used to automate the management of custom resources in a cluster
  - always use custom controls isntead of manually updating objects

## application manifests

- IaaC adhering to the k8s api; defines one of the kubernetes objects
