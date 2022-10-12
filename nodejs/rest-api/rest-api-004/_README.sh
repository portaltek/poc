# proj nodejs/rest-api/rest-api-004
################################################################################################
# SETUP FROM SCRATCH
################################################################################################
brew install minikube hyperkit docker
minikube start --vm=true        -p ingress-cluster;
minikube addons enable ingress  -p ingress-cluster;


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


