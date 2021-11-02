
# TLDR

- todo
  - <https://aws.amazon.com/tools/>
  - supported compliance standards: <http://aws.amazon.com/compliance/>

things that generally apply to all services

- lot of things about IAM in here, move it into the IAM file

## links

- [aws docs index](https://docs.aws.amazon.com/index.html)
  - also probably the best overview of all services
- [AWS glossary](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html)
  - the ultimate in ctrl+f
- [amazon reosurce names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)
- [IAM json policy elements](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_resource.html)
- [available AWS condition keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html)
- [enabling access anlyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#access-analyzer-enabling)
  - [access analyzer APIs](https://docs.aws.amazon.com/access-analyzer/latest/APIReference/Welcome.html)
- tools
  - [get your public IP](https://checkip.amazonaws.com/)

## terminology

- region: a name set of AWS resources in the same geogrpahical area: contains at least 2 availability zones
- availability zone: distinct location within a region thats insulated from failures in other availability zones
- canonical ID: identifies a specific user/account/resource across all of AWS
  - anonymouse user: 65a011a29cdf8ec533ec3d1ccaae921c
- groups
- CORS: JSON configuration defines a way for servers from domain X to interact with resources on domain Y

- ARN: amazon resource name
  - can use wildcards as part of the resource ARN
    - `*` represents any combination of zero/more characers
    - `?` represents any single character
  - can use predefined policy variables
    - at policy evaluation time, the variables are replaced by their corresponding values
      - e.g. to organize the bucket as a collection of folders, one folder for each of your users `arn:aws:s3:::bucket_name/developers/${aws:username}/`
  - examples
    - a specific object in a bucket`arn:aws:s3:::examplebucket/developers/design_info.doc`
    - any object in the bucket `arn:aws:s3:::examplebucket/*`
    - any object in any bucket matching exampleXbucket `arn:aws:s3:::example?bucket/*`
    - all s3 resources `arn:aws:s3:::*`
  - has the following syntax across all AWS services regoin specific services: `arn:partition:service:region:namespace:relative-id`
    - partition: `aws` or `aws-cn` for china (Beijing) region
    - service: e.g. s3
    - region:
    - namespace:
    - relative ID: e.g. `bucket-name` or `bucket-name/object-key`
  - has the following syntax across all global services
    - `arn:partition:service:::relative-id`
      - notice the region & namespace are missing

- region
- tags
  - to ensure tags are shown in dashboard columns, they must be case-sensitive
    - i.e. `Name` [dashboard] !== `name` [tag]
- encryption
- user policies:  use IAM to manage access to resources on AWS,
  - i.e. create IAM users, groups and roles and attach access policies to them to grant access to resources
    - everyone is denied by default
  - cannot grant anonymous permissions to users, as you have to attach policies to a specific user/group/etc
- resource policies: JSON object defining basic access permissions
- ACL: access control list:  ACLs predates resource-based policies and IAM
  - list of grants identifying grantee and permission granted

- resource: an entity tha tyou can work with (e.g. an s3 bucket, or an s3 bucket object)
- resource > subresource: child of a reosurce
- resource owner: by default its the AWS account that creates the resource, but can be changed via resource/user based policies (e.g. to be the IAM user and not hte account owner)

- policy JSON schema
  - version: e.g. "2012-10-17"
  - Statement: array of object permissions
    - Sid: the statement ID, can be anything?
    - Effect: Allow|Deny
      - denied by default, you must specific specify `Allow`
    - Principal: specifies the user, account, service, or other entity that is allowed/denied access to a resource
      - anonymouse user `"*"`
        - or to match the normal syntax `{"AWS":"*"}`
      - single AWS account `{"AWS":"arn:aws:iam::AccountNumber-WithoutHyphens:root"}`
        - using canonical ID`{"CanonicalUser":"64-digit-alphanumeric-value"}`
      - multiple AWS accounts `{"AWS":["arn:aws:iam::AccountNumber1-WithoutHyphens:root","arn:aws:iam::AccountNumber2-WithoutHyphens:root"]}`
      - a specific user `{"AWS":"arn:aws:iam::account-number-without-hyphens:user/username"}`
      - anyone accessing via cloudfront URL `{"CanonicalUser":"Amazon S3 Canonical User ID assigned to origin access identity"}`
    - Action: array of actions related to the affect,
      - e.g. array of specific actions `["s3:GetObject", "s3:PutObject"]`
      - e.g. all actions on the `"*"
      - for each resource type, amazon supports a set of operations;
      - each action is a keyword that maps directly to an aws service operation
    - Resource: array of ARNs to apply the statement to
      - e.g. buckets, objects, access points, jobs, etc
    - Condition: to specify conditions for when a policy is in affect
      - can use predefined AWS‐wide/service specific keys
      - specified as expressions with boolean operators
        - i.e. { booleanOperator: { permission: "value"}}
        - e.g. { StringEquals: { "conditionkey": "id=some-account-or-user"}}
          - grants the permission, if conditionKey === value
          - usually the conditionKey & value are specified in the header of the request
