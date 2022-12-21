# terraform

## links

- [terraform cloud](https://app.terraform.io/app/getting-started)
  - they offer free accounts for opensource
- [install](https://www.terraform.io/docs/cli/install/apt.html)
- [evaluating existing infrastructure](https://www.terraform.io/docs/cloud/guides/recommended-practices/part2.html)
- [aws provider examples on github](https://github.com/hashicorp/terraform-provider-aws/tree/master/examples)
- [hashicorp github terroform example](https://github.com/hashicorp/tfc-guide-example)
- [terraform usescases with links to docs](https://developer.hashicorp.com/terraform/intro/use-cases)
- blogs
  - [updating rds using terraform](https://medium.com/hashicorp-engineering/upgrading-aurora-rds-using-terraform-3836a62757f)
  - [terraform design pattern 1](https://apparently.me.uk/terraform-environment-application-pattern/bonus-patterns.html)
  - [design pattern 2](https://apparently.me.uk/terraform-environment-application-pattern/join-environment-module.html)
  - [module output](https://jeffbrown.tech/terraform-module-output/)
- specs
  - [all terraform docs](https://www.terraform.io/docs/index.html)
  - [remote state](https://www.terraform.io/docs/language/state/remote-state-data.html)
  - [providers](https://www.terraform.io/docs/language/providers/index.html)
  - [terraform registry publishing](https://www.terraform.io/docs/registry/index.html)
  - [terraform .tf syntax](https://www.terraform.io/docs/language/index.html)
  - [terraform state](https://www.terraform.io/docs/cli/commands/state/index.html)
  - [terraform cidrsubnet fn](https://developer.hashicorp.com/terraform/language/functions/cidrsubnet)
- resources
  - [resource behavior](https://developer.hashicorp.com/terraform/language/resources/behavior#resource-dependencies)
  - [aws_vpc](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc)
- variables
  - [output values](https://www.terraform.io/docs/language/values/outputs.html)
  - [named values in tf files](https://developer.hashicorp.com/terraform/language/expressions/references)
  - [input variables](https://developer.hashicorp.com/terraform/language/values/variables)
  - [terraform cloud workspace vars](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-remote)
  - [blog post](https://yellowdesert.consulting/2021/05/31/terraform-map-and-object-patterns/)
  - [dynamic key expressions](https://stackoverflow.com/questions/35491987/variable-keys-in-terraform-maps)
  - [test for string emptyness](https://stackoverflow.com/questions/56967975/is-an-non-empty-string-truthy-in-terraform)
  - [operators](https://developer.hashicorp.com/terraform/language/expressions/operators)
  - [output values](https://developer.hashicorp.com/terraform/language/values/outputs)
- modules
  - [creation pattern best practices](https://developer.hashicorp.com/terraform/tutorials/modules/pattern-module-creation)
  - [terraform modules list](https://github.com/terraform-aws-modules)
  - [overview](https://developer.hashicorp.com/terraform/tutorials/modules/module)
  - [terraform modules](https://www.terraform.io/docs/language/modules/develop/index.html)
  - [build and use local modules](https://developer.hashicorp.com/terraform/tutorials/modules/module-create)
  - [example git](https://github.com/hashicorp/learn-terraform-modules-create)
  - [refactoring modules with move block](https://developer.hashicorp.com/terraform/language/modules/develop/refactoring)
  - [module composition](https://developer.hashicorp.com/terraform/language/modules/develop/composition)
- functions
  - [merge objects/maps](https://developer.hashicorp.com/terraform/language/functions/merge)
  - [all fns](https://developer.hashicorp.com/terraform/language/functions)
  - [expressions: for, splat, blocks, repeated dynamic blocks, etc](https://developer.hashicorp.com/terraform/language/expressions)]
  - [dynamic blocks](https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks)
- tuts
  - [all preparation for associate certification](https://learn.hashicorp.com/collections/terraform/certification)
  - [all aws tutorials](https://learn.hashicorp.com/collections/terraform/aws-get-started)
  - [all associate tuturials](https://learn.hashicorp.com/collections/terraform/certification-associate-tutorials)
  - [terraform + aws](https://learn.hashicorp.com/collections/terraform/aws-get-started)
  - [automating terraform](https://learn.hashicorp.com/tutorials/terraform/automate-terraform?in=terraform/automation)
  - [build aws infrastructure](https://learn.hashicorp.com/tutorials/terraform/aws-build)
  - completed
    - [terraform + docker](https://learn.hashicorp.com/collections/terraform/docker-get-started)
    - [aws getting started](https://learn.hashicorp.com/collections/terraform/aws-get-started)
- providers
  - [all providers](https://registry.terraform.io/browse/providers)
  - [all aws documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
  - [vault](https://registry.terraform.io/providers/hashicorp/vault/latest/docs)
  - [docker provider](https://registry.terraform.io/providers/kreuzwerker/docker/latest)
  - [hashicorp aws](https://registry.terraform.io/providers/hashicorp/aws/latest)
  - [cloud init provider](https://registry.terraform.io/providers/hashicorp/cloudinit/latest/docs)
- cloud
  - [migrate state to cloud](https://developer.hashicorp.com/terraform/tutorials/cloud/cloud-migrate)
  - [sharing data across cloud workspaces](https://developer.hashicorp.com/terraform/tutorials/cloud/cloud-run-triggers)
- provisioning
  - [via cloud-init](https://developer.hashicorp.com/terraform/tutorials/provision/cloud-init)
  - [via packer (todo)]

## basics

### best practices

- NEVER
  - workspaces
    - dont use a single terraform workspace to manage everything that makes up production/staging/etc
      - instead make smaller workspaces that are easy to delegate and drop
- ALWAYS
  - workspaces
    - should be named with both their component and their env, e.g. appname-dev, appname-staging
    - use per-workspace access controls and delegate ownership of components and regulate code promotion across envs
      - e.g. appname-dev is owned by one tam, and to promote to appname-staging another team is responsible (or perhaps the same lead) for approving infrastructure changes
  - output values
    - always specify an `outputs.tf` file specifying which runtime values need to be available for other infrastructure components
      - this is how you connect terraform projects with other parts of your infrastructure, or with other terraform projects
- SOMETIMES
  - split out configuration into multiple files and module directories
    - the amount of files & modules depends on your strategy for managing the complexity technically, and socially with your team
    - SINGLE `main.tf` file: things to watch for
      - understanding and navigating the config files will become increasingly difficult
      - updating configuration will be more risky: as an update to one sectin may cause unintended consequences in other parts of the configuration
      - there will be increased duplication of similar blocks of configuration, e.g. when creating dev/staging/productin environments
      - sharing parts of the config between projects and teams will involve a lot of copypasta
    - modules:
      - use cases
        - organization configuration: easier to navigate, understand, update and organize configuration into logical components
        - encapsulate configuration: into distinct logical components; prevents leakage, e.g. a change to one part of the config causing changes to other parts;
        - re-use configuration: modules can be re-used across teams, projects, and organizations (if they publish modules to the cloud)
        - provide consistency and best practices: by re-using modules, you ensure you can leverage the right practices used by more experiences devs
      - recommendations
        - name your provider `terraform-PROVIDER-NAME` (must be followed to publish this to terraform cloud/enterprise registries)
        - write your configuration with modules in mind
        - use local modules to organize & encapsulate your code,
          - even if you arent publishing remote modules, by starting with modules its easier to maintain and update while the project is new than transforming an existing monolith
        - rely on modules from public registry (as you would in any other setting) and dont reinvent the wheel

### about

- terraform: IaC tool for building, changing, and versioning infrastructure

  - e.g. compute instances, storage and networking, DNS entries, SaaS features
  - key features
    - DSL: human readable & declarative config files utilizing hashicorp HCL
    - execution plans: describes what it will do and asks for approval before making any infrastructure CRUD changes
    - resource graph: creates a resource graph then creates|modifies non-dependent resources in parallel
    - change automation: can apply complex changesets to infrastructure wiht minimal human interaction
  - uses cases
    - multi-tier applications
    - self-serve infrastucture
    - software appliances
    - disposable environments
    - software defined networking
    - resource scheduling: i.e. dynamic assignment of applications to virtual machines
      - e.g. borg, mesos, YARN, kubernetes
      - terraform can use these (as well as physical providers like AWS) as providers to request resources for thim
      - can be used in layers: setup physical infrastructure running the scheudlers as well as provisioning onto the schedule grid
  - opinions & paradigms
    - technical complexity: different providers use different interfaces for provisioning new resources (e.g. aws vs gcp), terraform addresses this by:
      - separating the provisioning workload via a single core engine to read configurations and determine the relationships between resources
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

- remote state resources: enables access to infrastructure variables (e.g. URI of RDS, etc) from independent terraform workspaces
- output values: organize data to be easily queried and displayed to the terraform user
- input variables: values that end users can assign to customize the terraform configuration
- modules: sharable configuration for independent logical infrastructure components in a single directory

## workflow

This core workflow is a loop; the next time you want to make changes, you start the process over from the beginning.

```sh
  # login to terraform cloud
  # ^ will open browser to retrieve token, saved to ~/.terraform.d/credentials.tfrc.json
  # ^ if browser doenst open, go here: https://app.terraform.io/app/settings/token?source=terraform-login
  terraform login

  # Create repository
  # Initialized empty Git repository in /.../my-infra/.git/
  git init my-infra && cd my-infra

  # Write initial config
  vim main.tf

  # get help
  terraform -help
    plan
    apply

  # install cmdlin completion
  terraform -install-autocomplete

  # general workflow
  terraform init # always when creating/checking out from git; will install provider plugins and store state in any remote backends
    # ^ make sure to delete any local statefiles if using a remote backend (as thats where it should be stored)
  terraform fmt # lint files
  terraform validate # validate syntax
  terraform plan # review while iterating
  terraform apply # (re)provision resources and update outputs.tf if it exists
  terraform show # review statefile after provisioning
  terraform state list # list provisioned resource names
  terraform output # review output values specified in the `outputs.tf` file generated via `terraform apply`
  terraform destroy # destroy all resources
```

### dev cycle

- workspace: ensure your in the correct fkn workspace idiot
  - the basic unit of terraform cloud infrastructure configuration
  - contains terraform config files, env vars, input vars, and state files
    - everything needed to managed a given collection of infrastructure
- scope: identify the infrastructure for the workspace
  - you'll need to identify every single resource
  - if they already exist, you can use `tf import`
- write: author infrastructure as code
  - for every resource in scope, write configuration files that can be used to recreate them
- initialize: install the plugins terraform needs to manage the infrastructure
- plan: preview changes terraform will make to match your configuration: involves iterating on your `main.tf` and dependent files
  - when you are satisfied with the current plan, always commit your changes
- apply: provision reproducible infrastructure
  - provision the resources and do a final commit
  - always include the terraform plan output in the description for the PR
  - key questions
    - do you expect any service disruption from this change?
    - any part of the execution plan is high risk?
    - what should you watch for as you're applying the change?
    - who needs to be notified that this change is happening?

### VCS-driven workflow

- you must specify a `remote backend` block, e.g. in the `main|versions.tf` file
- UI
  - runs: list of all the plan and apply actions that have been executed
  - states: state of the workspace after each successful run
  - variables: configure terraform & environment variables
  - settings: all the terraform cloud settings for the workspace
    - destroy infra
      - queue destroy plan: destroys all infrastructure manaed by the workspace
      - delete from terraform cloud: deletes workspace form terraform cloud
        - WITHOUT destroying infrastructure, i.e. any aws resources will still exist
    - speculate plans: show you the changes terraform would make if you perge a pull requests
      - plan-only runs: cannot apply the propose infrastructure until you merge the PR
      - temporary: will not appear in cloud logs
      - individual: can only access them from a direct link on a github PR
      - non-destructive: no action is taken, infrastructure is not provisioned
  - lock icon: if locked, no one can trigger runs
  - actions: lock the workspace/trigger new runs
    - e.g. if you change vars defined in the UI, you can execute a plan to refresh the provisioned resources
- write: create/update config files
- commit: commit config files to github
- workspace: connect the git repo to a new/existing terraform cloud workspace
- variables: define terraform and environment variables
  - anything you want end users to customize, credentials, and other sensitive values
    - be warned, UI variables override local variables defined in any `*.tf` files
  - variables marked `sensitive` are write only, and not displayed in the terraform UI
  - terraform variables: will be injected as input variables into terraforms configuration language
    - use them to customize the infrastructure that terraform creates
  - environment variables: are taken from the environment
    - enables you to specify env vars in the UI, and override them in localhost
      - e.g. specifying private creds in the UI, but developers can use their own creds locally
- plan & apply: execute terraform cloud runs to manage infrastructure
  - either via terraform cloud UI/opening pull requests in your VCS
  - you can run plan locally
  - you can run apply only via UI/github PR on merge

#### terraform cloud

- share tfstate with team
- stable env for terraform to run it
- prevent race conditions
- connect to Version control to apply changes automatically vcs events

## components

### workspace

- main unit of organization and primary tool for delegating control
- workspace structure should match your organization permissions structure
  - e.g. one workspace for each environment of a given component (i.e. configurations / env = workspaces)
- collection of everything terraform needs to run
  - configuration files
  - values for configuration variables
  - state data to keep track of operations between runs
    - local: a state file on disk
    - cloud: peristent shared resources that can be assigned own controls, monitor run states, etc
- access controls
  - teams that manage a component can start terraform runs and edit vars in dev/staging
  - owners/senior contributors of a component can start terraform runs in production, after reviewing other contributors work
  - central IT/organization architects can administer permissions on all workspaces, to ensure everyone has what they need to work
  - teams that have no role in managing a given component dont have access to its workspaces

### configuration

- the set of files used to describe infrastructure
  - can be just a single `main.tf` or split into multiple files
    - terraform loads all `.tf` files so it doesnt matter what you name them
  - each configuration must be in its own working directory

### state

- track resourse changes across deployments
- everything that terraform manages will be in this file

### providers

- a plugin that terraform uses to create and manage individual units of infrasture
- multiple providers blocks can be used in a single configuration to manage resources from different providers

#### registry

- repository for provider plugins

#### resources

- each resource defines a component of your infrastructure
  - physical
  - virtual (e.g. docker container)
  - logical (e.g. heroku application)
- resource ID
  - each resource type is mapped directly to a providers name
    - e.g. provider === docker
      - `docker_image`
      - `docker_container`
  - the resource name can be anything, e.g. `nginx`
  - together the resource TYPE & NAME must be distinct and provide the ID to the resource
    - e.g. `docker_image.nginx`

### modules

- set of config files in a single directory
  - combines multiple resources into a single configuration
- root module: the root directory containing the configuration files, and any child module directories
- child modules
  - can be local / remote
  - terraform will only use the confg files from a single directory,
  - however, using the `module {}` blocks in a configuration will cause terraform to use configuration in other directories
- use cases
  - sharing modules across projects, teams, etc
  - configuration organization & reusability
- any local directory referenced in the source argument of a module block as a module

### backends

#### remote

- remote: plans and applies occur on terraform cloud
  - e.g. if setup as VCS, apply/plan runs on git commit/merge

#### local

- local: plans and applies occur on users computer
  - i.e. in your console

```sh
terraform {
  # remote indicates terraform cloud
  backend "remote" {

    organization = "my-org"
    workspaces {
      prefix = "my-app-"
    }
  }
}

```

## cmd reference

### files and locations

```sh
  # assign values to variables that have already been declared in *.tf files
  # to create new variables, just set them in *.tf files
  *.auto.tfvars


  #################################### recommended file names
  main.tf # the main configuration file
  variables.tf # for input variables
  outputs.tf # for output values that can be queried via `terraform output`

  #################################### auto-generated files
  # exact provider versions to use
  # ^ dont modify versions here, use the main.tf file
  .terrform.lock.hcl

  # contains all the data specific to each resource provisioned
  # ^ i.e. IDs and properties of all resources terraform manages
  # ^ often contains sensitive information, so store it securely and restrict access to only trusted team members who manage infrastructure
  # ^^ i.e. store it remotely and lock it down like you would credentials
  # ^ output after terraform apply
  # ^ super useful information
  # ^ can be viewed in terminal via terraform show
  # ^ any value in the state file can be referenced in configuration, even if its not known until after provisioning
  terrform.tfstate

  #################################### auto-generated directoreis
  # downloaded providers and other things
  .terraform/




```

### api reference

```sh
  # initialize terraform whenever you create/checkout a configuration
  # ^ by default uses main.tf in pwd
  # ^ will also install any required plugins
  terraform init
    -upgrade #

  # format your configuration files
  # ^ will print names of any files it has modified
  # ^^ or none if no formatting is required
  terraform fmt

  # validate syntax
  terraform validate

  # review the infrastructure plan
  # ^ use this as check
  terroform plan
    -out=main.plan # save plan to main.plan

  # displays the final plan before making any changes
  # ^ use this for the final review
  # ^ prints + next to things it creates
  # ^ known after apply - indicates this value is only known after the resource is creatd, e.g. a docker container ID which is actually generated by docker (and not terraform)
  # ^ apply can be run even if resources are already provisioned (i.e. running locally/cloud)
  # ^^ terraform manages the shutdown and restart
  terraform apply # apply based on main.tf
    "main.plan" # use the plan in file "main.plan"
    -var "key=value" # set input var on the fly, not saved to stated

  # review the statefile created by terraform apply
  terraform show

  # advanced state management
  terraform state
    list # see all resources in the state file

  # destroy all provisioned resources
  # ^ do this e.g. instead of docker stop ...
  # ^^ if you managed everything with terraform, your better able to see the changes between provisions
  terraform destroy

  # manage workspaces
  terraform workspace
    select APP_NAME

  terraform import provider_api.poop-name aws-id-here
```

### configuration reference

```js
  // all terraform settings and required providers
  terrform {
    // terraform uses these to provision your infrastructure
    // ^ installs from the terraform registry by default
    required_providers {
      docker = {
        // i.e. registry.terraform.io/kreuzwerker/docker
        source = "kreuzwerker/docker"
        // specify version, else it installs latest
        version = "~> 2.13.0"
      }
    }
  }

  // configure the docker provider
  // ^ set to empty to use defualt settings
  provider "docker" {}

  // all resources specified as TYPE NAME
  // ^ the prefix of the type maps to the providers name
  // ^ each being a component of your infrastructure
  resource "docker_image" "nginx" {
    // vailable settings specified in the provider docs
    // https://www.terraform.io/docs/providers/index.html
    name         = "nginx:latest"
    keep_locally = false
  }

  resource "docker_container" "nginx" {
    // uses image from the resource
    image = docker_image.nginx.latest
    // container name, verify via `docker ps`
    name  = "tutorial"
    ports {
      internal = 80
      external = 8000
    }
  }
```
