job "docs" {
  # This will constrain this job to only run on 64-bit clients.
  constraint {
    attribute = "${attr.cpu.arch}"
    value     = "amd64"
  }

  # This will restrict the job to only run on clients with 4 or more cores.
  # Note: you may also declare a resource requirement for CPU for a task.
  constraint {
    attribute = "${cpu.numcores}"
    operator  = ">="
    value     = "4"
  }

  # Only run this job on a memory-optimized AWS EC2 instance.
  constraint {
    attribute = "${attr.platform.aws.instance-type}"
    value     = "m4.xlarge"
  }
}
