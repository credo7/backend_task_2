FROM node:lts-alpine

WORKDIR /

EXPOSE 3000

CMD ["npm", "run", "start"]

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY ./src ./src