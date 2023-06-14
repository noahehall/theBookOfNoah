# serverless application model (SAM)

- opensource framework that simplifies creation and deployment of serverless applications
- an extension of AWS CloudFormation + a CLI for testing & deployments

## links

- [cli (sam) deploy](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-deploy.html)
- [deployment serverless applications](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-deploying.html)
- [policy templates](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-policy-templates.html)

### sam CLI

- [build](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-build.html)

## best practices

- shorthand syntax express functions, apis, databases and event source mappings using YAML
  - instructions to build an environment and during deployment SAM transforms and expands it into AWS CloudFormation templates
  - all cloud formation optiosn are available
- start with prebuilt SAM policies to bootstrap commonly used templates to build for least privilege security access

### anti patterns

## features

- help manage IAM policies: scopes the permissions of lambda fns to the resources used

## terms

- SAM template: streamlined CloudFormation template for serverless applications
- SAM CLI: cli tool for testing, debugging and deploying serverless applications

## basics

## considerations

### SAM CLI

- testing:
  - launches a docker container to test & debug lambda functions
  - FYI: only covers a subset of tests required for production launch
    - invoke fns and run automated tests locally
    - generate sample event source payloads
    - run API gateway locally
    - debug code
    - review lambda fn logs
    - validate AWS SAM templates
- common cli commands
  - init: initialize a serverless application
  - local: runs your application locally
  - validate: validates an AWS SAM template
  - deploy: deploy an AWS SAM application
    - use the `--guided` param to have an interactived deployment
    - requires an S3 bucker for the lambda deployment package
      - SAM CLI will create & manage this for you
  - build: a serverless application and prepare it for subsequent steps in the workflow
    - processes the AWS SAM template file, application code an any other files and deps
    - copies build artifacts in the format & expected locations for subsequent steps

### CI / CD pipeline

- CodeBuild: automate the process of packaging code & running tests before code is deployed
- CodeDeploy: use version control options to ensure sfae deployments to production
- test account: where you can deploy and test before deploying to a prod account
- prod account: the for production

## examples

```py
# Example cloudformation template for use by SAM

# indicates this is a SAM template
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Server;ess-2021-07-11
Resources:
  GetHtmlFunction:
    # this creates a lambda function
    Type: AWS::Serverless:Function
    Properties:
      # zipfile, handler, and runtime
      CodeUri: ./src/todo_list
      Handler: index.gethtml
      Runtime: nodejs14.x
      # IAM policy
      Policies: AmazonDynamoDBReadOnlyAccess
      Events:
        # create an API gateway endpoint
        # takes care of all necessary mapping/permissions
        GetHtml:
          Type: API
          Properties:
            Path: /(proxy+)
            Method: ANY
```
