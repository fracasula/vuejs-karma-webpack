FROM node:slim

RUN apt-get update
# Installing Chrome dependencies
RUN apt-get install -y \
    libpangocairo-1.0-0 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 \
    libxi6 libxtst6 libnss3 libcups2 libxss1 libxrandr2 libgconf2-4 libasound2 \
    libatk1.0-0 libgtk-3-0

ENV NODE_ENV local

COPY app /usr/src/app

WORKDIR /usr/src/app

RUN npm install && npm run build

EXPOSE 8080

CMD ["/bin/sh", "-c", "npm start"]
