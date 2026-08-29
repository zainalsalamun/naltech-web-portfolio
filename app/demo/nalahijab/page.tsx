import type { Metadata } from 'next';
import Link from 'next/link';
import './nalahijab.css';
import HijabCategorySelector from './HijabCategorySelector';
import {
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Wind,
  CheckCircle2,
  HeartHandshake,
  ArrowUpRight,
  Truck,
  Layers,
  Star,
  MessageCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'NalaHijab — Sentuhan Lembut Hijab Premium & Modest Fashion by Naltech',
  description: 'Sentuhan lembut hijab premium, anggun di setiap cerita cantikmu. Koleksi bergo pet, pashmina instan, pashmina pesta, hingga segi empat voal dirancang oleh Naltech.',
  openGraph: {
    title: 'NalaHijab — Sentuhan Lembut Hijab Premium & Modest Fashion by Naltech',
    description: 'Sentuhan lembut hijab premium, anggun di setiap cerita cantikmu. Koleksi bergo pet, pashmina instan, pashmina pesta, hingga segi empat voal.',
    images: [new URL('/hijab/hero-model.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')],
  },
  twitter: {
    title: 'NalaHijab — Sentuhan Lembut Hijab Premium & Modest Fashion by Naltech',
    description: 'Sentuhan lembut hijab premium, anggun di setiap cerita cantikmu. Koleksi bergo pet, pashmina instan, pashmina pesta, hingga segi empat voal.',
    images: [new URL('/hijab/hero-model.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')],
  },
};

export default function NalaHijabPage() {
  return (
    <main className="nh-page">
      {/* Top Header Promo Ribbon */}
      <div className="nh-promo-ribbon">
        <div className="nh-wrap nh-ribbon-content">
          <span className="nh-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO SPESIAL LAUNCHING</span>
          </span>
          <p>
            Diskon s.d. <strong>35%</strong> + Gratis Exclusive Hijab Pouch untuk pembelian min. 3 pcs pakai kode <code>NALACANTIK</code>
          </p>
          <a href="#kategori" className="nh-ribbon-link">
            <span>Pilih Koleksi</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="nh-demo-bar">
        <div className="nh-wrap nh-demo-inner">
          <Link href="/" className="nh-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="nh-header">
        <div className="nh-wrap nh-header-inner">
          <a className="nh-logo" href="#top">
            <span className="nh-logo-icon">✦</span>
            <span className="nh-logo-text">
              NALA<strong>HIJAB</strong>
            </span>
          </a>

          <nav className="nh-nav" aria-label="Navigasi Hijab">
            <a href="#kategori">Kategori Produk</a>
            <a href="#bestseller">Koleksi Pilihan</a>
            <a href="#material">Karakter Bahan</a>
            <a href="#lookbook">Lookbook</a>
            <a href="#faq">Bantuan</a>
          </nav>

          <div className="nh-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20NalaHijab%2C%20saya%20ingin%20konsultasi%20pemesanan%20hijab."
              target="_blank"
              rel="noreferrer"
              className="nh-btn-consult"
            >
              <MessageCircle size={15} />
              <span>Chat WhatsApp</span>
            </a>
            <a href="#kategori" className="nh-btn-shop">
              <ShoppingBag size={15} />
              <span>Beli Sekarang</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Beautiful Model Holding Hijab Fabric */}
      <section id="top" className="nh-hero">
        <div className="nh-wrap nh-hero-grid">
          <div className="nh-hero-copy">
            <div className="nh-hero-tag">
              <Sparkles size={14} className="nh-tag-sparkle" />
              <span>MODEST &amp; CONTEMPORARY HIJAB WEAR</span>
            </div>

            <h1>
              Sentuhan lembut hijab premium,<br />
              anggun di setiap <em>cerita cantikmu.</em>
            </h1>

            <p className="nh-hero-sub">
              Dibuat dengan serat kain bernapas yang sejuk di kulit, teknologi anti-mleyot di dahi, serta jahit tepi butik halus untuk menyempurnakan penampilan sehari-hari hingga momen istimewa.
            </p>

            {/* Quick Trust Highlights */}
            <div className="nh-hero-trust">
              <div className="nh-trust-item">
                <Wind size={18} />
                <span>Bebas Gerah Seharian</span>
              </div>
              <div className="nh-trust-item">
                <ShieldCheck size={18} />
                <span>Anti-Mleyot di Dahi</span>
              </div>
              <div className="nh-trust-item">
                <Layers size={18} />
                <span>Jahit Tepi Butik Halus</span>
              </div>
            </div>

            <div className="nh-hero-actions">
              <a href="#kategori" className="nh-btn-primary">
                <ShoppingBag size={17} />
                <span>Jelajahi Semua Koleksi</span>
                <ArrowUpRight size={17} />
              </a>
              <a href="#lookbook" className="nh-btn-secondary">
                <span>Lihat Inspirasi Lookbook</span>
              </a>
            </div>
          </div>

          {/* Hero Visual Frame: Model Holding Hijab */}
          <div className="nh-hero-visual">
            <div className="nh-hero-arch">
              <img
                src="/hijab/hero-model.jpg"
                alt="Model Anggun Memegang Kain Hijab NalaHijab"
              />
              <div className="nh-hero-floating-card">
                <span className="nh-card-label">Koleksi Terkini</span>
                <strong>Soft Voal &amp; Pashmina Silk</strong>
                <small>Serat alami premium bersertifikasi</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Interactive Category CTA Selector */}
      <section id="kategori" className="nh-category-section nh-wrap">
        <header className="nh-section-head center">
          <span className="nh-badge-tag">01 · RAGAM PILIHAN HIJAB</span>
          <h2>Temukan model hijab yang pas<br />untuk <em>kebutuhan gayamu.</em></h2>
          <p>
            Mulai dari bergo praktis harian, pashmina instan tanpa jarum, hingga pashmina pesta berbahan shimmer mewah.
          </p>
        </header>

        <HijabCategorySelector />
      </section>

      {/* Section 02: Best Seller Collection Showcase */}
      <section id="bestseller" className="nh-bestseller-section nh-wrap">
        <header className="nh-section-head">
          <div>
            <span className="nh-badge-tag">02 · KOLEKSI TERLARIS</span>
            <h2>Favorit sahabat NalaHijab<br />bulan <em>ini.</em></h2>
          </div>
          <a href="#kategori" className="nh-link-more">
            <span>Lihat katalog lengkap</span>
            <ArrowUpRight size={14} />
          </a>
        </header>

        <div className="nh-products-grid">
          {/* Product 1 */}
          <article className="nh-product-card">
            <div className="nh-product-img">
              <img src="/hijab/bergo-daily.jpg" alt="Bergo Pet Maryam Daily" />
              <span className="nh-badge-product">Terlaris</span>
            </div>
            <div className="nh-product-body">
              <small>BERGO DAILY</small>
              <h3>Bergo Pet Maryam Soft Jersey</h3>
              <p>Soft pad antem anti-tembem dengan bahan jersey korea yang dingin di kulit.</p>
              <div className="nh-product-footer">
                <div className="nh-price">
                  <span>Harga</span>
                  <strong>Rp49.000</strong>
                </div>
                <a
                  href="https://wa.me/6281573550017?text=Halo%20NalaHijab%2C%20saya%20ingin%20pesan%20Bergo%20Pet%20Maryam."
                  target="_blank"
                  rel="noreferrer"
                  className="nh-btn-buy"
                >
                  <ShoppingBag size={14} />
                  <span>Beli</span>
                </a>
              </div>
            </div>
          </article>

          {/* Product 2 */}
          <article className="nh-product-card">
            <div className="nh-product-img">
              <img src="/hijab/pashmina-silk.jpg" alt="Pashmina Silk Shimmer Party" />
              <span className="nh-badge-product gold">Koleksi Pesta</span>
            </div>
            <div className="nh-product-body">
              <small>PASHMINA FORMAL</small>
              <h3>Pashmina Silk Shimmer Glam</h3>
              <p>Kilau mewah dengan draping jatuh elegan, tidak licin dan mudah dibentuk.</p>
              <div className="nh-product-footer">
                <div className="nh-price">
                  <span>Harga</span>
                  <strong>Rp89.000</strong>
                </div>
                <a
                  href="https://wa.me/6281573550017?text=Halo%20NalaHijab%2C%20saya%20ingin%20pesan%20Pashmina%20Silk%20Shimmer."
                  target="_blank"
                  rel="noreferrer"
                  className="nh-btn-buy"
                >
                  <ShoppingBag size={14} />
                  <span>Beli</span>
                </a>
              </div>
            </div>
          </article>

          {/* Product 3 */}
          <article className="nh-product-card">
            <div className="nh-product-img">
              <img src="/hijab/voal-motif.jpg" alt="Segi Empat Voal Ultrafine Laser Cut" />
              <span className="nh-badge-product">Edisi Motif</span>
            </div>
            <div className="nh-product-body">
              <small>SEGI EMPAT PRINT</small>
              <h3>Voal Ultrafine Bloom Scarf</h3>
              <p>Motif eksklusif dengan finishing tepi laser cut butik, tegak sempurna di dahi.</p>
              <div className="nh-product-footer">
                <div className="nh-price">
                  <span>Harga</span>
                  <strong>Rp79.000</strong>
                </div>
                <a
                  href="https://wa.me/6281573550017?text=Halo%20NalaHijab%2C%20saya%20ingin%20pesan%20Voal%20Ultrafine%20Bloom%20Scarf."
                  target="_blank"
                  rel="noreferrer"
                  className="nh-btn-buy"
                >
                  <ShoppingBag size={14} />
                  <span>Beli</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Section 03: Material Characteristics & Benefits */}
      <section id="material" className="nh-material-section">
        <div className="nh-wrap">
          <header className="nh-section-head center">
            <span className="nh-badge-tag">03 · STANDAR KUALITAS BAHAN</span>
            <h2>Mengapa ribuan muslimah<br />memilih <em>NalaHijab?</em></h2>
            <p>
              Kami mengutamakan kenyamanan berhijab tanpa kompromi melalui riset bahan dan potongan ergonomis.
            </p>
          </header>

          <div className="nh-benefits-grid">
            <div className="nh-benefit-card">
              <div className="nh-b-icon">
                <Wind size={24} />
              </div>
              <h3>Bahan Adem &amp; Breathable</h3>
              <p>Sirkulasi udara optimal melalui serat mikro alami, tidak panas meski beraktivitas outdoor seharian.</p>
            </div>

            <div className="nh-benefit-card">
              <div className="nh-b-icon">
                <ShieldCheck size={24} />
              </div>
              <h3>Tegak Natural &amp; Anti-Mleyot</h3>
              <p>Bagian dahi melengkung kokoh dan simetris tanpa perlu sering disetrika atau disemprot spray kaku.</p>
            </div>

            <div className="nh-benefit-card">
              <div className="nh-b-icon">
                <Layers size={24} />
              </div>
              <h3>Jahit Tepi Butik &amp; Laser Cut</h3>
              <p>Finishing tepi sangat rapi, tidak mudah berbulu atau lepas setelah dicuci berkali-kali.</p>
            </div>

            <div className="nh-benefit-card">
              <div className="nh-b-icon">
                <HeartHandshake size={24} />
              </div>
              <h3>Garansi 100% Kepuasan</h3>
              <p>Jika ada cacat jahitan atau kain tidak sesuai, kami ganti baru tanpa ribet dan bebas biaya kirim.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Lookbook & Styling Ideas */}
      <section id="lookbook" className="nh-lookbook-section nh-wrap">
        <header className="nh-section-head">
          <div>
            <span className="nh-badge-tag">04 · INSPIRASI GAYA</span>
            <h2>Inspirasi tampilan<br />sehari-hari hingga <em>pesta.</em></h2>
          </div>
          <p className="nh-head-desc">
            Satu hijab untuk berbagai padanan outfit favoritmu.
          </p>
        </header>

        <div className="nh-lookbook-grid">
          <figure className="nh-lookbook-card">
            <img src="/hijab/hero-model.jpg" alt="Casual Chic Look" />
            <figcaption>
              <strong>Daily Casual Look</strong>
              <small>Pashmina Instan Ceruty Babydoll</small>
            </figcaption>
          </figure>

          <figure className="nh-lookbook-card">
            <img src="/hijab/pashmina-silk.jpg" alt="Formal & Party Look" />
            <figcaption>
              <strong>Party &amp; Evening Glam</strong>
              <small>Pashmina Silk Shimmer Champagne</small>
            </figcaption>
          </figure>

          <figure className="nh-lookbook-card">
            <img src="/hijab/voal-motif.jpg" alt="Office & Formal Look" />
            <figcaption>
              <strong>Office &amp; Formal Scarf</strong>
              <small>Segi Empat Voal Ultrafine Motif</small>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Section 05: Testimonials */}
      <section className="nh-reviews-section nh-wrap">
        <div className="nh-review-card">
          <span className="nh-quote-mark">“</span>
          <blockquote>
            Bergo pet dan pashmina silk dari NalaHijab beneran penyelamat. Bahannya dingin banget, nggak bikin pusing di kepala, dan pad-nya kokoh nggak gampang penyok meski masuk mesin cuci. Warnanya juga mewah-mewah!
          </blockquote>
          <div className="nh-reviewer">
            <div className="nh-rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
              ))}
            </div>
            <strong>Nabila Syahrini</strong>
            <small>Sahabat NalaHijab · Koleksi 12+ Hijab</small>
          </div>
        </div>
      </section>

      {/* Section 06: FAQ Accordion */}
      <section id="faq" className="nh-faq-section nh-wrap">
        <header className="nh-section-head">
          <div>
            <span className="nh-badge-tag">06 · PERTANYAAN UMUM</span>
            <h2>Semua yang ingin kamu<br /><em>ketahui seputar hijab kami.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaHijab%2C%20saya%20ada%20pertanyaan."
            target="_blank"
            rel="noreferrer"
            className="nh-link-more"
          >
            <span>Tanya Admin 24 Jam</span>
            <ArrowUpRight size={14} />
          </a>
        </header>

        <div className="nh-faq-list">
          <details open>
            <summary>
              <span>01</span> Bagaimana cara merawat hijab voal dan pashmina silk agar awet?<b>+</b>
            </summary>
            <p>
              Disarankan untuk mencuci dengan tangan menggunakan deterjen lembut, tidak diperas terlalu keras, dan disetrika dengan suhu sedang agar serat shimmer dan tekstur voal tetap halus dan berkilau.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Apakah warna produk sama persis dengan foto katalog?<b>+</b>
            </summary>
            <p>
              Tingkat kemiripan warna foto mencapai 95–98% dengan produk asli. Sedikit perbedaan bisa disebabkan oleh pencahayaan saat pemotretan dan pengaturan layar ponsel Anda.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Berapa lama waktu pengiriman pesanan?<b>+</b>
            </summary>
            <p>
              Pesanan yang masuk sebelum pukul 15.00 WIB dikirim pada hari yang sama. Estimasi tiba untuk Jabodetabek 1–2 hari kerja, dan luar kota 2–4 hari kerja.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech membuat website toko online hijab seperti ini untuk brand saya?<b>+</b>
            </summary>
            <p>
              Tentu! Ini adalah concept project dari Naltech Studio. Kami dapat membangun website e-commerce modest fashion, katalog digital, integrasi pembayaran otomatis, hingga checkout WhatsApp untuk brand busana muslim Anda.
            </p>
          </details>
        </div>
      </section>

      {/* Section 07: Final CTA Card */}
      <section className="nh-cta-section nh-wrap">
        <div className="nh-cta-card">
          <div className="nh-cta-glow" />
          <div className="nh-cta-inner">
            <span className="nh-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Ingin punya landing page brand hijab<br />
              seanggun <em>NalaHijab?</em>
            </h2>
            <p>
              Naltech membantu pemilik brand modest fashion, butik hijab, dan fashionpreneur membangun toko online berkelas dengan konversi penjualan tinggi.
            </p>
            <div className="nh-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20brand%20hijab%20seperti%20NalaHijab."
                target="_blank"
                rel="noreferrer"
                className="nh-btn-primary"
              >
                <ShoppingBag size={17} />
                <span>Konsultasi Project Brand Hijab</span>
                <ArrowUpRight size={17} />
              </a>
              <Link href="/" className="nh-btn-secondary">
                <span>Lihat Portfolio Naltech</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="nh-footer nh-wrap">
        <div className="nh-footer-grid">
          <div className="nh-footer-col brand">
            <a className="nh-logo" href="#top">
              <span className="nh-logo-icon">✦</span>
              <span className="nh-logo-text">
                NALA<strong>HIJAB</strong>
              </span>
            </a>
            <p>
              Koleksi hijab dan busana modest kontemporer. Concept project dibuat oleh Naltech Studio.
            </p>
          </div>

          <div className="nh-footer-col">
            <strong>Kategori Hijab</strong>
            <a href="#kategori">Bergo Pet Daily</a>
            <a href="#kategori">Bergo Non Pet</a>
            <a href="#kategori">Pashmina Instan</a>
            <a href="#kategori">Pashmina Silk Pesta</a>
            <a href="#kategori">Segi Empat Voal</a>
          </div>

          <div className="nh-footer-col">
            <strong>Layanan &amp; Info</strong>
            <a href="#material">Karakteristik Bahan</a>
            <a href="#lookbook">Lookbook Inspirasi</a>
            <a href="#faq">Garansi &amp; Pengembalian</a>
            <a href="#faq">Panduan Ukuran</a>
          </div>

          <div className="nh-footer-col">
            <strong>Studio Pengembang</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
          </div>
        </div>

        <div className="nh-footer-bottom">
          <small>
            © 2026 NalaHijab · Modest Wear Concept Website by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Bandung &amp; Jakarta, Indonesia</span>
        </div>
      </footer>
    </main>
  );
}
