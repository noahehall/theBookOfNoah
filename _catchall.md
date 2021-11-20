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

TODO: still not happy with this setup; incorporate `update-alternatives`
binaries vs git pkgs
  [read this for the fkery](https://unix.stackexchange.com/questions/11544/what-is-the-difference-between-opt-and-usr-local)
  place binaries directly in ~/.local/share and symlink to /opt/bin
    sudo ln -s ~/.local/share/CMD /opt/bin
  place git repos in your git dir, make, and symlink to /opt/bin
    sudo ln -s ~/git/whatev /opt/bin
  ^ allows you to keep /opt/bin owned by root, while keeping track of wtf you've downloaded as thats whats /opt is for
  ^ I think the recommened approach is to download to /opt directly, but whatev
  ^ or directly in /usr/local for opt packages, but fkn linux history n shit

- todos
  - <https://docs.aws.amazon.com/cli/latest/reference/configure/get.html>
  - <https://vitux.com/test-your-internet-speed-through-ubuntu-command-line/>
    - <https://www.minim.com/blog/how-do-i-interpret-my-wifi-speed-test-results>
  <https://shripadk.github.io/react/docs/jsx-gotchas.html>
  <https://iterationinsights.com/article/where-to-start-with-the-4-types-of-analytics/>
  <https://stackoverflow.com/questions/6656324/check-for-current-node-version>
