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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Naltech — Website Studio',
  description: 'Studio desain dan pengembangan website untuk brand yang ingin tampil berbeda.',
  openGraph: {
    title: 'Naltech — Website Studio',
    description: 'Website yang membuat brand dipilih.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Naltech Website Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naltech — Website Studio',
    description: 'Website yang membuat brand dipilih.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
