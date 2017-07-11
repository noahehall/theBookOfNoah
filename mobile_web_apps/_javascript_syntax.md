# quick links
  - [mozzila is doooope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript)

## [jsdocs](http://www.2ality.com/2011/08/jsdoc-intro.html)
 - takes code with `/** */ `comments and produces HTML documentation 'for' it
 -	meta data 'for' the entire file
    ```
  	/**
  	  * @fileOverview HTML widget for displaying documentation about a reusable react component.
  	  * @author <a href="mailto:noah.hall@dictionary.com">Noah Hall</a>
  	  * @version 0.3.0
  	  */
    ```
	- giving an example of use
    ```
  	/**
  		* @example
  	  * var str = "abc";
  	  * console.log(repeat(str, 3)); // abcabcabc
  	  */
    ```

	- @see: points to a related resource.
    ```
  		/**
  		  * @see MyClass#myInstanceMethod
    	  * @see The <a href="http://example.com">Example Project</a>.
  		  */
    ```
	- {@link ...}: works like @see, but can be used inside other tags.
	- @requires resourceDescription: a resource that the documented entity needs. The resource description is either a name path or a natural language description.
	- documenting functions and methods: For functions and methods. describes the parameter whose name is paramName. Type and description are optional.
    ```
  		@param {paramType} paramName description:
  			@param str
  	    @param str The string to repeat.
  	    @param {string} str
  	    @param {string} str The string to repeat.
    ```
	  - specify a param is optional and not require
			`@param {number} [times] The number of times is optional`
		- specify a param is optional and display its default value
			`@param {number} [times=1] The number of times is optional.`
		- specify the return of a function
		  `@returns {returnType} describes the return value of the function or method. Either type or description can be omitted.`
		- specify if this function throws any errors
			`@throws {exceptionType} description: describes an exception that might be thrown during the execution of the function or method. Either type or description can be omitted.`

# ES5:
## [prototypical inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - prototype: each object has an internal link to another object, its prototype, that provides additional behavior and properties
  - prototype chain: the sequence of linked objects from one object's prototype to another, all the way up until you reach the Null object (which does not have a prototype)
  ```

  ```
### basics
  - [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation)
    ```
    	+	Addition	x = y + 2	y = 5	x = 7	Try it »
    	-	Subtraction	x = y - 2	y = 5	x = 3	Try it »
    	*	Multiplication	x = y * 2	y = 5	x = 10	Try it »
    	/	Division	x = y / 2	y = 5	x = 2.5	Try it »
    	%	Modulus (division remainder)	x = y % 2	y = 5	x = 1	Try it »
    	++	Increment	x = ++y	y = 6	x = 6	Try it »
    	x = y++	y = 6	x = 5	Try it »
    	--	Decrement	x = --y	y = 4	x = 4	Try it »
    	x = y--	y = 4	x = 5
    ```
  - statements
  	- `break`	Exits a 'switch' or a loop
  	- `continue`	Breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop
  	- `debugger`	Stops the execution of JavaScript, and calls (if available) the debugging function
  	- `do ... while`	Executes a block of statements and repeats the block while a condition is true
  	- `for`	Marks a block of statements to be executed as long as a condition is true
  	- `for ... in`	Marks a block of statements to be executed for each element of an object (or array)
  	- `function`	Declares a function
  	- `if ... else ... else if`	Marks a block of statements to be executed depending on a condition
  	- `return`	Stops the execution of a function and returns a value from that function
  	- `switch`	Marks a block of statements to be executed depending on different cases
  	- `throw`	Throws (generates) an error
  		+ `throw "This is my error message"`
  	- `try ... catch ... finally`	Marks the block of statements to be executed when an error occurs in a try block, and implements error handling
  	- `var`	Declares a variable
  	- `while`	Marks a block of stat
    - `object instanceof constructor `//tests whether an object has in its prototype chain the prototype property of a constructor.
  		`constructos === String, Number, Object, Date etc.`
    - `debugger` pauses app run time at this point in the app.
  		1. you can open up console and type in any of the variables in the app, and it will print to the console
  		2. you can type in a function name and review it
  		3. you can click through the sources panel and view different things

  - scope
  	+ determines the life and death of a variable
  	+ block scope: lives within {}
  	+ function scope: lives within function definitions/expressions/closures
  	+ scope chain:
  		1. if the variable is not available in the current scope:
  		2. look for it in the parent function, if its not available there
  		3. go up one level, and continue all the way to the window (global) scope
  - data conversion
  	+ `String(x)` returns a string from a number variable x
  	+ `toExponential()`	Returns a string, with a number rounded and written using exponential notation.
  	+ `toFixed()`	Returns a string, with a number rounded and written with a specified number of decimals.
  	+ `toPrecision()`	Returns a string, with a number written with a specified length
    + `Number("3.14") ` returns 3.14
    + `parseFloat()`	Parses a string and returns a floating point number
    + `parseInt()`	Parses a string and returns an integer
### timers
    ```
    	setTimeout(someFunctionName, milliseconds); //runs someFunctionName ONCE after X milliseconds
    	setInterval(someFunctionName, milliseconds); //runs someFunctionName EVERY X milliseconds
    	clearInterval(intervalHandle) //you must assign setInterval to a variable
    	clearTimeout(timeoutHandle) //you must assign setTimeout to a variable
    ```
### setting CSS
    ```
    	someelement.style.property = value
    		any property wtih hyphens (e.g. background-color) becomes camel case (e.g. backgroundColor)
    		to access the elements class, you have to use somelement.style.className
    ```
#### Number
  ```
    Number()	Returns a number, converted from its argument.
    parseFloat()	Parses its argument and returns a floating point number without trailing zeros
      parseFloat((rad / 0.0174533).toFixed(2))
    parseInt()	Parses its argument and returns an integer
    toString()	Returns a number as a string
    toExponential()	Returns a string, with a number rounded and written using exponential notation.
    toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
    toPrecision()	Returns a string, with a number written with a specified length
    valueOf()	Returns a number as a number
  ```
#### Date
  - creation
    ```
      var today = new Date(); //current date and time
    	var y2k = new Date(2000,0,1); //month is 0 based, everything else is normal
    	var d = new Date("October 13, 2014 11:13:00");
    	d = new Date("2015-03-25T12:00:00"); //The T in the date string, between the date and time, indicates UTC time.
    	var d = new Date();
    	var d = new Date(milliseconds);
    	var d = new Date(dateString);
    	var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    ```
  - ADT
    ```
      d = new Date(); //todays date & time
      getDate()	Get the day as a number (1-31)
      getDay()	Get the weekday a number (0-6)
      getFullYear()	Get the four digit year (yyyy)
      getHours()	Get the hour (0-23)
      getMilliseconds()	Get the milliseconds (0-999)
      getMinutes()	Get the minutes (0-59)
      getMonth()	Get the month (0-11)
      getSeconds()	Get the seconds (0-59)
      getTime()	Get the time (milliseconds since January 1, 1970)
    ```
#### String
  ```
    charAt()	Returns the character at the specified index (position)
    charCodeAt()	Returns the Unicode of the character at the specified index
    concat()	Joins two or more strings, and returns a new joined strings
    fromCharCode()	Converts Unicode values to characters
      seems to work, jsut like this
        String.fromCharcode(yourStringVarHere);
    indexOf()	Returns the position of the first found occurrence of a specified value in a string
      blah.indexOf('blah2') !== -1 // in the event blah2 is at the 0 index
    lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
    localeCompare()	Compares two strings in the current locale
    match()	Searches a string for a match against a regular expression, and returns the matches
    replace(regexp|substr, newSubStr|function[, flags]) returns a new string (best to use a RegExp object so you can use flags)
    search()	Searches a string for a specified value, or regular expression, and returns the position of the match
    slice()	Extracts a part of a string and returns a new string
    split()	Splits a string into an array of substrings
    substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
    substring()	Extracts the characters from a string, between two specified indices
    toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
    toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
    toLowerCase()	Converts a string to lowercase letters
    toString()	Returns the value of a String object
    toUpperCase()	Converts a string to uppercase letters
    trim()	Removes whitespace from both ends of a string
    valueOf()	Returns the primitive value of a String object
  ```
  - code examples
    1. reverse a string
      `s.split('').reverse().join('');`
    2. remove last char of string
      `str = str.substring(0, str.length - 1);`
#### [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  - creation
    ```
    	var blah = [];
    	var blah = [1,2,3];
    	var blah = new Array();
    	var blah = Array();
    	var blah = Array(5);
    	var cars = new Array("Saab", "Volvo", "BMW");
    	var name = cars[0];
    	cars[0] = "Opel";
    ```
	- ADT
    ```
      blah.length //how many items
  		concat()	Joins two or more arrays, and returns a copy of the joined arrays
  		indexOf()	Search the array for an element and returns its position
  		join()	Joins all elements of an array into a string
  		lastIndexOf()	Search the array for an element, starting at the end, and returns its position
  		pop()	Removes the last element of an array, and returns that element
  		push()	Adds new elements to the end of an array, and returns the new length
  		reverse()	Reverses the order of the elements in an array
  		shift()	Removes the first element of an array, and returns that element
  		slice()	Selects a part of an array, and returns the new array
  		sort([compareFunction])	Sorts the elements of an array
  		splice(start, deleteCount[, item1[, item2[, ...]]])	Adds/Removes elements from an array, item1,itemX will be added
  			If you specify a different number of elements to insert than the number youre removing, the array will have a different length at the end of the call.
  		toString()	Converts an array to a string, and returns the result
  		unshift()	Adds new elements to the beginning of an array, and returns the new length
  		valueOf()	Returns the primitive value of an array
  		map(callback) apply the function to each item in the array
  		filter(callback[, thisArg]) The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  		some(functionName) The some() method tests whether some element in the array passes the test implemented by the provided function. if any element returns true, it returns true
  		reduce(callback[, initialValue]) method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
  		every(callback[, thisArg]) tests whether all elements in the array pass the test implemented by the provided function.
    ```
#### [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
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
### prototypes and constructors and 'class' section
	-	helps you create formalized objects (i.e. classes)
	-	its simply a function that creates an object
	-	new = the constructor operator, creates a new instance of an object
	-	prototype object allows you to extend functions functionality after its created
  ```
  	function ClassConstructor(n) {
  		this.name = n;
  	}
    var instance = new ClassConstructor('fred');
  ```

	``` use prototype to attach new methods/vars to the constructor
		ClassConstructor.prototype.blah = function(){
			console.log('this.name', 'is my name.');
		}
  ```
	- get the original prototype function
		`Object.getPrototypeOf(someFunctionHere);`
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
  ```
  - delegate prototypes
    ``` define the prototype
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
#### control
	- try catch
    ```
  		try {
  			/*code*/
  		} catch (err){
  			/*
  				err.message == message of error
  			*/
  		}finally {
  			/*do this regardless of what happens*/
  		}
    ```
	- if statements
    ```
  		if (condition1) {
  		    block of code to be executed if condition1 is true
  		} else if (condition2) {
  		    block of code to be executed if the condition1 is false and condition2 is true
  		} else {
  		    block of code to be executed if the condition1 is false and condition2 is false
  		}
    ```
	- switch statements
    ```
  		switch(expression) {
  		    case n:
  		        code block
  		        break;
  		    case n:
  		        code block
  		        break;
  		    default:
  		        default code block
  		}
    ```
#### loops
	- The break statement breaks the loop and continues executing the code after the loop (if any):
	- The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
	- for
    ```
  		var fruits = ["Banana", "Orange", "Apple", "Mango"];
  		for	(index = 0; index < fruits.length; index++) {
  		    text += fruits[index];
  		}
    ```
	- for in
    ```
  		var person = {fname:"John", lname:"Doe", age:25};
  		var text = "";
  		var x;
  		for (x in person) {
  		    text += person[x];
  		}
    ```
	- while
    ```
  		index =100
  		while (index--) {
  			//index in here will start at 99, since you used index-- as the condition
  		    code block to be executed
  		}
    ```
	- do while
    ```
  		do {
  		    code block to be executed
  		}
  		while (condition);
    ```
#### functions
	- function parameters are variables that are local to the function
	- functions can return anything, even other functions
	- arguments = an array-like OBJECT containing all of the parameters passed to the function. it is NOT AN Array
    ```
			function blah(){
				//arguments[0], arguments[1], etc contains all the args passed in
				// you dont need to have a parameter declared,
			}
			convert it to an array:
				var args = (arguments.length === 1?[arguments[0]]:Array.apply(null, arguments));
			call an arrays method on arguments object
				Array.every.call(arguments, function(value){ return this stuff;})
    ```
	- function declaration
    ```
  		function myFunction(){
  			/*do this stuff*/
  		}
    ```
	- definition expressions (i.e. anonymous function)
    ```
  		var myFunction = function(a,b) {
  			//do some stuff
  		}
  		can be executed immediately
  		var myFunction = function(a,b){
  			return a+b;
  		}(2,2);
    ```
	- save data in a function after every call
    ```
  		function saveThis(data) {
  		 this.save = this.save || []; //create a new array only on the first call
  		 if (this.save[data]) return this.save[data]; //return the data if it exists
  		 return this.save[data] = data; //save new data on each call
  		}
    ```
	- anonymous enclosures
    ```
  		(function(arg1,arg2){
  			//wrap the anonymous function in paranthesis
  			//then call the function immediately by ending wtih () and send in parameters
  			//any variables declared inside this function are local to this function

  		})(par1, par2);
    ```
	- using call and apply to control 'this' and 'arguments' inside a function
    ```
  		functionName.call(someOBject, someParameter)
  			someObject becomes the value of 'this' inside of the function
  			someParameter becomes the parameter passed to the function

  		functionNAme.apply(someObject, ['someArrayElement'])
  			same as the above, only the function parameter is passed as an array
    ```
	- functions fired on events
		`<button type="button" onclick="myFunction()">Try it</button>`
	- function closures: defining a function within a function
#### Math
  - ADT
    ```
      Math.random();       // returns a random number
      Math.pow(base, exponent)
      Math.min(0, 150, 30, 20, -8, -200);
      Math.max(0, 150, 30, 20, -8, -200);
      Math.round(4.7);            // returns 5
      Math.round(4.4);            // returns 4
      Math.ceil(4.4);             // returns 5
      Math.floor(4.7);            // returns 4
      Math.E          // returns Euler's number
      Math.PI         // returns PI
      Math.SQRT2      // returns the square root of 2
      Math.SQRT1_2    // returns the square root of 1/2
      Math.LN2        // returns the natural logarithm of 2
      Math.LN10       // returns the natural logarithm of 10
      Math.log2(x)      // returns base 2 logarithm of E
      Math.log10(x)    // returns base 10 logarithm of E
      abs(x)	Returns the absolute value of x
      acos(x)	Returns the arccosine of x, in radians
      asin(x)	Returns the arcsine of x, in radians
      atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
      atan2(y,x)	Returns the arctangent of the quotient of its arguments
      ceil(x)	Returns x, rounded upwards to the nearest integer
      cos(x)	Returns the cosine of x (x is in radians)
      exp(x)	Returns the value of Ex
      floor(x)	Returns x, rounded downwards to the nearest integer
      log(x)	Returns the natural logarithm (base E) of x
      max(x,y,z,...,n)	Returns the number with the highest value
      min(x,y,z,...,n)	Returns the number with the lowest value
      pow(x,y)	Returns the value of x to the power of y
      random()	Returns a random number between 0 and 1
      round(x)	Rounds x to the nearest integer
      sin(x)	Returns the sine of x (x is in radians)
      sqrt(x)	Returns the square root of x
      tan(x)	Returns the tangent of an angle
    ```
#### [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
	- `/pattern/modifiers;`
  - regexp tester: https://regex101.com/
  - creation
    ```
    	var patt = /w3schools/i
    	var patt = new RegExp('w3schools', 'i');
    	var matches = textVar.match(/[8wtyuioahxvm]/gi); //returns an array of matches
    		/w3schools/i  is a regular expression.
    		w3schools  is a pattern (to be used in a search).
    		i  is a modifier (modifies the search to be case-insensitive).
    ```
	- modifiers
    ```
  		i	Perform case-insensitive matching
  		g	Perform a global match (find all matches rather than stopping after the first match)
  		m	Perform multiline matching
    ```
  - quantifiers
    ```
      n+	Matches any string that contains at least one n
      n*	Matches any string that contains zero or more occurrences of n
      n?	Matches any string that contains zero or one occurrences of n
      n{X}	Matches any string that contains a sequence of X ns
      n{X,Y}	Matches any string that contains a sequence of X to Y ns
      n{X,}	Matches any string that contains a sequence of at least X ns
      n$	Matches any string with n at the end of it
      ^n	Matches any string with n at the beginning of it
      ?=n	Matches any string that is followed by a specific string n
      ?!n	Matches any string that is not followed by a specific string n
    ```
 - expressions: Brackets are used to find a range of characters:
    ```
			[abc]	Find any character between the brackets
			[^abc]	Find any character NOT between the brackets
			[0-9]	Find any digit between the brackets
			[^0-9]	Find any digit NOT between the brackets
			(x|y)	Find any of the alternatives specified
			(?:YourRegexHere) non capturing group
				will match YourRegexHere but wont return it as a match
				i.e. it must PASS the test, but dont include it in the returned results
    ```
  - groups
    ```
      (x) Matches x and remembers the match. These are called capturing groups.
      (?:x) Matches x but does not remember the match. These are called non-capturing groups.
    ```
  - assertions
    ```
      x(?=y) Matches x only if x is followed by y.
      x(?!y) Matches x only if x is not followed by y.
    ```
	- meta-characters: characters withs special meanings
    ```
  		.	Find a single character, except newline or line terminator
  		\w	Find a word character
  		\W	Find a non-word character
  		\d	Find a digit
  		\D	Find a non-digit character
  		\s	Find a whitespace character
  		\S	Find a non-whitespace character
  		\b	Find a match at the beginning/end of a word \bword\b
  				Before the first character in the string, if the first character is a word character.
  				After the last character in the string, if the last character is a word character.
  				Between two characters in the string, where one is a word
  		\B	Find a match not at the beginning/end of a word
  				opposte of \b
  		\0	Find a NUL character
  		\n	Find a new line character
  		\f	Find a form feed character
  		\r	Find a carriage return character
  		\t	Find a tab character
  		\v	Find a vertical tab character
  		\b  match a word boundary \bword\b.
  			character and the other is not a word character.
  		\xxx	Find the character specified by an octal number xxx
  		\xdd	Find the character specified by a hexadecimal number dd
  		\uxxxx	Find the Unicode character specified by a hexadecimal number xxxx
    ```
	- Methods that use regular expressions
		```
  		exec	A RegExp method that executes a search for a match in a string. It returns an array of information.
  		test	A RegExp method that tests for a match in a string. It returns true or false.
  		match	A String method that executes a search for a match in a string. It returns an array of information or null on a mismatch.
  		search	A String method that tests for a match in a string. It returns the index of the match, or -1 if the search fails.
  		replace	A String method that executes a search for a match in a string, and replaces the matched substring with a replacement substring.
  		split	A String method that uses a regular expression or a fixed string to break a string into an array of substrings.
      myRegex = /blah/i;
      myRegex.test(myString);
    ```

########################################################
# [ES2015](https://babeljs.io/docs/plugins/preset-es2015/)
## [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) keyword
  ```
    // Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be redeclared.
    const blah = 'bloom'
  ```
## [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  ```
    () => {};
    a => a;
    blah => ({ blah });
    // Destructuring within the parameter list is also supported
    let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
  ```
## block scoping
## [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  - [es6 in depth](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
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
    + The for...of syntax is specific to collections, rather than all objects. It will iterate in this manner over the elements of any collection that has a [Symbol.iterator] property.
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
## Arrays:
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
    + arrays
      ```
        [a, b, ...rest] = [1, 2, 3, 4, 5];
        console.log(a); // 1
        console.log(b); // 2
        console.log(rest); // [3, 4, 5]
      ```
    + objects
      ```
        ({a, b} = {a:1, b:2});
        console.log(a); // 1
        console.log(b); // 2
      ```
    + assign new var names:
      ```
        var o = {p: 42, q: true};
        var {p: foo, q: bar} = o;
        console.log(foo); // 42
        console.log(bar); // true
      ```
    + Fail-soft destructuring
      ```
        var [a] = [];
        a === undefined;
      ```
## Functions:
  - Default Arguments
    `function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {..}`
  - Rest Parameters/: used in function arguments to capture a list of variables from arrays
    + [read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#Destructuring_rest_parameters)
    ```
      function(a, b, ...theArgs) {
        // ...
      }
    ```
### Arrow functions:
## metaprogramming:
### Symbols:
  + reflection within implementation - you sprinkle them on your existing classes and objects to change the behaviour.
  + use cases:
    - not iterable over
    - not fetched using the already existing Reflection tools
    - guaranteed not to conflict with other properties in the object!
    - If you create a symbol (var mysym = Symbol()) it creates a completely new value inside the JavaScript engine.
      + If you don’t have the reference for the Symbol, you just can’t use it.
      + This also means two symbols will never equal the same value, even if they have the same description.
    - Symbol.for(). This method creates a Symbol in a “global Symbol registry”. Small aside: this registry is also cross-realm, meaning a Symbol from an iframe or service worker will be the same as one generated from your existing frame:
  + code:
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
  + all about Reflection through introspection - used to discover very low level information about your code.
### Proxy:
  + Reflection through intercession - wrapping objects and intercepting their behaviours through traps.
## Classes:
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
## Iterators:
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
## Loops:
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
## destructuring:
  `({a, b, ...rest} = {a:1, b:2, c:3, d:4});`
## Generators: a function that can be exited, and entered multiple times
  - yield: exit the function and send a value to the caller, and optionally receive a value back
  - function.next(): retrieve and send data, executes up to and including the next yield statement
    + for each yield statement you need to call blah.next()
    + returns ``{value: 'dataInAndOut', done: true|false}``
      1. value: data sent out from yield, or data sent in through next(someData);
      2. done:
        - false if function is not done, and can be entered again
        - true: if function is done, and should not be re-entered
    + you can access the value directly: `bloop.next().value;``
  - use cases
    + asynchornous events
    + timers (e.g. setInterval)


## Classes & [Mixins](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)
  - is really a subclass factory, parameterized by the superclass, which produces mixin applications
### Mixin examples
  - benefits of approach below:
    0. the only difference between a mixin and a normal subclass is that a normal class has a fixed superclass, while a mixin definition doesnt (the mixin application does)
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
    ``` simple
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
