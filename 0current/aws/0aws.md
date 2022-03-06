# TLDR

- cli, regions, azs, service quotas, etc

- broad strategies & architectures that encompass multiple AWS resources
- things that generally apply to all services

## todo

- <https://aws.amazon.com/tools/>
- supported compliance standards: <http://aws.amazon.com/compliance/>

- lot of things about IAM in here, move it into the 0security file

## links

- [aws developer tools](https://aws.amazon.com/products/developer-tools/)
- [aws toolkit for vscode](https://aws.amazon.com/visualstudiocode/)
- [sam cli](https://github.com/aws/aws-sam-cli)
- [all cli cmds](https://docs.aws.amazon.com/cli/latest/reference/)
- [aws ci install & update directions](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [aws docs index](https://docs.aws.amazon.com/index.html)
  - also probably the best overview of all services
- [AWS glossary](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html)
  - the ultimate in ctrl+f
- [amazon reosurce names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)
- [IAM json policy elements](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_resource.html)
- [available AWS condition keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html)
- [enabling access anlyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#access-analyzer-enabling)
  - [access analyzer APIs](https://docs.aws.amazon.com/access-analyzer/latest/APIReference/Welcome.html)
- tools

  - [get your public IP](https://checkip.amazonaws.com/)

- cli
  - [creds & config spec](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
  - [named profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)
  - [command completion](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-completion.html)
  - [test permissions on the command line](https://docs.aws.amazon.com/AmazonS3/latest/userguide/policy-eval-walkthrough-download-awscli.html)
  - [configuring credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html)
  - [getting setup on th AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-set-up.html)
    - [configuring the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
  - [AWS product (e.g. s3, rds) cmd reference](https://awscli.amazonaws.com/v2/documentation/api/latest/index.html)
  - [s3 cmd reference](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/index.html)
    - [s3control plane actions reference](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3control/index.html)
    - [s3api reference](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3api/index.html)
  - [s3 glacier reference](https://docs.aws.amazon.com/cli/latest/reference/glacier/index.html)
  - references
    - [aws ec2 ref](https://docs.aws.amazon.com/cli/latest/reference/ec2/)
  - tuts
    - [aws-cli basics](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
    - [aws-cli & s3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/setup-aws-cli.html)
    - [aws-cli & ec2](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-ec2.html)
      - [manage private keys (pem)](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-ec2-keypairs.html)
      - [import an existing key pair into aws](https://docs.aws.amazon.com/cli/latest/reference/ec2/import-key-pair.html#examples)

### best practices/gotchas

- gotchas
  - using any AWS managed service makes you operationally dependent on AWS
  - not all services are available in all regions
  - not all services cost the same in all regions
- picking a region
  - service availability, pricing, latency, compliance (law), SLAs

## basics

### terminology

- canonical ID: identifies a specific user/account/resource across all of AWS
  - anonymouse user: 65a011a29cdf8ec533ec3d1ccaae921c
- groups
- CORS: JSON configuration defines a way for servers from domain X to interact with resources on domain Y

- ARN: amazon resource name: identifier for a specific resource

  - can use wildcards as part of the resource ARN
    - `*` represents any combination of zero/more characers
    - `?` represents any single character
  - can use predefined policy variables
    - at policy evaluation time, the variables are replaced by their corresponding values
      - e.g. to organize the bucket as a collection of folders, one folder for each of your users `arn:aws:s3:::bucket_name/developers/${aws:username}/`
  - examples
    - a specific object in a bucket`arn:aws:s3:::examplebucket/developers/design_info.doc`
    - any object in the bucket `arn:aws:s3:::examplebucket/*`
    - any object in any bucket matching exampleXbucket `arn:aws:s3:::example?bucket/*`
    - all s3 resources `arn:aws:s3:::*`
  - has the following syntax across all AWS services regoin specific services: `arn:partition:service:region:namespace:relative-id`
    - partition: `aws` or `aws-cn` for china (Beijing) region
    - service: e.g. s3
    - region:
    - namespace:
    - relative ID: e.g. `bucket-name` or `bucket-name/object-key`
  - has the following syntax across all global services
    - `arn:partition:service:::relative-id`
      - notice the region & namespace are missing

- tags
  - to ensure tags are shown in dashboard columns, they must be case-sensitive
    - i.e. `Name` [dashboard] !== `name` [tag]
- encryption
- user policies: use IAM to manage access to resources on AWS,
  - i.e. create IAM users, groups and roles and attach access policies to them to grant access to resources
    - everyone is denied by default
  - cannot grant anonymous permissions to users, as you have to attach policies to a specific user/group/etc
- resource policies: JSON object defining basic access permissions
- ACL: access control list: ACLs predates resource-based policies and IAM

  - list of grants identifying grantee and permission granted

- resource: an entity tha tyou can work with (e.g. an s3 bucket, or an s3 bucket object)
- resource > subresource: child of a reosurce
- resource owner: by default its the AWS account that creates the resource, but can be changed via resource/user based policies (e.g. to be the IAM user and not hte account owner)

- policy JSON schema
  - version: e.g. "2012-10-17"
  - Statement: array of object permissions
    - Sid: the statement ID, can be anything?
    - Effect: Allow|Deny
      - denied by default, you must specific specify `Allow`
    - Principal: specifies the user, account, service, or other entity that is allowed/denied access to a resource
      - anonymouse user `"*"`
        - or to match the normal syntax `{"AWS":"*"}`
      - single AWS account `{"AWS":"arn:aws:iam::AccountNumber-WithoutHyphens:root"}`
        - using canonical ID`{"CanonicalUser":"64-digit-alphanumeric-value"}`
      - multiple AWS accounts `{"AWS":["arn:aws:iam::AccountNumber1-WithoutHyphens:root","arn:aws:iam::AccountNumber2-WithoutHyphens:root"]}`
      - a specific user `{"AWS":"arn:aws:iam::account-number-without-hyphens:user/username"}`
      - anyone accessing via cloudfront URL `{"CanonicalUser":"Amazon S3 Canonical User ID assigned to origin access identity"}`
    - Action: array of actions related to the affect,
      - e.g. array of specific actions `["s3:GetObject", "s3:PutObject"]`
      - e.g. all actions on the `"\*"
      - for each resource type, amazon supports a set of operations;
      - each action is a keyword that maps directly to an aws service operation
    - Resource: array of ARNs to apply the statement to
      - e.g. buckets, objects, access points, jobs, etc
    - Condition: to specify conditions for when a policy is in affect
      - can use predefined AWS‐wide/service specific keys
      - specified as expressions with boolean operators
        - i.e. { booleanOperator: { permission: "value"}}
        - e.g. { StringEquals: { "conditionkey": "id=some-account-or-user"}}
          - grants the permission, if conditionKey === value
          - usually the conditionKey & value are specified in the header of the request

## key goal & design concepts

- high availablity

  - The term "number of nines" stems from the decrease of downtime per year as the number and costs increase. high availability = more 9s
  - route 53 dns config & routing options
  - regional load balancing across AZs
  - elastic IP swapping across AZs in the event of failure
  - Autoscaling with appropriate triggers (see provisioning file)
  - AMIs
  - ebs snapshots
  - db level architecture:
    - NoSQL dbs are easier to architect (especially dynamodb) for high availability relative to relational dbs
    - relational dbs require much higher level expertise to improve availability (unless your using RDS + multi-AZ option)
      - primary DB server on ec2 + standby in different AZ + automatic failover on failure (use DNS name instead of IP)
      - replicas on different EC2s in different regions, VPCs, availabilty zones, and subnets
        - note the greater the distance from the primary DB, the longer it takes for data to be reflected
      - operational details: OS management, db management, data protection schemes, primary DB failure scenarios, etc etc etc
  - caching
  - s3
  - cloudfront

- fault tolerance
  - appropriate storage & backup (s3, ebs elastic block storage)
  - autoscaling: scale ec2 capacity up/down based on triggers

## global architecture

- aws divides the world into regions, azs, and edge locations
- operates at the hypervisor layer

### regions & azs

- region: a geographic area
  - a name set of AWS resources in the same geogrpahical area: contains at least 2 availability zones
  - each region is isolated from each other
  - each region has atleast 2 availability zones
  - represented by `name-name-number`
- availability zone: a distinct data center (or set of data centers) in a region
  - distinct location within a region thats insulated from failures in other availability zones
  - each AZ within are connected through low-latency links
  - represented by a `letter`
- edge locations
  - independent of region & azs
  - power cloudfront CDN

## file locations

```sh

~/.aws/{credentials, config}

```

## service quotas

- [main page](https://console.aws.amazon.com/servicequotas/home?region=us-east-1#)

- see all quotas related to every AWS service
  - current limit
  - default limit
  - if its adjustable
  - click a quota name to request an increase
  - create cloud watch alarms for certain quotas
- can have a max of 9 cards on the dashboard for important services

## CLIs

- there are many, lets install them all
- generally all require you to download a zip file, and run the install script

### aws cli

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
    export AWS_ACCESS_KEY_ID=poop
    export AWS_SECRET_ACCESS_KEY=poop
    export AWS_DEFAULT_REGION=us-poop-1

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

### sam cli

- AWS Serverless Application Model (SAM) CLI is an open-source CLI tool that helps you develop serverless applications containing Lambda functions, Step Functions, API Gateway, EventBridge, SQS, SNS and more. Some of the features it provides are:

- docker is preqreq for testing applications locally and building deployment packages using the `--use-container` option
  - the sam cli uses the `DOCKER_HOST` env var to communcate with the docker daeon

```sh

sam --version

```
