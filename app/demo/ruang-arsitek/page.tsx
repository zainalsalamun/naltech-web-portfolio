import type { Metadata } from 'next';
import Link from 'next/link';
import './ruang-arsitek.css';
import ArchitectFeeEstimator from './ArchitectFeeEstimator';
import ArchitecturePortfolioGallery from './ArchitecturePortfolioGallery';
import {
  Compass,
  Layers,
  Ruler,
  Building2,
  Home,
  Sparkles,
  MapPin,
  Eye,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  Calculator,
  Award,
  Users,
  HardHat,
  FileText,
  Phone,
  Clock,
  Sparkle,
  TreePine,
  Check,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'RUANG/STUDIO — Studio Arsitektur, Desain Interior & Master Planning by Naltech',
  description: 'Studio arsitektur kontemporer yang merancang hunian tropis mewah, villa privat, dan ruang komersial dengan fungsi jernih, material jujur, dan efisiensi ruang jangka panjang.',
  alternates: {
    canonical: '/demo/ruang-arsitek',
  },
  openGraph: {
    title: 'RUANG/STUDIO — Ruang untuk Hidup Lebih Baik',
    description: 'Studio arsitektur dan interior kontemporer dengan perancangan berstandar IAI dan efisiensi ruang tinggi.',
    images: [{ url: `${siteUrl}/architecture/hero-villa.jpg`, width: 1200, height: 630, alt: 'RUANG/STUDIO Architecture' }],
  },
  twitter: {
    title: 'RUANG/STUDIO — Ruang untuk Hidup Lebih Baik',
    description: 'Studio arsitektur dan interior kontemporer dengan perancangan berstandar IAI dan efisiensi ruang tinggi.',
    images: [`${siteUrl}/architecture/hero-villa.jpg`],
  },
};

const architectStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'RUANG/STUDIO Architecture & Interior (Concept by Naltech)',
    description: 'Biro arsitektur dan perancangan desain interior profesional dengan sistem estimasi biaya terintegrasi karya Naltech Studio.',
    url: `${siteUrl}/demo/ruang-arsitek`,
    image: `${siteUrl}/architecture/hero-villa.jpg`,
    priceRange: 'Rp150.000 - Rp250.000 / m²',
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
        name: 'RUANG/STUDIO Arsitek',
        item: `${siteUrl}/demo/ruang-arsitek`,
      },
    ],
  },
];

const pillarsList = [
  {
    title: 'Architectural Design (Hunian & Villa)',
    desc: 'Perancangan arsitektur hunian tinggal, villa privat, dan townhouse dengan pendekatan tropical modern, sirkulasi udara alami (cross-ventilation), dan pencahayaan maksimal.',
    icon: Home,
    features: ['Analisis orientasi matahari & angin', 'Optimalisasi denah fungsional', 'Fasad estetis bernilai tinggi', 'Gambar 3D photorealistic render'],
  },
  {
    title: 'Interior Architecture & Custom Fit-Out',
    desc: 'Desain ruang dalam yang menyatu harmonis dengan arsitektur bangunan. Pemilihan palet material alami, custom built-in furniture, dan mood lighting yang menenangkan.',
    icon: Layers,
    features: ['Layout furnitur ergonomis', 'Kurasi material marmer & kayu', 'Rancangan pencahayaan arsitektural', 'Detail joinery perabot custom'],
  },
  {
    title: 'Commercial & Hospitality Spaces',
    desc: 'Merancang kafe, coffee roastery, butik hotel, restoran, dan kantor kreatif yang memiliki karakter visual kuat untuk meningkatkan daya tarik pelanggan dan nilai bisnis.',
    icon: Building2,
    features: ['Sirkulasi operasional efisien', 'Spot visual ikonik (Instagrammable)', 'Ketahanan material komersial', 'Integrasi sistem MEP & keamanan'],
  },
  {
    title: 'Master Planning & Tropical Landscape',
    desc: 'Penataan kawasan hunian terpadu, resort compound, dan lanskap taman tropis yang mengintegrasikan kontur alami lahan dengan harmoni bangunan.',
    icon: TreePine,
    features: ['Penataan zonasi massa bangunan', 'Sistem drainase & resapan ramah lingkungan', 'Desain hardscape & softscape hijau', 'Jalur sirkulasi kendaraan & pejalan kaki'],
  },
];

const workflowSteps = [
  {
    step: '01',
    title: 'Briefing & Analisis Lahan',
    desc: 'Diskusi mendalam mengenai kebutuhan ruang, gaya hidup klien, anggaran, serta survei orientasi tapak lahan dan peraturan zonasi PBG setempat.',
  },
  {
    step: '02',
    title: 'Konsep Skematik & 3D Render',
    desc: 'Pengembangan konsep denah dasar (zoning) dan visualisasi 3D photorealistic eksterior & interior untuk menyamakan persepsi estetika.',
  },
  {
    step: '03',
    title: 'Gambar Kerja Teknis (DED)',
    desc: 'Penyusunan gambar detail arsitektur, perhitungan struktur beton/baja oleh ahli sipil, serta instalasi kelistrikan & perpipaan (MEP).',
  },
  {
    step: '04',
    title: 'Penyusunan RAB & Pemilihan Kontraktor',
    desc: 'Penyusunan Rencana Anggaran Biaya (RAB) dan Bill of Quantity (BoQ) secara presisi untuk panduan tender kontraktor yang transparan.',
  },
  {
    step: '05',
    title: 'Pengawasan Berkala Lapangan',
    desc: 'Kunjungan berkala tim arsitek ke lokasi proyek untuk memastikan proses konstruksi fisik berjalan presisi sesuai gambar kerja DED.',
  },
];

const packageTiers = [
  {
    name: 'Paket Konsep Skematik',
    rate: 'Rp150.000',
    unit: '/ m² Luas Bangunan',
    desc: 'Cocok bagi Anda yang membutuhkan arahan konsep awal, penataan denah, dan visualisasi 3D sebelum memutuskan pembangunan.',
    deliverables: [
      'Site plan & penataan denah lantai (2D)',
      'Gambar tampak & potongan arsitektural',
      'Visualisasi 3D render eksterior (5 View)',
      'Moodboard material & palet warna',
      '2x Sesi revisi skematik',
    ],
    highlight: false,
  },
  {
    name: 'Paket Komplit DED & RAB',
    rate: 'Rp250.000',
    unit: '/ m² Luas Bangunan',
    desc: 'Paket paling lengkap dan diminati. Siap langsung digunakan kontraktor untuk pembangunan fisik dan pengurusan izin PBG.',
    deliverables: [
      'Seluruh output Paket Skematik 3D',
      'Gambar Kerja Detail (DED Arsitektur Lengkap)',
      'Gambar Teknis Struktur & Pembesian Sipil',
      'Gambar MEP (Kelistrikan, Air Bersih/Kotor, AC)',
      'Rencana Anggaran Biaya (RAB) & BoQ Detail',
      'Bantuan teknis pengurusan izin PBG / IMB',
      '3x Sesi revisi desain',
    ],
    highlight: true,
  },
  {
    name: 'Paket Interior & Turnkey Fit-Out',
    rate: 'Konsultasi Khusus',
    unit: '/ Proyek Spesifik',
    desc: 'Layanan terintegrasi desain interior, kurasi furnitur custom, pengawasan produksi workshop, hingga instalasi di lokasi.',
    deliverables: [
      'Denah layout interior & ceiling plan',
      '3D render interior per ruangan',
      'Detail drawing custom cabinetry & joinery',
      'Spesifikasi lampu, saklar, & mood lighting',
      'Pengawasan instalasi fit-out interior',
    ],
    highlight: false,
  },
];

export default function RuangArsitekPage() {
  return (
    <main className="ras-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(architectStructuredData) }}
      />

      {/* Top Promo Ribbon */}
      <div className="ras-promo-ribbon">
        <div className="ras-wrap ras-ribbon-content">
          <span className="ras-ribbon-badge">
            <Award size={13} />
            <span>IAI CERTIFIED PRINCIPAL ARCHITECT</span>
          </span>
          <p>
            Konsultasi Awal &amp; Review Sketsa Lahan <strong>Bebas Biaya via Online</strong>. Area Jabodetabek, Bandung, Bali, &amp; Luar Kota.
          </p>
          <a href="#kalkulator" className="ras-ribbon-link">
            <span>Hitung Biaya Desain</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="ras-demo-bar">
        <div className="ras-wrap ras-demo-inner">
          <Link href="/" className="ras-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Header */}
      <header className="ras-header">
        <div className="ras-wrap ras-header-inner">
          <a className="ras-logo" href="#top">
            <span className="ras-logo-icon">
              <Compass size={20} />
            </span>
            <span className="ras-logo-text">
              RUANG<strong>/STUDIO</strong> <small>ARCHITECTURE &amp; INTERIORS</small>
            </span>
          </a>

          <nav className="ras-nav" aria-label="Navigasi RUANG/STUDIO">
            <a href="#layanan">Layanan</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#kalkulator">Kalkulator Biaya</a>
            <a href="#alur">Alur Desain</a>
            <a href="#paket">Paket Jasa</a>
            <a href="#principal">Principal</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="ras-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20RUANG%2FSTUDIO%2C%20saya%20ingin%20konsultasi%20mengenai%20rencana%20desain%20arsitektur%20bangunan."
              target="_blank"
              rel="noreferrer"
              className="ras-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Chat Studio</span>
            </a>
            <a href="#kalkulator" className="ras-btn-header-cta">
              <Calculator size={15} />
              <span>Konsultasi Proyek</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="ras-hero">
        <div className="ras-wrap">
          <div className="ras-hero-grid">
            <div className="ras-hero-copy">
              <div className="ras-hero-tag">
                <Compass size={14} className="ras-icon-sienna" />
                <span>ARCHITECTURE · INTERIOR · MASTER PLANNING</span>
              </div>

              <h1>
                Ruang untuk Hidup Lebih Baik
              </h1>

              <p className="ras-hero-sub">
                Studio arsitektur yang merancang hunian privat dan ruang komersial dengan fungsi jernih, material jujur, dan efisiensi ruang yang bernilai tinggi jangka panjang. Menghadirkan keseimbangan antara kenyamanan tropis dan estetika kontemporer.
              </p>

              <div className="ras-hero-actions">
                <a href="#kalkulator" className="ras-btn-hero-primary">
                  <Calculator size={17} />
                  <span>Konsultasi &amp; Hitung Biaya Desain</span>
                  <ArrowUpRight size={17} />
                </a>

                <a href="#portofolio" className="ras-btn-hero-secondary">
                  <span>Lihat Portofolio Karya</span>
                </a>
              </div>

              {/* Operating Info Badges */}
              <div className="ras-hero-badges-row">
                <div className="ras-badge-item">
                  <Award size={15} className="ras-icon-sienna" />
                  <span>45+ Proyek Terbangun</span>
                </div>
                <div className="ras-badge-item">
                  <ShieldCheck size={15} className="ras-icon-sienna" />
                  <span>Anggota Resmi IAI &amp; Izin PBG</span>
                </div>
                <div className="ras-badge-item">
                  <TreePine size={15} className="ras-icon-sienna" />
                  <span>Green Building &amp; Passive Cooling</span>
                </div>
              </div>
            </div>

            <div className="ras-hero-visual-frame">
              <img src="/architecture/hero-villa.jpg" alt="Karya Arsitektur Villa Tropis RUANG/STUDIO" />
              <div className="ras-hero-floating-glass">
                <div className="ras-floating-header">
                  <Sparkle size={18} className="ras-icon-sienna" />
                  <div>
                    <strong>Svara Sanctuary Villa</strong>
                    <small>Canggu, Bali · LT 600m² / LB 450m²</small>
                  </div>
                </div>
                <div className="ras-pills-row">
                  <span className="ras-pill">Passive Cooling</span>
                  <span className="ras-pill">Open-Air Layout</span>
                  <span className="ras-pill">Local Andesite &amp; Teak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: 4 Pilar Layanan */}
      <section id="layanan" className="ras-pillars-section ras-wrap">
        <header className="ras-section-head center">
          <span className="ras-badge-tag">LAYANAN PERANCANGAN ARSITEKTUR</span>
          <h2>Keahlian terintegrasi dari perancangan denah<br /><em>hingga interior dan lanskap kawasan.</em></h2>
          <p>
            Setiap proyek dikerjakan dengan pendekatan multidisiplin untuk menciptakan bangunan yang indah, kokoh, dan hemat energi.
          </p>
        </header>

        <div className="ras-pillars-grid">
          {pillarsList.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="ras-pillar-card">
                <div className="ras-pillar-icon-box">
                  <Icon size={26} className="ras-icon-sienna" />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
                <ul className="ras-pillar-features">
                  {pillar.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={14} className="ras-icon-sienna" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a href="#kalkulator" className="ras-btn-pillar-select">
                  <span>Konsultasikan Layanan Ini</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 02: Filterable Portfolio Gallery */}
      <section id="portofolio" className="ras-portfolio-section">
        <div className="ras-wrap">
          <header className="ras-section-head center">
            <span className="ras-badge-tag">PORTOFOLIO KARYA MASTERPIECE</span>
            <h2>Ruang yang tercipta dari dialog mendalam<br /><em>antara fungsi, tapak lahan, &amp; material.</em></h2>
            <p>
              Gunakan filter kategori untuk mengeksplorasi karya rumah tinggal, villa tropis, kafe komersial, dan perancangan interior kami.
            </p>
          </header>

          <ArchitecturePortfolioGallery />
        </div>
      </section>

      {/* Section 03: Interactive Fee & Cost Estimator */}
      <section id="kalkulator" className="ras-calculator-section ras-wrap">
        <ArchitectFeeEstimator />
      </section>

      {/* Section 04: Alur 5 Tahapan Kerja (IAI Standard) */}
      <section id="alur" className="ras-workflow-section ras-wrap">
        <header className="ras-section-head center">
          <span className="ras-badge-tag">TAHAPAN PERANCANGAN STANDAR IAI</span>
          <h2>Alur kerja terstruktur dan transparan<br /><em>dari sketsa ide awal hingga fisik terbangun.</em></h2>
          <p>
            Kami memastikan Anda terlibat aktif dalam pengambilan keputusan penting di setiap fase desain.
          </p>
        </header>

        <div className="ras-workflow-grid">
          {workflowSteps.map((ws, idx) => (
            <div key={idx} className="ras-step-card">
              <span className="ras-step-number">{ws.step}</span>
              <h4>{ws.title}</h4>
              <p>{ws.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 05: Paket Jasa & Biaya Transparan */}
      <section id="paket" className="ras-packages-section">
        <div className="ras-wrap">
          <header className="ras-section-head center">
            <span className="ras-badge-tag">TRANSPARANSI BIAYA JASA ARSITEK</span>
            <h2>Pilihan paket perancangan yang jelas<br /><em>sesuai tahapan dan kebutuhan proyek Anda.</em></h2>
            <p>
              Tanpa biaya tersembunyi. Standar acuan jasa mengikuti pedoman resmi Ikatan Arsitek Indonesia (IAI).
            </p>
          </header>

          <div className="ras-packages-grid">
            {packageTiers.map((tier, idx) => (
              <div key={idx} className={`ras-tier-card ${tier.highlight ? 'highlight' : ''}`}>
                {tier.highlight && <span className="ras-tier-popular-badge">Paling Banyak Dipilih</span>}
                <div className="ras-tier-head">
                  <h3>{tier.name}</h3>
                  <div className="ras-tier-rate-box">
                    <strong>{tier.rate}</strong>
                    <small>{tier.unit}</small>
                  </div>
                  <p className="ras-tier-desc">{tier.desc}</p>
                </div>

                <div className="ras-tier-deliverables-box">
                  <label>Dokumen &amp; Output yang Diterima:</label>
                  <ul>
                    {tier.deliverables.map((d, dIdx) => (
                      <li key={dIdx}>
                        <CheckCircle2 size={14} className="ras-icon-sienna" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/6281573550017?text=Halo%20RUANG%2FSTUDIO%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(tier.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="ras-btn-tier-inquire"
                >
                  <span>Pilih Paket Ini</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 06: Profil Principal Architect */}
      <section id="principal" className="ras-principal-section ras-wrap">
        <div className="ras-principal-grid">
          <div className="ras-principal-media-frame">
            <img src="/architecture/principal-architect.jpg" alt="Principal Architect RUANG/STUDIO" />
            <div className="ras-principal-floating-badge">
              <strong>Ar. Reza Dananjaya, IAI, GP.</strong>
              <span>Principal Architect &amp; Design Director</span>
              <small>Lulusan Arsitektur ITB · 12+ Tahun Pengalaman Desain Residensial &amp; Komersial</small>
            </div>
          </div>

          <div className="ras-principal-copy">
            <span className="ras-badge-tag">PRINCIPAL &amp; FILOSOFI DESAIN</span>
            <h2>"Arsitektur bukan sekadar tentang bentuk luar,<br /><em>tetapi bagaimana ruang membentuk kehidupan Anda."</em></h2>
            <p>
              Kami percaya bahwa bangunan yang baik adalah bangunan yang merespons iklim tropis dengan jujur, menghargai konteks lingkungan sekitar, dan dirancang dengan detail konstruksi yang presisi sehingga tahan uji oleh waktu.
            </p>

            <div className="ras-principal-specs-list">
              <div className="ras-spec-item">
                <Award size={20} className="ras-icon-sienna" />
                <div>
                  <strong>Anggota Profesional Ikatan Arsitek Indonesia (IAI)</strong>
                  <small>Memiliki Surat Izin Bekerja Perencana (SIBP) untuk legalitas pengesahan dokumen PBG/IMB.</small>
                </div>
              </div>

              <div className="ras-spec-item">
                <TreePine size={20} className="ras-icon-sienna" />
                <div>
                  <strong>Green Building Professional Certified</strong>
                  <small>Penerapan strategi hemat energi, pencahayaan alami optimal, dan pemilihan material lokal berkelanjutan.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 07: FAQ */}
      <section id="faq" className="ras-faq-section ras-wrap">
        <header className="ras-section-head">
          <div>
            <span className="ras-badge-tag">PERTANYAAN UMUM</span>
            <h2>Semua hal yang perlu Anda ketahui<br />seputar <em>jasa perancangan di RUANG/STUDIO.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20RUANG%2FSTUDIO%2C%20saya%20ada%20pertanyaan%20seputar%20tahapan%20desain%20arsitektur."
            target="_blank"
            rel="noreferrer"
            className="ras-link-more"
          >
            <span>Tanya Studio via WhatsApp ↗</span>
          </a>
        </header>

        <div className="ras-faq-list">
          <details open>
            <summary>
              <span>01</span> Mengapa saya membutuhkan jasa arsitek dibanding langsung ke tukang/kontraktor?<b>+</b>
            </summary>
            <p>
              Arsitek merancang tata ruang yang efisien sesuai gaya hidup Anda, mengoptimalkan pencahayaan &amp; sirkulasi udara sehingga hemat listrik, serta menyusun gambar teknis (DED) dan RAB yang presisi. Dengan adanya gambar kerja lengkap, Anda terhindar dari bongkar-pasang di lapangan dan dapat mengontrol anggaran kontraktor agar tidak membengkak.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Berapa lama proses perancangan desain arsitektur berlangsung?<b>+</b>
            </summary>
            <p>
              Untuk rumah tinggal atau bangunan komersial menengah (LB 200–500 m²), durasi perancangan berkisar <strong>8–10 minggu</strong>. Ini mencakup sesi diskusi konsep, revisi 3D render, perhitungan struktur sipil, instalasi MEP, dan penyusunan RAB tender.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah RUANG/STUDIO melayani proyek di luar kota Jakarta?<b>+</b>
            </summary>
            <p>
              Tentu saja! Kami berpengalaman menangani proyek hunian privat, villa, dan resort di berbagai kota seperti <strong>Bali, Bandung, Surabaya, Yogyakarta, Medan, hingga Balikpapan</strong>. Koordinasi desain dapat dilakukan secara online intensif dengan survei lokasi berkala.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Apakah tim arsitek membantu dalam pengawasan saat pembangunan fisik berlangsung?<b>+</b>
            </summary>
            <p>
              Ya, kami menyediakan layanan <em>Site Supervision</em> (Pengawasan Berkala). Tim kami akan melakukan inspeksi ke lokasi pada tahapan krusial (seperti pengecoran struktur, pemasangan atap, dan finishing material) untuk memastikan pekerjaan kontraktor 100% presisi sesuai gambar kerja.
            </p>
          </details>

          <details>
            <summary>
              <span>05</span> Bisakah Naltech Studio membangun landing page studio arsitektur seperti RUANG/STUDIO?<b>+</b>
            </summary>
            <p>
              Pasti bisa! Ini adalah portfolio concept demo project karya Naltech Studio. Kami membantu biro arsitek, studio interior, dan konsultan properti memiliki website elegan dengan galeri filterable dan kalkulator estimasi biaya interaktif.
            </p>
          </details>
        </div>
      </section>

      {/* Section 08: Final CTA */}
      <section className="ras-final-cta-section ras-wrap">
        <div className="ras-final-cta-card">
          <div className="ras-cta-glow" />
          <div className="ras-final-cta-inner">
            <span className="ras-cta-tag">WUJUDKAN RUANG IMPIAN ANDA</span>
            <h2>
              Siap merancang hunian atau ruang komersial<br />
              bersama <em>RUANG/STUDIO?</em>
            </h2>
            <p>
              Jadwalkan sesi konsultasi awal dan review denah lahan bersama Principal Architect kami hari ini.
            </p>
            <div className="ras-cta-actions">
              <a
                href="https://wa.me/6281573550017?text=Halo%20RUANG%2FSTUDIO%2C%20saya%20ingin%20menjadwalkan%20sesi%20konsultasi%20desain%20arsitektur.%20Bisa%20bantu%20informasikan%20jadwal%20tersedia%3F"
                target="_blank"
                rel="noreferrer"
                className="ras-btn-cta-wa"
              >
                <MessageCircle size={18} />
                <span>Konsultasi Desain via WhatsApp</span>
                <ArrowUpRight size={18} />
              </a>
              <Link href="/" className="ras-btn-cta-portfolio">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ras-footer ras-wrap">
        <div className="ras-footer-grid">
          <div className="ras-footer-col brand">
            <a className="ras-logo" href="#top">
              <span className="ras-logo-icon">
                <Compass size={20} />
              </span>
              <span className="ras-logo-text">
                RUANG<strong>/STUDIO</strong> <small>ARCHITECTURE &amp; INTERIORS</small>
              </span>
            </a>
            <p>
              Ruang untuk hidup lebih baik. Studio arsitektur dan interior kontemporer berstandar IAI. Concept project by Naltech Studio.
            </p>
          </div>

          <div className="ras-footer-col">
            <strong>Layanan Studio</strong>
            <a href="#layanan">Architectural Design (Hunian &amp; Villa)</a>
            <a href="#layanan">Interior Architecture &amp; Fit-Out</a>
            <a href="#layanan">Commercial &amp; Hospitality Spaces</a>
            <a href="#layanan">Master Planning &amp; Lanskap</a>
          </div>

          <div className="ras-footer-col">
            <strong>Paket Jasa Desain</strong>
            <a href="#paket">Paket Konsep Skematik (Rp150K/m²)</a>
            <a href="#paket">Paket Komplit DED &amp; RAB (Rp250K/m²)</a>
            <a href="#kalkulator">Kalkulator Estimasi Biaya</a>
            <a href="#alur">Alur Kerja Standar IAI</a>
          </div>

          <div className="ras-footer-col">
            <strong>Studio &amp; Kontak</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="ras-address">Jakarta Selatan · Melayani Seluruh Indonesia</p>
          </div>
        </div>

        <div className="ras-footer-bottom">
          <small>
            © 2026 RUANG/STUDIO Architecture · Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Ruang untuk Hidup Lebih Baik · IAI Certified Practice</span>
        </div>
      </footer>
    </main>
  );
}
