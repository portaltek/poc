brew uninstall hyperkit minikube; brew cleanup;
brew install   hyperkit minikube; brew cleanup;
brew list;

minikube stop; minikube delete --all ;
minikube start --driver=docker; minikube addons enable ingress;

############################################################################
export my_ns=my-daemonset
kubectl delete ns $my_ns; kubectl create ns $my_ns; 
kubectl config set-context --current --namespace=$my_ns
kubectl get ns; kubectl config view --minify | grep namespace:
kubectl apply -f 01-svc0.yml; k get secrets; k get cm;
kubectl apply -f 01-svc1.yml; sleep 5; k.ls;
kubectl apply -f 01-svc2.yml; sleep 5; k.ls;


minikube -n $my_ns service mongo-express-service; 
k create secret generic my-secret \
    --from-literal=API_TOKEN=password123;
k create secret generic my-secret2 \
    --from-literal=CATALINA_BASE=${CATALINA_BASE};
k create secret generic my-secret3 \
    --from-file=MY_FILE=secret1.yml;
k create secret generic my-secret4 \
    --from-file=secret1.yml \
    --from-file=secret2.yml ;

k get secret my-secret4 -o yaml;
k describe secret my-secret4 ;