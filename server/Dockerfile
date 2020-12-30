FROM node:12.8-alpine

WORKDIR /server
ADD package.json /server

RUN npm install
COPY . .

EXPOSE 3007

CMD ["npm","start"]
