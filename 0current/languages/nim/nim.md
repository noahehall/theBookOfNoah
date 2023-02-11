# nim

- fkn need to finish this thing
- haha only took 2 years, checkout [noahehall/nim for more](https://github.com/noahehall/nim)

## links

- [gdb debugger](https://sourceware.org/gdb/)
- [nimlang on github](https://github.com/nim-lang/)
- [changes since nimlang book (2017)](https://deepakg.github.io/nim/2019/09/28/nim-in-action-errata.html)
- [nim style guide](https://status-im.github.io/nim-style-guide/)
- interwebs
  - [method vs proc & dynamic dispatching](https://matthiashager.com/proc-method-nim)
  - [importing in nim](https://narimiran.github.io/2019/07/01/nim-import.html)
  - [OOP in nim](https://matthiashager.com/nim-object-oriented-programming)
  - [peter has some great nim posts](https://peterme.net/tags/nim.html)
- backends/etc
  - [objective C and iOS](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)
  - [C++ and iOS, windows and android development](https://devblogs.microsoft.com/cppblog/android-and-ios-development-with-c-in-visual-studio/)
  - [GCC c compiler](https://gcc.gnu.org/)
  - [Clang C compiler](http://clang.org/)
- repos
  - [nimble, the nim package manager](https://github.com/nim-lang/nimble)
  - [offensive nim](https://s3cur3th1ssh1t.github.io/Playing-with-OffensiveNim/)
  - [nimst e something w something lol](https://github.com/status-im/nim-stew)
  - [chronos async programming](https://github.com/status-im/nim-chronos/)
  - [repos used in nbc](https://nimbus.guide/auditors-book/03.2_build_system_and_dependencies.html)
  - [test utils](https://github.com/status-im/nim-testutils)
  - [json](https://github.com/status-im/nim-json-serialization)
  - [fuzz tests](https://github.com/status-im/nim-testutils/tree/master/testutils/fuzzing)
- tuts
  - [bunches of tuts](https://nim-lang.org/documentation.html)
  - [nim tutorial](https://nim-lang.org/docs/tut1.html)
  - [nim for typescript programmers tutorial](https://github.com/nim-lang/Nim/wiki/Nim-for-TypeScript-Programmers)
  - [nim by example](https://nim-by-example.github.io/getting_started/)
  - [not as quick intro](https://nim-by-example.github.io/)
  - [nim style guide](https://nim-lang.org/docs/nep1.html)
- specs
  - [nim manual](https://nim-lang.org/docs/manual.html)
  - [sugar](https://nim-lang.org/docs/sugar.html)
  - [assertions](https://nim-lang.org/docs/assertions.html)
  - [quick intro](https://narimiran.github.io/nim-basics/)
  - [compiler user guide](https://nim-lang.org/docs/nimc.html)
  - [docgen tools guide](https://nim-lang.org/docs/docgen.html)
  - [docs](https://nim-lang.org/docs/lib.html)
- specs
  - [manual](https://nim-lang.org/docs/manual.html)
  - [experimental features](https://nim-lang.org/docs/manual_experimental.html)
  - [nim destructors and move semantics](https://nim-lang.org/docs/destructors.html)
  - [standard library](https://nim-lang.org/docs/lib.html)
  - [nim for flow programmers](https://github.com/nim-lang/Nim/wiki/Nim-for-TypeScript-Programmers)
  - [cmdline](https://nim-lang.org/docs/nimc.html)

## basics

### best practices/gotchas

- side effects: accessing/mutating a global var or interacting with stdout; mutating a proc arg is not considered a side effect if its not a global var

### terms

- [endianness](https://en.wikipedia.org/wiki/Endianness)
- fuzz tests: automated software testing technique that involves providing invalid, unexpected, or random data as inputs
- copy elison (result var): Omits copy and move (since C++11) constructors, resulting in zero-copy pass-by-value semantics.
- IoT: internet of things; physical devices with embedded electornics that are connected to the internet
- type systems: a spectrum between two extremes
  - static: finds more errors at compile time, but decreases speed at which programs can be written
  - dynamic: think javascript
- type inference: the ability for a compiler to infer the type of a variable
- dynamic type checking
  - runtime type information: enables dynamic dispatch of functions
- programming language implementation: every language has an implementation in the form of an application, which either interprets source code or compiles the source code to an executable
  - interpreter: e.g. like javascript
  - compiler: e.g. like nim
- methods === precedures === functions === subroutines
  - method: context of OOP
  - proecure; context of precedural programming
  - function: used in functional programming
  - subroutine: used with saltine crackers
- Unofirm Function Call Syntax: UFCS: allows you to create new procedures on existing objects externally, and allows procedure calls to be chained
  - basically theres multiple ways to call a function and all can be chained together
  - add(5) === 5.add === add 5
- functional programming: avoids the changing of state and the use of mutable data, preferring the use of first-class functions, anonymous functions, and closures
- foreign function interface: FFI: allows you to use libraries written in other programming languages, nim includes native C,C++ automatically
- stropping: enable the use of nim keywords in identifiers
- compiler: take an abstract program and compile it to a more concret program,
  - e.g. from C to assembly, or typescript to javascript,
  - usually the two have far different levels of abstraction
  - nim is a compiler that supports multiple backends (c, c++, objective-c, javascript)
- transpiler: takes a program in A and outputs the same program in B, usually A and B have the same level of abstraction
- module: every file is considered a module

### nim and nims history

- developed by Andreas Rumpf in 2005
- general purpose statically typed compiled precedural multi-paradigm programming language designed to be efficient > expressive > elegant
  - efficient: just as fast as C, 13 times faster than python
  - expressive
  - elegant: as beautiful as python
  - multi-paradigm: doesnt focus on OOP, but has varying support for OOP, functional, declarative, concurrent, and other programming styles
- shares many of pythons traits
  - use of indentation to delimit scope
  - tendency to use words > symbols for certain operators
  - super user-friendly exceptin tracebacks
- use cases
  - systems programming: since nim compiles to C and C is supported virtually all systems and allows direct access to the physical hardware of the machime
    - operating systems
    - compilers
    - device drivers
    - embedded system sofware
    - IoT devices
  - game development that need to manage garbage collection & memory for speedy renfering of frames on screen
  - real-time applications that need to run in very strict time frames
  - cpu intensive application components: can run alongside javascript/ruby for performance boost in critical workstreams, e.g. in scientific computing/high-speed trading
  - I/O intensive applications: e.g. reading files/sending data over a network
  - CLI applications: nim apps are compiled to a single binary and dont require any runtime dependencies
  - full stack applications: nim compiles to JS
  - a complete C replacement
    - nim is as performant as C
    - more reliable than C
    - has an improved type system
    - supports generics
    - advanced metaprogramming
- core features
  - metaprogramming: read, generate, analyze and transform source (see elseware in this doc)
  - style-insensitive variable, function and types `poOpFluSh, poop_flush and poopFlush` all point to the same thing
    - nim only considers the case of the FIRST character, so `poop` and `Poop` DO point to different things
  - rich type system
  - fast compilation process
  - different types of garbage collectors that can be selected/removed
  - type inference
  - runtime type information
  - memory safe: as long as you dont use any unsafe types
  - memory error protection
    - arrays are bounds-checked at compile time, or at runtime when compile-time checks arent possible
      - prevents both buffer overflows and overr overreads
    - pointer arithmetic isnt possible for reference types
      - they are entirely managed by nims garbage collector
      - prevents issues like dangling pointers and other issues when managing memory manually
    - variables are always initialized by nim to default values
      - prevents variables containing unexpected & corrupt data
  - generics programming: allows for code reuse without sacrificing type safety, e.g. fn overloading
- differences with:
  - java
    - java has the JVM, to enable its JAR executable to be run everywhere, however the end-user needs to have the JVM installed
    - nim supports cross-compilation, where you can create executables for each CPU architecture and OS, and the enduser doesnt need to download an additoinal runtime dependency
  - python/javascript/ruby/etc
    - requires a a VM/interpreter of some sort,
  - C/go/rust/etc
    - doesnt do cross compilation?

### procedural traits

- procedures are standalone entities that operate on data structures
- using procedures enable compile time evaluation & type checking, dead code elimination, and perf boost over methods
- but uses static dispatch and not have dynamic dispatch (see method)
  - at compile time i think procs are only attached to the base object,
  - this causes subtypes to always use the base object implementation (again, i think lol)
- while i would consider this a positive, it makes it very difficult to categorize which fns belong to which objects, especially as a beginner
  - i would say the attempt to categorize (see yolowurl) is almost futile
  - save your resources for understanding which proc _should_ be able to operate on which data structure based on the data structure's characteristics

### method (member) functions

- i.e. methods in OOP
- enable dynamic (virtual) dispatching of function invocation
  - the runtime type of the object is used to determine which method is actually invoked
  - its crucial in the context of OOP and object inheritance
    - e.g. base type specifies function X, and multiple levels of object redefine it
    - ^ at compile time i think the base type is always used or something
    - ^ but with dynamic dispatch the correct fn used is based on the runtime (not compile time) type of the object at hand
      - nim will create a dispatch tree to see on which object the method was invoked and that objects type

### compilation process

- Nim can target any combination of C compiler, host OS and hardware architecture as long as the C compiler supports it.
- send the nim code to the nim compiler
- the nim compiler compiles the nim code into C
  - has a hard dependency on a C compiler, e.g. GCC or Clang
- send the C code into a C compiler
- the C compiler compiles the C code into an executable in the chosen backend
  - C:
  - C++: native windows/android/iOS applications
  - Objective C: native iOS applications
  - javascript: my bread n butter
- the executable file contains instructions that indicate the specific tasks the computer should perform
  - the executable is specific to the CPU architecture and OS it was compiled on
  - cross-compilation: it is possible to instruct nim to a compile to a different OS and architecture

### garbage collection

- soft real-time garbage collector: allows you to specify the amount of time that should e spent collecting memory
- value types: allocated on the stack
- reference types: are allocated on the heap

### metaprogramming

- treat code as data in the form of an abstract syntax tree
- allows you to manipulate existing and generate brand new code while a nim application is being compiled
- use cases
  - remove boilerplate code
  - create domain-specific langauges (DSLs)

## rules

- indentation must be 2 space chars
- generally `:` ends keyword statement, e.g. an `if` statement
- optionally `;` ends a statement, required if putting 2 statements on the same line
- you can only split a statement after a punctuation symbol, and the next line must be indented
- every identifier must be associated with a type, and types are checked at compile time
  - some types can be automatically inferred, e.g. primtives assigned a value when defined
- the type of a variable cant change
- reserved words: is, func
- TABS are not allowed, ensure your editor is setup for spaces

```sh
## compiling and running
# nim CMD -OPTS --FLAGS somefile ARGS
nim c poop.nim # compile poop to binary
nim c -r poop.nim # compile then run poop


```

## procedures

- procs with return values, the return value must be used OR discarded
  - the defualt return value is the default value of the return type
  - e.g. ints == 0, stings = "", seqs = @[]
  - if the last expression has a non void value, that value is implicitly returned
    - no need to use return keyword, nor is it idiomatic nim
  - every proc with a return value has an implicit `result` variable declared within its body
    - is mutable, and of the same type as the procedures returnType
      - its idiomatic nim to mutate the `result` var when needed
- procs without return values return void (adding void returnType is optional)
- procs cant be used before their definition without a forward declaration
  - forward declaration: the function signature without a body
- procs without parameters can omit the paranthesis in the difinition
- you can overload procedures by assigning the same name to procedures with different parameter signatures

## loops and iterators

- iterating over an object with one item
  - nim uses the `items` iterator
- iterating over an object with two items
  - nim uses the `pairs` iterator
