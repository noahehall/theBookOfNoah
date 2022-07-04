- bookmark
  - https://scala-lang.org/api/3.x/scala/Some.html
    - dropping through the list on the left sidebar
    - skipped on the symbol types, swing back to these

# scala

- all about the syntax
- there are 7 scala courses on coursera, take them.
- this is a really long file, suggest using the outline (e.g. in vscode) to see the hierarchy

  - and ctrl-f `# whatever your looking for` as generally things have a `# Category`, e.g. `# Type Parameters`

- todos
  - implicit function types sorta went over my head
  - https://dzone.com/articles/executor-and-execution-context-objects-in-scala-1
  - https://alvinalexander.com/scala/how-to-create-java-thread-runnable-in-scala/
  - find Promise in the scala docs
  - find sealed traits in the scala docs
  - todo: need to do a better job at categorizing operators, especially the mutable vs immutable ones
  - extending, using `poop extends blah1, blah2` vs `poop extends blah1 with blah2`
  - in general look through all the coursera assignments for each week, there are bunches of stuff in there that wasnt explained in the course and could be a good starting point for grepping the docs

## links

- [scala 3 migration guide: dropped features](https://docs.scala-lang.org/scala3/guides/migration/incompat-dropped-features.html)
- [scala 3 new features](https://docs.scala-lang.org/scala3/reference/other-new-features/index.html)
- [scala user Q&A forum](https://users.scala-lang.org/latest)
- [scala cheatsheet](https://github.com/lampepfl/progfun-wiki/blob/gh-pages/CheatSheet.md)
- [intellij toolbox, fkn use it](https://www.jetbrains.com/toolbox-app/)
- [scala & intellij: getting started](https://docs.scala-lang.org/getting-started/intellij-track/getting-started-with-scala-in-intellij.html)
- [example gitignore for scala](https://alvinalexander.com/source-code/scala/sample-gitignore-file-scala-sbt-intellij-eclipse/)
- [programming in scala 3 book](https://www.artima.com/shop/programming_in_scala_5ed)
- [47 degrees: scala exercises](https://www.scala-exercises.org/)
- [if expressions/guards on match/case expressions](https://alvinalexander.com/scala/how-to-use-if-then-expressions-guards-in-case-statements-scala/)
- ref
  - [AAA kind polymorphism](https://docs.scala-lang.org/scala3/reference/other-new-features/kind-polymorphism.html)
  - [AAA scala 3 ref: fkn become one with this](https://dotty.epfl.ch/api/index.html)
  - [AAA scala 3 reference](https://docs.scala-lang.org/scala3/reference/index.html)
  - [AAA scala vesions](https://github.com/lampepfl/dotty/tags)
  - [adt: algebraic data types](https://docs.scala-lang.org/scala3/book/types-adts-gadts.html)
  - [BBB scala 2 examples](https://www.geeksforgeeks.org/scala-programming-language/?ref=lbp)
  - [classes: inner classes](https://docs.scala-lang.org/tour/inner-classes.html)
  - [classes: open classes](https://docs.scala-lang.org/scala3/reference/other-new-features/open-classes.html)
  - [context functions](https://docs.scala-lang.org/scala3/reference/contextual/context-functions.html)
  - [context: contextual abstractions](https://docs.scala-lang.org/scala3/reference/contextual/index.html)
  - [context: given imports](https://docs.scala-lang.org/scala3/reference/contextual/given-imports.html)
  - [context: given instances](https://docs.scala-lang.org/scala3/reference/contextual/givens.html)
  - [context: implicit conversions](https://docs.scala-lang.org/scala3/reference/contextual/conversions.html)
  - [context: using clauses](https://docs.scala-lang.org/scala3/reference/contextual/using-clauses.html)
  - [enums: desugaring](https://docs.scala-lang.org/scala3/reference/enums/desugarEnums.html)
  - [enums](https://docs.scala-lang.org/scala3/reference/enums/enums.html)
  - [fn composition](https://www.baeldung.com/scala/function-composition)
  - [given instances and using clauses](https://docs.scala-lang.org/scala3/book/ca-given-using-clauses.html)
  - [groupBy and groupMap](https://blog.genuine.com/2019/11/scalas-groupmap-and-groupmapreduce/)
  - [interacting with java](https://docs.scala-lang.org/scala3/book/interacting-with-java.html)
  - [List](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html)
  - [long list of scala & fp terms](https://docs.scala-lang.org/glossary/)
  - [methods: extensions](https://docs.scala-lang.org/scala3/book/ca-extension-methods.html)
  - [methods: polymorphic](https://docs.scala-lang.org/tour/polymorphic-methods.html)
  - [multiversal equality](https://docs.scala-lang.org/scala3/book/ca-multiversal-equality.html)
  - [option: api](https://dotty.epfl.ch/api/scala/Option.html)
  - [pattern matching: match types](https://docs.scala-lang.org/scala3/reference/new-types/match-types.html)
  - [pattern matching: option-less](https://docs.scala-lang.org/scala3/reference/changed-features/pattern-matching.html)
  - [pattern matching](https://docs.scala-lang.org/tour/pattern-matching.html)
  - [scala 3 example project](https://github.com/scala/scala3-example-project)
  - [scala on stackoverflow: super useful](https://stackoverflow.com/tags/scala/info)
  - [Seq scala 2 ref](https://www.scala-lang.org/api/current/scala/collection/immutable/Seq.html)
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
  - [value classes and universal traits](https://docs.scala-lang.org/overviews/core/value-classes.html)

## basics

- knowing how to read algebraic data types (type annotations) is critical to using scala
- scope:
  - entities within a block `{}` or `indentation in scala 3` are only visible from within the block
  - ^ and shadow entities of the same names outside the block
- semi colons only required to separate two statmeents on a single line
- indentation is important (think python)
- compiler evalutes type annotations at compile time, to guard against some kinds of errors at run-time
  - except in worksheets, as there is no distinction between compile & runtime
- vals vs defs
  - vals are always evaluated once, and the result is reused each time their name is used
  - the body of defs are evaluated each time the def is invoked, if its never invoked then never evaluated
    - thus one reason to prefer defs over vals is to delay the evlaution of a computation until the point in a progran where its effectively needed
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

- check the sbt docs in this repo

```scala
// program entry point, can be in any source file
@main def SomeAppName(args: Array[String]): Unit = ???
// or with named params
@main def SomeAppName(poop: Boolean, flush: Int) = ???
// alternative syntax
object SomeAppName extends App:
  def main(args: Array[String]): Unit = ???
// ^ both of the above are invoked on the cmd line like:
// ^ scala SomeAppName arg1 arg2 etc

// file: src/main/scala/poop/soup/woop/wtf.scala
// package: assign a namespace to all things in this file
// ^ imports of this file access its things as packageName.thing, e.g. poop.flush
// ^ source files should mirror the packages structure on harddisk
// ^ thus object Wtf in file src/main/scala/blah/poop/soup/woop/Wtf.scala
// ^^ should be in package poop.soup.woop
package blah // blah is prepended to namespace below
package poop.soup.woop

object Wtf:


/// imports
// so you dont have to use the fully qualified name of some entity
// e.g. scala.math.blah.blah works without importing, but importing makes it easier
// ^ scala (e.g. scala.Int), java.lang and scala.Predef are automatically imported
import scala.math._ // wildcard import in scala 2
import someObj.* // wildcard import in scala 3
import StringUtils.{truncate, containsWhitespace} //import some members of package
import poop.Flush // import a specific member
import poop.{Flush as ShouldIFlush} // import as alias
```

### quickies

- semi colons only required if multiple statements exist on the same line
- all data types are objects, so everything has a `someVar.someMember`
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

## identifiers

- [rules for operators](https://docs.scala-lang.org/scala3/reference/changed-features/operators.html)
- i.e. operators, symbolic identifiers are what you would call operators in other languages
- all operators are really identifiers (or definitions), thus can be called with dot operator
  - `this.==(that)` the same as `this == that`
  - same thing for fns attached to entites, e.g. `someObj.poop(true)` == `someObj poop true`
- operators (i.e. definitions) names can be alphanumeric, symbolic (e.g. x1, \*, +?%&, vector*++, counter*=)

```scala
/**
The associativity of an operator is determined by its last character:
^ Right-associative if ending with :
^ Left-associative otherwise.
operator precedence
^ Note that assignment operators have lowest precedence.
^ The precedence of an operator is determined by its first character, with the following increasing order of priority:

(all letters)
|
^
&
< >
=
!something
actor ! msg // in this case ! sends a msg to actor in Akka, pronounced till
:
+ -
* / %
(all other special characters)
*/

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
:: // pronounced 'cons' represents a list with 2 elements, usually the subtype + nil, or the head + tail
  // ^ can be used to create a new list from an existing list, with an el prepended to head
  // its a constant time operation, as the existing list isnt copied, its reused
  // List(alice, bob) == alice :: bob :: Nil
  // is right-associative, i.e in the above example it starts from Nil, and moves list
  // can be left associative via the comma operator on Nill,
    // ^ Nil.::(bob).::(alice)
// below: the : always points to the sequence
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
end Poop // End Marker: optional syntax for signaling the end of some thing, e.g. a case class/object/def/if/etc, must align with the opening keyword

```

## variables

- `val` are evaluated only once, at the point of definition, and generally used over defs for intermediate expressions
  - i.e. by value
- `def` are evaluated each time, when accessed, and preferred for expressoins that may not terminate (like loops)
  - i.e. by name

```scala

val immutableValue: Boolean = true
var mutableValue: Boolean = true
lazy val immutableValue: Boolean = true // rhs is evaluated only when its variable is used, and then the result is cached
var unintializedVar: Int = _ // the _ is the key thing here
// Int 100
val interestingVal: Int =
  val ten = 10
  ten * ten
```

## types

- types can automatically get wider, e.g. Int used in place of a Double, but never stricter,
  - e.g. Double in place of Int will cause the compiler to throw an error
- are either
  - sets of operations with an unbounded number of possible values
  - sets of possible values with an unbounded number of operations
- any type with an `apply` method can be called as a fn, e.g. myType()
- any type with an `unapply` method can be destructured
- data access patterns
  - linear: access to the first is faster than access to the middle/end , e.g. a List
  - balanced: evenly balanced across start, mid and end
- type tests & type casts are discouraged in scala
- generally there is a .toInt, .toIntOption, etc, on everything,

### Kind Polymorphism

- generally type parameters are partitioned into kinds
  - first level types are types of values
  - higher kinded types are type constructors (e.g. List, Map) that require subtypes
- a type can be used only as prescribed by its kind

#### AnyKind

- AnyKind: the super-type of ALL types
  - see the Kind Polymorphism link

```scala

// a def that can be used with for paramters of any kind
// ^ by setting an upperbound on AnyKind
// ^ this is kind polymorphism
// use this sparingly
def poop[T <: AnyKind] = ???


```

##### AnyVal

- the root of all value types; i.e. primitives, i.e. values not implemented as objects
- numeric value types: Double, Float, Long, Int, Char, Short, Byte
  - subrange types: Byte, Short Char
  - Integer types: subrange types + Int, Long
  - floating point types: Float, Double
- non-numeric value typeS: Unit, Boolean
- user defined value classes: any entity that extends from AnyVal
  - treated specially by the compiler;
  - provide a way to improve performance on user defined types by:
    - avoiding object allocation at runtime
      - must have a single val param that is the underlying runtime representation
      - can define defs, but no vals, vars, or nested entities
      - can extend no other trait (except AnyVal)
      - cannot be used in type tests/pattern matching
      - cannot override equals or hashcode defs
    - replacing virtual method invocations with static method invocations

```scala
// user defined value class
class Wrapper(val underlying: Int) extends AnyVal {
  def foo: Wrapper = new Wrapper(underlying * 19)
}
val poop = Wrapper(3)


```

##### AnyRef

- the root of all reference types
- ^ you generally need to decompose them to get to the data they encapsulate
  - e.g. via pattern matching / for comprehensions

```scala

anyref
  .eq // a == b
  .ne // a != b
  .notify() // see elseware
  .notifyAll() // todo
  .synchronized(poop) // see elseware
  .wait() // todo
```

### Boolean

- Boolean (equivalent to Java's boolean primitive type)
- subtype of AnyVal

```scala

// all evaluate to Boolean
true
false
!true
true && false // conjuction short-circuit
false || true // disjunction short-circuit

val bool: Boolean = false
val bool: Boolean =
  if 1 > 0 then true
  else if 0 > 1 then true
  else false

a & b == a && b // the & and && work the same for bools
a | b == a || b // the | and || work the same for bools
a ^ b // true if a && b are different
```

### Number types

- the smallest integer ( Int.MinValue in Scala) has no positive representation.
- ^ This has caused bugs in real systems, but is trivial to find with property based testing.

```scala

0.001
0.1e-20
1.0e20

val num: Int = 100
val num: Int = 1_000 // nice
val superLongNumber: BigInt = BigInt("insert really long number here")
```

#### unsigned integer types

##### Char 16-bit unsigned integer

#### signed integer types

##### Byte 8 bit -128 to 127

##### Short 16-bit -32768 to 32767

##### Int 32-bit

##### Long 64-bit signed integer

#### floating point

##### Float 32 bit

##### Double 64 bit

### Unit

- i.e. javascript void
- not represented by any object in the underlying runtime system
- a method with type Unit is analogous to javascripts (or javas) void
  - doesnt return anything but may have side effects


### Nothin

- represents a computation that never returns a value
- is a subtype of all other types
- use cases
  - signal abnormal termination (e.g. all exceptions have type Nothing)
  - as an element type of empty collections

### Extensions

- extend any type with NEW functionality outside of the type definition
  - generally any method that doesnt need access to internal members of the class should (or atleats could) be defined as extension methods
  - you cannot OVERRIDE existing fnality
  - you cannot refer to other class members via `this`
  - if you get a `blah doesnt have poop`
    - you need to import the extension into the file where its used; as they have to be in scope
    - unless the extension is being applied to an opaque type, as the compiler will check the scope of the opaque type definition for you
  - reqs: extension methods for an expression of type T are valid if:
    - they are visible (defined, inherited, imported) in a scope enclosing the point of the application, or
    - they are defined in an object associated with type T, or
    - they are defined n a given instance associated with type T
- see `# Opaque Type alias` for a real world example
- see `# type class` for how to use with type classes

```scala

extension (n: Int)
  def isZero: Boolean = n == 0
  // etc
val five = 5
five.isZero // false
0.isZero // true

// i.e. you could pretty much extend anything, like a class
// SomeType.addThisMethod() // can be invoked directly on the entity its extending
exension (p: SomeType):
  def addThisMethod = ???

extension (p: FakeInt):
  def add = ???
  // now you can do fakeIntPoop + fakeIntFlush as if they were fake integers
  def + (y: FakeInt): FakeInt = p.add(y)
  // now you can do fakeIntX blah fakeIntX
  // ^ i.e. treat def blah as an infex operator
  infix def blah(that: fakeInt): FakeInt = ???
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
  - not inspectable from outside the scope in which they are defined
    - great for concealing type values from prying eyes

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

### Type Parameters

- type parameters: i.e. construct for implementing generics/polymorphism, enable a type to be consumed in multiple types
  - generics: a fn/class can be applied to arguments of many types; instances of a fn/class are creatd by type parameteriztion
  - a type can have instances of many types
- variance: subtyping relationship varies with the type parameter
  - Functions must be contravariant in their argument types and covariant in their result types,
    - mutable things are always invariant
  - covariant: C[A] <: C[B],
    - a type that accepts mutations of its elements shoud not be covariant
    - fns are always (and ONLY) coveriant in their result type
      - i.e. covariant type parameters can only appear in method results (not parameter lists)
      - covariant type params may appear in lower bounds of method type parameters
  - contravariant: C[A] >: C[B]
    - fns are always contravariant in their argument types
      - i.e. contravariant type params can only appear in method parameters (not result type)
      - contract variant type params may appear in upper bounds
  - nonvariant: neither C[A] nor C[B] is a subtype of the other
    - these types can appear anywhere, why they are the default
- type erasure: type params do not affect evaluation; i.e. are removed before evaluating the program

```scala
//////////////////////////////////
/// Type Parameters
// i.e. generics
//////////////////////////////////
// stringify[Int](1)
// stringify[Boolean](true)
def stringify[A](thing: A): A = thing.toString

// Poop[Nothing] is a subtype of any type of Poop
// +A === can only be in the result type, not argument types
trait Poop[+A]
object Empty extends Poop[Nothing]


//////////////////////////////////
/// Type Bounds
// generally dictates how a type parameter relates to another type
// ^ e.g. fn type parameter relative to fn return type
// ^ e.g. super class type relative to subclass type
//////////////////////////////////

/// UPPER BOUNDS type
// Poop is a subtype of Flush, or is Flush,
// i.e. poop must confirm to the interface of Flush
// i.e. liskov substitution principle:
// ^ if A<: B, then everything you can do to a value of type B you can do to a value of type A
type Poop <: Flush
def someFn[MyInt <: Int](n: MyInt): Int = ???
// shorthand
class Poop[+A](...):

/// LOWER BOUNDS type
// Poop must is a super type of Flush, or Flush is a subtype of Poop
type Poop >: Flush
// shorthand
class Poop[-A](...):

// lower + upper bounds to restrict type S to an interval between 2 types
def someFn[Poop >: Nothing <: Any](p: Poop): Poop = ???

// nonvariant
class Poop[A]


```

### type directed programming

- type inference: when the compiler infers types from values
- term inference: when the compiler infers expressions (i.e. terms) from types
  - When there is exactly one "obvious" value for a type, the compiler can find this value and provide it to you.

#### Contextual Abstractions

- todo: @see https://docs.scala-lang.org/scala3/book/ca-contextual-abstractions-intro.html

- context parameter given instance association
  - companion objects associated with of any inherited types of the context parameter
  - companion objects associated with the specific context paramater type
  - if the context parameter is an inner class, the other objects in which it is embedded

```scala
//////////////////////////////////
// full example, easier to understand by reading this upfront
//////////////////////////////////

// trait that specifies the interface
trait AddAnything[T]:
  def add(x: T, y: T): T

// given definitions: these are the candidates for a using clause
// must be visible at:
// ^ the point of the method call, e.g. defined in the same file or imported
// ^ or in a companion object associated with the context parameter
// ^ else error is thrown
object AddAnything:
  given Int: AddAnything[Int] with
    def add(x: Int, y: Int): Int = x + y
  given String: AddAnything[String]  with
    def add(x: String, y: String): String = s"$x plus $y = ${Int.add(x.toInt, y.toInt)}"

// compiler replaces the type with a matching given candidate
// i.e. based on type T, compiler will inject either addInt or addString
def add[T](x: T, y: T)(using fn: AddAnything[T]): T =
  fn.add(x, y)
// now where in your code you can call this
// the compiler will figure out which AddAnything to use
add(10, 12) // 22
add("10", "12") // 10 + 12 = 22

// context params can be anonymous,
// ^ if the body doesnt mention the param by name,
// ^ and passes it on to an inner fn
// ^ or calles it instead using the keyword summon
// ^ summon is a predefined definition in the standard library
def addAnon[T](x: T, y: T)(using AddAnything[T]): T =
  summon.add(x, y)
addAnon(10, 12) // 22
addAnon("10", "12") // 10 + 12 = 22

// context bound syntax
// ^ even shorter: now you dont need the using parameter list
// ^ i.e. type parameter T has one context bound: AddAnything
def addSuperAnon[T: AddAnything](x: T, y: T): T =
  summon.add(x, y)
addAnon(10, 12) // 22
addAnon("10", "12") // 10 + 12 = 22

```

##### Context Params

- context:
  - the current configuration: at call site; inferred automatically, but can be overridden
  - the current scope:
  - the meaning of an operation on a type: e.g. `<` on a string vs int
  - the user on behalf of which operation is performed
  - the security level in effect
- context (implicit) parameters: a parameter list prefixed with `using` that specifies a Type with concrete values the compiler should use when this fn is invoked
- given instances search scope/resolution
  - the given instance must be compatible with the type used at the call site
  - either:
    - all instances that are visible (inherited, imported, or defined in any enclosing scope)
    - given instances found in any companion object associated with the context parameter
  - if there is a single (most specific) instance, it will be used as the actual value injected
    - error is thrown otherwise: e.g. more than one given instance matches the requirement for a context parameter and none have higher relative specifity

```scala
// syntax examples
// context parameters are prefixed with `using (scala 3)|implicit (scala 2)` in their fn definition
// ^ within a parameter list only the last param can be a context parameter
// ^ instructs the compiler to supply the value based on the type for us!
// ^^ in both cases below, the compiler chooses the correct value based on the type of A
def myDef[A](...)(...)(....) // there can be multiple parameter lists
def myDef[A](....)(using a: A, b: B) // both a and b are context parameters
def myDef[A](...)(using a: A)(...)(using b: B) // context params can be mixed with regular params

// Argument inferred by the compiler
myDef[Int](listOfInts)
// argument Explicitly provided
myDef[Int](listOfInts)(Ordering.Int)

```

##### Given Instances

- for a context parameter to work, there must be concrete instances given to the compiler
- given instance search scope:
  - all the given instances that are visible: inherited, imported, or defined in an enclosing scope
  - the given instances found in a companion object associated with the type being used
    - companion object of the class itself
    - companion objects associated with any of T's inherited types
    - companion objects associated with any type argument in T
    - if T is an inner class, the outer objects in whic it is embedded
- given instance specificity
  - x is in a closer loexical scope than y
  - x is in a class/object which is a subclass of the class defining y
  - type X is a generic instance of type Y
  - type X is a subtype of Y
- best practices
  - given instances should have specific types and/or be local in scope
  - never use a common type (e.g. Int, String) as the type of a globally visible gien instance
    - remember the compiler will simply match on the type `Int` and use its value, causing spurious errors and ambiguities
  - generally you should use type alias, or opaque type aliases (if privacy is needed)

```scala

// interface defining operations for a Poop of A
trait Poop[A]:
  def flush(x: A): A

// concrete implementation of Poop for each expected type of A
// ^ reads as: given type of Int, which implements Poop of Int
// e.g. a given instance of type Poop[String] named Poop.String
// given instances are evaluated ONCE the first time intOrdering is accessed
// ^ the value is then reused by all subsequent invocations
object Poop:
  given Int: Poop[Int] with
    def flush(x: Int): Int = x * 2
  given String: Poop[String] with
    def flush(x: String): String = s"x was $x"
// alternative syntax with anonymous given instance
// compiler synthesizes a name: given_Poop_Double
given Poop[Double] with
  def flush(x: Double): Double = ???

// different ways of invoking given instances
def blah[A](x: A)(using fn: Poop[A]): A =
  fn.flush(x)
// anonymous without type
def blah2[A](x: A)(using Poop[A]): A =
  summon.flush(x)
// anonymous with type
def blah[A](x: A)(using Poop[A]): A =
  summon[Poop[A]].flush(x)
blah(1) // 2
blah("1") // x was 1

// given instances can be imported
// ^ ensures given instances are in scope
// ^ required if there is no companion object
// import by name
import AddAnything.Int // given instance Int
import AddAnything.{given Int} // explicit given instance Int
// import by type: this is the preferred import method
import AddAnything.{given AddAnything[?]} // import all AddAnything givens
import AddAnything.{given AddAnything[Int]} // import a specifiv AddAnything
// import all
import AddAnything.given // import all givens, no _ needed

// conditional givens
// a given that maps its A to a List[A]
object Blah:
  given Something[A](using fn: Thing[A]) as Thing[List[A]] with
    def someFn = ???
```

##### Implicit Function Types

- todo: find this in the docs
- trade types for parameters (where context params trade types for terms)
  - you specify the return type of a method (e.g. in a type alias)
  - and the compiler infers the method params that match the type

```scala
// define a type alias for an implicit fn
// i.e. a lambda
type Poop[A] = Poop ?=> A
// now you can replace all using clauses of type Poop[A]
def someDef(flush: Flush)(using Poop[A]): A = ???
// and this
def otherDef(p: Int, do: Poop => A) = ???
// to this
def someDef(flush: Flush): Poop[A] = ???
def otherDef(p: Int, do: Poop[A]) = ???
```

#### Type class

- enable the compiler to inject values based on the type requirements; general pattern for injecting values based on context
  - use cases
    - support retroactive extension: the ability to extend a data type with new operations without changing hte original definition of the data type
    - enable conditional given definitions
    - ad hoc polyphormism: a type of Blah[A] has different implementations for different types of A
- a generic trait (has a parameter) that has a companion object with given instances for type instances of that trait
  - basically the pattern used in `Context Params` and `Given Instances` where the trait defines an interface, and an object defines concrete implementations for specific types of that interface
  - pattern consisting of 3 elements
    - trait: an interface defining for grouping operations by by their type
    - object: define concrete implementations of Interface for each type of A that are candidates to be injected wherever Interface[A] is needed
    - definition: a polymorphic method that takes a context parameter matching the interface
      - a fn that relies on a concret value of Interface[A]
- conditional given instances
  - when an given instances is defined generically with type params & has context params
  - can only be defined via type classes: normal subtyping and inheritance cannot express this conditional
    - becaue a class either inherits a trait or doesnt
- can contain extensions like any other trait
  - are visible whenever a given instance for the trait is available

```scala

// type class trait
trait SomeTrait[A]:
  def someFn() = ???
  extension(x: A)
    def blah1() = someFn() + 1
    def blah2() = someFn() + 2
```

#### Type conversions

##### Implicit Conversions

- automatically convert an expression of type A to type B
  - relies on given instances, and at most ONE implicit conversion can be applied to a given expression
- use cases
  - usually for providing more ergonomic/intuitive interfaces & APIs

```scala
// example modeling some JSON values
sealed trait Json
case class JNumber(value: BigDecimal) extends Json
case class JArray(els: List[Json]) extends Json
case class JObject(fields: (String, Json)*) extends Json
// default way to create json objects without implicit type conversion
JObject("name" -> JString("Noah"), ...etc)
// ergonomic way with implicit conversion
object Json
  // def that accepts a tuple of repeated params (key, value), (key value), etc
  def obj(fields: (string, JsonField)*): Json =
    JObject(fields.map(_.json)*)
  // type that models any Json field
  case class JsonField(json: Json)
  // companion object providing implicit conversions via given instances
  object JsonField:
    // implicit conversions are given instances of type Conversion, from type A to type B
    // ^ e.g. string to JsonField, Int to JsonField, etc
    given fromString: Conversion[String, JsonField] with
      def apply(s: String) = JsonField(JString(s))
    // you need a given instance + apply (implicit conversion) for each type of JsonField
    // additional givens for types
    // ...
    given fromJson:Conversion[Json, JsonField] with
      def apply(j: Json) = JsonField(j)
// how the consumer uses the implicit conversion
import scala.language.implicitConversions // have to inform the compiler of our intent
Json.obj("name" -> "noah", ...etc) // use the implicit conversion
```

#### Retroactive Extension

- the ability to extend a data type with new operations without changing hte original definition of the data type
  - basically applying a contextual abstraction for a class, e.g. applying a sort method for a type Poop

```scala
// using the earlier examples in this block
// lets add a flush method to wipe
case class Wipe():
  override def toString = "i am wiping"

// we add a new given instance for types of Wipe
object Poop:
  given Wipe: Poop[Wipe] with
    def flush(x: Wipe): Wipe =
      println(x.toString); x

// this operation now works for A of Wipe
def blah3[A](x: A)(using Poop[A]): A =
  summon[Poop[A]].flush(x)

blah(Wipe()) // invokes the given Wipe definition
```

### domain modeling

- abstractions: interfaces should be simple and elegant
- implementations: logic should be efficient and fast
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

#### Any

- the root of the scala class hierarchy
- every other class [in]directly inherits from Any
- if a trait extends from Any, its called a `universal trait`

#### Type Hierarchies

- various ways to model concepts

```scala
trait A
class B extends A
Object C extends B

```

#### Class

- define a type and a constructor for encapsulating concepts; the type & constructor are kept in different namespaces but behave as one to the programmer
  - by default constructor params are private (thus encapsulated within the class)
  - live in the type namespace
- The rule of thumb is to:
  - use classes whenever you want to create instances of a particular type,
  - use traits when you want to decompose and reuse behaviour.
- use cases
  - bundles of fns operating on some common values represented as fields,
    - i.e. whenever you need to bundle DATA and OPERATIONS
  - can extend multiple traits but only a single super class
  - ^ can be used anywhere the extended traits/super class are expected
  - if the super class is defined in another file, it needs to be marked `open`
  - model a mutable datastructure
- generally its best to use classes at the leafs of your inheritance model
- uses reference equality, i.e instances must point to the same point in memory in order to be considered equal
  - reference equality is important for mutable datastructures
- definitions inside a class are called methods
- params inside a class constructor are called members
- `this` always refers to the current object (instance) of a class
  - a member of the class can be referred to be name, without `this.name` and simply `name`
- primary constructor:
  - takes the parameters defined in the class definition
  - executes all statements in the class body
- auxiliary constructor: any method named `this`

```scala

// the body is initialized as part of the default constructr, so you can put any initializing logic there
// type Dog, and an implicit (i.e. primary) constructor Dog(...) for creating instances (objects) of the type
// access members of the objects (instances, lol) with the dot operator
// ^ dog.name, dog.eman
class Dog(
  var name: String, // var auto generates a getter and a setter
  val eman: String, // val auto generates a setter
  age: Int = 1_000 // private, not available outside the class
):
  // throws IllegalArgumentException with the msg
  // ^ used to enforce a precondition on the caller
  // ^^ i.e. fault is with the caller
  require(name.length > 0, "name must be a value")
  // throws AssertionError
  // ^ used to check the logic of the fn itself, not relatant to the caller
  // ^^ i.e. fault is with the internal fn logic/implementation
  // ^ thus this example doesnt match the use case, but whatev
  assert(age > 18, "must be an adult")
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
  override def toString = s"my name is $name"
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

- object definitions are singletons with exactly one instance
  - are values not references
  - live in the value namespace
- lazy initialized only when its members are referenced, similar to a `lazy val`
- usecase:
  - grouping methods and fields under one namespace, i.e. creating an object to provide static methods and fields for its companion class
    - act as a companion to a class with the same name in the same file

```scala
object PoopUtils:
  def flush(done: Boolean): String =
    if done == true then "flushing" else "still pooping!"

// scala 2 syntax
object SomeObj {
  val prop: Boolean = true
}

object Poop extends SomeOtherEntity:
  def definedOnObjectPoop: = ???

// poop().defiendOnObjectPoop() // can call methods on isntances of the class defined on the companion object
class Poop(...): ???
```

#### Companion Object

- an object that has the same name as a class, case class, or enum, and declared in the same file
  - the other side is called the objects `companion class|case class|enum`
  - each can access the others private members
  - it refers to the object when its used on the right-hand side of a definition, or when it is passed as an argument to an operation
  - it refers to the sealed trait (the type) when it is used in a type annotation
  - etc
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

- creates a super class to provide an interface/contract to subclasses
  - without a user-defined superclass, all sub classes extend the standard class Oject in java.lang
  - a base class can extend from a SINGLE superclass, but can extend from MULTIPLE traits
  - from the subclass perspective, the super class is called a base class
- can have companion objects, subclasses, as well as extend other classes
- abstract members: definition interfaces for concrete (derived) classes

```scala
abstract class PoopInterface:
  def wipe(didPoop: Boolean): Boolean
  def flush(didWipe: Boolean): Boolean

```

#### Trait

- primary way to create an interface, its like an abstract class without the limitation of single inheritance
  - contain parameters (scala3), abstract & concrete methods and fields
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
  extension (x)
    def blah() = ???
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

// creating instances of trait, without extends
// each will be an instance of an anonymous class that extends from the trait
trait PoopOf[+T];
val poopOfInts = new PoopOf[Int]
val poopOfBools = new PoopOf[Boolean]

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
  - are shorthands for classes with companion objects
- NOT available in scala 2, instead used sealed traits and case objects
- use cases
  - used to define sets of constants, like the months in a year, the days in a week, directions like north/south/east/west, etc
  - convenient way to construct data composed from cases
- ordinal: the value of each enum field, starting at 0
  - only simple enum values have ordinal numbers, not parameterized values
- preferred way to represent case class hierarchies
  - i.e.
    - instead of this: a hierarchy of abstract class > object of case classes with fields
    - do this: an enum (abstract class) of parameterized fields

```scala
// copypasta
// ^ matching on numbers
i match {
    case a if 0 to 9 contains a => println("0-9 range: " + a)
    case b if 10 to 19 contains b => println("10-19 range: " + b)
    case c if 20 to 29 contains c => println("20-29 range: " + c)
    case _ => println("Hmmm...")
}
num match {
    case x if x == 1 => println("one, a lonely number")
    case x if (x == 2 || x == 3) => println(x)
    case _ => println("some other value")
}
// object type things
stock match {
    case x if (x.symbol == "XYZ" && x.price < 20) => buy(x)
    case x if (x.symbol == "XYZ" && x.price > 50) => sell(x)
    case _ => // do nothing
}
// extract fields from case classes
def speak(p: Person) = p match {
    case Person(name) if name == "Fred" => println("Yubba dubba doo")
    case Person(name) if name == "Bam Bam" => println("Bam bam!")
    case _ => println("Watch the Flintstones!")
}


// shorthand: with simple values
enum Color:
  case Red, Green, Blue
// longhand with simple values
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
  case Mercury extends Planet(3.303e+23, 2.4397e6)
  case Earth   extends Planet(5.976e+24, 6.37814e6)

  private final val G = 6.67300E-11
  def surfaceGravity = G * mass / (radius * radius)
  def surfaceWeight(otherMass: Double) =
    otherMass * surfaceGravity
  def getOrdinal = Planet.values(ordinal) // ordinal refers to the current enum this def is invoked on
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
  .values(0) // get the first one
  .valueOf("Wipe") // MyKNownValues.Wipe // get the matching enum value from its string label || runtime error


// mimicking enums in scala 2
// uses the same pattern matching logic, check elseware
sealed trait PrimaryColor
object PrimaryColor:
  case object Red extends PrimaryColor
  case object Blue extends PrimaryColor
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

// class hierarchy for JSON
// ^ note that we dont use the extends clause, because its optional
enum JSON:
  case Seq (elems: List[JSON])
  case Obj (bindings: Map[String, JSON])
  case Num (num: Double)
  case Str (str: String)
  case Bool (b: Boolean)
  case Null
// using the class hierarchy
val jsData = JSON.Obj(Map(
  "name" -> JSON.Str("noah"),
  "mobile" -> JSON.Obj(Map(
    "area" -> JSON.Num(415),
    "number" -> JSON.Num(4154155)
  )),
  "skills" -> JSON.Seq(List(
    JSON.Str("app dev"),
    JSON.Str("growth hacking")
  ))
))
```

#### case class

- define a type and a constructor for aggregating concepts; the preferred way to define complex data
  - by default constructor params are public and immutable
- immutabe class with some syntatic sugar
  - fields are public and immutable by default
  - the compiler auto generates the following methods (since all fields are immutable)
    - unapply: enables pattern mmatching on a case class
    - copy: create modified copies of an instance
    - equals, hashCode: using structural equality; enables you to use instances in Maps
    - toString: helpful for debugging
- use case
  - whenever you need to compose/decompose pure data (i.e. without associated logic)
  - used to model immutable data structures (as opposed to classes which could be mutable)
    - equality (structural) is determined based on instances having identical values to be considered equal
    - structural equality is important for immutable datastructures
  - super easy decomposition

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

// Case classes can be used as patterns
case class Person(name: String, relation: String)
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

#### Option

- [option ref](https://scala-lang.org/api/3.x/scala/Option.html)
- Represents optional values. Instances of Option are either an instance of Some or None.
  - allows for sophisticated chaining of $option values without having to check for the existence of a value.
- The most idiomatic way to use an $option instance is to treat it as a collection or monad and use map,flatMap, filter, or foreach:
- special case class containing zero/one element: safer alternative than `null`
- also support much of the API available on collections (even tho they are not a collection type)
- None: represent non-existent values

```scala

/// Some: Object > Iterable > Serializable > Option
val some: Option[Int] = Some(1)

/// None
val none: Option[Int] = None

none.fold { 2 * 5} (_ * 3) // 10
some.fold { 2 * 5} (_ * 3) // 3

/// zip example
// ^ if either options are None, returns None
val first: Option[String] = Some("noah")
val last: Option[String] = Some("hall")
val name: Option[(String, String)] = first.zip(last)

// some collection operations return an Option
val poop: List[Int] = List(1, 2, 3)
val found = poop.find(x => x == 1) // Some(1)
val notFound = poop.find(x => x == 1000) // None

// idiomatic scala
val name: Option[String] = request getParameter "name"
val upper = name map { _.trim } filter { _.length != 0 } map { _.toUpperCase }
println(upper getOrElse "")
// ^ same as above
val upper = for {
  name <- request getParameter "name"
  trimmed <- Some(name.trim)
  upper <- Some(trimmed.toUpperCase) if trimmed.length != 0
} yield upper
println(upper getOrElse "")

// api
// generally always returns Some[B] with an operation performed on B,
// ^ else may return B with an operation perform on B
// ^ else returns None if B doesnt exist
poop
  .collect{ partial } // partial[A] => Option[B]
  .contains(value) // x == value
  .exists(predicate) // predicate[A, Boolean]: Boolean
  .filter(predicate) // returns Option[A] if predicate[A, true]
  .filterNot(predicate) // returns Option[A] if predicate[A, false]
  .flatMap(lambda) // lambda[A] => Option[Any]
  .fold(ifEmptyLambda)(lambda) // runs ifEmpty if empty, else lambda
  .forall(predicate) // isEmpty then true || predicate[A, Boolean]
  .foreach(lamba) // lambda[A] => Unit
  .get // get val or error if empty
  .getOrElse("default value")
  .isDefined // tru if not empty
  .isEmpty // true if empty
  .lazyZip // see zip
  .map(lambda) // lambda[A] => A
  .nonEmpty // true if not empty
  .orElse(lamdbda) // Option[A] || lambda[A, Option[B]]
  .toList // List[A]
  .unzip // (Some(x), Some(y)) || (None, None)
  .unzip3 // see unzip2, but for 3
  .zip(someOtherOption) // Some(x, y) || None
  .zip3 // see zip but for 3
```

### collections

- each collection type comes with two variants
  - immutable: are auto imported
  - mutable: must be imported
    - should only be used if there are performance issues with immutable types
- generally all elements of a collection type must be of hte same type, except Tuple whose elements can be of anytype

```scala

import scala.collection.immutable
import scala.collection.mutable

val buffer = mutable.ArrayBuffer()

val empty = List.empty
val empty = List.empty[Int] // preferred

col
  .to(SomeType) // convert col to SomeType, e.g. LazyList, List,
```

#### Tuple

- collection of fixed size, but the values may have different types,
- Tuples are not classes! The syntax `someObject.memberName` is for classes.
- comes in two varieties
  - TupleSmall: up to 22 els
  - TupleXXL: over 22 els

```scala

val poop = "first" -> 1 // shorthand, but is it really?
val poop = ("first", 1)
val poop: (string, Int) = ("first", 1)
val (x, y) = poop // deconstruct a tuple
poop(0) // random access, index starts at 0

// destructuring tuples
// pull off items via their _N index
val first = spamEgg._1
val second = spamEgg._2
// ^ assign to a val: spamEgg is a 2-Tuple
v​al (x, y) = spamEgg
// ^via pattern mattching
spamEgg match
    c​ase (x, y) => ???
// via a def using a partial function (with curly braces) with a case expression
// partial fns get their type annotations from the outer fn, in this case map
spamEgg.map {​ case (x, y) => ??? }
// via index params
spamEgg.groupMap(_._1)(_._2) // first and second element in two parameter lists
```

#### Iterable

- defined as an `object Iterable` and `trait Iterable`
- filter vs withFilter
  - if you have a .map/.flatMap following the .filter, use .withFilter

```scala

// general ops
val concat = iter1 ++ iter2

// https://dotty.epfl.ch/api/scala/collection/Iterable.html
// ^ drop
someIter
  .collect(partialFn) // applies partial to all els on which the fn is defined
  .collectFirst(partialFn) // applies partial to the first el on which the fn is defined
  .concat(otherIter)
  .contains(x) // pass a KEY for a map
  .copyToArray(someArray, start?, length?) // copy els to array
  .corrosponds(otherIter)(predicate) // tests whether the predicate is true for corrosponding els in each iter
  .count(predicate) // # of els satisfying predicate
  .exists(predicate) // any match
  .filter(predicate) // els that satisfy predicate
  .filterNot(predicate) // all els that do not satisfy predicate
  .find(lambda) // Option, find the first el returning true for the predicate
  .flatMap
  .foldLeft(lambda) // same as reduceLeft, but takes an accumulator
  .foldRight(lambda) // same as .foldLeft, but leans to the right
  .forall(predicate) // all match
  .foreach(lambda) // doesnt return anything, only useful for sideffects
  .groupBy(lambda) // Partitions a collection into a map of immutable sequences according to some discriminator function.
  .groupMap(lambdaForKey)(lambdaForValue) // Partitions this immutable sequence into a map of immutable sequences according to a discriminator function key.
  .isEmpty // boolean
  .keys
  .lazyZip(otherIter) // same as zip, but lazy
  .map
  .map(lambda) // returns new list
  .nonEmpty // boolean
  .reduceLeft((x, y) => expr) // applies lambda to consequtive els in list, expr: x + y would reduce the list to a SUM of its elements
  .reduceRight(lambda) // same as .reduceLeft, but leans to the right
  .reverse
  .size // number of els
  .sorted // sorts the collection with the native sort fn on the underlying type
  .sortWith(predicate) // sorts the collection with predicate
  .takeWhile(lambda)
  .toList
  .toMap
  .toSet
  .toString
  .values
  .withFilter(predicate) // doenst produce an intermediate Iterable, instead applies any subsequent .map/.flatMap diectly to elements that satisfy the predicate
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

##### Map

- immutable dictionary associating keys T to values V
- extends
  - Iterable[(K, V)]: thus all lambda/predicates must adhere to this signature
  - function K => value, thus can be used anywhere fns can

```scala

// FYI: -> identifier is an extension defined in Predef as an alias to (poop, poop)
val poop: Map[String, Boolean] = Map.empty[String, Boolean]
val poop2 = poop + ("thiskey" -> true) // set key to value
var poop7: Map[String, Boolean] = Map("Poop" -> true, "Flush" -> false)
var poop8 = poop7 ++ poop2 // a new map with poop 2 upserted into poop7
val valueOfKey = poop8("another") // throws err if another isnt in map, use .get for Option or set a .withDefaultValue

val poopWithDefaultValue = poop.withDefaultValue("doenst exist")
val doesntExist = poopWithDefaultValue("does this key exist?") // doesnt exist


// API
poop
  .get(key) // Option: Some(value) || None
  .toList // List[(K, V)]
```

###### HashMap

- aka hash table, associative array, etc
- MUTABLE dictionary

```scala
import scala.collection.mutable

val data = mutable.HashMap.empty[String, Int]
data += ("a" -> 0)
data += ("b" -> 1) // HashMap[String, Int] = HashMap(a -> 0, b -> 1)

```

##### Set

- an unordered collection of unique values
  - DO NOT support efficient random access
- TODO: the api generally matches sequences, but will fix that later

```scala
val mySet = Set("my", "set")
val numbers = (1 to 6).toSet

// api

set
  .startsWith

```

###### TreeSet

- Red-black trees are a form of balanced binary tree where some nodes are designated “red” and others designated “black.”
- Like any balanced binary tree, operations on them reliably complete in time logarithmic to the size of the tree.
- Scala provides implementations of immutable sets and maps that use a red-black tree internally. Access them under the names TreeSet and TreeMap.

```scala

import scala.collection.immutable._

val x: TreeSet[Int] = TreeSet(1,3,5,7)

println(x.minAfter(6)) // Some(7): the minimum value in tree after 6
println(x.maxBefore(6)) // Some(5): maximum value in tree before 6
```

###### BitSet

- mutable collection containing a set of bits

##### Seq : Sequences

- collection whose elements have a dienfed ordering, usually the order in which tye are inserted into the collection
- can be accessed by index (starts at 0)

```scala
// common to all sequence type collections

someSeq
  .diff(removeTheseOtherEls)
  .exists(el)
  .flatMap(lambda)
  .forall(predicate) // true if all els satisfy predicate
  .head // first el, // error on empty sequence
  .headOption // returns Option, thus wont throw like .head
  .max // and Ordering must exist
  .maxBy(lambda)
  .min
  .product
  .sortBy(lambda)
  .sum
  .tail // everything after the first el, // error on empty sequence
  .unzip // unzips a zipped sequence
  .zip(otherSeq) // sequence of pairs
  .flatten

// example sortby
val list: List[(String, Int)] = List(
  "three" -> 20,
  "two" -> 2,
  "one" -> 1
)
list.sortBy((_, age) => age)
list.sortBy((name, _) => name)
```

###### strings: indexed sequence (from java)

- cannot be subclasses of Seq because it comes from java
- support the same ops ans Seq and can implicity be converted to sequences as needed

```scala
val poop: String = "flush"
val desc = "I am immutable, inferred type String"
val desc: String = "I am also a string"
// string interpolation
// anything prefixed with $ is treated as an expression
val descLong = s"inject another string here: $desc, ${poop.flush}"

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

###### List: linear sequence

- perf characteristics: not optimized for random access but support efficient head and tail decomposition
  - provides fast sequential access
  - constant time: ::, head, tail
  - linear time: random access, size
- sequential/linear immutable linked-list; each el has a pointer to the next el in the list
  - accessing the nth element requires iterating thrugh the first n-1 elements (i.e. all preceding els)
  - ^ O(n) operation
- used to model collections of values where the order matters
  - Nil: the last/only element, which will always be of type nil
  - Cons: a cell containing 2 items: Head (the element) Tail (the rest of the list/Nil)
    - i.e. each El in the list is Cons (i.e. cell)
- prefer over `ArrayBuffer` when there are many modifications to the underlying list

```scala

val poop: List[Int] = List(1,2,3)
val emptyPoop: List[Int] = List()
val emptyPoop: List[Int] = Nil
val multipleSubTypes: List[List[Int | Boolean]] = List(List(1, 2), List(true, false))

// pre/append values
val poop2 = 0 +: poop // List(0,1,2,3)
val poop2 = 0 :: poop // same as above
val poop2 = poop :+ 4 // List (0,1,2,3,4)
val poop3 = List(1,2) ++ List(3,4) // List(1,2,3,4)

// random access, not efficient on lists
list(0) // first el

// interface
list
  .apply(n) // the el at index N, or juts someList(n)
  .contains(x) // true if el X is in list
  .distinct // List[Int]: List(1,2,3)
  .drop(n) // list of remaining els, after removing N els from front
  .dropWhile(predicate) // remainder of list after any leading els satisfying predicate have been removed
  .exists(lambda)
  .head // first el
  .indexOf(x) // index of first el == x, or -1
  .init // list of all els except the last non Nil el
  .isEmpty // boolean
  .last // last non Nil element in list
  .length // # of els in list
  .partition(predicate) // (list.filter(predicate), list.filterNot(predicate))
  .reverse // list with els in reverse order
  .size // 4
  .span(predicate) // (list.takeWhile(predicate), list.dropWhile(predicate))
  .splitAt(n) // a tuple === (list.take(n), list.drop(n))
  .tail // everything except the first el
  .tail.head // second el
  .take(n) // the first N els, or all els
  .takeWhile(predicate) // longest prefix of list consisting of els that all satisfy predicate
  .updated(n, x) // a new list, index N set to el X, i.e. when u do poop(n) = el
  .mkString(separator) // combines all els in list as a string separated by String separator

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

###### LazyList

- elements of a lazy last are evaluated only on demand
- doesnt have the cons operator from list `::` instead uses `LazyList.cons(x, y)`

```scala
val empty: LazyList[Int] = LazyList.from(0)
val lazy = LazyList(1, 2, 3)
val to1000 = (1 to 1000).to(LazyList)
val concat = LazyList.cons(x, y) // concats x & y into a single lazy list
val concat = x #:: y // same as above, pronounced hashcons

// computing an infinite list
// ^ since the values arent computed until accessed, you can create a list that contains an infinite amount of something
// all natural numbers starting from start
def infiniteInts(start: Int): LazyList[Int] = start  #:: from(n+1)
val naturalNumbers = infiniteInts(0)
val multiples of 4 = naturalNumbers.map(_ * 4)
```

###### ArrayBuffer

- defined in java, and upcast to be a subtype of Sequence
- mutable indexed sequence
- accessing an element at any index takes the same time,
  - ^ O(1) operation
- prefer over Lists when prioritizing fast access, and not there arent many adding/removing of els

```scala
import scala.collection.mutable

val buffer = mutable.ArrayBuffer("poop", "flush")

```

###### IArray

- [IArray](https://scala-lang.org/api/3.x/scala/IArray$.html)
- An immutable array.
- An IArray[T] has the same representation as an Array[T], but it cannot be updated.
- Unlike regular arrays, immutable arrays are covariant.

###### Array

- Arrays are mutable, indexed collections of values. Array[T] is Scala's representation for Java's T[].
- cannot be subclasses of Seq because it comes from java
- support the same ops ans Seq and can implicity be converted to sequences as needed
- arrays are flat and mutable (elements can change)
  - list are recursive (list(list(list))) and immutable (elements cant change)
- generally the Collections API is available on Arrays

```scala


val poop: Array[String] = Array("one", "two")
val numbers = Array(1, 2, 3, 4)
val first = numbers(0) // read the first element
numbers(3) = 100 // replace the 4th array element with 100
val biggerNumbers = numbers.map(_ * 2) // multiply all numbers by two

```

###### Range

- represented as
  - a sequence of evenly spaced integers
  - a single object with 3 fields: lower bound, upper bound, step value

```scala

/// range
// models a range of values
// ^ to and until are operations on Int
val poop: Range = 1 to 4 // 1,2,3,4
val poop: Range = 1 until 4 // 1,2,3
val poop: Range 1 to 4 by 2 // 1, 3
4.to(1).by(-1)

// api
range
  .start // the starting value
  .end // the last value
  .step // the step (by) value
```

###### Vector: indexed sequence

- read/write perf: reasonably fast read and update characteristics relative to other sequences
  - provides fast random access ()
  - evenly balanced tree: in order to change any element, you have to change all parent elements in the tree

```scala
val poop = Vector(1,2,3)

// api: same as list except it doesnt use ::
// ^ see List for general api methods
val poop2 = 0 +: poop // Vector(0,1,2,3)
val poop3 = poop2 :+ 4 // Vector(0,1,2,3,4)



```

## flow control

### if

```scala
//////////////////////////////////
/// if statements
// evaluate to a value, i.e. always return a value
// all conditions must be an expression of type Boolean, else type mismatch error
//////////////////////////////////

// conditional expressions
val poop = if predicate then "do this" else "do that"

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

- a general pattern for accessing data encapsulating in an entity
  - works like a switch but for entity decomposition
  - doesnt work for pattern matching on regular class constructors (but does on case class constructors)
- pattern matching constructs are expressions that return values
  - are often used as a the body of a method
- in general, the pattern for deconstructing via pattern matching looks similar to the code for constructing the object
- you have to cover ALL the cases or add a a default branch
  - else compiler throws warning at compile time, and error at runtime if any of the uncovered cases are used
- very useful with sealed traits and concrete classes
  - to aggregate logic across the concrete classes
  - and extract data from them at the same time

```scala
/// general form
// you match an expression poop to signature, and are able to return some value
// ^ signature: constructures, variables, wildcard pattern _, constants, type tests
// ^ then you can pull out the arguments it was constructed with
def mySwitch[T](poop: T) = poop match
  case Type(A) => A
  case poop: String => "poop was a string"
  case poop: Number => "poop was a number"
  case class(arg1, arg2) => (arg1, arg2)
  case MatchThisSignature => DeconstructAndReturnTheseArgumentSOrAnyArbitraryLogic
  _ => "matches everything else"

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
// p :: ps: head element is of type P and tail element is of type ps
// ^ this is the general form youll use on lists
listOfContacts match
  case contact :: tail => println(contact.name) // list whose head is a contact, and tail is anything
  case first :: second :: Nil => printl("list with 2 els")
  case Nil => println("list is empty")
  case List() => println("list is empty")
  List(x :: tail) => println("a list containg a list, whose head is X and tail is tail")
  case _ => println("a list with any amount of els")

List(1, 2, 3) match
  x :: y :: _ => x + y // 3

// match a tuple
(1, "one") match
  case (num, str) => s"this matches and has values $num and $str"

// match on option
def matchOnOption(poop: Option[String]): Boolean = poop match
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

// provide def that pattern matches a traits subclasses
// ^ now toString is available on all subtypes of Poop
trait Poop:
  override def toString: String = this match
    case DidPoop(n) => s"i pooped $n"
    case WillPoop(x, y) => s"will poop at $x or $y"
```

### loops

#### recursion

- recursion: each time the runtime evaluates a loop iteration, it pushes its paramter to the call stack
  - call stack: a section of memory with a fixed size
  - if there are too many iterations, you get a runtime error stackoverflow (i think)
  - it is possible NOT to use the call stack space by putting the recursive call in tail position
  - tail position: a recursive call is in tail position if it is the result of the recursive method,
    - i.e. if a fn calls itself as its last action, the fns stack frame can be reused

```scala
import scala.annotation.tailrec

// in tail position, recursion expression only contains value expression (i.e. a-1)
def poop(a) =
  if a < 0 then a else poop(a - 1)
// not in tail positoin, the recursive expression contains a definition invocatoin
def poop(a) =
  // both of these are issues due to the order of evaluation of fns
  // poop(a) is evaluated first, THEN the expression
  if a < 0 then a else poop(a) - 1 // the minus -1 is the problem
  if a < 0 then a else -1 + poop(a) // the -1 + ... is the problem

// throw an error if this recursive fn is NOT in tail-position
// always do this
@tailrec
def somePoop(...) = ???
```

#### for expressions

- aka for comprehensions
- generally easier to understand syntax, can use whenever you need to process/decompose/query (e.g. map, flatmap, filter) a dataset, e.g. a collection/database
  - can be used with ANY datatype containing a map, flatMap and withFilter definition
- guard statements: any control statements that shortcircuits cmds within the body for that specific iteration

```scala
// general form
// s: sequence of generators and filters
// e: an expression whos value is returned by an iteration
// generator: of the form p <- e
// ^ p is a pattern
// ^ e is an expression whose value is a collection
// filter: of the form if F
// ^ F is a boolean expressions
for s <- ofThis yield e
// left hand side is a type pattern
// will filter ofThis to elements of type SomeType(s) and give you s
for SomeType(s) <- ofThis yield e
for s <- ofThis if s > 0 yield e
// same as the above,
// always use withFilter > filter as it doesnt produce intermediate entities
for (y <- ofThis.withFilter(z => z > 0)) yield println(y)

// identifer <- pronounced 'taken from'
val squared = for x <- values yield x * x
// with filtering
val squared = for x <- values if x > 0 yield x * x
// with multiple generators
val poop = for
  (person, email) <- people.zip(peopleEmails)
if email.nonEmpty
yield (person, email)

// create a list of 20 things
var list: List[Int] = for
  i <-  1 to 20
yield i

// example 3
// this isnt right, it doesnt pair contacts with corresponding phonenumbers
// instead it says for every contact, pair it with every phonenumer
// ^ see the zip example above for the correct logical syntax
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

// super short syntax
for i <- 0 until 3 do println(i)

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
while condition do { /* body */ }

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

### Error Handling

- user facing errors: should give informative but not detailed (security risk) so they can fix bad input
- internal facing errors: give detailed information (e.g. via logs) that relates to the source code to aid with debugging
- error handling scenarios:
  - exceptions: can be thrown to (unless caught) interrupt program execution
    - any definition can throw any exception type without having to delcare it in its signature (like in java)
    - scalas default exception handler stops the program after printing the stack trace to stderr
    - Fatal errors: types of Throwables you should never try to catch
    - Nonfatal Errors: types of throwables you could catch
  - validations: validate entities that could possibly be/have invalid members
    - invalid entities could potentially be aggregated and reported
    - but generally shouldnt never stop program execution or throw exceptions
- Exceptions:
  - dont show up in the types of fns that throw them; i.e. a fns type annotation cannot include the type of exceptions it throws
  - dont work in parallel computations, e.g. communicate an exception from one thread to another

```scala
// class hierarchy
// java.lang.Throwable > {java.lang.Exception, java.lang.Error}
// ^ you can inherit from either Exception or Error
// Error: exceptions thrown by the JVM
// ^ Error > OutOfMemoryError, StackoverflowError
// Exception: for programs and library failures
// ^ Exception > IOException, ArithmeticException, ...
// ^ values of Exception can be thrown


/// Exceptions
// RuntimeException
// ArithmeticException
// NoSuchElementException: trying to access an element in a col that doesnt exist
// IndexOutOfBoundsException: trying to access an index of a col that doesnt exist
// MatchError: thrown if no pattern matches an expression in a match statement
// IllegalArgumentException
// IllegalOperationException // cant perform operation on an entity
// throw an exception
throw Exc
throw new Exc("poop")
throw Error("poop")
throw RuntimeException("pooped on myself")

class MyException(msg: String) extends extends Exception(msg)
throw MyException("pooped")
```

#### try catch

- exceptions & try blocks will stop execution flow as soon as an error is thrown
  - see `# Either` for an alternative
- flatMap & Map vs recover & recoverWith
  - flatMap & Map immediately return their failures
  - recover & recoverWith enable you to return arbitrary successes in the event of failures

```scala
// try catch
// similar to pattern matching, you have to specify catch blocks for each error type
def poop(): Unit =
  try
    thisBuggyMethod()
  catch
    case blah: RuntimeException =>
      System.err.println(s"pooped myself: $blah")
      println("stopping program:")
    case blah: ArithmeticException =>
      System.err.println(s"pooped myself again: $blah")
      println("stopping program:")
    // catch all other exceptions via the superclass & rethrow it after logging
    case blah: Exception => println(s"$blah was thrown but not handled"); throw blah

// try catch all non fatail errors
import scala.util.control.NonFatail
def poop() =
  try
    ???
  catch
    case NonFatal(throwable) => ???

// try catch blocks are expressins, thus they return a value
val poop: Boolean =
  try
    isThereToiletPaper()
  catch
    case NonFatal(mustntBeAny) =>
      println(mustnBeAny)
      false
  finally
    yolo()

```

#### Try

- overcomes the limitation of simple Throw mechanisms
  - primary use as a means to:
    - result type annotation signalling the potential throw of an exception
    - passing between threads and processing results of computations that could fail with an exception

```scala
// try class hierarhcy
// scala.util.try
// is either a Success[T], or a Failure[Exception]

import scala.util.Try // Try[A] = Success[A] || Failure
// this forces consumers to deal with the failure branch
def poop(): Try[Int] =
  // wrap the entire implementation in the Try constructor
  Try {
    ???
  }
// consumers can recover in the event of Failure
val didPoop = poop()
  .recover { // return a sync result on failure
    case blah: RuntimeException => ???
  }
  .recoverWith { // return an async result on failure, see `# Future`
    ???
  }

// alternatively you can pattern match
// ^ this forces consumers to deal with the failure branch
import scala.util.{Try, Success, Failure}
def poop(): Try[Boolean] = ???
val didPoop = poop() match
  case Success(bool) => bool
  case Failure(throwable) => println(s"stopped up with exception $throwable ")

// delaying catch via flatMap and map
import java.time.{LocalDate, Period}
import scala.util.Try
// both flatMap and map wont invoke the supplied partialFn arguments if someTryParse fails
def tryPeriod(a: String, b: String): Try[Period] =
  someTryParse(a).flatMap { (aSuccess: LocalDate) =>
    someTryParse(b).map { (bSuccess: LocalDate) =>
      Period.between(aSuccess, bSuccess)
    }
  }

// delaying catch via for expressions
// fkn way cleaner than the the flatMap and map
// the for expression either returns Success(whatevers yielded) or Failure(Exception)
def tryPeriod (a: String, b: String): Try[Period] =
  for
    aSuccess <- someParser(a)
    bSuccess <- someParser(b)
  yield
    Period.between(aSuccess, bSuccess)

```

#### Either

- enable capturing errors without stopping execution flow
  - use case is to manage data validation and capturing of errors,
- may want to use a third party library than rolling your own like in the examples below
- general operations
  - transform valid values with map: success should be on the right
  - chain validation rules with flatMap + partialFn then map
    - didnt include this in the example, but flatMap + partialFn then map pattern is elseware in this file
  - aggregate validValues with validateBoth
    - didnt include this in the example, but its a `zip` or `product` fn
  - validate a list of things via validateEach
    - didnt include this int he example, but its a `traverse` or `foreach` fn

```scala
// Define a type for aggregating error msgs
type Errors = Seq[String]
// define a type for something being a success // error
// left & right can be arbitrary things, doesnt have to be used with Errors
// but generally always put the success type on right (because map only transforms the right side)
type Validated[A] = Either[Errors, A] // Left type and Right type
// use the validation model
val poop: Validated[Boolean] = Right(true)
val cantPoop: Validated[Boolean] = Left(Seq("no toilet paper"))
// or with pttern matching
// can also be used, with .map and .flatMap like all the other dualistic types
val didPoop = poop match
  case Right(str) => "successfully pooped"
  case Left(errs) => s"couldnt poop: $errs"

// example parse date fn using Either
// notice we invoke Try as a fn then call .toEither on the result
def parseDate(str: String): Validated[LocalDate] =
  Try(localDate.parse(Str)).toEither
    .left.map(err => Seq(Error.getMessage))
```

### Concurrency

- distributed computations: expressions evaluated across dsitributioned systems, i.e. more than one physical machines (nodes) or a single node but across cpus/processes/threads
  - scenario 1: multiple clients writing/reading to the same machine
  - scenario 2: a program spread across multiple machines (nodes), each handling a specific use case but reading/writing to the same datalayer & intercommunicating with each other
  - scenario 3: a single node whose program is spread across CPUs/threads/processes, each interacting with and sharing the same memory
  - scenario 4: etc etc etc
- multi-threading: when leveraging multiple CPUs in a single program, ...
- thread-safe data structures: when sharing data between several threads of execution, executing computations across threads requires Futures
- transactions: sharing data between nodes in a database, ...
  - see ACID elsewhere in this repo

#### Future

- controls when (and how, parallel/sequential)async computations are executed
- represents a value that may not be available yet, but might be in the future, once an asynchronous computation has completed
  - i.e. async values
- future values are generally results of computations that occur across parallel and sequential branches
  - the execution flow is similar to a directed graph

```scala

// both provide thread-safe data structures
import java.util.current.atomic // TODO
import scala.concurrent.Future

// immediately failed future
val failed = Future.failed(Exception("fail fast"))
// immediately successful future
val success = Future.successful(true)

// will eventually return User, but lacks resiliency
def insertUser(...): Future[User] = ???
// even more realistic is modeling future user with Try and Option
// ^ None: future is not yet settled
// ^ Some(Success(User)): future succeeded
// ^ Some(Failure(e)): future failed due to exception thrown
def insertUser(...): Future[Option[Try[User]]]
// doesnt return anything, but consumers can still use poop.onComplete
def asyncPoop(): Future[Unit]
asyncPoop().onComplete( runThisWhenDone )

// chain two asynchronous computations that need to happen sequentlly via flatmap / map
def poop(): Future[Boolean] =
  asyncPoop.flatMap(pooped => someAsyncFn(pooped))
// chain an arbitrary amount of async computations that need to happen sequentially via foldLeft
def poop(): Future[Seq[Boolean]] =
  val thisManyPoops = 1 to theseMany
  thisManyPoops.foldLeft[Future[Seq[Boolean]]](Future.successful(Vector.empty)) {
    (accum, thisPoop) =>
      accum.flatMap { prevPoops =>
        asyncPoop(thisPoop)
          .map(pooped => prevPops :+ pooped)
      }
  }

// execute two asynchronous computations that need/could/might occur in parallel via zip / traverse (see below)
val pooped: Future[Boolean] = asyncPoop()
val farted: Future[Boolean] = asyncFart()
def sharted: Future[(pooped, farted)] = pooped.zip(farted) { (didPoop, didFart) =>
  (didPoop, didFart)
}

// execute an arbitrary amount of async computations and get a final result containing all completed values
// someAsyncFn is executed independently and in no particular order on each item in seqOfElements
val wholeBunchOfStuff: Future[Seq[stuff]] = Future.traverse(seqOfElements)(someAsyncFn)

// recover from a failure on a future and return a sync result
val poop: Future[Boolean] =
  someAsyncPoop()
    .map(_ => true) // successful poop
    .recover { case NonFatal(ouch) => false } // sync result
    .recoverWith { ... } // async result

// running futures sequentially
def somEDef(): Future[T] =
  for {
    val1 <- someFuture()
    val2 <- anotherFuture()
  } yield (val1, val2)

// future API: result type of a Future operation is always Future[???]
myFuture
  .flatMap(lambda)
  .map(lambda)
  .onComplete { partial }
  .recover { partial } // returns value|failure
  .recoverWith { partial } // returns Future[value]|failure
  .traverse(someSeq)(someAsyncFn)
  .zip(otherFuture): // Future[(A, B)] : failure if any fail, both are resolved concurrently (not one after the other)
```

#### ExecutionContext

- the idea that some piece of information needs to be propagated widely to many places (call sites) in a program
  - uses cases for propagating/passing execution context: implicitly providing a value e.g.
    - the current configuration
    - available set of capabilities
    - security level in effect
    - layout scheme to render some data
    - the entities that have access to some data
- controls where (which thread, CPU) async computations are executed
  - i.e. you can specify to execute on a single-thread, or a fixed-size thread pool
- in the JVM, the main abstraction is threads
- thread-pool: context for execution async computations
  - by default it contains one thread per CPU on the device
    - its optimized for non-blocking code, so wrap it concurrent.blocking for blocking calls
  - i.e. ^ operations that combine future values in parallel (zip, traverse) have a parallelism level equal to the number of CPUs on the device
- thread schedulers: required to execute computations in parallel
  - thread schedulers are propagated in values of types ExecutionContext

```scala
// the default executioncontext
given global: ExecutionContext = ForkJoinContext()
// or anonymously: without a name
given ExecutionContext = ForkJoinContext()
// define a fn that executes in parallel
def someFn(...)(using ExecutionContext) = ???


// by importing this at the callsite/begining of a file that contains an async operation
// the default execution context, no need to import it
// use as many threads as available CPUs
import scala.concurrent.ExecutionContext.Implicits.global
// TODO
import scala.concurrent.ExecutionContext.Implicits.given

import scala.concurrent

// schedule a computation of some future expression in the available ExecutionContext
Future {
  someAsyncFn()
}
// example of a blocking thread
// ^ it occupies a thread but does nothing useful
Future {
  Thread.sleep(10_000) // be a bum for 10 seconds
}
// create a virtual thread for a blocking expression
// ^ generally interacting with storage, waiting for a response from a remote call, etc.
// ^ generally never use a blocking expression
Future {
  concurrent.blocking {
    Thread.sleep(10_000)
  }
}

// all of these operations take an implicit paramter list of type ExecutionContext
// see `# Future` for more ADTs
trait Future[A]:
  def map[B](f: A => B)(using ExecutionContet): Future[B]
  def zip[B](that: Future[B])(using ExecutionContet): Future[(A, B)]
```

#### Promise

- TODO

```scala
// TODO
def futureWrapper(blah): Future[Poop] =
  val p = Promise[Poop]()
  val someFuture = someTask()
  val someResult = if someFuture then p.success(someFuture) else p.failure("didnt work")
  p.future

```

#### Locks

- every object in scala has a lock accessed via `poop.synchronized`
  - fn modifying shared state needs to be synchronized
- dead-lock: when two threads execute at the same time, creating lock on the same piece of code causes neither thread to finish
- blocking synchronization: introduces dead-locks
  - bad for CPU utilization
  - synchronous communication couples sender and receiver

```scala

// forces all threads using this fn to synchronize their execution
// two threads cannot execute the same synchronized block at the same time

def poop(terds: Int): String = this.synchronized {
  if (terds < 1) then "finished pooping" else poop(terds - 1)
}
poop(20)

// Blocking synchronization: dont do this
// ensures no one uses more toilet paper than exists on a roll
// stall requires a synchronized msg wipe that reduces the amount of toilet paper left
def passMeTheToiletPaper(from: Stall, to: Stall, ToiletPaper: Int): Unit = {
  from.synchronized {
    to.synchronized {
      from.wipe(roll)
      to.wipe(roll)
    }
  }
}
```

### Event Handling

#### Observer Pattern

- widely used when views need to react to changes ina model
- variants:
  - publish/subscrib
  - model/view/controller
    - model: the publisher
    - views: subscribers
- the good
  - decouples views from state
  - allows to have a varying number of views of a given state
  - simple to implement
- the bad
  - forces imperative style, since handlers are Unit typed
  - many moving parts that need coordination
  - concurrency makes things more complicated
  - Views are still tightly bound to one state; view update happens immediately

```scala
// base pub sub model
// ^ e.g. a BankAcount would extend Publisher, and Accounts would extend Subscriber
// ^ logical Bankacount behavior would publish account changes
// ^^ e.g. a deposit, withdrawal, etc
trait Subscriber:
  def handler(pub: PUblisher): Unit
trait Publisher:
  private var subscribers: Set[Subscriber] = Set()
  def subscribe(subscriber: Subscriber): Unit =
    subscribers += subscriber
  def unsubscriber(subscriber: Subscriber): Unit =
    subscribers -= Subscriber
  def publish(): Unit =
    subscribers.foreach(_.handler(this))

```

#### Functional Reactive Programming: FRP

- [see scala.rx instead](https://github.com/lihaoyi/scala.rx)

```scala
// base model of Signal and Vars
// Sinals are covariant, vars are not
// ^ the full example was too complex for the purpose of this document
// ^^ google it/use a library for implemnetation details
trait Signal[+T]:
  def apply(): T = ??? // get the value of signal at the current point in time
object Signal
  def apply[T](expr: => T) = ??? // creates a new signal at some point in time
  class Var[T](expr: => T) extends Signal[T]
    def update(expr: => T): Unit = ??? // change the value at future points of time

```

## definitions

- invoke fns like `someFn` no `()` unless args are expected
- all parameters in method signatures require type annotations
- block: all statements with the same level of indentation form a block
  - a block always ends with the resulting final expression
  - names are block scoped, thus variable declarations are not visible outside their containing block
- function literal: a lambda, an expression that evaluates to a fn
- def vs function literals: because scala supports both OOP and FP
  - functions are first-class values: i.e. can be passed as a patameter and returned as a result
    - function literals define a value that can be passed as a parameter/returned as a result
      - this cannot be done with definitions
        - however the compiler will most likely auto convert the definition into a fn literal and not throw an error
  - the runtime creates an object for functions in memory, and thus fns are objects that can have members
- definition evaluation when invoked: i.e. the process by which evaluation reduces a definition expression to a value (as long as there are no side effects)
  - evaluate arguments: left to right
  - replace the fn name with the fn body
  - replace the formal params by the actual arguments
- evaluation strategies: both are identical (reduce to the same final value) as long as both are pure fns, and both evaluations terminate (e.g. no loops)
  - call by name: by name evaluation: only evaluates fn arguments that are actually used in the fn body, but the values are recomputed everytime
  - call by value: strict evaluation; (the default) evaluates every fn argument only once
  - lazy evaluation: evaluation occurs 0 or 1 times, the first (and only) time is when the value is initially accessed, else is never evaluated
- recursive definitions require a return type
  - non-recursive definitions dont
- dont forget about the special `apply` `unapply` and `toString` definition
  - any entity with an `apply` definition can be invoked like a `fn()`
  - any entity with an `unapply` definition can be destructured
  - any entity with an `toString` definition can be printed

```scala
// call by name: evaluates flush only if accessed within the fn
def poop(flush: => Boolean): Boolean = ???
// call by value: eveluates flush before stepping into the fn body
def poop(flush: Boolean): Boolean = ???
// varag params: variable length bindings, aka javascript rest params, must be the last/only param in the parameter list
def poop(totalWipes: Int*): Seq[Int] = ???

// return type Int
// sum(5, 5)
def sum(num1: Int, num2: Int): Int = num1 + num2


// return type String
def isTruthy(a: Matchable) = a match
  case 0 | "" => false
  case _ => true

// def with no params
def poop: Boolean = true

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

### partial function

- lambdas that may not be defined on all their domain type
  - e.g. `PartialFunction[Int, String]` may not be defined for some Int values
  - definition can be verified via `if PartialFn.isDefinedAt(poop) then partFn(poop)`

```scala

// basically any fn that takes a fn can receive a partial fn
// e.g. on map
someList.map {
  (x, y) => doThisStuff(x,y)
}

// any lambda can be called as a partial fn
// ^ but will NOT Have the API unless defined as PartialFunct[Int, Out]
val f: String => String = {
  case "pong" => "ping"
  case _ => "nope" // required or you get a MatchError
}
f("poop") // nope

// Type PartialFunction enables you to not catch every case
// ^ can also use isDefinedAt to check if the partial is defined for a value
val x: PartialFunction[String, String] = {
  case "pong" => "ping"
}

// applyOrElse example
val times2: PartialFunction[Int, Int] = {
  case x if x < 3 => val y = x * 2; println(y); y
}
val times3: PartialFunction[Int, Int] = {
  case x if x > 3 => val y = x * 20; println(y); y
}
var blah = times2.applyOrElse(10, times3) // applies it to a specific value

// orElse example
val times2: PartialFunction[Int, Int] = {
  case x if x < 3 => val y = x * 2; println(y); y
}
val times3: PartialFunction[Int, Int] = {
  case x if x >= 3 => val y = x * 20; println(y); y
}

val poop = Array(1,2,3).map(times2 orElse times3) // provide a fallback partial

thisPartial
  .andThen(otherParital(poop)) // i.e. thisFn(otherFn(poop))
  .applyOrElse(poop, elseUseThisFn) // i.e. thisPartial.isDefineDAt(poop) && thisPartial(poop) || defaultFn(poop)
  .compose(thisFn) //  i.e. thisPartial(thisFn(poop))
  .elementWise // TODO: create an example of this
  .isDefinedAt(value) // Boolean: if value exists with fns domain
  .lift // returns thisFn converted to a plan fn with a return type of Option
  .compose(otherPartial) // thisFn(otherFn(poop))
  .orElse(runThis) // thisPartial(poop) || otherPartial(poop)
  .runWith(lambda)  // lambda(thisPartial(poop))
```

### composition

- [Function object](https://dotty.epfl.ch/api/scala/Function$.html)
- higher order fns: fns that take other fns as parameters or that return fns as results

```scala
//////////////////////////////////
/// higher order definitions
//////////////////////////////////
// sum takes a lambda: Int, then returns a fn:(Int, Int): Int back to the consumer
def sum(f: Int => Int): (Int, Int) => Int =
  def sumf(a: Int, b: Int): Int = f(a) + f(b)
  sumf
// same as above
def sum(f: Int => Int)(a: Int, b: Int): Int = a + b
// ^ both can be invoked the same way
// ^ def add = sum(x => x), add(1, 2)
// ^ or chained: val poop = sum(x => x)(1, 1)

//////////////////////////////////
/// currying
//////////////////////////////////
def f2(x: Int, y: Int): Int = x + y
f2(1, 1) // == 2def f2(x: Int, y: Int): Int = x + y

f2(1, 1)

val f3 = f2.curried
f3(1)(2)

val f4 = Function.uncurried(f3)
f4(1, 3)
f3(1)(2) // = 3
val f4 = Function.uncurried(f3)
f4(1, 3) // = 4


def times2 (x: Int) : Int = x * 2
def plus2 (x: Int) : Int = x + 2
def runem = Function.chain(Seq(times2, plus2)) // 6

runem(3)
// standard library
someDef
  .apply(someArg) // runs someDef on someArg, i.e. someDef(someArg)
  .andThen(thisFn) // runs somDef, then thisFn, i.e. thisFn(someDef(poop))
  .compose(thisFn) // runs thisFn, then someDef, i.e. someDef(thisFn(poop))
  .unlift // todo
```

### function literals & ADTs

- function literals: anonymous definitions

```scala

// type of a fn that takes an argument of type A and returns a result of type B
// type A => B: a fn that maps a parameter of type A to a result of type B
val: Int => Int = ??? // maps integers to integers

// curried fn: consecutive stepwise applications: i.e. a series of fn invocations that eventually return a result
// ^ defined in scala as a definition with multiple parameter lists
// type A => B => C
// e.g. poop(a)(b)
// ^ or accessing a multi dimensional array, someArr(0)(1)
// sum(x => x + x)(1, 2)
def sum(f: Int => Int)(a: Int, b: Int): Int =
  if a > b then 0 else f(a) + sum(f)(a + 1, b)
// product(x => x * x)(2, 4)
def product(f: Int => Int)(a: Int, b: Int): Int =
  if a > b then 1 else f(a) * product(f)(a+1, b)
// factorial(5)
def factorial(n: Int) = product(x => x)(1, n)

// fixed point of fns
// number X is a fixed point of fn X if f(x) = x
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

### auto imported stuff

- [scala ref](https://dotty.epfl.ch/api/scala.html)
- Core Scala types. They are always available without an explicit import.

#### App

- [App Trait](https://dotty.epfl.ch/api/scala/App.html)
- The App trait can be used to quickly turn objects into executable programs.

```scala
// No explicit main method is needed. Instead, the whole class body becomes the “main method”.
// args returns the current command line arguments as an array.
object Main extends App {
  Console.println("Hello World: " + (args mkString ", "))
}
```

#### Console

- Implements functionality for printing Scala values on the terminal. For reading values use StdIn. Also defines constants for marking up text on ANSI terminals.

```scala

// Today the outside temperature is a balmy -137.0°C. -137.0°C beats the previous record of -135.1°C.
Console.printf(
  "Today the outside temperature is a balmy %.1f°C. %<.1f°C beats the previous record of %.1f°C.\n",
  -137.0,
  -135.05)
```

#### System

```scala

System.err.println("log an err msg")
```

#### Using

- see `# Source`
- enables automatically (eventually) releasing of Source acquitions, even in the event of failure

#### Source

```scala

// def to read from a file
def readFile(fpath: String): Try[Seq[String]] = Try {
  val source = Source.fromFile("./some/path")
  // but what if error occurs here?
  val lines: Seq[String] = source.getLines.toSeq
  // make sure to close the handler
  // may not be called if error occurs above
  source.close()
  lines
}
// better definition to read from a file
def readFile(fpath: String): Try[Seq[String]] =
  // Using ensure that whatever resource is being used (in this case Source.fromFile)
  // will eventually be released automatically
  Using(Source.fromFile(fpath)) { source =>
    source.getLines.toSeq
  }

// example reading a file containing a date string on each line
def parseDates(fpath: String): Try[Seq[LocalDate]] =
  // remember flatMap can take a partialFn to pull the seq[string] out of the try
  readFile(fpath).flatMap{ (dateStrings: Seq[String]) =>
    // iterate over each line and accumulate the date strings into a collection of local dates
    // TODO: dunno why we specifically chose a vector
    dataStrings.foldLeft[Try[Seq[LocalDate]]](Success(Vector.empty)) {
      // this runs on each string in Seq[String] from readFile
      // ^ i.e. on each line of the file
      (tryDates, thisDateString) =>
        for
          dates <- tryDates
          date <- someParseDateFn(dateString)
        yield
          dates :+ date // push this line into the accumulation of dates
    }
  }
```

#### Predef

```scala
// Assertions: assume, require, ensuring
// ^ A set of assert functions are provided for use as a way to document and dynamically check invariants in code
// require and ensuring are intended for use as a means of design-by-contract style specification of pre- and post-conditions on functions,

// design by contract: bunch pre conditions
def poop(did: Boolean, wipe: Boolean, flush: Boolean): Boolean =
    require(did == true, "poop must be true")
    assume(wipe == true, "have to wipe after pooping")
    require(flush == true, "dont forget to flush")
    true
poop(true, true, false) // dont forget to flush

// design by contract: post condition require {} around body of fn
// verify a programs result has some expected property
def postCondition(throwIt: Boolean): String = {
    if throwIt == false then "wont throw" else ""
} ensuring (_.length != 0, "fails if ensuring returns false")
postCondition(true)
```

### java stuff

```scala
import java.util.current.atomic
import java.time.{localDate, Period}
import  scala.collection.JavaConverters._ // converts java collections to scala collections

/// LocalDate
LocalDate
  .now
  .parse(str)

/// java.util
val r = java.util.Random()
val randomInt = r.nextInt()
val randomBoolean = r.nextInt() > 0 // should result of a 50% distribution
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

// Ordering
import scala.math.Ordering // contains default sorting logic
  .Int // sorting integers
  .String // sorting strings
```

### scala.language

```scala
import scala.language.implicitConversions
```

### scala.util

```scala

import scala.util.Random
import scala.util.control.NonFatal // matches all exceptions that dont halt program execution
import scala.util.{Try, Failure, Success} // Try[A] = Success[A] || Failure

Random
  .nextDouble()
```

### scala.io

```scala

import scala.io.{Source}

```

### scala.concurrent

```scala
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits._
import scala.concurrent.duration._

// modefling common Future operations
// all of these operations take an implicit paramter list of type ExecutionContext
// ^ i.e. append (using ExecutionContext) as the last parameter list
trait Future[A]:
  def map[B](f: A => B): Future[B]
  def zip[B](that: Future[B]): Future[(A, B)]
  def flatMap[B](f: A => Future[B]): Future[B]
  def recover(f: Throwable => A): Future[A]
  def recoverWith(f: Throwable => Future[A]): Future[A]
object Future:
  def traverse[A, B](as: Seq[A])(f: A => Future[B]): Future[Seq[B]]

```

### scala.annotation

```scala
import scala.annotation.tailrec // @tailrec throws error if a definition is not in tail-position

```

### Deprecations (in scala 3)

- see the scala 3 migration guide link

#### Symbol (DEPRECATED)

- Although the Symbol class is useful during the transition
  - beware that it is deprecated and will be removed from the scala-library in a future version.
  - You are recommended, as a second step, to replace every use of Symbol with a plain string literals "abc" or a custom dedicated class.
- simple way to get unique objects for equal strings
- can be compared using reference equality
- used to establish bindings between a name and the entity it refers to, such as a class or a method.
- Anything you define and can give a name to in Scala has an associated symbol.

```scala
val p: Symbol = Symbol("string")
```
