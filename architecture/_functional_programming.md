# books 
	- function programming in javascript 
	- 	Luis Atencio

# links 
	- [fp run](http://mng.bz/nmax)


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
	- object oriented programming
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
	- declarative 
	- statelessness 
		- stateless code has 0 chance of changing/breaking global state
	- immutability 
	- pure functions 
		- functions that avoid side effects and changes  of state 
		- depends only on the input provided and not on any hiddenexternal state that may change during its evaluatin/between calls 
		- doesnt inflict changes beyond their scope, e.g. modyfing a global object /parameter passed by reference
		- have clear contracts as part of their signatures that describe clearly on all of the functions formal parameters
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
	- a program 
		- can be defined as a set of functions that processes a given input and procudes an output 
	- immutable data 
		- data that cannot be changed 
	- unit of modularity 
		- i.e. the unitt of work in FP is the function 
		- e.g. in object oriented programming the unit of work could be considered the class

# declarative vs imperative 
	- imeprative 
		- loop control structure 
			- hard to reuse and difficult to plug into other operations 
			- implies code thats constalty changing or mutating in response to new iterations 


# FP thought process
	- separate long functions into shorter functions, each with a single ppurpose 
	- reduce the number of side effects by explicityly defining al larguments needed for hte functions to carry our their job 
	- decompose tasks into simple fucntions 
	- process data using fluent chains 
	- decrease the complexity of event driven code by enabling reactive paradigms 

# common methods 
## run 
	- the return value of one function becomes input to the next function in a chain like manner
	- links each function in a chain like manner by passing 
# lambda expressions
	- e.g. JS arrow functions 
	- useful for being passed in as antoher fucntions arguments 
