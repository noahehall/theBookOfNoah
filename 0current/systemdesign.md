bookmark: <https://www.google.com/search?q=architectural+patterns>
  be sure to set the time to last 1 year

<https://www.terraform.io/docs/cloud/guides/recommended-practices/part2.html>
  collaborative infrastructure as code

# TLDR

- find where the old version of this file exists and copy everything here

## links

- [haproy layer 4 & 7 proxy mode](https://www.haproxy.com/blog/layer-4-and-layer-7-proxy-mode/)
- [OSI modal explained](https://www.networkworld.com/article/3239677/the-osi-model-explained-and-how-to-easily-remember-its-7-layers.html)
- [terraform docs](https://www.terraform.io/docs/cloud/guides/recommended-practices/part2.html)
  - generally the entire terraform doc is dope af for an entrance into system design

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

## key questions

before you can design a system, you need to understand the business requirements, existing infrastructure, and capabilities of the IT determine to manage and iterate

- whats the level of technical maturity: example for automation & infrastructure as code (terraform)
  - manual
    - infrastructre is provisioned through a UI/CLI
    - configuration changes do not leave a traceable history, and arent always visible
    - limited or no naming standards in place

  - semi-automated
    - infrastructure provisioned thorugh a combination of UI/CLI, IaaC and scripts/config management
    - traceability is limited, e.g. different record-keeping methods used across the organization
    - rollbacks hard to achieve due to differing record-keeping methods

  - infrastructure as code
    - provisioned via a tool (e.g. Terraform)
    - provisioning and deployment processes are automated
    - infrastructure configuration is consistent, with all necessary details fully documented (nothing siloed in sysadmins head)
    - source files stored in version control to record editing history, and if necessary, rollback to older versions
    - configuration is split into modules to promote consistent reuse of organizations common architectural patterns

## components

various components exist when designing a system, understanding the specific components in isolation and planning how they should holistically work together to meet business requirements is the main goal of system design

- components can/should be global|differentiated across the organization

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

- tracing/traceability/change tracking

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
  - provisioned resources should be rollbackable

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
