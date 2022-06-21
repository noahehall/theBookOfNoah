# testing

- there has to be another file in this repo somehwere with bunches more stuff

## links

- [Much Ado about Testing (great video)](https://www.youtube.com/watch?v=Jhzc7fxY5lw)
- [testing react components](https://medium.freecodecamp.com/the-right-way-to-test-react-components-548a4736ab22)
- [testing microservices](https://martinfowler.com/articles/microservice-testing/#agenda)
- [monkey testing](https://en.wikipedia.org/wiki/Monkey_testing)
- [fuzzing/fuzz testing](https://en.wikipedia.org/wiki/Fuzzing)
- [software testing](https://en.wikipedia.org/wiki/Software_testing)
- [bunch of definitions](http://xunitpatterns.com/Mocks,%20Fakes,%20Stubs%20and%20Dummies.html)

## basics

### testing goals

- intent vs reality: reading/reasoning about code works fine for small and conrete thing
  - type systems aid in validating program logic against reality, but relies on the assumption that we correctly modeled things in the first place; in addition to only catch a small class of errors anyway
  - tests can validate program execution against reality
  - correctness of implementation: one way to define and show the correctness of an implementation consists of proving the laws that it respects
    - common in functional programming as many of its paradigms on based on algebraic expressions (where its easy to determine what laws should always be respected by a particular unit/program)
- programs are soft: code bases evolve over time, and consist of immutable & side effecting logic, thus chaning small things here and there could easily break a program that was previously correctly working
  - testing aids in preventing these regressions from happening
- increasing confidence: employing multiple testing techniques increases confidence that the program behaves as expected under the tested conditions
- test quality: assess tests to ensure the validity and quality of tests
  - test coverage: reports the code paths that are & arent tests, however it does not tell you if the test inputs are well covered, nor if the existing tests are correct & logical

### terms

- shift left: the idea of moving testing as early as possible in the dev process, idealy to the dev environment; i.e. every kind of test in your system should be runnable in development
- cycle time: how long it takes between ticket assignment to ticket delivery (actually deployed to prod)
- velocity: value delivered per unit time
- customer satisfaction: how well ap roduct/service met the customers needs
  - NPS scores
  - bug reports
- lead time: the time from ticket creation until ticket delivery (actually deployed to prod)
- System Under Test: aka SUT; the application and system you're testing, as well as the environment the tests are running in
- test fixtures: set of objects used to run a test in a well-known environment
  - mocking: code designed to stand in for other pieces of code that contains external dependencies to enable unit tests; umbrella term for stubs, dummy objects, spies, etc
    - consists of providing a fake implementation of a component that can be substituted for the purpose of testing another component in isolation
    - tests run faster and wont be influenced bya bugs/sideeffects in dependency components (those that you mock)
      - however, this does not test the whle system as it will be deployed to production
  - dummy objects: objects that the System Under Test (SUT) depends on, but are never actually used.
    - any object that is required to run/test some behavior, but is not actually used (e.g. a required parameter) and must resemble a real object
  - test stubs: an object to control the indirect input of the tested code. setting up state
    - Test stubs are functions (spies) with pre-programmed behavior. They support the full test spy API in addition to methods which can be used to alter the stub’s behavior.
    - Control a method’s behavior from a test to force the code down a specific path. Examples include forcing a method to throw an error in order to test error handling.
    - When you want to prevent a specific method from being called directly (possibly because it triggers undesired behavior, such as a XMLHttpRequest or similar).
  - test spies: a function that records arguments, return value, the value of this and exception thrown (if any) 'for' all its calls
- Specifications: what the program is suppose to do
- component specfifications: communicate the visual design
- executable specifications (test component specifications)
- value specifications: communicate what value the project provides 1. capabilities 2. feature sets: (groups of features) 3. specific features 4. scenarios

### Methodologies

- TDD: test driven development; tests are written before code is developed
  - write a failing test first, then writing code to cause the test to pass
  - opposite of mutation testing
- BDD: behavior driven development:
  - implementing an application by describing its behavior from the perspective of its stakeholders in the form of 'it... should...'
  - describes a cycle of interactions with well-defined inputs, resulting in the delivery of working, tested software
- ATDD: acceptance test-driven development; the practice of defining testable behavior before development to establish what is to be delivered

## type of tests

- mutation tests: introduce a bug in a program and check that the tests catches the bug, opposite of TDD
- unit tests: Unit Tests are functions and classes designed to prove the code performs within a set of guidelines; and validate the result of a program for some specific inputs
  - you must think through all of the negative, positive and corner cases to check, and not just the happy/golden path
- property-based tests: unit tests that support testing a large program domain, with an arbitrary amount of positive, negative and corner/edge cases.
  - makes it easier to icnrease the coverage of unit tests and find corner/edge cases
  - relies heavily on:
    - generating random data to serve as inputs to unit tests
    - testing logical properties of program execution that are true/false for all inputs and outputs
      - e.g. testing an ADD method, a general property are two even numbers always equal an even number
    - fnding invariants and identities (e.g. invertibility, idempotence, transformation relatoins, etc)
- integration tests: tests to check the correct functioning of a system that rely on external dependencies
  - discern defects in the interfaces and in the interactions between itnegrated components/systems
  - collect modules together and test them as a subsystem in order to verify that they collaborate as intended to achieve some larger piece of behaviour.
  - there should be no stubs/mocks, but fixtures are permitted; thus a hard requirement on the ability to setup all external deps & infrastructure stack to the specific state required to test the subsystem sucessfully
  - in general, the tests should be as close to prod as possible
- e2e test: the task of performing tests from the end users perspective; in the same way a user would
  - ui tests: testing an applications UI interface through automated tools
  - acceptance tests: ensures the requirements of a specification/contract/etc are met; only place manual QA tests still win over automation
  - regression tests: testing to validate new features havent broken exiting features; performed at all levels of tests (unit, integration, e2e (most reliable))
- security testing: performed to look for flaws in code and runtime to prevent compromises and leaking of data in production
  - static security tests: look for known patterns/libraries with vulnerabilities via static analysis tools
  - dynamic security tests: test actual attack payloads, but requires the system to be running
- blackbox tests: focses on the object state
- domain tests: testing business logic
- functional tests: multiple unit tests working together in order to test a specific functionality
- monitoring tests: testing continuously at regular intervals
- performance testing: e.g. soak tests, spike tests, step tests,
- smoke test: testing the environment
- white box tests: focuses on the objects behavior
- regression tests: testing old functionality, to ensure new changes are not breaking existing functionality
  - performed at build time on a single unit of code/artifact without use of external deps/deployment
- contract test: a test at the boundary of an external service verifying that it meets the contract expected by a consuming service
  - Whenever some consumer couples to the interface of a component to make use of its behaviour, a contract is formed between them. This contract consists of expectations of input and output data structures, side effects and performance and concurrency characteristics.
- component tests: limits the scope of the exercised software to a portion of the system under test, manipulating the system through internal code interfaces and using test doubles to isolate the code under test from other components
  - By instantiating the full microservice in-memory using in-memory test doubles and datastores it is possible to write component tests that do not touch the network whatsoever.
- functional tests: tests of a specific function within your application, requiring some type of user input, and returning some type of results.

  - Typical tests can be for login, registration to the site, user account operations, account settings changes, complex data retrieval operations, among others. Function tests typically mirror the user-scenarios used to specify the features and design or your application.

- end to end tests: verifies that a system meets external requirements and achieves its goals, testing the entire system, from end to end, irrespective of the component architecture in use.
  - the system is treated as a black box and the tests exercise as much of the fully deployed system as possible, manipulating it through public interfaces such as GUIs and service APIs.
  - Write as few end-to-end tests as possible
  - Focus on personas and user journeys
  - Rely on infrastructure-as-code for repeatability
  - Make tests data-independent

### [page objects](https://www.thoughtworks.com/insights/blog/using-page-objects-overcome-protractors-shortcomings)

- Page Object is a Design Pattern which has become popular in test automation for enhancing test maintenance and reducing code duplication.
  - A page object is an object-oriented class that serves as an interface to a page of your AUT.
  - The tests then use the methods of this page object class whenever they need to interact with that page of the UI.
  - The benefit is that if the UI changes for the page, the tests themselves don’t need to change, only the code within the page object needs to change. Subsequently all changes to support that new UI are located in one place.
- benefits
  1. There is a clean separation between test code and page specific code such as locators (or their use if you’re using a UI Map) and layout.
  2. There is a single repository for the services or operations offered by the page rather than having these services scattered throughout the tests.
