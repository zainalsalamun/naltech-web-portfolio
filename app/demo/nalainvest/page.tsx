import type { Metadata } from 'next';
import Link from 'next/link';
import './nalainvest.css';
import MutualFundSearchWidget from './MutualFundSearchWidget';
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Landmark,
  Building2,
  Lock,
  Percent,
  CheckCircle2,
  ArrowUpRight,
  PieChart,
  Users,
  Coins,
  MessageCircle,
  Phone,
  Award,
  Star,
  Zap,
  Clock,
  HelpCircle,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'NalaInvest — Platform Marketplace Investasi Reksadana Berizin OJK by Naltech',
  description: 'Marketplace investasi reksadana online terpercaya, aman, dan berizin resmi OJK. Dilengkapi ragam pilihan reksadana pasar uang, obligasi, saham, syariah, dan multi-info slider.',
  alternates: {
    canonical: '/demo/nalainvest',
  },
  openGraph: {
    title: 'NalaInvest — Platform Marketplace Investasi Reksadana by Naltech',
    description: 'Marketplace investasi reksadana terpercaya berizin OJK dengan modal mulai Rp10.000.',
    images: [{ url: `${siteUrl}/invest/hero-chart.jpg`, width: 1200, height: 630, alt: 'NalaInvest Mutual Fund Marketplace' }],
  },
  twitter: {
    title: 'NalaInvest — Platform Marketplace Investasi Reksadana by Naltech',
    description: 'Marketplace investasi reksadana terpercaya berizin OJK dengan modal mulai Rp10.000.',
    images: [`${siteUrl}/invest/hero-chart.jpg`],
  },
};

const investStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'NalaInvest (Concept by Naltech)',
    description: 'Portal marketplace investasi reksadana dan obligasi online karya Naltech Studio.',
    url: `${siteUrl}/demo/nalainvest`,
    image: `${siteUrl}/invest/hero-chart.jpg`,
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
        name: 'NalaInvest',
        item: `${siteUrl}/demo/nalainvest`,
      },
    ],
  },
];

export default function NalaInvestPage() {
  return (
    <main className="ni-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(investStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="ni-promo-ribbon">
        <div className="ni-wrap ni-ribbon-content">
          <span className="ni-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO INVESTOR BARU 2026</span>
          </span>
          <p>
            Cashback Unit Reksadana <strong>10% s.d. Rp1.500.000</strong> untuk transaksi pertama pakai kode: <code>NALACUAN</code>
          </p>
          <a href="#cari-reksadana" className="ni-ribbon-link">
            <span>Klaim Cashback</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="ni-demo-bar">
        <div className="ni-wrap ni-demo-inner">
          <Link href="/" className="ni-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="ni-header">
        <div className="ni-wrap ni-header-inner">
          <a className="ni-logo" href="#top">
            <span className="ni-logo-icon">
              <Landmark size={22} />
            </span>
            <span className="ni-logo-text">
              NALA<strong>INVEST</strong> <small>MARKETPLACE</small>
            </span>
          </a>

          <nav className="ni-nav" aria-label="Navigasi NalaInvest">
            <a href="#cari-reksadana">Cari Reksadana</a>
            <a href="#jenis-produk">Ragam Produk</a>
            <a href="#kalkulator">Simulasi Cuan</a>
            <a href="#cara-mulai">Cara Mulai</a>
            <a href="#keamanan">Keamanan OJK</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="ni-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20NalaInvest%2C%20saya%20ingin%20konsultasi%20pembukaan%20akun%20investasi%20reksadana."
              target="_blank"
              rel="noreferrer"
              className="ni-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Bantuan Finansial</span>
            </a>
            <a href="#cari-reksadana" className="ni-btn-header-cta">
              <Zap size={15} />
              <span>Buka Akun Gratis</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="ni-hero">
        <div className="ni-wrap">
          <div className="ni-hero-copy">
            <div className="ni-hero-tag">
              <ShieldCheck size={14} className="ni-icon-green" />
              <span>PORTAL MARKETPLACE REKSADANA NO. 1 BERIZIN RESMI OJK</span>
            </div>

            <h1>
              Investasi reksadana lebih mudah &amp; aman,<br />
              tumbuhkan aset <em>mulai dari Rp10.000.</em>
            </h1>

            <p className="ni-hero-sub">
              Akses puluhan produk reksadana terbaik dari manajer investasi terkemuka. Dilengkapi panduan cerdas, slider promo informatif, dan form pencarian simpel yang dirancang ramah bagi pemula.
            </p>
          </div>

          {/* Core Interactive Component: Multi-Info Slider + Simple Fund Search & Screening Form + Calculator */}
          <MutualFundSearchWidget />
        </div>
      </section>

      {/* Section 01: Product Categories for Beginners (Ragam Jenis Produk Reksadana) */}
      <section id="jenis-produk" className="ni-categories-section ni-wrap">
        <header className="ni-section-head center">
          <span className="ni-badge-tag">01 · RAGAM PRODUK REKSADANA</span>
          <h2>Pilihan produk lengkap yang<br />sesuai dengan <em>profil risikomu.</em></h2>
          <p>
            Mulai dari produk berisiko sangat rendah untuk dana darurat hingga instrumen saham bertumbuh untuk dana pensiun masa depan.
          </p>
        </header>

        <div className="ni-categories-grid">
          <div className="ni-cat-card">
            <div className="ni-cat-icon">
              <ShieldCheck size={26} />
            </div>
            <span className="ni-cat-risk low">Risiko Sangat Rendah</span>
            <h3>Reksadana Pasar Uang</h3>
            <p>Alokasi pada deposito perbankan dan obligasi jangka pendek jatuh tempo &lt; 1 tahun. Nilai stabil naik setiap hari tanpa fluktuasi tajam.</p>
            <div className="ni-cat-bottom">
              <small>Estimasi Return:</small>
              <strong>5.5% – 6.5% / tahun</strong>
            </div>
          </div>

          <div className="ni-cat-card">
            <div className="ni-cat-icon">
              <TrendingUp size={26} />
            </div>
            <span className="ni-cat-risk medium">Risiko Rendah–Sedang</span>
            <h3>Reksadana Pendapatan Tetap</h3>
            <p>Alokasi minimal 80% pada obligasi korporasi &amp; Surat Berharga Negara (SBN). Memberikan imbal hasil lebih tinggi dari deposito perbankan.</p>
            <div className="ni-cat-bottom">
              <small>Estimasi Return:</small>
              <strong>7.2% – 9.5% / tahun</strong>
            </div>
          </div>

          <div className="ni-cat-card">
            <div className="ni-cat-icon">
              <Zap size={26} />
            </div>
            <span className="ni-cat-risk high">Risiko Tinggi</span>
            <h3>Reksadana Saham</h3>
            <p>Alokasi minimal 80% pada saham emiten terdaftar di Bursa Efek Indonesia (BEI). Potensi pertumbuhan modal paling tinggi untuk tujuan &gt; 5 tahun.</p>
            <div className="ni-cat-bottom">
              <small>Estimasi Return:</small>
              <strong>12.0% – 18.0% / tahun</strong>
            </div>
          </div>

          <div className="ni-cat-card">
            <div className="ni-cat-icon">
              <Coins size={26} />
            </div>
            <span className="ni-cat-risk sharia">100% Syariah DSN-MUI</span>
            <h3>Reksadana Syariah</h3>
            <p>Dikelola dengan prinsip syariah bebas riba, gharar, dan maysir. Mengalokasikan dana hanya pada Daftar Efek Syariah (DES) terverifikasi OJK.</p>
            <div className="ni-cat-bottom">
              <small>Estimasi Return:</small>
              <strong>6.0% – 15.0% / tahun</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: 3 Easy Steps to Start (Cara Mulai bagi Orang Awam) */}
      <section id="cara-mulai" className="ni-steps-section ni-wrap">
        <header className="ni-section-head center">
          <span className="ni-badge-tag">02 · PANDUAN PRAKTIS INVESTOR AWAM</span>
          <h2>Mulai berinvestasi hanya dalam<br /><em>3 langkah tanpa ribet.</em></h2>
          <p>
            100% digital tanpa formulir kertas dan tanpa perlu datang ke kantor cabang.
          </p>
        </header>

        <div className="ni-steps-grid">
          <div className="ni-step-card">
            <span className="ni-step-num">01</span>
            <h3>Registrasi Online 3 Menit</h3>
            <p>Daftar akun lewat aplikasi dengan verifikasi e-KTP secara instan. Rekening dana investor langsung siap digunakan.</p>
          </div>

          <div className="ni-step-card">
            <span className="ni-step-num">02</span>
            <h3>Pilih Produk &amp; Beli</h3>
            <p>Gunakan form filter atau ikuti rekomendasi Robo-Advisor AI. Bayar praktis lewat QRIS, transfer bank, atau e-wallet mulai Rp10.000.</p>
          </div>

          <div className="ni-step-card">
            <span className="ni-step-num">03</span>
            <h3>Pantau Aset &amp; Cairkan Kapan Saja</h3>
            <p>Pantau pertumbuhan portofolio secara real-time. Dana bisa dicairkan kapan saja langsung ke rekening bank pribadimu tanpa denda.</p>
          </div>
        </div>
      </section>

      {/* Section 03: Security & OJK Compliance */}
      <section id="keamanan" className="ni-security-section">
        <div className="ni-wrap ni-security-grid">
          <div className="ni-security-copy">
            <span className="ni-badge-tag">03 · STANDAR KEAMANAN TERTINGGI</span>
            <h2>Investasi tenang,<br /><em>diawasi ketat regulator resmi.</em></h2>
            <p>
              NalaInvest berkomitmen menjaga keamanan dana dan data pribadi investor dengan standar perbankan kelas dunia.
            </p>
            <ul className="ni-security-list">
              <li>
                <CheckCircle2 size={16} className="ni-icon-green" />
                <span>Berizin resmi sebagai Agen Penjual Efek Reksa Dana (APERD) dari OJK RI</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="ni-icon-green" />
                <span>Dana aman tersimpan di Bank Kustodian independen (BCA, Mandiri, HSBC, Standard Chartered)</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="ni-icon-green" />
                <span>Enkripsi 256-bit SSL dan verifikasi biometrik dua langkah (2FA)</span>
              </li>
            </ul>
            <div className="ni-security-actions">
              <a href="#cari-reksadana" className="ni-btn-primary">
                <ShieldCheck size={16} />
                <span>Buka Rekening Investasi Aman</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="ni-security-visual">
            <img src="/invest/feature-security.jpg" alt="Keamanan Terjamin Berizin OJK" />
            <div className="ni-security-floating-card">
              <ShieldCheck size={20} className="ni-icon-green" />
              <div>
                <strong>Berizin &amp; Diawasi OJK</strong>
                <small>Lisensi APERD No. KEP-18/PM.21/2026</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Testimonials */}
      <section className="ni-reviews-section ni-wrap">
        <div className="ni-review-card">
          <span className="ni-quote-mark">“</span>
          <blockquote>
            Dulu saya takut investasi karena merasa awam dan mikir butuh modal jutaan. Di NalaInvest, ada form pencarian dan slider edukasi yang jelas banget! Saya mulai nabung rutin Rp20.000/hari di reksadana pasar uang dan saham, sekarang dana darurat saya sudah terkumpul rapi dan terus berbunga.
          </blockquote>
          <div className="ni-reviewer">
            <div className="ni-rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#10B981" color="#10B981" />
              ))}
            </div>
            <strong>Fauzan Prasetya</strong>
            <small>Karyawan Swasta di Jakarta · Investor Aktif Sejak 2024</small>
          </div>
        </div>
      </section>

      {/* Section 05: FAQ */}
      <section id="faq" className="ni-faq-section ni-wrap">
        <header className="ni-section-head">
          <div>
            <span className="ni-badge-tag">05 · PERTANYAAN UMUM</span>
            <h2>Semua hal yang sering ditanyakan<br /><em>seputar reksadana di NalaInvest.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaInvest%2C%20saya%20ada%20pertanyaan%20seputar%20investasi."
            target="_blank"
            rel="noreferrer"
            className="ni-link-more"
          >
            <span>Hubungi Customer Support WhatsApp ↗</span>
          </a>
        </header>

        <div className="ni-faq-list">
          <details open>
            <summary>
              <span>01</span> Apakah keuntungan dari investasi reksadana dikenakan pajak?<b>+</b>
            </summary>
            <p>
              Berdasarkan UU Perpajakan Republik Indonesia (UU PPh Pasal 4 Ayat 3), keuntungan (capital gain) dan pembagian hasil dari reksadana <strong>BUKAN merupakan objek pajak</strong>. Artinya semua return yang Anda dapatkan adalah bersih 100%.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Berapa lama waktu yang dibutuhkan untuk pencairan dana (redemption)?<b>+</b>
            </summary>
            <p>
              Pencairan Reksadana Pasar Uang membutuhkan waktu H+0 hingga H+1 hari kerja. Untuk Reksadana Saham dan Pendapatan Tetap diproses maksimal H+2 hingga H+7 hari kerja sesuai ketentuan regulasi OJK langsung masuk ke rekening bank Anda.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah uang saya aman jika aplikasi NalaInvest mengalami gangguan?<b>+</b>
            </summary>
            <p>
              Sangat aman! Dana dan unit penyertaan reksadana Anda dicatat resmi di Kustodian Sentral Efek Indonesia (KSEI) dan disimpan di Bank Kustodian independen (seperti BCA, Mandiri, HSBC), bukan di rekening perusahaan NalaInvest.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech Studio membuatkan website fintech atau marketplace investasi seperti NalaInvest?<b>+</b>
            </summary>
            <p>
              Sangat bisa! Ini adalah concept project dari Naltech Studio. Kami merancang website fintech, wealth management, portal reksadana, dan dashboard kalkulator finansial interaktif yang kredibel dan memikat investor.
            </p>
          </details>
        </div>
      </section>

      {/* Section 06: Final CTA */}
      <section className="ni-cta-section ni-wrap">
        <div className="ni-cta-card">
          <div className="ni-cta-glow" />
          <div className="ni-cta-inner">
            <span className="ni-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Ingin memiliki website lembaga keuangan &amp; fintech<br />
              sekelas <em>NalaInvest Marketplace?</em>
            </h2>
            <p>
              Naltech membantu institusi keuangan, manajer investasi, sekuritas, dan startup fintech membangun portal investasi berkeamanan tinggi dengan kalkulator return interaktif dan form pencarian produk yang memukau.
            </p>
            <div className="ni-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20fintech%20atau%20lembaga%20keuangan%20seperti%20NalaInvest."
                target="_blank"
                rel="noreferrer"
                className="ni-btn-primary"
              >
                <MessageCircle size={17} />
                <span>Konsultasi Project Website Fintech</span>
                <ArrowUpRight size={17} />
              </a>
              <Link href="/" className="ni-btn-secondary">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ni-footer ni-wrap">
        <div className="ni-footer-grid">
          <div className="ni-footer-col brand">
            <a className="ni-logo" href="#top">
              <span className="ni-logo-icon">
                <Landmark size={20} />
              </span>
              <span className="ni-logo-text">
                NALA<strong>INVEST</strong> <small>MARKETPLACE</small>
              </span>
            </a>
            <p>
              Marketplace reksadana dan portal investasi terpercaya. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="ni-footer-col">
            <strong>Produk Investasi</strong>
            <a href="#cari-reksadana">Reksadana Pasar Uang</a>
            <a href="#cari-reksadana">Reksadana Pendapatan Tetap</a>
            <a href="#cari-reksadana">Reksadana Saham</a>
            <a href="#cari-reksadana">Reksadana Campuran</a>
            <a href="#cari-reksadana">Reksadana Syariah</a>
          </div>

          <div className="ni-footer-col">
            <strong>Fitur &amp; Edukasi</strong>
            <a href="#kalkulator">Kalkulator Bunga Majemuk</a>
            <a href="#top">Robo-Advisor AI</a>
            <a href="#cara-mulai">Panduan Investor Pemula</a>
            <a href="#keamanan">Izin &amp; Lisensi OJK</a>
          </div>

          <div className="ni-footer-col">
            <strong>Pengembang Studio</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="ni-address">Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="ni-footer-bottom">
          <small>
            © 2026 NalaInvest Marketplace · Fintech Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Berizin &amp; Diawasi Otoritas Jasa Keuangan (OJK)</span>
        </div>
      </footer>
    </main>
  );
}
