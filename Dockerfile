# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR ./app/src

RUN npm install express 
# Copy package.json and package-lock.json
COPY package*.json ./

# Install on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
