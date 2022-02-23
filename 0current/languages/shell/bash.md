# bash scripting

- most of this should have come straight from the bash pocket ref (bash v4.4)
- hopefully this will be my last bash cheatsheet

## links

- likely should check out the scripting.md file for links

## basics

### terms

- bourne shell
  - original bourne shell was 1979 via the V7 Unix
  - found in `/bin/sh` (but I think somewhere this is no longer shell, but some other version on new systems)
- POSIX standard: defines the `standard shell` language & behavior based on the System V Bourne SHell
- Bash: by the Free Software Foundation; clone of the Bourne Shell written from scrach

  - in/output redirection
  - wildcard chars for filename abreviatiation
  - shell vars & options for customizing the env
  - builtin command set for writing shell programs
  - shell functions
  - job control
  - command-line editing (using the cmd syntax of vi/emacs)
  - editable cmd history
  - integer arithmetic
  - arrays and airthmetic expressions
  - cmd name abbreviation (aliases)
  - upwards compliance with POSIX
  - internationalization facilities
  - arithmetic for loop

- shell types
  - login shell: reads `/etc/profile` and `~/.profile`
  - regular shells: read $ENV
  - interactive shell:
    - uses the prompt for input
    - reads `~/.bashrc`
  - restricted shell:
  - priveledged shell:
    - do not read $ENV or $BASH_ENV
    - do not import functions from the environment
    - ignore values in BASHOPTS, CDPATH, GLOBIGNORE, and SHELLOPTS

### files and directories

- `/bin/sh`: usually a link to bash
- `/etc/profile`:
- `~/.bash_profile`
- `~/.bashrc`
- `~/.profile`

### env vars

- BASH_ENV
- BASHOPTS
- CDPATH
- ENV
- GLOBIGNORE
- SHELLOPTS
- $? exit status of the previous executed cmd

## concepts

### arguments

- bash arguments are assigned to positional params $1, $2, etc
- if the first arg is a script
  - cmds are read from the script
  - the scrpit doesnt need to be executable, but must be readable
  - the script path is assigned to $0

### exit status

- when a cmd exits, it provides a numerical exit status between 0-255
  - external cmds (e.g. `ls`) provides the value to the operating system
  - internal cmds (e.g. `cd`) provides this value directly to the shell
- cmd exit values (by convention)
  - 0: the only one that === true/success
  - 2: usage errors
  - 126: cmd was found but not executable
  - 127: cmd not found
  - 128 + N: cmd died due to receiving signal number N

## control flow

### if

### while

### until

## todos

```bash
  bash [options] [arguments]
  # options
    -c str # read cmds from string
    -D, --dump-strings # print all $".." strings in the program
    -i # create an interactive shell
    -l, --login # behave as a login shell
    -O SOME_OPT # enable some_option
    +O SOME_OPT # disable some_option
    -p #start as a privileged user
    -r, --restricted # create a restricted shell
    -s, read cmds from stdin, builtin cmd output > descriptor 1, all other > descriptor 2
    -v, --verbose # print lines as the shell reads them
    --debugger # read the debugger profile if its available at startup, turn on extdebug option to shopt
    -init-file FILE, --rcfile FILE # use FILE instead of ~/.bashrc for interactive shells
    --noediting # do not use readline library for input
    --noprofile # do not read any startup rc files or /etc/profile
    --norc # do not read ~/.bashrc (e.g. when invoked as sh)
    --posix # turn on POSIX mode
    --version # print version
    --help # print help
    -, -- # end option processing

```
