# AWS certificate manager ACM

- free service to provision, manage, and deploy public and private SSL/TLS certificates for use with AWS services and your internal connected resources.
- encrypt communication and data in transit

## my thoughts

## links

- [landing page](https://aws.amazon.com/certificate-manager/)
- [dns validation](https://aws.amazon.com/blogs/security/easier-certificate-validation-using-dns-with-aws-certificate-manager/)
- [certificate transparency](https://aws.amazon.com/blogs/security/how-to-get-ready-for-certificate-transparency/)

## best practices

### anti patterns

## features

- create/import certs; managed certificate renewal
- public certificates: domain-validated from amazon trust services
- specific/wildcard domain certs + validation of domain ownership via mail/dns

### pricing

- provisioning SSL/TLS certs are free

## basics

## considerations

## integrations

- ACM issued certificates are renewed and automatically bound with ACM integrated services
  - elastic load balancer
  - cloudfront distribution
  - api gateway

### api gateway

- import your own certs or generate an SSL

### route53

### elastic load balancing

- add a listener with HTTPS protocol and a dropdown appears to link an ACM cert
- make sure you edit the load balancers security group to allow https on the specified port

### cloudfront

### nitro enclaves
