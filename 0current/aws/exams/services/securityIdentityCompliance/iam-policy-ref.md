# Policy ref

- todos
  - find the pattern, its extremely logical

## links

- [policy reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html)
- [condition: operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html)
- [condition: global keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html)
- [organizations: managed policies example](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_example-scps.html)

## policy syntax

- version: seems to always be `2012-10-17`
- statement
  - effect: allow/deny
  - action: the aws service and a potentially a filtered set of api calls that are allowed/denied
    - `serviceName:*` this specifies all actions (api calls) for this service
    - `serviceName:*blah` anything ending in blah
  - NotAction: should only be used with Deny effects
    - you must still allow actions that you want to allow, but in a separate statement
  - resource: ARN denoting resource(s) this policy covers
    - `resource: "*"` indicates all resources for this service
  - NotResource: should only be used with Deny effects
  - Principal
  - NotPrincipal: should only be used with Deny effects
    - also specify the account ARN of the not denied principal, else risk denying access to the entire account
    - can only be used with trust policies for IAM roles and in resource-based policies
  - conditions: conditions that control when a policy is in effect
    - compare keys in the request context to the key-values in the policy
    - service specific: prefixed with the service id, e.g. `ec2:InstanceType`
    - global: prefixed with `aws:`
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
      "Action": ["dynamodb:PutItem"],
      "Principal": {
        "Service": ["lambda.amazonaws.com"], // this service can assume this role
        "AWS": [
          "arn:aws:iam:account-id:user/MyName" // or this specific user in account-id
        ]
      },
      "Resource": ["arn:aws:dynamodb:us-west-2:###:table/test"], // on these resources
      "Condition": {
        // if these conditions are met apply the Effect
        "someOperator": {
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
apigateway:*
dynamodb:PutItem
execute-api:Invoke
iam:GetUser
logs:Create* # cloudwatch logs: any action starting with Create
sts:AssumeRole # allows the stated principals to assume the rule
sts:AssumeRolewithSAML
sts:AssumeRoleWithWebIdentity
iam:PassRole # can pass role to a service
organizations:{describe*,list*}
kms:{En,De}crypt

## principals: generally its an ARN, can also use the following values
*  # for everyone, and can then be used with other policies
AWS # applies to all resources, and no other policies are taken into account
AWS: 12345 # specific account
AWS: arn:aws:iam:1234 # same as above, but uses an ARN
AWS: arn:aws:iam:::/user/someName # a specific case-sensitive user in an account
AWS: arn:aws:iam::1234:role/roleName
Federated: www.amazon.com # federated web identities
Federated: arn:aws:iam::12345:saml-provider/provider-name # federated saml providers
Service: [elasticmapreduce.amazonaws.com] # i.e. longServiceName.amazonaws.com

### Services: SERVICE_NAME.amazonaws.com
lambda, s3, cloudwatch, cloudformation, dynamodb

## resources: use `aws` for account_id for a resource created/managed by aws
### arn:aws:SERVICE_KEY:REGION:ACCOUNT_ID:RESOURCE_SCOPE

arn:aws:dynamodb:us-west-2::table/test
arn:aws:execute-api:us-east-1:*:account-id/stage/POST/mydemoresource/*
arn:aws:iam:::{policy,role}/abcd
arn:aws:ec2:::instance/abcdefg
arn:aws:logs

## Condition operators: append IfExists to any operator
Arn{Like,Equals}
Bool
Date{Greater,Less}Than
For{Any,All}Value:OTHER_OPERATOR
String{NotEquals,Equals,Like}
NumericLessThan

### Condition Keys
#### global condition keys
# date format: YYYY-MM-DDTHH:MM:SSz
aws:{Current,Epoch,TokenIssue}Time
aws:CalledVia ordered list of services that made requests on behalf of a user
aws:CalledVia{First,Last}
aws:MultiFactorAuth{Present,Age}
aws:Principal{Account,Arn,OrgId,OrgPaths,Type,Tag}
aws:RequestTag #  tag resources with only a specific key-value pair
aws:Requested{Region}
aws:Resource{Tag}
aws:SecureTransport # ensure the request was made via SSL/TLS
aws:Source{Account,Arn,Ip,Vpc,Vpce}
aws:TagKeys # keys without any values
aws:user{id,name}
aws:User{Agent}
aws:ViaAWSService #  control access during a service-to-service call.
aws:VpcSourceIp
IpAddress

#### iam condition keys
iam:PermissionsBoundary # value should be the arn of a specific policy
iam:{AWSServiceName,PolicyARN}
iam:ResourceTag/tagName: someValue
iam:PassedToService # the service to which a role can be passed
iam:AssociatedResourceArn # the ARN of the destination service resource that a role can be associated with

#### sts condition keys
sts:RoleSessionName

#### variables, can be used to match against values in the request context
${aws:SomeKeyFromContext}
```
