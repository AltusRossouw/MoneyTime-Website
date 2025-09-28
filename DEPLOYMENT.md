# MoneyTime - Production Deployment Guide

This guide will help you deploy MoneyTime to production using Portainer.

## Prerequisites

- Docker and Docker Compose installed
- Portainer running and accessible
- Domain name configured (optional but recommended)
- SSL certificates (optional but recommended)

## Quick Start

### 1. Build the Docker Image

```bash
# Build the production image
npm run docker:build

# Or build and run locally for testing
npm run docker:run
```

### 2. Deploy with Docker Compose

```bash
# Deploy to production
npm run docker:prod:build

# View logs
npm run docker:prod:logs

# Stop the deployment
npm run docker:prod:down
```

### 3. Deploy with Portainer

1. **Upload to Portainer:**
   - Go to your Portainer instance
   - Navigate to "Stacks"
   - Click "Add stack"
   - Name it "moneytime"
   - Copy the contents of `portainer-stack.yml` into the web editor

2. **Configure Environment Variables:**
   - Set `NEXT_PUBLIC_APP_URL` to your domain
   - Configure any other environment variables as needed

3. **Deploy:**
   - Click "Deploy the stack"
   - Monitor the deployment in the logs

## Configuration

### Environment Variables

Copy `env.example` to `.env` and configure:

```bash
cp env.example .env
```

Key variables to configure:
- `NEXT_PUBLIC_APP_URL`: Your domain URL
- `NEXT_PUBLIC_APP_NAME`: App name (default: MoneyTime)

### SSL Configuration

For HTTPS support:

1. **Using Traefik (Recommended):**
   - The `portainer-stack.yml` includes Traefik labels
   - Configure your domain in the labels
   - Traefik will automatically handle SSL certificates

2. **Using Nginx:**
   - Place your SSL certificates in `./ssl/` directory
   - Update `nginx.conf` with your certificate paths
   - Uncomment SSL configuration lines

### Custom Domain Setup

1. **Update DNS:**
   - Point your domain to your server's IP address

2. **Update Configuration:**
   - Replace `yourdomain.com` in `portainer-stack.yml` with your actual domain
   - Update `NEXT_PUBLIC_APP_URL` environment variable

## Monitoring and Maintenance

### Health Checks

The application includes health check endpoints:
- App health: `http://yourdomain.com/health`
- Container health: Built into Docker configuration

### Logs

```bash
# View application logs
docker logs moneytime-app

# View nginx logs
docker logs moneytime-nginx

# View all logs
npm run docker:prod:logs
```

### Updates

```bash
# Pull latest changes
git pull origin main

# Rebuild and redeploy
npm run docker:prod:build
```

## Performance Optimization

### Built-in Optimizations

- **Multi-stage Docker build** for smaller image size
- **Standalone Next.js output** for faster startup
- **Nginx reverse proxy** with gzip compression
- **Static asset caching** for better performance
- **Rate limiting** for API protection

### Resource Limits

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

## Troubleshooting

### Common Issues

1. **Port conflicts:**
   - Ensure ports 80, 443, and 3000 are available
   - Update port mappings if needed

2. **Permission issues:**
   - Ensure Docker has proper permissions
   - Check file ownership in mounted volumes

3. **Build failures:**
   - Check Docker build logs
   - Ensure all dependencies are installed
   - Verify Dockerfile syntax

### Debug Commands

```bash
# Check container status
docker ps -a

# Inspect container
docker inspect moneytime-app

# Check logs
docker logs moneytime-app --tail 100

# Access container shell
docker exec -it moneytime-app sh
```

## Security Considerations

- **Environment variables:** Never commit sensitive data to git
- **SSL certificates:** Use valid certificates for production
- **Firewall:** Configure appropriate firewall rules
- **Updates:** Keep dependencies and base images updated
- **Monitoring:** Set up proper monitoring and alerting

## Support

For issues or questions:
1. Check the logs first
2. Review this deployment guide
3. Check the application documentation
4. Contact support if needed

## File Structure

```
├── Dockerfile                 # Multi-stage production Dockerfile
├── docker-compose.prod.yml   # Production Docker Compose
├── portainer-stack.yml       # Portainer stack configuration
├── nginx.conf                # Nginx configuration
├── env.example              # Environment variables example
├── .dockerignore            # Docker ignore file
└── DEPLOYMENT.md            # This guide
```
