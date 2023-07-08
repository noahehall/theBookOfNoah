# Elastic Block Store (EBS)

- high performance persistent network attached block storage for EC2 instances
- enables you to create loosely coupled reusable & configurable EC2 storage

## my thoughts

- like attaching a USB drive to a laptop

## links

- [landing page](https://aws.amazon.com/ebs/?did=ap_card&trk=ap_card)
- [intro](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
- [faw](https://aws.amazon.com/ebs/faqs/)

## best practices

- required for immutable infrastructure with EC2s
  - you can keep app state on the EBS and immutable server state on the EC2 instance store
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
- high availability, replication in/across AZs, 5 9s durability
- build SAN in the cloud for i/o intensive apps
- run relational/nosql database
- resize clusters for big data analytics engines

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

- redundantly stored incremental backups

### volume types

### SSD backed

### HDD backed

### scaling volume size

- you can scale an ebs volume up to the max size of 64 tebibytes (TiB)
- increase volume size: a provisioned EBS volume size can be increased via settings
- attach multiple volumes: during/after EC2 instance creation you can attach multiple EBS volumes

## considerations

- volume type: SSD vs HDD

## integrations

- EBS can only be attached to EC2, so integrations will be limited

### AMIs

- EBS-backed AMIs: the root instance launched from an AMI is typically an EBS volume
