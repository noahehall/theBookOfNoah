# nim

- pure syntax related notes, see examples doc for real world examples

## conventions

- primitive types & variables start with lowercase, constructor types start with Uppercase

## compilation flags

```python
  --gc:GC_NAME # chose the type of garbage collector to use

```

## other stuff

```python

# single line comment
#[ multline comment
]#

when false:
  echo("this code is commented out")
```

## operators

```python
  | # or, e.g. a | b
  $ # converts its input to a string, e.g. $someVar

```

## variables

```python

let poop = "hello" # let creates immutable variables
var poop = "flush" # var creates mutable variables

```

## types

- primitives

```python
  int # integer
  float # decimals
  string # must be enclosed in double quotes
  bool # true | false
  char # single ASCII characters, enclosed in single quotes

```

- complex

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
if 42 > 0:
  echo "true"

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
