# Use official Node.js image
FROM --platform=linux/amd64 node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json only
COPY package.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the app
COPY . .

# Build Next.js app
RUN npm run build

# Set environment variables for Next.js production
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start Next.js server on port 3000
CMD ["npx", "next", "start", "-p", "3000"]
