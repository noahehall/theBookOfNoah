# computer science
  1. Can you name two programming paradigms important for JavaScript app developers?
    - JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.


  2. What is functional programming?
    - Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data. Lisp (specified in 1958) was among the first languages to support functional programming, and was heavily inspired by lambda calculus. Lisp and many Lisp family languages are still in common use today.


  3. What is the difference between classical inheritance and prototypal inheritance?
    - Class Inheritance: instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6.
      + create class hierarchies as a side-effect of sub-class creation. Those hierarchies lead to arthritic code (hard to change) and brittleness (easy to break due to rippling side-effects when you modify base classes).
    - Prototypal Inheritance: instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.


  4.  What are the pros and cons of functional programming vs object-oriented programming?
    - OOP Pros: It’s easy to understand the basic concept of objects and easy to interpret the meaning of method calls. OOP tends to use an imperative style rather than a declarative style, which reads like a straight-forward set of instructions for the computer to follow.
    - OOP Cons: Typically depends on shared state. Objects and behaviors are typically tacked together on the same entity, which may be accessed at random by any number of functions with non-deterministic order, which may lead to undesirable behavior such as race conditions.
    - FP Pros: Using the functional paradigm, programmers avoid any shared state or side-effects, which eliminates bugs caused by multiple functions competing for the same resources. With features such as the availability of point-free style (aka tacit programming), functions tend to be radically simplified and easily recomposed for more generally reusable code compared to OOP.
    - FP Cons: Over exploitation of FP features such as point-free style and large compositions can potentially reduce readability because the resulting code is often more abstractly specified, more terse, and less concrete.
  5. what is declaritive style?
    - declarative and denotational styles, which do not spell out step-by-step instructions for operations, but instead concentrate on what to do, letting the underlying functions take care of the how. This leaves tremendous latitude for refactoring and performance optimization, even allowing you to replace entire algorithms with more efficient ones with very little code change. (e.g., memoize, or use lazy evaluation in place of eager evaluation.)


  6. what is composition:
    -  creates has-a or uses-a or can-do relationships as opposed to the is-a relationship created with class inheritance.


  7. What are two-way data binding and one-way data flow, and how are they different?
    - Two way data binding means that UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa.
    - One way data flow means that the model is the single source of truth. Changes in the UI trigger messages that signal user intent to the model (or “store” in React). Only the model has the access to change the app’s state. The effect is that data always flows in a single direction, which makes it easier to understand.
    - One way data flows are deterministic, whereas two-way binding can cause side-effects which are harder to follow and understand.


  8. What are the pros and cons of monolithic vs microservice architectures?
    - A monolithic architecture means that your app is written as one cohesive unit of code whose components are designed to work together, sharing the same memory space and resources.
    - A microservice architecture means that your app is made up of lots of smaller, independent applications capable of running in their own memory space and scaling independently from each other across potentially many separate machines.


  9. What is asynchronous programming, and why is it important in JavaScript?
    - Synchronous programming means that, barring conditionals and function calls, code is executed sequentially from top-to-bottom, blocking on long-running tasks such as network requests and disk I/O.
    - Asynchronous programming means that the engine runs in an event loop. When a blocking operation is needed, the request is started, and the code keeps running without blocking for the result. When the response is ready, an interrupt is fired, which causes an event handler to be run, where the control flow continues. In this way, a single program thread can handle many concurrent operations.




# JavaScript
  1. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?
    - voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime
    -  Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
    - Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
    -  Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of null or undefined throws an error.
    - Strict mode throws an error when it detects a duplicate named property in an object (e.g., var object = {foo: "bar", foo: "baz"};) or a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}),
    - variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode,
    - The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object.   
  2. what are the different types of prototypal inheritance:
    - Delegation (i.e., the prototype chain).
    - Concatenative (i.e. mixins, `Object.assign()`).
      + you just copy properties from an exemplar object to a new instance.
    - Functional (Not to be confused with functional programming. A function used to create a closure for private state/encapsulation).

# functions
   1. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
    - creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.
    - allow for an easily referenceable (presumably shorter) alias for a global variable.

# variables
  1. check if variable exists
    `const exists = (bar !== null) && ((typeof bar === "object") || (typeof bar === "function"));`
      - have to check its not null, and is either an object or function
  2. explain `var a = b = 3`
    - without `use strict;`
      1. `b = 3 // is a global var since its not defined with var`
      2. `var a = b`
    - with `use strict;`
      1. throws runtime error `ReferenceError: b is not defined`
