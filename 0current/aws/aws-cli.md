# TLDR

- [full cmd reference](https://awscli.amazonaws.com/v2/documentation/api/latest/index.html)

## LOCATIONS

```sh

~/.aws/{credentials, config}

```

## debugging

- [sync computer & network time](https://www.howtogeek.com/tips/how-to-sync-your-linux-server-time-with-network-time-servers-ntp/)

```sh

```

## AWS CLI

- [creds & config spec](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [named profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)
- [command completion](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-completion.html)

```sh
# global options
  --profile SOMENAME # configure/use creds + config of a profile
  --region us-east-1 # specify the region

# admin
aws configure # specify key id, secret, region, and output format
  list-profiles

# basics

aws SERVICENAME COMMAND OPTIONS
  # most used
  s3,ec2,rds,iam, elasticbeanstalk
  # not really
  ebs, elb
    dfadfa # use that to get a list of servicenames
```

## S3

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
  cp, mv, rm # file actions
  sync, mb, rb, ls # directory actions
aws s3api

```
