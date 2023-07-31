# elastic container service

- continuous delivery service that enables you to model, visualize and automate the steps required to release software
- go from a commit in codecommit to a new images in ECR, updates to cloudformation and deployments to ECS

## my thoughts

## links

- [landing page](https://aws.amazon.com/codepipeline/?did=ap_card&trk=ap_card)
- [security](https://docs.aws.amazon.com/codepipeline/latest/userguide/security.html)
- [services](https://docs.aws.amazon.com/lambda/latest/dg/services-codepipeline.html)
- [cicd starter kits](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-generating-example-ci-cd.html)

## best practices

- ci/cd
  - security: authnz holistically for the pipeline, and not just for pipeline components
  - logging
  - notifications
  - fast tests that fail fast and force pipeline failures
  - all env updates must be released via pipeline
  - build once, push through codepipline
  - short lived feature branches
  - git hooks
  - only build what has changed
  - version control everything

### anti patterns

## features

- trigger builds in codebuild and update cloudformation templates with the buildoutput
- capture and visualize a dlivery pipeline, run it and view real-time status, and retry failed actions
- automate the release process
- incorporate source, build and deploy tools
- integrate with 3rd party and AWS build, test and deploy tools

### pricing

## terms

## basics

- model the release process with stages and actions
- each stage can have a number of actions that need to be performed successfully
- actions can run in sequence/parallel and are associated witha service provide that executes the action or require user intervention
  - source: where code is stored
  - build
  - test
  - deploy
  - approval: manual / notifications
  - invoke: custom fn

## considerations

## integrations
