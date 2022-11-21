FROM my_app_base:v1.0.0

COPY src /app/src
RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/index.js" ]