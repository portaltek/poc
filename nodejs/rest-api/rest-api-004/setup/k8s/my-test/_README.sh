
brew install minikube hyperkit 
minikube start --driver=hyperkit

############################################################################
# namespace:ns
kubectl delete ns app
kubectl apply -f 00-*.yml; k.ns app
kubectl config set-context --current --namespace=test
kubectl config view --minify | grep namespace:
kubectl get ns --show-labels 

############################################################################
# service:svc
# deployment:deploy
kubectl delete ns test; k.ns default


export my_ns=my-test
kubectl delete ns $my_ns; kubectl create ns $my_ns; 
kubectl config set-context --current --namespace=$my_ns
kubectl get ns; kubectl config view --minify | grep namespace:
kubectl apply -f ./ ; sleep 5;
minikube -n $my_ns service $my_ns;   # Open browser at MinikubeNode.InternalIP:Service.Port[1]

# for ServiceType LoadBalancer:
# minikube tunnel;  # Starts EXTERNAL-IP in service at Service.Port[0]

############################################################################
kubectl proxy --port=3000 &
curl http://localhost:3000/api/
