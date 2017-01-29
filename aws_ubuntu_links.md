# nginx links
  - [setup node on aws](http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)
  - [securing nodejs application](https://blog.nodeswat.com/set-up-a-secure-node-js-web-application-9256b8790f11#.684i54w0b)
  - [man i like strongloop](https://docs.strongloop.com/display/SLC/Setting+up+a+production+host)
  - [deploying our same stack, awesome](https://aghassi.github.io/NodeJS-Express-NginX-Setup/)
  - [running express behind a proxy, e.g. nginx](http://expressjs.com/en/guide/behind-proxies.html)
  - [launch nginx startup](http://serverfault.com/questions/69350/launch-nginx-on-startup)
  - [setup letsencrypt webroot method](https://community.letsencrypt.org/t/using-the-webroot-domain-verification-method/1445)
    + [use in coordinatin with this](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)
    + includes how to setup cron for auto renewal
  - [nginx with http2](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-with-http-2-support-on-ubuntu-16-04)
  -[mozilla ssl config generator](https://mozilla.github.io/server-side-tls/ssl-config-generator/)
  - [if nginx wont server http2](http://serverfault.com/questions/732474/nginx-configured-with-http2-doesnt-deliver-http-2)
  - [nginx docs, really good](http://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_prefer_server_ciphers)
  - [optimize nginx](https://www.digitalocean.com/community/tutorials/how-to-optimize-nginx-configuration)
  - [another great nginx config](https://blog.nodeswat.com/set-up-a-secure-node-js-web-application-9256b8790f11#.684i54w0b)

    - webroot for nginx on ubuntu 16.04: `/usr/share/nginx/html`

    - update cert using github
      ```
      1. cd into git/letsencrypt
      2. ./letsencrypt-auto certonly

      ```
    - message on success
      ```
      IMPORTANT NOTES:
         - Congratulations! Your certificate and chain have been saved at
           /etc/letsencrypt/live/yourdomainherenoah.io/fullchain.pem. Your cert will
           expire on 2017-04-29. To obtain a new or tweaked version of this
           certificate in the future, simply run letsencrypt-auto again. To
           non-interactively renew *all* of your certificates, run
           "letsencrypt-auto renew"
         - If you like Certbot, please consider supporting our work by:

      ```

# dynamodb links
  - [local dynamodb walkthrough](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SettingUp.html)
  - [dynamodb + nodejs](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.html)
