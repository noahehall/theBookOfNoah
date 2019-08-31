# example dockerfile for installing lynx on ubuntu
FROM ubuntu:latest
MAINTAINER "from@the.bottom"
RUN apt-get install -y lynx
ENTRYPOINT ["lynx"]