# Javascript

- updated: 2023
- [web security in security dir](https://github.com/noahehall/theBookOfNoah/tree/master/0current/appdev/security)

## links

### interwebs

- [web standards](https://developer.mozilla.org/en-US/docs/Glossary/Web_standards)
- [eloquent javascript 3rd 2018](https://eloquentjavascript.net/)
- [web font performance](https://www.igvita.com/2014/01/31/optimizing-web-font-rendering-performance/)
- [es6 in depth articles](https://hacks.mozilla.org/2015/06/es6-in-depth-collections/)
- [progressive enhancement](https://jakearchibald.com/2013/progressive-enhancement-is-faster/)
- [web components in polymer](https://www.polymer-project.org/1.0/blog/es6)
- [real user monitoring: RUM](https://en.wikipedia.org/wiki/Real_user_monitoring)
- [latency vs bandwidth](https://www.igvita.com/2012/07/19/latency-the-new-web-performance-bottleneck/)
- [es6](https://ponyfoo.com/articles/es6)

### google web dev

- [google webdev](https://web.dev/)
- [Google Developer](https://developers.google.com/)
- [web dev patterns](https://web.dev/patterns/)
- [learn web dev](https://web.dev/learn/)
- [web dev explore](https://web.dev/explore/)

### js specification

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
  - [promises](- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  - [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### browser / server / apis

- [mdn browser API index](https://developer.mozilla.org/en-US/docs/Web/API)
  - [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
  - [the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document)
  - [events](https://developer.mozilla.org/en-US/docs/Web/Events)
  - [add event listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  - [remove event listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
  - [touch events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
  - [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - [request](https://developer.mozilla.org/en-US/docs/Web/API/Request)
- [serverice worker recipes](https://serviceworke.rs/)
- [cross origin resource sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
- [cache control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
- [chrome timeline tool](https://developer.chrome.com/docs/devtools/)
- [how browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm)
- [push notifications](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web)
- [remote debugging](https://jakearchibald.github.io/isserviceworkerready/index.html)
- [SEO](https://developers.google.com/webmasters/googleforwebmasters/)
- [service workers](https://jakearchibald.github.io/isserviceworkerready/index.html)
- [streams](https://jakearchibald.com/2016/streams-ftw/#streams-the-fetch-api)
- [web app manifest](https://web.dev/add-manifest/)
- [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [offline cookbook](https://jakearchibald.com/2014/offline-cookbook/)
- [PWA: progressive web apps](https://web.dev/progressive-web-apps/)

### tools

- [regex tester](https://regex101.com/)
- [yslow](http://yslow.org/)
- [server configs](https://github.com/h5bp/server-configs)
- [lighthouse](https://developers.google.com/web/tools/lighthouse/)
- [google mobile friendly test](https://search.google.com/search-console/mobile-friendly)
- [mozilla SSL configuration](https://mozilla.github.io/server-side-tls/ssl-config-generator/)
- [manage all service workers](chrome://inspect/#service-workers)
- [page speed insights](https://developers.google.com/speed/pagespeed/insights/)
- [apache/nginx pagespeed optimize tool](https://developers.google.com/speed/pagespeed/module/)
- [css triggers](https://csstriggers.com/)
- [JIT in action](http://mrale.ph/irhydra/2/)
- [FastDOM](https://github.com/wilsonpage/fastdom)
- [android emulator](https://developer.android.com/studio/run/emulator.html#netspeed)
- [webpage speed test](https://developers.google.com/web/fundamentals/performance/poor-connectivity/)
- [free web debugging proxy](http://www.telerik.com/fiddler)
- [augmented traffic control](http://facebook.github.io/augmented-traffic-control/)
- [javascript AST visualizer](http://resources.jointjs.com/demos/javascript-ast)
- [jank free](http://jankfree.org/)

## basics

- is single threaded: two things cannot run at the same time
  1. Javascript is in the same queue as painting, updating styles, and handling user actions (e.g. highliting text/interacting with form controls)

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
- web sockets: a persistent connection to a server
- sourcemaps: tell the browser to convert line and column offsets 'for' exceptions thrown in the bundle file back into the offsets and filenames of the original sources.
- transpilation: ESx > Babel > ESx

### Best Practices

- generally a good practice to have some throttling when testing sites. It'll help you see your sites performance from your users perspectives.
- OFFLINE FIRST
  - online first: we try the network first, if it doesnt, we show some fallback content (or 404 page)
  - offline first:
    1. full content: deliver page header + content from cache, then update via network request
       .update cache on SW install
       .strategy for unobtrusive app updates
       .get the user onto latest version
       .continually update cache of posts
       .selectively cache everything you want available offline (e.g. images, posts, etc.)
    2. header first: deliver page header from cache, attempt to retrieve content via network request, then fall back to cached content on device
  - cache photos/media instead of storing them in db.
    - db: read data > convert to blob > store it. loses streaming capabilities
    - cache: request data > streams back > and can display it as it arrives (i.e. piece by piece)
- browser requests
  1. request > http cache (found?) return page
  2. else > go to internet > retrieve html>
  3. other stuff needed ? > request css & javascript
- Search Fields
  1. auto-completing queries, correct misspellings, suggest related queries
  2. place filters above search results and always display # of results
- Ecommerce
  1. allow users to purchase as guests
- mobile sites
  - Make calls to action front end center
  - Make secondary tasks available through menus/below the fold
  - make common tasks easily available
  - keep menus short and sweet
  - limit scrolling unless supported by the design / content
  - Site search bar should be above the fold, and never in a menu
  - show as much content as possible without requiring registration
- SEO
  - Interstitials may cause a negative impact on search rankings

## syntax

### scope

- determines the life and death of a variable
- block scope: lives within {}
- function scope: lives within function definitions/expressions/closures
- scope chain:
  1. if the variable is not available in the current scope:
  2. look for it in the parent function, if its not available there
  3. go up one level, and continue all the way to the window (global) scope

### operators

- Spread Operator: expands an array/object into elements, i.e. flatten arrays and objects in function calls, array literals, destructuring assignment
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

### statements

- `break` Exits a 'switch' or a loop
- `continue` Breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop
- `debugger` Stops the execution of JavaScript, and calls (if available) the debugging function
- `do ... while` Executes a block of statements and repeats the block while a condition is true
- `for` Marks a block of statements to be executed as long as a condition is true
- `for ... in` Marks a block of statements to be executed for each element of an object (or array)
- `function` Declares a function
- `if ... else ... else if` Marks a block of statements to be executed depending on a condition
- `return` Stops the execution of a function and returns a value from that function
- `switch` Marks a block of statements to be executed depending on different cases
- `throw` Throws (generates) an error
  - `throw "This is my error message"`
- `try ... catch ... finally` Marks the block of statements to be executed when an error occurs in a try block, and implements error handling
- `var` Declares a variable
- `while` Marks a block of stat
- `object instanceof constructor `//tests whether an object has in its prototype chain the prototype property of a constructor.
  `constructos === String, Number, Object, Date etc.`
- `debugger` pauses app run time at this point in the app.
  1. you can open up console and type in any of the variables in the app, and it will print to the console
  2. you can type in a function name and review it
  3. you can click through the sources panel and view different things

### data conversion

- `String(x)` returns a string from a number variable x
- `toExponential()` Returns a string, with a number rounded and written using exponential notation.
- `toFixed()` Returns a string, with a number rounded and written with a specified number of decimals.
- `toPrecision()` Returns a string, with a number written with a specified length
- `Number("3.14") ` returns 3.14
- `parseFloat()` Parses a string and returns a floating point number
- `parseInt()` Parses a string and returns an integer

### destructuring

- Destructuring: pull values out of arrays/objects and assign them to variables

### Number

- todo

### Date

- todo

### String

- todo

### arrays

- todo

### objects

- obj.prototype.**proto**: The **proto** property of Object.prototype is an accessor property (a getter function and a setter function) that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.
- Object.setPrototypeOf(obj, prototype); sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

### Maps

- when to use which: ...

#### Map

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

#### WeakMap

- new WeakMap([iterable]): The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.

### sets

#### Set

- new Set([iterable]): The Set object lets you store unique values of any type, whether primitive values or object references.

#### WeakSet

- new WeakSet([iterable]); If an iterable object is passed, all of its elements will be added to the new WeakSet. null is treated as undefined.

### functions

- function parameters are variables that are local to the function
  - functions can return anything, even other functions
  - arguments = an array-like OBJECT containing all of the parameters passed to the function. it is NOT AN Array
- Rest Parameters: used in function arguments to capture a list of variables from arrays
- Default Arguments

#### arrow functions

### Control Flow

#### loops

- The break statement breaks the loop and continues executing the code after the loop (if any):
- The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

##### while

##### do while

##### for

##### for of

- The for...of syntax is specific to collections, rather than all objects. It will iterate in this manner over the elements of any collection that has a [Symbol.iterator] property.

##### for in

- The for...in statement iterates over the enumerable properties of an object, in original insertion order. For each distinct property, statements can be executed.

##### iterators

#### try catch

#### if

#### switch

#### generators

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

### variables

- let: block scoped vars
- const: constants that shouldnt be reassigned
- var

#### destructuring

### classes

#### prototypes

- helps you create formalized objects (i.e. classes)
  - its simply a function that creates an object
  - new = the constructor operator, creates a new instance of an object
  - prototype object allows you to extend functions functionality after its created

#### class

- An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.
- The super keyword is used to call functions on an object's parent.
- Abstract subclasses or mix-ins are templates for classes. An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible. The functionality must be provided by the superclass.
- classes can be used as an expression as well as a statement
  1. as an expression it returns a new class each time its evaluated (sort of like a factory)
- the extends clause accepts arbitrary expressions that return classes or constructors

#### Mixins

- mixin: is really a subclass factory, parameterized by the superclass, which produces mixin applications
- benefits of approach below: 0. the only difference between a mixin and a normal subclass is that a normal class has a fixed superclass, while a mixin definition doesnt (the mixin application does)
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

### metaprogramming

- metaprogrammaning: all about the underlying mechanics of the language, rather than “high level” data modelling or business logic. If programming can be described as “making programs”, meta-programming could be described as “making programs making programs”
  - Code Generation, aka eval & friends -
  - Reflection - finding out about and adjusting the structure and semantics of your application
    - Functions:
      - Function#name
      - Function#length
      - Function#bind
      - Function#call
      - Function#apply.
    - Object.getOwnProperties (As an aside,
  - Introspection: Reflection tools that don’t alter code, but instead gather information about it are often called

#### symbols

- reflection within implementation - you sprinkle them on your existing classes and objects to change the behaviour.
- use cases:
  - not iterable over
  - not fetched using the already existing Reflection tools
  - guaranteed not to conflict with other properties in the object!
  - If you create a symbol (var mysym = Symbol()) it creates a completely new value inside the JavaScript engine.
    - If you don’t have the reference for the Symbol, you just can’t use it.
    - This also means two symbols will never equal the same value, even if they have the same description.
  - Symbol.for(). This method creates a Symbol in a “global Symbol registry”. Small aside: this registry is also cross-realm, meaning a Symbol from an iframe or service worker will be the same as one generated from your existing frame:

#### Reflect

- all about Reflection through introspection - used to discover very low level information about your code.

#### Proxy

- Reflection through intercession - wrapping objects and intercepting their behaviours through traps.
- proxy types
  - no-op forwarding proxy
  - validation proxy

### regexp

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

### concurrency

- asynchronous: statements occur in multiple timelines, in an unknown order irregardless of how they are defined in code
  e.g. network requests, events, threads, timeouts, etc.
- synchronous: statements happen in order as defined, in a single timeline
- callbacks: pass one function (cb) to another function, and the cb is invoked when certain conditions are met
  - problems:
    1. how do you handle errors ? do all type of errors get handled the same way ?
    2. Pyramid of doom / callback hell:

#### promises

- try catch wrapper around code that will finish at an unpredictable time
  1. can only succeed/fail once
  2. cannot switch from success to failure/vice versa
  3. if a promise has succeeded/failed, and you later add a success/failure callback, the correct callback will be invoked, even though the event took place earlier
  4. any object with a then method can be used as and integrated with native promises
- Promise States
  1. fulfilled (resolved): action related to the promise has succeeded
  2. rejected (failure): action related to the promise has failed
  3. pending: not yet fulfilled / rejected
  4. settled: promise has either fulfilled / rejected.
  - a promise can only be settled once, whereas events can fire multiple times
  - promises are potentially blocking since they are created and settled on the main thread
- Promise stages:
  1. wrapping: (value promise creation)
  - create a promise that wrapps an async action
  2. thening (value -> action):
  - any object that returns a .then is thenable
  - any thenable can become part of a chain of thens/asynchronous work
  3. catching (value -> recovery):
  - javascript calls the NEXT CATCH in the chain when an error occurs or a promise is rejected
- FYI
  1. each Then is also asynchronous, so you can return a promise from a then, and the next then will only execute when the new promise is settled
  2. the `.catch()` chain is just sugar for `then(successFunction, errorFunction)`
  3. promise rejections skip forward to the next then() with a rejection callback or catch chain
  4. rejections happen when a promise is explicitly rejected, or implicetly if an error is thrown in the constructor callback
  - thus, its best to do all your promise-related work inside the promise constructor callback, so errors are automatically caught and become rejections
  5. you can combine generators and promises to write async code that looks like and easy to follow like sync code

#### async await

- basics
  1. allow you to write promise-based code as if it were syncrhonous, but without blocking the main thread
  2. Note that `await` may only be used in functions prepended with the `async` keyword
  3. suspends execution in your context until the promise settles
  4. `async` Function always returns a Promise
  5. anything prepended with `await` is passed through Promise.resolve() so you can safely await non-native promises
- use cases
  1. reduce complex promise logic
  2. convert object/class methods to promises
  - Class constructors and getters/settings cannot be async.
  3. easily run multiple async logic in serial/parallel
  4. easily make requests in parallel but take action in order they were called
  5. use them on every promise-returning function! Not only do they make your code tider, but it makes sure that function will always return a promise.

#### timers

- timers
  ```
  	setTimeout(someFunctionName, milliseconds); //runs someFunctionName ONCE after X milliseconds
  	setInterval(someFunctionName, milliseconds); //runs someFunctionName EVERY X milliseconds
  	clearInterval(intervalHandle) //you must assign setInterval to a variable
  	clearTimeout(timeoutHandle) //you must assign setTimeout to a variable
  ```

### math

### module loaders

- todo

## Web Fundamentals

### CORS

- cross origin resource sharing
- A resource makes a cross-origin HTTP request when it requests a resource from a different domain, or port than the one which the first resource itself serves.
- the CORS mechanism gves web servers cross-domain access controls, which enable secure cross-domain transfers
  - the [CORS protocol](https://fetch.spec.whatwg.org/#http-cors-protocol) can enable cross-site HTTP requests for:
    1. invocations of XMLHttpRequest/Fetch api
    2. web fonts
    3. images/video frames drawn to canvas using drawImage
    4. stylesheets
    5. scripts
  - add HTTP headers that allow web servers to describe the set of origins that are permitted to read
  - for HTTP methods with server side-effects (e.g. `POST`), the spec mandates that browsers _preflight_ the request to retrieve supported methods with an `HTTP OPTIONS` request method, and then upon _approval_ from the server, sending the actual request
  - servers can notify clients whether crednetials (e.g. cookies) should be sent with requests
- TERMINOLOGY
  1. Simple requests: requests types that don't trigger a `CORS preflight`, i.e. GET, HEAD, POST
- server perspective
  1. set _response.header_ `Access-Control-Allow-Origin:` to the domains that can access the server's resources
  - allow all: `Access-Control-Allow-Origin: *`
  - allow specific: `Access-Control-Allow-Origin: http://foo.example`
    - you can programmatically update this permit multiple domains access without using the `*` flag

### Progressive Web apps

#### Offline Web Apps

#### Service Workers

- `window.navigator.serviceWorker`
- service worker: a script your browser runs in the background and listens for and reacts to arbitrary events
  - each page the service worker controls, it hijacks all events and allows you to operate on them.
  - are limited to HTTPS, since intercepting network requests can be super dangerous in the wrong hands
  1. cant access the DOM directly, but communicates with the pages it controls by responding to messages via the [postMessage](https://www.html5rocks.com/en/tutorials/workers/basics/) interface
  2. is a programmable network proxy, allowing you to control how network requests from your page are handled
  3. is terminated when not in use, and restarted when its nexted needed, so never rely on global state within a SW onfetch and onmessage handlers
  4. has full access to the indexedDB api
  5. make extensive use of promises
- use cases
  1. adding offline support
  2. control the cache
  3. sending push notifications
  - You could send push notifications from the browser to your users about new posts, even if the client has closed your page, since service workers are in constant communication with your server in background.
  4. doing background sync with service workers
  5. Capability reporting
  6. Client-side Load Balancer
  7. Differential update of text files
  8. Support a previous unsupported image format in your browser!
  9. Save forms information even if theres no internet at the moment: Your application could have a huge form to send information for and, in case the user lost connection, the information could be saved in a Service Worker, even when the user is offline, and be sent to your server when the connection is back.
  10. Faster page loads: You could cache scripts, images, stylesheets, static pages, etc on a Service Worker on a first page-load and run a faster page loading on subsequent requests. The approach is almost the same if you relate it with browser caching but differs with when talking about requests: browser caching requests are always made and stops only if you already have the information needed and with Service Workers caching, no requests are made to the server.
  11. for some changes (e.g. minor, or security fixes) you may want to force changes to users
  12. [push notifications](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web)
  13. [background sync](https://developers.google.com/web/updates/2015/12/background-sync)
- life CYCLE
  1. registration step: register a SW in your page's javascript: the browser will then install the SWin the background
  2. SW Install step: you specify which static assets to cache. if all assets are successfully downloaded and cached, the SW becomes activated
  - create/open a cache
  - cache static assets
  3. SW Activated step: handle management of old caches
  - for all pages within the SW scope, the SW will act as a Proxy or be terminated (to save memory),
  - clear current cache / delete old caches if upgrading to a new version
  - have the activated service worker take control immediately
    - this is the 'idle' phase
- process:

  1. service workers are instantiated via javascript in the window, and can only take control of pages that are LOADED after they are instantiated.

  - page 1 loads > instantiates sw registration file > makes requests (none are intercepted)
  - user refreshes (causes new load) > sw still in browser > requests are intercepted

  2. service worker intercepts all requests and triggers a 'fetch' event for each
  3. instantiating a new SW can only occur if all pages controlled by the current SW are gone. this ensures only one version of your site exists at any given time

  - the new SW is in 'waiting' mode until the current SW is gone
  - only occurs if the page closes, or the user navigates to a page not controlled by the current SW

  4. users are notified that a new SW is ready by changing the browser hamburger button in the top right (at least on chrome)

  - when the browser refetches a service worker, it goes through the browser cache for all requests
  - it is good to set your SW CACHE TIME TO ZERO!!!! this way they are updated as soon as possible
    -updates to will bypass the browser cache if the SW it has is > than the cache time

- service worker hijaking workflow:
  1. client loads
  2. service workers interact with caches
  3. service workers interact with http caches
  4. service workers interact with network/internet
- network flow: browser requests > service worker > http cache > internet
- gotchas
  - browsers only update service workers on page reload, or if there is a change to the SW (e.g. change cache name)
    - the new SW will have its only install event so you can use this time to get an updated cache
- DEV TOOLS:
  1. click the down arrow next to 'top' and select your SW file
  2. now you can interact with your SW
     self.registration
  3. you can debug SW same as anything else:
     sources > click SW file > set breakpoints, etc.
  4. click the application/resources tab and select the SW option
- Basic steps:
  - registration
    1. in a script on the page, register a service worker
    2. the service worker is registered on an origin, and controls a subset of paths (or root, for all paths)
       navigator.serviceWorker.register....
  - do stuff!
    1. intercept network requests/events and do something with them (e.g. store the response in cache)
       self.addEventListener....
       caches.open...
    2. events: install, fetch,
       event.someMethod()
    3. caches.open(...)
       cache.someMethod()
- methods
  - postMessage(): send messages to/from SW
  - skipWaiting()
    - forces the waiting service worker to become the active service worker.
    - call this when a user hits the refresh button
- events
  - INSTALL: when a browser sets up a SW for the first time, the install event is fired.
  - ACTIVATE: when a new SW is finished installing and ready to control pages, use this event to delete old caches
  - FETCH: every browser request triggers a fetch, useful for hijacking/intercepting
  - MESSAGE: receive/post messages from/to the client (i.e. a page/document)

### Web Performance

- page performance
- browser rendering optimization

### Client-Server Communications

#### HTTP: hypertext transfer protocol:

- hypertext = text with links
- transfer protocol: rules for moving things across the web
- clients: asks (requests) servers for resources
- servers: store information and sends (response)
- REST: Representational State transfer
  - state transition: going from one state (page) to another (page)
  1. separate client from server
  2. should not hold state between requests (all information is sent with each response)
  3. use HTTP and HTTP methods
- HTTP Requests:
  1. Request: tells the server what kind of request (method) is being sent
     // POST /codecademy/learn-http HTTP/1.1
  2. Header: sends the server additional information, e.g. which client is making the request
     // Host: www.codecademy.com
     // Content-Type: text/html; charset=UTF-8
  3. body: contains the data being sent
     GET: body = empty
     POST/UPDATE/DELETE: body should not be empty
     // Name=Eric&Age=26
- [HTTP Responses](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
  - Status Codes: three digits, the starting number defines the type
  ```
    1xx: information
    2xx: success
    3xx: redirection
    4xx: client error
    5xx: server error
    6xx: unofficial Codes
      6.1: internet information services
      6.2: nginx
      6.3: cloudfare
  ```
- [HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
  1. GET: retrieve data
  2. HEAD: asks for a response identical to a GET request but without the response body
  3. POST: submit data
  4. PUT: replaces data
  5. DELETE: delete data
  6. CONNECT: establishes a tunnel to the server
  7. OPTIONS: describe the communication options
  8. TRACE: performs a message loop-back test along the path to the server
  9. PATCH: used to apply partial modifications

### browser events

- Event Registration: telling javascript you want to react to specific events when they happen via an event handler
  1. using tag attributes
     `onclick="alert('show this message on click')"`
  2. using dot notation
     `document.getElementById('blah').onclick=function(){alert('show this message on click');}`
  3. using addEventListener()
  - it allows us to check for multiple events in a single call (aka event propagation)
  - and events can be triggered via non DOM objects (i.e. write your own events)
  - it is not supported by IE 8 or lower (you have to use an if statement to check for the other one)
- event.preventDefault(): stops the browser from continuing to process the event, it does not stop propagation
- event.stopPropoagation(): prevents further propagation of the event in the capturing and bubbling phases
- Event objects
  - capturing an event returns an event object
  - event objects will be different in each browser, console log it to see:
  - event info
    1. type = e.g. click
    2. timestamp = the time it happened
    3. defaultPrevented = if you are preventing the default behavior
  - event targeting info
    1. currentTarget = the element the event was assigned to
    2. target = the element the event originated from
    3. srcElement = the actuall element that fired the event
    4. fromElement = mouse over and mouse out events
    5. toElement = mouse over and mouse event events
  - coordinate info:
    1. screen X,Y: position relative to the users screen
    2. layer x, y: position relative to the another positioned event
    3. client x,y: position relative to the window
    4. page x,y: position relative to the document
    5. offset x,y: position relative to the element that fired the event
  - key/mouse info
    1. charCode/Keycode: which character was pressed
    2. altKey:
    3. shiftKey:
    4. ctrlKey:
    5. button:
  - Event propagation
    - a parent event can capture events from is child elements
    - only available when using addEventListener
  - capturing phase: moves down from parent to child element
  - bubbling phase: moves up from child to parent element
  - stopping propoagation
    `e.stopPropoagation()``
    - stop the event from moving up/down the DOM
    - use this after you're done with the event
  - Event Default behavior
  - clicking on links, submitting forms, etc.
    `e.preventDefault() //stops the default behavior`
- touch events
  - low level APIs to support application specific touch interactions like two finger gestures
  - are similar to mouse events except they support simultaneous touches and at different locations on the touch surface
  - the TouchEvent interface encapsulates all of the touch points that are currently active
  - events: touchstart, touchmove, touchend, touchcancel, touchend

#### event tips

- setup event handlers on the body.onload attribute and attach event handlers to all elements that require it
- calling evt.preventDefault() on touchstart / first touchmove will cancel mouse events
  - instead only call preventDefault() on touchmove, or fire touch events as mouse events
- Use the event object to tailor actions to events.
  - Each touch event includes three lists of touches.
    1. touches: a list of all fingers currently on the screen.
    2. targetTouches: a list of fingers on the current DOM element.
    3. changedTouches: a list of fingers involved in the current event. For example, in a touchend event, this will be the finger that was removed.
  - These lists consist of objects that contain touch information:
    1. identifier: a number that uniquely identifies the current finger in the touch session.
    2. target: the DOM element that was the target of the action.
    3. client/page/screen coordinates: where on the screen the action happened.
    4. radius coordinates and rotationAngle: describe the ellipse that approximates finger shape.
- some mobile browsers will select text if a user long touches on the screen, which can be super annoying, disable by:
  - moz-user-select: none;
  - webkit-user-select: none;
  - ms-user-select: none;
  - user-select: none;

### browser DOM

- setting CSS
  ```
  	someelement.style.property = value
  		any property wtih hyphens (e.g. background-color) becomes camel case (e.g. backgroundColor)
  		to access the elements class, you have to use somelement.style.className
  ```
