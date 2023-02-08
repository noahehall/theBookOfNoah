# todos

- [editor config](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)
- optimizing eero

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
  - <https://shripadk.github.io/react/docs/jsx-gotchas.html>
  - <https://iterationinsights.com/article/where-to-start-with-the-4-types-of-analytics/>
  - <https://stackoverflow.com/questions/6656324/check-for-current-node-version>
  - <https://www.redhat.com/sysadmin/linux-environment-variables>

expect(some).toHaveBeenCalledWith(
expect.objectContaining(someObject)
);

import \* as poop from '../some/folder'
jest.Mock('../some/folder');
<https://jestjs.io/docs/mock-functions>
poop.someFn.mockImplementation(async () => 'return this')

@see <https://stackoverflow.com/questions/4937792/using-variables-inside-a-bash-heredoc>
bash fn to curl some endpoint
register_no_pass() {
curl -X POST $SOME_URL \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d @- << EOF
    {
      "field1": "value"
      "field2": "$ANOTHER_VAR"
}
EOF
}

wifi
iw dev # see network interfaces and what hteir connected to

## linux

- [increasing file descriptors]<https://docs.oracle.com/cd/E19476-01/821-0505/file-descriptor-requirements.html>

  - `$ ulimit -aH` see humand readabile limits

- users, groups, and permissions

  - `exec su -l $USER` reload session, e.g. to reload group assignments
  - x: execute 1
  - w: write 2
  - r: read 4
  - and...
    - read & execute: 5
    - read & write: 6
    - read & write & execute = 7
  - what it means
    - For files:
      - r = read
      - w = write
      - x = execute
    - For directories:
      - r = list (read directory contents)
      - w = write
      - x = can access the directory (i.e., cd to the directory)

- system info (just use neofetch, but these are useful for scripting)

  - `lsb_release -a` all info
  - `lsb_release -cs` e.g impish
  - `dpkg-architecture -q DEB_BUILD_ARCH` e.g. amd64, but can be used to query anything
  - `dpkg --print-architecture` e.g. amd64
  - `grep '/usr/s\?bin' /etc/systemd/system/display-manager.service` find your display manager, e.g. gdm3
  - `lsmod | grep kvm` find the name of your hypervisor
  - `lshw -short` list hardware

- files & disk

  - `find ~/all/files/in/dir -type f -size +100k`
  - `tar -czvf as_this_file.tar.gz from_this_file`
  - `tar xvzf unzip_this_file.tar.gz -C to/this/dir`

- [disable webcam](https://askubuntu.com/questions/166809/how-can-i-disable-my-webcam)

  1. find the cam from the list of devices `lsusb -t`
  2. get some tape from one of your kitchen drawers
  3. and use the tape to cover the device you found in step 1

- repos/packages

  - `sudo add-apt-repository -r ppa:remove/this/ppa`
  - `sudo add-apt-repository ppa:add/this/ppa`
  - `sudo dpkg -i installme.deb`
  - `whereis somecmd` binary, source & man pages for a cmd

- networking

  - `hostname -I` your ip
  - `ifconfig | grep inet` all your ips
  - [whats on 80](https://www.tecmint.com/find-out-which-process-listening-on-a-particular-port/)
    - `lsof -i :80`
      - sudo apt install lsof
    - `netstat -ltnp | grep -w :80`
    - `netstat -ltnp | grep -E ':80 |:443 '`
      - ^ notice the spaces, works better than the first
    - sudo apt install net-tools
    - `fuser 80/tcp`
      - sudo apt install psmisc
      - the most concise
    - `ps -p THE_PID -o comm=`
      - get the name of the process
    - `cat /proc/net/tcp`
      - for embedded devices

- ssh

  - `eval \`ssh-agent -s\`` start the ssh agent
  - `ssh-add` add identities in `~/.ssh` can also append a specific private key
  - `ssh-add -l` list identities
  - `id_rsa.pub` == your public key (share this)
  - `id_rsa` === your private key

- terminal

  - `ctrl shift t` new tab
  - `tree --dirsfirst --charset=ascii SOME_DIR` show tree of dir

- settings

  - `sudo update-alternatives --config` [choose the default cmd](https://linuxhint.com/update_alternatives_ubuntu/)
    - set the default for common cmds
      - x-terminal-emulator
      - editor
    - create a new cmd (e.g. in `/opt/bin/CMD`) that can be used to switch between multiple versions
      - `sudo update-alternatives --install ~/opt/bin/CMD CMD /some/path/to/actual/cmd 20`
        - `/opt/bin` is where the cmd will be installed
        - `CMD` is the name of the alternative to invoke the cmd
        - `/some/path/to/actual/cmd` is the path to the actual cmd
        - `20` is the priority of the alternative
          - repeat this for each cmd you want to use

- aws

  - `export AWS_DEFAULT_PROFILE=poop`
  - `aws configure list` safely list current aws config
  - `aws configure get aws_access_key_id` show the world your access key

- [docker networking](https://www.tutorialworks.com/container-networking/)

  - docker network ls
  - docker inspect network some_network

- eslint
  - /_eslint-disable_/
  - // eslint-disable-next-line
  - // eslint-disable-line

# wifi

dkms status
sudo dkms remove 8814au -v 5.8.5.1 -k $(uname -r)
sudo dkms uninstall rtl8814au -v 5.8.5.1
sudo rm -rf /usr/src/rtl8814au-5.8.5.1/
sudo rm -rf /usr/src/8814au-5.8.5.1/

[sync computer & network time](https://www.howtogeek.com/tips/how-to-sync-your-linux-server-time-with-network-time-servers-ntp/)

# curl

[use the --data-urlencode option](https://stackoverflow.com/questions/296536/how-to-urlencode-data-for-curl-command)

- inspect the response via jq `curl really-long-curl-options | jq .`

```sh

aws_statemachine_run() {
  # todo
  aws stepfunctions start-execution help
  # args:
  # --state-machine-arn some_arn_from_aws
  # --input file://some_file_path.json
}
# @see https://github.com/donnemartin/saws

aws_routetable_create() {
  # $1 vpc-id
  # $2 profile
  # aws ec2 create-route-table --vpc-id $1 --profile $2
  echo 'not setup'
}

aws_routetable_route_create() {
  # $1 route table ID (make sure its the one attached to the subnet you want)
  # $2 destination (ip cidr range)
  # $3 this links it to an internet gateway
  # ^ may have to update this fn in the future to specify a different target
  # $4 profile name

  # aws ec2 create-route --route-table-id $1 --destination-cidr-block $2 --gateway-id $3 --profile $4
  echo 'not setup'
}

aws_internetgateway_create() {
  # $1 profile
  # aws ec2 create-internet-gateway --profile $1
  echo 'not setup'
}

aws_tag_create() {
  # $1 resource ids
  # $2 tagKey e.g. Name
  # $3 tagValue e.g. poop-dev
  # $4 profile

  # aws ec2 create-tags --resources $1 --tags Key=$2,Value=$3 --profile $4
  echo 'not setup'
}

aws_routetable_link() {
  # $1 route table id
  # $2 subnet-id
  # $3 profile
  # aws ec2 associate-route-table --route-table-id $1 --subnet-id $2 --profile $3
  echo 'not setup'
}

aws_internetgateway_link() {
  # $1 gateway id
  # $2 vpc id
  # $3 profile
  # aws ec2 attach-internet-gateway --internet-gateway-id $1 --vpc-id $2 --profile $3
  echo 'not setup'
}

# todo: i need to setup named params before using any of this
aws_instance_run() {
  # $1 ami-id
  # $2 count of instances e.g. 1
  # $3 instance type e.g. t2.micro
  # $4 key pair name (rememer scoped to region)
  # $5 subnet id
  # $6 security group ids
  # $7 user data, e.g. file://somefile.sh (ensure you use -y in the script)
  # $8 profile to use
  # $9 tag key e.g. Name
  # $10 tag value e.g. poop-dev
  # aws ec2 run-instances --image-id $1 --count $2 --instance-type $3 --key-name $4 --subnet-id $5 --security-group-ids $6 --user-data $7 --tag-specifications --profile $8 "ResourceType=instance,Tags=[{Key=$9,Value=$10}]"
  echo 'not setup'
}

```

# desktop integration

- [read this on how kitty cli does it](https://sw.kovidgoyal.net/kitty/binary/)

# links: move these into the appropriate files

- [checkout localstack](https://localstack.cloud/)
- [curl manual](https://curl.se/docs/manpage.html)
- [jq manual](https://stedolan.github.io/jq/manual/)
- [nice review of jq, bash & curl](https://thom4.net/2016/pipelining-http/)
- [good review of normal forms & normalization of sql schemas](https://www.guru99.com/database-normalization.html)
- [checkout kamon telemetry](https://github.com/kamon-io/Kamon)
- [kuvebal validate k8s conf files](https://www.kubeval.com/)
- [down at the bottom theres a good review of unsetting envs vars on login](https://stackoverflow.com/questions/6877727/how-do-i-delete-an-exported-environment-variable)
- [zio intellij plugin](https://github.com/zio/zio-intellij)
- [postgres timestamp](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-timestamp/)
- [another bash loop discussion](https://stackoverflow.com/questions/169511/how-do-i-iterate-over-a-range-of-numbers-defined-by-variables-in-bash)
- [great refresher on bash loops](https://www.cyberciti.biz/faq/bash-for-loop/)
- [add these aliases as bash fns](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/index.html#checkout-merge-requests-locally-through-the-head-ref)
- [CVE database](https://vuldb.com/)
- [scala for comprehension](https://stackoverflow.com/questions/14598990/confused-with-the-for-comprehension-to-flatmap-map-transformation)
- [scala format](https://scalameta.org/scalafmt/docs/installation.html)
- [create some bash fns for gitblame](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-blame)
- [checkout obsidian.md](https://help.obsidian.md/Obsidian/Index)
- [mkcert: trusting local certs](https://github.com/FiloSottile/mkcert#installation)
- [gitlab vars](https://docs.gitlab.com/ee/ci/variables/)
- [java http package](https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/package-summary.html)
- [httpclient ref](https://docs.oracle.com/en/java/javase/11/docs/api/java.net.http/java/net/http/HttpClient.html)
- [another java11 http client walkthrough](https://openjdk.org/groups/net/httpclient/intro.html)
- [java 11 httpclient walkthrough](https://www.baeldung.com/java-9-http-client)
- [scala duration](https://www.scala-lang.org/api/2.12.4/scala/concurrent/duration/Duration.html)
- [java duration](https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html)
- [how to throw and handle execeptions](https://rollbar.com/blog/how-to-throw-handle-scala-exceptions/#)
- [httpClient sendAsync examples](https://mkyong.com/java/java-11-httpclient-examples/)
- [shading (programmatically rewriting) scala dependencies](https://eed3si9n.com/jarjar-abrams/)
- [explicitly return unit value](https://stackoverflow.com/questions/13415307/suppress-discarded-non-unit-value-warning)
- [see sbt dependencies](https://www.baeldung.com/scala/sbt-dependency-tree)
- [add an http server to any dir](https://attacomsian.com/blog/local-web-server)
- [configuring global vs project intellij sdks](https://stackoverflow.com/questions/31506278/unable-to-set-project-sdk-in-intellij)
- [mac git autocomplete](https://www.macinstruct.com/tutorials/how-to-enable-git-tab-autocomplete-on-your-mac/)
- [multi-arch build and images](https://docs.docker.com/desktop/multi-arch/)
- [asdf](https://asdf-vm.com/guide/introduction.html)
- [java PKIX ssl cert whatever the fk failure](https://stackoverflow.com/questions/9619030/resolving-javax-net-ssl-sslhandshakeexception-sun-security-validator-validatore)
- [docker on apple silicon review](https://earthly.dev/blog/using-apple-silicon-m1-as-a-cloud-engineer-two-months-in/)
- [docker apple silicon issues & resolutions](https://pythonspeed.com/articles/docker-build-problems-mac/)
- [sbt: specify main method/class to run](https://alvinalexander.com/scala/sbt-how-specify-main-method-class-to-run-in-project/)

```sh
# prefix each line with a value
sed -e 's/^/0002,/' inthisfile.csv > copytothisfile.csv
```
