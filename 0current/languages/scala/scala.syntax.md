# scala

- all about the syntax
- as usual, search for `// Something` or `# Something` to find what youre looking for
- until this line is removed, i wouldnt trust everything in this file across scala versions

## links

- [intellij toolbox, fkn use it](https://www.jetbrains.com/toolbox-app/)
- [scala & intellij: getting started](https://docs.scala-lang.org/getting-started/intellij-track/getting-started-with-scala-in-intellij.html)
- [example gitignore for scala](https://alvinalexander.com/source-code/scala/sample-gitignore-file-scala-sbt-intellij-eclipse/)
- refs
  - [List](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html)

## basics

### setup

- scala application structure
  - computer files
    - `root/project` sbt's internal files
    - `root/target` generated files
  - your files
    - `root/build.sbt` sbt's build definition file
    - `root/src/main/scala` where all the scala src files live
    - `root/src/main/scala/Main` the entry point to the application, must have a `Main` fn

```sh

# verify env
java --version # everything works on 17.0.3, everywhere else says to use v8, so dunno
sbt --version
scala --version

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

import scala.math.* // import all the math modules
```

## operators

```scala
// conditionals
// : == != > < <= =>
thiz == that
thiz != that
thiz > that

// logical
// && || !


// arithmetic
// the result will always have the type of its widest operand
// ^ 1 + 2.0 // Double
+ - / % *
someNum += 1
someNum -= 1 // *= /=


  // extracts/flatMaps an element out of a thing
  // ^i.e if that.thiz: Option[Int], then thiz: Int
  thiz <- that.thiz
  // prepend a value onto a collection
  addthisToTheBegging +: ofThisCollection
  // append a value onto a collection (not recommended as its innefficient)
  addThiStoTheEnd :+ ofThisCollection
  // concatenate two collections of the same type
  addThis ++ toThis
```

## keywords

```scala
  Nil
  to // e.g. 1 to 10
  until // e.g. 0 until poop.length
  ??? // placeholder for an expression/body of a def
    // def poop: String = ???
    // val blah: Int = ???
```

## names

- i.e. variables
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

```scala
//////////////////////////////////
// native types
//////////////////////////////////

// Byte -128 to 127
// Boolean true | false
// Char unsigned, 0 to 65535
// Short -32768 to 32767
// Int 32 bit signed -2147483648 to 2147483647
// BigInt wayyyy bigger than Int
// Long dude its a long number
// Float dude its a long decimal
// Double 64 bit floating point; a decimal longer than a Float, but only 15 digits of precision
// BigDecimal longer than a Double
// String text
// examples

val superLongNumber: BigInt = BigInt("insert really long number here")

val desc = "I am immutable, inferred type String"
val desc: String = "I am also a string"
val descLong = s"inject another string here: $desc"

val num: Int = 100

val bool: Boolean = false
val bool: Boolean =
  if 1 > 0 then true
  else if 0 > 1 then true
  else false

// import it so you dont have to do MyKnownValues.Poop
// somewhere in the file, import MyKnownValues.*
// if someVar == Poop ....
enum MyKnownValues:
  case Poop, Wipe, Flush

// enum with parameters, each item has a value
enum MyOtherValues(val total: Int):
  case Daily extends MyOtherValues(total = 24)
  case Weekly extends MyOtherValues(total = 7)

// how to use the enum with parameters
import MyOtherValues.*
def howLong(values: MyOtherValues): Int = values match
  case daily @ Daily => daily.total
  case weekly @ Weekly => weekly.total


// objects
// import SomeObj.*
// ^ at top of file so you can use prop instead of SomeObj.prop
object SomeObj {
  val prop: Boolean = true
}

// Options
// handle the absense of data in an elegant way
// can either be a Some or a None
val poops: Option[String] = None // no data
val poops: Option[string] = Some("times") // has data


// Lists (collection)
// sequential immutable linked-list
// each el has a pointer to the next el in the list
// head: the first el in the list
// tail: the ramining els
// nil: the last element, which will always be of type nil
val poop: List[Int] = List(1,2,3)
val emptyPoop: List[Int] = List()
val emptyPoop: List[Int] = Nil

// arrays
val poop: Array[String]


//////////////////////////////////
// custom types
//////////////////////////////////

// case classes are immutable
case class MyType(name: String, age: Int)
// val poop: MyType = MyType("poop", 200)
// poop.name == "poop"
// s"poops age is ${poop.age}"
// val flush: MyType = poop.copy(name = "flush")
// ^ creates a new MyType based on poop overriding the provided props
```

### types in depth

#### strings

```scala
val poop: String = "flush"
poop
  .length // 5
  .toUpperCase // FLUSH
```

#### options

```scala
val poop: Option[String] = Some("flush")

poop
  .getOrElse("use this if poop is a None option").length // 5 because poop is a Some so it returns flush

```

### lists

```scala
val list: List[Int] = List(1,2,3,3)

// interface
list
  .head // Int: 1
  .tail // List[Int]: List(2, 3, 3)
  .distinct // List[Int]: List(1,2,3)
  .take(2) // List[Int]: List(1,2)
  .length // 4

// fns on lists
list.map(n => n * n) // List(1, 4, 9, 9)
list.map(_ * 3) // List(3, 6, 9, 9)
list.flatMap(n => List(n, n)) // List(1, 1, 2, 2, 3, 3, 3, 3)

// working with lists
val poop: List[Int] = List(1,2,3)
// prepend a value onto poop
// can also use :+ operator
0 +: poop // List(0,1,2,3)
```

## flow control

```scala
//////////////////////////////////
// if statements
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

//////////////////////////////////
// match statements
//////////////////////////////////

someVal match
  case "this thing" => "return this other thing"
  case "thing this" => "thing other this return"
  case "thing" | "this" => "one of"
  // can alternative use a varName instead of _ which will capture the value
  // ^ and make it available, e.g. case poop => s"the value was $poop"
  case _ => "default branch"


//////////////////////////////////
// for comprehensions
//////////////////////////////////
// guard statements: any control statements that shortcircuits cmds within the body for that specific iteration
// ^ i.e. guards are a good way to filter things before they're yielded
// ^ e.g. like an if > continue statement in js

// example 1
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

//////////////////////////////////
// for loop
//////////////////////////////////
var i = 0
for (i <- 1 to 10)
  println(i)

var name = "poop"
for (i <- 0 until name.length)
  println(name(i))

var list = List(1,2,3)
for (i <- list)
  println(i)

// create a list of 20 things
var list: List[Int] = for
  i <-  1 to 20
yield i

// nested for loop
// prints i, then every j, 1, 678910
// increments i, then ever j, 2, 678910
// etc
for (i <- 1 to 5; j <- 6 to 10)
  println(i)
  println(j)
//////////////////////////////////
// while loop
//////////////////////////////////
object Poop {
  def main(args: Array[String]) {
    var i = 0
    while (i <= 10)
      println(i)
      i += 1
  }
}

//////////////////////////////////
// do while loop
//////////////////////////////////

var i = 0
do
  println(i)
  i += 1
while (i <= 10)


```

## definitions

- i.e. methods, or fns
- invoke fns like `someFn` no `()` unless args are expected
- all parameters in method signatures require type annotations
- block: all statements with the same level of indentation form a block
  - a block always ends with the resulting final expression
  - names are block scoped, thus variable declarations are not visible outside their containing block

```scala

// single line method
// return type Int
def sum(num1: Int, num2: Int): Int = num1 + num2
// sum(5, 5)
// ^ without named parameters

// return type String
def isTruthy(me: Boolean): String = if me then "you are truthy" else "you are falsy"
// isTruthy(me = false)
// ^ you can send in a named parameter for readability

// def with no params
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

//////////////////////////////////
// builtin
//////////////////////////////////

// map function exists on collection types
val poop: Option[String] = Some("flush")
poop.map(word => word.toUpperCase) // FLUSH
val poop: Option[Int] = Some(2)
poop.map(_ * 2) // 4

// flatMap exists on all scala collections
// flatten can be called on the result of a map
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

```

## native modules

### scala.math

- includes the math modules and other math related keywords
- doesnt include a bunch of stuff as im not the greatest mathematician

```scala
import scala.math.* // in the REPL you have to use import scala.math._

abs(-8) // Int: 8
cbrt(27) // Double: 3.0
ceil(5.45) // Double: 6.0
floor(5.99) // Double: 5
round(5.45) // Long: 5
exp(1) // Double 2.7 blah blah
pow(3, 2) // Double 9.0
sqrt(4) // Double 2.0
log10(1000) // Double 3.0
min(5, 10) // Int 5
max(5, 10) // Int 10

// random
// ^ returns a double between 0 and almost 1
(random * 10 + 1) // random Double between 1 and 10
(random * 10 + 1).toInt // random integer between 1 and 10

```
