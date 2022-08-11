
# virtualbox
# --help will always console help, even if invalid for the cmd
alias vb='VBoxManage'
alias vbctrl='VBoxManage controlvm'
alias vbctrolcmds='\vbctrl nameOfMachine pause|resume|reset|poweroff|savestate|etc'
alias vbguest='VBoxManage guestcontrol'
alias vbguestcmds='VBoxManage guestcontrol --help' # execute cmds in guest from host cli, e.g. to run a program
alias vbhostcmds='VBoxManage hostonlyif --help'
alias vblistall='VBoxManage list vms'
alias vbrunning='VBoxManage list runningvms'
alias vbstart='VBoxManage startvm'

# vagrant, overriding vg i'll never use it

alias vgt='vagrant'
alias vgtdestroy='vagrant destroy' # delete everything, but keep vagrantfile
alias vgtlistboxes='vagrant box list'
alias vgtlistsnapshots='vagrant snapshot list'
alias vgtprovision='vagrant provision'
alias vgtprune='vagrant global-status --prune'
alias vgtreload='vagrant reload' # like restarting your comp
alias vgtreloadprovision='vagrant reload --provision'
alias vgtrestart='vagrant reload'
alias vgtresume='vagrant resume' # like waking up your comp
alias vgtrunning='vagrant status'
alias vgtrunningall='vagrant global-status'
alias vgtssh='vagrant ssh'
alias vgtstart='vagrant up'
alias vgtstartandprovision='vagrant up --provision'
alias vgtstartdontprovision='vagrant up --no-provision'
alias vgtstop='vagrant halt'
alias vgtsuspend='vagrant suspend' # like hibernating your comp
