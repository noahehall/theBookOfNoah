# aws ----------------------------------

# ^ enable command completion
[ -f /usr/local/bin/aws_completer ] &&complete -C '/usr/local/bin/aws_completer' aws


alias awsconfig='sudo aws configure'
alias awsconfiglist='aws configure list'
alias awsconfigprofiles='aws configure list-profiles'
alias awsaccounts='aws iam list-account-aliases'
alias awswhoami='aws sts get-caller-identity'
alias awspgversions='aws rds describe-db-engine-versions --default-only --engine postgres'
alias nanoconfig='sudo nano ~/.aws/config'
alias nanocreds='sudo nano ~/.aws/credentials'
