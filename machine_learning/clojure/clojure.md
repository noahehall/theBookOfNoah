# good links
  - [try clojure](http://www.tryclj.com/)
  - [clojure challenges](http://www.4clojure.com/)
  -

# about
  - is
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
  - value: anything that does not change over time
  - simple data:
  - compound data: data that is made of other data (not simple)
  - identity: a sequence of values that change with time
  - evaluate: translate one expression into the next (usually by running it)
  - function: those things they taught you in algebra ha!
  - REPL: interactive program that lets you type and run code; read-eval-print loop
  -

# installation
  - [java 1.6+]
  - [leiningen]
  - [homebrew]
    - to install leiningen


# leiningen
  - good for quick tests and running code snippets

## cmd
# syntax
  - code is lists of
    - `(verb object object..)`
    - `(function arg1 arg2)`
    - `(if function arg1 arg2)`
  - s-expressions: i.e. expressions in clojure

## data types
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
    `(* 2 x)` : 2 * x
    `(+ (* 2 x) 1)` :(2 * x) + 1
    `(/ (+ (* 2 x) 1) 2)` : ((2 * x) + 1) / 2
      - returns 9/2
  ```


## variables
  ```clj
    (let [varName1 (THIS_S_EXPRESSION)
          varName2 (THIS_OTHER_S_EXPRESSION)
                                    ])
  ```

## exceptions
  - AirthmeticException

## math
  ```clj
    (quot 5 2) # floor division
    (rem 5 2) # modulo
    (double (/ 5 2)) # float division
  ```


## functions:
  - give their arguments names
  ```clj
    (defn functionName x)
  ```

## global functions
  - Regular Expressions: `#"cat"`
  ```clj
    (println (* 2 x))
  ```

## regular expressions
  ```clj
    (re-find #"findthis" "inside this")
  ```
