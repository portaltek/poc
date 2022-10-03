cd $PROJECT_DIR

echo "################################################################################"
echo " setup-app.sh:${SERVER_ENV} "
echo "################################################################################"


if [ "${DOCKER_DELETE_TIER_APP}" = true ]; then
    echo "DELETING DOCKER TIER"
    docker compose down;
    docker volume prune -f; docker image prune -f; 
    docker rmi -f $DOCKER_IMG_NAME:$DOCKER_IMG_TAG;
    docker build . \
        -t $DOCKER_IMG_NAME:$DOCKER_IMG_TAG \
        -f ./Dockerfile; 
fi
   
docker images; 
docker compose up -d; 
docker ps -a; 


docker logs $DOCKER_IMG_NAME -f # TAIL LOGS IN CONTAINER
# docker exec -it $DOCKER_IMG_NAME sh; # OPEN TERMINAL FROM CONTAINER


# IN CASE IT DID NOT OPEN THE TERMINAL: 
# TO KEEP_CONTAINER_ALIVE_TO_DEBUG 
# REMOVE COMMENTS FROM APP docker-compose.yml:
#   
#    command: tail -F KEEP_CONTAINER_ALIVE_TO_DEBUG 
#

