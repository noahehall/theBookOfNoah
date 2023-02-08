#!/usr/bin/bash bash

function sourceifexists() {
    if [[ $# -eq 1 && -f "$1" ]]; then
        . "$1"
    fi
}

# completation aware g<alias bash aliases for each git alias
# https://gist.github.com/mwhite/6887990
# TODO: doesnt work like expected
function_exists() {
    declare -f -F "$1" >/dev/null
    return $?
}

sys_list_services() {
    # list all services
    systemctl list-units --all --type=service --no-pager

}

sys_list_status() {
    # get services in specific status
    systemctl list-units --all --type=service --no-pager | grep -E 'running|dead'

}

sys_list_state() {
    # get enabled/disabled systemd service unit states
    systemctl list-unit-files | grep -E 'enabled|disabled'

}
sys_set() {
    # set service status
    srv=${1:?service name required}
    status=${2:-''}

    case $status in
    start | stop | enable | disable) sudo systemctl $status $srv ;;
    *) echo "status must be (start|stop|enable|disable)" ;;
    esac
}
