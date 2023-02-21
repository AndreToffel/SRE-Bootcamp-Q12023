FROM node:9-alpine

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .
# App must run on port 8000
EXPOSE 8000

CMD [ "npm", "run", "start"]
# Add your instructions to dockerize the application