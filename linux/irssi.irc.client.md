# quickies
```sh
  # boot up
  docker run -it --name my-running-irssi -e TERM -u $(id -u):$(id -g) \
      --log-driver=none \
      -v $HOME/.irssi:/home/user/.irssi:ro \
      -v /etc/localtime:/etc/localtime:ro \
      irssi

  # connect to two channels
  # and switch between them with ctrl+x
  /connect irc.foo.com
  /connect irc.http.com

  # cmds
  /disconnect # from active server
  /join #channel-name


  # blah?
  # /server

```