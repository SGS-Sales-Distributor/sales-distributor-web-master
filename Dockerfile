FROM node:lts-alpine

# setup working directory
WORKDIR /www/sales-distributor-web-master

# install all package.
COPY package*.json ./

# do install all package
RUN npm install

# copy all application code into workdir
COPY . .

# build vue js application
RUN npm run build

# setup application port
EXPOSE 8081

# running vue js application
CMD npm run dev