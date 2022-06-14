# scala

- bookmarks
  - https://docs.scala-lang.org/scala3/book/taste-hello-world.html
  - https://docs.scala-lang.org/scala3/book/domain-modeling-intro.html
    - need to finish this to get a better handle on coursera week2
    - `Auxiliary constructors`

## links

- [coursera: effective programming in scala](https://www.coursera.org/learn/effective-scala)
- [scala metals vscode plugin](https://scalameta.org/metals/docs/editors/vscode)
- good reads
  - [fn programming and scala](https://chollinger.com/blog/2022/06/functional-programming-concepts-i-actually-like-a-bit-of-praise-for-scala-for-once/)
  - [heather miller: types in scala](https://heather.miller.am/blog/types-in-scala.html)
  - [awesome scala](https://github.com/lauris/awesome-scala)
- refs
  - [getting started](https://docs.scala-lang.org/getting-started/)
  - [domain modeling intro](https://docs.scala-lang.org/scala3/book/domain-modeling-intro.html)
  - [domain modeling constructs](https://docs.scala-lang.org/scala3/book/domain-modeling-tools.html)
  - [scala 3 book](https://docs.scala-lang.org/scala3/book/introduction.html)
  - [contextual abstractions](https://docs.scala-lang.org/scala3/reference/contextual/)
  - [scala tools](https://docs.scala-lang.org/scala3/book/scala-tools.html)

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

## gotchas

- indentation is important (think python)
- compiler evalutes type annotations at compile time, to guard against some kinds of errors at run-time
  - except in worksheets, as there is no distinction between compile & runtime
- vals vs defs
  - vals are always evaluated once, and the result is reused each time their name is used
  - the body of defs are evaluated each time the def is invoked, if its never invoked then never evaluated
    - thus one reason to prefer defs over vals is to delay the evlaution of a computation until the point in a progran where its effectively needed
- companion objects: sealed traits and objects can have the same name
  - it refers to the object when its used on the right-hand side of a definition, or when it is passed as an argument to an operation
  - it refers to the sealed trait (the type) when it is used in a type annotation
  - check the syntax file for mimicking enums in scala 2
- dont forget about the special `apply` definition
  - any entity with an `apply` definition can be invoked like a `fn()`

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

- term inference: Given a type, the compiler synthesizes a “canonical” term that has that type
- parameter lists: generally methods can have more tha one parameter lists
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

- domain modeling: see below somewhere
- principle of abstraction: where similar fns are carried out by distinct pieces of code, it is generally beneficial to combine them into one by abstracting out the varying parts
  - reduces maintence: the implementation is centralized in one place
  - structures code into abstraction levels

#### domain modeling

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

## standard library

- domain-agnostic data structures and utility fns that are generally useful in a wide range of projects
- peristent data structures: when operations on the data structure dont mutate its values, e.g. a list, as creating a new list from an existing list doesnt change the previous state of the list (a new one is created)

### collections

- all collection types are parameterized by the type of their elements, i.e. all elements must be of the same type

### error Management

### Math Fns

### Asynchronous execution
