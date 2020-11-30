#!/usr/bin/env bash

# https://docs.docker.com/config/daemon/systemd/
# https://github.com/moby/moby/blob/master/contrib/init/systemd/docker.service
# https://docs.docker.com/engine/reference/commandline/dockerd/


# only run if var hasnt been set
if [ -z $DOCKER_DEFAULT_COMP_LOADED ]; then
	# disable docker d if its laoded
	if [ $(systemctl is-active docker.service) = 'active' ]; then
		systemctl stop docker.service
	fi

	#sudo chown "$USER":"$USER" ${THISDIR}/${CONFFILE}
	#sudo chmod g+rwx ${THISDIR}/${CONFFILE}

	dockerd --config-file $(getpath _.docker_default.json)
fi


export DOCKER_DEFAULT_COMP_LOADED=1