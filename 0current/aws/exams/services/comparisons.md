# Comparisons

## database

|          data type           |      relational      |            nosql             |
| :--------------------------: | :------------------: | :--------------------------: |
|        transactional         |         RDS          |           dynamodb           |
| data analytics/relationships | redshift (warehouse) |       neptune (graph)        |
|          in memory           |         n/a          | elasticache(redis/memcached) |

## api gateway

| api type  |                              purpose                              |      workloads      |
| :-------: | :---------------------------------------------------------------: | :-----------------: |
|   rest    | api mgmt, private proxies, backend auth, WAF & resource policies  | edge / private apis |
|   http    | native oidc/oauth2, serverless proxies, cheaper & faster, no mgmt |     low latency     |
| websocket |                      realtime + server push                       |      real time      |
