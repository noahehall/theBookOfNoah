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
	- managed memory access
	-
