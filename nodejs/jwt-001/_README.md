# crud-rest-api-002

https://www.youtube.com/watch?v=mbsmsi7l3r4

# Commands

npm init -y
npm install --save express jsonwebtoken dotenv
npm install --save-dev nodemon

# package.json > scripts > ADD "start": "nodemon server.js",

touch server.js

# Create ACCESS & REFRESH TOKEN

node
require("crypto").randomBytes(64).toString("hex")

# Start server & server-auth

npm start
npm run startAuth
