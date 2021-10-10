# [bookmark](https://github.com/noahehall/ebooks/blob/master/Data%20Structures%20and%20Algorithms%20with%20JavaScript.pdf)
  - page 131 lists
# TODOs
  - add 'radix sort' to algorithms, see Queue implementation

# Basics
  - [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
  - [control flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
  - [loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
  - [scopes and closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
  - [recursion](https://msdn.microsoft.com/en-us/library/wwbyhkx4(v=vs.94).aspx)
  - [prototypical inheritcance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - [exploring es6 classes](http://exploringjs.com/es6/ch_classes.html)
  - [babel class properties](https://babeljs.io/docs/plugins/transform-class-properties/)
  - [es6 in depth](https://hacks.mozilla.org/category/es6-in-depth/)
  - [class mixins](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)

# function types
  - accessor functions: access elements of the data structure, e.g. searching
  - mutator functions: modify the contents of the data structure without referencing the individual elements, e.g. adding / removing / sorting
  - iterator functions: apply a function to each element of the datastructure,

# Datastructures
## When to use what [todo]
  1. Array
  2. List
    - regular List:
    - Stack:

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
  - Example List ADT
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
### Linked List
  - a collection of objects called nodes
    1. each node is linked to a successor node in the list using an object reference
      - the reference to another node is a called a *link*
      - all nodes are referenced by their relationship to other nodes in the linked list
      - moving through a linked list involves following the links of the list from the beginning node to the end node (not including the header node)
      - the end of a linked list is indicated by pointing to a *null* node
  - can be used in almost every situation where a one-dimensional array is used
    + except when you need random access to the elements, then an array is still required
  - Linked List ADT
    + properties
      1. head: denotes the beginning of the list
    + behavior
      1. find: find a specific node
      2. insert: insert a node at a specific position and updating links
      3. remove: removing and return a node, and updating links
      4. display: return all nodes
      5. findlast: return the last node
      6. findfirst: find the first node
      7. find previous: find the previous node
      8. find next: find the next node
### Doubly Linked List
  - same as Linked List, with the additional behavior of traversing the list from last to first
### Circularly Linked Lists
  - same as Linked List, with the additional behavior of having its head node's next property point back to itself
    + thus, every new node initially has its next property pointing to the head of the list,
      - i.e. the last node in the list will always point back to the head of the list
### Stack
  - list like structure where new elements can only be added/removed from the top of the stack, i.e. LIFO
  - used for:
    1. expression evaluation and handling function calls
    2. converting a number from on base to another
    3. determine whether a given string is a palindrome
    4. implementing recursive procedures

  - basics:
    1. last in first out
    2. only the element at the top of the stack can be accessed
      - to get an element at the bottom of the stack, you have to dispose of all other elements first
  - Example Stack ADT
    + properties
      - length: number of elements in stack
      - top: the current position (can sync with length) of the element at the top
      - empty: boolean
    + behavior
      - push: add element to top of stack and increment top
      - pop: remove and return element to top of stack and decrement top
      - peek: return element at top of stack
      - clear: remove all ements and reset top
### Queue
  - Type of list where data are inserted at the end and are removed from the front, i.e. FIFO
    + used to store data in the order in which they occur, as opposed to a stack (the last piece of data entered is the first element used for processing)
  - used for:
    1. any FIFO processing
    2. order processes submitting to an operating system
    3. simulation applications that model scenarios e.g. standing in line
  - Queue ADT
    + properties
      - empty: if the queue is empty
    + behavior
      - enqueue: pushing an element to the end
      - dequeue: shifting an element from the beginning
      - peek: returns element at front of queue, without removing it from queue
      - display: returns all elements in queue
### Priority Queue
  - a Queue where elements are removed from the queue based on a priority constraint, e.g. an emergency room that prioritizes patients by severity of their needs
  - Priority Queue ADT
    + properties
    + behavior
      1. dequeue: removes element with the highest priority

## Dictionary
  - stores *key-value* pairs, e.g. the native javascript Object
  - Dictionary ADT
    + properties
      1. size: number of elements in the dictionary
    + behavior
      1. add: add a new key value pair
      2. find: and return an element by its key
      3. displayObject: returns the data store as a javascript object
      4. sortedValues: returns an array of values sorted by key
      5. remove: an element from the dictionary
      6. clear: all elements from the dictionary

## Hash table
  - common technique for storing data in such a way that the data can be inserted and retrieved very quickly
    1. each data element is stored in a fixed size array based on an associated data element called the key
    2. to store a piece of data in a hash table, the key is mapped into a number in the range of 0 through the hash table size, using a hash function
      - idealy the hash function stores each key in its own array element, however because there are al imited number of theoretical array elements in JS, we distribute the keys as evenly as possible among the elements of the array
    3. the array size should be a prime number
  - performs poorly with operations involving searching (use a binary search tree instead)
  - collision: when the hash function creates a duplicate key
    + handling collisions:
      1. modify the prime/constant on collisions
        - use this if you're using a dynamically sized array, e.g. a javascript array
      2. separate chaining: create an array at the hash value, and push the key into the array, thus if two keys generate the same hash value, you can store both keys in the array
        - use this if the size of the array can be up to half the number of elements to be stored
      3. linear probing: i.e. open-addressing hashing:
        - when there is a collision, look to see if the next element of the hash table is empty, if so, use it
        - use this if the size of the array can be twice the size of the number of elements to be stored
  - hash function: creates a number based on a key, i.e. key => hash function => hash value: array[hasvalue] = key
    + hash functions should be determined by the data type of the key
    + integers
      1. return the key modulo the size of the array (array size should be prime number)
    + strings
      1. sum the ASCII value of the letters in the key, the hash value is then that sum modulo the array size
  - Hash Table ADT
    + properties
    + behavior
      1. put: add a key and value to the table
      2. hash function: generates a hash value based on key
      3. getValue: get the value associated with some key

## Set
  - collection of unordered unique elements (called members)
    - empty set: a set with no members
    - universe: the set of all possible members
    - subset: a set is a subset of another set if all the members of the subset are inside the other set
    - two sets are equal if they contain exactly the same members
  - Set ADT
    + properties
    + behavior
      1. union: a new st is obtained by combining the members of one set with the members of another set
      2. intersection: a new set is obtained by adding all the members of one set that also existin in a second set
      3. difference: a new set is obtained by adding all the members of one set except those that also exist in a second set
      4. all of the native JS set methods
      5. subset: returns true if set A is a subset of B

## Trees
  - nonlinear datstructure used to store data in a hierarchical manner
    + a tree is made up of a set of nodes connected by edges
    + root node: the top node of a tree
    + parent node: a node with one/more children
    + leaf node: a node with 0 children
    + edge: a connection between two nodes
    + path: the edges you travel to get from a parent node to a child node
    + tree traversal: visitin gall the nodes in a tree in some particular order
    + level: a level in the tree hierarchy, the root node is at level 0
      - a node at any level is considered the root of that subtree
    + tree depth: the number of levels in the tree
    + key: the value of a node
  - useful for storing:
    1. files in a file system
    2. sorted lists of data

### Binary Search Trees
  - a tree where a parent node can contain no more than 2 child nodes and the left child node is lesser than the parent, and the right child node is greater than the parent
  - Binary Search Tree ADT
    + properties
    + behavior
      1. add: a new node
      2. inOrder: return an array of node values in tree order
