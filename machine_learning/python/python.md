# links
  - [developers guide](https://docs.python.org/devguide/)
  - [python tut](https://docs.python.org/3/tutorial/index.html)
  - [coroutines with async and await async syntax](https://www.python.org/dev/peps/pep-0492/)
  - [decorators](https://docs.python.org/3/glossary.html#term-decorator)
  - [calls](https://docs.python.org/3/reference/expressions.html#calls)



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


## data types
  - str: immutable sequence
  - int: immutable number without decimal
  - float: immutable number with atleast one decimal
  - tuple: an immutable list, faster than list
  - list: a mutable a list
  - dict: immutable aggregate object
    - useful for creating associate lists
  - bool: True/False



## operators
  ```py
    # assignment
      a = 1

    # comparisons, membership tests identity
      #in, not in
      # compare by IDentity, must refer to same object
        x is y
        x is not y
      # compare by value doesnt check id
        ==, < <= > >= !=
      # boolean operators
        x == y and x < z
        x == y or x > z
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
  ```


## exceptions
  ```py
    # catch an error
    try:
      #do this that may contain an error
    except Exception as e:
      print(e)
    else:
      # optional clause: do this if no errors occur
    finally:
      # optional clause: always do whether an exception is raised or not
  ```


## expressions


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


## strings
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

    # get a char
      'blah'[3]

  ```
### string methods
  ```py
    'insert var here {}'.format(n)
    'get index up to but not including end index'[1:4]
    'get char at index'[1]

    # format strings
      # prints the binary value of n
      '{:08b}'.format(n)
  ```


## numbers
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


## dictionaries
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
### dictionary methods
  ```py
    {}.keys()
    {}.get('key', 'return this if key not in dict')
  ```


## tuples
  ```py
    blah = (1, 2, 3)
  ```


## list
  ```py
    blah = [1, 2, 3]
  ```
### list methods
  ```py
    [].append(blah)
    [].insert(blah)
  ```


# set




## iterators
  ```py
    # range to create list of numbers
      for x in range(10):
        print(x) #prints 0 -> 9
  ```


## conditionals
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


## loops
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
### async for loop
  ```py
  async for TARGET in ITER:
    BLOCK
  else:
    BLOCK2
  ```



## functions
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
### Coroutine functions
  ```py
    # In the body of a coroutine, any await and async identifiers become reserved keywords; await expressions, async for and async with can only be used in coroutine bodies.
      async def func(param1, param2):
        do_stuff()
        await some_coroutine()
  ```


## classes
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


## i/o
  ```py
    # print to stdout? with a new line after the text
      print('this string')
    # print to stdout without a new line after the text
      print('this string', end='')

  ```
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



## builtin functions
  ```py
    # get the type of an object
      type(blah)
    # get the id of an object
      id(blah)

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
  ```py

  ```
