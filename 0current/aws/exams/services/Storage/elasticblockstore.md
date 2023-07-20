# Elastic Block Store (EBS)

- high performance persistent network attached block storage for EC2 instances
- enables you to create loosely coupled reusable & configurable EC2 storage

## my thoughts

- perfect for persistent application data that requires block storage
- determine up front if you need multi-attach to share data across EC2s as it depends on volume type
- remember there is a size limit for ebs, unlike S3

## links

- [landing page](https://aws.amazon.com/ebs/?did=ap_card&trk=ap_card)
- [intro](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
- [faw](https://aws.amazon.com/ebs/faqs/)
- [eks: EBS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html)
- [eks: managing EBS CSI Addon](https://docs.aws.amazon.com/eks/latest/userguide/managing-ebs-csi-self-managed-add-on.html)
- [eks: EBS CSI driver github](https://github.com/kubernetes-sigs/aws-ebs-csi-driver)

## best practices

- required for immutable infrastructure with EC2s
  - you can keep app state on the EBS and server state on the EC2 instance store
  - the EBS life cycle isnt related to the EC2/instance store lifecycle
- ensure your taking regular snapshots, and removing old snapshots
- use cases
  - operating systems: boot and root volumes can be used to store an OS
  - databases: the storage layer fo a DB running on EC2 that will scaled with performance needs
  - enterprise applications: EBS provides high availability and durability for mission critical applicatins
  - big data analytics engines: data persistence, dynamic performance adjustments, and the ability to de/reatch volumes when resizing clusters

### anti patterns

## features

- designed for scaling high performance workloads
- high availability, replication in/across AZs, 5 9s durability: automatically replicated in its availability zone
- build SAN in the cloud for i/o intensive apps
- run relational/nosql database
- runtime flexible: modify volume type/size, IOPS configuration, resize clusters for big data analytics engines
- data persists and is not attached to EC2 lifecycle
- opt-in data encryption for all volume types

### pricing

- depends on the volume type
  - general purpose ssd: storage, iops, throughput, or regular volumes
  - provisioned IOPS ssd: storage, iops, or regular volumes
  - throughput optimized hdd: volumes
  - cold HDD: volumes
- snapshots also incur an additional charge
  - storage
    - standard
    - archive
  - restore
    - standard
    - archive
- theres additional costs for other operations
  - fast snapshot restore
  - direct apis

## terms

- SAN: storage area networks
- IOPS: input/output operations per second

## basics

- you need an EC2 instance in the same AZ to access data on an EBS volume
  - to associate the ebs with another ec2 instance
    - stop the current ec2 instance
    - detach the ebs volume
    - attach it to a different ec2 instance in the same AZ
  - this is a 1:M relationship: one ec2 can have multiple attached EBS volumes
- EBS multi-attach
  - some ec2 instance types and ebs configurations may allowing attaching more than 1 ec2 instance to a single ebs volume

### snapshots

- redundantly stored incremental backups:
  - new snapshots only track the blocks on the volume that have changed since the previous snapshot
  - backups are stored redundantly in multiple AZs using S3
- snapshots can be used to create new volumes in any AZ

### volume types

#### SSD backed

- designed for transactional workloads
- general purpose: balance of price and performance
  - types: gp3, gp2
- provisioned IOPS: high performance, low latency
  - types: io2 block express, io2, io1
  - supports multi attach

#### HDD backed

- throughput optimized: frequently accessed, throughput-intensive workloads
  - type: st1
- cold: low cost, less frequently accessed workloads
  - types: sc1

### scaling volume size

- you can scale an ebs volume up to a max size of 64 tebibytes (TiB)
- increase volume size: a provisioned EBS volume size can be increased via settings
- attach multiple volumes: during/after EC2 instance creation you can attach multiple EBS volumes

## considerations

- volume type: SSD vs HDD

## integrations

- EBS can only be attached to EC2, so integrations will be limited

### AMI

- EBS-backed AMIs: the root instance launched from an AMI is typically an EBS volume

### EKS

- integrates with k8s via an EBS CSI driver
- use cases
  - application workloads deployed into a k8s statefulset object
- general workflow
  - cluster user submits a peristent volume claim (PVC)
  - the EBS storage class calls the EBS CSI driver to allocate storage matching the PVC request
  - the EBS CSI driver makes aws api calls to create an EBS volume and attach it to the requested cluster node
  - on success: the persistent volume (PV) is allocated to the PVC
- EBS CSI Driver
  - must be deployed to AWS: e.g. via a helm chart or yaml manifest file
    - this shiz is hella involved, google how to do it when you need it
  - can be configured to use various EBS functionality
    - volume resizing
    - snapshots
    - etc
  - requires explicit permissions to access the AWS apis
    - you need to attach an IAM policy with the correct role attached to the CSI driver service account
      - you can do this via `eksctl`
