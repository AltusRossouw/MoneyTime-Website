# MoneyTime - Git Deployment on Portainer

This guide shows you how to deploy MoneyTime directly from Git using Portainer.

## Prerequisites

- Portainer running and accessible
- Git repository with your MoneyTime code
- Docker build capabilities enabled in Portainer

## Method 1: Git Repository Deployment (Recommended)

### Step 1: Prepare Your Repository

1. **Push your code to Git:**
   ```bash
   git add .
   git commit -m "Production ready for Portainer deployment"
   git push origin main
   ```

2. **Ensure these files are in your repository:**
   - `Dockerfile`
   - `portainer-git-stack.yml`
   - `nginx.conf`
   - `next.config.ts`
   - `package.json`
   - All source code

### Step 2: Deploy in Portainer

1. **Access Portainer:**
   - Go to your Portainer instance
   - Navigate to "Stacks"

2. **Create New Stack:**
   - Click "Add stack"
   - Name it "moneytime-git"

3. **Configure Git Repository:**
   - Select "Repository" tab
   - **Repository URL:** `https://github.com/yourusername/MoneyTime.git`
   - **Reference:** `refs/heads/main` (or your branch)
   - **Compose path:** `portainer-git-stack.yml`

4. **Environment Variables (Optional):**
   ```
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   NEXT_PUBLIC_APP_NAME=MoneyTime
   ```

5. **Deploy:**
   - Click "Deploy the stack"
   - Monitor the build process in logs

## Method 2: Web Editor with Git Clone

### Step 1: Create Stack

1. **In Portainer:**
   - Go to "Stacks" → "Add stack"
   - Name: "moneytime-web"

2. **Select "Web editor"**

3. **Copy the stack configuration:**
   - Use the contents of `portainer-git-stack.yml`
   - Paste into the web editor

4. **Deploy:**
   - Click "Deploy the stack"

### Step 2: Clone Repository

1. **Access the container:**
   ```bash
   docker exec -it moneytime-app sh
   ```

2. **Clone your repository:**
   ```bash
   git clone https://github.com/yourusername/MoneyTime.git /app
   cd /app
   npm install
   npm run build
   ```

## Method 3: Custom Build with Git

### Step 1: Create Custom Dockerfile

Create a `Dockerfile.git` in your repository:

```dockerfile
FROM --platform=linux/amd64 node:20-alpine AS base

# Install git
RUN apk add --no-cache git

# Clone repository
WORKDIR /app
RUN git clone https://github.com/yourusername/MoneyTime.git .

# Install dependencies
RUN npm ci --only=production

# Build application
RUN npm run build

# Production stage
FROM --platform=linux/amd64 node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=base --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=base --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=base --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### Step 2: Update Stack Configuration

Use this in your Portainer stack:

```yaml
version: '3.8'

services:
  moneytime-app:
    build:
      context: https://github.com/yourusername/MoneyTime.git
      dockerfile: Dockerfile.git
    container_name: moneytime-app
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
      - HOSTNAME=0.0.0.0
      - NEXT_TELEMETRY_DISABLED=1
    networks:
      - moneytime-network

networks:
  moneytime-network:
    driver: bridge
```

## Configuration Options

### Environment Variables

Set these in Portainer:

```bash
# Required
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0

# Optional
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_APP_NAME=MoneyTime
NEXT_TELEMETRY_DISABLED=1
```

### Custom Domain

1. **Update the stack configuration:**
   - Replace `yourdomain.com` with your actual domain
   - Update Traefik labels if using reverse proxy

2. **DNS Configuration:**
   - Point your domain to your server's IP
   - Ensure ports 80 and 443 are accessible

### SSL/HTTPS

1. **Using Traefik (Automatic):**
   - The stack includes Traefik labels
   - SSL certificates will be automatically generated

2. **Using Nginx:**
   - Place SSL certificates in the repository
   - Update nginx.conf with certificate paths

## Monitoring and Updates

### View Logs

```bash
# In Portainer:
# Go to Stacks → moneytime-git → Logs

# Or via command line:
docker logs moneytime-app
```

### Update Application

1. **Push changes to Git:**
   ```bash
   git add .
   git commit -m "Update application"
   git push origin main
   ```

2. **Redeploy in Portainer:**
   - Go to your stack
   - Click "Editor"
   - Click "Update the stack"
   - Or use "Pull and redeploy" if available

### Health Checks

- **Application health:** `http://yourdomain.com/health`
- **Container health:** Built into Docker configuration

## Troubleshooting

### Common Issues

1. **Build failures:**
   - Check Git repository access
   - Verify Dockerfile syntax
   - Check build logs in Portainer

2. **Permission issues:**
   - Ensure Git repository is public or accessible
   - Check Docker build permissions

3. **Network issues:**
   - Verify port mappings
   - Check firewall settings
   - Ensure domain DNS is correct

### Debug Commands

```bash
# Check container status
docker ps -a

# Inspect container
docker inspect moneytime-app

# Check logs
docker logs moneytime-app --tail 100

# Access container
docker exec -it moneytime-app sh
```

## Advantages of Git Deployment

✅ **Version Control** - Track all changes
✅ **Easy Updates** - Just push to Git
✅ **Rollback** - Easy to revert changes
✅ **Collaboration** - Multiple developers can contribute
✅ **CI/CD Ready** - Can integrate with GitHub Actions
✅ **Backup** - Code is safely stored in Git

## File Structure for Git Deployment

```
MoneyTime/
├── Dockerfile                    # Production Dockerfile
├── portainer-git-stack.yml      # Git deployment stack
├── nginx.conf                   # Nginx configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── src/                         # Application source code
├── public/                      # Static assets
└── README.md                    # Documentation
```

Your MoneyTime application is now ready for Git-based deployment on Portainer! 🚀
