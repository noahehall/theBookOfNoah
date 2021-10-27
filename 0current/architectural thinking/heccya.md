<https://www.google.com/search?q=architectural+patterns>
  be sure to set the time to last 1 year

<https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-organization.html>
  Your teams need to have a shared understanding

<https://www.redhat.com/architect/5-essential-patterns-software-architecture>
  Layered pattern

<https://www.youtube.com/watch?app=desktop&v=kNv2PlqmsAc>
  grab all her references
  probably should be in the arhcitectural thinking doc tho

# TLDR

- find where the old version of this file exists and copy everything here

## links

- [haproy layer 4 & 7 proxy mode](https://www.haproxy.com/blog/layer-4-and-layer-7-proxy-mode/)
- [OSI modal explained](https://www.networkworld.com/article/3239677/the-osi-model-explained-and-how-to-easily-remember-its-7-layers.html)
- [terraform docs](https://www.terraform.io/docs/cloud/guides/recommended-practices/part2.html)
- [aws architecture center](https://aws.amazon.com/architecture/)
- [azure architecture patterns](https://docs.microsoft.com/en-us/azure/architecture/browse/)
- [azure architecture center](https://docs.microsoft.com/en-us/azure/architecture/)
- [GCP patterns for scalablee and resilient apps](https://cloud.google.com/architecture/scalable-and-resilient-apps)
- [AWS leadership principles](https://www.amazon.jobs/en/principles?ref=wellarchitected-wp)
- [red-hat 5 essential architecture patterns](https://www.redhat.com/architect/5-essential-patterns-software-architecture)
- [EETimes techpapers](https://www.techonline.com/?s=Fundamentals&content-type=techpapers)
- [software architecture patterns](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/)
- [architecture patterns and tctics](http://home.eng.iastate.edu/~othmanel/files/SE339/Module%205.4%20-%20Architecture%20Patterns%20and%20Tactics.pdf)
- [list of software architecture styles and patterns](https://en.wikipedia.org/wiki/List_of_software_architecture_styles_and_patterns)

- frameworks & deliverables
  - [aws well-architected framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
  - [github architectural decision records](https://adr.github.io/)
  - [TOGAF capability framework](https://pubs.opengroup.org/architecture/togaf9-doc/arch/?ref=wellarchitected-wp)
  - [zachman framework](https://www.zachman.com/about-the-zachman-framework?ref=wellarchitected-wp)

- specific architectures
  - [microservices: martin fowler](https://martinfowler.com/articles/microservices.html)
  - [microservices: patterns for distributed transactions](https://developers.redhat.com/blog/2018/10/01/patterns-for-distributed-transactions-within-a-microservices-architecture#)
  - [microservices: free ebooks by redhat](https://developers.redhat.com/topics/microservices#assembly-field-sections-1005)
  - [layered architecture](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html)

- tools
  - [AWS well architected tool](http://aws.amazon.com/well-architected-tool/?ref=wellarchitected-wp)
    - service in the cloud that provides a consistent process for you to review and measure your architecture usig the AWS well-architected framework
    - [architecture labs](https://www.wellarchitectedlabs.com/?ref=wellarchitected-wp)
      - code repository of code and documentation to get hands-on experience implementing best practices

## basics

### terminology

- UAT: user acceptance testing
- VCS: version control system, e.g. git
- CAB: change advisory board
- GDPR:
- IaaS: infrastructure as a service
- FaaS: functions as a service (serverless)

- high availability
- eventually consistent
- replication types
- service mesh
-
- practices: ways of doing things, process, standards, and accepted norms
  - focus on enable people & teams to meet specified standards
- mechanisms: carry out automated checks to ensure standards are being met
  - are usually automated to ensure practices are met and in compliance with rules or process

- levels to breakdown a system
  - component: the code, configuration and resources that together deliver against a reqiurement
    - often the unit of technical ownership, decoupled from other components
  - workload: a set of components that together deliver business value
    - usually the level of detail that business and technology leaders communicate about
  - technology portfolio: the collection of workloads that are required for the business to operate
  - architecture:
    - how components work together in a workload
    - how components communicate and interact is often the focus of architectur diagrams
    - key arcihtecture decision records
    - milestones: key changes in your architecture as it evolves throughout the product lifecycle
      - should be documented via Architectural Decision Records (ADR)
      - trade offs: between the 5 pillars based on your business content
        - e.g. optimize to reduce cost at the expense of reliability in development environments
        - e.g. optimize realibility with increased costs for production
        - but: security ad operational excellence should never be traded-off against the other pillars

- product lifecycle:
  - design:
  - implemnetation:
  - testing:
  - go live:
  - production:
  - repeat

- self serve infrastructure: instead a of a global operations team managing the entire infrastructure, each specific team are responsibile for their devstack via tools provided by the central operations team
- software defined netowrking: SDN: provides more control to operators & developers and allows netowrking to better support the applications urnnin on top
  - most have a control layer and infrastructure layer

- topology
  - flat topology
  - tree hierarchy

## architectural thinking

### key goals

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

- ability to respond to trade offs
  - often times you'll make hard archictural decisions, that have both positive and negative consequences
  - monitor the deployments of the system components, and take note of how well they perform considering the consequences of the trade offs

#### aws well architected framework: 5 pillars

- operational excellence in the cloud:
  - goals
    - support development and run workloads effectively
    - insight into operations
    - continuously improve supporting processes and procedures

  - design principles
    - perform operations as code: apply the same engineering discipline that you use for application code to your infrastructure code
      - implement operation proceders as code and automate their execution by trigger them in response to events
      - limit human error and enable consistent responses to events
    - make frequent, small reversible changes: design workloads to allow components to be updated regularly
    - refine operation procedures frequently: always look for opportunities to improve your operation procedures
      - as you evolve your workload, evolve your procedures appropriately
    - anticipate failure: perform `pre-mortem` exercises `@see artifacts and actions`

  - practice areas
    - organization: leadership defines business objectives
      - understand requirements and priorities and use these to organize and conduct work to support the achievement of business outcomes
      - Your teams need to have a shared understanding
    - prepare
    - operate
    - evolve

- security
  - how to take advantage of cloud technologies to protect data, systems and assets

- reliability
  - ability of a workload to perform its intended function correctly and consistently
  - operate and test the workload through its total lifecycle

- performance efficiency
  - use compute resources efficiently to meet system requirements
  - maintain that efficiency as demand changes and technologies evolve

- cost optimization
  - run systems to deliver business value at the lowest price point

### key people & roles

you cant talk about system design without talking about the people involved

- central IT: responsible for defining common infrastructure practices, enforcing policy across teams and maintaining shared services
  - acts as an overlay to other product/feature teams to ensure everyone is following best practice

- organization architect: define how global infrastructure is divided and delegated to the teams within the business unit
  - enables connectivity between resources, applications, and workspaces by defining the APIs each one must expose, and sets organization-wide variables and policies

- architecture roles
  - data architect
  - networking architect
  - security architect
  - technical architect (infrastructure focused)
  - solutions architect (software focused)
    - architect solutions across a wide variety of business verticals and use cases
  - principal engineers: review architecture designs and provide guidance on best practices

- application, resource and workspace owners:
  - responsibile for owning & managing each *thing*, e.g. the health/status, change lifecycle through dev, UAT, staging and production
  - main approver of changes to production within their domain

- contributor: submits changes to resources/applications/domains/etc by making updates to the underlying code/infrastructure
  - usually dont have authority to make changes to production, but can to dev, UAT and staging
  - can edit a subset of global application variables and/or apply personal variables to non-production environments for testing

### key questions

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

### key principals and best practices

- general design principles (cloud perspective)
  - technically understand capacity needs: never accept idle resources/performance implications of limited capacity
  - test systems at production scale: create a production-scale test environment on demand, run tests, then decomission resource
  - automate everywhere you can: create and replicate workloads at low cost to avoid the expense of manual engineering effort
    - track changes, audit impact, and rollback parameters when necessary
  - allow for evolutionary architectures: architectural decisions should never be static, one time events
    - and business & technicaly evolves, so should your architecture
  - data should always drive architecture decisions: collect data on how your architectural choices affect the behavior of your workload
    - make factbased decisions onw how & where to improve
    - cloud infrastructure is code; treat it as such
  - improve through game days: `@see artifacts and actions`
    - understand where improvements can be made
  - learn from all operational failures: drive improvement through lessons learned from all operational events and failures
    - share what is learned across temas and through the entire organization

## system design artifacts and actions

- game days: simulation events to reularly review and validate that all procedures are effect and that teams are familiar with them
  - spin up production scale infrastructure, run your tests, then tear it all down
  - test workloads and the team responses to simluated events

- pre-mortom exercises: to identity potential sources of failure so that they can be removed or mitigated
  - test your failure scenarios and validate your understanding of their impact
  - test your response procedures to ensure they are effective and that teams are familiar with their execution

## system breakdown

### components

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

## HECC-YA system modeling

- **H**ardware (cloud/metal)
- **E**nvironment (infrastructure)
- **C**omponent (application)
- **C**ommunication (messaging)
- **Y**ielding (provisioning)
- **A**rchitecture (system model)

- I want to create (yield) a world (environment) for a set of living things (applications) to live hostically (hardware) and socially (communication)

- I personally think through the distinction of environment (infrastructure) and component (application) design/architecture patterns
  - environment: the context of an application or service
  - component: the application or service

- I also feel the extraction of the communication layer decision from the environment and component pattern selection is a useful 3rd dimension to think through separatly, however, not in isolation
  - this permits you to brainstorm the environment and component in a perfect world with the naive expectation that communication will occur at the speed of light

- hardware: the types of physical machines located in local/cloud/virutalization/hybrid context
- yeilding: provisioning any part of the model
- architecture: the set of all decisions that describes the physics of your product

- now who decides what constitutes the environment domain and what constitutes the component domain?
  - I would say the business & product context: the environment for a product like AWS is far different than the environment for a product like facebook
    - each provides a different product, each business has different requirements, and each should model the components it provides and requires in relation to that context
- TODO....
  - continue to think through this distinction
  - i've yet to see it put in terms this way

### types of patterns

- distributed: components can be fully decoupled with heavy reliance on the communication channel
- centralized:
- decentralized:

```sh
  # copypaste this structure for all
  #### name_of_pattern
  - the one thing
    - abstraction X...
    - communication:
  - key concepts:
  - advantages:
  - disadvantages:
  - examples:
```

### environment: infrastructure patterns

- software architecture: describes the design and collection of components into systems that make up the building blocks of software
  - i.e. the principle that defines the software organization schema for these systems
  - the structural composition of the software program
  - the interactions between software elements
  - captures the design structures of various systems and elements so that they can be reused
    - during the process of writing software code, edevelopers encounter similar problems multiple times within a roject/compony
      - design patterns give engineers a reusable way to solve recurring problems

- architecture patterns (environment patterns) incorporates and blends multiple design patterns (component patterns)
  - the distinction between environment & component is poetic (trademark noah edward hall)

- the process for reviewing an architecture is a constructive conversation about architectural decisions, and is not an audit mechanism

- remote access protocols (e.g. REST, SOAP, or GraphQL)

- advantages
  - independent creation, maintenance & deployment of each micrservice
  - best practice to design small (i.e. micro) services verses large (lol) services keeps each component lean and agile
- disadvantages
  - complexity in the network layer (discovery) and implementation

#### multi-tier/layered pattern

- substacks services based on the flow of data, each stack/tier/layer exists at a different level of abstraction
  - tier: represents a unit of submodules that produces a cohesive set of services,
    - the bottom tier(s) generally closer to the data and provides services to the tier above it
    - increase the number of tiers depending on the complexity of the model & types of requests & optmizations required
  - data flows down from the requester until it reaches a lower tier that can respond to the request
  - a common theme being the hierarchical and layered flow of data, generally unidirectional but in some patterns biderirectional (e.g. server sent events)
- N-Tier
  - 2-tier:
    - examples
      - pool of web servers with a dtabase tier
  - 3-tier
  - etc

#### model-view-controller

- extends the multi-tier pattern: divides an application into 3 tiers
  - model: contains application data and core functionality
    - the central component of the pattern
    - the dynamic dat structure of hte software application
    - controls the data and logic of the applications

  - view: displays application data and interacts with the user
    - accesses the data in the model and presents it to the user

  - controller: understands the data and how the data can be manipulated
    - handles input from the use rand mediates between the model and view
    - listens to external inputs from the view/user and creates appropriate outputs
    - interacts with the model by calling methods to generate appropriate responses

  - communication: the messaging channel connecting the model, view and controller
    - e.g. an event/callback notification system
    - contain state information that is passed between the 3 tiers
      - e.g. an external event from the user may be transmitted to the controller to update the view
- key concepts:
- advantages:
- disadvantages:
- examples:

#### client-server pattern

- extends the multi-tier pattern: two main components taking roles of service requester (client) and service provider (server)
  - client: initiates & sends service requests to the server
    - the client provides ports for each services it needs
  - server: responds to request from the client potentially fulfilling the request/reasons why it cant
    - the server provides ports for each service it provides
  - communication: generally linked request/reply connectors from client/server M:1

- key concepts

- advantages:
  - central computing of data: generally all files are stored in the central location for the network
- disadvantages:
  - generally need a lot of compute power for the server to handle many requests
- examples:
  - the internet operates on a client-server pattern

#### Peer-to-Peer

- extends the the client-server architecture, utilizing a decenralized  system in which peers communicate with each other directly
  - abstraction X...
  - communication:
    - clients can connect to each other for services and connect to the server generally to retrieve the list of available clients
- key concepts:
  - clients are `peers` and share work + responsibilities
- advantages:
- disadvantages:
- examples:

#### Controller-Responder (master-slave|primary-replica)

- extends the multi-tier pattern consisting of two components the controller and responser(s)
  - controller: distributes work and copies of work-data among identical responders for processing
    - aggregates the responses into a single composite value
    - responsible for writing/storage of data & results from work
    - manages how work is distirbuted among responders
  - responders: processes & returns a slice of work given to it by the controller
    - responsible for processing work and reading data

  - communication:
- key concepts:
- advantages:
  - analytic applications can be read from the responder component without changing the data content of the controller component
  - responders can be taken offline and synced back without data loss
- disadvantages:
  - single point of failure if the controller fails
    - responders can be promoted to controller, but technical deficits exist in the time it takes to transition
- examples:

-

#### microservices

- involves creating multiple applications (i.e. micro services) that work interdependently
  - although each service can be developed and deployed independently, its functionality is interwove with other microservices
  - each application is free to take on another architecture pattern if complex enough, or use a design pattern
  - messaging:
  - service discovery:
  - think through other if not required, definitely recommended architecture components the article doesnt mention

- key concepts
  - separate CI/CD of each service: creates a streamlined delivery pipeline that increases scalability

- advantages:
- disadvantages:
- examples

#### event-driven

#### space/cloud-based

### component: application design patterns

- aggregator pattern
- API gateway design pattern
- chain of responsibility pattern
- branch pattern
- asynchronous messaging design pattern
- domain driven development
- serverless
- interface oriented design

### communication: messaging patterns

- Open Systems Interconnection (OSI) model: a conceptual framework that describes the functions of a networking or tellecommunication system
  - uses layers to describe a particular networking system
  - used to guide vendors and developers so communication about products and softwar eprograms interoperate (have a common language)
  - helps frame discussions of protocols and contrast of various technologies

- Layer 7: Application
  - closest to the end user and receives information directly from users and displays incoming data to the user
  - applications themselves do not live at this layer (sit on top of it)
  - facilitates communication through lower layers in order to establish connections
    - e.g. web browsers, telnet and FTP sit on top of layer 7
- Layer 6: presentation
  - independent of data representation at the application layer
    - i.e. preparation/translation of application data format to network data format (and vice-versa)
  - it presents data to the application, or to the network
    - e.g. encryption & decryption of data for secure transmission
- Layer 5: Session
  - when two servers need to speak with one another, a session has to be created
  - i.e. setup, coordination (wait time) and termination between applications at each end of the session
- Layer 4: Transport
  - coordination of the data transfers between systems and hosts
  - i.e. how much data to send, at what rate to send it, where it goes, etc
    - e.g. TCP or UDP
- Layer 3: Network
  - most of the router functionality networking professions care about
  - responsibile for packet forwarding and routing through different routers
    - e.g. which route does your computer in Miami take to get to the bart station in SF
  - switches that support virtual LANs than span more than one switch subnet
    - because this requires routing capabilities between the physical and virtual LANs
- Layer 2: Data Link
  - provides node-to-node data transfer between two directly connected nodes
  - handles error correction from the physical layer
  - most switches operate at this level
  - sublayers
    - Media Access Control Layer (MAC): (i.e. your MAC address)
    - Logical Link Control (LLC):
- Layer 1: Physical
  - represents the electrical & physical system
  - everything from the cable type, radio frequency link (e.g. 802.11 wireless) the layout of pins, voltages, etc
  - e.g. you operate at Layer 1 when you check that cables are firmly connected and the power plug hasnt been pulled out the modem

- REST
- SOAP
- GraphQL

### hardware

- local
- cloud
- multi-cloud
- hybrid-cloud
