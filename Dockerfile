# --- Build stage ---
FROM node:18-alpine AS builder
WORKDIR /app

# Copia dependências
COPY package*.json ./
RUN npm ci

# Copia o código-fonte
COPY . .

# Build Angular Universal (SSR)
RUN npm run build:ssr

# --- Runtime stage ---
FROM node:18-alpine AS runner
WORKDIR /app

# Copia apenas os artefatos necessários
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Railway injeta as variáveis aqui automaticamente
ENV PORT=3000
EXPOSE $PORT

# Start do SSR
CMD ["npm", "start"]