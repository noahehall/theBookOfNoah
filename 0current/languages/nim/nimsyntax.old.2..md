# NIM syntax

- bookmark: <https://nim-by-example.github.io/for_iterators/>

## TLDR

- only the syntax

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

## compilation

```php
  # @see bash aliases for more
  # create an executable
    nim c somefile.nim # compile to an executable
    ./somefile # run the executable

  # compile and immediately run
    nim c -r somefile.nim

```

## nim vars

```php
  # statically typed, but also dynamically inferred
  # ^ cannot reassign types without typecasting

  var x = int(1.0 / 3) # type conversion
  var x: int = 1
  var y: seq[into] = @[]

  # computed at compilation time
  const someConst = someProc()

  # mutable
  var
    a = "some string"
    b = 'c' # char
    c = 50 # int
    c: int # initialized to 0

  # immutable
  let
    d = "some string"
    f: float # error, must be initialized at creation
```

## procs

```php

  proc myProc(): string =
    for letter in 'a' .. 'z':
      result.add(letter) # will return the full alphabet
      # result is a special var, thats always available
      # ^ and automatically returned
      # ^ never create another variable named result
      # ^ as you will override the implicit result
```

## blocks

```php
  #  can be used to create a label so that it’s possible to break out of nested loops.

  block busyloops:
    while true:
      while true:
        break busyloops

```

## control flow

### if

```php
  if guess < answer:
    echo "Too low, try again"
  elif guess > answer:
    echo "Too high, try again"
  else:
    echo "Correct!

```

### case

```php

  # You can use strings in the switch statement
  # Sets and ranges of ordinal types are also usable
  # case statements, like most things, are actually expressions
  # It is required that every possible case be covered

  case "charlie":
    of "alfa":
      echo "A"
    of "bravo":
      echo "B"
    of "charlie":
      echo "C"
    else:
      echo "Unrecognized letter"

  case 'h':
    of 'a', 'e', 'i', 'o', 'u':
      echo "Vowel"
    of '\127'..'\255':
      echo "Unknown"
    else:
      echo "Consonant"

  proc positiveOrNegative(num: int): string =
    result = case num:
      of low(int).. -1:
        "negative"
      of 0:
        "zero"
      of 1..high(int):
        "positive"
      else:
        "impossible"

  echo positiveOrNegative(-1)

```

### loops

```php
  # continue : skip the rest and begin the next iteration
  # break : can be used to immediately leave the loop body.

  while true:
    echo "you are in a forever loop"

    break

```

## types

### strings

```php

  var myString = "poop"

  myString
    .add("concatetnate")


```

### number types

```php
  var myNum = 1

  myNum += 1

```

## copy pasta

```php

# ['F', 'o', 'o', 'b', 'a', 'r']
var z = "Foobar"
proc ffi(foo: ptr array[6, char]) = echo repr(foo)
ffi(cast[ptr array[6, char]](addr z[0]))

```
