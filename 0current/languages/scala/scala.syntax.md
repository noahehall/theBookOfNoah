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

// native types

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





// custom types

// case classes are immutable
case class MyType(name: String, age: Int)
// val poop: MyType = MyType("poop", 200)
// poop.name == "poop"
// s"poops age is ${poop.age}"
// val flush: MyType = poop.copy(name = "flush")
// ^ creates a new MyType based on poop overriding the provided props
```

## flow control

```scala

// if statements
if someVal then "do this" else "do that"
if someVal > 1 then "do this"
  else if someValue < 0 then "this do"
  else "do that"

// match statements
someVal match
  case "this thing" => "return this other thing"
  case "thing this" => "thing other this return"
  case "thing" | "this" => "one of"
  // can alternative use a varName instead of _ which will capture the value
  // ^ and make it available, e.g. case poop => s"the value was $poop"
  case _ => "default branch"

```

```scala

def sum(num1: Int, num2: Int): Int = num1 + num2
// sum(5, 5)
// ^ without named parameters

def isTruthy(me: Boolean): String = if me then "you are truthy" else "you are falsy"
// isTruthy(me = false)
// ^ you can send in a named parameter for readability
```
