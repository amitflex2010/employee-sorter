FROM node:14 as node 
WORKDIR /app
COPY package*.json ./


RUN npm install
COPY . . 
RUN npm run build



#EXPOSE 5000


FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=node /app/build /usr/share/nginx/html


EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

#uncomment the below lines while deploying to heroku. As port binding to 0.0.0.:80 is not allowed#
