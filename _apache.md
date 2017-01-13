# background
  - on ubuntu = apache2
  - on centos = httpd
# tips and tricks
  - check apache configuration for syntax errors `sudo apache2ctl configtest`
  - set global servername to supress syntax warnings
    1. `sudo nano /etc/apache2/apache2.conf`
    2. at bottom of file add either:
      1. ServerName directive pointing to your primary domain name
      2. ServerName directive pointing to your public IP address
        - `ServerName server_domain_or_IP`
  - restart apache (e.g. to implement any changes)
    - `sudo systemctl restart apache2`
