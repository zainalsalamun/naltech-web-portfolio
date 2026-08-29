import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id'),
  title: {
    default: 'Jasa Pembuatan Website Profesional | Naltech Studio',
    template: '%s | Naltech Studio',
  },
  description: 'Jasa pembuatan website profesional untuk UMKM dan bisnis Indonesia. Desain orisinal, mobile-friendly, SEO-ready, dan didampingi hingga online.',
  applicationName: 'Naltech Studio',
  keywords: ['jasa pembuatan website', 'web design Indonesia', 'website bisnis', 'landing page', 'company profile', 'UI UX design', 'Naltech Studio'],
  authors: [{ name: 'Naltech Studio', url: '/' }],
  creator: 'Naltech',
  publisher: 'Naltech',
  category: 'technology',
  icons: {
    icon: '/naltech-icon.png',
    shortcut: '/naltech-icon.png',
    apple: '/naltech-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'Naltech Studio',
    title: 'Jasa Pembuatan Website Profesional | Naltech Studio',
    description: 'Website bisnis yang profesional, mobile-friendly, SEO-ready, dan dirancang untuk membangun kepercayaan pelanggan.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Naltech Website Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website Profesional | Naltech Studio',
    description: 'Website bisnis yang profesional, mobile-friendly, SEO-ready, dan dirancang untuk membangun kepercayaan pelanggan.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
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
