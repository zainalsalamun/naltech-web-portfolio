import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

const demos = {
  'senja-coffee': { brand: 'SENJA', tag: 'Coffee · Eatery · Community', title: 'Ritual kecil,\nrasa yang tinggal.', body: 'Kopi pilihan, makanan yang dibuat dengan jujur, dan ruang untuk pulang sejenak.', action: 'Lihat menu', note: 'Setiap hari · 07.00—22.00', theme: 'coffee' },
  'lumiere-skincare': { brand: 'LUMIÈRE', tag: 'Skin health · Mindful care', title: 'Kulit sehat,\ntanpa berlebihan.', body: 'Perawatan esensial dengan bahan aktif teruji, dibuat lembut untuk ritual harianmu.', action: 'Temukan ritualmu', note: 'Dermatologist tested · Vegan', theme: 'beauty' },
} as const;

type DemoSlug = keyof typeof demos;

export function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const demo = demos[slug as DemoSlug];
  if (!demo) return {};
  const title = `${demo.brand} — Demo Website by Naltech`;
  return {
    title,
    description: demo.body,
    alternates: { canonical: `/demo/${slug}` },
    openGraph: {
      title,
      description: demo.body,
      url: `/demo/${slug}`,
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: `${demo.brand} Demo Website` }],
    },
    twitter: {
      title,
      description: demo.body,
      images: [`${siteUrl}/og.png`],
    },
  };
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = demos[slug as DemoSlug];
  if (!demo) notFound();

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${demo.brand} — Demo Website by Naltech`,
      description: demo.body,
      url: `${siteUrl}/demo/${slug}`,
      publisher: {
        '@type': 'Organization',
        name: 'Naltech Studio',
        url: siteUrl,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Naltech Studio',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Portfolio',
          item: `${siteUrl}/#work`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: demo.brand,
          item: `${siteUrl}/demo/${slug}`,
        },
      ],
    },
  ];

  return (
    <main className={`demo-page ${demo.theme}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="demo-topbar">
        <Link href="/" className="back-link">← Kembali ke Naltech</Link>
        <span>Demo website</span>
      </div>
      <nav className="demo-nav">
        <a href="#" className="demo-brand">{demo.brand}</a>
        <div><a href="#about">Tentang</a><a href="#featured">Pilihan</a><a href="#contact">Kontak</a></div>
        <a href="#contact" className="demo-pill">Hubungi kami</a>
      </nav>
      <section className="demo-hero">
        <div className="demo-copy">
          <p className="demo-tag">{demo.tag}</p>
          <h1>{demo.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="demo-body">{demo.body}</p>
          <a className="demo-button" href="#featured">{demo.action} <span>↗</span></a>
        </div>
        <div className="demo-visual" aria-hidden="true">
          <div className="shape shape-one" /><div className="shape shape-two" />
          <p>{demo.brand}</p><small>{demo.note}</small>
        </div>
      </section>
      <section id="featured" className="demo-strip">
        <p>01 · Cerita</p><h2>Dibuat dengan perhatian pada setiap detail.</h2><span>Scroll untuk eksplorasi ↓</span>
      </section>
    </main>
  );
}

