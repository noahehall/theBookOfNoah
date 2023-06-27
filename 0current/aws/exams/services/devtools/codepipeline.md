# elastic container service

- automate CD pipelines (best, test, deploy) via cloudwatch events
- go from a commit in codecommit to a new images in ECR, updates to cloudformation and deployments to ECS

## my thoughts

## links

- [landing page](https://aws.amazon.com/codepipeline/?did=ap_card&trk=ap_card)

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

### pricing

## terms

## basics

## considerations

## integrations
