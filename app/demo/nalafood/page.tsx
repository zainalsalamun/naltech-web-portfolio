import type { Metadata } from 'next';
import Link from 'next/link';
import './nalafood.css';
import FoodAddressWidget from './FoodAddressWidget';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'NalaFood — Pesan Makanan Online Cepat, Hangat & Hemat by Naltech',
  description: 'Lapar? Pesan makanan favoritmu dari ribuan restoran terdekat. Contoh landing page pemesanan makanan online modern dirancang oleh Naltech Studio.',
  alternates: { canonical: '/demo/nalafood' },
  openGraph: {
    title: 'NalaFood — Pesan Makanan Online Cepat, Hangat & Hemat by Naltech',
    description: 'Pesan makanan favoritmu dari ribuan restoran terdekat dengan jaminan makanan tetap hangat.',
    images: [{ url: `${siteUrl}/food/hero-spread.jpg`, width: 1200, height: 630, alt: 'NalaFood Online Food Ordering' }],
  },
  twitter: {
    title: 'NalaFood — Pesan Makanan Online Cepat, Hangat & Hemat by Naltech',
    description: 'Pesan makanan favoritmu dari ribuan restoran terdekat dengan jaminan makanan tetap hangat.',
    images: [`${siteUrl}/food/hero-spread.jpg`],
  },
};

const foodStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'NalaFood (Concept by Naltech)',
    description: 'Contoh website pemesanan makanan online cepat dan hemat karya Naltech Studio.',
    url: `${siteUrl}/demo/nalafood`,
    image: `${siteUrl}/food/hero-spread.jpg`,
    servesCuisine: 'Indonesian Culinary, Fast Food, Drinks',
    priceRange: '$',
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
        name: 'NalaFood',
        item: `${siteUrl}/demo/nalafood`,
      },
    ],
  },
];

export default function NalaFoodPage() {
  return (
    <main className="nf-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(foodStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="nf-promo-ribbon">
        <div className="nf-wrap nf-ribbon-content">
          <span className="nf-ribbon-badge">⚡ PROMO GAJIAN</span>
          <p>
            Diskon Kuliner s.d. <strong>60%</strong> + Voucher Gratis Ongkir Sepuasnya pakai kode <code>NALANYAM</code>
          </p>
          <a href="#promos" className="nf-ribbon-link">Klaim Voucher ↗</a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="nf-demo-bar">
        <div className="nf-wrap nf-demo-inner">
          <Link href="/" className="nf-back-link">← Kembali ke portfolio Naltech</Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="nf-header">
        <div className="nf-wrap nf-header-inner">
          <a className="nf-logo" href="#top">
            <span className="nf-logo-icon">🍲</span>
            <span className="nf-logo-text">
              NALA<strong>FOOD</strong>
            </span>
          </a>

          <nav className="nf-nav" aria-label="Navigasi Kuliner">
            <a href="#categories">Kategori</a>
            <a href="#restaurants">Restoran Terdekat</a>
            <a href="#promos">Flash Sale</a>
            <a href="#how">Cara Pesan</a>
            <a href="#benefits">Keunggulan</a>
          </nav>

          <div className="nf-header-actions">
            <a href="#restaurants" className="nf-btn-cart">
              <span>🛵</span>
              <b>Cek Resto</b>
            </a>
            <a href="#download" className="nf-btn-download">
              Unduh Aplikasi <b>↗</b>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Vibrant Culinary Background */}
      <section id="top" className="nf-hero">
        <div className="nf-hero-bg">
          <img src="/food/hero-spread.jpg" alt="Ragam Makanan Lezat NalaFood" />
          <div className="nf-hero-overlay" />
        </div>

        <div className="nf-wrap nf-hero-content">
          <div className="nf-hero-badge">
            <span className="nf-pulse-dot" />
            <span>Pesan Cepat · 10.000+ Restoran Pilihan di Sekitarmu</span>
          </div>

          <h1>
            Lapar? Pesan makanan favoritmu,<br />
            sampai <em>cepat & hangat.</em>
          </h1>

          <p className="nf-hero-sub">
            Dari santapan nusantara, burger juicy, ramen hangat, hingga minuman segar — kami antar langsung ke depan pintumu dengan jaminan rasa dan suhu terbaik.
          </p>

          {/* Interactive Delivery Address Widget */}
          <FoodAddressWidget />

          {/* Trust Indicators */}
          <div className="nf-hero-stats">
            <div className="nf-stat-pill">
              <strong>⚡ 18–25 Menit</strong>
              <small>Rata-rata Pengantaran</small>
            </div>
            <div className="nf-stat-pill">
              <strong>⭐ 4.9 / 5.0</strong>
              <small>1.2M+ Review Pelanggan</small>
            </div>
            <div className="nf-stat-pill">
              <strong>🍱 100% Hangat</strong>
              <small>Thermal Bag Protection</small>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Categories */}
      <section id="categories" className="nf-categories-section nf-wrap">
        <header className="nf-section-head">
          <div>
            <span className="nf-badge-tag">01 · JELAJAH KULINER</span>
            <h2>Mau makan apa<br />hari <em>ini?</em></h2>
          </div>
          <a href="#restaurants" className="nf-link-viewall">Semua kategori ↗</a>
        </header>

        <div className="nf-cat-grid">
          <a href="#restaurants" className="nf-cat-card">
            <span className="nf-cat-icon">🍜</span>
            <strong>Mie & Ramen</strong>
            <small>42 Resto</small>
          </a>

          <a href="#restaurants" className="nf-cat-card">
            <span className="nf-cat-icon">🍗</span>
            <strong>Ayam & Bebek</strong>
            <small>86 Resto</small>
          </a>

          <a href="#restaurants" className="nf-cat-card active">
            <span className="nf-cat-icon">🍔</span>
            <strong>Burger & Fries</strong>
            <small>34 Resto</small>
          </a>

          <a href="#restaurants" className="nf-cat-card">
            <span className="nf-cat-icon">🍕</span>
            <strong>Pizza & Pasta</strong>
            <small>28 Resto</small>
          </a>

          <a href="#restaurants" className="nf-cat-card">
            <span className="nf-cat-icon">🥗</span>
            <strong>Healthy Bowl</strong>
            <small>19 Resto</small>
          </a>

          <a href="#restaurants" className="nf-cat-card">
            <span className="nf-cat-icon">☕</span>
            <strong>Kopi & Boba</strong>
            <small>53 Resto</small>
          </a>

          <a href="#restaurants" className="nf-cat-card">
            <span className="nf-cat-icon">🍱</span>
            <strong>Jepang & Korea</strong>
            <small>39 Resto</small>
          </a>

          <a href="#restaurants" className="nf-cat-card">
            <span className="nf-cat-icon">🍰</span>
            <strong>Dessert Manis</strong>
            <small>24 Resto</small>
          </a>
        </div>
      </section>

      {/* Featured Restaurants Nearby */}
      <section id="restaurants" className="nf-restaurants-section nf-wrap">
        <header className="nf-section-head">
          <div>
            <span className="nf-badge-tag">02 · RESTORAN TERDEKAT</span>
            <h2>Rekomendasi terbaik<br />di sekitar <em>alamatmu.</em></h2>
          </div>
          <div className="nf-filter-chips">
            <button type="button" className="nf-filter-btn active">Terlaris 🔥</button>
            <button type="button" className="nf-filter-btn">Terdekat &lt;2km</button>
            <button type="button" className="nf-filter-btn">Promo Spesial</button>
          </div>
        </header>

        <div className="nf-resto-grid">
          {/* Restaurant 1 */}
          <article className="nf-resto-card">
            <div className="nf-resto-img">
              <img src="/food/burger-feast.jpg" alt="Smash & Grill Burger Co." />
              <span className="nf-promo-chip">Diskon 40%</span>
              <span className="nf-time-chip">20–25 Min</span>
            </div>
            <div className="nf-resto-body">
              <div className="nf-resto-meta">
                <span className="nf-rating">⭐ 4.9 (2.4k+)</span>
                <span className="nf-distance">📍 1.2 km</span>
              </div>
              <h3>Smash &amp; Grill Burger Co.</h3>
              <p>Double Cheese Truffle, Crispy Bacon Burger, Curly Fries</p>
              <div className="nf-resto-footer">
                <span className="nf-tag-free">🛵 Gratis Ongkir</span>
                <a href="#order" className="nf-btn-order">Pesan ↗</a>
              </div>
            </div>
          </article>

          {/* Restaurant 2 */}
          <article className="nf-resto-card">
            <div className="nf-resto-img">
              <img src="/food/ramen-bowl.jpg" alt="Tokyo Noodle Bar" />
              <span className="nf-promo-chip green">Cashback 30%</span>
              <span className="nf-time-chip">18–22 Min</span>
            </div>
            <div className="nf-resto-body">
              <div className="nf-resto-meta">
                <span className="nf-rating">⭐ 4.9 (3.1k+)</span>
                <span className="nf-distance">📍 0.8 km</span>
              </div>
              <h3>Tokyo Noodle Bar &amp; Gyoza</h3>
              <p>Authentic Tonkotsu Broth, Chashu Ramen, Spicy Tan Tan</p>
              <div className="nf-resto-footer">
                <span className="nf-tag-free">🛵 Gratis Ongkir</span>
                <a href="#order" className="nf-btn-order">Pesan ↗</a>
              </div>
            </div>
          </article>

          {/* Restaurant 3 */}
          <article className="nf-resto-card">
            <div className="nf-resto-img">
              <img src="/food/nasi-kuliner.jpg" alt="Dapur Nusantara & Sate" />
              <span className="nf-promo-chip">Paling Laris</span>
              <span className="nf-time-chip">15–20 Min</span>
            </div>
            <div className="nf-resto-body">
              <div className="nf-resto-meta">
                <span className="nf-rating">⭐ 4.8 (4.8k+)</span>
                <span className="nf-distance">📍 1.5 km</span>
              </div>
              <h3>Dapur Nusantara &amp; Sate Spesial</h3>
              <p>Nasi Goreng Kambing, Sate Ayam Bumbu Kacang, Sambal Terasi</p>
              <div className="nf-resto-footer">
                <span className="nf-tag-free">🛵 Gratis Ongkir</span>
                <a href="#order" className="nf-btn-order">Pesan ↗</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Promos & Flash Sale */}
      <section id="promos" className="nf-promos-section nf-wrap">
        <header className="nf-section-head">
          <div>
            <span className="nf-badge-tag">03 · FLASH SALE & PROMO</span>
            <h2>Makan kenyang,<br />dompet tetap <em>tenang.</em></h2>
          </div>
          <a href="#restaurants" className="nf-link-viewall">Lihat semua promo ↗</a>
        </header>

        <div className="nf-promo-cards-grid">
          <div className="nf-banner-card banner-coral">
            <span className="nf-banner-pill">MAKAN SIANG HEMAT</span>
            <h3>Diskon s.d. 50% Jam 11.00 – 14.00</h3>
            <p>Pesan makan siang dari 500+ merchant pilihan tanpa minimum belanja.</p>
            <div className="nf-banner-action">
              <code>KODE: MAKANSIANG</code>
              <a href="#restaurants">Klaim Promo ↗</a>
            </div>
          </div>

          <div className="nf-banner-card banner-yellow">
            <span className="nf-banner-pill dark">NALAFOOD PLUS</span>
            <h3>Gratis Ongkir Sepuasnya 30 Hari</h3>
            <p>Langganan NalaFood Plus hanya Rp19.000/bulan dan hemat ratusan ribu.</p>
            <div className="nf-banner-action">
              <code className="dark">DISKON 70%</code>
              <a href="#restaurants">Gabung Plus ↗</a>
            </div>
          </div>

          <div className="nf-banner-card banner-charcoal">
            <span className="nf-banner-pill green">COFFEE BREAK</span>
            <h3>Beli 1 Gratis 1 Minuman &amp; Boba</h3>
            <p>Temani jam santai soremu dengan aneka kopi artisan dan camilan manis.</p>
            <div className="nf-banner-action">
              <code>KODE: NALANGOPI</code>
              <a href="#restaurants">Pesan Minum ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (3 Langkah Mudah) */}
      <section id="how" className="nf-how-section">
        <div className="nf-wrap">
          <header className="nf-section-head center">
            <span className="nf-badge-tag">04 · CARA PEMESANAN</span>
            <h2>Pesan makanan semudah<br /><em>tiga ketukan jari.</em></h2>
            <p>Dirancang untuk memberikan pengalaman pesan antar yang mulus tanpa kerumitan.</p>
          </header>

          <div className="nf-steps-grid">
            <div className="nf-step-card">
              <span className="nf-step-num">01</span>
              <div className="nf-step-icon">📍</div>
              <h3>Tentukan Alamat</h3>
              <p>Masukkan lokasi rumah, kantor, atau gunakan GPS otomatis untuk menemukan resto terdekat.</p>
            </div>

            <div className="nf-step-card">
              <span className="nf-step-num">02</span>
              <div className="nf-step-icon">🍱</div>
              <h3>Pilih Menu Favorit</h3>
              <p>Jelajahi ribuan pilihan menu lezat, customize topping, dan pasang voucher promo diskon.</p>
            </div>

            <div className="nf-step-card">
              <span className="nf-step-num">03</span>
              <div className="nf-step-icon">🛵</div>
              <h3>Driver Antar Hangat</h3>
              <p>Pantau posisi driver secara real-time. Pesanan tiba tepat waktu dalam kondisi prima.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NalaFood */}
      <section id="benefits" className="nf-benefits-section nf-wrap">
        <header className="nf-section-head">
          <div>
            <span className="nf-badge-tag">05 · KEUNGGULAN KAMI</span>
            <h2>Standar kualitas tinggi<br />di setiap <em>pesanan.</em></h2>
          </div>
          <p className="nf-head-desc">Kami memastikan setiap makanan tiba di meja Anda dalam kondisi higienis dan nikmat.</p>
        </header>

        <div className="nf-benefits-grid">
          <div className="nf-benefit-card">
            <span className="nf-b-icon">🔥</span>
            <h3>Jaminan Makanan Hangat</h3>
            <p>Seluruh armada driver dilengkapi tas insulated berteknologi penahan suhu agar makanan tetap segar &amp; hangat.</p>
          </div>

          <div className="nf-benefit-card">
            <span className="nf-b-icon">📍</span>
            <h3>Live GPS Tracking</h3>
            <p>Pantau status persiapan dapur restoran hingga rute perjalanan driver secara langsung detik demi detik.</p>
          </div>

          <div className="nf-benefit-card">
            <span className="nf-b-icon">🛡️</span>
            <h3>Kemasan Segel Higienis</h3>
            <p>Stiker segel keamanan memastikan pesanan Anda tidak tersentuh dan terlindungi sepanjang pengiriman.</p>
          </div>

          <div className="nf-benefit-card">
            <span className="nf-b-icon">💳</span>
            <h3>Pembayaran Super Fleksibel</h3>
            <p>Mendukung QRIS, GoPay, OVO, ShopeePay, Virtual Account semua bank, hingga pembayaran Tunai (COD).</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="nf-reviews-section nf-wrap">
        <div className="nf-review-card">
          <span className="nf-quote-mark">“</span>
          <blockquote>
            Aplikasi NalaFood penyelamat di saat lapar lembur kantor. Pengantarannya konsisten di bawah 25 menit, burgernya masih garing dan kejunya tetap melted. Fitur explore alamatnya juga sangat akurat!
          </blockquote>
          <div className="nf-reviewer">
            <strong>Amanda Putri</strong>
            <small>Product Designer · 140+ Pesanan di NalaFood</small>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="nf-faq-section nf-wrap">
        <header className="nf-section-head">
          <div>
            <span className="nf-badge-tag">06 · PERTANYAAN UMUM</span>
            <h2>Hal yang sering ditanyakan<br /><em>seputar NalaFood.</em></h2>
          </div>
          <a href="mailto:naltechai@gmail.com" className="nf-link-viewall">Hubungi support 24/7 ↗</a>
        </header>

        <div className="nf-faq-list">
          <details open>
            <summary>
              <span>01</span> Bagaimana cara mendapatkan promo gratis ongkir?<b>+</b>
            </summary>
            <p>
              Voucher gratis ongkir otomatis tersedia di halaman checkout atau Anda dapat memasukkan kode promo yang aktif seperti <code>NALANYAM</code> pada saat memilih menu.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Berapa radius maksimal pengantaran makanan?<b>+</b>
            </summary>
            <p>
              Radius standar pengantaran reguler adalah hingga 10 km dari lokasi resto. Untuk merchant tertentu dengan label pengiriman kilat, jangkauan difokuskan pada radius 0–4 km untuk menjamin kecepatan.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah saya bisa melakukan pembatalan pesanan?<b>+</b>
            </summary>
            <p>
              Pembatalan dapat dilakukan dalam waktu 2 menit setelah pesanan dibuat sebelum resto mulai memasak makanan Anda.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech membangun sistem aplikasi pemesanan makanan untuk resto saya?<b>+</b>
            </summary>
            <p>
              Tentu! Ini adalah concept project dari Naltech Studio. Kami siap merancang dan membangun platform delivery, aplikasi pesan antar restoran, integrasi POS, dan sistem payment gateway untuk brand kuliner Anda.
            </p>
          </details>
        </div>
      </section>

      {/* Final Download & Project CTA */}
      <section id="download" className="nf-cta-section nf-wrap">
        <div className="nf-cta-card">
          <div className="nf-cta-glow" />
          <div className="nf-cta-inner">
            <span className="nf-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Siap membuat website atau aplikasi<br />
              kuliner sekeren <em>NalaFood?</em>
            </h2>
            <p>
              Naltech membantu bisnis F&amp;B, restoran, franchise kuliner, dan startup food-tech membangun sistem pemesanan online kelas dunia.
            </p>
            <div className="nf-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20pemesanan%20makanan%20seperti%20NalaFood."
                target="_blank"
                rel="noreferrer"
                className="nf-btn-primary"
              >
                Konsultasi Project Kuliner <b>↗</b>
              </a>
              <Link href="/" className="nf-btn-secondary">
                Kembali ke Portfolio Naltech
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="nf-footer nf-wrap">
        <div className="nf-footer-grid">
          <div className="nf-footer-col brand">
            <a className="nf-logo" href="#top">
              <span className="nf-logo-icon">🍲</span>
              <span className="nf-logo-text">NALA<strong>FOOD</strong></span>
            </a>
            <p>
              Platform concept aplikasi pemesanan makanan online dirancang oleh Naltech Studio. Bukan platform delivery aktif.
            </p>
          </div>

          <div className="nf-footer-col">
            <strong>Kategori Favorit</strong>
            <a href="#restaurants">Mie &amp; Ramen</a>
            <a href="#restaurants">Ayam &amp; Bebek</a>
            <a href="#restaurants">Burger &amp; Fast Food</a>
            <a href="#restaurants">Pizza &amp; Pasta</a>
            <a href="#restaurants">Kopi &amp; Boba</a>
          </div>

          <div className="nf-footer-col">
            <strong>Bantuan &amp; Info</strong>
            <a href="#promos">Flash Sale</a>
            <a href="#how">Cara Pemesanan</a>
            <a href="#benefits">Jaminan Suhu Hangat</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="nf-footer-col">
            <strong>Studio Pengembang</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">+62 815 7355 0017</a>
          </div>
        </div>

        <div className="nf-footer-bottom">
          <small>© 2026 NalaFood · Food Ordering Concept Website by <Link href="/">Naltech Studio</Link></small>
          <span>Jakarta, Indonesia</span>
        </div>
      </footer>
    </main>
  );
}
