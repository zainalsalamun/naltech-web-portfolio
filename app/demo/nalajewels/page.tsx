import type { Metadata } from 'next';
import Link from 'next/link';
import './nalajewels.css';
import JewelryModelShowcase from './JewelryModelShowcase';
import {
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Gem,
  Award,
  Star,
  MessageCircle,
  Heart,
  Scale,
  Ruler,
  BadgeCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'NalaJewels — Perhiasan Emas & Berlian Anak & Dewasa by Naltech',
  description: 'Koleksi perhiasan emas dan berlian asli bersertifikat untuk anak-anak dan dewasa. Dilengkapi visualisasi nyata pada model untuk kejelasan ukuran dan proporsi.',
  alternates: { canonical: '/demo/nalajewels' },
  openGraph: {
    title: 'NalaJewels — Perhiasan Emas & Berlian Anak & Dewasa by Naltech',
    description: 'Koleksi perhiasan emas dan berlian asli bersertifikat untuk anak-anak dan dewasa dengan panduan foto pada model.',
    images: [new URL('/jewelry/hero-mother-child.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id')],
  },
  twitter: {
    title: 'NalaJewels — Perhiasan Emas & Berlian Anak & Dewasa by Naltech',
    description: 'Koleksi perhiasan emas dan berlian asli bersertifikat untuk anak-anak dan dewasa dengan panduan foto pada model.',
    images: [new URL('/jewelry/hero-mother-child.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id')],
  },
};

export default function NalaJewelsPage() {
  return (
    <main className="nj-page">
      {/* Top Header Promo Ribbon */}
      <div className="nj-promo-ribbon">
        <div className="nj-wrap nj-ribbon-content">
          <span className="nj-ribbon-badge">
            <Sparkles size={13} />
            <span>SPECIAL OFFER &amp; GIFT</span>
          </span>
          <p>
            Gratis Grafir Inisial Nama + Exclusive Velvet Jewelry Box untuk setiap pembelian min. Rp2.500.000 dengan kode <code>NALABLING</code>
          </p>
          <a href="#koleksi" className="nj-ribbon-link">
            <span>Pilih Perhiasan</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="nj-demo-bar">
        <div className="nj-wrap nj-demo-inner">
          <Link href="/" className="nj-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="nj-header">
        <div className="nj-wrap nj-header-inner">
          <a className="nj-logo" href="#top">
            <span className="nj-logo-icon">
              <Gem size={20} />
            </span>
            <span className="nj-logo-text">
              NALA<strong>JEWELS</strong>
            </span>
          </a>

          <nav className="nj-nav" aria-label="Navigasi Perhiasan">
            <a href="#koleksi">Koleksi Pada Model</a>
            <a href="#panduan">Panduan Proporsi</a>
            <a href="#keaslian">Standar Emas &amp; Sertifikat</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#faq">Bantuan</a>
          </nav>

          <div className="nj-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20NalaJewels%2C%20saya%20ingin%20konsultasi%20pilihan%20perhiasan%20anak%20atau%20dewasa."
              target="_blank"
              rel="noreferrer"
              className="nj-btn-consult"
            >
              <MessageCircle size={15} />
              <span>Konsultasi Perhiasan</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="nj-hero">
        <div className="nj-wrap nj-hero-grid">
          <div className="nj-hero-copy">
            <div className="nj-hero-tag">
              <Sparkles size={14} className="nj-icon-gold" />
              <span>FINE GOLD &amp; DIAMOND ATELIER</span>
            </div>

            <h1>
              Kilau abadi untuk setiap generasi,<br />
              anggun di Ibu, <em>manis di si kecil.</em>
            </h1>

            <p className="nj-hero-sub">
              Setiap perhiasan difoto langsung saat dikenakan pada model nyata anak-anak dan wanita dewasa, memberikan gambaran visual yang jelas mengenai skala ukuran, lekuk rantai, dan keindahan proporsinya.
            </p>

            {/* Quick Trust Pillars */}
            <div className="nj-hero-trust">
              <div className="nj-trust-item">
                <BadgeCheck size={18} />
                <span>100% Emas Asli Kadar 750/700</span>
              </div>
              <div className="nj-trust-item">
                <Heart size={18} />
                <span>Hypoallergenic Aman Kulit Bayi</span>
              </div>
              <div className="nj-trust-item">
                <Award size={18} />
                <span>Garansi Cuci &amp; Buyback Resmi</span>
              </div>
            </div>

            <div className="nj-hero-actions">
              <a href="#koleksi" className="nj-btn-primary">
                <ShoppingBag size={17} />
                <span>Lihat Koleksi Pada Model</span>
                <ArrowUpRight size={17} />
              </a>
              <a href="#panduan" className="nj-btn-secondary">
                <Ruler size={16} />
                <span>Panduan Ukuran Visual</span>
              </a>
            </div>
          </div>

          {/* Hero Visual: Mother & Child Wearing Matching Fine Jewelry */}
          <div className="nj-hero-visual">
            <div className="nj-hero-arch">
              <img
                src="/jewelry/hero-mother-child.jpg"
                alt="Ibu dan Anak Mengenakan Perhiasan NalaJewels"
              />
              <div className="nj-hero-floating-card">
                <span className="nj-card-label">SIGNATURE COLLECTION</span>
                <strong>Mother &amp; Daughter Matching Set</strong>
                <small>Emas 18K Bersertifikat · Rantai Halus Anti Gatal</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: On-Model Showcase Component */}
      <section id="koleksi" className="nj-catalog-section nj-wrap">
        <header className="nj-section-head center">
          <span className="nj-badge-tag">01 · KOLEKSI PERHIASAN PADA MODEL</span>
          <h2>Lihat wujud nyata &amp; proporsinya<br />di <em>setiap pemakaian.</em></h2>
          <p>
            Memilih perhiasan jadi lebih mudah dan akurat karena Anda dapat melihat langsung jatuhnya kalung, ukuran anting, dan kilau cincin di tubuh model.
          </p>
        </header>

        <JewelryModelShowcase />
      </section>

      {/* Section 02: Visual Proportion Guide (Mengapa Foto Model Lebih Efektif) */}
      <section id="panduan" className="nj-guide-section">
        <div className="nj-wrap">
          <header className="nj-section-head">
            <div>
              <span className="nj-badge-tag">02 · PANDUAN UKURAN VISUAL</span>
              <h2>Pahami ukuran perhiasan<br />tanpa rasa <em>ragu.</em></h2>
            </div>
            <p className="nj-head-desc">
              Panduan visual agar Anda tidak salah memilih panjang kalung atau diameter anting untuk diri sendiri maupun buah hati.
            </p>
          </header>

          <div className="nj-guide-grid">
            {/* Guide Card 1: Kalung Dewasa */}
            <article className="nj-guide-card">
              <div className="nj-guide-visual">
                <img src="/jewelry/adult-model-necklace.jpg" alt="Panduan Kalung Dewasa" />
                <span className="nj-guide-chip">Panjang 42 cm – 45 cm</span>
              </div>
              <div className="nj-guide-content">
                <h3>Jatuh Kalung di Tulang Selangka</h3>
                <p>
                  Ukuran 42 cm jatuh tepat di atas tulang leher (collarbone) wanita dewasa, ideal untuk kemeja V-neck atau dress formal.
                </p>
              </div>
            </article>

            {/* Guide Card 2: Anting Anak & Bayi */}
            <article className="nj-guide-card">
              <div className="nj-guide-visual">
                <img src="/jewelry/kids-model-earrings.jpg" alt="Panduan Anting Anak" />
                <span className="nj-guide-chip">Diameter 3 mm – 5 mm</span>
              </div>
              <div className="nj-guide-content">
                <h3>Proporsi Aman di Daun Telinga Bayi</h3>
                <p>
                  Dirancang sangat ringan (0.6 - 1.0 gr) dengan tutup toge membulat sehingga tidak mudah tersangkut pakaian atau melukai telinga.
                </p>
              </div>
            </article>

            {/* Guide Card 3: Cincin & Gelang Tangan */}
            <article className="nj-guide-card">
              <div className="nj-guide-visual">
                <img src="/jewelry/ring-wrist-stack.jpg" alt="Panduan Cincin dan Gelang" />
                <span className="nj-guide-chip">Size 10–18 &amp; Rantai 16–18 cm</span>
              </div>
              <div className="nj-guide-content">
                <h3>Penumpukan Cincin &amp; Gelang Harmonis</h3>
                <p>
                  Tampilan stack cincin batu permata dan gelang tennis yang seimbang di pergelangan tangan wanita tanpa terlihat padat.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 03: Gold Purity & Hypoallergenic Standards */}
      <section id="keaslian" className="nj-standards-section nj-wrap">
        <header className="nj-section-head center">
          <span className="nj-badge-tag">03 · STANDAR MUTU &amp; KEASLIAN</span>
          <h2>Komitmen kualitas &amp; keamanan<br />tanpa <em>kompromi.</em></h2>
          <p>
            Perhiasan yang tidak hanya indah dipandang, namun juga aman untuk kulit paling sensitif sekalipun.
          </p>
        </header>

        <div className="nj-standards-grid">
          <div className="nj-standard-item">
            <div className="nj-std-icon">
              <BadgeCheck size={24} />
            </div>
            <h3>Emas Asli Kadar 750 &amp; 700</h3>
            <p>Kadar emas 18K (75%) dan 17K (70%) standar internasional yang kuat, berkilau awet, dan tidak mudah berubah warna.</p>
          </div>

          <div className="nj-standard-item">
            <div className="nj-std-icon">
              <Heart size={24} />
            </div>
            <h3>100% Hypoallergenic (Bebas Nikel)</h3>
            <p>Diformulasikan khusus bebas dari kandungan nikel dan logam berat berbahaya, dijamin tidak membuat kulit bayi merah atau gatal.</p>
          </div>

          <div className="nj-standard-item">
            <div className="nj-std-icon">
              <ShieldCheck size={24} />
            </div>
            <h3>Sertifikat Resmi &amp; Invoice Digital</h3>
            <p>Setiap pembelian disertai nota resmi dan sertifikat keaslian kadar emas serta rincian karat berlian.</p>
          </div>

          <div className="nj-standard-item">
            <div className="nj-std-icon">
              <Scale size={24} />
            </div>
            <h3>Jaminan Buyback Transparan</h3>
            <p>Dapat dijual kembali kapan saja dengan potongan nilai yang jelas dan transparan mengikuti harga pasar emas harian.</p>
          </div>
        </div>
      </section>

      {/* Section 04: Testimonials */}
      <section id="testimoni" className="nj-reviews-section nj-wrap">
        <div className="nj-review-card">
          <span className="nj-quote-mark">“</span>
          <blockquote>
            Foto modelnya ngebantu banget! Awalnya ragu beli anting buat anak 2 tahun takut kegedean, tapi pas liat foto model anaknya jadi yakin ukurannya pas banget. Barangnya pas nyampe beneran cantik, emasnya kinclong, dan telinga anak saya nggak merah sama sekali!
          </blockquote>
          <div className="nj-reviewer">
            <div className="nj-rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
              ))}
            </div>
            <strong>Citra Maharani</strong>
            <small>Ibu dari Alana (2 tahun) · Pembeli Little Clover Studs</small>
          </div>
        </div>
      </section>

      {/* Section 05: FAQ */}
      <section id="faq" className="nj-faq-section nj-wrap">
        <header className="nj-section-head">
          <div>
            <span className="nj-badge-tag">05 · PERTANYAAN UMUM</span>
            <h2>Hal yang sering ditanyakan<br /><em>seputar perhiasan NalaJewels.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaJewels%2C%20saya%20ingin%20tanya%20seputar%20perhiasan."
            target="_blank"
            rel="noreferrer"
            className="nj-link-more"
          >
            <span>Tanya Customer Care ↗</span>
          </a>
        </header>

        <div className="nj-faq-list">
          <details open>
            <summary>
              <span>01</span> Apakah perhiasan anak aman dipakai mandi dan tidur setiap hari?<b>+</b>
            </summary>
            <p>
              Sangat aman. Seluruh perhiasan anak kami dibuat dari emas murni 17K/18K anti karat dengan finishing membulat dan kunci toge ulir khusus yang tidak akan menusuk atau membuat si kecil tidak nyaman saat tidur.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Bagaimana jika ukuran cincin atau panjang kalung tidak pas saat diterima?<b>+</b>
            </summary>
            <p>
              Kami menyediakan fasilitas Free Resizing 1x dalam 14 hari setelah barang diterima. Anda cukup mengirimkan kembali produk ke workshop kami untuk disesuaikan ukurannya.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah pengiriman aman dan diasuransikan?<b>+</b>
            </summary>
            <p>
              Seluruh pengiriman perhiasan NalaJewels dikemas dalam kotak segel ganda tanpa label mencolok dan diasuransikan 100% hingga sampai ke tangan Anda dengan selamat.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech membuatkan website toko perhiasan online seperti ini untuk brand saya?<b>+</b>
            </summary>
            <p>
              Tentu saja! Ini adalah concept demo project dari Naltech Studio. Kami merancang website perhiasan mewah dengan integrasi katalog model, sertifikat digital, dan alur checkout WhatsApp/Payment Gateway untuk brand jewelry Anda.
            </p>
          </details>
        </div>
      </section>

      {/* Section 06: Final CTA */}
      <section className="nj-cta-section nj-wrap">
        <div className="nj-cta-card">
          <div className="nj-cta-glow" />
          <div className="nj-cta-inner">
            <span className="nj-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Ingin memiliki website perhiasan mewah<br />
              sekelas <em>NalaJewels?</em>
            </h2>
            <p>
              Naltech membantu brand perhiasan, toko emas, dan luxury boutique menghadirkan pengalaman belanja visual yang meyakinkan konsumen dan meningkatkan penjualan.
            </p>
            <div className="nj-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20brand%20perhiasan%20seperti%20NalaJewels."
                target="_blank"
                rel="noreferrer"
                className="nj-btn-primary"
              >
                <ShoppingBag size={17} />
                <span>Konsultasi Project Brand Perhiasan</span>
                <ArrowUpRight size={17} />
              </a>
              <Link href="/" className="nj-btn-secondary">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="nj-footer nj-wrap">
        <div className="nj-footer-grid">
          <div className="nj-footer-col brand">
            <a className="nj-logo" href="#top">
              <span className="nj-logo-icon">
                <Gem size={18} />
              </span>
              <span className="nj-logo-text">
                NALA<strong>JEWELS</strong>
              </span>
            </a>
            <p>
              Koleksi perhiasan emas dan berlian asli bersertifikat untuk anak &amp; dewasa. Concept project engineered by Naltech Studio.
            </p>
          </div>

          <div className="nj-footer-col">
            <strong>Koleksi Perhiasan</strong>
            <a href="#koleksi">Perhiasan Anak &amp; Bayi</a>
            <a href="#koleksi">Perhiasan Dewasa &amp; Ibu</a>
            <a href="#koleksi">Mother &amp; Daughter Sets</a>
            <a href="#koleksi">Cincin Berlian Solitaire</a>
            <a href="#koleksi">Anting Toge Anti Alergi</a>
          </div>

          <div className="nj-footer-col">
            <strong>Layanan &amp; Garansi</strong>
            <a href="#panduan">Panduan Ukuran Visual</a>
            <a href="#keaslian">Sertifikat Keaslian Emas</a>
            <a href="#keaslian">Garansi Buyback &amp; Cuci</a>
            <a href="#faq">Asuransi Pengiriman</a>
          </div>

          <div className="nj-footer-col">
            <strong>Studio Pengembang</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
          </div>
        </div>

        <div className="nj-footer-bottom">
          <small>
            © 2026 NalaJewels · Fine Jewelry Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Bandung &amp; Jakarta, Indonesia</span>
        </div>
      </footer>
    </main>
  );
}
