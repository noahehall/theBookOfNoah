# akka testing

- splitting up the testing from the syntax as i'm realizing how huge the akka framework is

## basics

- todo

## Testing Actor Systems

- tests can only verify externally observable effects via messages
  - actor state is encapsulated, you cant reach in and pull out values
  - i.e. test the response of msgs
- dealing with Actors with dependencies/side effects
  - dependency injection
  - add overridable factory methods, e.g. to mock a db/api call
- testing actor hierarchies
  - start with the leaves, then work your way up

### TestProbe

- used for validating actor responses to messages
- buffers actor messages in an internal queue so they can be inspected during tests

```scala

implicit val system = ActorSystem("My Test System")
val somePoop = system.actorOf(Props[Poop])
val p = TestProbe()

p.send(somePoop, "this message")
p.expectMsg("this response")
p.expectNoMsg(1.second)
system.shutdown()

```

### TestKit

- run a test within the context of a test probe

```scala
import akka.testkit.TestKit

new TestKit(ActorSystem("My Test System") with ImplicitSender)
  val somePoop = system.actorOf(Props[Poop])
  somePoop ! "this message"
  expectMsg("this response")
  expectNoMsg(1.second)
  system.shutdown()

```
