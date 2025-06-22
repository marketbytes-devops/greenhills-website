FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# Set build-time environment variables
ENV VITE_API_BASE_URL=http://localhost:6240
ENV VITE_APP_NAME="Greenhills CMS"
ENV VITE_API_URL=http://localhost:6240/api
ENV VITE_BACKEND_URL=http://localhost:6240
ENV VITE_CMS_URL=http://localhost:6242
ENV VITE_AUTH_URL=http://localhost:6240/auth
ENV VITE_LOGIN_REDIRECT_URL=http://localhost:6242/dashboard

RUN npm run build

FROM nginx:alpine

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
