import type { Metadata } from 'next';
import Link from 'next/link';
import './nalatix.css';
import TravelSearchWidget from './TravelSearchWidget';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'NalaTiket — Platform Tiket Pesawat, Hotel, Kereta & Wahana by Naltech',
  description: 'Mau ke mana? Semua tiket ada di sini. Contoh landing page platform travel dan penjualan tiket online terlengkap karya Naltech Studio.',
  alternates: { canonical: '/demo/nalatix' },
  openGraph: {
    title: 'NalaTiket — Platform Tiket Pesawat, Hotel, Kereta & Wahana by Naltech',
    description: 'Pesan tiket pesawat, hotel, kereta api, wahana, hingga event online dengan jaminan harga termurah.',
    images: [{ url: `${siteUrl}/travel/flight-sky.jpg`, width: 1200, height: 630, alt: 'NalaTiket Travel Platform' }],
  },
  twitter: {
    title: 'NalaTiket — Platform Tiket Pesawat, Hotel, Kereta & Wahana by Naltech',
    description: 'Pesan tiket pesawat, hotel, kereta api, wahana, hingga event online dengan jaminan harga termurah.',
    images: [`${siteUrl}/travel/flight-sky.jpg`],
  },
};

const tiketStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'NalaTiket (Concept by Naltech)',
    description: 'Platform online ticketing pesawat, hotel, kereta, dan wahana wisata karya Naltech Studio.',
    url: `${siteUrl}/demo/nalatix`,
    image: `${siteUrl}/travel/flight-sky.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressCountry: 'ID',
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
        name: 'NalaTiket',
        item: `${siteUrl}/demo/nalatix`,
      },
    ],
  },
];

export default function NalaTiketPage() {
  return (
    <main className="tk-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tiketStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="tk-promo-ribbon">
        <div className="tk-wrap tk-ribbon-content">
          <span className="tk-ribbon-badge">⚡ PROMO GAJIAN</span>
          <p>Diskon Tiket Liburan s.d. <strong>50%</strong> + Ekstra Cashback s.d. <strong>Rp500.000</strong> pakai kode <code>NALAHEMAT</code></p>
          <a href="#promos" className="tk-ribbon-link">Klaim Promo ↗</a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="tk-demo-bar">
        <div className="tk-wrap tk-demo-inner">
          <Link href="/" className="tk-back-link">← Kembali ke portfolio Naltech</Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="tk-header">
        <div className="tk-wrap tk-header-inner">
          <a className="tk-logo" href="#top">
            <span className="tk-logo-circle" />
            <span className="tk-logo-text">
              NALA<strong>TIKET</strong>
            </span>
          </a>

          <nav className="tk-nav" aria-label="Navigasi Utama">
            <a href="#services">Kategori Layanan</a>
            <a href="#promos">Promo Spesial</a>
            <a href="#deals">Destinasi Populer</a>
            <a href="#benefits">Keunggulan</a>
            <a href="#faq">Bantuan</a>
          </nav>

          <div className="tk-header-actions">
            <span className="tk-currency-badge">IDR · Bahasa</span>
            <a className="tk-btn-login" href="#search">
              Cek Pesanan <b>↗</b>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="tk-hero">
        <div className="tk-hero-bg-circles" aria-hidden="true">
          <div className="tk-circle-one" />
          <div className="tk-circle-two" />
        </div>

        <div className="tk-wrap tk-hero-content">
          <div className="tk-hero-copy">
            <div className="tk-hero-tag">
              <span className="tk-yellow-dot" />
              <span>Satu Platform untuk Semua Kebutuhan Liburanmu</span>
            </div>
            <h1>
              Mau ke mana?<br />
              Semua tiket ada di <em>sini.</em>
            </h1>
            <p>
              Bandingkan harga tiket pesawat, hotel berbintang, kereta api, wahana wisata, hingga sewa mobil dengan jaminan harga termurah dan bebas biaya tersembunyi.
            </p>
          </div>

          {/* Quick Service Classification Buttons */}
          <div id="services" className="tk-services-bar">
            <a href="#search" className="tk-service-btn active">
              <span className="tk-s-icon flight">✈️</span>
              <b>Pesawat</b>
            </a>
            <a href="#search" className="tk-service-btn">
              <span className="tk-s-icon hotel">🏨</span>
              <b>Hotel & Villa</b>
            </a>
            <a href="#search" className="tk-service-btn">
              <span className="tk-s-icon train">🚆</span>
              <b>Kereta Api</b>
            </a>
            <a href="#search" className="tk-service-btn">
              <span className="tk-s-icon attraction">🎢</span>
              <b>Wahana & To Do</b>
            </a>
            <a href="#search" className="tk-service-btn">
              <span className="tk-s-icon rental">🚗</span>
              <b>Sewa Mobil</b>
            </a>
            <a href="#search" className="tk-service-btn">
              <span className="tk-s-icon event">🎟️</span>
              <b>Event & Konser</b>
            </a>
          </div>

          {/* Interactive Multi-Service Search Booking Box */}
          <div id="search">
            <TravelSearchWidget />
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="tk-ticker-rail" aria-label="Keunggulan Utama NalaTiket">
        <div className="tk-ticker-inner">
          <span>JAMINAN HARGA TERMURAH</span>
          <i>●</i>
          <span>100% REFUND & RESCHEDULE FLEKSIBEL</span>
          <i>●</i>
          <span>TIKET RESMI 500+ MASKAPAI & KAI</span>
          <i>●</i>
          <span>BEBAS BIAYA ADMIN TERSEMBUNYI</span>
          <i>●</i>
          <span>CUSTOMER CARE 24/7 SIAP BANTU</span>
          <i>●</i>
          <span>CICILAN 0% HINGGA 12 BULAN</span>
          <i>●</i>
        </div>
      </section>

      {/* Promos & Flash Sale */}
      <section id="promos" className="tk-promos-section tk-wrap">
        <header className="tk-section-head">
          <div className="tk-head-left">
            <span className="tk-badge-sub">01 · PROMO SPESIAL</span>
            <h2>Penawaran terbaik<br />minggu <em>ini.</em></h2>
          </div>
          <a href="#search" className="tk-link-more">Lihat semua promo ↗</a>
        </header>

        <div className="tk-promo-grid">
          <article className="tk-promo-card card-blue">
            <span className="tk-promo-tag">TIKET PESAWAT</span>
            <h3>Diskon Terbang Domestik s.d. Rp350.000</h3>
            <p>Terbang ke Bali, Labuan Bajo, Medan, & Surabaya dengan cashback instan.</p>
            <div className="tk-promo-footer">
              <span className="tk-code-pill">KODE: TERBANGHEMAT</span>
              <a href="#search">Pesan Tiket ↗</a>
            </div>
          </article>

          <article className="tk-promo-card card-yellow">
            <span className="tk-promo-tag dark">HOTEL & RESORT</span>
            <h3>Staycation Mewah Diskon s.d. 45%</h3>
            <p>Hotel bintang 4 & 5 di Jakarta, Bandung, dan Bali dengan free sarapan pagi.</p>
            <div className="tk-promo-footer">
              <span className="tk-code-pill dark">KODE: STAYSERU</span>
              <a href="#search">Pesan Kamar ↗</a>
            </div>
          </article>

          <article className="tk-promo-card card-sky">
            <span className="tk-promo-tag">WAHANA & ATRAKSI</span>
            <h3>Beli 1 Gratis 1 Tiket Wahana Populer</h3>
            <p>Tiket Dufan, Trans Studio, Waterbom Bali, dan Sea World harga spesial.</p>
            <div className="tk-promo-footer">
              <span className="tk-code-pill">KODE: MAENSERU</span>
              <a href="#search">Ambil Tiket ↗</a>
            </div>
          </article>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="deals" className="tk-deals-section tk-wrap">
        <header className="tk-section-head">
          <div className="tk-head-left">
            <span className="tk-badge-sub">02 · DESTINASI FAVORIT</span>
            <h2>Liburan impian,<br />harga paling <em>bersahabat.</em></h2>
          </div>
          <a href="#search" className="tk-link-more">Eksplorasi destinasi ↗</a>
        </header>

        <div className="tk-deals-grid">
          <article className="tk-deal-card">
            <div className="tk-deal-img">
              <img src="/travel/hotel-resort.jpg" alt="Bali Resort & Flight" />
              <span className="tk-deal-badge">Paling Populer</span>
            </div>
            <div className="tk-deal-body">
              <small>BALI, INDONESIA</small>
              <h3>Paket Liburan Tropis Bali</h3>
              <p>Tiket Pesawat PP + Resort Tepi Pantai 3H2M</p>
              <div className="tk-deal-price-row">
                <div>
                  <span>Mulai dari</span>
                  <strong>Rp785.000 <small>/ orang</small></strong>
                </div>
                <a href="#search" className="tk-btn-deal">Pesan ↗</a>
              </div>
            </div>
          </article>

          <article className="tk-deal-card">
            <div className="tk-deal-img">
              <img src="/travel/train-scenic.jpg" alt="Kereta Api Wisata Yogyakarta" />
              <span className="tk-deal-badge yellow">Favorit Keluarga</span>
            </div>
            <div className="tk-deal-body">
              <small>YOGYAKARTA, JAWA TENGAH</small>
              <h3>Kereta Eksekutif & Hotel Malioboro</h3>
              <p>Tiket KAI Gambir-Tugu + Hotel Bintang 4</p>
              <div className="tk-deal-price-row">
                <div>
                  <span>Mulai dari</span>
                  <strong>Rp420.000 <small>/ orang</small></strong>
                </div>
                <a href="#search" className="tk-btn-deal">Pesan ↗</a>
              </div>
            </div>
          </article>

          <article className="tk-deal-card">
            <div className="tk-deal-img">
              <img src="/travel/themepark.jpg" alt="Tiket Wahana & Dufan" />
              <span className="tk-deal-badge">Instan E-Voucher</span>
            </div>
            <div className="tk-deal-body">
              <small>JAKARTA & SURABAYA</small>
              <h3>Pass Terusan Wahana & Theme Park</h3>
              <p>Bebas antre seharian di 25+ wahana seru</p>
              <div className="tk-deal-price-row">
                <div>
                  <span>Mulai dari</span>
                  <strong>Rp175.000 <small>/ tiket</small></strong>
                </div>
                <a href="#search" className="tk-btn-deal">Pesan ↗</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Why Choose NalaTiket */}
      <section id="benefits" className="tk-benefits-section">
        <div className="tk-wrap">
          <header className="tk-section-head center">
            <span className="tk-badge-sub">03 · KENAPA NALATIKET</span>
            <h2>Bikin rencana liburan<br />jadi serba <em>mudah.</em></h2>
            <p>Standar layanan perjalanan terpercaya dengan teknologi pemesanan cepat dan aman.</p>
          </header>

          <div className="tk-benefits-grid">
            <article className="tk-benefit-item">
              <div className="tk-b-icon">🏷️</div>
              <h3>Jaminan Harga Termurah</h3>
              <p>Menemukan harga lebih murah di tempat lain? Kami ganti selisihnya dengan voucher diskon.</p>
            </article>

            <article className="tk-benefit-item">
              <div className="tk-b-icon">🔄</div>
              <h3>100% Refund & Reschedule</h3>
              <p>Rencana perjalanan berubah mendadak? Ubah jadwal atau ajukan refund mudah langsung dari aplikasi.</p>
            </article>

            <article className="tk-benefit-item">
              <div className="tk-b-icon">💳</div>
              <h3>Pilihan Pembayaran Lengkap</h3>
              <p>Bayar instan pakai QRIS, Virtual Account semua bank, Kartu Kredit, hingga cicilan PayLater 0%.</p>
            </article>

            <article className="tk-benefit-item">
              <div className="tk-b-icon">💬</div>
              <h3>Customer Care 24/7</h3>
              <p>Tim support profesional kami siap mendampingi kebutuhan perjalanan Anda setiap saat.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="tk-reviews-section tk-wrap">
        <div className="tk-review-card">
          <span className="tk-quote-mark">“</span>
          <blockquote>
            Pesan tiket pesawat dan hotel di NalaTiket prosesnya super cepat. Harganya jujur tanpa biaya siluman di halaman akhir, e-voucher langsung terbit, dan customer servicenya sangat responsif waktu minta reschedule.
          </blockquote>
          <div className="tk-reviewer-info">
            <strong>Rian Pratama & Siska</strong>
            <small>Traveler Terverifikasi · Liburan Keluarga ke Bali & Labuan Bajo</small>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="tk-faq-section tk-wrap">
        <header className="tk-section-head">
          <div className="tk-head-left">
            <span className="tk-badge-sub">04 · PERTANYAAN UMUM</span>
            <h2>Semua yang sering<br /><em>ditanyakan traveler.</em></h2>
          </div>
          <a href="mailto:naltechai@gmail.com" className="tk-link-more">Pusat bantuan 24 jam ↗</a>
        </header>

        <div className="tk-faq-accordion">
          <details open>
            <summary>
              <span>01</span> Bagaimana cara mendapatkan E-Tiket setelah pembayaran?<b>+</b>
            </summary>
            <p>
              E-Tiket resmi dan voucher hotel akan dikirim otomatis ke email dan nomor WhatsApp terdaftar dalam waktu kurang dari 5 menit setelah pembayaran berhasil diverifikasi.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Apakah saya bisa melakukan refund atau ubah jadwal (reschedule)?<b>+</b>
            </summary>
            <p>
              Bisa. Layanan refund dan reschedule dapat diajukan secara mandiri melalui menu Pesanan Saya sesuai dengan syarat & ketentuan dari maskapai, hotel, atau operator terkait.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah harga yang tampil sudah termasuk pajak dan biaya layanan?<b>+</b>
            </summary>
            <p>
              Ya, NalaTiket menjamin transparansi harga. Seluruh harga yang ditampilkan adalah harga final yang sudah mencakup pajak bandara, PPN, dan biaya dasar penerbangan atau penginapan.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah konsep website travel ini dibuat untuk bisnis saya?<b>+</b>
            </summary>
            <p>
              Tentu saja! Ini adalah concept project dari Naltech Studio. Kami dapat membangun platform booking tiket, travel agent marketplace, integrasi API maskapai/hotel/KAI, hingga sistem pembayaran kustom untuk bisnis Anda.
            </p>
          </details>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="tk-cta-section tk-wrap">
        <div className="tk-cta-card">
          <div className="tk-cta-glow" />
          <div className="tk-cta-copy">
            <small>Concept project · Naltech Studio</small>
            <h2>
              Ingin punya website tiket & travel<br />
              sekeren <em>NalaTiket?</em>
            </h2>
            <p>
              Naltech membantu agensi perjalanan, promotor, dan bisnis digital membangun platform penjualan tiket modern dengan UI/UX kelas dunia.
            </p>
            <div className="tk-cta-btns">
              <a href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20penjualan%20tiket%20seperti%20NalaTiket." target="_blank" rel="noreferrer" className="tk-btn-primary">
                Konsultasi Project Website <b>↗</b>
              </a>
              <Link href="/" className="tk-btn-secondary">
                Lihat Portfolio Naltech
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tk-footer tk-wrap">
        <div className="tk-footer-grid">
          <div className="tk-footer-col brand">
            <a className="tk-logo" href="#top">
              <span className="tk-logo-circle" />
              <span className="tk-logo-text">NALA<strong>TIKET</strong></span>
            </a>
            <p>
              Platform concept penjualan tiket online, hotel, kereta, dan wahana dirancang oleh Naltech Studio. Bukan platform travel aktif.
            </p>
          </div>

          <div className="tk-footer-col">
            <strong>Produk & Layanan</strong>
            <a href="#search">Tiket Pesawat</a>
            <a href="#search">Hotel & Villa</a>
            <a href="#search">Tiket Kereta Api</a>
            <a href="#search">Wahana & Atraksi</a>
            <a href="#search">Sewa Mobil</a>
          </div>

          <div className="tk-footer-col">
            <strong>Bantuan & Info</strong>
            <a href="#promos">Promo Liburan</a>
            <a href="#benefits">Jaminan Harga Termurah</a>
            <a href="#faq">Panduan Refund</a>
            <a href="#faq">Syarat & Ketentuan</a>
          </div>

          <div className="tk-footer-col">
            <strong>Studio Pengembang</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">+62 815 7355 0017</a>
          </div>
        </div>

        <div className="tk-footer-bottom">
          <small>© 2026 NalaTiket · Concept Travel Website by <Link href="/">Naltech Studio</Link></small>
          <span>Jakarta, Indonesia</span>
        </div>
      </footer>
    </main>
  );
}
