
minikube stop; cluster_name=ingress-cluster
minikube start --vm=true        -p $cluster_name; #minikube start --driver=hyperkit;
minikube addons enable ingress  -p $cluster_name;

kubectl get po  -n ingress-nginx;       # Should display 3 pods.
kubectl get svc -n ingress-nginx;       # Should display 2 services.
kubectl api-resources | grep ingress    # Should display 2 kinds resources.
minikube ip -p ingress-cluster;         # Should display node IP.
sudo vim /etc/hosts                     # Update host IP to ingress Hosts

############################################################################
export my_ns=my-ingress
kubectl delete ns $my_ns; kubectl create ns $my_ns; 

kubectl config set-context --current --namespace=$my_ns
kubectl get ns; kubectl config view --minify | grep namespace:
kubectl apply -f 01-svc1.yml ; 
kubectl apply -f 01-svc2.yml ; 
kubectl apply -f 02-ing.yml ; sleep 5;


curl -kL http://localhost/apple
curl -kL http://192.168.99.100/apple
curl -kL http://192.168.49.2/apple

curl -kL http://my-node-ap/api
