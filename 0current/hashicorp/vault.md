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

## terms

- secret engines
- authentication methods

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
