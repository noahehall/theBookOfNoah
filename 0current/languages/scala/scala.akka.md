# akka

- use the actor model to greatly simplify distributed and concurrent software applications
- Akka is a toolkit for building highly concurrent, distributed, and resilient message-driven applications for Java and Scala.
- Akka Insights is intelligent monitoring and observability purpose built for Akka.

## links

- akka
  - [website](https://akka.io/)
  - [the reactive manifesto](https://www.reactivemanifesto.org/)
  - [all akka modules: start here](https://doc.akka.io/docs/akka/current/typed/guide/modules.html?language=scala)
  - docs
    - [the actor model and distributed systems](https://doc.akka.io/docs/akka/current/typed/guide/actors-intro.html?language=scala)
    - [akka streams introduction](https://doc.akka.io/docs/akka/current/stream/stream-introduction.html?language=scala)
  - ref
    - [actors](https://doc.akka.io/docs/akka/current/typed/index.html)
- alpakka
  - [website](https://doc.akka.io/docs/alpakka/current/)
- akka insights (costs)
  - [website](https://www.lightbend.com/akka-insights)
- kalix (costs)
  - [website](https://www.kalix.io/)

## gotchas

- stay away from anything labeled `classic Poop`: generally that indicates theres a newer version of that api

## basics

- Up to 50 million msg/sec on a single machine. Small memory footprint; ~2.5 million actors per GB of heap.

## designing actor systems

- define the problem to be solved
- split the problem into concrete steps
- define the actors in the system that will be responsible for each step
- determine if multiple instances of an actor can parallelize their step into substeps
- define what messages will be sent between actors

## Actor

- model for concurrent, parallel programming
  - in scala you can have a couple thousand threads, and millions of actors
  - so NEVER block a thread
- Actor: an object with the following features
  - has an address (i.e. identity, i.e. `self`) through which they can receive messages
  - has behavior through which they modify state & send msgs
  - all interactions via async message passing: the only access to an actor's state/behavior is via messages
    - you reply to a msg receive via the address embedded in the msg
  - completely independent agents of computation: encapsulated & isolated from each other
    - local execution, no notion of gloal synchronization
    - all actors run fully concurrently
    - message-passing primitive is one-way communication
- ActorRef: an address for an Actor
- more on messages: an actor's internal evaluation order
  - internally, actrs are effectively single-threaded computations,
  - messages are received sequentially
  - behavior change is effective _before_ processing the next message
  - processing one message is the atomic unit of execution
  - dead-locking: doesnt occur because there are no syncrhonization methods, instead collaboration is achieved via message queueing
- more on messages: reliability in unreliable circumstances
  - all communication is inherently unreliable
  - delivery of a msg requires eventual availability of channel & recipient
  - patterns for message guarantees
    - at most once: i.e. send and forget; delivers [0,1] times
      - most performant, but 0 guarantees of receipt
    - at least once: i.e. forever retry: resend msg until receiver replies 200: delivers [1, infinte] times
      - good balance: but sender needs to keep the msg in state in order to resend it
    - exactly once: i.e. guaranteed by the receiver; processing only first receiption delivers 1 time
      - most costly: as at least once still applies, + the receiver needs to keep state of ALL messages received

```scala
import akka.actor.{Actor, Props}
import akka.event.LoggingReceive
// example actor

// actor API
someActor
  .receive
  .sender
  .! // or .tell ()
  .context
    .become(currentState) // update the actors state,
    .unbecome
    .actorOf(props, name)
    .stop(actorRef) // often applied to self, so an actor can stop itself

```
