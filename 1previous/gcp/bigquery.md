# shell
## bq command
  - The first time you use the bq command, it caches your Google Cloud Platform credentials, and then asks you to choose your default project.
  ```sh
    # query the accesslog tab
      bq query "select string_field_10 as request, count(*) as requestcount from logdata.accesslog group by request order by requestcount desc"

  ```