# TLDR

cloudtrail, cloudwatch, VPC flow logs

## vpc flow logs

- created per VPC
  - viewing: vpc > flow logs tab in middle (not left sidebar) click the destination > click the ENI from the list
  - [good text filter patterns](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html#matching-terms-events)]
  - creating: vpc > click vpc > actions drop down
- capture all VPC network interfaces at 15 minute intervals
- are stored in cloudwatch
- required an IAM role
- limitations
  - cant be created for peered vpc in external aws accounts
  - flow log configuration can be modified after created
  - only displays the primary IP address
  - doesnt capture requests by internal AWS stuff
- metrics
  - ip addressses
  - ports
  - protocol
  - packet information
  - action (denied/allowed)
  - logging status
- creating a flow log
  - in cloudwatch: create a log group
  - in vpc:
    - create flow log
    - create an IAM policy
      - or select `FlowLogsRole` or something like that if it exists
      - use the one aws creates for you while you go through the workflow

## cloud trail

- track user activity and API usage
- monitor events occuring in AWS services, and keep logs in an s3 bucket

## cloudwatch

- monitor resources and applications
