import { log } from "./logit";

class Apps {
  static us = "";
  static {
    // this refers to the class, not the instance because its static
    // runs once when the Class is parsed, not on each instantiation
    console.info(`new app initialized: ${this.us.split(".").at[-1]}`);
  }

  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks#access_to_private_fields
  #secret;

  // @ts-ignore cuz typescript, but this IS valid js, see docs
  ["notSecret" + 123] = "just between us";

  me = "unknown";
  layer;
  constructor({ me = "unknown", layer, secret = me }) {
    (this.me = me), (Apps.us += `.${me}`);
    this.layer = layer;
    this.#secret = secret + this.me.split("").reverse().join("");
    // return an object to override `this` in subclasses
    // enables
  }

  get leakSecret() {
    // @ts-ignore
    return `${this.#secret}-${this.notSecret123}`;
  }

  *superGen() {
    yield this.layer;
    yield this.me;
  }
}

class FeApp extends Apps {
  constructor({ me, layer }) {
    super({ me, layer });
  }
}

const reactApp = new FeApp({ me: "react app", layer: "fe" });
log("reactApp", reactApp);
log("secret", reactApp.leakSecret);
for (let x = 5; !!x; x--)
  log(new FeApp({ me: `app #${x}`, layer: x }).leakSecret);

// Class expressions
const Rec1 = class {
  height: string;
  width: string;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
const Rec2 = class Rectangle {};

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
  me: "",
  speak() {
    console.log(`${this.me} makes a noise.`);
  },
};
// cannot directly extend Animal
class Dog {
  constructor(me) {
    // @ts-ignore see below
    this.me = me;
  }
}
// must use setPrototypeOf
Object.setPrototypeOf(Dog.prototype, Animal);

/*


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


function fnAsClass(n) {
  this.me = n;
}
var instance = new fnAsClass('fred');

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
