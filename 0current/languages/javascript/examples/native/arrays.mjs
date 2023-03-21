import { logIt } from "../logit.mjs";

logIt(
  "array.from",
  Array.from([1, 2, 3], (x) => x + x)
);

/*

```js
Array.from(document.querySelectorAll("*")); // Returns a real Array
Array.of(1, 2, 3); // Similar to new Array(...), but without special one-arg behavior
```

- Array.from(arrayLike[, mapFn[, thisArg]]): method creates a new Array instance from an array-like or iterable object.

  ```js

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
  */
