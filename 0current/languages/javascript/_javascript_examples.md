# [debounce]
  - [david walsh1](https://davidwalsh.name/javascript-debounce-function)
  - [david walsh + underscore](https://davidwalsh.name/function-debounce)
  - to accomplish taxing tasks, a debounce function is essential to ensuring a given task doesn't fire so often that it bricks browser performance.
  - [lodash debounce](https://lodash.com/docs/4.17.4#debounce)
  - limits the rate at which a function can fire.
    ```js
      // Returns a function, that, as long as it continues to be invoked, will not
      // be triggered. The function will be called after it stops being called for
      // N milliseconds. If `immediate` is passed, trigger the function on the
      // leading edge, instead of the trailing.
      function debounce(func, wait, immediate) {
      	var timeout;
      	return function() {
      		var context = this, args = arguments;
      		var later = function() {
      			timeout = null;
      			if (!immediate) func.apply(context, args);
      		};
      		var callNow = immediate && !timeout;
      		clearTimeout(timeout);
      		timeout = setTimeout(later, wait);
      		if (callNow) func.apply(context, args);
      	};
      };

      // You'll pass the debounce function the function to execute and the fire rate limit in milliseconds.  Here's an example usage:

      var myEfficientFn = debounce(function() {
      	// All the taxing stuff you do
      }, 250);

      window.addEventListener('resize', myEfficientFn);
    ```

# [throttling]
  - [remysharp](https://remysharp.com/2010/07/21/throttling-function-calls)
  ```js
    // Below is an actual throttle function, that fires a message every 250ms by default (rather than at the end of a burst of events):

    function throttle(fn, threshhold, scope) {
      threshhold || (threshhold = 250);
      var last,
          deferTimer;
      return function () {
        var context = scope || this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + threshhold) {
          // hold on to it
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function () {
            last = now;
            fn.apply(context, args);
          }, threshhold);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    }
    // So when you use this, moving the mouse around the example below, will echo out the tick on the first time you move, but then every 1 second until you stop moving the mouse:

    $('body').on('mousemove', throttle(function (event) {
      console.log('tick');
    }, 1000));
  ```

# [request animation frame]
  - [html5rocks](https://www.html5rocks.com/en/tutorials/speed/animations/)


#  [closures]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures))
  - terminology
    - closure: the combination of a function and the lexical environment within which that function was declared
    - lexical scoping: the static environment

## background on closures
  - Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods.
  - Consequently, you can use a closure anywhere that you might normally use an object with only a single method.
    - event handlers
    - private methods: Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.
    - module pattern: use closures to define public functions that can access private functions and variables
      - Using closures in this way provides a number of benefits that are normally associated with object-oriented programming -- in particular, data hiding and encapsulation.
  - notes
    - use let instead of var for variables, so every closure binds the block-scoped variable, meaning that no additional closures are required.
    - It is unwise to unnecessarily create functions within other functions if closures are not needed for a particular task, as it will negatively affect script performance both in terms of processing speed and memory consumption.
    - when creating a new object/class, methods should normally be associated to the object's prototype rather than defined into the object constructor. The reason is that whenever the constructor is called, the methods would get reassigned (that is, for every object creation).
## examples
  - closure
    ```js
      // closure 1: however displayName is not returend
      function init() {
        var name = 'Mozilla'; // name is a local variable created by init
        function displayName() { // displayName() is the inner function, a closure
          alert(name); // use variable declared in the parent function
        }
        displayName();
      }
      init();


      // closure 2: this time the inner function is returned
      function makeFunc() {
        var name = 'Mozilla';
        function displayName() {
          alert(name);
        }
        return displayName;
      }

      var myFunc = makeFunc();
      myFunc();


      // closure 3:
      function makeAdder(x) {
        return function(y) {
          return x + y;
        };
      }

      var add5 = makeAdder(5);
      var add10 = makeAdder(10);

      console.log(add5(2));  // 7
      console.log(add10(2)); // 12

      // closure 3: practical example of using
      // a closure to respond to an event
      function makeSizer(size) {
        return function() {
          document.body.style.fontSize = size + 'px';
        };
      }

      // create event handlers
      var size12 = makeSizer(12);
      var size14 = makeSizer(14);
      var size16 = makeSizer(16);
      // attach event handlers
      document.getElementById('size-12').onclick = size12;
      document.getElementById('size-14').onclick = size14;
      document.getElementById('size-16').onclick = size16;

      // closure 4: module pattern, notice the IFEE
      // annonymous functions creates the lexical environment (closure)
      // which is executed as soon as it has been defined
      var counter = (function() {
        var privateCounter = 0; // private
        function changeBy(val) { // private
          privateCounter += val;
        }

        return {
          // these functions share teh lexical environment
          increment: function() {
            changeBy(1);
          },
          decrement: function() {
            changeBy(-1);
          },
          value: function() {
            return privateCounter;
          }
        };
      })();

      console.log(counter.value()); // logs 0
      counter.increment();
      counter.increment();
      console.log(counter.value()); // logs 2
      counter.decrement();
      console.log(counter.value()); // logs 1


      // closure 5: different version of above
      // this time we are converting the IIFE into a function variable
      // that can create counters, each with its own version of the closure
      var makeCounter = function() {
        var privateCounter = 0;
        function changeBy(val) {
          privateCounter += val;
        }
        return {
          increment: function() {
            changeBy(1);
          },
          decrement: function() {
            changeBy(-1);
          },
          value: function() {
            return privateCounter;
          }
        }
      };

      var counter1 = makeCounter();
      var counter2 = makeCounter();
      alert(counter1.value()); /* Alerts 0 */
      counter1.increment();
      counter1.increment();
      alert(counter1.value()); /* Alerts 2 */
      counter1.decrement();
      alert(counter1.value()); /* Alerts 1 */
      alert(counter2.value()); /* Alerts 0 */


      // closure 6: methods on objects should be assigned
      // to the object's prototype so that whenever the constructor
      // is called, the methods do not get reassigned for every
      // object created
      function MyObject(name, message) {
        this.name = name.toString();
        this.message = message.toString();

        // dont do this
        this.getName = function() {
          return this.name;
        };
        // dont do this
        this.getMessage = function() {
          return this.message;
        };
      }

      // proper example
      function MyObject(name, message) {
        this.name = name.toString();
        this.message = message.toString();
      }

      // append new methods to the prototype
      MyObject.prototype.getName = function() {
        return this.name;
      };
      MyObject.prototype.getMessage = function() {
        return this.message;
      };
  ```


# [inheritance and prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - terminology:
    - prototype: When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype.
    - prototype chain: each prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
    -
  - background
    - JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).
      - While this confusion is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypal model.

  - notes
    - JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
    - functions are able to have properties. It does not matter how you declare the function, a function in javascript will always have a default prototype property.


    
  ```js
    // example prototype chain demonstrated through property access
    // Let's create an object o from function f with its own properties a and b:
    let f = function () {
       this.a = 1;
       this.b = 2;
    }
    let o = new f(); // {a: 1, b: 2}

    // add properties in f function's prototype
    f.prototype.b = 3;
    f.prototype.c = 4;

    // do not set the prototype f.prototype = {b:3,c:4}; this will break the prototype chain
    // o.[[Prototype]] has properties b and c.
    // o.[[Prototype]].[[Prototype]] is Object.prototype.
    // Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
    // This is the end of the prototype chain, as null,
    // by definition, has no [[Prototype]].
    // Thus, the full prototype chain looks like:
    // {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

    console.log(o.a); // 1
    // Is there an 'a' own property on o? Yes, and its value is 1.

    console.log(o.b); // 2
    // Is there a 'b' own property on o? Yes, and its value is 2.
    // The prototype also has a 'b' property, but it's not visited.
    // This is called "property shadowing."

    console.log(o.c); // 4
    // Is there a 'c' own property on o? No, check its prototype.
    // Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

    console.log(o.d); // undefined
    // Is there a 'd' own property on o? No, check its prototype.
    // Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
    // o.[[Prototype]].[[Prototype]] is null, stop searching,
    // no property found, return undefined.

  ```