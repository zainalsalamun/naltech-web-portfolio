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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://naltech-portfolio.embulpillow.chatgpt.site'),
  title: 'Naltech — Web Design & Development Studio',
  description: 'Website profesional, cepat, dan siap membantu bisnis Anda mendatangkan lebih banyak pelanggan.',
  alternates: { canonical: '/' },
  creator: 'Naltech',
  publisher: 'Naltech',
  icons: {
    icon: '/naltech-logo.png',
    shortcut: '/naltech-logo.png',
    apple: '/naltech-logo.png',
  },
  openGraph: {
    title: 'Naltech — Web Design & Development Studio',
    description: 'Website keren. Bisnis makin jalan.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Naltech Website Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naltech — Web Design & Development Studio',
    description: 'Website keren. Bisnis makin jalan.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
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
