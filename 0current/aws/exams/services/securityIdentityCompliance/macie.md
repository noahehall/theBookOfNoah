# Macie

- uses machine learning to automatically discover, classify, and protect sensitive data like PII/IP
- such as personally identifiable information (PII) or intellectual property and provides you with dashboards and alerts that give visibility into how this data is being accessed or moved

## my thoughts

- seems to be entirely focused on data stored in s3

## links

- [landing page](https://aws.amazon.com/macie/?did=ap_card&trk=ap_card)
- [custom alerts](https://aws.amazon.com/blogs/security/how-to-create-custom-alerts-with-amazon-macie/)
- [classifying sensitive data](https://aws.amazon.com/blogs/security/classify-sensitive-data-in-your-environment-using-amazon-macie/)
- [data classification](https://d1.awsstatic.com/whitepapers/compliance/AWS_Data_Classification.pdf)

## best practices

### anti patterns

## features

- automate sensitive data discovery at scale
  - identify data with high business value, including programming languages, to detect source code, logging formats, database backup formats, credentials, and API key formats.
- assess S3 bucket inventory for security and access controls
- user behavior analytics engine of Macie helps identify risky or suspicious activity with AWS service API calls and access to high-value content
- Schedule data analysis to certify that sensitive data is discovered and protected.
- During data ingestion, determine if sensitive data has been appropriately protected
- integrate with SIEM services and managed security service provider (MSSP) solutions.

### pricing

- charged based on three dimensions
  - the number of Amazon Simple Storage Service (S3) buckets evaluated for bucket inventory and monitoring
  - the number of Amazon S3 objects monitored for automated data discovery
  - the quantity of data inspected for automated and targeted sensitive data discovery.

## terms

## basics

## considerations

## integrations

### s3

- scanning s3 for
  - bucket and object resources
  - configuration and security attributes
  - Read, write, and delete actions on Amazon S3
  - AWS Identity and Access Management (IAM) users, roles, and access policies associated with the Amazon S3 resources
  - buckets and objects with certain keywords
  - objects containing certain type of data

### Cloudwatch

- discovering relevant data fields collected by Macie and turning those fields into custom alerts.

## eventbridge
