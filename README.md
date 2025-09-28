# MoneyTime Landing Page

A modern, responsive landing page for the MoneyTime spending tracker app.

## 🚀 Live Demo

Visit the live site: [moneytime.app](https://moneytime.app)

## 🛠️ Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Docker** - Containerization
- **Jest** - Testing

## 📱 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ App screenshot showcase
- ✅ Terms of Use & Privacy Policy
- ✅ Docker deployment ready
- ✅ GitHub Actions CI/CD

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

### Docker Deployment

```bash
# Build and push to Docker Hub
npm run dockerhub:deploy

# Or build locally
docker build -t moneytime-app .
docker run -p 3000:3000 moneytime-app
```

## 📦 Deployment

### Portainer (Recommended)

1. Copy `dockerhub-deployment.yml` to Portainer
2. Update image name with your Docker Hub username
3. Deploy the stack

### Manual Docker

```bash
# Build image
docker build -t altusrossouw/moneytime-app:latest .

# Push to Docker Hub
docker push altusrossouw/moneytime-app:latest

# Run container
docker run -p 3330:3000 altusrossouw/moneytime-app:latest
```

## 🔧 Configuration

### Environment Variables

- `NODE_ENV=production`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

### Docker Hub Setup

1. Create Docker Hub account
2. Update `package.json` scripts with your username
3. Update `dockerhub-deployment.yml` with your image name

## 📁 Project Structure

```
src/
├── app/                    # Next.js pages
│   ├── page.tsx           # Home page
│   ├── terms/page.tsx     # Terms of Use
│   └── privacy/page.tsx   # Privacy Policy
├── components/            # React components
└── __tests__/            # Test files
```

## 🎨 Customization

- **Colors**: Update Tailwind classes in components
- **Content**: Edit text in `src/app/page.tsx`
- **Images**: Replace files in `public/images/`
- **Styling**: Modify Tailwind classes

## 📄 License

© 2025 MoneyTime. All rights reserved.

## 👨‍💻 Author

[altusrossouw](https://github.com/altusrossouw)

---

**Built with ❤️ using Next.js and Tailwind CSS**