# --- Build stage ---
FROM node:18-alpine AS builder
WORKDIR /app

# Copia dependências e instala
COPY package*.json ./
RUN npm ci

# Copia código-fonte e gera a build de produção com SSR
COPY . .
RUN npm run build:ssr --configuration production

# --- Runtime stage ---
FROM node:18-alpine AS runner
WORKDIR /app

# Copia apenas o que precisa para rodar
COPY --from=builder /app/dist/project-zattini-angular /app/dist

# Variáveis em tempo de execução (Railway injeta automaticamente!)
ENV PORT=3000
# Railway vai injetar BASE_URL e KEY_USER automaticamente aqui

EXPOSE $PORT

# Inicia a aplicação SSR (Angular Universal)
CMD ["node", "dist/server/server.mjs"]
