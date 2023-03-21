import { logIt } from "../logit.mjs";

var dict = Object.setPrototypeOf({}, null);

logIt("dict", dict);

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










*/
