# IAM Access Analyzer

- helps identify the required permissiosn for an IAM execution role
- analyzes cloudtrail logs over some date range and generates a policy template based on the behavior

## links

- [using iam access analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html)

## best practices

### anti patterns

## features

- continuously monitors policies for changes where you no longer need to rely on intermittent manual checks in order to catch issues as policies are added or updated.
- proactively address any resource policies that violate their security and governance best practices around resource sharing and protect their resources from unintended access
- delivers comprehensive, detailed findings through the IAM, Amazon S3, and AWS Security Hub consoles and also through its API
- findings provide definitive answers of who has public and cross-account access to AWS resources from outside an account.

## terms

## basics

- basic workflow
  - enable IAM Access Analyzer
  - per region: create an analyzer for your AWS account or your entire organization if it is using AWS Organizations
    - The organization or account you choose is known as the zone of trust for the analyzer
      - required perms: use the IAMAccessAnalyzerFullAccess/IAMAccessAnalyzerReadOnlyAccess depending on usecase
  - the analyzer periodically analyzes all of the policies applied to the supported resource sin the zone of trust
    - when a policy is upserted: analyzer reruns analysis within 30 minutes
  - if analyzer identifies a policy that grants access to an external principal not within your zone of trust a finding is generated
    - includes details about the resource and external entity
  - analyzer uses automated reasoning to summarize which resources grant public/cross-account access
  - you review the findings and take action
- supported resource types
  - IAM roles: Trust policies are analyzed and findings are generated for roles within the zone of trust
  - S3 buckets: Findings are generated when an Amazon S3 bucket policy, ACL, or access point applied to a bucket grants access to an external entity.
  - KMS keys: Findings are generated if a key policy or grant allows an external entity to access the key.
  - Lambda functions: Findings are generated for policies that grant access to the function to an external entity.
  - SQS queues: Findings are generated for policies that allow an external entity to access a queue.

## considerations
