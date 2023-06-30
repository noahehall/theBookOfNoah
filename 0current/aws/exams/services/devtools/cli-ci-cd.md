# cli cicd

- codecommit, codebuild, codepipeline and codedeploy
- IMO if you're using one you might as well use them all

```sh
# TODO(noah): convert this to a nimscript

# setup your vars
SOME_REPO=woopidydoopidy

## create a repo
# you would then need to connect the repo to your github repo?
# dunno check the docs
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

```

- pipeline_structure.json

```jsonc
{}
```
