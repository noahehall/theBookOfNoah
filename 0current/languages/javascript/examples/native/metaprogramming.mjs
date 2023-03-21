/*

- code:

  - create a symbol:
    `const blah = Symbol();`
    `const blah1 = Symbol('with a description for console logging')`
  - symbols as object properties

    ```js
      const blah = Symbol('used as object key');
      const object = {};
      object[blah] = 'Something else';
      <!-- **note** -->
        object.blah === 'undefined' // doesnt work
        object[blah] === 'Something else'; // only works if you have reference to the symbol

    ```

  - see an object's symbols: `Object.getOwnPropertySymbols:`



### Proxy

- var p = new Proxy(target, handler); The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
- types of proxies:

  1. No-op forwarding proxy: using a native JavaScript object to which our proxy will forward all operations that are applied to it.

     ```js
     var target = {};
     var p = new Proxy(target, {});
     p.a = 37; // operation forwarded to the target
     console.log(target.a); // 37. The operation has been properly forwarded
     ```

  2. Validation proxy: easily validate the passed value for an object. This example uses the set handler.

     ```js
     let validator = {
       set: function (obj, prop, value) {
         if (prop === "age") {
           if (!Number.isInteger(value)) {
             throw new TypeError("The age is not an integer");
           }
           if (value > 200) {
             throw new RangeError("The age seems invalid");
           }
         }

         // The default behavior to store the value
         obj[prop] = value;

         // Indicate success
         return true;
       },
     };

     let person = new Proxy({}, validator);

     person.age = 100;
     console.log(person.age); // 100
     person.age = "young"; // Throws an exception
     person.age = 300; // Throws an exception
     ```

*/
