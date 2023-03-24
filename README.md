# MICRO NODES LIST TO LACNET

# auth google

    gcloud auth activate-service-account 504027977907-compute@developer.gserviceaccount.com --key-file lacchain-key.json --project lacchain-bid

    gcloud container clusters get-credentials david19 --zone us-central1-a --project lacchain-bid

# set contexts

    kubectl config get-contexts

    kubectl config set-context gke_lacchain-bid_us-central1-a_david19 --namespace=backoffice-nodes
    kubectl config use-context gke_lacchain-bid_us-central1-a_david19--namespace=backoffice-nodes

# MONGO LOCAL

create volumen

    $ docker  volume create datanodes

## Kubernetes
https://api.backoffice.lac-net.net/list-nodes

### secret

echo -n 'xxxx' > ./username
echo -n 'xxx' > ./password



kubectl create secret generic mongo-user-pass --from-file=./username --from-file=./password -n backoffice-nodes

kubectl create secret generic mail-user-pass --from-file=./username --from-file=./password -n backoffice-nodes

kubectl get secret mongo-user-pass

kubectl describe secret mongo-user-pass -n backoffice-nodes

 kubectl get pvc -n backoffice-nodes

 kubectl get storageclass -n backoffice-nodes

 kubectl get pod -n backoffice-nodes

 k get svc -n backoffice-nodes

 kubectl port-forward service/ms-mongo-service-svc 27017 -n backoffice-nodes