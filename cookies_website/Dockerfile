FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN find /app/node_modules/.bin -type f -exec chmod +x {} \;

EXPOSE 5173

CMD ["npm", "run", "dev"]