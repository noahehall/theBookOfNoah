# snatched from https://github.com/localstack/localstack/blob/master/Dockerfile
# good readup: https://dev.to/goodidea/how-to-fake-aws-locally-with-localstack-27me


# build for mac
# docker build -t noahedwardhall/lstack:macos --target lstackmacos -f lstack.Dockerfile .

# build for nonmacos
# docker build -t noahedwardhall/lstack:notmacos --target lstacknotmacos -f lstack.Dockerfile .

# run it for macos
# TMPDIR=/private$TMPDIR docker run -d --rm --name lstackmacos -p 4563-4599:4563-4599 -p 8080:8080 -v ${TMPDIR:-/tmp/localstack}:/tmp/localstack noahedwardhall/lstack:macos

# run it for not macos
# docker run -d --rm --name lstacknotmacos -p 4563-4599:4563-4599 -p 8080:8080 -v ${TMPDIR:-/tmp/localstack}:/tmp/localstack noahedwardhall/lstack:notmacos

# launch http://localhost:4566/ for confirmation
# happy devving!

FROM localstack/localstack:0.12.5 as lstacksetup

ENV PORT_WEB_UI=${PORT_WEB_UI:-8080} \
    DOCKER_HOST=unix:///var/run/docker.sock \
    SERVICES=${SERVICES} \
    DEBUG=${DEBUG} \
    DATA_DIR=${DATA_DIR} \
    LAMBDA_EXECUTOR=${LAMBDA_EXECUTOR} \
    KINESIS_ERROR_PROBABILITY=0
    
# defined in base image
# EXPOSE 4566 4571 ${PORT_WEB_UI}

FROM lstacksetup as lstacknotmacos
ENV TMPDIR=/tmp/localstack 

VOLUME $TMPDIR


FROM lstacksetup as lstackmacos
ENV TMPDIR=/private$TMPDIR
VOLUME $TMPDIR
