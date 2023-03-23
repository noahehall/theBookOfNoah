import { log } from "./logit.mjs";

class Apps {
  static name = "unknown";
  static {
    console.info(`new app initialized: ${this.name}`);
  }

  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks#access_to_private_fields
  #secret;

  ["notSecret" + 123] = "just between us";

  name = "unknown";
  layer;
  constructor({ appName, layer, secret = "" }) {
    if (appName) this.name = appName;
    this.layer = layer;
    this.#secret = secret + this.name.split("").reverse().join("");
  }

  get leakSecret() {
    return `${this.#secret}-${this.notSecret}`;
  }

  *superGen() {
    yield this.layer;
    yield this.appName;
  }
}

class FeApp extends Apps {
  constructor({ appName, layer }) {
    super({ appName, layer });
  }
}

const reactApp = new FeApp({ appName: "react app", layer: "fe" });

log("reactApp", reactApp);
log("secret", reactApp.leakSecret);
/*


```js

class MyError extends Error {}
try {
  if (1 < 2) throw new MyError("oops")
} catch e {
  if (e instanceof MyError) "its okay!"
}
// Class declarations
class Rectangle {
  constructor(height, width) {
    // If there is a constructor present in sub-class, it needs to first call super() before using "this".
    super();
    this.height = height;
    this.width = width;
  }
  // getters, abstract away fn calls
  get area() {
    // instance.area
    return this.calcArea();
  }

  // setters, abstract away assignments
  set height(x) {
    this.height = x + 1 + 2 + 3
  }

  speak() {
    super.speak(); // calls the parent class speak method
    console.log(this.name + " roars.");
  }

  // available via Class.staticPropOrMethod
  // are bound to the constructor and not the prototype/instance
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
  constructor() {
    // must be called to invoke Animals constructor
    super()
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
    /* Add or override methods here
  };

// function composition mixin inheritance
let CompoundMixin = (superclass) => Mixin2(Mixin3(superclass));

// single subclass definition
class MyClass extends MyMixin(MyBaseClass) {
  /* ...
}

// multiple subclass definition
class MyClass extends Mixin1(Mixin2(MyBaseClass)) {
  /* ...
}
```


- prototypes, dizzam remember these?
- If you want to inherit from a regular object, you can instead use Object.setPrototypeOf():

```js
var Animal = {
  speak() {
    console.log(this.name + " makes a noise.");
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal); // If you do not do this you will get a TypeError when you invoke speak

var d = new Dog("Mitzie");
d.speak(); // Mitzie makes a noise.




	function fnAsClass(n) {
		this.name = n;
	}
var instance = new fnAsClass('fred');

var instance = new class { blah () { return "me" }}
```


	```create a class that uses another classes methods (this example uses arrays)
			var Queue = function() {
			  this._array = [];
			};
			Queue.prototype.enqueue = function(item) {
			  this._array.push(item);
			};
			Queue.prototype.dequeue = function() {
			  return this._array.shift();
			};
			Queue.prototype.size = function() {
			  return this._array.length; // the size of the queue
			};
````

- delegate prototypes

  ```define the prototype
    let animal = {
      animalType: 'animal',

      describe () {
        return `An ${this.animalType}, with ${this.furColor} fur,
          ${this.legs} legs, and a ${this.tail} tail.`;
      }
    };
    // create an instance
    let mouse = Object.assign(Object.create(animal), {
      animalType: 'mouse',
      furColor: 'brown',
      legs: 4,
      tail: 'long, skinny'
    });
  ```


























*/
