# nomad pack

- levant is likely deprecated

## links

- [nightly installs](https://github.com/hashicorp/nomad-pack/releases/tag/nightly)
- [pack community registry](https://github.com/hashicorp/nomad-pack-community-registry)
- [intro tutorial](https://developer.hashicorp.com/nomad/tutorials/nomad-pack/nomad-pack-intro)
- [writing your own packs](https://github.com/hashicorp/nomad-pack/blob/main/docs/writing-packs.md)
- [custom registry tutorial](https://developer.hashicorp.com/nomad/tutorials/nomad-pack/nomad-pack-writing-packs)

## docker quickies

```sh

npack render simple_service
```

## packs

### simple service

- [use simple_service for deploying arbitrary docker images](https://github.com/hashicorp/nomad-pack-community-registry/pull/37/files)

```sh
## specify the image to deploy, along with the whatever
pack render simple_service \
  --var image="nirvai-core-vault:development" \
  --var-file=.env.development.compose.json
```

## cmds

- rename nomad-pack so you can go directly to it on the cli
  - other wise it conflicts with nomad and makes you tab twice

```sh
npack() {
  nomad-pack "$@"
}
```

### registry

```sh

npack registry
  list # packs available to display
  add # add new packs
    community [git.url] # add community packs
  delete # delet packs, same syntax as add
  render
    packName --to-dir /here -var takes=precedence --var-file=/over/this/file --render-output-template
  run packName
    --var poop=toilet # pass a single var
    -f varfile.hcl # pass a file


########################## examples

# add the entiry community registry
nomad-pack registry add community github.com/hashicorp/nomad-pack-community-registry

# add a single pack
nomad-pack registry add community github.com/hashicorp/nomad-pack-community-registry --target=nginx
```
