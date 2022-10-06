
brew install minikube hyperkit 
minikube start --driver=hyperkit
minikube stop
minikube tunnel # To expose external IP. Keep open this terminal and open a new one.
kubectl api-resources


############################################################################
# namespace:ns
kubectl delete ns test
kubectl apply -f 01-namespace.yml
kubectl config set-context --current --namespace=test
kubectl config view --minify | grep namespace:
kubectl get ns --show-labels 

############################################################################
export my_ns=my-ingress
kubectl delete ns $my_ns; kubectl create ns $my_ns; 
kubectl config set-context --current --namespace=$my_ns
kubectl get ns --show-labels; kubectl config view --minify | grep namespace:
kubectl apply -f ./
minikube tunnel; # Open browser at Service.ExternalIP:Service.Port[1]
minikube -n $my_ns service $my_ns;
# kubectl create ns advanced-policy-demo
# kubectl create deploy -n=advanced-policy-demo nginx --image=nginx
# kubectl expose -n=advanced-policy-demo deployment nginx --port=80

