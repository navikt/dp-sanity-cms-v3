FROM node:16-alpine AS runtime
WORKDIR /usr/src/app

WORKDIR /

COPY ./dist dist
