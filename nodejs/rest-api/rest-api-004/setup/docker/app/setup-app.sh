cd $PROJECT_DIR

echo "################################################################################"
echo " TIER ${SERVER_NAME}:${SERVER_ENV} "
echo "################################################################################"

echo " CLEAN UP "
docker compose down; docker volume prune -f; docker image prune -f; 

echo " DOCKER IMAGE CREATION "
docker rmi -f $DOCKER_IMG_NAME:$DOCKER_IMG_TAG;
# docker images; 
docker build . \
    -t $DOCKER_IMG_NAME:$DOCKER_IMG_TAG \
    -f ./Dockerfile;    
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

