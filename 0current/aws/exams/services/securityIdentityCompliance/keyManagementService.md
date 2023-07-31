# key management service (KMS)

- managed creation and control of encryption keys
- tightly integrated with managed services for encryption at rest and inflight

## my thoughts

## links

- [landing page](https://aws.amazon.com/kms/?did=ap_card&trk=ap_card)
- [faqs](https://aws.amazon.com/kms/faqs/?da=sec&sec=prep)
- [protecting SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html)

## best practices

### anti patterns

## features

- centrally manage keys and define policies across integrated services and applications
- encrypt data within applications using an sdk
- sign and validate diginal signatures using asymmetric key pairs
- generate HMACs that ensure message integrity and authenticity

### pricing

- each key costs $1/month

## terms

## basics

## considerations

- key types
  - symmetric
  - assymetric
  - HMAC
  - multi-region (primary and replica)
  - keys with imported key material

## integrations

- generally all AWS services can utilize KMS and encrypt traffi in flict
