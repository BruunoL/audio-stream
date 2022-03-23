FROM node:17-slim

RUN apt-get update \
  && apt-get install -y sox libsox-fmt-mp3

# libsox-fmt-all

COPY package.json package-lock.json

RUN npm ci --silent

COPY . .

USER node

CMD npm run live-reload