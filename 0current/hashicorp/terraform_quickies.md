# TLDR

repeat the last video; too many distractions

## todo

- [terraform import](https://www.terraform.io/docs/cli/import/usage.html)
  - can only import one resource at a time (e.g. not an entire vpc)
- move all of this into terraform.md
- get a list of common AWS output vars
- terraform
  - [modules](https://www.terraform.io/docs/language/modules/index.html)
    - remote modules (e.g. git/registry.terraform.io)
      - always review existing modules on registry.terraform.io before creating your own
    - versioning
    - providers and provider versions
      - generally you dont want to set this
      - as they modules inherit everything from the root module
  - [output vars](https://www.terraform.io/docs/language/values/outputs.html)
  - [state file in depth](https://www.terraform.io/docs/language/state/index.html)
  - [functions in depth](https://www.terraform.io/docs/language/functions/index.html)
    - <https://www.terraform.io/docs/language/functions/can.html>
    - <https://www.terraform.io/docs/language/functions/regex.html>
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

<https://www.terraform.io/docs/language/values/variables.html>

## links

- [all aws resources](https://registry.terraform.io/providers/hashicorp/aws/latest)
- [webgraphviz](http://webgraphviz.com/)
  - never use this for anyting private
  - copypasta `terraform graph` output into it
- [github repo with examples](https://github.com/noahehall/advanced-terraform-2823489)
- aws
  - [aws tag best practices](https://cloudacademy.com/blog/what-are-best-practices-for-tagging-aws-resources/)
  - [aws ami marketplace prefconfigured free search](https://aws.amazon.com/marketplace/search/?sort=AVERAGE_CUSTOMER_RATING-DESCENDING&PRICING_MODEL=FREE&FULFILLMENT_OPTION_TYPE=AMAZON_MACHINE_IMAGE&AMI_ARCHITECTURE=x86_64&AMI_INSTANCE_TYPE=t2.small%2Ct2.micro&AMI_OPERATING_SYSTEM=AMAZON_LINUX%2CUBUNTU%2CDEBIAN%2CCENT_OS%2CRHEL%2COTHER_LINUX%2CFREE_BSD&AVERAGE_CUSTOMER_RATING=4..5&filters=PRICING_MODEL%2CFULFILLMENT_OPTION_TYPE%2CAMI_ARCHITECTURE%2CAMI_INSTANCE_TYPE%2CAMI_OPERATING_SYSTEM%2CAVERAGE_CUSTOMER_RATING)
- tuts
  - [terrform aws networking](https://www.bogotobogo.com/DevOps/Terraform/Terraform-VPC-Subnet-ELB-RouteTable-SecurityGroup-Apache-Server-1.php)
- ref
  - [autoscaling](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/autoscaling_group)
  - [variables](https://www.terraform.io/docs/language/values/variables.html)

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

- configuration: independently deployable collection of hashicorp HCL files
  - i.e. you can execute plan & apply in a single folder
- HCL: DSL: used to describe terraform (and other) configuration
  - way better than yaml/json
  - supports vars, loops, conditions, etc
- deployment: the set of resources created by a terraform configuration
- provider: a cloud/system-specific terraform plugin that upports resource creation for that system
- resource: a thing that can be created in the cloud
  - each resource is scoped to the provider
  - i.e. aws and gcp providers have different types for resources
- module: an isolated, reusable sub-configuration

  - cant be deployed on its own, but can be included in other configs
  - input vars are used to define module behavior

- use cases
  - provisioning automation
    - i.e. create instances of resources in the cloud
  - provider documentation of your infrastructure in the form of code
    - so keep it simple

### best practices

- always
  - put priv vars in the `.tfvars` file
  - put pub vars in the `.vars.tf` file
  - protect your fkn state file
- sometimes
  - terraform should deply premade images with all the configuration already set or retrieved at runtime
  - just name the plan `tfplan` and move on with your life
- never
- gotchas
  - dependencies
  - syntax
    - aws only supports alphanumeric + dashes
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
- architectural diagrams
  - from an ops perspective, gives you the information about how the system is built, so you can configure the current cloud components

### terms

- access keys: i.e. username and pass
  - id: e.g. the username
  - key: e.g. the pass

## quickies

### aws

#### security groups

- basic firewall, assigned to many aws sources
  - define which ips can connect to resource ips & ports

#### vpc

- isolated software defined network

  - dont use the default one, just create one
  - its more manageable

- internet gateway

  - routes requests from the public internet to the vpc and the vpc subnets

- route tables
  - routes traffic from the gateway t the vpc

#### ec2s

- FYI

  - all ec2s must be assigned to a subnet

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
    # bitnami nginx ....

```

#### aws cli

```sh
  aws configure list-profiles
  export AWS_DEFAULT_PROFILE=poop
  aws configure list # safe to execute publicly
  aws configure get aws_access_key_id # dont do this if others can see your log

  aws ec2 create-default-vpc # incase you've deleted it thnking your dope

  # cidr blocks
  "0.0.0.0/0" # any ip
  "1.2.3.4/32" # single ip
```

### terraform errors

```sh
  `resource already exists..you already own it`
  # ^ just rerun terraform apply
  `tags not expected here...
  # ^ are you using `tags = {}` or `tags {}`
  `invalid reference`
  # ^ youve defined a variable it cant find

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
    # ^ also poop.flush.0.attribute
    # point to all resources out of many
    argument = provider_resource_type.resource_name[*].attribute
    # ^ also poop.flush.*.attribute
  # dependencies
  # ^ link resources by subscribing one to another
    # link an ec2 resource to an security group resource
      vpc_security_group_ids = [
        aws_security_group.RESOURCENAME.id
      ]

  # aws resource types
    resource "providerName_componentName" "internalName" { # e.g. "this" i.e. this thing
      name = "external-name" # e.g. its name in aws console
      name = "${var.someName}-dev" # generally you should do something like this
      tags = {
        Terraform = "true"
        Name = "internal-name"
      }
    }

    # variables
    # ^ defined in files/cli
    # ^^ any file ending in .tf obviously
    # ^^ Files named exactly terraform.tfvars or terraform.tfvars.json.
    # ^^ Any files with names ending in .auto.tfvars or .auto.tfvars.json.
    # ^^ precedence, in increasing order
      # Environment variables
      # The terraform.tfvars file, if present.
      # The terraform.tfvars.json file, if present.
      # Any *.auto.tfvars or *.auto.tfvars.json files, processed in lexical order of their filenames.
      # Any -var and -var-file options on the command line, in the order they are provided. (This includes variables set by a Terraform Cloud workspace.)
    # terraform apply -var-file="testing.tfvars"
    # ^ only contain name assignments
      # in hcl
        poop = true
        flush = false
      # in json
        {
          "image_id": "ami-abc123",
          "availability_zone_names": ["us-west-1a", "us-west-1c"]
        }
      # as env vars
      # ^ anything prefixed with TF_VAR_
        export TF_VAR_image_id=ami-abc123
    # ^ types
      string # "flush"
      number # 0
      bool # true
      any # can be anything
      set (TYPE)
      map (TYPE)
      object { varName = TYPE }
      tuple [TYPE, ...]
      list(string) # ["flush"]
      list(object({ poop = string })) # [ { poop = "flush" }]
    # ^ validation
      validation {
        # can only refer to var the condition applies to
        condition     = length(var.image_id) > 4 && substr(var.image_id, 0, 4) == "ami-"
        error_message = "The image_id value must be a valid AMI id, starting with \"ami-\"."
      }
    # sensitive (i.e. private)
    # ^ dont log in plan/apply output
    # ^^ or other vars that depend on it
    # ^^ A provider error could disclose a value if that value is included in the error messag
    # ^ but are still available in the state file, protect your state file
    # ^ definition
      variable "something" {
        type = "string"
        default = "value" # static value, cannot be dynamic
        description = "whatev"
        validation =
        sensitive = true
      }
      # ^ var.something
      # ^ terraform apply -var="something=poop"

    # data sources
    # ^ files/retrieved from elseware (aws, another tf config, etc)
    # ^ the attributes are query parameters
    # ^ it will query the provider_component for matching resources
    # ^ and return whatever it finds
      data "provider_component" "something" {
        most_recent = true
        # or a canonical ID of a user (if not current user)
        owners = ["self"]
        tags = {
          poop = "flush"
        }
        filter {
          name = "name"
          values = ["some/value"]
        }
      }
        # ^ e.g. data.aws_ami.something.id


    # using defaults -------------------
    # ^ 2 default subnets in the defualt vpc
    "aws_default_subnet" "default_az-1" {
      availability_zone = "us-west-2a"
    }
    "aws_default_subnet" "default_az2" {
      availability_zone = "us-west-2b"
    }
    "aws_default_vpc" "default" {}

    # creating new ---------------------

    # when using a launch template
    # ^ make sure to remove any configuration from resources
    # ^ that will be applied via the launch template
    aws_launch_template
      name_prefix
      image_id
      instance_type

    aws_autoscaling_group
      availability_zones = []
      desired_capacity
      max_size
      min_size
      launch_template
        id
        version
      # different syntx, as it applies to all components it launches
      tag
        key
        value
        propagate_at_launch = true # assign at launch

    aws_elb
      name
      instances = aws_instance.NAME[*].id
      subnets = [
        aws_default_subnet.default_az-1.id,
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
      -json # useful for consuming in scripts
    push # update remote state, dont do this
    replace-provider
    show nameFromListCmd # show the state of a resource

```

### terraform data

- data sources: allow a config to query for external query

```sh


```

### terraform show

- review a terraform state/plan file

```sh

  terraform show tfplan
```

### terraform graph

- outputs the execution plan visually, super useful
  - uses dot syntax: common way to define graphs

```sh

  terraform graph
    --help
    -plan tfplan
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
    # then always use, e.g. terraform apply "tfplan"
    # then later you can inspect, terraform show tfplan
    -out tfplan # use separate names for plan & destroy
    -auto-approve # dont ask for confirmation
    -destroy # see whats going to be removed
```

### terraform apply

```sh

  terraform apply "tfplan"


```

### modules

- best practices
  - root module vs child module
    - root: should be applied to all environments (generally not configurable)
    - child: should be defined per environment (configurable, put in a module!)
  - put child modules in `/modules/thing`
  - conventions:
    - `main.tf` file as the index
    - `variables.tf` file to define input vars
    - `outputs.tf` file to define the output vars
    - `README.md` to describe the module
    - ^ i dont agree with most of this shiz
      - always scope your files to the fkn component
        - who the fk knows whats its `main.tf` by scanning the dir?
        - how fkn long will your `{variables,outputs}.tf` files be? shiz iz studip
- combine code into a logical group that can be managed holistically
- pass in arguments for that block
- all code is actually a module
  - known as `root`
  - and all your var definitions are passed as `input vars` into the root module
- you cant access data from a module unless you output it specifically

```sh
  # best practices
  # ^ all modules should have a `main.tf` file as the index
  module "some_name" {
    source = "./some/dir"

    # input vars
    poop = "yes"
    flush = false

    # output vars
    output "something" {
      value = aws_instance.someName.public_ip
    }
    output "something_else" {
      value = aws_s3_bucket.someName.bucket
    }
  }
  # within ./some/dir/file.tf
  # define the input vars it expects
    variable "poop" {
      default = "yes"
    }
    variable "flush" {
      default = true
    }
  # within an another module (anywhere)
  # ^ define the input vars it expects to be output from another module
  resource "providerThing" "someName" {
    poop = module.moduleName.varName
  }



```

### backends

- remote storage of state
- allow teams to delegate and share resources
  - e.g. some users can read
  - e.g. some users can write
