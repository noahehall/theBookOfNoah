#!/bin/sh
set -e

# snatched from https://github.com/docker-library/redis
# build image 
# docker build -t localredis:redisapp -f redis.Dockerfile .
# run redis instance 
# docker run -d --rm -p 6379:6379 --name redisapp localredis:redisapp

# first arg is `-f` or `--some-option`
# or first arg is `something.conf`
if [ "${1#-}" != "$1" ] || [ "${1%.conf}" != "$1" ]; then
  set -- redis-server "$@"
fi

# allow the container to be started with `--user`
if [ "$1" = 'redis-server' -a "$(id -u)" = '0' ]; then
  find . \! -user redis -exec chown redis '{}' +
  exec su-exec redis "$0" "$@"
fi

exec "$@"