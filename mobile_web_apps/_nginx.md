# next up
  - [setting up nginx server blocks](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04)
  - [setup LEMP stack](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04)
# links
  - [setting up node with nginx](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)
  - [alphabetical nginx variables](http://nginx.org/en/docs/varindex.html)
  - [nginx beginners guide](http://nginx.org/en/docs/beginners_guide.html)
  - [create self signed cert for nginx](https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-16-04)
  - [nginx docs](https://nginx.org/en/docs/beginners_guide.html)


# nginx commands
  - nginx -s signal
    - signal can be stop|quit|reload|reopen

# tips and tricks
  - ensure there arent any errors i your nginx config
    - `sudo nginx -t`
    - `sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/certs/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt`
      - create a self signed cert
  - get a list of all running nginx processes
    - `ps -ax | grep nginx`
# commands
  - sudo systemctl [stop|start|restart|reload|disable|enable] nginx
    1. reload: try to reload nginx configuration without dropping connections (restarting)
    2. disable: dont start at system start
    3. enable: start at system start
# about
  -  nginx consists of modules which are controlled by directives specified in the configuration file. Directives are divided into simple directives and block directives. A simple directive consists of the name and parameters separated by spaces and ends with a semicolon (;). A block directive has the same structure as a simple directive, but instead of the semicolon it ends with a set of additional instructions surrounded by braces ({ and }). If a block directive can have other directives inside braces, it is called a context (examples: events, http, server, and location).

# locations
## content
  - `/var/www/html` default location for actual web content
## server configuration
  - `/etc/nginx/` all nginx configuration files
  - `/etx/nginx/nginx.conf` the main configuration file
  - `/etc/nginx/sites-available` the directory where per-site *server-blocks* can be stored
    - config files in this dir will not be used unless they are linked to the *sites-enabled* directory
  - `/etc/nginx/sites-enabled` directory where enabled per-site *server-blocks* are stored
  - `/etc/nginx/snippets` directory contains configuration fragments that can be included elsewhere in the nginx configuration
## logs
  - `/var/log/nginx/access.log` every request to your webserver is recorded in this log file
  - `/var/log/nginx/error.log` every nginx error is kept here


# server blocks
  ```s
    server {
      location / {
          root /data/www;
      }

      location /images/ {
          root /data;
      }
    }
  ```

# installing on Ubuntu
  - based on
    0. [initial nginx server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
    1. [digital ocean setup nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)
## initial server setup
  1. add a non root user
    `sudo adduser SOME_USERNAME`
  2. give the non root user sudo priveledges
    `sudo usermod -aG sudo SOME_USERNAME`
## setup reverse proxy for http
    1. modify default sites available
      - `sudo nano /etc/nginx/sites-available/default`
    2. delete everything, and add this to redirect / to a specific port
      ```
        server {
            listen 80;

            server_name example.com;

            location / {
                proxy_pass http://localhost:8080;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
            }
        }
      ```
    3. if you have more than one app on a port, add more locations
      ```
        location /app2 {
            proxy_pass http://localhost:8081;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
      ```
## setup reverse proxy for https
```
# HTTP - redirect all requests to HTTPS:
server {
        listen 80;
        listen [::]:80 default_server ipv6only=on;
        return 301 https://$host$request_uri;
}

# HTTPS - proxy requests on to local Node.js app:
server {
        listen 443;
        server_name your_domain_name;

        ssl on;
        # Use certificate and key provided by Let's Encrypt:
        ssl_certificate /etc/letsencrypt/live/your_domain_name/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/your_domain_name/privkey.pem;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';

        # Pass requests for / to localhost:8080:
        location / {
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-NginX-Proxy true;
                proxy_pass http://localhost:8080/;
                proxy_ssl_session_reuse off;
                proxy_set_header Host $http_host;
                proxy_cache_bypass $http_upgrade;
                proxy_redirect off;
        }
}
```

# pagespeed module
  - [example pagespeed configs](https://github.com/okdocker/server-configs-nginx/tree/master/pagespeed)
  - [pagespeed configuration docs](https://modpagespeed.com/doc/configuration)
  - [use tmpfs to store pagespeed cache](https://www.howtoforge.com/storing-files-directories-in-memory-with-tmpfs)
  - [linux filesystem hierarchy](http://www.pathname.com/fhs/2.2/fhs-5.5.html)
