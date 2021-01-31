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

volumedir="${HOME}/volumes/aws"
awscliv=2.0.6
mkdir -p "$volumedir"

alias aws-basic='docker run --rm -it amazon/aws-cli:"${awscliv}" --profile'
alias aws='docker run --rm -it --network "${thisnetwork:-default}" -v "${HOME}"/.aws:/root/.aws -v "${volumedir}":/aws amazon/aws-cli:"$awscliv" --profile'

# check these for more examples
# https://github.com/localstack/localstack/tree/master/tests/unit
# https://baptiste.bouchereau.pro/tutorial/mock-aws-services-with-localstack/
# https://dev.to/slimcoder/mocking-amazon-web-services-with-localstack-426e
lstackaws () {
  # set -Eouvx pipefail
  docker network inspect lstack -f {{.Name}} > /dev/null 2>&1 || docker network create lstack

  local thisnetwork=lstack
  local endpoint=http://lstack.localhost
  local port=4566
  # [[ "$1" = 'dynamodb' ]] && port=4569

  # examples args
  # fake multi-line comment: https://stackoverflow.com/a/43158193
  : '
    s3 mb s3://local-aws-bucket
    s3 ls
    kinesis list-streams
    sns list-topics
    lambda list-functions
    lambda create-function --function-name myLambda \
      --code S3Bucket="__local__",S3Key="/my/local/lambda/folder" \
      --handler index.myHandler \
      --runtime nodejs8.10 \
      --role whatever

    dynamodb create-table \
      --table-name table_1 \
      --attribute-definitions AttributeName=id,AttributeType=S \
      --key-schema AttributeName=id,KeyType=HASH \
      --provisioned-throughput ReadCapacityUnits=20,WriteCapacityUnits=20
    dynamodb list-tables
  '


  # see this for api gateway: https://github.com/localstack/localstack#invoking-api-gateway
  # see this for terraform: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/guides/custom-service-endpoints#localstack
  aws test --endpoint-url="${endpoint}":"$port" "$@"
  echo $?
  # set +Eouvx pipefail
}