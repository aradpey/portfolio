import type React from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Basic SEO metadata
  title: "Ahoura Radpey - Full Stack Developer & Python Engineer",
  description:
    "Professional portfolio of Ahoura Radpey, a skilled Full Stack Developer specializing in Python, TypeScript, React, and Next.js. View projects, skills, and experience in web development and software engineering.",
  keywords: [
    "Ahoura Radpey",
    "Full Stack Developer",
    "Python Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "Python Programming",
    "JavaScript Development",
    "Frontend Development",
    "Backend Development",
  ],
  authors: [{ name: "Ahoura Radpey" }],
  creator: "Ahoura Radpey",
  publisher: "Ahoura Radpey",
  generator: "Next.js",
  applicationName: "Ahoura Radpey Portfolio",

  // Open Graph metadata for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahouraradpey.com",
    siteName: "Ahoura Radpey Portfolio",
    title: "Ahoura Radpey - Full Stack Developer & Python Engineer",
    description:
      "Professional portfolio of Ahoura Radpey, a skilled Full Stack Developer specializing in Python, TypeScript, React, and Next.js. View projects, skills, and experience in web development and software engineering.",
    images: [
      {
        url: "https://ahouraradpey.com/og-image.png", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Ahoura Radpey - Full Stack Developer Portfolio",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@ahouraradpey", // Replace with your actual Twitter handle
    creator: "@ahouraradpey", // Replace with your actual Twitter handle
    title: "Ahoura Radpey - Full Stack Developer & Python Engineer",
    description:
      "Professional portfolio of Ahoura Radpey, a skilled Full Stack Developer specializing in Python, TypeScript, React, and Next.js.",
    images: ["https://ahouraradpey.com/og-image.png"], // Same as Open Graph image
  },

  // Additional metadata for better SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification tokens for search engines
  verification: {
    google: "your-google-verification-code", // Replace with your actual Google verification code
    yandex: "your-yandex-verification-code", // Optional
    yahoo: "your-yahoo-verification-code", // Optional
  },

  // Canonical URL
  alternates: {
    canonical: "https://ahouraradpey.com",
  },

  // Additional metadata
  category: "technology",
  classification: "portfolio",

  // Viewport and mobile optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // Theme color for mobile browsers
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08090D" },
  ],

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#4B9EF4" },
    ],
  },

  // Manifest for PWA capabilities
  manifest: "/site.webmanifest",

  // Additional structured data hints
  other: {
    "msapplication-TileColor": "#4B9EF4",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ahoura Radpey",
              jobTitle: "Full Stack Developer",
              description:
                "Professional Full Stack Developer specializing in Python, TypeScript, React, and Next.js development.",
              url: "https://ahouraradpey.com",
              sameAs: [
                "https://github.com/aradpey",
                "https://linkedin.com/in/ahoura-radpey/",
                "https://ahouraradpey.com",
              ],
              knowsAbout: [
                "Python Programming",
                "TypeScript Development",
                "React Development",
                "Next.js Framework",
                "Full Stack Development",
                "Web Development",
                "Software Engineering",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance Developer",
              },
              image: "https://ahouraradpey.com/profile-image.jpg", // Replace with your actual profile image URL
              email: "ahouraradpey@gmail.com",
              telephone: "+16047165299",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
            }),
          }}
        />

        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Ahoura Radpey Portfolio"
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
