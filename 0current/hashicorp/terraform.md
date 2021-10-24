<https://learn.hashicorp.com/collections/terraform/docker-get-started>

todo

- in order
  - <https://learn.hashicorp.com/tutorials/terraform/module>
  - <https://learn.hashicorp.com/collections/terraform/aws-get-started>
    - have to do module + aws in parallel as modules require aws authentication
  - <https://learn.hashicorp.com/collections/terraform/cli>
  - <https://learn.hashicorp.com/collections/terraform/configuration-language>
  - <https://learn.hashicorp.com/collections/terraform/provision>
  - <https://learn.hashicorp.com/collections/terraform/cloud-get-started>
  - <https://learn.hashicorp.com/collections/terraform/cloud>
  - <https://learn.hashicorp.com/collections/terraform/state>
  - <https://www.terraform.io/docs/language/settings/backends/index.html>
- then do these
  - <https://learn.hashicorp.com/collections/terraform/certification-associate-tutorials>
    - do this one last and get the certification
  - <https://learn.hashicorp.com/collections/terraform/gcp-get-started>
  - <https://learn.hashicorp.com/tutorials/terraform/cloud-migrate?in=terraform/cloud>
  - <https://www.terraform.io/docs/language/providers/index.html>

# TLDR

## links

- [terraform cloud](https://app.terraform.io/app/getting-started)
  - they offer free accounts for opensource
- [install](https://www.terraform.io/docs/cli/install/apt.html)
- [evaluating existing infrastructure](https://www.terraform.io/docs/cloud/guides/recommended-practices/part2.html)
- [aws provider examples on github](https://github.com/hashicorp/terraform-provider-aws/tree/master/examples)

- specs
  - [all terraform docs](https://www.terraform.io/docs/index.html)
  - [remote state](https://www.terraform.io/docs/language/state/remote-state-data.html)
  - [output values](https://www.terraform.io/docs/language/values/outputs.html)
  - [providers](https://www.terraform.io/docs/language/providers/index.html)
  - [terraform registry publishing](https://www.terraform.io/docs/registry/index.html)
  - [terraform .tf syntax](https://www.terraform.io/docs/language/index.html)
    - [terraform modules](https://www.terraform.io/docs/language/modules/develop/index.html)
  - [terraform state](https://www.terraform.io/docs/cli/commands/state/index.html)

- tuts
  - [all preparation for associate certification](https://learn.hashicorp.com/collections/terraform/certification)
  - [all aws tutorials](https://learn.hashicorp.com/collections/terraform/aws-get-started)
  - [all associate tuturials](https://learn.hashicorp.com/collections/terraform/certification-associate-tutorials)
  - [terraform + docker](https://learn.hashicorp.com/collections/terraform/docker-get-started)
  - [terraform + aws](https://learn.hashicorp.com/collections/terraform/aws-get-started)
  - [automating terraform](https://learn.hashicorp.com/tutorials/terraform/automate-terraform?in=terraform/automation)
  - [build aws infrastructure](https://learn.hashicorp.com/tutorials/terraform/aws-build)

- providers
  - [all providers](https://registry.terraform.io/browse/providers)
  - [all aws documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
    - [aws_vpc](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc)
  - [vault](https://registry.terraform.io/providers/hashicorp/vault/latest/docs)
  - [docker provider](https://registry.terraform.io/providers/kreuzwerker/docker/latest)

## basics

### best practices

- ALWAYS
  - workspaces
    - should be named with both their component and their env, e.g. appname-dev, appname-staging
    - use per-workspace access controls and delegate ownership of components and regulate code promotion across envs
      - e.g. appname-dev is owned by one tam, and to promote to appname-staging another team is responsible (or perhaps the same lead) for approving infrastructure changes
  - output values
    - always specify an `outputs.tf` file specifying which runtime values need to be available for other infrastructure components
      - this is how you connect terraform projects with ohter parts of your infrastructure, or with other terraform projects

- SOMETIMES
  - split out configuration into multiple files and module directories
    - the amount of files & modules depends on your strategy for managing the complexity technically, and socially with your team
    - SINGLE `main.tf`  file: things to watch for
      - understanding and navigating the ocnfig files will become increasingly difficult
      - updating configuration will be more risky: as an update to one sectin may cause unintended consequences in otther parts of the configuration
      - there will be increased duplication of similar blocks of configuration, e.g. when creating dev/staging/productin environments
      - sharing parts of the config between projects and teams will involve a lot of copypasta
    - modules:
      - use cases
        - organization configuration: easier to navigate, understand, update and organize configuration into logical components
        - encapsulate configuration: into distinct logical components; prevents leakage, e.g. a change to one part of the config causing changes to other parts;
        - re-use ocnfiguration: moduels can be re-used across teams, projects, and organizations (if they publish modules to the cloud)
        - provide consistency and best practices: by re-using modules, you ensure you can leverage the right practices used by more experiences devs
      - recommendations
        - name your provider `terraform-PROVIDER-NAME` (must be folowed to publish this to terraform cloud/enterprise registries)
        - write your configuration with modules in mind
        - use local modules to organize & encapsulate your code,
          - even if you arent publishing remote modules, by starting with modules its easier to maintain and update while the project is new than transforming an existing monolith
        - rely on modules from public registry (as you would in any other setting) and dont reinvent the wheel

- NEVER
  - workspaces
    - dont use a single terraform workspace to manage everything that makes up production/staging/etc
      - instead make smaller workspaces that are easy to delegate and drop
        - e.g. UAT doesnt make sense for security infrastructure

### about

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
- output values: organize data to be easily queried and displayed to the terraform user
- input variables: values that end users can assign to customize the terraform configuration
- modules: sharable configuration for independent logical infrastructure components in a single directory

## components

### terraform workspace

main unit of organization and primary tool for delegating control

- workspace structure should match your organization permissions structure
  - e.g. one workspace for each environment of a given component (i.e. configurations * env = workspaces)
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

### terraform configuration

- the set of files used to describe infrastructure
  - can be just a single `main.tf` or split into multiple files
    - terraform loads all `.tf` files so it doesnt matter what you name them
  - each configuration must be in its own working directory

### terraform modules

- set of config files ina single directory
- root module: the root directory containing the configuration files, and any child module directories
- child modules
  - terraform will only use the confg files from a single directory,
  - however, using the `module {}` blocks in a configuration will cause terraform to use configuration in other directories

### terraform providers

- a plugin that terraform uses to create and manage resources
  - multiple providers blocks can be used in a single configuration to manage resources from different providers

#### terraform resources

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

## workflow

This core workflow is a loop; the next time you want to make changes, you start the process over from the beginning.

- scope: identify the infratsructure for a project
- write: author infrastructure as code

  ```sh
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
    terraform init # always when creating/checking out from git; will install provider plugins
    terraform fmt # lint files
    terraform validate # validate syntax
    terraform plan # review while iterating
    terraform apply # (re)provision resources
    terraform show # review statefile after provisioning
    terraform state list # list provisioned resource names
    terraform output # review output values specified in the `outputs.tf` file
    terraform destroy # destroy all resources
  ```

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

### terraform cloud workflow

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

## terraform cmd reference

### reference

- files and locations

  ```sh
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

- api reference

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
    # dunno
    terraform workspace
      select APP_NAME
  ```

- terrform configuration reference

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
