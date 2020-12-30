FROM node:12.8-alpine

RUN npm install -g nodemon

WORKDIR /server
ADD package.json /server

RUN npm install
COPY . .

EXPOSE 3007

CMD ["npm","start"]
