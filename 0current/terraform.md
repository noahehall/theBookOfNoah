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
