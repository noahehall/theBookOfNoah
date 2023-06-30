```sh
## query a load balancer to retrieve a resource url
# the example had an additional sed script to pull the url, but fk sed
# ^ TODO(noah): convert this to a nimscript
aws elbv2 describe-load-balancers \
  --load-balancer-arns arn:aws:elasticloadbalancing:some-region::some/load/blancer/name \
  | jq '.LoadBalancers[].DNSName'
```
