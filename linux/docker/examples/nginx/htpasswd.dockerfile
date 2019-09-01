# from dickerinaction book

# build this image
# docker build -t htpasswd -f htpasswd.dockerfile .

# create a uname and pw pair
# and save it to registry.password
# docker run -it --rm htpasswd -nB UR_USERNAME


FROM debian:jessie
LABEL source=dockerinaction \
  category=utility
RUN apt-get update \
  && apt-get install -y apache2-utils
ENTRYPOINT ["htpasswd"]