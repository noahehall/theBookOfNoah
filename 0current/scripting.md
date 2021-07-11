# todo 
  - transcribe written notes to this doc


# TLDR
  - focuses on `bash` scripting, but should work in general for other shells
  - 
  
# quick notes, see linux dir for massive amounts of information

# links
## refs and specs
  - [longest beginners guide known to man](https://tldp.org/LDP/Bash-Beginners-Guide/html/f32.html)
  - [trapping signals](https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_12.html)
  - [shell expansion](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_04.html)
  - [built in cmds](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_01_03.html#sect_01_03_02)
  - [the bash environment](https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_03.html)
  - [conditionals](https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_07.html)
  - [aliases](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_05.html)
  - [variables](https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_10.html)
  - [catching user input](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_08_02.html)
  - [quoting chars](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_03.html)
  - [displaying/setting bash options](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_06.html)
  - [bash variables](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html)
  - [functions](https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_11.html)
  - [pgrep](https://man7.org/linux/man-pages/man1/pgrep.1.html)
  - [writing interactive scripts](https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_08.html)
  - [advanced if usage](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_02.html)
  - [bash best practices](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_04.html)
  - [the set cmd](https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html)
  - [setting optoins in bash](https://tldp.org/LDP/abs/html/options.html)

  
## quickies
  - [pgrep](https://linuxize.com/post/pgrep-command-in-linux/)
  - [excluding in grep](https://linuxize.com/post/grep-exclude/)
  - [regular expressions in grep](https://linuxize.com/post/regular-expressions-in-grep/)
  - [bash aliases](https://linuxize.com/post/how-to-create-bash-aliases/)
  - [check if file/dir exists](https://linuxize.com/post/bash-check-if-file-exists/)
  - [ignoreef vs IGNOREEOF](https://www.theunixschool.com/2012/09/ignoreeof-prevent-terminal-close-user-logout.html?m=1)
  - [export vs set vs setenv](https://www.theunixschool.com/2010/04/what-is-difference-between-export-set.html)
  - [getopts: pass cli optoins to a shell script](https://www.theunixschool.com/2012/08/getopts-how-to-pass-command-line-options-shell-script-Linux.html)
  - [positional parameters in a shell script](https://www.theunixschool.com/2011/01/positional-parameters-in-shell-script.html)
  - [tmout explanation](https://www.thegeekstuff.com/2010/05/tmout-exit-bash-shell-when-no-activity/)
  

# my favorite searches
  - `[` `[[`

# best Practices    
  - always trap signals
  - use builtin cmds > everything else (quicker)
  - always enable POSIX mode (see notes about POSIX special buitins)
  - never use any remote tools (e.g. `r-tools`, `rcp`, `rsh` etc) without knowing the security implications
  - only use `ssh` for remote execution

# builtin cmds
  - `sh`
    - break
    - cd
    - continue
    - eval
    - exec
    - exit
    - export
    - getopts
    - hash
    - pwd
    - readonly
    - return
    - set
    - shift
    - test
    - `[`
    - times
    - trap
    - umask
    - unset
  - `bash`
    - alias
    - bind
    - builtin
    - command
    - declare
    - echo
    - enable
    - help
    - let
    - local
    - logout
    - printf
    - rea
    - shopt
    - type
    - typeset
    - ulimit
    - unalias
  - POSIX (special builtins)
    - 3 differences with specials 
      - special builtins are found before shell functions during cmd lookup
      - causes non-interactive shells to exit on error
      - assignments preceding the special builtin exist in the shell env after the cmd completes
    - break
    - continue
    - eval
    - exec
    - export
    - readonly
    - return
    - set
    - shifts
    - trap
    - unset



# terms
  - interactive: menas you can enter cmds, shell is not running because a script has been clicked upon
  - non-interactive: all scripts use non-interactive shells, i.e. programmed to only do what tey are told
  - login shell: you got the shell after authenticating to the system, e.g. with username & password
  - non login shell: you did not authenticate to the system, e.g. when opening a terminal via an icon, or menu item
  - traps: error handling code, enables custom responses to signals (which cause a script to exit)
  - signals:
    - SIGTERM: `kill -15`
    - SIGINT: `kill -2` quit interactive shells, sent on `ctrl-c`
    - SIGHUP: `kill -1` signals all jobs to exit, see `huponexit`
  - restricted shells: limited but functional shell enviroments
  - forking: bash makes an exact copy of itself & the PId is incremented. alwayss used for builtin cmds
  - fork-and-exec: workflow bash uses to preserve the previous environment when creating (forking)
  - command types
    - simple commands: a program name followed by a list of spadce delimited args
    - compound commands: simple cmds glued togther in various ways, e.g. in a `pipeline` `loop` `conditional` or other grouping mechanism
  - functions: group cms by name for later execution
    - are executed in the current shell context, i.e. no new process is created
  - parameters: entity that stores values; 
  - values: a name, number or special value
  - variables: a paramter that stores a name, it has a value and 0/more attributes,
    - a variable without an assigned value is given `null`
    - 

# how things work
## interactive shell behavior
  - startup fies are read
  - job control enabled
  - `PS1` and `PS2` prompts are set
  - cmds read from cmd line using `readline`
  - interprets `ignoreeof` instead of exiting when reaching `EOF`
  - cmd history and history expansion enabled and history saved
  - `alias expansion` enabled
  - signal `SIGTERM` is ignored, still catchable by `traps` tho
  - signal `SIGINT` is caught and handled (i.e. `ctrl c`) unless handled by `traps
  - cmds executed on read
  - periodically checks for `mail`
  - exit on unreferenced variables, disabled for interactive shells
  - `redirection` errors encountered for builtin cmds do not cause exists
  - special builtins returning errors in `posix` dont cause exits
  - parser syntax errors dont cause exits
  - spell check for `cd` is enabled
  - automatic exit base don `tmout` is enabled


# important programs
  - `sh`
  - `ssh`
  - `which`
  - `command`
  - `env` see `env` elseware
  - `huponexit` determines if background jobs will be terminated n `SIGHUP`
  - `readline`
  - `cd`
  - `alias`
  - `unalias`
  - `pushd` see elseware
  - `popd` see elseware


# conditionals
  - `[[` compound command
  - `test` 
  - `[`

# locations: files & directories
  - `/bin`
  - `/boot`
  - `/dev`
  - `/etc`
  - `/etc/shells` file containing list of installed shells
  - `/etc/passwd` where your defualt shelll is stored
  - `/home`
  - `/lib`
  - `/media`
  - `/mnt`
  - `/opt`
  - `/proc`
  - `/root`
  - `/run`
  - `/sbin`
  - `/srv`
  - `/tmp`
  - `/usr/bin`
  - `/usr/include`
  - `/usr/lib`
  - `/usr/local`
  - `/usr/sbin`
  - `/usr/share/doc`
  - `/usr/share`
  - `/usr/src`
  - `/usr`
  - `/var/cache`
  - `/var/lib`
  - `/var/log`
  - `/var/run`
  - `/var/spool`
  - `/var/tmp`
  - `/var`




# workflows 
## bash startup files 
  - interactive login shells / shells started with `--login`
    1. `/etc/profile`
    2. the first found file:
       - `~/.bash_profile`
       - `~/.bash_login`
       - `~/.profile`
       - 
    3. `~/.bash_logout`
  - interactive non-login shells
    1. `~/.bash_rc`
  - non interactive shells
    1. `BASH_ENV`
  - shells invoked with `sh` command
    1. `/etc/profile`
    2. `~/.profile`
    3. `env` variable, reads this when `sh` is invoked interactively
       - type `env` to see it
  -  invoked rmeotely (e.g. via `r-tools`, `rshd` `rlogin` `rsh` `rcp`)
    1. `~/bash_rc`
  - when `uid` !==  `euid`
    1. no startup files are read

## how to use alias and unalias effectively

## using the directry stack effectively
  - generally you should be using `pushd` and `popd` over `cd` just for the fact that you can easily see all the directories you've visited via `dirs`
  
  - related vars
    - `PWD` prints the working directory
    - `dirs` prints all the directories in the stack, dependent on using `pushd` and `popd`
    - echo `DIRSTACK` prints the current working directoy ?
  
  - related programs
    - `pushd` cds to and adds the path to the dirstack
    - `popd` removes the last directory from the dirstack and cds into it
    - 

## workflows & programs related to variables, shell arguments, etc
  - see a variables value `echo $NAME`
  - normal variables
    - scope: only available inside the shell in which it is defined
      - i.e. not avaliable to shell/process invoked from the original shell (as its in its own process now)
    - set a normal variable via `NAME=value`

  - local variables
    - scope: only avable to the function/script/shell in which its defined

  - environment variables
    - normal/local variables that are exported to the environment and are now available to all shells/subprocesses invoked from the original shell
    - create an environment variable via `export` `export NAME=value` or jsut `export NAME`
  
  - related programs
    - `set` used to set a local variable in `c` and `tc` shells
      - type `set` to see current variables
    - `setenv` used to set an environment variable in `c` and `tc` shells
    - `export` used to set and environment variable in `bash` and `sh` shells
      - tye `export` to see 
    - `env` 
      - type `env` to see current variables


# shell options
  - you enable an option via `set -o OPTION` and disable it via `set +o OPTION`
  - `posix` comply with posix standard for shells


# env vars
  - see the current value via `echo $VAR_NAME`
  - `PS1` the interactive prompt
  - `PS2` enabled fo rmultiline commands/when the shell thinks youve entered an unfinished cm
    - e.g. forgetting the closing quote and pressing enter
  - `ignoreeof`  used by `ksh` shell; see `IGNOREEOF` for more information
  - `IGNOREEOF` prevent logging out from the user account, set this to the amount of times to ignore `ctrl d`
    - e.g.  if 2 === the shell will ignore the first 2 `ctrl d` and show a warning message, but will log the user out the third time
    - the default value is 10
    - used by `bash` and `bourne` shells
  - 


# keyboard shortcuts
  - `ctrl d` the `EOF` character, logs the user out of the current terminal
  - 