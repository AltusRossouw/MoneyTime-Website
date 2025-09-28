# MoneyTime - Deployment Troubleshooting

## Common Build Errors and Solutions

### Error: "npm run build" failed with exit code 1

This is the most common error. Here are the solutions:

#### Solution 1: Use the Simple Dockerfile

The `Dockerfile.simple` is more reliable for Portainer deployments:

```yaml
# In your Portainer stack, use:
build:
  context: .
  dockerfile: Dockerfile.simple
```

#### Solution 2: Check Build Logs

1. **In Portainer:**
   - Go to your stack
   - Click on the service name
   - Go to "Logs" tab
   - Look for specific error messages

2. **Common error messages:**
   - `Module not found` - Missing dependencies
   - `TypeScript errors` - Type checking issues
   - `ESLint errors` - Code quality issues
   - `Out of memory` - Insufficient resources

#### Solution 3: Fix Dependencies

If you see dependency errors, update your `package.json`:

```json
{
  "scripts": {
    "build": "next build",
    "start": "next start"
  }
}
```

#### Solution 4: Disable Type Checking During Build

Update your `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
```

#### Solution 5: Use Pre-built Image

Instead of building in Portainer, build locally and push to a registry:

```bash
# Build locally
docker build -t moneytime-app:latest .

# Push to registry (Docker Hub, GitHub Container Registry, etc.)
docker tag moneytime-app:latest yourusername/moneytime-app:latest
docker push yourusername/moneytime-app:latest
```

Then use the pre-built image in Portainer:

```yaml
services:
  moneytime-app:
    image: yourusername/moneytime-app:latest
    # ... rest of configuration
```

### Error: "Cannot find module" or "Module not found"

This usually means missing dependencies. Solutions:

1. **Check package.json** - Ensure all dependencies are listed
2. **Clear npm cache** - Add this to Dockerfile:
   ```dockerfile
   RUN npm cache clean --force
   RUN npm ci
   ```

3. **Install missing dependencies** - Add any missing packages

### Error: "Out of memory" or "Killed"

This means insufficient memory during build. Solutions:

1. **Increase memory in Portainer:**
   - Go to stack settings
   - Add resource limits
   - Increase memory allocation

2. **Use build optimization:**
   ```dockerfile
   # Add to Dockerfile
   ENV NODE_OPTIONS="--max-old-space-size=4096"
   ```

### Error: "Permission denied" or "EACCES"

This is a permission issue. Solutions:

1. **Fix file permissions:**
   ```dockerfile
   RUN chown -R node:node /app
   USER node
   ```

2. **Check file ownership** in your repository

### Error: "Port already in use"

This means port 3000 is already occupied. Solutions:

1. **Change the port:**
   ```yaml
   ports:
     - "3001:3000"  # Use port 3001 instead
   ```

2. **Stop conflicting containers:**
   ```bash
   docker ps
   docker stop <container-id>
   ```

## Debugging Steps

### 1. Check Build Logs

```bash
# In Portainer, go to:
# Stacks → Your Stack → Service → Logs
```

### 2. Test Build Locally

```bash
# Test the build locally first
docker build -t moneytime-test .
docker run -p 3000:3000 moneytime-test
```

### 3. Check Repository Contents

Ensure these files are in your Git repository:
- `Dockerfile` or `Dockerfile.simple`
- `package.json`
- `next.config.ts`
- `src/` directory
- `public/` directory

### 4. Verify Environment Variables

Check that these are set correctly:
- `NODE_ENV=production`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

## Alternative Deployment Methods

### Method 1: Pre-built Image

1. **Build locally:**
   ```bash
   docker build -t moneytime-app .
   docker tag moneytime-app yourusername/moneytime-app:latest
   docker push yourusername/moneytime-app:latest
   ```

2. **Use in Portainer:**
   ```yaml
   services:
     moneytime-app:
       image: yourusername/moneytime-app:latest
       # ... rest of config
   ```

### Method 2: GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Docker image
        run: docker build -t moneytime-app .
      - name: Push to registry
        run: |
          docker tag moneytime-app yourusername/moneytime-app:latest
          docker push yourusername/moneytime-app:latest
```

### Method 3: Use Docker Compose

Instead of Portainer, use Docker Compose directly:

```bash
# Clone repository
git clone https://github.com/yourusername/MoneyTime.git
cd MoneyTime

# Deploy with Docker Compose
docker-compose -f docker-compose.prod.yml up -d
```

## Quick Fixes

### Fix 1: Update Stack Configuration

Use this in your Portainer stack:

```yaml
version: '3.8'

services:
  moneytime-app:
    build:
      context: .
      dockerfile: Dockerfile.simple
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

### Fix 2: Disable Build Optimizations

Update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
```

## Still Having Issues?

1. **Check the specific error message** in Portainer logs
2. **Try the simple Dockerfile** first
3. **Test locally** before deploying
4. **Use pre-built images** if builds keep failing
5. **Check Portainer documentation** for your specific version

The most reliable approach is often to build locally and push to a registry, then use the pre-built image in Portainer.
