# basic steps
  1. setup non root user with sudo priv
  2. configure ssh key-based authentication
  3. disable password authentication
  4. install a node app for testing
  5. install pm2, verify it runs your app and you can access it via the web, and set pm2 to launch on system start
  4. point domain name to your server ip `ip addr show eth0` grab the one that says `inet`
  5. setup firewall (usually ufw) to block everything except 80, 443, and 22 initially and define your default policies
  6. install openssl `sudo apt-get install libssl-dev`
  7. install nginx with page speed module `bash <(curl -f -L -sS https://ngxpagespeed.com/install) --nginx-version latest --with-http_ssl_module`


# TODOs
  - categorize this shit

# Dope ubuntu tutorials to help you with the above steps
- [initial ubuntu server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
- [secure nginx with lets encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)
- [initial server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
- [point domain name to your servers ip](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean)
- [configure ssh key based authentication and disable password authentication](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)
- [common ufw firewall rules](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands)
- [introduction to ufw]
- [setup node app for production](https://www.godaddy.com/help/set-up-nodejs-application-for-production-ubuntu-17352)
