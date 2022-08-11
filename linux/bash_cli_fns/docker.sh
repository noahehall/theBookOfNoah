
# docker


# usage:
# docker ps --format="$DOCKER_FORMAT"
export DOCKER_FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"


# startup a registry
# @see https://docs.docker.com/registry/deploying/
dockerstartregistry () {
    docker run -d -p 5001:5001 --restart=always --name registry registry:2
}
dockerbashup () {
    docker run --rm -it ubuntu:trusty bash
    # ip addr show eth0 # get container ip
    # route # get host IP
}
dockerbashuphost () {
    docker run --rm -it --network host ubuntu:trusty bash
}


# docker -------------------------------
alias dockerseeme="$(echo docker run --rm -it alpine ping -c4 $(whatsmyip))"
alias dockerps="docker ps --no-trunc -a --format 'table {{.Names}}...{{.Image}}...{{.Status}}...{{.Command}}\n'"
alias dockerdremoteurl="sudo netstat -lntp | grep dockerd"
alias dockerdlog="$(echo journalctl -u docker.service)"
# get netstats (use ss on ubuntu)
alias dockerdss="(sudo ss -asmpex | grep dockerd)"
#echo image1 image2 three | xargall docker pull
alias dockerinspect="docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}'"
# see volumes for a container
alias dockercontainervols="docker inspect -f '{{range .Mounts}}{{println .Source}}{{println .Destination}}readWrite: {{.Mode}}{{println .RW}}{{end}}'"
# get get ip addr for container
alias dockercontainernetwork="docker inspect -f '{{range .NetworkSettings.Networks}}{{println .IPAddress}}{{end}}'"
