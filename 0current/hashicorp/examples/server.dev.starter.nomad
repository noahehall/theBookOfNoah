# @see https://developer.hashicorp.com/nomad/docs/configuration
# most values taken from the default nomad start dev config

data_dir  = "/var/lib/nomad"
datacenter = "us-east"
log_level = "INFO"
name = "vault" # name must be unique in a region for a server
region = "global"

# not used when addresses is {} defined
# bind_addr = "0.0.0.0" # the default
addresses {
  http = "0.0.0.0"
  rpc  = "0.0.0.0"
  serf = "0.0.0.0" # non-default ports may be specified
}

advertise {
  # Defaults to the first private IP address.
  http = "192.168.0.5"
  rpc  = "192.168.0.5"
  serf = "192.168.0.5" # non-default ports may be specified
}

ports {
  http = 4646
  rpc  = 4647
  serf = 4648
}

# @see https://developer.hashicorp.com/nomad/docs/configuration/server
server {
  enabled          = true
  bootstrap_expect = 1
  encrypt = "enter your gossip encryption key"
}

# @see https://developer.hashicorp.com/nomad/docs/configuration/client
client {
  enabled       = true
  options = {
    "driver.allowlist" = "docker,exec,raw_exec"
  }
}

ui {
  enabled =  true

  vault {
    ui_url = "https://dev.nirv.ai:8200/ui"
    // address = ${VAULT_ADDR}
  }

  // consul {
  //   ui_url = "https://consul.example.com:8500/ui"
  // }

}

# enable cors
http_api_response_headers {
  "Access-Control-Allow-Origin" = "*"
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
  config {}
}

# TODO
// consul {
//   address = "1.2.3.4:8500"
// }
