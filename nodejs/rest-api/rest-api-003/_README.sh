# rest-api-003
# https://www.youtube.com/watch?v=1o9YOHeKhNQ
# https://www.youtube.com/watch?v=FXzsv2BJLKs
# https://github.com/JasonMerrett/nodejs-api-from-scratch

cd ~/_poc/nodejs/rest-api/rest-api-003
npm init -y
npm i bcrypt compression cors express dotenv envalid helmet joi jsonwebtoken module-alias mongoose morgan  
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier typescript tsc-watch 
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/node @types/cors \
@types/express @types/compression @types/morgan @types/bcrypt @types/jsonwebtoken
npm i -D jest mongodb-memory-server

npx tsc --init
# "baseUrl": "./src", "outDir": "./dist", "paths": { "@/util/*": ["/util/*"], "@/resources/*": ["/resources/*"], "@/middleware/*": ["/middleware/*"] } ,


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

# Usefull commands but be careful:
# docker-compose down; docker volume prune -f; docker image prune -f;

# APPEND into package.json:
# "_moduleAliases": { "@/util": "dist/util", "@/resources": "dist/resources", "@/middleware": "dist/middleware"  }

mkdir src/util src/middleware/ src/resources/

to src/util/exceptions/ http.exception.ts
to src/util/interfaces/ controller.interface.ts
to src/util/ validateEnv.ts

to src/middleware/ error.middleware.ts
to src/middleware/ validation.middleware.ts


# POST
to src/resources/post/ post.interface.ts
to src/resources/post/ post.model.ts
to src/resources/post/ post.validation.ts
to src/resources/post/ post.service.ts
to src/resources/post/ post.controller.ts
# USER
to src/resources/user/ user.interface.ts
to src/resources/user/ user.model.ts
to src/resources/user/ user.validation.ts
to src/util/ token.ts
to src/util/interfaces token.interface.ts
to src/middleware/ authenticated.middleware.ts 

to src/resources/user/ user.service.ts
to src/resources/user/ user.controller.ts

cd ~/_poc/nodejs/rest-api/rest-api-003

to src/ app.ts; to src/ index.ts






