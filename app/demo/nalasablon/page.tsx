import type { Metadata } from 'next';
import Link from 'next/link';
import './nalasablon.css';
import SablonInteractiveShowcase from './SablonInteractiveShowcase';
import {
  Printer,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Truck,
  Layers,
  Star,
  MessageCircle,
  Clock,
  Shirt,
  Coffee,
  Package,
  ShoppingBag,
  Flame,
  Award,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'NalaSablon — Jasa Sablon Kaos, Kemasan & Packaging Brand by Naltech',
  description: 'Jasa sablon presisi dan cetak kemasan custom terpercaya untuk brand lokal, cafe, clothing line, dan UMKM. Berpengalaman melayani 1.200+ brand di seluruh Indonesia.',
  openGraph: {
    title: 'NalaSablon — Jasa Sablon Kaos, Kemasan & Packaging Brand by Naltech',
    description: 'Jasa sablon presisi dan cetak kemasan custom terpercaya untuk brand lokal, cafe, clothing line, dan UMKM.',
    images: [new URL('/sablon/hero-workshop.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')],
  },
  twitter: {
    title: 'NalaSablon — Jasa Sablon Kaos, Kemasan & Packaging Brand by Naltech',
    description: 'Jasa sablon presisi dan cetak kemasan custom terpercaya untuk brand lokal, cafe, clothing line, dan UMKM.',
    images: [new URL('/sablon/hero-workshop.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')],
  },
};

export default function NalaSablonPage() {
  return (
    <main className="ns-page">
      {/* Top Header Promo Ribbon */}
      <div className="ns-promo-ribbon">
        <div className="ns-wrap ns-ribbon-content">
          <span className="ns-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO UMKM &amp; BRAND BARU</span>
          </span>
          <p>
            Diskon <strong>20%</strong> + Gratis Setting Layout &amp; Pembuatan Film Sablon untuk order min. 100 pcs kode: <code>NALAPRINT</code>
          </p>
          <a href="#calculator" className="ns-ribbon-link">
            <span>Hitung Estimasi Biaya</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="ns-demo-bar">
        <div className="ns-wrap ns-demo-inner">
          <Link href="/" className="ns-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="ns-header">
        <div className="ns-wrap ns-header-inner">
          <a className="ns-logo" href="#top">
            <span className="ns-logo-icon">
              <Printer size={20} />
            </span>
            <span className="ns-logo-text">
              NALA<strong>SABLON</strong>
            </span>
          </a>

          <nav className="ns-nav" aria-label="Navigasi Sablon">
            <a href="#portfolio">Katalog Kemasan</a>
            <a href="#testimoni">Testimoni Bergerak</a>
            <a href="#calculator">Kalkulator Harga</a>
            <a href="#keunggulan">Standar Mutu</a>
            <a href="#alur">Alur Pesan</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="ns-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20NalaSablon%2C%20saya%20ingin%20konsultasi%20sablon%20dan%20kemasan%20brand."
              target="_blank"
              rel="noreferrer"
              className="ns-btn-contact"
            >
              <MessageCircle size={15} />
              <span>Konsultasi Desain (Free)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="ns-hero">
        <div className="ns-wrap ns-hero-grid">
          <div className="ns-hero-copy">
            <div className="ns-hero-tag">
              <Flame size={14} className="ns-icon-orange" />
              <span>WORKSHOP SABLON &amp; KEMASAN BRAND TERPERCAYA</span>
            </div>

            <h1>
              Sablon presisi &amp; kemasan brand,<br />
              bikin bisnismu <em>naik kelas.</em>
            </h1>

            <p className="ns-hero-sub">
              Didukung pengalaman lebih dari 8 tahun memproduksi ribuan kemasan kopi, box packaging, tote bag, dan kaos distro dengan ketajaman warna maksimal, tinta awet tahan cuci, serta pengerjaan tepat waktu.
            </p>

            {/* Track Record Stats Grid */}
            <div className="ns-stats-grid">
              <div className="ns-stat-card">
                <strong>8+ Tahun</strong>
                <span>Pengalaman Cetak</span>
              </div>
              <div className="ns-stat-card">
                <strong>1.200+</strong>
                <span>Mitra Brand UMKM</span>
              </div>
              <div className="ns-stat-card">
                <strong>500k+ Pcs</strong>
                <span>Kemasan Tercetak</span>
              </div>
              <div className="ns-stat-card">
                <strong>99.8%</strong>
                <span>Akurasi Warna Panton</span>
              </div>
            </div>

            <div className="ns-hero-actions">
              <a href="#calculator" className="ns-btn-primary">
                <Printer size={17} />
                <span>Hitung Biaya &amp; Order Sekarang</span>
                <ArrowUpRight size={17} />
              </a>
              <a href="#portfolio" className="ns-btn-secondary">
                <span>Lihat Contoh Hasil Cetak</span>
              </a>
            </div>
          </div>

          {/* Hero Visual: Real Screen Printing Workshop Photography */}
          <div className="ns-hero-visual">
            <div className="ns-hero-frame">
              <img
                src="/sablon/hero-workshop.jpg"
                alt="Workshop Sablon Presisi NalaSablon"
              />
              <div className="ns-hero-floating-badge">
                <Award size={18} className="ns-icon-cyan" />
                <div>
                  <strong>Garansi 100% Retur</strong>
                  <small>Bebas biaya cetak ulang jika cacat</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Packaging Portfolio with Brand Names (Contoh Kemasan Bersablon & Nama Brand) */}
      <section id="portfolio" className="ns-portfolio-section ns-wrap">
        <header className="ns-section-head">
          <div>
            <span className="ns-badge-tag">01 · CONTOH KEMASAN &amp; MITRA BRAND</span>
            <h2>Portfolio kemasan bersablon<br />yang pernah <em>kami kerjakan.</em></h2>
          </div>
          <p className="ns-head-desc">
            Dari kedai kopi hits, brand streetwear ternama, hingga klinik kecantikan lokal.
          </p>
        </header>

        <div className="ns-portfolio-grid">
          {/* Packaging 1: Paper Cup Kopi */}
          <article className="ns-portfolio-card">
            <div className="ns-card-visual">
              <img src="/sablon/cup-packaging.jpg" alt="Sablon Cup Kopi Senja Coffee Lab" />
              <span className="ns-category-badge">
                <Coffee size={12} />
                <span>Gelas &amp; Paper Cup</span>
              </span>
            </div>
            <div className="ns-card-body">
              <div className="ns-brand-meta">
                <small>CLIENT PARTNER</small>
                <strong>Senja Coffee Lab &amp; Karsa Roastery</strong>
              </div>
              <h3>Sablon Paper Cup 8oz &amp; Cold Cup 16oz</h3>
              <p>Menggunakan tinta food grade anti-mengelupas, tahan minyak dan air es, tanpa meninggalkan bau menyengat.</p>
              <ul className="ns-spec-list">
                <li><CheckCircle2 size={13} /> Tinta Food Grade Sertifikasi FDA</li>
                <li><CheckCircle2 size={13} /> Cetak 1–3 Warna Keliling Gelas</li>
                <li><CheckCircle2 size={13} /> Kapasitas 10.000 pcs / 3 hari</li>
              </ul>
              <div className="ns-card-action">
                <a
                  href="https://wa.me/6281573550017?text=Halo%20NalaSablon%2C%20saya%20ingin%20pesan%20Sablon%20Cup%20seperti%20Senja%20Coffee."
                  target="_blank"
                  rel="noreferrer"
                  className="ns-btn-order-card"
                >
                  <span>Pesan Sablon Cup</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>

          {/* Packaging 2: Mailer Box Kraft */}
          <article className="ns-portfolio-card">
            <div className="ns-card-visual">
              <img src="/sablon/mailer-box.jpg" alt="Sablon Mailer Box Lumière Skincare" />
              <span className="ns-category-badge">
                <Package size={12} />
                <span>Mailer Box &amp; Paper Bag</span>
              </span>
            </div>
            <div className="ns-card-body">
              <div className="ns-brand-meta">
                <small>CLIENT PARTNER</small>
                <strong>Lumière Skincare &amp; Oak &amp; Pine</strong>
              </div>
              <h3>Sablon Corrugated Mailer Box &amp; Shopping Bag</h3>
              <p>Kardus die-cut kraft tebal dengan cetak sablon putih solid dan hitam pekat untuk kemasan unboxing eksklusif.</p>
              <ul className="ns-spec-list">
                <li><CheckCircle2 size={13} /> Bahan E-Flute / K150 Kokoh Tahan Banting</li>
                <li><CheckCircle2 size={13} /> Sablon Water-Based Eco Friendly</li>
                <li><CheckCircle2 size={13} /> Free Pisau Pond &amp; Setting Pola Box</li>
              </ul>
              <div className="ns-card-action">
                <a
                  href="https://wa.me/6281573550017?text=Halo%20NalaSablon%2C%20saya%20ingin%20pesan%20Sablon%20Box%20seperti%20Lumiere."
                  target="_blank"
                  rel="noreferrer"
                  className="ns-btn-order-card"
                >
                  <span>Pesan Sablon Box</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>

          {/* Packaging 3: Canvas Tote Bag */}
          <article className="ns-portfolio-card">
            <div className="ns-card-visual">
              <img src="/sablon/totebag-canvas.jpg" alt="Sablon Tote Bag NARA Atelier" />
              <span className="ns-category-badge">
                <ShoppingBag size={12} />
                <span>Tote Bag &amp; Merch</span>
              </span>
            </div>
            <div className="ns-card-body">
              <div className="ns-brand-meta">
                <small>CLIENT PARTNER</small>
                <strong>NARA Atelier &amp; Satu Ruang Studio</strong>
              </div>
              <h3>Sablon Canvas Tote Bag &amp; Souvenir Pouch</h3>
              <p>Kanvas natural 12oz tebal dengan sablon rubber elastis dan DTF full color tajam tanpa pecah saat ditarik.</p>
              <ul className="ns-spec-list">
                <li><CheckCircle2 size={13} /> Jahit Rapi Kuat Muat Laptop 15 Inch</li>
                <li><CheckCircle2 size={13} /> Sablon Rubber Karet &amp; DTF Presisi</li>
                <li><CheckCircle2 size={13} /> Pilihan Resleting / Kancing Magnet</li>
              </ul>
              <div className="ns-card-action">
                <a
                  href="https://wa.me/6281573550017?text=Halo%20NalaSablon%2C%20saya%20ingin%20pesan%20Sablon%20Tote%20Bag%20Kanvas."
                  target="_blank"
                  rel="noreferrer"
                  className="ns-btn-order-card"
                >
                  <span>Pesan Sablon Tote Bag</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>

          {/* Packaging 4: Kaos Distro & Apparel */}
          <article className="ns-portfolio-card">
            <div className="ns-card-visual">
              <img src="/sablon/hero-workshop.jpg" alt="Sablon Kaos Distro Urban Nomad" />
              <span className="ns-category-badge">
                <Shirt size={12} />
                <span>Kaos Distro &amp; Jersey</span>
              </span>
            </div>
            <div className="ns-card-body">
              <div className="ns-brand-meta">
                <small>CLIENT PARTNER</small>
                <strong>Urban Nomad &amp; Reka Studio</strong>
              </div>
              <h3>Sablon Plastisol High Density &amp; Discharge</h3>
              <p>Cetak kaos standar brand distro Bandung dengan efek timbul 3D tegas atau discharge menyerap serat kain.</p>
              <ul className="ns-spec-list">
                <li><CheckCircle2 size={13} /> Cotton Combed 24s/30s Reactive 100%</li>
                <li><CheckCircle2 size={13} /> Curing Oven Mesin Otomatis Anti-Luntur</li>
                <li><CheckCircle2 size={13} /> Free Label Sablon Leher &amp; Hangtag</li>
              </ul>
              <div className="ns-card-action">
                <a
                  href="https://wa.me/6281573550017?text=Halo%20NalaSablon%2C%20saya%20ingin%20pesan%20Sablon%20Kaos%20Distro."
                  target="_blank"
                  rel="noreferrer"
                  className="ns-btn-order-card"
                >
                  <span>Pesan Sablon Kaos</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Section 02: Moving Testimonials & Interactive Price Estimator */}
      <section id="testimoni" className="ns-marquee-section">
        <div className="ns-wrap">
          <header className="ns-section-head center">
            <span className="ns-badge-tag">02 · PENGALAMAN &amp; SUARA PELANGGAN</span>
            <h2>Testimoni bergerak dari<br />para <em>pemilik brand.</em></h2>
            <p>
              Simak pengalaman nyata ribuan pebisnis yang mempercayakan produksi kemasan dan apparel mereka bersama NalaSablon.
            </p>
          </header>
        </div>

        <SablonInteractiveShowcase />
      </section>

      {/* Section 03: Screen Printing Standards & Advantages */}
      <section id="keunggulan" className="ns-advantages-section ns-wrap">
        <header className="ns-section-head center">
          <span className="ns-badge-tag">03 · STANDAR WORKSHOP</span>
          <h2>Mengapa brand mempercayakan<br />produksinya pada <em>NalaSablon?</em></h2>
          <p>
            Kombinasi tenaga terampil, mesin modern, dan SOP quality control ketat di setiap meter cetak.
          </p>
        </header>

        <div className="ns-features-grid">
          <div className="ns-feature-item">
            <div className="ns-f-icon">
              <Printer size={24} />
            </div>
            <h3>Tinta Import Bersertifikasi</h3>
            <p>Menggunakan tinta Plastisol, Rubber, dan Waterbase berkualitas tinggi yang ramah lingkungan dan aman bagi kulit.</p>
          </div>

          <div className="ns-feature-item">
            <div className="ns-f-icon">
              <ShieldCheck size={24} />
            </div>
            <h3>Presisi Register 0.1 mm</h3>
            <p>Meja sablon presisi dan micro-adjuster memastikan sablon multi-warna tidak bergeser sedikit pun.</p>
          </div>

          <div className="ns-feature-item">
            <div className="ns-f-icon">
              <Clock size={24} />
            </div>
            <h3>Kapasitas 5.000 Pcs/Hari</h3>
            <p>Didukung mesin sablon semi-otomatis dan konveyor dryer untuk menangani deadline pesanan massal tepat waktu.</p>
          </div>

          <div className="ns-feature-item">
            <div className="ns-f-icon">
              <Award size={24} />
            </div>
            <h3>Garansi Ganti Baru 100%</h3>
            <p>Jika ditemukan cacat sablon atau salah ukuran, kami cetak ulang dan kirimkan kembali tanpa biaya tambahan.</p>
          </div>
        </div>
      </section>

      {/* Section 04: Order Workflow */}
      <section id="alur" className="ns-workflow-section ns-wrap">
        <header className="ns-section-head">
          <div>
            <span className="ns-badge-tag">04 · ALUR PEMESANAN</span>
            <h2>Mudah dan cepat,<br />dari <em>konsep hingga barang sampai.</em></h2>
          </div>
        </header>

        <div className="ns-workflow-steps">
          <div className="ns-step-card">
            <span className="ns-step-num">01</span>
            <h3>Kirim Desain &amp; Konsultasi</h3>
            <p>Kirimkan file logo (AI/PDF/PNG) via WhatsApp. Tim desain kami bantu cek resolusi dan mockup preview gratis.</p>
          </div>

          <div className="ns-step-card">
            <span className="ns-step-num">02</span>
            <h3>Pembuatan Film &amp; Proofing</h3>
            <p>Proses afdruk screen film beresolusi tinggi untuk memastikan detail garis dan titik warna ter-transfer sempurna.</p>
          </div>

          <div className="ns-step-card">
            <span className="ns-step-num">03</span>
            <h3>Produksi Sablon &amp; QC</h3>
            <p>Penyablonan teliti, pemanasan curing oven standar pabrik, dan inspeksi kualitas helai demi helai.</p>
          </div>

          <div className="ns-step-card">
            <span className="ns-step-num">04</span>
            <h3>Packing Rapi &amp; Kirim</h3>
            <p>Dikemas plastik tebal dan dikirim menggunakan ekspedisi cargo terpercaya ke seluruh Indonesia.</p>
          </div>
        </div>
      </section>

      {/* Section 05: FAQ */}
      <section id="faq" className="ns-faq-section ns-wrap">
        <header className="ns-section-head">
          <div>
            <span className="ns-badge-tag">05 · PERTANYAAN UMUM</span>
            <h2>Hal yang sering ditanyakan<br /><em>seputar jasa sablon kami.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaSablon%2C%20saya%20ada%20pertanyaan%20seputar%20sablon."
            target="_blank"
            rel="noreferrer"
            className="ns-link-more"
          >
            <span>Tanya Customer Service ↗</span>
          </a>
        </header>

        <div className="ns-faq-list">
          <details open>
            <summary>
              <span>01</span> Berapa minimal order untuk sablon kaos, cup, dan box packaging?<b>+</b>
            </summary>
            <p>
              Minimal order kaos dan tote bag adalah 24 pcs. Untuk paper cup / gelas plastik minimal 500 pcs, dan untuk mailer box minimal 100 pcs. Semakin banyak kuantitas, harga per pcs semakin murah.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Bagaimana jika saya belum punya desain siap cetak?<b>+</b>
            </summary>
            <p>
              Tenang! Tim desainer NalaSablon siap membantu setting tata letak, konversi file vektor, dan visualisasi 3D mockup secara gratis sebelum naik cetak massal.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah bisa request sample cetak fisik (sample proofing)?<b>+</b>
            </summary>
            <p>
              Bisa! Untuk pesanan di atas 500 pcs, kami dapat membuatkan 1 sample cetak fisik terlebih dahulu untuk Anda review ketajaman warna dan kualitas bahannya.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech Studio membuatkan website landing page untuk bisnis sablon saya?<b>+</b>
            </summary>
            <p>
              Sangat bisa! Ini adalah project demo dari Naltech Studio. Kami merancang website custom untuk vendor sablon, percetakan, dan workshop kreatif lengkap dengan kalkulator harga interaktif dan tombol order WhatsApp.
            </p>
          </details>
        </div>
      </section>

      {/* Section 06: Final CTA */}
      <section className="ns-cta-section ns-wrap">
        <div className="ns-cta-card">
          <div className="ns-cta-glow" />
          <div className="ns-cta-inner">
            <span className="ns-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Siap meningkatkan branding kemasan<br />
              bisnismu bersama <em>NalaSablon?</em>
            </h2>
            <p>
              Konsultasikan kebutuhan kemasan, apparel, atau souvenir bisnismu sekarang. Tim kami siap memberikan penawaran harga terbaik dan gratis proofing sample.
            </p>
            <div className="ns-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%20%26%20NalaSablon%2C%20saya%20ingin%20konsultasi%20pembuatan%20website%20atau%20jasa%20sablon."
                target="_blank"
                rel="noreferrer"
                className="ns-btn-primary"
              >
                <MessageCircle size={17} />
                <span>Hubungi WhatsApp Workshop</span>
                <ArrowUpRight size={17} />
              </a>
              <Link href="/" className="ns-btn-secondary">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ns-footer ns-wrap">
        <div className="ns-footer-grid">
          <div className="ns-footer-col brand">
            <a className="ns-logo" href="#top">
              <span className="ns-logo-icon">
                <Printer size={18} />
              </span>
              <span className="ns-logo-text">
                NALA<strong>SABLON</strong>
              </span>
            </a>
            <p>
              Workshop sablon presisi dan cetak kemasan brand terpercaya. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="ns-footer-col">
            <strong>Layanan Sablon</strong>
            <a href="#portfolio">Sablon Kaos Distro</a>
            <a href="#portfolio">Sablon Paper Cup Kopi</a>
            <a href="#portfolio">Sablon Mailer Box</a>
            <a href="#portfolio">Sablon Canvas Tote Bag</a>
            <a href="#portfolio">Sablon Standing Pouch</a>
          </div>

          <div className="ns-footer-col">
            <strong>Katalog &amp; Alat</strong>
            <a href="#calculator">Kalkulator Biaya Cetak</a>
            <a href="#testimoni">Testimoni Klien</a>
            <a href="#keunggulan">Standar Tinta &amp; Bahan</a>
            <a href="#alur">Panduan Order</a>
          </div>

          <div className="ns-footer-col">
            <strong>Pengembang Studio</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
          </div>
        </div>

        <div className="ns-footer-bottom">
          <small>
            © 2026 NalaSablon · Screen Printing &amp; Custom Packaging Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Bandung &amp; Jakarta, Indonesia</span>
        </div>
      </footer>
    </main>
  );
}
