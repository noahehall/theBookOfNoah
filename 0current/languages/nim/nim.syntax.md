# nim

- pure syntax related notes, see examples doc for real world examples

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

- builtin

```python
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
  float # decimals
    let
      a = 100.0
      b = 100.0'f32
  float32,64
  string # must be enclosed in double quotes
    let
      poop = "flush"
      flush = r"raw string, no escape sequences required"
      multiline = """can be split on multiple lines, no escape sequences required"""


  bool # true | false
    let t = true
  char # single ASCII characters, enclosed in single quotes
    let
      a = 'a'
      b = '\109'
      c = '\x79'
  # escape sequences with chars, but you might aswell use a string
    let
      carriageReturn = '\r'
      lineFeed = '\l'
      tab = '\t'
      backslash = '\\'
      singleQuote = '\''
      doubleQuote = '\"'

  void
```

- user defined

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

- procs with return values, the return value must be used OR discard
  - if the last expression has a non void value, that value is implicitly returned
    - no need to return it, nor is it idiomatic nim
- procs without return values return void (adding void keyword is optional)
- proces cant be used before their definition without a forward declaration
  - forward declaration: the function signature without a body
- procs without parameters can omit the paranthesis in the difinition

```python
proc someName(paramNam: paramType): returnType =
  # procedure body
echo someName("poop")
discard someName("oop")

proc someName = # returns void, and doesnt accept params
  # procedure body
proc someName = echo "defined on one line"

# anonymous proc: doesnt have a name and surrounded by paranthesis
var someName = ( proc (params): returnType = "poop")
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
- future
  - ->
- strutils: string utilities
  - split
- system: builtin types, auto included in your source code
