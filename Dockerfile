FROM  node:16-alpine3.14

WORKDIR /home/api

COPY package.json .

RUN yarn
