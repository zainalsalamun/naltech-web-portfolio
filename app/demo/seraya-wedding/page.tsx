import type { Metadata } from 'next';
import Link from 'next/link';
import './seraya-wedding.css';
import WeddingBudgetSimulatorWidget from './WeddingBudgetSimulatorWidget';
import {
  Heart,
  Sparkles,
  Calendar,
  Clock,
  Calculator,
  Users,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Crown,
  Award,
  BookOpen,
  Music,
  Camera,
  UtensilsCrossed,
  Gem,
  Palette,
  Check,
  Building2,
  Workflow,
  Sparkle,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'Seraya Wedding Organizer — Merancang Hari Bahagia Menjadi Kenangan Selamanya',
  description: 'Wedding planner & organizer profesional di Jabodetabek & destinasi. Kami mendampingi konsep, kurasi vendor, simulasi anggaran, hingga koordinasi hari pernikahan dengan tenang.',
  alternates: {
    canonical: '/demo/seraya-wedding',
  },
  openGraph: {
    title: 'Seraya Wedding Organizer — Merancang Hari Bahagia Menjadi Kenangan Selamanya',
    description: 'Pernikahan impian dipersiapkan dengan tenang bersama Seraya Wedding Planner & Organizer.',
    images: [{ url: `${siteUrl}/wedding/hero-wedding.jpg`, width: 1200, height: 630, alt: 'Seraya Wedding Organizer' }],
  },
  twitter: {
    title: 'Seraya Wedding Organizer — Merancang Hari Bahagia Menjadi Kenangan Selamanya',
    description: 'Pernikahan impian dipersiapkan dengan tenang bersama Seraya Wedding Planner & Organizer.',
    images: [`${siteUrl}/wedding/hero-wedding.jpg`],
  },
};

const weddingStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Seraya Wedding Organizer (Concept by Naltech)',
    description: 'Jasa wedding planner dan wedding organizer terpadu dengan simulasi anggaran interaktif karya Naltech Studio.',
    url: `${siteUrl}/demo/seraya-wedding`,
    image: `${siteUrl}/wedding/hero-wedding.jpg`,
    priceRange: 'Rp25.000.000 - Rp150.000.000+',
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
        name: 'Seraya Wedding Organizer',
        item: `${siteUrl}/demo/seraya-wedding`,
      },
    ],
  },
];

const serviceCategories = [
  {
    title: 'Wedding Planner (Full Planning)',
    icon: BookOpen,
    desc: 'Pendampingan intensif dari 9–12 bulan sebelum acara. Kami menyusun konsep, memetakan anggaran, mengurasi venue, menyeleksi seluruh vendor, hingga menggelar rapat koordinasi keluarga besar.',
    scope: ['Penyusunan konsep & moodboard tema', 'Alokasi anggaran & payment tracking', 'Kurasi & negosiasi seluruh vendor', 'Technical meeting & rundown detail'],
  },
  {
    title: 'Wedding Organizer (D-Day Coordination)',
    icon: Workflow,
    desc: 'Fokus pada koordinasi teknis menjelang dan pada hari H pernikahan. Memastikan seluruh vendor, pengisi acara, dan keluarga menjalankan perannya sesuai rundown acara.',
    scope: ['Rundown minute-by-minute acara', 'Koordinasi teknis 8–12 vendor di lokasi', 'Pengawalan prosesi akad & resepsi', 'Tim standby penanganan keadaan darurat'],
  },
  {
    title: 'Intimate Wedding',
    icon: Heart,
    desc: 'Konsep pernikahan hangat dan personal untuk 50–200 tamu undangan di restoran, taman (garden wedding), villa, atau kediaman pribadi dengan suasana intim.',
    scope: ['Dekorasi floral bernuansa hangat', 'Pengaturan meja dining & family seating', 'Pengaturan sound akustik lembut', 'Dokumentasi candid interaksi keluarga'],
  },
  {
    title: 'Traditional Wedding (Adat Nusantara)',
    icon: Crown,
    desc: 'Spesialisasi tata upacara adat nusantara (Jawa, Sunda, Minang, Batak, Melayu, dll) dengan pemahaman mendalam tentang pakem prosesi sakral dan kelengkapan ubarampe.',
    scope: ['Pemandu adat tersertifikasi', 'Koordinasi busana & sanggul/paes', 'Dekorasi gebyok & ornamen adat', 'Musik tradisional & prosesi sakral'],
  },
  {
    title: 'Destination Wedding',
    icon: MapPin,
    desc: 'Perencanaan pernikahan luar kota dan destinasi eksotis (Bali, Yogyakarta, Bandung, Labuan Bajo) mencakup akomodasi, transportasi, perizinan, dan vendor lokal.',
    scope: ['Survey & booking venue destinasi', 'Manajemen akomodasi tamu VIP', 'Koordinasi perizinan & vendor lokal', 'Itinerary kegiatan pra & pasca acara'],
  },
  {
    title: 'Custom Bespoke Wedding',
    icon: Sparkles,
    desc: 'Layanan modular yang fleksibel. Pasangan bebas memilih pendampingan pada bagian tertentu sesuai kebutuhan tanpa harus mengambil paket lengkap.',
    scope: ['Pilihan komponen layanan fleksibel', 'Menyesuaikan anggaran keluarga', 'Dukungan untuk vendor pilihan sendiri', 'Konsultasi konsep tematik khusus'],
  },
];

const packagesList = [
  {
    name: 'Paket Akad Intimate',
    capacity: '50 – 100 Tamu',
    suitable: 'Akad nikah khidmat & makan bersama keluarga inti',
    price: 'Mulai Rp25 Juta',
    facilities: [
      'Tim Wedding Organizer Hari H (6 Kru)',
      'Dekorasi Akad & Meja Ijab Qabul',
      'Kursi Keluarga & Hand Bouquet',
      'Dokumentasi Foto Akad (1 Album Kolase)',
      'Master of Ceremony (MC) Akad',
      'Sound System & Wireless Mic',
      'Makeup Pengantin Akad (MUA)',
    ],
    highlight: false,
  },
  {
    name: 'Paket Harmoni (Akad & Resepsi)',
    capacity: '200 – 400 Tamu',
    suitable: 'Pilihan terfavorit pasangan untuk akad dan resepsi ballroom/semi-outdoor',
    price: 'Mulai Rp75 Juta',
    facilities: [
      'Tim Wedding Planner & Organizer (10 Kru)',
      'Dekorasi Pelaminan & Panggung Musik',
      'Catering Buffet + 3 Macam Food Stall',
      'Busana & Rias Pengantin + 2 Ibu',
      'Dokumentasi Foto & Cinematic Video Teaser',
      'Live Music Entertainment Akustik + MC',
      'Buku Tamu Digital & Undangan Website',
      'Sound System & Ambience Lighting',
    ],
    highlight: true,
  },
  {
    name: 'Paket Grand Celebration',
    capacity: '500 – 1.000 Tamu',
    suitable: 'Pernikahan megah berskala besar di hotel bintang 5 atau grand ballroom',
    price: 'Mulai Rp150 Juta',
    facilities: [
      'Full Wedding Planner & Organizer (15 Kru)',
      'Venue Grand Ballroom Ber-AC',
      'Dekorasi Pelaminan Megah & Chandelier',
      'Catering Premium Buffet + 6 Food Stall',
      'Dokumentasi Cinematic 4K + Drone Coverage',
      'Full Band Chamber Music & MC Kondang',
      'Lighting Effect, LED Wall & Wedding Cake',
      'Koordinator Tamu VIP & Penerima Tamu',
    ],
    highlight: false,
  },
];

const caseStudiesList = [
  {
    couple: 'Radit & Amanda',
    concept: 'Modern Traditional Wedding',
    location: 'Grand Ballroom Hotel Indonesia, Jakarta',
    guests: '500 Tamu Undangan',
    image: '/wedding/case-ballroom.jpg',
    challenge: 'Menggabungkan prosesi adat Sunda yang sakral dengan resepsi modern internasional dan pergantian 3 busana dalam rentang waktu terbatas.',
    solution: 'Tim Seraya membagi kru menjadi 3 zona: tim panggung/prosesi adat, tim backstage MUA/busana, dan tim liaison officer untuk 10 vendor makanan & dekorasi.',
    result: 'Seluruh prosesi berjalan tepat waktu, tidak terjadi antrean makanan, dan kedua keluarga merasa tenang menikmati hari bahagia.',
    testimony: '“Dari awal persiapan kami tidak pusing sama sekali. Semua vendor terkoordinasi rapi dan hari H berjalan mulus tanpa ada drama.”',
  },
  {
    couple: 'Dimas & Clarissa',
    concept: 'Intimate Botanical Glasshouse',
    location: 'Pine Hill Glasshouse, Bandung',
    guests: '120 Tamu Undangan',
    image: '/wedding/case-garden.jpg',
    challenge: 'Venue semi-outdoor dengan potensi cuaca hujan di sore hari serta penataan lampu temaram fairy lights yang membutuhkan aliran daya khusus.',
    solution: 'Menyiapkan rencana cadangan (Plan B) transisi area indoor dengan transparan tenda tanpa merusak estetika alam dan berkoordinasi dengan teknisi genset cadangan.',
    result: 'Suasana resepsi terasa sangat hangat, romantis, dan intim di bawah taburan gemerlap lampu malam.',
    testimony: '“Tim Seraya benar-benar detail dan sigap. Pengalaman menikah di alam terbuka terasa sangat magis dan tanpa rasa khawatir.”',
  },
  {
    couple: 'Fajar & Nabila',
    concept: 'Javanese Royal Heritage',
    location: 'Pendopo Kemang Cultural Hall, Jakarta Selatan',
    guests: '400 Tamu Undangan',
    image: '/wedding/case-traditional.jpg',
    challenge: 'Keluarga besar menginginkan tata upacara adat Jawa Panggih dan Siraman lengkap dengan pakem tradisional kraton.',
    solution: 'Menghadirkan pemandu adat senior terpercaya dan menyusun buku panduan rundown keluarga untuk setiap prosesi ubarampe.',
    result: 'Prosesi adat berlangsung khidmat, sakral, dan mendapat apresiasi tinggi dari para sesepuh keluarga.',
    testimony: '“Sangat terbantu dengan arahan tim Seraya. Semua prosesi adat dijelaskan dengan sabar kepada keluarga besar kami.”',
  },
];

const preparationTimeline = [
  {
    time: '9 – 12 Bulan Sebelumnya',
    tasks: ['Menentukan konsep impian & target anggaran', 'Menentukan perkiraan tanggal & booking venue', 'Memilih tim Wedding Organizer Seraya'],
  },
  {
    time: '6 – 9 Bulan Sebelumnya',
    tasks: ['Kurasi vendor utama (Catering, Dekorasi, Foto/Video)', 'Memilih desainer busana & MUA pengantin', 'Booking hiburan musik & MC'],
  },
  {
    time: '3 – 6 Bulan Sebelumnya',
    tasks: ['Finalisasi menu tasting catering & konsep dekorasi', 'Fitting busana pengantin & seragam keluarga', 'Mulai mendata daftar tamu undangan & souvenir'],
  },
  {
    time: '1 – 3 Bulan Sebelumnya',
    tasks: ['Penyebaran undangan cetak & digital', 'Penyusunan draft rundown acara detail', 'Rapat koordinasi awal dengan keluarga inti'],
  },
  {
    time: '2 – 4 Minggu Sebelumnya',
    tasks: ['Technical meeting menyeluruh dengan seluruh vendor', 'Final checking kelengkapan ubarampe/logistik', 'Gladi resik prosesi akad/pemberkatan'],
  },
  {
    time: 'Hari Bahagia (Hari H)',
    tasks: ['Pengawalan penuh tim Seraya dari subuh hingga selesai', 'Manajemen vendor, tamu VIP, dan kelancaran acara', 'Keluarga & pengantin tinggal tersenyum bahagia'],
  },
];

export default function SerayaWeddingPage() {
  return (
    <main className="swo-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingStructuredData) }}
      />

      {/* Top Promo Ribbon */}
      <div className="swo-promo-ribbon">
        <div className="swo-wrap swo-ribbon-content">
          <span className="swo-ribbon-badge">
            <Sparkles size={13} />
            <span>KONSULTASI PERNIKAHAN 2026</span>
          </span>
          <p>
            Wujudkan pernikahan impianmu. Dapatkan <strong>Free Wedding Moodboard &amp; Timeline Checklist</strong> saat sesi konsultasi awal.
          </p>
          <a href="#simulasi" className="swo-ribbon-link">
            <span>Simulasi Anggaran</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="swo-demo-bar">
        <div className="swo-wrap swo-demo-inner">
          <Link href="/" className="swo-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Header */}
      <header className="swo-header">
        <div className="swo-wrap swo-header-inner">
          <a className="swo-logo" href="#top">
            <span className="swo-logo-icon">
              <Heart size={20} />
            </span>
            <span className="swo-logo-text">
              SERAYA<strong>WEDDING</strong> <small>PLANNER &amp; ORGANIZER</small>
            </span>
          </a>

          <nav className="swo-nav" aria-label="Navigasi Seraya Wedding">
            <a href="#tentang">Tentang Kami</a>
            <a href="#layanan">Layanan</a>
            <a href="#paket">Paket Pernikahan</a>
            <a href="#simulasi">Simulasi Anggaran</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#timeline">Timeline</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="swo-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20Seraya%20Wedding%20Organizer%2C%20saya%20ingin%20berkonsultasi%20mengenai%20rencana%20pernikahan%20kami."
              target="_blank"
              rel="noreferrer"
              className="swo-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Konsultasi Gratis via WA</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="swo-hero">
        <div className="swo-wrap">
          <div className="swo-hero-grid">
            <div className="swo-hero-copy">
              <div className="swo-hero-tag">
                <Crown size={14} className="swo-icon-gold" />
                <span>MERANCANG HARI BAHAGIA, MENJADI KENANGAN SELAMANYA</span>
              </div>

              <h1>
                Pernikahan Impian, Dipersiapkan dengan Tenang
              </h1>

              <p className="swo-hero-sub">
                Dari konsep, anggaran, pemilihan vendor, hingga koordinasi pada hari acara, tim kami siap membantu mewujudkan pernikahan yang sesuai dengan cerita dan kebutuhan Anda.
              </p>

              <div className="swo-hero-actions">
                <a
                  href="https://wa.me/6281573550017?text=Halo%20Seraya%20Wedding%2C%20saya%20ingin%20jadwalkan%20sesi%20konsultasi%20pernikahan%20gratis."
                  target="_blank"
                  rel="noreferrer"
                  className="swo-btn-hero-primary"
                >
                  <Heart size={16} />
                  <span>Konsultasi Pernikahan Gratis</span>
                  <ArrowUpRight size={16} />
                </a>

                <a href="#paket" className="swo-btn-hero-secondary">
                  <span>Lihat Katalog Paket</span>
                </a>
              </div>

              {/* Operating Trust Badges */}
              <div className="swo-hero-trust-row">
                <div className="swo-trust-item">
                  <strong>150+</strong>
                  <span>Pernikahan Terselenggara</span>
                </div>
                <div className="swo-trust-divider" />
                <div className="swo-trust-item">
                  <strong>Sejak 2018</strong>
                  <span>Berpengalaman &amp; Terpercaya</span>
                </div>
                <div className="swo-trust-divider" />
                <div className="swo-trust-item">
                  <strong>30+</strong>
                  <span>Vendor Partner Terkurasi</span>
                </div>
              </div>
            </div>

            {/* Visual Frame */}
            <div className="swo-hero-visual-frame">
              <img src="/wedding/hero-wedding.jpg" alt="Pernikahan Elegan Seraya Wedding Organizer" />
              <div className="swo-hero-floating-glass">
                <div className="swo-floating-top">
                  <Sparkle size={18} className="swo-icon-gold" />
                  <div>
                    <strong>Full Day Coordination Team</strong>
                    <small>Menjaga setiap detail momen berhargamu</small>
                  </div>
                </div>
                <div className="swo-hero-pills-row">
                  <span className="swo-pill-gold">Konsep &amp; Budgeting</span>
                  <span className="swo-pill-gold">Kurasi Vendor</span>
                  <span className="swo-pill-gold">Rundown Hari H</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Tentang Seraya WO */}
      <section id="tentang" className="swo-about-section swo-wrap">
        <header className="swo-section-head center">
          <span className="swo-badge-tag">KOMITMEN PENDAMPINGAN</span>
          <h2>Kami Hadir untuk Menjaga<br /><em>Setiap Detail Hari Bahagiamu.</em></h2>
          <p>
            Persiapan pernikahan tidak harus melelahkan. Seraya Wedding Organizer membantu pasangan merencanakan dan menjalankan acara secara terstruktur, tenang, dan berkesan selamanya.
          </p>
        </header>

        <div className="swo-values-grid">
          <div className="swo-value-card">
            <div className="swo-value-icon">
              <Heart size={22} className="swo-icon-rose" />
            </div>
            <h4>Mendengarkan Keinginan Pasangan</h4>
            <p>Setiap pernikahan adalah cerminan cerita cinta yang unik. Kami menyusun konsep berdasarkan preferensi Anda dan keluarga.</p>
          </div>

          <div className="swo-value-card">
            <div className="swo-value-icon">
              <Calculator size={22} className="swo-icon-gold" />
            </div>
            <h4>Anggaran Terkendali &amp; Realistis</h4>
            <p>Memberikan rekomendasi vendor yang sesuai dengan batas kemampuan finansial tanpa ada biaya tersembunyi.</p>
          </div>

          <div className="swo-value-card">
            <div className="swo-value-icon">
              <ShieldCheck size={22} className="swo-icon-green" />
            </div>
            <h4>Seleksi Vendor Terpercaya</h4>
            <p>Hanya bekerja sama dengan vendor catering, dekorasi, dokumentasi, dan MUA yang teruji kualitas dan kredibilitasnya.</p>
          </div>

          <div className="swo-value-card">
            <div className="swo-value-icon">
              <Clock size={22} className="swo-icon-gold" />
            </div>
            <h4>Koordinasi Hari H Tanpa Panik</h4>
            <p>Tim berpengalaman kami mengawal seluruh jadwal rundown, mengatur prosesi adat, dan menangani situasi darurat dengan tenang.</p>
          </div>
        </div>
      </section>

      {/* Section 02: Kategori Layanan */}
      <section id="layanan" className="swo-services-section">
        <div className="swo-wrap">
          <header className="swo-section-head center">
            <span className="swo-badge-tag">PILIHAN LAYANAN KAMI</span>
            <h2>Solusi pendampingan pernikahan lengkap<br /><em>sesuai dengan kebutuhan Anda.</em></h2>
            <p>
              Mulai dari perencanaan awal hingga eksekusi panggung pada hari H.
            </p>
          </header>

          <div className="swo-services-grid">
            {serviceCategories.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={idx} className="swo-service-card">
                  <div className="swo-svc-icon-box">
                    <Icon size={24} className="swo-icon-gold" />
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <ul className="swo-svc-scope-list">
                    {svc.scope.map((item, sIdx) => (
                      <li key={sIdx}>
                        <CheckCircle2 size={14} className="swo-icon-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/6281573550017?text=Halo%20Seraya%20Wedding%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(svc.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="swo-btn-svc-inquire"
                  >
                    <span>Konsultasikan Layanan Ini</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 03: Katalog Paket Pernikahan */}
      <section id="paket" className="swo-packages-section swo-wrap">
        <header className="swo-section-head center">
          <span className="swo-badge-tag">KATALOG PAKET PERNIKAHAN</span>
          <h2>Paket terpadu yang dirancang<br /><em>transparan dan bebas biaya tersembunyi.</em></h2>
          <p>
            Harga dapat disesuaikan berdasarkan venue, jumlah undangan, dan preferensi vendor pilihan Anda.
          </p>
        </header>

        <div className="swo-packages-grid">
          {packagesList.map((pkg, idx) => (
            <div key={idx} className={`swo-pkg-card ${pkg.highlight ? 'highlight' : ''}`}>
              {pkg.highlight && <span className="swo-pkg-popular-badge">Paling Diminati</span>}
              <div className="swo-pkg-head">
                <h3>{pkg.name}</h3>
                <span className="swo-pkg-capacity"><Users size={13} /> {pkg.capacity}</span>
                <p className="swo-pkg-suitable">{pkg.suitable}</p>
                <div className="swo-pkg-price-badge">
                  <strong>{pkg.price}</strong>
                </div>
              </div>

              <div className="swo-pkg-body">
                <label>Fasilitas yang Didapatkan:</label>
                <ul className="swo-pkg-facilities-list">
                  {pkg.facilities.map((fac, fIdx) => (
                    <li key={fIdx}>
                      <Check size={13} className="swo-icon-gold" />
                      <span>{fac}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="swo-pkg-foot">
                <a
                  href={`https://wa.me/6281573550017?text=Halo%20Seraya%20Wedding%2C%20saya%20tertarik%20dengan%20Paket%20${encodeURIComponent(pkg.name)}%20(${encodeURIComponent(pkg.capacity)}).%20Bisa%20kirim%20katalog%20dan%20rincian%20lengkapnya%3F`}
                  target="_blank"
                  rel="noreferrer"
                  className="swo-btn-pkg-action"
                >
                  <span>Minta Katalog &amp; Rincian</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="swo-custom-pkg-banner">
          <div className="swo-custom-pkg-inner">
            <Gem size={28} className="swo-icon-gold" />
            <div>
              <h4>Butuh Penyesuaian Paket Custom?</h4>
              <p>Kami dapat merancang paket pernikahan eksklusif sesuai dengan anggaran khusus, lokasi pilihan keluarga, atau vendor yang sudah Anda miliki.</p>
            </div>
            <a
              href="https://wa.me/6281573550017?text=Halo%20Seraya%20Wedding%2C%20saya%20ingin%20berdiskusi%20tentang%20Paket%20Pernikahan%20Custom."
              target="_blank"
              rel="noreferrer"
              className="swo-btn-custom-pkg"
            >
              <span>Konsultasi Paket Custom</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Section 04: Fitur Interaktif Kalkulator Anggaran */}
      <section id="simulasi" className="swo-simulator-section">
        <div className="swo-wrap">
          <WeddingBudgetSimulatorWidget />
        </div>
      </section>

      {/* Section 05: Portofolio & Studi Kasus */}
      <section id="portofolio" className="swo-portfolio-section swo-wrap">
        <header className="swo-section-head center">
          <span className="swo-badge-tag">KISAH PERNIKAHAN NYATA</span>
          <h2>Koleksi momen bahagia yang telah<br /><em>kami rawat dan dampingi.</em></h2>
          <p>
            Setiap pernikahan memiliki cerita dan tantangan tersendiri yang kami wujudkan dengan penuh dedikasi.
          </p>
        </header>

        <div className="swo-case-studies-list">
          {caseStudiesList.map((item, idx) => (
            <div key={idx} className="swo-case-card">
              <div className="swo-case-img-box">
                <img src={item.image} alt={item.couple} />
                <span className="swo-case-badge">{item.concept}</span>
              </div>
              <div className="swo-case-body">
                <div className="swo-case-header">
                  <h3>{item.couple}</h3>
                  <span className="swo-case-meta"><MapPin size={13} /> {item.location} · {item.guests}</span>
                </div>

                <div className="swo-case-details">
                  <div className="swo-detail-block">
                    <strong>Tantangan Acara:</strong>
                    <p>{item.challenge}</p>
                  </div>
                  <div className="swo-detail-block">
                    <strong>Solusi Tim Seraya:</strong>
                    <p>{item.solution}</p>
                  </div>
                </div>

                <div className="swo-case-testimony-box">
                  <p>{item.testimony}</p>
                  <small>— {item.couple}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 06: Timeline Persiapan 12 Bulan */}
      <section id="timeline" className="swo-timeline-section">
        <div className="swo-wrap">
          <header className="swo-section-head center">
            <span className="swo-badge-tag">PANDUAN WAKTU PERSIAPAN</span>
            <h2>Tahapan persiapan pernikahan yang teratur<br /><em>dari 12 bulan hingga Hari H.</em></h2>
            <p>
              Dengan panduan timeline terstruktur, Anda dan pasangan tidak perlu cemas melewati setiap tenggat waktu penting.
            </p>
          </header>

          <div className="swo-timeline-grid">
            {preparationTimeline.map((step, idx) => (
              <div key={idx} className="swo-timeline-card">
                <div className="swo-timeline-step-badge">
                  <Clock size={14} className="swo-icon-gold" />
                  <span>{step.time}</span>
                </div>
                <ul className="swo-timeline-tasks">
                  {step.tasks.map((task, tIdx) => (
                    <li key={tIdx}>
                      <CheckCircle2 size={14} className="swo-icon-rose" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 07: Testimoni & FAQ */}
      <section id="faq" className="swo-faq-section swo-wrap">
        <header className="swo-section-head">
          <div>
            <span className="swo-badge-tag">PERTANYAAN CALON PENGANTIN</span>
            <h2>Hal yang sering ditanyakan seputar<br /><em>perencanaan pernikahan di Seraya.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20Seraya%20Wedding%2C%20saya%20ada%20pertanyaan%20seputar%20layanan%20WO."
            target="_blank"
            rel="noreferrer"
            className="swo-link-more"
          >
            <span>Tanya Tim via WhatsApp ↗</span>
          </a>
        </header>

        <div className="swo-faq-list">
          <details open>
            <summary>
              <span>01</span> Kapan waktu terbaik untuk mulai menghubungi Seraya Wedding Organizer?<b>+</b>
            </summary>
            <p>
              Waktu paling ideal adalah <strong>6 hingga 12 bulan</strong> sebelum tanggal acara pernikahan, terutama untuk mengamankan ketersediaan venue favorit dan tanggal cantik. Namun, kami juga siap mendampingi persiapan kilat (express planning 3-4 bulan) sesuai ketersediaan tim.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Apakah kami boleh membawa vendor pilihan keluarga sendiri?<b>+</b>
            </summary>
            <p>
              Tentu saja boleh! Kami sangat terbuka bekerja sama dengan vendor pilihan Anda (misalnya katering langganan keluarga atau desainer langganan). Tim kami akan mengoordinasikan jadwal dan alur kerja mereka agar selaras dengan rundown acara.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah biaya paket pernikahan bisa disesuaikan dengan anggaran kami?<b>+</b>
            </summary>
            <p>
              Bisa 100%. Setelah sesi konsultasi awal, kami akan membedah pos-pos pengeluaran dan memberikan alternatif vendor atau konsep agar tetap sesuai dengan batas anggaran tanpa mengorbankan keindahan acara.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bagaimana tahapan pembayaran dan cara mengunci (lock) tanggal acara?<b>+</b>
            </summary>
            <p>
              Tanggal acara Anda dikunci secara resmi setelah penandatanganan surat perjanjian kerja sama dan pembayaran booking fee (uang muka). Pembayaran berikutnya dilakukan secara bertahap sesuai termin persiapan hingga pelunasan menjelang Hari H.
            </p>
          </details>

          <details>
            <summary>
              <span>05</span> Bisakah Naltech Studio membuatkan website wedding organizer seperti Seraya?<b>+</b>
            </summary>
            <p>
              Tentu saja! Ini adalah portfolio concept project dari Naltech Studio. Kami membantu vendor pernikahan, wedding planner, dan venue menghadirkan website elegan dengan simulator anggaran interaktif dan otomasi konsultasi WhatsApp.
            </p>
          </details>
        </div>
      </section>

      {/* Section 08: Final CTA */}
      <section className="swo-final-cta-section swo-wrap">
        <div className="swo-final-cta-card">
          <div className="swo-cta-glow" />
          <div className="swo-final-cta-inner">
            <span className="swo-cta-tag">MULAI LANGKAH BAHAGIAMU</span>
            <h2>
              Wujudkan pernikahan impian<br />
              tanpa rasa cemas bersama <em>Seraya Wedding</em>
            </h2>
            <p>
              Ceritakan konsep dan impian pernikahan Anda kepada tim kami. Kami siap mendengarkan dan menyusun rencana terbaik yang penuh ketenangan.
            </p>
            <div className="swo-cta-actions">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Seraya%20Wedding%20Organizer%2C%20kami%20ingin%20jadwalkan%20sesi%20konsultasi%20pernikahan.%20Bisa%20bantu%20informasikan%20jadwal%20kosong%3F"
                target="_blank"
                rel="noreferrer"
                className="swo-btn-cta-wa"
              >
                <MessageCircle size={18} />
                <span>Jadwalkan Konsultasi Gratis via WhatsApp</span>
                <ArrowUpRight size={18} />
              </a>
              <Link href="/" className="swo-btn-cta-portfolio">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="swo-footer swo-wrap">
        <div className="swo-footer-grid">
          <div className="swo-footer-col brand">
            <a className="swo-logo" href="#top">
              <span className="swo-logo-icon">
                <Heart size={20} />
              </span>
              <span className="swo-logo-text">
                SERAYA<strong>WEDDING</strong> <small>PLANNER &amp; ORGANIZER</small>
              </span>
            </a>
            <p>
              Merancang hari bahagia menjadi kenangan selamanya. Pendampingan menyeluruh pernikahan intimate, adat, dan ballroom modern. Concept project by Naltech Studio.
            </p>
          </div>

          <div className="swo-footer-col">
            <strong>Kategori Layanan</strong>
            <a href="#layanan">Full Wedding Planner</a>
            <a href="#layanan">Wedding Organizer Hari H</a>
            <a href="#layanan">Intimate Wedding</a>
            <a href="#layanan">Traditional Wedding Adat</a>
          </div>

          <div className="swo-footer-col">
            <strong>Paket Populer</strong>
            <a href="#paket">Paket Akad Intimate (Rp25 Jt)</a>
            <a href="#paket">Paket Harmoni (Rp75 Jt)</a>
            <a href="#paket">Paket Grand Celebration (Rp150 Jt)</a>
            <a href="#simulasi">Kalkulator Simulasi Anggaran</a>
          </div>

          <div className="swo-footer-col">
            <strong>Kontak &amp; Konsultasi</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="swo-address">Jakarta &amp; Bandung, Indonesia</p>
          </div>
        </div>

        <div className="swo-footer-bottom">
          <small>
            © 2026 Seraya Wedding Organizer · Wedding Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Merancang Hari Bahagia Menjadi Kenangan Selamanya · Dedicated Team</span>
        </div>
      </footer>
    </main>
  );
}
