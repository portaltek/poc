#############################################################################
# OPTIONAL: Reset minikube
#############################################################################
minikube stop; minikube delete --all ;
minikube start --driver=hyperkit; minikube addons enable ingress;


