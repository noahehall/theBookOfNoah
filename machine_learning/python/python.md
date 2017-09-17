# links
  - [developers guide](https://docs.python.org/devguide/)
  - [python tut](https://docs.python.org/3/tutorial/index.html)
  - [coroutines with async and await async syntax](https://www.python.org/dev/peps/pep-0492/)
  - [decorators](https://docs.python.org/3/glossary.html#term-decorator)
  - [calls](https://docs.python.org/3/reference/expressions.html#calls)
  - [create multidimensional list](https://docs.python.org/3/faq/programming.html#faq-multidimensional-list)
  - [python data model](https://docs.python.org/3/reference/datamodel.html#objects)

## MUST DO
  - [compound statements](https://docs.python.org/3/reference/compound_stmts.html#class)
  - [collections - container datatypes](https://docs.python.org/3/library/collections.html#module-collections)
  - [errors and exceptions](https://docs.python.org/3/tutorial/errors.html)
  - [how tos](https://docs.python.org/3.6/howto/index.html)
  - [3.6 tutorial](https://docs.python.org/3.6/tutorial/index.html)
  - [import system](https://docs.python.org/3.6/reference/import.html#searching)
  - [init py](http://mikegrouchy.com/blog/2012/05/be-pythonic-__init__py.html)
  - [expressions](https://docs.python.org/3.6/reference/expressions.html)

# pip
  - `pip3 install blah`
  - pip install virtualenv
    - https://virtualenv.pypa.io/en/1.9.X/


# [terminology](https://docs.python.org/3/glossary.html#term-coroutine)
  - iterators: an object containing value(s), that when called, returns the next value
  - generator functions: function that creates an iterator
  - class: a datatype for reusing code.
    - the definition that is used to create an object
  - object: an instance of a class. everything in python is an object, and all objects are first class objects
    - ID: unique ID for an instance of an object that never changes for the life of the object
    - Type: identifies the class of the object and cannot change for the life of the object
    - Value: the content of the object
  - inheritance: one class inherits properties and methods from another class
  - polymorphism:  the provision of a single interface to entities of different types.
    -  A polymorphic type is one whose operations can also be applied to values of some other type, or types.
      - e.g.
        - a class 'animal' has method 'bark'
        - dog extends animal and returns 'woof'
        - wolf extens animal and returns 'howl'
        - person extends animal and returns 'i can bark like a dog'
    - There are several fundamentally different kinds of polymorphism:
      - [link to wikipedia](https://en.wikipedia.org/wiki/Polymorphism_(computer_science))
  - Model, View, Controller
    - MVC for classes:
      - model: class definitions for classes that extend some base class
      - view: the class definition for the base class
      - controller: the instantiation of the classes in the model
  - suite of code: a block of code in python is called a suite
    - suites are defined by a colin after the keyword and indenting the code underneath the keyword
  - first class object:
  - mutable objects: can change value
    - lists, dictionaries,
  - immutable objects: cannot change their value
    - numbers, tuples, strings
  - Lambda expressions: are used to create anonymous functions.
    - functions created with lambda expressions cannot contain statements or annotations.
  - decorator expressions: evaluated when a function is defined in the scope that contains the function definition
    -  The result must be a callable, which is invoked with the function object as the only argument. The returned value is bound to the function name instead of the function object. Multiple decorators are applied in nested fashion.
  - Coroutine function: can be suspended and resumed at many points
  - iterating: stepping through a data structure one value at a time
  - slicing: extracting parts of an object
  - hashable: An object is hashable if it has a hash value which never changes during its lifetime (it needs a __hash__() method), and can be compared to other objects (it needs an __eq__() method). Hashable objects which compare equal must have the same hash value.


# quickies
  - run a python file
    1. must be executable `chmod 755 filename`
    2. `python3 path/to/file`
  - determine your python path
    - `which python` or `which python3`
    - add that to the top of your python files
    - `#!/absolute/path/to/python/executable`
  - cli type `python` or `python3`
    - `ctrl d` exit python terminal



# Syntax
## basics
  - 4 spaces are standard indenting
    - blocks are created via indents similar to yaml files
    - the number of spaces must be consistent within a block
      - can be different between blocks
  - functions that are intended to be used internally and not by the consumer should be prefixed with _
  - structures (e.g. def, if, loops, etc) with one line of code can be written on one line
  - variables in python are references to objects
## keywords
  - yield: used inside a function to turn it into a generator function
    - when the function is called, it will return whatever statement is after the yield and pause execution of the function
    - the next time the function is called, it will continue execution starting with the next line after the yield


## operators
  - [operator precedence](https://docs.python.org/3/reference/expressions.html#operator-precedence)
  ```py
    # assignment
      a = 1
    # unpacking
      x, y = [1, 2]

    # comparisons, identity
      # compare by IDentity, must refer to same object
        x is y
        x is not y
      # compare by value doesnt check id
        ==, < <= > >= !=
      # boolean operators
        x == y and x < z
        x == y or x > z
        not x # if x is false returns true

    # membership tests
      x not in (a,b,c)
      x in (a,b,x)

    # bitwise
      #|,^,&
    # shifts
      # <<,>>
    # Multiplication, matrix multiplication division, remainder (modulo), exponentiation
      # *, @, /, //, %, **
    # Await expression
      # await x
    # Subscription, slicing, call, attribute reference
      # x[index], x[index:index], x(arguments...), x.attribute
    # Binding or tuple display, list display, dictionary display, set display
      # (expressions...), [expressions...], {key: value...}, {expressions...}
      # binding operator: parenthesis whenever they are not a tuple

    # slice operator: extract things from objects
    # useful for matrixes and anything that has more than 2 dimensions
    # returns an iterator
      # get the 27th index
        list[27]
      # get index 0 - 9, ranges are not inclusive
        list[0:10]
      # get every third(step = 3) member from index 0 - 9
        list[0:10:3]
      # overwrite every third member from index 0 - 9
        list[0:10:3] = (99, 99, 99, 99)
  ```
  ```py
    # operator precedence
    # better off just using parenthesis (the binding operator)
      (expressions...), [expressions...], {key: value...}, {expressions...}
      x[index], x[index:index], x(arguments...), x.attribute
      await x
      **
      +x, -x, ~x
      *, @, /, //, %
      +, -
      <<, >>
      &
      ^
      |
      in, not in, is, is not, <, <=, >, >=, !=, ==
      not x
      and
      or
      if - else
      #lambda
  ```


## exceptions
  - [read more](https://docs.python.org/3.6/tutorial/errors.html)
  - syntax errors: parsing errors that cause exceptions
  - exceptions: Errors detected during execution
    - Even if a statement or expression is syntactically correct, it may cause an error when an attempt is made to execute it.
  ```py
    # catch an error
      try:
        # potential exception raising code here
      except IOError as e:
        # capture IOError and assign to e
      except Exception as e:
        # capture ALL exceptions and assign to e
      except (RuntimeError, TypeError, NameError):
        # capture specific types of errors
      except:
        # capture ALL exceptions without assigning it to variable
      else:
        # optional clause: do this if no errors occur
      finally:
        # optional clause: always do whether an exception is raised or not
        # useful for releasing external resources (such as files or network connections), regardless of whether the use of the resource was successful.
  ```
### raising exceptions
  ```py
      try:
        # raise a general exception
          raise Exception('OMGError', 'You did something wrong')
        # raise a specific exception
          raise NameError('you did it again!')
      except Exception as e:
        # arguments that were raised are stored in e.args
          print(e.args)
        # unpack args
          x, y = e.args
  ```
### creating reusable exceptions
  - Exceptions should typically be derived from the Exception class, either directly or indirectly.
  - When creating a module that can raise several distinct errors, a common practice is to
    - create a base class for exceptions defined by that module
    - subclass that to create specific exception classes for different error conditions:
  ```py

  ```
### Traceback
  - see [Tracebook](#tracebook) section below

## simple statements
  - [read more](https://docs.python.org/3.6/reference/simple_stmts.html)
### expressions
  - [read more](https://docs.python.org/3.6/reference/expressions.html)
### assignment
#### augmented
#### annotated
### assert
### pass
### del
### return
### yield
### [for raise see exceptions section](#exceptions)
### break
### continue
### import
  - [read more](https://docs.python.org/3.6/reference/import.html)
  - packages: A Python module which can contain submodules or recursively, subpackages. Technically, a package is a Python module with an __path__ attribute.
    - useful To help organize modules and provide a naming hierarchy
    - think of packages as the directories on a file system and modules as files within directories
    - t’s important to keep in mind that all packages are modules, but not all modules are packages.
  - modules: Python has only one type of module object, and all modules are of this type, regardless of whether the module is implemented in Python, C, or something else.
    - All modules have a name. Subpackage names are separated from their parent package name by dots, akin to Python’s standard attribute access syntax.
  - regular package: has a directory containing an __init__.py file.
  - namespace package: A PEP 420 package which serves only as a container for subpackages.
    - is a composite of various portions, where each portion contributes a subpackage to the parent package.
    - may have no physical representation
    - they do
      - use a custom iterable type which will automatically perform a new search for package portions on the next import attempt within that package if the path of their parent package (or sys.path for a top level package) changes.
    - do not
      - use an ordinary list for their __path__ attribute.
      - have __init__.py file.
    - portion: A set of files in a single directory (possibly stored in a zip file) that contribute to a namespace package, as defined in PEP 420.
      - may reside in different locations on the file system Portions may also be found in zip files, on the network, or anywhere else that Python searches during import.
      -
  ```py
    # regular package structure
    # importing parent.one will implicitly execute parent/__init__.py and parent/one/__init__.py.
      parent/
        __init__.py
        one/
            __init__.py
        two/
            __init__.py
        three/
            __init__.py

  ```
#### future
### global
### nonlocal


## variables
  ```py
    # create multiple variables
    # a = 0 & b = 1
      a, b = 0, 1
  ```


## booleans
  ```py
    True
    False
  ```


## numbers : numeric type
### int
  ```py
    # int
      blah = 42
    # float
      blah = 42.0
    # convert to int
      blah = int(42.9)
    # convert to floating point
      blah = float(42)
  ```
### float
### complex
  ```py
    # a complex number with real part re, imaginary part im. im defaults to zero.
      complex(re, im)
  ```


## math
  ```py
    # floating point division always return floats
      num = 42 / 9
    # floor/integer division rounds down
      num = 42 // 9
    # round to number of decimal places
      num = round(42 / 9, 2)
    # modulo: get the remainder
      num = 42 % 9
    # divmod: floor division + module returned as tuple
      # returns (1, 2)
      divmod(5,3)
  ```

## mapping types
  - A mapping object maps hashable values to arbitrary objects
  - only standard mapping type is dict
  - values that cant be keys
    - Values that are not hashable,
    - values containing lists,
    - values containing dictionaries
    - values containing other mutable types (that are compared by value rather than by object identity)
  - it is unwise to use numbers as keys because
    - computers store floating-point numbers as approximations
  - creation
    - {'jack': 4098, 'sjoerd': 4127}
    - dict constructor
### dict : mutable
  ```py
    # create a dictionary with dict class so you dont need quotes for key names
      blah = dict(
        one = 1
        two = 'two'
      )

    # create with curlies but now you need to quote key names
      blah = {
        'one': 1,
        'two': 'two'
      }

    # access a property on a dictionary
      blah['one']
    # set a property
      blah['seven'] = 7

  ```
#### [dictionary methods](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)
  ```py
    {}.keys()
    {}.get('key', 'return this if key not in dict')
  ```
#### [dictionary view objects](https://docs.python.org/3/library/stdtypes.html#dictionary-view-objects)
  - provide a dynamic view on the dictionary’s entries, which means that when the dictionary changes, the view reflects these changes.
  - objects returned by
    - dict.keys()
    - dict.values()
    - dict.items()
  ```py
    len(view)
    iter(view)
    x in view
  ```

## Sequence Type
### common operations
  ```py
    # Sequences of the same type also support comparisons.
      # boolean
        x in s
        x not in s
      # concatenation
        s + t
        s * 10
      # inspection
        len(s)
      # retrieval
        # all slice operations work on sequences
        min(s)
        max(s)
        # index of the first occurrence of x in s (at or after index i and before index j)
          s.index(x,i,j)
        s.count(x)
  ```
### mutable sequence types
  ```py
    # common operations
      x in s
      x not in s
      s + t
      s * n
      s[i]
      s[i:j]
      s[i:j:k]
      len(s)
      min(s)
      max(s)
      s.index(x[, i[, j]])
      s.count(x)
    # mutable operations
      # assignment
        s[i] = x
        s[i:j:k] = t
        s.append(x)
        s[len(s):len(s)] = [x] #same as above
        s.clear()
        del s[:] #same as above
        s.copy()
        s[:] #same as above
        s.extend(t)
        s += t #same as above
        # inserts x into s at the index given by i (same as s[i:i] = [x])
          s.insert(i, x)
          s[i:i] = [x] #same as above
        s.pop([i])
        s.remove(x)
        s.reverse()
  ```
### strings : immutable
  - sequences of Unicode code points.
  - creation
    - Single quotes: 'allows embedded "double" quotes'
    - Double quotes: "allows embedded 'single' quotes".
    - Triple quoted: '''Three single quotes''', """Three double quotes"""
      - may span multiple lines - all associated whitespace will be included in the string literal.
    - from other objects using the str constructor.
  ```py
    # creating strings
      blah = "string with double quotes"
      blah = 'string with \n escape character'

    # multiline string, the ending backslash in the first line escapes the new line
      blah = '''\
      string on
      multiple lines
      '''
    # python3 string interpolation
      blah = 'insert var a {} between previous brackets'.format(a)

    # python2 string interpolation obsolete dissapearing in python4
      blah = 'insert var a %s between previous brackets' % n


    # use r with regular expressions
      blah = r'string with no \n escape characters due to the r'.
  ```
### [string methods](https://docs.python.org/3/library/stdtypes.html#string-methods)
  - implement all common sequence operations
  ```py
    # only really useful listed, see link above
    ''.capitalize()
    ''.casefold()
    ''.count()
    ''.encode()
    ''.endswith()
    ''.expandtabs()
    ''.find()
    'insert var here {}'.format(n)
    ''.format_map
    ''.index()
    ''.isdigit()
    ''.isnumeric()
    ''.join()
    ''.lower()
    ''.partition()
    'inside this'.replace('this' 'that')
    ''.rfind()
    ''.rindex()
    ''.rpartition()
    ''.rsplit()
    ''.rstrip()
    ''.split()
    ''.splitlines()
    ''.startswith()
    ''.strip()
    ''.title()
    ''.upper()
    # format strings
      # prints the binary value of n
      '{:08b}'.format(n)
  ```
### tuple : immutable
  - typically used to store collections of heterogeneous data (such as the 2-tuples produced by the enumerate() built-in)
  - also used for cases where an immutable sequence of homogeneous data is needed (such as allowing storage in a set or dict instance).
  - For heterogeneous collections of data where access by name is clearer than access by index, collections.namedtuple() may be a more appropriate choice than a simple tuple object.
  - creation
      - it is actually the comma which makes a tuple, not the parentheses.
    - Using a pair of parentheses to denote the empty tuple: ()
    - Using a trailing comma for a singleton tuple: a, or (a,)
    - Separating items with commas: a, b, c or (a, b, c)
    - Using the tuple() built-in: tuple() or tuple(iterable)
  ```py
    blah = (1, 2, 3)
  ```
#### tuple methods
  - impelment all of the common sequence operations
### list : mutable
  - typically used to store collections of homogeneous items
  - creation
    - Using a pair of square brackets to denote the empty list: []
    - Using square brackets, separating items with commas: [a], [a, b, c]
    - Using a list comprehension: [x for x in iterable]
    - Using the type constructor: list() or list(iterable)
    - Many other operations also produce lists, including the sorted() built-in.
  ```py
    blah = [1, 2, 3]

  ```
#### list methods
  - implement all common and mutable sequence operations
  ```py
    [].sort()
    [].insert(blah)
  ```
### range : immutable
  - ranges in python are non inclusive: they never include the last argument
  - sequence of numbers and is commonly used for looping a specific number of times in for loops.
  - advantage of the range type over a regular list or tuple
    - a range object will always take the same (small) amount of memory, no matter the size of the range it represents
      - it only stores the start, stop and step values
      - calculates individual items and subranges as needed
  ```py
    # range to do something X times
      for x in range(10):
        print(x) #prints 0 -> 9
    # from 0 - 9
      range(0, 10)
    # from 0 - (-9)
      range(0, -10, -1)
    # 0, 3, 6, 9
      range(0, 10, 3)
    # create a list of numbers 0-99
      list = []
      list[:] = range(100)
    # same as above
      list(range(100))
    # iterate through a list of numbers: 0, 3, 6, 9
      for i in list[0:10:3]: print(i)
  ```
#### range methods
  - impelment all of the commone sequence operations
    - EXCEPT concatenition and repetition
### bytes
### bytearray
### memoryview
## set types
  ```py
    # common operations
    # read about other methods: https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset
      x in set
      len(set)
      for x in set
  ```
### set : mutable
  - unordered collection of distinct hashable objects
  - has no hash value
  - cannot be used as either a dictionary key or as an element of another set.
  - Common uses include
    - membership testing,
    - removing duplicates from a sequence,
    - computing mathematical operations such as intersection, union, difference, and symmetric difference.
  - creation
    - {'jack', 'sjoerd'}
    - set constructor
#### set methods
  - sets do not
    - record element position
    - order of insertion
    - indexing
    - slicing
    - other sequence-like behavior.
  ```py
    s.pop()
    s.clear()
    s.discard()
    s.remove()
    s.add()
    s.other
  ```
### frozenset : immutable + hashable
  - can be used as:
    - a dictionary key
    - an element of another set.


## Iterator types
  - concept of iteration over containers. This is implemented using two distinct methods; these are used to allow user-defined classes to support iteration.
  - [read more](https://docs.python.org/3/library/stdtypes.html#iterator-types)


## generator type
  - provide a convenient way to implement the iterator protocol.
  - [read more](https://docs.python.org/3/library/stdtypes.html#generator-types)

## context manager types
  - [read more](https://docs.python.org/3/library/stdtypes.html#context-manager-types)

## compound statements
  - [read more](https://docs.python.org/3.6/reference/compound_stmts.html#with)
### with
  - allows objects like files to be used in a way that ensures they are always cleaned up promptly and correctly.
  ```py
    # After the statement is executed, the file f is always closed, even if a problem was encountered while processing the lines.
      with open("myfile.txt") as f:
        for line in f:
          print(line, end="")
  ```
#### async with
  - is a coroutine
### conditionals
  ```py
    # conditional execution: if elif else
      if a < b:
        print('do this')
      elif a > b:
        print('do this')
      else:
        print('do this')

    # conditional value assignment
      blah = 'less than' if a < b else 'not less than'
    # conditional expression
      print('less than' if a < b else 'not less than')

  ```
#### if

### loops
  ```py
    # while loop: fibonacci
      a, b = 0, 1
      while b < 50:
        print(b)
        a, b = b, a + b
    # while loop: with index
      i = 0;
      while( i < len('th of this')):
        print(i)
        i += 1

    # for loop: blap must be an iterator
      for x in blap:
        print(x)

    # for loop: blap is a dictionary
      for x in blah:
        print(x, blah[x])

    # for loop: loop a dictionary in sorted order
      for x in sorted(d.keys()):
        print(x, blah[x])

    # for loop: iterate through a list
      for x in ( this, that, them):
        print(x) # this, that them

    # for loop: enumerating an iterator this is how you get indexes with a for loop
      for i, x in enumerate('this string'):
        print('index for {} is {}').format(x, i)

    # for + while loop: keywords
      for x in 'this string':
        # stop current iteration and go to next one
        if x == 't': continue
        # break out of loop
        if x == 'g': break
        print(x)
      else:
        print('always print this when finished')

  ```
#### while
#### for
#### [see try statement in exceptions section](#exceptions)
#### async for loop
  - is a coroutine
  ```py
  async for TARGET in ITER:
    BLOCK
  else:
    BLOCK2
  ```

### functions
#### custom functions
  - [read more](https://docs.python.org/3/library/stdtypes.html#functions)
  ```py
    # create a function with default immutable value
      def yourFunctionName(x='default value'):
        # your code....

    # create a function with a default immutable value (Best practice)
    # None allows you to modify the default variable within the function without modifying the default value
      def whats_on_the_telly(penguin=None):
        if penguin is None:
          penguin = []
    # create a generator function
      def genFunction(n):
        while(True):
          if n > 1: yield n
          n += 1

    # decorators
      @f1(arg)
      @f2
      def func():pass
  ```

#### global functions
  ```py
    # get the type of an object
      type(blah)
    # get the id of an object
      id(blah)
    #

  ```


### classes
  ```py
    # simple class
      class SomeClassName():
        def __init__(self, a,b='default value'):
          # __init__ is the constructor and is called when this class is istantiated
          # self is a reference to the current instance and is the first argument to ALL functions within classes
          # a and b are arguments sent in when the class is istantiated
          # all instance properties should be declared here
          self.a = a
          self.b = b
        def fibonaci(self):
          while(True):
            yield(self.b)
            self.a, self.b = self.b, self.a + self.b
        def funcWithMultipleArgs(self, blah, two)
      # instantiate the above class
        blah = SomeClassName(0, 1)
      # create a new class that inherits from the above class
        class OtherClassName(SomeClassName):
          #this class now has all properties and methods of SomeClassName

      # create a decorated class
        @f1(arg)
        @f2
        class Foo: pass
  ```

### coroutines
#### Coroutine functions
  ```py
    # In the body of a coroutine, any await and async identifiers become reserved keywords; await expressions, async for and async with can only be used in coroutine bodies.
      async def func(param1, param2):
        do_stuff()
        await some_coroutine()
  ```

## [modules](https://docs.python.org/3/library/stdtypes.html#modules)

## [code objects](https://docs.python.org/3/library/stdtypes.html#code-objects)
## [type objects](https://docs.python.org/3/library/stdtypes.html#type-objects)
## [null object](https://docs.python.org/3/library/stdtypes.html#the-null-object)
## [ellipsis object](https://docs.python.org/3/library/stdtypes.html#the-ellipsis-object)
## [not implemented object](https://docs.python.org/3/library/stdtypes.html#the-notimplemented-object)
## [special attributes](https://docs.python.org/3/library/stdtypes.html#special-attributes)



## io
  ```py
    # print to stdout? with a new line after the text
      print('this string')
    # print to stdout without a new line after the text
      print('this string', end='')
      print('this string'.strip())

  ```
### io.StringIO
  - [io.StringIO](https://docs.python.org/3/library/io.html#io.StringIO)
### working with files
  ```py
    #reading from files
      # open returns a file object
        fo = open('path/to/file.txt');
      # file object methods
        # returns an iterator
          fo.readlines()
      # use loop to read everyline in file
      for line in fo.readlines():
        print(line)

  ```


## async
### async wiht statement
  ```py
    async with EXPR as VAR:
      BLOCK
  ```





## modules
  - [all modules](https://docs.python.org/3.6/py-modindex.html)
### re
  - module for regex
  ```py
    # all examples require you to import re module
      import re

    # create a reusable regex pattern and ignore case
      pattern = re.compile(r'\d\d\d', re.I)
    # use the pattern
      if re.search(pattern, 'this blah'): print(True)

    # use a regex literal
      if re.search('(this|orthis)', 'is in this'): print(True)

    # search and replace: returns the new string whether a replacement occured or not
      re.sub('find|this|Regex', 'replace with this', 'inside of this')
  ```
#### match object methods
  ```py
    # match objects are returned from successful re.search
      match = re.search(...)
    # print all the matches
      if match: print(match.group())
  ```
#### re methods
  ```py
    # ignore case
     pattern = re.compile('regex string', re.I)

    # pattern methods
      pattern.sub('insert this', 'into this')

  ```
### Traceback
  - [read more](https://docs.python.org/3.6/library/traceback.html)
  - provides a standard interface to extract, format and print stack traces of Python programs.
  - exactly mimics the behavior of the Python interpreter when it prints a stack trace.
  - useful when you want to print stack traces under program control, such as in a “wrapper” around the interpreter.
  - format
    -  last line of the error message indicates what happened
      - The string printed as the exception type is the name of the built-in exception that occurred.
    - contains a stack traceback listing source lines;
      - however, it will not display lines read from standard input.
  ```py
    # type error
      Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
      TypeError: Can't convert 'int' object to str implicitly
  ```




## actions
  ```py
    # mimic a switch statement
    # values could be function calls
      choices = dict(
        one = 'do this',
        two = 'do that'
      )
      blah = 'not in dict'
      print(choices.get(blah, 'do this if cant get'))
  ```
