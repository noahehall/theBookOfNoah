/*

## TRICKS

- check if someVar is an Array (or anything, e.g. Number, or Object)
  `if(someVar && Array === someVar.constructor)``
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
- check if variable exists
  `if (bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));`
- specifically check for null
  `if(variable === null && typeof variable === "object")`
- convert function arguments to array

```js
    function () {
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
          var args = Array.prototype.slice.call(arguments);
    }
```

- check if properties exists and is owned by object
  `	if (thisObject.hasOwnProperty('thisPropertyName'));`
- check if property exist and is owned by object or the objects prototype
  `(if 'thisPropertyName' in thisObject) return true;`

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
*/
