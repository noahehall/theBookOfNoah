# vault

- dynamic (or key-value) secret management
- secret roration
- encryption as a service + storage backends
  - at rest
  - inflight
- client authnz (for key access)
- authnz providers (e.g. aws identity management, k8s, docker, ldap, etc)
- access auditing
- uses a path (like linux directories) scheme for secrets which are controlled by policies attached to them

## TLDR

- clients authnz to vault to retrieve secrets
- access should be implemented dynamically, i.e. no client gets longterm keys to vault store, but must authnz e.g. every 72 hours
- vault should be deployed with high availability in a master-slave architecture
- vault provides a JSON http api for integration with clients

### best practices/gotchas

- generally never use kev=value pairs when you can send data via a file

## links

- [vault docker](https://hub.docker.com/_/vault)
- [dev mode](https://developer.hashicorp.com/vault/docs/commands/server#dev)
- [vault http api](https://developer.hashicorp.com/vault/api-docs)
- [vault kv secrets engine](https://developer.hashicorp.com/vault/docs/secrets/kv/kv-v2)
- [secrets engines](https://developer.hashicorp.com/vault/docs/secrets)
- [secrets management tutorial](https://developer.hashicorp.com/vault/tutorials/secrets-management)
- [database secrets engine](https://developer.hashicorp.com/vault/tutorials/db-credentials/database-secrets)
- [auth methods](https://developer.hashicorp.com/vault/docs/auth)

## terms

- secret engines: store, generate/encrypt secrets
- authentication methods
- sealed/unsealed: whether the root token and access key are encrypted
- secrets: are always encrypted and written to backend storage
- leases: how long a secret can be accessed, lease_id & lease_duration (seconds) are most important
- lease_id: used for renewal, revocation and inspection of secrets, like an oauth token. it will automatically be revoked after lease_duration expires
- dynamic secrets: are generated when read, like a pw generator

## modes

### dev mode

- dev server is built-in and pre-configured vault server
  - not secure, in memory storage by default, and vault is unsealed
- use cases: dev, testing,
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
vault
  # everythign generally has help|-help|list
  read # read from different paths, see subsections
  write # to different paths, see subsections
  delete
  list
  login # only required if  VUALT_TOKEN/VAULT_DEV_ROOT_TOKEN isnt set
    root # login with the root token
    -method=someAuthScheme # use a specific scheme to login
  agent
  unwrap
  audit
  auth # manage different auth schemes
    enable
      github
    disable
    move
    tune
    list # all enabled auth schemes
  debug
  kv # key/value secrets engine v2 with secrets versioning
    -help
    delete
    destroy
    enable-versioning
    list
    metadata
    patch
    rollback
    undelete
    get # read
      -mount=secret poop
      # secret/poop # deprecated for kv, use -mount=secret poop
      --format=json -mount=secret poop | jg
      --format=json -mount=secret -field=toilet poop # retrieve a specific secret from poop
    put # write
      # secret/anything: is deprecated, use -mount=secret anything
      -mount=secret poop toilet=paper another=one etc=etc
  lease # manage credentials, see subsection
    revoke
  monitor
  namespace
  operator
  path-help # get help for a specific path
    aws
  plugin
  policy # managed ACLs for paths
    list # all policy names
    write # create a policy from a file/stdin/heredoc/etc
      poopPolicy /tmp/poop.hcl
    read
      policyName
  print
  secrets
    list # see all secrets engines and their paths to use
    disable somePath/ # secrets are revoked, data & config are removed
  ssh
  token
    disable
      poopScheme # disable poop scheme
    create # a new token for access to vault, by defualt inherits the policies of the parent (token used when cmd was issued)
    revoke
      poopToken # revoke poopToken
      -mode path auth/poopScheme # revoke all tokens associated with poopScheme
  status # check status of server
  server
    -help
```

### http api

- can do anything the cli can be over http

### server

- only component that interacts with the data storage and backends
- the vault_addr is where you can access it
- the vault server is the SINGLE policy authority
  - there can be multiple authentication methods, but vault controls ALL authorization defined by vault policies for all authenticated humans and bots

### secrets engines

- all CRUD operations are forwarded to a secrets engine
- multiple instances of secret engines can be mounted at different paths

```sh
# enable another instance of kv
vault secrets enable -path=poop kv

# revoke an previously accessed secret, e.g. aws access creds
## ^ this is how you delete the aws IAM role
vault lease revoke some/lease/id
```

#### database

- generates dynamic, ondemand database (e.g. postgres) credentials

#### aws

- generates dynamic, ondemand aws access credentials
- requires priviledged account creds

```sh

vault secrets enable -path=aws aws

# add any existing keys as root
# will be used to interact with AWS on future requests
## you should set access & secret key as env vars to make it easier
vault write aws/config/root \
access_key=$POOP_ACCESS_KEY  \
secret_key=$POOP_SECRET_KEY \
region=us-west-1

# map a vault role to am aws IAM role and policy
# vault will create an IAM role for for the vault role to the aws policy
# then clients can retrieve access creds from vault for the role in aws
## everytime my-poop-user is requested
## a role in aws is created with the attached policy
vault write aws/roles/my-poop-user \
credential_type=iam_user \
policy_document=-<<EOF
{
  ...
  ...
  ...
}
EOF

# retrieve access creds for a previously created vault role
vault read aws/creds/my-poop-user
```

#### database

#### kv key value

- by default mounted at `secret`
- accessed via `vault kv` see cli section

### authentication

#### token authentication

- automatically enabled with the root token being assigned the root policy

```sh
# create a token and assign it a policy
export VAULT_TOKEN="$(vault token create -field token -policy=my-policy)"

# check a tokens policies
vault token lookup | grep policies
```

#### github

- enables a human to authenticate with vault by providing their github creds
- best practice
  - to require the user to have a github profile, belong to a specific team in a github org and generated a github access token with read:org scope
  - each team should have defined actions for specific repos and secrets

```sh
# enable github auth
vault auth enable github

# enable all users in nirv-ai to authenticate with vault
vault write auth/github/config organization=nirv-ai

# assign poop and scoop policies to the bigTurds team
vault write auuth/github/map/teams/bigTurds value=poop,scoop

# login with github
vault login -method=github
```

#### userpass

#### approle

### authorization

- all auth methods map identities back to the policies that are configured in vault, which determine what an authenticated user can access
- the most specific path prefix takes precidence: an exact match or longest glob

```sh
# check all the perms provided by the default policy
vault policy read default

```

#### policies

- use hcl, but it accepts json for ACLs
- the default and root polices cant be deleted

  - default: a common set of permissions assigned to all tokens by default

- cmds like `list` needs access to the `sys` path

```sh
# Dev servers have version 2 of KV secrets engine mounted by default
## can create/update to any path under secret/data
path "secret/data/*" {
  capabilities = ["create", "update"]
}
## but can only read from secret located at /secret/data/foo
path "secret/data/foo" {
  capabilities = ["read"]
}

```

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
