TO READ
  https://github.com/cucumber/cucumber/wiki/Tags
  https://github.com/cucumber/cucumber/wiki/Step-Definitions
  https://github.com/cucumber/cucumber-js/tree/master/docs
  https://github.com/cucumber/cucumber/wiki/Step-Argument-Transforms
  https://github.com/aslakhellesoy/cucumber-rails-test/blob/master/features/manage_lorries.feature
  https://github.com/aslakhellesoy/cucumber-rails-test/blob/master/features/step_definitions/lorry_steps.rb
EXAMPLES
  https://github.com/cucumber/cucumber-js/blob/master/docs/nodejs_example.md

FINISHED
  https://github.com/cucumber/cucumber/wiki/Scenario-Outlines
  https://github.com/cucumber/cucumber/wiki/Background
  https://github.com/cucumber/cucumber/wiki/Given-When-Then
  https://github.com/cucumber/cucumber/wiki/Gherkin
  https://github.com/cucumber/cucumber/wiki/Feature-Introduction

What is it?
  business readable, domain specific language that lets you describe software’s behaviour without detailing how that behaviour is implemented.
    //https://github.com/cucumber/cucumber/wiki/Gherkin
   serves two purposes: documentation and automated tests. The third is a bonus feature

directory structure:
  blah/features/filled with .feature files
    // https://github.com/cucumber/cucumber-js/tree/master/features
        /step_definitions/filled with tests
          // https://github.com/cucumber/cucumber-js/tree/master/features/step_definitions

VOCAB:
  features: describe the business value, is not parsed by cucumber, contains scenario, background, scenario outline, examples
    - the text after the feature, but before the first scenario is all commentary and has no impact on the actual gherkin - it merely describes the feature in detail
    Background: add context to the scenarios in a single feature
      - is run before each scenario but after any of the before hooks
      - takes the same syntax as scenarios
      - best practices:
        1. dont use background to setup complicated state
        2. keep it short
    scenarios: arbitrary amount of steps required to provide the feature
      steps: Given... When... Then... But.. And...
        // each is a different step
        // cucumber treats them all the same, but we should use them for their context
        Given: put the system in a known state before the user/external system starts interacting with the system (in the when steps)
          - avoid talking about user interaction in givens
          - if creating use cases, givens would be your preconditions
          - e.g. create records in db, log in a user, etc.
        When: describe the key action the user performs (i.e. state transition)
          - e.g.:  interact with a page/element, any action
        Then: observe outcomes related to the business value/benefit in the feature description
          - you should only verify outcomess that are observable to the user/external system (databases are not)
          - e.g. verification, assertions, etc.
        And/But: Multiple givens, whens, thens, can be separated with And/But
        Given one thing..
          And ..another thing
        When i do this...
          And I do that...
        Then verify this...
          But this shouldnt happen...
      Scenario Outlines: insert variables into Scenario Steps (GWTs) via a template so you dont have to repeat a scenario 'for' testing multiple values
        - keywords: Scenario Outline, Examples with tables, and <columnName> variable
        - step definitions will never have to match a placeholder. They will need to match the values that will replace the placeholder
        - example
          Scenario Outline: eating
            Given there are <start> cucumbers
            When I eat <eat> cucumbers
            Then I should have <left> cucumbers

            Examples:
              | start | eat | left |
              |  12   |  5  |  7   |
              |  20   |  5  |  15  |
      Hooks: used 'for' setup and teardown of the environment before and after each scenario
        - multiple before hooks are executed in the order they are defined
        - multiple after hooks are executed in the reverse order they are defined
        - examples:
          https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md
          // Synchronous
          this.Before(function (scenario) {...}
          // Asynchronous Callback
          this.Before(function (scenario, callback) {...}
          // Asynchronous Promise
          this.After(function (scenario) {...}
        - examples with tags:
          this.Before("@foo", function (scenario) {...}
            // This hook will be executed before scenarios tagged with @foo
          this.Before({tags: ["@foo", "@bar"]}, function (scenario) {
            // This hook will be executed before scenarios tagged with @foo AND @bar
          this.Before({tags: ["@foo,@bar"]}, function (scenario) {
            // This hook will be execu
  step definitions: glue between features written in gherkin and the actual system under test. regex match against scenario steps in .feature files and this.given/when/then in step definitions
    - example: https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md
    -
    World: an isolated context (i.e. the 'this' variable) 'for' each scenario that is available in steps and hooks.
      - can be overridden, e.g.
        var seleniumWebdriver = require('selenium-webdriver');

        function CustomWorld() {
          this.driver = new seleniumWebdriver.Builder()
            .forBrowser('firefox')
            .build();

          // Returns a promise that resolves to the element
          this.waitForElement = function(locator) {
            var condition = seleniumWebdriver.until.elementLocated(locator);
            return this.driver.wait(condition)
          }
        }

        module.exports = function() {
          this.World = CustomWorld;
        };

syntax: line-oriented language that uses indentation to define structure. Line endings terminate statements (eg, steps). Either spaces or tabs may be used 'for' indentation (but spaces are more portable). Most lines start with a keyword.

  # this is a comment

implementation:
  https://chimp.readme.io/v1.0/docs/tutorial
  /features: directory container .feature files
    .feature: gherkin file describing a single feature with an arbitrary amount of scenarios each containing an arbitrary amount of steps
    /support: directory holding step definitions
      .*.steps.js: modules containing tests mapped to .feature scenarios
        - keywords
          pending() // this task is not yet done
        - example
          module.exports = function() {
            this.Given(/^I have visited Google$/, function () {...}
            this.When(/^I search for "([^"]*)"$/, function (arg1) {...}
            this.Then(/^I see "([^"]*)"$/, function (arg1) {...}
          }

EXAMPLES:
  //basic: single scenario 4 steps
  Feature: Serve coffee
    Coffee should not be served until paid for
    Coffee should not be served until the button has been pressed
    If there is no coffee left then money should be refunded

  Scenario: Buy last coffee
    Given there are 1 coffees left in the machine
    And I have deposited 1$
    When I press the coffee button
    Then I should be served a coffee
