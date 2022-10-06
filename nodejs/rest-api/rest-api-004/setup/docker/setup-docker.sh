cd setup/docker/ 

export PROJECT_DIR=$1;
export PROJECT_ENV=$2;

if [[ -z "$2" ]]; then
    export PROJECT_ENV_FILE=./.env;
else
    export PROJECT_ENV_FILE=./setup/envs/$PROJECT_ENV/.env;
fi


echo "################################################################################"
echo " PROJECT_DIR        : ${PROJECT_DIR}"
echo " PROJECT_ENV        : ${PROJECT_ENV}"
echo " PROJECT_ENV_FILE   : ${PROJECT_ENV_FILE}"
echo "################################################################################"

# LOAD ENVS
set -o allexport
source $PROJECT_DIR/$PROJECT_ENV_FILE
set +o allexport
# printenv # FOR DEBBUGING ONLY


# STOP ANY CONTAINER OR NODE SERVER RUNNING BEFORE START
killall -9 node;
docker kill $(docker ps -q); 



echo "################################################################################"
echo " CREATING DOCKER NETWORK: ${DOCKER_NETWORK}"
echo "################################################################################"
# docker network prune -f;
docker network inspect ${DOCKER_NETWORK} >/dev/null 2>&1 || \
docker network create --driver bridge ${DOCKER_NETWORK};
docker network ls; echo ""


# SETUP TIERS
sh repo-mongo/setup-repo-mongo.sh      
sh monitor/setup-monitor.sh 



if [[ -z "$2" ]]; then
    
    echo "################################################################################"
    echo " TIER ${SERVER_NAME}:${SERVER_ENV} "
    echo "################################################################################"
    
    npm install;
    npm run start;

else
    sh app/setup-app.sh;
fi