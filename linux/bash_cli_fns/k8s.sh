#!/usr/bin/env bash

## TODO: move this and eksctl file into nirv-ai/scripts
## switch the ugly reads to a case statement

########################################## FYI
## k8s: kubectl
## eks: eksctl
## aws_eks: aws eks

########################################## KUBECTL
k8s() {
  # kubectl CMD RESOURCE-TYPE RESOURCE-NAME FLAGS
  kubectl "$@"
}

k8s_version() {
  k8s version --output=json
}

k8s_get_nodes() {
  read -r -d '' HELP <<"EOF"
prints basic details about all nodes in cluster
$@ all args are passed to kubectl
EOF

  [[ $1 == "-h" ]] &&
    echo "$HELP" ||
    k8s get nodes $@
}

k8s_get_pods() {
  read -r -d '' HELP <<"EOF"
gets all pods in the cluster
$@ all args are passed to kubectl
EOF

  [[ $1 == "-h" ]] &&
    echo "$HELP" ||
    k8s get pods $@
}

k8s_get_persistent_volume_claims() {
  k8s get pvc
}

k8s_cat_pod() {
  read -r -d '' HELP <<"EOF"
prints the state of a pod
$1 the pods name
EOF

  [[ $1 == "-h" ]] &&
    echo "$HELP" ||
    k8s describe pod "$1"
}

k8s_cat_storage_class() {
  k8s describe sc "$@"
}

k8s_pod_ready() {
  read -r -d '' HELP <<"EOF"
waits for a pod to be ready
$1 the pod name
EOF

  [[ $1 == "-h" ]] &&
    echo "$HELP" ||
    k8s wait --for=condition=Ready pod "$1"
}

k8s_run_pod() {
  read -r -d '' HELP <<"EOF"
runs a container in a pod that never restarts
$1 the name for your pod
$2 docker image
EOF

  [[ $1 == "-h" ]] &&
    echo "$HELP" ||
    k8s run "$1" --image="$2" --restart=Never
}

k8s_exec() {
  # $1 name
  # $2 cmd
  k8s exec -it "$1" -- "${@:2}"
}

########################################## EKSCTL
eks() {
  eksctl "$@"
}

# create a cluster
## eks create cluster -f cluster.config.yaml

# horzontal pod autoscaler
## kubectl autoscale deployment myapp --cpu-percent=50 --min=1 --max=10

# get cluster state
## kubectl get pv,all -A

# apply some application manifest to a cluster
## kubectl apply -f somefile.yaml -f someotherfile.yaml
