cd $PROJECT_DIR/setup/docker/repo

echo "################################################################################"
echo " TIER REPO:${SERVER_ENV}"
echo "################################################################################"

################################################
# FOR DEEP CLEAN UP: REMOVE COMMENTS 
################################################
docker compose down;
docker volume prune -f; 
docker image prune -f; 


docker compose up -d;
