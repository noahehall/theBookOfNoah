# IAM Security Token Service (STS)

- generate temporary security credentials for trusted IAM users/roles that can use the assumeRole

## my thoughts

## links

- [landing page](some url)

## best practices

### anti patterns

## features

- you do not have to rotate them or explicitly revoke them when they're no longer needed
  - just wait for them to expire
  - After temporary security credentials expire, they cannot be reused
- provide access to AWS resources without having to define an AWS identity or embed long-term credentials with an application.
- manage your users in an external system outside AWS and grant them access to perform AWS tasks and access your AWS resources
- provide temporary security credentials to ec2 instances when you launch them
- cross-account delegation: provide users access to resources in other aws accounts

### pricing

## basics

- Temporary security credentials are required when assuming an IAM role,
- almost identically to the IAM access key/secret except:
  - can last from a few minutes to several hours
  - not stored with the user but are generated dynamically and provided to the user when requested
  - can request new credentials as long as the user requesting them still has permissions to do so
- global service, and all AWS STS API requests go to a single endpoint at `https://sts.amazonaws.com`
- general workflow
  - user or application requires temporary security credentials to access AWS resources
  - make the AssumeRole API request
  - response includes temporary credentials: an access key ID, a secret access key, and a security session token
  - Each time a role is assumed and a set of temporary security credentials is generated, an IAM role session is created.
- components
  - access key id: identifies the temporary credentials
  - secret: signs api calls
  - session token: passed to the destination service for it to valdate the request

### cross-account delegation

- a trust policy must first exist between the two accounts
  - trusting account owns the resource to be accessed
  - trusted account contains the users who need access to the resource

### IAM AssumeRole action

- AssumeRole API provides a user the ability to switch their IAM role such that they have different or increased access only provided by another role
  - This enables you to practice the principle of least privilege.

## considerations

## integrations
