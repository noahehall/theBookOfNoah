# Javascript

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

### Proxy

- var p = new Proxy(target, handler); The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
- types of proxies:

  1. No-op forwarding proxy: using a native JavaScript object to which our proxy will forward all operations that are applied to it.

     ```s
       var target = {};
       var p = new Proxy(target, {});
       p.a = 37; // operation forwarded to the target
       console.log(target.a); // 37. The operation has been properly forwarded
     ```

  2. Validation proxy: easily validate the passed value for an object. This example uses the set handler.

     ```s
       let validator = {
         set: function(obj, prop, value) {
           if (prop === 'age') {
             if (!Number.isInteger(value)) {
               throw new TypeError('The age is not an integer');
             }
             if (value > 200) {
               throw new RangeError('The age seems invalid');
             }
           }

           // The default behavior to store the value
           obj[prop] = value;

           // Indicate success
           return true;
         }
       };

       let person = new Proxy({}, validator);

       person.age = 100;
       console.log(person.age); // 100
       person.age = 'young'; // Throws an exception
       person.age = 300; // Throws an exception
     ```



## [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.

  ```
    // Class declarations
    class Rectangle {
      constructor(height, width) {
        // If there is a constructor present in sub-class, it needs to first call super() before using "this".
        this.height = height;
        this.width = width;
      }
    }

    // Class expressions
      // unnamed
      var Rectangle = class {
        constructor(height, width) {
          this.height = height;
          this.width = width;
        }
      };
      // named
      var Rectangle = class Rectangle {
        constructor(height, width) {
          this.height = height;
          this.width = width;
        }
      };

    // Getters/Setters/Statics
      // getters
        get area() {
          return this.calcArea();
        }
        // console.log(square.area);
      // statics
        static distance(a, b) {
          const dx = a.x - b.x;
          const dy = a.y - b.y;

          return Math.hypot(dx, dy);
        }
        // console.log(Point.distance(p1, p2));

    // Subclasses: Extends
      class Dog extends Animal {
        speak() {
          console.log(this.name + ' barks.');
          // name is set in parent class constructor
        }
      }
      // d.speak(); // Mitzie barks.
  ```

  - If you want to inherit from a regular object, you can instead use Object.setPrototypeOf():

    ```
        var Animal = {
          speak() {
            console.log(this.name + ' makes a noise.');
          }
        };

        class Dog {
          constructor(name) {
            this.name = name;
          }
        }

        Object.setPrototypeOf(Dog.prototype, Animal);// If you do not do this you will get a TypeError when you invoke speak

        var d = new Dog('Mitzie');
        d.speak(); // Mitzie makes a noise.
    ```

  - The super keyword is used to call functions on an object's parent.

    ```
      class Cat {
        constructor(name) {
          this.name = name;
        }

        speak() {
          console.log(this.name + ' makes a noise.');
        }
      }

      class Lion extends Cat {
        speak() {
          super.speak();
          console.log(this.name + ' roars.');
        }
      }

      var l = new Lion('Fuzzy');
      l.speak();
      // Fuzzy makes a noise.
      // Fuzzy roars.
    ```

  - Abstract subclasses or mix-ins are templates for classes. An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible. The functionality must be provided by the superclass.

    ```
      // A function with a superclass as input and a subclass extending that superclass as output can be used to implement mix-ins in ECMAScript:

      var calculatorMixin = Base => class extends Base {
        calc() { }
      };
      var randomizerMixin = Base => class extends Base {
        randomize() { }
      };

      class Foo { }
      class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
    ```

## [computed properties/object initilizers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

```

  var obj = {
    ["x" + foo]: "heh",
    ["y" + bar]: "noo",
    foo: "foo",
    bar: "bar"
  };

```

## [for in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

- The for...in statement iterates over the enumerable properties of an object, in original insertion order. For each distinct property, statements can be executed.
- The for...in loop will iterate over all enumerable properties of an object.

  - The for...of syntax is specific to collections, rather than all objects. It will iterate in this manner over the elements of any collection that has a [Symbol.iterator] property.

  ```

  ```

## [for of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

```

  //
  for (let variable of iterable) {
    statement
  }
  for (const value of iterable) {
    console.log(value);
  }

  // Array, objects, maps, strings, etc
    let iterable = [10, 20, 30];
    for (let value of iterable) {
      value += 1;
      console.log(value);
    }
    // 11
    // 21
    // 31

```

- closing iterators

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

- generators

  - Generators should not be re-used, even if the for...of loop is terminated early, for example via the break keyword. Upon exiting a loop, the generator is closed and trying to iterate over it again does not yield any further results.

    ```
      // do this
        function* fibonacci() { // a generator function
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
        var gen = (function *(){
          yield 1;
          yield 2;
          yield 3;
        })();
        for (let o of gen) {
          console.log(o);
          break;  // Closes iterator
        }

        // The generator should not be re-used, the following does not make sense!
        for (let o of gen) {
          console.log(o); // Never called.
        }
    ```

  ```

  ```

## literals

- integer

  ```
    var b = 0b11; // binary integer literal
    var o = 0o7; // octal integer literal
  ```

- unicode

  ```
    const u = 'Hello\u{000A}\u{0009}!'; // unicode string literals, newline and tab
  ```

## [literals, Grammers, Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)

## parameters/destructuring

- [destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
- **TODO** [Destructuring assignment/parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

  ```
    var a, b, rest;
    [a, b] = [10, 20];
    console.log(a); // 10
    console.log(b); // 20

    [a, b, ...rest] = [10, 20, 30, 40, 50];
    console.log(a); // 10
    console.log(b); // 20
    console.log(rest); // [30, 40, 50]

    ({a, b} = {a: 10, b: 20});
    console.log(a); // 10
    console.log(b); // 20

    // Stage 3 proposal
    ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});

    var x = [1, 2, 3, 4, 5];
    var [y, z] = x;
    console.log(y); // 1
    console.log(z); // 2
  ```

- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

  - a new object is created each time the function is called.

    ```
    function multiply(a, b = 1) {
      return a * b;
    }

    // not DOPE
      // Parameters already encountered are available to later default parameters:
      function singularAutoPlural(singular, plural = singular + 's',
                            rallyingCry = plural + ' ATTACK!!!') {
        return [singular, plural, rallyingCry];
      }

      //["Gecko","Geckos", "Geckos ATTACK!!!"]
      singularAutoPlural('Gecko');
    ```

- **TODO** [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

  ```
    function f(a, b, ...theArgs) {
      // ...
    }
  ```

## [function-name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name)

- The function.name property returns the name of the function.
  re

## modules/commonjs/amd

- [node modules](https://nodejs.org/docs/latest/api/modules.html)
- [modules to commonjs](https://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/)

## object - super

## shorthand properties

## Spread

## sticky-regex

## template Strings

## typeof symbol

## unicode regex

## transform regenerator

# [ES6](https://github.com/lukehoban/es6features)

## Strings

```

  "abcde".includes("cd") // true
  "abc".repeat(3) // "abcabcabc"
  `${some var or function call} some string`

```

## numbers

```

  Number.EPSILON
  Number.isInteger(Infinity) // false
  Number.isNaN("NaN") // false

```

## Math

```

  Math.acosh(3) // 1.762747174039086
  Math.hypot(3, 4) // 5
  Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

```

## Arrays

```

  Array.from(document.querySelectorAll('*')) // Returns a real Array
  Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
  [0, 0, 0].fill(7, 1) // [0,7,7]
  [1, 2, 3].find(x => x == 3) // 3
  [1, 2, 3].findIndex(x => x == 2) // 1
  [1, 2, 3, 4, 5].copyWithin(3, 0) // [1, 2, 3, 1, 2]
  ["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
  ["a", "b", "c"].keys() // iterator 0, 1, 2
  ["a", "b", "c"].values() // iterator "a", "b", "c"

```

## Objects

    Object Literals:
      {
        // __proto__
        __proto__: theProtoObj,
        blah,
        function() {...},
        ['one' + id]: 'computed property'
      }

## Operators

- Spread Operator: expands an array/object into elements, i.e. flatten arrays and objects in function calls, array literals, destructuring assignment
  `myFunction(...iterableObj);`
  `[...iterableObj, 4, 5, 6]`
- Destructuring: pull values out of arrays/objects and assign them to variables

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

## Functions

- Default Arguments
  `function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {..}`
- Rest Parameters/: used in function arguments to capture a list of variables from arrays

  - [read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#Destructuring_rest_parameters)

    ```
      function(a, b, ...theArgs) {
        // ...
      }
    ```

### Arrow functions

## metaprogramming

### Symbols

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

    ```
      const blah = Symbol('used as object key');
      const object = {};
      object[blah] = 'Something else';
      **note**
        object.blah === 'undefined' // doesnt work
        object[blah] === 'Something else'; // only works if you have reference to the symbol

    ```

  - see an object's symbols: `Object.getOwnPropertySymbols:`

### Reflect

- all about Reflection through introspection - used to discover very low level information about your code.

### Proxy

- Reflection through intercession - wrapping objects and intercepting their behaviours through traps.

## Classes

    - function declarations are hoisted, classes are not
    - creating
      ```
        class Polygon {
          constructor({...options}) {
            this.height = height;
            this.width = width;
          }
          get area() {
            return this.calcArea();
          }
          set matrixType(matrixType) {
            this.idMatrix = matrixType;
          }
          static distance(a, b) {
            //not callable from instances
            const dx = a.x - b.x;
            const dy = a.y - b.y;

            return Math.sqrt(dx*dx + dy*dy);
          }
        }
      ```
    - extending
      ```
        class OtherShape extends Polygon {
          constructor({...options}) {
            super(options); //parent.constructor()
            this.blah = blah;
          }
          area2() {
            // call parent method
            super.area();
          }
        }
      ```

### Generators examples

- send and receive data

  ```
    function* someName() {
      yield 'someValue'; //send data without accepting a return value
      const getIt = yield; //receive data without sending a value
      const getIt = yield 'someOtherValue'; // send and receive data

      return 'someFinalValue'; // exit permanently
    }
    const blah = someName(); // always call the function immediately to get everything up to the first yield
    blah.next(optionalParam) // enter and continue the function
  ```

- use with 'for' of loops

  ```
    function* colors() {
      yield 'red'; yield 'blue';
    }
    for (let color of colors()) {
      console.log(color)
    }
  ```

## Iterators

### Iterators examples

- create fibonacci sequence

  ```
    let fibonacci = {
      [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
          next() {
            [pre, cur] = [cur, pre + cur];
            return { done: false, value: cur }
          }
        }
      }
    }
    for (var n of fibonacci) {
      if (n > 1000) break;
      console.log(n);
    }
  ```

- combine generators with iterators:

  ```
    var fibonacci = {
      [Symbol.iterator]: function*() {
        var pre = 0, cur = 1;
        for (;;) {
          var temp = pre;
          pre = cur;
          cur += temp;
          yield cur;
        }
      }
    }

    for (var n of fibonacci) {
      // truncate the sequence at 1000
      if (n > 1000)
        break;
      console.log(n);
    }
  ```

## Loops

```

  'for..of': iterating arrays
    for (let color of colors) {
      // color = each item in the array
    }

```

## Map, weakmap

### Maps

    var m = new Map();
    m.set("hello", 42);
    m.set(s, 34);
    m.get(s) == 34;
    // Weak Maps
    //  WeakMaps provides leak-free object-key’d side tables.
    var wm = new WeakMap();
    wm.set(s, { extra: 42 });
    wm.size === undefined

## Set, weakset

    // Sets
    var s = new Set();
    s.add("hello").add("goodbye").add("hello");
    s.size === 2;
    s.has("hello") === true;
    // Weak Sets
    var ws = new WeakSet();
    ws.add({ data: 42 });
      // Because the added object has no other references, it will not be held in the set

proxies: Proxies enable creation of objects with the full range of behaviors available to host objects. Can be used 'for' interception, object virtualization, logging/profiling, etc.

reflect
tail
module loaders:
// Dynamic loading – ‘System’ is default loader
System.import('lib/math').then(function(m) {
alert("2π = " + m.sum(m.pi, m.pi));
});
// Create execution sandboxes – new Loaders
var loader = new Loader({
global: fixup(window) // replace ‘console.log’
});
loader.eval("console.log('hello world!');");
// Directly manipulate module cache
System.get('jquery');
System.set('jquery', Module({$: $})); // WARNING: not yet finalized

## keywords

### let: defines block scoped variables

```

  var x = 10 (global)
  if (x){
    var x = 5 //overrides the global x, and sets it to 5
        //this is because the if block does not define a new scope
  }
  if (x){
    let x = 2 //this x is only available within this if statement
  }

```

- where to use

  ```
    for (let i = 0; i<blah;i++){
      i is no longer overridden on each loop
    }
  ```

### const: set constant vars that should not be reasigned

- example: `const name = "noah";`

# ES7: (ES2016)

## async await

- @see #topics Async Promises section above

## destructuring

`({a, b, ...rest} = {a:1, b:2, c:3, d:4});`

## Generators: a function that can be exited, and entered multiple times

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

## Classes & [Mixins](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)

- is really a subclass factory, parameterized by the superclass, which produces mixin applications

### Mixin examples

- benefits of approach below: 0. the only difference between a mixin and a normal subclass is that a normal class has a fixed superclass, while a mixin definition doesnt (the mixin application does)
  1. the definition of a class that may be applieed to different super classes.
  2. mixin application: the application of a mixin definition to a specific superclass, producing a new subclass
- implementation features based on es6 classes

  1. mixins are added to the prototype chain
  2. mixins are applied without modifying existing objects
  3. mixins do no magic, and dont define new semantics on top of the core language
  4. superfoo property access works within mixins and subclasses
  5. super() calls work in constructors
  6. mixins are able to extend other mixins
  7. instanceof works
  8. mixins donot require library support and can be writtin in a universal style
  9. subclasses correctly override mixin methods which override superclass methods.

- definition

  ```simple
    // simple mixin definition
    let MyMixin = (superclass) => class extends superclass {
      foo() {
        console.log('foo from MyMixin');
      }
    };

    // advanced mixin inheritance definition
    let Mixin2 = (superclass) => class extends Mixin1(superclass) {
      /* Add or override methods here */
    }

    // function composition mixin inheritance
    let CompoundMixin = (superclass) => Mixin2(Mixin3(superclass));

    // single subclass definition
    class MyClass extends MyMixin(MyBaseClass) {
      /* ... */
    }

    // multiple subclass definition
    class MyClass extends Mixin1(Mixin2(MyBaseClass)) {
      /* ... */
    }

    // instantiation
    let c = new MyClass();
    c.foo(); // prints "foo from MyMixin"
  ```

### classes

- classes can be used as an expression as well as a statement
  1. as an expression it returns a new class each time its evaluated (sort of like a factory)
- the extends clause accepts arbitrary expressions that return classes or constructors
