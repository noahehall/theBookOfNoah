#!/usr/bin/bash bash

# @see ../../0current/linux/_ufw.md
# TODO: finish setting this up

ufw_status() {
	sudo ufw status verbose
}
ufw_list_configs() {
	sudo find / -name "*.rules" -exec ls -l {} \; | grep ufw
}
ufw_list_apps() {
	sudo ufw app list
}
ufw_info_app() {
	sudo ufw app info ${1:?app name required}
}
ufw_allow() {
	sudo ufw allow ${1:?appname/port/portmap/etc required}
}
