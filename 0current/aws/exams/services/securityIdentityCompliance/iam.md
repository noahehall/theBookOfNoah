# service name here

- mission statement

## my thoughts

- everything starts and ends with IAM

## links

- [intro to IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html)
- [signing aws api requests (sig v4)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
- [ec2: iam roles](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html)
- [lambda: resource based policies](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html)
- [apigateway: identity-based policy examples](https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_id-based-policy-examples.html)
- [apigateway: resource policies](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies.html)
- [apigateway: authnz workflow](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-authorization-flow.html)
- [dynamodb: intro](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/UsingIAMWithDDB.html)

## best practices

- resource policies are easier to grant/deny access across services/accounts, but have size limits
  - iam roles are a bit more verbose but dont have limits
- always follow principle of least privilege for users and roles

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

## basics

## considerations

### policy syntax

- a policy contains at least one permission
  - the policy is then associated with resources and/or assigned to users/groups/roles depending on the type
- its all about the statement array
  - each element atlest contains
    - effect: allow/deny
    - action: an aws service action, google them, theres bunches per service
    - resource: usually an ARN denoting a specific/generalized resource
      - depends on how many attributes you provide
  - and potentially contains these elements
    - Principal: makes this a resource policy
    - conditions: apply the permission if all are met
    - sid: description of the permission
- version: seems to always be `2012-10-17`

### resource policy

- apply policies to an aws resource to grant/deny access to an account, ip address rangew, vpc or vpc endpoint, etc
- generally used in addition to IAM policies applied to users, groups and roles
-

### IAM policy

- grant permissions to a user, group of users, or role

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

### Trust policy

- defines what actions a role can assume

```jsonc
{
  "Version": "2012-10-17",
  "Statement": [
    "Sid": "Some Description",
    "Effect": "Allow", // or deny
    "Action": "sts:AssumeRole", // google each service for available actions
    "Principal": {
      "Service": "lambda.amazonaws.com"
    }
  ]
}

```

## common setting by service

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

### secrets manager

- apply resource policies directly to individual secrets defining who can access and what they can do
- alternatively apply roles to resources giving them access to specific secrets
