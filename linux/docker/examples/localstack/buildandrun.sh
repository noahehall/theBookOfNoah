#!/usr/bin/env bash

# set -Eoux pipefail
# snatched from https://github.com/localstack/localstack/blob/master/Dockerfile
# good readup: https://dev.to/goodidea/how-to-fake-aws-locally-with-localstack-27me
# https://github.com/localstack/localstack/blob/master/localstack/utils/bootstrap.py

# set -Eoux pipefail
#http://www.binaryphile.com/bash/2020/01/12/determining-the-location-of-your-script-in-bash.html
HERE=$(cd "$(dirname "$BASH_SOURCE")"; cd -P "$(dirname "$(readlink "$BASH_SOURCE" || echo "$BASH_SOURCE")")"; pwd)

# https://stackoverflow.com/a/28085062
: "${imagename:=noahedwardhall/lstack:dev}" \
  "${dockerfilepath:=$HERE/lstack.Dockerfile}" \
  "${networkname:=lstack}" \
  "${containername:=lstack}" \
  "${volumepath:=$HOME/volumes/localstack}" \
  "${envfilepath:=$HERE/env.list}" \
  "${webuiport:=8080}" \
  "${servicesports:=4563-4599}" \
  "${hostdockersock:=/var/run/docker.sock}" \
  ;


# build
docker build -t $imagename -f $dockerfilepath .

# create network if it doesnt exist
docker network inspect $networkname -f {{.Name}} > /dev/null 2>&1 || docker network create $networkname

# bind mount ~/volumes/localstack so you dont have to worry about mac or not mac
# requires privileged due to docker-reuse
docker run -d \
  -p ${servicesports}:$servicesports \
  -p ${webuiport}:$webuiport \
  -v ${volumepath}:/tmp/localstack \
  -v ${hostdockersock}:/var/run/docker.sock \
  --rm \
  --privileged \
  --env-file $envfilepath \
  --network $networkname \
  --network-alias ${networkname}.localhost \
  --name $containername \
  $imagename;

# set +Eoux pipefail
# launch http://lstack.localhost:4566/ for confirmation
# aunch http://lstack.localhost:8080 to view the dashboard
# happy devving!