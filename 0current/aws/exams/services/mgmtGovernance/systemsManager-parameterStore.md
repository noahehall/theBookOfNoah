# Parameter Store

- integrates with secrets manager and IAM so you can retrieve secrets in a secure manner
- a stateless reference to stuff in secrets manager

## my thoughts

- its a reverse proxy with authnz to secrets manager

## links

- [parameter store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)
- [restricting access via iam policies](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-access.html)
- [lambda: sharing secrets](https://aws.amazon.com/blogs/compute/sharing-secrets-with-aws-lambda-using-aws-systems-manager-parameter-store/)
- [walkthroughs](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-walk.html)

## best practices

- use parametor store to access secrets in secrets manager

### anti patterns

## features

- centralized system for configuration and secrets management
- plain text / encrypted with kms
- granular access via IAM
- tracks all parameter changes via versioning to support rollbacks
- hierarchical key value storage, e.g. to segment key/values by environment

## pricing

## basics

## considerations

## integrations

### lambda

- cold starts will incur a latency penalty as lambda needs to request & decrypt values
  - always store outside the function handler, and check for existence within
