#!/usr/local/bin/python3
# https://docs.python.org/3.6/tutorial/errors.html#user-defined-exceptions

from .BaseError import BaseError

class TransitionError(BaseError):
    """Raised when an operation attempts a state transition that's not
    allowed.

    Attributes:
        previous -- state at beginning of transition
        next -- attempted new state
        message -- explanation of why the specific transition is not allowed
    """

    def __init__(self, previous, next, message):
        self.previous = previous
        self.next = next
        self.message = message


# this allows you to call functions inside the main function above before they are defined in this file
# the line below should be the last line in the file
# if you invoke any logic after the main function it will run before main
if __name__ == '__main__': main()
