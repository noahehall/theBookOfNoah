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
      c # settings: opens gnome-control-center
      space # all applications
      shift space # commands
      ctrl space # windows
      enter # terminal
      shift enter # browser
      shift q # quick focused applicatoin
      alt q # force quick focused applicatoin
      alt space # files
      shift ? # remontoire: opens the shortcut application
      w # configure wifi
      shift arrowkey # move window
      backspace # toggle vertical/horiztaon layouts
      r # resize windows with arrow keys, press esc when done
      shift e # logout regolution
    # other things
      # workspaces
        ctrl tilda # create and move to a new workspace
        0-9 # go to a specific workspace
        tab # go to next workspace
        shift tab # go to previous workspace

      # other
        n # notifications


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
