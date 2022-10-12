# sh setup/k8s/setup-k8s.sh

export PROJECT_DIR=$(pwd);
export PROJECT_ENV=${2};

if [[ -z "$2" ]]; then
    export PROJECT_ENV_FILE=.env;
else
    export PROJECT_ENV_FILE=.env;
    # export PROJECT_ENV_FILE=setup/envs/$PROJECT_ENV/.env;
fi

# LOAD ENVS
set -o allexport
source $PROJECT_DIR/$PROJECT_ENV_FILE
set +o allexport
env | grep SERVER

echo "################################################################################"
echo " PROJECT_DIR        : ${PROJECT_DIR}"
echo " PROJECT_ENV        : ${PROJECT_ENV}"
echo " PROJECT_ENV_FILE   : ${PROJECT_ENV_FILE}"
echo "################################################################################"

# STOP ANY CONTAINER OR NODE SERVER RUNNING BEFORE START
killall -9 node;
docker kill $(docker ps -q); 


if [ "${DOCKER_DELETE_TIER_APP}" = true ]; then
    echo "DELETING DOCKER IMG= $DOCKER_IMG_NAME:$DOCKER_IMG_TAG"

    docker volume prune -f; docker image prune -f; 
    docker rmi -f $DOCKER_IMG_NAME:$DOCKER_IMG_TAG;
    docker build . \
        -t $DOCKER_IMG_NAME:$DOCKER_IMG_TAG \
        -f ./Dockerfile; 
fi

docker images; 