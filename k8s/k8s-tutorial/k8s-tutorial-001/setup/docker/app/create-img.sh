# USAGE:
# sh setup/docker/app/create-app-img.sh


# USE LOCAL DOCKER REGISTRY ON CURRENT TERMINAL
clear;
eval $(minikube -p minikube docker-env) # ENABLES TO ACCESS MINIKUBE IMG REGISTRY

docker images; 
echo "################################################################"
echo " ENV=$ENV";
echo "################################################################"

# CREATE DOCKER BASE IMAGE
docker_base=my_app_base:v1.0.0;
docker rmi $docker_base; 
docker build . -f Dockerfile-base -t $docker_base;
docker images;

# # CREATE DOCKER APP IMAGE
docker_img=my_app:v1.0.0-$ENV; docker_app=my_app;
docker rm -f $docker_app; docker rmi $docker_img;
docker build . -f Dockerfile -t $docker_img;
docker images;



# OPTIONAL: RUN THE APP IN A SINGLE CONTAINER
# export ENV=lol;
# docker run -d --name $docker_app $docker_img; 
# docker logs -f $docker_app;
