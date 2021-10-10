# links
  - [nomad homagepage](https://www.nomadproject.io)

# basics
  - download, unzip to a dir in your path that root has access too e.g. `/usr/local/bin`
  - nomad must be run with root privs
  - consul must be running before nomad is started
  - view the nomad UI @
    - http://169.254.1.1:4646
    - http://nomad.service.consul:4646

# review
  - [server-force-leave command](https://www.nomadproject.io/docs/commands/server-force-leave.html)

# job files
  - count:
# cmds
  ```sh


    # stopping nomad
      `ctrl-c` #interrupt signal

    # starting nomad
      `sudo nomad agent -dev` #as client and server, not for prod
      `sudo nomad agent -config=SOME_CONFIG.hcl -config=ANOTHER.hcl` # start agent using a config file

    # inspecting nomad
      `nomad -v` #get version
      `nomad node-status` # get registered nodes
      `nomad server-members` # view members (i.e. client agents) of the gossip ring


    # creating jobs
      `nomad init` #create skeletop job file in current dir

    #running jobs
      # run SOME_JOB
      # evalutes SOME_JOB and creates an allocation on the local node
        `nomad run SOME_JOB.nomad`

    # stopping jobs
      `nomad stop JOB_NAME`
    # inspecting jobs
      `nomad plan SOME_JOB.nomad` # invoke dry run of SOME_JOB to test execution and get job_modify_index
      # confirm the job plan hasnt been modified
        `nomad run -check-index JOB_MODIFY_INDEX SOME_JOB.nomad`
      `nomad status SOME_JOB` # inspect SOME_JOB
      `nomad alloc-status ALLOCATION_ID` # get the ID from status cmd
      `nomad logs ALLOCATION_ID TASK_NAME` # get task name from job file
  ```
