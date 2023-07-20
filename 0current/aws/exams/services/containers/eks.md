# elastic kubernetes service (EKS)

- start, run and scale kubernetes without installing, operating or maintaing an k8s control plane
- managed container orchestration service for deploying, managing and scaling k8s apps in the cloud/on premise

## my thoughts

- using fargate is by far the most user friendly approach, especially when considering upgrades

## links

- [landing page](https://aws.amazon.com/eks/?did=ap_card&trk=ap_card)
- [user guide](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
- [gettings tarted](https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html)
- [horizontal pod scaler](https://docs.aws.amazon.com/eks/latest/userguide/horizontal-pod-autoscaler.html)
- [autoscaling](https://docs.aws.amazon.com/eks/latest/userguide/autoscaling.html)
- [storage](https://docs.aws.amazon.com/eks/latest/userguide/storage.html)
- [control plane logging](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html)
- [managed nodes update behavior](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-update-behavior.html)
- [updating clusters](https://docs.aws.amazon.com/eks/latest/userguide/update-cluster.html)
- [updating managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/update-managed-node-group.html)
- [managing coredns addons](https://docs.aws.amazon.com/eks/latest/userguide/managing-coredns.html)
- [eks workshop](https://www.eksworkshop.com/)

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

- use the pricing calculator
- cost structure
  - compute resources: make up the majority of the cost
    - depends on
      - which compute resurces are running in the cluster (EC2 vs fargate)
        - you should choose the appropriate instance categories:
          - on-demand
          - savings plan/reserved instances
          - spot/fargate spot
      - rightsizing and reducing the waste of underutilized compute capacity
  - networking services: requires a variety of networking and CDN services
  - eks cluster control plane: the smallest portion of the overall EKS cost
    - 0.10 per hour for each EKS cluster and any resources used
      - fargate: pricing based on vCPU and memory resources used rounded up to the nearest second with minimum of 1 minute

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

#### networking

- communication generally falls within one of these domains
  - interpod communication between containers
    - via ingress methods specific to EKS
    - containers in a pod share a linux namespace and comms over localhost and do not require a NAT
    - within k8s networking, a single ip addr is shared across all containers within the network
  - east-west between pods on the same node, north-south across pods on different nodes
    - intrahost communication: the host node has a distinct namespace from its pods
      - each host namespace has its own routing table
      - the podnamespace and the hostnamespace are connected via a Linux virtual Ethernet (veth) device
        - a pair of veths creates a tunnel between the default host namespace and the pod namespace
          - pod-to-pod comms in the host happens throught his veth tunnel
      - each node is allocated a network range for containers and each pod gets an IP addr in that range
        - this allows containers on the same host to comms
    - interhost communication: EKS integrates amazon VPC networking into k8s through amazon VPIC CNI plugin for k8s
      - see the [vpc markdown file](../networkingContentDelivery/vpc.md)
  - ingress connections from outside the cluster
- k8s services: the native service objects solves the issue of ephemeral ip addrs as pods scale in/out
  - isntead of interacting with an ephemeral pods IP addr, use the persistent service ip addr
  - services are updated in near realtime with the pod status and can load balance traffic

##### AWS Load Balancer Controller

- a controller that manages ELB for a k8s cluster
  - see [markdown file](../networkingContentDelivery/elasticloadbalancing.md)

#### add-ons

- extend the operational capabgilities of an EKS cluster
- are not specific to any one application
  - observability agents
  - k8s drivers: enable the cluster to interact with underlying AWS resources for networking, compute and storage

##### default addons

- amazon VPC CNI
- kube-proxy
- coredns
- maintainence and upgrades: depends on they were implemented
  - cluster created using console, eksctl + configuration file
    - default eks addons are automatically installed and are managed by aws
    - you can still use the same tools to maintain and upgrade
  - cluster created using eksctl without a config file or any other tool
    - the default addons are self managed and dont appear in the aws console
      - you can convert them to managed by manually reinstalling using the appropriate methods
    - use the kubectl cli to main and upgrade them directly in the cluster

##### third party addons

- e.g. ingress controllers, ci/cd, monitoring, etc
- installed and configured by you
- maintenance and upgrades
  - you must identify all the agents, operatings and services that are compatible with the cluster version
    - validate you're upgrading components in the correct order
  - generally you should test upgraded versions with the cluster version
  - k8s minor releases often make chagnes to built-in APIs, thus any third party addons must be reviewed

#### upgrades

- kew k8s versions can introduce signicant changes, even for minor versions
- upgrading an EKS cluster is a nontrivial task requiring careful planning
  - what is the specific benefit to upgrading to from this to that version?
  - who is responsibile for completing the upgrade?
  - what downstream components (e.g. nodes, addons) will also need to be upgraded?
  - in what order will downstream dependences need to be upgraded?
  - what impact will there be to application SLAs during the upgrade?
  - impact analysis: do any applications in the ecosystem use k8s apis?

##### upgrade process: control plane

- api server nodes
  - eks launches new api server nodes with the upgrade k8ds version to replace existing ones
  - eks peforms standard infrastructure and readiness health c hecks for network traffic on new nodes to verify they are working as expected
- automatic rollback
  - if any checks fail, EKS reverts the infrastructure deployment
  - running applications are not affects and the original cluster is not left in an unrecoverable state
  - EKS regularly backs up all managed clusters and mechnisms exist to recover clusters if necessary
- possible service interruptions
  - EKS requires two to three free IP addrs from teh subnets provided when you created the cluster
  - the upgrade may fail if
    - required IPs are not available
    - subnets/security groups provided during cluster created have been deleted

##### upgrade process: data plane

- upgrade nodes and k8s add-ons
  - EKS does not modify any running applications, cluster worker nodes, EKS addons or k8s addons when you upgrade the clusters control plan
  - YOU must complete the necessary tasks to complete the cluster upgrade
- self managed nodes: upgrade via AWS cloudformation templates, eksctl and kubectl
  - update strategies
    - migrate to a new node group: create a new node group and migrate pods to it
      - the recommended strategy because its more graceful
      - the migration process drains the old nodes after a new stack is ready to accept the existing pod workload
        - suspect scheduling on old node groups
        - start application migration:
          - using flagger for caanary deployments with a fallback mechanism in place
          - reduce risk by pushing one app a time to the new nodes and verify
    - update existing node group: update the cloudformation stack to use the new AMI
- managed node groups: upgrade via console or eksctl; eks automatically does this for you
  - eks creates a new EC2 launch template version for the ec2 auto scaling group associated with the node group
    - the new template uses the target AMI for the upgrade
  - ec2 auto scaling group
    - is upgraded to use the latest launch template with the new AMI
    - max & desired size are incremented to ensure that new ec2 instances are created along with the existing ones
    - launches a new instance with the new AMI to satisfy the increased size of the node group
  - EKS checks the nodes in the node group for the `eks.amazonaws.com/nodegroup-image` label
    - cordons all nodes in the node group that are not labeled with the latest AMI id
      - this prevents already upgraded nodes from a previous upgrade failure from being cordoned
  - EKS randomly selects a node in the node group and sends a termination signal to the EC2 auto scaling group
  - EKS sends a signal to drain the pods from teh node
    - once drained, the node is terminated
    - this step is repeated until all nodes are using the new AMI version
  - EC2 auto scaling group max & desired size are decremented to their pre-upgrade values
  - update strategies
    - rolling update: respects the clusters `PodDisruptionBudgets` setting
      - the update fails if EKS is unable to gracefully drain the pods that use this setting
    - force update: does not respect the clusters `PodDisruptionBudgets` and forces node restarts
- fargate: no upgrades are required; the underlying infra is upgraded automatically

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

#### storage

- EKS uses persistent volumes (PV), persistent volume claims (PVC) and storage classes to provide persistent storage for k8s clusters
- a Container Storage Interface (CSI) driver is required to allow k8s cluster access to a desired storage provider
  - both EBS and EFS have CSI drivers which run as containerized apps in EKS clsuter nodes
  - the driver makes the necessary aws apy calls to their respective AWS stoage service on behalf of a storage class object

### deployments

- for dev/test you can use kubectl

#### cicd with aws services

- general workflow
  - commit code to a codecommit repo
  - codepipline automatically detcts changes and kicks off your pipeline
  - codebuild
    - run tests
    - builds packages as a docker image with updated image tag
  - docker image is pushed to ECR
  - codepipeline invokes a lambda fn to prepare the built and tested artifacts for deployment to a k8s cluster
    - lambda will pull the appropriate image based on the image tag
    - lambda invokes the k8s api to deploy/update the app in the cluster once the deployment manifest update is completed

#### cicd with opensource tools

- general workflow
  - commit code to github
  - github action triggers (or e.g. jenkins)
    - test code
    - build container image with new tag
  - push new image to nexus (or e.g. harbor)
    - run vulnerability and security scans
  - spinnaker pipeline activates when images are ready for deployment
    - spinnaker stages manage the deployment process
      - one stage includes using help to create the k8s manifest for deploying to the eks cluster
    - spinnaker tests each deployment in each env (dev, stage, prod) and on success auto deploys to eks cluster

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
  - deployments
  - statefulset
  - daemonset
  - job
- scaling
  - cluster autoscaler: setting max, min and desired instances within an ec2 auto scaling group
- networking: interpod communication handled via VPC integration
- storage: generally EBS or EFS, but other options are available
- deploying applications
  - kubectl: suitable for testing/dev; high administration overhead
  - cicd with aws services: codecommit > codepipeline > codebuild > ECR, lambda > k8s
  - cicd with opensource: the world is yours
- monitoring: a combination of cloudwatch + opensource tools
- add-ons maintainence depends on how they were implemented
- upgrades
  - control plane: is managed for you, but careful planning is still required
  - data plane: depends if you're using self managed or managed worker nodes
    - still a heavily involved process

## integrations

### ELB

- for load distribution
- [see markdown](../networkingContentDelivery/elasticloadbalancing.md)

### IAM

- for role-based access control
- [see markdown](../securityIdentityCompliance/iam.md)

### VPC

- for pod networking
- [see markdown](../networkingContentDelivery/vpc.md)

### ECS

- for clusters and task definitions
- [see markdown](../containers/ecs.md)

### ECR

- image repository
- [see markdown](../containers/ecr.md)

### storage

- [EBS](../Storage/elasticblockstore.md)
  - application workloads deployed into a k8s statefulset object
- [EFS](../Storage/efs.md)
  - for sharing application data across worker nodes
  - pods running on fargate automatically mounts an EFS file system without the need for a CSI driver install/config

### analytics

- [cloudwatch: log insights & container insights](../mgmtGovernance/cloudwatch.md)
  - you can turn on control plane logging for the cluster as well
- [grafana: dashboards](../mgmtGovernance/grafana.md)
- [prometheus: monitoring](../mgmtGovernance/prometheus.md)
- [opensearch: log analysis](../analytics/opensearch.md)
