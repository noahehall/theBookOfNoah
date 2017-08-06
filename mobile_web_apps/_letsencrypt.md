# [free tls/ssl certs](https://letsencrypt.org/)

# tips and tricks
## setup tls on ubuntu with node
  - [follow these steps](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)

## setup TLs on ubuntu with letsencrypt with autorenewal
  - [follow these steps](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)

- root
  - /usr/share/nginx/html
- cmd to request certificate
  - sudo letsencrypt --duplicate certonly -a webroot --webroot-path=/usr/share/nginx/html -d plusfame.io -d www.plusfame.io -d staging.plusfame.io
    - remove `--duplicate` to extend existing cert

- removed This
  - add_header Strict-Transport-Security max-age=15768000;


# test http2
  - with ALPN: `echo | openssl s_client -alpn h2 -connect yourserver.example.com:443 | grep ALPN`
    - if working you'll see: `ALPN protocol: h2`
    - if not working you'll see: `No ALPN negotiated`
  - with NPN: `echo | openssl s_client -nextprotoneg h2 -connect yourserver.example.com:443
    - if working you'll see: `Next protocol: (1) h2 No ALPN negotiated`
