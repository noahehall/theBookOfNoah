# @see https://developer.hashicorp.com/nomad/tutorials/manage-jobs/jobs-configuring
# template will be written to disk and read as env vars before a task starts

# retrieve values from:
## node attributes/metadat
## files on disk
## consul
## vault secrets
template {
  data = <<EOH
LOG_LEVEL="{{key "service/geo-api/log-verbosity"}}"
API_KEY="{{with secret "secret/geo-api-key"}}{{.Data.key}}{{end}}"
CERT={{ file "path/to/cert.pem" | to JSON }}
NODE_ID="{{ env "node.unique.id" }}"
EOH

  destination = "secrets/config.env"
  env         = true
}
