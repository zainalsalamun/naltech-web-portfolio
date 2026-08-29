import type { Metadata } from 'next';
import Link from 'next/link';
import './naltech-digital.css';
import ProjectCostEstimatorWidget from './ProjectCostEstimatorWidget';
import {
  Smartphone,
  Globe,
  LayoutDashboard,
  Cpu,
  Layers,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Database,
  CreditCard,
  Bell,
  FileSpreadsheet,
  MapPin,
  Lock,
  Zap,
  Code2,
  Building2,
  GraduationCap,
  Users,
  Store,
  Briefcase,
  Rocket,
  Check,
  HelpCircle,
  Server,
  Workflow,
  Laptop,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'Naltech Digital Solution — Jasa Pembuatan Aplikasi Android, iOS, & Website Bisnis',
  description: 'Kami membantu UMKM, sekolah, organisasi, dan perusahaan membangun aplikasi mobile (Flutter), website bisnis modern (Next.js), dashboard admin, dan integrasi payment gateway terstruktur.',
  alternates: {
    canonical: '/demo/naltech-digital',
  },
  openGraph: {
    title: 'Naltech Digital Solution — Jasa Pembuatan Aplikasi & Website Bisnis',
    description: 'Bangun aplikasi mobile dan sistem digital yang sesuai dengan kebutuhan operasional bisnis Anda.',
    images: [{ url: `${siteUrl}/tech/hero-dev.jpg`, width: 1200, height: 630, alt: 'Naltech Digital Solution' }],
  },
  twitter: {
    title: 'Naltech Digital Solution — Jasa Pembuatan Aplikasi & Website Bisnis',
    description: 'Bangun aplikasi mobile dan sistem digital yang sesuai dengan kebutuhan operasional bisnis Anda.',
    images: [`${siteUrl}/tech/hero-dev.jpg`],
  },
};

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Naltech Digital Solution',
    description: 'Jasa pembuatan aplikasi mobile Android, iOS, website bisnis, dan sistem informasi terpadu.',
    url: `${siteUrl}/demo/naltech-digital`,
    image: `${siteUrl}/tech/hero-dev.jpg`,
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
        name: 'Naltech Digital Solution',
        item: `${siteUrl}/demo/naltech-digital`,
      },
    ],
  },
];

const customerProblems = [
  {
    problem: 'Pencatatan transaksi masih manual',
    desc: 'Pencatatan nota kertas rentan tercecer, salah hitung, dan sulit ditelusuri saat rekap keuangan akhir bulan.',
  },
  {
    problem: 'Data pelanggan tersebar di banyak file',
    desc: 'Informasi kontak dan riwayat pembelian terpisah di spreadsheet, chat WhatsApp, dan buku catatan.',
  },
  {
    problem: 'Pelanggan kesulitan memesan layanan',
    desc: 'Calon pembeli harus menunggu balasan chat manual yang lambat saat jam sibuk atau di luar jam kerja.',
  },
  {
    problem: 'Belum memiliki website profesional',
    desc: 'Calon klien dan mitra bisnis ragu karena bisnis belum memiliki kehadiran digital resmi yang meyakinkan.',
  },
  {
    problem: 'Aplikasi lama sering bermasalah',
    desc: 'Sistem yang lambat, sering crash, dan sulit diperbarui karena kode awal yang tidak terstruktur.',
  },
  {
    problem: 'Laporan bisnis butuh waktu lama dibuat',
    desc: 'Pemilik usaha kesulitan memantau laba rugi, stok barang, dan kinerja operasional secara real-time.',
  },
];

const servicesList = [
  {
    title: 'Aplikasi Mobile (Android & iOS)',
    icon: Smartphone,
    desc: 'Aplikasi Android dan iOS multi-platform berbasis Flutter untuk transaksi, pendidikan, komunitas, layanan pelanggan, dan kebutuhan operasional internal perusahaan.',
    features: ['Single codebase Flutter', 'UI/UX responsif & cepat', 'Notifikasi & offline mode', 'Publish Play Store & App Store'],
  },
  {
    title: 'Website Bisnis & Company Profile',
    icon: Globe,
    desc: 'Website profesional berkecepatan tinggi berbasis Next.js untuk memperkenalkan identitas bisnis, memajang katalog produk, dan menjaring calon klien baru dari Google.',
    features: ['Next.js 16 & React 19', 'Optimasi SEO On-Page', 'Kecepatan loading <1 detik', 'Integrasi formulir WhatsApp'],
  },
  {
    title: 'Dashboard Admin & Sistem Informasi',
    icon: LayoutDashboard,
    desc: 'Sistem panel kendali terpusat untuk mengelola data pengguna, transaksi keuangan, stok inventori, laporan analitik grafik, dan hak akses bertingkat (multi-role).',
    features: ['Manajemen Role & Permission', 'Export Laporan Excel & PDF', 'Grafik Analitik Realtime', 'Database PostgreSQL / Supabase'],
  },
  {
    title: 'Integrasi Sistem & Payment Gateway',
    icon: Cpu,
    desc: 'Integrasi API pihak ketiga untuk otomatisasi pembayaran (QRIS, VA Bank, E-Wallet), notifikasi WhatsApp otomatis, email transaksional, hingga maps tracking.',
    features: ['Midtrans, Xendit & Tripay', 'Gateway WhatsApp API', 'Webhook & Realtime Sync', 'Keamanan Enkripsi End-to-End'],
  },
  {
    title: 'Maintenance & Modernisasi Sistem',
    icon: Layers,
    desc: 'Layanan pemeliharaan berkala, perbaikan bug, peningkatan kecepatan performa, audit keamanan, dan pengembangan fitur baru pada aplikasi yang sudah berjalan.',
    features: ['Bug Fixing & Patching', 'Optimasi Database Query', 'Pembaruan SDK & Framework', 'Monitoring Server 24/7'],
  },
];

const portfolioCaseStudies = [
  {
    title: 'BANK J-NAL — Digital Banking Prototype',
    category: 'Fintech & Mobile App',
    image: '/tech/banking-app.jpg',
    problem: 'Kebutuhan prototype aplikasi perbankan modern yang cepat, aman, dan mudah dipahami untuk transaksi keuangan harian generasi muda.',
    solution: 'Membangun aplikasi mobile berbasis Flutter dengan arsitektur clean code, sinkronisasi saldo realtime, dan sistem kantong keuangan digital.',
    features: ['Transfer Antar-Rekening & Virtual Account', 'Kantong Alokasi Tabungan', 'Riwayat Transaksi Realtime', 'Dashboard Admin Keuangan'],
    tech: 'Flutter · Node.js · Supabase · Payment Gateway API',
    result: 'Pengalaman bertransaksi mulus dengan loading instan dan tingkat keamanan otorisasi biometrik.',
  },
  {
    title: 'Sistem Kasir (POS) & Inventori Multi-Cabang',
    category: 'Retail & Enterprise POS',
    image: '/tech/pos-system.jpg',
    problem: 'Pemilik usaha ritel kesulitan memantau stok barang dan omzet kasir di 4 cabang toko yang berbeda secara bersamaan.',
    solution: 'Mengembangkan aplikasi kasir tablet yang terhubung ke cloud database terpusat dengan fitur cetak struk thermal dan rekap omzet otomatis.',
    features: ['Scan Barcode Produk Cepat', 'Sinkronisasi Stok Antar-Cabang', 'Penerimaan Pembayaran QRIS', 'Laporan Laba Rugi Harian'],
    tech: 'Flutter Desktop/Tablet · Next.js · PostgreSQL',
    result: 'Menghilangkan selisih stok manual hingga 98% dan memangkas waktu tutup buku harian dari 2 jam menjadi 5 menit.',
  },
  {
    title: 'Dashboard Analitik & Sistem Informasi Terpadu',
    category: 'Enterprise Web Dashboard',
    image: '/tech/dashboard-analytics.jpg',
    problem: 'Manajemen perusahaan membutuhkan satu layar komprehensif untuk memantau data operasional, performa staf, dan grafik penjualan.',
    solution: 'Merancang dashboard admin web berbasis Next.js App Router dengan visualisasi data interaktif dan ekspor laporan instan.',
    features: ['Grafik Penjualan Realtime', 'Manajemen Akses Multi-Level', 'Export Dokumen PDF/Excel', 'Pencadangan Data Otomatis'],
    tech: 'Next.js 16 · React 19 · Tailwind CSS · PostgreSQL',
    result: 'Pengambilan keputusan bisnis menjadi lebih cepat dan berbasis data akurat.',
  },
];

const workSteps = [
  { step: '01', title: 'Konsultasi Awal', desc: 'Pelanggan menceritakan ide bisnis, kendala operasional, dan target yang ingin dicapai melalui sistem digital.' },
  { step: '02', title: 'Analisis Kebutuhan', desc: 'Kami memetakan daftar fitur, struktur pengguna, alur kerja sistem, estimasi waktu pengerjaan, dan anggaran yang efisien.' },
  { step: '03', title: 'Desain UI/UX', desc: 'Membuat wireframe dan prototype tampilan antarmuka aplikasi di Figma yang intuitif sebelum proses coding dimulai.' },
  { step: '04', title: 'Pengembangan (Coding)', desc: 'Pengkodean aplikasi mobile, website, backend API, dan database secara paralel dengan standar kode bersih.' },
  { step: '05', title: 'Pengujian (QA & Testing)', desc: 'Pengujian fungsionalitas menyeluruh, uji keamanan, dan uji performa di berbagai perangkat untuk menjamin bebas bug.' },
  { step: '06', title: 'Peluncuran (Deployment)', desc: 'Sistem dipublikasikan ke server cloud, domain resmi bisnis Anda, Google Play Store, atau Apple App Store.' },
  { step: '07', title: 'Maintenance & Support', desc: 'Pemantauan stabilitas server, perbaikan berkala, dan pendampingan teknis paska peluncuran sistem.' },
];

const scopePackages = [
  {
    name: 'Landing Page',
    forWhom: 'Usaha yang membutuhkan promosi online cepat & konversi tinggi',
    deliverables: ['1 Halaman web responsif & modern', 'Integrasi tombol chat WhatsApp instan', 'Formulir leads / penawaran proyek', 'Struktur SEO On-Page dasar', 'Domain & deployment cloud cepat'],
    highlight: false,
  },
  {
    name: 'Website Bisnis',
    forWhom: 'UMKM, lembaga pendidikan, dan profil perusahaan',
    deliverables: ['Multi-halaman (Home, About, Layanan, Kontak)', 'Katalog produk / portofolio showcase', 'Panel admin CMS kelola konten', 'Optimasi kecepatan & mobile friendly', 'Email domain resmi bisnis'],
    highlight: true,
  },
  {
    name: 'MVP Aplikasi Mobile',
    forWhom: 'Startup, inisiator produk, atau validasi ide bisnis',
    deliverables: ['Aplikasi Android & iOS berbasis Flutter', 'Desain UI/UX custom interaktif', 'Backend REST API & Database Cloud', 'Autentikasi akun & modul fitur utama', 'Panduan rilis ke Play Store'],
    highlight: true,
  },
  {
    name: 'Custom System / ERP',
    forWhom: 'Perusahaan, organisasi, dan operasional khusus',
    deliverables: ['Arsitektur modular sesuai SOP bisnis', 'Dashboard admin multi-level permission', 'Integrasi Payment Gateway & WhatsApp API', 'Laporan analitik, cetak struk/faktur', 'Dokumentasi teknis & pelatihan staf'],
    highlight: false,
  },
  {
    name: 'Maintenance Retainer',
    forWhom: 'Pemilik aplikasi yang sudah berjalan aktif',
    deliverables: ['Pemeliharaan rutin server & database', 'Penanganan bug & patching keamanan', 'Pembaruan versi framework & library', 'Pengembangan penambahan fitur baru', 'Dukungan teknis prioritas'],
    highlight: false,
  },
];

const competitiveAdvantages = [
  {
    title: 'Full-Stack & Mobile Mastery',
    icon: Code2,
    desc: 'Ditangani langsung oleh software engineer berpengalaman dalam ekosistem Mobile (Flutter) dan Full-Stack Web (Next.js & Node.js).',
  },
  {
    title: '1 Solusi Terpadu Menyeluruh',
    icon: Layers,
    desc: 'Tidak perlu repot mencari banyak vendor. Kami menangani seluruh rantai: UI/UX, Mobile App, Website, Backend API, Database, hingga Server.',
  },
  {
    title: 'Desain Khusus Identitas Brand',
    icon: Laptop,
    desc: 'Setiap aplikasi dibangun secara kustom dan unik sesuai karakter brand bisnis Anda, bukan sekadar mengganti teks dari template jadi.',
  },
  {
    title: 'Proses Transparan & Akses Demo',
    icon: Workflow,
    desc: 'Anda dapat memantau progres pengerjaan dan mencoba langsung fitur aplikasi di link demo staging secara berkala.',
  },
  {
    title: 'Mendukung Multi-Platform',
    icon: Smartphone,
    desc: 'Satu pengembangan untuk Android, iOS, dan Web, menghemat waktu serta anggaran investasi teknologi bisnis Anda.',
  },
  {
    title: 'Garansi & Maintenance Paska-Rilis',
    icon: ShieldCheck,
    desc: 'Dukungan teknis dan jaminan perbaikan bug setelah aplikasi diluncurkan ke pengguna akhir.',
  },
];

export default function NaltechDigitalSolutionPage() {
  return (
    <main className="nds-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="nds-promo-ribbon">
        <div className="nds-wrap nds-ribbon-content">
          <span className="nds-ribbon-badge">
            <Sparkles size={13} />
            <span>KONSULTASI GRATIS 2026</span>
          </span>
          <p>
            Mulai digitalisasi bisnis Anda hari ini. Dapatkan <strong>Free Technical Feasibility Roadmap &amp; Wireframe</strong> untuk project baru Anda.
          </p>
          <a href="#estimasi" className="nds-ribbon-link">
            <span>Konsultasi Project</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="nds-demo-bar">
        <div className="nds-wrap nds-demo-inner">
          <Link href="/" className="nds-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Flagship digital agency by Naltech Studio</span>
        </div>
      </div>

      {/* Header */}
      <header className="nds-header">
        <div className="nds-wrap nds-header-inner">
          <a className="nds-logo" href="#top">
            <span className="nds-logo-icon">
              <Code2 size={22} />
            </span>
            <span className="nds-logo-text">
              NALTECH<strong>DIGITAL</strong> <small>SOFTWARE SOLUTION</small>
            </span>
          </a>

          <nav className="nds-nav" aria-label="Navigasi Naltech Digital Solution">
            <a href="#masalah">Solusi Masalah</a>
            <a href="#layanan">Layanan</a>
            <a href="#estimasi">Estimasi Proyek</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#proses">Alur Kerja</a>
            <a href="#paket">Paket Lingkup</a>
            <a href="#keunggulan">Keunggulan</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nds-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20Naltech%20Digital%20Solution%2C%20saya%20ingin%20berkonsultasi%20mengenai%20pembuatan%20aplikasi%2Fwebsite."
              target="_blank"
              rel="noreferrer"
              className="nds-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Konsultasi Gratis via WA</span>
            </a>
          </div>
        </div>
      </header>

      {/* Bagian 1 — Hero Section */}
      <section id="top" className="nds-hero">
        <div className="nds-wrap">
          <div className="nds-hero-grid">
            <div className="nds-hero-copy">
              <div className="nds-hero-tag">
                <Rocket size={14} className="nds-icon-blue" />
                <span>FULL-STACK &amp; MOBILE DEVELOPMENT AGENCY</span>
              </div>

              <h1>
                Bangun Aplikasi dan Website untuk Mengembangkan Bisnis Anda
              </h1>

              <p className="nds-hero-sub">
                Kami membantu UMKM, sekolah, organisasi, dan perusahaan membangun aplikasi mobile, website, serta sistem digital yang sesuai dengan kebutuhan operasional.
              </p>

              <div className="nds-hero-actions">
                <a
                  href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20ingin%20konsultasi%20gratis%20mengenai%20project%20aplikasi%20atau%20website%20saya."
                  target="_blank"
                  rel="noreferrer"
                  className="nds-btn-hero-primary"
                >
                  <MessageCircle size={17} />
                  <span>Konsultasi Gratis via WhatsApp</span>
                  <ArrowUpRight size={17} />
                </a>

                <a href="#portofolio" className="nds-btn-hero-secondary">
                  <span>Lihat Portofolio Proyek</span>
                </a>
              </div>

              {/* Target Audience Badges */}
              <div className="nds-target-row">
                <span className="nds-target-label">Solusi Untuk:</span>
                <span className="nds-target-badge"><Store size={12} /> UMKM</span>
                <span className="nds-target-badge"><GraduationCap size={12} /> Sekolah</span>
                <span className="nds-target-badge"><Users size={12} /> Organisasi</span>
                <span className="nds-target-badge"><Building2 size={12} /> Perusahaan</span>
                <span className="nds-target-badge"><Rocket size={12} /> Startup MVP</span>
              </div>
            </div>

            {/* Hero Interactive Multi-Device Mockup */}
            <div className="nds-hero-visual-card">
              <img src="/tech/hero-dev.jpg" alt="Pengembangan Aplikasi dan Website Naltech Digital" />
              <div className="nds-hero-floating-glass">
                <div className="nds-floating-head">
                  <Cpu size={20} className="nds-icon-cyan" />
                  <div>
                    <strong>Full-Stack &amp; Mobile Ecosystem</strong>
                    <small>Flutter · Next.js · Node.js · PostgreSQL</small>
                  </div>
                </div>
                <div className="nds-tech-badges-grid">
                  <span className="nds-pill-tech">Flutter 3.x</span>
                  <span className="nds-pill-tech">Next.js 16</span>
                  <span className="nds-pill-tech">React 19</span>
                  <span className="nds-pill-tech">PostgreSQL</span>
                  <span className="nds-pill-tech">Supabase</span>
                  <span className="nds-pill-tech">REST API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian 2 — Masalah Pelanggan vs Jembatan Solusi */}
      <section id="masalah" className="nds-problems-section nds-wrap">
        <header className="nds-section-head center">
          <span className="nds-badge-tag">TANTANGAN OPERASIONAL BISNIS</span>
          <h2>Apakah bisnis Anda mengalami<br /><em>masalah-masalah berikut?</em></h2>
          <p>
            Banyak pemilik usaha kehilangan potensi pendapatan dan waktu berharga karena masih mengandalkan proses manual.
          </p>
        </header>

        <div className="nds-problems-grid">
          {customerProblems.map((prob, idx) => (
            <div key={idx} className="nds-problem-card">
              <div className="nds-problem-num">0{idx + 1}</div>
              <h4>{prob.problem}</h4>
              <p>{prob.desc}</p>
            </div>
          ))}
        </div>

        {/* Jembatan Solusi */}
        <div className="nds-solution-bridge">
          <div className="nds-bridge-content">
            <Sparkles size={24} className="nds-icon-cyan" />
            <div>
              <h3>Kami Mengubah Proses Manual Menjadi Sistem Digital</h3>
              <p>
                Sistem digital yang kami rancang membuat operasional bisnis Anda lebih cepat, data tercatat rapi, mudah digunakan oleh staf, dan dapat diakses dari mana saja.
              </p>
            </div>
            <a href="#estimasi" className="nds-btn-bridge">
              <span>Konsultasikan Kebutuhan Anda</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Bagian 3 — Daftar Layanan Komprehensif */}
      <section id="layanan" className="nds-services-section">
        <div className="nds-wrap">
          <header className="nds-section-head center">
            <span className="nds-badge-tag">LAYANAN PENGEMBANGAN TEKNOLOGI</span>
            <h2>Solusi digital lengkap dari aplikasi mobile<br /><em>hingga sistem backend terintegrasi.</em></h2>
            <p>
              Kami menguasai seluruh spektrum teknologi untuk menghadirkan produk digital yang andal dan siap pakai.
            </p>
          </header>

          <div className="nds-services-grid">
            {servicesList.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={idx} className="nds-service-card">
                  <div className="nds-service-icon-frame">
                    <Icon size={24} className="nds-icon-blue" />
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <ul className="nds-service-features">
                    {svc.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={14} className="nds-icon-cyan" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(svc.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="nds-btn-service-inquire"
                  >
                    <span>Konsultasi Layanan Ini</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bagian 4 — Interactive Scope & Cost Estimator */}
      <section id="estimasi" className="nds-estimator-section nds-wrap">
        <header className="nds-section-head center">
          <span className="nds-badge-tag">SIMULASI KEBUTUHAN SISTEM</span>
          <h2>Rancang kebutuhan aplikasi Anda<br /><em>dan dapatkan rekomendasi teknologi.</em></h2>
          <p>
            Gunakan kalkulator interaktif ini untuk memetakan modul fitur dan menyusun draft konsultasi WhatsApp secara otomatis.
          </p>
        </header>

        <ProjectCostEstimatorWidget />
      </section>

      {/* Bagian 5 — Contoh Studi Kasus & Portofolio */}
      <section id="portofolio" className="nds-portfolio-section">
        <div className="nds-wrap">
          <header className="nds-section-head center">
            <span className="nds-badge-tag">BUKTI KARYA &amp; STUDI KASUS</span>
            <h2>Contoh implementasi produk digital<br /><em>yang telah kami kembangkan.</em></h2>
            <p>
              Setiap proyek dirancang untuk menyelesaikan masalah nyata dengan efisiensi tinggi.
            </p>
          </header>

          <div className="nds-portfolio-list">
            {portfolioCaseStudies.map((item, idx) => (
              <div key={idx} className="nds-case-card">
                <div className="nds-case-image">
                  <img src={item.image} alt={item.title} />
                  <span className="nds-case-cat">{item.category}</span>
                </div>
                <div className="nds-case-body">
                  <h3>{item.title}</h3>
                  <div className="nds-case-section">
                    <strong>Tantangan &amp; Masalah:</strong>
                    <p>{item.problem}</p>
                  </div>
                  <div className="nds-case-section">
                    <strong>Solusi yang Dibangun:</strong>
                    <p>{item.solution}</p>
                  </div>
                  <div className="nds-case-features-row">
                    {item.features.map((f, fIdx) => (
                      <span key={fIdx} className="nds-case-feat-badge">
                        <Check size={12} /> {f}
                      </span>
                    ))}
                  </div>
                  <div className="nds-case-footer">
                    <span className="nds-case-tech">
                      <Code2 size={14} className="nds-icon-cyan" /> {item.tech}
                    </span>
                    <span className="nds-case-result">
                      <Sparkles size={14} className="nds-icon-blue" /> {item.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian 6 — 7 Tahapan Proses Pengerjaan */}
      <section id="proses" className="nds-workflow-section nds-wrap">
        <header className="nds-section-head center">
          <span className="nds-badge-tag">METODOLOGI PENGEMBANGAN</span>
          <h2>Alur pengerjaan transparan, terukur,<br />dan <em>selalu berorientasi hasil.</em></h2>
          <p>
            Kami memastikan Anda terlibat dan mendapatkan visibilitas penuh di setiap tahapan proyek.
          </p>
        </header>

        <div className="nds-workflow-grid">
          {workSteps.map((ws, idx) => (
            <div key={idx} className="nds-step-card">
              <span className="nds-step-number">{ws.step}</span>
              <h4>{ws.title}</h4>
              <p>{ws.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bagian 7 — Paket Layanan Berdasarkan Ruang Lingkup */}
      <section id="paket" className="nds-packages-section">
        <div className="nds-wrap">
          <header className="nds-section-head center">
            <span className="nds-badge-tag">PILIHAN RUANG LINGKUP</span>
            <h2>Paket layanan yang disesuaikan<br />dengan <em>tahapan pertumbuhan bisnis Anda.</em></h2>
            <p>
              Biaya ditentukan secara transparan setelah sesi analisis kebutuhan agar tepat guna dan bebas pemborosan.
            </p>
          </header>

          <div className="nds-packages-grid">
            {scopePackages.map((pkg, idx) => (
              <div key={idx} className={`nds-package-card ${pkg.highlight ? 'highlight' : ''}`}>
                {pkg.highlight && <span className="nds-pkg-badge">Paling Populer</span>}
                <div className="nds-pkg-header">
                  <h3>{pkg.name}</h3>
                  <p className="nds-pkg-target">
                    <strong>Cocok untuk:</strong> {pkg.forWhom}
                  </p>
                </div>
                <div className="nds-pkg-body">
                  <label>Ruang Lingkup Utama:</label>
                  <ul className="nds-pkg-deliverables">
                    {pkg.deliverables.map((del, dIdx) => (
                      <li key={dIdx}>
                        <CheckCircle2 size={14} className="nds-icon-blue" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="nds-pkg-foot">
                  <a
                    href={`https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20dengan%20Paket%20${encodeURIComponent(pkg.name)}.%20Bisa%20diskusi%20kebutuhan%20dan%20anggarannya%3F`}
                    target="_blank"
                    rel="noreferrer"
                    className="nds-btn-pkg-action"
                  >
                    <span>Pilih Paket &amp; Konsultasi</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="nds-price-clarification">
            <ShieldCheck size={16} className="nds-icon-blue" />
            <span>
              <strong>Catatan Transparan:</strong> Biaya final ditentukan setelah pemetaan kebutuhan agar Anda hanya membayar fitur yang benar-benar memberikan dampak pada operasional bisnis.
            </span>
          </div>
        </div>
      </section>

      {/* Bagian 8 — Keunggulan Kompetitif Naltech */}
      <section id="keunggulan" className="nds-advantages-section nds-wrap">
        <header className="nds-section-head center">
          <span className="nds-badge-tag">NILAI LEBIH NALTECH</span>
          <h2>Mengapa memilih Naltech Digital Solution<br />sebagai <em>partner teknologi Anda?</em></h2>
        </header>

        <div className="nds-advantages-grid">
          {competitiveAdvantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div key={idx} className="nds-adv-card">
                <div className="nds-adv-icon">
                  <Icon size={24} className="nds-icon-blue" />
                </div>
                <h3>{adv.title}</h3>
                <p>{adv.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bagian 9 — FAQ Komprehensif */}
      <section id="faq" className="nds-faq-section nds-wrap">
        <header className="nds-section-head">
          <div>
            <span className="nds-badge-tag">PERTANYAAN UMUM</span>
            <h2>Semua hal yang perlu Anda ketahui<br />sebelum <em>memulai kerja sama.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20ada%20pertanyaan%20seputar%20pembuatan%20aplikasi."
            target="_blank"
            rel="noreferrer"
            className="nds-link-more"
          >
            <span>Tanya via WhatsApp ↗</span>
          </a>
        </header>

        <div className="nds-faq-list">
          <details open>
            <summary>
              <span>01</span> Berapa estimasi biaya pembuatan aplikasi atau website di Naltech?<b>+</b>
            </summary>
            <p>
              Biaya pengembangan bergantung pada kompleksitas fitur, jumlah platform (Android, iOS, Web), arsitektur backend, dan integrasi pihak ketiga (misalnya payment gateway). Kami selalu memberikan rincian proposal transparan sesuai anggaran dan kebutuhan prioritas bisnis Anda.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Berapa lama durasi proses pengerjaannya?<b>+</b>
            </summary>
            <p>
              Untuk landing page dan website bisnis berkisar antara 1 hingga 3 minggu. Sedangkan untuk aplikasi mobile MVP atau custom system operasional umumnya membutuhkan waktu 3 hingga 8 minggu tergantung kelengkapan modul fitur.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah aplikasi bisa langsung berjalan di Android dan iOS sekaligus?<b>+</b>
            </summary>
            <p>
              Ya, tentu saja! Kami menggunakan teknologi <strong>Flutter</strong> dari Google yang memungkinkan satu basis kode berkualitas tinggi berjalan mulus secara native di platform Android dan iOS, menghemat waktu dan biaya pengembangan Anda.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Apakah disediakan dashboard admin untuk mengelola data?<b>+</b>
            </summary>
            <p>
              Ya, kami menyediakan dashboard admin berbasis web yang intuitif dan responsif untuk mengelola data master, pengguna, transaksi, stok barang, laporan keuangan, dan notifikasi secara mandiri tanpa perlu paham teknis coding.
            </p>
          </details>

          <details>
            <summary>
              <span>05</span> Apakah bisa melanjutkan atau memperbaiki aplikasi lama yang bermasalah?<b>+</b>
            </summary>
            <p>
              Bisa! Kami akan melakukan audit teknis terlebih dahulu terhadap struktur kode sumber (source code) dan database yang ada untuk memetakan bagian yang perlu diperbaiki, dioptimasi, atau di-refactor.
            </p>
          </details>

          <details>
            <summary>
              <span>06</span> Apakah source code (kode sumber) aplikasi akan diserahkan kepada klien?<b>+</b>
            </summary>
            <p>
              Ya, seluruh source code, aset desain, dan hak kepemilikan sistem diserahkan penuh kepada Anda sesuai ketentuan perjanjian kontrak kerja sama proyek.
            </p>
          </details>

          <details>
            <summary>
              <span>07</span> Bagaimana dengan layanan server, domain, dan pemeliharaan setelah rilis?<b>+</b>
            </summary>
            <p>
              Kami membantu proses setup domain, cloud server (Vercel, Supabase, AWS, DigitalOcean), hingga publikasi ke Google Play Store dan App Store, serta menyediakan garansi perbaikan bug paska peluncuran.
            </p>
          </details>
        </div>
      </section>

      {/* Bagian 10 — Penutup & CTA WhatsApp Konsultasi */}
      <section className="nds-final-cta-section nds-wrap">
        <div className="nds-final-cta-card">
          <div className="nds-cta-glow" />
          <div className="nds-final-cta-inner">
            <span className="nds-cta-tag">MULAI PROYEK DIGITAL ANDA</span>
            <h2>
              Punya ide aplikasi atau ingin<br />
              mendigitalisasi <em>bisnis Anda sekarang?</em>
            </h2>
            <p>
              Ceritakan kebutuhan Anda. Kami akan membantu menentukan solusi terbaik, rekomendasi fitur, estimasi waktu pengerjaan, dan tahapan pengembangannya secara terukur.
            </p>
            <div className="nds-cta-actions">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20ingin%20mendiskusikan%20project%20pembuatan%20aplikasi%2Fwebsite.%20Bisa%20jadwalkan%20sesi%20konsultasi%3F"
                target="_blank"
                rel="noreferrer"
                className="nds-btn-cta-wa"
              >
                <MessageCircle size={18} />
                <span>Diskusikan Project Saya via WhatsApp</span>
                <ArrowUpRight size={18} />
              </a>
              <Link href="/" className="nds-btn-cta-portfolio">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="nds-footer nds-wrap">
        <div className="nds-footer-grid">
          <div className="nds-footer-col brand">
            <a className="nds-logo" href="#top">
              <span className="nds-logo-icon">
                <Code2 size={20} />
              </span>
              <span className="nds-logo-text">
                NALTECH<strong>DIGITAL</strong> <small>SOFTWARE SOLUTION</small>
              </span>
            </a>
            <p>
              Partner pengembangan aplikasi mobile (Android &amp; iOS), website bisnis modern, dan sistem digital terpadu untuk percepatan operasional bisnis Anda.
            </p>
          </div>

          <div className="nds-footer-col">
            <strong>Layanan Utama</strong>
            <a href="#layanan">Aplikasi Mobile Flutter</a>
            <a href="#layanan">Website Bisnis Next.js</a>
            <a href="#layanan">Dashboard Admin &amp; ERP</a>
            <a href="#layanan">Payment Gateway API</a>
          </div>

          <div className="nds-footer-col">
            <strong>Target Sektor</strong>
            <a href="#masalah">UMKM &amp; Ritel</a>
            <a href="#masalah">Sekolah &amp; Pendidikan</a>
            <a href="#masalah">Komunitas &amp; Masjid</a>
            <a href="#masalah">Startup &amp; Enterprise</a>
          </div>

          <div className="nds-footer-col">
            <strong>Kontak &amp; Konsultasi</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="nds-address">Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="nds-footer-bottom">
          <small>
            © 2026 Naltech Digital Solution · Software Engineering by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Flutter · Next.js · Node.js · PostgreSQL · Clean Architecture</span>
        </div>
      </footer>
    </main>
  );
}
