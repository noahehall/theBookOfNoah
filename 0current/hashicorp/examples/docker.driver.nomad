# @see https://developer.hashicorp.com/nomad/docs/runtime/interpolation

task "docs" {
  driver = "docker"

   # Environment variables are interpreted and can contain both runtime and
  # node attributes. These environment variables are passed into the task.
  env {
    DC      = "Running on datacenter ${node.datacenter}"
    VERSION = "Version ${NOMAD_META_VERSION}"
    "discovery.type" = "single-node" # keys with dots must be quoted
  }

  # Constraints only support node attributes as runtime environment variables
  # are only defined after the task is placed on a node.
  constraint {
    attribute = "${attr.kernel.name}"
    value     = "linux"
  }

  # Meta keys are also interpretable.
  meta {
    VERSION = "v0.3"
  }

  config {
    image = "my-app"

    # Interpret runtime variables to inject the address to bind to and the
    # location to write logs to.
    args = [
      "--bind", "${NOMAD_ADDR_RPC}",
      "--logs", "${NOMAD_ALLOC_DIR}/logs",
    ]

    port_map {
      RPC = 6379
    }
  }
}


## accessing env vars
### env was added in nomad 0.9

task "redis" {
  driver = "docker"
  config {
    image  = "redis:7"
    labels {
      label1 = "${env["invalid...name"]}"
      label2 = "${env["valid.name"]}"
    }
  }
}
