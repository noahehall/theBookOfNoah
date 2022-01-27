# microservices

## basics

### terms

- domains: functional pipelines in a system

  - business domain
  - data domain
  - product domain
  - inventory domain
  - etc etc, really scoped to a particular application/biz/tech context

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

- cloud native:
- microser
