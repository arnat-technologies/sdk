FROM node:12-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh zsh exa

RUN yarn global add yalc nx

USER node

ENV SHELL /bin/zsh
 