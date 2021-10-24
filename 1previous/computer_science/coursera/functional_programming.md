https://www.lynda.com/JavaScript-tutorials/Closure-returning-functions/585272/634538-4.html

# core concepts
  - keeps functions and data separate
    - as opposed to OOP, which keeps functions and properties within the same class
    - functional programming will store functions and properties in separate objects
      - gives us immediate polymorphism as functions can be reused on any object
  - avoids state change and mutable data
    - preference to create new variables over modifying existing variables
  - treats functions as first-class citizens
    - gives us the ability to pass functions as arguments to other functions, and return functions


# paradigms 
  - assigning functinos to variables
    - purpose 
      - rename functions for readability
      - ability to switch features based on constants, e.g. 
        - if constant DEBUG is true when program starts
          - assign console.log to debug function
          - else assign debug to null function
    - notes
      - function definitions are hoisted
      - functions assigned to variables are not hoisted
      - you can only use them after they've been assigned
      ```js 
        function blah = {}; bloop = blah;
      ```
  - passing functinos as arguments
    - purpose
      - pass actions to other functions
        - create functions that accept a condition and a true and false function
      - abstract away repeated patterns inside a function that can be passed to the code blocks that require the pattern
  - closures and returning functions 
    - function scope:
    