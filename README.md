# HyvenTech

[HyvenTech official site](https://abdelrahman-kanakri.github.io/HyvenTech/)

A modern, responsive corporate website showcasing technology services and solutions.

## Features

- 🎨 **Modern UI**: Glass morphism design with a premium feel.
- ✨ **Interactive Particles**: Custom 3D particle background using OGL.
- 🎭 **Smooth Animations**: Powered by Framer Motion for engaging transitions.
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes.
- ⚡ **High Performance**: Fast loading times and optimized assets.
- ♿ **Accessible**: Follows WCAG 2.1 AA standards.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + CSS Modules
- **UI Components:** Radix UI Primitives (Toast, Tooltip) + Sonner
- **Animations:** Framer Motion + GSAP
- **3D Graphics:** OGL (Lightweight WebGL)
- **Routing:** React Router (HashRouter)
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # Reusable UI components (Particles, Button, etc.)
│   └── ...          # Feature-specific components (Hero, Navigation, etc.)
├── pages/           # Page components (Home, Services, Contact, etc.)
│   ├── company/     # Company-related pages
│   ├── industries/  # Industry-specific pages
│   └── services/    # Service-specific pages
├── hooks/           # Custom React hooks
└── lib/             # Utility functions
```

## Development

The development server runs on `http://localhost:8080` by default.

## Build

The project builds to the `dist/` directory with optimized production assets.

## License

© 2024 HyvenTech. All rights reserved.
