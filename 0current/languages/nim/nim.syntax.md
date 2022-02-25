# nim syntax

- to keep this and the `nim.md` from being too long

## conventions

- primitive types & variables start with lowercase, constructor types start with Uppercase

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
  Dog = object
    age: int
let dog = Dog(age: 3)

```

## functions

```python
proc showNumber(num: int | float) =
  echo(num)

# showNumber(3.14)
# showNumber(42)
```
