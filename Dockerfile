FROM  node:20-alpine AS builder

WORKDIR /app
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm ci

COPY . .

RUN npm run db:generate 
RUN npm run build 

EXPOSE 3000
CMD [ "npm","run","dev:docker" ]