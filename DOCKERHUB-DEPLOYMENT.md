# MoneyTime - Docker Hub Deployment Guide

This guide shows you how to build locally, push to Docker Hub, and deploy on Portainer.

## Prerequisites

- Docker installed locally
- Docker Hub account
- Portainer running and accessible

## Step 1: Setup Docker Hub

### 1.1 Create Docker Hub Account
1. Go to [Docker Hub](https://hub.docker.com)
2. Create a free account
3. Note your username (you'll need this)

### 1.2 Login to Docker Hub
```bash
docker login
# Enter your Docker Hub username and password
```

## Step 2: Build and Push to Docker Hub

### 2.1 Update Package.json
Replace `yourusername` with your actual Docker Hub username in `package.json`:

```json
{
  "scripts": {
    "dockerhub:build": "docker build -t yourusername/moneytime-app:latest .",
    "dockerhub:push": "docker push yourusername/moneytime-app:latest",
    "dockerhub:deploy": "npm run dockerhub:build && npm run dockerhub:push"
  }
}
```

### 2.2 Build and Push
```bash
# Build the image
npm run dockerhub:build

# Push to Docker Hub
npm run dockerhub:push

# Or do both in one command
npm run dockerhub:deploy
```

### 2.3 Verify Upload
1. Go to [Docker Hub](https://hub.docker.com)
2. Check your repositories
3. You should see `moneytime-app:latest`

## Step 3: Deploy on Portainer

### 3.1 Create Stack in Portainer

1. **Go to Portainer:**
   - Navigate to "Stacks"
   - Click "Add stack"
   - Name it "moneytime-dockerhub"

2. **Use Web Editor:**
   - Select "Web editor"
   - Copy the contents of `dockerhub-deployment.yml`
   - **IMPORTANT:** Replace `yourusername` with your actual Docker Hub username

3. **Configure Environment Variables:**
   ```
   NODE_ENV=production
   PORT=3000
   HOSTNAME=0.0.0.0
   NEXT_TELEMETRY_DISABLED=1
   ```

4. **Deploy:**
   - Click "Deploy the stack"
   - Monitor the deployment

### 3.2 Alternative: Use Repository Method

1. **In Portainer:**
   - Go to "Stacks" → "Add stack"
   - Select "Repository"
   - **Repository URL:** `https://github.com/yourusername/MoneyTime.git`
   - **Reference:** `refs/heads/main`
   - **Compose path:** `dockerhub-deployment.yml`

2. **Update the image name** in `dockerhub-deployment.yml`:
   ```yaml
   services:
     moneytime-app:
       image: yourusername/moneytime-app:latest
   ```

## Step 4: Update Process

### 4.1 When You Make Changes

1. **Build and push new version:**
   ```bash
   # Make your changes
   git add .
   git commit -m "Update application"
   git push origin main
   
   # Build and push to Docker Hub
   npm run dockerhub:deploy
   ```

2. **Update in Portainer:**
   - Go to your stack
   - Click "Editor"
   - Click "Update the stack"
   - Portainer will pull the latest image

### 4.2 Version Tags (Optional)

For better version control, use tags:

```bash
# Build with version tag
docker build -t yourusername/moneytime-app:v1.0.0 .
docker push yourusername/moneytime-app:v1.0.0

# Also push as latest
docker tag yourusername/moneytime-app:v1.0.0 yourusername/moneytime-app:latest
docker push yourusername/moneytime-app:latest
```

Then update your Portainer stack:
```yaml
services:
  moneytime-app:
    image: yourusername/moneytime-app:v1.0.0
```

## Step 5: Configuration

### 5.1 Custom Domain

Update `dockerhub-deployment.yml`:
```yaml
labels:
  - "traefik.http.routers.moneytime.rule=Host(`yourdomain.com`)"
```

### 5.2 Environment Variables

Add to your Portainer stack:
```yaml
environment:
  - NODE_ENV=production
  - PORT=3000
  - HOSTNAME=0.0.0.0
  - NEXT_TELEMETRY_DISABLED=1
  - NEXT_PUBLIC_APP_URL=https://yourdomain.com
  - NEXT_PUBLIC_APP_NAME=MoneyTime
```

### 5.3 Resource Limits

Add resource limits in Portainer:
```yaml
deploy:
  resources:
    limits:
      memory: 512M
      cpus: '0.5'
    reservations:
      memory: 256M
      cpus: '0.25'
```

## Step 6: Monitoring

### 6.1 View Logs
```bash
# In Portainer:
# Go to Stacks → moneytime-dockerhub → Logs

# Or via command line:
docker logs moneytime-app
```

### 6.2 Health Checks
- **Application:** `http://yourdomain.com/health`
- **Container:** Built into Docker configuration

### 6.3 Update Status
```bash
# Check if new image is available
docker pull yourusername/moneytime-app:latest

# Check current image
docker images yourusername/moneytime-app
```

## Troubleshooting

### Common Issues

1. **"Image not found" error:**
   - Check Docker Hub username is correct
   - Verify image was pushed successfully
   - Check if image is public or private

2. **"Permission denied" error:**
   - Make sure you're logged into Docker Hub
   - Check if repository is public or you have access

3. **"Out of memory" error:**
   - Increase memory limits in Portainer
   - Use smaller base image

4. **"Port already in use" error:**
   - Change port mapping in stack
   - Stop conflicting containers

### Debug Commands

```bash
# Check Docker Hub login
docker login

# List local images
docker images

# Test image locally
docker run -p 3000:3000 yourusername/moneytime-app:latest

# Check image details
docker inspect yourusername/moneytime-app:latest
```

## Advantages of Docker Hub Deployment

✅ **Reliable builds** - Build locally where you have control
✅ **Faster deployments** - No build time in Portainer
✅ **Version control** - Tag different versions
✅ **Easy rollbacks** - Switch between image versions
✅ **Shared images** - Use same image across environments
✅ **CI/CD ready** - Integrate with GitHub Actions

## File Structure

```
MoneyTime/
├── Dockerfile                    # Production Dockerfile
├── dockerhub-deployment.yml     # Portainer stack for Docker Hub
├── package.json                 # Updated with Docker Hub scripts
├── DOCKERHUB-DEPLOYMENT.md      # This guide
└── src/                         # Application source code
```

## Quick Commands Reference

```bash
# Build and push to Docker Hub
npm run dockerhub:deploy

# Build only
npm run dockerhub:build

# Push only
npm run dockerhub:push

# Test locally
docker run -p 3000:3000 yourusername/moneytime-app:latest

# Check Docker Hub login
docker login

# View local images
docker images
```

Your MoneyTime application is now ready for Docker Hub deployment! 🚀
