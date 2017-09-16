# pip
  - `pip3 install blah`
  - pip install virtualenv
    - https://virtualenv.pypa.io/en/1.9.X/

# terminology
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


# quickies
  - run a python file
    1. must be executable `chmod 755 filename`
    2. `python3 path/to/file`
  - determine your python path
    - `which python` or `which python3`
    - add that to the top of your python files
    - `#!/absolute/path/to/python/executable`
  -



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
  - str
  - int
  - tuple
  - list
  - dictionary

## operators
  ```py
    # assignment
      a = 1
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
  ```py
    # conditional expressions
      print('foo'  if a < b else 'bar')
  ```


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
    # string interpolation
      'insert var a {} between previous brackets'.format(a)
  ```


## numbers
  ```py

  ```

  

## dictionaries
  ```py
    # create a dictionary
      blah = dict(
        one = 1
        two = 'two'
      )
    # access a property on a dictionary
      blah['one']
  ```


## tuples
  ```py
    blah = (1, 2, 3)
  ```


# set


## list
  ```py
    blah = [1, 2, 3]
  ```


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

    # conditional value/expression
      blah = 'less than' if a < b else : 'not less than'

  ```


## loops
  ```py
    # while loop: fibonacci
      a, b = 0, 1
      while b < 50:
        print(b)
        a, b = b, a + b

    # for loop: blap must be an iterator
      for blah in blap:
        print(blah)
    # for loop: iterate through a list
      for blah in ( this, that, them):
        # do this
  ```


## functions
  ```py
    # create a function
      def yourFunctionName(x='default value'):
        # your code....

    # create a generator function
      def genFunction(n):
        while(True):
          if n > 1: yield n
          n += 1
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
  ```

## i/o
  ```py
    # print to stdout?
      print('this string')

  ```

### reading from files
  ```py
    #reading from files
      # open file
        fh = open('path/to/file.txt');
      # use loop to read everyline in file
      for line in fh.readlines():
        print(line)

  ```

## builtin functions
  ```py
    # get the type of an object
      type(blah)
    # get the id of an object
      id(blah)
  ```
## actions
