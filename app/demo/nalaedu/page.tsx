import type { Metadata } from 'next';
import Link from 'next/link';
import './nalaedu.css';
import LearningCalculatorWidget from './LearningCalculatorWidget';
import {
  Sparkles,
  GraduationCap,
  Users,
  Award,
  Star,
  CheckCircle2,
  ArrowUpRight,
  Video,
  BookOpen,
  MessageCircle,
  Phone,
  ShieldCheck,
  Zap,
  TrendingUp,
  Brain,
  Layers,
  Clock,
  Smartphone,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'NalaEdu Academy — Aplikasi Belajar Online No. 1 SD, SMP, SMA & Kuliah by Naltech',
  description: 'Dipercaya 2.500.000+ pelajar dan 15.000+ master teacher. Bimbingan belajar online terlengkap dari SD hingga universitas dengan materi video animasi, live teaching, dan klinik PR 24 jam.',
  alternates: {
    canonical: '/demo/nalaedu',
  },
  openGraph: {
    title: 'NalaEdu Academy — Aplikasi Belajar Online No. 1 by Naltech',
    description: 'Dipercaya 2.500.000+ pelajar dan 15.000+ master teacher. Bimbingan belajar online terlengkap dari SD hingga universitas.',
    images: [{ url: `${siteUrl}/learning/hero-student.jpg`, width: 1200, height: 630, alt: 'NalaEdu Academy Online Learning App' }],
  },
  twitter: {
    title: 'NalaEdu Academy — Aplikasi Belajar Online No. 1 by Naltech',
    description: 'Dipercaya 2.500.000+ pelajar dan 15.000+ master teacher.',
    images: [`${siteUrl}/learning/hero-student.jpg`],
  },
};

const eduStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'NalaEdu Academy (Concept by Naltech)',
    description: 'Aplikasi bimbingan belajar online nomor 1 untuk jenjang SD, SMP, SMA, hingga universitas karya Naltech Studio.',
    url: `${siteUrl}/demo/nalaedu`,
    image: `${siteUrl}/learning/hero-student.jpg`,
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
        name: 'NalaEdu Academy',
        item: `${siteUrl}/demo/nalaedu`,
      },
    ],
  },
];

export default function NalaEduPage() {
  return (
    <main className="ne-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eduStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="ne-promo-ribbon">
        <div className="ne-wrap ne-ribbon-content">
          <span className="ne-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO BACK TO SCHOOL 2026</span>
          </span>
          <p>
            Diskon Beasiswa Belajar s.d. <strong>55%</strong> + Ekstra Potongan Rp200.000 pakai kode: <code>NALAPINTAR</code>
          </p>
          <a href="#kalkulator-belajar" className="ne-ribbon-link">
            <span>Pilih Paket Belajar</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="ne-demo-bar">
        <div className="ne-wrap ne-demo-inner">
          <Link href="/" className="ne-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="ne-header">
        <div className="ne-wrap ne-header-inner">
          <a className="ne-logo" href="#top">
            <span className="ne-logo-icon">
              <GraduationCap size={22} />
            </span>
            <span className="ne-logo-text">
              NALA<strong>EDU</strong> <small>ACADEMY</small>
            </span>
          </a>

          <nav className="ne-nav" aria-label="Navigasi NalaEdu">
            <a href="#kalkulator-belajar">Pilihan Paket</a>
            <a href="#fitur">Fitur Belajar</a>
            <a href="#kelulusan">Kelulusan PTN</a>
            <a href="#keunggulan">Metode Belajar</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="ne-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20NalaEdu%2C%20saya%20ingin%20tanya%20informasi%20paket%20belajar%20dan%20coba%20gratis."
              target="_blank"
              rel="noreferrer"
              className="ne-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Konsultasi Belajar</span>
            </a>
            <a href="#kalkulator-belajar" className="ne-btn-header-cta">
              <Zap size={15} />
              <span>Coba Gratis 7 Hari</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Intelligent Social Proof Headline */}
      <section id="top" className="ne-hero">
        <div className="ne-wrap">
          <div className="ne-hero-copy">
            <div className="ne-hero-tag">
              <Sparkles size={14} className="ne-icon-blue" />
              <span>APLIKASI BIMBEL ONLINE TERLENGKAP NO. 1 DI INDONESIA</span>
            </div>

            <h1>
              Dipercaya 2.500.000+ pelajar &amp; 15.000+ guru,<br />
              belajar lebih pintar, <em>raih masa depan impian.</em>
            </h1>

            <p className="ne-hero-sub">
              Bimbingan belajar online interaktif dari jenjang SD, SMP, SMA hingga bangku kuliah. Kuasai konsep sulit dalam hitungan menit lewat video animasi 3D, live class interaktif, serta bimbingan master teacher terbaik.
            </p>

            {/* Intelligent Statistics Counters Bar */}
            <div className="ne-hero-stats-bar">
              <div className="ne-stat-item">
                <div className="ne-stat-icon-wrap">
                  <Users size={20} />
                </div>
                <div>
                  <strong>2.500.000+</strong>
                  <small>Pelajar Aktif Seluruh Indonesia</small>
                </div>
              </div>

              <div className="ne-stat-item">
                <div className="ne-stat-icon-wrap">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <strong>15.000+</strong>
                  <small>Master Teacher Terverifikasi</small>
                </div>
              </div>

              <div className="ne-stat-item">
                <div className="ne-stat-icon-wrap">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <strong>94.8%</strong>
                  <small>Siswa Lolos PTN Impian</small>
                </div>
              </div>

              <div className="ne-stat-item">
                <div className="ne-stat-icon-wrap">
                  <Star size={20} />
                </div>
                <div>
                  <strong>4.9 / 5.0</strong>
                  <small>Rating di Play Store &amp; App Store</small>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Two-Column CTA Selection & Dynamic Cost Breakdown */}
          <LearningCalculatorWidget />
        </div>
      </section>

      {/* Section 01: 4 Key Effective Learning Features */}
      <section id="fitur" className="ne-features-section ne-wrap">
        <header className="ne-section-head center">
          <span className="ne-badge-tag">01 · FITUR UNGGULAN NALAEDU</span>
          <h2>Kenapa belajar di NalaEdu<br />jauh lebih <em>menyenangkan &amp; efektif?</em></h2>
          <p>
            Dirancang dengan pendekatan microlearning dan teknologi adaptif agar materi pelajaran menempel lebih kuat di ingatan.
          </p>
        </header>

        <div className="ne-features-grid">
          <div className="ne-feature-card">
            <div className="ne-feat-icon">
              <Video size={24} />
            </div>
            <h3>Video Animasi Microlearning</h3>
            <p>Materi rumit dipecah menjadi video animasi grafis berdurasi 5–10 menit dengan visual menarik yang membuat konsep matematika dan sains jadi sangat mudah dipahami.</p>
          </div>

          <div className="ne-feature-card">
            <div className="ne-feat-icon">
              <Users size={24} />
            </div>
            <h3>Live Teaching Interaktif</h3>
            <p>Sesi belajar tatap muka daring bersama Master Teacher lulusan kampus top (UI, ITB, UGM). Dilengkapi fitur angkat tangan, polling kuis cepat, dan diskusi dua arah.</p>
          </div>

          <div className="ne-feature-card">
            <div className="ne-feat-icon">
              <Brain size={24} />
            </div>
            <h3>Bank Soal &amp; Tryout Adaptif IRT</h3>
            <p>Lebih dari 100.000+ bank soal HOTS dengan sistem skoring Item Response Theory (IRT) persis standar SNPMB resmi untuk memetakan peluang lolos kampus impian.</p>
          </div>

          <div className="ne-feature-card">
            <div className="ne-feat-icon">
              <MessageCircle size={24} />
            </div>
            <h3>Klinik PR &amp; Tanya Tutor 24 Jam</h3>
            <p>Bingung dengan PR sekolah? Cukup foto soal yang sulit, kirim ke aplikasi, dan tutor kami akan memberikan langkah penyelesaian lengkap dalam waktu kurang dari 5 menit.</p>
          </div>
        </div>
      </section>

      {/* Section 02: Success PTN & Academic Track Record */}
      <section id="kelulusan" className="ne-ptn-section">
        <div className="ne-wrap ne-ptn-grid">
          <div className="ne-ptn-copy">
            <span className="ne-badge-tag">02 · PRESTASI &amp; KELULUSAN KAMPUS</span>
            <h2>Wujudkan impian kuliah di<br /><em>Perguruan Tinggi Negeri Terbaik.</em></h2>
            <p>
              Program bimbingan intensif UTBK-SNBT NalaEdu telah meluluskan ratusan ribu alumni ke program studi bergengsi di Universitas Indonesia, ITB, UGM, Unair, ITS, Undip, dan Unpad.
            </p>
            <ul className="ne-ptn-specs">
              <li>
                <CheckCircle2 size={16} className="ne-icon-blue" />
                <span>Rekomendasi jurusan berbasis analisis bakat, nilai rapor, dan passing grade real-time</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="ne-icon-blue" />
                <span>Bedah trik cepat menjawab soal penalaran kuantitatif dan literasi bahasa</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="ne-icon-blue" />
                <span>Grup belajar eksklusif bersama pejuang PTN se-Indonesia</span>
              </li>
            </ul>
            <div className="ne-ptn-actions">
              <a href="#kalkulator-belajar" className="ne-btn-primary">
                <GraduationCap size={16} />
                <span>Gabung Pejuang PTN 2026</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="ne-ptn-visual">
            <img src="/learning/hero-student.jpg" alt="Siswa Berprestasi NalaEdu Lolos PTN" />
            <div className="ne-ptn-floating-badge">
              <Award size={18} className="ne-icon-blue" />
              <div>
                <strong>94.8% Lolos PTN Favorit</strong>
                <small>Berdasarkan Data Kelulusan SNBT 2025/2026</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Testimonials */}
      <section id="testimoni" className="ne-reviews-section ne-wrap">
        <div className="ne-review-card">
          <span className="ne-quote-mark">“</span>
          <blockquote>
            Berkat NalaEdu, nilai Tryout UTBK saya naik dari skor 520 ke 715 dalam 4 bulan! Video konsepnya beneran to-the-point dan klinik PR 24 jam sangat ngebantu waktu ngerjain tugas malem-malem. Alhamdulillah sekarang saya resmi jadi mahasiswa FK UI!
          </blockquote>
          <div className="ne-reviewer">
            <div className="ne-rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#2563EB" color="#2563EB" />
              ))}
            </div>
            <strong>Nadhira Ramadhani</strong>
            <small>Alumni SMA Negeri 8 Jakarta · Diterima di Fakultas Kedokteran UI</small>
          </div>
        </div>
      </section>

      {/* Section 04: FAQ */}
      <section id="faq" className="ne-faq-section ne-wrap">
        <header className="ne-section-head">
          <div>
            <span className="ne-badge-tag">04 · PERTANYAAN UMUM</span>
            <h2>Semua hal yang perlu kamu ketahui<br /><em>tentang aplikasi NalaEdu.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaEdu%2C%20saya%20ada%20pertanyaan%20seputar%20pembelian%20paket%20belajar."
            target="_blank"
            rel="noreferrer"
            className="ne-link-more"
          >
            <span>Tanya Tim Support WhatsApp ↗</span>
          </a>
        </header>

        <div className="ne-faq-list">
          <details open>
            <summary>
              <span>01</span> Apakah materi pembelajaran sudah sesuai Kurikulum Merdeka terbaru?<b>+</b>
            </summary>
            <p>
              Ya, 100% materi NalaEdu disusun dan diperbarui secara berkala oleh tim kurikulum ahli kami sesuai Kurikulum Merdeka dan Kurikulum Nasional terbaru untuk SD, SMP, hingga SMA/SMK.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Bagaimana cara mengakses materi setelah melakukan pembayaran?<b>+</b>
            </summary>
            <p>
              Setelah pembayaran terkonfirmasi, akun Anda langsung aktif secara otomatis dalam waktu 1 menit. Anda bisa langsung login lewat aplikasi di smartphone Android, iPhone, iPad, maupun web browser di laptop.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah paket belajar bisa diakses di lebih dari satu perangkat?<b>+</b>
            </summary>
            <p>
              Ya, akun NalaEdu Anda dapat digunakan secara sinkron di ponsel dan laptop Anda untuk kemudahan belajar di mana saja dan kapan saja.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech Studio membuatkan website atau aplikasi EdTech seperti NalaEdu?<b>+</b>
            </summary>
            <p>
              Sangat bisa! Ini adalah project demo dari Naltech Studio. Kami merancang website bimbingan belajar, learning management system (LMS), platform kursus online, dan aplikasi edukasi interaktif dengan UI/UX modern.
            </p>
          </details>
        </div>
      </section>

      {/* Section 05: Final CTA Card */}
      <section className="ne-cta-section ne-wrap">
        <div className="ne-cta-card">
          <div className="ne-cta-glow" />
          <div className="ne-cta-inner">
            <span className="ne-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Ingin membangun platform edukasi &amp; bimbel<br />
              sekelas <em>NalaEdu Academy?</em>
            </h2>
            <p>
              Naltech membantu lembaga pendidikan, bimbel, yayasan sekolah, dan startup edtech menghadirkan platform belajar online berkonversi tinggi dengan fitur kalkulator paket, streaming video, dan integrasi pendaftaran instan.
            </p>
            <div className="ne-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20aplikasi%20belajar%20seperti%20NalaEdu."
                target="_blank"
                rel="noreferrer"
                className="ne-btn-primary"
              >
                <MessageCircle size={17} />
                <span>Konsultasi Project Website EdTech</span>
                <ArrowUpRight size={17} />
              </a>
              <Link href="/" className="ne-btn-secondary">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ne-footer ne-wrap">
        <div className="ne-footer-grid">
          <div className="ne-footer-col brand">
            <a className="ne-logo" href="#top">
              <span className="ne-logo-icon">
                <GraduationCap size={20} />
              </span>
              <span className="ne-logo-text">
                NALA<strong>EDU</strong> <small>ACADEMY</small>
              </span>
            </a>
            <p>
              Platform bimbingan belajar online terlengkap untuk pelajar Indonesia. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="ne-footer-col">
            <strong>Jenjang Pendidikan</strong>
            <a href="#kalkulator-belajar">SD &amp; MI (Kelas 1–6)</a>
            <a href="#kalkulator-belajar">SMP &amp; MTs (Kelas 7–9)</a>
            <a href="#kalkulator-belajar">SMA &amp; SMK (Kelas 10–12)</a>
            <a href="#kalkulator-belajar">Pejuang UTBK-SNBT</a>
            <a href="#kalkulator-belajar">Universitas &amp; Karir</a>
          </div>

          <div className="ne-footer-col">
            <strong>Program &amp; Fitur</strong>
            <a href="#fitur">Video Animasi 3D</a>
            <a href="#fitur">Live Teaching Kelas Daring</a>
            <a href="#fitur">Bank Soal &amp; Tryout IRT</a>
            <a href="#fitur">Klinik PR 24 Jam</a>
            <a href="#kelulusan">Konseling Minat Bakat</a>
          </div>

          <div className="ne-footer-col">
            <strong>Pengembang Studio</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="ne-address">Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="ne-footer-bottom">
          <small>
            © 2026 NalaEdu Academy · EdTech Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Jakarta · Bandung · Surabaya · Yogyakarta</span>
        </div>
      </footer>
    </main>
  );
}
