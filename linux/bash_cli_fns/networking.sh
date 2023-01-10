#!/bin/env bash

# TODO: missing cmdtime
## ^^ should be in 000util.sh

get_hosts() {
    echo $(getent hosts)
}
get_networks() {
    echo $(getent networks)
}
get_services() {
    echo $(getent services)
}
response_headers() {
    if [[ $# -eq 1 ]]; then
        curl -I "$1"
    else
        echo "\$1 === url"
    fi
}

response_time() {
    if [[ $# -eq 1 ]]; then
        cmdtime responseheaders "$1"
    else
        echo "\$1 === url"
    fi
}

response_dos() {
    if [[ $# -eq 1 ]]; then
        while true; do
            responsetime "$1"
            sleep 0.1
        done
    else
        echo "\$1 === url"
    fi
}

waitforserviceonport() {
    if test $# -eq 2; then
        while true; do
            if test $(netstat -tulanp | grep "$2" | grep LISTEN); then
                echo "$1 is up on port $2"
                break
            else
                echo "$1 is not up on port $2"
                sleep 1
            fi
        done
    else
        echo "\$1 === service name"
        echo "\$2 === port"
    fi
}

# alias getwifi='sudo iwlist wlp3s0 scan | grep ESSID'
alias whatsonport='sudo netstat -tulpn' # | grep 8080
alias whatsmyipmac='ifconfig -a | grep inet'
alias whatsmyipexternal='curl -s http://ipecho.net/plain'
alias whatsmyipextended='curl http://ipinfo.io'

list_my_ips() {
    echo $(ip r)
}
whats_my_ip() {
    echo $(hostname -I | cut -d' ' -f1)
}
whats_my_network_interface() {
    echo $(ip a | grep $(whats_my_ip))
}
