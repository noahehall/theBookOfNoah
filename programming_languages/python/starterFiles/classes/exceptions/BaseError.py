#!/usr/local/bin/python3
# https://docs.python.org/3.6/tutorial/errors.html#user-defined-exceptions

class Error(Exception):
    """Base class for exceptions in this module."""
    pass
# this allows you to call functions inside the main function above before they are defined in this file
# the line below should be the last line in the file
# if you invoke any logic after the main function it will run before main
if __name__ == '__main__': main()
