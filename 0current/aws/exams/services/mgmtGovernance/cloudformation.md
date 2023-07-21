# CloudFormation

- IaaC provisioning tool for modeling aws resources and automating provisioning and upgrades
- [bookmark](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

## my thoughts

- terraform for AWS, but you need cloudformation to pass the aws certs

## links

- [landing page](https://aws.amazon.com/cloudformation/?did=ap_card&trk=ap_card)
- [docs](https://docs.aws.amazon.com/cloudformation/)
- [cloudformation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html)
- [getting started: step by step guides](https://aws.amazon.com/cloudformation/getting-started/)
- [sample templates for common uses cases](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-sample-templates.html)
- [user guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/index.html)
- [cloudformation designer](https://console.aws.amazon.com/cloudformation/designer)

### api

- [AAA: reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/index.html)
- [template anatomy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html)
- [resource & property types](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)

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

### templates

- model aws resources using json/yaml/template/txt
- single source of truth for deploying identical stacks to any AWS account

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

## considerations

## integrations

### cfn-cli

- [see markdown](../devtools/cli-cfn.md)

### cdk

- [see markdown](../devtools/cdk.md)

### SAM

- [see markdown](../devtools/cli-sam.md)
