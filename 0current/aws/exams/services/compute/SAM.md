# serverless application model (SAM)

- opensource framework that simplifies creation and deployment of serverless applications
- an extension of AWS CloudFormation + a CLI for testing & deployments

## links

- [cli (sam) deploy](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-deploy.html)
- [deployment serverless applications](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-deploying.html)
- [policy templates](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-policy-templates.html)
- [sam github with policy templates and other stuff](https://github.com/aws/serverless-application-model/tree/develop)

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

### sam cli

```sh
# generate a sample s3 put event
# put it in launch.json.lambda.payload.json.{ ...copypasta}
sam local generate-event s3 put

# validate the template.yaml in the curdir
sam validate

```

### sam templates

- usually called `template.yaml` and defines the entire stack for a specific service
  - you generally want to start with a sample template provided by AWS (check the docs)
- resources.someName.type
  - AWS::S3::Bucket (s3)
  - AWS::Serverless::Function (lambda)
  - AWS::Serverless::SimpleTable (dynamodb)

```yaml
# Example cloudformation template for use by SAM

# indicates this is a SAM template
AWSTemplateFormatVersion: "2010-09-09"
Transform: AWS::Server;ess-2021-07-11
Resources:
  # could be anything, this is an arbitray name for a lambda fn
  GetHtmlFunction:
    # this creates a lambda function
    Type: AWS::Serverless:Function
    Properties:
      # zipfile, handler, and runtime
      CodeUri: ./src/todo_list
      Handler: index.gethtml
      Runtime: nodejs14.x
      AutoPublishAlias: live # detect new deployments and publish updated versions and aliases
      DeploymentPReference:
        Type: Canary10Percent10Minutes # implement canary traffic shifting
        Alarms: # specify auto rollbacks of deployments based on cloudwatch alarms
          - !Ref SomeCloudWatchAlarm
          - !Ref SomeClouodWatcAlarm
        Hooks: # run pre and post traffic shifting lambda fns
          PreTraffic: !Ref SomeLambdaFn
          PostTraffic: !Ref SomeLambdaFn
      # IAM policy
      Policies: AmazonDynamoDBReadOnlyAccess
      Events:
        S3Event: # s3 event source for triggering lambda fns
          Type: S3
          Properties:
            Bucket:
              Ref: SomeBucketName
            Events: s3:ObjectCreated:* # any object created in SomeBucketName
        # create an API gateway endpoint
        # takes care of all necessary mapping/permissions
        GetHtml:
          Type: API
          Properties:
            Path: /(proxy+)
            Method: ANY
```
