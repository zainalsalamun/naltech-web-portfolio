import type { Metadata } from 'next';
import Link from 'next/link';
import './lumiere.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'LUMIÈRE Skincare — Kulit Sehat Tanpa Berlebihan',
  description: 'Demo landing page skincare premium dengan formula mindful, bahan aktif teruji, dan ritual sederhana untuk kulit sehat.',
  alternates: { canonical: '/demo/lumiere-skincare' },
  openGraph: {
    title: 'LUMIÈRE Skincare — Kulit Sehat Tanpa Berlebihan',
    description: 'Perawatan esensial dengan bahan aktif teruji, dibuat lembut untuk ritual harianmu.',
    url: '/demo/lumiere-skincare',
    images: [{ url: `${siteUrl}/lumiere/hero-products.webp`, width: 1080, height: 1350, alt: 'Koleksi skincare Lumière' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUMIÈRE Skincare',
    description: 'Kulit sehat, tanpa berlebihan.',
    images: [`${siteUrl}/lumiere/hero-products.webp`],
  },
};

const products = [
  { step: '01', name: 'Cloud Cleanser', type: 'Gentle amino cleanser', price: 'Rp189.000', tone: 'pearl', shape: 'pump', tag: 'Kulit bersih tanpa terasa tertarik' },
  { step: '02', name: 'Clarity Drops', type: '5% niacinamide serum', price: 'Rp249.000', tone: 'rose', shape: 'dropper', tag: 'Menenangkan dan meratakan warna kulit' },
  { step: '03', name: 'Barrier Veil', type: 'Ceramide comfort cream', price: 'Rp229.000', tone: 'sand', shape: 'jar', tag: 'Mengunci lembap, menjaga skin barrier' },
];

const faqs = [
  ['Apakah produk Lumière aman untuk kulit sensitif?', 'Formula kami dirancang tanpa pewangi dan alkohol pengering. Meski demikian, selalu lakukan patch test karena kondisi setiap kulit berbeda.'],
  ['Berapa lama sampai hasil mulai terlihat?', 'Rasa nyaman dan lembap dapat dirasakan sejak pemakaian awal. Perubahan tekstur dan warna kulit biasanya memerlukan penggunaan konsisten selama 4–8 minggu.'],
  ['Bolehkah Clarity Drops dipakai setiap hari?', 'Boleh. Mulai satu kali sehari setelah membersihkan wajah, lalu tingkatkan menjadi pagi dan malam bila kulit sudah beradaptasi dengan baik.'],
  ['Apakah rangkaian ini aman untuk ibu hamil?', 'Rangkaian esensial kami tidak menggunakan retinoid. Untuk kebutuhan khusus selama kehamilan, konsultasikan daftar bahan dengan dokter Anda.'],
];

export default function LumiereSkincarePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'LUMIÈRE Skincare — Demo Website by Naltech',
    description: 'Perawatan esensial dengan bahan aktif teruji untuk ritual harian yang sederhana.',
    url: `${siteUrl}/demo/lumiere-skincare`,
    publisher: { '@type': 'Organization', name: 'Naltech Studio', url: siteUrl },
  };

  return (
    <main className="lm-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="lm-demo-bar">
        <Link href="/">← Kembali ke Naltech</Link>
        <span>Demo website · Beauty &amp; wellness</span>
        <a href="#ritual">Temukan ritualmu ↘</a>
      </div>

      <header className="lm-header">
        <a className="lm-brand" href="#top" aria-label="Lumière home">LUMIÈRE<small>mindful skin health</small></a>
        <nav aria-label="Navigasi Lumière"><a href="#shop">Shop</a><a href="#philosophy">Filosofi</a><a href="#ingredients">Ingredients</a><a href="#journal">Journal</a></nav>
        <div className="lm-header-actions"><button type="button" aria-label="Cari produk">⌕</button><a href="#shop">Bag <span>0</span></a></div>
      </header>

      <section id="top" className="lm-hero">
        <div className="lm-hero-copy">
          <p className="lm-eyebrow"><span>✦</span> Skin health · Mindful care</p>
          <h1>Kulit sehat,<br /><em>tanpa berlebihan.</em></h1>
          <p>Perawatan esensial dengan bahan aktif teruji, dibuat lembut untuk menjaga keseimbangan kulit—setiap hari.</p>
          <div className="lm-hero-actions"><a href="#shop">Temukan ritualmu <span>↗</span></a><a href="#philosophy">Kenali formula kami</a></div>
          <div className="lm-hero-notes"><span>Dermatologist tested</span><span>Vegan &amp; cruelty-free</span><span>Fragrance-free</span></div>
        </div>
        <figure className="lm-hero-image">
          <img src="/lumiere/hero-products.webp" alt="Tiga produk skincare Lumière di atas pedestal merah muda" width={1080} height={1350} fetchPriority="high" />
          <figcaption><span>THE DAILY THREE</span><strong>Cleanse · Treat · Seal</strong></figcaption>
          <i>01</i>
        </figure>
      </section>

      <div className="lm-ticker" aria-label="Nilai utama Lumière"><div><span>SKIN-FIRST FORMULAS</span><i>✦</i><span>MINDFUL ROUTINES</span><i>✦</i><span>VISIBLE COMFORT</span><i>✦</i><span>SKIN-FIRST FORMULAS</span><i>✦</i></div></div>

      <section id="shop" className="lm-shop lm-shell">
        <header className="lm-section-head">
          <p><span>01</span> The essentials</p>
          <h2>Tiga langkah.<br /><em>Semua yang kulit butuhkan.</em></h2>
          <a href="#ritual">Lihat ritual lengkap ↗</a>
        </header>
        <div className="lm-products">
          {products.map((product) => (
            <article key={product.name}>
              <div className={`lm-product-art ${product.tone}`}>
                <span>{product.step}</span><b>BESTSELLER</b>
                <div className={`lm-pack ${product.shape}`}><i>L</i><small>LUMIÈRE</small></div>
                <button type="button" aria-label={`Tambahkan ${product.name} ke bag`}>+</button>
              </div>
              <div className="lm-product-copy"><small>{product.type}</small><h3>{product.name}</h3><p>{product.tag}</p><strong>{product.price}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section id="philosophy" className="lm-philosophy">
        <div className="lm-philosophy-copy">
          <p className="lm-label"><span>02</span> Our philosophy</p>
          <h2>Lebih sedikit produk.<br /><em>Lebih banyak perhatian.</em></h2>
          <p>Kami percaya kulit tidak membutuhkan sepuluh langkah. Ia membutuhkan formula yang tepat, konsisten, dan nyaman dipakai setiap hari.</p>
          <div className="lm-principles"><article><b>01</b><strong>Effective, not aggressive</strong><p>Kadar bahan aktif yang terukur untuk hasil nyata tanpa mengorbankan kenyamanan.</p></article><article><b>02</b><strong>Transparent by design</strong><p>Setiap bahan punya fungsi jelas. Tidak ada klaim berlebihan atau jargon yang membingungkan.</p></article><article><b>03</b><strong>Barrier comes first</strong><p>Semua formula dibangun dengan satu tujuan: menjaga pertahanan alami kulit tetap kuat.</p></article></div>
        </div>
        <figure><img src="/lumiere/ritual-model.webp" alt="Perempuan menjalani ritual perawatan kulit di pagi hari" width={1080} height={1350} loading="lazy" /><figcaption>Real skin. Real rhythm.</figcaption></figure>
      </section>

      <section id="ingredients" className="lm-ingredients lm-shell">
        <div className="lm-ingredients-image"><img src="/lumiere/ingredients.webp" alt="Bahan aktif skincare, centella, serum, dan peralatan laboratorium" width={1440} height={960} loading="lazy" /><span>FORMULATED WITH INTENTION</span></div>
        <div className="lm-ingredients-copy">
          <p className="lm-label"><span>03</span> Hero ingredients</p>
          <h2>Yang bekerja.<br /><em>Tanpa yang tak perlu.</em></h2>
          <p>Sinergi bahan aktif modern dan botanical soothers membantu kulit terasa lebih tenang, cerah, dan terhidrasi.</p>
          <div><article><span>5%</span><h3>Niacinamide</h3><p>Membantu meratakan warna kulit dan menyamarkan tampilan pori.</p></article><article><span>3×</span><h3>Ceramide Complex</h3><p>Mendukung lapisan pelindung kulit serta mengurangi kehilangan kelembapan.</p></article><article><span>1%</span><h3>Centella Active</h3><p>Menenangkan kemerahan dan membantu proses pemulihan alami kulit.</p></article></div>
          <a href="#shop">Baca ingredient glossary <b>↗</b></a>
        </div>
      </section>

      <section id="ritual" className="lm-ritual">
        <div className="lm-shell">
          <header className="lm-section-head inverse"><p><span>04</span> Your daily ritual</p><h2>Sederhana untuk dijalani.<br /><em>Nyata untuk dirasakan.</em></h2></header>
          <div className="lm-routine">
            <article><span>AM / PM · 01</span><div className="lm-step-icon">◌</div><h3>Cleanse softly</h3><p>Pijat Cloud Cleanser selama 30–60 detik. Bilas dengan air suhu ruang dan tepuk perlahan hingga kering.</p><small>1–2 pumps</small></article>
            <article><span>AM / PM · 02</span><div className="lm-step-icon">⌁</div><h3>Treat with intention</h3><p>Aplikasikan 2–3 tetes Clarity Drops pada kulit lembap. Ratakan tanpa menggosok berlebihan.</p><small>2–3 drops</small></article>
            <article><span>AM / PM · 03</span><div className="lm-step-icon">◒</div><h3>Seal the comfort</h3><p>Kunci hidrasi dengan Barrier Veil. Pada pagi hari, lanjutkan dengan sunscreen minimal SPF 30.</p><small>Pea-sized</small></article>
          </div>
        </div>
      </section>

      <section className="lm-results lm-shell">
        <div><p className="lm-label"><span>05</span> Tested on real skin</p><h2>Terukur dalam lab.<br /><em>Terasa di kulit.</em></h2><p>Uji penggunaan mandiri selama 28 hari pada 52 partisipan dengan berbagai kondisi kulit.</p></div>
        <div className="lm-stats"><article><strong>97<span>%</span></strong><p>kulit terasa lebih lembap sejak pemakaian pertama</p></article><article><strong>91<span>%</span></strong><p>tekstur kulit terasa lebih halus dalam 14 hari</p></article><article><strong>88<span>%</span></strong><p>kemerahan tampak berkurang setelah 28 hari</p></article><small>*Hasil dapat berbeda pada setiap individu.</small></div>
      </section>

      <section id="journal" className="lm-story">
        <blockquote>“Skincare terbaik bukan yang paling ramai. Ia yang membuatmu memahami kulit sendiri.”</blockquote>
        <div><strong>Dr. Amara Lestari</strong><small>Formulation advisor · Lumière Labs</small></div>
      </section>

      <section className="lm-reviews lm-shell">
        <header><p className="lm-label"><span>06</span> Skin diaries</p><h2>Dicintai kulit.<br /><em>Diceritakan mereka.</em></h2></header>
        <div><article><span>★★★★★</span><blockquote>“Baru kali ini niacinamide terasa benar-benar nyaman. Kulit lebih kalem, makeup juga menempel lebih bagus.”</blockquote><footer><b>Nadya, 27</b><small>Combination skin · Jakarta</small></footer></article><article><span>★★★★★</span><blockquote>“Barrier Veil menyelamatkan kulitku setelah terlalu banyak eksfoliasi. Teksturnya rich tapi tidak terasa berat.”</blockquote><footer><b>Alya, 31</b><small>Sensitive skin · Bandung</small></footer></article></div>
      </section>

      <section className="lm-faq lm-shell">
        <header><p className="lm-label"><span>07</span> Good to know</p><h2>Pertanyaan sebelum<br /><em>memulai ritual.</em></h2><a href="mailto:care@lumiere.test">Tanya skin consultant ↗</a></header>
        <div>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>0{index + 1}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="lm-cta lm-shell">
        <p>Ready when your skin is.</p><h2>Mulai dari yang<br /><em>esensial.</em></h2><a href="#shop">Shop the daily three <span>↗</span></a><div className="lm-cta-orb"><i>L</i></div>
      </section>

      <footer className="lm-footer">
        <div><a className="lm-brand" href="#top">LUMIÈRE<small>mindful skin health</small></a><p>Formula esensial untuk kulit yang ingin dipahami, bukan dipaksa.</p></div>
        <nav aria-label="Footer shop"><small>Shop</small><a href="#shop">The Daily Three</a><a href="#shop">Cleanser</a><a href="#shop">Serum</a><a href="#shop">Moisturizer</a></nav>
        <nav aria-label="Footer information"><small>Learn</small><a href="#philosophy">Our Philosophy</a><a href="#ingredients">Ingredients</a><a href="#ritual">Skin Routine</a><a href="#journal">Journal</a></nav>
        <div className="lm-newsletter"><small>Letters from Lumière</small><p>Catatan singkat tentang kulit, kebiasaan, dan hidup yang lebih mindful.</p><form><label className="sr-only" htmlFor="lm-email">Alamat email</label><input id="lm-email" type="email" placeholder="Email address" /><button type="submit" aria-label="Daftar newsletter">↗</button></form></div>
        <small>© 2026 Lumière Skin Health · Demo concept by Naltech Studio</small>
      </footer>
    </main>
  );
}
