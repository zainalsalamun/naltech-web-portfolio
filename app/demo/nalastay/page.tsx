import type { Metadata } from 'next';
import Link from 'next/link';
import './nalastay.css';
import HostEarningsCalculatorWidget from './HostEarningsCalculatorWidget';
import {
  Sparkles,
  Home,
  ShieldCheck,
  Users,
  Star,
  CheckCircle2,
  ArrowUpRight,
  Heart,
  DollarSign,
  Calendar,
  Lock,
  MessageCircle,
  Phone,
  Award,
  Zap,
  Globe,
  SlidersHorizontal,
  HelpCircle,
  Coffee,
  Camera,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'NalaStay — Onboarding Tuan Rumah & Platform Penginapan Liburan by Naltech',
  description: 'Bergabunglah menjadi tuan rumah di NalaStay. Raih penghasilan puluhan juta per bulan dari menyewakan villa, rumah, atau kamar dengan perlindungan NalaCover Rp15 Miliar dan komunitas Superhost kuat.',
  alternates: {
    canonical: '/demo/nalastay',
  },
  openGraph: {
    title: 'NalaStay — Onboarding Tuan Rumah & Platform Penginapan by Naltech',
    description: 'Buka pintu rumahmu untuk dunia dan raih penghasilan jutaan rupiah bersama NalaStay.',
    images: [{ url: `${siteUrl}/stay/hero-villa.jpg`, width: 1200, height: 630, alt: 'NalaStay Vacation Rental & Host Onboarding' }],
  },
  twitter: {
    title: 'NalaStay — Onboarding Tuan Rumah & Platform Penginapan by Naltech',
    description: 'Buka pintu rumahmu untuk dunia dan raih penghasilan jutaan rupiah bersama NalaStay.',
    images: [`${siteUrl}/stay/hero-villa.jpg`],
  },
};

const stayStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'NalaStay (Concept by Naltech)',
    description: 'Platform vacation rental dan onboarding tuan rumah (host) karya Naltech Studio.',
    url: `${siteUrl}/demo/nalastay`,
    image: `${siteUrl}/stay/hero-villa.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bali',
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
        name: 'NalaStay',
        item: `${siteUrl}/demo/nalastay`,
      },
    ],
  },
];

export default function NalaStayPage() {
  return (
    <main className="ns-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stayStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="ns-promo-ribbon">
        <div className="ns-wrap ns-ribbon-content">
          <span className="ns-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO SUPERHOST 2026</span>
          </span>
          <p>
            Bebas Biaya Layanan Listing (0% Service Fee) Selama <strong>3 Bulan Pertama</strong> untuk Tuan Rumah Baru kode: <code>NALAHOST</code>
          </p>
          <a href="#kalkulator-host" className="ns-ribbon-link">
            <span>Daftar Jadi Host</span>
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
              <Home size={22} />
            </span>
            <span className="ns-logo-text">
              NALA<strong>STAY</strong> <small>HOST PORTAL</small>
            </span>
          </a>

          <nav className="ns-nav" aria-label="Navigasi NalaStay">
            <a href="#kalkulator-host">Estimasi Cuan</a>
            <a href="#showcase-penginapan">Inspirasi Listing</a>
            <a href="#benefit-host">Benefit &amp; Proteksi</a>
            <a href="#komunitas">Komunitas Superhost</a>
            <a href="#cara-mulai">Cara Kerja</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="ns-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20NalaStay%2C%20saya%20tertarik%20konsultasi%20menjadi%20tuan%20rumah%20villa%2Fpenginapan."
              target="_blank"
              rel="noreferrer"
              className="ns-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Bantuan Superhost</span>
            </a>
            <a href="#kalkulator-host" className="ns-btn-header-cta">
              <Sparkles size={15} />
              <span>Jadikan Rumahmu Cuan</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="ns-hero">
        <div className="ns-wrap">
          <div className="ns-hero-copy">
            <div className="ns-hero-tag">
              <Heart size={14} className="ns-icon-coral" />
              <span>BERGABUNGLAH DENGAN 4.000.000+ TUAN RUMAH DI SELURUH DUNIA</span>
            </div>

            <h1>
              Buka pintu rumahmu untuk dunia,<br />
              raih penghasilan <em>bersama NalaStay.</em>
            </h1>

            <p className="ns-hero-sub">
              Ubah kamar kosong, villa tropis, atau apartemenmu menjadi sumber penghasilan pasif yang menguntungkan. Didukung perlindungan properti menyeluruh hingga Rp15 Miliar dan jaringan komunitas Superhost yang suportif.
            </p>
          </div>

          {/* Interactive Core: Host Earnings Calculator & Airbnb Style Stays Showcase */}
          <div id="kalkulator-host">
            <HostEarningsCalculatorWidget />
          </div>
        </div>
      </section>

      {/* Section 01: Host Benefits & NalaCover Protection */}
      <section id="benefit-host" className="ns-benefits-section ns-wrap">
        <header className="ns-section-head center">
          <span className="ns-badge-tag">01 · KEUNTUNGAN MENJADI TUAN RUMAH</span>
          <h2>Semua perlindungan &amp; kemudahan<br />yang kamu perlukan untuk <em>menerima tamu dengan tenang.</em></h2>
          <p>
            NalaStay memberikan proteksi menyeluruh dan kebebasan mutlak bagi setiap pemilik properti.
          </p>
        </header>

        <div className="ns-benefits-grid">
          <div className="ns-benefit-card highlight">
            <div className="ns-benefit-icon">
              <ShieldCheck size={28} />
            </div>
            <span className="ns-benefit-tag">GRATIS UNTUK SEMUA HOST</span>
            <h3>Perlindungan NalaCover Rp15 Miliar</h3>
            <p>
              Proteksi kerusakan properti, barang seni, furnitur bernilai tinggi, hingga asuransi liabilitas tamu pihak ketiga senilai hingga $1.000.000 USD (Rp15 Miliar).
            </p>
            <ul className="ns-benefit-list">
              <li>
                <CheckCircle2 size={15} className="ns-icon-coral" />
                <span>Ganti rugi kerusakan fisik properti &amp; perabotan</span>
              </li>
              <li>
                <CheckCircle2 size={15} className="ns-icon-coral" />
                <span>Asuransi liabilitas pihak ketiga</span>
              </li>
              <li>
                <CheckCircle2 size={15} className="ns-icon-coral" />
                <span>Biaya penggantian pembersihan mendalam (deep cleaning)</span>
              </li>
            </ul>
          </div>

          <div className="ns-benefit-card">
            <div className="ns-benefit-icon">
              <DollarSign size={28} />
            </div>
            <span className="ns-benefit-tag">PENCAIRAN CEPAT &amp; TRANSPARAN</span>
            <h3>Pembayaran Otomatis H+1 Check-in</h3>
            <p>
              Uang sewa otomatis ditransfer langsung ke rekening bank lokal Anda 24 jam setelah tamu check-in dengan aman, tanpa biaya tersembunyi.
            </p>
          </div>

          <div className="ns-benefit-card">
            <div className="ns-benefit-icon">
              <SlidersHorizontal size={28} />
            </div>
            <span className="ns-benefit-tag">KENDALI PENUH DI TANGANMU</span>
            <h3>Atur Tarif, Jadwal, &amp; Syarat Tamu</h3>
            <p>
              Tentukan sendiri tanggal ketersediaan rumah, harga per malam musiman, serta persyaratan identitas terverifikasi bagi tamu yang ingin memesan.
            </p>
          </div>

          <div className="ns-benefit-card">
            <div className="ns-benefit-icon">
              <Zap size={28} />
            </div>
            <span className="ns-benefit-tag">ALAT BANTU CERDAS</span>
            <h3>Smart Pricing &amp; Kalender Otomatis</h3>
            <p>
              Gunakan fitur Smart Pricing AI untuk menaikkan tarif otomatis saat musim liburan (peak season) guna memaksimalkan profit hingga 35%.
            </p>
          </div>
        </div>
      </section>

      {/* Section 02: Strong Community & Superhost Mentorship */}
      <section id="komunitas" className="ns-community-section">
        <div className="ns-wrap ns-community-grid">
          <div className="ns-community-copy">
            <span className="ns-badge-tag">02 · LAYANAN KOMUNITAS TUAN RUMAH</span>
            <h2>Kamu tidak sendirian,<br /><em>ada komunitas Superhost yang mendukungmu.</em></h2>
            <p>
              Mulai dari hari pertama mendaftar, kamu akan didampingi langsung oleh Superhost berpengalaman di kotamu untuk memastikan propertimu sukses memikat tamu.
            </p>

            <div className="ns-community-features">
              <div className="ns-comm-item">
                <div className="ns-comm-icon">
                  <Award size={20} />
                </div>
                <div>
                  <strong>Bimbingan 1-on-1 dari Superhost Mentor</strong>
                  <p>Mendapat tips langsung cara memotret ruangan, menata fasilitas amenities, dan menetapkan harga perdana yang menarik.</p>
                </div>
              </div>

              <div className="ns-comm-item">
                <div className="ns-comm-icon">
                  <Coffee size={20} />
                </div>
                <div>
                  <strong>Klub Tuan Rumah Lokal &amp; Meetup Rutin</strong>
                  <p>Bergabung dengan grup WhatsApp komunitas host lokal di Bali, Jogja, Bandung, dan Jakarta untuk saling bertukar tamu dan tips okupansi.</p>
                </div>
              </div>

              <div className="ns-comm-item">
                <div className="ns-comm-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Dukungan Khusus Tuan Rumah 24/7</strong>
                  <p>Akses hotline bantuan prioritas dengan tim NalaStay untuk penanganan sengketa dan pertanyaan teknis operasional.</p>
                </div>
              </div>
            </div>

            <div className="ns-community-actions">
              <a
                href="https://wa.me/6281573550017?text=Halo%20NalaStay%2C%20saya%20ingin%20terhubung%20dengan%20Superhost%20Mentor%20di%20kota%20saya."
                target="_blank"
                rel="noreferrer"
                className="ns-btn-primary"
              >
                <Users size={16} />
                <span>Terhubung dengan Superhost Mentor</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="ns-community-visual">
            <img src="/stay/host-mentor.jpg" alt="Komunitas Superhost NalaStay" />
            <div className="ns-community-floating-card">
              <Star size={18} fill="#FF385C" color="#FF385C" />
              <div>
                <strong>Superhost Club Indonesia</strong>
                <small>4.98 Rating Rata-rata · 15.000+ Host Aktif</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: 3 Easy Steps to Host */}
      <section id="cara-mulai" className="ns-steps-section ns-wrap">
        <header className="ns-section-head center">
          <span className="ns-badge-tag">03 · TIGA LANGKAH PRAKTIS</span>
          <h2>Mulai menyewakan rumahmu<br />hanya dalam <em>3 langkah sederhana.</em></h2>
          <p>
            Proses onboarding praktis yang dipandu langkah demi langkah hingga listing propertimu tayang ke jutaan wisatawan.
          </p>
        </header>

        <div className="ns-steps-grid">
          <div className="ns-step-card">
            <span className="ns-step-num">01</span>
            <h3>Deskripsikan Tempatmu</h3>
            <p>Unggah foto kamar atau villamu, pilih fasilitas unggulan (WiFi, kolam renang, dapur), dan tentukan lokasi peta.</p>
          </div>

          <div className="ns-step-card">
            <span className="ns-step-num">02</span>
            <h3>Atur Tarif &amp; Ketersediaan</h3>
            <p>Gunakan rekomendasi tarif cerdas kami atau tentukan harga per malam sesuai keinginanmu. Atur kalender kapan saja.</p>
          </div>

          <div className="ns-step-card">
            <span className="ns-step-num">03</span>
            <h3>Sambut Tamu &amp; Terima Cuan</h3>
            <p>Terima pemesanan dari tamu terverifikasi, berikan sambutan hangat, dan terima transfer penghasilan langsung ke rekening bankmu.</p>
          </div>
        </div>
      </section>

      {/* Section 04: Superhost Stories */}
      <section className="ns-reviews-section ns-wrap">
        <div className="ns-review-card">
          <span className="ns-quote-mark">“</span>
          <blockquote>
            Menjadi tuan rumah di NalaStay benar-benar mengubah cara saya memanfaatkan paviliun kosong di belakang rumah. Dibimbing langsung oleh Superhost mentor, kamar saya sekarang selalu penuh dengan wisatawan mancanegara dan menghasilkan rata-rata Rp18.000.000 per bulan!
          </blockquote>
          <div className="ns-reviewer">
            <div className="ns-rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FF385C" color="#FF385C" />
              ))}
            </div>
            <strong>Wayan Dananjaya &amp; Putu Mirah</strong>
            <small>Superhost Villa Tropis di Ubud, Bali · Bergabung Sejak 2023</small>
          </div>
        </div>
      </section>

      {/* Section 05: FAQ */}
      <section id="faq" className="ns-faq-section ns-wrap">
        <header className="ns-section-head">
          <div>
            <span className="ns-badge-tag">05 · PERTANYAAN UMUM TUAN RUMAH</span>
            <h2>Semua hal yang sering ditanyakan<br /><em>seputar menjadi tuan rumah di NalaStay.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaStay%2C%20saya%20ada%20pertanyaan%20seputar%20onboarding%20tuan%20rumah."
            target="_blank"
            rel="noreferrer"
            className="ns-link-more"
          >
            <span>Tanya Tim Bantuan WhatsApp ↗</span>
          </a>
        </header>

        <div className="ns-faq-list">
          <details open>
            <summary>
              <span>01</span> Apakah rumah saya harus berupa villa mewah untuk bisa didaftarkan?<b>+</b>
            </summary>
            <p>
              Sama sekali tidak! Wisatawan di NalaStay mencari berbagai macam akomodasi: mulai dari satu kamar tidur ekstra di rumah Anda, apartemen studio di tengah kota, rumah kabin di pedesaan, hingga villa dengan kolam renang privat.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Bagaimana jika tamu merusak perabotan atau properti saya?<b>+</b>
            </summary>
            <p>
              Setiap pemesanan dilindungi oleh <strong>NalaCover senilai hingga Rp15 Miliar</strong> tanpa biaya tambahan. Anda cukup mengajukan klaim kerusakan dengan melampirkan foto melalui dashboard host, dan tim resolusi kami akan memproses penggantian secara cepat.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah saya harus melayani tamu sendiri jika saya sibuk bekerja?<b>+</b>
            </summary>
            <p>
              Tidak perlu! NalaStay mendukung sistem Self Check-in (Smart Lock / Keybox) sehingga tamu dapat masuk secara mandiri. Anda juga dapat bekerja sama dengan Rekan Tuan Rumah (Co-Host) dari komunitas kami untuk mengelola operasional kebersihan dan sambutan.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech Studio membuatkan website persewaan villa / platform hospitality seperti NalaStay?<b>+</b>
            </summary>
            <p>
              Sangat bisa! Ini adalah concept demo project dari Naltech Studio. Kami merancang website vacation rental, kalkulator estimasi penghasilan host, sistem booking kalender interaktif, dan visualisasi properti mewah sekelas Airbnb.
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
              Ingin memiliki website vacation rental &amp; penginapan<br />
              sekelas <em>NalaStay / Airbnb?</em>
            </h2>
            <p>
              Naltech membantu pengelola villa, jaringan hotel butik, manajemen properti, dan startup hospitality membangun platform booking dan onboarding tuan rumah modern berkonversi tinggi.
            </p>
            <div className="ns-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20vacation%20rental%20atau%20penginapan%20seperti%20NalaStay."
                target="_blank"
                rel="noreferrer"
                className="ns-btn-primary"
              >
                <MessageCircle size={17} />
                <span>Konsultasi Project Website Hospitality</span>
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
                <Home size={20} />
              </span>
              <span className="ns-logo-text">
                NALA<strong>STAY</strong> <small>HOST PORTAL</small>
              </span>
            </a>
            <p>
              Platform vacation rental dan onboarding tuan rumah. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="ns-footer-col">
            <strong>Menerima Tamu</strong>
            <a href="#kalkulator-host">Kalkulator Penghasilan</a>
            <a href="#benefit-host">Perlindungan NalaCover</a>
            <a href="#komunitas">Komunitas Superhost</a>
            <a href="#cara-mulai">Panduan Host Pemula</a>
            <a href="#kalkulator-host">Daftarkan Rumah</a>
          </div>

          <div className="ns-footer-col">
            <strong>Jelajahi Penginapan</strong>
            <a href="#showcase-penginapan">Villa Kolam Renang</a>
            <a href="#showcase-penginapan">Beachfront Suites</a>
            <a href="#showcase-penginapan">Kabin Pegunungan</a>
            <a href="#showcase-penginapan">Tropical Villas Bali</a>
          </div>

          <div className="ns-footer-col">
            <strong>Pengembang Studio</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="ns-address">Bali &amp; Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="ns-footer-bottom">
          <small>
            © 2026 NalaStay · Vacation Rental Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Dilindungi NalaCover Rp15 Miliar Garansi Kerusakan Properti</span>
        </div>
      </footer>
    </main>
  );
}
