#!/usr/bin/env bash

## TODO: move this into nirv-ai/scripts
## k8s: kubectl
## eks: eksctl
## aws_eks: aws eks

# TODO:
## switch the ugly reads to a case statement
## move this file into nirv-ai/scripts

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

k8s_cat_pod() {
  read -r -d '' HELP <<"EOF"
prints the state of a pod
$1 the pods name
EOF

  [[ $1 == "-h" ]] &&
    echo "$HELP" ||
    k8s describe pod "$1"
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

eks() {
  eksctl "$@"
}

# create a cluster
## eks create cluster -f cluster.config.yaml
