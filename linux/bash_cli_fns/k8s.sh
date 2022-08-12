k8s_get_nodes () {
read -r -d '' HELP <<-"EOF"
prints basic details about all nodes in cluster
all options are forward to kubectl
EOF

  [[ $1 == "-h" ]] \
    && echo "$HELP" \
    || kubectl get nodes $@
}

k8s_pod_ready () {
read -r -d '' HELP <<-"EOF"
waits for a pod to be ready
$1 == podname
EOF

  [[ $1 == "-h" ]] \
    && echo "$HELP" \
    || kubectl wait --for=condition=Ready pod $1

}

k8s_run_pod () {
  kubectl run $1 --image=$2 --restart=Never
}
