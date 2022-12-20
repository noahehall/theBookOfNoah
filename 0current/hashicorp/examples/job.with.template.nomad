job "docs" {
  group "example" {
    task "server" {
      template {
        source        = "local/redis.conf.tpl"
        destination   = "local/redis.conf"
        change_mode   = "signal"
        change_signal = "SIGINT"
      }
    }
  }
}
