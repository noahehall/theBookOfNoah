# scala

- all about the syntax

## links

- [intellij toolbox, fkn use it](https://www.jetbrains.com/toolbox-app/)
- [scala & intellij: getting started](https://docs.scala-lang.org/getting-started/intellij-track/getting-started-with-scala-in-intellij.html)
- [example gitignore for scala](https://alvinalexander.com/source-code/scala/sample-gitignore-file-scala-sbt-intellij-eclipse/)

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

```java
  println("console log")
```

## operators

```scala
  thiz == that
  thiz != that
  thiz > that
  // etc

```

## types

```scala
//////////////////////////////////
// native types
//////////////////////////////////

// vals are immutable
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


// import SomeObj.*
// ^ at top of file so you can use prop instead of SomeObj.prop
object SomeObj {
  val prop: Boolean = true
}

// handle the absense of data in an elegant way
// can either be a Some or a None
val poops: Option[String] = None // no data
val poops: Option[string] = Some("times") // has data



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
```

#### options

```scala
val poop: Option[String] = Some("flush")

poop
  .getOrElse("use this if poop is a None option").length // 5 because poop is a Some so it returns flush

```

## flow control

```scala
//////////////////////////////////
// if statements
//////////////////////////////////


if someVal then "do this" else "do that"
if someVal > 1 then "do this"
  else if someValue < 0 then "this do"
  else "do that"

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

```

## functions

```scala

//////////////////////////////////
// custom
//////////////////////////////////
def sum(num1: Int, num2: Int): Int = num1 + num2
// sum(5, 5)
// ^ without named parameters

def isTruthy(me: Boolean): String = if me then "you are truthy" else "you are falsy"
// isTruthy(me = false)
// ^ you can send in a named parameter for readability


//////////////////////////////////
// builtin
//////////////////////////////////

// map function exists on many types
val poop: Option[String] = Some("flush")
poop.map(word => word.toUpperCase) // FLUSH


// flatten/flatMap exists on all scala collections
case class Poop(totalPoops: Option[Int]) // im going to poop a total amount of times
case class Wipe(totalWipes: Option(Poop)) // im going to wipe depending on how many times i poop
val flush: Wipe(Some(Poop(5))) // flushing depends on pooping and wiping, you can see the nesting,
// how does it look with a regular map?
flush.totalWipes.map(totalWipes => totalWipes.totalPoops) // Option[Option[Int] : Some(Some(5)) ouch! we just wanted Some(5)
// how does it look with flatten?
flush.totalWipes.map(totalWipes => totalWipes.totalPoops).flatten // Option[Int] : Some(5)
// looks even more concise with flatMap
flush.totalWipes.flatMap(totalWipes => totalWipes.totalPoops) // Option[Int] : Some(5)
```
