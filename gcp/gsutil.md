# cloud storage
  - Cloud Storage buckets can be associated with either a region or a multi-region location: US, EU, or ASIA.
  ```sh
    # create a bucket named after your project id
    # $DEVSHELL_PROJECT_ID is automatically assigned the name of your project
      export LOCATION=US
      gsutil mb -l $LOCATION gs://$DEVSHELL_PROJECT_ID

    # copy an image
      gsutil cp gs://cloud-training/gcpfci/my-excellent-blog.png my-excellent-blog.png

    # copy a file to a bucket
      gsutil cp my-excellent-blog.png gs://$DEVSHELL_PROJECT_ID/my-excellent-blog.png

    # modify the access control list of an object in a bucket
      gsutil acl ch -u allUsers:R gs://$DEVSHELL_PROJECT_ID/my-excellent-blog.png


    # compose an object of smaller chunks
    # cloud storage object composition and parallel uploads
  ```
