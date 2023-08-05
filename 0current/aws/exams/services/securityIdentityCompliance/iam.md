# Identity and Access Management (IAM)

- centralize privilege management using the principle of least privilege, separation of duties and temporary credentials
- authnz for:
  - IAM users and groups: humans logging into an account and signing API calls
  - IAM roles: assumed by an entity (humans/machines) for temporary access to AWS credentials

## my thoughts

- everything starts and ends with IAM

## links

- [security credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/security-creds.html)
- [faqs](https://aws.amazon.com/iam/faqs/?da=sec&sec=prep)

### user guide

- [AAA: getting started](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html)
- [AAAA policy reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html)
- [AAAA security best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [apigateway: authnz workflow](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-authorization-flow.html)
- [apigateway: identity-based policy examples](https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_id-based-policy-examples.html)
- [apigateway: resource policies](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies.html)
- [authnz for resources](https://docs.aws.amazon.com/en_us/IAM/latest/UserGuide/access.html)
- [dynamodb: intro](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/UsingIAMWithDDB.html)
- [ec2: iam roles](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html)
- [enabling mfa](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html)
- [identities: users groups and roles](https://docs.aws.amazon.com/en_us/IAM/latest/UserGuide/id.html)
- [intro to IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html)
- [signing aws api requests (sig v4)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
- [mfa](https://aws.amazon.com/iam/details/mfa/)
- [groups and jobs functions](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions.html)
- [ABAC via tags tutorial](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html)
- [testing iam policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html)
- [access history: tightenting s3 permissions](https://aws.amazon.com/blogs/security/tighten-s3-permissions-iam-users-and-roles-using-access-history-s3-actions/)
- [access history: finding unused credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_finding-unused.html)
- [ecs: task roles](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html)
- [identities: roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)
- [identities](https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html)

### API

- [root user only tasks](https://docs.aws.amazon.com/accounts/latest/reference/root-user-tasks.html)
- [lambda: resource based policies](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html)

### tools

- [iam policy simulator](https://policysim.aws.amazon.com/)

## best practices

- use the fkn policy simulator, it should be your best friend
- resource policies are easier to grant/deny access across services/accounts, but have size limits
  - iam roles are a bit more verbose but dont have limits
- users
  - protect the root user at all costs
    - create an admin user instead
  - always enable multi factor auth
- groups
  - always assign users to groups, and attach policies to groups (and not directly to users)
  - should reflect organizational role, not technical commonality
- policies
  - always follow principle of least privilege for users and roles
  - generally the managed policies are always too lenient
- roles
  - use both RBAC and ABAC at the same time if using IAM roles for access control.
- organizations that spans multiple AWS accounts;
  - manage access to all the AWS accounts centrally via identity federation because users and groups are not scalable.
  - Using roles and cross-account access
    - define user identities in one account and use those identities to access AWS resources in other accounts that belong to your organization.

### anti patterns

## features

- Set and manage guardrails and fine-grained access controls for your workforce and workloads.
- Manage identities across single AWS accounts or centrally connect identities to multiple AWS accounts.
- Grant temporary security credentials for workloads that access your AWS resources.
- analyze access to right-size permissions on the journey to least privilege.

## pricing

## basics

### users & groups

- for managing access to resources within your account
- root user: the initial user on the aws account
- groups are collections of users; specify permissions for similar types of users
- characteristics
  - static credentials
  - dont expire by default but you should definitely set requiremnets for periodic rotation

#### Federated Identities

- a system of trust between two parties for the purpose of authenticating users and conveying information needed to authorize their access to resources
- identity provider: (IdP) is responsible for user authentication
- service provider: such as a service or an application, controls access to resources
- logical workflow
  - a trust relationship is configured between an IdP and a service provider
    - the service provider relies on the IdP for authentication and user information for authorization
  - after authenticating a user, the IdP returns an `assertion` containing the users data
  - the service provider uses the assertion data for creating a session and determining the scope of authorization within its service boundary
    - the service provider provides the user with credentials
- federation protocols
  - SAML 2.0: Security Assertion Markup Language
  - OIDC: OpenID Connect
  - OAuth 2.0:

##### corporate identity federation

- workforce federation: employees, contractors and partners
- generally relies on SAML and STS AssumeRoleWithSAML

##### web identity federation

- end user federation: customer facing web/mobile applications
- generally relies on OIDC/OAuth and STS AssumeRoleWithWebIdentity
- web identity providers supported by AWS include Amazon Cognito, Login with Amazon, Facebook, Google, or any OpenID Connect-compatible identity provider.

### roles

- check the [iam STS file](./iam-sts.md)
- delegate access to users, applications, or services
- endow an entity with temporary credentials to perform some function
  - users and groups
  - machines: for service-to-service authnz
  - federated users: external identity providers
    - SAML 2.0 federation
    - web identity
  - custom trust policy
- characteristics
  - the entity that assumes the role will lose its original privileges and gain the access associated with the role
  - no static credentials: must be progrogrammatical requested
  - credentials are always temporary for the requested amount of time
- execution role: enables a service to assume some role with some predefined behavior for interacting with other services
  - determines what service A can do within a service boundary
- service roles: iam roles that can be assumed by an AWS service
  - must include a trust policy

### authentication schemes

- uname & pword: for accessing the console
  - define a password policy to enforce strong passwords and to require password rotation
- access keys: for programmatic access; caccess key ID and a secret key; Each user can have two active access keys
  - cli access
  - local code in a dev env to access AWS account
  - apps running on compute services
  - third-party services to access the aws account
  - direct http calls using APIs for individual services
  - apps run outside of AWS
- mfa: via soft/hardware; requires an additional input to validate a login attempt
  - something you know: e.g. a pin number
  - something you have: e.g. a onetime code from an app/device
    - virtual MFA: softare
    - hardware TOTP token
    - FIDO security keys
  - something you are: e.g. fingerprint or piece of your soul

#### request signatures

- signing a request enables AWS to authenticate your identity
- users and groups use the credentials associated with their acounts
- machines (e.g. any of your aws services) must assume a predefined role and sign requests with temporary credentials

### policies

- set of permissions that grant/deny users, groups and roles to invoke resource actions
  - anything not explicitly granted is denied by default
- request context: what is being authenticated and authorized by IAM
  - principal: subject that sends the request and the policies associated with that principal
    - aws accounts: delegate authority to the account; the permission policies can be scoped to specific account identities
    - iam users:
    - federated users:
    - iam roles:
    - aws services:
  - actions: verb; What the principal is attempting to do
    - via console its known as an ACTION
    - via cli/sdk its known as an OPERATION
  - resource: object; AWS resource object upon which the actions or operations are performed
  - authorization context: an array of key values that scope principal, actions and resources
    - this is environment in which the request is being made, contains bunches of things
- policy evaluation order
  - IAM authenticates the principal
  - IAM validates the principal is authorized to perform the action by checking all attached identity-based permissions
    - validates the requested actions are allowed
  - IAM validates resource-based policies attached to the resource
    - trumps identity based policies
  - IAM evaluates allow/deny rules
    - deny by default if no explicit allow/deny
    - allow if explicitly allowed and no explicit denial
      - a permissions boundary, AWS Organizations SCP, or session policy can implicitly deny any explicit allows
    - deny if explicitly denied
- the six policy categories can have the following flavors
  - IAM role trust policy
    - controls which principals in other accounts can access resources
    - resource-based policies that are attached to a role that define which principals can assume the role
  - inline policy
    - strict one-to-one relationship between a service and principal
    - embedded directly into a single user, group or role
    - not recommended
  - AWS Managed Policies
    - default policies created and managed by AWS
    - recommended for new users
  - Customer Managed Policies
    - user created and enables precise control over permissions applied to entities
    - should be preferred over Managed policies
- internal vs external accounts
  - within an account: you need a service control policy AND an IAM policy OR a resource-based policy
  - Across accounts: you need a service control policy AND an IAM policy AND a resource-based policy.

#### Grants

- primarily used to grant access

##### Identity-Based Policy

- policies attached to an Identiy
- identity: user, group or role

##### resource-based policies

- inline policies that are attached to AWS resources to grant/deny access to an Identity/account
- determines who is allowed into a service boundary
- trump identity based policies
- the principal policy element is required

##### Access Control Lists (ACLs)

- control which principals in other accounts can access the S3 bucket/objects to which the ACL is attached
  - cross-account permissions policies that grant permissions to the specified principal
  - ACLs cannot grant permissions to entities within the same account.
- similar to resource-based policies although they are the only policy type that does not use the JSON policy document structure

#### Guardrails

- primarily used to restrict access

##### IAM Permissions Boundaries

- sets the maximum permissions that an identity-based policy can grant to an IAM identity

##### AWS Organizations Service Control Policies (SCPs)

- specify the maximum permissions for an account, or a group of accounts, called an organizational unit (OU).
- restricts permissions for entities the an account, including the root user
- If you enable all features in an organization, then you can apply SCPs to any or all of your accounts

##### Session Policies

- inline permissions policy that creates a session policy when assuming a role
  - by default: all users assuming the same role get the same permissions for their role session
  - this allows you to create distinctive role session permissions or to further restrict overall permissions
    - Restricts/limits permissions for assumed roles and federated users
    - Reduce the number of roles they need to create because multiple users can assume the same role yet have unique session permissions.
    - Set permissions for users to perform only those specific actions for that session
- any of the three AssumeRole APIs can be used to pass the session policies.
- with identity-based policies
  - the effective permissions are the intersection of the IAM entity's identity-based policy and the session policies
- with resource-based policies:
  - specify the ARN of the user or role as a principal
  - The session policy limits the total permissions granted by the resource-based policy and the identity-based policy
  - The effective permissions are the intersection of the session policies and either the resource-based policy or the identity-based policy.

#### policy simulator

- test and troubleshoot identity-based policies, IAM permissions boundaries, AWS Organizations service control policies, and resource-based policies
  - evaluates the policies that you choose and determines the effective permissions for each of the actions that you specify
- does not make an actual AWS service request, so no charges are occurred
  - merely tests if the request would be accepted/rejected
- use cases
  - Test policies that are attached to IAM users, groups, or roles in your AWS account
    - test which actions are allowed or denied by the selected policies for specific resources.
  - Test and troubleshoot the effect of permissions boundaries on IAM entities one permissions boundary at a time.
  - Test policies that are attached to AWS resources, such as Amazon S3 buckets, Amazon Simple Queue Service (Amazon SQS) queues, Amazon Simple Notification Service (Amazon SNS) topics, or Amazon S3 Glacier vaults.
  - Test the impact of SCPs on your IAM policies and resource policies if your AWS account is a member of an organization in AWS Organizations.
  - Simulate real-world scenarios by providing context keys, such as an IP address or date, that are included in Condition elements in the policies being tested.
  - Identify which specific statement in a policy results in allowing or denying access to a particular resource or action.

### Access Points

- every action taken against an AWS account occurs through an API endpoint
- this allows for comprehensive monitoring and control of in/outbound network traffic
- No matter the means used to access AWS
  - each API request is authenticated and authorized via IAM
  - recorded by AWS CloudTrail as it crosses the AWS API interface
  - All of the API endpoints support HTTPS and use TLS encryption

### Access Control

#### Tags

- Tags enable customizable key-value pairs, such as a project name or an environment type, to identify IAM principals and AWS resources.

#### RBAC

- implemented by creating policies for each job function.
- Identities such as IAM users, groups of users, or an application can assume these policies via roles

#### ABAC

- implemented via tags attached to users, roles and resources
- policies can be designed to allow operations when the principal's tag matches the resource tag

### Access History

- view last accessed information for entities or policies that exist in IAM or AWS Organizations.
- IAM provides last accessed information to help you:
  - identify unused permissions
  - refine your policies
  - allow access to only the services and actions that your IAM entities use
- last access information types
  - allowed AWS service information
  - allowed action information
- last access information by resource
  - user: last time that the user tried to access each allowed service.
  - group: last time that a group member attempted to access each allowed service.
    - This report also includes the total number of members that attempted access.
  - Role: last time that someone used the role in an attempt to access each allowed service.
  - Policy: last time that a user or role attempted to access each allowed service.
    - This report also includes the total number of entities that attempted access.

#### Access Advisor tab

- in console: IAM dashboard > iam resource > resource > Access Advisor
  - can also be access via cli/sdk
- considerations
  - tracking period: data appears within 4 hours, and kept for 400 days
  - PassRole: iam:PassRole action is not tracked and is not included in IAM service last accessed information.
  - report owner: Only the principal that generates a report can view the report details
    - when using the cli/sdk, you must use the report principals' creds
    - If you use temporary credentials for a role or federated user, you must generate and retrieve the report during the same session.
  - Entities:
    - IAM: includes IAM entities users or roles in your account
    - organizations: includes IAM users, IAM roles, or the AWS account root user in the specified Organizations entity
    - does not include unauthenticated attempts.
  - IAM Policy types: includes services that are allowed by an IAM entity's policies
    - policies either attached to a role or attached to a user directly or through a group
      - Access allowed by other policy types is not included in your report
      - not included: resource-based policies, access control lists, AWS Organizations SCPs, IAM permissions boundaries, and session policies.
  - required permissions: are different when accessed via cli & console
- use cases
  - reducing permissions for user/groups: see what they've accessed, and restrict their actions
  - deleting IAM resources: ensuring a time has passed since the last access before deleting
  - editing/detaching policies: see which users are using which policies before modifying

## integrations

- basically every other AWS service uses IAM for authNZ

### cli

- [see markdown](../devtools/cli.md)
  - everything from named profiles, sso, etc

### lambda

- execution roles
  - AWSLambdaVPCAccessExecutionRole

### api gateway

- IAM policy API permissions
  - execute-api: who can invoke the api/refresh the api cache
  - apigateway: who can manage/create/deploy the api
- resource syntax: `arn:aws:PERM-NAME:REGION:ACCOUNT-ID:API-ID/STAGE-NAME/HTTP-METHOD/API-RESOURCE`

### dynamodb

- authnz at the table, item, or attribute level
- for east/west in the same VPC always use a VPC endpoint for the dynamodb table
  - this prevents traffic from having to treverse the publically routed internet using public addressing

### ecs

- apply roles down to the task level for granular positions
  - assign resourced policies with appropriate permissions to each role
  - Applications are required to sign their AWS API requests with AWS credentials, and this feature provides a strategy to manage credentials for your application’s use
- common roles
  - ecsServiceRole: enables ECS to (de)register container instances from a load balancer whenever tasks are placed on them
- permission tiers
  - fargate
    - cluster permissions: control who can launch/describe tasks in a cluster
    - application permissions: enable containers to access AWS resources
    - task housekeeping permissions: ecr image pull, cloudwatch logs push, eni creation, (de)register targets into elastic load balancing, etc
      - execution role: ECR image pull, pushing cloudwatch logs
      - ecs service linked role: ENI management, ELB target (de)registration

### secrets manager

- apply resource policies directly to individual secrets defining who can access and what they can do
- alternatively apply roles to resources giving them access to specific secrets

### s3

- IAM policies attached to users/groups/roles for authnz of s3 resources

### RDS

- assign permissions to determine who can manage RDS resources
  - e.g. create, describe, modify and delete db instances, tag resources, modify security groups

### eks

- deploying new eks clusters requires at least 3 permissions
  - cluster iam role: eks permissions to make calls to AWS apis on your behalf for cluster management
    - e.g. managing ec2 auto scaling for worker nodes
    - aws provides an IAM policy with the recommended permissions for this role
  - node iam role: the kubelete daemon on eks worker nodes makes calls to aws apis on your behalf
    - e.g. pulling container images from ECR
  - rbac user: humans that manage the k8s cluster need permission to make calls to the k8s api
    - you map an IAM role to a k8s RBAC user
      - create additional principal sin IAM that map to restrict roles in rbac for specific mgmt tasks
    - the role used to create the clsuter will always have sudo access
      - you should instead create a specific role just for deploying clusters

### Ec2

- Amazon EC2 instance profiles provide credentials to EC2 instances.
  - works similarly to IAM roles for ECS tasks
