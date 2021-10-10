# links
  - [ramdajs introduction](http://buzzdecafe.github.io/code/2014/05/16/introducing-ramda)
  - [ramda home](https://ramdajs.com/)
  - [docs home](https://ramdajs.com/docs/#)
  - [ramda cookbook](https://github.com/ramda/ramda/wiki/Cookbook)


# background
  - a library designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data.

## core principles
  - immutability
  - side-effect free functions
  - ramda functions are automatically curried
    - the data to be operated on is generally supplied last
    - curry functions by not supplying the last param
  - basic ramda
    - structures are plain JS objects
    - collections are JS arrays
    - functions are objects with parameters (i.e. JS functions)