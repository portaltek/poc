cd $PROJECT_DIR/setup/docker/monitor

echo "################################################################################"
echo " setup-monitor.sh:${SERVER_ENV}"
echo "################################################################################"

if [ "${DOCKER_DELETE_TIER_MONITOR}" = true ]; then
    echo "DELETING DOCKER TIER"
    docker compose down;
    docker volume prune -f; 
    docker image prune -f; 
fi
docker compose up -d;