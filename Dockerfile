# Use a Node.js image as base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copy all local files to the container
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Run your application
CMD ["npm", "start"]
