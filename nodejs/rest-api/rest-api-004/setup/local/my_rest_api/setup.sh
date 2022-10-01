cd $PROJECT_DIR

set -o allexport
source $PROJECT_ENV_FILE
# source ./setup/envs/$PROJECT_ENV/.env
set +o allexport
# printenv # FOR DEBBUGING ONLY

docker compose down; docker volume prune -f; docker image prune -f; 


# DOCKER IMG CREATION
docker rmi -f $DOCKER_IMG_NAME:$DOCKER_IMG_TAG;
docker images; 
docker build . \
    -t $DOCKER_IMG_NAME:$DOCKER_IMG_TAG \
    -f ./docker.dockerfile;    
docker images; 


docker compose up -d; 

echo "################################################################################"
echo " STARTING ENV:${SERVER_ENV} "
echo "################################################################################"
docker logs $DOCKER_IMG_NAME -f # TAIL LOGS IN CONTAINER
# docker exec -it $DOCKER_IMG_NAME sh; # OPEN TERMINAL FROM CONTAINER


# IN CASE IT DID NOT OPEN THE TERMINAL: 
# TO KEEP_CONTAINER_ALIVE_TO_DEBUG 
# REMOVE COMMENTS FROM APP docker-compose.yml:
#   
#    command: tail -F KEEP_CONTAINER_ALIVE_TO_DEBUG 
#

