```sh
  # setup omsa app for dell laptops
  docker run --privileged -d -p 161:161/udp -p 1311:1311  --net=host --name=omsa   -v /lib/modules/`uname -r`:/lib/modules/`uname -r`   spkane/dell-openmanage:latest sleep 40s

  # see all cmds
  docker exec omsa omreport -?

  # run specific cmd
  docker exec omsa omreport system summary


  # run a gui app in docker
  docker run --net=host --env="DISPLAY" --volume="$HOME/.Xauthority:/root/.Xauthority:rw" gui-app

  # is roughly the opposite of apt-get update -- it ensures that the layer doesn't include the extra ~8MB of APT package list data, and enforces appropriate apt-get update usage.)
    rm -rf /var/lib/apt/lists/* 
```