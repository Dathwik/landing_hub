# landing_hub

A personal landing page that serves as a central hub for all of Dathwik Kollikonda's online presence — a custom-built, self-hosted alternative to Linktree.

## What it does

Visitors land on a single page and are directed to wherever they want to go: the tech portfolio, LinkedIn, GitHub, Instagram, X, or email. The page reflects the three pillars of the brand — software engineering, fitness, and content creation.

Built with a cyberpunk aesthetic: dark background, neon accent colors (pink, cyan, purple), a dot-grid overlay, scanline animation, and instant hover responses on all link cards. The layout is fully responsive — two-column on desktop (identity left, links right) and stacked on mobile.

## Tech stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [react-icons](https://react-icons.github.io/react-icons/) — brand icons (LinkedIn, GitHub, Instagram, X, etc.)
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project structure

```
src/
  app/
    page.tsx      # main landing page
    globals.css   # animations & cyberpunk utilities
    layout.tsx    # root layout
public/
  avatar.jpeg     # profile photo
```

## Deployment

Intended to be deployed at `dathwik.com`, with other projects living on subdomains (e.g. `portfolio.dathwik.com`).
