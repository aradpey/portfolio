# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Animations**: Custom CSS animations and transitions

## Features

- Responsive design
- Smooth animations and transitions
- Interactive project showcase
- Skills grid with hover effects
- Contact form with email integration
- Downloadable resume
- Dark theme with gradient accents
- **Advanced SEO optimization** with rich metadata

## SEO Implementation

This portfolio includes comprehensive SEO optimization:

### ✅ **Implemented Features:**

- **Rich Metadata**: Open Graph, Twitter Cards, and comprehensive meta tags
- **Structured Data**: JSON-LD schema markup for rich snippets
- **Dynamic Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling guidelines
- **PWA Support**: Web app manifest for mobile installation
- **Performance Optimization**: Preconnect and DNS prefetch directives
- **Mobile Optimization**: Viewport and theme color configuration

### 🔧 **What You Need to Do:**

1. **Replace Placeholder Values:**

   ```typescript
   // In app/layout.tsx, update these:
   verification: {
     google: "your-google-verification-code", // Get from Google Search Console
   },
   twitter: {
     site: "@your-twitter-handle", // Your actual Twitter handle
     creator: "@your-twitter-handle",
   }
   ```

2. **Create Required Images:**

   - `/public/og-image.png` (1200x630px) - Social media preview
   - `/public/favicon.ico` - Website favicon
   - `/public/favicon-16x16.png` - Small favicon
   - `/public/favicon-32x32.png` - Standard favicon
   - `/public/apple-touch-icon.png` (180x180px) - iOS home screen icon
   - `/public/android-chrome-192x192.png` - Android icon
   - `/public/android-chrome-512x512.png` - Android icon
   - `/public/mstile-150x150.png` - Windows tile icon
   - `/public/safari-pinned-tab.svg` - Safari pinned tab icon

3. **Set Up Search Console:**

   - Register your domain with Google Search Console
   - Get verification code and update in layout.tsx
   - Submit your sitemap URL: `https://ahouraradpey.com/sitemap.xml`

4. **Update Profile Information:**
   - Replace `https://ahouraradpey.com/profile-image.jpg` with your actual profile image
   - Update contact information in structured data if needed

### 📊 **SEO Benefits:**

- **Rich Snippets**: Enhanced search results with structured data
- **Social Sharing**: Beautiful previews on Facebook, Twitter, LinkedIn
- **Mobile Optimization**: PWA capabilities and mobile-friendly design
- **Performance**: Optimized loading with preconnect directives
- **Accessibility**: Proper meta tags and semantic structure

## Project Structure

```
portfolio/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # SEO metadata and structured data
│   ├── sitemap.ts      # Dynamic sitemap generation
│   └── page.tsx        # Main portfolio page
├── components/          # Reusable UI components
├── public/             # Static assets and SEO files
│   ├── robots.txt      # Search engine guidelines
│   ├── site.webmanifest # PWA manifest
│   ├── browserconfig.xml # Windows tile config
│   └── sitemap.xml     # Auto-generated sitemap
├── styles/             # Global styles
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## Environment Variables

No environment variables are required for basic functionality. The contact form uses EmailJS for sending emails.

## License

Personal project - not for distribution.
