# @see https://developer.hashicorp.com/nomad/docs/runtime/interpolation

task "docs" {
  driver = "docker"

  # Drivers support interpreting node attributes and runtime environment
  # variables
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

  # Constraints only support node attributes as runtime environment variables
  # are only defined after the task is placed on a node.
  constraint {
    attribute = "${attr.kernel.name}"
    value     = "linux"
  }

  # Environment variables are interpreted and can contain both runtime and
  # node attributes. These environment variables are passed into the task.
  env {
    DC      = "Running on datacenter ${node.datacenter}"
    VERSION = "Version ${NOMAD_META_VERSION}"
  }

  # Meta keys are also interpretable.
  meta {
    VERSION = "v0.3"
  }
}
