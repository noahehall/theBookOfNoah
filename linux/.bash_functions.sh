#!/usr/bin/env bash


# returns current dir or concats string to create absolute path
function getpath() {
    # https://stackoverflow.com/questions/59895/how-to-get-the-source-directory-of-a-bash-script-from-within-the-script-itself
    local THISDIR="$( cd "$( echo "${BASH_SOURCE[0]%/*}" )" || exit; pwd )"

    if [[ $# -lt 1 ]]; then
        # no filename
        echo "$THISDIR"
    else
        # with filename
        echo "${THISDIR}/$1"
    fi

}

function sourceifexists() {
    if [[ $# -eq 1 && -f "$1" ]]; then
        . "$1"
    fi
}


# completation aware g<alias bash aliases for each git alias
# https://gist.github.com/mwhite/6887990
function_exists() {
     declare -f -F "$1" > /dev/null
     return $?
}

# aws ----------------------------------
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
    # $1 profile
    # aws ec2 create-route-table --vpc-id $1 --profile
    echo 'not setup'
}

awslinkroutetable() {
    # $1 route table id
    # $2 subnet-id
    # $3 profile
    # aws ec2 associate-route-table --route-table-id $1 --subnet-id $2 --profile $3
    echo 'not setup'
}

awscreatetags() {
    # $1 reource ids
    # $2 tagKey e.g. Name
    # $3 tagValue e.g. poop-dev
    # $4 profile

    # aws ec2 create-tags --resources $1 --tags Key=$2,Value=$3 --profile $4
    echo 'not setup'
}
