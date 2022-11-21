# CUSTOM HELM

    sh setup/k8s/reset-minikube.sh
    eval $(minikube -p  minikube docker-env); clear; docker images;
    export ENV=lol;
    sh setup/docker/app/create-img.sh;
    kubectl create ns my-helm;
    kubectl config set-context --current --namespace=my-helm

    helm template setup/helm/app \
        --values config/$ENV/.val.yml > _notes/out.yml;

# open my-app.com

# open http://192.168.64.8:30000/

    helm uninstall my-helm; k.ll;
    helm install my-helm setup/helm/app --values conf/$ENV/.val.yml;
    helm upgrade my-helm setup/helm/app --values conf/$ENV/.val.yml;

    kubectl describe pod/prometheus-8464f58fd8-bb9xl


    quay.io/oauth2-proxy/oauth2-proxy:v7.3.0
    kubectl create secret docker-registry regcred \
    --docker-server=<your-registry-server> \
    --docker-username=<your-name> \
    --docker-password=<your-pword> \
    --docker-email=<your-email>
    ;

    docker pull prom/prometheus:v2.40.2;

    docker pull hello-world:nanoserver-ltsc2022
