# todos

- [editor config](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)

# <https://github.com/github/hub>

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

binaries vs git pkgs
  [read this for the fkery](https://unix.stackexchange.com/questions/11544/what-is-the-difference-between-opt-and-usr-local)
  place binaries directly in ~/.local/share and symlink to /opt/bin
    sudo ln -s ~/.local/share/CMD /opt/bin
  place git repos in your git dir, make, and symlink to /opt/bin
    sudo ln -s ~/git/whatev /opt/bin
  ^ allows you to keep /opt/bin owned by root, while keeping track of wtf you've downloaded as thats whats /opt is for
  ^ I think the recommened approach is to download to /opt directly, but whatev
  ^ or directly in /usr/local for opt packages, but fkn linux history n shit

-- randomness
permission explanations
   r: read 4
   w: write 2
   x: execute 1
    read,write & execute = 7
    read & write: 6
    read & execute: 5
  permission segments for users

   owners: who created the file
   group membership
   anonymous:

   For files:
    r = read
    w = write
    x = execute
   For directories:
    r = list (read directory contents)
    w = write
    x = can access the directory (i.e., cd to the directory)

  breakdown of ls-l
   drwxr-x---
    d = directory
    - = file (if there is no d, it will start with -)

- [which processes on which ports](https://www.tecmint.com/find-out-which-process-listening-on-a-particular-port/)

<https://docs.aws.amazon.com/cli/latest/reference/configure/get.html>
aws configure get aws_access_key_id

<https://www.tutorialworks.com/container-networking/>
docker network ls
docker inspect network some_network
^ see containers in network

<https://www.tecmint.com/find-out-which-process-listening-on-a-particular-port/>

<https://samuelsson.dev/update-nvm-installed-node-version-and-keep-globally-installed-packages/>

<https://muffinman.io/blog/nvm-updating-npm/>
