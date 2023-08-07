# DataSync

- secure data migrations

## my thoughts

## links

- [landing page](https://aws.amazon.com/datasync/?did=ap_card&trk=ap_card)

## best practices

### anti patterns

## features

- migrate your data to AWS with end-to-end security, including data encryption and data integrity validation.
- manage data movement workloads with bandwidth throttling, migration scheduling, and task filtering.
- migrate file and object data to the cloud for data replication or archival.
- move data directly to Amazon S3 Glacier archive storage classes.

### pricing

- Pay for the amount of data that you migrate based on a flat, per-gigabyte fee according to your AWS Region
  - fee covers the use of network acceleration technology, managed cloud infrastructure, data validation, and automation capabilities.
- additional charges
  - charged standard request, storage, and data transfer rates for r/w to specific AWS storage services
  - billed by PrivateLink for interface VPC endpoints: manage and control the traffic between your agent(s) and the DataSync service over PrivateLink
  - Copying data to and from S3: standard request charges for the following S3 requests: LIST, HEAD, GET, PUT, and COPY
  - Copying data to and from AWS Regions
  - Using AWS DataSync Discovery: billed by Secrets Manager to store credentials for on-premises storage systems, along with any Secrets Manager API calls made by DataSync to access secrets.

## basics

## considerations

## integrations
