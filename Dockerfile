FROM node:22
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --save-dev nodemon
COPY . .
EXPOSE 3000
CMD [ "npx", "nodemon", "--legacy-watch", "src/index.js" ]