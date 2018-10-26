# kubernetes
  - required APIs
    - Google Kubernetes Engine API
    - Google Container Registry API


# basic
  - pods: all containers run in pods
  -
# quickes
  ```sh
    # check kubernetes version
    kubectl version

    # view running pods
    kubectl get pods

    # view all services
    kubectl get services

  ```

# steps
  - start a kubernetes engine cluster
    ```sh
      # export your zone
      export MY_ZONE=us-central1-a

      # start a cluster named webfrontend managed byy kubernetes engine with 2 nodes
      gcloud container clusters create webfrontend --zone $MY_ZONE --num-nodes 2
    ```
  - run and deploy a container
    ```sh
      # launch a single instance of nginx container
      kubectl run nginx --image=nginx:1.10.0
    ```
  - modify a running container named `nginx` exposed port
    - kubernetes created a service and an external load balancer with a public IP address attached to it. The IP address remains the same for the life of the service. Any network traffic to that public IP address is routed to pods behind the service:
    - it takes a while for the external IP to display
    ```sh
      kubectl expose deployment nginx --port 80 --type LoadBalancer

    ```
  - scale the number of pods running on the NGINX service
    ```sh
      kubectl scale deployment nginx --replicas 3
    ```