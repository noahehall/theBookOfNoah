# TLDR

security groups, key pairs, IAM, STS, Access Analyzer, certifact manager, cognito

<https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html>
authorization

todo: should be in order

- <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#create-iam-users>
- <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html>
- <https://wikipedia.org/wiki/Eventual_consistency>
  - i think all this and related stuff is in one of the database readmes
- <https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency>

## links

- iam
  - [all IAM docs](https://docs.aws.amazon.com/iam/?id=docs_gateway)
  - [best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
  - [user guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
  - tuts
    - [create an IAM user](https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-up-s3.html#create-an-iam-user-gsg)
    - [sign in as an IAM user](https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-up-s3.html#signing-in-iam-user-gsg)
    - [writing IAM policies](https://aws.amazon.com/blogs/security/writing-iam-policies-how-to-grant-access-to-an-amazon-s3-bucket/)
    - [preview access when creating policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html)
    - [managing IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html)
    - [IAM customer managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html)
  - reference
    - [aws managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html#aws-managed-policies)
      - [aws managed policies for job functions](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html)
    - [global ocndition context keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html)

## basics

### best practices

- ALWAYS
  - create an account-level analyzer in IAM Access Analyzer on a per-Region basis.
  - create users with NO ATTACHED POLICIES to incrementally test policies as youre creating them
    - once you have verified the policy, you can then force the new user to reset their password
  - define your security groups broadly, so you dont have to manage hundreds/thousands of them per vpc
- SOMETIMES
  - TBD
- NEVER
  - user the root account for common tasks
  - make changes (like the following) in critical, high-avialaibity code paths since IAM is eventually consistent and takes time to replicate across servers
    - creating updating users, groups or policies
    - instead:
      - make IAM changes in a serpate initialization/setup routing that you run less frequently
      - verify changes have been propagated before production workflows depend on them

### gotchas

## keypairs

- public key cryptography: asymmetric cryptography
  - public key
    - the key used to encrypt the data, cannot be used to decrypt (thats why you need two)
    - is also stored on instances (e.g. ec2)
  - private key:
    - used to decrypt data
    - required to access instances (e.g. ec2)
    - are regional:

## IAM

- IAM: Identity and access management

  - webservice for controlling access to AWS resources
  - authentication: who can sign in
  - authorization: who can do what (permissions)

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

### IAM considerations

- for ec2
  - what is the ec2 doing? create a role that enables the ec2 to connect with other resources at the necessary permission levels

## STS

- STS: Security Token Service

## cognito

- authnz
