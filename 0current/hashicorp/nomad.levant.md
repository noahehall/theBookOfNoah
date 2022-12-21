# levant

- nomad templating tool

## links

- [releases](https://releases.hashicorp.com/levant/)
- [docs](https://github.com/hashicorp/levant/tree/main/docs)

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

levant deploy -log-level=debug -address=nomad.devoops -var-file=var.yaml -var 'var=test' example.nomad

```

### dispatch

- dispatch a nomad parameterized job

```sh
levant deploy -log-level=debug -address=nomad.devoops -var-file=var.yaml -var 'var=test' example.nomad
```

### plan

- perform a nomad plan of a rendered job template

```sh

levant plan -log-level=debug -address=nomad.devoops -var-file=var.yaml -var 'var=test' example.nomad

```

### render

- render a nomad job template without deploying for testing and debugging

```sh

levant render -var-file=var.yaml -var 'var=test' example.nomad

```

## templates

## clients
