import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
    icon: '/naltech-logo.png',
    shortcut: '/naltech-logo.png',
    apple: '/naltech-logo.png',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
