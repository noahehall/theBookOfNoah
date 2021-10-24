# Todos
  - [gcloud reference](https://cloud.google.com/sdk/gcloud/reference/)
# cmds
## basics
  ```sh
    #initialize
      gcloud init


  ```
## regions and zones
  ```sh

    # display a list of zones in a region
      gcloud compute zones list | grep us-central1

    # set a zone
      gcloud config set compute/zone us-central1-b
  ```

## compute engine
  ```sh
    # default host names
      INSTANE_NAME.c.PROJECT_ID.internal,
    # create a vm instance
          gcloud compute instances create "my-vm-2" \
      --machine-type "n1-standard-1" \
      --image-project "debian-cloud" \
      --image "debian-9-stretch-v20170918" \
      --subnet "default"

  ```

# app engine
  ```sh
    # deploy an app to app engine
    # app.yaml is an arbitrary app engine configuration file
      gcloud app deploy ./index.yaml ./app.yaml

  ```

# cloud datastore
  ```sh
    # deploy a composite index
    # modify index.yaml config to include all properties
    # queries that run before the index has finished building will result in an exception
      gcloud datastore create-indexes

    # delete a composite index
    # modify index.yaml config to remove indexes no longer required
      gcloud datastore cleanup-indexes
  ```