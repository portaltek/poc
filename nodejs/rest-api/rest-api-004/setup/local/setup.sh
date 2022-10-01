cd setup/local/ 

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

docker kill $(docker ps -q) # STOP/KILL ALL CONTAINERS



sh repo/setup.sh      
# sh telemetry/setup.sh 


if [[ -z "$2" ]]; then
    
    npm install;
    
    echo "################################################################################"
    echo " STARTING ENV:lol "
    echo "################################################################################"
    
    npm run start;

else
    sh my_rest_api/setup.sh;
fi