bookmark: <https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_02.html>
  start at the top

notes

- we need to hurry up and finish these
    make sure xargs is in this list
    <https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_09_07.html>
    <https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_08.html>
    <https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_09.html>
    <https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_10.html>
    <https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_11.html>
    <https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_12.html>
    <https://tldp.org/LDP/Bash-Beginners-Guide/html/x7243.html>
    <https://tldp.org/LDP/Bash-Beginners-Guide/html/x7369.html>
- so we can take our time through these
    <https://tldp.org/LDP/abs/html/>
- so we can go back and do everything we skipped
    sed (see linux dir for previous notes)
      usecases:
        find and replace
        deleting lines
        examples
          /etc/init.d or /etc/rc.d/init.d
          grep sed*
    awk (see linux dir for previous notes)
      youll actually need to read this

- TODO: links from mobile
  - [timeout cmd](https://linuxize.com/post/timeout-command-in-linux/)
  - [redirect stderr to stdout](https://linuxize.com/post/bash-redirect-stderr-stdout/)
  - [echo cmd](https://linuxize.com/post/echo-command-in-linux-with-examples/)
  - [bash case statement](https://linuxize.com/post/bash-case-statement/)
  - [bash fns](https://linuxize.com/post/bash-functions/)
  - [how to exclude in grep](https://linuxize.com/post/grep-exclude/)
  - [understanding linux file permissions](https://linuxize.com/post/understanding-linux-file-permissions/)
  - [listing linux services with systemctl](https://linuxize.com/post/systemctl-list/)
  - [basename cmd in linux](https://linuxize.com/post/basename-command-in-linux/)
  - [making a post request with cURL](https://linuxize.com/post/curl-post-request/)
  - [regular expressions in Grep](https://linuxize.com/post/regular-expressions-in-grep/)
  - [pkill cmd](https://linuxize.com/post/pkill-command-in-linux/)
  - [last cmd](https://linuxize.com/post/lahttps://linuxize.com/post/pidof-command-in-linux/st-command-in-linux/)
  - [pidof cmd](https://linuxize.com/post/pidof-command-in-linux/)
  - [id cmd](https://linuxize.com/post/id-command-in-linux/)

# TLDR

- focuses on `bash` scripting, but should work in general for other shells
- includes other concepts supporting effective bash scripting, e.g. installing packages and finding information about the os
- if you need more than this, check out my other scripting related docs in the linux directory inside this repo
  - [our linux dir as hella shiznit](../linux)
  - [our linux readme](../linux/_linux.md)
  - [our cmd line readme](../linux/cmdline.md)

# links

## to review

- [take the first arg & pass the rest](https://stackoverflow.com/questions/10569198/take-the-first-command-line-argument-and-pass-the-rest)

## cool stuff

- [bash testing framework](https://github.com/kward/shunit2)
- [advanced logging framework for bash](https://github.com/kward/log4sh)
- [useful shell routines](https://github.com/kward/shlib)
- [shflags for shell programs](https://github.com/kward/shflags)

## refs and specs

- [holy grail of gnu software](https://www.gnu.org/software/)
- [lotta dope stuff on this screen](https://www.fsf.org/resources/)
- [longest beginners guide known to man](https://tldp.org/LDP/Bash-Beginners-Guide/html/f32.html)
- [very useful index for a quick ctrl+f](https://tldp.org/LDP/Bash-Beginners-Guide/html/glossary.html)
- [trapping signals](https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_12.html)
- [shell expansion](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_04.html)
- [built in cmds](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_01_03.html#sect_01_03_02)
- [the bash environment](https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_03.html)
- [conditional statements](https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_07.html)
- [if statements](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_01.html)
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
- [shell expansion](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_04.html)
- [the set cmd](https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html)
- [setting optoins in bash](https://tldp.org/LDP/abs/html/options.html)
- [the builtin command command](https://datacadamia.com/lang/bash/command_builtin)
- [awk programming language](https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_06.html)
- [the shift builtin](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_09_07.html)
- [regex regular expressions](https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_04.html)
- [regex character classes and bracket expressions](https://www.gnu.org/software/grep/manual/html_node/Character-Classes-and-Bracket-Expressions.html)
  - use the definitions provided on this screen
- [general ctlr+f for gnu regex](https://www.gnu.org/software/grep/manual/html_node/Index.html#Index)

## tutorials and things like that

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
- [man vs info cmds](https://itectec.com/ubuntu/ubuntu-the-difference-between-man-and-info-documentation/)
- [best command explanation ive seen yet](https://askubuntu.com/questions/512770/what-is-use-of-command-command)
- [enable keyword in bash](https://datacadamia.com/lang/bash/enable)
- [[vs ( vs ((](https://unix.stackexchange.com/questions/306111/what-is-the-difference-between-the-bash-operators-vs-vs-vs)

## useful links

- [bash debugger, also available for vscode](http://bashdb.sourceforge.net/)

# best Practices

- always
  - prefer builtins
  - `type` >>> `which`

- generally
  - arithmetic expressions
      -`$[ EXPRESSION ]` >>> `$(( EXPRESSIN ))`
        - unless you need to do tests
  - conditionals
    - `test` >>> `[`
      - its just easier to read

- sometimes
  - maybe maybe not

- never
  - never do these things

- TODO: categorize these things ^
  - always trap signals
  - use builtin cmds > everything else (quicker)
  - always enable POSIX mode (see notes about POSIX special buitins)
  - never use any remote tools (e.g. `r-tools`, `rcp`, `rsh` etc) without knowing the security implications
  - only use `ssh` for remote execution
  - redirect `stdout` and `stderr` in `non-interactive` scripts
    - `stdout` may not be available and would cause your script to fail if used
  - a script should run without errors
  - program logic should always be clearly defined and apparent
  - a program shouldnt do unnecessary work
  - every program should be reusable
  - always focus on having correct logic, flow control and efficiency
    - useful to itemize the list of tasks involved in the program

  - questions to ask yourself before starting a new script
    - will i be needing information from the user/environment
    -
    - how will i store information
    - will i need to create files
      - where?
      - with which permissions?
      - which user/groups shall own them?
    - what commands will i use?
      - which systems will i support?
      - do these systems have the cmds and required versions preinstalled?
    - does the user need notifications?
      - when?
      - how and what type of notifications?

  - generally you should always execute scripts in a `subshell`
    - variables, functions and aliases created in a subshell are only known to that particular bash session of that subhsell
    - when the shell exits and the parent shell regains control, everything is clean up and all changes made by the script to the state of the shell are forgotten
  - use echo statements in any files impacting the current environment
    - if an error is introduced, you know which file the is likely the culprit

  - variables
    - globals should be in all caps
    - locals should be all lowercase and snake cased
    - always quote the value to reduce errors
    - you most likely want to use `$@` and not `$*` in scripts
    - always set your variables at the top of script, never manually type ANYTHING and always reference things by variables

  - always set your locale, just do this every where

  - Aliases are looked up after functions and thus resolving is slower. While aliases are easier to understand, shell functions are preferred over aliases for almost every purpose.

## gotchas

- bash reads at least one complete line before executing any cmds on that line
- bash invokes shell scripts in `non-interactive` shells
  - unless invoked without `-c` or `-s`
    - need to confirm this note, maybe it should say `unless invoked with`
- shell scripts execute in a previate environemnt,
  - variables are not inherited by child processes (unless exported), so you have to `source` the file their defined in or `export` them from the parent shell
- variables
  - are case sensitive
  - cannot start with a digit, but can contain digits
- aliases
  - Bourne shell (sh) does not recognize aliases.
  - Aliases are not inherited by child processes
- forking
  - If you invoke the exit in a subshell, it will not pass variables to the parent. Use { and } instead of ( and ) if you do not want Bash to fork a subshell.

# basics

## builtin cmds

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

## terms

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
- expressions:
  - unary: often used to examine the status of a file, requires 1 object to work
  - binary: require 2 objects to work
    - if the file argument is in the form `/dev/fd/N`
      - file descriptor N is checked
    - else if the file argument is in the form `/dev/std[in|out|err]`
      - file desriptor 0, 1, or 2 is checked
- command control: testing exit status of a cmd in order to determine whether a portion of the program should be executed
- conditional branch: logical point in the program when a conditin determines what happens next
- logic flow: the overall design of hte program; determines the logical sequence of tasks so that te result is successful and controlled
- loop: part of the program that is performed zero/more times
- user input: information provided by an external source while the program is running; can be stored and recalled when needed
- shebang: the `#!` starting each script file, containing the absolute path of the shell interpreter responsible for executing hte script
- init script: starts system services,
  - e.g. `system log daemon` `power management daemon` `name daemon` `mail daemon` are all started by init scripts
- run level: a configuration of processes
  - user run level: for performing administrative tasks like recovering files from a backup
  - reboot run level:
  - shutdown run level:
- bash: the gnu shell, is compatible wiht the bourne shell

## how things work

### init process

  1. the init process reads its configuration files
  2. determines which services to start/stop in each `run level`

### interactive shell behavior

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

### restricted shell behavior

- restricted shells are invoked via `rbah` `--retricted` or `-r` options

- `cd` is disabled
- modifying `SHELL` `PATH` `ENV` `BASH_ENV` are disabled
- cmd names cant contain slases
- cant source filenames with slashes
- hashes dont accept slaches without the `-p` option
- cant import functions at startup
- `SHELLOPTS` is ignored at startup
- output `redirection` via `>` `>|` `><` `>&` `&<` `>>` is disabled
- `exec` is disabled
- `-r` and `-d` are disabled for `enable`
- a default `PATH` cannot be set with `command`
- turning off `restricted` mode is disabled

### how bash parses input

  1. shell reads input (file, `stdin`, terminal)
  2. input broken up into workds and operators obeying the quoting rules
    - `alias expansion` is performed
  3. shell parses (analyzes and substitutes) the tokens into simple and compound commands
  4. `shell expansion` is performed
    - breaking the expanded tokens into lists of filenames, commands and arguments
  5. `redirection` is performed if necessary; then all `redirection` operators and there operands are removed from the argument list
  6. commands are executed
  7. the shell waits for cmds to complete and collects the status on exit

### executing cmds

  1. occurs after the parser parses a line
  2. tokens marked as variable assignments are removed
  3. `redirections` saved for later reference
  4. remaining tokens are expanded
  5. the first token is considered the cmd, and the rest considered arguments
  6. previous found `rediretions` are performed
  7. strings assigned to variables are expanded

### finding cmds to execute

  1. if the first word does not contain a slash, check if it matches a name in the `function list`
    - if not in the `function list` check if its a `builtin` cmd
    - if not a `builtin` cmd, check if its in a `PATH` directory
    - if still not found, bash prints error and returns `exit 127`
  2. bash executes the found cmd in a separate execution environment
    - can be a function, builtin, or an executable in the path list
  3. if execution fails because the file is not executable/not a directory it is assumed to be a shell script
  4. if the cmd was not begun asyncrhonously (i.e. in the background), the shell waits for the cmd to complete and collects the exit status

### shell expansion

- `brace expansion`
- `tilde expansion`
- `parameter expansion`
- `variable epansion`
- `command substitution`
- `arithmetic expansion`
- `word splitting`
- `filename expansion`

## important programs, files, and locations

### programs

- if a program has a description elsewar, its not listed here (so dont assume these are the only important programs)

- `sh`

- `type` see whether a program is a builtin or not, for non builtins it prints the location
- `sh`
- `ssh`
- `clear` clear the screen, useful to run at the beginning of a script
- `huponexit` determines if background jobs will be terminated n `SIGHUP`
- `read`
- `exec`
- `date`
- `init`
- `inittab`

### directories and files

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

### shell options

- you enable an option via `set -o OPTION` and disable it via `set +o OPTION`
- `posix` comply with posix standard for shells

### env vars

- see the current value via `echo $VAR_NAME`

- `SHELL` path to your current shell executable
- `PATH` list of directories storing global executables
- `ignoreeof`  used by `ksh` shell; see `IGNOREEOF` for more information
- `IGNOREEOF`
  - controls the action of the shell on receipt of an `eof` character as the sole input
  - prevent logging out from the user account, set this to the amount of times to ignore `ctrl d`
  - e.g.  if 2 === the shell will ignore the first 2 `ctrl d` and show a warning message, but will log the user out the third time
  - the default value is 10
  - used by `bash` and `bourne` shells
- `HISTFILE` where to save bash history
- `HOSTNAME` the hostname of the computer
- `HOME`
- `IFS`
- `OPTARG`
- `OPTIND`
- `RANDOM` returns a random number between 0 and 32767 each time its referenced
  - you can assign a value to seed this number
- `TMOUT` if set to a number, the shell will terminate after that many seconds of inactivity

### keyboard shortcuts

- `ctrl d` the `EOF` character, logs the user out of the current terminal

# workflows

- things you do when your scripting

## all about local and global variables, shell arguments, bash options, etc

- TODO
  - setting up your LOCALE
    - uber important for sorting, collation, and other uber difficult to find bugs until its too late
    - LC_ALL

- variable types based on the value they contain
  - string variables
  - integer variables
  - constant variables
  - array variables

- local/normal variables
  - scope: only available inside the shell in which it is defined
    - i.e. not avaliable to shell/process/subshells invoked from the original shell (as its in its own process now)
  - set a normal variable via `NAME=value`

- global/environment variables
  - normal/local variables that are exported to the environment and are now available to all shells/subprocesses invoked from the original shell
  - create an environment variable via `export NAME=value` or export a previous set variable via `export NAME`
  - `subshells` can modify global variables, but those modifications do not impact the parent environment
  - [check this file for default global variables and their defualt values](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html)

- related programs
  - `echo`
    - echos whatever follows it followed by a new line, and always exits 0
    - `echo $SOMEVAR` will print the value of $SOMEVAR

  - `printf`
    - echos whatever folows it, not followed by a new line, but does allow you to have formatted strings, and will exit without failure
    - `printf $SOMEVAR` will print the value of $SOMEVAR

  - `set`
    - used to
      - set a local variable in `c` and `tc` shells
      - enable/disable options in bash scripts e.g. `set -|+x` to enable/disable debugging
        - `-` enables
        - `+` disables
    - type `set` to see current local and global variables and functions
  - `unset` only way to remove a variable

  - `setenv`
    - used to set an environment variable in `c` and `tc` shells
  - `export`
    - used to set and environment variable in `bash` and `sh` shells
    - type `export` to see

  - `env`
    - type `env` to see global (environment) variables
  - `printenv`
    - prints global (environment) variables

  - `enable` enable, disable, and print builtin shell commands
    - issue with out args to see all builtin commands
    - `enable -n NAME` disable NAME
    - `enable -n` list all disabled builtins
    - `enable -a` list all builtins, and indicate which ones are disabled
    - `enable -s` list all `posix` special builtins

- useful variables
  - `BASH_ENV` the value is expanded and uses as the name of a startup file to read before executing a script
  - `SHELLOPTS` colion separated list of enabled shell options
  - `BASH_VERSION`
  - `COMP_LINE` the current command line being executed
  - `COMP_WORDS` the words in the current command line being executed

  - `$*` expands to the positional parameters, starting from one.
    - when used within double quotes, expands to a single word with the value of each parameter separated by the first character ofthe `IFS` variable
  - `$@` expands to the positional parameters, starting from one
    - when the expansion occurs within double quotes, each parameter expands to a separate word
  - `$#` expands to the number of positiona parametres in decimal
  - `$?` expands to the exit status of the most recenty executed foreground pipeline
  - `$-` expands to the current option flags as specified upon invocation, by the `set` builtin, or those set by the shell itself (such as `-i`)
  - `$$` expands to the current process ID
  - `$!` expands to the process ID of the most recently executed background (asynchronous) command
  - `$0` expands ot the name of the shell/shell script
  - `$_` set at shell startup and contains the absolute filename of the shell/script executed as passed int he argument list
    - after that, it expands to the last argument to the previous command after expansion
    - after that it is set to the full pathname of each command executed and placed int he environment exported to that command

  ```bash
    # bash options
      set -o # display all bash options
        # copypasta willys options from tldp
        allexport  off
        braceexpand  on
        emacs   on
        errexit   off
        hashall   on
        histexpand  on
        history   on
        ignoreeof  off
        interactive-comments on
        keyword   off
        monitor   on
        noclobber  off # prevent existing files from being overwritten by redirection operations
        noexec   off
        noglob   off # prevents special characters from being expanded, e.g. * ? . etc
        nolog   off
        notify   off
        nounset   off
        onecmd   off
        physical  off
        posix   off
        privileged  off
        verbose   off
        vi   off
        xtrace   off # also set -x

      # enabling/disabling options temporarily, or for use in a script
        set -o SOME_OPT # enables SOME_OPT
        set +o SOME_OPT # disables SOME_OPT
        set -o noclobber # enables noclobber
        set +o noclobber # disables noclobber

      # common one-word options
        set -u # treat unset variables as an error when set, and exits a non-interactive shell upon uncountering such errors, usefu to catch instances of unset variables being used
        set -x # see xtrace

      # can also set options when executing a script
        bash --posix somescript.sh # execute the script in posix mode
  ```

## quoting

- quoting is used for
  - remove special meaning of metacharacters/words
  - disable special treament of metacharacters
  - prevent reserved words from being recognized
  - disable parameter expansion

- `single quotes`
  - preverse the literal value of each character
    - thus `\` dont work, thus you cant include a single quote within single quotes
    - no expansion occurs, e.g. variables become literal text and arent substituted

    ```bash
      date=`date`
      echo $date # Tue Jul 13 etc
      echo '$date' # $date

    ```

- `double quotes`
  - literal value of all characters are preserved except:
    - dollar sign
    - backticks
    - backslash when followed dollar, backtick, double quote, backslash, newline
  - you can use double quotes within doublequotes by scaping inner double quotes via backslash

## restricted shells

- using & when to use `restricted` shells

## redirection

- output `redirection`
  - `>` `>|` `><` `>&` `&<` `>>`
  - befor ea cmd is executed, its input & output can be redirected
  - can also be used to open/close files for the current shell execution environment

## expansion & command substitution

- check `how things work` for where this occurs (in depth)
  - after the cmd is tokenized, the tokens are expanded/resolved
  - after expansion, quote removal is performed
- listed in order of execution

  1. `brace expansion`
  - all about generating text from globs
  - the preamble & globs are concatened from left to right, and the POSTFIX is appended to the end
  - notesget to theseget to these
    - any metacharacters special to to other expansion types are preserved
    - this is a strictly combinatorial expansion, nothing is substituted

    ```bash
      # contract: PREAMBLE{x,y,z}POSTSCRIPT
      sp{el,il,al}l # -> spell, spill, spall
    ```

  2. `tilde expansion`
  - whenever a word begins with the tilde `~`
  - `tilde-prefix` all chars up to the first unquoted slash/all chars
    - if none of the chars are quoted, its considered a login name

    ```bash
      # tilde prefixes, can be concatenated with other strings
        ~poop # /home/poop
        ~ # /home/poop
        ~+ # $PWD
        ~- # $OLDPWD
        ~0 # n === any element from dirs
        ~-1 # see above
        ~+1 # see above

      # use case: updating PATH variable
        export PATH="$PATH:~/testdir"
    ```

  3. `shell paramater expansion` & `variable expansion`
  - all about the `$PARAMETER` or preferably `${PARAMETER}` metacharacter
  - invokes paramater & arithmetic expansion, and command substiution
  - `${}` only required when
    - `positional parameters` with more than one digit
    - `PARAMETER` is followed by a char that could be interpreted as part of its name
    - but always use it anyway for readibility and guard against bugs

  - indirect expansion: when `${!PARAMETER}` note the exclamation point
    - the value of the variable formed from the rest of the `PARAMETER` is used as the name for the `PARAMETER`
      - its like using the value of a variable expansion as the name for the paramaeter expansino

    ```bash
      echo ${SHELL} # /bin/bash
      echo ${!N*} # all elmeents of N, e.g. NVM_BIN NVM_CD_FLAGS NVM_DIR NVM_INC

      ${VAR:=value} # set VAR to value if VAR is unset, otherwise leave it alone
      echo ${POOP:=flush} # flush

    ```

  4. `command substitution`
  - the output of a command to replace the command itself, two forms:
    - `$(command)` with paranthesis
      - all characters within the paranthesis are treated as a single command
      - none are treated specially
    - `command` with `backticks`
      - `\` retains its literal meaning
        - except when followed by `$` `backticks` or `\`
    - both forms can be nested
      - however you need to escape inner `backticks` with `\`

  - if the substition appears within double quotes
    - word splitting not performed
    - file name expansion not parformed
  - trailing newlines are deleted
  - embedded newlines are not deleted
    - but may be removed during word splitting

    ```bash
      echo `date` # Fri Jul 16 05:32:10 AM MDT 2021
      echo $(date) # Fri Jul 16 05:32:10 AM MDT 2021
    ```

  5. `arithmetic expansion`
  - the evaluation of an arithmetic expression and the substitution of the result
    - `$(( EXPRESSIN ))`
    - `$[ EXPRESSION ]`
      - doesnt do any tests
      - preferred in bash

  - the expression is treated as if it were within double quotes
    - all tokens undergo `parameter expansion` > `command substitution` > `quote removal`
  - evaluation
    - always in fixed-width integers
    - sub-expressiones in paranthesis are evaluated first
    - hen operators are evaluated in order of precedence
    - no check for overflow
      - however division by zero is trapped and recognized as an error
    - shell variables can be operands
      - `parameter expansion` performed before evlauation
    - within an expression
      - *shell variables may be referenced by name without using `parameter expansion` syntax*
    - constants with a leading zero interprested as octal numbers
    - a leading `0x` or `0X` interpreted as hexadecimal
    - base 10 is used for decimal numbers by defualt
      - if you need another base get a fkn calculator and i envy you

    ```bash
      # arithmetic operators
      # in decreasing order of precedence
      VAR++, VAR-- # post increment/decrement VAR
      ++VAR, --VAR # pre increment/decrement VAR
      -, + # unary plus/minus
      !, ~ # logical not/bitwise not
      ** # exponentiation
      * || / || % # multiplication/division/modulo
      + || - # addition/subtraction
      # <<, >> # left/right bitwise shift. added a comment as this fks up my markdown editor
      <=, >=, <, > # comparison operators
      ==, != # equality operators
      & # bitwise and
      ^ # bitwise xor (exclusive or)
      | # bitwise or
      && # logical and
      || # logical or
      expr ? expr : expr # conditional
      #=, *=, /=, %=, +=, -=, <<=, >>=, &=, ^= and |= # assignments
      , # separater between expressions

      echo $[365*24] # 8760
    ```

  6. `process substitution`
  - only supported on systems that support
    - named pipes (`FIFO`S)
    - `/dev/fd` method of naming open files

  - has two forms
    - no space may appear between the `<` or `>` signs and the left `(`
      - else its interpreted as a `redirection`
    - `<(LIST)`
      - the file passed as an argument should be read to obtain the output of `LIST`
    - `>(LIST)`
      - writing to the file will provide input for `LIST`
  - the `LIST` is run with its input/output connnected to a `FIFO`/some file in `/dev/fd`
    - the name of this file is passed as an argument ot the current command as the result of the expansion
  - `processes substitution` is performed simultaneously with
    - `parameter expansion`
    - `variable exansion`
    - `command substitution`
    - `arithmetic expansion`

  7. `word splitting`
  - the shell scans the results of all aforementioned expansion mechanisms that did not occur within `double quotes` for word splitting
  - each character of `IFS` is a delimiter (word boundary)
    - splits the results the other expnsions into words on these characters
    - if `IFS` is
      - unset/the default value: any sequence of `IFS` will delimit words
      - anything not null: the sequences of whitespace characters `space` and `tab` are ignored at the beginning and end of the word,
        - but only if the whitespace character is in the value of `IFS`
        - all other characters delimit the field
      - is null: no word splitting occurs
    - a sequence of of `IFS` white space characters are also treated as a delimiter

  8. `file name expansion`
  - if `-f` option has not been set
    - bash scans each word in the result of the previous `expansion` for `*` `?` and `[` metacharacters
      - if found, the word is regarded as a `PATTERN` and replaced with an alphabeteically sorted list of file names matching the pattern
    - if no match is found,
      - if `nullglob` is disabled
        - the word is left unchanged
      - if `nullglob` is enabled
        - the word is removed
      - if `nocaseglob` is enabled
        - the match is performed without regard to the case of alphabetic characters
          - i presume 9/10 times this is what you want

  - when a pattern is used for filename generation
    - if `dotglob` is disabled
      - the character `.` at the start of a filename or immediately following a slash must be matchex explicitly
  - when matching a file name
    - the slash character must always be matched explicitly
    - `GLOBIGNORE` may be used to restrict the set of file names matching a pattern
      - the side effect of setting `GLOBIGNORE` is that `dotglob` will also be anbled
        - unless you set `.*` as one of the patterns in `GLOBIGNORE`
      - each matching file name that also matches one of the patterns in `GLOBIGNORE` is removed from the list of matches
      - file names `.` and `..` are always ignored

      -

## prompt

- TODO

- `PS1` the interactive prompt
- `PS2` enabled fo rmultiline commands/when the shell thinks youve entered an unfinished cm
  - e.g. forgetting the closing quote and pressing enter
- `PS3` t# he alue is used as the prompt for the `select` command
- `PS4` value is the prompt printed before the command line is echoed when the `-x` option is set
  - defaults to `+`
- `PROMPT_COMMAND` if set, the vlaue is used as the command to execute before printing of each primary prompt `PS1`

## creating, debugging, and executing scripts

- ensure the script is executable via `chmod u+x NAME`
- view the permissions of a file `ls -l NAME`
- you can explicitly choose which shell interprete to use, and it will be executed in a subshell
  - `rbash NAME`
  - `sh NAME`
  - `BASH -x NAME`
  - etc
- you can execute the script in the current shell by sourcing it
  - `. NAME` uses the bourn shell builtin
  - `source NAME` uses the bash builtin (which uses the bourne shell builtin)
- always include a `shebang` at the start of the script
  - and preferable use `#!/bin/env SHELLNAME` so you dont have to guess where the user installed the shell interpreter
- if editing a file, always save the old version first
  - then you can `diff somefile somefile_old` to see the changes youve made

- useful programs

- useful variables
  - `PPID` the process id of the parent process
  - `LINENO` the line number in the script/shell function currently executing
  - `MACHTYPE` fully describes the system type on which bash is executing
  - `OPTERR` if set to 1, bash displays error messages genreated by the `getopts` builtin
  - `OSTYPE` describes the operating system bash is running on
  - `PIPESTATUS` array variable listing the exit statusus of processes in the most recently executed foregroup pipeline
  - `POSIXLY_CORRECT` if set when bash starts, the shell enters `posix` mode

  ```bash
    #!/bin/env bash
    #!/bin/env -xv bash
      # options enabled/not on the shebang line affect the entire script


    # this is a single line comment
    # TODO: add heredoc for multi line comments

    set -x # print command traces before executing each command
    # its useful to place an echo statement before each line within this block
    # to easier locate where the traces are at in your script
    set +x # disable it

    set -f # disable file name generation using metacharacters (globbing)
    set +f # enable it

    set -v # print shell input lines as they are used
    set +v # disable it


  ```

## getting help

- `man` CMD
  - the original wya to create and consume documentation on linux. use `info` instead if its available for the cmd your researching
- `info` CMD
  - the `gnu project` recommended way to create and consume documentation on linux

- `which` prints the path of the executable (unless its a builtin)
  - `which -a NAME` prints all locations of a program
- `type` see whether a program is a builtin or not, for non builtins it prints the location
- `whereis` prints the binary, source and man files for the specified command
- `command` runs a command with args suppressing hte normal shell function lookup
  - only builtin commands/those found in the `PATH` are executed
  - useful when you want to bypass normal function lookup, an go straight to either builtsins or cmds in your `PATH`
- `hash` tracks all commands used in the current shell environment, and the number of times each was used
  - invoke `hash` without args to see the list

## bash initialization (startup) files

- which files are used when
  - interactive login shells / shells started with `--login`
      1. `/etc/profile`
      2. the first found file:
         - `~/.bash_profile`
         - `~/.bash_login`
         - `~/.profile`
         -
      3. `~/.bash_logout`

  - interactive non-login shells
      1. `~/.bashrc`

  - non interactive shells
      1. `BASH_ENV`

  - shells invoked with `sh` command
      1. `/etc/profile`
      2. `~/.profile`
      3. `env` variable, reads this when `sh` is invoked interactively
         - type `env` to see it

  - invoked rmeotely (e.g. via `r-tools`, `rshd` `rlogin` `rsh` `rcp`)
      1. `~/.bashrc`
  - when `UID` !==  `EUID`
      1. no startup files are read

- definitions
  - `/etc/profile`
    - use cases
      - any settings you want to apply to ALL user environments
    - usually sets the shell variables `PATH` `USER` `MAIL` `HOSTNAME` `HISTSIZE`
    - sometimes the `umask` value is also set here
    - sometimes pointers to other configuration files are set here
      - `/etc/inputrc`
        - the system-wide readline initalization file where you can configure te command line `bell-style`
        - can be overridden by setting `INPUTRC` env variable to the path of a different file
      - `/etc/profile.d` directory
        - contains files configuring system-wide behavior of specific programs

      -

## using alias, unalias, and shell functions effectively

- shell `functions`
  - use shell functions somtimes > `alias`
    - functions are faster, nuff said
    - `sh` does not recognize aliases, nuffer said

- `alias`
  - use alias sometimes > shell functions
    - if you dont want child processes to inherit it
  - a string substituted for a word, when it is used as the first word of a simple cmd
  - invoke it without args to see the current set of aliases
  - aliases are expanded when a cmd is read, not executed
    - thus an alias definition on a line has no effect on any cmds that follow it on the same line

- `unalias`
  - remove a previously set `alias`

- useful variables
  - `FUNCNAME` the name of any currently executing function

  ```bash
    # franky's aliases from tldp
      alias ..='cd ..'
      alias ...='cd ../..'
      alias ....='cd ../../..'
      alias PAGER='less -r'
      alias Txterm='export TERM=xterm'
      alias XARGS='xargs -r'
      alias cdrecord='cdrecord -dev 0,0,0 -speed=8'
      alias e='vi'
      alias egrep='grep -E'
      alias ewformat='fdformat -n /dev/fd0u1743; ewfsck'
      alias fgrep='grep -F'
      alias ftp='ncftp -d15'
      alias h='history 10'
      alias fformat='fdformat /dev/fd0H1440'
      alias j='jobs -l'
      alias ksane='setterm -reset'
      alias ls='ls -F --color=auto'
      alias m='less'
      alias md='mkdir'
      alias od='od -Ax -ta -txC'
      alias p='pstree -p'
      alias ping='ping -vc1'
      alias sb='ssh blubber'
      alias sl='ls'
      alias ss='ssh octarine'
      alias tar='gtar'
      alias tmp='cd /tmp'
      alias unaliasall='unalias -a'
      alias vi='eval `resize`;vi'
      alias vt100='export TERM=vt100'
      alias which='type'
      alias xt='xterm -bg black -fg white &'
  ```

## users, permissions, and ownership

- `id` prints information about the given/current user or the process running the cmd if no user is specified
  - `id -un` only print the current user|process invoking the command

- useful variables
  - `EUID` the numeric effective user id of hte current user
  - `UID` the numeric, real user ID of the current user
  - `GROUPS` the numeric group ids of the current user

- useful programs
  - `groups` lists the gorups the current user is a member of

- ma

## keyboard shortcuts

- `ctrl a` move to the start of the line in CLI

## conditionals and flow control

- `if cmd` can also be used, tho you dont see it generally, its not required ot use any of the below constructs

- `[[` compound command originally from `ksh` thats supported by all major shells
  - an upgraded version of `test`
  - usecases
    - test whether a string matches a wildcard pattern

- `test` and `[` are the same thing
  - the only `posix` standard construct

- `(` runs command in a subshell
  - usecases
    - limiting side effects of the cmd if the cmd sets variables/other changes to the shells environment, as subshells cannot affect the environment of parent shells

- `((` arithmetic command originally from `ksh` thats supported by most major shells

- `{` runs command in current shell

  ```bash
    # simple expressions
    # everywhere you see test you can substutite test [..]
    # but prefer test for its expressiveness
      test "$(whoami)" != 'root' && (echo you are using a non-privileged account; exit 1)
      [ "$(whoami)" != 'root' ] && ( echo you are using a non-privileged account; exit 1 )
    # comparing test, [...] and if
      test whoami && echo hello
      if [ `whoami` ]; then echo hello; fi
      if test 0 -gt 5; then echo yup; else echo nope; fi
      test 0 -gt 5 && echo yup || echo nope
    # common scenarios
      test -f somefile && echo it exists
      test ! -f somefile && echo it does not exist
      test $? -eq 0 && echo previous statement succeded
      test $? -ne 0 && echo previous statement failed



    # if statement structure
      if
        command-list1
      then
        command-list2
      else
        command-list3
      fi

  ```

  ```bash
    # long lists of copypasta
      # combining expressions
        [ ! EXPR ] # True if EXPR is false.
        [ ( EXPR ) ] # Returns the value of EXPR. This may be used to override the normal precedence of operators.
        [ EXPR1 -a EXPR2 ] # True if both EXPR1 and EXPR2 are true.
        [ EXPR1 -o EXPR2 ] # True if either EXPR1 or EXPR2 is true.

      # primary expressions: unary
        [ -a FILE ] # True if FILE exists.
        [ -b FILE ] # True if FILE exists and is a block-special file.
        [ -c FILE ] # True if FILE exists and is a character-special file.
        [ -d FILE ] # True if FILE exists and is a directory.
        [ -e FILE ] # True if FILE exists.
        [ -f FILE ] # True if FILE exists and is a regular file.
        [ -g FILE ] # True if FILE exists and its SGID bit is set.
        [ -h FILE ] # True if FILE exists and is a symbolic link.
        [ -k FILE ] # True if FILE exists and its sticky bit is set.
        [ -p FILE ] # True if FILE exists and is a named pipe (FIFO).
        [ -r FILE ] # True if FILE exists and is readable.
        [ -s FILE ] # True if FILE exists and has a size greater than zero.
        [ -t FD ] # True if file descriptor FD is open and refers to a terminal.
        [ -u FILE ] # True if FILE exists and its SUID (set user ID) bit is set.
        [ -w FILE ] # True if FILE exists and is writable.
        [ -x FILE ] # True if FILE exists and is executable.
        [ -O FILE ] # True if FILE exists and is owned by the effective user ID.
        [ -G FILE ] # True if FILE exists and is owned by the effective group ID.
        [ -L FILE ] # True if FILE exists and is a symbolic link.
        [ -N FILE ] # True if FILE exists and has been modified since it was last read.
        [ -S FILE ] # True if FILE exists and is a socket.
        [ -z STRING ] # True of the length if "STRING" is zero.

      # primary expressions: compound
        [ FILE1 -nt FILE2 ] # True if FILE1 has been changed more recently than FILE2, or if FILE1 exists and FILE2 does not.
        [ FILE1 -ot FILE2 ] # True if FILE1 is older than FILE2, or is FILE2 exists and FILE1 does not.
        [ FILE1 -ef FILE2 ] # True if FILE1 and FILE2 refer to the same device and inode numbers.
        [ -n STRING ] or [ STRING ] # True if the length of "STRING" is non-zero.
        [ STRING1 == STRING2 ]  # True if the strings are equal. "=" may be used instead of "==" for strict POSIX compliance.
        [ STRING1 != STRING2 ]  # True if the strings are not equal.
        [ STRING1 < STRING2 ]  # True if "STRING1" sorts before "STRING2" lexicographically in the current locale.
        [ STRING1 > STRING2 ]  # True if "STRING1" sorts after "STRING2" lexicographically in the current locale.
        [ ARG1 OP ARG2 ] # "OP" is one of -eq, -ne, -lt, -le, -gt or -ge. These arithmetic binary operators return true if "ARG1" is equal to, not equal to, less than, less than or equal to, greater than, or greater than or equal to "ARG2", respectively. "ARG1" and "ARG2" are integers.

      # primary expressions: options
        [ -o OPTIONNAME ] # True if shell option "OPTIONNAME" is enabled.



  ```

## using the directry stack effectively

- generally you should be using `pushd` and `popd` over `cd` just for the fact that you can easily see all the dirbefor ea cmd is executed, its input & output can be redirected
  - can also be used to open/cectories you've visited via `dirs`

- related vars
  - `PWD` prints the working directory
  - `OLDPWD` the previous dir if there is one
  - `dirs` prints all the directories in the stack, dependent on using `pushd` and `popd`
- `DIRSTACK` array variable containing the current ocntents of the directory stack

- related programs
  - `pushd` cds to and adds the path to the dirstack
  - `popd` removes the last directory from the dirstack and cds into it

  -

## effectively using pkg related commands

- `apt-get update`  update the package index files so that any other pkg related commands are using the latest values

- `dpkg --list` see all installed pkgs

- `apt search PKGNAME` search for a pkg
  - veyr useful to do `apt search ^PKGNAME` to get only pkgs starting with the PKGNAME

- `apt-cache` query the apt cache, issue without args to see a very helpful summary
  - `apt-cache pkgnames` get the list of installable pkgs
  - `apt-cache search KEYWORD` keyword can be a name, or word in the pkg description
  - `apt-cache search .` see all pkgs
  - `apt-cache policy PKGNAME` get information about a specific package
  - `apt-cache policy` see your installed sources?

-

## pattern matching, regex, grep, pgrep, extended regex

- pattern matching: the use of metacharacters to describe strings to matched on some other input
  - regex, grep related programs, core bash programs like touch, ls, etc
- regular expression: a pattern that describes a set of strings
- basic regex
  - `?` `+` `{` `|` `(` `)` have no meaning
    - unless prefixed with `\`
- extended regex
  - opposite of basic regex (TODO, theres more to this)
- `grep` searches input [files] for lines containing a match to a given pattern and copies matches to stdout (by default)

  ```bash
    # regex
      # precedence
        repitition > concatenation > alternation
      # operators
        ## fundamental
          . # any single character
          ? # preceding item matched 0/1 times
          * # preceding item matched 0/more times
          + # preceding item matched 1/more times
          ^ # beginning of a string, or chars not in the range of a list
          $ # end of a string,
          | # the pattern on left, or right
        ## base
          {N} # preceding item matched N times
          {N,} # preceding item matched N/more times
          {N,M} # preceding item matched at least N, but no more than M times
        ## useful
          \b # matches a word boundary
          \B # matches a non-word boundary
        ## useful on linux (dont think we have these in js)
          \< # matches the start of a string
          \> # matches the end of a string
      # expressions
        ## ranges
          [abc] # matches any of the characters in the class
          [^abc] # matches any character not in the class
          [a-z] # matches any char in the range (inclusive)
          [a-z0-9] # matches any of the chars in the range (inclusive)
        ## character classes, specified as [[:POOP:]]
          [[:alnum:]]
          [[:alpha:]]
          [[:ascii:]]
          [[:blank:]]
          [[:cntrl:]]
          [[:digit:]]
          [[:graph:]]
          [[:lower:]]
          [[:print:]]
          [[:punct:]]
          [[:space:]]
          [[:upper:]]
          [[:word:]]
          [[:xdigit:]]




    # grep
      grep OPTIONS PATTERN FILE
      # common options
        -n # show line numbers
        -v # invert match
        -i # ignore case
        -x # print non-matching lines
        -c # print number of matches
        -l # print filename
        -w # find only whole words
      # common patterns
        grep FIND_THESE | grep -v WITH_OUT_THESE
        grep FIND_THESE | grep '\<THEN_FOLLOWED_BY_THIS_WORD'
          # lines containing export, and then followed by PATH,
          # i.e. export PATH=....
          grep export ~/.bashrc | grep '\<PATH'






  ```

# how tos

- determine if your in an interactive shell
  - `echo $-` if it returns anything youre in an interactive shell, as in non-interactive shells `PS1` is unset

# copypasta scripts

- common `/etc/profile` script

    ```bash
      # /etc/profile script
      # applied to all user environments
      # dont put bash specific stuff here as its read by ALL types of shells
      # @see https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_01.html

      # System wide environment and startup programs, for login setup

      PATH=$PATH:/usr/X11R6/bin

      # No core files by default
      ulimit -S -c 0 > /dev/null 2>&1

      USER="`id -un`"
      LOGNAME=$USER
      MAIL="/var/spool/mail/$USER"

      HOSTNAME=`/bin/hostname`
      HISTSIZE=1000

      # Keyboard, bell, display style: the readline config file:
      if [ -z "$INPUTRC" -a ! -f "$HOME/.inputrc" ]; then
          INPUTRC=/etc/inputrc
      fi

      PS1="\u@\h \W"

      export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE INPUTRC PS1

      # Source initialization files for specific programs (ls, vim, less, ...)
      for i in /etc/profile.d/*.sh ; do
          if [ -r "$i" ]; then
              . $i
          fi
      done

      # Settings for program initialization
      source /etc/java.conf
      export NPX_PLUGIN_PATH="$JRE_HOME/plugin/ns4plugin/:/usr/lib/netscape/plugins"

      PAGER="/usr/bin/less"

      unset i
    ```

- common `/etc/bashrc` script

    ```bash
      # /etc/bashrc
      # bashrc defaults that should affect all users BASH environment
      # this file should be sourced from ~/.bashrc
      # useful for containing system-wide definitions for shell functions and alias

      pskill()
      {
        local pid

        pid=$(ps -ax | grep $1 | grep -v grep | gawk '{ print $1 }')
        echo -n "killing $1 (process $pid)..."
        kill -9 $pid
        echo "slaughtered."
      }
    ```

- common `~/.bash_profile` script

    ```bash
      # .bash_profile
      # preferred configuration file for configuring individual user environments

      source ~/.bashrc
      source ~/.bash_login
    ```

- common `~/.bash_login` script

    ```bash
      # .bash_login
      # commands to perform from the bash shell at login time
      # should only be sourced from ~/.bash_profile
      # executed from the bash shell when you login if ~/.bash_profile is missing

      # file protection
      umask 002 # all to me, read to group and others

      # misc
      w # shows current logged in users everytime this user loggs into the system
      cal `date +"%m"` `date +"%Y"` # shows current month and year, be careful cal isnt installed by defualt
    ```

- common `~/.bashrc` script

    ```bash
      # ~/.bashrc
      # sourced automatically in non-login shells (e.g. logging grpahically using xterminal windows)
      # should be source from login shell initialization scripts as well
      # check out the bash package for examples
    ```

- common `~/.bash_logout` script

    ```bash
      # ~/.bash_logout
      # executed when you log out of the shell

    ```
