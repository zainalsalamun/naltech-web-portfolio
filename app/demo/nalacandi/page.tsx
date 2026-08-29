import type { Metadata } from 'next';
import Link from 'next/link';
import './nalacandi.css';
import CandiSelectorWidget from './CandiSelectorWidget';
import {
  Sparkles,
  Ticket,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Compass,
  Bus,
  Shirt,
  Users,
  Award,
  Star,
  MessageCircle,
  Phone,
  QrCode,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'NalaCandi Heritage — Wisata Candi Nusantara (Prambanan, Plaosan, Kalasan) by Naltech',
  description: 'Eksplorasi keagungan candi nusantara: Candi Prambanan, Candi Plaosan, Candi Kalasan, dan Candi Ratu Boko. Pemesanan e-tiket online cepat, resmi, dan mudah bagi semua kalangan.',
  alternates: {
    canonical: '/demo/nalacandi',
  },
  openGraph: {
    title: 'NalaCandi Heritage — Wisata Candi Nusantara by Naltech',
    description: 'Pemesanan tiket resmi candi nusantara dengan panduan video footage dan proses mudah bagi orang awam.',
    images: [{ url: `${siteUrl}/candi/candi-prambanan.jpg`, width: 1200, height: 630, alt: 'NalaCandi Heritage - Wisata Candi Nusantara' }],
  },
  twitter: {
    title: 'NalaCandi Heritage — Wisata Candi Nusantara by Naltech',
    description: 'Pemesanan tiket resmi candi nusantara dengan panduan video footage dan proses mudah bagi orang awam.',
    images: [`${siteUrl}/candi/candi-prambanan.jpg`],
  },
};

const candiStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'NalaCandi Heritage — Wisata Candi Nusantara by Naltech',
    description: 'Contoh website booking tiket wisata candi nusantara dirancang oleh Naltech Studio.',
    url: `${siteUrl}/demo/nalacandi`,
    publisher: {
      '@type': 'Organization',
      name: 'Naltech Studio',
      url: siteUrl,
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
        name: 'NalaCandi Heritage',
        item: `${siteUrl}/demo/nalacandi`,
      },
    ],
  },
];

export default function NalaCandiPage() {
  return (
    <main className="nc-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(candiStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="nc-promo-ribbon">
        <div className="nc-wrap nc-ribbon-content">
          <span className="nc-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO TIKET TERUSAN 2026</span>
          </span>
          <p>
            Hemat s.d. <strong>35%</strong> untuk Paket Terusan Candi Prambanan + Candi Plaosan / Ratu Boko kode: <code>CANDINUSANTARA</code>
          </p>
          <a href="#pilihan-candi" className="nc-ribbon-link">
            <span>Pesan E-Tiket</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="nc-demo-bar">
        <div className="nc-wrap nc-demo-inner">
          <Link href="/" className="nc-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="nc-header">
        <div className="nc-wrap nc-header-inner">
          <a className="nc-logo" href="#top">
            <span className="nc-logo-icon">
              <Compass size={20} />
            </span>
            <span className="nc-logo-text">
              NALA<strong>CANDI</strong> <small>HERITAGE</small>
            </span>
          </a>

          <nav className="nc-nav" aria-label="Navigasi Wisata Candi">
            <a href="#pilihan-candi">Pilihan Candi</a>
            <a href="#panduan">Panduan Wisatawan</a>
            <a href="#ramayana">Sendratari Ramayana</a>
            <a href="#cara-pesan">Cara Beli E-Tiket</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nc-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20NalaCandi%20Heritage%2C%20saya%20ingin%20tanya%20informasi%20tiket%20dan%20jadwal%20buka%20candi."
              target="_blank"
              rel="noreferrer"
              className="nc-btn-helpdesk"
            >
              <MessageCircle size={15} />
              <span>Helpdesk 24 Jam</span>
            </a>
            <a href="#pilihan-candi" className="nc-btn-buy-ticket">
              <Ticket size={15} />
              <span>Beli E-Tiket Cepat</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Headline and Interactive CandiSelectorWidget */}
      <section id="top" className="nc-hero">
        <div className="nc-wrap">
          <div className="nc-hero-copy">
            <div className="nc-hero-tag">
              <Sparkles size={14} className="nc-icon-gold" />
              <span>TAMAN WISATA CANDI NUSANTARA · SIMPLE &amp; ACCESSIBLE</span>
            </div>

            <h1>
              Jelajahi keagungan candi nusantara,<br />
              warisan luhur yang <em>mudah dikunjungi.</em>
            </h1>

            <p className="nc-hero-sub">
              Sistem informasi dan pemesanan e-tiket resmi yang dirancang sederhana, jernih, dan sangat ramah pengguna. Temukan keindahan Candi Prambanan, Candi Plaosan, Candi Kalasan, hingga Candi Ratu Boko tanpa ribet.
            </p>
          </div>

          {/* Core Interactive Component: Video Footage Hero + Temple Selection Column + Easy Booking */}
          <CandiSelectorWidget />
        </div>
      </section>

      {/* Section 01: Practical Visitor Guide for Beginners (Panduan Pengunjung Awam) */}
      <section id="panduan" className="nc-guide-section nc-wrap">
        <header className="nc-section-head center">
          <span className="nc-badge-tag">01 · PANDUAN PRAKTIS WISATAWAN</span>
          <h2>Informasi penting sebelum<br />kamu <em>berangkat berwisata.</em></h2>
          <p>
            Semua hal yang perlu kamu ketahui agar kunjungan wisata bersama keluarga berjalan lancar, nyaman, dan berkesan.
          </p>
        </header>

        <div className="nc-guide-grid">
          <div className="nc-guide-card">
            <div className="nc-g-icon">
              <Clock size={24} />
            </div>
            <h3>Jam Buka &amp; Waktu Terbaik</h3>
            <p>Buka setiap hari pukul 06.30 – 17.00 WIB. Waktu terbaik berkunjung adalah pagi hari (07.00–09.00) untuk udara sejuk atau sore (15.30–17.00) untuk menikmati pemandangan matahari terbenam.</p>
          </div>

          <div className="nc-guide-card">
            <div className="nc-g-icon">
              <Shirt size={24} />
            </div>
            <h3>Aturan Pakaian &amp; Kain Batik Gratis</h3>
            <p>Pengunjung wajib berpakaian sopan (menutup bahu dan lutut). Tersedia peminjaman kain sarung batik khas nusantara secara gratis di dekat gerbang pintu masuk utama.</p>
          </div>

          <div className="nc-guide-card">
            <div className="nc-g-icon">
              <Bus size={24} />
            </div>
            <h3>Shuttle Bus Listrik &amp; Golf Cart</h3>
            <p>Area kompleks candi sangat luas. Tersedia shuttle bus listrik ramah lingkungan dan mobil golf cart yang nyaman untuk orang tua lansia, anak-anak, dan difabel.</p>
          </div>

          <div className="nc-guide-card">
            <div className="nc-g-icon">
              <Users size={24} />
            </div>
            <h3>Pemandu Wisata Resmi (Tour Guide)</h3>
            <p>Tersedia pemandu wisata berlisensi resmi HPI yang fasih menceritakan kisah relief, sejarah Dinasti Sanjaya &amp; Syailendra dalam Bahasa Indonesia, Inggris, Jepang, dan Perancis.</p>
          </div>
        </div>
      </section>

      {/* Section 02: Ramayana Ballet Prambanan */}
      <section id="ramayana" className="nc-ramayana-section">
        <div className="nc-wrap nc-ramayana-grid">
          <div className="nc-ramayana-copy">
            <span className="nc-badge-tag">02 · SENDRATARI RAMAYANA PRAMBANAN</span>
            <h2>Pertunjukan epik berlatar<br />kemegahan <em>candi malam hari.</em></h2>
            <p>
              Saksikan kisah cinta Rama &amp; Sinta dalam pagelaran tari kolosal tanpa dialog yang diiringi gamelan Jawa secara langsung di Panggung Terbuka (Open Air Stage) dengan latar belakang Candi Prambanan yang bermandikan cahaya lampu dramatis.
            </p>
            <ul className="nc-ramayana-specs">
              <li>
                <CheckCircle2 size={15} className="nc-icon-gold" />
                <span>Pementasan setiap hari Selasa, Kamis, &amp; Sabtu (Pukul 19.30 WIB)</span>
              </li>
              <li>
                <CheckCircle2 size={15} className="nc-icon-gold" />
                <span>Didukung lebih dari 200 penari dan musisi gamelan tradisional</span>
              </li>
              <li>
                <CheckCircle2 size={15} className="nc-icon-gold" />
                <span>Tersedia pilihan kelas Tiket VIP, Khusus, dan Kelas 1</span>
              </li>
            </ul>
            <div className="nc-ramayana-actions">
              <a href="#pilihan-candi" className="nc-btn-primary">
                <Ticket size={16} />
                <span>Pesan Tiket Sendratari</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="nc-ramayana-visual">
            <img src="/candi/candi-prambanan.jpg" alt="Panggung Terbuka Sendratari Ramayana Prambanan" />
            <div className="nc-ramayana-badge">
              <Award size={16} className="nc-icon-gold" />
              <span>Mahakarya Seni Pertunjukan Dunia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: 4-Step E-Ticket Booking Guide (Cara Pesan Bagi Orang Awam) */}
      <section id="cara-pesan" className="nc-steps-section nc-wrap">
        <header className="nc-section-head center">
          <span className="nc-badge-tag">03 · ALUR PEMESANAN PRAKTIS</span>
          <h2>Cara beli e-tiket resmi<br />hanya dalam <em>4 langkah mudah.</em></h2>
          <p>
            Tidak perlu mengantre panjang di loket panas. Cukup pesan lewat HP, dapatkan QR Code, dan langsung scan di pintu masuk.
          </p>
        </header>

        <div className="nc-steps-grid">
          <div className="nc-step-card">
            <span className="nc-step-number">01</span>
            <h3>Pilih Candi &amp; Tanggal</h3>
            <p>Pilih candi yang ingin dikunjungi (Prambanan, Plaosan, Kalasan, atau Ratu Boko) dan tentukan tanggal kunjunganmu.</p>
          </div>

          <div className="nc-step-card">
            <span className="nc-step-number">02</span>
            <h3>Tentukan Jumlah Tiket</h3>
            <p>Masukkan jumlah pengunjung dewasa dan anak-anak. Pilih kategori tiket reguler, paket terusan, atau sendratari.</p>
          </div>

          <div className="nc-step-card">
            <span className="nc-step-number">03</span>
            <h3>Pembayaran Instan</h3>
            <p>Lakukan pembayaran aman lewat QRIS, transfer bank, atau e-wallet tanpa biaya admin tambahan.</p>
          </div>

          <div className="nc-step-card">
            <span className="nc-step-number">04</span>
            <h3>Scan QR Code di Gate</h3>
            <p>E-Tiket QR Code langsung dikirim ke WhatsApp &amp; Email Anda. Tunjukkan ke petugas scanner di pintu masuk candi.</p>
          </div>
        </div>
      </section>

      {/* Section 04: Testimonials */}
      <section id="testimoni" className="nc-reviews-section nc-wrap">
        <div className="nc-review-card">
          <span className="nc-quote-mark">“</span>
          <blockquote>
            Website NalaCandi ini gampang banget dipakai! Sebagai orang tua yang gaptek, saya bisa beli 5 tiket keluarga ke Candi Prambanan dan Candi Plaosan dalam hitungan menit. E-tiket langsung masuk ke WhatsApp, pas di lokasi tinggal scan nggak perlu antre sama sekali.
          </blockquote>
          <div className="nc-reviewer">
            <div className="nc-rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#C47A46" color="#C47A46" />
              ))}
            </div>
            <strong>Bambang Sudiro</strong>
            <small>Wisatawan Asal Surabaya · Kunjungan Keluarga 5 Orang</small>
          </div>
        </div>
      </section>

      {/* Section 05: FAQ */}
      <section id="faq" className="nc-faq-section nc-wrap">
        <header className="nc-section-head">
          <div>
            <span className="nc-badge-tag">05 · PERTANYAAN UMUM</span>
            <h2>Hal yang sering ditanyakan<br /><em>seputar tiket &amp; kunjungan candi.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaCandi%2C%20saya%20ada%20pertanyaan%20seputar%20tiket%20candi."
            target="_blank"
            rel="noreferrer"
            className="nc-link-more"
          >
            <span>Tanya Petugas Informasi ↗</span>
          </a>
        </header>

        <div className="nc-faq-list">
          <details open>
            <summary>
              <span>01</span> Apakah anak-anak di bawah 3 tahun perlu membeli tiket?<b>+</b>
            </summary>
            <p>
              Anak-anak berusia di bawah 3 tahun (balita) bebas biaya masuk (gratis) tanpa perlu membeli tiket. Kategori tiket anak berlaku untuk usia 3 hingga 9 tahun.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Bagaimana jika saya berhalangan hadir pada tanggal yang tertera di e-tiket?<b>+</b>
            </summary>
            <p>
              E-tiket resmi memiliki masa berlaku fleksibel (+3 hari dari tanggal yang dipilih) atau dapat dilakukan reschedule tanggal kunjungan 1x dengan menghubungi layanan customer service kami.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah diperbolehkan membawa kamera profesional dan drone?<b>+</b>
            </summary>
            <p>
              Kamera saku, mirrorless, dan DSLR untuk dokumentasi pribadi bebas biaya. Untuk penerbangan drone dan photoshoot komersial (pre-wedding / syuting) memerlukan izin khusus dari pihak pengelola cagar budaya.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech Studio membuatkan website destinasi wisata seperti ini untuk tempat wisata saya?<b>+</b>
            </summary>
            <p>
              Tentu saja! Ini adalah concept project dari Naltech Studio. Kami merancang website ticketing wisata, taman hiburan, dan cagar budaya lengkap dengan video cinematic, pemesanan e-tiket QR Code, dan integrasi WhatsApp.
            </p>
          </details>
        </div>
      </section>

      {/* Section 06: Final CTA */}
      <section className="nc-cta-section nc-wrap">
        <div className="nc-cta-card">
          <div className="nc-cta-glow" />
          <div className="nc-cta-inner">
            <span className="nc-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Ingin memiliki website wisata canggih<br />
              seperti <em>NalaCandi Heritage?</em>
            </h2>
            <p>
              Naltech membantu pengelola destinasi wisata, taman hiburan, dan heritage tourism menghadirkan pengalaman pemesanan tiket digital yang mudah, cepat, dan ramah pengunjung.
            </p>
            <div className="nc-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20destinasi%20wisata%20seperti%20NalaCandi."
                target="_blank"
                rel="noreferrer"
                className="nc-btn-primary"
              >
                <MessageCircle size={17} />
                <span>Konsultasi Project Website Wisata</span>
                <ArrowUpRight size={17} />
              </a>
              <Link href="/" className="nc-btn-secondary">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="nc-footer nc-wrap">
        <div className="nc-footer-grid">
          <div className="nc-footer-col brand">
            <a className="nc-logo" href="#top">
              <span className="nc-logo-icon">
                <Compass size={18} />
              </span>
              <span className="nc-logo-text">
                NALA<strong>CANDI</strong> <small>HERITAGE</small>
              </span>
            </a>
            <p>
              Kawasan Taman Wisata Candi Nusantara. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="nc-footer-col">
            <strong>Destinasi Candi</strong>
            <a href="#pilihan-candi">Candi Prambanan</a>
            <a href="#pilihan-candi">Candi Plaosan</a>
            <a href="#pilihan-candi">Candi Kalasan</a>
            <a href="#pilihan-candi">Candi Ratu Boko</a>
            <a href="#pilihan-candi">Candi Sambisari &amp; Sewu</a>
          </div>

          <div className="nc-footer-col">
            <strong>Layanan Wisatawan</strong>
            <a href="#panduan">Panduan Kunjungan</a>
            <a href="#ramayana">Jadwal Sendratari Ramayana</a>
            <a href="#cara-pesan">Panduan E-Tiket QR</a>
            <a href="#faq">Pusat Bantuan Wisatawan</a>
          </div>

          <div className="nc-footer-col">
            <strong>Pengembang Studio</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
          </div>
        </div>

        <div className="nc-footer-bottom">
          <small>
            © 2026 NalaCandi Heritage · Tourism Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Yogyakarta &amp; Klaten, Indonesia</span>
        </div>
      </footer>
    </main>
  );
}
