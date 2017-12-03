#!/usr/local/bin/python3

def main():
    if len(sys.argv) > 1:
        if sys.argv[1] == 'test':
            test()
        else:
            print('put your example code here that runs with cli args')
    else:
        print('put your example code here that runs without cli args')

def test():
    print('put your test code here')
# this allows you to
# 0. setup your example logic inside the main function
#   - main is only run when executed as a python script
#       - is not run when imported into another script
#   - your test logic will run if executed like `$ python3 filename.py test`
# 1. call functions inside the main function before they are defined in this file
# 2. define all helper functions at the bottom of this file
# the line below should be the last line in the file
# if you invoke any logic after the main function it will run before main
if __name__ == '__main__': main()
