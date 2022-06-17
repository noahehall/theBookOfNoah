# scala

- all about the syntax
- as usual, search for `/// Something` or `# Something` to find what youre looking for

- todos
  - find sealed traits in the scala docs
  - todo: need to do a better job at categorizing operators, especially the mutable vs immutable ones
  - extending, using `poop extends blah1, blah2` vs `poop extends blah1 with blah2`
  - definitions with signatures like `def poop(...) { (...) => ??? }`
    - think this has something to do with currying, check coursera discussion
  - definitions with signatures like `def poop(...)(...) => ???`
    - basically your able to pass 2 sets of parameters, which are both available in the fn body
  - scala.math.Ordering[A]: pretty sure i have the syntax wrong
  - need to do better on the using, given explanations & examples
  - conditional given definitions needs clarity

## links

- [intellij toolbox, fkn use it](https://www.jetbrains.com/toolbox-app/)
- [scala & intellij: getting started](https://docs.scala-lang.org/getting-started/intellij-track/getting-started-with-scala-in-intellij.html)
- [example gitignore for scala](https://alvi nalexander.com/source-code/scala/sample-gitignore-file-scala-sbt-intellij-eclipse/)
- examples
  - [groupBy and groupMap](https://blog.genuine.com/2019/11/scalas-groupmap-and-groupmapreduce/)
  - [scala 3 example project](https://github.com/scala/scala3-example-project)
- refs
  - [adt: algebraic data types](https://docs.scala-lang.org/scala3/book/types-adts-gadts.html)
  - [classes: inner classes](https://docs.scala-lang.org/tour/inner-classes.html)
  - [classes: open classes](https://docs.scala-lang.org/scala3/reference/other-new-features/open-classes.html)
  - [enums: desugaring](https://docs.scala-lang.org/scala3/reference/enums/desugarEnums.html)
  - [enums](https://docs.scala-lang.org/scala3/reference/enums/enums.html)
  - [given instances and using clauses](https://docs.scala-lang.org/scala3/book/ca-given-using-clauses.html)
  - [interacting with java](https://docs.scala-lang.org/scala3/book/interacting-with-java.html)
  - [List](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html)
  - [methods: extensions](https://docs.scala-lang.org/scala3/book/ca-extension-methods.html)
  - [methods: polymorphic](https://docs.scala-lang.org/tour/polymorphic-methods.html)
  - [multiversal equality](https://docs.scala-lang.org/scala3/book/ca-multiversal-equality.html)
  - [pattern matching: match types](https://docs.scala-lang.org/scala3/reference/new-types/match-types.html)
  - [pattern matching: option-less](https://docs.scala-lang.org/scala3/reference/changed-features/pattern-matching.html)
  - [pattern matching](https://docs.scala-lang.org/tour/pattern-matching.html)
  - [scala 3 reference](https://docs.scala-lang.org/scala3/reference/index.html)
  - [trait parameters](https://docs.scala-lang.org/scala3/reference/other-new-features/trait-parameters.html)
  - [type: abstract types](https://docs.scala-lang.org/tour/abstract-type-members.html)
  - [type: generics](https://docs.scala-lang.org/scala3/book/types-generics.html)
  - [type: intersections](https://docs.scala-lang.org/scala3/book/types-intersection.html)
  - [type: lower bounds](https://docs.scala-lang.org/tour/lower-type-bounds.html)
  - [type: opaque](https://docs.scala-lang.org/scala3/book/types-opaque-types.html)
  - [type: type classes](https://docs.scala-lang.org/scala3/book/ca-type-classes.html)
  - [type: unions](https://docs.scala-lang.org/scala3/book/types-union.html)
  - [type: upper bounds](https://docs.scala-lang.org/tour/upper-type-bounds.html)
  - [type: variance](https://docs.scala-lang.org/scala3/book/types-variance.html)
  - [Seq scala 2 ref](https://www.scala-lang.org/api/current/scala/collection/immutable/Seq.html)

## basics

### gotchas

- todo: move this entire section into a code block
  - indentation is important (think python)
  - compiler evalutes type annotations at compile time, to guard against some kinds of errors at run-time
    - except in worksheets, as there is no distinction between compile & runtime
  - vals vs defs
    - vals are always evaluated once, and the result is reused each time their name is used
    - the body of defs are evaluated each time the def is invoked, if its never invoked then never evaluated
      - thus one reason to prefer defs over vals is to delay the evlaution of a computation until the point in a progran where its effectively needed
  - companion objects: sealed traits and objects can have the same name
    - it refers to the object when its used on the right-hand side of a definition, or when it is passed as an argument to an operation
    - it refers to the sealed trait (the type) when it is used in a type annotation
    - check the syntax file for mimicking enums in scala 2
  - dont forget about the special `apply` definition
    - any entity with an `apply` definition can be invoked like a `fn()`
  - several standard library definitions have context parameters (e.g anything that relies on Ordering, like List(...).min, or sort fns)
    - each can be modified by defining given instance before invocation

```scala

// several standard library definitions use context parameters
// given intReverseOrdering: Ordering[Int] = Ordering.Int.reverse
// ^ uncomment this line and it outputs 3
println(List(1, 2, 3).min) // should output 1

```

### setup

#### env setup

```sh

# verify env
java --version # everything works on 17.0.3, everywhere else says to use v8, so dunno
sbt --version
scala --version

```

#### project setup

- scala application structure
  - computer files: see `sbt.md` for more indepth information
    - `root/project` sbt's internal files
    - `root/target` generated files
  - developer files
    - `root/build.sbt` sbt's build definition file
    - `root/src/main/scala/*` where all your scala files go
      - `.scala` are scala files;
        - one of these files must have a top-level/object definition annotated with `@main` as the program entrypoint
        - cant have top level statements, only top level definitions: def, val, var, object, trait and class
      - `.sc` are scala worksheet files; evaluated top to bottom, line by line
    - `root/src/test/scala/*` where all your test files go

```scala
// program entry point, can be in any source file
@main def run(): Unit = ???

// file: src/main/scala/poop/soup/woop/wtf.scala
// package: assign a namespace to all things in this file
// ^ imports of this file access its things as packageName.thing, e.g. poop.flush
// ^ source files should mirror the packages structure on harddisk
// ^ thus object Wtf in file src/main/scala/poop/soup/woop/Wtf.scala
// ^^ should be in package poop.soup.woop
package poop.soup.woop

object Wtf:


/// imports
// ^ scala (e.g. scala.Int), java.lang and scala.Predef are automatically imported
import scala.math._ // wildcard import in scala 2
import someObj.* // wildcard import in scala 3
import StringUtils.{truncate, containsWhitespace} //import some members of package
import poop.Flush // import a specific member
```

### quickies

- semi colons only required if multiple statements exist on the same line
- all data types are objects, so that have a `someVar.someMember`
- you can coerce numbers to strings, e.g. `"ima string " + 5`
- there are no breaks/continues in scala
  - use `return` statement to break out of a loop
  - use an if statement to branch from the remaining code block

```java
println("console log")

// single line comment
/*
multieline
comment
*/

```

## operators

```scala
/// conditionals
// : == != > < <= =>
thiz == that
thiz != that
thiz > that

/// logical
// && || !


/// arithmetic
// the result will always have the type of its widest operand
// ^ 1 + 2.0 // Double
+ - / % *
someNum += 1
someNum -= 1 // *= /=

// a generator
// ^i.e if that.thiz: Option[Int], then thiz: Int
thiz <- that.thiz

// operators that end with : are all right-associative
:: // represents a list with 2 elements, usually the subtype + nil, or the head + tail
  // ^ can be used to create a new list from an existing list, with an el prepended to head
    // its a constant time operation, as the existing list isnt copied, its reused
    // List(alice, bob) == alice :: bob :: Nil
    // is right-associative, i.e in the above example it starts from Nil, and moves list
    // can be left associative via the comma operator on Nill,
      // ^ Nil.::(bob).::(alice)
// prepend a value onto a collection
addthisToTheBegging +: ofThisCollection
// append a value onto a collection (not recommended as its innefficient)
addThiStoTheEnd :+ ofThisCollection
// concatenate two collections of the same type
addThis ++ toThis
thisMutableThing ++= someOtherthing
prependThis +=: ontoThisMutableThing
thisMutableThing --= removeTheseFromTheLeftthing
thisMutableThing -= 3 // removes the first 3 if found
// map of symbols to alphabetic equivalents
// + .updated
// ++ .concat
// - removed
// -- removedAll
// +: prepended
// :+ appended
// += addOne
// ++= addAll
```

## keywords

```scala
Nil // an empty list
to // e.g. 1 to 10
until // e.g. 0 until poop.length
??? // placeholder for an expression/body of a def
  // def poop: String = ???
  // val blah: Int = ???
_ // wildcard placeholder
extends // e.g. case class Poop() extends BigerPoop
end Poop // optional syntax for signaling the end of some thing, e.g. a case class/object/def/etc

```

## variables

- are evaluated only once, and generally used over defs for intermediate expressions

```scala

val immutableValue: Boolean = true
var mutableValue: Boolean = true

// Int 100
// generally you should pref defs for this kind of thing
// ^ as vals are always evaluated once, while defs are only evaluated when invoked
// ^^ makes sense for costly evaluations
val interestingVal: Int =
  val ten = 10
  ten * ten
```

## types

- types can automatically get wider, e.g. Int used in place of a Double, but never stricter,
  - e.g. Double in place of Int will cause the compiler to throw an error
- are either
  - sets of operatoins with an unbounded number of possible values
  - sets of possible values with an unbounded number of operations

```scala
// val types extend from scala.Any > scala.AnyVal (primitives types) >
/// BigDecimal longer than a Double
/// BigInt wayyyy bigger than Int
/// Boolean true | false
/// Byte -128 to 127
/// Char unsigned, 0 to 65535
/// Double 64 bit floating point; a decimal longer than a Float, but only 15 digits of precision
/// Float dude its a long decimal
/// Int 32 bit signed -2147483648 to 2147483647
/// PosInt positive Ints
/// Long dude its a long number
/// Short -32768 to 32767
/// Unit i.e. void, doesnt return anything

// ref types extend from scala.Any > scala.AnyRef (reference types) >
/// Array[subtype]
/// Iterable[subtype]
/// List[subtype]
/// Seq[subtype]
/// String text

val superLongNumber: BigInt = BigInt("insert really long number here")

val desc = "I am immutable, inferred type String"
val desc: String = "I am also a string"
// intepolation
val descLong = s"inject another string here: $desc"

val num: Int = 100
val num: Int = 1_000 // nice

val bool: Boolean = false
val bool: Boolean =
  if 1 > 0 then true
  else if 0 > 1 then true
  else false

// working with types
// generally there is a .toInt, .toIntOption, etc, on everything,

/// UPPER BOUNDS type
// Poop is a subtype of Flush,
type Poop <: Flush
```

### Int

- the smallest integer ( Int.MinValue in Scala) has no positive representation. This has caused bugs in real systems, but is trivial to find with property based testing.

### strings

```scala
val poop: String = "flush"
poop
  .compareTo(someOtherString)
  .dropWhile(lambda).drop(1) // drop 1 char, could be any #, see .groupBy example
  .isEmpty
  .length // 5
  .matches(regex)
  .take(num)
  .toLowerCase
  .toUpperCase // FLUSH
```

### Extensions

- extend any type with NEW functionality
  - you cannot OVERRIDE existing fnality
  - you cannot refer to other class members via `this`
  - if you get a `blah doesnt have poop`
    - you need to import the extension into the file where its used; as they have to be in scope
    - unless the extension is being applied to an opaque type, as the compiler will check the scope of the opaque type definition for you
- see `# Opaque Type alias` for a real world example
- see `# type class` for how to use with type classes

```scala

extension (n: Int)
  def isZero: Boolean = n == 0
  // etc
val five = 5
five.isZero // false
0.isZero // true
```

### Type Alias

- alias an existing type/type expression under a distinct name
- use cases
  - incur 0 runtime costs
  - provide shorthand name for a complex type expression
  - can be used interchangably with the type they're aliasing

```scala

type MyType = String
type MyComplexType = (Int, String, List[Map[String, Int]])
```

### Opaque Type Alias

- zero cost type abstractions: increase type safety by creating abstraction layers between similar types
- use cases
  - encapsulate the type they are an alias to
    - differentiating between same but logically different types, (see example)

```scala
def poop(flush: boolean)
// poop(flush = true) // logical
// iAmHungry: Boolean = true
// poop(iAmHungry) // illogical, but compiler allows it

// you can overcome the above limitation by creating a class with a companion object
// but who wants to pay that cost of instantiating a class
case class UserId private (value: Long)
object UserId:
    def parse(id: String): Option[UserId] =
        id.toLongOption.map(str => UserId(str))
// is Option[UserId] and NOT long as defined in the UserId class
// as the only way to create it is via the UserId companion object
val myId: Option[UserId] = UserId.parse("1234")

// OR you can simply use a opaque type alias without having to define and instantiate a class
// ^ note this is why opaque types are considered 0 cost abstractions

// example opaque type for a Boolean
// inside this block the parent type is transparent
// ^ i.e. can be used interchangeably with the alias
// outside this block the parent type is opaque and cant be determined
// ^ thus the object that defines the opaque type alias
// ^ MUST define methods that produce and consume the opaque types
// ^^ see extensions for a shorter syntax
object Poop:
    opaque type IsPooping = Boolean
    def parse(str: String): Option[IsPooping] = str.toBooleanOption
    def value(poop: Option[IsPooping]): Boolean = poop.getOrElse(false)
end Poop

import Poop.IsPooping
val amPooping: Option[IsPooping] = Poop.parse("true")
val notPooping: Option[IsPooping] = Poop.parse("false")
val dunno: Option[IsPooping] = Poop.parse("will be a none")

val getPooping1 = Poop.value(amPooping) // true
val getPooping2 = Poop.value(notPooping) // false
val getPooping3 = Poop.value(dunno) // false

// shorter syntax using extensions
// and NOT using Option
object IsPooping:
    opaque type IsPooping = Boolean
    extension(pooping: IsPooping)
        def value: Boolean = pooping
    def parse(bool: Boolean): IsPooping = bool
end IsPooping
import IsPooping.IsPooping
val amPooping = IsPooping.parse(true) // val amPooping: IsPooping.IsPooping = true
val getPooping4 = amPooping.value // val getPooping4: Boolean = true
```

### type directed programming

- i.e. contextual abstractions
  - instead of inferring TYPES from VALUES like `val x = 42 == Int`
  - the scala compiler is able to do the opposite: infer VALUES from TYPES
    - works when there is exactly ONE value for a type, the compiler can provide the value to us
- generics: use type parameters to enable a type annotation to be used with more than one type
- context parameters: instruct the compiler on how to inject values into code based on type annotations
  - first: let the compiler know that we expect it to pass the value as a parameter to some def
    - prefix the parameter with `using`
    - the compiler will look for candidate values that MUST be a given definition (see below)
  - second: provide candidate values for such parameters
    - prefix potential values with `given`
    - use an `alias` to define a given value that is equal to some existing value
- given instances search scope
  - all instances that are visible (inherited, imported, or defined in any enclosing scope)
  - given instances found in any companion object associated with the context parameter
  - error is thrown if: more than one given instance matches the requirement for a context parameter and they none have higher relative specifity
    - e.g., given A is more specific than given B, whenever:
      - a is in a closer lexical scope than b
      - a is defined in a class/object which is a subclass of the class defining b
      - type A is a subtpe of type B
      - type A has more `fixed` parts than B
- context parameter given instance association
  - companion objects associated with of any inherited types of the context parameter
  - companion objects associated with the specific context paramater type
  - if the context parameter is an inner class, the other objects in which it is embedded
- conditional given instances
  - when an given instances also uses a context parameter
  - e.g. ordering an addresses: order by zip code if zip codes are different, else order by street name
    - base given instances: defines ordering of both zip codes and street names
    - specifies 2 context parameters: ordering of zip coes, and ordering of street names

```scala
//////////////////////////////////
/// using definitions
//////////////////////////////////
// definition with generic type parameter
// myDef[Int](poop) // can specify the A if it cant be inferred
def myDef[A](xs: List[A]): List[A]
// ^ extended with an additional parameter list for consumer to pass additional fns specific to their type
// ^ notice we specify the fn signature expected for the second parameter list
// myDef(poop)(myLambdaMatchingSignature)
def myDef[A](xs: List[A])(specificForThisA: (A, A) => Boolean): List[A] =
  ???
  specificforThisA(x, y)
  ???

// context parameters are prefixed with `using`
// ^ remember this instructrs the compiler to pass a value based on the type!
// the compiler knows to provide a value for poop based on the type A for Ordering
// consumers now invoke the fn simply as myDef(...) without the second parameter list as before
// myDef[Int](poop)
// myDef[Int](poop)(using Ordering.Int) // can also explicity pass the value, but not necessary
// ^ no need to specify [Int] if it can be inferred
// ^ no need to specify the second parameter list, the compiler provides the value!
def myDef[A](xs: List[A])(using poop: Ordering[A]): List[A] = ???

// more syntax examples
def myDef[A](...)(...)(....) // there can be multiple parameter lists
def myDef[A](....)(using a: A, b: B) // both a and b are context parameters
def myDef[A](...)(using a: A)(...)(using b: B) // context params can be mixed with regular params

// context params can be anonymous,
// ^ if the body doesnt mention the param by name,
// ^ but simply passes it on as a context argument to subsequent methods
def myDef[A](...)(using SomeType[A])

// shorter syntax for context params
// ^ i.e. type parameter A has one context bound: Ordering
def myDef[A: Ordering](...) // same as myDef[A](...)(using Ordering[A])

//////////////////////////////////
/// given definitions
//////////////////////////////////

// first create an object that can be used as a candidate value for each type you expect
// ^ this one specifies a candidate value for type Ordering[Int]
// ^ you would have to implement the ???
object IntOrdering extends Ordering[Int]:
  def compare(...): Int = ???
// then create a given definition, that aliases Ordering[Int] to the above object
// ^ this instance is evaluated ONCE the first time intOrdering is accessed
// ^ the value is then reused by all subsequent invocations
given intOrdering: Ordering[Int] = IntOrdering


// alternative syntax
// Given definitions can be anonymous
// ^ the compiler will synthesize a name for an anonymous definition
given Ordering[Double] with
  def compare(...): Int = ??? // same from the object above, but without hte object def

// conditional given definitions
// OrderingList: an ordering for Lists with elements of type A
// ^ exists ONLY if there is an ordering for A (i.e. the using parameter list)
given orderingList[A](using ord: Ordering[A]): Ordering[List[A]] with ???

//////////////////////////////////
// full example: using + given definitions
//////////////////////////////////

// trait that specifies the interface for implementing any type of poop
trait Ordering[A]:
  def compare(...): Int

// object implementing the trait with given definitions
// ^ remember the given definitions are required to provide canidate values for using parameters
// given definitions must be visible at:
// ^ the point of the method call
// ^ or in a companion object associated with the context parameter
// ^ else error is thrown
object Ordering:
  given Int: Ordering[Int] with
    def compare(...): Int = ???
  given String: Ordering[String] with
    def compare(...): Int = ???

// finally a definition that accepts a context parameter
// ^ notice it uses the Trait defined above
// ^ the compiler will use the object with given definitions as candidate values
// ^^ based on whatever the consumer specifies A to be when the fn is invoked
// myDef[Int](poop) will use given definition Ordering.Int
// ^ remember no need to provide [Int] if it can be inferred
def myDef[A](...)(using Ordering[A]): List[A] = ???
  // ...
  // summon is a predefined definition in the standard library
  // enables you to refer to a named/anonymous instance by its type
  import Ordering.{given Int} // the type has to be in scope else error
  // one of these three are preferred as idiomatic scala
  import Ordering.given // import all givens
  import Ordering.{given Ordering[?]} // import all Ordering givens by type
  import Ordering.{given Ordering[Int]} // import a specific ordering givens by type
  summon[Ordering[Int]](poop)
  // ...

//////////////////////////////////
// this entire section in scala 2
//////////////////////////////////

// context params are prefixed with implicit
// only a single parameter list (specifically the last one) can be a context parameter
// Scala 3
def sort[A](as: List[A])(using ordering: Ordering[A]): List[A]
// Scala 2
def sort[A](as: List[A])(implicit ordering: Ordering[A]): List[A]

// given definitions are prefixed with implicit
// Any regular val, def, or object definition could be marked as implicit.
// Scala 3
given orderingInt: Ordering[Int] with
  def compare(x: Int, y: Int): Int =
    if x < y then -1 else if x > y then 1 else 0
// Scala 2
implicit object orderingInt extends Ordering[Int] {
  def compare(x: Int, y: Int): Int =
    if (x < y) -1 else if (x > y) 1 else 0
}
// ^ ... or
implicit val orderingInt: Ordering[Int] = new Ordering[Int] {
  def compare(x: Int, y: Int): Int =
    if (x < y) -1 else if (x > y) 1 else 0
}

// ^ conditional given instances were defined by an implicit def taking implicit params
// Scala 3
given orderingPair[A, B](
    using ordA: Ordering[A], ordB: Ordering[B]): Ordering[(A, B)] with
  def compare(x: (A, B), y: (A, B)) = ...
// Scala 2
implicit def orderingPair[A, B](
    implicit ordA: Ordering[A], ordB: Ordering[B]): Ordering[(A, B)] = new Ordering[(A, B)] {
  def compare(x: (A, B), y: (A, B)) = ...
}
```

#### Type class

- type class: classify types by the operations they support
  - pattern consisting of 3 elements
    - trait: an interface defining a generic type parameter with arbitrary method signatures
    - object: defining several given instances (candidates for context parameters) for expected types + implementations of the interface
    - definition: a polymorphic method that takes a context parameter (see type directed programming) matching the interface (the compiler will auto choose the correct given instance implemneted in the object)
- use cases
  - support retroactive extension: the ability to extend a data type with new operations without changing hte original definition of the data type
  - enable conditional given definitions

```scala
// example implementation of type class Ordering
// interface: type parameter with method signature:
// ^ this is the type Class that support comparison
trait Ordering[A]:
  def compare(x: A, b: A): Int
// object: implementing interface for specific types
object Ordering:
  given Int: Ordering[Int] with
    def compare(...) = ???
  given String: Ordering[string] with
    def compare(...) = ???
// definition: polymorphic method with a context parameter matching the interface
def poop[A](...)(using Ordering[A]) List[A] = ???
```

### domain modeling

- objects, classes, traits, and their variants
  - objects can extend the others, but are singletons or companions
  - case classes and sealed traits makes you think of types as a sets of possible values
    - e.g. type Boolean has two possible values true and false
    - whenever the set of possible values (subclasses) are bounded
  - classes and traits make you think of types as intefaces that provide a set of specific operations
    - e.g. type Boolean has logic operations like || and &&
    - whenever the set of possible operations are bounded
- best practices for OOP
  - traits: enable abstract interfaces + concrete implementations
  - mixed composition: compose components from smaller parts
  - classes: implement interfaces specified by traits
  - instances: can have their own private state
  - subtyping: use an instance of one class where an instance of a superclass is expected
  - access modifiers: control visilibity relative to other code
- best practices for FP
  - design your model with immutable enums, case classes and traits
    - sum types: use enums to model different alternatives
    - product types: use case classes for grouping/aggregating multiple components/things
    - traits: specify the contract of the API as an interface
  - define your pure behavior in other objects/definitions

```scala

// visibility
def poop: // visible to the world
private def poop: // visible inside the class/trait/object  only
protected def poop: // visible inside the class/trait/object/descendants

// other modifiers
override def poop: // override provided members in descendants
  super.poop(): // call super type version
final def poop: // prevent overrides in descendants
  this.otherPoop() // this always refers to the current instance
```

#### Class

- define a type and a constructor for encapsulating concepts
  - by default constructor params are private (thus encapsulated within the class)
- use cases
  - can extend multiple traits but only a single super class
  - ^ can be used anywhere the extended traits/super class are expected
  - if the super class is defined in another file, it needs to be marked `open`
  - model a mutable datastructure
- generally its best to use classes at the leafs of your inheritance model
- uses reference equality, i.e instances must point to the same point in memory in order to be considered equal
  - reference equality is important for mutable datastructures

```scala

// a Dog class with instance fields defined as params, and instance methods defined in the body
// the body is initialized as part of the default constructr, so you can put any initializing logic there
class Dog(var name: String, age: Int = 1_000):
  println("dog is being created")
  def speak() = println("woof")
  def wagTail() = println("poop in your mouth")
  // visibility
  // only visible to the class/trait itself and to its companion object
  private var someInstanceState: int = 0
  def whatsMyState: Int = someInstanceState
  //  also visible to subclasses of the class.
  protected var someInheritedState: int = 0
  def whatsMyInheritedState: int = someInheritedState
val dog = Dog("noah")
dog.speak()

// auxiliary constructors
// ^ e.g. to a module a student in 3 different states
// ^ 1. name and id: when first enrolling
// ^ 2. name, id, application date: when application submitted
// ^ 3. name, id, student Id: when fully enrroled
// ^ you basically define the base case with the regular class params
// ^ then define as many this(...) class methods that each call the base this()

// [1] the primary constructor
import java.time.* // for LocalDate

class Student(
  var name: String,
  var govtId: String
):
  private var _applicationDate: Option[LocalDate] = None
  private var _studentId: Int = 0

  // [2] a constructor for when the student has completed
  // their application
  def this(
    name: String,
    govtId: String,
    applicationDate: LocalDate
  ) =
    this(name, govtId)
    _applicationDate = Some(applicationDate)

  // [3] a constructor for when the student is approved
  // and now has a student id
  def this(
    name: String,
    govtId: String,
    studentId: Int
  ) =
    this(name, govtId)
    _studentId = studentId

// class extending super class
// if the super class is in another file, it needs to be marked open
// in file A
open class Person(name: String)
// in file B
class SoftwareDeveloper(name: String, favoriteLang: String)
  extends Person(name)

```

#### Object

- a class with exactly one instance
- lazy initialized only when its members are referenced, similar to a `lazy val`
- usecase:
  - grouping methods and fields under one namespace, i.e. creating an object to hold static methods and fields

```scala
object PoopUtils:
  def flush(done: Boolean): String =
    if done == true then "flushing" else "still pooping!"

// scala 2 syntax
object SomeObj {
  val prop: Boolean = true
}

```

#### Companion Object

- an object that has the same name as a class, case class, or enum, and declared in the same file
  - the other side is called the objects `companion class|case class|enum`
  - each can access the others private members
- use case
  - provide methods/values that act as static class fields & methods (like in javascript)
  - if they contain an `apply` method, act as factory fns to create new instances of companion classes
  - if they contain an `unapply` method, can destructure companion classes, e.g. with pattern matching

```scala
import scala.math.*

// example class with a simple companion object providing some utility fn
case class Circle(radius: Double):
  def area: Double = Circle.calculateArea(radius) // the companion object
object Circle:
  private def calculateArea(radius: Double): Double = Pi * pow(radius, 2.0)
val circle1 = Circle(5.0)
circle1.area


// example class with a companion object providing a factory fn via 2 distinct apply defs
class Person:
  var name = ""
  var age = 0
  override def toString = s"$name is $age years old"
object Person:
  // a one-arg factory method
  def apply(name: String): Person =
    var p = new Person
    p.name = name
    p
  // a two-arg factory method
  def apply(name: String, age: Int): Person =
    var p = new Person
    p.name = name
    p.age = age
    p
end Person
val joe = Person("Joe")
val fred = Person("Fred", 29)


```

#### Abstract Classes

- same as `Trait` but has a constructor
  - no longer true in scala 3, traits have parameters now
- use case
  - not using scala3, and need a base class with a constructor
  - The rule of thumb is to:
    - use classes whenever you want to create instances of a particular type,
    - use traits when you want to decompose and reuse behaviour.

#### Trait

- primary way to create an interface
  - contain abstract & concrete methods and fields
    - scala 2: doesnt have a constructor
    - scala 3: no constructor, but can take parameters
  - can have an unbound number of implementations, and those implementations can be in any file
- use case
  - primary tool for decomposition (and not classes)
    - traits can extend other traits
    - Objects and classes can extend traits
    - all can have nested objects, traits, and classes
  - modularize components and describe interfaces (required and provided)
    - required: abstract members that will be implemented by other entities
    - provided: concrete methods & fields
  - create single responsibility, small modules that can be mixed & matched by their inheriting entities

```scala

// example 1
trait Showable:
  def show: String
  def showHtml = "<p>" + show + "</p>" // note this depends on def show
class Document(text: String) extends Showable:
  def show = text

// example 2
trait HasLegs:
  def numLegs: Int
  def walk(): Unit
  def stop() = println("Stopped walking")
trait HasTail:
  def tailColor: String
  def wagTail() = println("Tail is wagging")
  def stopTail() = println("Tail is stopped")
class IrishSetter(name: String) extends HasLegs, HasTail:
  val numLegs = 4
  val tailColor = "Red"
  def walk() = println("I’m walking")
  override def toString = s"$name is a Dog"
// mixed composition, traits extending from other traits
trait Poop extends HasLegs, HasTail

// trait with parameter
trait Pet(name: String):
  def greeting: String
  def age: Int
  override def toString = s"My name is $name, I say $greeting, and I’m $age"

class Dog(name: String, var age: Int) extends Pet(name):
  val greeting = "Woof"

//////////////////////////////////
// service oriented design through scalable component abstractions
// OOP example
//////////////////////////////////

// component SubjectObserver as a trait with two abstract type members,
// ^ S (for subjects) and O (for observers):
trait SubjectObserver:
  // within this trait, we can refer to some abstraction S and O type
  // ^ implementors must ensure they are subtypes of Subject & Observer
  type S <: Subject
  type O <: Observer
  // two nested traits
  // note how each refers to the types S, O above and NOT to their upper bounds
  // self: S => is a self-type annotation
  // ^ requires subtypes of Subject to also be subtypes of S
  // ^ required to be able to use the `this` keyword in publish
  // ^ if S was a concrete type, the self-type annotation would be `trait Subject extends S`
  trait Subject { self: S =>
    private var observers: List[O] = List()
    def subscribe(obs: O): Unit =
      observers = obs :: observers
    def publish() =
      for obs <- observers do obs.notify(this)
  }
  trait Observer {
    def notify(sub: S): Unit
  }
// example implementation of SubjectObserver
// defines the abstract type members to be concrete types
object SensorReader extends SubjectObserver:
  type S = Sensor
  type O = Display
  class Sensor(val label: String) extends Subject:
    private var currentValue = 0.0
    def value = currentValue
    def changeValue(v: Double) =
      currentValue = v
      publish()
  class Display extends Observer:
    // can only safely access the label and value of sub
    // ^ since we originally declared the parameter to be of type S
    def notify(sub: Sensor) =
      println(s"${sub.label} has value ${sub.value}")
```

#### sealed trait

- have a bounded (i.e. limited/fixed) number of implementations, and those implementations must be in the same file
  - thus exhaustivity checking in pattern matching is only possible with sealed traits

```scala

//////////////////////////////////
/// sealed traits
// represents one of several alternatives of a case class
// defines a base (abstract) type from which case class (concrete) types can extend from
// ^ i.e. case classes that extend from sealed traits are Subtypes of of the Sealed Trait
// do not have constructors, thus you need to use the case class to create instances
// the only useful thing you can do with sealed traits is determine the concrete type using pattern matching
// however the modeling prowess of sealed traits are extensive
//////////////////////////////////

sealed trait Shape
case class Rectangle(/* */) extends Shape
case class Circle(/* */) extends Shape

// create an instance
val poop: Shape = Circle(/* */)

// subtyping works as expected
val poop: Circle = poop(/* */)
val poop2: Shape = poop.copy() // works because Circle is a Shape

// using pattern matching to aggregate logic across subtypes
// in scala 2 the match block needs to enclosed in braces, i.e. match { ... }
val getShapeAria =
  someShape match
    case Rectangle(width, heighT) => width * height
    case Circle(radius) => radius * radius * 3.14


```

#### enums

- defines a type whose values are a set of known singletons
- NOT available in scala 2, instead used sealed traits and case objects
- use cases
  - used to define sets of constants, like the months in a year, the days in a week, directions like north/south/east/west, etc

```scala
// shorthand
enum Color:
  case Red, Green, Blue
// longhand
enum Color:
  case Red   extends Color
  case Green extends Color
  case Blue  extends Color
// with params
enum Color(val rgb: Int):
  case Red   extends Color(0xFF0000)
  case Green extends Color(0x00FF00)
  case Blue  extends Color(0x0000FF)
println(Color.Green.rgb) // prints 65280
// with fields and methods
enum Planet(mass: Double, radius: Double):
  private final val G = 6.67300E-11
  def surfaceGravity = G * mass / (radius * radius)
  def surfaceWeight(otherMass: Double) =
    otherMass * surfaceGravity
  case Mercury extends Planet(3.303e+23, 2.4397e6)
  case Earth   extends Planet(5.976e+24, 6.37814e6)
end Planet
Planet.Mercury.surfaceGravity // some number
Planet.Earth.surfaceWieght(1) // some number
// with a companion object
object Planet:
  def main(args: Array[String]) =
    val earthWeight = args(0).toDouble
    val mass = earthWeight / Earth.surfaceGravity
    for (p <- values)
      println(s"Your weight on $p is ${p.surfaceWeight(mass)}")

// interface
MyKnownValues
  .values // Array(MyKnownValues.Poop, etc) // get all enum values
  .valueOf("Wipe") // MyKNownValues.Wipe // get the matching enum value from its string label || runtime error


// mimicking enums in scala 2
// uses the same pattern matching logic, check elseware
sealed trait PrimaryColor
object PrimaryColor:
  case object Red extends PrimaryColor
  case object Blue extends Primary Color
  val values = Array(Red, Blue, Green)
  def valueOf(label: String): PrimaryColor = ???

// useful to do `import CrustSize.*` so you can use the values directly
// if/then
if (currentCrustSize == Large)
  println("You get a prize!")

// match: see `# match` for more examples
currentCrustSize match
  case Small => println("small")
  case Medium => println("medium")
  case Large => println("large")


```

#### case class

- define a type and a constructor for aggregating concepts
  - by default constructor params are public and immutable
- immutabe class with some syntatic sugar
  - fields are public and immutable by default
  - the compiler auto generates the following methods (since all fields are immutable)
    - unapply: enables pattern mmatching on a case class
    - copy: create modified copies of an instance
    - equals, hashCode: using structural equality; enables you to use instances in Maps
    - toString: helpful for debugging
- use case
  - used to model immutable data structures (as opposed to classes which could be mutable)
    - equality (structural) is determined based on instances having identical values to be considered equal
    - structural equality is important for immutable datastructures

```scala
// notice you dont need to specify val/var in the param list like in classes
case class MyType(name: String, age: Int)
// create an instance
val poop: MyType = MyType("poop", 200)

// in scala 2 remove the : and use {} to denote the body
case class MyType(name: String, age: Int):
  val ageNextDecade: Int = age + 10 // computed value, instance.ageNextDecade
  def duplicateThisInstance: MyType =
    copy(name = "some other name") // copy will return a new item of this (MyType)

// example with Option
case class Poop (
  name: String,
  email: Option[String],
  phoneNumbers: List[String]
)
val poop: Poop = Poop("noah", None, List("00000000"))

// exmaple of case class instance methods
case class Person(name: String, relation: String)
// Case classes can be used as patterns
christina match
  case Person(n, r) => println("name is " + n)
// `equals` and `hashCode` methods generated for you
val hannah = Person("Hannah", "niece")
christina == hannah       // false
// `toString` method
println(christina)        // Person(Christina,niece)
// create a new instance based on an existing instance
val poop = hannah.copy(name = "poop")
```

#### case object

- Case objects are to objects what case classes are to classes:
  - they provide a number of automatically-generated methods to make them more powerful.
- whenever you need a singleton object that needs a little extra functionality,
  - such as being used with pattern matching in match expressions.
  - need to pass immutable messages around
- generally extend from sealed traits

```scala
sealed trait Message
case class PlaySong(name: String) extends Message
case class IncreaseVolume(amount: Int) extends Message
case class DecreaseVolume(amount: Int) extends Message
case object StopPlaying extends Message // the singleton case object

// then you can pattern match on the Message Type (see above)
// and provide extra fnality (define these right-hand definitions elseware)
def handleMessages(message: Message): Unit = message match
  case PlaySong(name)         => playSong(name)
  case IncreaseVolume(amount) => changeVolume(amount)
  case DecreaseVolume(amount) => changeVolume(-amount)
  case StopPlaying            => stopPlayingSong()

// modeling a user, which can be anonymous or loggedin
// note the use of case object and case class
sealed trait User
object User:
  case object Guest extends User
  case class Registered(id: UUID) extends User


```

### collections

- each collection type comes with two variants
  - immutable: are auto imported
  - mutable: must be imported
- generally all elements of a collection type must be of hte same type, except Tuple whose elements can be of anytype

```scala
// general hierarchy
// iterable
// ^ set, seq, map
// ^^ seq > list, vector

import scala.collection.immutable
import scala.collection.mutable

val buffer = mutable.ArrayBuffer()

// commonalities amongst all collections

val empty = List.empty
val empty = List.empty[Int] // preferred

someCol
  .contains(x) // pass a KEY for a map
  .exists(predicate) // any match
  .filter(predicate) // keep els returning true for between
  .filterNot(predicate)
  .find(lambda) // Option, find the first el returning true for the predicate
  .flatMap
  .foldLeft
  .forall(predicate) // all match
  .foreach(lambda) // doesnt return anything, only useful for sideffects
  .groupBy(lambda) // Partitions this immutable sequence into a map of immutable sequences according to some discriminator function.
  .groupMap(lambdaForKey)(lambdaForValue) // Partitions this immutable sequence into a map of immutable sequences according to a discriminator function key.
  .isEmpty // boolean
  .keys
  .map
  .nonEmpty // boolean
  .size // number of els
  .takeWhile(lambda)
  .values
  .withFilter(predicate)
  .zip(otherCollection) // creates pairs of els at each index of each collection


/// map function
// ^ cannot change the number of els in the collectoin
// F[A].map(A => B) == F[B]
// ^ F of A type els, els transformed into type B, F now contains type B
// ^ i.e. primary usecase: the container type stays the same, but element type can change

val poop: Option[String] = Some("flush")
poop.map(word => word.toUpperCase) // FLUSH
val poop: Option[Int] = Some(2)
poop.map(_ * 2) // 4
val poop: Map[String, Int] = Map("one" -> 1)
poop.map((key, val) => key -> val * 2)

/// flatMap
// ^ can change the number of els in the collection
// F[A].flatMap(A => F[B]) == F[B]
// ^ F of A type els, els transformed into/are F of Bs, F is now F of B
// ^ i.e. primary usecase: the container stays the same but els type can change, usually to remove/flatten a container layer

/// flatten can be called on the result of a map
case class Poop(totalPoops: Option[Int]) // im going to poop a total amount of times
case class Wipe(totalWipes: Option(Poop)) // im going to wipe depending on how many times i poop
val flush: Wipe(Some(Poop(5))) // flushing depends on pooping and wiping, you can see the nesting,
// how does it look with a regular map?
flush.totalWipes.map(totalWipes => totalWipes.totalPoops) // Option[Option[Int] : Some(Some(5)) ouch! we just wanted Some(5)
// how does it look with flatten?
flush.totalWipes.map(totalWipes => totalWipes.totalPoops).flatten // Option[Int] : Some(5)
// looks even more concise with flatMap
flush.totalWipes.flatMap(totalWipes => totalWipes.totalPoops) // Option[Int] : Some(5)
// even more concise with the underscore
flush.totalWipes.flatMap(_.totalPoops) // Option[Int] : Some(5)
// verbose syntax with curly braces
flush.totalWipes.flatMap { totalWipes =>
  totalWipes.totalPoops // Option[Int] : Some(5)
}

/// foldleft
// ^ javascript reduce
// can transform a collection in anyway
// F[A].foldLeft(B)((B, A) => B) == B
// ^ F of A types, B is the new type of both F and A, a lambda is receives B and A and should return B,
// ^ i.e. primary use case: reducing a container F of type A els, to a new type of B which can be anything

someCol.foldLeft(initialValue)((accum, el) => ???)
// example reverse a list
someList.foldLeft(List.empty[Int])((accum, el) => el +: accum)

/// groupBy
// ^ groups the els of a collection according to a parittion fn
val emails: List[String] = List("one@two.com", "two@two.com", "three@one.com")
val domainPartition: String => String = email => email.dropWhile(x => x != '@').drop(1)
val emailsByDomain: Map[String, List[String]] = emails.groupBy(domainPartition)



```

#### Option

- special collection containing zero/one element
- handle the absense (None) of data in an elegant way
- can either be a Some(somevalue) or a None

```scala

val poops: Option[String] = None // None
val poops: Option[string] = Some("times") // Some

poop
  .getOrElse("default value")
  .zip(someOtherOption) // returns tuple if BOTH are Some, see example

/// zip example
// ^ if either options are None, returns None
val first: Option[String] = Some("noah")
val last: Option[String] = Some("hall")
val name: Option[(String, String)] = first.zip(last)

// some collection operations return an Option
val poop: List[Int] = List(1, 2, 3)
val found = poop.find(x => x == 1) // Some(1)
val notFound = poop.find(x => x == 1000) // None

```

#### Tuple

- collection of fixed size, but the values may have different types,

```scala

val poop = "first" -> 1 // shorthand, but is it really?
val poop = ("first", 1)
val poop: (string, Int) = ("first", 1)
val (x, y) = poop // deconstruct a tuple
poop(0) // random access, index starts at 0
```

#### Map

- aka hash table, associative array, etc
- immutable dictionary

```scala

val poop: Map[String, Boolean] = Map.empty[String, Boolean]
val poop2 = poop + ("thiskey" -> true) // add an el to a map
var poop7: Map[String, Boolean] = Map("Poop" -> true, "Flush" -> false)
var poop8 = poop7 + ("another" -> false)

poop
  .get(key) // Option
```

#### HashMap

- aka hash table, associative array, etc
- MUTABLE dictionary

```scala
import scala.collection.mutable

val data = mutable.HashMap.empty[String, Int]
data += ("a" -> 0)
data += ("b" -> 1) // HashMap[String, Int] = HashMap(a -> 0, b -> 1)

```

#### Set

- contains only one instance of a given element

```scala


```

#### BitSet

- mutable collection containing a set of bits

#### sequences

- collection whose elements have a dienfed ordering, usually the order in which tye are inserted into the collection
- can be accessed by index (starts at 0)

```scala
// common to all sequence type collections

someSeq
  .head // first el, // error on empty sequence
  .headOption // returns Option, thus wont throw like .head
  .tail // everything after the first el, // error on empty sequence
  .sortBy(lambda)
  .maxBy(lambda)
  .diff(removeTheseOtherEls)

// example sortby
val list: List[(String, Int)] = List(
  "three" -> 20,
  "two" -> 2,
  "one" -> 1
)
list.sortBy((_, age) => age)
list.sortBy((name, _) => name)
```

##### Seq

- trait, super of all sequence types

```scala


```

##### List

- perf characteristics: not optimized for random access but support efficient head nd tail decomposition
  - constant time: ::, head, tail
  - linear time: random access, size
- sequential/linear immutable linked-list; each el has a pointer to the next el in the list
  - accessing the nth element requires iterating thrugh the first n-1 elements (i.e. all preceding els)
  - ^ O(n) operation
- used to model collections of values where the order matters
- nil: the last element, which will always be of type nil
- prefer over `ArrayBuffer` when there are many modifications to the underlying list

```scala

val poop: List[Int] = List(1,2,3)
val emptyPoop: List[Int] = List()
val emptyPoop: List[Int] = Nil

// pre/append values
val poop2 = 0 +: poop // List(0,1,2,3)
val poop2 = 0 :: poop // same as above
val poop2 = poop :+ 4 // List (0,1,2,3,4)
val poop3 = List(1,2) ++ List(3,4) // List(1,2,3,4)

// random access, not efficient on lists
list(0) // first el

// interface
list
  .head // first el
  .tail // everything except the first el
  .tail.head // second el
  .distinct // List[Int]: List(1,2,3)
  .take(2) // List[Int]: List(1,2)
  .length // 4
  .size // 4
  .contains(2) // true
  .map(lambda) // returns new list
  .filter(predicate) // lambda should return true for elements to keep
  .exists(lambda)

// fns on lists
list.map(n => n * n) // List(1, 4, 9, 9)
list.map(_ * 3) // List(3, 6, 9, 9)
list.flatMap(n => List(n, n)) // List(1, 1, 2, 2, 3, 3, 3, 3)

/// TODO
List.range(1, 3)                          // List(1, 2)
List.range(start = 1, end = 6, step = 2)  // List(1, 3, 5)
List.fill(3)("foo")                       // List(foo, foo, foo)
List.tabulate(3)(n => n * n)              // List(0, 1, 4)
List.tabulate(4)(n => n * n)              // List(0, 1, 4, 9)

val a = List(10, 20, 30, 40, 10)          // List(10, 20, 30, 40, 10)
a.distinct                                // List(10, 20, 30, 40)
a.drop(2)                                 // List(30, 40, 10)
a.dropRight(2)                            // List(10, 20, 30)
a.dropWhile(_ < 25)                       // List(30, 40, 10)
a.filter(_ < 25)                          // List(10, 20, 10)
a.filter(_ > 100)                         // List()
a.find(_ > 20)                            // Some(30)
a.head                                    // 10
a.headOption                              // Some(10)
a.init                                    // List(10, 20, 30, 40)
a.intersect(List(19,20,21))               // List(20)
a.last                                    // 10
a.lastOption                              // Some(10)
a.map(_ * 2)                              // List(20, 40, 60, 80, 20)
a.slice(2, 4)                             // List(30, 40)
a.tail                                    // List(20, 30, 40, 10)
a.take(3)                                 // List(10, 20, 30)
a.takeRight(2)                            // List(40, 10)
a.takeWhile(_ < 30)                       // List(10, 20)
a.filter(_ < 30).map(_ * 10)              // List(100, 200, 100)

val nums = List(10, 5, 8, 1, 7)
nums.sorted                               // List(1, 5, 7, 8, 10)
nums.sortWith(_ < _)                      // List(1, 5, 7, 8, 10)
nums.sortWith(_ > _)                      // List(10, 8, 7, 5, 1)
```

##### LazyList

- members are only computed when accessed, e.g. when iterated over with .foldLeft
- can have an infinite length

```scala
val empty: LazyList[Int] = LazyList.from(0)

```

##### ArrayBuffer

- mutable indexed sequence
- accessing an element at any index takes the same time,
  - ^ O(1) operation
- prefer over Lists when prioritizing fast access, and not there arent many adding/removing of els

```scala
import scala.collection.mutable

val buffer = mutable.ArrayBuffer("poop", "flush")

```

##### Array

```scala


//////////////////////////////////
/// Array
//////////////////////////////////
val poop: Array[String] = Array("one", "two")

```

##### Range

```scala

/// range
// models a range of values
// ^ to and until are operations on Int
1 to 4 // Range 1 to 4
0 to 10 by 2 // Range... to includes end value
5 until 0 by -1 // Range... until excludes end value
1.to(4).by(-1)

```

##### Vector

- ...

## flow control

### if

```scala
//////////////////////////////////
/// if statements
// evaluate to a value, i.e. always return a value
// all conditions must be an expression of type Boolean, else type mismatch error
//////////////////////////////////

// single line
if someVal then "do this" else "do that"

// multiline
if someVal > 1 then
  "do this"
else if someValue < 0 then
  "this do"
else
  "do that"

// scala 2
// requires curlys and paranthesis around conditions and no then keyword
if (poop && wipe) {
  "flush"
} else if (poop && pee) {
  "wipe"
} else {
  "keep pooping"
}

```

### match statements

- pattern matching constructs are expressions that return values
  - are often used as a the body of a method
- in general, the pattern for deconstructing via pattern matching looks similar to the code for constructing the object

```scala
//////////////////////////////////
/// match statements
// you have to cover ALL the cases or add a a default branch
// else compiler throws warning at compile time, and error at runtime if any of the uncovered cases are used
// very useful with sealed traits and concrete classes
// ^ to aggregate logic across the concrete classes
// ^ and extract data from them at the same time
//////////////////////////////////

// literal pattern matching
// your matching against literal values
someVal match
  case "this thing" => "return this other thing"
  case "thing this" => "thing other this return"
  case "thing" | "this" => "one of"
  case poop: Poop => s"i pooped ${poop.times}"
  // can alternative use a varName instead of _ which will capture the value
  // ^ and make it available, e.g. case poop => s"the value was $poop"
  case _ => "default branch"

// typed pattern matching
// you have to specify the params
// example uses scala 2 syntax
notification match {
    case Email(sender, title, _) => // _ means the third param isnt used
      s"You got an email from $sender with title: $title"
    case SMS(number, message) =>
      s"You got an SMS from $number! Message: $message"
    case VoiceRecording(name, link) =>
      s"You received a Voice Recording from $name! Click the link to hear it: $link"
  }

// matching on type only
def goIdle(device: Device) = device match {
  case p: Phone => p.screenOff
  case c: Computer => c.screenSaverOn
}

// match on a list
listOfContacts match
  case contact :: tail => println(contact.name) // get the first el in a list
  case first :: second :: Nil => printl("list with 2 els")
  case Nil => println("no contacts")
  case _ => println("a list with any amount of els")

// match a tuple
(1, "one") match
  case (num, str) => s"this matches and has values $num and $str"

// match on option
def matchOnOption(poop: Option[String]): Boolean =
  poop match
    case Some(blah) => blah.endsWith("yolo")
    case None => false
matchOnOption(Some("ends with yolo")) // true
matchOnOption(Option("wtf")) // false
matchOnOption(None) // false

// match on enums via literal pattern matching
def whichValue(value: MyKnownValues): String =
  value match
    case MyKnownValues.Poop => "i'm pooping"
    case MyKnownValues.Wipe => "almost done"
    case MyKnownValues.Flush => "wanna watch a movie"

// enum with parameters, each item has a value
enum MyOtherValues(val total: Int):
  case Daily extends MyOtherValues(total = 24)
  case Weekly extends MyOtherValues(total = 7)

// how to use the enum with parameters
// match example
import MyOtherValues.*
def howLong(values: MyOtherValues): Int = values match
  case daily @ Daily => daily.total
  case weekly @ Weekly => weekly.total
```

### loops

- tailcall recursion: each tim ethe runtime evaluates a loop iteration, it pushes its paramter to the call stack
  - call stack: a section of memory with a fixed size
  - if there are too many iterations, you get a runtime error stackoverflow (i think)
  - it is possible NOT to use the call stack space by putting the recursive call in tail position
  - tail position: a recursive call is in tail position if it is the result of the recursive method, (i.e. there is no further operation applied to it, e.g. via closure)
    - i.e. if you return a result/fn call, and not a recursive action
    - ^ search for tailcall within this doc

#### for expressions

- aka for comprehensions
- guard statements: any control statements that shortcircuits cmds within the body for that specific iteration
- ^ e.g. like an if > continue statement in js

```scala
// for (s) yeild e
// ^ s is a sequence (must start with a generator) of generators (has an <- ) & filters (an if condition)
// ^ e is an expression whose value is returned by an interation

// on one line
for x <- values yield x * x

// create a list of 20 things
var list: List[Int] = for
  i <-  1 to 20
yield i


// example 3
val namesWithSFnumbers: List[(String, String)] =
  for
    contact <- contacts
    phoneNumber <- contact.phoneNumbers
    if phoneNumber.startsWith("415")
  yield (contact.name, phoneNumber)

// example 1
// uses scala 2 syntax
case class Poop(totalTurds: Option[Int], totalWipes: Option[Int])
case class Flush(should: Boolean, poop: Option[Poop])
val flush: Flush = Flush(true, Some(Poop(Some(10), Some(5))))
// how do we get the average turds per wipe when we flush?
// especially when dealing with Option types, where we want the primitive type (in this case Int)
val averageTurdsPerWipe = for {
  // each step in the comprehension is a dependent step
  // i.e. if flush.poop is a None (and not a Some) it will exit early
  // also if any failures, the whole thing will fail
  // thats why return value is still Option[Int] and not Int
  poop <- flush.poop // creates a val poop: Poop
  totalTurds <- poop.totalTurds // creates totalTurds of Int, not Some[Int]
  totalWipes <- poop.totalWipes // creates totalWipes of Int, not Some[Int]
  //if totalWipes > 6 // uncomment this line and it will not move on to the next line
  averageTurdsPerWipe = totalTurds / totalWipes
} yield averageTurdsPerWipe // returns Option[int]: 2
// and without the curly braces
def somePoop(): Int
  for
    // line 1
    //line 2
  yield something
end somePoop

// list example
// returns all the combinations of the elements in xs and ys
def combinations(xs: List[Int], ys: List[Int]): List[(Int, Int)] =
  for
    x <- xs
    y <- ys
  yield (x, y)
end combinations


```

#### for loop

```scala
var i = 0
for (i <- 1 to 10)
  println(i)

var name = "poop"
for (i <- 0 until name.length)
  println(name(i))

var list = List(1,2,3)
for (i <- list)
  println(i)

// with optional do keyword
for (x <- 1 to 10) do println(x * x)


// nested for loop
// prints i, then every j, 1, 678910
// increments i, then ever j, 2, 678910
// etc
for (i <- 1 to 5; j <- 6 to 10)
  println(i)
  println(j)

```

#### do while

```scala
//////////////////////////////////
/// do while loop
//////////////////////////////////

var i = 0
do
  println(i)
  i += 1
while (i <= 10)


```

#### while do

```scala

while condition do
  // body

object Poop {
  def main(args: Array[String]) {
    var i = 0
    while (i <= 10)
      println(i)
      i += 1
  }
}

// scala 2
while (condition) {
  // body, no do keyword
}

```

## definitions and function literals

- invoke fns like `someFn` no `()` unless args are expected
- all parameters in method signatures require type annotations
- block: all statements with the same level of indentation form a block
  - a block always ends with the resulting final expression
  - names are block scoped, thus variable declarations are not visible outside their containing block
- function literal: a lambda, an expression that evaluates to a fn
- def vs function literals: because scala supports both OOP and FP
  - function literals define a value that can be passed as a parameter/returned as a result
    - this cannot be done with definitions
      - however the compiler will most likely auto convert the definition into a fn literal and not throw an error
  - the runtime creates an object for functions in memory, and thus fns are objects that can have members

```scala


// return type Int
// sum(5, 5)
def sum(num1: Int, num2: Int): Int = num1 + num2


// return type String
def isTruthy(a: Matchable) = a match
  case 0 | "" => false
  case _ => true

// def with no paramsdef with no params
def poop: Boolean = true // always returns true

// scala 2 requires curly braces
def poop(): String = {
  //....
}

// multiline method
def isTruthy(): String =
  // line 1
  // line 2 will automatically be returned
end isTruthy // not required

// function literals
// with explicit annotation
val lambda: Int => Int =
  x =>
    val result = x + 1
    result
// without annotation (but its inferred)
// but you still need explicity type params as usuall
val add =
  (x: Int, y: Int) => x + y
// oneliner with annotation
val increment: Int => Int = x => x + 1
// even shorter syntax
// ^ whenever a fn uses its argument only once, you can use the placeholder _
val increment: Int => Int = _ + 1
val increment = (_: Int) + 1 // even shorter + annotation
val add: (Int, Int) => Int = _ + _

// more then one param list
// see .foldLeft for an example
def poop(x: Int, y:Int)(f: (Int, Int) => Int): Int =
  f(x, y)
// invoke
poop(1, 2)((a, b) => a * b)
// invoke with braces
poop(1, 2) { (a, b) =>
  a * b
}

//////////////////////////////////
// special fns and things like that
//////////////////////////////////

/// apply
// any object with an `apply` method can be invoked like a fn
object poop:
  def apply(x: int): Int = x + 10
// poop(10) === 20


/// TODO @see pattern matching: option-less
/// unapply
// ^ use to destructure objects
```

### example defs

```scala

/// factorial
// imperative factorial with a for loop
def factorial(n: Int): Int =
  var acc = 1
  var i = 1
  while i < n do
    i += 1
    acc *= i
  acc
// declarative factorial with .foldleft
def factorial(n: Int): Int =
  (1 to n).foldLeft(1)((result, x) => result * x)
// declariative via .product operation from scala.collections
def factorial(n: Int): Int = (1 to n).product
// factorial with recursion
def factorial(n: Int): Int =
  if n == 0 then 1
  else n * factorial(n - 1)
// tailcall factorial recursion
def factorial(n: Int): Int =
  def factorialTailRec(x: Int, accumulator: Int): Int =
    if x == 0 then accumulator
    else factorialTailRec(x - 1, x * accumulator)
  end factorialTailRec
  factorialTailRec(n, 1)
end factorial

```

## errors

```scala
// applying an operation to an expression that isnt a member of the expressions type
true.combine(false) // value combine is not a member of Boolean

// applying an operation to an operand of a type incompatible wiht the type expectted by the operation
true && "false" // type mismatch, found String("false"), required Boolean

// running a program that contains unimplemented expressions
val n: Int = ???
println(n.abs) // scala.NotImplementedError: an implementation is missing

// when your pattern matching doesnt check for all possiblities
// warning: match may not be exhaustive

// a conditional given instance that depends on itself creates a recursive given definition
// occurs because loop uses an A (using a: A), but also depends on A (A = a)
trait A
given loop(using a: A): A = a // error: no implicit argument of type A was found....diverging implicit search...

```

## standard library

### java stuff

```scala
import java.time.*

/// LocalDate
LocalDate
  .now

```

### scala.math

- includes the math modules and other math related keywords
- doesnt include a bunch of stuff as im not the greatest mathematician

```scala
import scala.math.* // in the REPL you have to use import scala.math._

abs(-8) // Int: 8
cbrt(27) // Double: 3.0
ceil(5.45) // Double: 6.0
exp(1) // Double 2.7 blah blah
floor(5.99) // Double: 5
log10(1000) // Double 3.0
max(5, 10) // Int 10
min(5, 10) // Int 5
Ordering.Int // compare integers
Ordering.Int.reverse // reverse sort, should be avaliable on all similar things
Ordering.String // compare strings
Ordering[A] // the type annotation for Ordering
pow(3, 2) // Double 9.0
round(5.45) // Long: 5
sqrt(4) // Double 2.0
// random
// ^ returns a double between 0 and almost 1
(random * 10 + 1) // random Double between 1 and 10
(random * 10 + 1).toInt // random integer between 1 and 10

```
