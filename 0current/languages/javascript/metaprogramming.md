# metaprogramming

## Symbols

- reflection within implementation - you sprinkle them on your existing classes and objects to change the behaviour.
- use cases:
  - not iterable over
  - not fetched using the already existing Reflection tools
  - guaranteed not to conflict with other properties in the object!
  - If you create a symbol (var mysym = Symbol()) it creates a completely new value inside the JavaScript engine.
    - If you don’t have the reference for the Symbol, you just can’t use it.
    - This also means two symbols will never equal the same value, even if they have the same description.
  - Symbol.for(). This method creates a Symbol in a “global Symbol registry”. Small aside: this registry is also cross-realm, meaning a Symbol from an iframe or service worker will be the same as one generated from your existing frame:
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

### Reflect

- all about Reflection through introspection - used to discover very low level information about your code.

### Proxy

- Reflection through intercession - wrapping objects and intercepting their behaviours through traps.

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
