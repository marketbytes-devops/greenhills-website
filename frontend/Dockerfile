FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# Set build-time environment variables
ENV VITE_API_BASE_URL=http://localhost:6240
ENV VITE_APP_NAME="Greenhills Website"
ENV VITE_API_URL=http://localhost:6240/api
ENV VITE_BACKEND_URL=http://localhost:6240
ENV VITE_FRONTEND_URL=http://localhost:6241

RUN npm run build

FROM nginx:alpine

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
