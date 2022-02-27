# nim syntax

- useful examples

```python

# define a type
type
  Dog = object
    age: int
# procedures arent directly associated with the dog type
# instead the self parameter defines the type it is associated with
proc bark(self: Dog):
  echo("Woof!")
# instantiate an instance
let dog = Dog(age: 3)
dog.bark()

# import map, -> and split to do some functional programming
import sequtils, future, strutils
# create a list
let list = @["dominik picheta", "andreas rumpf", "desmond hume"]
# use the imported builtins to do stuff to the list
list.map(
  (x: string) -> (string, string) => (x.split[0], x.split[1])
).echo

# doing the samething using procedural programming
import strutils
for name in list:
  echo((name.split[0], namessplit[1]))

# strings
import strutils # provides unindent procedure
let multiline = """ this
  keeps whitespace
  and indententation
"""
echo multiline.unindent # removes all indentetion


# using assert to test your code
assert someProc() == 'returns this value"
assert discarded() == nil
```
