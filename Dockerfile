FROM dockerfile/nodejs-bower-gulp

RUN useradd -ms /bin/bash node
COPY . /home/node/app
RUN chown -R node:node /home/node

USER node
ENV HOME /home/node
WORKDIR /home/node/app

RUN npm install -dd && gulp

CMD ["npm", "start"]

EXPOSE 9001



