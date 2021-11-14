# basic steps

  1. setup non root user with sudo priv
  2. configure ssh key-based authentication
  3. disable password authentication and enable ufw with ssh enabled
  4. point domain name to your server ip `ip addr show eth0` grab the one that says `inet`
  5. setup firewall (usually ufw) to block everything except 80, 443, and 22 initially and define your default policies
  6. install openssl `sudo apt-get install libssl-dev`

# TODOs

- categorize this shit

# Dope ubuntu tutorials to help you with the above steps

- [initial server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
- [point domain name to your servers ip](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean)
- [configure ssh key based authentication and disable password authentication](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)
- [common ufw firewall rules](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands)
