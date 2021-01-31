#!/usr/bin/env bash

#both force you to specify the profile, im currently using default and test
#could use just set/setx, but i like to be specific
#https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-precedence

# todo
# add aws-shell: https://github.com/yokawasa/docker-aws-shell/blob/master/Dockerfile
# add aws-sam-cli: https://github.com/pahud/sam-cli-docker/blob/master/Dockerfile
# review this: https://github.com/aws/aws-sam-cli/issues/502
# copilot
# amplify
# etc

volumedir=~/volumes/aws
awscliv=2.0.6
mkdir -p $volumedir

alias aws-basic='docker run --rm -it amazon/aws-cli:"$awscliv" --profile'
alias aws='docker run --rm -it --network "${thisnetwork:-default}" -v ~/.aws:/root/.aws -v "${volumedir}":/aws amazon/aws-cli:"$awscliv" --profile'

# check the tests for more examples: https://github.com/localstack/localstack/tree/master/tests/unit
# 
lstackaws () {
  # set -Eouvx pipefail
  docker network inspect lstack -f {{.Name}} > /dev/null 2>&1 || docker network create lstack

  local thisnetwork=lstack

  # examples
  # kinesis list-streams
  # lambda list-functions
  # fake multi-line comment: https://stackoverflow.com/a/43158193
  : '
   lambda create-function --function-name myLambda \
      --code S3Bucket="__local__",S3Key="/my/local/lambda/folder" \
      --handler index.myHandler \
      --runtime nodejs8.10 \
      --role whatever
  '
  echo "$@"

  # see this for api gateway: https://github.com/localstack/localstack#invoking-api-gateway
  # see this for terraform: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/guides/custom-service-endpoints#localstack
  aws test --endpoint-url=http://localstack.localhost:4566 "$@"
  echo $?
  # set +Eouvx pipefail
}