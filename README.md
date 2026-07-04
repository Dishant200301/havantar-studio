# HavAntar Studio — Architecture & Interior Design Portfolio

A premium, interactive digital experience for **HavAntar Studio**, a leading architecture and interior design firm based in Dubai, UAE. Built with a focus on immersive aesthetics, smooth performance, and high-quality motion design.

---

## 🏛️ Project Overview

HavAntar Studio designs residential and commercial spaces that elevate how people live, work, and interact with their environments. This web application serves as a digital portfolio showcasing the studio's projects, design philosophy, process, and services.

### Key Features
- **Immersive Motion Design**: Powered by **GSAP (ScrollTrigger)** and **Framer Motion** for state-of-the-art hover effects, text splitting, page transition cues, and scroll-bound animations.
- **Cinematic Scrolling**: Integrated with **Lenis Smooth Scroll** to deliver a luxurious, inertia-based scroll experience across desktop and mobile devices.
- **Interactive Showcases**:
  - **Dynamic Project Details**: Fully routed portfolio items (e.g., *Harmony Living Space*, *Executive Office Interior*, *Modern Co-working Space*, *Luxury Villa*) with media grids and metadata.
  - **Disciplines Modal Explorer**: An interactive grid showcasing the studio's six core disciplines with detailed service overlays, features lists, and investments.
  - **Interactive Expertise Radar/Chart**: Custom visual representation of design priorities and project execution areas.
- **Fully Responsive Architecture**: Masterfully designed for screens ranging from ultra-wide desktops to mobile devices.
- **Premium Design System**: Tailored typography (Inter font), elegant color scheme (neutral sandy/earthy accents, sleek dark modes, and soft cream surfaces), and micro-animations.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (built for speed and modern Hot Module Replacement).
- **Language**: [TypeScript](https://www.typescriptlang.org/) for robust static typing.
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) with native CSS variable styling.
- **Motion & Scroll**:
  - [GSAP](https://gsap.com/) & `gsap/ScrollTrigger` for advanced timeline scroll-bound effects.
  - [Framer Motion](https://www.framer.com/motion/) for fluid component entrances and layout animations.
  - [Lenis](https://lenis.darkroom.engineering/) for high-performance smooth scrolling.
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/) primitives for accessible components (Accordions, Dialogs, Dropdowns, Tooltips, etc.).
  - [Lucide React](https://lucide.dev/) for clean, sharp vector iconography.
  - [Sonner](https://sonner.kemal.co/) for custom toast notifications.

---

## 📦 Directory Structure

```text
├── public/                 # Static assets (Favicons, webp/jpg images, sitemap, robots)
├── src/
│   ├── components/         # Reusable structural & UI elements
│   │   ├── common/         # SEO metadata, FadeIn wrappers, SplitHeadings
│   │   ├── layout/         # Navigation, Footers, and Scroll managers
│   │   └── ui/             # Accessible Radix wrappers & custom design buttons
│   ├── features/           # Feature-based pages and page-specific sub-components
│   │   ├── home/           # Hero, Services, About, CTA, Testimonials, Expertise
│   │   ├── projects/       # Grid galleries, filter engines, project details
│   │   ├── contact/        # Fully validated inquiry forms
│   │   └── legal/          # Privacy, Terms, and Cookie agreements
│   ├── hooks/              # Custom React hooks (scroll tracking, media queries)
│   ├── lib/                # Utility classes (cn tailwind-merge helper)
│   ├── App.tsx             # Root router configuration & initialization of Lenis
│   ├── main.tsx            # DOM mounting & hydration entrypoint
│   └── styles.css          # Core design tokens, global themes, and CSS imports
├── package.json            # NPM script configuration & project dependencies
├── bunfig.toml             # Bun installer configurations
└── vite.config.ts          # Vite asset pipelines, ports, and tsconfig paths
```

---

## 🚀 Getting Started

To run HavAntar Studio locally, ensure you have [Node.js](https://nodejs.org/) installed. We recommend using **Bun** or **NPM** as your package runner.

### 1. Installation

Clone this repository and install the dependencies:

```bash
# Using bun
bun install

# Or using npm
npm install
```

### 2. Development Server

Spin up the local hot-reloading development server:

```bash
# Using bun
bun run dev

# Or using npm
npm run dev
```

Your browser will automatically open or point you to `http://localhost:8080` (or the fallback local address).

### 3. Production Build

Compile a highly-optimized, production-ready distribution package:

```bash
# Using bun
bun run build

# Or using npm
npm run build
```

The output will be placed in the `/dist` directory, optimized for immediate hosting on platforms like Vercel, Netlify, or Cloudflare Pages.

---

## 🎨 Design Philosophy

HavAntar's design system revolves around **restraint, precision, and proportion**. The UI mimics these qualities through:
- **Earthy Palettes**: Soft linen backgrounds (`#F6F2EC`), charcoal/bronze text (`#4F4742`), and warm sandy accents.
- **Typography Hierarchy**: Wide line heights, clear uppercase headers, and fluid typography sizing utilizing CSS `clamp()`.
- **Negative Space**: Generous layout margins allowing images and text to breathe, drawing focus to project photography.
