# CLI

- check the other cli-BLAH files for specifics

## links

### user guide

- [authenticating with short-term credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-short-term.html)
- [authneticating with IAM user credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html)
- [configuration files](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [named profiles](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)
- [sdk: environment variables](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html)
- [sdk: shared config & credentials files](https://docs.aws.amazon.com/sdkref/latest/guide/creds-config-files.html)
- [sso configuration](https://docs.aws.amazon.com/cli/latest/userguide/sso-configure-profile-token.html)

### api

## best practices

- be careful with using the default profile for auth settings when managing multiple accounts
  - instead use it for broad settings applied to all named profiles
- read the docs on named profiles
  - depending on the type of creds (user, role, sso, etc) will determine how you configure the config/credentials file

### anti patterns

## features

## terms

## basics

### named profiles

- profile: named collection of settings

```sh
###### setup your profiles in ~/.aws/{config,credentials}

# config
[default]
region = us-east-1
output = json

# credentials files arent used with SSO
[profile nirvai-dev]
sso_session = my-sso
sso_account_id = 444455556666
sso_role_name = readOnly
region = us-east-1
output = yaml

[profile localstack]
region = us-east-1
output = json
endpoint_url = http://localhost:4566

[sso-session my-sso]
sso_region = us-east-1
sso_start_url = https://my-sso-portal.awsapps.com/start
sso_registration_scopes = sso:account:access

# credentials
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
aws_session_token = IQoJb3JpZ2luX2IQoJb3JpZ2luX2IQoJb3JpZ2luX2IQoJb3JpZ2luX2IQoJb3JpZVERYLONGSTRINGEXAMPLE

[nirvai-dev]

[localstack]
aws_access_key_id=test
aws_secret_access_key=test

```

## APIs

```sh
## general API
# aws SERVICE_NAME CMD PARAMS

```
