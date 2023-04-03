# CLIs

- aws cli v2, aws sam cli

## links

- [export current profile as AWS\_\* keys](https://stackoverflow.com/questions/40852223/is-there-a-way-to-export-an-aws-cli-profile-to-environment-variables)
- [main docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
- [install/update](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [sam install docs](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

## aws cli

- files
  - default config & credentials
  - ~/.aws/config: setup the default output and region per profile
  - ~/.aws/credentials: setup access key ID and secret for each profile

```sh
  # configure help
    aws configure # set your creds one by one
      list # see current profile
      list-profiles # see available profiles
      get KEY # get the current value of the current profiles config, (anything from list)
  # global options
    --profile SOMENAME # configure/use creds + config of a profile, specify this LAST

    # so you dont have to use the --profile on each cmd
    export AWS_DEFAULT_PROFILE=AccountAadmin

    # to override the selected profile, e.g. in a script
    export AWS_ACCESS_KEY_ID=woop
    export AWS_SECRET_ACCESS_KEY=woop
    export AWS_DEFAULT_REGION=us-woop-1

    --region us-east-1 # specify the region

  # basics

  aws SERVICENAME COMMAND OPTIONS
    # most used
    s3,ec2,rds,iam, elasticbeanstalk
    # not really
    ebs, elb
      dfadfa # use that to get a list of servicenames
```

#### S3

- [docs home](https://docs.aws.amazon.com/s3/?id=docs_gateway)

```sh
  # global options
    --recursive # e.g. aws s3 cp,mv,rm --recursive # take action on all child things too
    # both can use *,?,[sequence],[!sequence]
      --include "value" # e.g. --include "*.txt"
      --exclude "value" # e.g. --exclude "*.git"
        # --include "*.txt" --exclude "*" # only txt files

  # cmd reference
  aws s3
    # file actions
    cp
    mv
    rm
    # directory actions
    sync
    mb
    rb
    ls # list buckets

  aws s3api

```

#### ec2

```sh
  # create a key pair
  # ^ key type can be rsa | ed25519
  # ^ KeyMaterial prints the key material to output
    aws ec2 create-key-pair \
      --key-name KEY_NAME \
      --key-type ed25519 \
      --query 'KeyMaterial' \
      --output text > KEY_NAME.pem
    chmod 400 KEY_NAME.pem

  # verify a priv key on your local machine matches the public key stored in AWS
    aws ec2 describe-key-pairs --key-names KEY_NAME

  # delete a key-pair
    aws ec2 delete-key-pair --key-name KEY_NAME

  # get the instance fingerprint (to later verify when you connect to ensure your not victim to a man-in-the-middle attack)
    aws ec2 get-console-output --instance-id EC2_INSTANCE_ID --output text

```

## sam cli

- AWS Serverless Application Model (SAM) CLI is an open-source CLI tool that helps you develop serverless applications containing Lambda functions, Step Functions, API Gateway, EventBridge, SQS, SNS and more. Some of the features it provides are:

- docker is prereq for testing applications locally and building deployment packages using the `--use-container` option
  - the sam cli uses the `DOCKER_HOST` env var to communcate with the docker daeon

```sh

sam --version

```
