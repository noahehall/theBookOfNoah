# todo 
  - transcribe written notes to this doc
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

  
## quickies
  - [pgrep](https://linuxize.com/post/pgrep-command-in-linux/)
  - [excluding in grep](https://linuxize.com/post/grep-exclude/)
  - [regular expressions in grep](https://linuxize.com/post/regular-expressions-in-grep/)
  - [bash aliases](https://linuxize.com/post/how-to-create-bash-aliases/)
  - [check if file/dir exists](https://linuxize.com/post/bash-check-if-file-exists/)
  

# my favorite searchesf
  - `[` `[[`

# best Practices    
  - always trap signals
  - use builtin cmds > everything else (quicker)
  - always enable POSIX mode (see notes about POSIX special buitins)

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
  -