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

### API

- [root user only tasks](https://docs.aws.amazon.com/accounts/latest/reference/root-user-tasks.html)
- [lambda: resource based policies](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html)

## best practices

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

- organizations that spans multiple AWS accounts;
  - manage access to all the AWS accounts centrally via identity federation because users and groups are not scalable.

### roles

- delegate access to users, applications, or services that normally don't have access to your organization's AWS resources
- endow an entity with temporary credentials to perform some function
  - users and groups
  - machines: for service-to-service authnz
  - federated users: external identity providers
    - SAML 2.0 federation
    - web identity
  - custom trust policy
- characteristics
  - no static credentials: must be progrogrammatical requested
  - credentials are always temporary for the requested amount of time
- execution role: enables a service to assume some role with some predefined behavior for interacting with other services
  - determines what service A can do within a service boundary

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
  - principal: subject; User, role, external user, or application that sends the request and the policies associated with that principal
  - actions: verb; What the principal is attempting to do
  - resource: object; AWS resource object upon which the actions or operations are performed
- policy evaluation process
  - IAM authenticates the principal
  - IAM validates the principal is authorized to perform the action by checking all attached identity-based permissions
    - validates the requested actions are allowed
  - IAM validates resource-based policies attached to the resource
    - trumps identity based policies
  - IAM evaluates allow/deny rules
    - deny by default if no explicit allow/deny
    - allow if explicitly allowed and no explicit denial
    - deny if explicitly denied
- the six policy categories can have the following flavors
  - IAM role trust policy
  - defines what actions a role can take
  - controls which principals in other accounts can access resources
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

#### Identity-Based Policy

- policies attached to an IAM identity and defines their permissions
- IAM evaluates these policies when a principal makes a request

#### resource-based policies

- inline policies that are attached to AWS resources to grant/deny access to a user/account
- determines who is allowed into a service boundary, i.e. grant service A access to service B
- trump identity based policies
- grant permissions to the principal that is specified in the policy; hence, the principal policy element is required.

#### IAM Permissions Boundaries

- sets the maximum permissions that an identity-based policy can grant to an IAM identity

#### AWS Organizations Service Control Policies (SCPs)

- restricts permissions for entities in an account, including the root user

#### Access Control Lists (ACLs)

#### Session Policies

- inline permissions that users which users pass when they assume a role

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
