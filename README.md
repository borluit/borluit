# Borluit.dev Portfolio Website

A high-performance, static portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion** to showcase Android applications published on Google Play.

## Features

- 🎨 **Modern Dark Bento Grid Design** - Inspired by Apple App Store and Linear.app
- 🚀 **Static Export** - Deployable to GitHub Pages or Firebase Hosting
- 📱 **Mobile-First Responsive** - Works beautifully on all devices
- 🔍 **SEO Optimized** - Schema.org JSON-LD for AI search engines
- ⚡ **Fast Animations** - Smooth 3D tilt effects with Framer Motion
- 📋 **Legal Compliance** - Dynamic privacy policy pages for each app

## Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navigation & footer
│   │   ├── page.tsx            # Home page with Hero & App Grid
│   │   ├── privacy-policy/
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Dynamic privacy policy pages
│   │   ├── terms/
│   │   │   └── page.tsx        # Terms of Service
│   │   ├── support/
│   │   │   └── page.tsx        # Support/Contact page
│   │   ├── sitemap.ts          # Auto-generated sitemap
│   │   └── robots.ts           # Robots.txt
│   ├── components/
│   │   ├── Navigation.tsx      # Fixed header with glassmorphism
│   │   ├── Hero.tsx            # Animated hero section
│   │   ├── AppCard.tsx         # 3D tilt app cards
│   │   ├── AppGrid.tsx         # Bento grid layout
│   │   └── Footer.tsx          # Site footer
│   ├── data/
│   │   └── apps-data.ts        # ⭐ EDIT THIS FILE WITH YOUR APP DATA
│   └── lib/
│       └── schema.ts           # Schema.org JSON-LD generators
├── public/
│   └── icons/                  # Place your app icons here
├── next.config.js              # Static export configuration
├── tailwind.config.ts          # Custom theme & animations
└── package.json
```

## Getting Started

### 1. Install Dependencies

```bash
cd website
npm install
```

### 2. Update Your App Data

Edit `src/data/apps-data.ts` with your actual app information:

```typescript
export const publisherInfo = {
  name: 'Your Publisher Name',
  email: 'your@email.com',
  // ...
};

export const appsData: AppData[] = [
  {
    id: 'your-app-id',
    slug: 'your-app-slug',  // Used in URLs: /privacy-policy/your-app-slug
    name: 'Your App Name',
    // ...
  },
];
```

### 3. Add App Icons

Place your app icons in `public/icons/` with names matching the `iconUrl` paths in `apps-data.ts`.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 5. Build for Production

```bash
npm run build
```

This generates a static site in the `out/` directory.

## Deployment

### GitHub Pages

1. Push the `out/` folder contents to a `gh-pages` branch
2. Enable GitHub Pages in repository settings

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init hosting`
3. Set public directory to `out`
4. Deploy: `firebase deploy`

## Privacy Policy URLs

Each app gets its own privacy policy page at:
```
https://yourdomain.com/privacy-policy/{app-slug}/
```

Paste these URLs directly into Google Play Console.

## Customization

### Colors
Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  background: '#0a0a0a',
  accent: '#3b82f6',  // Change this for different accent color
  // ...
}
```

### Animations
Modify Framer Motion animations in components like `Hero.tsx` and `AppCard.tsx`.

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## License

MIT License - Feel free to use this for your own app portfolio!

---

Built with ❤️ by Borluit.dev
