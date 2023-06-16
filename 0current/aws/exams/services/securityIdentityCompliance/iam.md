# service name here

- mission statement

## links

- [iam authorization](https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html#intro-structure-authorization)
- [ec2: iam roles](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html)
- [lambda: resource based policies](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html)

## best practices

- resource policies are easier to grant access across services/accounts, but have size limits
  - iam roles are a bit more verbose but dont have limits

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

## terms

## basics

## considerations

### IAM policy

- a permissions allow an action

```ts
// conglomerate of options from different examples
{
  "Version": "2012-10-17",
  "Id": "default",
  "Statement":" [
    {
      "Sid": "Some Description",
      "Effect": "Allow", // or deny
      "Principal": {
        "Service": "s3.amazonaws.com" // this service
      },
      "Action": "dynamodb:PutItem", // can do this action
      "Resource": "arn:aws:dynamodb:us-west-2:###:table/test" // on this resource
      "Condition": {
        // if these conditions are met
        "StringEquals": {
          "AWS:SourceAccount": "abcd"
        },
        "ArnLike": {
          "AWS:SourceArn": "arn:aws:S3:::lambda-lambda-2"
        }
      }
    }
  ]
}

```

### Trust policy

- defines what actions a role can assume

```ts
{
  "Version": "2012-10-17",
  "Statement":" [
    "Sid": "Some Description",
    "Effect": "Allow", // or deny
    "Action": "sts:AssumeRole", // google each service for available actions
    "Principal": {
      "Service": "lambda.amazonaws.com
    }
  ]
}

```

## common setting by service

### lambda

- execution roles
  - AWSLambdaVPCAccessExecutionRole
