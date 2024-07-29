FROM node:22-alpine

ENV NODE_ENV=development

WORKDIR /usr/app/dev

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run" ,"dev"]
