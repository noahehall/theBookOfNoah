# background
  - syntax: line-oriented language that uses indentation to define structure. Line endings terminate statements (eg, steps). Either spaces or tabs may be used indentation (but spaces are more portable). Most lines start with a keyword.

# implementation:
  https://chimp.readme.io/v1.0/docs/tutorial
  
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
