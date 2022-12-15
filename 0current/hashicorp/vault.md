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
