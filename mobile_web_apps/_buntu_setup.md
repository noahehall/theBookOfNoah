# basic steps
  1. setup non root user with sudo priv
  2. configure ssh key-based authentication
  3. disable password authentication
  4. install a node app for testing
  5. install pm2, verify it runs your app and you can access it via the web, and set pm2 to launch on system start
  4. point domain name to your server ip `ip addr show eth0` grab the one that says `inet`
  5. setup firewall (usually ufw) to block everything except 80, 443, and 22 initially and define your default policies
  6. install openssl `sudo apt-get install libssl-dev`
  7. install nginx with and required modules and config, e.g. ngx page speed
      ```
        0. create user nginx with sudo privs
        1. configure, be sure to download pcr8, zlib, and ngx and update version numbers
        ./configure --user=nginx --group=nginx --with-http_ssl_module --with-stream --with-pcre=$HOME//pcre-8.40 --with-zlib=$HOME//zlib-1.2.11 --with-mail --with-threads --with-file-aio --with-http_v2_module --with-stream_ssl_module --add-module=$HOME/ngx_pagespeed-${NPS_VERSION}

        2. make and install
        make
        sudo make instal

        3. Add /usr/local/nginx/sbin to your PATH variable in /etc/environment.

        4. if getting permission denied errors on log file
          sudo chown -R www-data:www-data /var/log/nginx;
          sudo chmod -R 755 /var/log/nginx;

        5. map port 80 to 8080 and 443 to 8443 to run nginx as a non root user
            sudo ufw allow 8080/tcp
            # Add before filter section in /etc/ufw/before.rules(top of file):
            *nat
            :PREROUTING ACCEPT [0:0]
            -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
            COMMIT
        6. confirm compile options
          nginx -V
      ```
    8. setup letsencrypt: `sudo certbot certonly --webroot --webroot-path=/usr/local/nginx/html -d plusfame.io -d api.plusfame.io -d www.plusfame.io -d ibm.plusfame.io -d staging.plusfame.io`


# TODOs
  - categorize this shit

# Dope ubuntu tutorials to help you with the above steps
- [nginx init scripts](https://www.nginx.com/resources/wiki/start/topics/examples/initscripts/)
- [nginx pitfalls and mistakes](https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/)
- [build ngx_pagespeed from source](https://modpagespeed.com/doc/build_ngx_pagespeed_from_source)
- [install nginx with pagespeed](https://modpagespeed.com/doc/build_ngx_pagespeed_from_source)
- [initial ubuntu server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
- [secure nginx with lets encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)
- [initial server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
- [point domain name to your servers ip](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean)
- [configure ssh key based authentication and disable password authentication](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)
- [common ufw firewall rules](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands)
- [introduction to ufw]
- [setup node app for production](https://www.godaddy.com/help/set-up-nodejs-application-for-production-ubuntu-17352)
