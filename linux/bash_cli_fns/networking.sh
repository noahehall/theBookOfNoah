
# networking -------------------------------------------------------------------
responseheaders() {
    if [[ $# -eq 1 ]]; then
        curl -I "$1"
    else
        echo "\$1 === url"
    fi
}

responsetime() {
    if [[ $# -eq 1 ]]; then
        cmdtime responseheaders "$1"
    else
        echo "\$1 === url"
    fi
}

responseDoS() {
    if [[ $# -eq 1 ]]; then
        while true; do
            responsetime "$1"
            sleep 0.1
        done
    else
        echo "\$1 === url"
    fi
}

waitforserviceonport () {
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
