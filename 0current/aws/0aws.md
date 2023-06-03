# AWS Global Architecture, IAM and tools

- IAM, STS, cli, sam cli, copilot cli
- this cheatsheet should be understood before transitioning to any other file
  - your next stop should be the security file
  - after that should be networking
- before going all in on AWS, consider how you may utilize the following instead of their AWS competitors
  - [everything hashicorp](../hashicorp/README.md) for a truly modern multi-cloud-enabled devops architecture
  - [haproxy](../proxy/haproxy.md)
    - [TODO: envoy](../proxy/envoy.md)
  - your goal should be creating multi-cloud & open source architectures
    - as opposed to proprietary entrapped enslaved business models

## TLDR

- features that encompass AWS resources and architecture decisions
- generally apply to all services or should be `top of mind` when working with AWS
- using managed services makes you operationally dependent on AWS
- not all services
  - are available in all regions
  - cost the same in all regions

### best practices/gotchas

- you're going to use roles for everything: humans, machines, resources... e.v.e.r.y.t.h.i.n.g
- picking a region: service availability, pricing, latency, compliance (law), SLAs
- ALWAYS
  - create a schema for tagging resources
  - create an account-level analyzer in IAM Access Analyzer on a per-Region basis.
  - create users with NO ATTACHED POLICIES to incrementally test policies as youre creating them
    - once you have verified the policy, you can then force the new user to reset their password
- SOMETIMES
  - TBD
- NEVER
  - user the root account for common tasks
    - create atleast 1 child account, never use the main account
  - make changes in critical, high-availability code paths since IAM is eventually consistent and takes time to replicate across servers
    - i.e. dont create users during your CI/CD process
    - creating updating users, groups or policies
      - make IAM changes in a separate initialization/setup routing that you run less frequently
      - verify changes have been propagated before production workflows depend on them

### todo

- theres bunches of stuff in the oldnotes and oldnotesbooks directories
  - move them all into the new files
  - [new AWS billing policies require updating nirv](https://aws.amazon.com/blogs/aws-cloud-financial-management/changes-to-aws-billing-cost-management-and-account-consoles-permissions/)
- supported compliance standards: <http://aws.amazon.com/compliance/>
- lot of things about IAM in here, move it into the 0security file
  - scratch that, put it under `# global architecture`
  - move security in this file
- iam intro https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html
- todo: should be in order
  - <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#create-iam-users>
  - <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html>
  - <https://wikipedia.org/wiki/Eventual_consistency>
    - i think all this and related stuff is in one of the database readmes
  - <https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency>

## links

- [all 250+ aws services](https://aws.amazon.com/products/)
- [all aws managed services](https://aws.amazon.com/products/management-and-governance/)
- [all aws docs by resource type](https://docs.aws.amazon.com/index.html)

### reference

- [aws ref: guide ands APIs](https://docs.aws.amazon.com/index.html)
- [AWS ref: everything else](https://docs.aws.amazon.com/general/latest/gr/Welcome.html)
- [available AWS condition keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html)
  - [aws ec2 ref](https://docs.aws.amazon.com/cli/latest/reference/ec2/)

### docs

- [access analyzer APIs](https://docs.aws.amazon.com/access-analyzer/latest/APIReference/Welcome.html)
- [access anlyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#access-analyzer-enabling)
- [aws managed policies for job functions](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html)
- [aws managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html#aws-managed-policies)
- [cognito](https://aws.amazon.com/cognito/?did=ap_card&trk=ap_card)
- [configuring credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html)
- [configuring the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
- [control tower](https://aws.amazon.com/controltower/)
- [creds & config spec](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [detective](https://aws.amazon.com/detective/?did=ap_card&trk=ap_card)
- [getting setup on th AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-set-up.html)
- [global condition context keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html)
- [guardduty](https://aws.amazon.com/guardduty/?did=ap_card&trk=ap_card)
- [IAM best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [IAM docs](https://docs.aws.amazon.com/iam/?id=docs_gateway)
- [IAM json policy elements](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_resource.html)
- [IAM user guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
- [inspector](https://aws.amazon.com/inspector/?did=ap_card&trk=ap_card)
- [macie](https://aws.amazon.com/macie/?did=ap_card&trk=ap_card)
- [named profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)
- [organizations](https://aws.amazon.com/organizations/?c=mg&sec=srv)
- [resource names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)
- [test permissions on the command line](https://docs.aws.amazon.com/AmazonS3/latest/userguide/policy-eval-walkthrough-download-awscli.html)
- [IAM: identity center intro](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html?icmpid=docs_sso_console)

### tools

- [all tools](https://aws.amazon.com/tools/)
- [aws simple monthly calculator](http://calculator.s3.amazonaws.com/index.html)
- [cli cmds](https://docs.aws.amazon.com/cli/latest/reference/)
- [cli: copilot](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Copilot.html)
- [cli: sam](https://github.com/aws/aws-sam-cli)
- [command completion](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-completion.html)
- [developer tools](https://aws.amazon.com/products/developer-tools/)
- [get your public IP](https://checkip.amazonaws.com/)
- [toolkit for vscode](https://aws.amazon.com/visualstudiocode/)
- [well-archtiected tool](https://aws.amazon.com/well-architected-tool/)

### tuts

- [aws-cli basics](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
- [aws-cli & s3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/setup-aws-cli.html)
- [aws-cli & ec2](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-ec2.html)
- [manage private keys (pem)](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-ec2-keypairs.html)
- [import an existing key pair into aws](https://docs.aws.amazon.com/cli/latest/reference/ec2/import-key-pair.html#examples)
- [create an IAM user](https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-up-s3.html#create-an-iam-user-gsg)
- [sign in as an IAM user](https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-up-s3.html#signing-in-iam-user-gsg)
- [writing IAM policies](https://aws.amazon.com/blogs/security/writing-iam-policies-how-to-grant-access-to-an-amazon-s3-bucket/)
- [preview access when creating policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html)
- [managing IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html)
- [IAM customer managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html)
- [permission sets](https://aws.amazon.com/premiumsupport/knowledge-center/create-sso-permission-set/)
- [permission boundary for create role action](https://stackoverflow.com/questions/62029972/trying-to-give-iam-user-rights-to-create-and-assign-roles-but-limit-the-type-of)

## basics

### terminology

- ITIL: IT infrastructure library; best practices for IT services and improving IT support and service levels
- ITSM: IT service management; set of policies and practices for implementing, delivering and managing IT services for end users
- canonical ID: identifies a specific user/account/resource across all of AWS
  - anonymouse user: 65a011a29cdf8ec533ec3d1ccaae921c
- groups
- CORS: JSON configuration defines a way for servers from domain X to interact with resources on domain Y
- encryption

### key goal & design concepts

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

### file locations

```sh

~/.aws/{credentials, config}

```

## global architecture

- aws divides the world into regions, azs, and edge locations
- operates at the hypervisor layer

### regions & azs

- region: a geographic area
  - a name set of AWS resources in the same geogrpahical area:
  - are isolated from each other
  - have atleast 2 availability zones
  - represented by `name-name-number`
- availability zone: a distinct data center (or set of data centers) in a region
  - distinct location within a region thats insulated from failures in other availability zones
  - each AZ within a region are connected through low-latency links
  - represented by a `letter`
- edge locations
  - independent of region & azs
  - power cloudfront CDN

### ARN

- amazon resource name: identifier for a specific resource
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
- has the following syntax across all region specific services: `arn:partition:service:region:namespace:relative-id`
  - partition: `aws` or `aws-cn` for china (Beijing) region
  - service: e.g. s3
  - region:
  - namespace:
  - relative ID: e.g. `bucket-name` or `bucket-name/object-key`
- has the following syntax across all global services
  - `arn:partition:service:::relative-id`
    - notice the region & namespace are missing

### tags

- to ensure expected tags are automatically displayed in dashboard columns, they must match case-sensitive
  - i.e. `Name` !== `name`
  - in the new UI you can now add specific tags

### policies & ACLs

- user policies: use IAM to manage access to resources on AWS,
  - i.e. create IAM users, groups and roles and attach access policies to them to grant access to resources
    - everyone is denied by default
  - cannot grant anonymous permissions to users, as you have to attach policies to a specific user/group/etc
- resource policies: JSON object defining basic access permissions
- ACL: access control list: ACLs predates resource-based policies and IAM
  - list of grants identifying grantee and permission granted
- resource: an entity that you can work with (e.g. an s3 bucket, or an s3 bucket object)
- resource > subresource: child of a resource
- resource owner: by default its the AWS account that creates the resource, but can be changed via resource/user based policies (e.g. to be the IAM user and not hte account owner)

#### policy schema

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

### service quotas

- [main page](https://console.aws.amazon.com/servicequotas/home?region=us-east-1#)
- see all quotas related to every AWS service
  - current limit
  - default limit
  - if its adjustable
  - click a quota name to request an increase
  - create cloud watch alarms for certain quotas
- can have a max of 9 cards on the dashboard for important services

### keypairs

- public key cryptography: asymmetric cryptography
  - public key
    - the key used to encrypt the data, cannot be used to decrypt (thats why you need two)
    - is also stored on instances (e.g. ec2)
  - private key:
    - used to decrypt data
    - required to access instances (e.g. ec2)
    - are regional:

## IAM

- Identity Access Management
  - webservice for controlling access to AWS resources
  - authentication: who can sign in
  - authorization: who can do what (permissions)
- IAM Users
  - groups: categorize groups of users
  - policies: array of permissions for groups/users,
    - effect: allow/deny
    - action: array of resource methods in the form `resourceName:ActionName`
    - resource: the aws resource, in the form `arn:aws:resource:woop:woop:woop
- free to use
  - IAM
  - STS
  - Access Analyzer
- costs
  - cloudtrail (i think)
- use cases
  - shared access to your AWS account
    - grant other people permission to administer/use resources in AWS without sharing your password/access key
  - granular permissions
    - grant arbitrary permissions to different people for different resources
  - secure access to AWS reosurces for applications running on EC2
    - provide creds for applications to access other AWS reosurces
  - multi factor authentication: only supports hardware devices
  - identity federation: via AWS CloudTrail you can receive log records that include info about requests for resources based on IAM identities
  - PCI DSS copmliance: processing, storage and transmission of credit card data by a merchant/service provider
    - validated as being compliant with Payment Card Industry (PCI) data securty standard (DSS)
  - eventually consistent: achieves high availability by replicating data across multiple servers within amazons datacenters
- key components
  - IAM provides the infrastructure necessary to control authentication and authorization
  - resources: user, group, role, policy and identity provider objects that are stored in IAM
  - identities: resource objects used for users, groups and roles
    - you attach policies to IAM identities (users, groups roles)
  - entities: resource objects that AWS uses for authentication (users and roles)
  - principals: person/application that uses the AWS root user, IAM user, or IAM role to sign in and make requests to AWS (federated users and assumed roles)
  - principal: can make a request for an action/operation on an AWS resource
  - request: sends a request to AWS via console, API or cli
    - actions/operations: something the principal wants to perform
    - resources: object on which the actions/operations are performed
    - principal: the person/application that used an entity (user/role) to send the request
      - includes metadata about the policies associated with the entity the principal used to sign in
    - environment data: e.g. ip address, user agent, SSL enabled status, time of day
    - resource data: about the resource that is being requested, e.g. a table name or tag
  - authentication: principals must be signed in using credentials to send a request
    - console: email address + password
    - IAM user: account ID/alias, then username + password
    - API/CLI: access key + secret key
      - any o the above could require MFA
- common roles you should create
  - cloud watch roles
    - cloudWatchAgentServerRole
      - policies
        - coudWatchAgentServerPolicy: permissions to write logs to cloudwatch
      - attach to ec2 instance you want to monitor with cloud agent

### Access Management

- user groups: permissions applied at the group level
- users: its now preferred to use IAM Identity Center instead of creating users directly through IAM access management
- roles: identities (with attached policies) for specific use cases that can be assumed by users/entities for short durations
- policies: the base entity for providing access to AWS resources
- identity providers: it is now preferred to use IAM Identity center
- account settings: ensure you set this up in the beginning
  - password policy
  - STS: toggle security token service endpoints

### Access Analyzer

- monitor access to resources

### IAM considerations

- in general
  - for any nontrivial setup
    - administering users & permission sets via Identity Center
    - manage roles & policies via Access Management
    - rely on AWS MultiAccounts to delineate your organization into groups
- for ec2
  - what is the ec2 doing? create a role that enables the ec2 to connect with other resources at the necessary permission levels

## IAM Identity Center

- [start here](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html?icmpid=docs_sso_console)
- successor to aws sso
- Centrally manage workforce access to multiple AWS accounts and applications
- general workflow
  - this workflow continues where IAM Access Management ends
  - define account settings
    - ALWAYS require signin (fk context aware)
    - ALWAYS require MFA (fk ur password)
    - ALWAYS ensure the session settings is <= the default of 8 hours
  - create permission sets
    - heuristics
      - EVERYONE should be responsible for managing their costs, AWS is fkn expensive
      - instead of granular permission sets, prefer relying on multi-account organization
    - BillingAdmin: can see & change credit cards
      - IMO this should be the only group able to modify credit card info
    - SysAdmin: attach the default SystemAdministrator Policy
      - this is still too permissive IMO and shouldnt be assigned to 99% of users
      - SystemAdministrators can see & modify credit cards
    - DevAdmin: SysAdmin minus creating users
  - create groups
    - assign permission sets to groups
  - create applications
    - theres some preintegrated accounts
    - but realistically you'll setup custom SAML 2.0 with third-party apps
  - create child(ren) AWS accounts
    - NEVER use the main account for anything
    - assign groups to accounts
  - create users
    - assign users to groups
  - assign applications to users
  - assign users to accounts

### IAM Identity Center Considerations

- Identity Sources: extend beyond AWS user directory
- Multi Account permissions:
  - you generally want to create accounts for broad sets of your organization

## STS: Security Token Service

- create and provide trusted users with temporary access to aws resources
- in IAM > Account Settings you should disable regions your not using

## organizations

- centrally manage multiple AWS accounts
- allocate resources, group accoutns and apply policies to accounts/groups

## control tower

- setup and govern multi accounts

## CLIs

- different CLIs for different usecases

### aws cli (default)

- files
  - default config & credentials
  - ~/.aws/config: setup the default output and region per profile
  - ~/.aws/credentials: setup access key ID and secret for each profile
- TODO: put resource specific cli stuff in their related files

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

### sam cli (serverless)

- AWS Serverless Application Model (SAM) CLI is an open-source CLI tool that helps you develop serverless applications containing Lambda functions, Step Functions, API Gateway, EventBridge, SQS, SNS and more. Some of the features it provides are:

- docker is prereq for testing applications locally and building deployment packages using the `--use-container` option
  - the sam cli uses the `DOCKER_HOST` env var to communcate with the docker daeon

```sh

sam --version

```

### copilot cli (containers)

- simplifies building, releasing and runtime ops of container apps on ECS from localhost
