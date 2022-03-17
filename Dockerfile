FROM node:17-slim

RUN apt-get update && apt-get install -y sox libsox-fmt-mp3

COPY . .

USER node 