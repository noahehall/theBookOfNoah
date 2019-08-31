# image for utilizing curl
# applicable to docker native and boot2docker
#
# run with
# --net host for interacting with local registry
# e.g.
# docker run --rm --net host \
# dockerinaction/curl -Is http://localhost:5000/v2/

FROM gliderlabs/alpine:latest
LABEL source=dockerinaction
LABEL category=utility
RUN apk --update add curl
ENTRYPOINT [ "curl" ]
CMD [ "--help" ]