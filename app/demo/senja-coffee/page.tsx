import type { Metadata } from 'next';
import './senja.css';

export const metadata: Metadata = {
  title: 'Senja Coffee — Coffee, Eatery & Community',
  description: 'Ritual kecil, rasa yang tinggal. Contoh website coffee shop oleh Naltech.',
  openGraph: { title: 'Senja Coffee — Coffee, Eatery & Community', description: 'Ritual kecil, rasa yang tinggal.', images: [new URL('/senja/hero.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')] },
  twitter: { title: 'Senja Coffee — Coffee, Eatery & Community', description: 'Ritual kecil, rasa yang tinggal.', images: [new URL('/senja/hero.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')] },
};

export default function SenjaCoffeePage() {
  return (
    <main className="sj-page">
      <div className="sj-demo"><a href="/">← Kembali ke portfolio</a><span>Concept project by Naltech</span></div>
      <header className="sj-header">
        <a className="sj-logo" href="#top">SENJA<span>●</span></a>
        <nav><a href="#menu">Menu</a><a href="#story">Cerita</a><a href="#origin">Biji kopi</a><a href="#visit">Kunjungi</a></nav>
        <a className="sj-book" href="#visit">Reservasi <b>↗</b></a>
      </header>
      <section id="top" className="sj-hero">
        <div className="sj-hero-copy"><p>COFFEE · EATERY · COMMUNITY</p><h1>Ritual kecil,<br />rasa yang<br /><em>tinggal.</em></h1><div><p>Kopi pilihan, makanan yang dibuat dengan jujur, dan ruang untuk pulang sejenak—dari pagi hingga matahari terbenam.</p><a href="#menu">Lihat menu <span>↘</span></a></div></div>
        <div className="sj-hero-image"><img src="/senja/hero.jpg" alt="Interior tropis Senja Coffee" /><div><span>OPEN DAILY</span><strong>07.00—22.00</strong></div></div>
        <p className="sj-scroll">SCROLL TO DISCOVER <span>↓</span></p>
      </section>

      <section className="sj-ticker"><div><span>KOPI INDONESIA</span><i>✦</i><span>MAKANAN HANGAT</span><i>✦</i><span>RUANG BERTEMU</span><i>✦</i><span>SETIAP HARI</span><i>✦</i><span>DARI PAGI KE SENJA</span></div></section>

      <section id="menu" className="sj-menu sj-wrap">
        <header className="sj-heading"><p><span>01</span> Menu pilihan</p><h2>Dibuat untuk<br />menemani <em>harimu.</em></h2><a href="#visit">Menu lengkap ↗</a></header>
        <div className="sj-menu-grid">
          <article className="sj-menu-main"><img src="/senja/sunset-drink.jpg" alt="Minuman segar saat matahari terbenam" /><div><small>Signature · Cold</small><h3>Senja Tonic</h3><p>Espresso, tonic, jeruk kasturi, dan rosemary.</p><strong>38K</strong></div></article>
          <div className="sj-menu-cards">
            <article><span>COFFEE</span><h3>Es Kopi<br />Teras</h3><p>Espresso · susu · gula kelapa</p><strong>32K</strong><i>01</i></article>
            <article><span>MANUAL BREW</span><h3>Gayo<br />Natural</h3><p>Berry · cacao · palm sugar</p><strong>42K</strong><i>02</i></article>
            <article><span>NON COFFEE</span><h3>Jamu<br />Citrus</h3><p>Kunyit · asam · sparkling water</p><strong>30K</strong><i>03</i></article>
            <article><span>KITCHEN</span><h3>Toast<br />Kaya</h3><p>Sourdough · srikaya · sea salt</p><strong>34K</strong><i>04</i></article>
          </div>
        </div>
      </section>

      <section id="story" className="sj-story">
        <div className="sj-story-art"><div className="sj-sun"><i /><i /><span>S</span></div><p>EST. 2019<br />JAKARTA</p></div>
        <div className="sj-story-copy"><p><span>02</span> Tentang Senja</p><h2>Ruang pulang<br />di tengah <em>kota.</em></h2><p>Senja dimulai dari sebuah teras kecil dan keyakinan bahwa kopi yang baik tidak harus terasa rumit. Kami menyatukan biji lokal, masakan rumahan, dan keramahan yang tulus menjadi ruang yang bisa dinikmati siapa saja.</p><blockquote>“Datang sendiri tak apa.<br />Di sini selalu ada cerita.”</blockquote><a href="#community">Kenal lebih dekat ↘</a></div>
      </section>

      <section id="origin" className="sj-origin sj-wrap">
        <header className="sj-heading"><p><span>03</span> Dari kebun</p><h2>Rasa baik punya<br /><em>asal yang jelas.</em></h2></header>
        <div className="sj-origin-grid">
          <div className="sj-origin-photo"><img src="/senja/brew.jpg" alt="Proses seduh manual Senja Coffee" /><span>BREWED WITH CARE · EVERY CUP</span></div>
          <div className="sj-origin-list">
            <article><span>01</span><div><h3>Gayo, Aceh</h3><p>Natural · 1.450 mdpl</p></div><strong>Cacao · Berry · Spice</strong></article>
            <article><span>02</span><div><h3>Kintamani, Bali</h3><p>Washed · 1.200 mdpl</p></div><strong>Citrus · Floral · Tea</strong></article>
            <article><span>03</span><div><h3>Kerinci, Jambi</h3><p>Honey · 1.600 mdpl</p></div><strong>Stone fruit · Caramel</strong></article>
            <article><span>04</span><div><h3>Temanggung, Jawa</h3><p>Natural · 1.100 mdpl</p></div><strong>Tobacco · Brown sugar</strong></article>
          </div>
        </div>
      </section>

      <section id="community" className="sj-community">
        <div className="sj-wrap"><header className="sj-heading"><p><span>04</span> Ruang bersama</p><h2>Bukan cuma kedai.<br />Ini ruang untuk <em>bertumbuh.</em></h2><p>Dari sesi dengar musik, pasar kreatif, sampai kelas seduh—selalu ada alasan baru untuk bertemu.</p></header><div className="sj-events"><article><span>FRI · 19.30</span><h3>Sunset Listening Club</h3><p>Vinyl night bersama selector lokal.</p><a href="#visit">Info acara ↗</a></article><article><span>SAT · 10.00</span><h3>Slow Bar Workshop</h3><p>Belajar V60 santai bersama barista Senja.</p><a href="#visit">Daftar ↗</a></article><article><span>SUN · 08.00</span><h3>Teras Market</h3><p>Produk lokal, pastry, tanaman, dan cerita.</p><a href="#visit">Lihat tenant ↗</a></article></div></div>
      </section>

      <section className="sj-gallery"><figure><img src="/senja/hero.jpg" alt="Suasana tropis Senja Coffee" /><figcaption>Pagi yang pelan</figcaption></figure><figure><img src="/senja/pastry.jpg" alt="Kopi dan pastry di Senja Coffee" /><figcaption>Teman untuk berbagi</figcaption></figure><figure><img src="/senja/sunset-drink.jpg" alt="Minuman di waktu senja" /><figcaption>Sampai matahari pulang</figcaption></figure></section>

      <section className="sj-review"><div className="sj-wrap"><span>“</span><blockquote>Tempat favorit untuk berhenti sebentar. Kopinya konsisten, makanannya nyaman, dan selalu terasa seperti bertemu teman lama.</blockquote><div><strong>Raka & Naya</strong><small>Teman Senja sejak 2020</small></div></div></section>

      <section id="visit" className="sj-visit sj-wrap">
        <header><p><span>05</span> Mampir ke Senja</p><h2>Temukan meja<br />favoritmu.</h2><a href="https://maps.google.com" target="_blank" rel="noreferrer">Buka di peta ↗</a></header>
        <div className="sj-visit-card"><div><small>LOKASI</small><p>Jl. Cipete Raya No. 18<br />Jakarta Selatan 12410</p></div><div><small>JAM BUKA</small><p>Setiap hari<br />07.00—22.00</p></div><div><small>KONTAK</small><p>halo@senjacoffee.id<br />+62 812 2020 1919</p></div><a href="mailto:naltechai@gmail.com">Reservasi meja <span>↗</span></a><div className="sj-visit-sun"><i /><span>S</span></div></div>
      </section>

      <footer className="sj-footer sj-wrap"><a className="sj-logo" href="#top">SENJA<span>●</span></a><p>Coffee · Eatery · Community<br />Dari pagi sampai senja.</p><div><a href="#menu">Menu</a><a href="#story">Cerita</a><a href="#origin">Biji kopi</a><a href="#visit">Kunjungi</a></div><div><a href="/">Portfolio Naltech</a><a href="mailto:naltechai@gmail.com">Buat project serupa</a></div><small>© 2026 Senja Coffee · Concept website by Naltech Studio · Bukan kedai aktif</small></footer>
    </main>
  );
}
