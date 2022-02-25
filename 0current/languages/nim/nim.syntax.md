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

- builtin types are lowercase
- user-defined types are SentenceCase

## compilation flags

```python
  --gc:GC_NAME # chose the type of garbage collector to use

```

## other stuff

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
```

## operators

```python
  | # or, e.g. a | b
  $ # converts its input to a string, e.g. $someVar

```

## variables

```python
# keyword name: type = value
let poop = "hello" # runtime immutable var, value must be known at runtime
var poop = "flush" # runtime mutable var
const poop = "flush" # compile time immutable var, value must be computable at compile time

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

```python
proc someName(varName: varType): returnType =
  # procedure body

# showNumber(3.14)
# showNumber(42)
```

## control flow

### if / when / case

```python
# runtime check
if 42 > 0:
  echo "true"

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
