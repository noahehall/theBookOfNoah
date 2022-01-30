# microservices

## links

- [acid transactions](https://databricks.com/glossary/acid-transactions)
- [the action pattern](https://ponyfoo.com/articles/action-pattern-clean-obvious-testable-code)

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

## patterns

- microservices: scoped units of services, that work in unison but scale independently to achieve a goal

  - breaking endpoints into distinct units of work that can be scaled independently
  - focus on data, business and function domains, analyze call patterns and dependency graphs, and determine boundaries between services that need to be scaled independently

### decomposition patterns

- break a component into logical steps, convert each step into a service that can be reused and scaled
- core goal is to make services smaller, thereby more scalable as demand fluxuates across service boundaries

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

##### business process based decompositoin

- breakdown complex business processes into discrete services each fulfilling a specific role in the overall system
- higher level of service for reusing business logic across other microservices
- enables you to encapsulate related domains, that depend on similary business processes
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
  - durability: changes to the data made by successfully executed transaction will be saved, even in the vent of system failure
- provide failure domains & rollbacks; blocking API calls until the previous API call is complete, synchronous APIs work best/asyncrhonous with a guarantee callback mechanism
  - always have clearly defined transactions, especially the conditions which cause commits to be rolledback
- dont depend on distributed transactions, the complexity is far greater than just using a synchronous API

#### strangler pattern

- migrate from a monolithic system into a microservices architecture
- carving/sharding functionality out of a monolith and into a micrservice endpoint
- the most common pattern for moving from monolith to microservice
- start with the monolith, and encapsulate/strangle each dependency, migrating each one-by-one to a microservice endpoint, then deprecate & remove the dependency from the monolith once the microservice is fully implemented
- top down approach: start at the API/service level, and work down to the data domain
- bottom up approach: start the at data domain, and move up to the API/service level

#### sidecar pattern

- promote separation of concerns; all about removing repetitive code from multiple microservices into a single embedded that can be utilized by each
- offload services (e.g. operational/security functions) into distinct components that can be deployed alongside dependent services as runtime dependencies
- e.g. monitoring, logging, & security etc all lend themselves to this pattern, and can either be deployed as an embedded module (e.g. logging) or as a distinct microservice itself (e.g. oauth)
- this pattern shouldnt create more microservices, but instead create child processes to existing microservices

### integration patterns

- solve orchestration & ingress needs across a system as a whole

#### api gateway pattern

- pattern for external clients communicating with your system
- clients shouldnt be able to call any/all service, but instead call a single gateway which acts as a reverse proxy to all of the services you provide
- the gateway provides aggregation/buffer/facade/proxy/decoration/oauth/etc to the services behind its fence, and is responsible for mutating, limiting and proxying requests
- keep business logic out of the gateway, while it can be done, there are more appropriate patterns (see process aggregator) that should be responsible
- adhere to strict api version control and ensure all changes are passive (non-aggressive)
- implement clients (service wrappers) as distinct modules for service behind the gateway

#### edge pattern

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

#### shared service database

#### command query responsbility segregation

#### asynchronous eventing

### operational patterns

#### log aggregation patterns

#### metrics aggregation patterns

#### tracing patterns

#### external configuration

#### service discovery
