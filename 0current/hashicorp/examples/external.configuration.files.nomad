# download config files and template them prior to launching tasks



job "docs" {
  datacenters = ["dc1"]

  group "example" {
    task "server" {
      # ...
      artifact {
        source      = "http://example.com/config.hcl.tmpl"
        destination = "local/config.hcl.tmpl"
      }

      template {
        source      = "local/config.hcl.tmpl"
        destination = "local/config.hcl"
      }

      config {
        command = "my-app"
        args = [
          "-config", "local/config.hcl",
        ]
      }
    }
  }
}


## download a file and save it in `${pwd}/local/`
artifact {
  source = "https://example.com/file.txt"
}


## set http headers
artifact {
  source = "https://example.com/file.txt"

  headers {
    User-Agent    = "nomad-[${NOMAD_JOB_ID}]-[${NOMAD_GROUP_NAME}]-[${NOMAD_TASK_NAME}]"
    X-Nomad-Alloc = "${NOMAD_ALLOC_ID}"
  }
}

## use basic authentication by prepending the user & pass to the url
artifact {
  source = "https://exampleUser:pass%2Fword%21@example.com/file.txt"
}

## download a file from git
artifact {
  source      = "git::https://github.com/hashicorp/nomad-guides"
  destination = "local/repo"
}

## download from a private repo by providing an base64 encoded sshkey
artifact {
  # The git:: prefix forces go-getter's protocol detection to use the git ssh
  # protocol. It can also automatically detect the protocol from the domain of
  # some git hosting providers (such as GitHub) without the prefix.
  source      = "git::git@bitbucket.org:example/nomad-examples"
  destination = "local/repo"
  options {
    # Make sure that the Nomad user's known hosts file is populated:
    # ssh-keyscan github.com | sudo tee -a /root/.ssh/known_hosts
    # https://github.com/hashicorp/go-getter/issues/55
    sshkey = "${base64encode(file(pathexpand("~/.ssh/id_rsa")))}"
  }
}


### clone from a specific path/depth or ref
artifact {
  source      = "git::https://github.com/hashicorp/nomad-guides"
  destination = "local/repo"
  options {
    ref = "main"
    depth = 1
  }
}

## nomad will auto unpack archives unless you disable it

artifact {
  source = "https://example.com/file.tar.gz"
  options {
    archive = false
  }
}


## verify checksum
artifact {
  source = "https://example.com/file.zip"

  options {
    checksum = "md5:df6a4178aec9fbdc1d6d7e3634d1bc33"
  }
}


## download from s3
artifact {
  source = "s3://my-bucket-example.s3-us-west-2.amazonaws.com/my_app.tar.gz"

  # add aws keys if a bucket requires auth
  options {
    aws_access_key_id     = "<id>"
    aws_access_key_secret = "<secret>"
    aws_access_token      = "<token>"
  }
}
