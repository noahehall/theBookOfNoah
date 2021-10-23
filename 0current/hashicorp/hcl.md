[check this](https://github.com/hashicorp/hcl/tree/hcl2)

- json|yaml: formats for serializing data structures
- hcl: syntax and API designed for building structured configuration formats



# concepts 
    - attriburtes
      - e.g. below 'service' is an attribute
    - blocks
      - start with {}

    ```hcl
        #hcl file in native syntax 
        # this is an attribute
        io_mode = "async"
        poop = 1 + addend
        message = "Hello, ${name}!"
        shouty_message = upper(message)

        # the block starts with {}
        service "http" "web_proxy" {
          listen_addr = "127.0.0.1:8080"
          
          process "main" {
            command = ["/usr/local/bin/awesome-app", "server"]
          }

          process "mgmt" {
            command = ["/usr/local/bin/awesome-app", "mgmt"]
          }
        }

    ```