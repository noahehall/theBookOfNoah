# CodeDeploy

- automate the process of packaging code & running tests before code is deployed

## links

- [code deploy appspec ref](https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html#appspec-reference-server)

## best practices

### anti patterns

## features

## terms

## basics

## considerations

## integration

### lambda

- codedeploy can be used for automated rollout with traffic shifting, alarms and hooks
- traffic shifting
  - canary: traffic shifted in two increments, if the first increment is successfuly, the second is completed based on the specified deployment type
  - linear: traffic is slowly shifted in a predetermined percentage every X minutes
  - all at once: shifts all traffic from the original lambda fn to the updated lambda fn version at once
- testing options:
  - alarms: cloudwatch monitors the deployments and triggers an alarm if any errors occur during rollout and automatically rollsback the deployment
  - hooks: run pre and post-traffic test functions that run sanity checks before traffic-shifting starts to the new version and after traffic-shifting completes
