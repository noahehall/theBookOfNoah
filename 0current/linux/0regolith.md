bookmark
  <https://regolith-linux.org/docs/interface/>

# TLDR

modern ubuntu desktop based on i3
focusing on keyboard > mouse usage for getting things done

## links

- [basic usage](https://regolith-linux.org/docs/getting-started/basics/)
- [what is i3](https://www.omgubuntu.co.uk/2019/06/install-regolith-linux-i3-gaps-ubuntu)
- [remontoire: shurtcut application](https://github.com/regolith-linux/remontoire)
- [big list of howtos](https://regolith-linux.org/docs/howtos/)
- [xresources keybindings](https://regolith-linux.org/docs/reference/xresources/)
- [staging regolith config](https://regolith-linux.org/docs/howtos/stage-configs/)
  - always do this so you can modify regolith without fking everything up, but see overriding
- [overriding xresources](https://regolith-linux.org/docs/howtos/override-xres/)
  - recommended way for modifing regolith, but see staging
- [all regolith config file locations](https://regolith-linux.org/docs/reference/configurations/)
- [i3 gaps for controlling window behavior](https://github.com/Airblader/i3)
- [customize regolith](https://regolith-linux.org/docs/customize/)
- [i3 user guide](https://i3wm.org/docs/userguide.html)

## basics

- regolith
  - super fast way to get an i3 desktop experience with sane defualts
    - based on i3, refer to their docs if regolith fails
  - you definitely need to remember the keybindings
- windows: each window is basically a running application
- workspaces: groups of windows

### interface components

- XOrg x11: display server
- i3-gaps: window manager
- Rofi: application launcher
- i3bar: bar
- i3xrocks: bar script scheduler, based on i3blocks
- Rofication: notification system
- Remontoire shurtcut window
- gdm3 desktop session manager
- gnome-flashback: gnome session manager

## quickies

```sh
  # keyboard bindings
  super
    # big things
      # manging fkn windows (i.e open applications)
        space # view all apps
        ctrl space # see & select open windows (i.e open apps)
        arrowkey # move focus between windows
        shift arrowkey # move window to new slot in tiles
        r # resize windows with arrow keys, press esc when done
        shift r # i think this is reset
        backspace # toggle vertical/horiztaon layouts for the next window launched

        tab # go to next workspace
        shift tab # go to previous workspace
        0-9 # go to a specific workspace, dont use the 10key
        shift 0-9 # move active window to specific workspace

        shift q # quit focused window
        alt q # force quit focused window
        ctrl tilda # create and move to a new workspace

      # app quickies
        w # configure wifi
        n # notifications, very useful
        enter # open (another) terminal
        shift enter # browser
        alt space # files

      # other things
        c # settings: opens gnome-control-center
        space # all applications
        shift space # commands
        shift ? # remontoire: opens the shortcut application
        shift e # logout regolution

  # regolith look
    xrdb -query # see which values can be overriden
      xrdb -query | grep position
    regolith-look refresh # apply any changes to this session without relogging

  # applications
    apt search regolith-look- # see available themes
      sudo apt install regolith-look-dracula
      regolith-look set dracula
      regolith-look refresh
    apt search i3xrocks- # see available blocklets (status indicators)
      sudo apt install i3xrocks-wifi
      regolith-look refresh

  # locations
    /etc/regolith/i3/config # where you managed your i3 config settings
      # ^ copy the folder from etc to ~/.config/
      # ^ then make your changes in ~/.config/config
    ~/.Xresources #  optional: Y Intended for non-Regolith settings
    ~/.Xresources-regolith # optional: Y A global override to replace all Regolith settings
    /etc/regolith/styles/root # optional: N The default Regolith Xresources file if ~/.Xresources-regolith does not exist
    ~/.config/regolith/Xresources # optional: Y Applies specific overrides to Xresources defaults


```
