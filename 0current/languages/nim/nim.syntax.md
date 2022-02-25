# nim

- pure syntax related notes, see examples doc for real world examples

## conventions

- primitive types & variables start with lowercase, constructor types start with Uppercase

## compilation flags

```python
  --gc:GC_NAME # chose the type of garbage collector to use

```

## operators

```python
  | # or

```

## variables

```python

let poop = "hello"

```

## types

- primitives

```python
  int # integer
  float # decimals

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

## functions

```python
proc showNumber(num: int | float) =
  echo(num)

# showNumber(3.14)
# showNumber(42)
```

## control flow

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
