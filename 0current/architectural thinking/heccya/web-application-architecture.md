# todo

move into 0heccya

# links

- [stackify on web app arch](https://stackify.com/web-application-architecture/)
  - wack as fuuuu
- [microsoft on service oriented architecture](<https://docs.microsoft.com/en-us/previous-versions/aa480021(v=msdn.10)>)
- [fundamentals of web application architecture](https://www.peerbits.com/blog/web-application-architecture.html)

# web application architecture

- varies greatly depending on the application at hand
- defines the interactions between applications, middleware systems and databases to ensure multiple applications can work together
- defines precisely how an application will function, as each architecture has different ways of doing things
- includes all subcomponents and external application interchanges for an entire software appplication
- impacts the software life cycle
  - specification of requirements
  - design of services
  - acquisition and outsourcing
  - asset management
- 3 main types
  - single page applications
  - microservices
  - serverless architectures
- concerns

  - user requirements
    - usability
  - developer requirements
    - performance
    - scalability
    - development speed
  - software product owner requirements

    - hardware
    - maintenance
    - network infrastructure
    - security

  -

## components

### scalability

- desirable poroperty of a system which indicates its ability to handle growing amounts of work in a graceful manner, or to be enlarged as demands increase
- 7 stages

  1. simple architecture

  - firewall and load balancer
  - pair of web servers
  - database server
  - internal storage
  - use cases
    - low complexity, quick development and lots of features fast
    - no redundancy, low operational cost great for startups

  2. grow bigger
  1. add redundant firewalls, load balancers

  - more web servers for performance
  - add database redundancy

- DNS
- web browsers
- CDN
  - content delivery network
  - provides a way of serving static assets
- load balancing
- storage
- web app servers
  - execute the core business logic for responding to requests
- database servers
- job queue & servers
  - responsible for doing work asynchronously behind the scenes thats not directly associated with responding to a users request
- services
  - authentication
  - authorization
  - payments
  - etc
- caching service
  - simple key/value data store that makes it possible to save and lookup information closer to requests
- deployment & release management
- change management

### application performance management

- the monitoring and management of performance and availability of software applications
- strives to detect and diagnose complex application performance problems to maintan an expected level of service
- the translation of IT metrics into business meetings
- performance metrics
  - performance experienced by end users of the application
    - load
      - the volume of transactions proccessed by the application without being loaded by computer-based demands for searches, calculations etc
        - Transactions per second
        - requests per second
        - page per second
    - response times
      - the times required for an application to respond to a users actions at such a load
  - computational resources used by the application for the load,
    - indicates whether there is adequate capacity to support the load
    - possible locations of performance bottlenecks
    - establishes an empirical performance basline for the application
      - the baseline can be used to detect changes in performance
- conceptual framework

  - end user experience
    - measuring the transit of traffic from user request to data and back is part of capturing the end user experience
      - real time application monitoring
        - aka top down monitoring
        - passive monitoring
          - an agentless appliance implemented using network port mirroring
        - active monitoring
          - synthetic probes and web robots predefined to report system availability and business transactions
  - runtime application architecture
    - application discovery and dependency mapping exist to automate the process of mapping transactions and applications to underlying infrastructure components
  - business transaction management
    - focus on user-defined transactions/url page definitions that have meaing to the business community
  - component monitoring
    - generally targeted at middleware focusing on web, application and messaging servers
    - provides a real-time view of stacks, tying them back to user defined business transactions
  - analytics/reporting

    - a common set of metrics to collect and report on for each application
    - standardize common views on how to present the application performance data

    -

### UI/UX

- related to user interface/experience rather than the development

### structural

- web browser/client
  - the interface rendition of a web app functionality which the user interacts with
  - i.e. the content delivered to the client
- server

  - application server
    - business logic
    - multi-layer applications
      - each layer represents a logical separation within the application
      - tiers
        - when the application logical is physically distributed to separate servers/processes
      - manage complexity by breaking up the application according to its responsibilities/concerns
      - common low-level functionality can be reused throughout the application
      - enforce restrictions on which layers can community with other layers
        - helps to achieve encapsulation
      - logical layering
        - common technique for impr
  - database server

    - provides and stores data
    - supports business logic

    -

  -

# architecture types

## N-layer architectures

- user interface
- business logic
- data access
- process
  - users make requests through the ui layer
  - ui layer interacts only with the business layer
  - the business layer in turn can call the data layer

## clean architecture

- similar
  - hexongal architecture
  - onion architecture
  - screaming architecture
-
- puts the business logic and application model at the center of the application
  - infrastructure and implementation details depend on the application core
- follow the dependeny inversion and domain driven design principles
- process
  - define abstractions/interfaces in the application core
  - interfaces are implemented by types defined in the infrastructure layer
- layers
  - user interface
    - controllers
    - view models
  - application core
    - has no dependency on UI/infrastructure
      - can be defined as simple data transfer objects
    - holds the business model
      - entities
        - business model classes that are persisted
        - represent busines rules
        -
      - Data transfer objects
      - services
      - interfaces
        - include abstractions that will be performed using infrastructure
          - data access
          - file system access
          - network calls
          - etc
    - domain services
      - implement interfaces
    - interfaces
    - entities
  - infrastructure
    - repositories
      - data access
    - implementation application core services
    - infrastructure specific services
- principles

  - independent of frameworks
    - the architecture does not depend on frameworks, but instead treats frameworks as tools
  - independent of UI
    - the UI can change easily without changing the rest of the system
  - independent of database
    - your business rules are not bound to a type of database
    - you can swap out database technologies
  - independent of any external agency
    - business rules dont know anything aoubt the outside world
  - the dependency rule

    - source code dependencies can only point inwards
    - nothing in an inner circle can know anything about something in an outer circle

    -

## serverless

- leverages third-pparty cloud infrastructure services to outsource server and infrastructure management
- allows applications to execute required/custom logic
- the development entity does not own/manage the backend servers
- similar to and simpler than microservices

## single page applications

- only request the most necessary elements of content and information to generate user experiences
- provides updated content within the current page without reloading

## backend

### microservices

- small, lightweight services that execute a specific, single functionality
- application components/services are not dependent on eacher

### web server architecture

- refers to the ideal layout of a web server
  - design
  - development
  - deployment
- responsible for responding to requests made by clients
- components

  - physical capacity

    - computinng power
    - storage
    - memory
    - performance

    -

## service oriented

- a business design paradigm for computer software in the form of services
- components
  - business architecture
  - service oriented architecture
  - software oriented management
- each service is a unit of software partitioned into discrete, autonomous and network-accessible units
- principles
  - transparence
    - smoothness of customers experience in using the service
  - customer fit
    - ability to tailor offerings to variations in customer needs
  - 3rd party connectivity
  - adaptation
  - multi-channel capability
    - support the customer end-to-end through process, using different channels to achieve continuity
  - optimization
    - offering services in real time at high performance levels

### Enterprise SOA (ESOA)anages

- brings web services and component-based development together
- web services made available externally and also to core business component services built/specified for internal use

### service oriented architecture

- integrates distributed, separetly-maintained and deployed software components
- the policies, practices, and frameworks that enable application functionality to be provided and consumed as sets of services published at a granularity relevant to the service consumer
- components

  - application frontend
  - services
    - contract
    - implementation
      - business logic
      - data
    - interface
  - service repository
  - service bus
  -

- principles
  - interface related
    - technology neutrality
    - standardization
    - consumability
      - published
        - precise specification of functionality of service interface
          - NOT implementation
    - formal
      - contract between endpoints places obligations on provider and consumer
    - relevant
      - functionality presented at a granularity recognized by the consumer as a meaningful service
    - resuable
      - services can use eachother
    - abstracted
      - abstracted from implementation
    -
  - design related
    - quality of services
    - meeting real business needs
    - ease of use
    - adaptability
    - managability
- perspectives

  - application architecture

    - the business facing solution which consumes services from one/more providers and integrates them into the business processes

  - service architecture

    - provides a bridge between the implementations and the consuming applications
    - creates a logical view of sets of services which are available for use
    - invoked by a common interface and management architecture
    - has to be managed as first order delivers
      - ensures services dont get reduced to the status of interfaces
      - have an identity of their own
      - can be managed individually and in sets
    - Business service Bus (BSB)
      - logical view of the available and used services for a particular business domain (e.g. HR)
      - provides developers with a starting point that guides them to a coherent set of services assembled specifically for their domain
      - common specifications, policies, etc should be made at the bus level, rather than for each individual service
      - facilitates the implementation of common, lower level business infrastructure services that can be aggregated into other higher llevel business services on the same bus
        - e.g. they could all use the same product code validation
      - each business domain deveopes a vocabulary and business model of both process and object
      - services on a bus should all
        - follow the same semantic standards
        - adhere to the same security policy
        - point to the same global model of the domain
      -
      - answers the following questions
        - what service do i need
        - what services are available to me
        - what services will operate together
          - common semantics and business rules
        - what substitute services are available
        - what are the dependencies between services and versions of services

  - component architecture
    - describes the various environments supporting the implemented applicatioons, the business objects and their implementations
  -

- use cases
  - synchronization between the business and IT implementation perspective
    - convergence of business and IT processes
  - services are a unit of manage that relates to business usage
    - enforced separation of the service provision from consumption provides us with the basis for understanding the life cycle costs of a service and how it is used in the business
  - combine services to form applications built purely from existing services and combining them in an ad hoc manner

### service

- can be invoked published and discovered,
  - single, hierarchies and/ colaborations
- a discrete unit of functionality that can be accessed remotely and acted upon and updated independently
- properties
  - logically represents a business activity with a specified outcome
  - is self contained
  - is a black box for consumers
  - may consist of other services
- service contract
  - service aggreement
  - function offered
  - informs the consumer
    - where it is
    - what it does
    - how they use it
- service interface
  - defines how the service can be interacted with
- principles

  - service boundaries are explicit
  - services are autonomous
  - services share schema and contract, but NEVER class
  - service compatibility is based on policy

- consumers
  - focused on their application architecture, services used
    - doesnt care about the component architecture
- providers

  - focused on the component architecture, service architecture
    - doesnt care about the consumers application architecture

- web service
  - the set of protocols by which services can be published, discovered and used in a technology neutral, standard form
  - designed to support interoperable machine-to-machine interaction over a network
  - has an interface (WSDL) described in a format that machines can process
  - principles
    - platform independence
      - technology neutral
    - standards based protocols
    - consumable
      - automated discovery and usage
    - loose coupling
    - self description
    - enable a formal separation between the provider and consumer
      - due to the formality of the interface

### components

- policy/process
  - types
    - process of delivering the service implementation
      - development
      - programming
      - web services automated by tools
    - the provisioning of the service
      - the life cycle of the service as a reusable artefact
      - commercial orientation
      - internal view
      - external view
      - service level management
    - consumption process
      - business process driven
      - service consumer could be internal/external
      - solution assembly from services, not code
      -
  - each service should have a separate provider and consumer policy
  - consumer policy
    - must be organized such that only the service interface matters
    - no dependence upon knowledge of the service implementation
  - provider policy
    - needs to develop and deliver services that can be used by the consumer in a completely separate process
- practice
- frameworks
- virtual platform

  - development platform
    - guidance on the development and implementation of applications to ensure that the published services conform to the same set of structural principles that are relevant to the management and consumer view of the services
  - implementation platform

    - best implementation architecture is a component-based architecture

  - platform components
    - host environment
    - consumer environment
    - middleware
    - integration and assembly environment
    - development environment
    - asset management
    - publishing
    - discovery
    - service level management
    - security infrastructure
    - monitoringt and measurement
    - diagnostics and failure
    - consumer/subscriber management
    - web service protocols
    - identity management
    - certification
    - deployment & versioning

- context
  - each participant has different objectives but nevertheless all need to use the same service
- implementation
  - web services
  - messaging
  - rest

### deliverables

- defining service implementation
- addressing the quality of the service from the perspective of hte provider and the consumer
- service specifications
  - should be generalized to adhere to technology neutrality
  - the consumer shouldnt need to know about the underlying model and rules
  - the specification of obligations the consumers must meed needs to be formaly defined and precise
  - service must be of a relevant granularity that combines flexibility and ease of assembly into business processes
- business service bus
- security policy

-

## object oriented

- use abstract data types and data abstraction

## component based

- provides a standard way to create robust object oriented programs using business objects
- a reuse-based approach to defining, implementing and composing loosely coupled independent components into sytsems
-
- provide a one-to-one mappinng beteween business entities and component implementations
- busijness objects

  - objects that abstract business entities in an object oriented program
  - encapsulates all the data and behavior (logic and rules)
  - e.g.

    - sales orders
    - employees

    -

## high availabillity application architecture

- a process followed when implementing a new appliation into an existing business-wide computer system/ERP while minimizing downtime
- high availability

  - ensures a certain degree of operational continuity

  -

## application service archtecture

- manage the application service independently of the infrastructure to promote flexibility in deployment, use and provisioning of application infrastructure
- focuses on the application delivery process and not the application server environment
- top down approach for applications in transit
  - monitoring
    - real-time information
    - detailed reporting
    - end-to-end visibility for each component in the application service
    -
  - controlling
    - define specific behaviors in the interactions between the customers and the service provider
    - these behaviors can be mapped to specific use requirements, and further enforced
  - securing
    - protect against application layer attacks
      - malware
      - botnet
      - sql injections cross-site scripting
  - optimizing
    - maintain end-to-end consistency, and allow optimal performances when delivering service to the custsomer
- components
  - application and network performance
  - backend infrastructure health
  - application security
  - trending
  - capacity planning
- use cases
  - virtualization
  - cloud computing
  - software/infrastructure as a service
  - external applications

## domain driven design

- an approach to developing software for complex needs by deeply connecting the implementation to an evolving model of the core business concepts
- provides a structure of practices and terminology for making design decisions that focus and accelerate software projects dealing with complicated patterns
- principles

  - place the projects primary focus on the core domain and domain logic
  - base complex designs on a model
  - initiate a creative collaboration between technical and domain experts to iteratively cut ever closer to the conceptual heart of the problem

  -

# patterns

- abstract factory
- adapter
- aggregate
- bridge
- builder chain of responsibility
- command
- composite
- decorate
- entity
- event aggregator
- facade
- factory method
- flyweight
- interpreter
- iterator
- lazy load
- mediator
- memento
- observer
- prototype
- proxy
- rules engine
- singleton
- service locator
- state
- strategy
- template method
- unit of work
- value object
- visitor

## repository pattern

- mediates between th domain and mapping layers using a collection-like interface for accessing domain objects
- provides an abstraction of data so that your application can work with an interface approximating that of a collection
- CRUD actions on a collection is done through a series of methods, without the need to deal with database concerns (connections, cmds, etc)
- repository per entity/busines object
  - simplest approach (Especially with an existing system)
  - create a new repository for each object you need to store/retrieve from your persisten layer
  - should only implement the specific methods you are calling in your application
- generic repository interface
  - simple genereic interface for the repository
  - setup constraints
- generic repository implementation
  - implement the interface generically so that you can create repositories for any given type

## specification pattern

- describes a query in an object
  - e.g. to encapsulate a paged query that searches for some products
    - create a PagedProduct specification which takes in necessary parameters
    - one of your repository methods would accept execute the specification object to retrieve the results
