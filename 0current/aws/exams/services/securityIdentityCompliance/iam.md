# Identity and Access Management (IAM)

- authnz for:
  - IAM users and groups: humans logging into an account and signing API calls
  - IAM roles: assumed by an entity (humans/machines) for temporary access to AWS credentials

## my thoughts

- everything starts and ends with IAM
  - i would also add VPC and cloudwatch

## links

- [security credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/security-creds.html)
- [faqs](https://aws.amazon.com/iam/faqs/?da=sec&sec=prep)

### user guide

- [AAA: getting started](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html)
- [authnz for resources](https://docs.aws.amazon.com/en_us/IAM/latest/UserGuide/access.html)
- [ec2: iam roles](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html)
- [enabling mfa](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html)
- [identities: users groups and roles](https://docs.aws.amazon.com/en_us/IAM/latest/UserGuide/id.html)
- [intro to IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html)
- [security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [signing aws api requests (sig v4)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
- [apigateway: identity-based policy examples](https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_id-based-policy-examples.html)
- [apigateway: resource policies](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies.html)
- [apigateway: authnz workflow](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-authorization-flow.html)
- [dynamodb: intro](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/UsingIAMWithDDB.html)

### API

- [root user only tasks](https://docs.aws.amazon.com/accounts/latest/reference/root-user-tasks.html)
- [lambda: resource based policies](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html)

## best practices

- resource policies are easier to grant/deny access across services/accounts, but have size limits
  - iam roles are a bit more verbose but dont have limits
- users
  - protect the root user at all costs
    - create an admin user instead
  - always enable multi factor auth
- groups
  - always assign users to groups, and attach policies to groups (and not directly to users)
- policies
  - always follow principle of least privilege for users and roles
  - generally the managed policies are always too lenient

### anti patterns

## features

- resource policy: permissions related to specific actions on specific resources, e.g. Execute Lambda
  - determines who is allowed into a service boundary, i.e. grant service A access to service B
- execution role: enables a service to assume some role with some predefined behavior for interacting with other services
  - determines what service A can do within a service boundary
- trust policy: enables a service to `AssumeRole` for taking action on behalf of another serviced
- principle of least privilege: start with the most restrictive set of permissions possible
- security in depth: multiple layers of redundant security
- principal: a user, role, another aws service / account

## pricing

## terms

- iam role: can be assumed by a user, an ec2 instance (e.g.) or an application
- resource policies: policies attached to resources as opposed to users/groups/roles

## basics

### users & groups

- root user: the initial user on the aws account
- groups are collections of users
- characteristics
  - static credentials
  - dont expire by default but you should definitely set requiremnets for periodic rotation

### roles

- endow an entity with temporary credentials to perform some function
  - users and groups
  - machines: for service-to-service authnz
  - federated users: external identity providers
    - SAML 2.0 federation
    - web identity
  - custom trust policy
- characteristics
  - no static credentials: must be progrogrammatical requested
  - credentials are always temporary for the requested amount of time

### access control

- authnz
  - authentication: who you are
  - authorization: what you can do
    - permissions are via policies
- north south: app-level; into and out of your application boundary
- east west: app to app; within your app boundary

#### request signatures

- signing a request enables AWS to authenticate your identity
- users and groups use the credentials associated with their acounts
- machines (e.g. any of your aws services) must assume a predefined role and sign requests with temporary credentials

##### authentication schemes

- uname & pword: for accessing the console
- access keys: for programmatic access; consists of an access key and a secret key
  - cli access
  - local code in a dev env to access AWS account
  - apps running on compute services
  - third-party services to access the aws account
  - apps run outside of AWS
- mfa: via soft/hardware; requires an additional input to validate a login attempt
  - something you know: e.g. a pin number
  - something you have: e.g. a onetime code from an app/device
    - virtual MFA: softare
    - hardware TOTP token
    - FIDO security keys
  - something you are: e.g. fingerprint or piece of your soul

### policies

- set of permissions that grant/deny users, groups and roles to invoke resource actions
- actions: aws API calls

#### resource policy

- apply policies to an aws resource to grant/deny access to an account, ip address rangew, vpc or vpc endpoint, etc
- generally used in addition to IAM policies applied to users, groups and roles

#### policy syntax

- a policy contains at least one permission
  - the policy is then associated with resources and/or assigned to users/groups/roles depending on the type
- its all about the statement array
  - each element object contains atleast the following
    - effect: allow/deny
    - action: the aws service and a potentially a filtered set of api calls
      - `serviceName:*` this specifies all actions (api calls) for this service
    - resource: ARN denoting resource(s) to match against
      - `resource: "*"` indicates all resources for this service
  - and potentially contains these elements
    - Principal: makes this a resource policy
    - conditions: apply the permission if all are met
    - sid: description of the permission
- version: seems to always be `2012-10-17`

```jsonc
// conglomerate of options from different examples
{
  "Version": "2012-10-17",
  "Id": "default",
  "Statement": [
    {
      "Sid": "Some Description",
      "Effect": "Allow", // or deny
      // Principle: "*" for everyone, and can then be used with other policies
      // Principle: "AWS" applies to all resources, and no other policies are taken into account
      "Principal": {
        "Service": "s3.amazonaws.com", // this service
        "AWS": [
          "arn:aws:iam:account-id:user/MyName" // or this specific user in account-id
        ]
      },
      "Action": "dynamodb:PutItem", // can do this action
      "Resource": "arn:aws:dynamodb:us-west-2:###:table/test", // on this resource
      "Condition": {
        // if these conditions are met
        "StringEquals": {
          "AWS:SourceAccount": "abcd"
        },
        "StringNotEquals": {
          "aws:SourceVpc": "vpc-abcdefg" //
        },
        "ArnLike": {
          "AWS:SourceArn": "arn:aws:S3:::lambda-lambda-2"
        },
        "IpAddress": {
          "aws:SourceIp": ["192.0.2.0/24", "198.51.100.0/24"] // 2 ip ranges
        }
      }
    }
  ]
}
```

#### Trust policy

- defines what actions a role can take

```jsonc
{
  "Version": "2012-10-17",
  "Statement": [
    "Sid": "Some Description",
    "Effect": "Allow",
    "Action": "sts:AssumeRole", // bam
    "Principal": {
      "Service": ["lambda.amazonaws.com"] // this service can assume this role
    }
  ]
}

```

## integrations

- basically every other AWS service can use IAM for authN

### cli

- [see markdown](../devtools/cli.md)
  - everything from named profiles, sso, etc

### lambda

- execution roles
  - AWSLambdaVPCAccessExecutionRole

### api gateway

- IAM policy API permissions
  - execute-api: who can invoke the api/refresh the api cache
  - apigateway: who can manage/create/deploy the api
- resource syntax: `arn:aws:PERM-NAME:REGION:ACCOUNT-ID:API-ID/STAGE-NAME/HTTP-METHOD/API-RESOURCE`

```jsonc
// associate this policy with IAM user, iam group with multiple users, iam role
{
  "Version": "2012-1017",
  "Statement": [
    // example invoke permission
    {
      // allow the the action
      "Effect": "Allow",
      // INVOKE the http method POST on the api demoresource
      "Action": ["execute-api:Invoke"],
      "Resource": [
        "arn:aws:execute-api:us-east-1:*:account-id/stage/POST/mydemoresource/*"
      ]
    },
    // example manage permission
    {
      "Effect": "Allow",
      "Action": ["apigateway:*"], // careful! this is sudo access, can replace * with GET,POST,etc
      "Resource": ["arn:aws:apigateway:us-east-1::/restapis/abcdefg"]
    }
  ]
}
```

### dynamodb

- authnz at the table, item, or attribute level
- for east/west in the same VPC always use a VPC endpoint for the dynamodb table
  - this prevents traffic from having to treverse the publically routed internet using public addressing

### ecs

- apply roles down to the task level for granular positions
  - assign resourced policies with appropriate permissions to each role
- common roles
  - ecsServiceRole: enables ECS to (de)register container instances from a load balancer whenever tasks are placed on them
- permission tiers
  - fargate
    - cluster permissions: control who can launch/describe tasks in a cluster
    - application permissions: enable containers to access AWS resources
    - task housekeeping permissions: ecr image pull, cloudwatch logs push, eni creation, (de)register targets into elastic load balancing, etc
      - execution role: ECR image pull, pushing cloudwatch logs
      - ecs service linked role: ENI management, ELB target (de)registration

### secrets manager

- apply resource policies directly to individual secrets defining who can access and what they can do
- alternatively apply roles to resources giving them access to specific secrets

### s3

- IAM policies attached to users/groups/roles for authnz of s3 resources

### RDS

- assign permissions to determine who can manage RDS resources
  - e.g. create, describe, modify and delete db instances, tag resources, modify security groups

### eks

- deploying new eks clusters requires at least 3 permissions
  - cluster iam role: eks permissions to make calls to AWS apis on your behalf for cluster management
    - e.g. managing ec2 auto scaling for worker nodes
    - aws provides an IAM policy with the recommended permissions for this role
  - node iam role: the kubelete daemon on eks worker nodes makes calls to aws apis on your behalf
    - e.g. pulling container images from ECR
  - rbac user: humans that manage the k8s cluster need permission to make calls to the k8s api
    - you map an IAM role to a k8s RBAC user
      - create additional principal sin IAM that map to restrict roles in rbac for specific mgmt tasks
    - the role used to create the clsuter will always have sudo access
      - you should instead create a specific role just for deploying clusters
