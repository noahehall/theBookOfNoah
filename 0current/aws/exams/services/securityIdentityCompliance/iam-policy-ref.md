# Policy ref

- todos
  - find the pattern, its extremely logical

## links

- [condition operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html)

## policy syntax

- version: seems to always be `2012-10-17`
- statement
  - effect: allow/deny
  - action: the aws service and a potentially a filtered set of api calls that are allowed/denied
    - `serviceName:*` this specifies all actions (api calls) for this service
    - `serviceName:*blah` anything ending in blah
  - resource: ARN denoting resource(s) this policy covers
    - `resource: "*"` indicates all resources for this service
  - Principal
  - conditions: conditions that control when a policy is in effect
    - compare keys in the request context to the key-values in the policy
    - service specific: prefixed with the service id, e.g. `ec2:InstanceType`
    - global: are not prefixed ;)~ and apply generally across all services
  - sid: description of the permission

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
### useful examples: check the resource docs for actions as its too long to capture here
sts:AssumeRole # allows the stated principals to assume the rule
dynamodb:PutItem
execute-api:Invoke
apigateway:*
logs:Create* # cloudwatch logs: any action starting with Create
iam:GetUser

## principals: generally its an ARN, can also use the following values
*  # for everyone, and can then be used with other policies
AWS # applies to all resources, and no other policies are taken into account
AWS: 12345 # specific account
AWS: arn:aws:iam:1234 # same as above, but uses an ARN
AWS: [arn:aws:iam:1234:/user/someName] # a specific case-sensitive user(s) in an account
AWS: arn:aws:iam::1234:role/roleName
Federated: www.amazon.com # federated web identities
Federated: arn:aws:iam::12345:saml-provider/provider-name # federated saml providers
Service: [elasticmapreduce.amazonaws.com] # i.e. longServiceName.amazonaws.com

### Services: SERVICE_ID.amazonaws.com
lambda.amazonaws.com
s3.amazonaws.com

## resources: an object that exists within a service
### arn:aws:SERVICE_KEY:REGION:ACCOUNT_ID:RESOURCE_SCOPE

arn:aws:dynamodb:us-west-2::table/test
arn:aws:execute-api:us-east-1:*:account-id/stage/POST/mydemoresource/*
arn:aws:iam:::policy/someName
arn:aws:ec2:::instance/abcdefg
arn:aws:logs

## Conditions
StringNotEquals
StringEquals
ArnLike
IpAddress

### Condition Keys
aws:Principal{Account,Arn}
aws:Source{Account,Arn,Ip,Vpc}
aws:UserID
Bool
Date{Greater,Less}Than
iam:PermissionsBoundary # in the value, point it to the arn of a specific policy

### Condition values: any acceptable JSON value
aws:currentTime: YYYY-MM-DDTHH:MM:SSz # an object
aws:MultiFactorAuthPresent: true/false

#### variables, can be used to match against values in the request context
${aws:SomeKeyFromContext}
```
