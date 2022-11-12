##

    brew install minikube docker hyperkit

##

    # DELETES minikube instance, all images & resources.
    # CREATES minikube instance and ingress addon.
    sh setup/k8s/reset-minikube.sh

##

    # DELETES the namespace and ALL its resources.
    # CREATES the namespace.
    sh setup/k8s/reset-namespace.sh

    # SAMPLE OUTPUT

        Error from server (NotFound): namespaces "my-app" not found
        namespace/my-app created
        Context "minikube" modified.
        NAME              STATUS   AGE
        default           Active   3m33s
        ingress-nginx     Active   3m28s
        kube-node-lease   Active   3m34s
        kube-public       Active   3m34s
        kube-system       Active   3m34s
        my-app            Active   0s
            namespace: my-app

##

    # DELETES docker images: base & app (If they are not in use by a container)
    # CREATES docker images: base & app
    sh setup/docker/create-images.sh

    # SAMPLE OUTPUT

    REPOSITORY   TAG     IMAGE ID       CREATED                  SIZE
    my_app       v1.0.0  786c7434b6fc   Less than a second ago   296MB
    my_app_base  latest  6d84f0eecf76   13 seconds ago           296MB

##

    # CREATES k8s resources
    sh setup/k8s/create-resources.sh
