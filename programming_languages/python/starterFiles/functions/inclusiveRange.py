#!/usr/local/bin/python3
# https://www.lynda.com/Python-tutorials/Creating-sequence-generator-function/62226/70983-4.html
def main(*args):
    print('this is a starter file for python scripts')
    return inclusveRange(*args)


def inclusveRange(*args):
    '''\
    same functionality as a normal range except it is inclusive
    examples:
        inclusveRange(stop)
        inclusveRange(start, stop[, step]))
    '''

    length = len(args)
    # raise exceptions if arguments lenth invalid
    if length == 0: raise TypeError('You need to pass at least the stop number to inclusiveRange')
    if length > 3: raise TypeError('you can pass up to three arguments')

    # setup required vars based on length of args
    step = args[2] if length == 3 else 1
    start = args[0] if length > 1 else 0
    stop = args[0] if length == 1 else args[1]

    # the iterator logic
    while start <= stop:
        yield start
        start += step




# this allows you to
# 0. setup all of your logic inside main
# 1. call functions inside the main function before they are defined in this file
# 2. define all helper functions at the bottom of this file
# the line below should be the last line in the file
# if you invoke any logic after the main function it will run before main
if __name__ == '__main__': main()
