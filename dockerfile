FROM node:14-slim 

# Set the working directory to / app etc(/usr/src/client)
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install 

# Copy the current directory contents to the container at / app etc(/usr/src/client)
COPY . .

# Build the React app
RUN npm run build

# Use an official Nginx runtime as a parent image
#FROM nginx:alpine

# Copy the build output from the build stage to the Nginx web server directory
# COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 3000 or by default port 80 to the outside world
EXPOSE 3000

# Start nginx when the container is run
# CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "start"]