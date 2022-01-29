# microservices

## links

- [acid transactions](https://databricks.com/glossary/acid-transactions)

## basics

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
- when eventual consistency isnt an acceptable model, e.g. within fintech when you need to guarantee ACID transactions across domains
  - atomicity: each statement (CRUD) in a transaction is treated as a single unit; either the entire statement is executed, or none of it is executed
  - consistency: transactions only make changes to tables in predefined, predictable ways
  - isolation: ensures concurrent tansactions dont interfere/effect with one another
  - durability: changes to the data made by successfully executed transaction will be saved, even in the vent of system failure

#### strangler pattern

- migrate from a monolithic system into a microservices architecture
- the most common pattern

#### sidecar pattern

- promote separation of concerns
- offload services (e.g. operational/security functions) into distinct components that can be deployed alongside dependent services

### integration patterns

#### gateway pattern

#### process aggregator pattern

#### edge pattern

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
