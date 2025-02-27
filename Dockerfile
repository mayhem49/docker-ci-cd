FROM node:23-alpine
WORKDIR /src/usr/app

COPY package* ./

RUN npm ci

COPY . .

ENV PORT 80

CMD node server.js

