import { log } from "./logit.mjs";

class Apps {
  static name = "unknown";
  static {
    // this refers to the class, not the instance because its static
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
    // return an object to override `this` in subclasses
    // enables
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

class MyError extends Error {}
try {
  if (1 < 2) throw new MyError("oops");
} catch (e) {
  if (e instanceof MyError) log("MyError", e.message);
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
class Dog extends Apps {}

// mdn: docs
class Stamper extends class {
  // A base class whose constructor returns the object it's given
  constructor(obj) {
    return obj;
  }
} {
  // This declaration will "stamp" the private field onto the object
  // returned by the base class constructor
  #stamp = 42;
  static getStamp(obj) {
    return obj.#stamp;
  }
}
const obj = {};
new Stamper(obj);
log("Stamper.getSTamp", Stamper.getStamp(obj));

class SaferClass extends null {
  // safe from prototype pollution
  constructor() {
    // must return object to have correct prototype chain
    return Object.create(new.target.prototype);
  }
}

// extending plain objects
const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};
// cannot directly extend Animal
class Dog {
  constructor(name) {
    this.name = name;
  }
}
// must use setPrototypeOf
Object.setPrototypeOf(Dog.prototype, Animal);

/*


```js




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
