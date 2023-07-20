# devops tools

- pick the simplest, focused and most reliable tool as possible
- dont use kitchen sinks, you want the best tool for each specific stage of your build pipeline

## links

## ci systems

- jenkins: most common CI system
- cirleCI
- TravisCI

## artifact repositories

- nexus
- jfrog
- apache archiva
- docker registry
- terraform registry
- [harbor](https://goharbor.io/)

## deployment tools

- capistrano (stay way from this, exposing your source control to prod is an anti pattern)
- chef/puppet: depends on you packaging your artifacts as OS packages
- rundeck
- [spinnaker](https://spinnaker.io/)
- ansible (by redhat)
  - automation tool to setup new and appy changes to existing systems

## analytics: monitoring & observability

- [fluentd: unified logging layer](https://www.fluentd.org/)
- [fluentbit: lightweight fluentd](https://fluentbit.io/)
- [grafana: dashboards](https://grafana.com/)
- [prometheus: time series db for monitoring and alerts for containers](https://prometheus.io/)
- [opensearch: search, analytics and monitoring](https://opensearch.org/)

## need to list by (primary) type

- apache bench
- appdynamics
- artifactory
- capistrano
- cfengine
- consul
- datadog
- deployinator
- docker
- docker hub
- elasticsearch
- etcd
- flapjack
- grafana
- graphite
- habitat (by chef)
- icinga
- influxdb (stay away from this, google the reviews)
- jmeter
- k8s
- kibana
- kitchenCI
- librato
- logstash
- mesos
- mitten
- nagios
- netuitive
- new relic
- opentsdb
- packer
- pagerduty
- pingdom
- rerun (bash framework)
- ruxit
- saltstack
- sensu
- splunk
- statsd
- statuspage.io
- sumologic
- sysdig
- ubuntu juju: models infrastructure & services together
- victorops
- zookeeper
