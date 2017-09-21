# good links
  - [try clojure](http://www.tryclj.com/)
  - [clojure challenges](http://www.4clojure.com/)
  -

# about
  - is
    - a compiled language: does not need an interpreter but is compiled when the program starts
      - when you enter code into the REPL it will compilete it into a java class
      - is a one-pass compiler:
        - functions must be defined before they are called
    - functional programming language
    - dynamic language for reliable concurrent and parallel systems
    - family of languages (all very similar)
      - can be compiled to all three:
        - clojure for JVM/java platform
        - clojurescript for js + node
        - clojureCLR for .nt/clr
  -  good for:
    - large datasets
    - concurrent systems
    - simplicity and immutable data
    - working with existing systems and codebase
    - compact and fast
    - web applications
    - machine learning & data mining
    - search engines and data brokues
    - mobile back end APIs

# terminology
  - simple data: a concept that cannot be broken down; a piece of data that is not made of other data

  - evaluate: translate one expression into the next (usually by running it)
  - function: those things they taught you in algebra ha!
  - REPL: interactive program that lets you type and run code; read-eval-print loop
    - R: read: translates strings of characters into datastructures
    - E: evaluate: translates exactonly one data into exactly another data structure
    - Print: print the newly data structure to the screen in the format used by the reader
    - loop: return to the read step
  - data structures
    - vectors: arrays
    - maps: hashes
    - lists
    - sets
  - form:  the unit of compilation:
    - everything in clojure is a form

# installation
  - [java 1.6+]
  - [leiningen]
  - [homebrew]
    - to install leiningen


# leiningen
  - good for quick tests and running code snippets
  - gets the libraries your code needs
  - starts your project and your REPL
  - builds your distribution files, .jar files, and .war files
  - boot: competitor of leiningen
## dependency model:
  - maven model: dependencies are uploaded to repositories at a fixed version by authors
  - process
    1. looks at your config file
    2. builds a list of dependencies of your project and their deps
    3. searches for deps in public repositories
      - maven central repo
      - clojar community repo
    4. fetches and downloads
    5. stores in your local repository
      - ~/.m2/repo/...
    6. loads each dep into the project classpath for the java virtual machine so java can find the files
    7. packages up your project
### adding a dependency
    ```clj
      # leiningen dep format
        [org.clojure/core.async "0.2.374"]
      # maven format
        <dependency>
          <groupId>org.clojure</groupId>
          <artifactId>core.async</artifactId>
          <version>0.2.374</version>
        </dependency>

    ```
## leiningen project structure
  - readme.md: homepage for github
  - dev-resources: stuff required for development but not for distribution
  - project.clj: heart of the project
    - defines everything the proejct needs, and produces
  - resources: location to put files required to run the application
    - public: files that should be available through the web service
      - css files
      - js files
      - etc
  - src: where your application code lives
    - projectname: this directory has the same name as the project
      - handler.clj: this is the top namespace for the project
        - i.e. yourprojectname.handler
  - target: all the files leiningen produced when it built the project
    - yourprojectname.standalone.jar: suitable for shipping to a hosting service containing everything required to run this project
    - yourprojectname.jar: smaller vs of standalone only contains the project code without any of its dependencies
    - classes: all the intermediate files leiningen creates when it compiles your project
      - each function you create corrospond to a file within this directory
    - stale
  - test: where you write your unit tests
    - yourprojectname: directory for unit tests
## ahead of time compilation (AOT)
  - compiles your project in advance and stores it in a jar file
  - steps
    1. edit yourproject.handler.clj file
      - add (:gen-class) to the ns directive: tells leiningen to generate class files for this namespace
    2.  go to project.clj file
      - add (:aot :all) to the {:dev} directive so AOT runs in development to AOT every class
      - add (:uberjar {:aot :all}) is run when you build the distribution files
        - informs the compiler to AOT the code when compiled for distribution

## deploying clojure programs
  - the standard deployment file for java is the .jar file
  - the standard deployment file for clojure web apps is the .war file
## cmds
  ```sh
    lein repl #start a clojure REPL
    lein new projectName #create a project
    lein new compojure projectName #create a project for the web based on the compojure template
    lein ring server-headless #run this inside a project to start a ring server
    lein deps :tree #print out all the deps of your project
    lein compile #compiles your code
    lein uberjar #build a jar file containing everything it needs to run
  ```

## cmd
# syntax
  - code is lists of
    - `(verb object object..)`
    - `(function arg1 arg2)`
    - `(if function arg1 arg2)`
  - s-expressions: i.e. expressions in clojure
  - top level forms are run when the program is loaded
    - any expression not embedded in another expression
  - everything has a return value
    - there is no return keyword
  - there is no break operator
    - the only way out of an expression is to yeild a value
    - best practice is to return `nil` or `null`
  -

## namespaces
  - all valus are stored in namespaces
  - namespaces are defined at the top of a file
  ```clj
    (ns someNameSpace)
  ```
## values
  - can have metadata
    - useful for:
      - defining types
      - compilers
      - third party tools
      - debugging
  - value: anything that does not change over time
  - simple data:
    - not complex/compound
    - characters, keywords, symbols (names, not their values), dates (sometimes), longs, doubles, ratios,
  - compound data: data that is made of other data (not simple)
    - maps, sets
  - identity: a sequence of values that change with time
### numbers
  - integer overflow is
  - Longs: `0 -1 428`
  - Doubles: `0.0001 42.3 0.0`
  - Ratios: `3/2 22/7 1/2`
  - BigInts: `9999999999N` (must put N)
  - BigDecimals: `0.0000000001M` (must put M)

  ```clj
    Long/MAX_VALUE # biggest number

  ```

### strings
  - Characters: `\a \b \c \space \tab` (\a is string a)
  - Strings: `"a b c \" d e f"` (\ is the escape char)

  ```clj

  ```


## operators:
  - come before their operand
  ```clj
    (* 2 x) : 2 * x
    (+ (* 2 x) 1) :(2 * x) + 1
    (/ (+ (* 2 x) 1) 2) : ((2 * x) + 1) / 2
      - returns 9/2
    (> x 45) # x > 45

  ```

## symbols
  - there are no variables
  - def: defines a symbol
  - declare: declare a symbol
  - used as names for things
  - look themselves up in the current namespace
  - cant:
    - start with a number
    - contain /
  - can
    - contain
      - all lettes and numbers
      - *+!-_`
  -
  ```clj
    # declare a symbol that will be given a value elseware
      (declare SOME_VAR)


    # define a symbol
      (def NAME VALUE)

    # define a symbol that has metadata and evalutes to true
      (def ^{:true? true} myname
        {:name "Noah"})
    # define a symbol that has metadata and evalutes to false
      (def ^{:true? false} myname
        {:name "Noah"})

    # get the metadata for a symbol
      (meta #'VAR_NAME)

    # pull symbol a out of the map
    # you must quote the symbol you want to retrieve
    # by prepending it with a single quote
      ('a {'a 24, 'b 42})

    # use let to define a series of things
      (let [varName1 (THIS_S_EXPRESSION)
            varName2 (THIS_OTHER_S_EXPRESSION)
                                      ])
  ```

### keywords
  - preferred over symbols
  ```clj
    # pull keyword a out of the map
    # prepend a colon infront of the keyword you want to retrieve
      (:a {:a 24, :b 42})
  ```

## maps
  - store names and values like hashes
  - immutable

  ```clj
    {:key "value"}
    {1 42,
    2 43,
    "fish" 'gold}

    # define a map and retrieve a value from it by its key
      (def blah {1 42})
      (blah '1) #returns 42
  ```

## sets
  - only store values
  - immutable

  ```clj
    #{value1 "value2"}

  ```

## vectors
  - like arrays in other languages
  - immutable
  - add and remove items from the top (number with the highest index)

  ```clj
    [1 2 3 4]
  ```

## lists
  - like liked-lists in many languages
  - immutable
  - data structures that our code is made

  ```clj
    (1 2 3 4)
  ```
## exceptions
  - AirthmeticException
  ```clj
    (try
      code
      (catch Exception varName2
        code)
      (finally
        code))
  ```

## math
  ```clj
    (quot 5 2) # floor division
    (rem 5 2) # modulo
    (double (/ 5 2)) # float division
  ```

## expressions
  - any expression anywhere can do everything
### do
  - takes any number of values and returns the last one
  - all values except the first one are usually print statements
  ```clj
    (do
          value-to-ignore
          value-to-ignore
          value-to-return)
  ```

## control-flow
### if
  - falsy values:
    - nil
    - false
  ```clj
    # you must always have truthy and falsy expressions
    # because you always have to return something
      (if CONDITION
          value-if-truthy
          value-if-falsy)
    # return 5 * x if x > 45 else return x
      (if (> x 45)
          (* 5 x)
          x)
  ```


### loop
  ```clj
    #
    (loop [VAR_NAME INITIAL_VALUE]
      code
      (recur NEW_VALUE_FOR_VAR_NAME)
  ```

## functions:
  - [defn](https://clojuredocs.org/clojure.core/defn)
  - functions are:
    - can be defined anywhere
    - can be stored anywhere
    - can be used anywhere
  - lexical closure: functions that return functions, i.e higher order functions/currying
  ```clj
    # literal syntax
      (fn [args]
        "optional doc string for description"
        (expression)
        (expression))

    # a function that takes one or two args
      (defn someName
        ([arg1]
          (println x))
        ([arg1 arg2]
          (println (+ x y))))

    # a function that accepts an arbitrary amount of args and stores it in a list
      (defn someName
        [& argument-list]
        (println argument-list))

    # short form syntax begins with #
      #(expression %1 %2)

    # define function addFor that accepts 1 argument
      (defn addFor [arg1]
        (+ (arg1) 4))

    # return a function from a function
      (defn functionOne [arg1]
        (let [thisVarEqual arg1]
          (fn [arg2])))
  ```

### global functions
  ```clj
    (println (* 2 x))
    (read-string "(string of code)") # reads the string and returns the code but does not run it
    (eval your_code) # the E in repl

    # read a string and evaluate it
      (eval (read-string "(+ 1 2 3)")) # returns 6

    # map function
      (map applyThisFunctionToThisList [1 2 3])
  ```

### macros
  - takes one list of code and returns another list of code
    - the final list of code (i.e. expression) that is returned is the actual code that is executed
  - macro expression: if an expression evaluates to a macro then that macro is evaluated before REPL continues to P
    - this READ -> EVAL loop continues until the expression evaluated does not evaluate to a macro

  ```clj
    # returns the first macro instead of evaluating it
    # useful for debugging
      (macroexpand-1 '(when true (print "hello")))
  ```
## regular expressions
 - start with #: `#"cat"`
  ```clj
    # returns the match if found
    (re-find #"findthis" "inside this")
  ```

## Java
  - you can call java methods on objects
  ```clj
    (. OBJECT METHOD_NAME)
    (. "asdf" toUpperCase) # returns "ASDF"

  ```
