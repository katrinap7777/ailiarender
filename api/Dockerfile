FROM node:14-alpine
WORKDIR /app
# RUN 
COPY package*.json /app/
RUN ["npm", "install"]
COPY . /app/
EXPOSE 5001
ENTRYPOINT ["npm", "run", "start"]