# todos

- [editor config](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)

# <https://github.com/github/hub>

git config --list
GIT_TRACE=1 some git
lshw list hardware and settings and stuff

```sh
# I always forget how to do this #######
# posix compliant
# if ! type poop &> /dev/null; then
# then
#     echo "poop could not be found"
#     exit
# fi
########################################
# other ways, but use the one above
# https://stackoverflow.com/questions/592620/how-can-i-check-if-a-program-exists-from-a-bash-script
# https://unix.stackexchange.com/questions/86012/what-is-the-purpose-of-the-hash-command
# $ command -v foo >/dev/null 2>&1
# $ type foo >/dev/null 2>&1
# $ hash foo 2>/dev/null
# 2>/dev/null # only redirct errs
# &> /dev/null # redirect erything
########################################
```

$ whereis somecmd # see all its paths

binaries vs git pkgs
  place binaries directly in ~/.local/share and symlink to /opt/bin
    sudo ln -s ~/.local/share/CMD /opt/bin
  place git repos in your git dir, make, and symlink to /opt/bin
    sudo ln -s ~/git/whatev /opt/bin
  ^ allows you to keep /opt/bin owned by root, while keeping track of wtf you've downloaded as thats whats /opt is for
  ^ I think the recommened approach is to download to /opt directly, but whatev
  ^ or directly in /usr/local for opt packages, but fkn linux history n shit

find large files
  find ~/.local -type f -size +100k

see which ssh key is in use
  ssh-add -l

create: tar -czvf as_this_file.tar.gz from_this_file
unzip: tar xvzf unzip_this_file.tar.gz -C to/this/dir

terminal quickies
  blah just use terminator
    sudo apt install terminator
  ctrl shift t # new tab
  sudo update-alternatives --config x-terminal-emulator
      ^ presents a list for you to select default terminal

reset git to upstream
  <https://stackoverflow.com/questions/1146973/how-do-i-revert-all-local-changes-in-git-managed-project-to-previous-state>
  git fetch
  git reset --hard origin/branchname
