# cloudtrail

- helps audit applications by recording all API actions made against the application
- logs can be exported to the analysis tool of your choice

## links

- [cloudtrail event history](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events.html)
- [cloudtrail intro](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)

## best practices

- useful for auditing serverless deployments and rolling back unplanned deployments

### anti patterns

## features

- create a trail for captured events and store in s3

### pricing

## terms

## basics

## considerations

## integrations

### lambda

- the default logging: is for control plane (mgmt) events
- optional logging: can turn on data event logging for tracking every time lambda fns are invoked

### api gateway

- captures all api calls as events whether originating from console / code
