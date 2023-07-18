# localstack

- for gcp, check out the [gcloud beta emulators](https://cloud.google.com/sdk/gcloud/reference/beta/emulators)
- todos
  - verify the examples dir is still valid, copypastad from the docker dir

## links

- [terraform docs](https://docs.localstack.cloud/user-guide/integrations/terraform/)
- [installation](https://docs.localstack.cloud/getting-started/)
- [available AWS apis](https://docs.localstack.cloud/user-guide/aws/feature-coverage/)
- [installation: use homebrew for linux](https://docs.brew.sh/Homebrew-on-Linux)
- [awslocal: wrapper for awscli](https://github.com/localstack/awscli-local)
- [dockerhub](https://hub.docker.com/r/localstack/localstack/#!)

### services

- [dynamodb local with localstack issue](https://github.com/localstack/localstack/issues/3390)

## quickies

```sh
# install via cli
## first install homebrew for linux
## make sure to execute the extra steps in the console output
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
## then install localstack
brew install localstack/tap/localstack-cli
localstack --version

# alternative: use docer-compose
## read this: https://docs.localstack.cloud/getting-started/installation/#docker-compose
## ^ make sure to check the Notes section for gotchas
## ^ make sure to pin the image to a specific version

# setup awslocal
## if you require `aws cloudformation package ...` cmd
## ^^ make sure you already have pip and aws cli installed
pip install awscli-local
## else add this bash alias
## or source this file: https://github.com/nirv-ai/scripts/blob/develop/shell-init/localstack.sh
alias awslocal="AWS_ACCESS_KEY_ID=test AWS_SECRET_ACCESS_KEY=test AWS_DEFAULT_REGION=${DEFAULT_REGION:-$AWS_DEFAULT_REGION} aws --endpoint-url=http://${LOCALSTACK_HOST:-localhost}:4566"

```

## quickies

```sh
localstack
  --version
  logs
  start
    -d # start localstack in docker mode
  status
    services # see running services
```

## basics

- works with both CDK and terraform
