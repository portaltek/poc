FROM node:18.10.0-alpine3.16

ARG PROJECT_DIR
WORKDIR /usr/src/app

COPY . ./

RUN ls -lht
RUN npm install


CMD [ "npm", "start" ]




