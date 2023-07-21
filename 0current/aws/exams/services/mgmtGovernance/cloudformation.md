# CloudFormation

- IaaC provisioning tool for specifying every detail of aws resources required to deploy distinct set of services
- [bookmark](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

## my thoughts

- use terraform instead, unless you need to pass the aws certs ;)~

## links

- [landing page](https://aws.amazon.com/cloudformation/?did=ap_card&trk=ap_card)
- [docs](https://docs.aws.amazon.com/cloudformation/)
- [cloudformation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html)
- [getting started: step by step guides](https://aws.amazon.com/cloudformation/getting-started/)
- [sample templates for common uses cases](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-sample-templates.html)
- [user guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/index.html)

### api

- [AAA: reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/index.html)

## best practices

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

- template: the file that contains service stack; single source of truth for deploying identical stacks to any AWS account
- stack: collection of AWS resources that you can managed as a single unit

## basics

## considerations

## integrations

### cfn-cli

- [see markdown](../devtools/cli-cfn.md)

### cdk

- [see markdown](../devtools/cdk.md)

### SAM

- [see markdown](../devtools/cli-sam.md)
