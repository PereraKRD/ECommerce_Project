FROM node:alpine
WORKDIR /server
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 4000
CMD ["npm","run","dev"]
