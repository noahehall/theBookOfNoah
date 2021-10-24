# what is snapshot testing

  - a snapshot test system that renders UI components, takes a screenshot and subsequently compares a recorded screenshot with changes made by an engineer.
  - If the screenshots don't match, there are two possibilities: either the change is unexpected or the screenshot can be updated to the new version of the UI component.
  - Jest does not implement pixel-to-pixel snapshot testing, however, jest produces a gold-standard that is the JSON representation of your UI - and tests against that.

# what its not
  - does not replace unit tests
  - does not encode the developers intention, the 'this thing should do that' context is missing


# why its important
  - ideal for testing functional components
  - ideal for testing safe-guarding against changes to:
    - CSS classes
    - inline style
    - properties
    - methods definitions
    - component definitions


# best practices
  - when snapshot tests fail, dont just update it, but inspect the diff and ascertain if this is a valid failure
