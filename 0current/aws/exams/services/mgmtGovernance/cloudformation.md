# CloudFormation

- IaaC provisioning tool for modeling aws resources and automating provisioning and upgrades
- [bookmark](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/GettingStarted.html)

## my thoughts

- you should prefer terraform because: known cloudformation limitations
  - there are quotas
  - not all features are available in every region
- however, you must know cloudformation to pass the aws certs

## links

- [landing page](https://aws.amazon.com/cloudformation/?did=ap_card&trk=ap_card)
- [docs](https://docs.aws.amazon.com/cloudformation/)
- [getting started: step by step guides](https://aws.amazon.com/cloudformation/getting-started/)
- [cloudformation designer](https://console.aws.amazon.com/cloudformation/designer)
- [available sdks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/sdk-general-information-section.html)
- [resources](https://aws.amazon.com/cloudformation/resources/)

### user guide

- [intro](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)
- [deletion policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html)
- [modifying a stack template](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-get-template.html)
- [quotas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html)
- [resource & property types](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)
- [sample templates for common uses cases](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-sample-templates.html)
- [stack updates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html)
- [template anatomy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html)
- [updating stacks using change sets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html)
- [user guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/index.html)
- [working with stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html)

### API

- [AAA: reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/index.html)
- [stack create](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/create-stack.html)
- [stack delete](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/delete-stack.html)

### registry

- [cloudformation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html)

## best practices

- cloudformation designer is a killer tool

### anti patterns

## features

- automate, test and deploy infrastructure templates with CI/CD automations
- use the cloudformation registry to model and provision thirdparty resources and modules published by AWS partners and the dev community
- build your own resources using the cloudformation cli; including local testing and code generation
- provision common sets of AWS resources across mulitple accoutns and regions using stacksets
- model your entire AWS infra using json/yaml or with typescript (any others) via the aws cdk
- build serverless applications with SAM, which transforms and expans the SAM syntax into cloudformation syntax

### pricing

- using registry extensions
  - incur charges per handler operation
    - CRUD/LIST actions on a resource type
    - CUD actions for a hook type
- resource providers in the following namespaces `AWS::*, Alexa::*, and Custom::*`
  - free, but you pay for the underlying resources

## terms

## basics

- cloudformation can only perform actions that you have permissions (IAM) to do
  - the permissions required is 100% dependent on actions required to instantiate a stack from a template

### templates

- model aws resources using json/yaml/template/txt
- single source of truth for deploying identical stacks to any AWS account
- cloudformation makes underlying service calls to AWS to provision and configure resources
- specifying a local template will require cloudformation to upload it to an s3 bucket in your aws account
  - cloudformation creates a bucket for each region in which you upload a template file
  - the bucket is accessible to anyone with s3 perms in your aws account
    - you can instead create your own bucket and manage its permissions and specify the s3 url of a template file

```yaml
AWSTemplateFormatVersion: 2010-09-09
Description: Some Template
Resources:
  MyEC2:
    Type: 'AWS::EC2::Instance' # all service namespaces follow this pattern
    Properties: # you'll mainly be in here
      ImageId: ami-abcdefg
      InstanceType: t2.micro
      ...
  MyEIP:
    Type: 'AWS::EC2::EIP'
    Properties:
      InstanceId: !Ref MyEC2 # link resources with Ref
```

### stacks

- provision aws resources from a template
- collection of AWS resources that you can managed as a single unit
- deleting stacks
  - delete: all the resources are deleted
  - deletion policy: you can retain some of the resources

#### change sets

- modify an existing stack and get a summary of changes by submitting a modified version of the original temlate
  - updates can cause service interruptions depending ont he resources and properties that are changed
- while a change set will report the summary of changes, it doesnt check if the stack update will be successful
  - breached an account quota
  - updating an un-updatable resource
  - insufficient permissions

## considerations

## integrations

### cfn-cli

- [see markdown](../devtools/cli-cfn.md)

### cdk

- [see markdown](../devtools/cdk.md)

### SAM

- [see markdown](../devtools/cli-sam.md)

### vpc privatelink

- [see markdown](../networkingContentDelivery/vpc-privateLink.md)
  - creating a VPC endpoint for cloudformation to use
