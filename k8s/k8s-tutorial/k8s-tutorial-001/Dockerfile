FROM my_app_base

COPY src /app/src
RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/index.js" ]