# languages

- tired of reading the same shiz over and over, this file will eventually aggregate all the duplicated terms in all the other files

## links

- [concurrency vs parallelism vs async discusion](https://stackoverflow.com/questions/4844637/what-is-the-difference-between-concurrency-parallelism-and-asynchronous-methods)
- [subtyping](https://en.wikipedia.org/wiki/Subtyping)
- [type theory](https://en.wikipedia.org/wiki/Type_theory)

## terms

- stateful object: an object has state if its behavior is influenced by its history, i.e. if behavior (future results) changes over time due to previous conditions
- direct execution: in procedural programming, when a line of code is constructed to a value it must directly interact with its lexical context
- pure: an expression/function is pure if it doesnt have any side effects
- referencial transparency: an expression is referentially transparent if you can replace (refer to) the expression with its result and still have same runtime behavior
- term inference: Given a type, the compiler synthesizes a “canonical” term that has that type

## functional programming

- associativity: related to how you can call successive flatmap operations, you should be able to take successive calls and create nested calls instead and receive the same result
- bind (monad): flatMap on a monad is also called bind
- by-name evaluation: where a value is recomputed everytime its accessed, like a fn call
- laziness: concept in functional program to speed up perf issues; to compute a value only when its needed
- lazy evaluation: storing the previous result of a lazy value, so that on the next access it its not recomputed
- left unit: related to flatmap and unit: the lhs should always equal the rhs, i.e. no side effects
- monad 3 laws: associativity, left unit, right unit
- monad: a paramerterized type with two operations, flatMap and unit, that have to satisfy some laws
- monads with zero: a type that defines both flatMap and withFilter
- natural induction: ...
- right unit: related to flatMap and the thing flatmap is called on,
- strict evaluation: everything is computed once when its first accessed
- structural induction: ...

### category theory:

- map: defined by the type class Functor
- zip: defined by the type class Applicative
- flatMap: defined by the type class Monad
- traverse: defined by the type class Traverse

## OOP

- object oriented decomposition: mixes data with operations on the data; whenver a need for encapsulation and data abstraction
- dynamic binding: key to OOP: where a method is dependent on the runtime type of the receiver of a method; i.e. dependent on where the method is defined within the hierarcy of classes
- data abstraction: the ability to choose different implementations of data, logic, etc witout affecting consumers expectations or interface contract; enables you to evolve and optimize programs overtime with 0 impact on consumers

## non synchronous programming

- asyncrhony:
- fork: create a new thread
- join: consume a fork
- multithreading:
- parallelism:
- reactive programming: patterns for designing applications that are responsive, resilient, elastic and event-driven
- structured concurrency: a paradigm that provides strong guarantees around the lifespans of operations performed concurrently
