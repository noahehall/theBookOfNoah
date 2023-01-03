job "dev-core" {
  datacenters = [ "[[ .services.web_vault.environment.DATA_CENTER ]]" ]
  region      = "[[ .services.web_vault.environment.REGION ]]"

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
      hostname = "[[ .services.web_vault.hostname ]]"

      port "vault" {
        static = "[[ .services.web_vault.environment.VAULT_HOST_PORT_A ]]"
      }
    }

    task "vault-task" {
      driver = "docker"

      config {
        image = "[[ .services.web_vault.image ]]"
        ports = "[[ .services.web_vault.environment.VAULT_HOST_PORT_A ]]"
        hostname = "[[ .services.web_vault.environment.PROJECT_HOSTNAME ]]"
        cap_add = "[[ .services.web_vault.cap_add ]]"
        entrypoint = "[[ .services.web_vault.entrypoint ]]"
        ports = [ "vault "]
        volumes = [
          [[ range $vol := $.services.web_vault.volumes ]]
            "[[ $vol.source ]]:[[ $vol.target ]]"
          [[ end ]]
        ]
      }

      # @see https://developer.hashicorp.com/nomad/docs/job-specification/env
      env {
        WEB_BFF_HOSTNAME = "[[ .services.web_vault.environment.WEB_BFF_HOSTNAME ]]"
        DATA_CENTER = "[[ .services.web_vault.environment.DATA_CENTER ]]"
        DEFAULT_DB = "[[ .services.web_vault.environment.DEFAULT_DB ]]"
        DEFAULT_DB_HOST = "[[ .services.web_vault.environment.DEFAULT_DB_HOST ]]"
        DEFAULT_DB_PORT = "[[ .services.web_vault.environment.DEFAULT_DB_PORT ]]"
        ENV = "[[ .services.web_vault.environment.ENV ]]"
        WEB_POSTGRES_HOSTNAME = "[[ .services.web_vault.environment.WEB_POSTGRES_HOSTNAME ]]"
        PROJECT_HOSTNAME = "[[ .services.web_vault.environment.PROJECT_HOSTNAME ]]"
        PROJECT_NAME = "[[ .services.web_vault.environment.PROJECT_NAME ]]"
        PROXY_SERVICE_NAME = "[[ .services.web_vault.environment.PROXY_SERVICE_NAME ]]"
        R_ROLE = "[[ .services.web_vault.environment.R_ROLE ]]"
        REGION = "[[ .services.web_vault.environment.REGION ]]"
        RW_ROLE = "[[ .services.web_vault.environment.RW_ROLE ]]"
        WEB_UI_HOSTNAME = "[[ .services.web_vault.environment.WEB_UI_HOSTNAME ]]"
        VAULT_ADDR = "[[ .services.web_vault.environment.VAULT_ADDR ]]"
        VAULT_CONT_PORT_A = "[[ .services.web_vault.environment.VAULT_CONT_PORT_A ]]"
        VAULT_HOST_PORT_A = "[[ .services.web_vault.environment.VAULT_HOST_PORT_A ]]"
        VAULT_SERVICE_NAME = "[[ .services.web_vault.environment.VAULT_SERVICE_NAME ]]"
      }

      resources {
        cpu    = 500
        memory = 256
      }
    }
  }
}
