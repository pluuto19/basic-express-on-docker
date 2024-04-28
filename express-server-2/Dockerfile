FROM node:22-alpine3.18

WORKDIR /basicserver

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 80

CMD ["npm", "start"]