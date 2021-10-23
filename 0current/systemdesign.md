# TLDR

- find where the old version of this file exists and copy everything here

## links

- [haproy layer 4 & 7 proxy mode](https://www.haproxy.com/blog/layer-4-and-layer-7-proxy-mode/)
- [OSI modal explained](https://www.networkworld.com/article/3239677/the-osi-model-explained-and-how-to-easily-remember-its-7-layers.html)

## terminology

- UAT: user acceptance testing

- self serve infrastructure: instead a of a global operations team managing the entire infrastructure, each specific team are responsibile for their devstack via tools provided by the central operations team
- software defined netowrking: SDN: provides more control to operators & developers and allows netowrking to better support the applications urnnin on top
  - most have a control layer and infrastructure layer

## key goals

- redundancy
- fault-tolerance
- single dashboard view
- streamlined way to promote changes between environments and across domains
- interface to securely store, share and apply variables across environments and resources

## key people & roles

you cant talk about system design without talking about the people involed

- central IT: responsible for defining common infrastructure practices, enforcing policy across teams and maintaining shared services

- organization architect: define how global infrastructure is divided and delegated to the teams within the business unit
  - enables connectivity between resources, applications, and workspaces by defining the APIs each one must expose, and sets organization-wide variables and policies

- application, resource and workspace owners:
  - responsibile for owning & managing each *thing*, e.g. the health/status, change lifecycle through dev, UAT, staging and production
  - main approver of changes to production within their domain

- contributor: submits changes to resources/applications/domains/etc by making updates to the underlying code/infrastructure
  - usually dont have authority to make changes to production, but can to dev, UAT and staging
  - can edit a subset of global application variables and/or apply personal variables to non-production environments for testing

## components

various components exist when designing a system, understanding the specific components in isolation and planning how they should holistically work together to meet business requirements is the main goal of system design

- application layer
  - frontend:
  - backend:
    - api servers
    -
- database layer
- caching servers
- routing meshes
- load balancers
- observability
  - the ability to monitor signals, and which signals are important enough to be monitored

- monitoring
  - single dashboard to view the status and compliance of all infrastructure and deployed resources
    - analize, identify, and quickly fix misconfigurations and malfunctions

- storage
  - public
  - private (e.g. API keys, SSL Cert Pairs)
- discovery
- messaging
- version control
- CI
- CD
- provisioning
- access control
- DNS

## multi-tier applicaitons

- N-Tier
  - 2-tier:
    - examples
      - pool of web servers with a dtabase tier

## microservices

## environments

- local
- cloud
- multi-cloud
- hybrid-cloud
