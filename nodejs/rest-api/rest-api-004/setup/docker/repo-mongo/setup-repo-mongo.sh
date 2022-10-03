cd $PROJECT_DIR/setup/docker/repo-mongo

echo "################################################################################"
echo " setup-repo-mongo.sh:${SERVER_ENV}"
echo "################################################################################"
    
if [ "${DOCKER_DELETE_TIER_REPO_MONGO}" = true ]; then
    echo "DELETING DOCKER TIER"
    docker compose down;
    docker volume prune -f; 
    docker image prune -f; 
fi

docker compose up -d;
