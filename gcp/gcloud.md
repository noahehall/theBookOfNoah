# cmds
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