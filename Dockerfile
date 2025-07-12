# --- Build stage ---
FROM node:18-alpine AS builder
WORKDIR /app

# Copia dependências e instala
COPY package*.json ./
RUN npm ci

# Copia todo o código-fonte
COPY . .

# Adiciona script build:ssr se ainda não existir
# Ex: "build:ssr": "ng build --configuration production && ng run project-zattini-angular:server:production"
# Substitua "project-zattini-angular" pelo nome real no angular.json
RUN npm run build:ssr

# --- Runtime stage ---
FROM node:18-alpine AS runner
WORKDIR /app

# Copia apenas o necessário para rodar o SSR
COPY --from=builder /app/dist/project-zattini-angular /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Railway injeta as variáveis automaticamente
ENV PORT=3000

EXPOSE $PORT

CMD ["node", "dist/server/server.mjs"]
