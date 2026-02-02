FROM node:20-bookworm-slim AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --ignore-scripts
COPY . .
# Remove the faulty cp command.
# Replacing " && cp [anything not a quote]*" with empty string to preserve closing quote.
RUN sed -i 's/ && cp [^\"]*//' package.json
RUN npm run build

FROM node:20-bookworm-slim
WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/index.js ./index.js
COPY --from=builder /app/*.txt ./

ENV MEMORY_FILE_PATH=/data/memory.json
ENV SESSIONS_FILE_PATH=/data/sessions.json

RUN mkdir -p /data && chown -R node:node /data
RUN chmod 777 /data

USER node
ENTRYPOINT ["node", "index.js"]
