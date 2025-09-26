# MoneyTime - Next.js Financial Management App

A modern rebuild of the MoneyTime website (moneytime.tinybigapps.com) using Next.js 14+ with TypeScript and Tailwind CSS.

## About MoneyTime

MoneyTime is a comprehensive financial management application that helps users:

- **Track Daily Spending**: See what's safe-to-spend today with daily guidance
- **Budget Management**: Set monthly budgets and stick to them without guesswork
- **Savings Goals**: Track progress and reduce wasteful spending to reach goals faster
- **Multi-Account Support**: Manage cash, savings, credit cards, and bank accounts with multi-currency support
- **Expense Categorization**: Organize expenses with simple categories and subcategories
- **Detailed Reports**: Monthly reports and long-term trends to understand spending patterns

## Features

- ✅ Responsive design for mobile and desktop
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Next.js App Router with optimized Image components
- ✅ Component-based architecture
- ✅ SEO optimized with proper metadata
- ✅ Fast performance with Turbopack
- ✅ Original MoneyTime branding and assets
- ✅ App screenshots and promotional images

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/MoneyTime.git
cd MoneyTime
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with favicon and metadata
│   ├── page.tsx        # Homepage with MoneyTime branding
│   └── globals.css     # Global styles
├── components/         # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── FeatureCard.tsx # Feature display card
public/
└── images/             # MoneyTime brand assets (scraped from original site)
    ├── logo.png        # App icon/logo (87KB)
    ├── moneytime-app-preview.png  # App screenshots (2.3MB)
    ├── app-store-logo.png         # App Store download badge (20KB)
    ├── apple-touch-icon.png       # iOS home screen icon (12KB)
    ├── favicon-32x32.png          # 32x32 favicon (2KB)
    ├── favicon-16x16.png          # 16x16 favicon (1KB)
    ├── favicon.ico               # ICO format favicon (15KB)
    └── safari-pinned-tab.svg     # Safari pinned tab icon (4KB)
```

## Technology Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Icons**: Emoji-based (can be replaced with icon library)
- **Fonts**: System fonts with fallbacks

## Development Guidelines

- Use TypeScript for all components and utilities
- Follow Next.js App Router conventions
- Implement responsive design with Tailwind CSS
- Focus on financial data visualization and user experience
- Ensure accessibility and performance optimization

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Original MoneyTime app by TinyBigApps
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
