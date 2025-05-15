FROM node:slim

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

# Permitir acesso de hosts externos
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check", "--public-host", "viralar.upestagio.com"]