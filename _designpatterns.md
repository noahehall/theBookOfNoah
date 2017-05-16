## design patterns
## component design patterns
### portal
  - [The Portal components render DOM nodes elsewhere on the page. This is useful for things like modals, tooltips, and dropdowns, when you want to define the content near the trigger, but have it display at the bottom of the page (generally to solve z-index and overflow incompatibilities).

For example, modals can be rendered at the bottom of <body>, but the React component that creates the modal content (e.g. a <button>) does not have access to <body> directly. If a PortalDestination is put at the bottom of <body>, a PortalSource can then be used anywhere without knowing about <body>.](http://styleguide.cfapps.io/react_components_portals.html)
### creation patterns
#### factory pattern:
	- a function that creates other objects based on supplied arguments
	- e.g. document.createElement() creates html elements of the given type
	- you should always run validation on the arguments before creating the requested object
#### singleton pattern:
	- a 'class'/object/module/etc that only has one instance with a global point of access (so it can be accessed anywhere)
	- the singleton is not the class/object/module, but it is the logic that ensures there is only one instance of the class/object/etc
		- you either return the instance, or you create and then return the instance
			return instance || (instance = createInstance());
#### [constructor pattern](http://www.samselikoff.com/blog/some-Javascript-constructor-patterns/)
  - Prototypes let you share public methods across objects. (They also let you use inheritance).
  - Closures let you have private properties and methods. They are often used in libraries. (Closures are part of a larger pattern called the Module pattern).
  - Custom constructors can be useful when building specialized APIs.
  - Object literals are often used to store and pass around isolated chunks of data, like configuration settings or the parameters to an AJAX request. They can also help reduce the number of globals in your code.
	- using instance = new Constructor(blah, bloop);
    1. `this` points to the instance inside of the constructor
  - if you want a function to be shared across all instances, set it as a method on the constructor's prototype
    `Constructor.prototype.someMethod = function() { poop }`
### structural patterns
#### callback pattern
  ```
		function randomCallBack(goodData, callback){
		  //both get called
		  callback(undefined, goodData); //no error, good data returned
		  callback('error message', undefined); //error, setting good data undefined
		}
  ```
  ```
		randomCallBack('something to send to callback', function(err, gooddata){
		  if (err) {
		    console.log(err);
		  }else {
		    console.log('good data');
		  }
		})
  ```
#### promise pattern
  ```
		function randomPromise(otherdata){
		  return new Promise(function (resolve, reject){ //make sure to return THIS!
		    setTimeout(function(){
		      console.log('past resolve & reject function calls in here to fake delay');

		    }, 5000)
		    //if things go good, call resolve
		    return resolve('good data'); //make sure to return

		    //all things bad, call reject
		    return reject('error message here'); //make sure to return
		  });
		}
  ```
  ```
			randomPromise('ooh send this to promise')
		  .then( //only success or err is called
		    function(success){
		      console.log('promise success received: ' + success);
		    },
		    function(err){
		      console.log('promise error received: ' + err);
		    }
		  );
  ```
#### facade pattern:
	- any function that wraps other functions to make them easier to use
	- function A: has 10 methods related to calling, 20 methods related to talking, and 2 methods related to pooping
	- function B has three methods: call, talk, hangup, that  utilize  all of function A methods but only allows the user to use the three functions available.
		- this allows you to call talk and hangup, without having to know about the 1000 methods of function A.
#### command pattern:
	- separate the responsibility of issueing commands from executing commands
	- objects are usually nouns (person, place, or thing) but are used as verbs (walk, run, talk)
	- object A = noun: has properties needed to take actions and methods to issue (request) actions, but does not execute any actions
	- object B = verb, has all of methods needed to execute commands that other objects issue (request)
    ```
			// create a calculator object (noun)
			function Calculator() {
				this._currentValue = 0;
				this.commands = []; //list of commands used, in order
			}

				Calculator.prototype = {
					//issue the command
					execute: function (command) {
						this._currentValue = command.execute(this._currentValue);
						this.commands.push(command); //add this command to our commands array
					}
					getCurrentValue: function() {
						return this._currentValue;
					}
					undo: function () {
						var cmd = this.commands.pop(); //get the last used command
						this._currentValue = cmd.undo(this._currentValue);
					}
					comm
				}

				//create a command object (verb) that executes commands
				function Command(fn, undo, value) {
					this.execute = fn; //execute this function, e.g. Add
					this.value = value; //keep track of value
					this.undo = undo; //keep track of the undo fn, e.g. Sub
				}

				//commands to execute
				function add(value) {
					return value + this.value;
				}
				function sub(value) {
					return value - this.value
				}
				function AddCommand(value) {
					Command.call(
						this, //this arg inside command
						add, //execute
						sub, //undo
						value //the value supplied by user
					)
				}
				function Subcommand(value) {
					Command.call(
						this, //this arg inside command
						sub, //execute
						add, //undo
						value //the value supplied by user
					)
				}

				var thisCalc = new Calculator();
				calc.execute(new AddCommand(5)); //adds 5 to 0 the initial number
				calc.execute(new AddCommand(5)); //adds 5 to 5
				calc.execute(new Subcommand(10)); //removes 10 from 10
    ```
### code reuse patterns
#### abstract 'class' pattern:
	- `'class' A` is a base 'class' whose only purpose is to create subclasses
	- you will never issue var blah = new BaseClass{};
	- you will always issue class Blah extends BaseClass {};
#### subclassing pattern
	- inheriting properties for a new object to a base / superclass object
	- class A = super class / base object
	- class B = subclass
	- class B extends class A () {...}
		1. all instances of B inherit methods from A
		2. B can override methods of A
		3. B can invoke methods of A that has been overridden (method chaining)
			- B overrides method 1, B can still call method 1 from A via method chaining
		4. B can invoke the constructor of A via constructor chaining

		basic workflow:
			1. inside subclass, call parent constructor via Parent.call(this,arg1, arg2,etc);
			2. immediately after subclass definition, set prototype inheritance, Subclass.prototype = Object.create(Parent.prototype)
		- extended example: ES5
      ```
  				//define the base class
  			var	Person = function( firstName , lastName ){
  					this.firstName = firstName;
  					this.lastName =  lastName;
  					this.gender = 'male'
  			}

  			//a new instance of Person can then easily be created as follows:
  			var clark = new Person( "Clark" , "Kent" );

  			//Define a subclass constructor for for 'Superhero':
  			var Superhero = function( firstName, lastName , powers ){
  					/*
  							Invoke the superclass constructor on the new object
  							then use .call() to invoke the constructor as a method of
  							the object to be initialized.
  					*/
  					Person.call(this, firstName, lastName);
  					//Finally, store their powers, a new array of traits not found in a normal 'Person'
  					this.powers = powers;
  			}
  			//assign the Person prototype to the Superhero prototype to ensure all methods are passed over
  			Superhero.prototype = Object.create(Person.prototype);
  				//new X is Object.create(X.prototype) with additionally running the constructor function. (And giving the constructor the chance to return the actual object that should be the result of the expression instead of this.)
  			var superman = new Superhero( "Clark" ,"Kent" , ['flight','heat-vision'] );
  			console.log(superman); /* includes superhero props as well as gender*/

    		-extended example: ES6
    			class Person {
    				constructor(props) {
    					this.firstname = props.firstname,
    					this.lastname = props.lastname,
    					this.gender = props.gender || 'male'
    				}
    			}
    			let noah = new Person('noah','hall');
        ```
#### inheritance pattern:
#### mixin pattern:
	- share methods across multiple objects/classes
	- take object A and mixin the methods/properties of object B
	- a mixin is a 'class' that contains methods for use by other classes without having to be the parent 'class' of those other classes.

    ``` in jquery
  		$.extend(TargetObject, source1, source2, ...);
  			TargetObject gets functionality from source
    ```
  	```example 2
  		https://www.youtube.com/watch?v=fTNb4yo3S3c&list=PLrzrNeNx3kNHsaPfrpPo0AlW-MhJE6gOA&index=14
  		function extend(target) {
  			if (!arguments[1]) return; //multiple source objects can be sent in

  			// copy source methods and props over to target
  			for var (i = 1; i < arguments; i++){
  				var source = arguments[i];
  				for (var prop in source) {

  					//only copy properties that the target does not have and that the source owns (no prototypical properties)
  					if (!target[prop] && source.hasOwnProperty(prop)) {
  						target[prop] = source[prop]
  					}
  				}
  			}
  		}
    ```
  	```example 1 from wikipedia
			//https://en.wikipedia.org/wiki/Mixin
			var EnumerableFirstLast = (function () { // function based module pattern.
			    var first = function () {
			        return this[0];
			    },
			    last = function () {
			        return this[this.length - 1];
			    };
			    return function () {      // function based Flight-Mixin mechanics ...
			        this.first  = first;  // ... referring to ...
			        this.last   = last;   // ... shared code.
			    };
			}());

			// Application - explicit delegation:
			// applying [first] and [last] enumerable behavior onto [Array]'s [prototype].
			EnumerableFirstLast.call(Array.prototype);

			// Now you can do:
			a = [1, 2, 3];
			a.first(); // 1
			a.last();  // 3
    ```
#### decorator pattern
	- wrapper used to extend functionality of an object without rewriting it
	- useful for modifying existing systems where you may wish to add additional features to objects without the need to change the underlying code that uses them.
	- function A takes function B as an argument, before calling function B it has logic to see if it 'should' call function b
		- how functions are defined without decoration
      ```
				class Blah {
					someMethod() {
						return 'stuff';
					}
				}
				//is really this
				Object.defineProperty(Blah.prototype, 'meo', {
					value: specifiedFunction,
					enumerable: false,
					configurable: true,
					writable: true
				});
      ```
		- property decoration es6
      ```
  			function readonly(target,key,descriptor) {
  				descriptor.writable = false;
  				return descriptor;
  			}
  			//use it like this
  			class Blah {
  				@readOnly
  				someMethod() {
  					return 'stuff';
  				}
  			}
      ```
	 	- property decoration es5
      ```
  			function AuthorizationDecorator(protectedFunction) {
  			    return function() {
  			        if (user.isTrusted()) {
  			            protectedFunction();
  			        } else {
  			            console.log('Hey! No cheating!');
  			        }
  			    }
  			}
  			//Using it would look like this:
  			AuthorizationDecorator(save);
      ```
#### behavior patterns
	- observer patterns:
		- defines an object (subject) that notifies other objects (observers) when its state changes
		- javascript and the DOM are implemented with the observer pattern
		  ```example
				document.addEventListener('click', function(evt){...});
				document = subject
				function = observer
				when the click happens, the document publishes the event to all its subscribers
      ```
	- publish subscribe pattern:
    ```
			function pubSub() {
				var subscribers = {};

				//
				function subscribe(type, fn) {
					//type: event your subscribing to
					//fn: observer

					//if type array does not exist, add it
					if (!subscribers[type]) {
						subscribers[type] = [];
					}

					//if observer is not associated with type, then add it
					if(subscribers[type].indexOf(fn) == -1) {
						subscribers[type].push(fn)
					}
				}

				function unsubscribe(type, fn) {
					//get array of all observers of this type
					var listeners = subscribers[type];
					if(!listeners) return;

					//remove observers
					var index = listeners.indexOf(fn){
						if (index > -1) listeners.splice(index,1)
					}
				}
				function publish(type, evtObj) {
					if (!subscribers[type]) return;
					if(!evtObj.type) {
						evtObj.type = type;
					}

					//publish the event data to all observers
					var listeners = subscribers[type];
					for (var i=0;i.listeners.length;i++){
						listeners[i](evtObj)p
					}
				}

				return {
					subscribe: this.subscribe,
					unsubscribe: this.unsubscribe,
					publish: this.publish
				}
			}
    ```
	  - use pubsub:
      ```
				function observer1(evt){
					console.log('got observed evt', evt)
				}
				pubSub.subscribe('someEvent', observer1);
				pubSub.publish('someEvent',, {this:'is the evtObj'});
				pubSub.unsubscribe('someEvent', observer1)
      ```
#### module patterns
	- Basic pattern
		- you namespace your code in an immediately invoked function, so that it provides privacy to your real functionality
		- whatever you return is publicly accessible
		- utilize functional scope and closures
  - Modules: allow you to reuse code across apps
  - Namespacing: allows you to protect your variable names from the global scope
  		- assign a self executing function to a variable
  		- and use a return statement within the self executing function to return an object containing the variables & methods you want to use]
  - Chaning module method calls
  		- as long as you return 'this' then you can chain methods
  ```
  	var myModule = (function(){ //module here can be the same thing as a namespace
  		var DEFAULTS = {
  			firstArg: 'blah',
  			secondArg: 'bloop'
  		}
  		return {
  			run: function(){
  				var firstArg = arguments[0] || DEFAULTS.firstArg; //use the first truthy
  				console.log(firstArg);
  				return this; //allow method chaining by returning the object itself
  			},
  			speak: function(){
  				var secondArg = arguments[1] || DEFAULTS.secondArg; //use the first truthy
  				console.log(secondArg);
  				return this; //allow method chaining by returning the object itself
  			}
  		};
  	})();
  	myModule.speak(); //call the speak function inside of myModule anywhere in your application
  ```
  - name spaces & classes examples: define a name space and a class, with a class function 'sayHello'
    ```
  		example 1
  			var MyNamespace = MyNamespace || {}; //dont create a new one if it already exists
  			MyNamespace.MyClass = function(phrase){
  			  this.phrase = phrase;
  			};
  			MyNamespace.MyClass.prototype.sayHello = function(){
  			  return this.phrase;
  			};

  		example 2
  			var MyNamespace = MyNamespace || {}; //dont create a new one if it already exists
  			MyNamespace.MyClass = function(msg) {
  			  this.msg = msg;
  			  this.sayHello = function() {
  			    return this.msg;
  			  };
  			};
    ```
	- AMD format asynchronous module definition
