# TLDR

todo: move all of this into terraform.md

## links

- [webgraphviz](http://webgraphviz.com/)
  - if your dumb enough to use this
  - copypasta `terraform graph` output into it

## basics

- infrastructure management tool
  - define infrastructure as code
  - use data from one resource, to define another resource
    - manages the provisioning, so that dependencies are created in the correct order
- provisision management & maintain cloud resources
- a languauge for describing infrastructure
- managing the base infrastructure, but not changing whats running on the server once its deployed
  - config management tool can then be used to manage the apps on the deployed resources
  - i.e. terraform sets up the canvas
  - i.e. config manage (e.g. packer) paints the picture
    - can be handled by provisioners

### best practices

- always
- sometimes
  - terraform should deply premade images with all the configuration already set or retrieved at runtime

  -

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

## quickies (in order of memorization)

### aws cli

```sh
aws configure list-profiles
```

### aws terraform user

- iam > create user > programmatic access (no console access)
- whats the minimal IAM policy
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

### terraform graph

- outputs the execution plan visually, super useful
  - uses dot syntax: common way to define graphs

```sh

  terraform graph
    --help
    -plan someplan.tfplan
    -type plan|plan-destroy|apply|validate|input|refresh
    -draw-cycles

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
    -out ENV_NAME.tfplan
    -destroy # see whats going to be removed
```

### terraform show

```sh

  terraform show someplan.tfplan
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
