# example from dockerinaction book

# follow steps in htpasswd.dockerfile

# build this docker file
# docker build -t dockerinaction/tls_auth_proxy -f tls-auth-proxy.dockerfile --no-cache .

# start the personal registry
# docker run -d --name personal_registry -p 5000:5000 registry:2

# start the reverse proxy
# docker run -d --name tls_auth_proxy -p 443:443 --link personal_registry:registry dockerinaction/tls_auth_proxy

# run curl to query your registry the proxy
# include -k flag in curl to ignore any cert errors
# only required when using the self-signed cert
# docker run --rm -u 1000:1000 --net host dockerinaction/curl -u username:$(cat registry.password) username -ks https://localhost:443/v2/

FROM nginx:latest
LABEL source=dockerinaction \
  category=infrastructure
COPY [ \
  "./tls-auth-proxy.conf", \
  "./localhost.crt", \
  "./localhost.key", \
  "./registry.password", \
  "/etc/nginx/conf.d/" \
  ]