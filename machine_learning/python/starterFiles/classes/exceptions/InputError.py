#!/usr/local/bin/python3
# https://docs.python.org/3.6/tutorial/errors.html#user-defined-exceptions

from .BaseError import BaseError

class InputError(BaseError):
    """Exception raised for errors in the input.

    Attributes:
        expression -- input expression in which the error occurred
        message -- explanation of the error
    """

    def __init__(self, expression, message):
        self.expression = expression
        self.message = message


# this allows you to call functions inside the main function above before they are defined in this file
# the line below should be the last line in the file
# if you invoke any logic after the main function it will run before main
if __name__ == '__main__': main()
