# sed
  ```sh
    # replace a string in a file with a shell variable
      sed -i -e 's/PROJECT_ID/'$DEVSHELL_PROJECT_ID/ mydeploy.yaml

  ```