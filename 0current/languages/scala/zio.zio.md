# zio

- pronounced: zeeeeo
- Type-safe, composable asynchronous and concurrent programming for Scala
- a powerful effect type that lets you solve complex problems with simple, type-safe, testable, and composable code.
- a batteries included functional programming library
- the largest community in scala, think of it like what rails is to ruby, or react is to Frontend dev

## links

- [homepage](https://zio.dev/)
- [github](https://github.com/zio/zio)
- [github: zio quick start guides](https://github.com/zio?q=quick&type=all&language=&sort=)
- [zio and scala 3 tutorial](https://www.youtube.com/watch?v=XwMKw03w8bs)
- docs
  - [zio overview](https://zio.dev/overview/)

## basics

- IO in zio: represents the main functionality of handling input/output asynchronously
- competitors: cats effect, monachs

### terms

## API

### ZIOAppDefault

- a trait providing an applications main object a fn which can be invoked from an IDE/cli

```scala
import zio._

object MainApp extends ZIOAppDefault:
  def run = Console.printLine("Hello, World")

```
