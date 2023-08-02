# TLDR

s3, ebs elastic block storage, efs elastic file system, amazon FSx, EBS Snapshot, Data Life cycle Manager, AWS Backup,

## TLDR

### best practices

- runtime persistent storage: consider the usecase, application type, read/write patterns
  - EBS: generally best case for EC2 based apps
  - S3: static, global, shared etc
  - EFS: containerized apps
  - FSx: high perf
  - some DB/keyval store e.g. RDS
- ALWAYS
  - understand your availability requirements in the design phase
  - to minimize data stored on a server always attach an EBS volume to it
    - an EBS volumes survive ec2 instance failure and can be reattched to a new instance
    - however youre still vulnerable to an EBS/AZ failure (use recurring EBS snapshots to mitigate)
- SOMETIMES
  - prevent objects from being modified by the `anonymouse user`
    - do not implement bucket policiess that allow anonymouse public writes to buckets
    - do not use ACLs that allow `anonymouse user` write access
    - i.e. use the `S3 Block Public Access`

## links

- [host a static website in under 20 minutes](https://www.youtube.com/watch?v=5qS3DzSn5Z4)
- [RPO vs RTO strategies](https://www.druva.com/glossary/what-is-a-recovery-point-objective-definition-and-related-faqs/)
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
- ebs
  - [multi-attach](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html)
  - [requires costly azz nitro system](https://aws.amazon.com/marketplace/pp/prodview-37z6ersmwouq2)
  - [ebs pricing](https://aws.amazon.com/ebs/pricing/)
  - [ebs block device names, important for terraform](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html)
- [FSx](https://aws.amazon.com/fsx/)

## basics

### terminology

- bucket: a container for objects
- object: a file + metadata; the bucket must already be created
- recovery time objective: RTO; the amount of real time a business has to restore its processes at an acceptable service level after a disaster to avoid intolerable consequences associated with the disruption
- recovery point objective: RPO; the maximum amount of data – as measured by time – that can be lost after a recovery from a disaster, failure, or comparable event before data loss will exceed what is acceptable to an organization. An RPOs determines the maximum age of the data or files in backup storage needed to be able to meet the objective specified by the RPO

## Snapshots

- a full copy of all data for initial and the changed blocks (unless you change the encryption key) for subsequent snaps of its target
- a snapshot target can be:
  - an attached/boot volume (the full size of the drive, not just the data)
  - the state of a DB instance
    - for DBs natively installed on EC2
      - you also have to consider how the DB interacts with the underlying operating system
      - thus its like better to export the DB data via db specific methods
    - for managed DBs (e.g. rds)
      - for single-AZ instances the db will be unusuable because the db data has to be static while the snaphot is occuring
        - for multi-az configs the snapshots are taken from the standby instances so you dont have to worry about it
      - df
  - etc
- reside in the same region of the resource being copied, but can be replicated to a different region once completed
- can be automated via cloudwatch events & lambda code

## DLM Data Life cycle manager (ec2 dashboard > lifecycle manager)

- automate AMI and EBS snapshot management at 0 cost (but you pay for the underlying storage of snapshots)
- snapshots created via DLM will be listed in ec2 > snapshots
- you can see which policy created which snapshots via the snapshots tab in the left side bar > open a policy > schedules tab > show snapshots
  - this is an easy way to delete snapshots when you delete the policy
  - ^ deleting a policy does not delete the snapshots automatically
- use cases

  - configure policies that take snapshots on a rolling basis (e.g. every hour) to multiple regions and auto delete after some time
    - each subsequent snapshot only contains the chained blocks since the last snapshot (as with all snapshots)
  - automate EBS volume (whether boot/attached) protection policy
  - automate EBS-backed AMI protection policy, e.g. for use with launch templates 4 ec2 instances, and AMIs that enable AMI launch configurations
  - automate cross-account data protection

- considerations
  - you want to tag resources that should be backed up, e.g. key=DLM,value=TRUE
  - resource type: volume only or instance + volume
  - target with these tags: how you link a DLM policy to specific resources
  - IAM role: the default should be good enough
  - policy schedule: uses cron (ouch, need to find those notes or just google cron syntax), also configure show many snapshots are retained and the interval in which they're created
  - copy tags: this is how you identify which snapshots are from which resource, by copying the source tags to the snapshot

## Backup

- 0 cost (except the storage fees & cross-region transfer) managed backup capabilities across many AWS resources (DLM only supports EBS/AMIs)
- components
  - backup vault: logical storage of backups in any region
  - recovery point: the state of a given resource at a given point in time, i.e. restore the resource at this timestamp
  - backup plan: the backup policy
- use cases
  - supports multiple services: aurora, dynamodb, ebs, ec2, efs, fsx, rds, storage gateway (i.e. on premise data)
  - backups can be sent to a different AWS account to improve security
- considerations:
  - same as DLM, you add tags to resource, create policies that create backups from tagged resources, and set lifecycle policy for creation, & deletion
  - you can edit an existing policy, and click `add copy` > `copy to another account's vault` > enter the ARN from the other accounts back up vault
  - click `protected resources` tab to see which resources are sources for your backups
    - ec2 backups include instance type, vpc, subnet, security group, iam role, etc
  - the jobs tab lists current restore operations in progress

## S3 - Simple Storage Service

- group objects (i.e. files max size 5TB) storage in buckets
- designed for durability
- all buckets share the same namespace across ALL of aws customers (think salesforce)
- is universably referencable (and web accessible) across all other AWS resources, regions, etc
- use cases

  - for hardcore MVPs, you can serialize data to JSON and save as an object in s3, as lowclass cache solution (way cheaper than amazon elasticache)
  - supporting serverless architectures
  - static website hosting
  - backup and storage: manage costs, meet regulatory requirements, reduce latency and save multiple distinct copies of data for compliance requirements
  - application hosting: dpeloy, install and manage web applications
  - media hosting: video, photo, music uploads/downloads
  - software delivery: host apps for download

- storage types

  - standard: various degrees of regular access durability (99.99%); highest storage cost, but lowest interaction cost
  - standard infrequent access: not access regularly (99.9%); half the cost for storage, but double interaction cost relative to standard, useful for backups
  - one zone infrequent access: lowest availability offerring (99.5%); objects exist within a single availability zone; lowest storage cost, but double interaction cost; great for non-master data
  - intelligent tiering: 99.9% availability; high storage cost; but after 30 days of no access data is moved to the infrequent access tier which lowers the storage cost, and an additional cost for moving between infrequent & standard
    - great for shifting access patterns, you dont have to manage the lifecycle
  - glacier: for archival data 99.99% durability; low storage cost but highest interaction cost + 90 day minimum charge
  - glacier deep archive: same durability but 1/4 cost of glacier but 180-day minimum chart, with the highest interaction cost

- S3 CRR: Cross-Region replication: replicate objects in one region in another region

  - requires you to enable versioning in the source bucket
  - deleting objects in the source bucket will remove them from the target bucket

- costs

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

### s3 model & workflow architecture

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
    - authenticated: include a signature value that authenticates the request sender
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

### control access

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

## S3 glacier

- low cost archive storage

## ebs elastic block storage

- when you need to store data on a server; an EBS can be attached (i.e. mounted) to any ec2 instance; i.e. like hard drive
- can only be used in a single AZ; but you can create a snapshot and use it to populate another EBS in any region/account
- raw unformated storage volumes (i.e. no file system, but you can add one) of a specific size (EFS is elastic)
- can persist beyond the life of the ec2
  99.999% availability
- ec2:ebs is a many:1 relationship
- snapshots are stored in s3
- both EBS volumes and any corrosponding snapshots can be encrypted
  - if the volume is encrypted, the snapshots will be encrypted, and any subsequent EBS volumes created from the snapshot

### multi-attach

- enables you to attach a single EBS to multiple EC2s

### EBS snapshots

- fundamental component & basic building block of high availability solutions
- is a file which contains a copy of all data stored on a disk image (e.g. a copy of an EBS attached to an ec2)
  - are incrementally copied, so the initial snapshot will take a long time, but subsequent snapshots are faster
- are stored in s3

- cost ~ .05/gig/month

- use cases
  - configuring a default ec2 (e.g. softare/OS hardening) then take a snapshot of the volume for reuse
  - create an AMI from a snapshot, the AMI can then be used like a base box

### ebs considerations

- size
- volume type
- IOPS
- throughput
- encryption
- snapshots
  - useful for creating AMIs

## efs elastic file system

- fully managed networked attached file storage service that spreads the physical storage across multiple AZs in a specific region (unlike EBS which is only accessible from a single AZ)
- enables thousands of EC2 instances to concurrently accesss the same file system from multiple AZs in the same region
  - you create a mountpoint in each AZ
  - each mountpoint is highly available, with a static IP and DNS name
  - if a mount target fails, you'll have to instantiate new EC2 instances in an AZ with a healthy mount point
    - you only need 1 mount point per AZ regardles of the amount of subnets within the AZ
- uses the FNS protocol (suitable for linux machines)
- only pay for the data you're actively consuming (just like S3)
- volume size is elastic, unlike EBS where you have to specify how much disk space you need
- useful for parallel apps that all need high throughput to the same files
- has centralized security via EFS access points for both groups and users
- lifecycle management similar to S3

- mounting an EFS to an EC2

  - ensure youve assigned the default EFS security group to the EC2 instance
  - ssh into the instance and install the EFS mount helper

- considerations
  - VPC
  - which priv/pub subnets in which AZs to create mountpoints in
  - security groups: you need to attach the mountpoint security group to each instance that is authorized to access the underlying network storage
  - life cycle policy: definitely need for cost optimizations
  - throughput mode: bursting (vs provisioned) is only necessary for consistent high throughput requirements
  - performance mode: max I/O (vs general purpose) is only necessary if support hundreds/thousands of concurrent ec2 instances
  - encryption at rest
  - file system policy: determines client access, click 'set policy' to see the actual policy on the JSON tab
    - you can also see the role (ecs full access) applied to the EC2 instance via the ec2 dashboard instance screen
  - access points: set standard linux permissions for (sub) directories in the file system for applications that need access the disk; e.g. the user (e.g. whatever user is setup on your AMI) & group ids, the directory path (e.g. /mnt/shared_storaged), and the owner (e.g. whatever user is setup on your AMI) & permissions (e.g. 755) of files within the dir
    - you can then apply the file system policy to access points within the disk

## FSx

- fully managed networked file system
  - use with Lustre: a distirbuted parallel file system
    - scratch storage:
      - no data replication
      - potential data loss
      - ood for transient data
    - persistent storage
      - good for master data
      - automated file server replacement
      - good for master data
- burstable + dedicated throughput for intense I/O needs
- available for windows and Lustre (linux)
- backups are stored in s3

## EFS elastic file system

- fully managed file system for EC2
