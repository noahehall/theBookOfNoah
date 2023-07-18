# Web Application Firewall (WAF)

- protect web applications from common exploits

## my thoughts

## links

- [landing page](https://aws.amazon.com/waf/?did=ap_card&trk=ap_card)
- [intro](https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works.html)

## best practices

### anti patterns

## features

- manage multiple WAF deployments with Firewall Manager
- use WAF as a frontdoor to cloudfront, ELB Application Load Balancer, api gateway and appsync
- build policy rules using visual rule builder or json code
- block and filter common vulnerabilities and exploits like SQLi, XSS, IP filtering, or request patterns
- integrate with cloudwatch to monitor incoming traffic
- integrate with kinesis data firehose to tune rules based on request detail metrics and log data

### pricing

- WAF charges
  - number of web ACLS
  - number of rules per web ACL
  - number of inbound requests
- BOT control charges: opt in feature
  - depends on subscription type: common vs targeted
  - then by service: request, captcha and challenge
- Fraud control charges: opt in feature
  - tiered rates by total requests: first 10k, up to 2m, next 3m, next 10m and over 30m

## terms

## basics

## considerations

## integrations
