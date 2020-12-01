#!/usr/bin/env bash

# https://docs.docker.com/config/daemon/systemd/
# https://github.com/moby/moby/blob/master/contrib/init/systemd/docker.service
# https://docs.docker.com/engine/reference/commandline/dockerd/


dockerdup() {
	echo 'enter your password to start dockerd'
	# https://docs.docker.com/engine/install/linux-postinstall/
	# docker daemon always runs as root unless in rootless mode
	# we still run docker as non-root users tho
	# TODO: think this needs nohup
	# but not to bad as the script ignores ctrlc
	# need to grab the pid of the bg process and create a func to shut|restart it
	"$(sudo -b -E dockerd --config-file $(getpath '_.docker_default.json') ) &"
	echo $?
}
export dockerdup;

# https://gist.github.com/peterver/ca2d60abc015d334e1054302265b27d9
rep="$(curl -s --unix-socket /var/run/docker.sock http://ping > /dev/null)"
status=$?
runstatus=7
# if docker running
if [[ $status != $runstatus ]]; then
	# disable docker d if it was started via systemd
	# we want to be able to set the host var in the config
	if [[ "$(systemctl is-active docker.service)" == "active" ]]; then
		echo 'disabling systemd docker service'
		$(sudo systemctl stop docker.service)
	else
		# docker is running and not started by dockerd
		# likely started in another shell 
		# indicate that we shouldnt attempt to relaunch
		echo 'not launching docker'
		dontlaunchdockerd=true
	fi
fi

# https://tldp.org/LDP/abs/html/comparison-ops.html#STRTEST
if [[ ${dontlaunchdockerd:-} != true ]]; then
	dockerdup
fi