# CUSTOM HELM

    sh setup/k8s/reset-minikube.sh
    eval $(minikube -p  minikube docker-env); clear; docker images;
    export ENV=lol;
    sh setup/docker/app/create-img.sh;
    kubectl create ns my-helm;
    kubectl config set-context --current --namespace=my-helm

    helm template setup/helm/app --values conf/$ENV/k8s.yml > _notes/out.yml;

# open my-app.com

# open http://192.168.64.8:30000/

    helm uninstall my-helm; k.ll;
    helm install my-helm setup/helm/app --values conf/$ENV/k8s.yml;
    helm upgrade my-helm setup/helm/app --values conf/$ENV/k8s.yml;
    k cluster-info
    k get cm my-app-cm
    k describe cm my-app-cm
    k scale deploy/my-app --replicas=3; k.ls;
    k autoscale deploy/my-app --min=1 --max=2 --cpu-percent=80
    k rollout pause deploy/my-app
    k rollout status deploy/my-app
    k rollout undo deploy/my-app
    k rollout history deploy/my-app --revision=2
    {{ toYaml .Values.app.deploy.env_vars | indent 2 }}

    k port-forward prometheus-deployment-75cff7d89f-5lvrw 8080:9090 -n monitoring
    k port-forward prometheus-deployment-75cff7d89f-5lvrw 8080:9090
