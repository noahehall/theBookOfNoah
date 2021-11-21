# basics

- infrastructure management tool
- provisision management & maintain cloud resources
- a languauge for describing infrastructure
- managing the base infrastructure, but not changing whats running on the server once its deployed
  - config management tool can then be used to manage the apps on the deployed resources
  - i.e. terraform sets up the canvas
  - i.e. config manage (e.g. packer) paints the picture
    - can be handled by provisioners

# best practices

- always
- sometimes
  - terraform should deply premade images with all the configuration already set or retrieved at runtime

  -

## bffs

- config management (e.g. packer)
- load balancer (e.g. haproxy)
- immutable infrastructure
  - basically everything is readonly, even system disks
- service oriented architecture
- containers (e.g. docker / k8s)
- the cloud
- terraform.io
  - hosted version of terraform
  - connects to version control (git{hub,lab})
