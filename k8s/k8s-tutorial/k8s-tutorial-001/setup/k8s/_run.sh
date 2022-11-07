minikube stop; minikube delete --all ;
minikube start --driver=docker; minikube addons enable ingress;
minikube start --driver=hyperkit; minikube addons enable ingress;
cd setup/k8s;

# For local
export my_ns=my-app; 
kubectl delete ns $my_ns; kubectl create ns $my_ns; 
kubectl config set-context --current --namespace=$my_ns;
kubectl get ns; kubectl config view --minify | grep namespace:
kubectl apply -f 01-svc.yml; 
kubectl apply -f 02-deploy.yml; 
kubectl apply -f 03-ingress.yml; 
curl my-app.com


minikube ip -p minikube; 
kubectl get po -n ingress-nginx | grep ingress-nginx-controller; 

kubectl get ing -w;
kubectl describe ing my-app-ing;

minikube -n $my_ns service my-app-svc;

kubectl scale deploy my-app --replicas=2;

curl -kL http://my-app/api
kubectl get services kube-dns --namespace=kube-system
open 10.97.252.191:30000
open 192.168.49.2:30000


