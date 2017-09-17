#!/usr/local/bin/python3

def main():
    print('this is a starter file for python scripts')


class BaseClass():
    '''\
    Starter file for creating classes
    comes with scalable setters and getters
    '''
    def __init__(self, **kwargs):
        self.variables = kwargs

    def getVariable(self, varName):
        return self.variables.get(varName, None)
    def setVariable(self, varName, value):
        self.variables[varName] = value




# this allows you to
# 0. setup all of your logic inside main
# 1. call functions inside the main function before they are defined in this file
# 2. define all helper functions at the bottom of this file
# the line below should be the last line in the file
# if you invoke any logic after the main function it will run before main
if __name__ == '__main__': main()
