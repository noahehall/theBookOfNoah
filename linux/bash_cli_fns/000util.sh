#!/usr/bin/env bash

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

whats() {
    # TODO: update this for mac compatibility
    cmd=${1:?cmd required}

    found=$(type $cmd 2>/dev/null | head -n 1)
    if test -z "$found"; then
        echo -e "$(dpkg -s $cmd)"
        echo -e "$(apt-cache search --names-only $cmd)"
    else
        itis=$(whatis $cmd)
        cmdpath=$(echo $found | cut -d ' ' -f 3)

        case $cmdpath in
        aliased | a | hashed)
            shopt -s extdebug
            echo -e $(declare -F $cmd)
            echo -e "$itis\n$found"
            ;;
        *)
            realname=$(basename $(realpath $cmdpath)) # could be a symlink

            echo -e "$(dpkg -s $realname)"
            echo -e "$(apt-cache search --names-only $realname)"
            echo -e '\n------------------------'
            echo -e "$itis"
            echo -e "policy: $(apt-cache policy $cmd)"
            echo -e "location: $cmdpath"
            echo -e "type: $(file $cmdpath)"
            ;;
        esac
    fi
}

kernel_version() {
    uname -sr
}
