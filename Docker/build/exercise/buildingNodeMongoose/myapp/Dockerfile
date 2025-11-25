# # Use Node.js LTS
# FROM node:20

# # Set working directory
# WORKDIR /usr/src/app

# # Copy package files and install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy the rest of the app
# COPY . .

# # Expose port
# EXPOSE 3000

# # Persistent uploads folder
# VOLUME /usr/src/app/uploads

# # Start in development mode with nodemon
# CMD ["npx", "nodemon", "server.js"]

# Use Node.js LTS
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies (including nodemon if in package.json)
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port
EXPOSE 3000

# Default command for dev mode
CMD ["npx", "nodemon", "server.js"]
