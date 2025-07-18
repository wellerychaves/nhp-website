FROM oven/bun:1.2.18-alpine AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . . 
RUN bun run build

FROM nginx:1.29-alpine

COPY --from=builder /app/dist/ usr/share/nginx/html

EXPOSE 80