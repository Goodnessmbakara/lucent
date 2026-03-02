# Lucent Landing Page

> See clearly before you sign.

Professional landing page for Lucent - Transaction Preview & Security for Stacks blockchain.

## Features

- **Vite + TypeScript** - Lightning-fast development and type safety
- **Professional Design** - High-end UI with Lucent brand identity (Concept 3: "The Signal")
- **Responsive** - Mobile-first design that works on all devices
- **Design System** - Complete brand color palette, typography, and spacing system
- **Performance Optimized** - Fast loading and smooth animations

## Tech Stack

- **Vite** - Build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **Vanilla CSS** - Custom design system with CSS variables
- **Component-based** - Modular TypeScript components

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
lucent-landing/
├── src/
│   ├── components/        # TypeScript components
│   │   ├── Logo.ts       # Logo component (Concept 3: The Signal)
│   │   ├── Navigation.ts # Fixed navigation with CTA
│   │   ├── Hero.ts       # Hero section with tagline
│   │   ├── Features.ts   # Feature cards grid
│   │   ├── HowItWorks.ts # Step-by-step guide
│   │   ├── CTA.ts        # Call-to-action section
│   │   └── Footer.ts     # Footer with links
│   ├── styles/
│   │   ├── design-system.css  # Brand colors, typography, spacing
│   │   └── main.css           # Global styles and utilities
│   └── main.ts           # App entry point
├── index.html            # HTML template
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Brand Guidelines

### Colors

- **Navy**: `#0A0E27` - Primary background
- **Gold**: `#FFB84D` - Primary accent and CTA
- **Blue**: `#4A9EFF` - Secondary accent

### Typography

- **Sans**: Inter - UI and body text
- **Mono**: JetBrains Mono - Code and technical content

### Spacing

8px base unit system (8, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160)

## Design System

The landing page uses a complete design system with:

- CSS Custom Properties for theming
- Consistent spacing scale (8px base)
- Typography scale with Inter and JetBrains Mono
- WCAG 2.2 AA compliant color contrasts
- Responsive breakpoints (640px, 768px, 1024px)

## Logo (Concept 3: "The Signal")

The logo features:
- Ultra-minimal typographic wordmark
- Extended 'L' with gradient (Gold to White/Navy)
- Gold signal dot above the 'U' with glow effect
- Subtle connecting beam for depth

Available in multiple sizes: `sm`, `md`, `lg`, `xl`

## Development

The project uses TypeScript for type safety and modular components. Each section is a standalone component that can be imported and composed.

```typescript
import { createHero } from './components/Hero';

const hero = createHero();
document.body.appendChild(hero);
```

## License

MIT

## Contact

Built with ❤️ for the Stacks community.
