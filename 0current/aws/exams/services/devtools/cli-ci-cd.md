# cli cicd

- codecommit, codebuild, codepipeline and codedeploy
- IMO if you're using one you might as well use them all
- TODO(noah):
  - figure out how to integrate opensource nexus

```sh
# TODO(noah): convert this to a nimscript

# setup your vars
SOME_REPO=woopidydoopidy

## create a repo
# then connect your git-cli to target the aws repo, read the docs
aws codcecommit create-repository \
  --repository-name $SOME_REPO

# create a codebuild project
aws codebuild create-project \
  --name $SOME_REPO \
  --description "fear my copypasta" \
  --source type="CODEPIPELINE" \
  --service-role "arn:aws:iam::abcdefg:role/CodeBuildExecutionRole" \
  --environment \
    type="LINUX_CONTAINER",\
    image="aws/codebuild/docker:17.09.0",\
    computeType="BUILD_GENERAL1_SMALL",\
    environmentVAriables="[{name=VARNAME1,value='VALUE1'}, {...}] \
  --artifacts type="CODEPIPELINE"

## create a new codepipline pipeline based on the pipeline-structure.json somewhere below
aws codepipeline create-pipeline \
  --pipeline file://pipeline_structure.json

## create a cloudwatch event for triggering codecommit to execute the codepipeline pipeline
# returns the RuleArn in the form: { "RuleArn": "arn:aws:events:some-region::rule/SOME-RULE-NAME}
aws events put-rule --cli-input-json file://event_put_rule.json

## attach the rule arn for the cloudwatch event to en event target
aws events put-targets \
  --rule SOME-RULE-NAME
  --targets \
    Id=1,\
    Arn=arn:aws:codepipeline:some-region:abcdef:someapp,\
    RoleArn:arn:aws:iam::abcd:role/CloudWatchCodePipelineTrigger
```

- pipeline_structure.json

```jsonc
{
  "roleArn": "arn:aws:iam::abcdefg:role/CodePipelineExecutionRole",
  "name": "some-app-cicd-pipeline",
  "version": 1,
  "artifactStore": {
    "type": "S3",
    "location": "think-this-is-a-bucket-name"
  },
  // stages run in order
  "stages": [
    {
      "name": "Source", // stage name
      "actions": [
        "runOrder": 1,
        "inputArtifacts": [],
        "name": "SourceCode", // action name
        "actionTypeId": {
          "category": "Source",
          "owner": "AWS",
          "version": "1",
          // generally each action has a provider, google them
          "provider": "CodeCommit" // displayed in the visual pipeline
        },
        "outputArtifacts": [
          {
            "name": "some-app"
          }
        ],
        "configuration": {
          "RepositoryName": "someapp",
          "BranchName": "develop",
          "PollForSourceChanges": "false",
        }
      ]
    },
    {
      // codebuild should build image after source stage is complete
      // and push a new image into ECR
      "name": "Build",
      "actions": [
        // same as source
        // but this build action requires an input artifact
        // google it, too many options
      ]
    },
    {
      "name": "Release",
      "actions": [
        // same as source
        // but the release action should deploy to ECS
        // whatever image was built and pushed to ECR from the previous stage
      ]
    }
  ]
}

```

- event_put_rule.json

```jsonc
{
  "Name": "CodeCommitRuleForSomeApp",
  "EventPAttern": "{\"source\": [\"aws.code.commit\"].\"detail-type\": [\"CodeCommit Repository State Change\"]}",
  "State": "ENABLED"
}
```
