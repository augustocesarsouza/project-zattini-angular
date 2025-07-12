# --- Build stage ---
FROM node:18-alpine AS builder
WORKDIR /app

# Declare chaves que Railway injeta em build-time
ARG BASE_URL
ARG KEY_USER
# Adicione caso use NODE_ENV ou outros
ARG RAILWAY_ENVIRONMENT

COPY package*.json ./
RUN npm ci
COPY . .
# Configure environment.prod.ts para usar process.env.BASE_URL, etc.
RUN BASE_URL="$BASE_URL" KEY_USER="$KEY_USER" npm run build:ssr -- --configuration production

# Runtime stage
FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist/project-zattini-angular /app/dist

ENV PORT=${PORT:-3000}
# Variáveis em runtime
ENV BASE_URL=${BASE_URL}
ENV KEY_USER=${KEY_USER}

EXPOSE ${PORT}
CMD ["node", "dist/server/server.mjs"]