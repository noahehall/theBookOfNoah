# good links
	- [oracle defining methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)
	- [oracle learning java](https://docs.oracle.com/javase/tutorial/java/index.html)
	- [oracle OO concepts](https://docs.oracle.com/javase/tutorial/java/concepts/index.html)
	- [oracle annotations](https://docs.oracle.com/javase/tutorial/java/annotations/index.html)
	- [oracle class path](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/classpath.html)


# about
	- released 1995
	- object oriented
	- Interpreted: compiled to bytecode (or dex if android) and interpreted at runtime (vs being run as machine code directly )
		- the bytecode can be moved between platforms without recompiling
	- multi threaded
	- dynamic (polyphormic behavior): declare a variable/object as one type, and then refer to it as its native type or any type its extended from

## JAVA stack
	0. operating system
	1. Java Virtual Machine (JVM): is platform specific
	2. Core runtime & additional libraries
		- Java 8: one monolothic file
		- Java 9: are modular, you pick and choose
	3. application-code
	- Java editions
		- JRE: Java runtime environment, java standard edition (SE)
			- not used on mobile devices, which have their own runtime
			- JDK: java development kid from oracle:
				- java: runtime
				- javac: compiler
				- javadoc: docs builder
				- jar: archive builder
		- ART: android runtime
		- JEE: java enterprise edition
		- JME: java micro edition: microcontrollers, sensors, mobile devices


## Deploy Java Application
		0. compile your application code
		1. package compiled code with required runtime libraries
		2. deploy package to system

# OO implementation
	- encapsulation
	- inheritance
		- class based inheritance
		- can only extend a single super class
		- but you can implement multiple interfaces
	- polymorphism
		- declare
	-

# Java environment
	- calls to native functions go through JNI

## memory management
	- managed memory access:  memory for objects are allocated automatically
		- memory types
			- stack: faster
				- local variables and function calls are stored in stack
			- heap: slower but more dynamic
				- always store complex objects that are being referenced by variables
				- always store member variables
### java garbage collector
	- responsible for allocating and deallocating memory
	- runs in its own thread
	- can destroy dereferenced objects, but is not required
		- you cannot force garbage collection, but you can tune it
	- objects are retained in memory until dereferenced
		- as long as any variable references an object in memory, that memory will be retained and will not be eligible for garbage collection
			- i.e. when you cant get to the object from your code any more
				0. local variables in methods and code blocks: once the method/code block is finished executing
				1. when you explicitly dereference a variable with null: `someVar = null`
	- garbage collector types for JRE (not android)
		0. serial: single threaded
		1. parallel: aka throughput: multithreaded
		2. garbage-first (G1): for server environments
		3. concurrent mark sweep (CMS): shorter pauses + shares resources

# addons
	- JShell: Java9+; allows you to run code snippets in terminal

# definitions
	- fields: variables that belong to classes


# basics
	- case sensitive
	- everything is a class
	- spaces, tabs, and line feeds are ignored and collapsed by compiler
	- all statements must end with a semicolon
	- identifiers must start with alpha characer / underscore
	- keywords cant be used as identifiers


.
# best practices & conventions
	- classes start with uppercase
	- methods start with lowercase
	- constants are all uppercase
		- `public static final String FIRSTNAME = 'YaNoah';`
	- memory management:
		- minimize # of objects you create
		-


# keywords
	- access modifiers
		- public
		- protected
		- private
	- types
		- void
		- String | String[] (array of strings)


# terminal
	```sh
		# compile a java file to bytecode
			javac com/example/blah/SomeClass.java # creates SomeClass.class
		# execute bytecode
			java com.example.blah.SomeClass #the folder structure, class name, and package name have to align else you'll need to set the class path (see links at top)
		# java
			java -version
		# jshell:  run any java statement in shell for testing statements
			jshell # start a java shell environment
				/help # get list of commands
				/exit #hmmm
				/history
				/list #get list of commands
					/2 #run the second command





	```


# class definition
	- all code is defined in classes
	- every class is in a single file, whose filename matches the name of the class `SomeClass.java`
	- main method: JVM will always look for the main method when running a class
		- the main method should always accept an array of strings
		-

	```java
		// example class
			// specify package
			package com.example;
			// specify class
			public class Main {
				// specify main method
				public static void main(String[] args) {
					System.out.println("Hello from Java!");
				}
			}

	```

# [method definition](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)
	- method definitions
		- components:
			- access modifiers
			- return type (required)
			- method name (required)
			- paranthesis (required)
				- empty or a comma-delimited input params each preceded by their data types
			- exception list
			- method body
		- best practices
			- method names always lower case
		```java
			public static void main(String[] args) {
				System.out.println("Hello from Java!");
			}

		```

# control flow
## loops
	```java
		for (int i=0; i < 10; i++) {
			// boom
		}

		// print every string in the array of strings
		for (String s :
            arrayOfStrings) {
              System.out.println(s);
            }

	```

# native classes
	```java
		// understanding system memory
			Runtime
				.maxMemoy()
				.totalMemory()

	```
