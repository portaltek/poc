#############################################################################
# OPTIONAL: Reset namespace
#############################################################################
export my_ns=my-app; 
kubectl delete ns $my_ns; kubectl create ns $my_ns; 
kubectl config set-context --current --namespace=$my_ns;
kubectl get ns; kubectl config view --minify | grep namespace:

