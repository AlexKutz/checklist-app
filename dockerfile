FROM node:22-alpine as base

WORKDIR /app

FROM base as dev

ENV NODE_ENV=development

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

CMD [ "npm", "run", "dev" ]

FROM dev as build

COPY . .

RUN npm run build

FROM base as production

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY package-lock.json package.json ./

RUN npm ci

COPY --from=build /app/build ./build

RUN du -sh ./build

USER node

CMD [ "npm", "run", "start" ]
