k8s_get_nodes () {
read -r -d '' HELP <<-"EOF"
prints basic details about all nodes in cluster
all options are forward to kubectl
EOF

  [[ $1 == "-h" ]] \
    && echo "$HELP" \
    || kubectl get nodes $@
}
