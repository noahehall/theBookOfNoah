# [bookmark](https://github.com/noahehall/ebooks/blob/master/Data%20Structures%20and%20Algorithms%20with%20JavaScript.pdf)
  - page 36 lists

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
## terminology
  - [ADT](https://en.wikipedia.org/wiki/Abstract_data_type): abstract data type, an abstract data type (ADT) is a mathematical model for data types where a data type is defined by its behavior (semantics) from the point of view of a user of the data, specifically in terms of possible values, possible operations on data of this type, and the behavior of these operations. This contrasts with data structures, which are concrete representations of data, and are the point of view of an implementer, not a user.
    1. properties: describe the data structure by its available properties, e.g. 'length'
    2. functions: describe the data structure by its behavior, e.g. 'add'

## [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - linear collection of indexed 1
  - multidimensional arrays:
    - 2d: structured like a spreadsheet with rows and columns
      + create:
        1. create an array
        2. each element in the array should also be an array
      + processing  
        1. think of the array holding grades for students, each row is a student, and each element in each row is a grade for testN
        2. columnar processing: statistics related to grades across students, e.g. what is the average grade for test1 for all students?
        3. row-wise processing: statistics related to student grades, e.g. what is the average grade for student1 for all tests?
    - Jagged Array: a multi dimensional array with the sub-arrays may have a different number of elements
## Lists
  - an ordered sequence of data
    +  only useful when you dont have to perform searches or keep them sorted (there are other datastructures better suited)
  - List ADT
    1. listSize (property) Number of elements in list, is returned when you request list.length
    2. pos (property) Current position in list
    3. length (property) Returns the number of elements in list (listSize)
    4. dataStore (property) all elements in the list
    4. clear (function) Clears all elements from list
    5. toString (function) Returns string representation of list
    6. getElement(function) Returns element at current position
    7. insert (function) Inserts new element after existing element
    8. append (function) Adds new element to end of list
    9. remove (function) Removes element from list
    10. front (function) Sets current position to first element of list
    11. end (function) Sets current position to last element of list
    12. prev (function) Moves current position back one element
    13. next (function) Moves current position forward one element
    14. currPos (function) Returns the current position in list
    15. moveTo (function) Moves the current position to specified position
