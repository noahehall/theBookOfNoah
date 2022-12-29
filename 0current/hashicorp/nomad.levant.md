# levant

- nomad templating tool
- dont use this: use nomad pack
  - fk it, use it until you break it
  - didnt take long to break it, dont use leviant or maybe find a fkn example
  - check the examples dir of using a a converted docker convert json and plain on variable delcarations

## links

- [releases](https://releases.hashicorp.com/levant/)
- [docs](https://github.com/hashicorp/levant/tree/main/docs)
- [templates](https://github.com/hashicorp/levant/blob/main/docs/templates.md)
- [commands](https://github.com/hashicorp/levant/blob/main/docs/commands.md)
- [clients](https://github.com/hashicorp/levant/blob/main/docs/clients.md)

## install

```sh
# if you get: cannot execute binary file: Exec format error
## its because you havent gotten enough sleep and downloaded the wrong file ;)
## just download the file and unzip it to /opt
## opt's already in your path
```

## commands

- will use the first `*.nomad` file it finds in the current dir
- will will autoload a `levant.[yml|yml|tf] in the current dir

### deploy

- deploy a nomad job

```sh

# start a server in dev mode
nmd.sh start -config=development.leader.nomad

# deploy a job
levant deploy \
  -log-level=debug \
  -address="http://0.0.0.0:4646" \
  -var-file=.env.development.compose.yaml \
  development.vault.nomad

```

### dispatch

- dispatch a nomad parameterized job

```sh
levant dispatch \
  -log-level=debug \
  -var-file=.env.development.compose.yaml \
  development.vault.nomad
```

### plan

- perform a nomad plan of a rendered job template

```sh

levant plan \
  -log-level=debug \
  -var-file=.env.development.compose.yaml \
  development.vault.nomad

```

### render

- render a nomad job template without deploying for testing and debugging

```sh

levant render \
  -var-file=.env.development.compose.yaml \
  development.vault.nomad

```

## templates

## clients
