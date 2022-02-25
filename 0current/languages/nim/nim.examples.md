# nim syntax

- useful examples

```python

type
  Dog = object
    age: int

# procedures arent directly associated with the dog type
# instead the self parameter defines the type it is associated with
proc bark(self: Dog):
  echo("Woof!")

let dog = Dog(age: 3)
dog.bark()

```
