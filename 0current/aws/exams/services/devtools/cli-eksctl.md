# eksctl

- eksctl: official cli by weaveworks
- aws cli eks: doesnt seem to be promoted as much as eksctl
  - but you should still be familiar with it for localstacks awslocal wrapper

### links

- [docs](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html)
- [landing page](https://eksctl.io/)
- [install](https://eksctl.io/introduction/#installation)
- [aws cli eks docs](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/eks/index.html)
- [with localstacks awslocal](../../../../localstack/localstack.md)

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
