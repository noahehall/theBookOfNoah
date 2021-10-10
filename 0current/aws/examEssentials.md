# various exam notes from vairous places, mostly books

# AWS certified cloud practitioner

## chapter 1: the cloud

- understand how a large and geogrpahically dispered infrastructure improves service quality
  - scale and geographic redundancy provided by AWS means that any company is able to guarnatee a level of reliability and avialability that would be hard to reproduce on premise
- understand how metered, pay per use pricing makes for flexible copmute options
  - pay per use at pennies per hour makes it possible to experiment, sandbox and regularly reasses and update applicatoin stacks
- understand that cloud services come in a wide rage of forms
  - IaaS: near-full control over virtualized harware rsources, closely emulating the way you would adminstrate actual physical servers
  - Paas: products abstract the underlying infrastructure, providing a simplified interface for you to add your application code
  - SaaS: products provide services over a public network directly to end users
- understand how serverless computing can be both cheap and efficient
  - serverless services allow you to access compute power for up to 15 minutes for a single function
  - operate code in response to real time event triggers
- understand how scalability allows applications to grow to meet need
  - automated provisioning of server instances that are designed from scratch to perform a needed compute function within an appropriate network environment
- understand how elasticity matches compute power to both rising and falling demand
  - scaling services should be configured to force compliance with your budget and application needs
  - set the upper and lower limits, and the scalar handles the startups and shutdowns to optimize operations in between those limits

## chapter 2: understanding your AWS acocunt

- understand the value of the 12-month free tier
  - run light services to you comfortable with the AWS enivornment so you can learn how it can be used to host applications
- understand the value of permanent free tier services
  - low-volume consumption includes the retrieve of up to 10 gb of stored object from glacier or 62k outbound emails through amazon ses
  - the goal is to give you the opportunity to launch proof-of-concept deployments
- know how to access amazons resource pricing online documentation
  - to accurately calculat ethe true costs of an AWS deployment, you must understand the pricing fo the particluar level of resources you launch wihtin a particular aws region
- use AWS simple mnthly calculator to accurately model multitiered application stack pricing
  - pricing for all various of the core aws services is prebuilt into the calculator
  - enables yo to model pricing for multiple resource configurations
- use the AWS total cost of ownership calcultor to compare on-premise with AWS deployment costs
  - compare capital expenses for on premise vs operating expenses for cloud
  - know whether the AWS cloud is really right for your workload
- understand the value of cost management tools for avoiding costly cloud overspends
  - aws budgets can be configured to send alerts when resource consumption approaches or passes a preset limit
  - cost explorere provides visualizations to more easily monitor historical and current costs
  - cost and usage reports can send in depth and ongoing csv formatted data to redshift/quicksight for anlaysis
  - use cost allocation tags to more effectively track and manage the source of account costs
  - security and opreations of multiple AWS accounts controlled by a single company can be managed through AWS organizations
