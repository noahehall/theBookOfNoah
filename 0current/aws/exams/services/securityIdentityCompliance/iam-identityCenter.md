# Identity Center

- central management of SSO access to multiple AWS accounts and business applications
- successor to single sign-on

## my thoughts

## links

- [landing page](https://aws.amazon.com/iam/identity-center/)
- [getting started](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html)
- [service linked roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role)

## best practices

### anti patterns

## features

- use IAM Identity Center for identities in the Identity Center directory, your existing Microsoft Active Directory, or external IdP.
  - provide workforce single-signon access to cloud apps
  - Built-in integrations with business cloud applications, such as Salesforce, Box, GitHub, and Office 365.
  - Built-in directory for user and group management to serve as an IdP to authenticate users to IAM Identity Center enabled applications, the AWS Management Console, and SAML 2.0 compatible cloud-based applications.
  - assign user perms based on common job functions/user attributes
    - define federated access permissions for your users based on their group memberships
- CloudTrail logs of all sign-in and administrative activities for auditing.
- AWS Access portal for users to sign in with their existing corporate credentials and access all of their assigned accounts and applications from one place.

### pricing

## terms

## basics

- logical workflow
  - enable identity center: open the identity center console and follow the prompts
    - it requires permissions to create service-linked roles with all accounts in your aws organization
  - choose a directory: determines where identity center looks for users and groups that require aws access
    - by default its the AWS Identity Center directory
    - you can connect microsoft active directory, or any other SAML 2.0 IdP
  - grant users in your connected directories access to one/more aws web consoles in specific AWS accounts within your organization
    - access can also be granted to AWS/SAML Applications
  - enable directory users access to the Identity Center User Portal
    - they will see the AWS account icons' they've been given access to and the roles for each account they can use to sign in

### Permission Sets

- a collection of administrator-defined policies that IAM Identity Center uses to determine a user's effective permissions to access a given AWS account
  - used for only AWS accounts & not used to manage access to cloud applications.
  - ultimately get created as IAM roles in a given AWS account, and trust policies allow users to assume the role through IAM Identity Center.
- can contain either AWS-managed policies or custom policies.
- are provisioned to the AWS account as IAM roles and are presented to users as such
  - can assign more than one permission set to a user
  - Users who have multiple permission sets must choose one of the roles when they sign in to the AWS access portal.

## considerations

## integrations

- docs exist to integrate with
  - microsoft azure AD
  - okta universal directory
  - onelogin identities
  - g suite
  - etc etc, all providing user & group synchronization
