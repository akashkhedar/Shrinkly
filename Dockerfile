FROM node:latest

WORKDIR /home/app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "node", "main.js" ]