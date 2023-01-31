# @see https://developer.hashicorp.com/nomad/docs/configuration
# @see https://developer.hashicorp.com/nomad/docs/configuration/server
# @see https://developer.hashicorp.com/nomad/docs/drivers/docker

data_dir   = "/var/lib/nomad"
datacenter = "us-east"
log_level  = "INFO"
name       = "development_nirvai_web_leader"
region     = "global"

# not used when addresses is {}" defined
// bind_addr = "0.0.0.0" # the default
addresses {
  http = "0.0.0.0"
  rpc  = "0.0.0.0"
  serf = "0.0.0.0"
}

advertise {
  # Defaults to the first private IP address.
  http = "192.168.0.5"
  rpc  = "192.168.0.5"
  serf = "192.168.0.5"
}

ports {
  http = 4646
  rpc  = 4647
  serf = 4658
}

# @see https://developer.hashicorp.com/nomad/docs/configuration/server
server {
  enabled                 = true
  bootstrap_expect        = 1
  node_gc_threshold       = "10m"
  job_gc_interval         = "5m"
  eval_gc_threshold       = "5m"
  deployment_gc_threshold = "5m"
  csi_plugin_gc_threshold = "5m"

  plan_rejection_tracker {
    enabled        = true
    node_threshold = 5 # increase this value if too many false positives
    node_window    = "5m"
  }
}

# @see https://developer.hashicorp.com/nomad/docs/configuration/client
client {
  enabled = true

}

ui {
  enabled = true

  vault {
    ui_url = "https://dev.nirv.ai:8200/ui"
    // address = "${var.VAULT_ADDR}"
  }

  // consul {
  //   ui_url = "https://consul.example.com:8500/ui"
  // }"

}

# enable cors
http_api_response_headers {
  Access-Control-Allow-Origin = "*"
}


plugin "raw_exec" {
  config {
    enabled = true
  }
}

plugin "exec" {
  config {}
}

# @see somewhere on this page https://developer.hashicorp.com/nomad/docs/drivers/docker
plugin "docker" {
  config {
    endpoint = "unix:///var/run/docker.sock"

    // auth {
    //   config = "/etc/docker-auth.json"
    //   helper = "ecr-login"
    // }

    // tls {
    //   cert = "/etc/nomad/nomad.pub"
    //   key  = "/etc/nomad/nomad.pem"
    //   ca   = "/etc/nomad/nomad.cert"
    // }

    extra_labels = ["job_name", "job_id", "task_group_name", "task_name", "namespace", "node_name", "node_id"]

    gc {
      image       = true
      image_delay = "3m"
      container   = true

      dangling_containers {
        enabled        = true
        dry_run        = false
        period         = "5m"
        creation_grace = "5m"
      }
    }

    volumes {
      enabled      = true
      selinuxlabel = "z"
    }

    allow_privileged = false
    allow_caps = ["audit_write", "chown", "dac_override", "fowner", "fsetid", "kill", "mknod",
    "net_bind_service", "setfcap", "setgid", "setpcap", "setuid", "sys_chroot", "ipc_lock"]
  }
}

# TODO
// consul {
//   address = "1.2.3.4:8500"
// }
