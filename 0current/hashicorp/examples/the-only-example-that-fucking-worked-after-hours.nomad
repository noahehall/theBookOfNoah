# this is how you get the variables file
// echo -e "forcing .env.${ENV}.compose.[yaml, json] in current dir"
// docker compose convert | yq -r -o=json >.env.${ENV}.compose.json
// docker compose convert >.env.${ENV}.compose.yaml
// this shit took hours, i mean hella fucking hours

variable "name" {
  type = string
}
variable "services" {
  type = object({
    core_vault = object({
      build          = map(string)
      cap_add        = list(string)
      container_name = string
      entrypoint     = list(string)
      environment = object({
        BFF_SERVICE_NAME      = string
        DATA_CENTER           = string
        DEFAULT_DB            = string
        DEFAULT_DB_HOST       = string
        DEFAULT_DB_PORT       = string
        ENV                   = string
        POSTGRES_SERVICE_NAME = string
        PROJECT_HOST_NAME     = string
        PROJECT_NAME          = string
        PROXY_SERVICE_NAME    = string
        R_ROLE                = string
        REGION                = string
        RW_ROLE               = string
        UI_SERVICE_NAME       = string
        VAULT_ADDR            = string
        VAULT_CONT_PORT_A     = string
        VAULT_HOST_PORT_A     = string
        VAULT_SERVICE_NAME    = string
      })
      hostname = string
      image    = string
      networks = map(string)
      ports = list(object({
        mode      = string
        target    = number
        published = string
        protocol  = string
      }))
      volumes = list(object({
        type   = string
        source = string
        target = string
        bind = object({
          create_host_path = bool
        })
      }))
    })
  })
}
variable "networks" {
  type = object({
    proxynetwork = object({
      name = string
    })
  })
}

variable "volumes" {
  type = object({
    nirvai_core_postgres = object({
      name     = string
      external = bool
    })
  })
}
job "dev_core" {
  datacenters = ["${var.services.core_vault.environment.DATA_CENTER}"]
  region      = "${var.services.core_vault.environment.REGION}"
  // type        = "service"

  constraint {
    attribute = "${attr.kernel.name}"
    value     = "linux"
  }

  # Specify this job to have rolling updates, two-at-a-time, with
  # 30 second intervals.
  update {
    stagger      = "30s"
    max_parallel = 1
  }

  group "vault_group" {
    count = 1

    network {
      mode     = "bridge"
      hostname = "${var.services.core_vault.hostname}"

      port "vault" {
        static = "${var.services.core_vault.environment.VAULT_HOST_PORT_A}"
      }
    }

    task "vault_task" {
      driver = "docker"

      config {
        image    = "${var.services.core_vault.image}"
        hostname = "${var.services.core_vault.environment.PROJECT_HOST_NAME}"
        cap_add = [
          "${var.services.core_vault.cap_add[0]}"
        ]

        ports = ["vault"]

        entrypoint = "${var.services.core_vault.entrypoint}"
        volumes = [
          "${var.services.core_vault.volumes[0].source}:${var.services.core_vault.volumes[0].target}",
          "${var.services.core_vault.volumes[1].source}:${var.services.core_vault.volumes[1].target}"
        ]
      }

      # @see https://developer.hashicorp.com/nomad/docs/job-specification/env
      env {
        BFF_SERVICE_NAME      = "${var.services.core_vault.environment.BFF_SERVICE_NAME}"
        DATA_CENTER           = "${var.services.core_vault.environment.DATA_CENTER}"
        DEFAULT_DB            = "${var.services.core_vault.environment.DEFAULT_DB}"
        DEFAULT_DB_HOST       = "${var.services.core_vault.environment.DEFAULT_DB_HOST}"
        DEFAULT_DB_PORT       = "${var.services.core_vault.environment.DEFAULT_DB_PORT}"
        ENV                   = "${var.services.core_vault.environment.ENV}"
        POSTGRES_SERVICE_NAME = "${var.services.core_vault.environment.POSTGRES_SERVICE_NAME}"
        PROJECT_HOST_NAME     = "${var.services.core_vault.environment.PROJECT_HOST_NAME}"
        PROJECT_NAME          = "${var.services.core_vault.environment.PROJECT_NAME}"
        PROXY_SERVICE_NAME    = "${var.services.core_vault.environment.PROXY_SERVICE_NAME}"
        R_ROLE                = "${var.services.core_vault.environment.R_ROLE}"
        REGION                = "${var.services.core_vault.environment.REGION}"
        RW_ROLE               = "${var.services.core_vault.environment.RW_ROLE}"
        UI_SERVICE_NAME       = "${var.services.core_vault.environment.UI_SERVICE_NAME}"
        VAULT_ADDR            = "${var.services.core_vault.environment.VAULT_ADDR}"
        VAULT_CONT_PORT_A     = "${var.services.core_vault.environment.VAULT_CONT_PORT_A}"
        VAULT_HOST_PORT_A     = "${var.services.core_vault.environment.VAULT_HOST_PORT_A}"
        VAULT_SERVICE_NAME    = "${var.services.core_vault.environment.VAULT_SERVICE_NAME}"
      }

      resources {
        cpu    = 500
        memory = 256
      }
    }
  }
}
