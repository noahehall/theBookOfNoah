# key management service (KMS)

- centrally manage creation and control of encryption keys
- tightly integrated with managed services for encryption at rest and inflight

## my thoughts

## links

- [landing page](https://aws.amazon.com/kms/?did=ap_card&trk=ap_card)
- [faqs](https://aws.amazon.com/kms/faqs/?da=sec&sec=prep)
- [protecting SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html)
- [cryptographic details pdf](https://d0.awsstatic.com/whitepapers/KMS-Cryptographic-Details.pdf)
- [best practices pdf](https://d0.awsstatic.com/whitepapers/aws-kms-best-practices.pdf)

## best practices

### anti patterns

## features

- centrally manage keys and define policies across integrated services and applications
- encrypt data locally within applications using an sdk
- sign and validate diginal signatures using asymmetric key pairs
- generate HMACs that ensure message integrity and authenticity
- control access to your encrypted data by defining the permissions to use the keys while AWS KMS enforces your permissions and handles the durability and physical security of your keys.
  - a single control point to manage keys and define policies consistently across integrated AWS services and your own applications.
-

### pricing

- each CMK costs $1/month

## basics

- You submit data to AWS KMS to be encrypted or decrypted under keys that you control.
  - the keys never leave KMS
  - set usage policies on these keys that determine which users can use them to encrypt and decrypt data

### Customer Master Keys

- aws managed
  - creation: AWS
  - rotation: automatically once every 3 years
  - deletion: cant be deleted
  - scope of use: a key generated for each specific service
  - key access policy: AWS managed
  - user access management: IAM policy
- customer managed
  - creation: you
  - rotation: opt-in to once a year or manually
  - deletion: manually
  - scope of use: controlled via KMS / IAM policy
  - key access policy: you decide
  - user access management: IAM policy

## considerations

- key types
  - symmetric
  - assymetric
  - HMAC
  - multi-region (primary and replica)
  - keys with imported key material

## integrations

- generally all AWS services can utilize KMS and encrypt traffi in flict

### cloudtrail

- All requests to use these keys are logged

### s3

- server side encryption
- KMS generates a unique key to encrypt each object transparently to the user
  - the data key is encrypted under a master key provided by aws/user
