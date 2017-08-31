# background
  - syntax: line-oriented language that uses indentation to define structure. Line endings terminate statements (eg, steps). Either spaces or tabs may be used indentation (but spaces are more portable). Most lines start with a keyword.

# API
  - `Feature:` Title (one line describing the story)
    - `In order to`
    - `As an`
    - `I want to`
  - `Background:`: allows you to add some context to all scenarios in a single feature. A Background is like an untitled scenario, containing a number of steps. The difference is when it is run: the background is run before each of your scenarios, but after your BeforeScenario hooks
  - `Scenario:` Title (acceptance criteria of user story)
  - `Scenario Outline:` allows you to specify variables in scenario, given, when, then statements in conjunction to a table to repeatedly execute a scenario with different values
  - `Given` is the pre-condition to put the system into a known state before the user starts interacting with the application
  - `When` describes the key action the user performs
  - `Then` is observing the expected outcome
  - `And|But` can be used after any `Given`, `When`, or `Then`
    - `And`: positive assertion
    - `But`: negative assertion
# implementation:
  https://chimp.readme.io/v1.0/docs/tutorial

# EXAMPLES:
  ```s basic
    Feature: Serve coffee
      Coffee should not be served until paid for
      Coffee should not be served until the button has been pressed
      If there is no coffee left then money should be refunded

    Scenario: Buy last coffee
      Given there are 1 coffees left in the machine
      And I have deposited 1$
      When I press the coffee button
      Then I should be served a coffee
  ```
  ```s feature with extra information
    Feature: Some terse yet descriptive text of what is desired
      In order to realize a named business value
      As an explicit system actor
      I want to gain some beneficial outcome which furthers the goal

    Scenario: Some determinable business situation
      Given some precondition
        And some other precondition
       When some action by the actor
        And some other action
        And yet another action
       Then some testable outcome is achieved
        And something else we can check happens too

    Scenario: A different situation
  ```
  ```s scenario outline
    Scenario Outline: Eating
    Given there are <start> cucumbers
    When I eat <eat> cucumbers
    Then I should have <left> cucumbers

    Examples:
      | start | eat | left |
      |  12   |  5  |  7   |
      |  20   |  5  |  15  |

	```s background
		Feature: Multiple site support

	  Background:
	    Given a global administrator named "Greg"
	    And a blog named "Greg's anti-tax rants"
	    And a customer named "Wilson"
	    And a blog named "Expensive Therapy" owned by "Wilson"

	  Scenario: Wilson posts to his own blog
	    Given I am logged in as Wilson
	    When I try to post to "Expensive Therapy"
	    Then I should see "Your article was published."

	  Scenario: Greg posts to a client's blog
	    Given I am logged in as Greg
	    When I try to post to "Expensive Therapy"
	    Then I should see "Your article was published."
