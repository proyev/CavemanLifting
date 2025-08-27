# Simple Dockerfile for both client and server
FROM node:16-alpine

WORKDIR /app

# Install server dependencies
COPY server/package*.json ./server/
RUN cd server && npm install

# Install client dependencies
COPY client/package*.json ./client/
RUN cd client && npm install

# Copy source code
COPY server/ ./server/
COPY client/ ./client/

# Install concurrently globally
RUN npm install -g concurrently

# Expose ports
EXPOSE 3000 3001

# Start both services - let's see if it works without OpenSSL flag
CMD ["concurrently", "cd /app/server && node server.js", "cd /app/client && npm start"]