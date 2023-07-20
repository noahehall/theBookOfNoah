```sh
# TODO: move all of these into the aws.sh file wherever it is

# create a policy
aws iam create-policy \
  --policy-name SOME_NAME_POLICY \
  --policy-document file://some/path/to/file.json
```
