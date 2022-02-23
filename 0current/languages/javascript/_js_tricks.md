# javascript tricks

- and other things you may not use everyday

## long list of stuff

- double not operator: fastest way to convert anything to positive number whole number | 0
- doesnt work with negative numbers tho

```js
~~"Anything";
```

- using call and apply to control 'this' and 'arguments' inside a function

  ```js
  functionName.call(someOBject, someParameter);
  // someObject becomes the value of 'this' inside of the function
  // someParameter becomes the parameter passed to the function

  functionName.apply(someObject, ["someArrayElement"]);
  // same as the above, only the function parameter is passed as an array
  ```

- method determines whether two values are the same value.

```js
  Object.is(value1, value2):
```
