# SpectreSpoofer Website - Deployment Guide

## 📦 Website Package Information
- **Project**: SpectreSpoofer Website
- **Version**: 13
- **Framework**: Next.js 15.3.2 with TypeScript
- **Package Manager**: Bun
- **Styling**: Tailwind CSS + shadcn/ui
- **Last Updated**: December 2024

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun installed
- Git (optional)

### Installation
```bash
# Extract the zip file and navigate to the project
cd spectrespoofer-website

# Install dependencies
bun install
# or if using npm:
# npm install

# Start development server
bun run dev
# or: npm run dev

# View at http://localhost:3000
```

## 🌟 Features Included
- ✅ Complete responsive website with 7 pages
- ✅ Dynamic navigation (transparent on home, visible on other pages)
- ✅ High-tech animations and effects
- ✅ Perfectly centered trial page modules
- ✅ Professional pricing, FAQ, contact, and affiliate pages
- ✅ All assets and videos included

## 📁 Project Structure
```
spectrespoofer-website/
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable React components
│   └── lib/          # Utility functions
├── public/           # Static assets (images, videos)
├── package.json      # Dependencies and scripts
└── tailwind.config.ts # Tailwind configuration
```

## 🔧 Build for Production
```bash
# Build the website
bun run build
# or: npm run build

# Start production server
bun start
# or: npm start
```

## 🚀 Deployment Options
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Upload the build folder or connect via Git
- **Static Export**: Run `next build` and deploy the `out` folder

## 📝 Notes
- All videos and images are included
- No external dependencies required
- Optimized for performance and SEO
- Fully responsive design
