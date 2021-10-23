# TLDR

## links

- [install](https://www.terraform.io/docs/cli/install/apt.html)
- tuts
  - [terraform .tf syntax](https://www.terraform.io/docs/language/index.html)

-

## basics

- terraform: IaC tool for building, changing, and versioning infrastructure
  - e.g. compute instances, storage and networking, DNS entries, SaaS features

  - key features
    - DSL: human readable & declarative config files
    - execution plans: describes what it will do and asks for approval before making any infrastructure CRUD changes
    - resource graph: creates a resource graph then creates|modifies non-dependent resources in parallel
    - change automation: can apply complex changesets to infrastructure wiht minimal human interaction

  - uses cases
    - multi-tier applications
    - self-serve infrastucture
    - software appliances
    - disposable environments
    - software defined networking
    - resource scheduling: i.e. dynamic assignmen of applications to virtual machines
      - e.g. borg, mesos, YARN, kubernetes
      - terraform can use these (as well as physical providers like AWS) as providers to request resources for thim
      - can be used in layers: setup physical infrastructure running the scheudlers as well as provisioning onto the shceduled grid

  - opinions & paradigms
    - technical complexity: different providers use different interaces for provisioning new resources (e.g. aws vs gcp), terraform addresses this by:
      - separating the provisioning workload via a single core engine to read configurations and dtermine the relationships between resources
      - uses provider plugins to create, modify and destroy resources on the infratstructure providers (e.g. aws, gcp, github, dnsimple, etc)

    - organizational complexity: large organizations often have multiple teams relying on the same resources, terraform addresses this by:
      - delegating infrastructure in the same way application components are delegated
      - split infrastructure into modules, each having its own terraform configuration with limited scope and can be owned by specific teams
      - each config should be independent with its own:
        - output variables to publish information
        - remote state resources to access output data from other workspaces
      - each team determines who can
        - develop terraform plans e.g. access to git repositories
        - apply terraform plans to infrastructure e.g. access to AWS

### terminology

- remote state resources: enables access to infrastructure variables (e.g. URI of RDS, etc) from indepedent terraform workspaces
- terraform workspace
- output variables

### core workflow

This core workflow is a loop; the next time you want to make changes, you start the process over from the beginning.

- write: author infrastructure as code

  ```sh
    # Create repository
    # Initialized empty Git repository in /.../my-infra/.git/
    git init my-infra && cd my-infra

    # Write initial config
    vim main.tf

    # Initialize Terraform
    # Initializing provider plugins...
    terraform init
  ```

- plan: preview changes before applying: involves iterating on your `main.tf` and dependent files
  - when you are satisfied with the current plan, always commit your changes

- apply: provision reproducible infrastructure
  - provision the resources and do a final commit
  - always include the terraform plan output in the description for the PR
  - key questions
    - do you expect any service disruption from this change?
    - any part of the execution plan is high risk?
    - what should you watch for as you're applying the change?
    - who needs to be notified that this change is happening?

#### terraform cloud workflow

- write: terraform cloud provides a centrlized locatin for storing input variables and state

  ```js
    terraform {
      // remote indicates terraform cloud
      backend "remote" {
        organization = "my-org"
        workspaces {
          prefix = "my-app-"
        }
      }
    }

  ```

## command reference

```sh
  # initialize terraform, by default uses main.tf in pwd
  terraform init

  # review the infrastructure plan
  # ^ use this as check
  terroform plan

  # displays the final plan before making any changes
  # ^ use this for the final review
  terraform apply

  # dunno
  terraform workspace
    select APP_NAME
```
