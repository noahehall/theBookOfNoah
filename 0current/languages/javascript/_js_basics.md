# Javascript

- you'll find better help in the other js files which are more focused

## links

- [prototypical inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation)
- [javascript versions](https://www.w3schools.com/Js/js_versions.asp)

## terms

- versions

  - es1: 1997
  - es2: 1998
  - es3: 1999
  - es4: never releases
  - es5: 2009
  - es6: 2015
  - es7: 2016
    - etc

- prototype: each object has an internal link to another object, its prototype, that provides additional behavior and properties
- prototype chain: the sequence of linked objects from one object's prototype to another, all the way up until you reach the Null object (which does not have a prototype)

- function parameters are variables that are local to the function
- functions can return anything, even other functions
- arguments = an array-like OBJECT containing all of the parameters passed to the function. it is NOT AN Array
- anonymous enclosures

  - wrap the anonymous function in paranthesis
  - then call the function immediately by ending wtih () and send in parameters
  - any variables declared inside this function are local to this function

- function closures: defining a function within a function

- difference with `==`: The == operator applies various coercions to both sides (if they are not the same Type) before testing for equality (resulting in such behavior as "" == false being true), but Object.is doesn't coerce either value.
- difference with `===`: The === operator (and the == operator as well) treats the number values -0 and +0 as equal and treats Number.NaN as not equal to NaN.
- Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be redeclared.
- The function.name property returns the name of the function.
- proxies: Proxies enable creation of objects with the full range of behaviors available to host objects. Can be used 'for' interception, object virtualization, logging/profiling, etc.

## quickies

### array

- Array.from(arrayLike[, mapFn[, thisArg]]): method creates a new Array instance from an array-like or iterable object.

  ```js
  Array.from([1, 2, 3], (x) => x + x);
  // [2, 4, 6]
  ```

- Array.of(element0[, element1[, ...[, elementN]]]): creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

  ```js
    Array.of(7);       // [7]
      # vs constructor
    Array(7);          // [ , , , , , , ]
  ```

- arr.fill(value[, start, end]): fills all the elements of an array from a start index to an end index with a static value.

  ```js
  [1, 2, 3].fill(4); // [4, 4, 4]
  [1, 2, 3].fill(4, 1); // [1, 4, 4]
  ```

- arr.find(callback[, thisArg]): returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

  ```js
  function isBigEnough(element) {
    return element >= 15;
  }
  [12, 5, 8, 130, 44].find(isBigEnough); // 130
  ```

- arr.findIndex(callback[, thisArg]): returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

  ```js
  function isBigEnough(element) {
    return element >= 15;
  }

  [12, 5, 8, 130, 44].findIndex(isBigEnough); // 3 index
  ```

- arr.copyWithin(target[, start, end]): shallow copies part of an array to another location in the same array and returns it, without modifying its size.

  ```s
    ['alpha', 'bravo', 'charlie', 'delta'].copyWithin(2, 0);

    // results in ["alpha", "bravo", "alpha", "bravo"]
  ```

- Array[Symbol.species]: The Array[@@species] accessor property returns the Array constructor.

  ```js
  class MyArray extends Array {
    // Overwrite MyArray species to the parent Array constructor
    static get [Symbol.species]() {
      return Array;
    }
  }
  ```

- arr.entries(): returns a new Array Iterator object that contains the key/value pairs for each index in the array.

  ```s
  var a = ['a', 'b', 'c'];
  var iterator = a.entries();

  // with for..of loop
    for (let e of iterator) {
      console.log(e);
    }
  // manually
    console.log(iterator.next().value); // [0, 'a']
    console.log(iterator.next().value); // [1, 'b']
    console.log(iterator.next().value); // [2, 'c']
  ```

- arr.keys(): returns a new Array Iterator that contains the keys for each index in the array.

  ```s
    var arr = ['a', 'b', 'c'];
    var iterator = arr.keys();

    console.log(iterator.next()); // { value: 0, done: false }
    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }

    var sparseKeys = Object.keys(arr);
    var denseKeys = [...arr.keys()];
    console.log(sparseKeys); // ['0', '2']
    console.log(denseKeys);  // [0, 1, 2]
  ```

### object

- obj.prototype.**proto**: The **proto** property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.
- Object.setPrototypeOf(obj, prototype); sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

  ```js
  var dict = Object.setPrototypeOf({}, null);
  ```

- Object.assign(target, ...sources): used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object. only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters.
- Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.

- sort an object by value

  ```
    Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));
  ```

### map

- new Map([iterable]): The Map object holds key-value pairs. Any value (both objects and primitive values) may be used as either a key or a value.
- answer yes to any of the below, and you can justify using a map
  - Are keys usually unknown until run time? Do you need to look them up dynamically?
  - Do all values have the same type? Can they be used interchangeably?
  - Do you need keys that aren't strings?
  - Are key-value pairs frequently added or removed?
  - Do you have an arbitrary (easily changing) number of key-value pairs?
  - Is the collection iterated?
- properties
  - Map.prototype.size
- methods

### weakmap

- new WeakMap([iterable]): The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.

### set

- new Set([iterable]): The Set object lets you store unique values of any type, whether primitive values or object references.

### weakset

- new WeakSet([iterable]); If an iterable object is passed, all of its elements will be added to the new WeakSet. null is treated as undefined.

### iterators

```
  // In for...of loops, abrupt iteration termination can be caused by break, continue, throw or return. In these cases, the iterator is closed.
    function* foo(){
      yield 1;
      yield 2;
      yield 3;
    };

    for (let o of foo()) {
      console.log(o);
      break; // closes iterator, triggers return
    }
```

### generators

- Generators: a function that can be exited, and entered multiple times

- yield: exit the function and send a value to the caller, and optionally receive a value back
- function.next(): retrieve and send data, executes up to and including the next yield statement
  - for each yield statement you need to call blah.next()
  - returns `{value: 'dataInAndOut', done: true|false}`
    1. value: data sent out from yield, or data sent in through next(someData);
    2. done:
    - false if function is not done, and can be entered again
    - true: if function is done, and should not be re-entered
  - you can access the value directly: `bloop.next().value;``
- use cases

  - asynchornous events
  - timers (e.g. setInterval)

- Generators should not be re-used, even if the for...of loop is terminated early, for example via the break keyword. Upon exiting a loop, the generator is closed and trying to iterate over it again does not yield any further results.

  ```js
  // do this
  function* fibonacci() {
    // a generator function
    let [prev, curr] = [1, 1];
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }
  for (let n of fibonacci()) {
    console.log(n);
    // truncate the sequence at 1000
    if (n >= 1000) {
      break;
    }
  }

  // do not do this
  var gen = (function* () {
    yield 1;
    yield 2;
    yield 3;
  })();
  for (let o of gen) {
    console.log(o);
    break; // Closes iterator
  }

  // The generator should not be re-used, the following does not make sense!
  for (let o of gen) {
    console.log(o); // Never called.
  }
  ```

### parameters/destructuring

- [destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)

```js
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 3 proposal
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```
