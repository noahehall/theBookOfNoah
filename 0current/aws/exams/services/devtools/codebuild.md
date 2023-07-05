# service name

- automated build, test and output artifacts

## my thoughts

## links

- [landing page](https://aws.amazon.com/codebuild/?did=ap_card&trk=ap_card)
- [security](https://docs.aws.amazon.com/codebuild/latest/userguide/security.html)

## best practices

### anti patterns

## features

- build images and push to ECR

### pricing

## terms

## basics

- setup a build project to run a build:
  - location of git repository
  - runtime environment
  - build command
  - artifact storage location
- for each build, codebuild uses the build proejct to create a build environment
  - download the source code
  - process the buildspec file an executes each phase of the build process
  - build output is uploaded to s3 and notfications are triggered

## considerations

## integrations
