# elastic kubernetes service (EKS)

- start, run and scale kubernetes without installing, operating or maintaing an k8s control plane
- managed container orchestration service for deploying, managing and scaling k8s apps in the cloud/on premise

## my thoughts

## links

- [landing page](https://aws.amazon.com/eks/?did=ap_card&trk=ap_card)
- [user guide](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)

## best practices

### anti patterns

## features

- creates and manages the k8s control plane across multiple AZs to avoid a single point of failure
  - availability and scalability of the api services
  - etcd persistence layer for each cluster
- reduce costs with efficient compute resource provisioning and uatomatic k8s application scaling
- more secure k8s environment autoamtically applied to each clusters control plane
- automate tasks like patching, node provisioning and updates
- opt-in managegement of elements of the data plane
- tightly integrates with other aws services and features: ELB, IAM, VPC
- runs native, upstream k8s and is certified k8s conformant: so all existing k8s tools works with the eks api

### pricing

- 0.10 per hour for each EKS cluster and any resources used
  - fargate: pricing based on vCPU and memory resources used rounded up to the nearest second with minimum of 1 minute
- use the pricing calculator

## terms

## basics

### control plane

- consists of atleast two api server nodes and three etcd nodes across three availability zones
- eks automatically detects and replaces unhealhty control plane nodes

## considerations

## integrations

### ELB

- for load distribution

### IAM

- for role-based access control

### VPC

- for pod networking
