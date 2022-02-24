# NIM

- reading: complete
- copying: page 5: how does nim compile source code

## links

- [all nimble pkgs](https://nim-lang.org/docs/lib.html#nimble)
- [creating nim packages](https://github.com/nim-lang/nimble/#creating-packages)
- [nim docs](https://nim-lang.org/documentation.html)
- [ctrl f nim docs](https://nim-lang.org/docs/theindex.html)

## basics

### what is NIM?

- general purpose compiled programming languages designed to be efficient, expressive and elegant (in that order)
- created by `Andreas Rumpf` in 2005

- compilation workflow

  - translate source code into C code
  - TODO (fully documented later in the book)

- use cases
  - systems programming: operating systems, compilers, dvice drivers, and embedde system software can be written (when compiling to C)
  - IoT devices: physical devices with embedded electronics
  - page 5

### terminology

- zero-terminating
- local type inference: the only form of type inference that exists in nim

- statements

  - simple: cannot contain other statements; e.g. assignment, procedure calls, or return
  - complex: can contain other statements; e.g. control flow statements

- expressions: parts of a statement that usually result in a value

  - can contain `indentation` for better readability
  - e.g. after operators, open paranthesis, commas

- procedures: i.e. methods|functions

  - parameter: name of variable within a procedure signature
    - immutable (unless redeclared with var inside procedure body)
  - argument: value passed to a procedure as parameter's value
  - have an implicit `return result` variable declared that returns the value of its last expression [think shell fn]

    - the `result` variable is created at the start of the fn
      - don't declare it again e.g. with `var result`
      - is initialized with the type's defualt return value
      - the referential data types will be `nil` at the start of the procedure
        - may require initialization
    - a `return` statement with no expression is shorthand for `return result`

- forward declarations

  - concerns functions dependencies: every dynamic value (e.g. vars, procedurs, etc) need to be introduced to the compiler before it can be used
  - declare them without the `=` at the end

- iterators
  - should return a value and continue the next iteration
    - thats why you cant implement an iterator with a `proc`
  - to return & continue is called a `yield` statement

## best practices & gotchas

- use side-effect-free procedures
  - if making multiple assignments.
- use `when` > `if`
  - when writing platform/env specific code
- wrap iterators in procs of the same name which accumulate the result of the iterator and return it as a sequence
  - see [split fro the strutils module](https://nim-lang.org/docs/strutils.html)

### gotchas

- Indentation is Nim's way of grouping statements.
  - Indentation is done with spaces only, tabulators are not allowed.
- declaring multiple variables with a single assignment that calls a procedure can have unexpected results: the compiler will unroll the assignments and end up calling the procedure several times.
  - If the result of the procedure depends on side effects, your variables may end up having different values!
- The Nim library makes heavy use of overloading
  - each operator like + is just an overloaded proc
  - User-defined operators are permitted
    - but may reduce readability
- iterators vs procedures
  - similarities
    - each have different namespaces, thus a proc and an iterator can have the same name
  - iterators perspective
    - can only be called from loops
    - cannot contain a return statement
      - procs cannot contain a yield statement
    - have no implicit result variable
    - do not support recursion
    - cannot be forward declared
      - the compiler must be able to inline an iterator
- characters
  - must be one byte
  - cannot represent most `utf-i` characters
  - can represent one of the bytes that makes up a multi-byte utf-i character
- integers vs floats
  - Integer types are not converted to floating-point types automatically, nor vice versa
    - have to use `toInt`|`toFloat` procs
- arrays
  - you can have different dimensions with different index types
    - but each dimension in a multidimensional array must be of the same type

## style guide

- String literals are enclosed in double-quotes.
- parameter shadowing is possible, and an idiom (e.g. when you need it to be immutable)
- Nim does not allow silently throwing away a return value:
  - prepend the `proc` with `discard` or append `{.discardable.}` to the return type of proc instead

## types

- value types
  - all data types in Nim are value typed
  - the assignment operator copies (doesnt reference) when assignment a value to a variable
