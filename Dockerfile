# FROM node:18-alpine3.16 as development
FROM node:18-alpine3.16 as development

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

FROM node:18-alpine3.16 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --only=prod

COPY . .

COPY --from=development /usr/src/app /usr/src/app

CMD ["node", "dist/api/main"]