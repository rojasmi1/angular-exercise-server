# specify the node base image with your desired version node:<version>
FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Define environment variable
ENV PGHOST localhost
ENV PGUSER o3
ENV PGPASSWORD o3.2017
ENV PGDATABASE o3_exercise
ENV PGPORT 5432

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]