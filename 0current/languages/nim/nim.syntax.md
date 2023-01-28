## tips n tricks n gotchas

```python
# single line comment
#[
  multline comment
]#
# comment out code
when false:
  echo("this code is commented out")

# splitting statements
echo("only after: ",
  "punctuation")

nil.nil # special value that signifies the lack of a value for any reference type
discard someProc() # discard the return value of someProc
```

## operators

```python
  | # or, e.g. a | b
  $ # converts its input to a string, e.g. $someVar
  mod # modulo: always an int
  div # integer division: outputs an int
  & # string concatenation, returns new string
  == > < != # etc
  * - / # etc
  and or not xor

```

## variables

- case insensitive: except the first letter
  - distinct: Poop poop
  - identical: pOOp pOoP
- under-score insensitive: p_oop and poo_p are the same thing

```python
var poop = "flush" # runtime mutable
let poop = "hello" # runtime immutable
const poop = "flush" # compile time immutable
let `let` = "stropping"; echo(`let`) # stropping enables keywords as identifiers

# concatenation
echo "hello " & poop

```

## control flow

### if / when / case

```python
# runtime check
if 42 > 0:
  echo "true"
# ternary i just an if..else inline
if conditional: "true" else: false

# compile time check
when true:
  echo("this is a compile time if statement")
```

### loops

```python
for i in 0 .. <10:
  echo(i)

for thing in list:
  echo(thing)

```

## types

- value types: allocated on the stack
- reference types: are stored on the heap

### builtin primitives

```python
  # signed integers, 32bit/64bit depending on system
  # dividing 2 ints produces a float unless you use `div` operator
  int
    const
      a = 100
      b: int8 = 100
      c = 100'i8
      d: int = 1
  int8,16,32,64 # 8 = +-127, 16 = +-~32k, 32 = +-~2.1billion
  uint # positive integers, 32/64 bit depending on system,
    const
      b: uint8 = 100
      c = 100'u8
  uint8,16,32,64 # 8 = 0 -> 2550, 16 = ~65k, 32 = ~4billion

  # float
  float
    const
      a = 100.0
      b = 100.0'f32
      c = 4e7 # 4 * 10^7
  float32,64

  # must be enclosed in double quotes
  # escape sequences are parsed
  # always mutable
  string
    let
      poop = "flush"
      flush = r"raw string, no escape sequences required"
      multiline = """can be split on multiple lines, no escape sequences required"""


  # single ASCII characters, enclosed in single quotes
  char
    let
      a = 'a'
      b = '\109'
      c = '\x79'

  # escape sequences with chars, but you might as well use a string
    let
      carriageReturn = '\r'
      lineFeed = '\l'
      tab = '\t'
      backslash = '\\'
      singleQuote = '\''
      doubleQuote = '\"'

  # true | false
  bool
    let t = true

  # used as procedure return types, for type inference
  auto

  void


```

### builtin collections

```python
  # sequences use @ symbol
  let numbers = @[1, 2, 3, 4, 5]

  # arrays
  # static in size and homegenous in type
  # page 40
  var list: array[3, int]
  list[0] = 1 # etc

```

### user defined

```python
# create a type, associate a procedure, and instantiate an instance
type
  SomeType = object
    propName: type
# procedures arent directly associated with the dog type
# instead the self parameter defines the type it is associated with
proc someFn(self: SomeType):
  echo("Woof!")
let instance = SomeType(propName: someValue)
instance.someFn()


# tuples
(one, two)
```

## procedures

- procs with return values, the return value must be used OR discarded
  - the defualt return value is the default value of the return type
  - e.g. ints == 0, stings = "", seqs = @[]
  - if the last expression has a non void value, that value is implicitly returned
    - no need to use return keyword, nor is it idiomatic nim
  - every proc with a return value has an implicit `result` variable declared within its body
    - is mutable, and of the same type as the procedures returnType
      - its idiomatic nim to mutate the `result` var when needed
- procs without return values return void (adding void returnType is optional)
- procs cant be used before their definition without a forward declaration
  - forward declaration: the function signature without a body
- procs without parameters can omit the paranthesis in the difinition
- you can overload procedures by assigning the same name to procedures with different parameter signatures

```python
proc someName(paramNam: paramType, p2 = "with a default value"): returnType =
  # procedure body
  # default values dont need a type, its inferred
proc someName(p1, p2, p3: int): int =
  # you only need to specify the type on the last
  # if they are all the same
proc someName(p1: varargs[string]): string =
  # p1 is an object that takes an arbitrary amount of strings
proc someName = # returns void, and doesnt accept params
proc someName: void = echo "defined on one line"
proc someName: auto = "return type is inferred"

# anonymous proc: doesnt have a name and surrounded by paranthesis
var someName = ( proc (params): returnType = "poop")
# alternatively you can import sugar to get the -> symbol
import sugar
var someName = (params) -> returnType => "poop"
# can also be used as a type for a proc param that accepts a fn
proc someName(someFn: (params) -> returnType) =

# calling & discarding
echo someName("poop")
discard someName("oop")
someName("vargs1", "vargs2") # when using vargs
# returning values from procs
proc implicit: string =
  "i will be returned"
proc discarded: string =
  discard "i will not be returned"
proc explicit: string =
  return "I will be returned"
proc resultVar: string =
  result = "I will be returned"
proc resultVar2: string =
  result = ""
  result.add("I will be ")
  result.add("returned")
proc resultVar3: string =
  result = "I am the result"
  "I will cause an error"

```

## builtins

- sequtils: sequence utilities
  - map
  - filter
- future
  - ->
- strutils: string utilities
  - split
- system: builtin types, auto included in your source code
- sugar: I think this replaces `future` in the book

```python
  # sequtils ###############

  # returns a new sequence with the elements someProc deems true
  filter(someSequence, someProc)


```
