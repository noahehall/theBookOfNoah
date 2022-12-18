# aws cli

- aws cli v2, aws sam cli

## aws CLI

### quickies

```sh
# grab the latest
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip

## install
sudo ./aws/install

## update
sudo ./aws/install --bin-dir /usr/local/bin --install-dir /usr/local/aws-cli --update
```

### links

- [main docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
- [install/update](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

## aws SAM CLI

### links

- [install docs](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

### quickies

```sh
# grab the latest
## didnt work for me, had physically download it
curl "https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip" -o "sam.zip"
unzip awssam.zip -d sam

## install
sudo ./sam/install

## update
sudo ./sam/install --update
```
