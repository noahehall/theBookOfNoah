#!/usr/bin/env bash


#both force you to specify the profile, im currently using default and test
#could use just set/setx, but i like to be specific
#https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-precedence

# todo
# add aws-shell: https://github.com/yokawasa/docker-aws-shell/blob/master/Dockerfile
# add aws-sam-cli: https://github.com/pahud/sam-cli-docker/blob/master/Dockerfile
# review this: https://github.com/aws/aws-sam-cli/issues/502
# copilot
# amplify
# etc

alias aws-basic='docker run --rm -it amazon/aws-cli --profile'
alias aws='docker run --rm -it -v ~/.aws:/root/.aws -v /Volumes/aws:/aws amazon/aws-cli --profile'