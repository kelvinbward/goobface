FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port (default Astro port)
EXPOSE 4321

# Default command
CMD ["npm", "run", "dev", "--", "--host"]
