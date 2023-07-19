# elastic kubernetes service (EKS)

- start, run and scale kubernetes without installing, operating or maintaing an k8s control plane
- managed container orchestration service for deploying, managing and scaling k8s apps in the cloud/on premise

## my thoughts

## links

- [landing page](https://aws.amazon.com/eks/?did=ap_card&trk=ap_card)
- [user guide](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
- [gettings tarted](https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html)

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

### api

- control plane: use the eksctl tool to interact with the eks api
  - [see the markdown file](../devtools/cli-eksctl.md)
- data plane: use kubectl to interact with the k8s api (unless using managed node groups)
  - [check this file](../../../../../linux/bash_cli_fns/k8s.sh)

### control plane

- consists of atleast two api server nodes and three etcd nodes across three availability zones
- eks automatically detects and replaces unhealhty control plane nodes

### data plane

- your normal worker nodes, but EKS gives you three options
  - self managed nodes: pod & ec2, ec2 prices, 1:many host:pods, you have full access to the host
  - managed node groups: pod & ec2, ec2 prices, 1:many host:pods, ssh is allowed
  - fargate: pod, pod prices, 1:1 host:pods, no visible host

#### self managed nodes

- you are in complete control and responsible for managing worker nodes

#### managed node groups

- fully managed by aws: uses the api to start and managed ec2 instances that run containers for an eks cluster
- you can still inspect/modify all resources used in your aws account; generally with simple cmds
  - provisioning: deploy a managed node group using eks optimized AMIs
    - deploys into multiple AZs and backs them with an auto scaling group
    - you can change teh scaling parameters
  - managing: eks handles health checks for the managed node groups
    - notifies you of all issues: resources deleted, unreachable unavailable
    - you can retrieve logs from node-level SSH access, open source log routes, or cloudwatch
    - all node group events are recorded in cloudtrail
  - updating: eks handles the termination of nodes for rolling updates and keeps AMI & k8s version in sync
  - scaling: eks handles scaling of nodes, but you can still specifing the skaling parameters like k8s labels, aws tags, etc
  - tooling: use `eksctl` to provision managed node groups and NOT `kubectl`

#### Fargate

- requires a fargate profile to use integrate with eks

##### profiles

- determine how pods should be scheduled on fargate
- selectors: specify a namespace and labels for filtering matching pods

```jsonc
{
  "name": "fargate-myapprpfoile",
  "clusterName": "myapp",
  "podExecutionRole": "iam-role-xyz", // assigned to matchign pods AND the k8ds RBAC for authZ
  "subnets": "subnet-abcdefg", // pods will be launched into this subnet
  "selectors": [
    // only matching pods will be deployed to fargate
    {
      "namespace": "prod",
      "labels": {
        "stack": "nim-stack-of-course"
      }
    }
  ]
}
```

### clusters

- general workflow
  - ensure your AWS account is secured and follows best practices
  - configure a VPC for the cluster
  - create the EKS cluster

## considerations

## integrations

### ELB

- for load distribution

### IAM

- for role-based access control

### VPC

- for pod networking
