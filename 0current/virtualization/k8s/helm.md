# Helm

- package manager for k8s
- used to download, share and deploy plugins, drivers, etc

## links

- [landing page](https://helm.sh/)

## basics

```sh
# most commands accept a variety of --blah options

helm
  repo
    add some-repo https://from.this.github.repo
    update # syncs newly added repos
  upgrade
    -install some-repo some-thing

```
