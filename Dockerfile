From node:8.10.0-alpine
WORKDIR /user/app
COPY package*.json /user/app/
Run npm install
COPY .  /user/app
EXPOSE 5500
CMD [ "npm","start" ]