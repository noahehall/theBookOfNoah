bookmark
<https://regolith-linux.org/docs/interface/advanced//>

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
- [rofication](https://github.com/DaveDavenport/Rofication)

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

#### gnome-control center

- ctrl c: only for basic stuff

#### i3-wm

- the heart of regolith configuration
- i3 window manager: not of gnome so you have to configure it via file and then reload i3 to make changes
  - /etc/regolith/i3/config: the main i3 config
  - ~/.config/regolith/i3/config: where you specify your overrides
    - warning: maintaining a user copy of the i3 config requires more work when upgrading regolith
    - ^ recommended to rely on [XResources overrides](https://regolith-linux.org/docs/howtos/override-xres/)

#### i3bar

- main i3bar config is defined in the i3 config file (see above)
- ^ but to change what information is displayed in the bar, check `/etc/regolith/i3xrocks/conf.d
  - each file in the directory maps to a specific i3bar item
  - [view docs to customize](https://regolith-linux.org/docs/howtos/add-remove-blocklets/)

#### look

- theme is configured via XResources
- ^ check /etc/regolith/styles and the [customize documentation](https://regolith-linux.org/docs/customize/)

#### session

- when regolith is initially loaded, a script runs and ocnfigures the system then launches `i3-wm`

## quickies

```sh
  # keyboard bindings
  super
    shift ? # see shortcuts
    # dont press
      p shift # power off?
      r shift # reset session?

    # manging fkn windows (i.e open applications)
      arrowkey # move focus between windows
      arrowkey shift # reposition window in workspace layout
      r # resize windows with arrow keys, press esc when done

      0-9 shift # move active window to specific workspace
      0-9 # go to a specific workspace, dont use the 10key

      ctrl space # see & select open windows (i.e open apps)
      ctrl tilda # create and move to a new workspace

      tab # go to next workspace
      tab shift # go to previous workspace

      backspace # toggle vertical/horiztaon layouts for the next window launched
      t # toggle through different layout modes in current workspace

      q shift # quit focused window
      q alt # force quit focused window

    # app quickies
      space # view all apps

      w # configure wifi
      enter # open (another) terminal
      shift space # view and run command
      shift enter # browser
      alt space # files
      c # settings: opens gnome-control-center
      n # notifications, very useful,
        # when notitficaiton window is open
        shift delete # delete all low priority notfications
        delete # delete selected notification

    # other things
      shift ? # remontoire: opens the shortcut application
      shift e # logout regolution
      shift r # i think this is reset

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
