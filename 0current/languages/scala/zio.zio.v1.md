# zio v1 syntax

- wouldnt trust anything in this file until this line is removed
- bookmark
  - page 42 blocking
    - continue at object blocking {...}
- taken from
  - zionomicon
    - john de goes and adam fraser
- john de goes: creator of zio
  - previously created Aff for purescript and impressively a bunch of other stuff for other things

## links

- [documentation start page](https://zio.dev/version-1.x/overview/)
- [handling errors[(https://zio.dev/version-1.x/overview/overview_handling_errors/)

## terms

- functional effect: blueprint for concurrent workflows; describes what to do, but not its execution
  - are referentially transparent
- direct execution: in procedural programming, when a line of code is constructed to a value it must directly interact with its lexical context
- reactive programming: patterns for designing applications that are responsive, resilient, elastic and event-driven
- fiber: cooperatively-yielding virtual thread
- fork: create a new thread
- join: consume a fork
- structured concurrency: a paradigm that provides strong guarantees around the lifespans of operations performed concurrently
- referencial transparency: an expression is referentially transparent if you can replace (refer to) the expression with its result and still have same runtime behavior
  - generally any expression with side effects is NOT referentially transparent, as the side effect is dependent on the runtime (when its invoked)
- pure: an expression/function is pure if it doesnt have any side effects

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
- relies heavily on scala's variance annotations to improve type inference

### gotchas

- generally all lambdas/partials passed to ZIO must be passed by name =>

```scala
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

```

### best practices

- always code to interfaces, ensuring a fns type signature matches the actual implementation

### comparison with scala Future

- a zio effect is a functional effect
  - i.e. everything is passed by name, so even the input environment (context) execution is delayed
  - can run any `Executor`, and it doesnt need to be provided until the effect is actually invoked (not when defined)
  - can define arbitrary Error types
  - direct support of dependency injection via Environment type parameter
- a scala future is a running effect (i.e. direct execution)
  - executes its input environment (context) immediately
  - cant delay the execution of the code it wraps
  - cant retry a future in the event of failure
    - all future error types are Throwable
  - requires an implicit `ExecutionContext` ins cope whenever you invoke methods on Future
  - no way of modeling dependencies

## API

- methods available to all effects

```scala
// e.g.
val printNums = ZIO.foreach(1 to 100) { n => println(n.toString) }
// API
ZIO
  .fold(errLam, sucLamb) // handle both failure and success preceduarely
  .foldM(errEffect, sucEffect) // handle both fail & succ effectively
  .foreach(Seq) { partialFn } // returns a single effect that executes on each el of a Seq
  .collectAll(Seq[effects]) // collects the results of a sequence of effects
```

### Zio[-R, +E, +A]

- any entity with type `Zio[-R, +E, +A]` is a functional effect (see zio.effect elseware)
  - the input R is contravariant and pass down the callstack
  - the outputs E & A are covariant and pass up the callstack
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

#### R: Environemnt Type

- R: the input environment effect; comprehensive dependency injection
  - the environment (dependencies) required for the effect to be executed
  - set to `Any` if no dependencies are required

#### E: Error Type

- E: the (output) type of error(s) that can occur during execution of the effect
  - the potential ways an effect can fail
  - e.g. `Throwable` or `Exception`
  - set to `Nothing` if no failures will occur (e.g. if errors are expected to be handled elseware)
- its sole purpose is to:
  - defer errors to higher level (effects)
    - the caller of the effect is required to deal with the error,
    - no error handling logic is required within the effect implementation
  - explicitly state at each level (specific effect) how it can fail
  - enables focusing on the happy (success) path since erorrs short circuit the effect stack execution
- handle errors
  - generally all the `.fold` type defs, but the `.foldM` is recommended

#### A: Success Type

- A: the (output) success return type; i.e. the return type

### Type Aliases

- optional type aliases to common `ZIO[R,E,A]` type parameters
- if you dont need to provide specific R,E,A values, use a type alias
  - since the type alias constructors require less parameters, you get improved type inference
- each have a companion object with useful static methods

#### IO[+E, +A]

- aka `ZIO[Any, E, A]`

#### Task[+A]

- aka `ZIO[Any, Throwable, A]`

#### RIO[-R, +A]

- aka `ZIO[R, Throwable, A]`

#### UIO[+A]

- aka `ZIO[Any, Nothing, A]`

#### URIO[-R, +A]

- aka `ZIO[R, Nothing, A]`

### Constructors

- convert standard scala data types into zio effects

#### fail[E]

- a constructor that converta pure code into a zio effect that fails with the result of its execution

```scala

val oops = ZIO.fail[E](e: => E): ZIO[Any, E, Nothing] = ???

```

#### succeed[A]

- a constructor that converts pure code into a zio.effect that succeeds with the result of its execution
- any value that actually fails or _runs forever_ should be considered a failure
  - often use `Nothing` as the result type (especially forever code)

```scala

val win = ZIO.succeed[A](a: => A): ZIO[Any, Nothing, A] = ???

```

#### fromEither

- converts a scala Either into an IO[E, A]
  - if its a left: returns a zio.fail
  - if its a right: returns a zio.success

```scala

val oneof = ZIO.fromEither[E, A](ea: => Either[E, A]): IO[E, A] = ???

```

#### fromOption

- converts a scala Option to an IO
  - if theres no value will always returns None (options are either Success/None)
    - its an IO because a scala Option can never fail, it simply returns None with no information
  - if theres a value will return a zio.success

```scala

val maybe = ZIO.fromOption[A](na: => Option[A]): IO[None.type, A] = ???

```

#### fromTry

- converts a scala Try into a zio Task
  - on failure returns a ZIO.fail with type fixed to Throwable (scala Trys always return throwable)
  - on success returns a zio.success

```scala
import scala.util.Try

val couldThrow = ZIO.fromTry[A](a: => Try[A]): Task[A] = ???

```

#### fromFuture

- converts a fn that returns a Future into a zio effect of type `Task[A]`
  - remember it doesnt take a future, it takes a function that returns a future based on some ExecutionContext (all future require ExecutionContext)
  - you dont need to use the exectionContext, but if you do then ZIO will manage where the Future runs at higher-levels
  - make sure the implementation of the make fn (See below) creates a new future
    - instead of returning a Future that is already running

```scala
// origin fn
def goPoopOG(implicit ec: ExecutionContext): Future[Unit] = ???
// converted to a ZIO Effect
def goPoop: Task[Unit] - Task.fromFuture(implicit ec => goPoopOG)

```

#### effect

- converts any asynchronous procedural code into a functional effect of type `ZIO[Any, Throwable, A]`
  - converts exceptions into zio.fail
  - converts successes into zio.success
  - i.e. converts non pure expressions/functions into pure values
- use cases
  - migrating a codebase to zio
  - converting impure expressions/functions into referentially transparent pure versions
- avoid using it when:
  - the code is already pure/referentially transparent
  - the code throws a specific error, or doesnt throw at all
  - the code is synchronous, it would require you register a callback
  - the code is wrapped in another data type like Option, Either, Try, or Future

```scala
// zio.effect[A](a: => A): ZIO[Any, Throwable, A]
// somethingAsync must be passed by name =>
val whatev = ZIO.effect(somethingAsync)

```

#### effectTotal

- converts procedural async code into a functional effect that cannot fail

```scala

val alwaysGood = ZIO.effectTotal[A](a: => A): ZIO[Any, Nothing , A] = ???

```

#### effectAsync

- converts fns with callbacks into a zio effect
- ^ but only if the callback is invoked exactly once
  - see ZStream elseware

```scala
// e.g. this fn which expects a callback
def didPoopAsync(p: Poop)(cb: Boolean => Unit): Unit =
  println("these lines run immediately")
  println("the next line runs when didPoop is invoked")
  cb(true)
// and this invocation of the callback
didPoopAsync(poop) {
  case true => println("i pooped")
  case _ => println("i peed")
}
// can be wrapped in asyncEffect
// you can now replace all invocations of didPoopAsync with didPoop
def didPoop(p: Poop): ZIO[Any, Nothing, Boolean] =
  ZIO.effectAsync { cb =>
    didPoopAsync(p) {
      case true => cb(ZIO.succeed("i pooped"))
      case _ => cb(ZIO.succeed("i peed"))
    }
  }


```

### Services

- relying on these services enables you to easily test any code without actually interacting with production implementations
  - ability to replace implementation details during tests with specifi values for testing
- when using a service, always update the type signature of the underlying effect, .e.g `ZIO[Clock, Nothing, Unit]`

#### Clock

- methods related to time and scheduling
- logic related to retrying, repitition, timing, etc should utilize the Clock service
- use cases
  - the current time/date/offsets in different units
  - sleep
  - delay

```scala

import zio.clock._
import zio.duration._

// implementing a delay
def delay[R, E, A](zio: ZIO[R,E,A])(d: Duration): ZIO[R with Clock, E, A] =
  clock.sleep(Duration) *> zio

// api
zio.clock
  .nanoTime: URIO[Clock, Long]
  .sleep(d: => Duration): URIO[Clock, Unit]

```

##### duration

```scala

import zio.duration._

```

#### Console

- methods related to console input/output
- use cases
  - cli tools

```scala

zio.console
  .getStrLn: ZIO[Console, IOException, String]
  .putStr(line: => String): URIO[Console, Unit]
  .putStrLn(line: => String): URIO[Console, Unit]

```

#### System

- methods for getting system & env vars
- use cases
  - handling configuration values

```scala

zio.system
  .env(k: String): IO[SecurityException, Option[String]] // env var
  .property(p: String): IO[Throwable, Option[String]] // system prop
```

#### Random

- methods for generating random values
- the `live` implementation delegates to `scala.util.Random` and has the same interface

```scala


```

#### Blocking

- methods for running blocking tasks on a separate `Executor` optimized for blocking tasks
  - only available on the JVM (blocking isnt available in scala)
  - by default ZIO is optimized for async code and computationally bound tasks
    - its critical that blocking tasks run on a separate blcoking thread pool
      - else you could exhaust all of ZIOs default threads

```scala

import zio.blocking._

zio.blocking
  .blocking ...

```

### examples

#### for comprehensions

- prefer comprehensions over nested flatMaps

```scala
import zio._

val whatev = for {
  result1 <- someEffect
  _ <- println("on to next effect")
  result2 <- otherEffect(result1)
} yield result2 // or yield () to yield nothing (but then dont assign to a var)

```

### todo

#### Has

- type-indexed heterogeneous map

#### ZLayer

- construct larger ZIO environments from smaller pieces
  - replicates netflix's Polynote
  - a more powerful version of Java & Scala constructors; can build multiple services in terms of their dependencies
  - supports resources, asynchronous creation & finalization, retrying and other features

#### Zio STM

#### Zio Environment

#### ZStream

- a high perofmrance, composable concurrent streams & sinks with strong guarantees of resource safety
- competitor to Akka Streams but without the Akka and dependency on Scalas Future
- competitor to FS2 but without the Cats and better typer safety
