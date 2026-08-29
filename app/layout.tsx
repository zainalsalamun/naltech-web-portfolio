import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id'),
  title: {
    default: 'Jasa Pembuatan Website Profesional & Desain Web Modern | Naltech Studio',
    template: '%s | Naltech Studio',
  },
  description: 'Jasa pembuatan website profesional, landing page konversi tinggi, company profile, dan web app modern untuk UMKM dan brand di Indonesia. Desain orisinal, mobile-friendly, cepat, dan SEO-ready.',
  applicationName: 'Naltech Studio',
  keywords: [
    'jasa pembuatan website',
    'jasa web design',
    'jasa bikin website',
    'jasa website profesional',
    'jasa landing page',
    'jasa company profile',
    'web developer jakarta',
    'bikin website umkm',
    'jasa buat web murah berkualitas',
    'web design indonesia',
    'naltech studio',
    'naltech',
  ],
  authors: [{ name: 'Naltech Studio', url: 'https://studio.naltech.web.id' }],
  creator: 'Naltech Studio',
  publisher: 'Naltech Studio',
  category: 'technology',
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': 'https://studio.naltech.web.id',
    },
  },
  verification: {
    google: 'e8e558f9d6851d55',
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/naltech-icon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/naltech-icon.png',
    apple: '/naltech-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'Naltech Studio',
    title: 'Jasa Pembuatan Website Profesional & Desain Web Modern | Naltech Studio',
    description: 'Website bisnis modern, cepat, mobile-friendly, SEO-ready, dan siap mendatangkan pelanggan untuk bisnis Anda.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Naltech Studio - Jasa Pembuatan Website Profesional Indonesia',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website Profesional & Desain Web Modern | Naltech Studio',
    description: 'Website bisnis modern, cepat, mobile-friendly, SEO-ready, dan siap mendatangkan pelanggan untuk bisnis Anda.',
    images: ['/og.png'],
    creator: '@naltech.ai',
    site: '@naltech.ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

