# TLDR 
    - focus on writing shell scripts
      - see `cmdline.md` for a more extensive reference


# links 
    - [dotfiles/terminal](https://github.com/ellisonleao/dotfiles/tree/main/terminal)
    - [advanced bash scripting](https://tldp.org/LDP/abs/html/index.html)
    - [list groups](https://linuxize.com/post/how-to-list-groups-in-linux/)
    - [ubuntu tuts](https://linuxize.com/tags/ubuntu/)
    - [basic linux cmds](https://linuxize.com/post/basic-linux-commands/)







# wtf did i mean by this ?
    - expect/heredoc to smulate user input for sripts in background jobs



# gotchas 
    - scripts require execute permissions 
      - whereas source a file does not 


# files and dirs
    - [recursively change file permissions](https://linuxize.com/post/chmod-recursive/)


## common folder structure
    - /dev/null/
      - a black hole you can send hella shit
    - /usr/local/bin 
      - scripts executable by all users
    - /proc
      - files for every running process ?
    - /etc/passwd
      - lists users, (primary) groups, etc
      - [check this](https://linuxize.com/post/etc-passwd-file/)
    - /etc/group
      - lists a users secondary groups
    - /etc/shadow
      - contains info about users passwords
      - owned by root and group shadow
      - should have 640 permission
      - [check this](https://linuxize.com/post/etc-shadow-file/)

## permissions 
    - [chmod 777](https://linuxize.com/post/what-does-chmod-777-mean/)



# vars 
    - double quoting a var preserves white space, e.g. when echoing
      - `echo $blah` vs `echo "$blah"`
      - single quotes turns the var into a literal string
    - use double quotes and escapes when exporting adynamic variable from a bash_profile 
        - see example `m.2` ?
        - if you think about it, you want the value to be evaluated everytime the bash profile is sourced, i.e. for it to be dynamic!


## var examples  
    ```sh
        # set a var to null 
            blah=
        # delete a var
            unset $bar
        
        
        # export a var to the env, no $ is 
            export var

        
        # todo: oneliner for declare
        #o think this makes it auto local inside a function
        #o i think -f is for functions
            declare -f

    
        # todo: oneliner for typeset


    ```


# users
## user links
    - [usermod](https://linuxize.com/post/usermod-command-in-linux/)
    - [add and remove users](https://linuxize.com/post/how-to-add-and-delete-users-on-ubuntu-20-04/)
    - [w](https://linuxize.com/post/w-command-in-linux/)
      - lists logged in users and what they are doing
    - [whoami](https://linuxize.com/post/whoami-command-in-linux/)



## user summary
    - primary group: the group that is assigned to the files created by the user 
      - each user is assigned to one group
      - usually the same as the username
    - secondary group 
      - used to grant certaian privilegess to a set of users 
        - 

## user examples
    ```sh
        # list current/specified user groups
        #o first user is the primary group
            groups [user]

        # list current|specified groups with group IDs
            id [opts] [user]
                -n # only group names (no ids)
                -g # only the primary group id
                -G # all group ids
                -nG #

        # list all members of a group
        #o the cmd does way more so research it
            getent [opt] group GROUPNAME
        #o get all groups 
            getent group

        
        # list all groups
            cat /etc/group
        


    ```



# processes
    - [pkill](https://linuxize.com/post/pkill-command-in-linux/)
    - [kill](https://linuxize.com/post/kill-command-in-linux/)
    - [pgrep](https://linuxize.com/post/pgrep-command-in-linux/)
    - [pidof](https://linuxize.com/post/pidof-command-in-linux/)





# redirection and pipes
## links 
    - [redirect stderr to stdout](https://linuxize.com/post/bash-redirect-stderr-stdout/)



## redirection 
## pipes
## named pipes 




# cmds 
## echo & printf 
    - [printf](https://linuxize.com/post/bash-printf-command/)



## tee 
## mkfifo 
    - [check this](https://man7.org/linux/man-pages/man3/mkfifo.3.html)
## tmout 
## tty 
## stty 
## sleep vs wait
    - [wait](https://linuxize.com/post/bash-wait/)
    - 
## basename
    - [checkthis](https://linuxize.com/post/basename-command-in-linux/)

## timeout
    - [check this](https://linuxize.com/post/timeout-command-in-linux/)



# scripts
## links 
    - [bash exit cmd and codes](https://linuxize.com/post/bash-exit/)



## TODO
    - cmd line args passed to scripts
    - getops
    - interactive vs non-interactive scripts
    - positional params 
      - $#
      - $*
      - #@
    - shell options
    - trapping errors

## quickies
    ```sh
        #!/bin/env bash 
            # use env bash incase bash is in an unusual place


        # change value of internal script vars/options
        #o list current vars 
            set 
        #o set positional params to value of $var 
            set -- $var



        # get the PID of the lat runnig background job
            $!

    ```


# control structures 
## TODO
    ```sh
        somecmd || { onErrorDoThis }

    ```



## case statement 
    - [break and continue](https://linuxize.com/post/bash-break-continue/)
    - 


## test operators 
    -


## loops 
    - [bash sequence expression](https://linuxize.com/post/bash-sequence-expression/)






# system
## uname
    - [check this](https://linuxize.com/post/uname-command-in-linux/)


## ssh 
    - [check this](https://linuxize.com/post/ssh-command-in-linux/)


## modprobe
    - [checkthis](https://linuxize.com/post/modprobe-command-in-linux/)

## lsmod
    - [check this](https://linuxize.com/post/lsmod-command-in-linux/)

