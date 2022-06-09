# scala

## links

- [coursera: effective programming in scala](https://www.coursera.org/learn/effective-scala)
- [scala metals vscode plugin](https://scalameta.org/metals/docs/editors/vscode)
- good reads
  - [fn programming and scala](https://chollinger.com/blog/2022/06/functional-programming-concepts-i-actually-like-a-bit-of-praise-for-scala-for-once/)
- refs
  - [getting started](https://docs.scala-lang.org/getting-started/)

## background

- released in 2004 by martin O.; version 3 released in 21
- means Scalable Language; designed to improve some of the weaknesses in java
- compiles down to java bytecode and runs on the java virtual machine (so you can run Java and Scala in the same project)
- comparison with other languages
  - combines OOP and FP in one language
  - compile-time statically typed (with inference) language

## gotchas

- indentation is important (think python)
- compiler evalutes type annotations at compile time, to guard against some kinds of errors at run-time
  - except in worksheets, as there is no distinction between compile & runtime
- vals vs defs
  - vals are always evaluated once, and the result is reused each time their name is used
  - the body of defs are evaluated each time the def is invoked, if its never invoked, their never evaluated
    - thus one reason to prefer defs over vals is to delay the evlaution of a computation until the oint in a progra where its effectively needed

### scala 2 vs scala 3

- general differences, check syntax file for more concrete distinctions
  - in generally scala 3 is backwards compatible
- scala 2: curly braces required
  - scala 3: optional (nizzze)
- scala 2: indentation wasnt signficant
  - scala 3: super significant (think python)

## terms

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
// arguably more readable nad less error-prone
// humans know and have expectations of Rectangles
// also the implementation details are abstracted away
// we can then code to the interface of a Rectangle
val door = Rectangle(width = 5, height = 3)
val window = Rectangle(width = 2, height = 2)
val total = door.area + window.area

```
