# Javascript

- updated: 2023

## links

### specification & reference

- interwebs
  - [web standards def = links](https://developer.mozilla.org/en-US/docs/Glossary/Web_standards)
  - [eloquent javascript 3rd 2018](https://eloquentjavascript.net/)
- [tc39: js spec](https://tc39.es/)
  - [latest ecmascript standard](https://262.ecma-international.org/)
  - [process](https://tc39.es/process-document/)
  - [javascript versions](https://www.w3schools.com/Js/js_versions.asp)
  - [ecmascript spec](https://tc39.es/ecma262/)
  - [current proposals - all stages](https://github.com/tc39/proposals)
- [mdn: reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
  - [prototypical inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - [destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
  - [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  - [Mixins](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)
  - [for in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
  - [for of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  - [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- tools
  - [regex tester](https://regex101.com/)

## basics

### tc39 and web standards

- versions
  - es1: 1997
  - es2: 1998
  - es3: 1999
  - es4: never released
  - es5: 2009
  - es6: 2015
  - es7: 2016
    - etc
- process
  - stage 0: anything goes
  - stage 1: tc39 expects to devote time to examine the problem space, solutions & cross-cutting concerns
  - stage 2: tc39 expects the feature to be developed and eventually included in the standard
  - stage 3: tc39 expects the solution is complete, but needs feedback from the field
  - stage 4: feature will be included in the next ecmascript version
- web standards: rules established by international standards bodies and defining how the web works
  - IETF: internet engineering taskforce: govern setup and use of URIs, HTTP, and MIME
  - W3C: specifications for markup language (HTML), style definitions (CSS), DOM, and accessibility
  - IANA: internet assigned numbers authority: naame and number registries
  - Ecma Intl: scripting standards, prominently for javascript
  - ISO: international organization for standardization; standards governing a diverse array of aspects, e.g. character encodings, website management and UI design

### terms

- prototype: each object has an internal link to another object, its prototype, that provides additional behavior and properties
- prototype chain: the sequence of linked objects from one object's prototype to another, all the way up until you reach the Null object (which does not have a prototype)
- function parameters are variables that are local to the function
- functions can return anything, even other functions
- arguments = an array-like OBJECT containing all of the parameters passed to the function. it is NOT AN Array
- anonymous enclosures
  - wrap the anonymous function in paranthesis
  - then call the function immediately by ending wtih () and send in parameters
  - any variables declared inside this function are local to this function
- function closures: defining a function within a function
- difference with `==`: The == operator applies various coercions to both sides (if they are not the same Type) before testing for equality (resulting in such behavior as "" == false being true), but Object.is doesn't coerce either value.
- difference with `===`: The === operator (and the == operator as well) treats the number values -0 and +0 as equal and treats Number.NaN as not equal to NaN.
- Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be redeclared.
- The function.name property returns the name of the function.
- proxies: Proxies enable creation of objects with the full range of behaviors available to host objects. Can be used 'for' interception, object virtualization, logging/profiling, etc.

### syntax

#### arrays

- dunno

#### objects

- obj.prototype.**proto**: The **proto** property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.
- Object.setPrototypeOf(obj, prototype); sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

#### Maps

- when to use which: ...

##### Map

- new Map([iterable]): The Map object holds key-value pairs. Any value (both objects and primitive values) may be used as either a key or a value.
- answer yes to any of the below, and you can justify using a map
  - Are keys usually unknown until run time? Do you need to look them up dynamically?
  - Do all values have the same type? Can they be used interchangeably?
  - Do you need keys that aren't strings?
  - Are key-value pairs frequently added or removed?
  - Do you have an arbitrary (easily changing) number of key-value pairs?
  - Is the collection iterated?
- properties
  - Map.prototype.size

##### WeakMap

- new WeakMap([iterable]): The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.

#### sets

##### Set

- new Set([iterable]): The Set object lets you store unique values of any type, whether primitive values or object references.

##### WeakSet

- new WeakSet([iterable]); If an iterable object is passed, all of its elements will be added to the new WeakSet. null is treated as undefined.

#### functions

#### Control Flow

##### loops

- The break statement breaks the loop and continues executing the code after the loop (if any):
- The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

###### while

##### do while

###### for

###### for of

- The for...of syntax is specific to collections, rather than all objects. It will iterate in this manner over the elements of any collection that has a [Symbol.iterator] property.

###### for in

- The for...in statement iterates over the enumerable properties of an object, in original insertion order. For each distinct property, statements can be executed.

###### iterators

##### try catch

##### if

##### switch

##### generators

- Generators: a function that can be exited, and entered multiple times
- yield: exit the function and send a value to the caller, and optionally receive a value back
- function.next(): retrieve and send data, executes up to and including the next yield statement
  - for each yield statement you need to call blah.next()
  - returns `{value: 'dataInAndOut', done: true|false}`
    1. value: data sent out from yield, or data sent in through next(someData);
    2. done:
    - false if function is not done, and can be entered again
    - true: if function is done, and should not be re-entered
  - you can access the value directly: `bloop.next().value;``
- use cases
  - asynchornous events
  - timers (e.g. setInterval)
- Generators should not be re-used, even if the for...of loop is terminated early, for example via the break keyword. Upon exiting a loop, the generator is closed and trying to iterate over it again does not yield any further results.

#### variables

##### destructuring

#### classes

- An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.
- The super keyword is used to call functions on an object's parent.
- Abstract subclasses or mix-ins are templates for classes. An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible. The functionality must be provided by the superclass.
- mixin: is really a subclass factory, parameterized by the superclass, which produces mixin applications

#### metaprogramming

##### symbols

- reflection within implementation - you sprinkle them on your existing classes and objects to change the behaviour.
- use cases:
  - not iterable over
  - not fetched using the already existing Reflection tools
  - guaranteed not to conflict with other properties in the object!
  - If you create a symbol (var mysym = Symbol()) it creates a completely new value inside the JavaScript engine.
    - If you don’t have the reference for the Symbol, you just can’t use it.
    - This also means two symbols will never equal the same value, even if they have the same description.
  - Symbol.for(). This method creates a Symbol in a “global Symbol registry”. Small aside: this registry is also cross-realm, meaning a Symbol from an iframe or service worker will be the same as one generated from your existing frame:

##### Reflect

- all about Reflection through introspection - used to discover very low level information about your code.

##### Proxy

- Reflection through intercession - wrapping objects and intercepting their behaviours through traps.
- proxy types
  - no-op forwarding proxy
  - validation proxy

#### regexp

- modifiers
  - i Perform case-insensitive matching
  - g Perform a global match (find all matches rather than stopping after the first match)
  - m Perform multiline matching
- quantifiers
  - n+ Matches any string that contains at least one n
  - n\* Matches any string that contains zero or more occurrences of n
  - n? Matches any string that contains zero or one occurrences of n
  - n{X} Matches any string that contains a sequence of X ns
  - n{X,Y} Matches any string that contains a sequence of X to Y ns
  - n{X,} Matches any string that contains a sequence of at least X ns
  - n$ Matches any string with n at the end of it
  - ^n Matches any string with n at the beginning of it
  - ?=n Matches any string that is followed by a specific string n
  - ?!n Matches any string that is not followed by a specific string n
- expressions: Brackets are used to find a range of characters:
  - [abc] Find any character between the brackets
  - [^abc] Find any character NOT between the brackets
  - [0-9] Find any digit between the brackets
  - [^0-9] Find any digit NOT between the brackets
  - (x|y) Find any of the alternatives specified
  - (?:YourRegexHere) non capturing group
    - will match YourRegexHere but wont return it as a match
    - i.e. it must PASS the test, but dont include it in the returned results
- groups
  - (x) Matches x and remembers the match. These are called capturing groups.
  - (?:x) Matches x but does not remember the match. These are called non-capturing groups.
- assertions
  - x(?=y) Matches x only if x is followed by y.
  - x(?!y) Matches x only if x is not followed by y.
- meta-characters: characters withs special meanings
  - . Find a single character, except newline or line terminator
  - \w Find a word character
  - \W Find a non-word character
  - \d Find a digit
  - \D Find a non-digit character
  - \s Find a whitespace character
  - \S Find a non-whitespace character
  - \b Find a match at the beginning/end of a word \bword\b
    - Before the first character in the string, if the first character is a word character.
    - After the last character in the string, if the last character is a word character.
    - Between two characters in the string, where one is a word
  - \B Find a match not at the beginning/end of a word
    - opposte of \b
  - \0 Find a NUL character
  - \n Find a new line character
  - \f Find a form feed character
  - \r Find a carriage return character
  - \t Find a tab character
  - \v Find a vertical tab character
  - \b match a word boundary \bword\b.
    - character and the other is not a word character.
  - \xxx Find the character specified by an octal number xxx
  - \xdd Find the character specified by a hexadecimal number dd
  - \uxxxx Find the Unicode character specified by a hexadecimal number xxxx
- Methods that use regular expressions
  - exec A RegExp method that executes a search for a match in a string. It returns an array of information.
  - test A RegExp method that tests for a match in a string. It returns true or false.
  - match A String method that executes a search for a match in a string. It returns an array of information or null on a mismatch.
  - search A String method that tests for a match in a string. It returns the index of the match, or -1 if the search fails.
  - replace A String method that executes a search for a match in a string, and replaces the matched substring with a replacement substring.
  - split A String method that uses a regular expression or a fixed string to break a string into an array of substrings.
