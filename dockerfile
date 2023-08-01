
FROM node:18


WORKDIR /app


COPY package.json yarn.lock ./


RUN yarn install --production


COPY . .



CMD ["node", "index.js"]
