FROM node:12.8-alpine

WORKDIR /client
ADD package.json /client

RUN npm install
COPY . .

EXPOSE 3008

CMD ["npm","start"]
