# links
  - [all standard modules](https://docs.python.org/3.6/py-modindex.html)

# pypi third part modules
  - [third party python packages](https://pypi.python.org/pypi)

## installing third party modules
  1. download to disk
  2. run setup.py `$ python3 PATH/TO/setup.py install`
    - are installed into `python_directory/Lib/site-packages`
    - contain:
      - `package_name.egg-info` info about the module
      - `packge_name.py` uncompiled version of the module
      - `package_name.pyc` compiled version of the module
## basics
  - you can import modules at:
    - the top of the file
    - inside a function: useful to selectively import



# standard python modules
## string related
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

## number related
### random
  ```py
    import random

    # get a random integer
      random.randint(FROM_INT, TO_INT)


    # shuffle (randomize) a list
      random.shuffle(list(range(25)))
  ```

## date/time related
### datetime
  ```py
    import datetime

    # get current timestamp
      now = datetime.datetime.now()
      # get specifics from timestamp
        now.year|month|day|hour|minute|second|microsecond
  ```


## exception related
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


## db related
### SQLITE 3
#### basics
  - sqlite does:
    - not require separate db engine
    - use standard SQL
    - not require any configuration
  - sqlite is
    - server less
    - self contained
    - fully transactional
      - will buffer all commands: you must issue a `commit` cmd to persist to db
  -
#### sqlite3 administration
  - you have to use format to interpolate the TABLE_NAME
  ```py
    # import python library that supports sqlite3
      import sqlite3

    # create/connect to a database
      db = sqlite3.connect('your-db-name.db')
    # setup a row factory so that READs return a row object
      db.row_factory = sqlite3.row

    # drop a table
      db.execute('drop table if exists {}').format(('TABLE_NAME',))

    # create a table with a text and integer column
      db.execute('create table {} ({} text, {} int)'.format(('TABLE_NAME','COL_NAME','COL_NAME')))
  ```
#### sqlite3 CRUD
  - all commands require `db.commit()` to persist: you can issue multiple cmds and persist them all at once
##### sqlite3 create
  ```py
    # insert data into two columns: col1 = text col2 = integer
      db.execute(
                  'insert into {} ({}, {}) values (?, ?)'.format(('TABLE_NAME','COL_NAME','COL_NAME')))
                  ('VALUE', 1) # must be a list/tuple
                )
  ```
##### sqlite3 read
  ```py
    # read sorted data from a table
    # execute returns an iterator containing tuple object(s) unless you setup a row factory (which will return an iterator of dictionaries)
      cursor = db.execute('select * from {} order by {}'.format(('TABLE_NAME','COL_NAME')))

    # read rows: if execute returns tuples
      for row in cursor: print(row) # returns (blah, blah, blah)
    # read rows: if execute returns dictionary
      for row in cursor: print(dict(row)) # returns dictionary objects
    # read column: if execute returns dictionary
      for row in cursor: print(row['COL_NAME']) # returns value


    # cursor object read cmds
      cursor.fetchone()
  ```
##### sqlite3 update
  - all commands require `db.commit()` to persist: you can issue multiple cmds and persist them all at once
  ```py
    # update 1 row
      db.execute(
                  'update {0} set {1} = ? where {1} = ?'.format(('TABLE_NAME','COL_NAME'))),
                  ('NEW_VALUE', 'COL_KEY')

                )
  ```
##### sqlite3 delete
  - all commands require `db.commit()` to persist: you can issue multiple cmds and persist them all at once
  ```py
    # delete a row
      db.execute(
                  'delete from {} where {} = ?'.format(('TABLE_NAME','COL_NAME'))),
                  ('COL_KEY',) # dont forget the comma to make it a tuple
                )
  ```


## system related
### sys
  ```py
    import sys

    # get the python version
      print('Python version {}.{}.{}'.format(*sys.version_info))

    # get system platform category e.g. darwin (mac), win32 (windows)
      print('Python version {}.{}.{}'.format(sys.platform))

    # get cli arguments
      print(sys.argv[0]) # 0 index is the name of the script.
      print(str(sys.argv)) # print all arguments
      if len(sys.argv) > 1:
          if sys.argv[1] == 'test': print('first argument is test')
          else: print('first argument is not test')
      else: print('no arguments')
  ```
### os
  ```py
    import os

    # operating system related
      os.name

    # get environment variables
      os.getenv('ENV_VAR_NAME')

    # file related
      os.getcwd()

    # text related
      os.urandom(INT) # Return a string of n random bytes suitable for cryptographic use.
  ```

## network related
### urllib
  ```py
    import urllib.request

    # get a url, returns an iterable
      page = urllib.request.urlopen('URI')
      # convert the line of binary into string and print it
        for line in page: print(str(line, encoding = 'utf_8'), end = ' ')
  ```

## testing
  -
### unit tests
  ```py
    import YOUR_MODULE
    import unittest

    # setup your test class for your module
    # unittest module will find every class extending from unittest.TestCase
      class TestYOUR_MODULE(unittest.TestCase):
        def setUp(self):
          print('your setup logic')

        def test_testName(self):
          print('your test logic')
          expectThis = 'expected value'
          toEqualThis = 'value'
          self.assertEqual(expectThis, toEqualThis)
    # run the test cmd provided by unittest at the end of the file
      if __name__ == "__main__": unittest.main()
  ```
