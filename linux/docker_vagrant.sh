background
  -docker requires linux host, so docker guys use boot2docker ('for' all non linux hosts)
  -vagrant allows you to use any host (centos, ubuntu, etc) as the host 'for' docker
    .in your vagrantfile: docker.vagrant_vagrantfile = "path/to/host/VM/Vagrantfile"
    .the host file must be in a different dir than the one used to spinup your docker containers
      .in the host file, specify: config.vm.provision "docker"
        .because vagrant expects docker to be running in the host
        .this runs docker when you do $vagrant up


Links
  docker+vagrant tut http://blog.scottlowe.org/2015/02/10/using-docker-with-vagrant/
  multi container vagrant: http://blog.scottlowe.org/2014/10/22/multi-machine-vagrant-with-yaml/
    -needs to be updated to use multiple dockers
  great explanation about vagrant vs docker by the vagrant creator: http://stackoverflow.com/questions/16647069/should-i-use-vagrant-or-docker-for-creating-an-isolated-environment
  vagrant + docker repo: https://github.com/lowescott/learning-tools/tree/master/vagrant-docker-yaml
