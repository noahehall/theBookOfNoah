# TLDR

todo:

- move all of this into terraform.md
- [aws license manager](https://console.aws.amazon.com/license-manager)
- aws
  - architecture
    - autoscaling groups (ASG)
      - vpc_zone_identifier for autoscaling groups
        - use the subne ids
      - launch template
      - autoscaling
  - netowrking
    - load balancing
      - dns names + cnames
      - [application load balancer (v2)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)
      - [elastic load balancer (v1)](https://docs.aws.amazon.com/elasticloadbalancing/index.html)

## links

- [webgraphviz](http://webgraphviz.com/)
  - if your dumb enough to use this
  - copypasta `terraform graph` output into it
- [aws tag best practices](https://cloudacademy.com/blog/what-are-best-practices-for-tagging-aws-resources/)
- [aws ami marketplace prefconfigured free search](https://aws.amazon.com/marketplace/search/?sort=AVERAGE_CUSTOMER_RATING-DESCENDING&PRICING_MODEL=FREE&FULFILLMENT_OPTION_TYPE=AMAZON_MACHINE_IMAGE&AMI_ARCHITECTURE=x86_64&AMI_INSTANCE_TYPE=t2.small%2Ct2.micro&AMI_OPERATING_SYSTEM=AMAZON_LINUX%2CUBUNTU%2CDEBIAN%2CCENT_OS%2CRHEL%2COTHER_LINUX%2CFREE_BSD&AVERAGE_CUSTOMER_RATING=4..5&filters=PRICING_MODEL%2CFULFILLMENT_OPTION_TYPE%2CAMI_ARCHITECTURE%2CAMI_INSTANCE_TYPE%2CAMI_OPERATING_SYSTEM%2CAVERAGE_CUSTOMER_RATING)
- tuts
  - [terrform aws networking](https://www.bogotobogo.com/DevOps/Terraform/Terraform-VPC-Subnet-ELB-RouteTable-SecurityGroup-Apache-Server-1.php)

## basics

- infrastructure management tool
- provisision, manage & maintain cloud resources
  - the base infrastructure, but not changing whats running on the server once its deployed
- define infrastructure as code
- use data from one resource, to define another resource
- dependencies are created in the correct order
- a languauge for describing infrastructure
- config management tool can then be used to manage the apps on the deployed resources
  - i.e. terraform sets up the canvas
  - i.e. config manage (e.g. packer) paints the picture
    - can be handled by provisioners

### best practices

- always
- sometimes
  - terraform should deply premade images with all the configuration already set or retrieved at runtime
- never
- gotchas
  - networking
    - aws load balancers cant use elastic ip addresses
      - have to use dns names

### bffs

- config management (e.g. packer)
- load balancer (e.g. haproxy)
- immutable infrastructure
  - basically everything is readonly, even system disks
- service oriented architecture
- containers (e.g. docker / k8s)
- the cloud
  - security groups (base firewall)
- terraform.io
  - hosted version of terraform
  - connects to version control (git{hub,lab})

### terms

- access keys: i.e. username and pass
  - id: e.g. the username
  - key: e.g. the pass

## quickies

### aws

#### amis

- [see your subscriptions](https://console.aws.amazon.com/marketplace/home/subscriptions?#/subscriptions)
- find one in the marketplace > subscribe > grab the ami id on the configuration page (but dont launch)

```sh
  # free -------------------------------
    # Sentry Error Tracker created by Momate
      # https://aws.amazon.com/marketplace/pp/prodview-pmduc6rbmju76?sr=0-2&ref_=beagle&applicationId=AWSMPContessa
          Sentry 9.1.2
          nginx 1.14.0
          Redis 4.0.11
          PostgreSQL 10.9
          Separate 4G swap disk
          System tuning optimizations

```

#### aws cli

```sh
  aws configure list-profiles
  export AWS_DEFAULT_PROFILE=poop
  aws configure list
  aws configure get aws_access_key_id

  aws ec2 create-default-vpc

  # cidr blocks
  "0.0.0.0/0" # any ip
  "1.2.3.4/32" # single ip
```

## terraform errors

```sh
  resource already exists..you already own it
  # ^ just rerun terraform apply

```

### terraform syntax

- conventions
  - terraform filenames
    - `component-env-region-etc.tf`
      - ^ `specific-to-general-decription.tf`
  - readiability first
    - always `terraform fmt`
    - 2 spaces
    - meta-arguments first `poop = flush`
      - things for terraform
    - simple arguments `poop = flush`
      - single assignments for providers
    - block meta-arguments last `{...}`
      - block arguments for providers
    - blank lines between things
  - variables
    - most things should be, but other things shouldnt (even tho they can)

- meta-arguments: attributes for terraform, not the providers
- `resource`: building blocks of terraform; define the `what` of your infrastructure
  - all resource share the same syntx, but different providers have different settings
- `provider`: where the resources live/should go

```sh
  # basics
    # point to a single reosurce
    argument = provider_resource_type.resource_name.attribute
    # can also use poop.INT.attribute
    # point to a single resource out of many
    argument = provider_resource_type.resource_name[0].attribute
    # point to all resources out of many
    argument = provider_resource_type.resource_name[*].attribute
  # dependencies
  # ^ link resources by subscribing one to another
    # link an ec2 resource to an security group resource
      vpc_security_group_ids = [
        aws_security_group.RESOURCENAME.id
      ]

  # aws resource types
    resource "providerName_componentName" "externalName" {
      name = "internal-name"

      tags = {
        Terraform = "true"
        Name = "internal-name"
      }
    }

    # using defaults -------------------
    # ^ 2 default subnets in the defualt vpc
    "aws_default_subnet" "default_az1" {
      availability_zone = "us-west-2a"
    }
    "aws_default_subnet" "default_az2" {
      availability_zone = "us-west-2b"
    }
    "aws_default_vpc" "default" {}

    # creating new ---------------------
    aws_elb
      name
      instances = aws_instance.NAME[*].id
      subnets = [
        aws_default_subnet.default_az1.id,
        aws_default_subnet.default_az2.id
      ]
      security_groups = [
        aws_security_group.default.id
      ]

    aws_s3_bucket
      bucket
      acl
      policy
      website
        index_document
        error_document

    aws_default_vpc
      cidr_block
      enable_dns_support
      enable_dns_hostnames
      instance_tenancy
      # use the defualt vpc
      # "aws_default_vpc" "default {}


    aws_security_group
      ingress { # what to allow in, one per port/range
        from_port
        to_port
        protocol
        cidr_blocks
        security_groups
      }
      egress {
        from_port # 0 for all
        to_port # 0 for all
        protocol # "-1" for all
        cidr_blocks
        security_groups
      }

    aws_instance # ec2
      count = 1 # number of instances (e.g. autoscaling)
      ami
      instance_type
      vpc_security_group_ids

      network_interface
        device_index
        security_groups
      lifecycle
        create_before_destroy
        terminate_at


    # elastic ip

    # ^ but doesnt scale
    aws_eip
      # use this when your assigning it directly
      # else remove this attribute and use aws_eip_association block
      instance
      vpc
    # associate an eip with resources
    # use this when you need to scale
    # ^ e.g. create an eip for each instance
    aws_eip_association
      instance_id = aws_instance.instance.id
      allocation_id = aws_eip.RESOURCENAME.id
      network_interface_id
      private_ip_address
      public_ip

  # global attributes
    name
    description

    tags = {} # common tags to apply
      Terraform = "true" # always add this tag
      Name
      Description
      Owner
      Environment
      Project
      OwnerEmail
      OwnerPhone

    aws acls
      private
      public-read
      public-read-write
      authenticated-read
      bucket-owner-read
      bucket-owner-full-control
      log-delivery-write

```

### aws terraform user

- iam > create user > programmatic access (no console access)
- whats the minimal IAM policy for terraform
  - [read through this](https://github.com/hashicorp/terraform/issues/2834)

### terraform state

- terraform state
  - state file: `terraform.tfstate`
    - what terraform knows about the infrastructure (ips, names, tags, etc)
  - state of provisioned resources
    - whats actually exists
    - always refresh the state file to ensure they're insync

```sh
  terraform state
    --help
    list # get a list of all resources
    pull # pull & console resource state from cloud
    push # update remote state, dont do this
    replace-provider
    show nameFromListCmd # show the state of a resource
      -json # useful for consuming in scripts

```

### terraform show

- review a terraform state/plan file

```sh

  terraform show someplan.tfplan
```

### terraform graph

- outputs the execution plan visually, super useful
  - uses dot syntax: common way to define graphs

```sh

  terraform graph
    --help
    -plan someplan.tfplan
    -type plan|plan-destroy|apply|validate|input|refresh
    -draw-cycles

  # examples
    terraform graph | grep -v -e 'meta' -e 'close' # filter out things youre not interested in
     # add -e 's3' -e 'vpc' -e 'etc' # to continue to filter  out things y

```

### terraform plan

- always plan before applying anything
- always save the plan to file
- always use the saved plan when modifying cloud resources

```sh
  # code > compares to state > outputs changes > yes? > uses the provider to apply the changes
  # directed (has an order) acyclic (no cyclical deps) graph: how terraform manages dependencies
  # ^ i.e. each resource is a node, and each dependnecy is an edge
  # ^ you cannot have two deps that depend on each other (acyclic)
  terraform plan
    --help
    # always end cmds with this
    # then always use, e.g. terraform apply "plan.tfplan"
    # then later you can inspect, terraform show plan.tfplan
    -out NAME.tfplan # use separate names for plan & destroy
    -auto-approve # dont ask for confirmation
    -destroy # see whats going to be removed
```

### terraform apply

```sh

  terraform apply "somename.tfplan"


```

### backends

- remote storage of state
- allow teams to delegate and share resources
  - e.g. some users can read
  - e.g. some users can write
