# TLDR

cloudformation, config

## cloudformation

- stack
  - resources
  - outputs
- s3
- parameters
- key pairs
- subnets
- vpc
- policy
- rollback configuration

## config

- A summarized view of AWS and non-AWS resources and the compliance status of the rules and the resources in each AWS Region.
- managed service  providing an inventory of AWS resources, config history, and change notifcations to
- use cases
  - enable security & governance
  - discover existing aws resources
  - CRUD notifications
  - continuously monitor & record config changes of AWS resources
  - determine how a resource was configured at any point in time
  - define rules for provisioning & configuring AWS resources
    - deviations automatically trigger SNS notifications & cloudwatch events
  - view relationships between resources
  - export complete inventory of AWS resources with all config details

- config items: a point in time view of the various attributes of an aws resource
  - metadata, attributes, relatinships, current config, related events
  - items are created whenever AWS config detects a change to a resource type its recording
- config history: collection of config items for a given resource over any period
  - stored in s3
  - anwers questions like:
    - when was the resource first created
    - how was the resource configured over the last month
    - what configuration changes were made last monday
- config recorder: stores configuration of supported resources as configuration items
  - you must create & start the recorder
- config rules: the desired config settings for AWS resources
  - if a resource violates a rule, aws config flags the resource and the rule as noncompliant
  - rule evaluations occur when:
    - a configuration change occurs
    - periodically based on selected frequency

- supported resource types
  - ec2, s3, vpc, iam, lambda, cloudformation, cloudwatch, cloudtrail

### config considerations

- resource types: all/specific
  - resource category
  - reource type
- IAM role (use a default provided by aws)
- s3 bucket (to store config items)
- sns topic (to stream config changes & notifications)
- rules (for remediation)
