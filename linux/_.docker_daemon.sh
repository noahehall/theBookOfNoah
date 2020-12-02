#!/usr/bin/env bash

# https://docs.docker.com/config/daemon/systemd/
# https://github.com/moby/moby/blob/master/contrib/init/systemd/docker.service
# https://docs.docker.com/engine/reference/commandline/dockerd/

# https://stackoverflow.com/questions/55344896/attempt-to-change-docker-data-root-fails-why
# need to add a check for this
# docker info | grep "Root Dir" === config.file.data-root

## th9s file is way too wet

getdockerdpid() {
	echo "$(pidof dockerd)" || 0;
}

# need log status
dockerdreload() {
	local dockerdpid=$(getdockerdpid)
	if [[ "$dockerdpid" -gt 0 ]]; then
		echo "reloading dockerd: ${dockerdpid}"
		echo "$(sudo kill -SIGHUP ${dockerdpid})"
		echo $?
	else
		echo "unable to terminate docjkerd: whats the pid?"
	fi
}

# need log status
dockerdlogstacktrace() {
	local dockerdpid=$(getdockerdpid)
	if [[ "$dockerdpid" -gt 0 ]]; then
		echo "forcing full stack trace: ${dockerdpid}"
		echo "$(sudo kill -SIGUSR1 ${dockerdpid})"
		echo $?
	else
		echo "unable force log of stack trace: whats the pid?"
	fi
}

# get logs
alias dockerdlog="$(echo journalctl -u docker.service)"
# get netstats (use ss on ubuntu)
alias dockerdss="(sudo ss -asmpex | grep dockerd)"

# need to log result
dockerdown() {
	local dockerdpid=$(getdockerdpid)
	if [[ "$dockerdpid" -gt 0 ]]; then
		echo "terminating dockerd: ${dockerdpid}"
		echo "$(sudo kill -9 ${dockerdpid})"
		echo $?
	else
		echo "could terminate dockerd: whats the pid?"
	fi
}
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
		echo 'docker is running'
		echo $(docker ps)
		dontlaunchdockerd=true
	fi
fi

# https://tldp.org/LDP/abs/html/comparison-ops.html#STRTEST
if [[ ${dontlaunchdockerd:-} != true ]]; then
	dockerdup
fi