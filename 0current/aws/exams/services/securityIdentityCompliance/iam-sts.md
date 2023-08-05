# IAM Security Token Service (STS)

- generate temporary security credentials for trusted IAM users/roles
- users need the assumeRole permission

## my thoughts

## links

- [landing page](some url)
- [saml: intro](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html)
- [saml: relying party and claims](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml_relying-party.html)
- [saml: roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_saml.html)
- [IdP: creating identity proviers](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create.html)
- [saml: federated access with ABAC](https://aws.amazon.com/blogs/aws/new-for-identity-federation-use-employee-attributes-for-access-control-in-aws/)
- [web identity federation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html)
- [Temporary security credentials in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.htmly)
- [web identity playground](https://aws.amazon.com/blogs/aws/the-aws-web-identity-federation-playground/)
- [assumeRoleWithSAML api](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML.html)

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
  - session/security token: passed to the destination service for it to valdate the request

### AssumeRole

- AssumeRole API provides a user the ability to switch their IAM role such that they have different or increased access only provided by another role
  - This enables you to practice the principle of least privilege.
- can be used within/across accounts
- assumeRole request: check the docs for the parameters available when making the request, its highly configurable
- assumeRole response: contains the creds
  - assumedRoleUser: the ARN of the issued temp creds and the unique identifer of the role ID
  - credentials: contains the access key id, secret, and security/session token
  - packedPolicySize: if this value is greater than 100% the request is rejected

#### naming sessions

- Each IAM role session is uniquely identified by a role session name
- Administrators can rely on the role session name to track user actions when viewing AWS CloudTrail logs
- applying a name to a session depends on the method used to assume a role
  - aws service: AWS sets the role session name on your behalf, generally its the ID of the resource
  - saml-based: when using AssumeRolewithSAML; AWS sets the role session name value to the attribute provided by the identity provider
  - user-defined: the role session name is a required input parameter that you set when making the API request.

#### cross-account delegation

- a trust policy must first exist between the two accounts
  - trusting account owns the resource to be accessed
  - trusted account contains the users who need access to the resource
- create one set of long-term credentials in one account.
  - Then, you use temporary security credentials to access all the other accounts by assuming roles in those accounts.

#### Session Tags

- attributes passed in an IAM role session when you assume a role or federate a user using the AWS CLI or AWS API
  - Session tags are principal tags that you specify while requesting a session.
- use cases
  - access control in IAM policies
  - use SAML attributes for access control in AWS (e.g. for federated users)
  - monitoring: view the principal tags for your session, including its session tags, in the AWS CloudTrail logs.
  - control the tags that can be passed into a subsequent session.
  - define unique permissions based on user attributes without having to create and manage multiple roles and policies
- requirements
  - you must have the sts:TagSession action allowed in your IAM policy
  - must follow the rules for naming tags in IAM and AWS STS
  - New session tags override existing assumed role or federated user tags with the same tag key, regardless of case.
  - cannot pass session tags using the AWS Management Console.
  - valid for only the current session and are not stored in AWS (only in the session)
  - pass a maximum of 50 session tags.

##### Transitive Tags

- tags that persist through multiple sessions
- role chaining: occurs when you use a role to assume a second role through the AWS CLI or API
  - assume one role and then use the temporary credentials to assume another role and continue from session to session
  - tags marked as transitive persist across sessions for each role jump
- use cases
  - impose guardrails against yourself or an administrator in order to prevent something accidental
    - e.g. require an admin role to assume a lesser privileged role; instead of creating a totally new admin role

### AssumeRoleWithSAML

- enable
  - federated access to AWS accounts
  - a separate SAML 2.0-based IdP for each AWS account and use federated user attributes for access control
  - pass user attributes, such as cost center or job role, from your IdPs to AWS, and implement fine-grained access permissions based on these attributes.
- everything from `# AssumeRole` still applies here
- setup process
  - use IAM to create a SAML provider entity in your AWS account that represents your identity provider.
  - create an IAM role that specifies this SAML provider in its trust policy.
  - configure your SAML IdP to issue the claims that AWS requires
  - you/apps can now call AssumeRoleWithSAML
- saml request: check the docs for how to make the API call and which params are required/optional
- saml response:
  - assumedRoleUser
  - credentials: access key id, secret, and session token
  - audience
  - subject type
  - packed policy size
  - name qualifier

### AssumeRoleWithWebIdentity

- logical workflow (e.g. with Cognito as identity provider)
  - user starts the app on their mobile device, the app asks the user to sign in and authenticate with Amazon
  - The app uses Amazon Cognito API operations to exchange the Amazon ID token for an Amazon Cognito token.
    - Amazon Cognito makes the exchange and requests temporary security credentials from AWS STS with the AssumeRoleWithWebIdentity API, passing the Amazon Cognito token for the temporary credentials
    - The role associated with the temporary security credentials and its assigned policy determine what can be accessed.
- setup proces
  - you must have an identity token from a supported identity provider and create a role that the application can assume
  - the identity provider must be specified in the role's trust policy.
  - your application can now call AssumeRoleWithWebIdentity
    - does not require the use of AWS security credentials.
    - you can distribute an application that requests temporary security credentials without including long-term AWS credentials in the application
- web identity request: check the doc for the optional & required params
- web identity response: pretty much identitial to SAML respons

## considerations

## integrations
