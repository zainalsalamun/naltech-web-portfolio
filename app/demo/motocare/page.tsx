import type { Metadata } from 'next';
import Link from 'next/link';
import './motocare.css';
import MotorDiagnosticWidget from './MotorDiagnosticWidget';
import {
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Calendar,
  MapPin,
  Flame,
  Zap,
  Gauge,
  Phone,
  Star,
  Coffee,
  RotateCcw,
  BadgePercent,
  Cpu,
  Layers,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'MotoCare — Motor Bermasalah? Booking Servis, Datang Tinggal Servis by Naltech',
  description: 'Booking servis motor online tanpa antre. Diagnosa digital gejala motor brebet, sulit starter, CVT gredeg, dan suara kasar dengan estimasi biaya transparan dan garansi 14 hari.',
  alternates: {
    canonical: '/demo/motocare',
  },
  openGraph: {
    title: 'MotoCare — Motor Bermasalah? Booking Servis, Datang Tinggal Servis',
    description: 'Booking servis motor sekarang. Kami siapkan mekanik dan spare part sebelum kamu datang.',
    images: [{ url: `${siteUrl}/motocare/hero-workshop.jpg`, width: 1200, height: 630, alt: 'MotoCare Motorcycle Workshop' }],
  },
  twitter: {
    title: 'MotoCare — Motor Bermasalah? Booking Servis, Datang Tinggal Servis',
    description: 'Booking servis motor sekarang. Kami siapkan mekanik dan spare part sebelum kamu datang.',
    images: [`${siteUrl}/motocare/hero-workshop.jpg`],
  },
};

const motocareStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'MotoCare (Concept by Naltech)',
    description: 'Bengkel servis motor modern dengan sistem booking online dan diagnosa digital karya Naltech Studio.',
    url: `${siteUrl}/demo/motocare`,
    image: `${siteUrl}/motocare/hero-workshop.jpg`,
    priceRange: 'Rp55.000 - Rp250.000',
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
        name: 'MotoCare',
        item: `${siteUrl}/demo/motocare`,
      },
    ],
  },
];

const serviceList = [
  {
    name: 'Service Ringan',
    price: 'Rp75.000',
    duration: '30 Menit',
    desc: 'Pembersihan throttle body / karburator, cek celah busi, setel jarak main rem, semprot filter udara, dan cek tekanan ban.',
    popular: true,
  },
  {
    name: 'Ganti Oli Mesin & Gardan',
    price: 'Mulai Rp55.000',
    duration: '15 Menit',
    desc: 'Pilihan oli original Shell Advance, Motul, AHM Oil, Yamalube dengan kuras tuntas dan ganti ring baut oli.',
  },
  {
    name: 'Tune Up Injeksi Komprehensif',
    price: 'Mulai Rp150.000',
    duration: '45 Menit',
    desc: 'Infus injector cleaner bertekanan, diagnostic scanner ECU, pembersihan ruang bakar karbon, dan reset altitude.',
    popular: true,
  },
  {
    name: 'Service CVT Matic Lengkap',
    price: 'Mulai Rp100.000',
    duration: '40 Menit',
    desc: 'Pembersihan mangkok ganda, amplas kampas ganda, cek keausan roller & sliding piece, serta re-greasing pelumas high-temp.',
    popular: true,
  },
  {
    name: 'Ganti Kampas Rem & Bleeding',
    price: 'Mulai Rp45.000',
    duration: '20 Menit',
    desc: 'Pemasangan kampas rem orisinil depan/belakang dan kuras kuras minyak rem standar DOT 4 anti angin palsu.',
  },
  {
    name: 'Peremajaan Kelistrikan & Aki',
    price: 'Mulai Rp85.000',
    duration: '25 Menit',
    desc: 'Cek kesehatan battery digital (CCA test), penggantian bohlam LED/spul, dan proteksi soket kelistrikan anti korsleting.',
  },
];

export default function MotoCarePage() {
  return (
    <main className="mc-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(motocareStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="mc-promo-ribbon">
        <div className="mc-wrap mc-ribbon-content">
          <span className="mc-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO SERVIS BULAN INI</span>
          </span>
          <p>
            Gratis <strong>Digital Scanner 24 Titik</strong> + Diskon Oli 20% untuk booking pit slot hari ini dengan kode: <code>MOTOGAS</code>
          </p>
          <a href="#diagnosa" className="mc-ribbon-link">
            <span>Booking Sekarang</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="mc-demo-bar">
        <div className="mc-wrap mc-demo-inner">
          <Link href="/" className="mc-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Header */}
      <header className="mc-header">
        <div className="mc-wrap mc-header-inner">
          <a className="mc-logo" href="#top">
            <span className="mc-logo-icon">
              <Wrench size={22} />
            </span>
            <span className="mc-logo-text">
              MOTO<strong>CARE</strong> <small>DIGITAL WORKSHOP</small>
            </span>
          </a>

          <nav className="mc-nav" aria-label="Navigasi MotoCare">
            <a href="#diagnosa">Diagnosa Masalah</a>
            <a href="#layanan">Layanan &amp; Tarif</a>
            <a href="#keunggulan">Keunggulan</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#cabang">Cabang Pit</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="mc-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20MotoCare%2C%20saya%20mau%20konsultasi%20masalah%20motor%20saya."
              target="_blank"
              rel="noreferrer"
              className="mc-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Konsultasi Mekanik</span>
            </a>
            <a href="#diagnosa" className="mc-btn-header-cta">
              <Clock size={15} />
              <span>Booking Pit Servis</span>
            </a>
          </div>
        </div>
      </header>

      {/* Section 01: Hero */}
      <section id="top" className="mc-hero">
        <div className="mc-wrap">
          <div className="mc-hero-grid">
            <div className="mc-hero-copy">
              <div className="mc-hero-tag">
                <Flame size={14} className="mc-icon-orange" />
                <span>BENGKEL MOTOR MODERN · BEBAS ANTRE BERJAM-JAM</span>
              </div>

              <h1>
                Motor Kamu Mulai Aneh?
              </h1>

              <p className="mc-hero-sub">
                Booking servis sekarang. Kami siapkan mekanik dan spare part sebelum kamu datang, jadi begitu tiba motormu langsung masuk pit tanpa perlu antre berjam-jam.
              </p>

              <div className="mc-hero-actions">
                <a href="#diagnosa" className="mc-btn-hero-primary">
                  <Wrench size={17} />
                  <span>Booking Servis Sekarang</span>
                  <ArrowUpRight size={17} />
                </a>

                <a href="#layanan" className="mc-btn-hero-secondary">
                  <span>Lihat Tarif Servis</span>
                </a>
              </div>

              <div className="mc-hero-trust-row">
                <div className="mc-trust-item">
                  <Clock size={15} className="mc-icon-orange" />
                  <span>Datang Tinggal Servis</span>
                </div>
                <div className="mc-trust-item">
                  <ShieldCheck size={15} className="mc-icon-orange" />
                  <span>Garansi Servis 14 Hari</span>
                </div>
                <div className="mc-trust-item">
                  <CheckCircle2 size={15} className="mc-icon-orange" />
                  <span>100% Spare Part Orisinil</span>
                </div>
              </div>
            </div>

            <div className="mc-hero-visual">
              <img src="/motocare/hero-workshop.jpg" alt="Bengkel Servis Motor MotoCare" />
              <div className="mc-hero-floating-badge">
                <Cpu size={22} className="mc-icon-orange" />
                <div>
                  <strong>Pit Stop Siap Melayani</strong>
                  <small>Diagnostic Scanner &amp; Mekanik Tersertifikasi</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Interactive Diagnostic Tool */}
      <section id="diagnosa" className="mc-diagnostic-section">
        <div className="mc-wrap">
          <header className="mc-section-head center">
            <span className="mc-badge-tag">FITUR INTERAKTIF · DIGITAL DIAGNOSIS</span>
            <h2>Deteksi masalah motormu dalam hitungan detik<br /><em>sebelum masuk ke bengkel.</em></h2>
            <p>
              Pilih keluhan yang kamu rasakan, sistem kami akan menganalisa kemungkinan penyebab dan merekomendasikan solusi perbaikan terbaik.
            </p>
          </header>

          <MotorDiagnosticWidget />
        </div>
      </section>

      {/* Section 03: Layanan & Daftar Harga Transparan */}
      <section id="layanan" className="mc-pricing-section mc-wrap">
        <header className="mc-section-head center">
          <span className="mc-badge-tag">PAKET LAYANAN &amp; TARIF BENGKEL</span>
          <h2>Daftar harga servis transparan<br /><em>tanpa markup terselubung.</em></h2>
          <p>
            Seluruh biaya dikonfirmasi di awal sebelum mekanik mulai bekerja.
          </p>
        </header>

        <div className="mc-services-grid">
          {serviceList.map((svc, idx) => (
            <div key={idx} className={`mc-service-card ${svc.popular ? 'popular' : ''}`}>
              {svc.popular && <span className="mc-service-badge">Paling Sering Di-booking</span>}
              <div className="mc-service-head">
                <h4>{svc.name}</h4>
                <div className="mc-service-price">
                  <strong>{svc.price}</strong>
                </div>
              </div>
              <span className="mc-service-duration">
                <Clock size={13} /> Durasi: ~{svc.duration}
              </span>
              <p className="mc-service-desc">{svc.desc}</p>
              <div className="mc-service-foot">
                <a
                  href={`https://wa.me/6281573550017?text=Halo%20MotoCare%2C%20saya%20ingin%20booking%20layanan%20${encodeURIComponent(svc.name)}%20(${encodeURIComponent(svc.price)}).`}
                  target="_blank"
                  rel="noreferrer"
                  className="mc-btn-order-svc"
                >
                  <span>Pilih Layanan Ini</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 04: Keunggulan Bengkel Modern */}
      <section id="keunggulan" className="mc-advantages-section mc-wrap">
        <header className="mc-section-head center">
          <span className="mc-badge-tag">KENAPA MEMILIH MOTOCARE?</span>
          <h2>Standar servis modern yang membuat<br />motormu <em>selalu prima di jalan raya.</em></h2>
        </header>

        <div className="mc-adv-grid">
          <div className="mc-adv-card">
            <div className="mc-adv-icon">
              <Clock size={24} />
            </div>
            <h3>Datang Tinggal Servis</h3>
            <p>Sistem booking cerdas memastikan pit dan teknisi sudah menunggu Anda, bebas dari antrean fisik berjam-jam.</p>
          </div>

          <div className="mc-adv-card">
            <div className="mc-adv-icon">
              <ShieldCheck size={24} />
            </div>
            <h3>Garansi Servis 14 Hari</h3>
            <p>Garansi perbaikan gratis hingga 14 hari atau 500 KM jika timbul keluhan yang sama setelah servis.</p>
          </div>

          <div className="mc-adv-card">
            <div className="mc-adv-icon">
              <CheckCircle2 size={24} />
            </div>
            <h3>100% Spare Part Orisinil</h3>
            <p>Hanya menggunakan suku cadang resmi pabrikan bersegel barcode dengan jaminan keaslian.</p>
          </div>

          <div className="mc-adv-card">
            <div className="mc-adv-icon">
              <Coffee size={24} />
            </div>
            <h3>Ruang Tunggu Ber-AC &amp; WiFi</h3>
            <p>Tunggu motor dengan nyaman di lounge ber-AC dengan free WiFi kencang, kopi hangat, dan display monitor pit.</p>
          </div>
        </div>
      </section>

      {/* Section 05: Testimoni Pengendara Motor */}
      <section id="testimoni" className="mc-reviews-section">
        <div className="mc-wrap">
          <header className="mc-section-head center">
            <span className="mc-badge-tag">TESTIMONI PENGENDARA</span>
            <h2>Cerita para riders yang puas dengan<br /><em>kecepatan servis MotoCare.</em></h2>
          </header>

          <div className="mc-reviews-grid">
            <div className="mc-review-card">
              <div className="mc-rating-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f97316" color="#f97316" />
                ))}
              </div>
              <p className="mc-review-text">
                &ldquo;Vario 160 saya sempat brebet parah kalau pagi. Diagnosa di web bilang sistem injeksi kotor, pas booking langsung ditangani. 40 menit beres dan tarikan balik enteng banget!&rdquo;
              </p>
              <div className="mc-reviewer-row">
                <img src="/motocare/customer-rider.jpg" alt="Bagas Satria" />
                <div>
                  <strong>Bagas Satria</strong>
                  <small>Honda Vario 160 · Pelanggan Cabang Tebet</small>
                </div>
              </div>
            </div>

            <div className="mc-review-card">
              <div className="mc-rating-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f97316" color="#f97316" />
                ))}
              </div>
              <p className="mc-review-text">
                &ldquo;Service CVT di MotoCare rapi banget. Mangkok gandanya dibersihin kinclong, gredeg di putaran bawah langsung hilang total. Harganya transparan nggak dimahal-mahalin.&rdquo;
              </p>
              <div className="mc-reviewer-row">
                <img src="/motocare/customer-rider.jpg" alt="Rizky Fauzi" />
                <div>
                  <strong>Rizky Fauzi</strong>
                  <small>Yamaha NMAX 155 · Pelanggan Cabang Kemang</small>
                </div>
              </div>
            </div>

            <div className="mc-review-card">
              <div className="mc-rating-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f97316" color="#f97316" />
                ))}
              </div>
              <p className="mc-review-text">
                &ldquo;Paling suka sama ruang tunggunya yang dingin dan ada WiFi kencang. Bisa sambil kerja laptopan sementara motor di-tune up mekanik.&rdquo;
              </p>
              <div className="mc-reviewer-row">
                <img src="/motocare/customer-rider.jpg" alt="Dika Mahendra" />
                <div>
                  <strong>Dika Mahendra</strong>
                  <small>Vespa Sprint 150 · Pelanggan Cabang Fatmawati</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06: Cabang & Lokasi Bengkel */}
      <section id="cabang" className="mc-branches-section mc-wrap">
        <header className="mc-section-head">
          <div>
            <span className="mc-badge-tag">JARINGAN BENGKEL</span>
            <h2>Temukan cabang MotoCare terdekat<br /><em>di kotamu.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20MotoCare%2C%20saya%20mau%20tanya%20arah%20lokasi%20bengkel."
            target="_blank"
            rel="noreferrer"
            className="mc-link-more"
          >
            <span>Petunjuk Arah Google Maps ↗</span>
          </a>
        </header>

        <div className="mc-branches-grid">
          <div className="mc-branch-card">
            <h4>MotoCare Tebet</h4>
            <p><MapPin size={14} className="mc-icon-orange" /> Jl. Tebet Raya No. 45, Jakarta Selatan</p>
            <small>Kapasitas: 4 Pit Stop · Ruang Tunggu AC</small>
            <div className="mc-branch-action">
              <a href="#diagnosa" className="mc-btn-branch-book">Booking Pit Tebet</a>
            </div>
          </div>

          <div className="mc-branch-card">
            <h4>MotoCare Kemang</h4>
            <p><MapPin size={14} className="mc-icon-orange" /> Jl. Kemang Selatan No. 12, Jakarta Selatan</p>
            <small>Kapasitas: 3 Pit Stop · Coffee Corner</small>
            <div className="mc-branch-action">
              <a href="#diagnosa" className="mc-btn-branch-book">Booking Pit Kemang</a>
            </div>
          </div>

          <div className="mc-branch-card">
            <h4>MotoCare Fatmawati</h4>
            <p><MapPin size={14} className="mc-icon-orange" /> Jl. RS Fatmawati No. 88, Jakarta Selatan</p>
            <small>Kapasitas: 5 Pit Stop · Dyno Tester</small>
            <div className="mc-branch-action">
              <a href="#diagnosa" className="mc-btn-branch-book">Booking Pit Fatmawati</a>
            </div>
          </div>

          <div className="mc-branch-card">
            <h4>MotoCare BSD Serpong</h4>
            <p><MapPin size={14} className="mc-icon-orange" /> Ruko Boulevard Gading Serpong No. 19, Tangerang</p>
            <small>Kapasitas: 4 Pit Stop · Ruang Tunggu AC</small>
            <div className="mc-branch-action">
              <a href="#diagnosa" className="mc-btn-branch-book">Booking Pit BSD</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 07: FAQ */}
      <section id="faq" className="mc-faq-section mc-wrap">
        <header className="mc-section-head">
          <div>
            <span className="mc-badge-tag">PERTANYAAN UMUM</span>
            <h2>Hal yang sering ditanyakan seputar<br /><em>servis motor di MotoCare.</em></h2>
          </div>
        </header>

        <div className="mc-faq-list">
          <details open>
            <summary>
              <span>01</span> Mengapa dengan booking online saya tidak perlu mengantre?<b>+</b>
            </summary>
            <p>
              Dengan melakukan booking online, sistem kami memesankan 1 slot pit dan mengalokasikan mekanik khusus sesuai jam yang Anda pilih. Begitu tiba di bengkel, motor Anda langsung masuk pit pengerjaan.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Bagaimana jika ada suku cadang yang perlu diganti saat servis?<b>+</b>
            </summary>
            <p>
              Mekanik kami akan melakukan inspeksi terlebih dahulu dan mengonfirmasi kondisi fisik suku cadang kepada Anda beserta rincian harganya. Penggantian hanya akan dilakukan setelah mendapatkan persetujuan Anda.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah berlaku garansi untuk pengerjaan servis mesin &amp; CVT?<b>+</b>
            </summary>
            <p>
              Ya, seluruh pengerjaan servis di MotoCare dilindungi oleh Garansi Servis 14 Hari atau 500 KM. Jika gejala yang sama muncul kembali, kami akan memeriksa dan memperbaikinya tanpa tambahan biaya jasa.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech Studio membuatkan website bengkel / otomotif dengan fitur diagnosa seperti MotoCare?<b>+</b>
            </summary>
            <p>
              Tentu saja! Ini adalah concept demo project dari Naltech Studio. Kami merancang sistem booking servis interaktif, diagnostic engine gejala kerusakan, kalkulator biaya suku cadang, dan integrasi WhatsApp booking otomatis untuk bisnis otomotif Anda.
            </p>
          </details>
        </div>
      </section>

      {/* Section 08: Final CTA */}
      <section className="mc-final-cta-section mc-wrap">
        <div className="mc-final-cta-card">
          <div className="mc-cta-glow" />
          <div className="mc-final-cta-inner">
            <span className="mc-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Ingin memiliki website bengkel &amp; booking pit<br />
              sekelas <em>MotoCare?</em>
            </h2>
            <p>
              Naltech membantu bengkel motor, authorized dealer, dan pusat perawatan otomotif membangun platform digital modern dengan fitur diagnosa gejala interaktif dan sistem booking tanpa antre.
            </p>
            <div className="mc-cta-actions">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20bengkel%20atau%20otomotif%20seperti%20MotoCare."
                target="_blank"
                rel="noreferrer"
                className="mc-btn-cta-wa"
              >
                <MessageCircle size={18} />
                <span>Konsultasi Project Website Bengkel</span>
                <ArrowUpRight size={18} />
              </a>
              <Link href="/" className="mc-btn-cta-portfolio">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mc-footer mc-wrap">
        <div className="mc-footer-grid">
          <div className="mc-footer-col brand">
            <a className="mc-logo" href="#top">
              <span className="mc-logo-icon">
                <Wrench size={20} />
              </span>
              <span className="mc-logo-text">
                MOTO<strong>CARE</strong> <small>DIGITAL WORKSHOP</small>
              </span>
            </a>
            <p>
              Bengkel motor modern dengan sistem booking online tanpa antre dan diagnosa digital transparan. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="mc-footer-col">
            <strong>Layanan Servis</strong>
            <a href="#layanan">Service Ringan (Rp75K)</a>
            <a href="#layanan">Ganti Oli Mesin &amp; Gardan</a>
            <a href="#layanan">Tune Up Injeksi &amp; ECU</a>
            <a href="#layanan">Service CVT Matic (Rp100K)</a>
          </div>

          <div className="mc-footer-col">
            <strong>Cabang Bengkel</strong>
            <a href="#cabang">MotoCare Tebet</a>
            <a href="#cabang">MotoCare Kemang</a>
            <a href="#cabang">MotoCare Fatmawati</a>
            <a href="#cabang">MotoCare BSD Serpong</a>
          </div>

          <div className="mc-footer-col">
            <strong>Pengembang Studio</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="mc-address">Jakarta Selatan, Indonesia</p>
          </div>
        </div>

        <div className="mc-footer-bottom">
          <small>
            © 2026 MotoCare · Motorcycle Workshop Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Garansi Servis 14 Hari / 500 KM · 100% Spare Part Orisinil</span>
        </div>
      </footer>
    </main>
  );
}
