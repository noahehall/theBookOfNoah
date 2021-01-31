# snatched from https://github.com/localstack/localstack/blob/master/Dockerfile
# good readup: https://dev.to/goodidea/how-to-fake-aws-locally-with-localstack-27me
# https://github.com/localstack/localstack/blob/master/localstack/utils/bootstrap.py


# build
# docker build -t noahedwardhall/lstack:base -f lstack.Dockerfile .

# create network
# docker network inspect lstack -f {{.Name}} > /dev/null 2>&1 || docker network create lstack

# bind mount ~/volumes/localstack so you dont have to worry about mac or not mac
# requires privileged due to docker-reuse

# docker run -d --rm --privileged --env-file ./.env.example --network lstack --network-alias localstack.localhost --name lstack -p 4563-4599:4563-4599 -p 8080:8080 -v ~/volumes/localstack:/tmp/localstack -v /var/run/docker.sock:/var/run/docker.sock noahedwardhall/lstack:base

# launch http://localstack.localhost:4566/ for confirmation
# aunch http://localstack.localhost:8080 to view the dashboard
# happy devving!

FROM localstack/localstack-full:0.12.5 as base

