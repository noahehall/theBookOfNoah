# good links
  - [try clojure](http://www.tryclj.com/)
  - [clojure challenges](http://www.4clojure.com/)
  - [best quick reference](https://clojuredocs.org/quickref)

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
    ```clojure
      ; leiningen dep format
        [org.clojure/core.async "0.2.374"]
      ; maven format
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
  - target: all the files leiningen produced when it builds the project
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
  - namespaces hold vars
    - require a root value for all threads
  ```clojure
    ; load a namespace into the program
    ; specify at the top of your file
    ; the current namespace has access to all namespaces that were previously required
    ; you should always require the namespaces the current namespace depends on
    ; circular references are not allowed
      ; require a namespace without instantiating a symbol for any of its methods
        (require '[clojure.string]) ; preferred
        (require 'clojure.string)
        ; use a function from the namespace
          (clojure.string/capitalize "hi") ; "Hi"
      ; require a namespace and instantiate a symbol for one of its methods
        (require '[clojure.string :refer [capitalize]]) ;preferred
        ;use a function via its symbol
        (capitalize "hi") ;"Hi"
      ; full examples
        (ns someFile.handler
          :require  [compojure.core :refer :all] ;get every method from compojure.core
                    [compojure.route  :as route] ;now use it as route.method
                    [ring.middleware.defaults :refer [site-defaults]]
          (:gen-class)) ;gen-class is for AOT compilation


  ```
### variables
  - vars hold values
  - types
    - thread local vars:
      - variables local to a thread
      - cannot be passed to different threads
      - used as traditional values
  -
  ```clojure
    ; intern (add) var a to the current namespace
      (def a 4) ;a === 4 but its not dynamic so you cant change it with binding below
      (def ^:dynamic a 4) ;a === 4 and its dynamic so the below works
    (binding [a 5] ;a === 5
      (set! a 3) ;a === 3
      (set! a (+ a 3)) ;a === 6
      a) ; returns a === 6 for its local scope, a still === 4 in the outer scope
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

  ```clojure
    Long/MAX_VALUE ; biggest number

  ```
### math
  ```clojure
    (quot 5 2) ; floor division
    (rem 5 2) ; modulo
    (double (/ 5 2)) ; float division
  ```
### strings
  - Characters: `\a \b \c \space \tab` (\a is string a)
  - Strings: `"a b c \" d e f"` (\ is the escape char)

  ```clojure
    "i am a string"
    ; string methods
      (require '[clojure.string :as Str]) ; bring string methods into your namespace
      (Str/split "abc" #"") ; returns ["a" "b" "c"]
  ```


## operators:
  - come before their operand
  ```clojure
    (* 2 x) : 2 * x
    (+ (* 2 x) 1) :(2 * x) + 1
    (/ (+ (* 2 x) 1) 2) : ((2 * x) + 1) / 2
      - returns 9/2
    (> x 45) ; x > 45

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
  ```clojure
    ; declare a symbol that will be given a value elseware
      (declare SOME_VAR)


    ; define a symbol
      (def NAME VALUE)

    ; define a symbol that has metadata and evalutes to true
      (def ^{:true? true} myname
        {:name "Noah"})
    ; define a symbol that has metadata and evalutes to false
      (def ^{:true? false} myname
        {:name "Noah"})

    ; get the metadata for a symbol
      (meta #'VAR_NAME)

    ; pull symbol a out of the map
    ; you must quote the symbol you want to retrieve
    ; by prepending it with a single quote
      ('a {'a 24, 'b 42})

    ; use let to define a series of things
      (let [varName1 (THIS_S_EXPRESSION)
            varName2 (THIS_OTHER_S_EXPRESSION)
                                      ])
  ```

### keywords
  - preferred over symbols
  ```clojure
    ; create a keyword
      :random-key-name
    ; pull keyword a out of the map
    ; prepend a colon infront of the keyword you want to retrieve
      (:a {:a 24, :b 42})
  ```

## converting data types
  ```clojure
    (into [] '(1 2 3 4)) ==> [1 2 3 4]  ;"have a lazy list and want a vector"
    (into #{} [1 2 3 4]) ==> #{1 2 3 4} ; "have a vector and want a set"
    (into {} #{[1 2] [3 4]}) ==> {3 4, 1 2} ;"have a set of vectors want a map"
    (into #{} [{1 2} {3 4}]) ==> #{{1 2} {3 4}} ; "have a vector of maps want a set of maps"
  ```
## maps
  - store names and values like hashes
  - immutable

  ```clojure
    (hash-map :key value, :key2 value) ; create
    (assoc  {:key "value"} :key value) ;add to an existing map
    (conj  {:key "value"} [:key value]) ;add to an existing map
    (dissoc  {:key "value"} :key) ;remove from a map
    {:key "value"}
    {1 42,
    2 43,
    "fish" 'gold}

    ;; define a map and retrieve a value from it by its key
      (def blah {1 42})
      (blah '1) ;returns 42
  ```

## sets
  - only store values (in random order)
  - immutable
  - [sorted sets](https://clojuredocs.org/clojure.core/sorted-set)
  ```clojure
    (set [1 2 3]) ; returns #{1 2 3}
    (conj #{1 2 3} 4) ; add 4 to a set
    (disj #{1 2 3} 2) ; remove 2 from set
    (contains #{1 2 3} 2) ; boolean if 2 exists in set
    (#{1 2 3} 2) ; returns 2 if 2 is in set else nil
    #{value1 "value2"}

    ; sorted-set
      (sorted-set 1 2 3) ; returns #{1 2 3}
      (sorted-set 3 2 1 1) ; #{1 2 3}
  ```

## vectors
  - like arrays in other languages
  - immutable
  - add and remove items from the top (number with the highest index)

  ```clojure
    (vec (range 5)) ; [0 1 2 3 4]
    (vector 0 1 2 3 4) ; [0 1 2 3 4]
    (conj [1 2 3] 4) ; add to a vector
    (subvec [1 2 3 4 5] 1 3) ; remove and return index 1 up to but not including 3
    ([1 2 3 4 5] 2) ; retrieve item at index 2, this is calling the vector as a function
    (get [1 2 3 4 5] 2) ;retrieve item at index 2 else nil
    (get [1 2 3 4 5] 5 :not-found) ;retrieve item at index 5 else return :not-found
  ```

## lists
  - like liked-lists in many languages
  - immutable
  - data structures that our code is made
  - grow & shrinks from the beginning
  ```clojure
    (1 2 3 4)
    (list 1 2 3) ; create a list
    (conj '(1 2 3) 0) ; add 0 to beginning of list
    (first '(1 2 3)) ; retrieve first item 1
    (rest '(1 2 3)) ; retrieve rest of items (2 3)

    ; lazily generate a list from 0 to 8
      (for [x (range 0 9)]
        x)
  ```
## reference types for managing state changes: ref atom agent
  - state changes
    - synchronous changes: execution of code waits for current process to complete before continuing
    - coordinated changes: when two identities change together in a consistent way
    - uncoordinated change: two identities are allowed to change without regard to each other
  - time: epochal time model
### ref
  ```clojure
    ; coordinated and synchronous
    ; are changed via tranctions: either all change or they dont
    ; can run transactions many times:
      ;if two groups attempt to change the same refs at the same time
        ; whichever commits first wins
        ; if they happen at the same time, it will continue to retry
        ; this is called software transactional memory
          ; create a ref
            (def a (ref 1)) ;a === 1
            (def b (ref 0)) ;b === 0
          ; decriment a and increment b
            ;dosync starts a transaction
            ;commute will only do a commutative actions (things that are safe to do in any order like * or +), other transactions can change its ref and it will retry
              (dosync (commute a dec)
                (commute b inc))
            ;alter will only execute if it is the only who touched its operand in this transaction
              (dosync (alter a dec)
                (alter b inc))

  ```
### atom
  ```clojure
    ;uncoordinated and synchronous
    ;great for storing values you want to change like configuration options
      (def a (atom 0)) ;a === 0
      (swap! a inc) ;a === 1
      (@a) ;retrieve the value of a
  ```
### agent
  ```clojure
    ; uncoordinated and asynchronous
    ; send an operation to an agent and it will execute in the future
    ; its a queue that executes in the order it receives and only executes ieach job once
    ; any errors are stored in the agent
      (def a (agent 0)) ; a === 0
      (send a inc) ; increment a in the queue
      (send-off a inc) ;increment a in a different long term queue for blocking tasks
      (@a) retrieve the value of a


  ```


## exceptions
  - AirthmeticException
  ```clojure
    (try
      code
      (catch Exception varName2
        code)
      (finally
        code))
  ```



## expressions
  - any expression anywhere can do everything
### do
  - takes any number of values and returns the last one
  - all values except the first one are usually print statements
  ```clojure
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
  ```clojure
    ; you must always have truthy and falsy expressions
    ; because you always have to return something
      (if CONDITION
          value-if-truthy
          value-if-falsy)
    # return 5 * x if x > 45 else return x
      (if (> x 45)
          (* 5 x)
          x)
  ```


### loop
  ```clojure
    ; loop through numbers 0 to 8 and bound each value to var x
      (doseq [x (range 0 9)]
        (println x))
    ; confirm wtf is below
      (loop [VAR_NAME INITIAL_VALUE]
        code
        (recur NEW_VALUE_FOR_VAR_NAME)
  ```

## functions:
  - [defn](https://clojuredocs.org/clojure.core/defn)
  - functions can be:
    - defined anywhere
    - stored anywhere
    - used anywhere
  - lexical closure: functions that return functions, i.e higher order functions/currying
  ```clojure
    ; literal syntax
      (fn [args]
        "optional doc string for description"
        (expression)
        (expression))

    ; a function that runs different code based on the number of items in the vector its called with
      ; (someName ["this is arg 1"])
      ; (someName ["one arg" "two arg"])
        (defn someName
          ([arg1]
            (println arg1))
          ([arg1 arg2]
            (println (+ arg1 arg2))))
    ; function that destructures a hash-map
      ; (someName {:a 1 :b 2 :c "woops"})
        (defn someName
          [{:keys [a b c]}]
          (println "a is" a)
          (println "b is" b)
          (println "c is" c))

    ; a function that accepts an arbitrary amount of args and stores it in a list
      (defn someName
        [& argument-list]
        (println argument-list))

    ; short form syntax begins with #
    ; % === placeholder
      #(% 3) [*] ; = (* 3)

    ; define function addFor that accepts 1 argument
      (defn addFor [arg1]
        (+ (arg1) 4))

    ; return a function from a function
      (defn functionOne [arg1]
        (let [thisVarEqual arg1]
          (fn [arg2])))
  ```
### argument destructuring
  - shortcut for giving names to parts of collections
  - commonly used on maps and sequences
  ```clojure
    ; (range 5) === [0 1 2 3 4]
    ; a && b === 0 1
    ; the-rest === (2 3 4)
      (let [ [a b & the-rest] (range 5)]
          [a b the-rest])
  ```
### global functions
  ```clojure
    ; need to verify
    ; pos? even? count do future dotimes rand-int Thread/sleep
    (println (* 2 x))
    (read-string "(string of code)") ; reads the string and returns the code but does not run it
    (eval your_code) ; the E in repl

    ; read a string and evaluate it
      (eval (read-string "(+ 1 2 3)")) ; returns 6

    ; map function
    ; applies a change to each member of a sequence
    ; is lazy: results are computed as required
      (map / [1 2 3])
      (map #(% 3) [* + / -])

    ; filter
    ; throws out values where the function returns false
      (filter even? [1 2 3 4])

    ; reduce
    ; computes a single answer from a sequence
      ;(fn [answer-thus-far -the-next-value]
      ;      updated-answer)
    ; is not lazy
      (def getTotal (reduce + [1 2 3 4])) ;returns 10
  ```

### macros
  - takes one list of code and returns another list of code
    - the final list of code (i.e. expression) that is returned is the actual code that is executed
  - macro expression: if an expression evaluates to a macro then that macro is evaluated before REPL continues to P
    - this READ -> EVAL loop continues until the expression evaluated does not evaluate to a macro

  ```clojure
    ; returns the first macro instead of evaluating it
    ; useful for debugging
      (macroexpand-1 '(when true (print "hello")))

    ; threading macros beautify nested expressions
      ; thread-first macro
        ; instead of this
          (d (c (b (a 1) 2) 3) 4)
        ; places each result as the first argument to the next
          (-> (a 1)
              (b 2)
              (c 3)
              (d 4))
        ;; waterfall logic
          (->> (range) ; do this
            (filter even?) ; then this
            (take 5)) ; finally this
          ; => (0 2 4 6 8)
      ; cond macro
        ; instead of this
          (let [t 42]
            (if (neg? t)
              :brrr
              (if (< t 110)
                :hot
                (if (< t 80)
                  :brisk
                  :warm))))
        ; remove the if cmd and put return value if the condition is true
          (let [t 42]
            (cond
              (neg? t)  :brr
              (> t 110) :hot
              (< t 80)  :brisk
              :default  :warm))
  ```
## regular expressions
 - start with #: `#"cat"`
  ```clojure
    ; returns the match if found
    (re-find #"findthis" "inside this")
  ```

## Java
  - you can call java methods on objects
  ```clojure
    (. OBJECT METHOD_NAME)
    (. "asdf" toUpperCase) ; returns "ASDF"

  ```

## sequence manipulation
  - squence abstraction: can feed any output of one function to the input of another function
    - many data structures can be viewed sequentially
    - many functions work on sequential data
  - sequences in clojure are lazy by default
    - lazy sequences: can work on infinite sequences of data since evaluation is postponed until required
      - [location](./examples/ExerciseFiles/ch05/src/ch05/core.clj) Files/ch05/src/ch05/core.clj
      - the code is defined in one place, but the execution occurs elseware
        - this can cause error traces to be inaccurate
  ```clojure
    ; cons function: adds a value to the beginning of a sequence
    ; conj function: adds value to a sequence at the most efficient place
      ; vector: at the end
      ; list: at the beginning (linked lists grow from beginning)
    ; create laziness with a linked list
      ; it will produce a chunk of code that will execute only when read
      ; when read: will produce 'this new value' and link it to 'code to make the rest'
      (lazy-seq
        (cons this-new-value
          (code-to-make-the-rest)))

    ; create parallel laziness: only useful for big
      ; evaluates a sequence concurrently
      ; breaks a sequence into X chunks of Y size
      ; processes every member inside one chunk in parallel
      ; iterates the sequence of chunks in order
      ; without
        (map #(do (println "generating answer #" %) %)
              (range 10))
      ; with
        (pmap #(do (println "generating answer #" %) %)
              (range 10))

    ;preventing laziness
      (doall ..) ;when you want all the data now
      (dorun..) ;when you only care that the code runs
  ```

# io
  ```clojure
    ; open a file
      (def lines
        (line-seq (clojure.java.io/reader "path/to/file.clj")))
    ; write to a file
      (clojure.java.io/writer filename)
    ; read a file
      (slurp "path/to/file.txt")
  ```
