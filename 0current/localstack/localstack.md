# localstack

- AWS emulator that runs in a single container on your laptop/CI env
- for gcp, check out the [gcloud beta emulators](https://cloud.google.com/sdk/gcloud/reference/beta/emulators)
- [grab your api key with a gmail alias](https://app.localstack.cloud/account/apikeys)

## links

- [installation](https://docs.localstack.cloud/getting-started/)
- [quickstart](https://docs.localstack.cloud/getting-started/quickstart/)
- [available AWS apis](https://docs.localstack.cloud/user-guide/aws/feature-coverage/)
- [installation: use homebrew for linux](https://docs.brew.sh/Homebrew-on-Linux)
- [awslocal: wrapper for aws cli](https://github.com/localstack/awscli-local)
- [samlocal: wrapper for sam cli](https://github.com/localstack/aws-sam-cli-local)
- [awslocal: for eks](https://docs.localstack.cloud/user-guide/aws/elastic-kubernetes-service/)
- [dockerhub](https://hub.docker.com/r/localstack/localstack/#!)
- [tutorials](https://docs.localstack.cloud/tutorials/)
- [user guide](https://docs.localstack.cloud/user-guide/)
- [references](https://docs.localstack.cloud/references/)
- [blog](https://localstack.cloud/blog)
- [sample applications](https://github.com/localstack-samples)

### services

- [dynamodb local with localstack issue](https://github.com/localstack/localstack/issues/3390)

### terraform

- [terraform docs](https://docs.localstack.cloud/user-guide/integrations/terraform/)
- [terraform with localstack tut](https://dev.to/mrwormhole/localstack-with-terraform-and-docker-for-running-aws-locally-3a6d)

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
## i find having localstack cli installed highly useful
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

# setup terraform local
pip install terraform-local
## you can also manually configure the local endpoints in the provider section
```

## quickies

```sh
localstack
  --version
  logs
  start
    -d # daemon
  status
    services # see running services
  stop # destroy created resources and stop the running container
```

## basics

- works with both CDK and terraform
- all resources are ephemeral: once you stop the localstack container all resources are lost
