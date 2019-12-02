# books 
	- function programming in javascript 
	- 	Luis Atencio

# links 
	- [fp run](http://mng.bz/nmax)


# FP ideas
	- gravitate towards framworks that help us create extensible and clean application architectures 
	- the more code you have the more bugs you have


# terminology 
	- object oriented design 


# programming paradigms
	- reactive programming 
		- facilitates working with data flow and propagation of change 
		- extremely importaant ahen delaing with asynchronous or event based code 
	- functional programming 
		- a way of writing code (and nothing else) 
		- a software development style that places a major emphasis on the use of functions 
		- purpose is to dabstract control flows and operations on data with fucntions in ordder to avoid side effects and reduce mutation of state in an applicaations 
	- object oriented programming
	- declarative programming 
		- expresses a set of oeprations without revealing how their implen=meneted or how data flows through them 
		- separates program description from evaluation 
		- focuses ont he use of expressions to describe what the logic of a program is without necessarily specifying its control flow or state changes 
			- e.g. SQL: you declare what rows to select, but you dont say how the select operation works, only what it does
	- imperative/procedural programming 
		- treats a computer program as merely a sequence of topt o bottom staements that changes the state of the system in order to compute a result
		- tells the computer, in GREAT detail, how to perform a certain task (e.g. a how to loop) 
		- 


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



# function vs object oriented design 


# function programming concepts 
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

# declarative vs imperative 
	- imeprative 
		- loop control structure 
			- hard to reuse and difficult to plug into other operations 
			- implies code thats constalty changing or mutating in response to new iterations 
			- 

# common methods 
## run 
	- the return value of one function becomes input to the next function in a chain like manner
	- links each function in a chain like manner by passing 
# lambda expressions
	- e.g. JS arrow functions 
	- useful for being passed in as antoher fucntions arguments 
	- 