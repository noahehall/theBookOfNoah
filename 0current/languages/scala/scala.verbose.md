# scala

- bookmarks
  - https://docs.scala-lang.org/scala3/book/taste-hello-world.html
  - https://docs.scala-lang.org/scala3/book/domain-modeling-fp.html
    - need to finish this to get a better handle on coursera week2
    - `Modules`
    - https://docs.scala-lang.org/scala3/book/types-adts-gadts.html
      - `Algebraic Datatypes (ADTs)`
      - read this first

## links

- [the reactive manifesto](https://www.reactivemanifesto.org/)
- [coursera scala 5 course specialization](https://www.coursera.org/specializations/scala#courses)
- [coursera: effective programming in scala](https://www.coursera.org/learn/effective-scala)
- [scala metals vscode plugin](https://scalameta.org/metals/docs/editors/vscode)
- [scala index: search for libraries](https://index.scala-lang.org/)
- [scala index: awesome scala](https://index.scala-lang.org/awesome)
- [awesome scala](https://github.com/lauris/awesome-scala)
- good reads
  - [fn programming and scala](https://chollinger.com/blog/2022/06/functional-programming-concepts-i-actually-like-a-bit-of-praise-for-scala-for-once/)
  - [heather miller: types in scala](https://heather.miller.am/blog/types-in-scala.html)
  - [scalable component abstractions](https://lampwww.epfl.ch/~odersky/papers/ScalableComponent.pdf)
  - [BRICS: optimal purely functional priority Queues](https://www.brics.dk/RS/96/37/BRICS-RS-96-37.pdf)
  - [scala almost succeeded](https://betterprogramming.pub/scala-almost-succeeded-c3b1028b02c5)
  - [scala center project roadmap](https://scala.epfl.ch/projects.html)
- refs
  - [getting started](https://docs.scala-lang.org/getting-started/)
  - [domain modeling intro](https://docs.scala-lang.org/scala3/book/domain-modeling-intro.html)
  - [domain modeling constructs](https://docs.scala-lang.org/scala3/book/domain-modeling-tools.html)
  - [scala 3 book](https://docs.scala-lang.org/scala3/book/introduction.html)
  - [contextual abstractions](https://docs.scala-lang.org/scala3/reference/contextual/)
  - [scala tools](https://docs.scala-lang.org/scala3/book/scala-tools.html)
  - [scala build tools](https://docs.scala-lang.org/overviews/scala-book/scala-build-tool-sbt.html)

## background

- released in 2004 by Martin Odersky; version 3 released in 21
  - martin O: `Scala was designed to show that a fusion of functional and object-oriented programming is possible and practical`
- means Scalable Language; designed to improve some of the weaknesses in java
- compiles down to java bytecode and runs on the java virtual machine (so you can run Java and Scala in the same project)
- The essence of Scala is the fusion of functional programming and object-oriented programming in a typed setting:
  - fns for the logic
  - objects for hte modularity
- comparison with other languages
  - combines OOP and FP in one language
  - compile-time statically typed (with inference) language
  - It’s used for server-side applications (including microservices), big data applications, and can also be used in the browser with Scala.js
  - Everything in Scala is an expression that returns a value
  - all types inherit from a top-level class Any
    - whose immediate children are AnyVal (value types, such as Int and Boolean) and AnyRef (reference types, as in Java)
- scala code runs on the Java virtual machine (JVM)
  - provides security, preformance, memory management, portability and platform independence, and the ability to use existing java and JVM libraries free of charge
- scala code runs in the browser (via Scala.js)
- native executables can be build via Scala Native and GraalVM

### scala 2 vs scala 3

- general differences, check syntax file for more concrete distinctions
  - in generally scala 3 is backwards compatible
- scala 2: curly braces required
  - scala 3: optional (nizzze)
- scala 2: indentation wasnt signficant
  - scala 3: super significant (think python)
- scala 2: doesnt have enums
  - scala 3 enums are just syntactic sugar for a sealed trait and case objects that extend the trait

## terms

- laziness: concept in functional program to speed up perf issues
  - to compute a value only when its needed
  - lazy evaluation: storing the previous result of a lazy value, so that on the next access it its not recomputed
  - by-name evaluation: where a value is recomputed everytime its accessed, like a fn call
  - strict evaluation: everything is computed once when its first accessed
- the bullet proof principle (lol): an expression composed from Try, map, flatmap will never throw a non-fatal exception (it returns Failure(Exception) for you to handle)
- monad: a paramerterized type with two operations, flatMap and unit, that have to satisfy some laws
  - flatMap on a monad is also called bind
  - a type that defines both flatMap and withFilter are called monads with zero
  - 3 laws:
    - associativity: related to how you can call successive flatmap operations, you should be able to take successive calls and create nested calls instead and receive the same result
    - left unit: related to flatmap and unit: the lhs should always equal the rhs, i.e. no side effects
    - right unit: related to flatMap and the thing flatmap is called on,
- referential transparency: since pure functions dont have side effects; a term is equivalent ot the term to which it reduces
  - i.e. you can replace the lhs of a fn with its rhs, and vice versa
- natural induction: ...
- structural induction: ...
- object oriented decomposition: mixes data with operations on the data
  - useful if theres:
    - a need for encapsulation and data abstraction
    - add new kinds of data (but hard to add new kinds of operations)
  - however, increases complexity and adds new dependencies to classes
- pattern matching: the fn approach to decomposition
- dynamic binding: key to OOP: where a method is dependent on the runtime type of the receiver of a method
  - i.e. dependent on where the method is defined within the hierarcy of classes
- data abstraction: the ability to choose different implementations of data, logic, etc witout affecting consumers expectations or interface contract
  - enables you to evolve and optimize programs overtime with 0 impact on consumers
- category theory:
  - map: defined by the type class Functor
  - zip: defined by the type class Applicative
  - flatMap: defined by the type class Monad
  - traverse: defined by the type class Traverse
- pure functions: they do not mutate any data or have other side-effects (like throwing exceptions or writing to a file). All they do is simply receive values and compute the result.
- term inference: Given a type, the compiler synthesizes a “canonical” term that has that type
- parameter lists: generally methods can shave more tha one parameter lists
- predicate: a fn that returns boolean
- vararg constructor: variable argument constructor; you can pass a vriable number of arguments to it
- scala worksheet: a file containing Scala definitions and expressions that are evaluated from top to bottom; like a persistent REPL session that you can edit and run again
  - worksheets end in `.sc`
- program: expresses a computation: e.g. `What is the result of adding one to one?`
  - const of names (vars), literals, expressions, operations, and finally evaluations
- type: defines a set of possible values, e.g. `Boolean` has two possible values, and `String` have an unbounded number of possible values
  - define how expressions can be combined by applying operations on them
  - type mismatch: attempting to evaluate an operation against two incompatible types, e.g. `true && "false"`
  - operations: can be thought of as members of types, e.g. `&&` is a member of the `Boolean` type, and takes another `Boolean` value as a parameter `bool1 && bool2`
  - parameters: enable you to implement a program with unknown inputs, and apply the same program to different sets of inputs (think method parameters)

## culture

- avoid name space pollution
  - put all entities that are implementation details within the body of an interface, hidden from consumers
  - only make accessible those entities required by consumers
- avoid type Casts and type tests
  - Never use isInstanceOf or asInstanceOf - there’s always a better solution,
- defense programming can be inconvenient; prefer explicitly modeling the failable parts of your programs via type annotations
  - exceptions should be used as a last resort only, unless consuming expressions known to use exceptions
  - define an exception handler at hte beginning of the program/use the default handler provided by the runtime
  - explicitly indicate known exceptions in definition result (return type) annotations
    - prefer this over the others whenever failures are likely to happen: parsing data, file handling, remote calls, async stuff, etc.
- polymorphism: achieved via type classes and subtyping; type classes are preferred > subtyping
  - generics: type class: works at the type level
  - subtyping: works at the instance level
- prefer the infix syntax, e.g. `true && true` over dot notation, e.g. `true.&&(true)`
  - both are valid, however
- large/long expressions should be avoided, break them down and assign results to variables across multiple lines
  - e.g. `d = blah blah balh balh blah blah blah`
  - could instead be `a = blah blah \n b = blah blah \n c = blah blah \n d = a + b + c`
- generally, explicitly setting the type, even when they can be inferred, improves readability
- generally, ending a method with `end methodName` improves readability, especially after tall blocks
- generally, always explicity define the return type of methods to improve clarity (without having to read through the implementation)
  - its optional, however
- generally, using named parameters when invoking methods improve readability
  - e.g. `somePoop(flush = true)`
- its typical to work with immutable data types
- the vertical alignment of operators, symbols and names improves readability (check code block)
- its common to see Sealed Traits, case classes, and objects all using the same name at the same time in the same file
  - check the domain modeling link, theres a section on `companion objects`
    - An object that has the same name as a class, and is declared in the same file as the class, is called a "companion object."
- its common to prefix identifiers of optional values with maybe,
- prefer Option type over null values, null in scala only exists for interoperability with java

```scala
// idiomatic to ensure vertical alignment across related lines
val one    = ???
val oonnee = ???

```

### principles

- reactive systems & applications: readily responsive to stimulus
  - event-driven: react to events
    - events should be handled asynchronously, without blocking
      - better resource efficiency: execution of computations without waiting for termination
    - systems are composed of loosely coupled event handlers
  - scalable: react to varying workload
    - minimize shared mutable state
      - see immutable infrastructure elsewhere in this repo
    - scale up: make use of parallelism in multi-core systems
    - scale out: make use of multiple server nodes in a cluster
      - location transparency: it shouldnt matter where a node is located (same computer, across the world, etc)
      - resilience: a failure in one node shouldnt impact other nodes/system/etc
  - resilient: react to and [quickly] recover from failures; should be built into the design (and not added later)
    - types of failures: software, hardware & connection failures
    - loose coupling
    - strong encapsulation of mutable state
    - pervasive supervisor hierarchies
  - responsive: react to users; provides rich, real-time interaction with users even under load and in the presence of failures
    - algorithms
    - system design
    - back-pressure
    - ...
- guiding principles for good design
  - name everything you can
  - put operations into natural scopes
  - keep degrees of freedom for future refinements: the interface of a module should not be concerned with the implementation details in that module
- prefer designs that enable reasoning locally about a program
  - i.e. you dont need to know about the implementation details, or global entities, or side effects, etc, to change a unit of code
  - break down complex programs into smaller programs, and combine them
    - reduces the cognitive load to reason about programs because you only need to reason on a subset of the program
    - only works if local reasoning is possible
- avoid side effects at all costs: small changes can have alarge and unexpected consequences due to unknown side effects
  - operations that modify the state of the program
  - operations that communicate with the outside world (printing to a file, reading from a poop, etc)
- prefer logic that describe (declarative, functional, referentially transparent) vs do (imperative)
  - imperative: using loops
  - functional: using higher order fns
- depend on interfaces > implementations
- principle of abstraction: where similar fns are carried out by distinct pieces of code, it is generally beneficial to combine them into one by abstracting out the varying parts
  - reduces maintence: the implementation is centralized in one place
  - structures code into abstraction levels
- scalable copmonent abstractions: the goal is to define software components with a family of types that can be refined later in implementations of the component
  - generalized OOP methodology: entities that encapsulate data and behaviors
    - traits provide required (abstract) and provided (concrete) definitions and fields
    - traits are extended from each other to share & reuse behavior
    - classes extend from traits (and other classes)
    - instances implement classes
    - Objects can be used as companions/wrappers/etc
- Separating functionality from your data lets you inspect your data without having to worry about behavior.
  - generalized FP methdology: clear separation between data and behavior
    - hard separation between
      - the types you use to model the data (entities with attributes but no behavior),
      - the companion objects & defs that provide pure behavior for those types
        - in companion objects
        - Use a modular programming style
        - Use a “functional objects” approach
        - Define the functionality in extension methods

### domain modeling

- levels of abstraction: you have to make the cognitive effort to map a programs literals and names to the abstract concepts they related to
  - low level concepts: e.g. literal values
  - high level concepts: the abstractions low level concepts represent, i.e. the domain
  - thus, reasoning about what the program does, its purpose, is important for effectively abstracting away the low level concepts into higher level concepts, and modeling the domain in program via code
- finding the right level of abstraction
  - since abstractions require shared human knowledge, and all abstractions carry baggage, always pick the simplest idea (IMO)
- modeling: the act of defining the concepts of a domain that map closely to our human reasoning
  - case class and sealed traits are the building blocks of modeling business domains
  - no systematic methodology to modeling, but general advice includes
    - useful to review the modeling docs somewhere in this repository
    - idenitfy the concepts (in general nounse) that you are interested in
    - identify the relations between them
      - does one concept belong to another?
        - e.g. a rectangle has a width and a height
        - e.g. a `post message` action has a channel and a message
      - does one concept generalize another one?
        - e.g. a shape can be either a rectangle or a circle
        - e.g. a subscription is a possible action
    - translate each concept into a type definition
      - concepts belonging to others become paramters of case classes
      - concepts generalizing others become sealed traits
    - implement the business logic as operations on the model
      - check that you can construct meaningful values from your model
        - also VALIDATE that you cannot construct nonsensical/illogical/invalid values from the model
    - iterate on the domain model and business logic implementation
- service-oriented component model and view: abstract vs concrete members defined on traits
  - abstract members: should be required services to be implemented by another entity; all specify some form of requirement on the implementor of the trait
    - abstract methods (def m(): T)
    - abstract value definitions (val x: T)
    - abstract type members (type T), potentially with bounds (type T <: S)
    - abstract givens (given t: T)
  - concrete members: provided services that are made avaliable to classes

```scala
////////////////////////////////////////////////////////////////////
// example: with and without domain modeling
// program, calculate the area of stuff
////////////////////////////////////////////////////////////////////

// without modeling
val door = 5 * 3
val window = 2 * 2
val total = door + window

// with modeling
// arguably more readable and less error-prone
// humans know and have expectations of Rectangles
// also the implementation details are abstracted away
// we can then code to the interface of a Rectangle
val door = Rectangle(width = 5, height = 3)
val window = Rectangle(width = 2, height = 2)
val total = door.area + window.area

// modeling the actions that user can perform in a messaging system
sealed trait Action
case class Subscribe(channel: Channel) extends Action
case class Unsubscribe(channel: Channel) extends Action
case class PostMessage(channel: Channel) extends Action

case class Channel(name: String)
// use like Subscribe(Channel("to this channel"))
```

### event modeling

- composable event abstractions
  - events are first class
  - events often represented as messages
  - event handlers are first class
  - complex handlers can be composed from primitive ones

#### Futures

- Abstraction over events

#### Supervisors

- Handling failures

#### Distributed Actors

- scaling out

#### Reactive Streams / Flows

- abstraction over event streams

#### Actor Model

- message passing architecture
  - represents objects and their interactions
  - resembles human organizations
  - built upon the laws of physics
- creatd by Carl Hewit in 1973
- invented for research on artificial intelligence
- implemented in scala in 2006 by philipp Haller
- Jonas Boner (nice) created Akka in 2009
- inspiration
  - cpus arent getting faster, they are getting wider
    - multiple execution cores within one cip, sharing memory
    - virutal cores sharing a single physical execution core
  - program running on computers with multiple cores must utilize those cores
    - multi-tasking: running programs in parallel
    - multi-threading: running parts of the same program in parallel
      - where each thread collaborate on a common task
      - must communicate and sync with each other

#### serialization

- patterns for multi-threading safety
  - demarcate gregions of code with `dont disturb` semantics
  - make sure that all access to shared state is protected (serialized)
- lock: aka mutex
- semaphore

## standard library

- domain-agnostic data structures and utility fns that are generally useful in a wide range of projects
- peristent data structures: when operations on the data structure dont mutate its values, e.g. a list, as creating a new list from an existing list doesnt change the previous state of the list (a new one is created)

## build tools

- see buildtools dir
- support compile, run & test, deploy & publish workflows; managing, coordinating & peforming various interdependent tasks
- compilation:
  - turn source files into executable JVM bytecode
  - constructing the application classpath by fetching library dependencies
  - generation of resources like assets, data type serializers, etc
- running & testing: after compilation
  - building an execution environment (i.e. a JVM with the correct classpath)
  - invoking the entry points
- deploying and publishing: after compilatoin, and definitely after testing
  - publish an artifact on a library repository
  - package the program an its deps as a single `.jar` file
  - etc
