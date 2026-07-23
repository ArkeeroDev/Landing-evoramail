# ---- build ----
FROM node:20-alpine AS build
WORKDIR /src
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- runtime ----
FROM nginx:alpine AS final
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/dist/evoramail-app/browser /usr/share/nginx/html
EXPOSE 80