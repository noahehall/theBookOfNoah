# snatched from https://github.com/localstack/localstack/blob/master/Dockerfile
# good readup: https://dev.to/goodidea/how-to-fake-aws-locally-with-localstack-27me
# https://github.com/localstack/localstack/blob/master/localstack/utils/bootstrap.py


# build for mac
# docker build -t noahedwardhall/lstack:macos --target lstackmacos -f lstack.Dockerfile .

# build for nonmacos
# docker build -t noahedwardhall/lstack:notmacos --target lstacknotmacos -f lstack.Dockerfile .

# create network
# docker network create lstack


# run it for macos
# TMPDIR=/private$TMPDIR docker run -d --rm --env-file ./.env.example --network lstack --network-alias localstack.localhost --name lstackmacos -p 4563-4599:4563-4599 -p 8080:8080 -v ${TMPDIR:-/tmp/localstack}:/tmp/localstack -v /var/run/docker.sock:/var/run/docker.sock noahedwardhall/lstack:macos

# run it for not macos
# docker run -d --rm --env-file ./.env.example --network lstack --network-alias localstack.localhost --name lstacknotmacos -p 4563-4599:4563-4599 -p 8080:8080 -v ${TMPDIR:-/tmp/localstack}:/tmp/localstack -v /var/run/docker.sock:/var/run/docker.sock noahedwardhall/lstack:notmacos

# launch http://localstack.localhost:4566/ for confirmation
# aunch http://localstack.localhost:8080 to view the dashboard
# happy devving!

FROM localstack/localstack-full:0.12.5 as lstacksetup


FROM lstacksetup as lstacknotmacos
ENV TMPDIR=/tmp/localstack 


FROM lstacksetup as lstackmacos
ENV TMPDIR=/private${TMPDIR}

