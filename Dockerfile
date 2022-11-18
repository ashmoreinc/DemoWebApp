FROM node:18

WORKDIR /usr/share/Demo/src/

COPY package.json .
COPY ./static ./static
COPY ./*.js .
COPY ./certs ./certs

# Development installation
RUN npm install


EXPOSE 80
EXPOSE 443
CMD ["node", "index.js"]