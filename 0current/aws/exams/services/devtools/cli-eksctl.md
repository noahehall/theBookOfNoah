# eksctl

- eksctl: official cli by weaveworks, simpler than using the aws cli
- aws cli eks: doesnt seem to be promoted as much as eksctl
  - but you should still be familiar with it for localstacks awslocal wrapper
  - it also provides the most flexibilty but is not as user friendly

### links

- [docs](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html)
- [landing page](https://eksctl.io/)
- [install](https://eksctl.io/introduction/#installation)
- [aws cli eks docs](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/eks/index.html)
- [with localstacks awslocal](../../../../localstack/localstack.md)
- [getting started](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html)
- [github](https://github.com/weaveworks/eksctl)

## quickies

```sh
# install
mkdir -p /opt/eksctl-cli && cd /opt/eksctl-cli
ARCH=amd64
PLATFORM=$(uname -s)_$ARCH
curl -sLO "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_$PLATFORM.tar.gz"
tar -xzf eksctl_$PLATFORM.tar.gz && rm eksctl_$PLATFORM.tar.gz
sudo install -o root -g root -m 0755 eksctl ../eksctl

```

## basics

- use eksctl whenever your interacting with the control plane
  - you need to have your aws creds setup
- use kubectl for the data plane

### eksctl

- creating new cluster and worker nodes
  - creates IAM roles for the cluster and worker nodes
  - creates a dedicated VPC with CIDR range 192.168.0.0/16
  - creates a cluster and a nodegroup
  - configures access to API endpoints
  - installs CoreDNS
    - check the consul docs for integrating with consul
  - writes a kubeconfig file for the cluster

```sh
# each cmd accepts a variety of --blah options, or you can pass in a yaml file
eksctl
  create
    cluster
    iamserviceaccount
```

```yml
# example eksctl configuration file
## should be stored in source
apiVersion: eksctl.io/vg1alpha5
kind: ClusterConfig
metadata:
  name: SomeClusterName
  region: us-east-1
vpc:
  subnets:
    private:
      us-east-1b: { id: subnet-abcdefg }
      us-east-1c: { id: subnet-gfedcba }
nodeGroups:
  - name: ClusterOneNodes
    instanceType: m5.xlarge
    desiredCapacity: 3
    privateNetworking: true
```
