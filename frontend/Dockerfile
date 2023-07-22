# Use the official Node.js image as the base image
FROM node:14 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React app
RUN npm run build

# Use NGINX as the production web server
FROM nginx:alpine

# Copy the built React app from the builder stage to the NGINX container
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the port on which NGINX will listen
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]