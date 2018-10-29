# quickies
  ```sh
    # download an editable deployment manager template
      gsutil cp gs://cloud-training/gcpfcoreinfra/mydeploy.yaml mydeploy.yaml
      
    # build a deployment from a template
      gcloud deployment-manager deployments create my-first-depl --config mydeploy.yaml
  ```