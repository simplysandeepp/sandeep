# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Serve Stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config for react-router (SPA)
# Note: We'll use a simple inline config for the default nginx conf or rely on default
# Ideally, we should add an nginx.conf for SPA routing, but for basic setup this is a start.
# Let's add a basic sed command to enable fallback to index.html if needed in a more complex setup, 
# but for now standard nginx image serves static files. 
# For SPA routing, we need to ensure 404s go to index.html.
RUN sed -i 's/location \/ {/location \/ { try_files $uri $uri\/ \/index.html;/g' /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
