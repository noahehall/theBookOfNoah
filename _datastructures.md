# [bookmark](https://github.com/noahehall/ebooks/blob/master/Data%20Structures%20and%20Algorithms%20with%20JavaScript.pdf)
  - page 29 row loop

# Basics
  - [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
  - [control flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
  - [loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
  - [scopes and closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
  - [recursion](https://msdn.microsoft.com/en-us/library/wwbyhkx4(v=vs.94).aspx)
  - [prototypical inheritcance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - [exploring es6 classes](http://exploringjs.com/es6/ch_classes.html)
  - [babel class properties](https://babeljs.io/docs/plugins/transform-class-properties/)


# function types
  - accessor functions: access elements of the data structure, e.g. searching
  - mutator functions: modify the contents of the data structure without referencing the individual elements, e.g. adding / removing / sorting
  - iterator functions: apply a function to each element of the datastructure,

# Datastructures
## [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - linear collection of indexed elements
  - multidimensional arrays:
    - 2d: structured like a spreadsheet with rows and columns
      + create:
        1. create an array
        2. each element in the array should also be an array
      + processing  
        - mostly using nested loops
          1. columnar processing: think of the array holding grades for students, each element is a student array containing N grades per student
            - outer: moves through rows
            - inner: moves through columns
          2. row-wise processing: think of the array holding grades for students, each element is a student array containin gN grades per student
            - outer: moves through columns
            - inner: moves through rows
