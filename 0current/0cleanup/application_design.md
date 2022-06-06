# application design patterns

## basics

- specific to the internals of a single application, restricted by the application architecture

  - the structural composition of the software program
  - the interactions between software elements
  - during the process of writing software code, edevelopers encounter similar problems multiple times within a roject/compony
    - design patterns give engineers a reusable way to solve recurring problems

- bad design:

  - rigid: hard to change, e.g. due to dependency changes
  - fragile: easy to break, e.g. when making a change bugs cascade
  - immobile: difficult to reuse

- OOP concepts not always relevant to good design principles

  - enheritance: reuse features & behaviors
  - encapsulation: hide & protect data
  - polymorphism: code that works by behavior, and works with types/subtypes with a similar interface
  - abstraction: hide implementation details, and depend instead on declarative interfaces

### design principles

- sets of practices that form the basis of design patterns

- favor composition over inheritance: dont overuse inheritance, composition should also be used to extend behavior
  - identify application components that vary, and separate them from what stays the same
  - HAS-A (a dog has an owner) is better than IS-A (a dog is a animal)
  - objects get new behaviors by consuming (instead of inheriting from at compile time) objects that supply that behavior at runtime
- encapsulate what varies: anything expected to change often should be encapsulated behind some sort of interface
  - its all about letting one part of a system vary independently of others, e.g. moving the brancing logic into a separate module that exports an interface
  - all patterns implement this principle in some form or another
- program to interfaces: program to the most abstract behaviors as possible, allowing implementers of the interface the opportunity to change the specific behaviors as needed
  - one class should not rely on a specific instance of another class
  - objects should rely on interfaces, and shouldnt care which class implements that interface
- loose coupling between objects that interact
  - objects should have little knowledge about implementation details of other objects
  - changes to one should not impact another, if it does, you've got some tight coupling
  - reduces the dependency between components
- SOLID: by Martin Robert Martin

  - S: single responsibility: all about limiting the impact of change
    - an object should only have one reason to change
    - each additional responsibility adds a reason for modifications to be required to the object as the nature of that responsibilty changes in the future
  - O: classes should be open for extension, but closed for modification
    - objects should provide default behavior, but enable consumers to override behaviors when needed
  - L: Liskov substitution: subtypes should be substitutable for their base types
    - i.e. subtypes should adhere to the interfaces of their base types
    - i.e. subtypes behave like their base types
  - I: interface segregation: interfaces should be small and cohesive, and shouldnt include methods they dont use
    - polluted interface: continuing to add new functionality to an interface as it evolves
      - causes unwanted dependencies between consumers of the the interfaces
    - cohesion: how related a class/interfaces methods are to themselves
      - if all consumers of a class/interface use the class/interface the same way, it generally means there is high cohesion
      - else you should subtype the class/interface into additional subtypes, that only implements the behavior with high cohesion
  - D: dependency inversion: high level modules should not depend on low level modules; both should depend on abstractions
    - instead of coupling high level component -> low level component
    - ^ you should instead program to an interface, and have both the high and low components depend on the same interface abstraction
    - ^ the abstraction should not depend on details (implementation), but the implementation (low level component) should depend on the interface

- design by contract: specify preconditions, postconditions & invariants; treat inputs and outputs the same way across implementations

## patterns

- specific strategies for resolving common architecture problems
- adapter
- aggregator
- builder
- chain of responsibility
- decorator
- domain driven development
- facade
- factory: abstracts implementation details of instantiating entities
  - simple factory: encapsulating a complex if statement/similar into a separate module
- interface oriented design
- observer
- repository: abstract implementation details on how to retrieve data; logic for retrieving, validating and translating responses from a data service
- singleton
- strategy
- tryparse: pattern for trying some logic and returning the response, but on error returning the given substitute instead of throwing the exception

### API Patterns

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
