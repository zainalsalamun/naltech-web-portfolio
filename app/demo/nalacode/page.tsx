import type { Metadata } from 'next';
import Link from 'next/link';
import './nalacode.css';
import AuthRegisterWidget from './AuthRegisterWidget';
import DeveloperSuccessStories from './DeveloperSuccessStories';
import {
  Sparkles,
  Code2,
  Terminal,
  Laptop,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe,
  Award,
  Star,
  Users,
  Briefcase,
  Building2,
  MessageCircle,
  Phone,
  Layers,
  Cpu,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'NalaCode Academy — Kursus Coding Online & Bootcamp Developer No. 1 by Naltech',
  description: 'Belajar coding dari nol sampai kerja di tech company impian. Praktik langsung di browser, review kode instan, dan terbukti meluluskan ribuan alumni ke GoTo, Traveloka, dan remote US.',
  alternates: {
    canonical: '/demo/nalacode',
  },
  openGraph: {
    title: 'NalaCode Academy — Kursus Coding Online & Bootcamp Developer by Naltech',
    description: 'Belajar coding dari nol sampai kerja di tech company impian. Praktik langsung di browser.',
    images: [{ url: `${siteUrl}/code/hero-developer.jpg`, width: 1200, height: 630, alt: 'NalaCode Online Coding Academy' }],
  },
  twitter: {
    title: 'NalaCode Academy — Kursus Coding Online & Bootcamp Developer by Naltech',
    description: 'Belajar coding dari nol sampai kerja di tech company impian.',
    images: [`${siteUrl}/code/hero-developer.jpg`],
  },
};

const codeStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'NalaCode Academy (Concept by Naltech)',
    description: 'Platform kursus coding dan bootcamp developer interaktif online karya Naltech Studio.',
    url: `${siteUrl}/demo/nalacode`,
    image: `${siteUrl}/code/hero-developer.jpg`,
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
        name: 'NalaCode Academy',
        item: `${siteUrl}/demo/nalacode`,
      },
    ],
  },
];

export default function NalaCodePage() {
  return (
    <main className="nc-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(codeStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="nc-promo-ribbon">
        <div className="nc-wrap nc-ribbon-content">
          <span className="nc-ribbon-badge">
            <Sparkles size={13} />
            <span>BEASISWA DEVELOPER 2026</span>
          </span>
          <p>
            Gratis 30 Hari Akses Pro + 50 Proyek Portofolio Kerja untuk 1.000 Pendaftar Pertama kode: <code>NALADEV</code>
          </p>
          <a href="#daftar" className="nc-ribbon-link">
            <span>Daftar Gratis</span>
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
              <Code2 size={22} />
            </span>
            <span className="nc-logo-text">
              NALA<strong>&lt;CODE/&gt;</strong> <small>ACADEMY</small>
            </span>
          </a>

          <nav className="nc-nav" aria-label="Navigasi NalaCode">
            <a href="#daftar">Pendaftaran Cepat</a>
            <a href="#testimoni">Kisah Sukses</a>
            <a href="#career-tracks">Career Path</a>
            <a href="#metode">Metode Belajar</a>
            <a href="#partners">Hiring Partner</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nc-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20NalaCode%2C%20saya%20ingin%20konsultasi%20career%20path%20coding."
              target="_blank"
              rel="noreferrer"
              className="nc-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Career Counseling</span>
            </a>
            <a href="#daftar" className="nc-btn-header-cta">
              <Zap size={15} />
              <span>Mulai Belajar Gratis</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Instant Auth Form & In-Browser Code Playground */}
      <section id="top" className="nc-hero">
        <div className="nc-wrap">
          <div className="nc-hero-copy">
            <div className="nc-hero-tag">
              <Terminal size={14} className="nc-icon-cyan" />
              <span>INTERACTIVE IN-BROWSER CODING ACADEMY</span>
            </div>

            <h1>
              Belajar coding dari nol sampai kerja,<br />
              praktik interaktif <em>langsung di browser.</em>
            </h1>

            <p className="nc-hero-sub">
              Kuasai Full-Stack Web Development, Python AI, dan Mobile App dengan kurikulum berbasis proyek nyata. Tanpa ribet instalasi software, dapatkan feedback instan dari AI code reviewer, dan bangun portofolio profesional untuk direkrut perusahaan teknologi ternama.
            </p>
          </div>

          {/* Split Widget: In-Browser Code Runner (Left) + Simple Sign Up / Log In Form (Right) */}
          <AuthRegisterWidget />
        </div>
      </section>

      {/* Section 01: Hiring Partners & Employment Ecosystem */}
      <section id="partners" className="nc-partners-section nc-wrap">
        <div className="nc-partners-inner">
          <span className="nc-partners-kicker">ALUMNI KAMI TELAH BEKERJA DI 500+ TECH COMPANIES</span>
          <div className="nc-partners-logos">
            <span className="nc-partner-badge">GoTo Tokopedia</span>
            <span className="nc-partner-badge">Traveloka</span>
            <span className="nc-partner-badge">Shopee</span>
            <span className="nc-partner-badge">DANA Indonesia</span>
            <span className="nc-partner-badge">Bukalapak</span>
            <span className="nc-partner-badge">BCA Digital</span>
            <span className="nc-partner-badge">Silicon Valley Remote</span>
          </div>
        </div>
      </section>

      {/* Section 02: Popular Career Tracks */}
      <section id="career-tracks" className="nc-tracks-section nc-wrap">
        <header className="nc-section-head center">
          <span className="nc-badge-tag">01 · JALUR KARIR INDUSTRI TECH</span>
          <h2>Pilih spesialisasi karirmu &amp;<br />kuasai skill yang <em>paling dicari rekruter.</em></h2>
          <p>
            Kurikulum terstruktur mulai dari fundamental logika hingga deployment arsitektur microservices tingkat lanjut.
          </p>
        </header>

        <div className="nc-tracks-grid">
          <div className="nc-track-card">
            <div className="nc-track-icon">
              <Code2 size={24} />
            </div>
            <span className="nc-track-level">Paling Populer · 6 Bulan</span>
            <h3>Full-Stack Web Developer</h3>
            <p>Kuasai ekosistem JavaScript modern: React, Next.js 15, TypeScript, Node.js, Express, PostgreSQL, dan REST/GraphQL API.</p>
            <div className="nc-track-salary">
              <small>Rata-rata Gaji:</small>
              <strong>Rp12.000.000 – Rp24.000.000 / bln</strong>
            </div>
          </div>

          <div className="nc-track-card">
            <div className="nc-track-icon">
              <Cpu size={24} />
            </div>
            <span className="nc-track-level">High Demand · 5 Bulan</span>
            <h3>Python, AI &amp; Data Science</h3>
            <p>Bangun aplikasi berbasis Artificial Intelligence, machine learning predictive models, prompt engineering LLM, dan analisis big data.</p>
            <div className="nc-track-salary">
              <small>Rata-rata Gaji:</small>
              <strong>Rp14.000.000 – Rp28.000.000 / bln</strong>
            </div>
          </div>

          <div className="nc-track-card">
            <div className="nc-track-icon">
              <Laptop size={24} />
            </div>
            <span className="nc-track-level">Mobile First · 5 Bulan</span>
            <h3>Mobile App Developer (Flutter)</h3>
            <p>Buat aplikasi Android dan iOS native performa tinggi dengan single codebase Flutter &amp; Dart, State Management, dan Firebase backend.</p>
            <div className="nc-track-salary">
              <small>Rata-rata Gaji:</small>
              <strong>Rp11.000.000 – Rp22.000.000 / bln</strong>
            </div>
          </div>

          <div className="nc-track-card">
            <div className="nc-track-icon">
              <Globe size={24} />
            </div>
            <span className="nc-track-level">Global Remote · 6 Bulan</span>
            <h3>Cloud DevOps &amp; Security</h3>
            <p>Kuasai otomatisasi CI/CD pipeline, Docker, Kubernetes, Amazon Web Services (AWS), Linux server, dan arsitektur cloud scalable.</p>
            <div className="nc-track-salary">
              <small>Rata-rata Gaji:</small>
              <strong>Rp15.000.000 – Rp32.000.000 / bln</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Dedicated Success Stories & User Testimonials Wall (Daya Pikat Kepercayaan) */}
      <section className="nc-stories-section-wrap">
        <div className="nc-wrap">
          <DeveloperSuccessStories />
        </div>
      </section>

      {/* Section 04: Learn by Doing Methodology */}
      <section id="metode" className="nc-method-section nc-wrap">
        <header className="nc-section-head center">
          <span className="nc-badge-tag">03 · METODOLOGI BELAJAR EFEKTIF</span>
          <h2>Bukan sekadar menonton video tutorial,<br />tapi <em>menulis ribuan baris kode nyata.</em></h2>
          <p>
            Metode belajar hands-on yang meniru lingkungan kerja profesional software engineer di dunia industri sebenarnya.
          </p>
        </header>

        <div className="nc-method-grid">
          <div className="nc-method-card">
            <span className="nc-method-num">01</span>
            <h3>Interactive In-Browser Terminal</h3>
            <p>Tulis dan jalankan kode langsung di browser tanpa pusing setup environment, terminal, atau install dependensi rumit.</p>
          </div>

          <div className="nc-method-card">
            <span className="nc-method-num">02</span>
            <h3>AI Code Reviewer &amp; Instant Feedback</h3>
            <p>Dapatkan penjelasan kenapa kodemu error beserta saran optimasi clean code standar industri dalam hitungan detik 24/7.</p>
          </div>

          <div className="nc-method-card">
            <span className="nc-method-num">03</span>
            <h3>Real-World Capstone Projects</h3>
            <p>Bangun 15+ aplikasi kompleks siap produksi untuk portofolio GitHub: clone marketplace, dashboard SaaS, dan AI chatbot.</p>
          </div>

          <div className="nc-method-card">
            <span className="nc-method-num">04</span>
            <h3>1-on-1 Career Coaching &amp; Hiring</h3>
            <p>Didampingi mentor senior untuk review CV tech, simulasi live coding interview, dan koneksi langsung ke 500+ hiring partner.</p>
          </div>
        </div>
      </section>

      {/* Section 05: FAQ */}
      <section id="faq" className="nc-faq-section nc-wrap">
        <header className="nc-section-head">
          <div>
            <span className="nc-badge-tag">04 · PERTANYAAN UMUM</span>
            <h2>Semua yang sering ditanyakan<br /><em>seputar kursus coding NalaCode.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaCode%2C%20saya%20ingin%20tanya%20seputar%20kursus%20coding."
            target="_blank"
            rel="noreferrer"
            className="nc-link-more"
          >
            <span>Tanya Career Advisor via WA ↗</span>
          </a>
        </header>

        <div className="nc-faq-list">
          <details open>
            <summary>
              <span>01</span> Apakah pemula tanpa latar belakang IT sama sekali bisa ikut?<b>+</b>
            </summary>
            <p>
              Sangat bisa! Lebih dari 65% siswa kami berasal dari latar belakang non-IT (seperti administrasi, perhotelan, manajemen, dan guru). Kurikulum dimulai dari dasar logika paling awal dengan bimbingan bertahap.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Berapa lama waktu yang dibutuhkan sampai bisa siap kerja?<b>+</b>
            </summary>
            <p>
              Dengan komitmen belajar 1.5–2 jam per hari, rata-rata lulusan kami menyelesaikan kurikulum dan membangun portofolio siap kerja dalam waktu 4 hingga 6 bulan.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah ada sertifikat resmi setelah menyelesaikan modul?<b>+</b>
            </summary>
            <p>
              Ya, setiap kali menyelesaikan modul dan proyek akhir, Anda akan mendapatkan sertifikat digital terverifikasi yang dapat langsung ditautkan ke profil LinkedIn dan portofolio Anda.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech Studio membuatkan website kursus online / LMS seperti NalaCode?<b>+</b>
            </summary>
            <p>
              Tentu saja! Ini adalah concept project dari Naltech Studio. Kami merancang website academy, portal kursus online interaktif, in-browser code editor, dan integrasi pendaftaran instan berkonversi tinggi.
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
              Ingin memiliki website akademi &amp; kursus coding<br />
              sekelas <em>NalaCode Academy?</em>
            </h2>
            <p>
              Naltech membantu institusi pendidikan, bootcamp tech, dan platform kursus online menghadirkan platform interaktif berkonversi tinggi yang memikat calon developer baru.
            </p>
            <div className="nc-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20kursus%20coding%20atau%20LMS%20seperti%20NalaCode."
                target="_blank"
                rel="noreferrer"
                className="nc-btn-primary"
              >
                <MessageCircle size={17} />
                <span>Konsultasi Project Website EdTech</span>
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
                <Code2 size={20} />
              </span>
              <span className="nc-logo-text">
                NALA<strong>&lt;CODE/&gt;</strong> <small>ACADEMY</small>
              </span>
            </a>
            <p>
              Platform kursus coding dan bootcamp developer interaktif online. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="nc-footer-col">
            <strong>Career Tracks</strong>
            <a href="#career-tracks">Full-Stack Web Development</a>
            <a href="#career-tracks">Python AI &amp; Machine Learning</a>
            <a href="#career-tracks">Mobile App Flutter</a>
            <a href="#career-tracks">Data Science &amp; SQL</a>
            <a href="#career-tracks">Cloud DevOps Engineering</a>
          </div>

          <div className="nc-footer-col">
            <strong>Kisah Sukses &amp; Fitur</strong>
            <a href="#testimoni">Kisah Career Switcher</a>
            <a href="#top">In-Browser Code Playground</a>
            <a href="#metode">AI Code Reviewer 24 Jam</a>
            <a href="#partners">500+ Hiring Partners</a>
          </div>

          <div className="nc-footer-col">
            <strong>Pengembang Studio</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="nc-address">Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="nc-footer-bottom">
          <small>
            © 2026 NalaCode Academy · Coding Course Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>1.800.000+ Developer Pembelajar se-Indonesia &amp; Global</span>
        </div>
      </footer>
    </main>
  );
}
