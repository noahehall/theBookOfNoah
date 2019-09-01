# example from dockerinaction book

# build this docker file
# docker build -t dockerinaction/basic_proxy -f basic-proxy.dockerfile --no-cache .

# start the personal registry
# docker run -d --name personal_registry -p 5000:5000 registry:2

# start the reverse proxy
# docker run -d --name basic_proxy -p 80:80 --link personal_registry:registry dockerinaction/basic_proxy

# run curl to query your registry the proxy
# docker run --rm -u 1000:1000 --net host dockerinaction/curl -s http://localhost:80/v2/distribution/tags/list

FROM nginx:latest
LABEL source=dockerinaction \
  category=infrastructure
COPY ./basic-proxy.conf /etc/nginx/conf.d/default.conf