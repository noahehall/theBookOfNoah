# microservices

## basics

### terms

- architectural style: way of designing processes & building systems to facilitate an end goal, e.g cloud native is an architectural style
- dependency graph:
- call patterns

- cloud native: designed to facilitate operating in the cloud

  - externalizing configuration
  - focusing on portable (global) and scalability (in & out)
  - making your apps start fast, and handle shutdowns gracefully

- microservices: scoped units of services, that work in unison but scale independently to achieve a goal

  - breaking endpoints into distinct units of work that can be scaled independently
  - focus on data, business and function domains, analyze call patterns and dependency graphs, and determine boundaries between services that need to be scaled independently

- domain-based microservices: functional pipelines in a system; domain-driven design

  - business domain
  - data domain
  - product domain
  - inventory domain
  - etc etc, really scoped to a particular application/biz/tech context

- business process-based microservices: ...

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

### decomposition patterns

- break a component into logical steps, convert each step into a service that can be reused and scaled

#### strangler pattern

#### sidecar pattern

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
