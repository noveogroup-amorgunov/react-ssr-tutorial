FROM node:12

COPY node_modules /app/node_modules
COPY dist /app/dist
COPY static /app/static
COPY index.js /app/
COPY package.json /app/
COPY package-lock.json /app/

WORKDIR /app

ENV NODE_ENV production
ENV PORT 80

EXPOSE 80

CMD node /app/index.js
