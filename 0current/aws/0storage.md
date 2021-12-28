<https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-incident-response.html>
top of page, then just keep fkn clicking next at the bottom
^ this shit iz massive

# TLDR

s3, ebs elastic block storage, efs elastic file system, amazon FSx

## links

- [host a static website in under 20 minutes](https://www.youtube.com/watch?v=5qS3DzSn5Z4)
- s3 tools
  - [storage inventory](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-inventory.html)
  - [s3 node sdk](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html)
  - [access (i.e. permissions) analyzer for s3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-analyzer.html)
  - [analytics and inisghts to optmize storage usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/analytics-insights.html)
- tuts

  - [managing storage lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)
  - [making requests](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MakingRequests.html)
  - [s3 getting started](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html)
    - [setting up s3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-up-s3.html)
    - [create your first bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html)
    - [upload an object to bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/uploading-an-object-bucket.html)
    - [download an object](https://docs.aws.amazon.com/AmazonS3/latest/userguide/accessing-an-object.html)
    - [copy object to a folder](https://docs.aws.amazon.com/AmazonS3/latest/userguide/copying-an-object.html)
    - [delete objects and bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/deleting-object-bucket.html)
    - [access control best practices](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-best-practices.html)
  - [hosting a static website using s3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
  - [s3 policy condition key examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html)
  - [controlling access from VPC endpoints with bucket policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies-vpc-endpoint.html)
  - [bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html)
  - [user policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/walkthrough1.html)
    - [example user policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-policies-s3.html)
  - [example walkthroughs: mamaging access to s3 resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-walkthroughs-managing-access.html)
    - [bucket owner grants its users bucket permissions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-walkthroughs-managing-access-example1.html)
    - [grant cross account bucket permissions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-walkthroughs-managing-access-example2.html)
    - [bucket owner grants permissions to objects it does not own](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-walkthroughs-managing-access-example3.html)
    - [bucket owner grants cross account permissions to objects it doesnt own](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-walkthroughs-managing-access-example4.html)
  - [controlling object ownership](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html)
  - [verifying bucket ownership with owner condition](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-owner-condition.html)
  - [logging and monitoring](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-incident-response.html)
    - [ogging rquests using server access logging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html)
  - [set the versioning state of an existing bucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html)

- s3 glacier

  - [s3 glacier developer guide](https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html)
  - [restore an object in glacier back into s3](https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html)

- s3 storage lens

  - [using service-linked roles](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-service-linked-roles.html)

- reference
  - [monitor costs overview](https://docs.aws.amazon.com/AmazonS3/latest/userguide/monitoring-overview.html)
  - [pricing](https://aws.amazon.com/s3/pricing/?nc=sn&loc=4)
  - [s3 object overview](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingObjects.html)
  - [acl overview](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html)
  - [managing data acess with s3 access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html)
  - [blocking public access to s3 storage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html)
    - [configuring block public access settings for your account](https://docs.aws.amazon.com/AmazonS3/latest/userguide/configuring-block-public-access-account.html)
  - [IAM for s3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html)
  - [using bucket policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html)
  - [managing access with acls](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acls.html)
    - [read these before using ACLs with s3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-alternatives-guidelines.html)
  - [policies and permissions in s3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-language-overview.html)
    - [the complete actions, resources and conditions for s3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/list_amazons3.html)
    - [resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html)
    - [actions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html)
    - [effect](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_effect.html)
    - [principal](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-bucket-user-policy-specifying-principal-intro.html)
    - [conditions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html)
    - [using cors](https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html)
      - [cors ocnfiguration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManageCorsUsing.html)
      - [configuring cors](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html)
      - [troubleshooting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors-troubleshooting.html)

## basics

### terminology

- bucket: a container for objects
- object: a file + metadata; the bucket must already be created

### use cases

- static website hosting
- backup and storage: manage costs, meet regulatory requirements, reduce latency and save multiple distinct copies of data for compliance requirements
- application hosting: dpeloy, install and manage web applications
- media hosting: video, photo, music uploads/downloads
- software delivery: host apps for download

### costs

- you are not charged for

  - creating buckets
  - using Access Analyzer for s3
    - you need to create an account-level analyzer in IAM Access Analyzer on a per-region bases

- you are charged for

  - objects in buckets
  - more info: go to the s3 pricing (see link above)
    - ensure you tab through each cost type
      - storage
      - requests & data retrievals
      - data transfer
      - management & analytics
      - replication
      - s3 object lambda

- storage classes
  - s3 (simple storage): regular storage for frequent read/writes
  - s3 glacier: durable low-cost storage for infrequenlty used data
    - includes data archiving & backup

### best practices

- ALWAYS
  - use an IAM user to make authenticated requests (i.e. never the root user)
- SOMETIMES
  - prevent objects from being modified by the `anonymouse user`
    - do not implement bucket policiess that allow anonymouse public writes to buckets
    - do not use ACLs that allow `anonymouse user` write access
    - i.e. use the `S3 Block Public Access`
- NEVER
  - TBD

## s3 model & workflow architecture

- bucket & object: flat hierarchy

  - bucket names must be globally unique across ALL AWS Accounts
  - hierarchy
    - buckets half a flat structure
    - there is no hierarchy of subbuckets/subfolders
      - emulate folders by using the object (key) name
        - the s3 api supports prefixes (i.e. folder names) and delimiters (i.e. `/`)
          - an object whose key ends in `/` is considered a folder
      - the API uses object keys to infer a logical hierarchy

- ARN: can be found in the bucket policy/CORS configuration permissions pages
- important policy permission actions

  - any `Deny` statement always supersedes any `Allow` permission
  - `s3:CreateBucket`
  - `s3:DeleteObject`
  - `s3:GetBucketLocation`
  - `s3:GetObject`
  - `s3:ListAllMyBuckets`
  - `s3:ListBucket`
  - `s3:PutObject`
  - `s3:GetObjectVersion`
  - `s3:GetBucketAcl`
  - `s3:GetAccountPublicAccessBlock`
  - To explicitly block users or accounts from deleting objects, you must explicitly deny them
    - `s3:DeleteObject`
    - `s3:DeleteObjectVersion`
    - `s3:PutLifecycleConfiguration`

- buckets: container of objects and other subresources

  - lifecycle: stores lifecycle configuration information
  - website: stores website configuration information if configured for website hosting
  - versioning: stores versioning configuration
  - policy and acl (access control list): stores access permission information for the bucket
  - cors (cross-origin resource sharing): store access permission information for the bucket
  - object ownership: enables bucket owner to take owenrship of new objects in the bucket, regarldess ofwho uploads them
  - logging: amazon can save bucket access logs (if requested)

- objects: files stored in buckets

  - acl: list of access permissions on the object
  - restore: supports temporarily restoring an archived object
    - an object in s3 glacier storage class is an archived object

- understanding bucket & object ownership

  - the aws account used to create buckets & update objects
  - the IAM user/role credentials, the AWS account the user/role belongs to
  - if granted, then cross-account permissions to another AWS account (or users in that account) to upload objects, then the uploading account has all permissions except:
    - the bucker owner pays the bills, and can deny access/delete any objects (regardless who owns them)
    - the bucket owner can archive/restore (i.e. s3 glacier) (regardless who owns them)
  - if the bucket permits unauthenticated request, then objects are owned by the `anonymouse user`

- understanding ownerhsip and request authentication
  - all requests are either authenticated or unauthenticated
    - authenticated: include a signature value that authentiates the request sender
    - unauthenticated: all other requests, and are always made by the `anonymouse user`
      - permitted when a bucket has:
        - public bucket policy
        - bucket ACL grants `WRITE|FULL_CONTROL` to `All Users` group or `anonymous user` specifically

### workflows

- static website hosting
  - very useful if you setup route 53 alias record set (that points to the s3 bucket)
  - steps
    - verify s3 object permissions
      - appropriate flies should be publicly available
    - verify bucket permissions
    - configure route53 alias record

### CRUD

- prereqs

  - create & sign in as an IAM user (not the root account)

- CREATING
  - create a bucket
    - console UI (after clicking bucket name)
      - objects: files stored in buckets
      - properties: provides bucket overview
        - e.g. region, ARN, creation date, static website hosting and other bucket level settings
      - permissions: Allow/Deny public access, bucket policy
      - metrics
      - management:
        - life cycle rules: define actions to take during an objects lifetime
          - e.g. transition objects to another storage class, archiving them, or deleting after a specific time
        - replication rules:
        - inventory configurations: generate a flat file list of objects & metadata
          - i.e. create scheduled reports including all object in the bucket/limited to a shared prefix
      - access points: manage data access at scale for shared datasets in s3
        - i.e. named network endpoints that are attached to buckets
          - you can use them to perform s3 object operations
  - copy an object to the bucket
  - the destination folder structured as `s3://bucket-name/some/folder/path`
- READING
  - download
- UPDATING
  - versioning
- DELETING
  - deleting an object
  - emptying a bucket
    - this cannot be undone
  - deleting a bucket
    - cannot be undone

### controll access

- TLDR

  - permission delegation
    - if an AWS account owns a resource
      - can grant those permissions to another AWS account
      - that account can then delegate all/subset of those permissions to users in its account
      - cannot delegat those permissions to users/groups outside of its account
  - when to use & limitations
    - a bucket policy: max 20kb
      - if the AWS that owns the object also owns the bucket
      - if an AWS account that owns a bucket wants to grant permission to
        - users/groups in its account
          - but generally you should use user-policies for this, unless you have too many users & groups and need to apply it more broadly
        - cross-accont permissions to other AWS accounts
        - cross-account permissions to users/groups in another account
    - a user policy
      - if the AWS account that owns the object wants to grant permission to:
        - users/groups in its account
          - must have permissions from the parent acocunt to which the user/group belongs
            - i.e. attaching a user policy
          - permissions from the AWS account that owns the rsource the user wants to access
    - an Object ACL: maximum 100 grants
      - objects are not owned by the bucket owner (thus they cannot create policies/grant permissions for them)
      - need to manage permissoins at the object level/permissions vary by object
      - object ACLs control only object-level permissions
        - i.e. create a single bucket policy for the entire bucket & object ACLs are specified per object
      - grant write permission to the Amazon S3 `Log Delivery` group to write acess log object to the object

- use the Access Analyzer for s3 to review all buckets that have any access control mechanism attached to it
  - alerts you to buckets that are configured to allow anonymouse access/other accounts
  - deny all access to buckets
  - drill down into bucket-level permission settings to configure granular levels of access
  - download results as a CSV for auditing purposes
- by default, all buckets and object are private
  - you decide who is getting the permissions, to which s3 resources, and the specific actions to allow on those resources
- grant granular resource permissions via either/combination of resource-based & user-based policies
  - resource-based policies: access policies attached to resources (buckets and objects)
    - policies: a JSON file
      - bucket policy: grant other AWS accounts/IAM users permissions for the bucket and the objects in it
        - object permissions apply only to the objects that the bucket owner creates
        - generaly bucket policies supplement/replace ACL-based access policies
    - ACLs: an XML document
      - bucket ACL
      - object ACL
  - user-based policies: policies attached to users in your acocunt
  - s3 block public access: enable/disable public access
  - AWS IAM: provide access to specific users in your account
  - bucket policies

## ebs

- elastic block storage
  - block level storage volumes directly attached to an ec2 instance
    - its like adding an extra harddrive to your laptop
  - raw unformated storage volumes (i.e. no file system)
  - ec2 can have multiple volumes, but only one volume can be attached to one instance
    - many to one
    - volume & instance must be in the same AZ
  - can persist beyond the life of the ec2

### ebs considerations

- size
- volume type
- IOPS
- throughput
- encryption
- snapshots
  - useful for creating AMIs

## efs elastic file system

- networked file system for linux machines
- enables thousands of EC2 instances can concurrently accesss the same file system

## amazon FSx

- networked file system for windows machines/high performance workloads with using the luster filer system

-
