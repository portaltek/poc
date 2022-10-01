# OPTIONAL. REMOVE IF YOU EXECUTE DIRECTLY
export PROJECT_DIR=$1;
export BUILD_DIR=$PROJECT_DIR/setup/local/my_app/build/
cd setup/local/ # Used by package.json/script/setup:lol


# sh repo/setup.sh
# sh telemetry/setup.sh
sh my_rest_api/setup.sh $PROJECT_DIR


