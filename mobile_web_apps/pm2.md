# quick commands
  - start app: `pm2 start blah.js`
  - stop app: `pm2 stop App or ID`
  - restart app: `pm2 restart App or ID`
  - list apps: `pm2 list`
  - app info: `pm2 info App or ID`
  - pull up monitoring: `pm2 monit`
  - add pm2 to startup `sudo env
   PATH=$PATH:/home/plus/.nvm/versions/node/v8.2.1/bin /home/plus/.config/yarn/global/node_modules/pm2/bin/pm2 startup systemd -u plus --hp /home/plus`
    + The startup subcommand creates and configures a startup script that launches PM2 and its managed processes when the server boots. It's also important to specify the init system you're running. Since we are on a Ubuntu server, it's systemd.
    + USUALLY you just have to do `sudo pm2 startup systemd`


# links
  - [godaddy node setup includes pm2 info](https://www.godaddy.com/help/set-up-nodejs-application-for-production-ubuntu-17352)
