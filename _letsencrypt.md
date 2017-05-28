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

nginx configure arguments
nginx version: nginx/1.13.0
built by gcc 4.8.4 (Ubuntu 4.8.4-2ubuntu1~14.04.3)
built with OpenSSL 1.0.1f 6 Jan 2014 (running with OpenSSL 1.0.2g  1 Mar 2016)
TLS SNI support enabled
configure arguments:
--prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --http-client-body-temp-path=/var/cache/nginx/client_temp --http-proxy-temp-path=/var/cache/nginx/proxy_temp --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp --http-scgi-temp-path=/var/cache/nginx/scgi_temp --user=nginx --group=nginx --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-mail --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module --add-module=/home/ubuntu/ngx_pagespeed-1.12.34.2-beta --with-cc-opt='-g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -fPIC' --with-ld-opt='-Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,-z,now -Wl,--as-needed -pie'

`

`
install openssl
sudo ./config shared no-ssl2 no-ssl3 no-comp --openssldir=/usr/local/ssl enable-ec_nistp_64_gcc_128 -fPIC

`
psol_url=https://dl.google.com/dl/page-speed/psol/${NPS_VERSION}.tar.gz
[ -e scripts/format_binary_url.sh ] && psol_url=$(scripts/format_binary_url.sh PSOL_BINARY_URL)
wget ${psol_url}
tar -xzvf $(basename ${psol_url})
