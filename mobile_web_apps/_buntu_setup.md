# basic steps
  1. setup non root user with sudo priv
  2. configure ssh key-based authentication
  3. disable password authentication
  4. setup firewall (usually ufw)
  2. install openssl `sudo apt-get install libssl-dev`
  3. install nginx with page speed module `bash <(curl -f -L -sS https://ngxpagespeed.com/install) --nginx-version latest --with-http_ssl_module`

# Dope ubuntu tutorials to help you with the above steps
- [initial ubuntu server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
- [secure nginx with lets encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)
- [initial server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
- [point domain name to your servers ip](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean)
- [configure ssh key based authentication and disable password authentication](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)


cat ~/.ssh/id_rsa.pub
