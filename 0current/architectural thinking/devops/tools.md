# devops tools

- pick the simplest, focused and most reliable tool as possible
- dont use kitchen sinks, you want the best tool for each specific stage of your build pipeline

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

## deployment tools

- capistrano (stay way from this, exposing your source control to prod is an anti pattern)
- chef/puppet: depends on you packaging your artifacts as OS packages
- rundeck

- ansible (by redhat)
  - automation tool to setup new and appy changes to existing systems

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
- influxdb
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
- prometheus
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
