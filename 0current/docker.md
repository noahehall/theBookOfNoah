# bookmark
    - https://github.com/docker/buildx#-o---outputpath-typetypekeyvalue
    - - https://static.sched.com/hosted_files/kccnceu19/12/Building%20images%20%20efficiently%20and%20securely%20on%20Kubernetes%20with%20BuildKit.pdf
    - https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs
    - https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units
    - https://github.com/moby/buildkit/tree/master/examples/systemd
    - https://github.com/moby/buildkit#systemd-socket-activation
    - https://github.com/docker/buildx/tree/master/bake
    - https://medium.com/nttlabs/buildx-multiarch-2c6c2df00ca2
    - 


# TLDR
    - everything in this file assumes youve enabled both buildkit and buildx

# BEST PLACTICES 
    - support building all the images of your app together (or separately)
        - let the users define project specific reusable build flows
    - build cmds should be envokable by by general-purpose cmd runners (e.g. make)
        - however, `docker buildx bake` permits executing in parallel


# docker config
    - /etc/docker/daemon.json 
    ```js
        {
            features: {
                buildkit: true // enable buildkit
            }
        }
    ```



# BUILDKIT
    [check this](https://blog.alexellis.io/building-containers-without-docker/)
    [and this](https://medium.com/nttlabs/buildx-multiarch-2c6c2df00ca2)
    

    - toolkit for converting source code to build artifacts
    
    - composed of 
      - `buildkitd` daemon
      - `buildctl` client 
        


## BUILDKITD
    [check this](https://openllb.github.io/hlb/)
    [and this](https://github.com/moby/buildkit/blob/master/docs/rootless.md)

    - only available for linux
        - perfect for builds that dont require docker (e.g. in CI)
          - remember docker is slow, clunky, and fat
            ```sh
                # check here: https://github.com/moby/buildkit/releases

                # e.g. grab upstream binary, and put it in bin dir
                curl -sSLf https://github.com/moby/buildkit/releases/download/v0.8.1/buildkit-v0.8.1.linux-amd64.tar.gz | sudo tar -xz -C /usr/local/bin/ --strip-components=1

                # run the daemon
                buildkitd

            ```
    - requires runc|crun, containerd
      - [crun](https://github.com/containers/crun)
        - i built with enable-shared to use the shared libraries

    available backends
        syntax = docker/dockerfile...
            the default moby one
        syntax = tonistiigi/pack
            fork of buildpacks
            get hte real one from mheroku/cloudfoundry
        syntax = r2d4/mocker
            apt-get in higly declarative yaml
        syntax = po3rin/gocker 
            specific to golang
        HLB
            high level build language 
            [check this](https://openllb.github.io/hlb/)
            [and ths](https://openllb.github.io/hlb/intro/quickstart/)
            [and this](https://github.com/openllb/hlb/releases)



    - setup systemd service files
        [check this](https://github.com/moby/buildkit/tree/master/examples/systemd)

        
    [check this](https://towardsdatascience.com/its-time-to-say-goodbye-to-docker-5cfec8eff833)

    

## BUILDCTL
    - client for buildkitd daemon

    - available for lilnux
    --buildkitd-flags FLAGS
        add flags when starting the buildkitd daemon
    `DOCKER_BUILDKIT=1` docker build...
        enable buildkit
        but is auto enabled when you use buildx
        always use buildx
        so setting this env var is not necessary

.
# `moby buildx`
    [and this](https://docs.docker.com/buildx/working-with-buildx/)


    enabling 
        DOCKER_CLI_EXPERIMENTAL=enabled
        or set experimental: enabled in ~/.docker/config.json
        does not require `DOCKER_BUILDKIT=1`
            it always builds with  buildkit
        building for multiple platforms
    `docker buildx install`
        sets docker default builder to that of buildx
        i.e. aliases `docker build` to `docker buildx
    `docker buildx uninstall`
        removes the alias so you have to use `docker buildx blah`


    when using other drivers, the method for outputting an image needs to be selected with --output.


`docker buildx OPTIONS PATH | URL | -
    - [options](https://github.com/docker/buildx#buildx-build-options-path--url---)
        - check the `docker build` reference for futher documentation
        --allow []
        --build-arg []
            BUILDKIT_INLINE_CACHE=1
                trigger inline cache exporter
        --cache-from []
            - external cache sources
            - (eg. user/app:cache, type=local,src=path/to/dir)
        --cache-to []
            - Cache export destinations 
            - (eg. user/app:cache, type=local,dest=path/to/dir)
        --file string (path to dockerfile)
        --load
            - i.e. --output=type=docker
        --push
            - i.e. --output=type=registery
        --output []
            - Output destination 
            - (format: type=local,dest=path)
        --platform []
            - set target platform for build
        --secret []
            - secret file to expose to the buildl
            - id=mysecret,src=local/secret
        --tag []
            - name:tag
        --target string
            - set the target build stage to build


    `docker buildx create NAME`
        allows you to create new instances of isolated builders
            e.g. to get a scoped env for your CI builds 
            even tho isolated builders still share the daemon
            create an instance for a set of remote nodes
            form a build farm
    `docker buildx inspect NAME`
        --bootstrap
            - see what runtime platforms your current builder instance supports


    `docker buildx use NAME`
            quickly switch between them
    `docker buildx stop NAME`
    `docker buildx rm NAME`
    `docker buildx ls NAME`
        list all builders

    `docker buildx build`
        --platform [linux|darwin]/[amd64|arm64]

    `docker buildx bake [options] [target...`
        [check this](https://github.com/docker/buildx#buildx-bake-options-target)
        [and this](https://github.com/tonistiigi/binfmt)

        

        supports building images form compose files 
            - similar to composee build
            - but allt he services are built concurrently as part of a single request
        support for HCL/JSON files 
            - better code reuse and different target groups
        build groups and targets 
            target: single docker build invocation
                takes the same options as `dockere build`
            group: grouping of targets
            multiple files can include the same target and the final build options will be determined by merging them together
        
        options 
            --file []
                build defintion file
                docker compose, json, or hcl ile
                multiple files can be listed and merged
                if no files listed, the following are parsed in cur dir
                    docker-compose.yml
                        .yaml
                    docker-bake.json
                        .override.json
                    docker-bake.hcl
                        .override.hcl
                        [check this](https://github.com/hashicorp/hcl/tree/hcl2)

            example HCL file definition
                group "default" {
                    targets = ["db", "webapp-dev"]
                }
                target "webapp-dev" {
                    dockerfile = "Dockerfile.webapp"
                    tags = ["docker.io/username/webapp"]
                }
                ....etc

                valid target fields: args, cache-from, cache-to, context, dockerfile, inherits, labels, no-cache, output, platform, pull, secrets, ssh, tags, target

                [can also use vars](https://github.com/docker/buildx#hcl-variables-and-functions)

    `docker buildx imagetools ...`
        [check this](https://github.com/docker/buildx#buildx-imagetools-create-options-source-source)
        cmds for working with manifest lists in the registry
            - useful for multiplatform build results
        inspect image
            Show details of image in the registry.
        create 
            creates a new manifest list based on source manifests
    examples
        `docker buildx create --use --name MYBUILD CONTEXTNAME`
            create contexts with docker context 
        `docker buildx create --append --name MYBUILD CONTEXTNAME`
            append another context to existing build
        `docker buildx build --platform linux/amd64,linux/arm64`
            build for two platforms (must already be specified with docker buildx build?)


`docker context`
    give names for remote docker api endpoints

    `docker context ls`
        list contexts


`docker-container`
    some kind of driver 
    when used with buildx
        can build for multiple platforms
            outputs a manifest list containing images foor all of the specified architectures
            when used in `docker run` or `docker service` docker will pick the correct image based on the nodes platform
    
# multi-platform images 
    - use the QEMU emulation support in the kernel
        - buildkit autoloads the required arc  binary if its registered in th `binfmt_misc` handler
            - binaries must be registered with the `fix_binary` flag with `binfmt_misc` on the host OS to work transparently inside containers
                - requires kernel >=4.8 and binfmt-support >=2.1.7
        `ls -al /proc/sys/fs/binfmt_misc/qemu-*`
            - see which binaries are currently configured 

        `docker run --privileged --rm tonistiigi/binfmt --install all`
            - configure binfmt_misc support for additional platforms (all)

    - build on multiple native nodes using the same builder instance
        - provides better supprt for more complicated cases not handled by qemu
        - better performance than qemu

    - use a stage in dockerfile to cross-compile to different architectures
        - only if your project/language supports cross-compilation
            - maybe like JS and typescript?
        `-FROM --platform=BUILDFORTHISPLATFORM`
            build a binary for `--platform` using the native arch of the build node
    
    - if using the `RUN` cmd in Dockerfiles
        - the builder requires runtime support for the specified platform (duh)
        - in a clean setup, you can only execute `RUN` cmds for your system architecture
            - unless your kernel supports (and is configured for) `binfmt_misc`
            - then buildx will pick those up automatically




# DOCKERFILES 

    override default frontend - must be first line in dockerfile
        `#syntax=docker/dockerfile:1.2-labs
            - always set this to enable new dockerfile syntax
            - it should point to an image that contains the syntax
            - it should ALWAYS point to an external image so that 
            all users use the same syntax (and not depend on the default local one)
              - images are either -labs or -latest
            [see this](https://github.com/moby/buildkit/blob/master/frontend/dockerfile/docs/syntax.md)

                RUN --network=none|host|default
                RUN --mount=type=bind (the default mount type)
                RUN --mount=type=cache
                RUN --mount=type=secret
                RUN --mount=type=ssh
                RUN --security=insecure|sandbox
                RUN --network=none|host|default






    label a group of cmds as a build stage
    also useful for labeling a commmon image
        ARG ALPINEVER=3.6
            only override this via docker build --build-arg
            so that you dont invalidate cache
        FROM ubuntu AS base
        FROM alpine:${ALPINEVER} AS alpine
    
    copy shit from a build stage, remote image, etc
        `COPY --from=linuxkit/ca-certificates / /`
            the from=imagename cannot contain vars
            even tho the FROM poop can



    build arguments 
        BUILDPLATFORM
        TARGETPLATFORM
            the current platform
            [platform syntax](https://github.com/containerd/containerd/blob/v1.2.6/platforms/platforms.go#L63)

    secrets in build
        `docker build --secret id=mysecret,src=mysecret.txt .`
            - secret only for build
              - the final image will not have the path nor value of the secret
            - specifies 
              - id (var) to hold secret value
              - src (path) to get value
                - echo 'WARMACHINEROX' > mysecret.txt
            - then in dockerfile
                # shows secret from default secret location:
                  `RUN --mount=type=secret,id=mysecret cat /run/secrets/mysecret`
                # shows secret from custom secret location:
                  `RUN --mount=type=secret,id=mysecret,dst=/foobar cat /foobar`
                # use required to force failure if no value is passed
                    `RUN --mount=type=secret,id=mysite.key,required <command-to-run>`


    use ssh to access private data
        - https://medium.com/@tonistiigi/build-secrets-and-ssh-forwarding-in-docker-18-09-ae8161d066
        - https://docs.docker.com/develop/develop-images/build_enhancements/#using-ssh-to-access-private-data-in-builds


    - multi stage build cross-compiling to different platforms
        FROM --platform=$BUILDPLATFORM golang:alpine AS build
        ARG TARGETPLATFORM
        ARG BUILDPLATFORM
        RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" > /log
        FROM alpine
        COPY --from=build /log /log