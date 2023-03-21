# js classes

## links

- [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Mixins](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)

## basics

- An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.
- The super keyword is used to call functions on an object's parent.
- Abstract subclasses or mix-ins are templates for classes. An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible. The functionality must be provided by the superclass.
- mixin: is really a subclass factory, parameterized by the superclass, which produces mixin applications

```js
// Class declarations
class Rectangle {
  constructor(height, width) {
    // If there is a constructor present in sub-class, it needs to first call super() before using "this".
    super();
    this.height = height;
    this.width = width;
  }
  // getters
  get area() {
    // instance.area
    return this.calcArea();
  }

  speak() {
    super.speak(); // calls the parent class speak method
    console.log(this.name + " roars.");
  }

  // available via Class.staticPropOrMethod
  static distance(a, b) {}
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

// Subclasses: Extends
class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
    // name is set in parent class constructor
  }
}

// A function with a superclass as input and a subclass extending that superclass as output can be used to implement mix-ins in ECMAScript:

var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };
var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
// simple mixin definition
let MyMixin = (superclass) =>
  class extends superclass {
    foo() {
      console.log("foo from MyMixin");
    }
  };
// advanced mixin inheritance definition
let Mixin2 = (superclass) =>
  class extends Mixin1(superclass) {
    /* Add or override methods here */
  };

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
```
