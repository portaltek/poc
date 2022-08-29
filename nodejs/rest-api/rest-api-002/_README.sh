# crud-rest-api-002

https://www.youtube.com/watch?v=goUbHgAzPCs

npm init -y


########################################################################
npm install -g typescript
npx typescript --init # not working
tsc --init
npx -p typescript -y  tsc --init # Alternative???
npm i --save-dev typescript
########################################################################

npm i express yup config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid
npm i @types/body-parser @types/config @types/cors @types/express @types/node \
@types/yup @types/pino @types/mongoose @types/bcrypt @types/jsonwebtoken \
@types/lodash @types/nanoid nodemon ts-node typescript -D

touch nodemon.json
to config/ default.ts
to src/utils/ jwt.utils.ts
to src/ app.ts
to src/ routes.ts

to src/db/ connect.ts

to src/model/ session.model.ts
to src/model/ post.model.ts
to src/model/ user.model.ts
to src/schema/ user.schema.ts 
to src/schema/ post.schema.ts 
to src/middleware/ index.ts
to src/middleware/ validateRequest.ts
to src/middleware/ requiresUser.ts
to src/middleware/ deserializeUser.ts
to src/service/ user.service.ts
to src/service/ session.service.ts
to src/service/ post.service.ts
to src/controller/ user.controller.ts
to src/controller/ session.controller.ts
to src/controller/ post.controller.ts






