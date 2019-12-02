# books 
	- function programming in javascript 
		- Luis Atencio

# links 
	- [fp run](http://mng.bz/nmax)
	- [FP examples](https://github.com/luijar/functional-programming-js)


# FP ideas
	- gravitate towards framworks that help us create extensible and clean application architectures 
	- the more code you have the more bugs you have


# terminology 
	- impore code 
		- produces externally visible side effects
	- formal parameters 
		- the arguments specified in a functions signature
	- functional awareness 
		- the instinct of looking at problems as aa combination of simple fucntiosn that together provide a complete solution 
	- complexity 
		- the the ease/difficult of reasoning about something
		- thigns that increase complexity 
			- anything increases the number of paths program execution can take
				- loops 
				- logical branches
			- a lot of parameters in function signatures
	- observable 
		- let you subscribe to a stream of data that you an process by composing and chaning oprations together
	- prototypal relationship 
		- defines the relationshp between on object and another by saying one is a sub/derived type of another 
	- program state 
		- defined as a snapshot of the data stored in all of its objects at any moment of time 


# programming paradigms
	- functional programming 
		- a way of writing code (and nothing else) 
		- refers to the declarative evaluation of ppure functions to create immutable programs by avoiding extenrally observable side efects
		- a software development style that places a major emphasis on the use of functions 
		- purpose is to dabstract control flows and operations on data with fucntions in ordder to avoid side effects and reduce mutation of state in an applicaations 
		- the act of decomposing programs into smaller pieces and composing new programs by being those pieces back together 

	- reactive programming 
		- facilitates working with data flow and propagation of change 
		- extremely importaant ahen delaing with asynchronous or event based code 
		- raises the level of absraction in your code
		- based on functional programming by using pure functions to process data with the same familiar operations like map and reduce and the terseness of lambda expressions 
	- function reactive programming 
		- 
	- object oriented programming
		- favor the creation of new derived objects as the principal means to gain code reuse 
			- i.e. one object will reuse all the data & behavior from its parent otypes
		- rely heavily on object-based encapsulatin to protect the integrity of the objects mutable state  both direct and inherited, in order to expose or manipulate the state via instance methods 
			- results in a tight coupling between an objects data nd its fine-grained behavior
		- central form of abstraction is the object
	- declarative programming 
		- expresses a set of oeprations without revealing how their implen=meneted or how data flows through them 
		- separates program description from evaluation 
		- focuses ont he use of expressions to describe what the logic of a program is without necessarily specifying its control flow or state changes 
			- e.g. SQL: you declare what rows to select, but you dont say how the select operation works, only what it does
	- imperative/procedural programming 
		- treats a computer program as merely a sequence of topt o bottom staements that changes the state of the system in order to compute a result
		- tells the computer, in GREAT detail, how to perform a certain task (e.g. a how to loop) 
		- the wholed point of imperative design is to declare how variables mutate from one state to the next
	- object oriented design 


# application design 
	- extensibility 
		-	do i constantly refactor my code to support additional functiooonality 
	-	easy to modularize
		-	if i change one file, is nother file affected 
	- reusability 
		- is there a lot fo duplication 
	-	testability 
		-	do i strugglle to unit test my fucntions 
	-	easy to reason about 
		-	is my code unstructured and har dto follow '



# FP concepts 
	- parameterized functions 
		- parametrers arent just scalar values but can/and should be funjctioons themselves
	- decomposition 
		- breaking down ap rogrmaa into smaller pieces that are more reusable, reliable, and easier to understand 
	- composition 
		- recomposing/combining indiviudal functions to form an entire program that is easier to reason about as a whole 
		- the requiring of two functions to be compatible is that they must agree in the number of arguments as well as their types 
		- the meaning of the entire expression can be understand from the meaning of its individual pieces 
	- declarative 
	- statelessness 
		- stateless code has 0 chance of changing/breaking global state
	- immutability 
	- pure functions 
		- functions that avoid side effects and changes  of state 
		- depends only on the input provided and not on any hiddenexternal state that may change during its evaluatin/between calls 
		- doesnt inflict changes beyond their scope, e.g. modyfing a global object /parameter passed by reference
		- have clear contracts as part of their signatures that describe clearly on all of the functions formal parameters
		- an immutable object that contains immutable functionality can be considered pure
		- using methods to return new copies is one way to implement immutability 
	- side effects
		- changing a variable, property or data structure globally 
		- changing the original value of a functions argument 
		- rocessing user input 
		- throwing an exception , unless its caught within the same function 
		- printing to the screen/logging 
		- querying the html docuemnts, brower cookies or databases
	- referential transparency 
		- the actual definition of a pure function
		- guarantee a consistent return value form a fucntion given the same arguments 
		- Purity, i.e., the existence of a pure mapping betwen a fucntios arguents and its return value 
		- i.e. must have no side effects
		- i.e. equational correctness
		- a priori a functions complexity is sometimes directly related to the number of arguments it receives 
			- i.e. the generally the lower the number of functional parameters, the simple the function tends to be 
	- a program 
		- can be defined as a set of functions that processes a given input and procudes an output 
	- immutable data 
		- data that cannot be changed 
	- unit of modularity 
		- i.e. the unitt of work in FP is the function 
		- e.g. in object oriented programming the unit of work could be considered the class (or more specifically objects)
	- singularity principle 
		- states that functions should hav ea single purpose 
	- pure error handling 
		- distinct from exception handling  
		- allows exceptionns to only fire in truly exceptional conditions (i.e. an exception) 
	- polymorphic functions 
		- i.e. duck typing 
		- use references to base tyeps (e.g. Person) to work on objects of derived types (e.g. student)
	- immmutable values 
		- all primitives 
		- including objects/functions that are pure 


# declarative vs imperative 
	- imeprative 
		- loop control structure 
			- hard to reuse and difficult to plug into other operations 
			- implies code thats constalty changing or mutating in response to new iterations 


# FP vs OOP
	- execution
		- OO elies on fine grained class instance methods 
		- FP relies on course grained operations that can crosscut/work across many data types 
	- unit of work 
		- OO classes, instances, objects 
		- FP functions
	- architecture 
		- OO create inheritance hierarchies (Person -> Student) with methods and data tightly boudn together 
		- FP favors general polymorphic functions that crosscut different data types and avoids the use of `this`
			- using `this` is problematic because it gives you access to isntance-level data outside of the method scope 
				- causes side effects
	- inheritance vs composition
		- OO relies heavily on class inheritance 
		- FP relies heavily on object composition
	- programming style 
		- OO imperative 
		- FP declaritive 
	- data and behavior 
		- OO tightly coupled in classes withmethods 
		- FP loosely coupled into pure, stand alone function s
	- state management  
		- OO favors mutation of objects via instance methods 
		- FP treats objects as immutable values 
	- control flow 
		- OO loops and conditionals 
		- FP functions and recursion 
	- thread safety 
		- OO difficult to achieve 
		- FP enables concurrent programming 
	- encapsulation 
		- OO needed to protect data integrity 
		- FP not needed because everything is immutable 


# FP thought process
	- separate long functions into shorter functions, each with a single ppurpose 
	- reduce the number of side effects by explicityly defining al larguments needed for hte functions to carry our their job 
	- decompose tasks into simple fucntions 
	- process data using fluent chains 
	- decrease the complexity of event driven code by enabling reactive paradigms 


# common methods and patterns
## run 
	- the return value of one function becomes input to the next function in a chain like manner
	- links each function in a chain like manner by passing 
## lambda expressions
	- e.g. JS arrow functions 
	- useful for being passed in as antoher fucntions arguments 
## compose 
	- a higher order function that accepts other functions as arguments 
## function chains 
	- a sequential invocatin of functions that share a common object return value
	- is lazy evaluated, i.e. it defers it execution until needed 
## value object pattern 
	- any object whose equality doesnt depend on identity or reference, just on its vaalue 
	- once ts created its state may not change 
	- e.g. numbers, strings, tuple, pair, point, zipCode, coordinate, money, date, etc.
	- is an object oriented design pattern that was inspired by OP
	- 

# examples 
```js 
	// algebra 
	// the composition of two functions
	// reads: f composed of g
	f * g = f(g(x))


	// value object in JS 
	// note that object.freeze doesnt freeze child objects
	const blah = Object.freeze(...)

```