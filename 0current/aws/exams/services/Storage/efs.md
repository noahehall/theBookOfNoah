# service name

- serverless, elastic file system for any AWS compute service

## my thoughts

## links

- [landing page](https://aws.amazon.com/efs/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

- shared file system for ec2, acs, eks, fargate, lambda
- persistent storage for content management systems, machine learning and big data analytics workloads

### pricing

## terms

## basics

## considerations

## integrations

### EKS

- integrates with k8s via an EFS CSI driver
- use cases
  - application workloads requiring replicas to span across worker nodes and access the same application data
- general workflow
  - a k8s storage class backed by EFS will direct the EFS CSI driver to make calls to the appropriate aws apis to create an access point to a preexisting file system
  - when a peristent volume claim (PVC) is created
  - a dynamically provisioned peristent volume (PV) will use the access point for access to EFS file system then bind to the PVC
