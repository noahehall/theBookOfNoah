# Policy ref

- todos
  - find the pattern, its extremely logical

## links

- [condition operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html)

## policy syntax

- its all about the statement array
  - each element contains atleast the following
    - effect: allow/deny
    - action: the aws service and a potentially a filtered set of api calls that are allowed/denied
      - `serviceName:*` this specifies all actions (api calls) for this service
      - `serviceName:*blah` anything ending in blah
    - resource: ARN denoting resource(s) this policy covers
      - `resource: "*"` indicates all resources for this service
  - and potentially contains these elements
    - Principal
    - conditions: conditions that control when a policy is in effect
      - apply the permission if all are met
    - sid: description of the permission
- version: seems to always be `2012-10-17`

## examples

- generaly any string value can be an array value if the key logically should accept multiple values

```jsonc
{
  "Version": "2012-10-17",
  "Id": "some-id?",
  "Statement": [
    {
      "Sid": "Some Description",
      "Effect": "Allow",
      "Action": ["dynamodb:PutItem"], // can do these actions
      "Principal": {
        "Service": ["lambda.amazonaws.com"], // this service can assume this role
        "AWS": [
          "arn:aws:iam:account-id:user/MyName" // or this specific user in account-id
        ]
      },
      "Resource": ["arn:aws:dynamodb:us-west-2:###:table/test"], // on these resources
      "Condition": {
        // if tthese conditions are met apply the Effect
        "SomeCondition": {
          "SomeKey": "Somevalue"
        }
      }
    }
  ]
}
```

## Quick Ref

```sh

## actions: SERVICE_ID:SERVICE_ACTION
sts:AssumeRole
dynamodb:PutItem
execute-api:Invoke
apigateway:*

## principals
Principle: "*"  # for everyone, and can then be used with other policies
Principle: "AWS" # applies to all resources, and no other policies are taken into account

### Services: SERVICE_ID.amazonaws.com
lambda.amazonaws.com
s3.amazonaws.com

## resources

arn:aws:dynamodb:us-west-2:###:table/test
arn:aws:execute-api:us-east-1:*:account-id/stage/POST/mydemoresource/*
## Conditions

StringNotEquals
StringEquals
ArnLike
IpAddress

### Condition Keys
AWS:SourceAccount
aws:SourceVpc
AWS:SourceArn
aws:SourceIp

```
