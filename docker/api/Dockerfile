FROM node:7.1.0

RUN npm install -g nodemon
RUN npm install babel -g
RUN npm install -g babel-cli

CMD nodemon --config nodemon-api.json --exec babel-node /srv/app/services/api/index.js

EXPOSE 4000

