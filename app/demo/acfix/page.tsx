import type { Metadata } from 'next';
import Link from 'next/link';
import './acfix.css';
import ACServiceCalculatorWidget from './ACServiceCalculatorWidget';
import {
  Snowflake,
  Wind,
  Droplets,
  Wrench,
  RotateCcw,
  Zap,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Home,
  Building2,
  Store,
  UtensilsCrossed,
  ShieldCheck,
  Sparkles,
  Fan,
  ThermometerSnowflake,
  MapPin,
  Star,
  Check,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'ACFix — AC Tidak Dingin? Teknisi Kami Datang Hari Ini by Naltech',
  description: 'Layanan jasa service AC, cuci AC Rp75K, tambah freon Rp150K, dan bongkar pasang panggilan datang hari ini untuk rumah, kantor, toko, apartemen, dan restoran dengan garansi 30 hari.',
  alternates: {
    canonical: '/demo/acfix',
  },
  openGraph: {
    title: 'ACFix — AC Tidak Dingin? Teknisi Kami Datang Hari Ini',
    description: 'Teknisi profesional datang ke lokasi Anda. Cuci AC Rp75K, service perbaikan, dan isi freon bergaransi.',
    images: [{ url: `${siteUrl}/acfix/hero-ac.jpg`, width: 1200, height: 630, alt: 'ACFix Air Conditioning Service' }],
  },
  twitter: {
    title: 'ACFix — AC Tidak Dingin? Teknisi Kami Datang Hari Ini',
    description: 'Teknisi profesional datang ke lokasi Anda. Cuci AC Rp75K, service perbaikan, dan isi freon bergaransi.',
    images: [`${siteUrl}/acfix/hero-ac.jpg`],
  },
};

const acfixStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: 'ACFix (Concept by Naltech)',
    description: 'Jasa servis dan perawatan AC panggilan on-demand karya Naltech Studio.',
    url: `${siteUrl}/demo/acfix`,
    image: `${siteUrl}/acfix/hero-ac.jpg`,
    priceRange: 'Rp75.000 - Rp250.000',
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
        name: 'ACFix',
        item: `${siteUrl}/demo/acfix`,
      },
    ],
  },
];

const priceTable = [
  {
    service: 'Cuci AC Reguler',
    price: 'Rp75.000',
    unit: '/ unit',
    duration: '25 - 35 Menit',
    desc: 'Cuci steam evaporator indoor, blower fan, filter debu, pembersihan lumut pipa drainase, dan semprot kondensor outdoor.',
    popular: true,
  },
  {
    service: 'Service & Perbaikan AC',
    price: 'Rp100.000',
    unit: '/ unit',
    duration: '35 - 50 Menit',
    desc: 'Pengecekan kelistrikan PCB, ganti kapasitor kompresor, perbaikan sensor termistor, dan penanganan AC mati total.',
    popular: true,
  },
  {
    service: 'Tambah & Isi Freon',
    price: 'Rp150.000',
    unit: '/ unit',
    duration: '20 - 30 Menit',
    desc: 'Pengukuran tekanan manifold psi dan pengisian freon standar pabrik (R32 / R410A / R22) hingga suhu kembali dingin optimal.',
  },
  {
    service: 'Bongkar Pasang AC Split',
    price: 'Rp250.000',
    unit: '/ unit',
    duration: '60 - 90 Menit',
    desc: 'Relokasi unit indoor dan outdoor, pemasangan bracket baru, pemipaan tembaga rapi, serta vakum pipa sebelum operasional.',
  },
  {
    service: 'Cuci AC Cassette / Standing',
    price: 'Rp175.000',
    unit: '/ unit',
    duration: '45 - 60 Menit',
    desc: 'Perawatan khusus unit AC berkapasitas besar di plafon kantor, ruko, restoran, cafe, aula, dan ruang meeting.',
  },
  {
    service: 'Perbaikan Bocor & Las Pipa',
    price: 'Mulai Rp120.000',
    unit: '/ titik',
    duration: '30 - 45 Menit',
    desc: 'Pengelasan pipa tembaga freon yang bocor/retak, penggantian flare nut, dan penanganan air menetes ke lantai.',
  },
];

const targetSegments = [
  {
    title: 'Rumah Tinggal',
    icon: Home,
    desc: 'Tidur nyenyak dengan udara sejuk bersih bebas debu dan tungau untuk seluruh anggota keluarga.',
  },
  {
    title: 'Perkantoran',
    icon: Building2,
    desc: 'Jaga produktivitas karyawan tetap maksimal dengan suhu ruangan kerja yang sejuk dan stabil sepanjang hari.',
  },
  {
    title: 'Toko & Ruko Retail',
    icon: Store,
    desc: 'Berikan kenyamanan optimal bagi pelanggan yang berbelanja di outlet atau toko retail Anda.',
  },
  {
    title: 'Apartemen',
    icon: Building2,
    desc: 'Layanan panggilan tepat waktu dengan SOP tertib sesuai peraturan pengelola gedung apartemen.',
  },
  {
    title: 'Restoran & Cafe',
    icon: UtensilsCrossed,
    desc: 'Kondisi AC prima menjaga selera makan dan kenyamanan pengunjung bersantap tanpa kegerahan.',
  },
];

export default function ACFixPage() {
  return (
    <main className="acf-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(acfixStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="acf-promo-ribbon">
        <div className="acf-wrap acf-ribbon-content">
          <span className="acf-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO SEJUK HARI INI</span>
          </span>
          <p>
            Diskon <strong>15% Cuci 3 Unit ke Atas</strong> + Free Desinfektan Evaporator dengan kode: <code>DINGINFIX</code>
          </p>
          <a href="#estimasi" className="acf-ribbon-link">
            <span>Hitung Biaya</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="acf-demo-bar">
        <div className="acf-wrap acf-demo-inner">
          <Link href="/" className="acf-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Header */}
      <header className="acf-header">
        <div className="acf-wrap acf-header-inner">
          <a className="acf-logo" href="#top">
            <span className="acf-logo-icon">
              <Snowflake size={22} />
            </span>
            <span className="acf-logo-text">
              AC<strong>FIX</strong> <small>ARCTIC CLIMATE CARE</small>
            </span>
          </a>

          <nav className="acf-nav" aria-label="Navigasi ACFix">
            <a href="#estimasi">Estimasi Biaya</a>
            <a href="#harga">Daftar Harga</a>
            <a href="#sop">SOP Anti-Becek</a>
            <a href="#segmen">Target Properti</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="acf-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20ACFix%2C%20saya%20ingin%20konsultasi%20masalah%20AC%20saya."
              target="_blank"
              rel="noreferrer"
              className="acf-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Chat CS Teknisi</span>
            </a>
            <a href="#estimasi" className="acf-btn-header-cta">
              <ThermometerSnowflake size={15} />
              <span>Booking Teknisi</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="acf-hero">
        <div className="acf-wrap">
          <div className="acf-hero-grid">
            <div className="acf-hero-copy">
              <div className="acf-hero-tag">
                <Wind size={14} className="acf-icon-cyan" />
                <span>AC TIDAK DINGIN? TEKNISI KAMI DATANG HARI INI</span>
              </div>

              <h1>
                AC Tidak Dingin?
              </h1>

              <p className="acf-hero-sub">
                Teknisi profesional datang ke lokasi Anda. Kami mengatasi masalah AC kurang dingin, air menetes di dinding, bau apek, hingga freon bocor dengan SOP pengerjaan bersih anti-becek dan garansi dingin 30 hari.
              </p>

              {/* Target Property Badges */}
              <div className="acf-target-badges-row">
                <span className="acf-target-title">Melayani:</span>
                <span className="acf-target-item"><Home size={12} /> Rumah</span>
                <span className="acf-target-item"><Building2 size={12} /> Kantor</span>
                <span className="acf-target-item"><Store size={12} /> Toko</span>
                <span className="acf-target-item"><Building2 size={12} /> Apartemen</span>
                <span className="acf-target-item"><UtensilsCrossed size={12} /> Restoran</span>
              </div>

              <div className="acf-hero-actions">
                <a href="#estimasi" className="acf-btn-hero-primary">
                  <Wrench size={17} />
                  <span>Booking Teknisi Sekarang</span>
                  <ArrowUpRight size={17} />
                </a>

                <a href="#harga" className="acf-btn-hero-secondary">
                  <span>Lihat Daftar Harga</span>
                </a>
              </div>

              <div className="acf-hero-trust-row">
                <div className="acf-trust-item">
                  <Clock size={15} className="acf-icon-cyan" />
                  <span>Teknisi Datang Hari Ini</span>
                </div>
                <div className="acf-trust-item">
                  <ShieldCheck size={15} className="acf-icon-cyan" />
                  <span>Garansi Dingin 30 Hari</span>
                </div>
                <div className="acf-trust-item">
                  <Droplets size={15} className="acf-icon-cyan" />
                  <span>SOP Steam Cover Anti-Becek</span>
                </div>
              </div>
            </div>

            <div className="acf-hero-visual">
              <img src="/acfix/hero-ac.jpg" alt="Teknisi Service AC Profesional ACFix" />
              <div className="acf-hero-floating-card">
                <Fan size={22} className="acf-icon-cyan" />
                <div>
                  <strong>Teknisi Standby di Area Anda</strong>
                  <small>Garansi Dingin 30 Hari · SOP Bersih Higienis</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Interactive AC Service Cost Estimator */}
      <section id="estimasi" className="acf-estimator-section">
        <div className="acf-wrap">
          <header className="acf-section-head center">
            <span className="acf-badge-tag">FITUR INTERAKTIF · ESTIMASI BIAYA SERVICE</span>
            <h2>Hitung perkiraan biaya service AC<br /><em>secara instan dan transparan.</em></h2>
            <p>
              Pilih masalah AC, kapasitas PK, dan jumlah unit yang ingin dikerjakan untuk melihat simulasi total biaya tanpa biaya tersembunyi.
            </p>
          </header>

          <ACServiceCalculatorWidget />
        </div>
      </section>

      {/* Section 02: Daftar Harga & Layanan */}
      <section id="harga" className="acf-pricing-section acf-wrap">
        <header className="acf-section-head center">
          <span className="acf-badge-tag">DAFTAR HARGA TRANSPARAN</span>
          <h2>Tarif servis terjangkau dengan<br /><em>standar pengerjaan profesional.</em></h2>
          <p>
            Harga jelas di awal sebelum teknisi mulai melakukan pengerjaan.
          </p>
        </header>

        <div className="acf-pricing-grid">
          {priceTable.map((item, idx) => (
            <div key={idx} className={`acf-price-card ${item.popular ? 'popular' : ''}`}>
              {item.popular && <span className="acf-popular-badge">Paling Sering Dipesan</span>}
              <div className="acf-price-card-header">
                <h4>{item.service}</h4>
                <div className="acf-price-amount">
                  <strong>{item.price}</strong>
                  <small>{item.unit}</small>
                </div>
              </div>
              <span className="acf-duration-badge">
                <Clock size={12} /> Durasi: ~{item.duration}
              </span>
              <p className="acf-price-desc">{item.desc}</p>
              <div className="acf-price-foot">
                <a
                  href={`https://wa.me/6281573550017?text=Halo%20ACFix%2C%20saya%20ingin%20pesan%20layanan%20${encodeURIComponent(item.service)}%20(${encodeURIComponent(item.price)}).`}
                  target="_blank"
                  rel="noreferrer"
                  className="acf-btn-order-service"
                >
                  <span>Pesan Layanan</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 03: SOP Kerja Bersih Anti-Becek */}
      <section id="sop" className="acf-sop-section">
        <div className="acf-wrap">
          <header className="acf-section-head center">
            <span className="acf-badge-tag">STANDAR OPERASIONAL HIGIENIS</span>
            <h2>Ruangan tetap rapi dan bersih<br />dengan <em>SOP Steam Cover Anti-Becek.</em></h2>
            <p>
              Kami sangat menghargai kebersihan lantai, perabotan, dan dinding rumah Anda saat pengerjaan servis berlangsung.
            </p>
          </header>

          <div className="acf-sop-grid">
            <div className="acf-sop-card">
              <div className="acf-sop-icon">
                <Droplets size={24} />
              </div>
              <h3>Plastik Cover Corong Khusus</h3>
              <p>Evaporator AC dibungkus plastik terpal corong khusus sehingga semprotan air limbah cuci tertampung rapi ke dalam ember tanpa membasahi dinding atau lantai.</p>
            </div>

            <div className="acf-sop-card">
              <div className="acf-sop-icon">
                <Sparkles size={24} />
              </div>
              <h3>Desinfektan Pembasmi Bakteri</h3>
              <p>Penyemprotan cairan sterilisasi anti-jamur pada sirip evaporator untuk membunuh 99.9% spora lumut dan bakteri penyebab bau apek pada sirkulasi udara.</p>
            </div>

            <div className="acf-sop-card">
              <div className="acf-sop-icon">
                <ThermometerSnowflake size={24} />
              </div>
              <h3>Pengukuran Suhu Digital</h3>
              <p>Mengecek temperatur hembusan angin (°C) dan tekanan freon (PSI) sebelum dan sesudah pengerjaan untuk memastikan AC kembali dingin maksimal.</p>
            </div>

            <div className="acf-sop-card">
              <div className="acf-sop-icon">
                <ShieldCheck size={24} />
              </div>
              <h3>Garansi Dingin 30 Hari Penuh</h3>
              <p>Jika dalam 30 hari AC kembali tidak dingin atau timbul tetesan air bocor, teknisi kami akan datang melakukan perbaikan ulang 100% gratis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Solusi untuk Segala Properti */}
      <section id="segmen" className="acf-segments-section acf-wrap">
        <header className="acf-section-head center">
          <span className="acf-badge-tag">SEGMEN PELANGGAN</span>
          <h2>Solusi pendingin udara terpercaya untuk<br /><em>berbagai tipe properti dan bisnis.</em></h2>
        </header>

        <div className="acf-segments-grid">
          {targetSegments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div key={idx} className="acf-segment-card">
                <div className="acf-seg-icon-wrap">
                  <Icon size={22} className="acf-icon-cyan" />
                </div>
                <h4>{seg.title}</h4>
                <p>{seg.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 05: Testimoni Pelanggan */}
      <section id="testimoni" className="acf-reviews-section">
        <div className="acf-wrap">
          <header className="acf-section-head center">
            <span className="acf-badge-tag">ULASAN PELANGGAN</span>
            <h2>Apa kata mereka yang telah rutin<br />mempercayakan AC pada <em>ACFix?</em></h2>
          </header>

          <div className="acf-reviews-grid">
            <div className="acf-review-card">
              <div className="acf-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#0284c7" color="#0284c7" />
                ))}
              </div>
              <p className="acf-review-comment">
                &ldquo;AC kamar tidur sempat bocor air menetes ke kasur. Teknisi ACFix datang 40 menit setelah di-booking. Pengerjaannya bersih pakai cover plastik, pipanya disemprot tuntas, dan kasur tetap aman tanpa cipratan air.&rdquo;
              </p>
              <div className="acf-user-row">
                <img src="/acfix/customer-office.jpg" alt="Maya Caroline" />
                <div>
                  <strong>Maya Caroline</strong>
                  <small>Apartemen Sudirman Park · Pelanggan Cuci AC</small>
                </div>
              </div>
            </div>

            <div className="acf-review-card">
              <div className="acf-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#0284c7" color="#0284c7" />
                ))}
              </div>
              <p className="acf-review-comment">
                &ldquo;Kantor kami pakai 8 unit AC split. Pakai fitur kalkulator biayanya praktis banget langsung keluar estimasi diskon kuantitas. Teknisi tepat waktu dan pengerjaan cepat tanpa ganggu jam kerja staf.&rdquo;
              </p>
              <div className="acf-user-row">
                <img src="/acfix/customer-office.jpg" alt="Bramantyo Wicaksono" />
                <div>
                  <strong>Bramantyo Wicaksono</strong>
                  <small>General Affair Manager · Kantor Kuningan</small>
                </div>
              </div>
            </div>

            <div className="acf-review-card">
              <div className="acf-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#0284c7" color="#0284c7" />
                ))}
              </div>
              <p className="acf-review-comment">
                &ldquo;AC cafe sempat cuma keluar angin doang pas jam makan siang. Teknisi ACFix cek ternyata freon habis dan kapasitor lemah. Langsung diganti dan AC dingin menusuk lagi. Servis jempolan!&rdquo;
              </p>
              <div className="acf-user-row">
                <img src="/acfix/customer-office.jpg" alt="Hendra Kusuma" />
                <div>
                  <strong>Hendra Kusuma</strong>
                  <small>Owner Restoran &amp; Cafe · Kemang</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06: FAQ */}
      <section id="faq" className="acf-faq-section acf-wrap">
        <header className="acf-section-head">
          <div>
            <span className="acf-badge-tag">PERTANYAAN UMUM</span>
            <h2>Hal yang sering ditanyakan seputar<br /><em>jasa servis AC di ACFix.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20ACFix%2C%20saya%20ada%20pertanyaan%20seputar%20servis%20AC."
            target="_blank"
            rel="noreferrer"
            className="acf-link-more"
          >
            <span>Tanya via WhatsApp ↗</span>
          </a>
        </header>

        <div className="acf-faq-list">
          <details open>
            <summary>
              <span>01</span> Apakah teknisi benar-benar bisa datang di hari yang sama?<b>+</b>
            </summary>
            <p>
              Ya! Kami memiliki jaringan teknisi standby di seluruh wilayah Jakarta, Tangerang Selatan, Depok, dan Bekasi. Pemesanan yang masuk sebelum pukul 16:00 dapat dijadwalkan untuk kunjungan di hari yang sama.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Bagaimana prosedur klaim garansi jika AC kembali tidak dingin?<b>+</b>
            </summary>
            <p>
              Cukup hubungi WhatsApp kami dengan menyertakan nama dan tanggal pengerjaan servis. Tim kami akan menjadwalkan kunjungan teknisi untuk inspeksi dan perbaikan ulang tanpa biaya tambahan.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah pengerjaan cuci AC aman untuk perabotan dan lantai rumah?<b>+</b>
            </summary>
            <p>
              Sangat aman! Teknisi kami wajib menggunakan <strong>terpal cover plastik corong</strong> yang menyalurkan seluruh semprotan air limbah langsung ke dalam ember penampungan. Lantai dan dinding Anda tetap kering dan bersih.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech Studio membuatkan website jasa AC / service panggilan seperti ACFix?<b>+</b>
            </summary>
            <p>
              Tentu saja! Ini adalah concept demo project karya Naltech Studio. Kami merancang landing page jasa panggilan profesional berkonversi tinggi dengan fitur kalkulator estimasi biaya interaktif dan sistem WhatsApp booking otomatis.
            </p>
          </details>
        </div>
      </section>

      {/* Section 07: Final CTA */}
      <section className="acf-final-cta-section acf-wrap">
        <div className="acf-final-cta-card">
          <div className="acf-cta-glow" />
          <div className="acf-final-cta-inner">
            <span className="acf-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Ingin memiliki website jasa service AC &amp; panggilan<br />
              sekelas <em>ACFix?</em>
            </h2>
            <p>
              Naltech membantu pengusaha jasa AC, teknisi panggilan, dan bisnis perawatan properti memiliki website modern berkonversi tinggi dengan kalkulator estimasi harga interaktif.
            </p>
            <div className="acf-cta-actions">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20jasa%20service%20AC%20seperti%20ACFix."
                target="_blank"
                rel="noreferrer"
                className="acf-btn-cta-wa"
              >
                <MessageCircle size={18} />
                <span>Konsultasi Project Website Jasa AC</span>
                <ArrowUpRight size={18} />
              </a>
              <Link href="/" className="acf-btn-cta-portfolio">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="acf-footer acf-wrap">
        <div className="acf-footer-grid">
          <div className="acf-footer-col brand">
            <a className="acf-logo" href="#top">
              <span className="acf-logo-icon">
                <Snowflake size={20} />
              </span>
              <span className="acf-logo-text">
                AC<strong>FIX</strong> <small>ARCTIC CLIMATE CARE</small>
              </span>
            </a>
            <p>
              Layanan jasa service AC, cuci steam higienis, dan pengisian freon panggilan datang hari ini. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="acf-footer-col">
            <strong>Layanan Kami</strong>
            <a href="#harga">Cuci AC Reguler (Rp75K)</a>
            <a href="#harga">Service Perbaikan AC</a>
            <a href="#harga">Tambah Freon R32/R410A</a>
            <a href="#harga">Bongkar Pasang AC (Rp250K)</a>
          </div>

          <div className="acf-footer-col">
            <strong>Segmen Properti</strong>
            <a href="#segmen">Rumah Tinggal</a>
            <a href="#segmen">Perkantoran &amp; Ruko</a>
            <a href="#segmen">Apartemen &amp; Hunian</a>
            <a href="#segmen">Restoran &amp; Cafe</a>
          </div>

          <div className="acf-footer-col">
            <strong>Pengembang Studio</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="acf-address">Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="acf-footer-bottom">
          <small>
            © 2026 ACFix · Air Conditioning Service Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Garansi Dingin 30 Hari · SOP Bersih Anti-Becek</span>
        </div>
      </footer>
    </main>
  );
}
