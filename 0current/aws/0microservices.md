# TLDR

- lambda, fargate, SQS, SNS

## basics

### best practices / gotchas

- always
- sometimes
  - push an event from SNS into an SQS queue

## lamda

- event drivent, stateless business logic

## fargate

- to manage container infrastructure

## SQS simple queue service

- a polling based queueing service
  - i.e. rabbitMQ

## SNS simple notification service

- push based messaging system
