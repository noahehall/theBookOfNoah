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

## types

- primitives

```python
  int # integer
  float # decimals

```

- complex

```python

type
  SomeType = object
    propName: type

# procedures arent directly associated with the dog type
# instead the self parameter defines the type it is associated with
proc someFn(self: SomeType):
  echo("Woof!")

let instance = SomeType(propName: someValue)
instance.someFn()

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

```
