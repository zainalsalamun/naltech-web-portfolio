import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const demos = {
  'senja-coffee': { brand: 'SENJA', tag: 'Coffee · Eatery · Community', title: 'Ritual kecil,\nrasa yang tinggal.', body: 'Kopi pilihan, makanan yang dibuat dengan jujur, dan ruang untuk pulang sejenak.', action: 'Lihat menu', note: 'Setiap hari · 07.00—22.00', theme: 'coffee' },
  'ruang-arsitek': { brand: 'RUANG/STUDIO', tag: 'Architecture · Interior', title: 'Ruang untuk\nhidup lebih baik.', body: 'Studio arsitektur yang merancang tempat dengan fungsi jernih, material jujur, dan dampak yang panjang.', action: 'Lihat proyek', note: 'Jakarta · Bali · Singapore', theme: 'architecture' },
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
    openGraph: { title, description: demo.body, images: [] },
    twitter: { title, description: demo.body, images: [] },
  };
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = demos[slug as DemoSlug];
  if (!demo) notFound();

  return (
    <main className={`demo-page ${demo.theme}`}>
      <div className="demo-topbar">
        <a href="/" className="back-link">← Kembali ke Naltech</a>
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
