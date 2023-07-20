```sh
# setup your vars
SOME_REGION=ap-southeast-2
CLUSTER_NAME=woopidydoopidy

## create a cluster to run tasks in
aws ecs create-cluster \
  --cluster-name $CLUSTER_NAME \
  --region $SOME_REGION

## register a task definition with the cluster
# notice how we are providing the task file as input for querying values
aws ecs register-task-definition \
  --cli-input-json file://path/to/some/json.json \
  --region $SOME_REGION --query 'taskDefinition.taskDefinitionArn'


## create a fargate service based on some service definition
aws ecs create-service \
  --cli-input-json file:://path/to/some/json.json

## setup autoscaling for the service manually
aws application-autoscaling register-scalable-target \
  --resource-id service/some-name \
  --service-namespace ecs \
  --scalable-dimension ecs:service:DesiredCount \
    --min-capacity 1 \
    --max-capacity 20 \
  --role-arn arn:aws:iam::abcdefg:role/ecsServiceAutoscalingRole

## setup autoscaling for the service based on scale-out.json
# see scale-out.json example below somewhere
aws application-autoscaling put-scaling-policy \
  --cli-input-json file://path/to/the/scale-out.json
```

- scale-out.json

```jsonc
{
  "PolicyName": "some-policy",
  "ServiceNamespace": "ecs",
  "resourceId": "service/my-service/my-app",
  "ScalableDimension": "ecs:service:DesiredCount",
  "PolicyType": "TargetTrackingScaling",
  "TargetTrackingScalingPolicyConfiguration": {
    "TargetValue": 50,
    "PredefinedMetricSpecification": {
      "PredefinedMEtricType": "ECSServiceAverageCPUUtilization"
    },
    "ScaleOutCooldown": 5,
    "ScaleInCooldown": 5,
    "DisableScaleIn": false
  }
}
```
