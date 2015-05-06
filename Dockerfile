FROM neo9polska/nodejs-bower-gulp

RUN useradd -ms /bin/bash node
COPY . /home/node/app
RUN chown -R node:node /home/node

USER node
ENV HOME /home/node
WORKDIR /home/node/app

RUN npm install -dd && gulp && rm -rf node_modules && npm install -dd --production

CMD ["npm", "start"]

EXPOSE 9001
