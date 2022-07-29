# zio v1 syntax

- wouldnt trust anything in this file until this line is removed
- bookmark
  - https://zio.dev/version-1.x/overview/overview_testing_effects/#environmental-effects
- largely taken from
  - zionomicon
    - john de goes and adam fraser
- john de goes: creator of zio
  - previously created Aff for purescript and impressively a bunch of other stuff for other things

## links

- [thread pool best practices with zio](https://degoes.net/articles/zio-threads)
- [articles by john a de goes](https://degoes.net/articles/)
- [zio test: intro blog/tutorial](https://scalac.io/blog/zio-test-what-why-how/)
- docs
  - [000 documentation start page](https://zio.dev/version-1.x/overview/)
  - [handling errors](https://zio.dev/version-1.x/overview/overview_handling_errors/)
## terms

- functional effect: blueprint for concurrent workflows; describes what to do, but not its execution
  - are referentially transparent

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

- generally all arguments are passed by name to ensure side effects are managed by ZIO at runtime and not directly executed when instantiated
- any value that actually fails or runs forever should be considered a failure and not a success

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
  - the input environment (context) execution is delayed
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

### Zio[-R, +E, +A]

- any entity with type `Zio[-R, +E, +A]` is a functional effect
  - naively an effectful version of `R => Either[E, A]`
  - the input R is contravariant and pass down the callstack
  - the outputs E & A are covariant and pass up the callstack
- FYI
  - the zipLeft|Right operators are useful when the results of intermediate effects arent needed
    - but you just need to run the effects sequentially

#### R: Environemnt Type

- R: the input environment effect; comprehensive dependency injection
  - the environment (dependencies) required for the effect to be executed
  - Effects that require an environment cannot be run without first providing their environment
  - set to `Any` if no dependencies are required

```scala

// any zio effect can access the environment via a for comp
for {
  env <- ZIO.environment[Int]
  _   <- putStrLn(s"The value of the environment is: $env")
} yield env

// when the environment is a type with fields, use ZIO.access
final case class Config(server: String, port: Int)
val configString: URIO[Config, String] =
  for {
    server <- ZIO.access[Config](_.server)
    port   <- ZIO.access[Config](_.port)
  } yield s"Server: $server, port: $port"

// when the environment is itself an effect, use ZIO.accessM to execute and return the output of the effect
trait DatabaseOps {
  def getTableNames: Task[List[String]]
  def getColumnNames(table: String): Task[List[String]]
}
val tablesAndColumns: ZIO[DatabaseOps, Throwable, (List[String], List[String])] =
  for {
    tables  <- ZIO.accessM[DatabaseOps](_.getTableNames)
    columns <- ZIO.accessM[DatabaseOps](_.getColumnNames("user_table"))
  } yield (tables, columns)
```

#### E: Failure Type

- E: the (output) type of error(s) that can occur during execution of the effect
  - the potential ways an effect can fail
  - e.g. `Throwable` or `Exception`
  - set to `Nothing` if no failures will occur (e.g. if errors are expected to be handled elseware)
- its sole purpose is to:
  - defer errors to higher level (effects)
    - the caller of the effect is required to deal with the error,
    - no error handling logic is required within the effect implementation
  - explicitly state how an effect can fail
  - enables focusing on the happy (success) path since erorrs short circuit the effect stack execution
- handle errors
  - generally all the `.fold` type defs, but the `.foldM` is recommended

#### A: Success Type

- A: the (output) success return type; i.e. the return type
  - set to `Unit`, for void
  - set to `Nothing`, if the effect runs forever/until failure

## API

- methods available to all/most effects
- generally an operation on an effect always returns another effect
  - however, check for comprehensions for creating a sequential pipeline for decomposing effects and doing stuff with the data within

```scala
// e.g.
val printNums = ZIO.foreach(1 to 100) { n => println(n.toString) }

// API
(ZIO/alias/effect)
  .absolve(effect) // submerge failures, opposite of .either: converts ZIO[R, Nothing, Either[E, A]] to ZIO[R, E, A]
  .blocking // see `# blocking`
  .bracket(finallyEffect) { partialEffect } // for handling resources, finally should release the resource, partial should acquire & consume it
  .catchall(lambda) // catch & recover from all types of errors
  .catchSome { patternMatch } // case over specific error types to catch & recover
  .collectAll(Seq[effects, ...]) // collects the results of a sequence of effects
  .effect // see `# Effect`
  .either // surface failures, converts ZIO[R, E, A] to ZIO[R, Nothing, Either[E, A]]
  .ensuring(finallyEffect) // runs finally if prev effect fails for any reason, aka tryThis.ensuring(thisRunsOnFailure)
  .fail(anything) // see `# Fail`
  .flatMap[B](result => effect(result)) // sequently run effects
  .fold(errLam, sucLamb) // handle both failure and success non-effectively, success receives the result of err if its called
  .foldM(errEffect, sucEffect) // handle both fail & succ effectively, success receives the result of err if its called
  .foreach(Seq) { partialFn } // returns a single effect that executes on each el of a Seq
  .forever // dunno
  .map(succLamb) // transform the success value
  .mapError(errLamb) // transform the failure value
  .orElse(2ndEffect) // run 2ndEffect on failure
  .race(otherEffect) // run effects in parallel, returning the first successful
  .retry(Schedule.poop) // returns a new effect that retries the effect on failure
  .retryOrElse(Schedule.poop, finallyLambda) // retires according to schedule, else runs finally if schedules finishes with error
  .retryOrElseEither(Schedule.poop, finallyLambda) // same as retryOrElse, except you have to return an Either
  .succeed(anything) // see  `# Succeed`
  .timeout(duration) // returns a new Option[effect], None indicates timeout occurred
  .zip(2ndEffect) // sequentially... returns a tuple if both succeed (first, second)
  .zipLeft(2ndEffect) // i.e. <* sequentially... returns the result of the first
  .zipRight(2ndEffect) // i.e. *> sequentially... returns the result of the second
  .zipWith(2ndEffect)(lambda(a, b)) // sequentially combine effects
```

### Type Aliases

- predefined values for `ZIO[R,E,A]` type parameters
  - if you dont need to provide specific R,E,A values, prefer a type alias for improved type inference vs setting `[Any, Throwable, A]` etc
- each have a companion object with useful static methods

#### UIO[+A]

- aka `ZIO[Any, Nothing, A]`
- useful for describing infallible effects, including those resulting from handling all errors.

#### URIO[-R, +A]

- aka `ZIO[R, Nothing, A]`

#### IO[+E, +A]

- aka `ZIO[Any, E, A]`

#### Task[+A]

- aka `ZIO[Any, Throwable, A]`
- corresponds most closely to the Future data type built into Scala's standard library.

#### RIO[-R, +A]

- aka `ZIO[R, Throwable, A]`
- allows you to thread environments through third-party libraries and your application.

### Constructors

- convert standard scala data types into zio effects

#### fail[E]

- a constructor that converta pure code into a zio effect that fails with the result of its execution

```scala

val oops = ZIO.fail[E](e: => E): ZIO[Any, E, Nothing] = ???

val f1 = ZIO.fail("Uh oh!")
val f2 = Task.fail(new Exception("Uh oh!"))

```

#### succeed[A]

- a constructor that converts pure code into a zio.effect that succeeds with the result of its execution
- use `ZIO.effectTotal` in place of `.succeed` if the fn has side effects

```scala

val win = ZIO.succeed[A](a: => A): ZIO[Any, Nothing, A] = ???

val s1 = ZIO.succeed(42)

```

#### fromEither

- converts a scala Either into an IO[E, A]
  - The error type will be whatever type the Left case has
  - success type will be whatever type the Right case has.

```scala

val oneof = ZIO.fromEither[E, A](ea: => Either[E, A]): IO[E, A] = ???

val zeither = ZIO.fromEither(Right("Success!"))
```

#### fromOption

- converts a scala Option to an IO
  - if theres no value will always returns None (options are either Success/None)
  - if theres a value will return a zio.success

```scala

val maybe = ZIO.fromOption[A](na: => Option[A]): IO[None.type, A] = ???

val zoption: IO[Option[Nothing], Int] = ZIO.fromOption(Some(2))

// ^ You can change the Option[Nothing] into a more specific error type using ZIO#mapError:
val zoption2: IO[String, Int] = zoption.mapError(_ => "It wasn't there!")
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

- converts a future / fn that returns a Future into a zio effect of type `Task[A]`
  - The error type will always be Throwable, because Future can only fail with values of type Throwable
  - you dont need to use the exectionContext, but if you do then ZIO will manage where the Future is executed

```scala
import scala.concurrent.Future

// origin fn
def goPoopOG(implicit ec: ExecutionContext): Future[Unit] = ???
// converted to a ZIO Effect
def goPoop: Task[Unit] - Task.fromFuture(implicit ec => goPoopOG)

lazy val future = Future.successful("Hello!")
val zfuture: Task[String] =
  ZIO.fromFuture { implicit ec =>
    future.map(_ => "Goodbye!")
  }
```

#### fromFunction

- converts lambdas of type `A => B` into zio effects

```scala
val zfun: URIO[Int, Int] =
  ZIO.fromFunction((i: Int) => i * i)

```

#### effect

- converts any synchronous code into a functional effect of type `ZIO[Any, Throwable, A]`
  - The error type will always be Throwable, because side-effects may throw exceptions with any value of type Throwable.
    - If no errors are thrown, then use ZIO.effectTotal
- use cases
  - migrating a codebase to zio
  - converting impure expressions/functions into referentially transparent pure versions
- avoid using it when:
  - the code is already pure/referentially transparent
  - the code throws a specific error, or doesnt throw at all
  - the code is wrapped in another data type like Option, Either, Try, or Future

```scala
// zio.effect[A](a: => A): ZIO[Any, Throwable, A]

import scala.io.StdIn
val getStrLn: Task[String] =
  ZIO.effect(StdIn.readLine())

```

#### effectTotal

- converts procedural async code into a functional effect that cannot fail
- The value passed to effectTotal will only be constructed if absolutely required.

```scala

val alwaysGood = ZIO.effectTotal[A](a: => A): ZIO[Any, Nothing , A] = ???

val now = ZIO.effectTotal(System.currentTimeMillis())

def putStrLn(line: String): UIO[Unit] =
  ZIO.effectTotal(println(line))
```

#### effectAsync

- converts fns with callbacks into a zio effect
- ^ but only if the callback is invoked exactly once
  - see ZStream elseware

```scala
object legacy {
  def login(
    onSuccess: User => Unit,
    onFailure: AuthError => Unit): Unit = ???
}

val login: IO[AuthError, User] =
  IO.effectAsync[AuthError, User] { callback =>
    legacy.login(
      user => callback(IO.succeed(user)),
      err  => callback(IO.fail(err))
    )
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

// adds properties & methods onto integers
import zio.duration._

val someInt = 10

someInt
  .seconds

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

#### Blocking (package)

- methods for running blocking tasks on a separate `Executor` optimized for blocking tasks
  - only available on the JVM (blocking isnt available in scala)
  - by default ZIO is optimized for async code and computationally bound tasks
    - its critical that blocking tasks run on a separate blcoking thread pool
      - else you could exhaust all of ZIOs default threads

```scala

import zio.blocking._
import scala.io.{ Codec, Source }

def download(url: String) =
  Task.effect {
    Source.fromURL(url)(Codec.UTF8).mkString
  }

def safeDownload(url: String) =
  blocking(download(url))
```

##### effectBlocking

- converts code that use blocking IO/put a thread intoa waiting state into a zio effect
  - The effect will be executed on a separate thread pool optimized for blocking effects
  - can be interrupted by invoking Thread.interrupt using the effectBlockingInterrupt method

```scala
import zio.blocking._

val sleeping =
  effectBlocking(Thread.sleep(Long.MaxValue))

```

##### effectBlockingCancelable

- see `effectBlocking`
  - specifically for blocking code that can only be interrupted by invoking a cancellation effect

```scala

import java.net.ServerSocket
import zio.UIO
import zio.blocking._

def accept(l: ServerSocket) =
  effectBlockingCancelable(l.accept())(UIO.effectTotal(l.close()))

```

#### Fiber[E, A]

- fiber: cooperatively-yielding virtual thread for modeling effects that are already running and have already acquired their `R` environment
- low-level data type for dealing with concurrency (naively similar to scala Future)
  - always prefer higher-level operations rather than using fibers directly
- all effects are implicitely run on a fiber (e.g. the Main fiber) which acts as a handle on the running computation
- consume little memory, have elastic stacks, dont wast resources blocking, automatic GC if suspended/unreachable
- multitasking built in (even in single-threaded environments)
  - scheduled via ZIO runtime
  - cooperatively yield to other fibers enabling

```scala

// random effect
def fib(n: Long): UIO[Long] = UIO {
  if (n <= 1) UIO.succeed(n)
  else fib(n - 1).zipWith(fib(n - 2))(_ + _)
}.flatten

// run any effect by forking it
val fib100Fiber: UIO[Fiber[Nothing, Long]] =
  for {
    fiber <- fib(100).fork
  } yield fiber

// run multiple fibers by joining them
for {
  fiber   <- IO.succeed("Hi!").fork // fiber1
  message <- fiber.join // fiber2
} yield message

// await on fibers to get their Exit (execution result) information
for {
  fiber <- IO.succeed("Hi!").fork
  exit  <- fiber.await
} yield exit

// immediately terminate a running fiber if its no longet needed
// ^ the effect returned by Fiber#interrupt does not resume until the fiber has completed termination
// ^ so you have to wait to get the Exit info
for {
  fiber <- IO.succeed("Hi!").forever.fork
  exit  <- fiber.interrupt
} yield exit

// fork an interrupted fiber for it to resume (complete) immediately
// ^ however now you dont get the Exit information
for {
  fiber <- IO.succeed("Hi!").forever.fork
  _     <- fiber.interrupt.fork // I don't care!
} yield ()

// combine two fibers into a tuple, both succeed or fails
for {
  fiber1 <- IO.succeed("Hi!").fork
  fiber2 <- IO.succeed("Bye!").fork
  fiber   = fiber1.zip(fiber2) // or .zipWith
  tuple  <- fiber.join
} yield tuple

// provide a fallback incase fiber fails
for {
  fiber1 <- IO.fail("Uh oh!").fork
  fiber2 <- IO.succeed("Hurray!").fork
  fiber   = fiber1.orElse(fiber2)
  message  <- fiber.join
} yield message

// API
// ^ generally methds that take 2 fibers are executed sequentially,
// ^ append Par, e.g. zipPar, to run in parallel
someFiber
  .await
  .collectAll
  .foreach
  .fork
  .join
  .mergeAll
  .orElse
  .reduceAll
  .tupled
  .zip
  .zipWith
```

## tests

- a toolkit for testing ZIO applications with implementations for each of ZIOs standard services
- includes an alternative (generator) to scalacheck

## examples

### for comprehensions

- prefer comprehensions over nested flatMaps
- sequentially run effects

```scala
import zio._

// basic
val whatev = for {
  result1 <- someEffect
  _ <- println("on to next effect")
  result2 <- otherEffect(result1)
} yield result2 // or yield () to yield nothing (but then dont assign to a var)


```

### recursion

- zio effects are stack safe for arbitrarily deep recursive effects
  - you can write recursive ZIO fns without working about the thread running out of stack space and throwing a stack overflow

```scala
// recursively asking the user for data on the cli
import zio.console._
laz val readIntOrRetry: URIO[Console, Int] =
  readInt
    .orElse(
      console.putStrLn("tell me your secrets")
      .zipRight(readIntOrRetry)
    )

```

### refineToOrDie

- refine the error type of an effect by treating other errors as fatal

```scala

import java.io.IOException

val getStrLn2: IO[IOException, String] =
  ZIO.effect(StdIn.readLine()).refineToOrDie[IOException]

```

## todo

### Has

- type-indexed heterogeneous map

### ZLayer

- construct larger ZIO environments from smaller pieces
  - replicates netflix's Polynote
  - a more powerful version of Java & Scala constructors; can build multiple services in terms of their dependencies
  - supports resources, asynchronous creation & finalization, retrying and other features

### Zio STM

### ZStream

- a high perofmrance, composable concurrent streams & sinks with strong guarantees of resource safety
- competitor to Akka Streams but without the Akka and dependency on Scalas Future
- competitor to FS2 but without the Cats and better typer safety