# Elastic Container Registry (ECR)

- store share and deploy docker images
- fully managed docker container registry

## my thoughts

- docker hub for aws
- prefer github packages or docker hub for image storage

## links

- [landing page](https://aws.amazon.com/ecr/?did=ap_card&trk=ap_card)
- [lambda & SAM](https://aws.amazon.com/blogs/compute/using-container-image-support-for-aws-lambda-with-aws-sam/)

## best practices

### anti patterns

## features

- fully integrated with ECS and the docker CLI
- push/pull immutable images without managing/provisioning storage/servers
- manage image lifecycle policies, preserve latest archive the stale ones
- images are encrypted at rest with IAM based access controls

### pricing

- pay for data storage in both pub/priv repos and for data transformed in/out of priv repos

## terms

## basics

### architecture

- registry: docker registry provided to each account
- authorization token: the docker client uses teh auth token to authnz with the registry
  - pass the aws cli `get-login` response to docker
- repository: each repo contains a set of related images
- repository policy: authnz at the repo level
- image: can be pushed/pulled locally/with ECS

## considerations

## integrations

### EKS

- abcd
