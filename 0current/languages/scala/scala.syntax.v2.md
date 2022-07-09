# scala syntax for scala 2.11.4

- bookmark
  - page 80
- specifically for scala 2, and generally only when it deviates from `./scala.syntax.md`
  - start in `scala.syntax.md` and move here if syntax errs fk u up
- taken largely from
  - essential scala
    - noel welsh & dave gurnell

## merge into scala.syntax.md

- generalities
  - everything is block scoped
  - all values are objects
  - all expressions evaluates to values
  - methods are called on objects
  - fields: values stored in an entity
  - declarations: bind names to values and are not expressions
    - classes
    - types
- infix operator: can be used with any method that takes one parameter
  - regular: `"poop".split" "`
  - infex: `"poop" split " "
- other (less common) operators
  - prefix
  - postfix
  - right-associative
  - assignment-style
- compile time requirements:
  - no syntax errors
  - type correct
- evaluation requirements
  - logical requirements based on code, e.g. runtime parameters, guards, etc

## gotchas / distinctions with scala 3

- everything generally within curly braces
- use the `new` keyword when instantiating things

## quickies

### scala REPL

```sh
# start a repl
scala
# cmds
:pasta # type/paste multi line code; ctrl d to execute
:quit # exit; ctrl c
:type <expression> # get the return type annotation

```

## operators

```scala
# eq compares by reference identity
someObj eq otherObj // true if they have the same hashCode

```

## vals, vars, functions

### vals / vars

```scala
val fname = "poop"
var lname = "flush"

```

### defs

```scala
def name: String = {
  val fname = "poop"
  var lname = "flush"
  s"$fname $lname"
}

```

### blocks

- group sequences of expressions returning the last one
- use cases
  - execute side-effects before calculating a final value
  - create a scope for naming intermediate results

```scala
{
  println("p")
  "oop"
}
```

## control structs

### blocks

- group sequences of expressions returning the last one
- use cases
  - execute side-effects before calculating a final value
  - create a scope for naming intermediate results

```scala
{
  println("p")
  "oop"
}
```

### if

```scala
if (1 < 2) "yes" else "no"

```

### pattern matching

- like an extended if expressions that enables us to evaluate an expression depending on the shape of its operand

## data types

- value types: evaluted when defined
- reference types: evaluated when called
  - be careful, side effects within reference types (e.g. objects, classes) e.g. println statements are evaluted when the entity is loaded
  - the value is executed only when invoked tho

### Nothing

- the type for throw expressions

```scala

def wtf: Nothing = throw new Exception("yolo")
wtf // Java.lang.exception
```

### objects

- an abject with an `apply` method can be called like a fn
- companion objects: an object whose name shadows a class
  - technically a singleton with its own type
  - use casees
    - a way to provide static class declarations for instances of the class

```scala
object Poop {
  def name: String = "Big Poops"
  def hello(name: String): String = s"hello $name"
}

```

#### case objects

- an object with automatic behaviors
  - toString method
  - implements `scala.Product` and `java.io.Serializable` traits
- use case
  - wherever you have a class with no constructor arguments; use a case object

```scala


```

### classes

- templates for contructing objects of a particular type

```scala

// no constructor
class Poop {
  val flush: Boolean = true
  def wipes: Boolean = {
    true
  }
}
val bigPoopa = new Poop // Poop@1234
bigPoopa.wipes

// with constructor
// use val key: Type for automatic immutable field binding
// use var for automatic mutable field binding
// ^ wont need to reassign
class Boop(namef: String, namel: String, val mname: String = "Koopa") {
  val fname = namef
  val lname = namel
  def name: String = s"$fname $mname $lname"
}
// if you specify the param names you can send in any order
val bigBoopa = new Boop("noah", "hall")
bigBoopa.name
```

#### case classes

- shorthand for defining a class, companion object, and sensible defaults
  - scala autoamtically generates a class with parameters bounded to fields and a companion objection
  - companion object with
    - an apply method acting as a factory for creating instances
      - this way you dont have to use the `new Poop` and just `Poop(...)`
    - extractor pattern for use in pattern matching
  - toString method printing the type and constructor args
  - equals method for comparing instances by value (not reference)
  - hashCode for getting the ID of an instance
  - copy method for duplicating an instance potentially overriding constructor values
  - implement `java.io.Serializable` and `scala.Product` traits

```scala
case class Poop(fname: String, lname: String) {
  def name: String = s"$fname $lname"
}

val boop: Poop = new Poop("noah", "hall")
boop.toString // String = Poop(noah,hall)
boop.hashCode // some random int

```

#### value classes

- classes that extend from AnyVal
-
