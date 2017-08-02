# [home](https://aws.amazon.com/ecs/)

# basics
  - define a pool of compute resources called a 'cluster' consisting of one/more ec2 instances
  - amazon ECS manages the state of all container-based applications running in your cluster
    - provides telemtery loggin,manages capacity utilization,
  - create task definitions which are used to define a grouping of containers that comprise your application
    - each container in the task definition specifies the resources required by that container, and amazon ecs will schedule the task for execution
