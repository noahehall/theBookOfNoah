# fargate

- serverless compute for containers

## my thoughts

- think about integrating terraform with fargate to keep your architecture nimble
  - [ecs-farget module](https://registry.terraform.io/modules/aws-ia/ecs-fargate/aws/latest)
  - [eks fargate profile](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eks_fargate_profile)

## links

- [landing page](https://aws.amazon.com/fargate/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

- deploy and manage applications, not infrastructure
- monitor applications with cloudwatch adn container insights, and integrate with third-party tools
- ecs tasks and eks pods run in their own dedicated runtime env
- only pay for what you use; fargate scales underlying infra to match your specified resource requirements

### pricing

## terms

## basics

## considerations

## integrations
