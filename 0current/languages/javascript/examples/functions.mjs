/*
- using call and apply to control 'this' and 'arguments' inside a function

```js

function myFn (myParam) {
	console.log("myParam, myParam = "default value")
	console.log("this.x", this.x)
}
myFn.x = "me"

functionName.call(someOBject, someParameter);
// someObject becomes the value of 'this' inside of the function
// someParameter becomes the parameter passed to the function

functionName.apply(someObject, ["someArrayElement"]);
// same as the above, only the function parameter is passed as an array
```

// ```js
//     function () {
//         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
//           var args = Array.prototype.slice.call(arguments);
//     }
// ```

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
/_do this stuff_/
}
`	- definition expressions (i.e. anonymous function)
   `
var myFunction = function(a,b) {
//do some stuff
}
can be executed immediately
var myFunction = function(a,b){
return a+b;
}(2,2);
`	- save data in a function after every call
   `
function saveThis(data) {
this.save = this.save || []; //create a new array only on the first call
if (this.save[data]) return this.save[data]; //return the data if it exists
return this.save[data] = data; //save new data on each call
}
`	- anonymous enclosures
   `
(function(arg1,arg2){
//wrap the anonymous function in paranthesis
//then call the function immediately by ending wtih () and send in parameters
//any variables declared inside this function are local to this function

})(par1, par2);
`	- using call and apply to control 'this' and 'arguments' inside a function
   `
functionName.call(someOBject, someParameter)
someObject becomes the value of 'this' inside of the function
someParameter becomes the parameter passed to the function

functionNAme.apply(someObject, ['someArrayElement'])
same as the above, only the function parameter is passed as an array

```
	- functions fired on events
		`<button type="button" onclick="myFunction()">Try it</button>` - function closures: defining a function within a function













*/
