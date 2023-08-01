# secrets manager

- organize and management secret data like credentials, passwords and licence keys
- protect access to your applications, services, and IT resources. rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their life cycle.

## my thoughts

- hashi vault

## links

- [landing page](https://aws.amazon.com/secrets-manager/?did=ap_card&trk=ap_card)
- [secrets rotation intro](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html)
- [user guide](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
- [best practices](https://docs.aws.amazon.com/secretsmanager/latest/userguide/best-practices.html)
- [cloudformation: securing passwords](https://aws.amazon.com/blogs/infrastructure-and-automation/securing-passwords-in-aws-quick-starts-using-aws-secrets-manager/)
- [rotating ssh keys](https://aws.amazon.com/blogs/security/how-to-use-aws-secrets-manager-securely-store-rotate-ssh-key-pairs/)
- [securing severless apps](https://aws.amazon.com/blogs/apn/keeping-the-security-and-scalability-of-serverless-apps-problem-free-with-aws-secrets-manager/)

## best practices

### anti patterns

## features

- Securely encrypt and centrally audit secrets such as database credentials and API keys
- Manage access to secrets using fine-grained AWS Identity and Access Management (IAM) and resource-based policies.
- Rotate secrets automatically to meet your security and compliance requirements.
- Replicate secrets to support disaster recovery scenarios and multi-region applications.

### pricing

- pay based on the number of secrets stored and API calls made

## basics

- general workflow
  - add secrets to secrets manager
    - either via console, SDK, or cli
  - optional specify automatic rotation
    - depending on the type of secret, e.g. db creds can use lambda for rotation
  - update your biz logic to request the secrets from SM at runtime
    - these services need to be assigned the correct IAM policy
  - use the SDK to parse and decrypt the response from SM
  - now the app can authN with whatever service that uses those secrets
- secrets manager vs parameter store
  - paramater store: manages configuration data, which may be secret in nature
  - secrets manager: manages the storage and lifecycle of secret data (not general configuration data) for an organization

### secrets

- max size of 4k
- consists of a label and the secret part which is encrypted using KMS
  - thus can only be retrieved via SSL/TLS
- are versioned controlled supporting rollback and recovery
  - manageg via labels
- can be set to expire on demand/schedule

#### permissions

- IAM policies define who/what can access/modify secrets
- you can assign tags to secrets, and policies created based on those tags
  - e.g. dev-role has read access to all secrets labeled dev

```jsonc
{
  "Statement": [
    "Effect": "Allow",
    "Action": "secretsManager:GetSecret",
    "Resource": "*",
    "Condition": {
      "StringEquals": {
        "secretsManager:TagList/SomeTag": "SomeValue"
      }
    }
  ]
}
```

## considerations

## integrations

### databases

- integrated with AWS databases for automatic rotation even tho they are not explicitly listed below
- you first create the database, then you create the secret in secret manager and assign it to a db

### cloudtrail

### cloudwatch

### lambda

- can be used to automatically manage secret rotation
