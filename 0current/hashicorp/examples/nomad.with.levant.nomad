job "dev-core" {
  datacenters = [ "[[ .services.core_vault.environment.DATA_CENTER ]]" ]
  region      = "[[ .services.core_vault.environment.REGION ]]"

  type = "service"

  # All tasks in this job must run on linux.
  constraint {
    attribute = attr.kernel.name
    value     = "linux"
  }
  # Specify this job to have rolling updates, two-at-a-time, with
  # 30 second intervals.
  update {
    stagger      = "30s"
    max_parallel = 1
  }

  group "vault-group" {
    count = 1

    network {
      mode   = "bridge"
      hostname = "[[ .services.core_vault.hostname ]]"

      port "vault" {
        static = "[[ .services.core_vault.environment.VAULT_HOST_PORT_A ]]"
      }
    }

    task "vault-task" {
      driver = "docker"

      config {
        image = "[[ .services.core_vault.image ]]"
        ports = "[[ .services.core_vault.environment.VAULT_HOST_PORT_A ]]"
        hostname = "[[ .services.core_vault.environment.PROJECT_HOSTNAME ]]"
        cap_add = "[[ .services.core_vault.cap_add ]]"
        entrypoint = "[[ .services.core_vault.entrypoint ]]"
        ports = [ "vault "]
        volumes = [
          [[ range $vol := $.services.core_vault.volumes ]]
            "[[ $vol.source ]]:[[ $vol.target ]]"
          [[ end ]]
        ]
      }

      # @see https://developer.hashicorp.com/nomad/docs/job-specification/env
      env {
        BFF_SERVICE_NAME = "[[ .services.core_vault.environment.BFF_SERVICE_NAME ]]"
        DATA_CENTER = "[[ .services.core_vault.environment.DATA_CENTER ]]"
        DEFAULT_DB = "[[ .services.core_vault.environment.DEFAULT_DB ]]"
        DEFAULT_DB_HOST = "[[ .services.core_vault.environment.DEFAULT_DB_HOST ]]"
        DEFAULT_DB_PORT = "[[ .services.core_vault.environment.DEFAULT_DB_PORT ]]"
        ENV = "[[ .services.core_vault.environment.ENV ]]"
        POSTGRES_SERVICE_NAME = "[[ .services.core_vault.environment.POSTGRES_SERVICE_NAME ]]"
        PROJECT_HOSTNAME = "[[ .services.core_vault.environment.PROJECT_HOSTNAME ]]"
        PROJECT_NAME = "[[ .services.core_vault.environment.PROJECT_NAME ]]"
        PROXY_SERVICE_NAME = "[[ .services.core_vault.environment.PROXY_SERVICE_NAME ]]"
        R_ROLE = "[[ .services.core_vault.environment.R_ROLE ]]"
        REGION = "[[ .services.core_vault.environment.REGION ]]"
        RW_ROLE = "[[ .services.core_vault.environment.RW_ROLE ]]"
        UI_SERVICE_NAME = "[[ .services.core_vault.environment.UI_SERVICE_NAME ]]"
        VAULT_ADDR = "[[ .services.core_vault.environment.VAULT_ADDR ]]"
        VAULT_CONT_PORT_A = "[[ .services.core_vault.environment.VAULT_CONT_PORT_A ]]"
        VAULT_HOST_PORT_A = "[[ .services.core_vault.environment.VAULT_HOST_PORT_A ]]"
        VAULT_SERVICE_NAME = "[[ .services.core_vault.environment.VAULT_SERVICE_NAME ]]"
      }

      resources {
        cpu    = 500
        memory = 256
      }
    }
  }
}
