```sh

## TODO(noah): in all of these type files update bookofnoah/linux/bashclifns or whatever

# pass ECR login to docker cli
ACCOUNTID=BLAHBLOOPBLEEP
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin ${ACCOUNTID}.dkr.ecr.us-west-2.amazonaws.com

```
