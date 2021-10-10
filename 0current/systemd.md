# links
    - [systemctl manage systemd](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units)


# terminology 
    - systemd; init system and system manager for administering servers
    - systemctl: central management tool for controlling the init system 
    - init system: purpose is to:
        -  initlize the components that must be started after the linux kernel is booted
           - those components traditionally called 'userland components'
        -  manage services and daemons for the server at any point while the system is running
     -  units: resources that systemd knows how to manage
        -  catagorized by type of resource they represent 
           -  indicated by by the the file type
        -  defined in unit files
    - mask: disables systemd from managing the service via systemctl by linking the the service to `/dev/null`


 
# systemd 
## directories 
    - /lib/systemd/system
    - /etc/systemd/system
    - /etc/systemd/system/some_target.target.wants
# systemctl 

    ```sh
        # cmd format
        # current session CMDs
           # start|stop|restart|reload
           # reload-or-restart
           # status|is-active (exit code 0 if active)
           # is-enabled (exit code 0 if enabled)
           # is-failed (exit code 0 if failed)
        # system bootup cmds (all sessions)
           # enable|disable
        
        # list active units (loaded && active)
          # unit: the systemd unit name 
          # load: if config parsed by systemd; loaded units are kept in memory
          # active: high level state, if it was ever active? 
          # sub: low level state, if it is currently active|failed?
            systemctl list-units [options]
                --all # list all unitts systemd attempted to load
                --all --state=inactive # list all units that were loaded, and are now inactive
                --type=service # only active service units
        
        # list all units within the systemd paths (doesnt matter if loaded|active)
            # unit file: the name of the unit file + type; e.g. application.mount
            # state: enabled|disabled|static|masked
                # static: unit file does not contain an install section
                #o required to enable a service
                #o without one usually means its a one-ff action | dependency of another unit file and should not run by itself
            systemctl list-unit-files

        # display a unit file (high level config) (requires version >=209)
            systemctl cat application.service
        
        # display a unit file (low level config)
            # -p PROP displays a single property    
            systemctl show application.service [-p PROP]  


        # display a units dependency tree
            # returns tree list of dependencies, in the order to be executed 
            # append --all to see the list recursively
            systemctl list-dependencies application.service [--all]


        # mask|unmask a service
            sudo systemctl mask|unmask application.service

        # edit (override|add props to) a unit file (requires version >=218)
            # creates an override file in `/etc/systemd/system/application.service.d/override.conf`
            # add --full to edit the actual unit file, instead of overriding
            sudo systemctl edit [--full] application.service

        # reload the systemd process 
            sudo systemctl daemon-reload

        
        
        

        
    ```

# unit filess
## service management files 
    - end in `applicationname.service`
    - 