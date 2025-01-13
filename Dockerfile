ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /opt/app

FROM base as dependencies
COPY package.json package-lock.json ./
RUN npm ci --production

FROM base
ARG START_CMD
ENV START_CMD ${START_CMD}

RUN apk add --update --no-cache tini

USER node:node
COPY --chown=node:node . ./
COPY --from=dependencies --chown=node:node /opt/app/node_modules ./node_modules

CMD /sbin/tini -- $START_CMD