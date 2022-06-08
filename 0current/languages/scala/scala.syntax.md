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

## types

```scala

// native types

// vals are immutable
val desc = "I am immutable, inferred type String"
val desc: String = "I am also a string"
val descLong = s"inject another string here: $desc"

val bool: Boolean = false
val bool: Boolean =
  if 1 > 0 then true
  else false

// import SomeObj.*
// ^ at top of file so you can use prop instead of SomeObj.prop
object SomeObj {
  val prop: Boolean = true
}
```

## flow control

````scala

if someVal then "do this" else "do that"
if someVal > 1 then "do this" else "do that"

```scala

def sum(num1: Int, num2: Int): Int = num1 + num2
// sum(5, 5)
// ^ without named parameters

def isTruthy(me: Boolean): String = if me then "you are truthy" else "you are falsy"
// isTruthy(me = false)
// ^ you can send in a named parameter for readability
````
