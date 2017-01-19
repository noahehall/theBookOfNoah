# UFW firewall
# tips and tricks
  - see which applications have profiles in UFW
    + `sudo ufw app list`
  - see profile configuration
    1. find the profile name via `sudo ufw app list`
    2. get the info `sudo ufw app info "Apache Full"`
      - Apache Full = a profile
  - allow incoming traffic for a profile (e.g. apache full)
    + `sudo ufw allow in "Apache Full"`
    + `sudo ufw allow 'Nginx Full'`
