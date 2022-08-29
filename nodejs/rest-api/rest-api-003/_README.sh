# rest-api-003 https://www.youtube.com/watch?v=1o9YOHeKhNQ

npm init -y
npm i express dotenv module-alias mongoose compression cors morgan helmet
npm i -D typescript tsc-watch eslint prettier eslint-config-prettier eslint-plugin-prettier
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/node @types/cors \
@types/express @types/compression @types/morgan

npx tsc --init
# "baseUrl": "./src", "outDir": "./dist", "paths": { "@/utils/*": ["/utils/*"], "@/resources/*": ["/resources/*"], "@/middleware/*": ["/middleware/*"] } ,


#    package.json/scripts:
#    "dev": "tsc-watch --onSuccess \"node dist/index.js\" && exit 1",
#    "build": "tsc", "install": "npm run build", "start": "node dist/index.js",



# FILES
touch .env.sample .prettierrc.js .eslintrc.js 

mkdir _infra; mkdir _infra/local; 
to _infra/local/mongo-db/ docker-compose.yml 
to _infra/local/mongo-db/ mongo-init.js


# Open other terminal and execute:
open -a Terminal . 
cd _infra/local/mongo-db/
docker-compose up 

# Usefull commands.
# docker-compose down; docker volume prune -f;
# docker image prune -f;



to app/ app.ts
