<https://www.google.com/search?q=architectural+patterns>
  be sure to set the time to last 1 year
<https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html>

# TLDR

- find where the old version of this file exists and copy everything here

## links

- [haproy layer 4 & 7 proxy mode](https://www.haproxy.com/blog/layer-4-and-layer-7-proxy-mode/)
- [OSI modal explained](https://www.networkworld.com/article/3239677/the-osi-model-explained-and-how-to-easily-remember-its-7-layers.html)
- [terraform docs](https://www.terraform.io/docs/cloud/guides/recommended-practices/part2.html)
  - generally the entire terraform doc is dope af for an entrance into system design
- [aws well-architected framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [aws architecture center](https://aws.amazon.com/architecture/)
- [azure architecture patterns](https://docs.microsoft.com/en-us/azure/architecture/browse/)
- [azure architecture center](https://docs.microsoft.com/en-us/azure/architecture/)
- [GCP patterns for scalablee and resilient apps](https://cloud.google.com/architecture/scalable-and-resilient-apps)

### tools

- [AWS well architected tool](http://aws.amazon.com/well-architected-tool/?ref=wellarchitected-wp)
  - service in the cloud that provides a consistent process for you to review and measure your architecture usig the AWS well-architected framework

## terminology

- UAT: user acceptance testing
- VCS: version control system, e.g. git
- CAB: change advisory board
- GDPR:
- IaaS: infrastructure as a service
- FaaS: functions as a service (serverless)

- self serve infrastructure: instead a of a global operations team managing the entire infrastructure, each specific team are responsibile for their devstack via tools provided by the central operations team
- software defined netowrking: SDN: provides more control to operators & developers and allows netowrking to better support the applications urnnin on top
  - most have a control layer and infrastructure layer

- topology
  - flat topology
  - tree hierarchy

## key goals

- redundancy
- fault-tolerance
- single dashboard view
- streamlined way to promote changes between environments and across domains
- interface to securely store, share and apply variables across environments and resources
- a system where contributors can efficiently
  - build, manage and scale platform architecture
  - respond to and address alerts regarding infrastructure
  - configure and manage service discovery
  - setup and manage service level performance metrics
  - network tasks like configuring a VPC, managing IP addresses/creating ingresses for applications
  - connecting workloads across multiple cloud providers, regions and/or multiple k8s clusters
  - connect onprem and cloud networks
  - various security tasks
    - hardening infrastructure, policies and governance
    - manage and administer IAM

    -

## key people & roles

you cant talk about system design without talking about the people involed

- central IT: responsible for defining common infrastructure practices, enforcing policy across teams and maintaining shared services

- organization architect: define how global infrastructure is divided and delegated to the teams within the business unit
  - enables connectivity between resources, applications, and workspaces by defining the APIs each one must expose, and sets organization-wide variables and policies

- solutions architect (e.g. aws)
  - architect solutions across a wide variety of business verticals and use cases
  -
- application, resource and workspace owners:
  - responsibile for owning & managing each *thing*, e.g. the health/status, change lifecycle through dev, UAT, staging and production
  - main approver of changes to production within their domain

- contributor: submits changes to resources/applications/domains/etc by making updates to the underlying code/infrastructure
  - usually dont have authority to make changes to production, but can to dev, UAT and staging
  - can edit a subset of global application variables and/or apply personal variables to non-production environments for testing

## key questions

before you can design a system, you need to understand the business requirements, existing infrastructure, and capabilities of the IT determine to manage and iterate

- 4 levels of technical maturity: example for automation & infrastructure as code (terraform)
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

  - collaborative infrastructure as code
    - users across the organization can safely provision infrastructure, without conflicts and with clear understanding of their access permissions
    - expert users can produce standardized infrastructure templates, and beginners can consume those to follow infrastructure best practices
    - access controls per application-environment pair helps committers and approvers on workspaces protect production environments
    - functional gorups that dont directly develop infrastructure code have visibility into infrastructure status and changes

- determining the current infrastructure configuration and provisioning practices
  - how do you currently manage infrastructure?
    - through a UI/CLI ?
    - reusable cli scripts?
    - infrastructure as code tool?
      - e.g. terraform / cloudformation
    - general-purpose automation famework?
      - e.g. jenkins + scripts / jenkins + teraform

  - what topology is in place for your service provider acocunts?
    - flat structure, sigle acocunt: all infra provisioned within the same account
    - flat structure, multiple acocunts: infrastructure is provisioned using different infrastructure providers with an account per environment
    - tree hierarchy: features a master billing account, audit/security/logging account, and project/environment spcific infrastructure accounts

  - how do you manage the infrastructure for different environments
    - manual: no configuration managent in place
    - siloed: each application team has its own way of managing infrastructure
    - IaaC with different code base per environment: leads to untracked changes from on environment ot the other if there is no change-promotion within environments
    - IaaC: with a single code base and different variables for each environment
      - all resources, regardless of environment, are provisioned with the same code, ensuring that changes promote through your deployment tiers in a predictable way

  - how do teams collaborate and share infrastructure configuration and code
    - N/A: IaaC is not used
    - locally: infrastructure configuration is hosted locally and hsared via email, documents, spreadsheets
    - ticketing system: code shared through journal entries in change requests/proboem/incident tickets
    - centralized without version control:
      - i.e. changes are not versioned and rollback are oly possible through restores from backups/snapshots
    - through version control system (e.g. git)

  - do you use reusable modules for writing infrastructure as code?
    - everythin is manual
    - no modularity: e.g. as one-off configurations that users usually dont share/reuse
    - teams use modules but dont share across teams
    - modules are shared organization-wide
      - e.g. similar to shared software libraries, a module for a common infrastructure pattern can be updated once and the entire organization benefits

- whats your current change workflow?
  - how do you govern the access to control changes to infrastructure
    - access is not restricted/audited: everyone has flexibility to create, change and destroy all infrastructure
    - access is not restricted, only audited: easier to track changes after the fact, but doesnt proactively protect stability
    - access is restricted based on service provider account level: team members have admin access to different accounts based on the env they are responsible for
    - access is restricted based on user roles: all access is restricted based on user roles at provider level

  - what is the process for changing existing infrastructure?
    - manual changes by remotely logging into machines
    - runtime configuration management tools: lets you quickly iterate but generaly dont produce static artifacts so the outcome isnt 100% verifable or repeatable
      - e.g. puppet, chef, etc
    - immutable infrastructure: can be replaced for every dpeloyment (rather than updated in place) using static deployment artifacts
      - maintaining sharp boundaries between ephemeral layers and state-storing layers, immutable infrastructure can be much easier to test, validate, and rollback
      - e.g. images & containers

  - how do you deploy applications?
    - manually (ssh, rsync, etc)
    - with scripts (fabric, capistrano, etc)
    - configuration management tool (chef, puppet, ansible, salt, etc) or by passing userdata scripts into cloudformation/terraform
    - with a scheduler: kuernetes, nomad, mesos, swarm, ECS, etc

- whats your current security model
  - how are infrastructure service provider credentials managed?
    - hardcoded in source
    - infrastructure provider roles (e.g. ec2 instance roles for AWS)
      - enables granting machine permission to make API rquests without giving them a copy of your actual credentials
    - secrets management solution (vault, keywish, etc)
    - shortlived tokens: most secure methods since temp credentials you distribute expire quickly and difficult o epxloit
      - most complex implementation as well

  - how do you control users and objects hosted by infrastructure providers (e.g. logins, access and role control, etc)
    - commmon admin/superuser account shared by engineers
    - indiviudal named user accounts: doesnt scale very well as the team grows
    - LDAP and/ active directory integration: requires additional architectural considerations to ensure that the providers access into your corp network is configured correctly
    - single signon through OAuth or SAML
      - providers token-based access into your infrastructure provider while not requiring your provider to have access to your corporate network

  - how do you track changes made by different users in your infrastructure providers env
    - no logging in place
    - manual changelog: users manually write down their changes in a shared document
    - logging all API calls to an audit trail/log management service (e.g. cloudtrail, loggly, splunk)

  - how is access of former eployees revoked
    - immediately, manually
    - delayed, as part of the next release
      - e.g. when your release process is extremely coupled and most security changes pass through a CAB meeting in order to be executed in production
    - immdiately, writing a hot-fix in the infrastructure as code
      - the most secure option and should occur before employee leaves the building

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

- tracing/traceability

- change control system
  - formal process to coordinate and approve changes to a product/system
    - minimize disruption to services
    - reducing rollbacks
    - reducing overall cost of changes
    - preventing unecessary changes
    - allowing users to make changes without impacting changes made by others

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

## environments

- local
- cloud
- multi-cloud
- hybrid-cloud

-

## architectural patterns

- the process for reviewing an architecture is a constructive conversation about architectural decisions, and is not an audit mechanism

-

### multi-tier applicaitons

- N-Tier
  - 2-tier:
    - examples
      - pool of web servers with a dtabase tier

### microservices
