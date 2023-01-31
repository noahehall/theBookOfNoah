# @see https://developer.hashicorp.com/nomad/tutorials/manage-jobs/jobs-configuring
## from this
### http-echo -listen=":5678" -text="hello world"
## to this
### check the requirements on config > command
job "docs" {
  datacenters = ["us-east"]


  group "example" {
    network {
      port "http" {
        static = "5678"
      }
    }

    task "server" {
      driver = "exec"

      config {
        command = "/bin/http-echo"

        args = [
          "-listen",
          ":5678", # ":${NOMAD_PORT_http}", for a random port
          "-text",
          "hello world",
        ]
      }
    }
  }
}
