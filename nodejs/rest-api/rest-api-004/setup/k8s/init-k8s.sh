# sh setup/k8s/init-k8s.sh

export PROJECT_DIR=$(pwd);
export PROJECT_ENV=${2};

if [[ -z "$2" ]]; then
    export PROJECT_ENV_FILE=$PROJECT_DIR/.env;
else
    export PROJECT_ENV_FILE=$PROJECT_DIR/setup/envs/$PROJECT_ENV/.env;
fi

echo "################################################################################"
echo " PROJECT_DIR        : ${PROJECT_DIR}"
echo " PROJECT_ENV        : ${PROJECT_ENV}"
echo " PROJECT_ENV_FILE   : ${PROJECT_ENV_FILE}"
echo "################################################################################"

# LOAD ENVS
set -o allexport
#source $PROJECT_DIR/$PROJECT_ENV_FILE
source $PROJECT_ENV_FILE
set +o allexport
# printenv # FOR DEBBUGING ONLY
# cd setup/k8s/ 
# minikube start --driver=hyperkit;
# kubectl cluster-info;

kubectl apply -f $PROJECT_DIR/setup/k8s/test/


