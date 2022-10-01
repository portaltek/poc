# OPTIONAL. REMOVE IF YOU EXECUTE DIRECTLY
cd repo

################################################
# FOR DEEP CLEAN UP: REMOVE COMMENTS 
################################################
docker compose down;
docker volume prune -f; 
docker image prune -f; 

docker compose up -d;