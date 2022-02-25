# nim

- fkn need to finish this thing
- reading done
- copying. starting all over

## links

- [changes since nimlang book (2017)](https://deepakg.github.io/nim/2019/09/28/nim-in-action-errata.html)
- [nimlang on github](https://github.com/nim-lang/)

## basics

### terms

- IoT: internet of things; physical devices with embedded electornics that are connected to the internet
- type systems: a spectrum between two extremes
  - static: finds more errors at compile time, but decreases speed at which programs can be written
  - dynamic: think javascript
- type inference: the ability for a compiler to infer the type of a variable
- dynamic type checking
  - runtime type information: enables dynamic dispatch of functions

### nim and nims history

- developed by Andreas Rumpf in 2005
- general purpose statically typed compiled programming language designed to be efficient > expressive > elegant

  - efficient: just as fast as C, 13 times faster than python
  - does have type inference

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

### compilation process

- translate nim code into C
- send the C code into a C compiler
- then can compile to a supported backend language
  - C:
  - C++
  - Objective C: e.g. for use with iOS
  - javascript

### garbage collection

- soft real-time garbage collector: allows you to specify the amount of time that should e spent collecting memory

### metaprogramming

- treat code as data in the form of an abstract syntax tree
- allows you to manipulate existing and generate brand new code while a nim application is being compiled
- use cases
  - remove boilerplate code
  - create domain-specific langauges (DSLs)
