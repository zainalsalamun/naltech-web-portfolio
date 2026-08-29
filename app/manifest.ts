import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Naltech Studio — Jasa Pembuatan Website Profesional',
    short_name: 'Naltech Studio',
    description: 'Jasa pembuatan website profesional, landing page konversi tinggi, company profile, dan aplikasi web modern untuk bisnis di Indonesia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0c',
    theme_color: '#0a0a0c',
    icons: [
      {
        src: '/naltech-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/naltech-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
