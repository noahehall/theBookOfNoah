# localstack

- for gcp, check out the [gcloud beta emulators](https://cloud.google.com/sdk/gcloud/reference/beta/emulators)
- todos
  - verify the examples dir is still valid, copypastad from the docker dir

## links

- [terraform docs](https://docs.localstack.cloud/user-guide/integrations/terraform/)
- [installation](https://docs.localstack.cloud/getting-started/)
- [available AWS apis](https://docs.localstack.cloud/user-guide/aws/feature-coverage/)
- [installation: use homebrew for linux](https://docs.brew.sh/Homebrew-on-Linux)
- [dynamodb local with localstack issue](https://github.com/localstack/localstack/issues/3390)

## quickies

```sh
# install
## first install homebrew for linux
## make sure to execute the extra steps in the console output
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
## then install localstack
brew install localstack/tap/localstack-cli
localstack --version # verify
```

## basics

- works with both CDK and terraform
