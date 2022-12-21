# nomad pack

- levant is likely deprecated

## links

- [nightly installs](https://github.com/hashicorp/nomad-pack/releases/tag/nightly)
- [pack community registry](https://github.com/hashicorp/nomad-pack-community-registry)
- [intro tutorial](https://developer.hashicorp.com/nomad/tutorials/nomad-pack/nomad-pack-intro)

## packs

### simple service

- [use simple_service for deploying arbitrary docker images](https://github.com/hashicorp/nomad-pack-community-registry/pull/37/files)

```sh
## specify the image to deploy, along with the whatever
nomad-pack run simple_service --var image="httpd:latest"
```

## cmds

- rename nomad-pack so you can go directly to it on the cli
  - other wise it conflicts with nomad and makes you tab twice

```sh
pack() {
  nomad-pack "$@"
}
```

### registry

```sh

pack registry
  list # packs available to display
  add # add new packs
    community [git.url] # add community packs
  delete # delet packs, same syntax as add
  render
    packName --to-dir /here -var takes=precedence --var-file=/over/this/file --render-output-template


########################## examples

# add the entiry community registry
nomad-pack registry add community github.com/hashicorp/nomad-pack-community-registry

# add a single pack
nomad-pack registry add community github.com/hashicorp/nomad-pack-community-registry --target=nginx
```
