# zio v1 syntax

- wouldnt trust anything in this file until this line is removed
- bookmark
  - page 27 at the line `final class ZIO` explaining foldM
- taken from
  - zionomicon
    - john de goes and adam fraser
- john de goes: creator of zio
  - previously created Aff for purescript and impressively a bunch of other stuff for other things

## links

- [handling errors[(https://zio.dev/version-1.x/overview/overview_handling_errors/)

## basics

- zio: the Z for scalaz and IO from io nomad (precursor to zio)
- a modern Effect data type for:
  - asynchronous programming
  - dealing with concurrency and the problems therein
    - spawning new independent thrad of computation
    - asynchronously waiting for a thread to finish
    - automatically canceling a running thread (when its return is no longer needed)
    - ensuring canceling doesnt leak resources
    - statically typed effect: leans on the compiler to reduce the burden on the developer
      - thats what statically typed `things` are all about anyway
- use cases
  - build concurrent/asynchronous applications
    - never blocks threads or deadlocks
    - can run a lot of virtual threads concurrently
    - concurrent streams with any ([un]structured) data source
    - never leaks resources
  - global application efficiency
    - automatically cancels running compuitations when the result is no longer necessary
  - static error handling
    - the compiler can tell you which code has handled its errors, which (and how) code can fail
    - captures all errors, including parallel & finalization errs + stack tracks
  - automatically manages the lifetime of resource
    - safely acquires & releases even in the presence of concurrency & errors
  - compositional scheduling: retry/repeat effects according to arbitrary schedules
  - asynchronous queues
  - encapsulating resources via Managed: provides compositional resource safety supporting parallelism and safe interruption
  - limited compatibility with Cats (even tho its a competitor)
    - thus you can use it with Doobie, http4s and FS2
  - dependency inference enables testing interfaces
    - ships with testable clocks, console & other modules
- alternatives
  - akka
  - monix
  - cats effect
- relies heavily on scalas variance annotations to improve type inference

## terms

- a functional effect: blueprint for concurrent workflows; describes what to do, but not its execution
- direct execution: in procedural programming, when a line of code is constructed to a value it must directly interact with its lexical context
- reactive programming: patterns for designing applications that are responsive, resilient, elastic and event-driven
- fiber: cooperatively-yielding virtual thread
- fork: create a new thread
- join: consume a fork
- structured concurrency: a paradigm that provides strong guarantees around the lifespans of operations performed concurrently

## API

### Zio[-R, +E, +A]

- any entity with type `Zio[-R, +E, +A]` is a functional effect (see zio.effect elseware)
  - the input R is contravariant
  - the outputs are covariant
- R: the input environment effect; the context in which this effect executes; think scala givens/implicits
  - the environment required for the effect to be executed; think dependency injection
  - set to `Any` if no dependencies are required
- E: the (output) type of error(s) that can occur during execution of the effect
  - e.g. `Throwable` or `Exception
  - set to `Nothing` if no failures will occur (e.g. if errors are expected to be handled elseware)
- A: the (output) success return type; i.e. the return type
  - set to `Unit` if it returns void?
- FYI
  - the zipLeft|Right operators are useful when the results of intermediate effects arent needed
    - but you just need to run the effects sequentially

```scala
// run two effects sequentially discarding their returns
val poop = ZIO.effect(println("hello")) *> ZIO.effect(println("world"))

someEffect // i.e. Zio[R,E,A]
  .flatMap[B](result => otherEffect(result)): ZIO[R,E,B] = ??? // sequently run effects
  .zip // sequentially... returns a tuple
  .zipLeft // i.e. <* sequentlly... returns the result of the first
  .zipRight // i.e. *> sequentially... returns the result of the second
  .zipWith(otherEffect)(lambda(a, b)) // sequentially combine effects

```

#### E: Error Type

- the potential ways an effect can fail
- its sole purpose is to:
  - defer errors to higher level (effects)
    - the caller of the effect is required to deal with the error,
    - no error handling logic is required within the effect implementation
  - explicitly state at each level (specific effect) how it can fail
  - enables focusing on the happy (success) path since erorrs short circuit the effect stack execution

#### A: Success Type

#### R: Environemnt Type

### zio.effect

- wraps a block of code in a functional effect returning `ZIO[Any, Throwable, A]`
  - converts exceptions into Es
  - converts successes into As

```scala
// quickies
val whatev = ZIO.effect(anyAsyncFn)

// somewhere define what your workflow does
import zio._
val goPoop = ZIO.effect(println("wheres the tp"))

// elseware define when your workflow does it
import zio.clock._
import zio.duration._
val goPoopLater = goPoop.delay(1.hour)

// finally execute your effects
import zio._
object Bathroom extends App {
  def run(args: List[String]): =
    // exitCode required by App trait
    // ^ converts all failures to exitCode(1)
    // ^ and successes to exitCode(0)
    goPoop.exitCode
}

// notice the input param is passed by name =>
zio.effect[A](a: => A): ZIO[Any, Throwable, A]
  .todo
```

### core API

- i.e. `import zio.\_
- not quite sure...

#### ZIO

- shiz available on `ZIO.`

```scala
// e.g.
val printNums = ZIO.foreach(1 to 100) { n => println(n.toString) }
// API
ZIO
  .foreach(Seq) { partialFn } // returns a single effect that executes on each el of a Seq
  .collectAll(Seq[effects]) // collects the results of a sequence of effects
```

#### clock

```scala

// live in
import zio.clock._

someEffect
  .delay(???) // transform one effect into another whose execution is delayed in the future
```

#### duration

### zio + natie scala

#### for comprehensions

- prefer for comprehensions over nested flatMaps

```scala
import zio._

val whatev = for {
  result1 <- someEffect
  _ <- println("on to next effect")
  result2 <- otherEffect(result1)
} yield result2 // or yield () to yield nothing (but then dont assign to a var)

```

### Has

- type-indexed heterogeneous map

### ZLayer

- construct larger ZIO environments from smaller pieces
  - relicates netflix's Polynote
  - a more powerful version of Java & Scala constructors; can build multiple services in terms of their dependencies
  - supports resources, asynchronous creation & finalization, retrying and other features

### Zio STM

### Zio Environment

### Zio Test

- includes an alternative (generator) to scalacheck

### ZStream

- a high perofmrance, composable concurrent streams & sinks with strong guarantees of resource safety
- competitor to Akka Streams but without the Akka and dependency on Scalas Future
- competitor to FS2 but without the Cats and better typer safety
