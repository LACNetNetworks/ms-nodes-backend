FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "server.js" ]
# docker build -t gcr.io/lacchain-bid/ms-nodes-backend:1.0.5 -f ./docker/Dockerfile .
# docker build -t edumar111/ms-nodes-backend:1.0.5 -f ./docker/Dockerfile .