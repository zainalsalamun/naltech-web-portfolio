import type { Metadata } from 'next';
import Link from 'next/link';
import './pixi.css';
import PixiEventCalculatorWidget from './PixiEventCalculatorWidget';
import PixiHeaderNav from './PixiHeaderNav';
import {
  Sparkles,
  ArrowUpRight,
  Mail,
  Check,
  ChevronRight,
  Star,
  ArrowRight,
  ArrowLeft,
  Building2,
  Calendar,
  Award,
  CheckCircle2,
} from 'lucide-react';

const WhatsAppIcon = ({ size = 18, className = '', fill = 'currentColor' }: { size?: number; className?: string; fill?: string }) => (
  <svg
    width={size}
    height={size}
    className={`pxc-wa-icon ${className}`}
    style={{ width: `${size}px`, height: `${size}px`, flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.486-8.414z" />
  </svg>
);

const InstagramIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    className={`pxc-ig-icon ${className}`}
    style={{ width: `${size}px`, height: `${size}px`, flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';
const whatsappUrl = 'https://wa.me/6285842345332?text=Halo%20Pixi%20Creative%2C%20saya%20ingin%20konsultasi%20mengenai%20penyelenggaraan%20acara%20kami.';
const emailUrl = 'mailto:pixicreative01@gmail.com';
const phoneDisplay = '+62 8584 234 5332';
const instagramUrl = 'https://www.instagram.com/pixicreative.id/';

export const metadata: Metadata = {
  title: 'PIXI CREATIVE — Event Organizer, MICE & Company Trip Planner',
  description: 'Event Organizer & Travel Planner profesional di Yogyakarta dan seluruh Indonesia. Melayani MICE, gathering kantor, seminar kementerian, outbound, dan perjalanan wisata.',
  alternates: {
    canonical: '/demo/pixi-creative',
  },
  openGraph: {
    title: 'PIXI CREATIVE — Event Organizer & Planner',
    description: 'Kami Tidak Sekadar Merancang Acara, Kami Menciptakan Kenangan Yang Akan Selalu Dikenang.',
    images: [{ url: `${siteUrl}/pixi/hero-mice.jpg`, width: 1200, height: 630, alt: 'PIXI CREATIVE' }],
  },
};

const pixiStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pixi Creative',
    alternateName: ['Pixi Creative Event Planner', 'Pixi EO'],
    description: 'Penyedia layanan Event Organizer (EO), MICE, dan Agen Perjalanan Wisata profesional terpercaya di Yogyakarta & seluruh Indonesia.',
    url: `${siteUrl}/demo/pixi-creative`,
    telephone: '+6285842345332',
    email: 'pixicreative01@gmail.com',
    priceRange: 'Rp5.000.000 - Rp250.000.000+',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Yogyakarta',
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
        name: 'Pixi Creative',
        item: `${siteUrl}/demo/pixi-creative`,
      },
    ],
  },
];

const clientLogos = [
  {
    name: 'Kementerian PKP RI',
    sub: 'Kementerian Perumahan & Kawasan Permukiman',
    type: 'Kementerian RI',
    badge: 'MICE & Seminar Nasional',
  },
  {
    name: 'Dinkes Kota Yogyakarta',
    sub: 'Dinas Kesehatan Kota Yogyakarta',
    type: 'Pemerintah Daerah',
    badge: 'Workshop & Pelatihan Medis',
  },
  {
    name: 'Puskesmas Kotagede',
    sub: 'Puskesmas Kotagede Kota Yogyakarta',
    type: 'Institusi Kesehatan',
    badge: 'Penggalangan Komitmen',
  },
  {
    name: 'Puskesmas Ngaglik 2',
    sub: 'Puskesmas Ngaglik 2 Sleman',
    type: 'Institusi Kesehatan',
    badge: 'Outing & Gathering Trip',
  },
  {
    name: 'Kemenkumham RI',
    sub: 'Kementerian Hukum & HAM RI',
    type: 'Kementerian RI',
    badge: 'Lokakarya Nasional',
  },
  {
    name: 'Program BSPS',
    sub: 'Bantuan Stimulan Perumahan Swadaya',
    type: 'Program Nasional PUPR',
    badge: 'Monitoring & Rapat Evaluasi',
  },
];

const services = [
  {
    id: 'mice',
    title: 'MICE',
    subtitle: 'Meeting, Incentive, Conference & Exhibition',
    image: '/pixi/service-mice.jpg',
    desc: 'Solusi profesional untuk meeting, incentive, conference, dan exhibition yang mengutamakan kreativitas, kualitas layanan, dan pengalaman peserta yang berkesan.',
    points: [
      'Rapat kerja, seminar, simposium, & konferensi nasional',
      'Kurasi venue hotel berbintang & convention center',
      'Manajemen registrasi peserta, akomodasi & VIP protocol',
      'Penyediaan audio visual, backdrop panggung & LED videotron',
    ],
  },
  {
    id: 'event-organizer',
    title: 'EVENT ORGANIZER',
    subtitle: 'Professional On-Site Event Execution',
    image: '/pixi/service-eo.jpg',
    desc: 'Mengubah ide menjadi pengalaman yang berkesan melalui perencanaan yang matang, koordinasi yang profesional, dan pelaksanaan acara yang berkualitas.',
    points: [
      'Eksekusi hari H dengan minute-by-minute rundown presisi',
      'Pengadaan MC profesional, live talent & bintang tamu',
      'Dokumentasi cinematic photo & video aftermovie 4K',
      'Tim crew & field coordinator standby penanganan kendala',
    ],
  },
  {
    id: 'private-company-trip',
    title: 'PRIVATE & COMPANY TRIP',
    subtitle: 'Tour & Travel Management',
    image: '/pixi/service-trip.jpg',
    desc: 'Melalui layanan Tour & Travel, Pixi Creative membantu perusahaan dan instansi menyelenggarakan perjalanan dinas, incentive trip, gathering, maupun wisata kelompok.',
    points: [
      'Itinerary fleksibel & disesuaikan preferensi instansi',
      'Armada bus pariwisata executive, HiAce, & driver handal',
      'Outbound team building trainer & fun synergy games',
      'Konsumsi kuliner khas nusantara & tiket wisata all-in',
    ],
  },
  {
    id: 'event-planner',
    title: 'EVENT PLANNER',
    subtitle: 'Concept, Budgeting & Vendor Sourcing',
    image: '/pixi/service-planner.jpg',
    desc: 'Mewujudkan ide menjadi pengalaman yang berkesan melalui perencanaan yang kreatif, terstruktur, dan profesional dari konsep awal hingga evaluasi akhir.',
    points: [
      'Pengembangan konsep kreatif, tema visual & moodboard',
      'Pemetaan alokasi anggaran yang efisien & transparan',
      'Koordinasi dan negosiasi multi-vendor rekanan terpercaya',
      'Konsultasi intensif bersama PIC khusus yang responsif',
    ],
  },
];

const pillars = [
  { title: 'Pengalaman dan Profesionalisme', desc: 'Rekam jejak terbukti mengelola agenda kementerian dan institusi besar.' },
  { title: 'Kreativitas dan Inovasi', desc: 'Konsep acara segar, dinamis, dan tidak monoton untuk setiap tema kegiatan.' },
  { title: 'Manajemen yang Efisien', desc: 'Rundown terstruktur, koordinasi cepat, dan alur operasional yang rapi.' },
  { title: 'Kualitas Layanan Terstandar', desc: 'Standar hospitality bintang lima dari penyambutan tamu hingga evaluasi.' },
  { title: 'Detail-Oriented & Presisi', desc: 'Memperhatikan setiap detail teknis panggung, konsumsi, dan kenyamanan peserta.' },
  { title: 'Kesiapan Menghadapi Kendala', desc: 'Tim lapangan responsif dengan mitigasi risiko dan contingency plan.' },
  { title: 'Pendekatan Personal', desc: 'Komunikasi intensif 1-on-1 dengan PIC instansi untuk hasil sesuai ekspektasi.' },
  { title: 'Harga yang Bersaing & Transparan', desc: 'Simulasi biaya fleksibel, transparan tanpa biaya tersembunyi.' },
];

const reviews = [
  {
    name: 'Kementerian PKP RI',
    event: 'Sosialisasi Program Nasional & FLPP',
    feedback: 'Pelaksanaan acara berjalan sangat lancar, khidmat, dan koordinasi protokoler Menteri PKP tertata sangat rapi. Terima kasih Pixi Creative!',
    initials: 'PKP',
  },
  {
    name: 'Puskesmas Kotagede Yogyakarta',
    event: 'Penggalangan Komitmen Pelayanan Kesehatan',
    feedback: 'Acara penggalangan komitmen kami menjadi sangat dinamis, berkesan, dan seluruh peserta termotivasi dengan baik sepanjang hari.',
    initials: 'PKG',
  },
  {
    name: 'Puskesmas Ngaglik 2 Sleman',
    event: 'Employee Outing & Gathering Trip',
    feedback: 'Konsep Small Group, Big Fun benar-benar terbukti! Kru Pixi sangat helpful, ramah, dan sigap melayani seluruh staf kami.',
    initials: 'PN2',
  },
  {
    name: 'Panitia Lokakarya Nasional',
    event: 'Lokakarya Pembaruan Hukum Pidana',
    feedback: 'Manajemen venue convention hall, sound system panggung, registrasi peserta sangat profesional. Rekomendasi EO terbaik di Jogja!',
    initials: 'LKN',
  },
];

const portfolioProjects = [
  {
    title: 'Sosialisasi Kredit Program Perumahan (KPP) & FLPP',
    subtitle: 'Dihadiri langsung oleh Menteri PKP RI, Bapak Maruarar Sirait',
    date: 'November 2025',
    category: 'MICE / Agenda Kementerian',
    images: ['/pixi/portfolio-pkp-1.jpg', '/pixi/portfolio-pkp-2.jpg'],
    desc: 'Menyelenggarakan sosialisasi program perumahan nasional dengan standar protokoler kementerian, panggung LED videotron, dan sound staging resmi.',
  },
  {
    title: 'Penggalangan Komitmen Puskesmas Kotagede',
    subtitle: 'Workshop peningkatan mutu pelayanan & komitmen bersama staf kesehatan',
    date: 'Mei 2026',
    category: 'Workshop & Institusi Kesehatan',
    images: ['/pixi/portfolio-kotagede-1.jpg', '/pixi/portfolio-kotagede-2.jpg'],
    desc: 'Konsep workshop interaktif yang memadukan sesi formal, penandatanganan komitmen, sesi foto bersama, dan jamuan prasmanan eksklusif.',
  },
  {
    title: 'Puskesmas Ngaglik 2 Yogyakarta',
    subtitle: 'Small Group, Big Fun — Gathering, Outbound & Team Building Trip',
    date: 'Mei 2026',
    category: 'Private & Company Trip',
    images: ['/pixi/portfolio-ngaglik-1.jpg', '/pixi/portfolio-ngaglik-2.jpg'],
    desc: 'Program gathering penuh kehangatan dengan games outbound, ice breaking, tur wisata tematik, dan jamuan makan malam kebersamaan.',
  },
  {
    title: 'Lokakarya Nasional Pembaruan Hukum Pidana',
    subtitle: 'Langkah strategis dalam menyosialisasikan pembaruan hukum pidana nasional',
    date: 'Februari 2026',
    category: 'MICE / Seminar Nasional',
    images: ['/pixi/portfolio-hukum-1.jpg', '/pixi/portfolio-hukum-2.jpg'],
    desc: 'Konferensi nasional yang mempertemukan pakar hukum, akademisi, dan praktisi peradilan di auditorium bertaraf internasional.',
  },
  {
    title: 'Monitoring Progress Pelaksanaan BSPS',
    subtitle: 'Monitoring progres Bantuan Stimulan Perumahan Swadaya',
    date: 'November 2025',
    category: 'Government Evaluation Meeting',
    images: ['/pixi/portfolio-bsps-1.jpg', '/pixi/portfolio-bsps-2.jpg'],
    desc: 'Rapat koordinasi dan evaluasi program bantuan perumahan swadaya dengan alur registrasi digital, materi rapat terpadu, dan fasilitas live hybrid.',
  },
];

export default function PixiCreativePage() {
  return (
    <div className="pxc-page">
      {/* Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pixiStructuredData) }}
      />

      {/* FIXED TOP NAVIGATION BAR (ALWAYS PINNED) */}
      <div className="pxc-top-fixed-bar">
        {/* 1. TOP DEMO BAR */}
        <div className="pxc-demo-bar">
          <div className="pxc-wrap pxc-demo-inner">
            <div className="pxc-demo-left">
              <Link href="/" className="pxc-back-link">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Naltech Studio Showcase</span>
              </Link>
              <span className="pxc-demo-tag">#37 PIXI CREATIVE</span>
            </div>
            <div className="pxc-demo-right">
              <span>
                <i className="pxc-pulse-dot" />
                Official Event Organizer & Travel Agency
              </span>
            </div>
          </div>
        </div>

        {/* 2. HEADER / NAVIGATION */}
        <header className="pxc-header">
          <div className="pxc-wrap pxc-header-inner">
            <Link href="/demo/pixi-creative" className="pxc-brand">
              <div className="pxc-logo-badge">
                <span>P</span>
              </div>
              <div className="pxc-brand-info">
                <span className="pxc-brand-text">
                  PIXI <span>CREATIVE</span>
                </span>
                <small className="pxc-brand-sub">EVENT & TRAVEL PLANNER</small>
              </div>
            </Link>

            <PixiHeaderNav />

            <div className="pxc-header-cta">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pxc-btn-consult"
              >
                <WhatsAppIcon className="w-4 h-4" fill="#ffffff" />
                <span>FREE CONSULTATION</span>
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* 3. HERO SECTION WITH REAL BANNER PHOTOGRAPHY & DIRECT QUOTE */}
      <section id="beranda" className="pxc-hero">
        <div className="pxc-wrap pxc-hero-content">
          <div className="pxc-hero-badge">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>EDITORIAL ISSUE 2026 • <strong>PIXI CREATIVE PLANNER</strong></span>
          </div>

          <h1 className="pxc-hero-title">
            &quot;Kami Tidak Sekadar Merancang Acara, <br />
            Kami Menciptakan Kenangan Yang Akan Selalu Dikenang&quot;
          </h1>

          <p className="pxc-hero-desc">
            Solusi Acara yang Lengkap dan Profesional dengan <strong>Pixi Creative Event Planner</strong>. Melayani MICE kementerian, gathering corporate, outbound team building, dan perjalanan wisata nusantara.
          </p>

          <div className="pxc-hero-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pxc-btn-primary"
            >
              <WhatsAppIcon className="w-4 h-4" fill="#ffffff" />
              <span>KONSULTASI GRATIS ACARA</span>
            </a>
            <a href="#simulasi" className="pxc-btn-secondary">
              <Sparkles className="w-4 h-4" />
              <span>Hitung Simulasi Anggaran</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Magazine Cover Showcase Image */}
          <div className="pxc-hero-cover-media">
            <img src="/pixi/hero-mice.jpg" alt="Pixi Creative Event Staging & Hospitality" />
            <div className="pxc-hero-cover-overlay">
              <div>
                <span className="pxc-hero-cover-tag">MICE & EVENT PRODUCTION</span>
                <h3 className="pxc-hero-cover-title">Professional Staging, VIP Hospitality & Nationwide Execution</h3>
              </div>
              <div className="pxc-pill-tag" style={{ background: 'rgba(255,255,255,0.92)', color: '#18181b', margin: 0, fontWeight: 800 }}>
                Yogyakarta & All Indonesia
              </div>
            </div>
          </div>

          {/* Editorial Quick Stats Strip */}
          <div className="pxc-hero-stats">
            <div className="pxc-stat-item">
              <strong>100+</strong>
              <span>Acara Sukses Terlaksana</span>
            </div>
            <div className="pxc-stat-item">
              <strong>99.8%</strong>
              <span>Kepuasan Klien & Instansi</span>
            </div>
            <div className="pxc-stat-item">
              <strong>All-in</strong>
              <span>MICE, EO & Tour Travel</span>
            </div>
            <div className="pxc-stat-item">
              <strong>1-on-1</strong>
              <span>Dedicated Event PIC</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TENTANG KAMI */}
      <section id="tentang-kami" className="pxc-section">
        <div className="pxc-wrap pxc-about-grid">
          <div className="pxc-about-copy">
            <div className="pxc-pill-tag">
              TENTANG KAMI
            </div>
            <h2>
              &quot;Creating Memorable Experiences, Delivering Exceptional Events.&quot;
            </h2>
            <p>
              <strong>Pixi Creative Planner</strong> adalah penyedia layanan event planner profesional yang menghadirkan solusi kreatif untuk kebutuhan meeting, training, gathering, corporate event, dan perjalanan wisata.
            </p>
            <p>
              Dengan tim yang berpengalaman dan penuh dedikasi, kami berkomitmen menciptakan acara yang terencana dengan baik, berkesan, dan sesuai dengan kebutuhan setiap klien.
            </p>
            <p>
              Kami bangga telah dipercaya oleh ratusan kantor, instansi pemerintah, BUMN, dan korporat untuk mengatur dan menyelenggarakan berbagai acara dan perjalanan wisata di seluruh Indonesia.
            </p>

            <div className="pxc-about-features">
              <div className="pxc-feat-badge">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Rundown Acara Menit per Menit yang Presisi</span>
              </div>
              <div className="pxc-feat-badge">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Koordinasi Vendor Terpercaya & Berpengalaman</span>
              </div>
              <div className="pxc-feat-badge">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Transparansi Biaya Tanpa Biaya Tersembunyi</span>
              </div>
            </div>

            <div style={{ marginTop: '16px' }}>
              <a href="#layanan" className="pxc-btn-consult" style={{ display: 'inline-flex' }}>
                <span>Jelajahi Layanan Kami</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="pxc-about-photo-card">
            <img
              src="/pixi/about-team.jpg"
              alt="Pixi Creative Team & Hospitality"
            />
            <div className="pxc-about-photo-overlay">
              <small>PIXI CREATIVE PRODUCTION</small>
              <strong>Professional Team & Reliable Hospitality</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LAYANAN KAMI (4 PHOTO CARDS) */}
      <section id="layanan" className="pxc-section bg-subtle">
        <div className="pxc-wrap">
          <div className="pxc-section-header">
            <div className="pxc-pill-tag">
              OUR SERVICES
            </div>
            <h2 className="pxc-section-title">
              Layanan Kami
            </h2>
            <p className="pxc-section-desc">
              Solusi terpadu penyelenggaraan acara dan perjalanan wisata dengan standar mutu terbaik.
            </p>
          </div>

          <div className="pxc-services-grid">
            {services.map((srv) => (
              <div key={srv.id} className="pxc-service-card">
                <div className="pxc-service-top-content">
                  <div className="pxc-service-img-wrap">
                    <img src={srv.image} alt={srv.title} />
                    <span className="pxc-service-tag">{srv.title}</span>
                  </div>

                  <div className="pxc-service-body">
                    <div className="pxc-service-head">
                      <h3>{srv.title}</h3>
                      <span className="pxc-service-sub">
                        {srv.subtitle}
                      </span>
                    </div>

                    <p className="pxc-service-text">{srv.desc}</p>

                    <ul className="pxc-service-points">
                      {srv.points.map((pt, pIdx) => (
                        <li key={pIdx}>
                          <Check className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pxc-service-footer">
                  <a
                    href={`https://wa.me/6285842345332?text=Halo%20Pixi%20Creative%2C%20saya%20tertarik%20konsultasi%20layanan%20${encodeURIComponent(srv.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pxc-service-btn"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-orange-600" />
                    <span>Konsultasi WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KENAPA HARUS PILIH KAMI ? */}
      <section id="keunggulan" className="pxc-section">
        <div className="pxc-wrap pxc-pillars-grid">
          <div className="pxc-pillars-photo">
            <img
              src="/pixi/keunggulan-event.jpg"
              alt="Pixi Creative Event Execution"
            />
            <div className="pxc-pillars-photo-badge">
              <Award className="w-5 h-5 text-orange-400" />
              <div>
                <strong>Berpengalaman & Terpercaya</strong>
                <span>Ratusan Instansi & Corporate Clients</span>
              </div>
            </div>
          </div>

          <div className="pxc-pillars-content">
            <div className="pxc-pill-tag">
              KEUNGGULAN KAMI
            </div>
            <h2 className="pxc-section-title" style={{ textAlign: 'left' }}>
              Kenapa Harus Pilih Kami ?
            </h2>
            <p className="pxc-section-desc" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Pixi Creative selalu memprioritaskan ketepatan waktu, kualitas teknis panggung, keramahan kru, dan transparansi anggaran demi kenyamanan penuh pihak penyelenggara.
            </p>

            <div className="pxc-pillars-list">
              {pillars.map((item, idx) => (
                <div key={idx} className="pxc-pillar-item">
                  <div className="pxc-pillar-num">{idx + 1}</div>
                  <div className="pxc-pillar-info">
                    <span className="pxc-pillar-name">{item.title}</span>
                    <p className="pxc-pillar-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pxc-btn-consult"
                style={{ display: 'inline-flex' }}
              >
                <WhatsAppIcon className="w-4 h-4" fill="#ffffff" />
                <span>Diskusikan Kebutuhan Acara Anda</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. KREATIF & INOVATIF QUOTE BANNER */}
      <section className="pxc-quote-banner">
        <div className="pxc-wrap pxc-quote-inner">
          <div className="pxc-hero-badge">
            KREATIF & INOVATIF
          </div>
          <p className="pxc-quote-text">
            &quot;Kami percaya bahwa setiap acara memiliki cerita yang unik. Karena itu, tim Pixi Creative selalu menghadirkan gagasan kreatif dan solusi inovatif yang mampu mengubah sebuah kegiatan menjadi pengalaman yang inspiratif dan tak terlupakan.&quot;
          </p>
          <span className="pxc-quote-author">
            — PIXI CREATIVE EVENT & TRAVEL PLANNER
          </span>
        </div>
      </section>

      {/* 8. INTERACTIVE EVENT BUDGET SIMULATOR */}
      <section id="simulasi" className="pxc-section pxc-simulator-section bg-subtle">
        <div className="pxc-wrap">
          <div className="pxc-section-header">
            <div className="pxc-pill-tag">
              SIMULASI INTERAKTIF
            </div>
            <h2 className="pxc-section-title">
              Hitung Estimasi Anggaran Acara Anda
            </h2>
            <p className="pxc-section-desc">
              Pilih jenis kegiatan, kapasitas peserta, durasi, destinasi, dan fasilitas pendukung untuk mendapatkan simulasi biaya secara instan dan mengirimkannya ke WhatsApp Pixi Creative.
            </p>
          </div>

          <PixiEventCalculatorWidget />
        </div>
      </section>

      {/* 9. PELANGGAN UNGGULAN (CLIENT BADGES GRID) */}
      <section className="pxc-section">
        <div className="pxc-wrap">
          <div className="pxc-section-header">
            <div className="pxc-pill-tag">
              PELANGGAN UNGGULAN
            </div>
            <h2 className="pxc-section-title">
              Beberapa Customer Yang Menggunakan Layanan Kami
            </h2>
            <p className="pxc-section-desc">
              Telah dipercaya oleh berbagai kementerian negara, dinas kesehatan, rumah sakit, puskesmas, dan korporat.
            </p>
          </div>

          <div className="pxc-logos-grid">
            {clientLogos.map((client, idx) => (
              <div key={idx} className="pxc-client-card">
                <div className="pxc-client-top">
                  <div className="pxc-client-icon-box">
                    <Building2 className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="pxc-client-type-tag">{client.type}</span>
                </div>
                <h4 className="pxc-client-title">{client.name}</h4>
                <p className="pxc-client-sub">{client.sub}</p>
                <div className="pxc-client-badge">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{client.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CUSTOMERS REVIEWS */}
      <section className="pxc-section bg-subtle">
        <div className="pxc-wrap">
          <div className="pxc-section-header">
            <div className="pxc-pill-tag">
              CUSTOMERS REVIEWS
            </div>
            <h2 className="pxc-section-title">
              Temukan Pendapat Klien Tentang Layanan Kami
            </h2>
            <p className="pxc-section-desc">
              Ulasan otentik dari para penanggung jawab acara dan pimpinan instansi.
            </p>
          </div>

          <div className="pxc-reviews-grid">
            {reviews.map((rev, idx) => (
              <div key={idx} className="pxc-review-card">
                <div className="pxc-review-top">
                  <div className="pxc-review-avatar">
                    <span>{rev.initials}</span>
                  </div>
                  <div className="pxc-review-author-info">
                    <strong>{rev.name}</strong>
                    <small>{rev.event}</small>
                  </div>
                </div>

                <div className="pxc-stars">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="pxc-review-quote">&quot;{rev.feedback}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PORTOFOLIO SECTION */}
      <section id="portofolio" className="pxc-section">
        <div className="pxc-wrap">
          <div className="pxc-section-header">
            <div className="pxc-pill-tag">
              PORTOFOLIO ACARA
            </div>
            <h2 className="pxc-section-title">
              Dokumentasi & Rekam Jejak Acara
            </h2>
            <p className="pxc-section-desc">
              Rangkaian momen penting dari berbagai kegiatan kementerian, lokakarya nasional, penggalangan komitmen, dan gathering yang sukses kami selenggarakan.
            </p>
          </div>

          <div className="pxc-portfolio-list">
            {portfolioProjects.map((proj, pIdx) => (
              <div key={pIdx} className="pxc-portfolio-card">
                <div className="pxc-portfolio-header">
                  <div className="pxc-portfolio-meta">
                    <span className="pxc-portfolio-tag">{proj.category}</span>
                    <h3 className="pxc-portfolio-title">{proj.title}</h3>
                    <p className="pxc-portfolio-subtitle">{proj.subtitle}</p>
                    <p className="pxc-portfolio-desc">{proj.desc}</p>
                  </div>
                  <div className="pxc-portfolio-date-badge">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{proj.date}</span>
                  </div>
                </div>

                <div className="pxc-portfolio-images">
                  {proj.images.map((imgSrc, imgIdx) => (
                    <div key={imgIdx} className="pxc-portfolio-img-box">
                      <img src={imgSrc} alt={`${proj.title} - Dokumentasi ${imgIdx + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pxc-portfolio-cta-banner">
            <div className="pxc-cta-banner-content">
              <h3>KONSULTASI GRATIS BERSAMA PIXI CREATIVE</h3>
              <p>“Butuh EO profesional? Hubungi kami sekarang untuk diskusi lebih lanjut.”</p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pxc-btn-consult"
            >
              <WhatsAppIcon className="w-4 h-4" fill="#ffffff" />
              <span>Hubungi Kami via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. YOUR EVENT, OUR MASTERPIECE */}
      <section id="kontak" className="pxc-masterpiece-section">
        <div className="pxc-wrap pxc-masterpiece-grid">
          <div className="pxc-masterpiece-copy">
            <div className="pxc-hero-badge" style={{ alignSelf: 'flex-start' }}>
              YOUR EVENT, OUR MASTERPIECE
            </div>
            <h2>Pixi Creative</h2>
            <p>
              <strong>Pixi Creative</strong> adalah Event Organizer (EO) dan Agen Perjalanan Wisata yang sangat profesional dan telah membangun reputasi yang solid dalam industri ini.
            </p>
            <p>
              Kami bangga telah dipercaya oleh ratusan kantor, instansi, dan pemerintahan untuk mengatur dan menyelenggarakan berbagai acara dan perjalanan wisata.
            </p>
            <div className="pxc-masterpiece-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pxc-btn-consult"
                style={{ background: '#22c55e', boxShadow: '0 8px 20px rgba(34, 197, 94, 0.35)' }}
              >
                <WhatsAppIcon className="w-4 h-4" fill="#ffffff" />
                <span>Chat WhatsApp ({phoneDisplay})</span>
              </a>
              <a
                href={emailUrl}
                className="pxc-btn-secondary"
                style={{ background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
              >
                <Mail className="w-4 h-4" />
                <span>Kirim Email Resmi</span>
              </a>
            </div>
          </div>

          <div className="pxc-contact-card">
            <h4>CONTACT INFORMATION</h4>
            <div className="pxc-contact-row">
              <span className="pxc-contact-label">Call / Message:</span>
              <span className="pxc-contact-val">{phoneDisplay}</span>
            </div>
            <div className="pxc-contact-row">
              <span className="pxc-contact-label">Whatsapp:</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pxc-contact-val highlight"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <WhatsAppIcon className="w-4 h-4" fill="#22c55e" />
                <span>{phoneDisplay}</span>
              </a>
            </div>
            <div className="pxc-contact-row">
              <span className="pxc-contact-label">Email:</span>
              <a href={emailUrl} className="pxc-contact-val" style={{ color: '#ea580c' }}>
                pixicreative01@gmail.com
              </a>
            </div>
            <div className="pxc-contact-social">
              <span className="pxc-contact-label">Follow Our Social Media:</span>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pxc-social-btn"
              >
                <InstagramIcon className="w-4 h-4 text-orange-500" />
                <span>@pixicreative.id</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="pxc-footer">
        <div className="pxc-wrap">
          <div className="pxc-footer-grid">
            <div className="pxc-footer-brand">
              <div className="pxc-footer-brand-header">
                <div className="pxc-logo-badge" style={{ width: '36px', height: '36px', fontSize: '18px' }}>
                  <span>P</span>
                </div>
                <span className="pxc-footer-logo-title">
                  PIXI <span>CREATIVE</span>
                </span>
              </div>
              <p>
                Event Organizer (EO) dan Agen Perjalanan Wisata yang sangat profesional. Dipercaya ratusan kantor, instansi, dan pemerintahan di seluruh Indonesia.
              </p>
            </div>

            <div className="pxc-footer-col">
              <h5>Overview</h5>
              <ul>
                <li><a href="#beranda">HOME</a></li>
                <li><a href="#tentang-kami">Tentang Kami</a></li>
                <li><a href="#portofolio">Portofolio</a></li>
                <li><a href="#simulasi">Costumer Review</a></li>
              </ul>
            </div>

            <div className="pxc-footer-col">
              <h5>Our Services</h5>
              <ul>
                <li><a href="#layanan">MICE</a></li>
                <li><a href="#layanan">Event Organizer</a></li>
                <li><a href="#layanan">Private & Company</a></li>
                <li><a href="#layanan">Event Planner</a></li>
              </ul>
            </div>
          </div>

          <div className="pxc-footer-bottom">
            <span>© {new Date().getFullYear()} PIXI CREATIVE. All Rights Reserved.</span>
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>
              Naltech Studio Showcase
            </Link>
          </div>
        </div>
      </footer>

      {/* 14. FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pxc-float-wa"
        aria-label="Chat WhatsApp Pixi Creative"
      >
        <span className="pxc-float-dot" />
        <WhatsAppIcon className="w-4 h-4" fill="#ffffff" />
        <span>WhatsApp (+62 8584 234 5332)</span>
      </a>
    </div>
  );
}
