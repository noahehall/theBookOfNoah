# scala syntax for scala 2.11.4

- bookmark
  - page 129: function types
- specifically for scala 2, and generally only when it deviates from `./scala.syntax.md`
  - start in `scala.syntax.md` and move here if syntax errs fk u up
- taken largely from
  - essential scala
    - noel welsh & dave gurnell

## merge into scala.syntax.md

### links

- [cake pattern: dependency injection](http://jonasboner.com/real-world-scala-dependency-injection-di/)

### stuff

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

### terms

## gotchas / distinctions with scala 3

- generally you need to wrap the body of things within curly braces
- use the `new` keyword when instantiating things
  - the `apply` def can still be used without `new` to instantiate instances
- functions vs methods
  - both are defined with `def`
  - a method however is attached to an entity, and is passed by name
  - a function is defined outside an entity
    - can be passed as a value to another fn, or returned from a method

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
// eq compares by reference identity
someObj eq otherObj // true if they have the same hashCode

```

## vals, vars, functions

### vals / vars

```scala
val fname: String = "poop"
var lname: String = "flush"

```

### defs

```scala
// the curly braces arent necessary here
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

- like an extended if expression that enables us to evaluate an expression depending on the shape of its operand

```scala

case class Poop(fname: String, lname: String) {
  def name: String = s"$fname $lname"
}

val boop: Poop = new Poop("noah", "hall")

object notdadaddy {
  def inspect (p: Poop): String =
    p match {
      case Poop("noah", "hall") => "You are not the father"
      case _ => "you are the father"
    }
}

println(notdadaddy.inspect(boop))
println(notdadaddy.inspect(Poop("hall", "noah")))
```

## data types

- value types: evaluted when defined
- reference types: evaluated when called
  - be careful, side effects within reference types (e.g. objects, classes) like println statements are evaluted when the entity is loaded and not when the reference is invoked
  - the value is executed only when invoked tho
- in general
  - prefer case objects & classes over objects/classes where appropriate
  - prefer sealed traits over traits
  - prefix entities with `final` by default and remove it only when need actually need to extend from the entity

### modifiers

- sealed: all subtypes must be defined in the same file as the sealed entity
- final: disallow all extensions of an entity prohibiting creation of any additional subtypes
- with: allows extending beyond 1 entity, e.g. A extends B with C with D with etc

### generics

- specified at signature and provided at call site
- enables the caller to send in any datatype that quacks like a duck
- generic types are abstract types, and are made concrete when the class is instantiated

```scala
// accepts generic type param A
// determined at callsite

// e.g. in a class signature
final case class Poop[A](p: A)
Poop(true); Poop("string")

// e.g. in a def signature
// ^ generally scala can infer the type
// ^ else specify it in [] at callsite
def boop[A](p: A): A = ??
boop[Int](1); boop[String]("etc")

// e.g. in an algebraic sum type
sealed trait Poop[A]
final case class Boop[A](blah: A) extends Poop[A]
val flush = new Boop[Boolean](true)

```

### algebraic data types

- any data that uses the Sum or Product type patterns
- sum type: is-a relationship; modal data that can be one of a set of types
  - e.g. a feline is a tiger, lion, or a thundercat
- product type: has-a relationship; modal data that contains other data
  - e.g. a cat has a color and a favorite food

```scala
// sum type
// ^ A is a B or C
sealed trait A
final case class B() extends A
final case class C() extends A

// product type
// ^ A has a b: B and a c: C
trait A {
  def b: B
  def c: C
}
```

#### Structural recursion

- recursively decomposing algebraic data types into their respective parts in a mechanical way
  - i.e. decompose data into its component parts based on the shape (mechanics) of the data
  - basically its whenever you implement logic based on the shape of some entity; enabling you to abstract over subtypes of the domain
- polymorphic decomposition: OOP style;
  - product types: where a trait provides a concrete method thats expected to be overridden by its subtypes
  - sumtypes: where a trait provides an abstract method thats required to be implemented by its subtypes
- pattern matching decomposition: functional style:
  - i.e. whenever you use a match statement
- when to choose which: depends on the kind of extensibility required in the future
  - polymorphic: adding new data doesnt require changing existing code (because you provide the implementation on the base entity)
    - you simply add the new data to the base trait / companion object
  - functional: adding new methods doesnt require changing existing code
    - you add the concrete method to a base trait, which pattern matches across all subtypes and applies (potentially) a distinct implementation for each subtype

```scala
// structural recursion with polymorphic dispatch (aka polymorphism)
sealed trait SuperPoop {
  def fname: String
  def lname: String
  // product type: expected to be overridden by subtypes
  def hasa: String = "structural recursion"
  // sum type: required to be implemented
  def isa: String
}
final case class Poop(fname: String, lname: String) extends SuperPoop{
  override def hasa: String = "data that returns a string"
  def isa: String = "type of string"
}
println(Poop("noah","hall").hasa)
println(Poop("hall","noah").isa)

// structural recursion with pattern matching
sealed trait SuperPoop {
  def fname: String
  def lname: String
  // both could also be in a companion object
  // you could also convert to an abstract method
  // ^ just have an override if needing specific implementations
  // ^ and defining it in the trait is DRYer
  // ^ if the method defepens on external data, then it shouldnt be in the trait
  def hasa: String =
    this match {
      // matching on the data it has
      case Poop(fname, lname) => s"name is: $fname $lname"
    }
  def isa(something: SuperPoop): String =
    something match {
      // matching on the subtype it is
      case Poop(_, _) => s"Poop isa subtype of SuperPoop"
    }
}
final case class Poop(fname: String, lname: String) extends SuperPoop
val whatAmI = Poop("noah","hall")
println(whatAmI.hasa)
println(whatAmI.isa(whatAmI))
```

#### Recursive data

- data that is defined in terms of itself
- enables you to describe data of potentially unbounded size without stack overflows
- the idea is to create a class, and an object that extends from that class
  - the class will be used to create instances of specific value of the domain (e.g. an integer within the domain of all integers)
  - the object is used to specify the base case (in recursion) representing the end of the recursive loop
    - the base case should return the identity for the data domain,
      - i.e. a value that doesnt change the result (like adding 0 to a number)
- or just use a lazy data type, e.g LazyList, check scala 3 syntax

```scala
import scala.annotation.tailrec

sealed trait MyUnboundedData {
  // throws err if this fn cant be put into tailcall recursion
  // ^ you generally need to add an accumulator to the fn signature
  // ^^ transforms stack allocation into heap allication
  @tailrec
  def someRecurseFn(x: MyUnboundedData): MyUnboundedData = ???
}
case object MyUnboundedDataBaseCase extends MyUnboundedData
final case class MyUnboundedDataCase(data: MyUnboundedData) extends MyUnboundedData

```

### Nothing

- the type for throw expressions

```scala

def wtf: Nothing = throw new Exception("yolo")
wtf // Java.lang.exception
```

### traits

- interfaces/abstract classes/templates for creating concrete classes
- express that 2/more classes can considered the same, if both implement the trait
  - i.e. 2/more classes share a common super-type
- characteristics
  - cant have constructors
  - can have abstract methods/vals/etc that are requirements for extenders
    - never define vals in traits, instead let the extender redefine it as a val (which is legal)
      - TODO: confirm if this stands for scala 3
  - can have concrete methods that provide functionality to extenders

```scala
trait SuperPoop {
  // techncially defs are just a general version of a val
  // so the extender can redefine these as vals without err
  def fname: String
  def lname: String
  def name: String
}

case class Poop(fname: String, lname: String) extends SuperPoop{
  def name: String = s"$fname $lname"
}

```

#### sealed traits

- traits whose subtypes are defined in the same file
- informs the compiler that this is the full set of subtypes of this trait
  - the compiler will give better errs at compile time

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
