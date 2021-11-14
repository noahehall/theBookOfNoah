- use to always setup nginx, now im using haproxy
- install nginx with and required modules and config, e.g. ngx page speed
      ```
        1. create user nginx with sudo privs
        2. configure, be sure to download pcr8, zlib, and ngx and update version numbers
        ./configure --user=nginx --group=nginx --with-http_ssl_module --with-stream --with-pcre=$HOME//pcre-8.40 --with-zlib=$HOME//zlib-1.2.11 --with-mail --with-threads --with-file-aio --with-http_v2_module --with-stream_ssl_module --add-module=$HOME/ngx_pagespeed-${NPS_VERSION}

        1. make and install
        make
        sudo make instal

        1. Add /usr/local/nginx/sbin to your PATH variable in /etc/environment.

        2. if getting permission denied errors on log file
          sudo chown -R nginx:nginx /var/log/nginx;
          sudo chmod -R 755 /var/log/nginx;

        3. map port 80 to 8080 and 443 to 8443 to run nginx as a non root user
            sudo ufw allow 8080/tcp
            # Add before filter section in /etc/ufw/before.rules(top of file):
            *nat
            :PREROUTING ACCEPT [0:0]
            -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
            COMMIT
        4. confirm compile options
          nginx -V
      ```
    1. setup letsencrypt: `sudo certbot certonly --webroot --webroot-path=/usr/local/nginx/html -d plusfame.io -d api.plusfame.io -d www.plusfame.io -d ibm.plusfame.io -d staging.plusfame.io`
    2. Update Diffie-Hellman Parameters: `sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048`
    3. update your nginx configuration to include your new ssl certs
      ```s

      ```
