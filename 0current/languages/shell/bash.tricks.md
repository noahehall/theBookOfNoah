# bash examples

- didnt want to clutter the `bash.md` file

## brace expansion

```bash
  ls {ch, app}? # ch1, ch2, appX, appY etc, because of the ? char
  mv info{,.old} # mv info info.old,

```

## cmd execution

```bash
  (date; who; pwd) > logfile # everything in logfile
  egrep '(yes|no)' `cat listoffiles.txt` # search listoffiles.txt
  # ^ $(cat listoffiles.txt) for POSIX
  # ^ $(< listoffiles.txt) faster, but definitely not POSIX

```

## redirections

```bash
  echo "send this to stderr, eg. to add a comment" 1>&2

  # find files you can access, send to accessiblefiles list
  # for files you cant access, send to innacessbilefileslist
  find / -print > accessiblefileslist 2> inaccessiblefileslist
```
