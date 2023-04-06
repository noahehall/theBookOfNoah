/*

  `myFunction(...iterableObj);`
  `[...iterableObj, 4, 5, 6]`

  - arrays
    ```
      [a, b, ...rest] = [1, 2, 3, 4, 5];
      console.log(a); // 1
      console.log(b); // 2
      console.log(rest); // [3, 4, 5]
    ```
  - objects
    ```
      ({a, b} = {a:1, b:2});
      console.log(a); // 1
      console.log(b); // 2
    ```
  - assign new var names:
    ```
      var o = {p: 42, q: true};
      var {p: foo, q: bar} = o;
      console.log(foo); // 42
      console.log(bar); // true
    ```
  - Fail-soft destructuring
    ```
      var [a] = [];
      a === undefined;
    ```






























*/
