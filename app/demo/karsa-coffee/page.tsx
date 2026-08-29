import type { Metadata } from 'next';
import './karsa.css';

export const metadata: Metadata = {
  title: 'Karsa Coffee — Specialty Coffee Concept by Naltech',
  description: 'Contoh landing page coffee shop hangat dan modern yang dirancang oleh Naltech.',
  alternates: { canonical: '/demo/karsa-coffee' },
  openGraph: { title: 'Karsa Coffee — Specialty Coffee Concept by Naltech', description: 'Kopi baik, ruang hangat, cerita yang tinggal.', images: [new URL('/coffee/hero-cafe.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id')] },
  twitter: { title: 'Karsa Coffee — Specialty Coffee Concept by Naltech', description: 'Kopi baik, ruang hangat, cerita yang tinggal.', images: [new URL('/coffee/hero-cafe.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id')] },
};

export default function KarsaCoffeePage() {
  return (
    <main className="kc-page">
      <div className="kc-demo"><a href="/">← Kembali ke portfolio</a><span>Concept project by Naltech</span></div>
      <header className="kc-header">
        <a className="kc-logo" href="#top"><span>K</span>KARSA</a>
        <nav><a href="#menu">Menu</a><a href="#story">Cerita kami</a><a href="#space">Kedai</a><a href="#visit">Kunjungi</a></nav>
        <a className="kc-order" href="#menu">Pesan kopi <b>↗</b></a>
      </header>
      <section id="top" className="kc-hero">
        <div className="kc-hero-image"><img src="/coffee/hero-cafe.jpg" alt="Interior coffee shop yang hangat" /></div>
        <div className="kc-hero-copy">
          <p><span>Jakarta · Est. 2021</span> Specialty coffee & slow living</p>
          <h1>Tempat kopi,<br />cerita, dan<br /><em>jeda bertemu.</em></h1>
          <div><p>Kami menyeduh kopi Indonesia dengan penuh perhatian—untuk pagi yang pelan, obrolan panjang, dan ide yang baru dimulai.</p><a href="#menu">Lihat menu <span>↗</span></a></div>
        </div>
        <div className="kc-open"><span>Hari ini</span><strong>Buka sampai 22.00</strong><i>●</i></div>
      </section>

      <section className="kc-marquee" aria-label="Nilai Karsa Coffee"><div><span>Single origin Indonesia</span><i>✦</i><span>Roasted with care</span><i>✦</i><span>Fresh daily pastry</span><i>✦</i><span>Good coffee, good company</span></div></section>

      <section id="menu" className="kc-menu kc-wrap">
        <header className="kc-section-head"><p><span>01</span> Pilihan hari ini</p><h2>Diseduh untuk<br />setiap <em>suasana.</em></h2><a href="#visit">Lihat menu lengkap ↗</a></header>
        <div className="kc-menu-grid">
          <article className="kc-menu-feature"><img src="/coffee/coffee-pastry.jpg" alt="Latte dan pastry Karsa Coffee" /><div><span>Barista&apos;s pick</span><h3>Karsa Cloud</h3><p>Espresso, susu segar, gula aren, dan sea-salt cream yang lembut.</p><strong>38K</strong></div></article>
          <div className="kc-menu-list">
            <article><span>01</span><div><h3>Senja Latte</h3><p>Double espresso · susu · gula aren</p></div><strong>34K</strong></article>
            <article><span>02</span><div><h3>Flores Manual Brew</h3><p>Orange blossom · cacao · brown sugar</p></div><strong>42K</strong></article>
            <article><span>03</span><div><h3>Coconut Cold Brew</h3><p>Cold brew · coconut water · citrus</p></div><strong>36K</strong></article>
            <article><span>04</span><div><h3>Dark Cocoa Mocha</h3><p>Espresso · dark chocolate · oat milk</p></div><strong>39K</strong></article>
            <article><span>05</span><div><h3>Butter Croissant</h3><p>Fresh baked · cultured butter</p></div><strong>28K</strong></article>
          </div>
        </div>
      </section>

      <section id="story" className="kc-story">
        <div className="kc-story-copy"><p><span>02</span> Cerita kami</p><h2>Dari tanah baik,<br />ke cangkir yang<br /><em>berarti.</em></h2><p>Karsa lahir dari keinginan sederhana: membawa rasa terbaik dari kebun kopi Indonesia ke meja yang terasa seperti rumah. Kami bekerja dekat dengan petani dan menyangrai dalam batch kecil agar karakter setiap biji tetap bercerita.</p><div><article><strong>12</strong><span>Mitra petani<br />lokal</span></article><article><strong>7</strong><span>Origin kopi<br />Indonesia</span></article><article><strong>4.9</strong><span>Rating dari<br />coffee friends</span></article></div><a href="#ritual">Kenali proses kami ↘</a></div>
        <div className="kc-story-image"><img src="/coffee/beans.jpg" alt="Biji kopi pilihan Karsa Coffee" /><span>Small batch<br />roastery</span></div>
      </section>

      <section id="ritual" className="kc-ritual kc-wrap">
        <header className="kc-section-head"><p><span>03</span> Ritual Karsa</p><h2>Perhatian kecil.<br /><em>Rasa yang besar.</em></h2></header>
        <div className="kc-ritual-grid">
          <div className="kc-pour"><img src="/coffee/pour-over.jpg" alt="Proses manual brew pour over" /><span>Slow pour · precise taste</span></div>
          <div className="kc-ritual-steps">
            <article><span>01</span><div><h3>Pilih origin</h3><p>Kami memilih biji musiman langsung dari kebun pilihan di berbagai daerah Indonesia.</p></div><b>⌁</b></article>
            <article><span>02</span><div><h3>Roast perlahan</h3><p>Setiap batch disangrai dengan profil yang menjaga rasa alami dan aroma terbaiknya.</p></div><b>◉</b></article>
            <article><span>03</span><div><h3>Seduh presisi</h3><p>Barista menyesuaikan ukuran giling, suhu, dan waktu untuk secangkir rasa yang seimbang.</p></div><b>◎</b></article>
            <article><span>04</span><div><h3>Nikmati jeda</h3><p>Duduk, bernapas, dan biarkan satu cangkir mengembalikan ritme harimu.</p></div><b>☕</b></article>
          </div>
        </div>
      </section>

      <section id="space" className="kc-space">
        <header className="kc-section-head kc-wrap"><p><span>04</span> Ruang Karsa</p><h2>Datang untuk kopi.<br />Tinggal karena <em>nyaman.</em></h2><p>Sudut hangat untuk bekerja, bertemu teman, atau menikmati waktu sendirian.</p></header>
        <div className="kc-gallery kc-wrap"><figure><img src="/coffee/hero-cafe.jpg" alt="Area utama kedai Karsa Coffee" /><figcaption>Communal bar · Lantai 1</figcaption></figure><figure><img src="/coffee/coffee-pastry.jpg" alt="Kopi dan pastry di meja" /><figcaption>Morning table · 08.00</figcaption></figure><figure><img src="/coffee/pour-over.jpg" alt="Barista menyeduh kopi" /><figcaption>Brew bar · Daily ritual</figcaption></figure></div>
      </section>

      <section className="kc-quote"><div className="kc-wrap"><span>“</span><blockquote>Karsa punya suasana yang bikin ingin tinggal lebih lama. Kopinya serius, tapi rasanya tetap dekat dan tidak mengintimidasi.</blockquote><div><strong>Alia Prameswari</strong><small>Creative Director · Teman Karsa sejak 2022</small></div></div></section>

      <section className="kc-membership kc-wrap"><div><p>Teman Karsa</p><h2>Setiap cangkir<br />punya <em>cerita baru.</em></h2><p>Kumpulkan stempel, nikmati menu rahasia, dan dapatkan undangan lebih awal untuk cupping session kami.</p><a href="mailto:naltechai@gmail.com">Gabung komunitas <span>↗</span></a></div><div className="kc-card"><span>K</span><small>KARSA COFFEE CLUB</small><strong>GOOD COFFEE<br />GOOD COMPANY</strong><p>MEMBER · 00128</p><i>✦</i></div></section>

      <section id="visit" className="kc-visit">
        <div className="kc-wrap"><header><p><span>05</span> Datang & berjumpa</p><h2>Satu meja<br />menunggumu.</h2></header><div className="kc-visit-info"><article><small>Alamat</small><p>Jl. Kemang Raya No. 21<br />Jakarta Selatan 12730</p><a href="https://maps.google.com" target="_blank" rel="noreferrer">Buka peta ↗</a></article><article><small>Jam buka</small><p>Senin—Jumat · 07.00—22.00<br />Sabtu—Minggu · 08.00—23.00</p></article><article><small>Kontak</small><p>hello@karsacoffee.id<br />+62 812 3456 7890</p><a href="mailto:naltechai@gmail.com">Reservasi meja ↗</a></article></div></div>
      </section>

      <footer className="kc-footer kc-wrap"><a className="kc-logo" href="#top"><span>K</span>KARSA</a><p>Specialty coffee, warm space,<br />and stories worth sharing.</p><div><a href="#menu">Menu</a><a href="#story">Cerita</a><a href="#space">Kedai</a><a href="#visit">Kunjungi</a></div><div><a href="/">Portfolio Naltech</a><a href="mailto:naltechai@gmail.com">Buat project serupa</a></div><small>© 2026 Karsa Coffee · Concept website by Naltech Studio · Bukan kedai aktif</small></footer>
    </main>
  );
}
