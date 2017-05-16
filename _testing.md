# links
- [testing react components](https://medium.freecodecamp.com/the-right-way-to-test-react-components-548a4736ab22)
- [testing microservices](https://martinfowler.com/articles/microservice-testing/#agenda)
- [monkey testing](https://en.wikipedia.org/wiki/Monkey_testing)
- [fuzzing/fuzz testing](https://en.wikipedia.org/wiki/Fuzzing)
- [software testing](https://en.wikipedia.org/wiki/Software_testing)
- [bunch of definitions](http://xunitpatterns.com/Mocks,%20Fakes,%20Stubs%20and%20Dummies.html)




# Methodologies:
  - TDD: test driven development
    - tests are written before code is developed
  - BDD: behavior driven development:
    - implementing an application by describing its behavior from the perspective of its stakeholders
    - describes a cycle of interactions with well-defined inputs, resulting in the delivery of working, tested software

# vocab
  - code coverage: tool that determines how much of your code is covered by unit tests. it also shows you what is and isnt being covered
  - contract:  defines the expected behavior of your component and what assumptions are reasonable to have about its usage.

# tools:
  - cucumber: acceptance testing framework which enables test that are readable by non-programmers
  - gherkin: syntax in which to write cucmber tests
  - mocha: bdd test framework 'for' developers
  - chai: assertion library

# 'type' of tests
  - Technology Facing: written and maintained by developers
    - units tests: Unit Tests are functions and classes designed to prove the code performs within a set of guidelines
    - integration tests: collect modules together and test them as a subsystem in order to verify that they collaborate as intended to achieve some larger piece of behaviour.
      + When writing automated tests of the modules which interact with external components, the goal is to verify that the module can communicate sufficiently rather than to acceptance test the external component.
      + tests of this type should aim to cover basic success and error paths through the integration module.
    - contract test: a test at the boundary of an external service verifying that it meets the contract expected by a consuming service
      + Whenever some consumer couples to the interface of a component to make use of its behaviour, a contract is formed between them. This contract consists of expectations of input and output data structures, side effects and performance and concurrency characteristics.
    - component tests: limits the scope of the exercised software to a portion of the system under test, manipulating the system through internal code interfaces and using test doubles to isolate the code under test from other components
      + By instantiating the full microservice in-memory using in-memory test doubles and datastores it is possible to write component tests that do not touch the network whatsoever.
    - System/deployment tests:
  - Business Facing
    - functional tests: multiple unit tests working together in order to test a specific functionality
    - acceptance tests:
      - an acceptance test is an automated version of a user performing some task in your application.
      - Acceptance tests are the tests of highest level. Generally this kind of tests give us knowledge about how application works from user point of view.
      - ensures that the acceptance criteria 'for' a story are met
      - domains: functionality, capacity, usability, security, modifiability, availability
      - after incorrect fill of the login form,
      - where user will be redirected after correct fill the login form.
    - end to end tests: verifies that a system meets external requirements and achieves its goals, testing the entire system, from end to end,  irrespective of the component architecture in use.
      + the system is treated as a black box and the tests exercise as much of the fully deployed system as possible, manipulating it through public interfaces such as GUIs and service APIs.
      + Write as few end-to-end tests as possible
      + Focus on personas and user journeys
      + Rely on infrastructure-as-code for repeatability
      + Make tests data-independent
  - Manual tests:
  - domain tests: testing business logic
  - UI Tests: the task of performing tests on the user 'interface'
  - blackbox tests: focses on the object state
  - white box tests: focuses on the objects behavior
  - mocking: allows you test behavior
  - smoke test: testing the environment
  - monitoring tests: testing continuously at regular intervals
  - regression tests: testing old functionality, to ensure new changes are not breaking existing functionality

# test components
  - objects: entities that send messages to each other
    - public messages: represented as public functions that others can call
    - private messages: represent private functions that only the object can call on itself
    - all public and private methods accessible through public methods represent the behavior of an object
  - dummy objects: objects that the System Under Test (SUT) depends on, but are never actually used.
    e.g.
    - argument passed to another object
    - object returned from one object to be sent to another object
    - any object that is required to run/test some behavior, but is not actually used (e.g. a required parameter) and must resemble a real object
  - test stubs: an object to control the indirect input of the tested code. setting up state
    - Test stubs are functions (spies) with pre-programmed behavior. They support the full test spy API in addition to methods which can be used to alter the stub’s behavior.
    - Control a method’s behavior from a test to force the code down a specific path. Examples include forcing a method to throw an error in order to test error handling.
    - When you want to prevent a specific method from being called directly (possibly because it triggers undesired behavior, such as a XMLHttpRequest or similar).
  - test spies:
    - A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) 'for' all its calls. A test spy can be an anonymous function or it can wrap an existing function.
    - a test spy can also spy on existing functions. When doing so, the original function will behave just as normal (including when used as a constructor) but you will have access to data about all calls.
  - test mocks: style of testing different levels of faking the behavior of an object
  - test fakes


# definitions:
  - Specifications: what the program is suppose to do
  - component specifications: communicate the visual design
      executable specifications (test component specifications)
  - value specifications: communicate what value the project provides
      1. capabilities
      2. feature sets: (groups of features)
      3. specific features
      4. scenarios
  - executable specifications (test value specifications);
  - visual design
  - solution design: what you will use to solve the problem
  - domain model
  - tests: the specifications executed against actual code

# testing triangle:
  3. End to end tests (tens)
  2. service tests (hundreds)
  1. unit tests (thousands)

# react testing
  - component contract: expected behavior of the component  
    + what it renders (maybe nothing)
    + The props the component receives
    + The state the component holds (if any)
    + What the component does when the user interacts with it (via clicking, dragging, keyboard input, etc)
    + The context the component is rendered in
    + What the component does when you call methods on its instance (public ref interface)
    + Side effects that occur as part of the component lifecycle (componentDidMount, componentWillUnmount, etc)
    + look for ternaries, if statements, and switch statements as our clues. This will help us find variations in its contract.
    + You can also find some constraints of the contract that are always true:
  - is it worth testing?
    + Will the test have to duplicate exactly the application code? This will make it brittle.
    + Will making assertions in the test duplicate any behavior that is already covered by (and the responsibility of) library code?
    + From an outsider’s perspective, is this detail important, or is it only an internal concern? Can the effect of this internal detail be described using only the component’s public API?
  - testing strategy
    + Find your Component Contract first
    + Decide which constraints are worth testing and which aren’t
    + Prop types are not worth testing
    + Inline styles are usually not worth testing
    + The components you render and what props you give them are important to test
    + Don’t test things that are not the concern of your component


# NEED TO ADD
  http://webdriver.io/


NOTES ON STRUCTURE
  the features are not mapped to unit tests
  the features aid in the creation of unit tests
  @watch to IT block statements and as scenario decorators

  test block (e.g. it)
    1. clear state: clear environment from previous state
    2. setup: setup environment
    3. execute: run some code saved result to var
    4. verify: assert #3 ===|!== expected results

  scenarios| value specification
    given
    when
    then

  jira tickets
    as a ....
    i want ....
    so that ....

  unknown when to use
    arrange > act > assert
WORKFLOW
  use value specs to create the domain
    given
    when
    then
  start with domain (but do for each of domain forks) and create:
    create feature file with scenarios
      feature:
        IN ORDER TO
        AS
        I WANT

        scenario 1
          given
          when
          then
        scenario 2:
          etc.
    create step definitions
      given
      when
      then
    model your domain and create a domain model with factories, classes, services, and specs

  create classes & spec files (i.e. components and there tests)


# cucumber:
  - Cucumber is a tool 'for' running automated tests written in plain language.
  features: tests/specifications/blah.feature
    in order to do something I want
    as a person
    I want to get a bunch of money
    secenario: find a burrito
      given: i have 5 bucks
      when: when I walk in the store
      then: I buy a burrito

    concepts are created via design
    value specifications: capture busines domain
    domain model: describes state
      entities
      relationships
      state
    visual design: designer
    solution design:
    component specifications

  support: tests/support/world.js
    -Support files let you setup the environment in which steps will be run, and define step definitions.
      // features/support/world.js
      var zombie = require('zombie');
      function World() {
        this.browser = new zombie(); // this.browser will be available in step definitions

        this.visit = function (url, callback) {
          this.browser.visit(url, callback);
        };
      }

      module.exports = function() {
        this.World = World;
      };

  step.definitions
    -the glue between features written in Gherkin and the actual system under test. They are written in JavaScript.
    -All step definitions will run with this set to what is known as the World in Cucumber.
    -A new instance of World is created before each scenario.
    -this is an object holding important properties like the Given(), When() and Then() functions.
    -Another notable property is World; it contains a default World constructor that can be either extended or replaced.

    // features/step_definitions/my_step_definitions.js
    module.exports = function () {
      this.Given(/^I am on the Cucumber.js GitHub repository$/, function (callback) {
        // Express the regexp above with the code you wish you had.
        // `this` is set to a World instance.
        // i.e. you may use this.browser to execute the step:

        this.visit('https://github.com/cucumber/cucumber-js', callback);

        // The callback is passed to visit() so that when the job's finished, the next step can
        // be executed by Cucumber.
      });

      this.When(/^I go to the README file$/, function (callback) {
        // Express the regexp above with the code you wish you had. Call callback() at the end
        // of the step, or callback(null, 'pending') if the step is not yet implemented:

        callback(null, 'pending');
      });

      this.Then(/^I should see "(.*)" as the page title$/, function (title, callback) {
        // matching groups are passed as parameters to the step definition

        var pageTitle = this.browser.text('title');
        if (title === pageTitle) {
          callback();
        } else {
          callback(new Error("Expected to be on page with title " + title));
        }
      });
    };

always pass around objects, next strings

  BEM: block element BOOOM
    after components have been defined
    define componenent behavior


  organizing features
    capabilities
      feature sets
        features
          scenarios
            steps


modules

  proxy require:
    whenever you see X being imported, replace it with a different require



  fixtures: data you put into a db (e.g.) for testing purposes

  factories: logic to construct aggregates (i.e. objects). a function
  builder: logic to construct a factory with data


  imports:
    domain: all the domain logic goes in here
      hexagonal architecture: 6 sided block
        domain core: core logic
        domain core forks: different aspects of the domain, e.g. Rest API, UI, persistence infrastructure layer, testing, etc.
    infrastructure: stores stuff to the db
    UI: all the components stuff:
    application:  e.g. controller

    google event stores

  src:
  tests
    specifications: each feature requires a .feature file

    meteor
      SRC = root of application
        all immediate children are loaded global scope
        server -> goes to server
        client -> clinet
        imports -> must be required (like npm modules)
codeception:
  http://codeception.com/

PHPUnit
  links:
    quick slides: http://slides.com/johnnorton/be-nice-to-future-you-write-unit-tests-with-phpunit#/0/42
    six part blog series: https://jtreminio.com/2013/03/unit-testing-tutorial-introduction-to-phpunit/

  background
    -name your test file after the file its testing, with Test appended, e.g. someRealFileTest.php
    -name your test classes after the classes they test, with Test, e.g. 'class' HtmlControllerTest extends \PHPUnit_Framework_TestCase
    -test method names should start with test and be dscriptive of what is being tested, e.g. testSomeThingDoesSomethingElse()

  asserts:
     assertEquals($expected, $actual [, $message = '']);
     assertTrue();
     assertFalse();
     assertLessThan();
     assertNull();
     assertRegExp();
     assertArrayHasKey()
     assertClassHasAttribute()
     assertClassHasStaticAttribute()
     assertContains()
     assertContainsOnly()
     assertContainsOnlyInstancesOf()
     assertCount()
     assertEmpty()
     assertEqualXMLStructure()
     assertEquals()
     assertFalse()
     assertFileEquals()
     assertFileExists()
     assertGreaterThan()
     assertGreaterThanOrEqual()
     assertInstanceOf()
     assertInternalType()
     assertJsonFileEqualsJsonFile()
     assertJsonStringEqualsJsonFile()
     assertJsonStringEqualsJsonString()
     assertLessThan()
     assertLessThanOrEqual()
     assertNull()
     assertObjectHasAttribute()
     assertRegExp()
     assertStringMatchesFormat()
     assertStringMatchesFormatFile()
     assertSame()
     assertSelectCount()
     assertSelectEquals()
     assertSelectRegExp()
     assertStringEndsWith()
     assertStringEqualsFile()
     assertStringStartsWith()
     assertTag()
     assertThat()
     assertTrue()
     assertXmlFileEqualsXmlFile()
     assertXmlStringEqualsXmlFile()
     assertXmlStringEqualsXmlString()

  decorators/annotations:
    https://phpunit.de/manual/current/en/appendixes.annotations.html
    examples
      public function test_one(){
        //test some stuff
      }

      /**
       * @depends test_one
       */
      public function test_two(){
        //test other stuff if test_one passes
      }

      @small|medium|large
        //fail test if it takes longer than it should
      @requires extension someExtensionName
        //will skip the test if someExtensionName is not found
    all annotations
       @author @after @afterClass @backupGlobals @backupStaticAttributes @before @beforeClass @codeCoverageIgnore* @covers @coversDefaultClass @coversNothing @dataProvider @depends @expectedException @expectedExceptionCode @expectedExceptionMessage @group @large @medium @preserveGlobalState @requires @runTestsInSeparateProcesses @runInSeparateProcess @small @test @testdox @ticket @uses

  mocking:
    -test doubles: automatically generate nn object that implements Implements all the behavior of an interface/class.
      https://phpunit.de/manual/current/en/test-doubles.html
      .all methods return null without calling the original method
      $this->createMock($type) //$type e.g. 'someClassName'
        .immediately returns  a test double object 'for' the specified type
        .__construct() and __clone() of original $type are not executed
        .arguments passed to a method will not be cloned

      $this->getMockBuilder($type) //$type e.g. 'someInterfaceName'
        .use when you need to customize the test double generation
  other features:
    public function setUp() {
      if(somethingIsTrue){
        $this->markTestSkipped('we skipped this test because...')
      }
    }

  running tests
    specific test: $phpunit some/dir/some/test.php
    all tests: $phpunit some/dir/all
      -files must be named ****Test.php

  sample unit test
    -sample test file with 'class' and function
      <?php

      namespace phpUnitTutorial\Test;

      class StupidTest extends \PHPUnit_Framework_TestCase
      {
        public function testTrueIsTrue()
        {
            $foo = true;
            $this->assertTrue($foo);
        }
      }

    the code to test
      class Unicorns {
        private $count = 8;

        public function getCount() {
            return $this->count;
        }

        public function steal($number) {
            $this->count -= $number;
        }
      }
    -the actual test
      class YourTestName extends PHPUnit_Framework_TestCase {
        public function setUp() {
          //run this code before each test
        }

        public function tearDown() {
          //this runs after every test
        }

        public function test_something() {
          //this is a test
        }

        public function test_something_else() {
          //this is a different test
        }

      }
