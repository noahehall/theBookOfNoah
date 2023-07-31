# CodeDeploy

- automated deployments to a compute services like ec2, fargate, lambda, or on premise

## links

- [appspec ref](https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html#appspec-reference-server)
- [security](https://docs.aws.amazon.com/codedeploy/latest/userguide/security.html)
- [deployment configurations](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html)
- [lambda: safe deployments](https://aws.amazon.com/blogs/compute/implementing-safe-aws-lambda-deployments-with-aws-codedeploy/)
- [rollback and redeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html)

## best practices

### anti patterns

## features

- deploy server, serverless or container applications
- deploy to any AWS compute platforms
- concurrent deploy to one/more instances
- each deploy can update existing, or provision new environments
- configure traffic-shifts from older to newer versions
- automatic/manual rollbacks for unsuccessful deployments

### pricing

## terms

## basics

- setup an application: specifies which files to copy, scripts to run and where to deploy
  - code: configuration specified in an appspec file in the root of the repo
  - deployment group: specifies the deployment target environment
    - a single application can have one/more deployment groups
  - deployment configuration: set of deployment rules and success/failure conditions

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
