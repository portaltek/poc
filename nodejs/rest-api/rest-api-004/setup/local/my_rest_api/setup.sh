# OPTIONAL. REMOVE IF YOU EXECUTE DIRECTLY
export PROJECT_DIR=$1;
cd $PROJECT_DIR

set -o allexport
source ./.env
set +o allexport
# printenv # FOR DEBBUGING ONLY

docker compose down; docker volume prune -f; docker image prune -f; 


# DOCKER IMG CREATION
docker rmi -f $DOCKER_IMG_NAME:$DOCKER_IMG_TAG;
docker build . \
    -t $DOCKER_IMG_NAME:$DOCKER_IMG_TAG \
    -f ./docker.dockerfile;
docker images; 
docker compose up -d; 


