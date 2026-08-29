import type { Metadata } from 'next';
import Link from 'next/link';
import './lensa-cerita.css';
import PhotoBookingWidget from './PhotoBookingWidget';
import PhotoPortfolioGallery from './PhotoPortfolioGallery';
import {
  Camera,
  Sparkles,
  GraduationCap,
  Heart,
  Package,
  Clock,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Award,
  Video,
  Image as ImageIcon,
  Layers,
  Check,
  Aperture,
  Sliders,
  Users,
  Eye,
  Box,
  Crown,
  Sparkle,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'Lensa Cerita Photography — Jasa Fotografer Wisuda, Wedding, & Produk UMKM by Naltech',
  description: 'Layanan fotografi profesional untuk wisuda, pernikahan, dan produk komersial UMKM. Hasil foto berkarakter, arahan pose natural, dan sistem booking online transparan.',
  alternates: {
    canonical: '/demo/lensa-cerita',
  },
  openGraph: {
    title: 'Lensa Cerita Photography — Mengabadikan Momen, Menyampaikan Cerita',
    description: 'Fotografi profesional untuk wisuda, pernikahan, dan produk UMKM bersama Lensa Cerita Studio.',
    images: [{ url: `${siteUrl}/photo/hero-photo.jpg`, width: 1200, height: 630, alt: 'Lensa Cerita Photography' }],
  },
  twitter: {
    title: 'Lensa Cerita Photography — Mengabadikan Momen, Menyampaikan Cerita',
    description: 'Fotografi profesional untuk wisuda, pernikahan, dan produk UMKM bersama Lensa Cerita Studio.',
    images: [`${siteUrl}/photo/hero-photo.jpg`],
  },
};

const photoStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lensa Cerita Photography (Concept by Naltech)',
    description: 'Studio fotografi profesional untuk wisuda, pernikahan, dan produk UMKM dengan sistem booking terintegrasi karya Naltech Studio.',
    url: `${siteUrl}/demo/lensa-cerita`,
    image: `${siteUrl}/photo/hero-photo.jpg`,
    priceRange: 'Rp350.000 - Rp20.000.000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta Selatan',
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
        name: 'Lensa Cerita Photography',
        item: `${siteUrl}/demo/lensa-cerita`,
      },
    ],
  },
];

const pillarsList = [
  {
    title: 'Graduation Photography',
    icon: GraduationCap,
    desc: 'Rayakan momen kelulusan dengan pose natural dan hangat. Melayani sesi solo, bersama orang tua tercinta, pasangan, hingga foto rombongan satu geng wisuda.',
    features: ['Arahan pose santai & anti-kaku', 'Pilihan outdoor kampus & studio', 'Semua file original diberikan', 'Preview hasil edit 1–2 hari kerja'],
  },
  {
    title: 'Wedding & Prewedding',
    icon: Heart,
    desc: 'Dokumentasi emosional momen sakral lamaran, akad, pemberkatan, dan resepsi. Mengabadikan tatapan penuh cinta dan kebahagiaan keluarga besar.',
    features: ['Tim foto & video cinematic 4K', 'Candid natural & momen emosional', 'Eksklusif album cetak premium', 'Penyimpanan cloud drive terenkripsi'],
  },
  {
    title: 'Product & Commercial UMKM',
    icon: Package,
    desc: 'Tingkatkan omzet penjualan online dengan visual produk berkualitas tinggi. Dari foto katalog bersih marketplace hingga foto tematik lifestyle media sosial.',
    features: ['Katalog latar putih marketplace', 'Foto konsep lifestyle & props studio', 'Foto menu kuliner menggugah selera', 'Paket langganan konten bulanan'],
  },
];

const professionalGears = [
  { name: 'Sony Alpha A7 IV & A7R V', spec: 'Full-frame 33MP & 61MP sensor untuk ketajaman detail sempurna & warna natural' },
  { name: 'Sony G-Master Lens Kit', spec: 'FE 24-70mm f/2.8 GM II, FE 85mm f/1.4 GM, & FE 35mm f/1.4 GM (Bokeh creamy)' },
  { name: 'Godox Wireless Studio Lights', spec: 'AD400Pro & AD200Pro dengan softbox parabolic untuk pencahayaan lembut merata' },
  { name: 'DJI Ronin RS3 & Drone 4K', spec: 'Stabilizer cinematic gimbal dan aerial drone coverage untuk video pernikahan' },
];

const subscriptionTiers = [
  {
    name: 'Basic Content Retainer',
    frequency: '1 Sesi / Bulan',
    output: '20 Foto Edit Katalog & Lifestyle',
    price: 'Rp1.500.000',
    period: '/ Bulan',
    desc: 'Cocok untuk toko online yang meluncurkan produk baru setiap bulan.',
    perks: ['1 sesi photoshoot studio 2 jam', '20 foto resolusi tinggi', 'Koreksi warna standar katalog', 'Format siap upload feed & marketplace'],
    highlight: false,
  },
  {
    name: 'Growth Content Retainer',
    frequency: '2 Sesi / Bulan',
    output: '40 Foto Edit + 4 Video Reels',
    price: 'Rp3.200.000',
    period: '/ Bulan',
    desc: 'Pilihan terfavorit brand fashion & kafe untuk menjaga keaktifan Instagram.',
    perks: ['2 sesi photoshoot per bulan', '40 foto konsep lifestyle', '4 video pendek Reels / TikTok (60s)', 'Diskusi moodboard & styling properti'],
    highlight: true,
  },
  {
    name: 'Brand Campaign Retainer',
    frequency: '4 Sesi / Bulan (Weekly)',
    output: '80 Foto Edit + 8 Video Reels',
    price: 'Rp6.000.000',
    period: '/ Bulan',
    desc: 'Manajemen visual penuh untuk brand yang aktif beriklan di Meta & TikTok Ads.',
    perks: ['Photoshoot mingguan terjadwal', '80 foto edit katalog & editorial', '8 video Reels/TikTok cinematic', 'Prioritas pengiriman kilat 48 jam'],
    highlight: false,
  },
];

const workflowSteps = [
  { step: '01', title: 'Konsultasi Konsep', desc: 'Mendiskusikan kebutuhan sesi, pemilihan outfit, moodboard warna, dan lokasi foto yang diinginkan.' },
  { step: '02', title: 'Sesi Pemotretan', desc: 'Pemotretan berlangsung santai dan menyenangkan dengan arahan pose yang natural dari fotografer.' },
  { step: '03', title: 'Seleksi Galeri Digital', desc: 'Klien dapat memilih foto favorit melalui tautan galeri digital online yang praktis dan privat.' },
  { step: '04', title: 'Editing & Color Grading', desc: 'Proses penyesuaian pencahayaan, skin retouch halus, dan pewarnaan sesuai ciri khas Lensa Cerita.' },
  { step: '05', title: 'Pengiriman Hasil Final', desc: 'Seluruh foto resolusi penuh dikirim via cloud storage aman, flash drive eksklusif, atau album cetak.' },
];

export default function LensaCeritaPhotographyPage() {
  return (
    <main className="lcp-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(photoStructuredData) }}
      />

      {/* Top Promo Ribbon */}
      <div className="lcp-promo-ribbon">
        <div className="lcp-wrap lcp-ribbon-content">
          <span className="lcp-ribbon-badge">
            <Sparkles size={13} />
            <span>EARLY BIRD PROMO 2026</span>
          </span>
          <p>
            Diskon <strong>15% Sesi Foto Wisuda Rombongan &amp; Paket Produk UMKM</strong>. Gunakan kode: <code>LENSA15</code>
          </p>
          <a href="#booking" className="lcp-ribbon-link">
            <span>Booking Sesi Foto</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="lcp-demo-bar">
        <div className="lcp-wrap lcp-demo-inner">
          <Link href="/" className="lcp-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Header */}
      <header className="lcp-header">
        <div className="lcp-wrap lcp-header-inner">
          <a className="lcp-logo" href="#top">
            <span className="lcp-logo-icon">
              <Camera size={20} />
            </span>
            <span className="lcp-logo-text">
              LENSA<strong>CERITA</strong> <small>PHOTOGRAPHY STUDIO</small>
            </span>
          </a>

          <nav className="lcp-nav" aria-label="Navigasi Lensa Cerita">
            <a href="#layanan">Layanan</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#booking">Booking Sesi</a>
            <a href="#gear">Tim &amp; Gear</a>
            <a href="#alur">Alur Kerja</a>
            <a href="#langganan">Langganan UMKM</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="lcp-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20Lensa%20Cerita%20Photography%2C%20saya%20mau%20tanya%20jadwal%20dan%20paket%20foto."
              target="_blank"
              rel="noreferrer"
              className="lcp-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Chat Studio</span>
            </a>
            <a href="#booking" className="lcp-btn-header-cta">
              <Camera size={15} />
              <span>Booking Sesi Foto</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="lcp-hero">
        <div className="lcp-wrap">
          <div className="lcp-hero-grid">
            <div className="lcp-hero-copy">
              <div className="lcp-hero-tag">
                <Aperture size={14} className="lcp-icon-gold" />
                <span>MENGABADIKAN MOMEN, MENYAMPAIKAN CERITA</span>
              </div>

              <h1>
                Setiap Momen Layak Diceritakan dengan Indah
              </h1>

              <p className="lcp-hero-sub">
                Layanan fotografi profesional untuk wisuda, pernikahan, dan produk UMKM. Pilih paket, tentukan jadwal, dan abadikan cerita terbaik Anda bersama kami.
              </p>

              <div className="lcp-hero-actions">
                <a href="#booking" className="lcp-btn-hero-primary">
                  <Camera size={17} />
                  <span>Booking Sesi Foto Sekarang</span>
                  <ArrowUpRight size={17} />
                </a>

                <a href="#portofolio" className="lcp-btn-hero-secondary">
                  <span>Lihat Portofolio Karya</span>
                </a>
              </div>

              {/* Operating Info Badges */}
              <div className="lcp-hero-badges-row">
                <div className="lcp-badge-item">
                  <Award size={15} className="lcp-icon-gold" />
                  <span>500+ Sesi Pemotretan Sukses</span>
                </div>
                <div className="lcp-badge-item">
                  <Sliders size={15} className="lcp-icon-gold" />
                  <span>Konsistensi Color Grading</span>
                </div>
                <div className="lcp-badge-item">
                  <ShieldCheck size={15} className="lcp-icon-gold" />
                  <span>Galeri Cloud Drive Privat</span>
                </div>
              </div>
            </div>

            <div className="lcp-hero-visual-frame">
              <img src="/photo/hero-photo.jpg" alt="Fotografer Profesional Lensa Cerita Studio" />
              <div className="lcp-hero-floating-glass">
                <div className="lcp-floating-header">
                  <Sparkle size={18} className="lcp-icon-gold" />
                  <div>
                    <strong>Zero Awkward Guarantee</strong>
                    <small>Panduan pose ramah &amp; arahan ekspresi santai</small>
                  </div>
                </div>
                <div className="lcp-pills-row">
                  <span className="lcp-pill">Wisuda Campus</span>
                  <span className="lcp-pill">Wedding &amp; Prewed</span>
                  <span className="lcp-pill">Product Commercial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Tiga Pilar Layanan Utama */}
      <section id="layanan" className="lcp-pillars-section lcp-wrap">
        <header className="lcp-section-head center">
          <span className="lcp-badge-tag">PILIHAN LAYANAN FOTOGRAFI</span>
          <h2>Kategori pemotretan yang disesuaikan<br /><em>dengan kebutuhan visual Anda.</em></h2>
          <p>
            Setiap kategori ditangani dengan peralatan khusus dan pendekatan konsep yang tepat sasaran.
          </p>
        </header>

        <div className="lcp-pillars-grid">
          {pillarsList.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="lcp-pillar-card">
                <div className="lcp-pillar-icon-box">
                  <Icon size={26} className="lcp-icon-gold" />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
                <ul className="lcp-pillar-features">
                  {pillar.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={14} className="lcp-icon-gold" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a href="#booking" className="lcp-btn-pillar-select">
                  <span>Pilih Layanan Ini</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 02: Filterable Portfolio Gallery */}
      <section id="portofolio" className="lcp-portfolio-section">
        <div className="lcp-wrap">
          <header className="lcp-section-head center">
            <span className="lcp-badge-tag">PORTOFOLIO &amp; HASIL KARYA</span>
            <h2>Kumpulan cerita yang telah kami abadikan<br /><em>dalam jepretan lensa berkualitas tinggi.</em></h2>
            <p>
              Gunakan filter kategori di bawah ini untuk melihat contoh foto wisuda, momen pernikahan, dan katalog produk.
            </p>
          </header>

          <PhotoPortfolioGallery />
        </div>
      </section>

      {/* Section 03: Booking Widget On-Demand */}
      <section id="booking" className="lcp-booking-engine-section lcp-wrap">
        <PhotoBookingWidget />
      </section>

      {/* Section 04: Profil Tim Fotografer & Gear Showcase */}
      <section id="gear" className="lcp-gear-section">
        <div className="lcp-wrap">
          <div className="lcp-gear-grid">
            <div className="lcp-gear-info">
              <span className="lcp-badge-tag">PRO EQUIPMENT &amp; PHOTOGRAPHER</span>
              <h2>Di balik setiap foto indah ada<br /><em>peralatan profesional &amp; mata berpengalaman.</em></h2>
              <p>
                Kami tidak berkompromi soal kualitas teknis. Dari kamera full-frame bersensor tinggi hingga pencahayaan studio berstandar komersial untuk memastikan warna produk akurat dan warna kulit tampak natural.
              </p>

              <div className="lcp-gears-list">
                {professionalGears.map((gear, idx) => (
                  <div key={idx} className="lcp-gear-item">
                    <Aperture size={18} className="lcp-icon-gold" />
                    <div>
                      <strong>{gear.name}</strong>
                      <small>{gear.spec}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lcp-team-photo-frame">
              <img src="/photo/team-photographer.jpg" alt="Fotografer Tim Lensa Cerita Studio" />
              <div className="lcp-team-floating-badge">
                <strong>Dimas Setiawan</strong>
                <span>Lead Photographer &amp; Visual Director</span>
                <small>8+ Tahun Pengalaman Fotografi Komersial &amp; Wedding</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Alur 5 Tahapan Pengerjaan */}
      <section id="alur" className="lcp-workflow-section lcp-wrap">
        <header className="lcp-section-head center">
          <span className="lcp-badge-tag">ALUR KERJA TRANSPARAN</span>
          <h2>Proses pemesanan dan pengiriman foto<br /><em>yang rapi dan tepat waktu.</em></h2>
          <p>
            Anda selalu mengetahui progres foto Anda di setiap tahapan pengerjaan.
          </p>
        </header>

        <div className="lcp-workflow-grid">
          {workflowSteps.map((ws, idx) => (
            <div key={idx} className="lcp-step-card">
              <span className="lcp-step-number">{ws.step}</span>
              <h4>{ws.title}</h4>
              <p>{ws.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 06: Paket Berlangganan UMKM (Content Retainer) */}
      <section id="langganan" className="lcp-subscription-section">
        <div className="lcp-wrap">
          <header className="lcp-section-head center">
            <span className="lcp-badge-tag">PROGRAM LANGGANAN UMKM &amp; BRAND</span>
            <h2>Pasokan konten visual rutin bulanan<br /><em>untuk media sosial &amp; toko online Anda.</em></h2>
            <p>
              Hemat waktu produksi dan dapatkan konten foto/video konsisten untuk meningkatkan kepercayaan pembeli.
            </p>
          </header>

          <div className="lcp-subscription-grid">
            {subscriptionTiers.map((tier, idx) => (
              <div key={idx} className={`lcp-tier-card ${tier.highlight ? 'highlight' : ''}`}>
                {tier.highlight && <span className="lcp-tier-popular-badge">Paling Populer</span>}
                <div className="lcp-tier-head">
                  <h3>{tier.name}</h3>
                  <div className="lcp-tier-price">
                    <strong>{tier.price}</strong>
                    <small>{tier.period}</small>
                  </div>
                  <span className="lcp-tier-output-badge">{tier.output}</span>
                  <p className="lcp-tier-desc">{tier.desc}</p>
                </div>

                <ul className="lcp-tier-perks">
                  {tier.perks.map((perk, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={15} className="lcp-icon-gold" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6281573550017?text=Halo%20Lensa%20Cerita%2C%20saya%20tertarik%20dengan%20Paket%20Langganan%20${encodeURIComponent(tier.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="lcp-btn-join-tier"
                >
                  <span>Mulai Langganan Konten</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 07: FAQ */}
      <section id="faq" className="lcp-faq-section lcp-wrap">
        <header className="lcp-section-head">
          <div>
            <span className="lcp-badge-tag">PERTANYAAN UMUM</span>
            <h2>Semua hal yang perlu Anda ketahui<br />seputar <em>layanan foto di Lensa Cerita.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20Lensa%20Cerita%2C%20saya%20ada%20pertanyaan%20seputar%20sesi%20foto."
            target="_blank"
            rel="noreferrer"
            className="lcp-link-more"
          >
            <span>Tanya Studio via WhatsApp ↗</span>
          </a>
        </header>

        <div className="lcp-faq-list">
          <details open>
            <summary>
              <span>01</span> Berapa lama waktu pengerjaan dan pengiriman hasil foto?<b>+</b>
            </summary>
            <p>
              Untuk sesi wisuda, preview galeri seleksi dikirim dalam <strong>1–2 hari kerja</strong> dan hasil edit final selesai dalam <strong>5–7 hari kerja</strong>. Untuk pernikahan berkisar 14–30 hari kerja, dan foto produk UMKM 7–14 hari kerja.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Apakah seluruh file original (foto belum diedit) akan diberikan?<b>+</b>
            </summary>
            <p>
              Ya, seluruh file foto original berkualitas tinggi yang lolos seleksi awal akan kami berikan melalui link Google Drive / galeri cloud privat tanpa biaya tambahan.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Bagaimana jika saya kaku dan tidak tahu cara berpose di depan kamera?<b>+</b>
            </summary>
            <p>
              Jangan khawatir! Fotografer kami berpengalaman memandu pose dari hal-hal paling sederhana secara ramah dan menyenangkan, sehingga hasil foto terlihat luwes, natural, dan percaya diri (*Zero Awkward Guarantee*).
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bagaimana prosedur untuk foto produk UMKM dari luar kota?<b>+</b>
            </summary>
            <p>
              Anda cukup mengirimkan sampel produk ke studio kami di Tebet, Jakarta Selatan. Kami akan mendiskusikan konsep moodboard, melakukan pemotretan, dan mengirimkan kembali produk Anda setelah sesi selesai.
            </p>
          </details>

          <details>
            <summary>
              <span>05</span> Bisakah Naltech Studio membuatkan website fotografer &amp; booking seperti Lensa Cerita?<b>+</b>
            </summary>
            <p>
              Tentu saja! Ini adalah portfolio concept demo project karya Naltech Studio. Kami membantu fotografer profesional, studio foto, dan agency visual memiliki website berkelas dengan galeri filterable dan sistem booking terintegrasi WhatsApp.
            </p>
          </details>
        </div>
      </section>

      {/* Section 08: Final CTA */}
      <section className="lcp-final-cta-section lcp-wrap">
        <div className="lcp-final-cta-card">
          <div className="lcp-cta-glow" />
          <div className="lcp-final-cta-inner">
            <span className="lcp-cta-tag">ABADI KAN MOMEN BERHARGAMU</span>
            <h2>
              Siap mengabadikan cerita terbaik Anda<br />
              bersama <em>Lensa Cerita Studio?</em>
            </h2>
            <p>
              Jadwal akhir pekan dan musim wisuda cepat terisi penuh. Amankan tanggal sesi pemotretan Anda sekarang juga.
            </p>
            <div className="lcp-cta-actions">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Lensa%20Cerita%20Photography%2C%20saya%20ingin%20jadwalkan%20sesi%20pemotretan.%20Bisa%20bantu%20informasikan%20slot%20jadwal%20tersedia%3F"
                target="_blank"
                rel="noreferrer"
                className="lcp-btn-cta-wa"
              >
                <MessageCircle size={18} />
                <span>Konsultasikan Jadwal via WhatsApp</span>
                <ArrowUpRight size={18} />
              </a>
              <Link href="/" className="lcp-btn-cta-portfolio">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="lcp-footer lcp-wrap">
        <div className="lcp-footer-grid">
          <div className="lcp-footer-col brand">
            <a className="lcp-logo" href="#top">
              <span className="lcp-logo-icon">
                <Camera size={20} />
              </span>
              <span className="lcp-logo-text">
                LENSA<strong>CERITA</strong> <small>PHOTOGRAPHY STUDIO</small>
              </span>
            </a>
            <p>
              Mengabadikan momen, menyampaikan cerita. Layanan fotografi profesional untuk wisuda, pernikahan, dan produk UMKM. Concept project by Naltech Studio.
            </p>
          </div>

          <div className="lcp-footer-col">
            <strong>Kategori Layanan</strong>
            <a href="#layanan">Fotografi Wisuda Campus</a>
            <a href="#layanan">Wedding &amp; Prewedding</a>
            <a href="#layanan">Foto Produk Katalog UMKM</a>
            <a href="#langganan">Paket Konten Bulanan</a>
          </div>

          <div className="lcp-footer-col">
            <strong>Paket Populer</strong>
            <a href="#booking">Wisuda Personal (Rp350K)</a>
            <a href="#booking">Wisuda Family (Rp750K)</a>
            <a href="#booking">Wedding Essential (Rp7.5M)</a>
            <a href="#booking">Product Marketplace (Rp1.2M)</a>
          </div>

          <div className="lcp-footer-col">
            <strong>Studio &amp; Kontak</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="lcp-address">Tebet, Jakarta Selatan, Indonesia</p>
          </div>
        </div>

        <div className="lcp-footer-bottom">
          <small>
            © 2026 Lensa Cerita Photography · Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Mengabadikan Momen, Menyampaikan Cerita · High-End Visuals</span>
        </div>
      </footer>
    </main>
  );
}
