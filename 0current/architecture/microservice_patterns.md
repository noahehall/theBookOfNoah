# microservices

- microservice patterns from the edge to the datastore

## links

- [acid transactions](https://databricks.com/glossary/acid-transactions)
- [the action pattern](https://ponyfoo.com/articles/action-pattern-clean-obvious-testable-code)
- [circuit breaker pattern](https://www.martinfowler.com/bliki/CircuitBreaker.html)
- [Selina Liu: microservices @ airbnb](https://www.youtube.com/watch?v=PIw1WF1UXNc)

## best practices

- focus on reducing a services blast radius
  - if service A fails, how many other services will be disrupted?
- whether you describe your architecture in terms of Tiers, there will always be tierrs
  - lower tiered services generally have a bigger blast radius; require the most stability and resilience
    - never let lower tiered services call higher tiered services which may have reduce stability

## basics

- abstraction for the sake of abstraction increase complexity & cost for no value

### terms

- architectural style: way of designing processes & building systems to facilitate an end goal, e.g cloud native is an architectural style
- dependency graph:
- call patterns
- cloud native: designed to facilitate operating in the cloud
  - externalizing configuration
  - focusing on portable (global) and scalability (in & out)
  - making your apps start fast, and handle shutdowns gracefully
- service types:
  - data service: connects to a data source within a system
  - business service: builds on top of data services; business domains that aggregate multiple data services to meet business objectives
  - translation service: any abstraction/decoratation/encapsulation of a third party operation under your own interface
  - edge service: serving data to other services based on the consuming services context
- platform: everything within a microservices environment constitutes its platform
  - runtime: virtualization, baremetal services, containers, etc
  - ancillary services: message queues, cache services, oauth, etc; some are first class, others arent
  - operational (devops) components: log & metric aggregators, deployment services, etc
  - diagnostic components: enable you to connect to the runtime env of a microservice and inspect, analyze, diagnose, troubleshoot & improve performance
- business process: logic that consumes one/more data domains to solve an issue
- data pipeline: aggregating data from multiple sources in distinct formats, transforming each to match a single interface, and then storing the transformed data into a single graph/db
  - scheduler: manages retrieval from multiple data sources at different rates, and sending each into the matching data collector
  - data collectors: services geared toward retrieving data from a single data source, serializing and storing the raw data (e.g. in s3)
  - data convertors: convert raw serialized data into a common serialization format, with a defined interface and storing the new formatted data (e.g. back into s3)
  - data processors: take the converted data, and process it for storing into the final db (e.g. a knowledge graph)

## infrastructure

- focus early on distinguishing between services requering common vs specific infrastructure

### shared infrastructure examples

- api framework: e.g. using [apache thrift](https://thrift.apache.org/) and
- messaging framework: e.g. [apache kafka](https://kafka.apache.org/)
- api explorer: e.g. using swagger aka [openapi](https://openapi.tools/) for finding and testing APIs
- CI/CD: artifact repositories, deployment tools should be consistent across all services
- orchestration and service governance
- observability and metrics

### specific examples

- business logic: implementation details left to the developer

## layers

- depending on the sources of data and clients of your services could involve any / or different layers

### Presentation Services

- render data for frontend clients in a friendly and common format
  - this layer is prime for a graphql service in a data access layer
- perform simple data transformations/aggregation
- permissions checks
- localization and other external business logic
- data fetching and hydration

### business services

- shared business logic consumed/sidecarred by many services
- distinct from presentation as this relates to internal business logic

### data access layer

- in complex situations it may be more appropriate to extract data access from the presentation layer

### Data services

- encsuplate data sources into a uniform data layer

### Messaging services

- queues and etc

## patterns

- microservices: scoped units of services, that work in unison but scale independently to achieve a goal
  - breaking endpoints into distinct units of work that can be scaled independently
  - focus on data, business and function domains, analyze call patterns and dependency graphs, and determine boundaries between services that need to be scaled independently

### messaging patterns

- Queues
- Messages
- Streams

### decomposition patterns

- break a component into logical steps, convert each step into a service that can be reused and scaled
- core goal is to make services smaller, thereby more scalable as demand fluxtuates across service boundaries

#### decoupling patterns

- decoupled services: the degree of decoupling has significant implicatins on architecture, performance and scalability
- direct service calls: either sync/async
- producer/consumer: a single producer orchastrates the invocation of multiple consumers, and handles the responses
- pipeline architectures: a form of producer/consumer, however the producer doesnt expect a response from the consumer, but accepts input from the previous stage, does its thing, and passes its output as input to the next stage

#### domain based decomposition

- functional pipelines in a system; create services that fulfill the needs of a particular domain
- largely based on domain-driven design patterns, as that methodology lends itself to decomposing services by domains
- product domain
- inventory domain
- etc etc, really scoped to a particular application/biz/tech context

##### data domain

- services driven by the data itself and focus on serving data thats used by the system, as well as data specific logic
- usually the lowest level of decomposition
  - start with the data model (from the perspective of the outside world), how its needed and how its consumed, what are the actions (not in terms of CRUD/REST, just plainspeak) that need to be performed on the model
  - scope the service contract, dont worry about implementation details just yet
  - define your service boundary and build APIs around your actions
  - define a schema that supports the model (but doesnt have to match 1:1 to the model) and implement your datastore (db)

##### business process based decomposition

- breakdown complex business processes into discrete services each fulfilling a specific role in the overall system
- higher level of service for reusing business logic across other microservices
- enables you to encapsulate related domains, that depend on similar business processes
- business processes should never have direct access to datasources, but instead are given the data they need to operate on
  - this is hard boundary between data domains & business domains
- identify each process you want to expose
- identify the data domain each process requires as input
- define the APIs for each business process
  - business processes always change, and sometimes frequently, so encapsulate the actual business process logic into its own module that can be iterated on separately from the service contract & interface

#### atomic transaction based decomposition

- you build your decomposition model around the atomic transaction at the data domain level
  - these are synchronous blocking calls, be sure this is what you need and understand the performance implications on the system as a whole (this could become a bottleneck)
- domains requiring atomic transactions should be in a single shared database in order to build the atomic service
- when eventual consistency isnt an acceptable model, e.g. within fintech when you need to guarantee ACID transactions across domains
  - atomicity: each statement (CRUD) in a transaction is treated as a single unit; either the entire statement is executed, or none of it is executed
  - consistency: transactions only make changes to tables in predefined, predictable ways
  - isolation: ensures concurrent tansactions dont interfere/effect with one another
  - durability: changes to the data made by successfully executed transaction will be saved, even in the event of system failure
- provide failure domains & rollbacks; blocking API calls until the previous API call is complete, synchronous APIs work best/asynchronous with a guarantee callback mechanism
  - always have clearly defined transactions, especially the conditions which cause commits to be rolled back
- dont depend on distributed transactions, the complexity is far greater than just using a synchronous API

#### strangler pattern

- migrate from a monolithic system into a microservices architecture
- carving/sharding functionality out of a monolith and into a micrservice endpoint
- the most common pattern for moving from monolith to microservice
- start with the monolith, and encapsulate/strangle each dependency, migrating each one-by-one to a microservice endpoint, then deprecate & remove the dependency from the monolith once the microservice is fully implemented
- top down approach: start at the API/service level, and work down to the data domain
- bottom up approach: start the at data domain, and move up to the API/service level

#### sidecar pattern

- promote separation of concerns; all about removing repetitive code from multiple microservices into a single embed that can be utilized by any service
- offload services (e.g. operational/security functions) into distinct components that can be deployed alongside dependent services as runtime dependencies (inversion of control)
- e.g. monitoring, logging, & security etc all lend themselves to this pattern, and can either be deployed as an embedded module (e.g. logging) or as a distinct microservice itself (e.g. oauth)
- this pattern generally shouldnt create more microservices, but instead create child processes to existing microservices

### integration patterns

- solve orchestration & ingress needs across a system as a whole

#### api gateway pattern

- pattern for external clients communicating with your system
  - if distinct clients have diverging demands/special business logic, use the edge pattern instead
  - works best when all fronted services have similar demand profiles
- clients shouldnt be able to call any/all service, but instead call a single gateway which acts as a reverse proxy to all of the services you provide
- the gateway provides aggregation/buffer/facade/proxy/decoration/oauth/etc to the services behind its fence, and is responsible for mutating, limiting and proxying requests
- keep business logic out of the gateway, while it can be done, there are more appropriate patterns (see process aggregator) that should be responsible
- adhere to strict api version control and ensure all changes are passive (non-aggressive)
- implement clients (service wrappers) as distinct modules for services behind the gateway

#### edge pattern

- client specific API gateways for optimizing cost by creating distinct ingress APIs for clients with distinct business logic & demand profiles
- provides aggregation, consolidation, composition and complexity isolation away from the main API gateway used by the other clients
- directly addresses specific client scaling needs, e.g. if your customer is microsoft/apple, you likely want an edge service scoped to their needs
- identify the client, their needs & constraints, build contracts, interfaces and models
- generally recommended over pure api gateways, unless the cost of the additional hardware/service is too much

#### process aggregator pattern

- aggregate multiple business processes into a distinct flow to solve specific goals
  - usually the processes are dependent, and must be executed consecutively (and not in parallel) and can cause choke points as wait times increase
- whenever you have several business processes that must be called together and have a composite payload (multiple data domains)
- the aggregator interface should provide clients with a single API that subsequently calls each downstream process, assembles the responses from each, and returns a composite payload
- the aggregator is responsible for processing the responses and returning a unified response payload
  - this is the main usecase, else you might as well use an aggrigator at the api-gateway level
  - however, this can cause long blocking calls if too many business processes are aggregated
- determine the business processes
- determine the processing rules (should be encapsulated and an interface presented instead of hardcoding the logic directly in the service)
- design a consolidated model (for the composite payload) based on how the processing rules modify the responses
- design an API for the actions on that model (using either REST/Actions pattern)
- wire the service and implement the internal processing

### data pattern

#### single service database

- the most common pattern for all data domain based services
- single service, single database
  - perfect when the scalability demands between the db and service are related (usually proportional)
  - as the demand for the service increases, thus the demands on the db, and you can allocate resources effectively by monitoring both
  - thus, each data domain should have its own dedicated datastore in this pattern
  - can potentially isolate the data per region, for a more sophisticated architecture

#### shared service database

- all data domains exist within a single database
  - still, you should break the data domains into schemas/keystores/etc to keep them somewhat distinct at the data level
  - definitely you should still treat the data distinctly at the application code level
  - each user/service that consumes each distinct data domain should also have distinct credentials for accessing those services & data domains, even tho they are really accessing the same data store
    - ensure you have proper segmentation at the data & service level
    - this enables you to move to a single service database in the future with the least amount of friction
- you see this more in enterprises where there are contractual obligations/not enough resources to fully move to a true microservice architecture
- data distribution should be handled by the database, and not by code
  - else synchronization/replication issues will eventually develop if application code is responsible for pushing data across regions/datacenters

#### command query responsbility segregation (CQRS)

- the most complex pattern of all the data patterns
  - if implemented correctly, provides the most benefits for the use cases where its appropriate
    - task based UI operations: complex write queries commit tasks, and complex read queries to support the system state at a given point in time
    - eventually consistency is a must, as usually there are multiple and disparate data domains to be written to and read from
    - event driven models work well, as you can react from triggers & events
    - you must spend significant time in the design phase
  - else is a nightmare to maintain
- data access patterns diverge from traditional CRUD, into multi-model patterns within specific bounded contexts or data domain
  - multi-interface operations, write verus read
    - query interfaces may transform & aggregate the actual data schema to represent the access pattern being modeled
    - write interfaces may inject behavior and other characteristics based on a specific use case being modeled
  - whenever CRUD becomes a bottleneck in complex write & read scenarios

#### asynchronous messaging/eventing pattern

- whenever you have long running transactions/complex workflows and a single blocking API call becomes unfeasable
- some problems/processes cannot be achieved in real time
- service API to trigger event, and events cacade asynchronously
- events can trigger from posting to a messaging queue
- super powerful in distributed systems

### operational patterns

- how you run run systems, vs how you build it
- helps you answer:
  - what is happening?
  - when is it happening?
  - where it is happening?
  - why is it happening?
  - who is involved?

#### log aggregation patterns

- provide detail behavior of the runtime characteristics of the system
- the source logs need to have a clearly defined model and structure and be consistent across the entire system for effective aggregation and holistic analysis
- in distributed systems, its often usefult to link the logs across systems
- processing logs via aggregation requires each source log to have a consistent taxonomy, similar keys & formats
- log aggregation: each service generally right their own logs thats output for observability, but all logs should end up in a single stream of data
  - aggregation involves retrieving the logged output, parsed, labeled/tagged, and stored in a time-ordered fashion
  - the faster you can aggregate logs, the faster you can diagnose & trouble shoot issues
  - correlation of logs via tracing identifiers requires uniform design across the entire system
    - enables you to recreate call stacks from errant processes
- log indexing: enbales rapid searching, is almost required in high-value production systems

#### metrics aggregation patterns

- understand whats going on at a system level
- ensure the taxonomy is structured across all system components
- dashboard design is critical: both system and user events should be injected into dashboards
  - high-level dashboards: useful for spotting trends across the system as a whole
  - detailed dashboards: useful for drilling down into specific system components to further investigatation
    - especially if you can embed links to the log aggregation system
    - trace alarms on dashboards are useful, that way oncall devs can see why they are being paged visually without having to run queries to figure out where issues are occuring
- ensure you have runbooks for all alarms

#### tracing patterns

- the more call stacks span processes and networks, code traces are less valuable
- you need to implement a higher level trace ID that can be delivered across processes & services
- enables you to recreate the call stack by injecting a trace ID into every call
  - the trace ID should be injected at the edge/entry point to your system, and span all the way down into the data layer, perhaps even stored in the database itself
  - every log message should embed the trace Id through structured logging with common taxonomy
- always use an open-standards approach (usually specify the trace ID in the request header)

#### external configuration

- critical when resources and services are moved across systems
- its main benefits is operational: when you need to reconfigure resources & services, its great to have a single place to manage the runtime environment of microservices
- use tooling that makes external configuration & environment variables easy to find and manipulate
- use consistent naming conventions across services and their configurations
- ensure secrets are kept separate from configurations
- configurations are generally injected into the service, or retrieved as part of the service startup routine
- services should prioritized externalized values over embedded (default) values

#### service discovery

- mechanism for provider services to be found by consuming services in a dynamic runtime where service identifiers/locations/etc can and do change in response to system activity
- a central location should should exist that can be queried to find what services exist to acocmplish each task in the system,
  - as services boot, they should advertise themselves to this datastore, describing their location and what services they offer
