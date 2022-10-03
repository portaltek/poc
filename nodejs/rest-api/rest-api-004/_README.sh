# proj nodejs/rest-api/rest-api-004
################################################################################################
# SETUP FROM SCRATCH
################################################################################################

# DEPENDENCIES
npm init -y
npm i bcrypt compression cors express dotenv envalid helmet joi jsonwebtoken \
module-alias mongoose morgan winston winston-daily-rotate-file tslog ts-node \
axios uuid

npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier typescript \
tsc-watch jest ts-jest 

npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/node \
@types/cors @types/express @types/compression @types/morgan @types/bcrypt \
@types/jsonwebtoken @types/jest @types/uuid


npx tsc --init

# CREATE / UPDATE FILES:

touch .prettierrc.js 
# module.exports = { tabWidth: 4, singleQuote: true, semi: false, }

touch .eslintrc.js  
# module.exports = { parser: '@typescript-eslint/parser', parserOptions: { ecmaVersion: 2018, sourceType: 'module', }, rules: {},
#     extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'] };

code package.json 
# ADD TO FILE scripts:
# "dev": "tsc-watch --onSuccess \"node dist/index.js\" && exit 1", "build": "tsc", "install": "npm run build", "start": "node dist/index.js",
# APPEND TO THE END OF JSON FILE:
#, "_moduleAliases": { "@": "dist"  }

code tsconfig.json # ADD TO FILE compilerOptions:
# "baseUrl": "./src", "outDir": "./dist", "paths": {"@/*": ["*"]},

touch .env .env.sample 
# SERVER_ENV=lcl
# SERVER_PORT=3000
# MONGO_PATH=localhost:27017/my_db_000
# MONGO_USER=my_db_username
# MONGO_PASS=my_db_password
# JWT_SECRET=my_jwt_secret

touch jest.config.js
mkdir src src/util src/resource/ 



