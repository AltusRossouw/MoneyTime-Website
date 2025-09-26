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

# Expose port 5332
EXPOSE 5332

# Start Next.js server on port 5332
CMD ["npx", "next", "start", "-p", "5332"]
