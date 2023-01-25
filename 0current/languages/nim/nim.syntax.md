# nim

- pure syntax related notes, see examples doc for real world examples

## links

- todo
  - [stackblitz webcontainers](https://blog.stackblitz.com/posts/introducing-webcontainers/)
    - [signup](https://stackblitz.com/membership)
    - [me](https://stackblitz.com/@noahehall)
- [nim language](https://nim-lang.org/)
- [nim style guide](https://nim-lang.org/docs/nep1.html)]
- books
  - [nim in action](https://freecontent.manning.com/delving-into-nim/)
- tutorials
  - [by example](https://nim-by-example.github.io)
  - [basic part 1](https://nim-lang.org/docs/tut1.html)
  - [basic part 2](https://nim-lang.org/docs/tut2.html)
  - [macro system](https://nim-lang.org/docs/tut3.html)
  - [compiler user guide](https://nim-lang.org/docs/nimc.html)
  - [docgen tools guide](https://nim-lang.org/docs/docgen.html)
- repos
  - review these first
    - [zsh & bash prompt](https://github.com/icyphox/nicy)
    - [convert markdown files to html](https://github.com/h3rald/hastyscribe)
    - [create cli interfaces](https://github.com/docopt/docopt.nim)
    - [data manipulation](https://github.com/bluenote10/NimData)
    - [nimble package manager](https://github.com/nim-lang/packages)
    - [choosenim, think nvm](https://github.com/dom96/choosenim)
    - [nim REPL](https://github.com/inim-repl/INim)
    - [web framework](https://github.com/planety/prologue)
    - [html/js gui library](https://github.com/Niminem/Neel)
    - [cryptographic library](https://github.com/cheatfate/nimcrypto)
    - [protobuf](https://github.com/PMunch/protobuf-nim)
    - [terminal dashboards](https://github.com/FedericoCeratto/nim-dashing)
    - [async tools](https://github.com/cheatfate/asynctools)
    - [alternative stdlib for nim for nodejs/js targets](https://github.com/juancarlospaco/nodejs)
    - [react bindings for nim](https://github.com/andreaferretti/react.nim)
- interesting repos
  - [nim github search: most stars](https://github.com/topics/nim?l=nim&o=desc&s=stars)
  - [macr-based pattern matching library](https://github.com/alehander92/gara)
  - [convert your nim code and its outputs to html docs](https://github.com/pietroppeter/nimib)
  - [fullstack web framework](https://github.com/itsumura-h/nim-basolato)
  - [deflate,zlib,gzip,tarballs,zip files management](https://github.com/guzba/zippy)
  - [serialize & stream yaml bidrectionally](https://github.com/flyx/NimYAML)
  - [dsl: svg|gif generator](https://github.com/bluenote10/NimSvg)
  - [very advanced fuzzer for parsing http responses](https://github.com/d4rckh/vaf)
  - [parsing,compiling,executing regex](https://github.com/nitely/nim-regex)
  - [async/await](https://github.com/status-im/nim-chronos)
  - [awesome-nim](https://github.com/xflywind/awesome-nim)
  - [port scanner](https://github.com/elddy/NimScan)
  - [DSL: webserver: composable http handlers](https://github.com/andreaferretti/rosencrantz)
  - [patterm matching (see gara as well)](https://github.com/andreaferretti/patty)
  - [moe, i.e. vim like editor](https://github.com/fox0430/moe)
  - [llvm based compiler for nim](https://github.com/arnetheduck/nlvm)
  - [dev desktop applicatoins in nim](https://github.com/trustable-code/NiGui)
  - [document.qerySelector+all for nim](https://github.com/GULPF/nimquery)
  - [http auth](https://github.com/FedericoCeratto/nim-httpauth)
  - [color and util tools for nim](https://github.com/qqtop/NimCx)
- specs
  - [the manual](https://nim-lang.org/docs/manual.html)
    - `first-class iterators`
  - [the index](https://nim-lang.org/docs/lib.html)
  - [experimental features](https://nim-lang.org/docs/manual_experimental.html)
  - [nim destructors and move semantics](https://nim-lang.org/docs/destructors.html)
  - [standard library](https://nim-lang.org/docs/lib.html)
  - [nim for flow programmers](https://github.com/nim-lang/Nim/wiki/Nim-for-TypeScript-Programmers)
  - [cmdline](https://nim-lang.org/docs/nimc.html)
    - switches
    - symbols
  - native modules
    - automatically imported into every file
    - [io](https://nim-lang.org/docs/io.html)
    - [strutils](https://nim-lang.org/docs/strutils.html)
    - [system module](https://nim-lang.org/docs/system.html)
      - imports
      - types
        - Natural
      - vars
      - lets
      - consts
      - procs
        - `echo` exactly what you think
        - `debugEcho`
        - `readLine` exactly what you think
        - `write`
        - `toInt`
        - `toFloat`
        - `repr` convert any type to string
      - iterators
        - `countup`
      - macros
      - templates
        - `^` roof operator: array access e.g. `a[^x] == a[a.len-x]`
      - exports
    - [iterators](https://nim-lang.org/docs/iterators.html)
    - [assertions](https://nim-lang.org/docs/assertions.html)
    - [dollars](https://nim-lang.org/docs/dollars.html) stringify operator for integers
    - [widestrs](https://nim-lang.org/docs/widestrs.html)

## rules

- indentation must be 2 space chars
- generally `:` ends keyword statement, e.g. an `if` statement
- optionally `;` ends a statement, required if putting 2 statements on the same line
- you can only split a statement after a punctuation symbol, and the next line must be indented
- every identifier must be associated with a type, and types are checked at compile time
  - some types can be automatically inferred, e.g. primtives assigned a value when defined
- the type of a variable cant change

## conventions

- builtin types & variables are lowercase
- user-defined types are PascalCase

## compilation flags

```python
  --gc:GC_NAME # chose the type of garbage collector to use
  --boundsChecks # perform runtime checks, less perf > greater safety
  -d:release # turns off a variety of things, like boundsChecks

```

## other stuff, keywords e.g.

```python
# comments
# single line comment
#[ multline comment
]#
# comment out code
when false:
  echo("this code is commented out")

# splitting statements
echo("only after: ",
  "punctuation")

nil.nil # special value that signifies the lack of a value for any reference type
discard someProc() # discard the return value of someProc
```

## operators

```python
  | # or, e.g. a | b
  $ # converts its input to a string, e.g. $someVar
  mod # modulo

```

## variables

```python
# keyword name: type = value
# cant start with a number/contain two consecutive _
# case insensitive EXCEPT the first letter
# style insensitive, pOoP, poop, and p_o_o_p all point to the same thing
let poop = "hello" # runtime immutable, value must be known at runtime
var poop = "flush" # runtime mutable
const poop = "flush" # compile time immutable, value must be computable at compile, most effiecient
let `let` = "stropping"; echo(`let`) # stropping enables keywords as identifiers

# concatenation
echo "hello " & poop

```

## types

- value types: allocated on the stack
- reference types: are stored on the heap

### builtin primitives

```python
  # int
  int # signed integers, 32bit/64bit depending on system
    let
      a = 100
      b: int8 = 100
      c = 100'i8
  int8,16,32,64 # 8 = +-127, 16 = +-~32k, 32 = +-~2.1billion
  uint # positive integers, 32/64 bit depending on system,
    let
      b: uint8 = 100
      c = 100'u8
  uint8,16,32,64 # 8 = 0 -> 2550, 16 = ~65k, 32 = ~4billion

  # float
  float # decimals
    let
      a = 100.0
      b = 100.0'f32
  float32,64

  # string
  string # must be enclosed in double quotes
    let
      poop = "flush"
      flush = r"raw string, no escape sequences required"
      multiline = """can be split on multiple lines, no escape sequences required"""

  # boolean
  bool # true | false
    let t = true

  # character
  char # single ASCII characters, enclosed in single quotes
    let
      a = 'a'
      b = '\109'
      c = '\x79'
  # escape sequences with chars, but you might as well use a string
    let
      carriageReturn = '\r'
      lineFeed = '\l'
      tab = '\t'
      backslash = '\\'
      singleQuote = '\''
      doubleQuote = '\"'

  void
  auto # used as procedure return types, for type inference


```

### builtin collections

```python
  # sequences use @ symbol
  let numbers = @[1, 2, 3, 4, 5]

  # arrays
  # static in size and homegenous in type
  # page 40
  var list: array[3, int]
  list[0] = 1 # etc

```

### user defined

```python
# create a type, associate a procedure, and instantiate an instance
type
  SomeType = object
    propName: type
# procedures arent directly associated with the dog type
# instead the self parameter defines the type it is associated with
proc someFn(self: SomeType):
  echo("Woof!")
let instance = SomeType(propName: someValue)
instance.someFn()


# tuples
(one, two)
```

## procedures

- procs with return values, the return value must be used OR discarded
  - the defualt return value is binary zero (just like a variables default value)
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
  e

```python
proc someName(paramNam: paramType, p2 = "with a default value"): returnType =
  # procedure body
  # default values dont need a type, its inferred
proc someName(p1, p2, p3: int): int =
  # you only need to specify the type on the last
  # if they are all the same
proc someName(p1: varargs[string]): string =
  # p1 is an object that takes an arbitrary amount of strings
proc someName = # returns void, and doesnt accept params
proc someName: void = echo "defined on one line"
proc someName: auto = "return type is inferred"

# anonymous proc: doesnt have a name and surrounded by paranthesis
var someName = ( proc (params): returnType = "poop")
# alternatively you can import sugar to get the -> symbol
import sugar
var someName = (params) -> returnType => "poop"
# can also be used as a type for a proc param that accepts a fn
proc someName(someFn: (params) -> returnType) =

# calling & discarding
echo someName("poop")
discard someName("oop")
someName("vargs1", "vargs2") # when using vargs
# returning values from procs
proc implicit: string =
  "i will be returned"
proc discarded: string =
  discard "i will not be returned"
proc explicit: string =
  return "I will be returned"
proc resultVar: string =
  result = "I will be returned"
proc resultVar2: string =
  result = ""
  result.add("I will be ")
  result.add("returned")
proc resultVar3: string =
  result = "I am the result"
  "I will cause an error"

```

## control flow

### if / when / case

```python
# runtime check
if 42 > 0:
  echo "true"
# ternary i just an if..else inline
if conditional: "true" else: false

# compile time check
when true:
  echo("this is a compile time if statement")
```

### loops

```python
for i in 0 .. <10:
  echo(i)

for thing in list:
  echo(thing)

```

## builtins

- sequtils: sequence utilities
  - map
  - filter
- future
  - ->
- strutils: string utilities
  - split
- system: builtin types, auto included in your source code
- sugar: I think this replaces `future` in the book

```python
  # sequtils ###############

  # returns a new sequence with the elements someProc deems true
  filter(someSequence, someProc)


```
