# elastic kubernetes service (EKS)

- start, run and scale kubernetes without installing, operating or maintaing an k8s control plane
- managed container orchestration service for deploying, managing and scaling k8s apps in the cloud/on premise

## my thoughts

## links

- [landing page](https://aws.amazon.com/eks/?did=ap_card&trk=ap_card)
- [user guide](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
- [gettings tarted](https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html)
- [horizontal pod scaler](https://docs.aws.amazon.com/eks/latest/userguide/horizontal-pod-autoscaler.html)
- [autoscaling](https://docs.aws.amazon.com/eks/latest/userguide/autoscaling.html)

## best practices

### anti patterns

## features

- creates and manages the k8s control plane across multiple AZs to avoid a single point of failure
  - availability and scalability of the api services
  - etcd persistence layer for each cluster
- reduce costs with efficient compute resource provisioning and automatic k8s application scaling
- more secure k8s environment automatically applied to each clusters control plane
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

### clusters

- consist of a control and data plane
- general workflow
  - ensure your AWS account is secured and follows best practices
  - configure a VPC for the cluster
  - create the EKS cluster

#### api

- control plane: use the eksctl tool to interact with the eks api
  - [see the markdown file](../devtools/cli-eksctl.md)
- data plane: use kubectl to interact with the k8s api (unless using managed node groups)
  - [check this file](../../../../../linux/bash_cli_fns/k8s.sh)

#### authnz

- authN: every service/user accessing eks/k8s resources must be identified
  - if authN failes all further connection & communication is denied
- authZ: after authN is validated, check if the principal is authZ for the requested action
- aws api: IAM handles authNZ and behaves like all other aws services
- k8s api:
  - authN: eks uses IAM users to authN to a k8s cluster
    - both IAM and EKS are integrated services managed by AWs
    - addresses issue of k8s not providing end-user authN
  - authZ: uses native k8s RBAC for all permissions for interacting with the eks clusters k8s api
- general workflow
  - kubectl: all cmds sends an API request to k8s api and attaches your IAM identity with the request
  - k8s: verifies your identity with IAM
  - IAM: responds with a token to the k8s api server
  - k8s: api server checks its internal RBAC mapping and confirms if the user related to the token has authZ for the request
  - k8s: the api server processes the requests and responds to the kubectl client with success/failure data

#### high availability

- k8s automatic scaling based on k8s metrics
  - CA: cluster Autoscaler; node-level in/out
    - adjusts the number of nodes in a cluister when pods fail to launch
      - e.g. due to lack of resources, underutilization, or rescheduling onto other nodes
      - accomplished by adding your worker nodes to ec2 auto scaling groups
        - e.g. using eksctl to deploy a cluster with managed node groups
  - HPA: horizontal pod autoscaler: pod-level in/out
    - scales services in/out based on CPU utilization/other metrics defined via the k8s metrics server or amazon cloudwatch
  - VPA: vertical pod autoscaler: pod-level up/down
    - scales pod resources up/down (cpu/mem reservations) satisfy application requirements
    - improves cluster resource utilization and free up CPU and memory for other pods

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
- shared responsibility model
  - your responsibility
    - VPC configuration and network policies
    - IAM and RBAC configuration
    - security: pod, runtime, network and code in containers
    - Data plane:
      - os,kubelete and AMI configuration
      - worker node scaling
      - eks cluster configuration and addon-ons
      - container images and source code
      - customer data
    - aws responsibility
      - aws resource infrastructure necessary for security and reliability
      - control plane nodes and services
        - api server
        - etcd
        - scheduler
        - controller manager

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
- shared responsibility model
  - same as self managed except
    - AWS responsbility
      - os, kubelete, and AMI Configuration
      - common vulnerabilities and exposures (CVEs) and security patches on managed node groups
    - your responsibility
      - building and deploying patched versions of custom AMIs

#### Fargate

- requires a fargate profile to use integrate with eks
- shared responsbility model
  - same as managed node groups except
    - aws responsibility
      - worker node scaling
      - security of the underlying container runtime for pods

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

## considerations

- permissions: see [markdown for rbac, cluster and node iam roles](../securityIdentityCompliance/iam.md)
- networking: see [markdown for vpc](../networkingContentDelivery/vpc.md)
- creating clusters
  - eksctl: create a cluster with 1 cmd, check [the markdown file](../devtools/cli-eksctl.md)
  - management console: you still need the cli to complete some steps
  - aws cli: offers the most potential for customization, but has the most complexity as well
- cluster configuration:
  - compute: for self managed, managed and fargate data plane node groups
    - details like nodes, k8s labels and taints, AMIs, instance types, disk size, etc
  - networking: vpc, subnets, security groups, etc
    - by default the k8s api server is public, but secured via IAM and native k8s RBAC
      - you can disable this via configuration
  - addons: operational software for k8s
    - e.g. coredns, kub-proxy, vpc-cni, etc
    - you can add, remove and modify
  - authentication: how user acces is managed
    - you can associate OIDC identity providers for each cluster
  - logging: cluster monitoring
    - by default control plane logging is disabled, but you can enable specifc log types
      - api server
      - audit
      - authenticator
      - controller manager
      - scheduler
  - tags
  - secrets encryption: you have to enable it and a KMS key will be provisioned for the cluster
- workload types
  - deployment
  - stateful set
  - daemon set
  - job
- scaling
  - cluster autoscaler: setting max, min and desired instances within an ec2 auto scaling group

## integrations

### ELB

- for load distribution

### IAM

- for role-based access control

### VPC

- for pod networking

### ECS

- for clusters and task definitions

### ECR

- image repository
