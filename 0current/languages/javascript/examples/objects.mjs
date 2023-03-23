import { log } from "./logit.mjs";

// FYI: objects and classes use the same method syntax
const myObj = {
  m1() {
    return "m1";
  },
  *m2() {
    yield "m2";
  },
  m3: function* () {
    yield "m3";
  },
  async ["m" + 4]() {
    return Promise.resolve("m4");
  },
  get mOne() {
    return this.m1();
  },
};
/*
ADT

prototype
  toLocalString
  constructor
  toString

*/
const dict = Object.setPrototypeOf({}, null);
log("dict", dict);
// same as above
const dict2 = Object.create(null);
log("dict2", dict2);

/*
- sort an object by value

  ```
    Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));
  ```

  - method determines whether two values are the same value.

```js
  Object.is(value1, value2):
```


- creation
  ```
  	var blah = {'this':'that','this':'that'}
  	var blah {
  		'myFunction':function() {return this.firstName + " " + this.lastName;},
  		'otherObject' : {
  			'item1': 'sometext'
  		}
  	}
  ```
- associate functions with objects

  ```
  	function someFunction(){
  		console.log(this);
  	};

  	var blah = {};
  	blah.someMethod() = someFunction;
  		this associtiates the method on the object, with a predefined function
  		make sure the function uses the keyword 'this' so it can be used with
  		multiple objects
  ```

  - access object properties

  ```
  	objectName.propertyName
  	objectName["propertyName"]
  	objectName.methodName()
  ```

  - ADT

  ```
  	Object.assign() Creates a new object by copying the values of all enumerable own properties from one or more source objects to a target object.
  	Object.create() Creates a new object with the specified prototype object and properties.
  	Object.defineProperty() Adds the named property described by a given descriptor to an object.
  	Object.defineProperties() Adds the named properties described by the given descriptors to an object.
  	Object.entries()  Returns an array of a given objects own enumerable property [key, value] pairs.
  	Object.freeze() Freezes an object: other code cant delete or change any properties.
  	Object.getOwnPropertyDescriptor() Returns a property descriptor for a named property on an object.
  	Object.getOwnPropertyNames() Returns an array containing the names of all of the given objects own enumerable and non-enumerable properties.
  	Object.getOwnPropertySymbols() Returns an array of all symbol properties found directly upon a given object.
  	Object.getPrototypeOf() Returns the prototype of the specified object.
  	Object.is() Compares if two values are distinguishable (ie. the same)
  	Object.isExtensible() Determines if extending of an object is allowed.
  	Object.isFrozen() Determines if an object was frozen.
  	Object.isSealed() Determines if an object is sealed.
  	Object.keys() Returns an array containing the names of all of the given objects own enumerable properties.
  	Object.observe()  Asynchronously observes changes to an object.
  	Object.getNotifier()  Get a notifier with which to create object changes manually.
  	Object.preventExtensions() Prevents any extensions of an object.
  	Object.seal() Prevents other code from deleting properties of an object.
  	Object.setPrototypeOf() Sets the prototype (i.e., the internal [[Prototype]] property)
  	Object.unobserve()  Unobserves changes to an object.
  	Object.values()  Returns an array of a given objects own enumerable values.
  ```


    Object Literals:
      {
        // __proto__
        __proto__: theProtoObj,
        blah,
        function() {...},
        ['one' + id]: 'computed property'
      }


log: [Function: log],
  warn: [Function: warn],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  timeLog: [Function: timeLog],
  trace: [Function: trace],
  assert: [Function: assert],
  clear: [Function: clear],
  count: [Function: count],
  countReset: [Function: countReset],
  group: [Function: group],
  groupEnd: [Function: groupEnd],
  table: [Function: table],
  debug: [Function: debug],
  info: [Function: info],
  dirxml: [Function: dirxml],
  error: [Function: error],
  groupCollapsed: [Function: groupCollapsed],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  createTask: [Function: createTask]





// - check if properties exists and is owned by object
//   `	if (thisObject.hasOwnProperty('thisPropertyName'));`
// - check if property exist and is owned by object or the objects prototype
//   `(if 'thisPropertyName' in thisObject) return true;`

    ``` use prototype to attach new methods/vars to the constructor
    	Something.prototype.blah = function(){
    		console.log('this.name', 'is my name.');
    	}

````
	- get the original prototype function
		`Object.getPrototypeOf(someFunctionHere);`

- obj.prototype.**proto**: The **proto** property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.
- Object.setPrototypeOf(obj, prototype); sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

*/
