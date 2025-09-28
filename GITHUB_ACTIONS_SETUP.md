# GitHub Actions Setup for Auto Docker Build

This guide will help you set up automatic Docker builds and pushes to Docker Hub whenever you push code to your Git repository.

## 🚀 What This Does

- **Automatically builds** your Docker image when you push to `main` branch
- **Pushes to Docker Hub** with the latest tag
- **Supports multiple architectures** (amd64 and arm64)
- **Uses build caching** for faster builds
- **Works on pull requests** too (for testing)

## 📋 Setup Steps

### 1. Create Docker Hub Access Token

1. Go to [Docker Hub](https://hub.docker.com/)
2. Click on your profile → **Account Settings**
3. Go to **Security** → **New Access Token**
4. Name it: `github-actions-moneytime`
5. Set permissions: **Read, Write, Delete**
6. Copy the token (you'll need it for step 3)

### 2. Add Secrets to GitHub Repository

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:

   **Secret Name:** `DOCKERHUB_USERNAME`
   **Secret Value:** `altusrossouw`

   **Secret Name:** `DOCKERHUB_TOKEN`
   **Secret Value:** `[your-docker-hub-token-from-step-1]`

### 3. Test the Workflow

1. Make a small change to your code
2. Commit and push to main:
   ```bash
   git add .
   git commit -m "Test GitHub Actions"
   git push origin main
   ```
3. Go to **Actions** tab in your GitHub repository
4. Watch the workflow run!

## 🔄 How It Works

### Triggers
- **Push to main**: Builds and pushes `latest` tag
- **Pull requests**: Builds but doesn't push (for testing)

### Tags Created
- `latest` - for main branch pushes
- `main-abc1234` - for specific commits
- `pr-123` - for pull requests

### Multi-Platform Support
- **linux/amd64** - for most servers
- **linux/arm64** - for ARM-based servers (like Apple Silicon, Raspberry Pi)

## 🎯 Usage

### After Setup
1. **Make changes** to your code
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin main
   ```
3. **Wait 2-3 minutes** for the build to complete
4. **Deploy in Portainer** using the updated image

### Manual Trigger
You can also manually trigger the workflow:
1. Go to **Actions** tab
2. Select **Build and Push Docker Image**
3. Click **Run workflow**

## 🔧 Customization

### Change Image Name
Edit `.github/workflows/docker-build.yml`:
```yaml
env:
  IMAGE_NAME: your-username/your-app-name
```

### Add More Tags
Add to the tags section:
```yaml
tags: |
  type=ref,event=branch
  type=ref,event=pr
  type=sha,prefix={{branch}}-
  type=raw,value=latest,enable={{is_default_branch}}
  type=raw,value=v1.0.0  # Custom version tag
```

### Build Only on Specific Branches
Change the trigger:
```yaml
on:
  push:
    branches: [ main, develop ]
```

## 🐛 Troubleshooting

### Build Fails
1. Check the **Actions** tab for error details
2. Common issues:
   - Missing Docker Hub secrets
   - Dockerfile syntax errors
   - Missing dependencies

### Image Not Updated
1. Verify the workflow completed successfully
2. Check Docker Hub for the new image
3. Make sure you're using the correct image name

### Slow Builds
- The workflow uses build caching to speed up subsequent builds
- First build will be slower, subsequent builds will be faster

## 📊 Monitoring

- **GitHub Actions**: View build logs and status
- **Docker Hub**: Check image tags and sizes
- **Portainer**: Monitor deployment status

## 🎉 Benefits

- ✅ **Automated builds** - no manual Docker commands
- ✅ **Consistent deployments** - same process every time
- ✅ **Multi-platform** - works on different architectures
- ✅ **Build caching** - faster builds over time
- ✅ **Version tracking** - clear image tags
- ✅ **Easy rollbacks** - previous versions available

Your MoneyTime app will now automatically build and deploy whenever you push code! 🚀
