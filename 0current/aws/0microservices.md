# AWS Microservice and Distributed Systems

- serverless, containers, messaging/queues, fully managed apps

## TLDR

- catchall for resources supporting microservices and distributed systems
- this cheatsheet goes with:
  - [provisioning](./0provisioning.md)
  - [analytics](./0analytics.md)

### todos

- ecs:
  - [networking](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/networking.html)
  - [auto scaling and capacity management](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/capacity.html)
  - [persistent storage](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/storage.html)
  - [EFS volumes](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/storage-efs.html)
  - [EBS vs Docker volumes](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/storage-dockervolumes.html)
  - [speeding up task launch](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/task.html)
  - [task deployment](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/deployment.html)
  - [scaling ECS apps](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/operating-at-scale.html)
  - [security](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/security.html)
  - [ec2 app-level architecture: ec2 vs fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html)
    - must read
  - [ecs workshop](https://ecsworkshop.com/)
  - [ecs aws cli docs](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ecs/index.html)
  - [task iam role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html)
- ecr
  - [ecr with aws cli](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html)

## links

- [all aws container services](https://aws.amazon.com/containers/?pg=ln&sec=hs)

### interwebs

- [CDelivery vs CDeploy](https://www.cioinsight.com/it-strategy/continuous-delivery-vs-deployment/)

### aws

- [api gateway](https://aws.amazon.com/api-gateway/?did=ap_card&trk=ap_card)
- [appsync](https://docs.aws.amazon.com/appsync/?icmpid=docs_homepage_serverless)
- [aws messaging services](https://aws.amazon.com/messaging/)
- [aws microservice introduction](https://aws.amazon.com/microservices/)
- [batch](https://aws.amazon.com/batch/?did=ap_card&trk=ap_card)
- [beanstalk supported platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html)
- [certificate manager](https://aws.amazon.com/certificate-manager/?did=ap_card&trk=ap_card)
- [cloudsearch](https://aws.amazon.com/cloudsearch/?did=ap_card&trk=ap_card)
- [data exchange](https://aws.amazon.com/data-exchange/?did=ap_card&trk=ap_card)
- [datapipeline](https://aws.amazon.com/datapipeline/?did=ap_card&trk=ap_card)
- [ecr aws cli docs](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ecr/index.html)
- [ecr intro](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html)
- [ecr pricing](https://aws.amazon.com/ecr/pricing/)
- [ecr public gallery](https://gallery.ecr.aws/)
- [ecs best practices on github](https://github.com/awsdocs/amazon-ecs-bestpractices-guide)
- [ecs container definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#container_definitions%3Ficmpid=docs_ecs_hp-task-definition)
- [ecs docs home](https://docs.aws.amazon.com/ecs/)
- [emr](https://aws.amazon.com/emr/)
- [eventbridge](https://docs.aws.amazon.com/eventbridge/?icmpid=docs_homepage_serverless)
- [fargate intro](https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html)
- [fargate pricing](https://aws.amazon.com/fargate/pricing/)
- [fargate](https://aws.amazon.com/fargate/?did=ap_card&trk=ap_card)
- [firewall manager](https://aws.amazon.com/firewall-manager/?did=ap_card&trk=ap_card)
- [glue](https://aws.amazon.com/glue/?did=ap_card&trk=ap_card)
- [kinesis](https://aws.amazon.com/kinesis/)
- [lambda coldstarts in aws lambda](https://mikhail.io/serverless/coldstarts/aws/)
- [msk apache kafka](https://aws.amazon.com/msk/?did=ap_card&trk=ap_card)
- [opensearch](https://aws.amazon.com/opensearch-service/?did=ap_card&trk=ap_card)
- [sam guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)
- [sam template spec](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html)
- [sam](https://docs.aws.amazon.com/serverless-application-model/?icmpid=docs_homepage_compute)
- [secrets manager](https://aws.amazon.com/secrets-manager/)
- [serverless compute](https://aws.amazon.com/serverless/)
- [step functions: amazon states language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html)
- [step functions](https://docs.aws.amazon.com/step-functions/?icmpid=docs_homepage_serverless)

## basics

### terms

- application architecture spectrum
  - monolithic: single codebase, where changes to any component requires rebuilding and deploying the entire stack
  - SOA, Service Oriented Architecture: distributed application components that communicate via messaging middleware; services are not (but can be) single purpose
  - Microservices: SOA to the next level, each component should be single purpose, and communication is done via REST, events, or messaging
  - Serverless Microservices: microservices deployed in a cloud environment using serverless technologies for compute; communication is the same as regular microservice architecture

### best practices / gotchas

- always
  - DNS (route 53) level routing to resources behind a load balancer is critical for microservices
  - for compute resources: there should be an additional load balancer associated with an autoscaling group for high availability and automatic registration in health checks for scale/in events
  - increase the segmentation of business logic via distinct resources that handle specific aspects of your business
    - i.e. dont have one monolithic code base, but use a service oriented architecture where each service can scale out & in and adopt an event driven model utilizing an API gateway that routes requests to each service
  - SQS, SNS, and lambda are critical for event driven architectures
  - assign aliases to lambda fns, e.g. dev, prod, and QA
    - and set the lambda trigger on the ALIAS, and not the version
    - when you have fully tested a new version, you can point the alias prod to that new vesion
- sometimes

  - push an event from SNS into an SQS queue

#### gotchas

- lambdas
  - deploying a new version of a lambda fn, immediately replaces the existing version
    - there are no rollbacks, however you should always utilize versioning & aliases
  - lambda outside a VPC have internet access
    - lambda inside a VPC may not have internet access
      - if they do, there must be a NAT gateway setup

### architecture: serverless

- fully managed approached to execute business logic in the cloud; storage, compute, and networking without provisioning/managing servers/dbs
- reduces operational complexity: processes and tasks that require operational skills no longer required; e.g. provisioning, backups, version management, patching, deploying, etc
- reduces cost
- standardize common tasks: e.g. security, error handling, logging
- saving objects to s3 (e.g. json objects) is a good way to trigger lambda events to kick start an event driven data pipeline

#### components

- compute: business logic without the server; code runs on demand and is trigger by events/periodically;
  - lambda is the primary compute option, but is limited by execution time, ram, and triggering events/messaging support
    - be sure to set a reasonable lambda concurrency limit, e.g. when the lambda is hitting a DB, you dont want 100000 lambdas hitting a DB which would explode your managed DB costs
  - fargate is the fallback option, whenever limitations of lambda is unnacceptable
- storage: always S3, but choosing the appropriate S3 storage class is critical
  - keeping the raw data (as close to origin as possible) around is crucial for replaying events
    - for complex/costly data transforms, save the intermediate steps as well
  - data partitioning is key, think hard about the bucket name when saving objects to s3 as they naming scheme you chose determines the paritioning of your data
    - generally you always want logic/naming/structure/year/month/day/minute/etc
- data stores: relational, key-value, in-memory, document, graph, time series, ledger (blockchain)
- API proxies: whenever a microservice needs to be called (instead of triggered) an api gateway is required
  - lambda fns integrate seamlessly with amazon API gateway
  - a frontend app (stored & served from s3) can call an api gateway endpoint, which in turn calls a lambda fn, and returns the response to the frontend
- application integration and orchestration
  - SQS: for polling & FIFO queues
  - SNS: for pub-sub based messaging
  - Kinesis: for ingesting and responding to streaming data
  - Step Functions: for coordination among lambda based services by defining state machine styled functions. i.e. workflow automation
    - you generally dont want to call one lambda from another, instead use step functions to implement a workflow
- analytics: kinesis for streaming data
- developer tools; IDEs, CI, deployment tools, SDKs, and monitoring & logging tools
  - especially
    - the AWS SAM cli: modifying functions, apis and databases common to serverless resources
      - the sam yml file gets transformed into cloudformation templates
      - ^ contains a single deployment configuration for your serverless app
      - local development, testing & debugging
      - creating resources on aws from the cli
      - retrieve lambda fn logs
      - deploy apps to aws
    - cloud9
    - codebuild

#### considerations

- lambda fn (serverless) vs Fargate (containers)
  - lambda is best when logic needs to be run in response to an event, or periodically and can the processing can be complete in ~15 minutes
  - fargate is basest when compute time exceeds 15 minutes of execution time, or memory exceeds 3gb
    - i.e. use fargate whenever you exceed lambda limits
- database options
  - first decide the type of data storage you need
  - then when multiple options exists for the db type, determine the use cases, limits, efficiencies, and costs associated with each
- SQS vs SNS vs Kinesis
  - use SQS when delivery guarantees are required, but only a single consumer should handle each message, if the consumer fails, the message goes back into the queue
  - use SNS when delivery guarantees arent required, or when multiple consumers need to act on a single message
    - you need to architect for failure, as once the message is taken from the topic, its up to the consumer to succeed, on failure the data is lost
  - use kinesis when delivery guarantees are required, ordering is important, AND Multiple consumers need to be updated on each message
    - like SQS, has message delivery gurantees
    - like SNS, multiple consumers for each message

## Serverless APIs

### lambda

- the most basic on-demand compute, execute fns as APIs/containers instead of EC2 servers / ECS Fargate tasks
- event drivent, stateless (serverless) business logic that can be triggered from 200+ aws services
- compute service to run code without managing servers
- costs
  - number of requests
  - duration of each request
  - amount of memory lamba needs
- use cases
  - execute data processing tasks
  - handling web requests
  - in response to changing code commits, changes to infrastructure
  - run code on a schedule, similar to cron tasks
  - target of an event bridge rule
  - cloud watch alarm automation, especially in high availability & failover contexts where you need to spin up new resources and reassign EIPs
  - s3 putObject can trigger an instance of a lambda fn to run, e.g. in response to new data being saved to s3
  - integration with SES: you have to create a service role for Lambda that enables it to use SES, the policy is `AmazonSESFullAccess`
    - ensure to also add the cloudwatch policy, `AWSLambdaBasicExecuteRole`
  - can be used as a step function state machine task
    - inputs from state machines will be in `event.input.poop`
- perhaps shouldnt be used
  - extreme real-time responses
  - complex compute: with high memory/long run times
- limits
  - 15 min max execution time
  - 3k mb max ram
  - types of event/messages that can trigger lambda execution
  - each lambda fn must be fronted by an API Gateway
- general process
  - upload code to lambda
    - a handler fn, either `async (event) =>` or `fn(event, context, callback) {}`
    - event: the data sent during invocation, interface changes depending on which resource triggered the fn
    - context: methods available to interact with runtime information
    - callack: think this is when fn syntax is async
  - setup triggers from other aws resources, http endpoints, etc
    - api gateway: api endpoint receives a request
    - modifications to aws resources
      - dynamoddb: stream events
      - s3: CRUD events
      - sqs: queue events
      - kinesis: stream events
      - sns topics
  - aws runs the code in response to triggers, 3 types of execution models
    - synchronous: a blocking requests, e.g. api gateway invoking lambda, has to wait for lambda to finish executing
    - asynchronous: asynchronous requests, e.g. s3 event trigger lambda, s3 doesnt wait for lambda
    - poll/stream:
      - sqs: poll
      - kinesis: stream
  - cloudwatch monitoring for runtime observability;
    - summary on the monitoring tab, loggroups on in cloudwatch console
      - super important (as with all cloudwatch & resources) to finetime resource settings and cost optimization
    - invocations: total fn invocations
    - duration: min, max & average execution time
    - error count & success rate
- lamda designer: in the web console, after you click on a lamba fn name
  - see the different layers
  - add/remove triggers for a specific lambda fn
  - see the resources the lambda fn has permissions for
- layers: manage fn dependnecies/add additional functioality
- test events: create events that invoke the lambda fn, sending in JSON to the lambda fn handler
  - first you create the event, then you click test again
- runtime: the runtime env of the lambda fn, e.g. the nodejs runtime gives you access to all the nodejs builtin modules to import at the top of your lambda fn
  - you can also `const aws = require('aws-sdk')` to interact with other aws services from within the lambda fn
- CORS issues:
  - make sure you add the `Access-Control-Allow-Origin` header in the response JSON you return from your lambda fn

```javascript
const AWS = require("aws-sdk");
const querystring = require("querystring");

// async lambda
exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lamxxxvvvxxvbda!"),
  };
  return response;
};

exports.handler = function (event, context, callback) {
  // same as async, but use error first callback

  callback(null, response);
};
```

### lambda considerations

- fn type
  - author from scratch
  - use a blueprint
  - container image
  - select from serverless app repository
- name
- runtime (e.g. nodejs/python)
- permissions
  - execution role
    - select a predefined role that provides permissions necessary for the fns business logic
- memory (e.g. 256mb)
- timeout (e.g. 10seconds)
- triggering configuration
  - sqs queue
  - sns topic
  - etc

### Step Functions

- workflow automation, e.g. state machines & orchestration between lambda fns
  - are region specific
- features
  - sync/async exeuction
  - retry logic
  - error handling
  - i/o parameter management
  - timeout control
  - logging
- use cases
  - the return values of a lambda fn can drive a state transition in the step function state machine
  - create workflows between lambda fns, using the output from one as input to another
  - simplify lambda fn dependency logic, especially where you end up creating a lambda fn to manage the dependency graph between a series of lambdas
- amazon states language: json schema defining states, actions, and transitions
  - there are various `generate code snippets` that you can select & copy/pasta into your stateMachine.stats member

#### state machine:

- a workflow, defining a series of steps/states, their input, and the workflow/relationships between them
  - you generally want a single start, and a single end point in the workflow
- definition: a json object defining the state machine
  - everything in step functions are Case SeNsSiTiVe
- state types
  - tasks: execute tasks/actions, e.g. invoke lambda fns or API Actions (http calls)
  - choice: add branching logic for transitioning between steps; supports several conditions
  - stop:
    - succeed: state machine is completed
    - fail:
    - fail with cause and error: specify retry logic
  - pass: performs no action, but takes an input and passes it to an output
    - useful for prototyping/troublingshooting, as you can inject values into the input that gets passed to the next state
  - parallel: execut multiple tasks at once; if any of the branches fail, the entire state fails
    - each branch has a copy of the input
  - wait: wait for a certain duration/specific time
  - map: processing a set of steps in an input array
- state errors: cause state machines to fail
  - States.ALL: catchall reference to error thrown that isnt caught by something more specific
  - States.Runtime: corrupt input/output, blank json document, etc; is not retriable
  - States.Timeout: a task exceeds an execution threshold
  - States.TaskFailed: specific task states
  - States.Permissions: incorrect IAM Role, e.g. you didnt add a lambda permission to invoke a lambda fn from a step function
- lambda specific errors
  - Lambda.Unknown: e.g. out of memory condition
  - Lambda.Exception
  - Lambda.ServiceException
  - Lambda.ErrorName: general format of all lambda errors
- executing state machines
  - via web console
  - via AWS cli/aws SAM cli
  - via (e.g. node) aws sdk
  - via api gateway endpoint
  - one statemachine task can execute another state machine (a nested execution)
  - cloudwatch event trigger
  - lambda fn that uses the aws sdk
- logging
  - add the cloudwatchlogs permissions to whatever role you're using
  - enable logging and there will be a cloudwatch log group that contains the state machien step function in its entirety in each log event, with additional metadata

```json
{
  "comment": "describe the state machine"
  "StartAt": "someKeyFromStates",
  "States": { // each defines a specific state
    // example task state
    "someKey": {
      "type": "Task", // see state types above
      "Resource": "arn::aws::states:::lambda:invoke",
      "TimeoutSeconds": 10, // max execution time for this state
      "Retry": [ // retry logic
        {
          "ErrorEquals": ["States.Timeout"], // any list of err names
          "IntervalSeconds": 3, // wait this many secs between retries
          "MaxAttempts": 2, // dont try too many times
          "BackoffRate": 1.5 // in addition to intervalSeconds
        },
      ],
      "Catch": [ // catch logic  if retries fails
        {
          "ErrorEquals": ["some.node.error.dunno"],
          "ResultPath": "$.errorInfo", // place stacktrace in this var
          "Next": "RecoveryState", // transition here
        },
        {
          "ErrorEquals": ["States.ALL"], // all other errors
          "Next": "ifErrorThenExitPoop" // stop processing this state
        }
      ],
      "Parameters": {
        "FunctionName": "arn:aws:lambda:poop:poop:function:someLambdaFn:$SOME_VERSION", // should be able to use an alias, like $dev or $prod if youve created those stages
        "Payload": {
          "Input.$": "$" // $ === the event.input passed to the lambda
        }
      },
      "ResultPath": "$.someVarName", // save the received input value back into $ under someVarName
        "OutputPath": "$", // output this lambdas input as input to the next state
      "End": true, // this is the state in the step function state machine
    },
    // example choice state
    "someOtherKey": {
      "Type": "Choice",
      "Choices": [
        {
          "Variable": "$.Payload.body.someKey", // value from some previous lambda fn
          "SomeCondition": "equals this value",
          "Next": "someUberKey" // transition to this state on truthy
        }
      ],
      "Default": "Default value for choice"
    },
    // example pass state
    // in this example, the SomeOtherKey choices state, if truthy, will transition to this pass state
    // this pass state will inject a variable with a predefined value
    // that is accessible to downstream states
    "someUberKey": {
      "Type": "Pass",
      "Result": {
        "someVarName": "use this value", // assign someVarName the value useThisValue
      },
      "ResultPath": "$.Payload.body.someVarName" // downstream states can access it here
    },
    // example pass state, e.g. transition here from a catch definition
    // could be enhanced, e.g. to send an email via SES
    "ifErrorThenExitPoop": {
      "Type": "Pass",
      "End": true
    }
  }
}
```

### SAM serverless apps

- extends cloudFormation and uses sam CLI

### api gateway rest/websocket APIs

- create, maintain and secure restful/websocket APIs via containerized/services fns and web applications

## appsync graphql

- fully managed graphql service with realtime data sync

## Messaging

### SES Simple Email Service

- simple email service

### SQS simple queue service

- a polling based queueing service
- fully managed queuing service; both generanl queues and FIFO queues to pass info between services
  - FIFO queues
    - are important when you need to process events in order, and not in parallel
    - message groups all different channels in the same FIFO queue, to add a level of parallelism to the queue based on message type
    - FIFO queues cannot be triggered from a lambda fn
- core for decoupling of services
- use cases
  - multiple consumers can listen to a single queue, BUT each message can only have a single consumer
    - use an SNS topic if multiple consumers need to handle a single message
  -
  - FIFO queues: guarantee delivery of messages within defined message groups

#### SQS considerations

- default visibility timeout
- message rentention period: how long an unprocessed message will remain in the queue
- maximum message size
- delivery delay
- receive message wait time
- dead letter queue settings: capture messages that fallout due to errors & expiring message retention
  - redrive policy
  - maximum receives
- server side encryption settings

### SNS simple notification service

- a pub-sub based messaging service
  - use whenever there are multiple consumers for a single message
- manages the delivery & sending of msgs to subscribin endpoints & clients
  - app to app|person
- use cases:
  - super useful in cloudwatch alarms, that send msgs to SNS topics which subsequently trigger lambda functions for automating responses (e.g. reosurce failure) to system events
- clients
  - publishers: send async msgs to a topic
    - cloudwatch alarms
  - subscribers: pull msgs from a topic
    - lambda
    - sqs queues
    - http/s endpoints
    - event fork pipelines
    - kinesis data firehose delivery streams
    - mobile apps
    - phone numbers
    - email addrs
- topics: logical access point & communication channel
  - publishers: create topics/get push permissions
- service quotas
  - quotas: resources, actions and items have defined limits
    - breaching a limit will always increase costs or cause components to fail
  - monitor and manage quotas for any AWS service

#### sns considerations

- type
  - standard: when msg order & duplication isnt important
  - FIFO: msg order & duplication is important (must use SQS)
- access policy: who can publish & subscribe
  - topic owner
  - everyone
  - specific AWS accounts
  - requests from specific endpoints
- encryption: server side encryption
- delivery retry policy: retry failed deliveries for http/s
- delivery status logging: only for specific protols (lambda, sqs, etc)
- IAM roles

### MQ: apache activeMQ

- managed message broker for apache activeMQ

### msk: managed streaming for apache kafka

- securely stream data via managed apacha kafka

### Kinesis managed realtime data streaming

- manage streaming data in realtime
- ingest real-time data such as video, audio, application logs, website clickstreams, and IoT telemetry data for machine learning, analytics, and other applications.
- process and analyze data as it arrives and respond instantly instead of having to wait until all your data is collected before the processing can begin.
- use cases
  - can have multiple shards within a stream, and consumers can be assigned to specific shards
  - full replay is possible by resetting a stream to a point in time

### eventbridge message broker

- serverless message broker

### pinpoint

- customer engagement platform for managing targeted and transaction multi-channel engagement via email, push, SMS and lambda

## Containers

### ECS container service

- run docker containers on EC2 / Fargate instances
- no cost for ec2 launch type, fargate has costs for vcpu and memory resources
- cluster: regional grouping of one or more container instances; tasks are deployed to clusters
  - template types
    - networking only: use fargate with windows/linux based images
    - ec2 linux + networking: ec2 instead of fargate
    - ec2 windows + networking: ec2 instead of fargate
- cloudwatch container insights: CloudWatch automatically collects metrics for many resources, such as CPU, memory, disk, and network.Container Insights also provides diagnostic information, such as container restart failures, that you use to isolate issues andresolve them quickly. You can also set CloudWatch alarms on metrics that Container Insights collects.
- General ECS process
  - build container: localhost/CI
  - store container: Continuous delivery to ECS
  - run: continous deploy to compute services

#### key components

##### ECS Agent

##### ECS Control Plan

##### task definitions

- provides details and resource requirements for a container that is passed to the Docker daemon.
- may contain one or more container definitions
  - containers within the definition deploy as a group; this is your base unit of scale
  - dont mix-n-match app-types
- should point to a specific contaimer image tag, and never to `latest`
  - i.e. 1 to 1 mapping between app version -> container img tag -> task definition revision
  - e.g. a git commit -> container:gitCommitHash -> task def revision -> delivery to store / deploy to prod
- should have a specific IAM Role per task definition
  - this enforces each task is delineated across business/application usecase
- Always review the service resource spec
  - used to group,k monitor replace adn scale identical tasks
  - determines:
    - how many units (copies) of the task are deployed
    - the resources available to the task at runtime
- use `awsvpc` network mode and ensure each task has its own security group
  - `awsvpc` ensures each task has its own IP with a service-level security group
    - as opposed to isntance-level security groups, which would be a fkn nightmare to manage
- turn on Amazon ECS managed tags and tag propagation

#### ec2 launch type

- [creating a container for use on ecs](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-container-image.html)
- [deploying docker containers on ecs](https://docs.docker.com/cloud/ecs-integration/)

#### fargate launch type

#### ecs on aws outposts

### ECR container registry

- create registry from the web console then click `view push cmds`
  - you generally need to do this once, so that you can connect to the registry and push your images
- supports pub & priv repos with resource-based perms via IAM

#### key components

##### registry

- create one/more priv/pub registries

##### auth token

- each client must auth to ECR as an AWS user before push/pulling images

##### repository

- supports docker, OCI & compatible artifacts

##### repository policy

- control access to the repo itself and images withinm

##### images

- the stored artifacts
- can be pulled/pushed via the aws cli, and run as ECS tasks/services or EKS pods

### fargate ecs serverless runtime for containers

- AWS is responsible for provisioning, configuring and scaling compute resources for containers
- you are responsible for
  - ecs task/service definition
  - operating system, cpu and mem requirements
  - network and IAM policies
  - launch type
- use cases
  - preferred over lambda for complex/long running business logic, e.g. listening to FIFO queues for messages
- costs
  - by container running cpu/memory and time

#### key components

##### clusters

- logical grouping of tasks/services to isolate applications

##### task definitions

- one/more containers comprising an application
- the task def is the unit of scale and can contain up to 10 containers
  - same best practice as normal containers, the other 9 are for sidecars
- each container shares the underlying kernel, cpu and mem resources, and network interface
  - however is isolated from other task defs

###### tasks

- the instantiation of a task def, i.e. task def -> image, task -> container

###### services

- tasks instantiated as services are scheduled via the ECs service scheduler
  - ensures a task def maintains the specified number of task instances at any one time

### EKS elastic kubernetes service

- elastic kubernetes service

## Applications

### app runner: containerized apps and APIs

- deploy containerized web apps and APIs at scale

### elastic beanstalk: heroku knockoff

- while containerized app isnt required, why wouldnt you?
- beanstalk is AWS managed service for applications

## Search

### cloudsearch

- setup, manage and scale application text search

### opensearch

- real-time search, monitoring and analysis based on elasticsearch

## Data Pipelines

### data exchange

- pub/sub for third-party data sources
- seems like AWS has partnered with big-data tech to sell you their data

### glue

- integrate with and build data pipelines across services
- supports various ETL, ELT, batch and streaming pipelines and workloads

### data pipeline

- process and move data between compute/storage onpremise and aws resources

### emr: apache spark, hive and presto data pipelines

- run apache spark, hive, presto etc data workloads
- big data pipelines and processing

### batch

- run batch jobs at any scale
