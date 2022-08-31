# zio v1 syntax

- wouldnt trust anything in this file until this line is removed
- bookmark
  - start here
    - https://zio.dev/version-1.x/overview/overview_testing_effects/#implement-test-service
      - add these notes under module pattern 1.5
  - then here
    - https://zio.dev/version-1.x/datatypes/fiber/#thread-shifting---jvm
  - then continue here
    - https://zio.dev/version-1.x/services/
  - https://zio.dev/version-1.x/can_fail/
    - haha you cant event fkn get to this link on the site/google
  - https://zio.dev/version-1.x/datatypes/concurrency/ref/
    - `# Ref[A]`
- largely taken from
  - zionomicon
    - john de goes and adam fraser
- john de goes: creator of zio
  - previously created Aff for purescript and impressively a bunch of other stuff for other things

## catchall / review / todo

```scala

```

## links

- [api docs](https://javadoc.io/doc/dev.zio/zio_2.13/1.0.16/index.html)
- [pure fp book](https://www.manning.com/books/functional-programming-in-scala-second-edition)
- [thread pool best practices with zio](https://degoes.net/articles/zio-threads)
- [articles by john a de goes](https://degoes.net/articles/)
- [zio test: intro blog/tutorial](https://scalac.io/blog/zio-test-what-why-how/)
- examples
  - [zio applications](https://zio.dev/version-1.x/datatypes/contextual/zlayer#examples)
- docs
  - [000 zio1 intro](https://zio.dev/version-1.x/overview/)
  - [handling errors](https://zio.dev/version-1.x/overview/overview_handling_errors/)
  - [zio native services docs](https://zio.dev/version-1.x/services/)

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

### thoughts

- theres two core workflows
  - compile time programming: setting up your algebras so scala & ZIO can do some magic (see type directed programming elseware)
    - this is critical, there is so much fkn magic that you will spend a majority of your time here
  - runtime programming: consuming services from the environment and creating effect pipelines

### gotchas

- generally all arguments are passed by name to ensure side effects are managed by ZIO at runtime and not directly executed when instantiated
- any value that actually fails or runs forever should be considered a failure and not a success
- Constructors in classes are always synchronous, use ZLayer for asynchronous creation of services (especially in non-blocking applications)
- to run multiple effects you have to ensure they're part of a pipeline, e.g. `effect1 *> effect`
- So the most [important] thing we should keep in mind when we are working with a functional effect system like ZIO is that when we are writing code, printing a string onto the console, reading a file, querying a database, and so forth; We are just writing a workflow or blueprint of an application. We are just building a data structure.

### best practices

- always code to interfaces, ensuring a fns type signature matches the actual implementation
- Use constructors to require dependencies, use layers to make dependencies, use environment to access context (scopes, transactions, etc.) that is eliminated with layers (since layers are also algebraic effect handlers).

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

## Zio[-R, +E, +A]

- any entity with type `Zio[-R, +E, +A]` is a functional effect
  - all effects are just data structure that describes the execution of a concurrent program.
  - naively an effectful version of `R => Either[E, A]`
  - the input R is contravariant and pass down the callstack
  - the outputs E & A are covariant and pass up the callstack

### R: Environemnt Type

- R: the input environment effect; comprehensive dependency injection
  - the environment (dependencies) required for the effect to be executed
  - Effects that require an environment cannot be run without first providing their environment
  - set to `Any` if no dependencies are required

```scala
/// Specifying Dependencies ////////////////////////////
// you can specify a single dependency
val blah: ZIO[Poop, Nothing, Unit] = ???
// or multiple dependencies
val blah: ZIO[Poop with Flush with Etc, Nothing, Unit] = ???

/// Providing Dependencies ////////////////////////////
// ^ see # Zlayer for more
// use the ++ operator to provide multiple deps
val mainApp: ZIO[Any, Nothing, Unit] = effect.provideLayer(Console.live ++ Random.live)

// or from existing services
val live: URLayer[Clock with Console, Logging] =
      ZLayer.fromServices[Clock.Service, Console.Service, Logging.Service]

/// Accessing Dependencies ////////////////////////////
// any zio effect can access the environment via a for comp
for {
  env <- ZIO.environment[SomeInterface]
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


// API
ZIO
  .access[SomeInterface](_.someProp) // retrieve the implementation of some environment class/object/etc
  .accessM[SomeInterface](_.someProp)) // retrieve the implementation of some environment effect
  .serviceWith // returns an effect that requires the corrosponding service to be defined with the Has[_] data type; used with accessor methods
  .provide(someServiceImplementation) // provide a specific implementation to an effect that requires it
  .provideCustomLayer(someServiceImplementation) // provide services not part of ZEnv (i.e. builtin services)
  .provideLayer(SomeEnv.live ++ otherEnv.live)
  .provideSomeLayer() // partially provide some layers to an effect

```

#### ZEnv

- e.g. `ZIO[ZEnv, Blah, Blah]`
- data type that includes all ZIO builtin services
  - clock, console, system, random, and blocking

### E: Failure Type

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

#### Cause[E]

- the full story of a failure
- in general E contains limited (hah!) information, whereas Cause will contain the hole shebang
  - unexpected exceptions or defects,
  - stack and execution traces,
  - cause of fiber interruptions
  - etc

```scala
import zio._
import zio.duration._
// fyi: .run returns success/failure
for {
  // Fail[+E](value: E) contains the cause of expected failure of type E.
  failExit <- ZIO.fail("Oh! Error!").run
  // Die(value: Throwable) contains the cause of a defect or in other words, an unexpected failure of type Throwable. If we have a bug in our code and something throws an unexpected exception, that information would be described inside a Die.
  dieExit  <- ZIO.effectTotal(5 / 0).run
  // Both(left, right) & Then(left, right)
  // If we perform ZIO's analog of try-finally (e.g. ZIO#ensuring), and both of try and finally blocks fail, so their causes are encoded with Then.
  thenExit <- ZIO.fail("first").ensuring(ZIO.die(throw new Exception("second"))).run
  // If we run two parallel fibers with zipPar and all of them fail, so their causes will be encoded with Both.
  bothExit <- ZIO.fail("first").zipPar(ZIO.die(throw new Exception("second"))).run
  fiber    <- ZIO.sleep(1.second).fork
  _        <- fiber.interrupt
  // Interrupt(fiberId) contains information of the fiber id that causes fiber interruption.
  interruptionExit <- fiber.join.run
} yield ()

```

-

### A: Success Type

- A: the (output) success return type; i.e. the return type
  - set to `Unit`, for void
  - set to `Nothing`, if the effect runs forever/until failure

## Runtime[R]

- the runtime system: the only way to execute effects within an environment (layers) R
  - provides a threadpool (fibers?) with the environment R that the effects need
- runtime workflow: takes a zio effect `ZIO[R, E, A]` definition and the environment R (layers satsifying the R in the effect) -> exexutes the effects -> returns the result as Either[E, A]
  - executes the effect pipeline in a while loop
  - handle (un)expected errors
  - spawn concurrent fibers everytime `.fork` is called on an effect
  - cooperatively yield to other fibers ensuring no single fiber michael jordans CPU resources
  - Capture execution and stack traces
  - Ensure finalizers are run appropriately ensuring resources are closed & cleanup logic is executed
  - handle async callbacks so you dont have to (in zio everything is ASYNC without the callbacks)
- two runtime patterns for executing effect pipelines
  - extending some zio.App/variant and calling poop.exitCode
  - wrapping the pipeline within zio.Runtime.default.unsafeRun and executing it within a scala app
    - useful for wrapping legacy non-effectful code
- FYI
  - in order to execute an effect in a runtime, all of the effects dependencies must be provided

```scala
// zio.APP type def
package zio
trait App {
  def run(args: List[String]): URIO[ZEnv, ExitCode]
}

// default runtime & platform type def
// ^ notice the constructor using live versions of interfaces
// ^ Platform.default: designed for mainstream usage
object Runtime {
  lazy val default: Runtime[ZEnv] = Runtime(ZEnv.Services.live, Platform.default)
}

// ^ default runtime has different ZEnv configs for each platform
// ^^ Default JS environment
type ZEnv = Clock with Console with System with Random
// ^^ Default JVM environment
type ZEnv = Clock with Console with System with Random with Blocking


// pattern 1: execute the pipeline via zio.App/some variant
object MyApp extends zio.App {
  final def run(args: List[String]) =
    myAppLogic.exitCode
}

// pattern 2: execute the pipeline via unsafeRun
object RunZIOEffectUsingUnsafeRun extends scala.App {
  zio.Runtime.default.unsafeRun(myAppLogic)
}

```

### Custom Runtimes

- whenever one/more effects require a user-defined environment &/ platform

```scala
trait AInterface
object AInterface
case class ALive extends AInterface
trait BInterface
object BInterface
case class BLive extends BInterface

// custom runtime
// ^ that contains the implementations in its environment
val testableRuntime = Runtime(
  Has.allOf[AInterface, BInterface](ALive(), BLive()),
  Platform.default
)
// custom runtime that extends the default runtime
val testableRuntime: Runtime[zio.ZEnv with Has[AInterface] with Has[BInterface]] =
  Runtime.default
    .map((zenv: zio.ZEnv) =>
      zenv ++ Has.allOf[AInterface, BInterface](ALive(), BLive())
    )

// now you can write your effect pipelines
testableRuntime.unsafeRun(
  for {
    _ <- A.someDef
    _ <- B.otherDef
  } yield ()
)
```

### User-defined Executor

- an executor is responsible for executing effects
- a customer executor is required because threading, scheduling & etc is separated from the caller, so to customize the aforementioned a user defined one can be provided to the runtime

```scala

import zio.internal.Executor
import java.util.concurrent.{ThreadPoolExecutor, TimeUnit, LinkedBlockingQueue}

val runtime = Runtime.default.mapPlatform(
  _.withExecutor(
    Executor.fromThreadPoolExecutor(_ => 1024)(
      new ThreadPoolExecutor(
        5,
        10,
        5000,
        TimeUnit.MILLISECONDS,
        new LinkedBlockingQueue[Runnable]()
      )
    )
  )
)

```

#### Benchmarking

- disable tracing and auto-yielding
- and use `Platform.benchmark`

```scala

val benchmarkRuntime = Runtime.default.mapPlatform(_ => Platform.benchmark)

```

### Application Tracing

- [continue here](https://zio.dev/version-1.x/datatypes/core/runtime/#application-tracing)
- skipped because (per the docs)
  - Execution tracing has full of junk
  - has a tremendous impact on the complexity of the application runtime.
  - Users often turn off tracing in critical areas of their application

## Layers

### Has[A]

- Has can be thought of as a Map[K, V] which keys are service types and values are service implementations
- represents a dependency on a service of type A
  - wire/binds service interfaces to their implementations
  - horizontally combine multiple services together with the `++` operator
- enables us to combine different services and provide them to the ZIO Environment.
- its a Wrapper of some code, that converts its value into a service thats providable as a layer
  - haha need to check on that definition

```scala
// define deps that will propagate through the environment
val iRequire: Has[ServiceInterface] = Has(serviceImplementation)
val iRequireMultiple: Has[AInterface] with Has[BInterface] = aImplementation ++ bImplementation

// retrieve deps from the environment
val imB = requireMultiple.get[BInterface]
```

### ZLayer[-RIn, +E, +ROut]

- build an env of services composed of input(s) RIn that outputs an env of services ROut; possibly producing an error E during creation
  - an alternative to a class constructor for creating services with dependencies
  - use `++` operator to horizontally compose layerA and layerB into a single layerC that has requirements on both A and B
  - use `>>>` operator to vertically compose layerA as input env to layerB
    - the first layer must output all services required by layerB
    - ^ but can be defered using `ZLayer.identity`
- construct larger ZIO environments from smaller pieces
  - replicates netflix's Polynote
  - a more powerful version of Java & Scala constructors; can build multiple services in terms of their dependencies
  - supports resources, asynchronous creation & finalization, retrying and other features
- gotchas
  - Whenever we lift a service value into ZLayer with the ZLayer.succeed constructor or toLayer, ZIO will wrap our service with Has data type.
  - layers are memoized, i.e. a layer used in multiple places is still only instantiated once shared between all deps
    - use `ZLayer.fresh(...)` to provide an isolated instance

```scala
// create a layer that provides a string value
val nameLayer: ULayer[Has[String]] = ZLayer.succeed("Adam")

// create a layer from an acquirable & releasable value
def acquire = ZIO.effect(new FileInputStream("file.txt"))
def release(resource: Closeable) = ZIO.effectTotal(resource.close())
val inputStreamLayer = ZLayer.fromAcquireRelease(acquire)(release)

// replace a dependency with a different implementation
// ^ via blah.update
val newService = prevService.update[SomeDepInterface] {
  prevDep => new SomeDepInterface {
    ...
  }
}
// ^ or overriding the layer that contains the dep you want to replace
val newService = prevService ++ otherLayer

// partially provide dependencies via ZLayer.identity
// the consumer will have to provide the missing deps
val stillMissing: ZLayer[Has[ThisDep]], Nothing, Poop] =
  ZLayer.identity[Has[ThisDep]] >>> Blah


// API
// generallly all have suffixes
// ^ blahM: build a service effectfully
// ^ blahManaged: resourcefully (e.g. db acquistion & release)
// ^ blahMany: build multiple serfvices
ZLayer
  .fromAcquireRelease(acquireValue)(releaseValue) // create a layer from a resource acquisition/release
  .fromEffect(someEffect) // create a layer form an effect
  .fromFunction // create a layer from a function
  .fromService((gotService) => { liveServiceImplementation }) // build a layer from a service retrieved from the environment
  .fromServices[Depx, ..Y](depX: DepX, y...) => ??? // wrapper of the live implementation
  .identity // express the requirfrom for a layer (wtf ?)
  .succeed[A](a => A) // convert a value into a layer of type ULayer[Has[A]]
  .succeedMany // create a layer from multiple services
  .succeedNow(poop) // TODO:
  .fromManaged(someZManagedValue) // convert a managed resource into a layer
  .fresh // provide an isolated instance of this layer
  .requires[SomeInterface] // no fkn clue, it just appeared in the examples

```

#### RLayer[-RIn, +ROut]

- type alias for `ZLayer[RIn, Throwable, ROut]`

#### ULayer[+ROut]

- type alias for `ZLayer[Any, Nothing, ROut]`

#### Layer[+E, +ROut]

- type alias for `ZLayer[Any, E, ROut]`

#### URLayer[-RIn, +ROut]

- type alias for `ZLayer[RIn, Nothing, ROut]`

#### TaskLayer[+ROut]

- type alias for `ZLayer[Any, Throwable, ROut]`

### ZManaged

- its ZLayer but for managed resources
  - i.e. resource that require acquisition & release, like a db/file handle
- any ZManaged value can be converted to a ZLayer by a providing a manged resource to the ZIO.fromManaged constructor

```scala
val managedFile = ZManaged.fromAutoCloseable(
  ZIO.effect(scala.io.Source.fromFile("file.txt"))
)
// convert to layer via fromManaged
val fileLayer: ZLayer[Any, Throwable, Has[BufferedSource]] = ZLayer.fromManaged(managedFile)
// or via toLayer
val fileLayer: ZLayer[Any, Throwable, Has[BufferedSource]] = managedFile.toLayer

// API
someZmanagedThing
  .toLayer // convert the managed resource into a layer
```

## Services

### Custom Services

- the culmination of `ZIO[R, E, A]` + Layers
- a zio-fied app is a collection of services
- module patterns: idiomatic ZIO service creation
  - both patterns require you to:
    - define a service whose implementation is coded to an interface
    - define a layer that wraps the live implementation
    - provide the layer to the application that runs the service
    - potentially provide downstream services with the service data type and ZIO will inject it automatically
  - [module pattern 1.0](https://zio.dev/version-1.x/datatypes/contextual/#module-pattern-10)
    - a single object that encapsulates the full service definition & implementation, live implementation and accessor methods
  - [module pattern 2.0](https://zio.dev/version-1.x/datatypes/contextual/#module-pattern-20)
    - use classes to implement services, and constructores to define service dependencies
- gotchas
  - with the fkn companion objects its difficult to tell at first wtf is going on
    - thus things are renamed to include poopInterface to visually inform that you're coding to (and generally passing around) the interface, not the live implementation or layer

```scala
///////////////////////
// the whole purpose is to convert a service from idiomatic scala
// into idiomatic zio with dependency injection
///////////////////////

// interfaces
trait ServiceA {}
trait ServiceB {}
trait FooService {}
class FooServiceImpl(a: ServiceA, b: ServiceB) {} //depends on A and B
// runtime
val fooService = new FooServiceImpl(new ServiceAImpl, new ServiceBImpl)

///////////////////////
// service pattern 1.0
///////////////////////

// lowercase containerName: the module name for this service
// ^encapsulates the full service definition + implementation + accessor methods
object terminal {
  // let the environment know what service you provide
  type TerminalInterface = Has[Terminal.Service]
  // uppercase companion object for the Type alias above
  object TerminalInterface {
    // define the interface for the service
    trait Service {
      def putStrLn(line: String): UIO[Unit]
    }
    // concrete implemenetation of the service + any dependencies this service requires
    // ^ the poop.Service.live is what you turn into a layer for other services to consume
    // remember: the value of a liveService should generally be some type of effect
    // ^ notice the final value is ZIO.effectTotal
    object Service {
      val live: ULayer[TerminalInterface] = ZLayer.succeed {
        new Service {
          override def putStrLn(line: String): UIO[Unit] =
            ZIO.effectTotal(println(line))
        }
      }
      // ^ example of live implementation with dependencies specified
      val live: URLayer[Clock with Console, Logging] =
        ZLayer.fromServices[Clock.Service, Console.Service, Logging.Service] {
          (clock: Clock.Service, console: Console.Service) =>
            new Service {
              override def log(line: String): UIO[Unit] =
                for {
                  current <- clock.currentDateTime.orDie
                  _ <- console.putStrLn(current.toString + "--" + line).orDie
                } yield ()
            }
        }
    }
  }
  // Accessor Methods
  // remember if the underlying services has deps
  // ^ you need to retrieve the deps from the environment, e.g. via one of the ZIO.access apis
  def log(line: => String): URIO[LoggingInterface, Unit] =
    // .log is defined on LoggingInterface
    // .get is made available via accessM which returns the Has map of all the environments?
    ZIO.accessM(_.get.log(line))
}

///////////////////////
// module pattern 1.5
// not specificaly labeled 1.5
// but a pattern copied from the testing docs
///////////////////////

// step 1
// define a companion object
// with a single trait specifying the capabilities of the service
object MyPoop {
  trait service {
    def poop(): Task[Poop]
  }
}
// define a module which provides access to the service
trait MyPoop {
  def myPoop: MyPoop.service
}
// step 2
// define the live module which interacts with production resources
trait MyPoopLive extends MyPoop {
  def myPoop: MyPoop.service =
    new MyPoop.service {
      def poop(): Task[poop] = ???
    }
}
// companion object for the live version
object MyPoopLive extends MyPoopLive {
  ...
}
// step 3
// define the test version

// define an object containing getters for the Service
// ^ for easier to access the service as an environment effect
// ^ now you can use myPoop.poop at the call site(s), instead of having to write ZIO.accessM at the call site(s)
object myPoop {
  def poop(): RIO[Nothing, Poop] = ZIO.accessM(...)
}


///////////////////////
// service pattern 2.0
// decomposing the 1.0 object monolith into discrete components
///////////////////////

// define the interface
trait LoggingInterface { ... }
// provide accessor methods on the interface
object LoggingInterface {
  def log(line: String): URIO[Has[LoggingInterface], Unit] = ZIO.serviceWith[LoggingInterface](_.log(line))
}
// implement the interface
case class LoggingLive() extends LoggingInterface {
  override def log(line: String): UIO[Unit] =
    ZIO.effectTotal(print(line))
}
// ^ example with deps
case class LoggingLive(console: Console.Service, clock: Clock.Service) extends Logging {
  override def log(line: String): UIO[Unit] =
    for {
      current <- clock.currentDateTime.orDie
      _       <- console.putStrLn(current.toString + "--" + line).orDie
    } yield ()
}
// companion object that provides the live implementation + layer
// ^ example using URLayer to specify deps required for this service
object LoggingLive {
  val layer: URLayer[Has[Console.Service] with Has[Clock.Service], Has[Logging]] =
    (LoggingLive(_, _)).toLayer
}
```

### Native Services

- relying on these services enables you to easily test any code without actually interacting with production implementations
  - ability to replace implementation details during tests with specific values for testing
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
for {
      fiber <- putStrLn("Working on the first job")
        .schedule(Schedule.fixed(1.seconds))
        .ensuring {
          (putStrLn(
            "Finalizing or releasing a resource that is time-consuming"
          ) *> ZIO.sleep(7.seconds)).orDie
        }
        .fork
      _ <- fiber.interrupt.delay(4.seconds)
      _ <- putStrLn(
        "Starting another task when the interruption of the previous task finished"
      )
} yield ()
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

- [start of docs](https://zio.dev/version-1.x/services/blocking/)

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

// blocking API
zio.blocking
  .effectBlocking
  .effectBlockingInterruptible
```

##### effectBlocking

- converts code that use blocking IO/put a thread into a waiting state into a zio effect
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

- fiber: concurrently run an effect without block ing the current process (naively similar to scala Future)
  - always prefer higher-level operations rather than using fibers directly
  - all effects are implicitely run on a fiber (e.g. the Main fiber) which acts as a handle on the running computation
    - thus all of this section applies to all other effect sections
- more info
  - cooperatively-yielding virtual thread for modeling effects that are already running and have already acquired their `R` environment
    - On the JVM, fibers will use threads, but will not consume unlimited threads. Instead, fibers yield cooperatively during periods of high-contention.
  - consume little memory, have elastic stacks, dont wast resources blocking, automatic GC if suspended/unreachable
  - multitasking built in (even in single-threaded environments)
    - scheduled via ZIO runtime
- API in detail
  - effect.fork: any `IO[E, A]` to immediately yield an `UIO[Fiber[A, A]]`
    - forking executes the effect on the fiber (i.e. thread)
  - effect.fork0: specify the supervisor to receive any non-recoverable errors/those that occur in finalizers
    - if no supervisor is provided, then it traverses up the stack to the root handler supervisor which by default prints the stack trace
  - effect.forkDaemon: fork an effect into a fiber attached to the global scope
    - when the fiber executing the effect terminates, the forked fiber will continue running
    - basically when effectA is wrapped inside effectB and is forkedDaemon
      - if effectB is terminated, it wont terminate effectA (because its attached to the main fiber and not effectBs fiber)
  - fiber.join: resume execution after the current fibers value is realized
    - i.e. join the fiber back to the main thread to retrieve the effects value
    - if the current fiber failed that the result returned by join will also fail with the same error
  - fiber.interrupt: schedules termination of the current fiber
    - the operation doesnt complete until
      - all resources acquired during execution are released
      - all finalizers have been run
  - fiber.await: await on fibers to terminate & get their Exit (execution result) information
    - e.g. to inspect if the fib er successfuly executed

```scala
//////////////////////////////
////// doc examples
//////////////////////////////

// general execution of effects on fibers
// ^ and rejoining on the main thread to get their value
val analyzed = for {
    fiber1   <- analyzeData(data).fork  // IO[E, Analysis]
    fiber2   <- validateData(data).fork // IO[E, Boolean]
    // Do other stuff
    valid    <- fiber2.join
    _        <- if (!valid) fiber1.interrupt
                else IO.unit
    analyzed <- fiber1.join
} yield analyzed

// awaiting fibers to get success status
for {
  b <- nextBoolean
  fiber <- (if (b) ZIO.succeed(10) else ZIO.fail("The boolean was not true")).fork
  exitValue <- fiber.await
  _ <- exitValue match {
    case Exit.Success(value) => putStrLn(s"Fiber succeeded with $value")
    case Exit.Failure(cause) => putStrLn(s"Fiber failed")
  }
} yield ()

//////////////////////////////
////// BOOK examples
//////////////////////////////

// run any effect by forking it
val fib100Fiber: UIO[Fiber[Nothing, Long]] =
  for {
    fiber <- someEffect.fork
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
// ^ generally call .fork after all the other calls
// ^ generally methods that take 2 fibers are executed sequentially,
// ^ append Par, e.g. zipPar, to run in parallel
someFiber
  .await
  .collectAll
  .delay
  .foreach
  .fork
  .fork0
  .forkDaemon
  .forkIn
  .interrupt // schedule a fiber to stop
  .interruptible // make it interruptable
  .join
  .mergeAll
  .orElse
  .reduceAll
  .schedule
  .tupled
  .uninterruptible // make it uninterruptable
  .zip
  .zipWith
  .disconnect // stops an uninterruptable fiber from blocking the thread if .interrupt is accidently called
  .interruptFork // fast interruption: executs the fibers interruption int he bg/separate daemon fiber
```

##### Exit[E, A]

- describes whether a fiber ended successfully
  - E: failure cause of type E
  - A: success value of type A
- reasons for termination
  - fiber self termianted/interrupted by another
    - the main fiber cannot be interrupted because it was not forked
  - failed to handle some error fo type E
    - only occurs when an IO.fail is not handled
  - has a defect that leads to a non-recoverable error
    - partial fn passed to a higher order fn like map/flatMap, and fails
    - error throwing code was embedded within some effect (e.g. effectTotal) that doesnt handle failures
- interruption
  - when a fiber is done/interrupted, it's finalizer is guaranteed to be executed
    - joining an interrupted fiber will still execute its finalizer (unlike other effect systems which deadlock the joining fiber)
  - automatic interruption: zio will eventually interrupt all fibers if you dont explicityly cancel them
    - structured concurrency: if a parent fiber terminates, then all child fibers are interrupted
    - parallelism: if one effect fails during execution of many in parallel, the others will be canceled
    - timeouts: if a running effect being timedout has not completed, the execution is canceled
    - racing: the loser of a race, if still running is canceled

```scala
import zio._
import zio.console._
for {
  successExit <- ZIO.succeed(1).run
  _ <- successExit match {
    case Exit.Success(value) =>
      putStrLn(s"exited with success value: ${value}")
    case Exit.Failure(cause) =>
      putStrLn(s"exited with failure state: $cause")
  }
} yield ()

```

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
  .effectTotal // convert sync logic to a zio effect, CANNOT be used if errors could be thrown
  .either // catches all failures, i.e surface failures, converts ZIO[R, E, A] to ZIO[R, Nothing, Either[E, A]]
  .ensuring(finallyEffect) // runs finally if prev effect fails for any reason, aka tryThis.ensuring(thisRunsOnFailure)
  .environment[T] // retrieves the effect matching type T, its return type should be Any indicating all requirements have been satisfied
  .fail(anything) // see `# Fail`
  .flatMap[B](result => effect(result)) // sequently run effects
  .fold(errLam, sucLamb) // handle both failure and success non-effectively, success receives the result of err if its called
  .foldM(errEffect, sucEffect) // handle both fail & succ effectively, success receives the result of err if its called
  .foreach(Seq) { partialFn } // returns a single effect that executes on each el of a Seq
  .foreachPar
  .forever // TODO dunno
  .ignore // Returns a new effect that ignores the success or failure of this effect.
  .map(succLamb) // transform the success value
  .mapError(errLamb) // transform the failure value
  .orDie
  .orElse(2ndEffect) // run 2ndEffect on failure
  .race(otherEffect) // run effects in parallel, returning the first successful
  .retry(Schedule.poop) // returns a new effect that retries the effect on failure
  .retryOrElse(Schedule.poop, finallyLambda) // retires according to schedule, else runs finally if schedules finishes with error
  .retryOrElseEither(Schedule.poop, finallyLambda) // same as retryOrElse, except you have to return an Either
  .run // Returns an effect that semantically runs the effect on a fiber, producing an Exit (success/failure) for the completion value of the fiber. see # Exit
  .succeed(anything) // see  `# Succeed`
  .succeedLazy
  .timeout(duration) // returns a new Option[effect], None indicates timeout occurred
  .toLayer // convert this effect into a layer
  .unit // TODO: dunno
  .zipPar
  .zip(2ndEffect) // sequentially... returns a tuple if both succeed (first, second)
  .zipLeft(2ndEffect) // i.e. <* sequentially... returns the result of the first
  .zipRight(2ndEffect) // i.e. *> sequentially... returns the result of the second
  .zipWith(2ndEffect)(lambda(a, b)) // sequentially combine effects

```

### Operators

- full details (should be) listed elseware
- the zipLeft|Right operators are useful when the results of intermediate effects arent needed
  - but you just need to run the effects sequentially

```scala
//////////////////////////
// effect operators
//////////////////////////

// sequential
effect1 *> effect2 // zipRight operator, ignores the result of the first effect
effect1 <* effect2 // zipLeft operator, ignores result of second effect
effect1 && effect2 // boolean short circuit for the effect
effect1 &&& effect2 // returns (result1, result2)
effect <*> efffect // alias for &&&

// parallel operators
effect1 &> effect2 // returns effect2, if either fails, the other is interrupted
effect1 <& effect2 // returns effect1, if either fails, the other is interrupted
effect1 <&> effect2 // returns tuple, if either fails, the other is interrupted
<+> // TODO: continue here

//////////////////////////
// dendency / env operators
//////////////////////////

// compose two/more layers horizontally, i.e. no dependencies between them
layerC = layerA ++ layerB // layerC provides both A & B

// compose two/more layers vertically, layerB requires layerA as a dep
// ^ note that LHS layers are hidden in the type definition of layerC
// ^ and are magically provided to the consumer
// see ZLayer.identity to force the consumer to provide the layer themselves
// ^ e.g. layerC = ZLayer.identity(layerA) >>> layerB
layerC = layerA >>> layerB // layerC provides layerB

// consume and pass through dependencies to all downstream services
lazy val all: ZLayer[Any, Nothing, Baker with Ingredients with Oven with Dough with Cake] =
  baker >+>       // Baker
  ingredients >+> // Baker with Ingredients
  oven >+>        // Baker with Ingredients with Oven
  dough >+>       // Baker with Ingredients with Oven with Dough
  cake            // Baker with Ingredients with Oven with Dough with Cake

// TODO
***  // Splits the environment, providing the first part to this effect and the second part to that effect.
+++ // Depending on provided environment, returns either this one or the other effect lifted in Left or Right, respectively.
```

### Effect Type Aliases

- predefined values for `ZIO[R,E,A]` type parameters
  - if you dont need to provide specific R,E,A values, prefer a type alias for improved type inference vs setting `[Any, Throwable, A]` etc
- each have a companion object with useful static methods

#### UIO[+A]

- aka `ZIO[Any, Nothing, A]`
- useful for describing infallible effects, including those resulting from handling all errors.
-

#### URIO[-R, +A]

- aka `ZIO[R, Nothing, A]`

#### IO[+E, +A]

- aka `ZIO[Any, E, A]`
- is polymorphic in values of type E and can work with (and never loses) any error type
- preferred over `try/catch/finally` which can lose errors

##### Error model

- errors are recoverable by using the either monad, which causes an effect to never fail because the failure is exposed as part of the Either success case
- the fibers supervisor is responsible for handling fiber failures
  - log, print restart the fiber, etc.

```scala
for {
  _ <- IO.fail(new RuntimeException("this will fail")).either // Task[String]
  error <- IO.fail(new RuntimeException("this will not fail")).either // ZIO[Any, Nothing, Either[Throwable, String]]
  _ <- ZIO.succeed(println(s"got error $error")) // got error Left(java.lang.RuntimeException: Some Error)
} yield ()

```

#### Task[+A]

- aka `ZIO[Any, Throwable, A]`
- corresponds most closely to the Future data type built into Scala's standard library.

#### RIO[-R, +A]

- aka `ZIO[R, Throwable, A]`
- allows you to thread environments through third-party libraries and your application.

### Effect Constructors

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

#### from scala data types

- generally you can do `ZIO.fromPoop` to convert poop into a zio effect


##### fromEither

- converts a scala Either into an IO[E, A]
  - The error type will be whatever type the Left case has
  - success type will be whatever type the Right case has.

```scala

val oneof = ZIO.fromEither[E, A](ea: => Either[E, A]): IO[E, A] = ???

val zeither = ZIO.fromEither(Right("Success!"))
```

##### fromOption

- converts a scala Option to an IO
  - if theres no value will always returns None (options are either Success/None)
  - if theres a value will return a zio.success

```scala

val maybe = ZIO.fromOption[A](na: => Option[A]): IO[None.type, A] = ???

val zoption: IO[Option[Nothing], Int] = ZIO.fromOption(Some(2))

// ^ You can change the Option[Nothing] into a more specific error type using ZIO#mapError:
val zoption2: IO[String, Int] = zoption.mapError(_ => "It wasn't there!")
```

##### fromTry

- converts a scala Try into a zio Task
  - on failure returns a ZIO.fail with type fixed to Throwable (scala Trys always return throwable)
  - on success returns a zio.success

```scala
import scala.util.Try

val couldThrow = ZIO.fromTry[A](a: => Try[A]): Task[A] = ???

```

##### fromFuture

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

##### fromFunction

- converts lambdas of type `A => B` into zio effects

```scala
val zfun: URIO[Int, Int] =
  ZIO.fromFunction((i: Int) => i * i)

```


## effects in practice

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

### parallelism

```scala

// ^ if either fails, the other is interrupted
for {
    t <- computeInverse(m1).zipPar(computeInverse(m2))
    (i1, i2) = t
    r <- applyMatrices(i1, i2, v)
  } yield r

// IO actions can be raced
// return the first to complete (with a value) and interrupts the other
fib(100) race fib(200)

// raceWith
// ^ allows executing user-defined logic when the first of two actions succeeds.

```

## tests

- a toolkit for testing ZIO applications with implementations for each of ZIOs standard services
- includes an alternative (generator) to scalacheck

```scala
// ZIO.accessM & ZIO.provide should be all thats necessary to use effects in tests

```
## todo

- [e.g. here (scroll down a bit), when to use poop.apply \_ ).toLayer](https://zio.dev/version-1.x/datatypes/contextual/zlayer#vertical-and-horizontal-composition)

### Zio STM

### ZStream

- a high perofmrance, composable concurrent streams & sinks with strong guarantees of resource safety
- competitor to Akka Streams but without the Akka and dependency on Scalas Future
- competitor to FS2 but without the Cats and better typer safety

### Zio ZMX

- [docs](https://zio.github.io/zio-zmx/docs/overview/overview_index)
- ZIO ZMX lets you observe everything that goes on [at runtime] in your ZIO application.
