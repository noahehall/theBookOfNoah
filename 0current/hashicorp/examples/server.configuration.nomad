# @see https://developer.hashicorp.com/nomad/docs/configuration/server

server {
  enabled          = true
  bootstrap_expect = 3

  # Encrypt gossip communication
  encrypt = "+p7iF56z0EWoSIvhpYHWXZrSAAtnjR9l6XHRzHqQKlg="

  server_join {
    retry_join = [ "1.1.1.1", "2.2.2.2" ]
    retry_max = 3
    retry_interval = "15s"
  }
}
