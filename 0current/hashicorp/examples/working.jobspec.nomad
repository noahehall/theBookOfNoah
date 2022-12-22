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
        REG_HOST_PORT         = string
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

locals {
  networks = var.networks
  volumes  = var.volumes
  vault    = var.services.core_vault
  vaultenv = var.services.core_vault.environment
}

job "dev_core" {
  datacenters = ["${local.vaultenv.DATA_CENTER}"]
  region      = "${local.vaultenv.REGION}"
  type        = "service"

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
    restart {
      attempts = 0
    }

    network {
      mode = "bridge" //cant be used with hostname
      // hostname = "${local.vault.hostname}"

      port "vault" {
        static = parseint(local.vaultenv.VAULT_HOST_PORT_A, 10)
      }
    }

    task "vault_task" {
      driver = "docker"

      config {
        healthchecks {
          disable = true
        }
        auth_soft_fail = true # dont fail on auth errors
        force_pull     = true
        image          = "${local.vaultenv.PROJECT_HOST_NAME}:${local.vaultenv.REG_HOST_PORT}/${local.vault.image}"
        // hostname = "${local.vaultenv.PROJECT_HOST_NAME}"
        cap_add = [
          "${local.vault.cap_add[0]}"
        ]

        ports = ["vault"]

        entrypoint = "${local.vault.entrypoint}"
        volumes = [
          "${local.vault.volumes[0].source}:${local.vault.volumes[0].target}",
          "${local.vault.volumes[1].source}:${local.vault.volumes[1].target}"
        ]
      }

      # @see https://developer.hashicorp.com/nomad/docs/job-specification/env
      env {
        BFF_SERVICE_NAME      = "${local.vaultenv.BFF_SERVICE_NAME}"
        DATA_CENTER           = "${local.vaultenv.DATA_CENTER}"
        DEFAULT_DB            = "${local.vaultenv.DEFAULT_DB}"
        DEFAULT_DB_HOST       = "${local.vaultenv.DEFAULT_DB_HOST}"
        DEFAULT_DB_PORT       = "${local.vaultenv.DEFAULT_DB_PORT}"
        ENV                   = "${local.vaultenv.ENV}"
        POSTGRES_SERVICE_NAME = "${local.vaultenv.POSTGRES_SERVICE_NAME}"
        PROJECT_HOST_NAME     = "${local.vaultenv.PROJECT_HOST_NAME}"
        PROJECT_NAME          = "${local.vaultenv.PROJECT_NAME}"
        PROXY_SERVICE_NAME    = "${local.vaultenv.PROXY_SERVICE_NAME}"
        R_ROLE                = "${local.vaultenv.R_ROLE}"
        REGION                = "${local.vaultenv.REGION}"
        RW_ROLE               = "${local.vaultenv.RW_ROLE}"
        UI_SERVICE_NAME       = "${local.vaultenv.UI_SERVICE_NAME}"
        VAULT_ADDR            = "${local.vaultenv.VAULT_ADDR}"
        VAULT_CONT_PORT_A     = "${local.vaultenv.VAULT_CONT_PORT_A}"
        VAULT_HOST_PORT_A     = "${local.vaultenv.VAULT_HOST_PORT_A}"
        VAULT_SERVICE_NAME    = "${local.vaultenv.VAULT_SERVICE_NAME}"
      }

      // resources {
      //   cpu    = 500
      //   memory = 256
      // }
    }
  }
}
