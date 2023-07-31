# Directory Service

- fully managed Microsoft Active Directory: use existing Microsoft Active Directory or Lightweight Directory Access Protocol (LDAP)-aware applications in the cloud
- provides directories that contain information about your organization, including users, groups, computers, and other resources

## my thoughts

## links

- [landing page](https://aws.amazon.com/directoryservice/?did=ap_card&trk=ap_card)
- [managed AD use cases](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_use_cases.html)
- [simple AD tutorial](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/simple_ad_tutorial_create.html)

## best practices

### anti patterns

## features

- securely migrating directory-aware workloads to AWS
- use your existing Microsoft AD credentials to access AWS resources without needing you to synchronize users, groups, or passwords.
- advanced active directory (AD) monitoring, logging, and networking

### pricing

- pay only for the type and size of the managed directory that you use
- is split between Standard and Enterprise

## terms

## basics

### Managed Microsoft AD

- an actual Microsoft Active Directory in the AWS Cloud that supports
  - Active Directory-aware workloads
  - applications and services such as Amazon WorkSpaces and Amazon QuickSight
  - LDAP support for Linux applications.

### AD Connector

- allow your on-premises users to log in to AWS applications and services with their Active Directory credentials
- join Amazon Elastic Compute Cloud (Amazon EC2) instances to your existing Active Directory domain

### Simple AD

- a low-scale, low-cost directory with basic Active Directory compatibility that supports Samba 4–compatible applications
- LDAP compatibility for LDAP-aware applications
- provides a subset of the features that AWS Managed Microsoft AD offer
  - manage user accounts and group membership
  - create and apply group policies
  - securely connect to Amazon EC2 instances
  - Kerberos-based single sign-on.

## considerations

## integrations
