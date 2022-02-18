# application design patterns

- specific to the internals of a single application, restricted by the application architecture

  - the structural composition of the software program
  - the interactions between software elements
  - during the process of writing software code, edevelopers encounter similar problems multiple times within a roject/compony
    - design patterns give engineers a reusable way to solve recurring problems

- builder
- factory: abstracts implementation details of instantiating entities
- repository: abstract implementation details on how to retrieve data; logic for retrieving, validating and translating responses from a data service
- singleton
- tryparse: pattern for trying some logic and returning the response, but on error returning the given substitute instead of throwing the exception
- interface oriented design
- domain driven development
- chain of responsibility pattern
- aggregator pattern

- domain driven design
- remote access protocols (e.g. REST, SOAP, or GraphQL)

  - REST
  - SOAP
  - GraphQL

- asynchronous messaging design pattern

## event sourcing

- storing events instead of state, enabling you to rehydrate/replay timelines

## command query responsibility segregation (CQRS)

- specific to data problems
- a distinct service for reading from data sources
- a distinct service for writing to data sources

## command query responsibility segregation and event sourcing combined

- super useful for operational & yielding problems
