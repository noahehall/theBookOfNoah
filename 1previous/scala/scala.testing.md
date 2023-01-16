# Testing in Scala

- MUnit: scala testing library with actionable errors and extensible APIs

## links

- [ongoing scala testing examples](https://github.com/noahehall/scala/tree/develop/examples/src/test/scala/examples)
- munit
  - [getting started](https://scalameta.org/munit/docs/getting-started.html)
- scalacheck
  - [scalacheck for munit](https://scalameta.org/munit/docs/integrations/scalacheck.html)
  - [on scaladex](https://index.scala-lang.org/typelevel/scalacheck)
  - [user guide](https://github.com/typelevel/scalacheck/blob/main/doc/UserGuide.md)
- scalatest
  - [website](https://www.scalatest.org/)
- scalamock
  - [quickstart](https://scalamock.org/quick-start/)
  - [blah doesnt(and likely wont) work with munit](https://github.com/scalameta/munit/issues/75)
- scoverage
  - [sbt scoverage compiler plugin](https://github.com/scoverage/sbt-scoverage)
  - [scoverage: scala code coverage](https://github.com/scoverage/scalac-scoverage-plugin)
  - [scoverage sample project](https://github.com/ckipp01/scala3-example-project)

## basics

- ...

## MUnit

- a test suite is a class that extends munit.FunSuite

### unit tests

- assertions are inherited from `FunSuite`

```scala
import munit.FunSuite

class YoloWurlSuite extends FunSuite:
  test("this is true") {
    assert(1 == 1)
    assertEquals(obtained, expected)
  }
end YoloWurlSuite
```

## scalacheck

- library for doing property-based testing
- integrates with MUnit and ScalaTest

```scala

import munit.ScalaCheckSuite
import org.scalacheck.Prop
import scala.math.abs

class YoloWurlSuite extends ScalaCheckSuite:
  // property tests via ScalaCheckSuite
  property("ima property test") {
    // supplies arbitrary Int values
    // should return boolean true for passing tests
    Prop.forAll { (n: Int) =>
      val x = abs(n)
      (x * 2) % 2 == 0
    }
  }
end YoloWurlSuite


```

## scalatest

- scalatest is designed to increase teams productivity through simple, clear and executable sepcificatoin that improve both code and communication

## scoverage

- sbt-scoverage is a plugin for sbt that integrates the scoverage code coverage library

## scalamock

- makes use of advanced techniques available on the JVM to create fake component implementations
- unfortunately doesnt work with MUnit
