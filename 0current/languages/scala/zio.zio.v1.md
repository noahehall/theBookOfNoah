# zio v1 syntax

- bookmark
  - page 9 ZIO Environment
- taken from
  - zionomicon
    - john de goes and adam fraser
- john de goes: creator of zio
  - previously created Aff for purescript and impressively a bunch of other stuff for other things

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
  - compositional scheduling: retry/repeat effects according to arbitrary schedules
  - asynchronous queues
  - encapsulating resources via Managed: provides compositional resource safety supporting parallelism and safe interruption
  - some compatibility with Cats (i think its a competitor tho)
    - thus you can use it with Doobie, http4s and FS2
  - Zio Streams
    - competitor to Akka Streams but without the Akka and dependency on Scalas Future
    - competitor to FS2 but without the Cats and better typer safety
- fnal programming will [generally] never be as fast as bare-metal, abstract-free hand optimzied precedural (i miss you nimlang) procedural code
- procedural code will never [generally] never be as intuitive and poetic as fnal programming (ooowee hella scala)

## terms

- reactive programming: patterns for designing applications that are responsive, resilient, elastic and event-driven
- fiber: cooperatively-yielding virtual thread
- fork: create a new thread
- join: consume a fork

## ZStream

- a high perofmrance, composable concurrent streams & sinks with strong guarantees of resource safety
