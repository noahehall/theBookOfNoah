<https://nim-lang.org/docs/tut1.html#sets-bit-fields>

- roadmap to [@nodeproto/morphosis](https://github.com/noahehall/nodeproto/tree/nim-executables/packages/tools/morphosis)
  - tut1 (above bookmark)
  - <https://nim-lang.org/docs/backends.html#backends-the-javascript-target>
  - <https://nim-lang.org/docs/backends.html>
  - <https://nim-lang.org/docs/lib.html#pure-libraries-modules-for-js-backend>
  - <https://nim-lang.org/docs/backends.html#interfacing>
    - we want the JS executable to call a nim program to do awesome stuff
      - nim should compile both into a single executable (this is how nim works with C)
        - <https://nim-lang.org/docs/manual.html#foreign-function-interface-exportc-pragma>
        - have to research this: the nim >< JS integration doesnt provide the same goodiness as the C integration
        - we might be stuck with
          - dont use the js integration
          - create a nim executable
          - call the nim executable from node
          - handle the response in node
  - <https://nim-lang.org/docs/tut2.html>

# nimlang - comprehensive cheatsheet

- oneday this will be a concise and comprehensive cheatsheet for all your nim development
- general purpose, but especially useful for those coming from node and need to get up to speed quickly

## background

 contributor

- i havent carried more than 2 languages in a couple years, but NIM changes everything
- im using `php` for codeblocks as nim support sucks in vscode md

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
  - [our nim examples](../languages/nim)
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

# reading

## terminology

- zero-terminating
- cstring
- local type inference:
  - the only form of type inference that exists in nim
- ordinal type:
- statements
  - simple: cannot contain other statements
    - e.g. assignment, procedure calls, or return
  - complex: can contain other statements
    - e.g. control flow statements
- expressions: parts of a statement that usually result in a value
  - can contain `indentation` for better readability
  - e.g. after operators, open paranthesis, commas
- procedures: i.e. methods|functions
  - formal parameter: name of variable within a procedure signature
    - immutable (unless redeclared with var inside procedure body)
  - argument: value passed to a procedure as parameter's value
  - has an implicit `return result` variable declared (if the procedure returns a value)
    - the `result` variable is created at the start of the fn
      - don't declare it again e.g. with `var result`
      - is initialized with the type's defualt value
      - the referential data types will be `nil` at the start f hte procedure
        - may require initialization
    - a `return` statement with no expression is shorthand for `return result`
  - if there is no `return` statement|use of `result` variable
    - returns the value of its last expression [think shell fn]
  - forward declarations
    - concerns functions dependencies: every dynamic value (e.g. vars, procedurs, etc) need to be introduced to the compiler before it can be used
    - declare them without the `=` at the end
  - iterators
    - should return a value and continue the next iteration
      - thats why you cant implement an iterator with a `proc`
    - to return & continue is called a `yield` statement
  - bounds checked
  - value types
    - all data types in Nim are value typed
    - the assignment operator copies (doesnt reference) when assignment a value to a variable

## best practices

- use side-effect-free procedures
  - if making multiple assignments.
- use `when` > `if`
  - when writing platform/env specific code
- types
  - nim has pretty good type inference
- wrap iterators in procs of the same name which accumulate the result of the iterator and return it as a sequence
  - see [split fro the strutils module](https://nim-lang.org/docs/strutils.html)

## gotchas, easy to forget and other burns

- Indentation is Nim's way of grouping statements.
  - Indentation is done with spaces only, tabulators are not allowed.
- declaring multiple variables with a single assignment that calls a procedure can have unexpected results: the compiler will unroll the assignments and end up calling the procedure several times.
  - If the result of the procedure depends on side effects, your variables may end up having different values!
- The Nim library makes heavy use of overloading
  - each operator like + is just an overloaded proc
  - User-defined operators are permitted
    - but may reduce readability
- iterators vs procedures
  - similarities
    - each have different namespaces, thus a proc and an iterator can have the same name
  - iterators perspective
    - can only be called from loops
    - cannot contain a return statement
      - procs cannot contain a yield statement
    - have no implicit result variable
    - do not support recursion
    - cannot be forward declared
      - the compiler must be able to inline an iterator
- characters
  - must be one byte
  - cannot represent most `utf-i` characters
  - can represent one of the bytes that makes up a multi-byte utf-i character
- integers vs floats
  - Integer types are not converted to floating-point types automatically, nor vice versa
    - have to use `toInt`|`toFloat` procs
- arrays
  - you can have different dimensions with different index types
    - but each dimension in a multidimensional array must be of the same type

## style guide

- not to sure how flexible these are, but copypasta till you pastacopy
- String literals are enclosed in double-quotes.
- parameter shadowing is possible, and an idiom (e.g. when you need it to be immutable)
- Nim does not allow silently throwing away a return value:
  - prepend the `proc` with `discard` or append `{.discardable.}` to the return type of proc

# syntax

## nim management

```php
  # installation
  # + wish they had this oneliner at the top of the fkn docs
  # + curl https://nim-lang.org/choosenim/init.sh -sSf | sh
  
  # manual installation
    # extract to ~/.nimble
    # mine looks like ~/.nimble/nim-VERSION
    # simlink to dir recommended by docs
    ln -s ~/.nimble/nim-0.19.0/bin ~/.nimble/bin
    # update PATH to include the simlink ~/.nimble/bin

  # choosenim
  # nim manager, think nvm
    choosenim 1.4.8 ## [install and] switch to version, stable|devel --latest]
    choosenim update stable ## updates stable version, stable|devel|self
    choosenim remove 1.4.8 ## removes a version, stable|devel|etc
    choosenim show # current version

  # nimble
  # ^ package manager, think pnpm
    nimble # see list of cmds (some are below)
    nimble CMD ... # cmds listed below
      install pkgX # installs pkg
        -d # only dependencies of PKG
        opts # pass opts to nim compiler
      develop pkgX # clones pkgs for dev, symlinks in the cur dir
      check # validates pkg in cur dir
      init [NAME] # a new project in the cur dir using NAME|curdir name
      uninstall pkgX
      build #todo
      run # todo
      test # todo
      doc # todo
      refresh # todo
      search # todo
      list #todo
      tasks # todo
      path #todo 
      dump #todo

```

## types

```php
  # types: skipped/todo
    nil


  # type conversion 
  # ^ convert between numerical types by using the type as a function 
    x: int32 = 1.int32 # i.e. int32(1)
    y: int8 = int8('a') # 'a' == 97'i8
    z: float = 2.5 # int(2.5) == 2
    sum: int = int(x) + int(y) + int(z) # sum == 100
  # ^ convert to any basic type into a string via $ stringify operator 
    $(z)

  # type creation 
    type 
      biggestInt = int64 # biggest integer type available 
      biggestFloat = float64 # etc

  # ordinal types special procs
  # ^ enumerations, integers, char, bool, subranges
    dec(x, n) # decrements x by n; n is an integer
    dec(x) # decrements x by one
    inc(x, n) # increments x by n; n is an integer
    inc(x) # increments x by one
    ord(x) # returns the integer value that is used to represent x's value
    pred(x, n) # returns the n'th predecessor of x
    pred(x) # returns the predecessor of x
    succ(x, n) # returns the n'th successor of x
    succ(x) # returns the successor of x

  # booleans 
  # ^ true|false 
  # ^ conditions in while, if, elif, when must be of type bool 
    ## type
      bool # booleans: true|false
    ## operators 
      not, and, or, xor, <, <=, >, >=, !=, ==
    ## example 
      # the and short circuits similar to javascript && 
      # ^ the 2nd operand is only evaluated if the first is truthy
      while p != nil and p.name != "xyz": 
        p = p.next
    
  # characters 
  # ^ always one byte 
  # ^ enclosed in single quotes
    ## type 
      char 
    ## operators 
      ==, <, <=, >, >= 
      $ # converts char to a string
    ## procs 
      ord # get the ordinal vlaue of a char
      chr # convert an integer to a char

  # strings 
  # ^ mutable 
  # ^ zero-terminated  ? and have a length field 
  # ^^ accessing the terminating zero is an error (it only exists so it can be converted to a `cstring` without doing a copy ?) 
  # ^ get length with builtin `len` procedure (never counts the terminating zero ?)
  # ^ assignment operator copies the string 
  # ^ use & operator to concatenate 
  # ^ use `add` to append 
  # ^ compared using hteir lexicogrpahical order 
  # ^ initialized wiht the empty string "" 
  # ^ must be double quoted (not single quotes like `char`)
    # TODO: examples 
    # type 
      string 
  
  # integers 
  # ^ int has the same size as a pointer
  # ^ Lossless Automatic type conversion is performed in expressions where different kinds of integer types are used
  # ^^ if the type conversion would cause loss of information, the EOutOfRange exception is raised (if the error cannot be detected at compile time).
    # type
      [u]int[8|16|32|64]
    # operators 
      + - * div mod < <= == != > >= 
      and or xor not
      shl shr # left|right bit shifting
    # examples 
      let  # used backticks below cuz single quote fks up the syntax highlighting
        x = 0 # type === `int`
        y = `0'i8` # sans backticks; type === int8
        z = `0'u` # sans backticks; type === uint
        ...etc

  # floats
  # ^ the default `float` always 64-bits 
  # ^ automatic type conversion in expressions with different kinds of floating-point types is performed: 
  # ^^ the smaller type is converted to the larger
    # type 
      float[32|64]
    # examples 
      var # used backticks as single quote fks up syntax highlighting
        x = 0.0 # type === float 
        y = `0.0'f32` # without backticks; type === float32 
        ...etc
    # operators
      + - * / < <= == != > >=

  # enumerations 
  # ^ vars of an enumeration type can only be assigned one of the enums values 
  # ^ enum values become a set of ordered symbols 
  # ^^ each symbol (i.e. value) is mapped at runtime, zero indexed in order of declaration 
  # ^ all comparison operators are available 
  # ^ can be qualified to avoid ambiguities: i.e. `Direction.south` (in example below)
  # ^ use $ to convert an enum value to its name 
  # ^ use ord to convert an enum value to its int value 
    type
      Direction = enum 
        north, east, south, west # 0, 1, 2, 3
    var x = south # typeof(x) == Direction; its value is south 
    echo x # writes south to stdout
    
  # subranges
  # ^ range of values from an integer to enumeration (the base type)
  # ^ assignments from/to base type to subrange type are permitted
    type
      MySubrange = range[0..5] # range of int, from 0 to 5

  # natural type
  # ^ often used for documentation and debugging
    type
      MyNatural = range[0 .. high(int)] # range of int from 0 to maximum int
  # positive type
    type
      MyPositive = range[1 .. high(int)] # range of int from 1 to maximum int
      
  # sets
  # ^ basetype can only be an ordinal type of a certain size
  # ^^ i.e. int8->16, uint8/byte->uint16, char, enum, etc
  # ^^ for signed integers must be in range `0 .. 2^16
  # ^ implemented as high performance bi vectors
  # ^ {} is the empty set
    type 
      CharSet = set[char] # declare a set of chars 
    var 
      x: CharSet
    x = {'a'..'z', '0'..'9'} # set containing a->z, 0->9
  # ^ set operations
    A - B # difference of two sets (A without B's elements)
    A * B # intersection of two sets
    A + B # union of two sets
    A < B # strict subset relation (A is a proper subset of B)
    A <= B # subset relation (A is subset of B or equal to B)
    A == B # set equality
    card(A) # the cardinality of A (number of elements in A)
    contains(A, e) # A contains element e
    e in A # set membership (A contains element e)
    e notin A # A does not contain element e
    excl(A, elem) # same as A = A - {elem}
    incl(A, elem) # same as A = A + {elem}

  # Bit fields 
  # ^ often used to define at ype for flags of a procedure
  # use together with Enum, sets and casting
    type
      MyFlag* {.size: sizeof(cint).} = enum
        A
        B
        C
        D
      MyFlags = set[MyFlag]

    proc toNum(f: MyFlags): int = cast[cint](f)
    proc toFlags(v: int): MyFlags = cast[MyFlags](v)

    assert toNum({}) == 0
    assert toNum({A}) == 1
    assert toNum({D}) == 8
    assert toNum({A, C}) == 5
    assert toFlags(0) == {}
    assert toFlags(7) == {A, B, C}

  # Arrays 
  # ^ fixed-length container; with each element having the same type; with each index being any ordinal type 
    type 
      IntArray = array[0..5, int] # index with 0..5
      QuickArray = array[6, int] # shorthand for an array indexed from 0..5
    var 
      x: IntArray 
    x = [1,2,3,4,5,6]
    for i in low(x)..high(x):
      echo x[i] # bounds checked at compile/runtime
    # array of enums
      type 
        Direction = enum 
          north, east, south west # remember: 1..4
        BlinkLights = enum 
          off, on, slowBlink, mediumBlink, fastBlink
        LevelSetting = array[north..west, BlinkLigts] # array type that cna hold 4 BlinkLights
      var level: LevelSetting 
      level[north] = on 
      level[south] = slowBlink 
      level[east] = fastBlink
      echo repr(level)  # --> [on, fastBlink, slowBlink, off]
      echo low(level)   # --> north
      echo len(level)   # --> 4
      echo high(level)  # --> west
    # multidimensionsal array 
      type 
        LightTower = array[1..10, array[north..west, BlinkLihts]]

  # sequences 
  # ^ similar to arrays (in having the similar constructs and contract) 
  # ^^ but of dynamic length which can e changed at runtime (like strings)
  # ^ always indexed with an int starting at 0
  # ^ constrcted by the array constructor [] or the builtin newSeq procedure
  # ^^ in conjunction with the array to sequence operator @ 
    # via array constructor
      var
        x: seq[int] # a reference to a sequence of integers
      x = @[1, 2, 3, 4, 5, 6] # the @ turns the array into a sequence allocated on the heap

    # via newSeq proc
      var inputStrings = newSeq[string](3)
      assert len(inputStrings) == 3
      inputStrings[0] = "The fourth"
      inputStrings[1] = "assignment"
      inputStrings[2] = "would crash"
      #inputStrings[3] = "out of bounds"
    
    # looping through sequences 
      for value in @[3, 4, 5]: # uses the items() iterator since only 1 variable: value
        echo value # 3 > 4 > 5
      for i, value in @[3, 4, 5]: # uses the pairs() iterator since there are 2 variables: i, value
        echo "index: ", $i, ", value:", $value # index: 0, value:3 > etc
  
  # open arrays

```

## operators, reserved words

```php
    # infix notation (a + b)  # always 2 arguments
    # refix notation (+ a) # always 1 argument
    "``" #  notation can also be used to call an operator just like any other procedure:
      if `==`( `+`(3, 4), 7): echo "True"

    +
    -
    *
    \
    /
    <
    >
    = # assignment
    @ # array to sequence operator 
    $ # tostring operator
    ~
    &
    %
    !
    ?
    ^
    .
    |
    : # start of a block
    ; # statement separator?
      const fac4 = (var x = 1; for i in 1..4: x *= i; x)
      # ^ computes fac(4) at compile time:
    and # 
    or # 
    not # 
    proc `$` (x: myDataType): string = ...
      # now the $ operator also works with myDataType, overloading resolution
      # ensures that $ works for built-in types just like before


  # reserd words
    var
    let
    const

    if
    elif|else if # shorthand else if
    else
    case
    of
    while
    for
    in

    discard


```

## constructs

```php
  # scopes, blocks, break, continue
  # ^ control flow statements (implicit)
  # ^^ basically anything following a `:`
  # ^ block statements (explicit)
  # ^^ open up new scopes
    while false: # creates new implicit scope
      var x = "hi" # # inside scope
      if x == "bye": continue # starts next iteration immediately
    echo x # outside scope -> doenst work

    block poop: # creates new explicit scope, label is optional
      ...

    block flush:
      x = hi
        while true:
          echo x # works
          break # exit loop, return to block
          # break flush # would exit the block (and the loop)
      echo x # works, still in scope

    echo x # doesnt work

```

## basic

```php
  #[
    all about indentation
  ]#

  # this is a comment
  ## this is a document comment; are tokens; permitted in a specific places
  #[ multiline, nestable comments ]#

  # var: declare local|global vars, mutable
  var # can span multiple lines
    x, y: int
    a, b, c: string
    a, b = 3  # assigns 3 to the variables `a` and `b`
  
  # const: immutable, must be available at compile time
  # ^ enforce compile time evaluation and put it into a data section
  # ^ see let for more flexibility
  const 
    x = "abc" # the constant x contains the string "abc"
    b = 1
    input = readLine(stdin) # Error: constant expression expected

  # let: immutable, single assignment variables
  # ^ once assigned a value it cannot change
  # ^ evaluated at runtime
  let
    poop = "flush"
    input = readLine(stdin) # works: unlike if const

  var x, y: int # both are integers
  var hundred: number = 100
  var thousand: number = 1_000 # _ is optional
  var change: number = 1.25 # floating point: verify type

  var char: string = 'A' # character literal (represents a single ASCII character)
  var name: string = "hello" # string literal, \ for escapes
  var nameFromResponse: string = readLine(stdin)
  var rawPath: string = r"C:\program files\nim" # raw string literal: \ is not an escape
  var htmlTemplate: string = """<div>poop</div>""" # can span multiple lines; \ is not an escape

  echo "this string"
  echo "this string", thenThisVar, "with this string"
  echo "x ", x  # outputs "x 3" if x === 3

```

### errors

```php
  # error types and their meaning
  ValueError # e.g. using the wrong type in an expression
  # inc, dec, succ, and pred operations
    EOutOfRange
    EOverflow


```

## control flow

```php
  # if statement
  # ^ each branch creates a new scope
    let name = readLine(stdin)
    if name == "": # fear the colon
      echo "Poor soul, you lost your name?"
    elif name == "name":
      echo "Very funny, your name is name."
    else: # required for string case
      echo "Hi, ", name, "!"
  # ^ oneliner: simple if statements
    if x: x = false
  # ^ with indentation for readability
    if thisIsaLongCondition() and
      thisIsAnotherLongCondition(
        1, 2, 3, 4):
      x = true

  # when statement
  # ^ distinction from if:
  # ^^ each condition must be a constant expression (its evaluated by the compiler)
  # ^^ statements within a branch do not open a new scope
  # ^^ compiler checks semantics & produces code  only for the statements that belong to the first condition that evaluates to true
  # ^^^ so when -> compile only the first branch that is true
  # ^^^ suiable for writing platform-specific code

  # case statement 
  # ^ used for subrange types or enumerations where it is of great help that the compiler checks that you covered any possible value.
  # ^ string case
    let name = readLine(stdin)
    case name # you have to cover every case this might be, else compiler errs
    of "":
      echo "Poor soul, you lost your name?"
    of "name":
      echo "Very funny, your name is name."
    of "Dave", "Frank": # either
      echo "Cool name!"
    else: # all other values, do this
      echo "Hi, ", name, "!"
  # ^ integers|ordinal type case: permit ranges
    echo "A number please: "
    let n = parseInt(readLine(stdin))
    case n
    of 0..2, 4..7: echo "The number is in the set: {0, 1, 2, 4, 5, 6, 7}"
    of 3, 8: echo "The number is 3 or 8"
    else: discard # hall othe values, ignore via discard
  
  # while statement
    echo "What's your name? "
    var name = readLine(stdin)
    while name == "":
      echo "Please tell me your name: "
      name = readLine(stdin)
    # count to 10 @see for statement
      echo "Counting to 10: "
      var i = 1
      while i <= 10:
        echo i
        inc(i) # increment i by 1
      # --> Outputs 1 2 3 4 5 6 7 8 9 10 on different lines

  # 
  # for statement
  # ^ loop any element an iterator provides
    echo "Counting to ten: "
    for i in countup(1, 10): # provided by system module
      echo i # 1 2 3 4 5 6 7 8 9 10 on different lines
    # counting down
      echo "Counting down from 10 to 1: "
      for i in countdown(10, 1): # provided by system module
        echo i # 10 9 8 7 6 5 4 3 2 1 on different lines
    # shorthand for counting up
      for i in 1 .. 10:
        ...
    # shorthand for zero index counting
      for i in 0 ..< 10:
        ...  # 0 .. 9
    # ^ or 
      var s = "some string"
      for idx, c in s[0 .. ^1]: # @see https://nim-lang.org/docs/system.html#^.t%2Cint
        ...
    # iterators for collections (like arrays and sequences) are
    # ^ items and mitems, which provides immutable and mutable elements respectively, and
    # ^ pairs and mpairs which provides the element and an index number (immutable and mutable respectively)
      for index, item in ["a","b"].pairs:
        echo item, " at index ", index
        # => a at index 0
        # => b at index 1

```

## procedures

```php
  # proc `yes` + usage
    proc yes(question: string): bool = # expects string, returns bool
      echo question, " (y/n)"
      while true:
        case readLine(stdin)
        of "y", "Y", "yes", "Yes": return true # exit loop & procedure
        of "n", "N", "no", "No": return false # exit loop & procedure
        else: echo "Please be clear: yes or no"

    if yes("Should I delete all your important files?"):
      echo "I'm sorry Dave, I'm afraid I can't do that."
    else:
      echo "I think you know what the problem is just as well as I do."
  
  # you can specify defualt values
    proc poop(flush = 'always', wipe = 'sometimes')
  # procs return their last expression by defualt
  # ^ unless theres a result|return statement
    proc helloWorld(): string = "Hello, World!" 
  # ^ and have use the `result`
    proc sumTillNegative(x: varargs[int]): int = # result var below is an int
    for i in x:
      if i < 0:
        return # if this is here
      result = result + i # result is automatically declared & initialized to the type of the return for you

  # redeclare parameters with var to make them mutable
    proc divmod(a, b: int; res, remainder: var int) =
    res = a div b        # integer division
    remainder = a mod b  # integer modulo operation

    var
      x, y: int
    divmod(8, 5, x, y) # modifies x and y
    echo x, y

  # run a proc but discard its return value
    proc poop(...): string = ...
    discard poop()... # without modifying the signature
    proc ... string {.discardable.} = # go back and modify its signature
    
  # name arguments at the invocation spot
    proc poop(one: int, two: int, three: int, four: int, ...)
  # ^ now the argument order below doesnt need to match the parameter order above
    poop(four = 4, three = 3, two = 2, one = 1)

  # overloaded procedures
    proc toString(x: int): string =
      result =
      ...
    proc toString(x: bool): string =
      result = 
      ...
    # invoke it and nim will call the right version
    # based on the top of argument 
    assert toString(13) == ... # the toString(x: int) proc
    assert toString(true) == ... # the toString(x: bool) proc

  # forward declarations
    proc even(n:  int): bool # declared so the name is available beefor eits fully defined
    proc odd(n: int): bool =
      assert(n >= 0)
      if n == 0: false
      else:
        n == 1 or even(n-1) # even is not fully defined yet, but we can use it
    proc even(n: int): bool = # now its fully defined 
      assert(n >= 0)
      if n == 1: false
      else:
        n == 0 or odd(n-1) # uses odd, which is fully defined
  

```

## iterators

```php
  # recreating the countup proc via an iterator
    iterator countup(a, b: int): int =
      var res = a
      while res <= b:
        yield res
        inc(res) # incrmeent by the value stored in res
    

```

# builtin

```php
  from strutils import parseInt

  # dollars 
  # ^ converts simple types to strings
    $() == "()"
    ${23, 45} == "{23, 45}" # for sets
    $(@[23, 45]) == "@[23, 45]" # for seqs
    $(1 .. 5) == "1 .. 5" # for slices
    $(@[23, 45].toOpenArray(0, 1)) == "[23, 45]" # for openarrays

  # repr proc 
  # ^ convert anything to string
    var s: seq[string] = @["test2", "test2"]
    var i = @[1, 2, 3, 4, 5]
    echo repr(s) # => 0x1055eb050[0x1055ec050"test2", 0x1055ec078"test2"]
    echo repr(i) # => 0x1055ed050[1, 2, 3, 4, 5]

  # doAssert
  doAssert $(typeof(42)) == "int"
  doAssert $(typeof("Foo")) == "string"

  len(poop) # get the lenght of poop array
  low(poop) # the lowest valid index in the poop array 
  high(oop) # the highest valid index in poop array
```

# packages

```php
  # https://github.com/inim-repl/INim

```

# copypasta with comments

```php
  # compile and then immediately execute greetings.nim
  nim compile --run greetings.nim  # --run|-r
  nim compile --run greetings.nim arg1 arg2 # pass cmdline args
  nim c -d:release greetings.nim # compile a release version, turn of most checks, turn on optimizations

```
