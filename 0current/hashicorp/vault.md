# vault

- dynamic (or key-value) secret management
- secret roration
- encryption as a service + storage backends
  - at rest
  - inflight
- client authnz (for key access)
- authnz providers (e.g. aws identity management, k8s, docker, ldap, etc)
- access auditing

## TLDR

- clients authnz to vault to retrieve secrets
- access should be implemented dynamically, i.e. no client gets longterm keys to vault store, but must authnz e.g. every 72 hours
- vault should be deployed with high availability in a master-slave architecture
- vault provides a JSON http api for integration with clients

## links

- [vault docker](https://hub.docker.com/_/vault)
- [dev mode](https://developer.hashicorp.com/vault/docs/commands/server#dev)

## terms

- secret engines
- authentication methods
- sealed/unsealed: whether the root token and access key are encrypted

## modes

### dev mode

- dev server is built-in and pre-configured vault server
  - not secure, in memory storage by default, and vault is unsealed
- use cases: dev, testing,

## dev mode

- e.g. `entrypoint: vault server -dev`
  - `-dev`
    - Vault runs in-memory and starts unsealed. As the name implies, do not run "dev" mode in production.
  - `-dev-listen-address=<string>`
    - The default is 127.0.0.1:8200
    - can also be specified via the VAULT_DEV_LISTEN_ADDRESS
  - `-dev-no-store-token`
    - do not persist the dev root token to the token helper (usually the local filesystem) for use in future requests.
    - The token will only be displayed
  - `-dev-root-token-id=<string>`
    - Initial root token. This only applies when running in "dev" mode.
    - can also be specified via the VAULT_DEV_ROOT_TOKEN_ID environment
      variable.
    - `-dev-tls`
      - Enable TLS development mode. In this mode, Vault runs in-memory= and starts unsealed, with a generated TLS CA, certificate and key.
    - `-dev-tls-cert-dir=<string>`
      - Directory where generated TLS files are created if `-dev-tls` is specified. If left unset, files are generated in a temporary directory.

```sh
# ensure you set this after execing into container
# find the values from docker compose logs
export VAULT_ADDR='http://0.0.0.0:8200'
export VAULT_DEV_ROT_TOKEN=poop
echo "y2AAvt7uusE0X5KWd2GkyWkVqCqEWQ9mklxpEttc7b0=" > unseal.key

```

## components

### cli

- interacts with the server over a TLS connection

```sh
# check status of server
vault status
```

### server

- only component that interacts with the data storage and backends
- the vault_addr is where you can access it

## docker

- uses [yelp/dumb init](https://github.com/Yelp/dumb-init) as pid 1
- volumes
  - /vault/logs: for writing persisteng audit logs; requires the file audit backend to be enabled
  - /vault/file: for writing persistent storage data when using the file data storage plugin; the file dat storage backernd must be enabled
  - /vault/config: for HCL/JSON configuration files, which will automatically be loaded
    - you can alternatively pass configs via `VAULT_LOCAL_CONFIG`
- gotchas
  - containers must be run with `--cap-add=IPC_LOCK` in order for vault to lock memory and prevent sensitive values from being swapped to disk

## examples

```sh


# running vault in development mode with in-memory storage
docker run --cap-add=IPC_LOCK -d --name=dev-vault vault

## same as above; but sets initial root token and the ip:port of the server listener
docker run --cap-add=IPC_LOCK -e 'VAULT_DEV_ROOT_TOKEN_ID=myroot' -e 'VAULT_DEV_LISTEN_ADDRESS=0.0.0.0:1234' vault

## same as above; but runs in server mode wiht the file storage backend
docker run --cap-add=IPC_LOCK -e 'VAULT_LOCAL_CONFIG={"storage": {"file": {"path": "/vault/file"}}, "listener": [{"tcp": { "address": "0.0.0.0:8200", "tls_disable": true}}], "default_lease_ttl": "168h", "max_lease_ttl": "720h", "ui": true}' -p 8200:8200 vault server
```
