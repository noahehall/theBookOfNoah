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


awslists3() {
    aws s3 ls
}

awsliststatemachines() {
    aws stepfunctions list-state-machines
}

awsrunstatemachine() {
    # todo
    aws stepfunctions start-execution help
    # args:
    # --state-machine-arn some_arn_from_aws
    # --input file://some_file_path.json
}
# @see https://github.com/donnemartin/saws

awsprofileset() {
    if [[ $# -eq 1 ]]; then
        export AWS_DEFAULT_PROFILE="$1"
    fi
}

awsregionset() {
    if [[ $# -eq 1 ]]; then
        export AWS_DEFAULT_REGION="$1"
    fi
}

awscreatekeypair() {
    if [[ $# -eq 1 ]]; then
        aws ec2 create-key-pair --key-name "$1" --query 'KeyMaterial' --output text > "$1".pem
    fi

}

awscreatesubnet() {
    if [[ $# -eq 4 ]]; then
        echo 'subnet creation dry-run'
        echo 'ec2 create-subnet --dry-run --vpc-id "$1" --cidr-block "$2" --availability-zone "$3" --profile "$4"'

        aws ec2 create-subnet --dry-run --vpc-id "$1" --cidr-block "$2" --availability-zone "$3" --profile "$4"
    elif [[ $# -eq 5 ]]; then
        aws ec2 create-subnet --vpc-id "$1" --cidr-block "$2" --availability-zone "$3" --profile "$4"
    else
        echo 'expected params'
        echo '$1 vpc-id'
        echo '$2 cidr-block'
        echo '$3 az'
        echo '$4 profile'
        echo '$5 truthy: create resource'
    fi
}

awscreateroutetable() {
    # $1 vpc-id
    # $2 profile
    # aws ec2 create-route-table --vpc-id $1 --profile $2
    echo 'not setup'
}

awscreateroutetableroute() {
    # $1 route table ID (make sure its the one attached to the subnet you want)
    # $2 destination (ip cidr range)
    # $3 this links it to an internet gateway
    # ^ may have to update this fn in the future to specify a different target
    # $4 profile name

    # aws ec2 create-route --route-table-id $1 --destination-cidr-block $2 --gateway-id $3 --profile $4
    echo 'not setup'
}

awscreateinternetgateway() {
    # $1 profile
    # aws ec2 create-internet-gateway --profile $1
    echo 'not setup'
}

awscreatetags() {
    # $1 resource ids
    # $2 tagKey e.g. Name
    # $3 tagValue e.g. poop-dev
    # $4 profile

    # aws ec2 create-tags --resources $1 --tags Key=$2,Value=$3 --profile $4
    echo 'not setup'
}

awslinkroutetable() {
    # $1 route table id
    # $2 subnet-id
    # $3 profile
    # aws ec2 associate-route-table --route-table-id $1 --subnet-id $2 --profile $3
    echo 'not setup'
}

awslinkinternetgateway() {
    # $1 gateway id
    # $2 vpc id
    # $3 profile
    # aws ec2 attach-internet-gateway --internet-gateway-id $1 --vpc-id $2 --profile $3
    echo 'not setup'
}

# todo: i need to setup named params before using any of this
awsruninstances() {
    # $1 ami-id
    # $2 count of instances e.g. 1
    # $3 instance type e.g. t2.micro
    # $4 key pair name (rememer scoped to region)
    # $5 subnet id
    # $6 security group ids
    # $7 user data, e.g. file://somefile.sh (ensure you use -y in the script)
    # $8 profile to use
    # $9 tag key e.g. Name
    # $10 tag value e.g. poop-dev
    # aws ec2 run-instances --image-id $1 --count $2 --instance-type $3 --key-name $4 --subnet-id $5 --security-group-ids $6 --user-data $7 --tag-specifications --profile $8 "ResourceType=instance,Tags=[{Key=$9,Value=$10}]"
    echo 'not setup'
}