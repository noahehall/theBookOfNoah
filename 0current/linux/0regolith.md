# TLDR

modern ubuntu desktop based on i3
focusing on keyboard > mouse usage to get things done

## links

- [basic usage](https://regolith-linux.org/docs/getting-started/basics/)
- [what is i3](https://www.omgubuntu.co.uk/2019/06/install-regolith-linux-i3-gaps-ubuntu)
- [remontoire: shurtcut application](https://github.com/regolith-linux/remontoire)

## quickies

```sh
  # keyboard bindings
  super
    # big things
      # manging fkn windows (i.e open applications)
        ctrl space # see all windows (i.e open apps)
        shift q # close focused window
        r # resize windows with arrow keys, press esc when done
        shift arrowkey # move focused window
        arrowkey # focus a window
        0-9 # go to a specific workspace, dont use the 10key
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
        backspace # toggle vertical/horiztaon layouts
        shift e # logout regolution
    # other things
      # workspaces
        tab # go to next workspace
        shift tab # go to previous workspace

      # other


  # applications
    apt search regolith-look- # see available themes
      sudo apt install regolith-dracula
      regolith-look set dracula
      regolith-look refresh
  # locations
    /etc/regolith/i3/config # where you managed your i3 config settings
    # ^ copy the folder from etc to ~/.config/
    # ^ then make your changes in ~/.config/config



```
