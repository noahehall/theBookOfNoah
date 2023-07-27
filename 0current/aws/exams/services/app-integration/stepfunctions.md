# Step Functions

- Visual workflows for distributed applications

## links

- [landing page](https://aws.amazon.com/step-functions/?did=ap_card&trk=ap_card)
- [activities](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-activities.html)
- [error handling](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html)
- [tasks](https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-task-state.html)
- [connecting to resources](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html)
- [standard vs express workflows](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html)
- [dev guide intro](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html)
- [integrations](https://docs.aws.amazon.com/step-functions/latest/dg/connect-supported-services.html)

## best practices

- A common use case for Step Functions is tasks that requires human intervention, such as a manual approval process in a workflow

### anti patterns

## features

- drag and drop interface with the workflow studio
- automate workflows across most AWS services
- visualize an develop resilent workflows for event driven architectures
- automate ETL processes, security and IT functions
- orchestrate microservices, coordinate distributed components and other large-scale parallel workflows without the need for code changes
  - retry logic, rollbacks, debugging, etc

### pricing

- charged based on the number of state transitions required to execute a workflow
- charged for the total number of state transitions across all state machines, including retries

## basics

### tasks

- perform work using lambdas, fargate, batch/etc or passing parameters to API actions of other services
- wait states: you dont incure charges for awaited lambdas; you incur charges for transitions, not time within a state
- callback tasks: pause a workflow indefinitely until a task token is returned

### activities and workers

- activities: your application
- activity workers: execute application code and report success/failure

### integration patterns

- sequential: Iterates through each state in your state machine in sequential order
- parallel: Used to create parallel branches in your state machine
- conditional: Adds branching logic to your state machine
- loops: retry logic; Iterates on your state machine task a specific number of times
- try catch finally: for un/known errors; Deals with errors and exceptions automatically based on your defined business logic

## considerations

## integrations

### lambdas

- for tasks <= 15 minutes; best to use with wait states

### fargate

- tasks 15 minutes

### batch

- for batch jobs
