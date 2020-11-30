#!/usr/bin/env bash

# https://docs.docker.com/config/daemon/systemd/
# https://github.com/moby/moby/blob/master/contrib/init/systemd/docker.service
# https://docs.docker.com/engine/reference/commandline/dockerd/

# by default we want to stsart dockerd with our custom config file
startdockerd=1

# https://gist.github.com/peterver/ca2d60abc015d334e1054302265b27d9
rep=$(curl -s --unix-socket /var/run/docker.sock http://ping > /dev/null)
status=$?
runstatus=7
# if docker running
if [ "$status" -ne "$runstatus" ]; then

	echo "status is ${status} ${runstatus}"
	# disable docker d if it was started via systemd
	# we want to be able to set the host var in the config
	if [ $(sudo systemctl is-active docker.service) = 'active' ]; then
		echo "disable systemd docker service"
		sudo systemctl stop docker.service
	else
		# docker is running and not started by dockerd
		# likely started in another shell
		echo "docker is already running"
		unset startdockerd
	fi
fi


# https://tldp.org/LDP/abs/html/comparison-ops.html#STRTEST
if [ -n "$startdockerd" ]; then
	# https://docs.docker.com/engine/install/linux-postinstall/
	# docker daemon always runs as root unless in rootless mode
	# we still run docker as non-root users tho
	sudo dockerd --config-file $(getpath _.docker_default.json)
fi