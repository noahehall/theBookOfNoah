# @see https://developer.hashicorp.com/nomad/docs/configuration/server
## ^ theres too many options, always try to review it when updating your server

server {
  enabled          = true
  bootstrap_expect = 3

  # Encrypt gossip communication
  encrypt = "+p7iF56z0EWoSIvhpYHWXZrSAAtnjR9l6XHRzHqQKlg="

  # restrict enabled schedulers & limit max number of scheduler cores
  enabled_schedulers = ["batch", "service"]
  num_schedulers     = 7

  server_join {
    # could also be dns names, either way point to other servers in thje cluster
    retry_join = [ "1.1.1.1", "2.2.2.2" ]
    retry_max = 3
    retry_interval = "15s"
  }
}


# configuring spread scheduling and enabling preemption
server {
  default_scheduler_config {
    scheduler_algorithm             = "spread"
    memory_oversubscription_enabled = true
    reject_job_registration         = false
    pause_eval_broker               = false # New in Nomad 1.3.2

    preemption_config {
      batch_scheduler_enabled    = true
      system_scheduler_enabled   = true
      service_scheduler_enabled  = true
      sysbatch_scheduler_enabled = true # New in Nomad 1.2
    }
  }
}
