import type { Metadata } from 'next';
import Link from 'next/link';
import './nalcut.css';
import BarbershopBookingWidget from './BarbershopBookingWidget';
import HairstyleLookbook from './HairstyleLookbook';
import {
  Scissors,
  Sparkles,
  Clock,
  Calendar,
  Star,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  UserCheck,
  ShieldCheck,
  Award,
  Crown,
  MapPin,
  Phone,
  Coffee,
  Check,
  Flame,
  BadgePercent,
  Tv,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'Nalcut Barbershop — Potong Rambut Pria Tanpa Antre Lama by Naltech',
  description: 'Booking jadwal barbershop online tanpa antre. Pilih layanan, barber langganan berpengalaman, dan waktu kedatanganmu di Nalcut Barbershop untuk grooming maskulin terbaik.',
  alternates: {
    canonical: '/demo/nalcut',
  },
  openGraph: {
    title: 'Nalcut Barbershop — Potong Rambut Pria Tanpa Antre Lama',
    description: 'Tampil rapi, percaya diri setiap hari. Reservasi kursi barber online tanpa antre.',
    images: [{ url: `${siteUrl}/barber/hero-barber.jpg`, width: 1200, height: 630, alt: 'Nalcut Barbershop' }],
  },
  twitter: {
    title: 'Nalcut Barbershop — Potong Rambut Pria Tanpa Antre Lama',
    description: 'Tampil rapi, percaya diri setiap hari. Reservasi kursi barber online tanpa antre.',
    images: [`${siteUrl}/barber/hero-barber.jpg`],
  },
};

const barbershopStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    name: 'Nalcut Barbershop (Concept by Naltech)',
    description: 'Barbershop pria modern dengan sistem booking jadwal online tanpa antre karya Naltech Studio.',
    url: `${siteUrl}/demo/nalcut`,
    image: `${siteUrl}/barber/hero-barber.jpg`,
    priceRange: 'Rp40.000 - Rp150.000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta Selatan',
      addressCountry: 'ID',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '09:00',
        closes: '23:00',
      },
    ],
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
        name: 'Nalcut Barbershop',
        item: `${siteUrl}/demo/nalcut`,
      },
    ],
  },
];

const servicePriceList = [
  {
    name: 'Regular Haircut',
    price: 'Rp40.000',
    duration: '30 Menit',
    desc: 'Konsultasi gaya rambut, potong presisi sesuai bentuk kepala, pembersihan rambut rontok, dan styling pomade.',
    popular: false,
  },
  {
    name: 'Haircut & Wash',
    price: 'Rp55.000',
    duration: '40 Menit',
    desc: 'Potong rambut rapi, keramas dengan shampoo cooling mint, pijat relaksasi kulit kepala, dan penataan hair tonic/pomade.',
    popular: true,
  },
  {
    name: 'Premium Haircut',
    price: 'Rp75.000',
    duration: '60 Menit',
    desc: 'Konsultasi detail bentuk wajah, haircut presisi, wash, treatment handuk hangat aromaterapi, pijat leher, & premium styling.',
    popular: true,
  },
  {
    name: 'Haircut & Shave',
    price: 'Rp65.000',
    duration: '45 Menit',
    desc: 'Kombinasi potong rambut dan cukur jenggot/kumis rapi menggunakan pisau cukur steril dan cooling aftershave balm.',
    popular: false,
  },
  {
    name: 'Beard Trim & Kumis',
    price: 'Rp30.000',
    duration: '20 Menit',
    desc: 'Merapikan garis batas jenggot, kumis, dan jambang agar simetris dan tegas dengan gunting dan trimmer mikro.',
    popular: false,
  },
  {
    name: 'Hair Coloring / Highlight',
    price: 'Mulai Rp150.000',
    duration: '90 Menit',
    desc: 'Pewarnaan rambut profesional menggunakan cat berkualitas (Ash Grey, Brown, Blonde, Bleaching, atau Hitam Alami).',
    popular: false,
  },
  {
    name: 'Kids Haircut',
    price: 'Rp35.000',
    duration: '25 Menit',
    desc: 'Potongan rambut ramah untuk anak-anak dengan pendekatan sabar, rapi, dan cepat tanpa membuat anak rewel.',
    popular: false,
  },
  {
    name: 'Head Massage Relaksasi',
    price: 'Rp25.000',
    duration: '15 Menit',
    desc: 'Pijat kepala, leher, dan pundak bertekanan pas untuk meredakan ketegangan dan melancarkan sirkulasi darah.',
    popular: false,
  },
];

const barbersProfileList = [
  {
    name: 'Andi Pratama',
    title: 'Senior Barber',
    exp: '7 Tahun Pengalaman',
    specialty: 'Fade, Pompadour, Classic Slick Back',
    rating: 4.9,
    image: '/barber/barber-andi.jpg',
    desc: 'Spesialis potongan klasik presisi dan gradasi fade yang tajam. Sangat memahami struktur garis rambut formal.',
  },
  {
    name: 'Rizky Kurniawan',
    title: 'Professional Barber',
    exp: '5 Tahun Pengalaman',
    specialty: 'French Crop, Taper Fade, Textured Cut',
    rating: 4.8,
    image: '/barber/barber-rizky.jpg',
    desc: 'Ahli dalam gaya rambut bertekstur modern yang mudah diatur untuk pria aktif, mahasiswa, dan eksekutif muda.',
  },
  {
    name: 'Dimas Anggoro',
    title: 'Creative Barber',
    exp: '4 Tahun Pengalaman',
    specialty: 'Modern Mullet, Two Block, Hair Tattoo',
    rating: 4.8,
    image: '/barber/barber-dimas.jpg',
    desc: 'Pakar gaya rambut street-style dan asian cuts. Memberikan sentuhan dinamis bagi Anda yang suka tampil beda.',
  },
];

const whyChooseUs = [
  {
    title: 'Booking Tanpa Antre',
    icon: Clock,
    desc: 'Tentukan jam kedatangan sebelum berangkat. Kursi barber Anda sudah siap tanpa perlu menunggu berjam-jam.',
  },
  {
    title: 'Barber Berpengalaman',
    icon: UserCheck,
    desc: 'Masing-masing barber memiliki sertifikasi profesional, jam terbang tinggi, dan portofolio karya terbukti.',
  },
  {
    title: 'Harga Transparan',
    icon: Award,
    desc: 'Harga setiap layanan tercantum jelas di awal tanpa ada biaya tersembunyi atau pemaksaan produk tambahan.',
  },
  {
    title: 'Peralatan Steril Higienis',
    icon: ShieldCheck,
    desc: 'Pisau cukur sekali pakai (disposable razor), sisir dan clipper disterilkan menggunakan box UV & alkohol setelah tiap pemakaian.',
  },
  {
    title: 'Konsultasi Bentuk Wajah',
    icon: Scissors,
    desc: 'Barber siap memberikan saran model rambut terbaik yang proporsional dengan bentuk wajah dan jenis rambut Anda.',
  },
  {
    title: 'Tempat Nyaman & Berkelas',
    icon: Coffee,
    desc: 'Ruang tunggu ber-AC dengan interior maskulin vintage, free high-speed WiFi, playlist musik santai, dan complimentary coffee.',
  },
];

const membershipPackages = [
  {
    name: 'Basic Member',
    price: 'Rp70.000',
    period: '/ Bulan',
    quota: '2x Regular Haircut',
    desc: 'Cocok untuk pria yang rutin merapikan rambut setiap 2 minggu sekali.',
    perks: ['2x Regular Haircut', 'Free Pomade Styling tiap kunjungan', 'Hemat Rp10.000 dari harga normal', 'Prioritas booking slot akhir pekan'],
    highlight: false,
  },
  {
    name: 'Gentleman Member',
    price: 'Rp100.000',
    period: '/ Bulan',
    quota: '2x Haircut & Wash',
    desc: 'Paket terfavorit bagi profesional yang mengutamakan kerapian dan relaksasi kepala.',
    perks: ['2x Haircut & Wash + Cooling Pijat', 'Free Hair Tonic & Styling', 'Hemat Rp10.000 dari harga normal', 'Diskon 10% produk pomade/wax'],
    highlight: true,
  },
  {
    name: 'Premium Member',
    price: 'Rp200.000',
    period: '/ Bulan',
    quota: '3x Premium Haircut',
    desc: 'Perawatan grooming total untuk eksekutif, pengusaha, dan pria berkelas.',
    perks: ['3x Premium Haircut, Wash & Hot Towel', '1x Free Beard Trim / Shave', 'Hemat Rp25.000 dari harga normal', 'Slot VIP tanpa batas antrean'],
    highlight: false,
  },
];

export default function NalcutBarbershopPage() {
  return (
    <main className="ncb-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(barbershopStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="ncb-promo-ribbon">
        <div className="ncb-wrap ncb-ribbon-content">
          <span className="ncb-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO PELANGGAN BARU</span>
          </span>
          <p>
            Diskon <strong>20% Kunjungan Pertama</strong> + Free Pomade Styling dengan kode booking: <code>NALCUT20</code>
          </p>
          <a href="#booking" className="ncb-ribbon-link">
            <span>Booking Kursi</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="ncb-demo-bar">
        <div className="ncb-wrap ncb-demo-inner">
          <Link href="/" className="ncb-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Header */}
      <header className="ncb-header">
        <div className="ncb-wrap ncb-header-inner">
          <a className="ncb-logo" href="#top">
            <span className="ncb-logo-icon">
              <Scissors size={20} />
            </span>
            <span className="ncb-logo-text">
              NAL<strong>CUT</strong> <small>GENTLEMEN&apos;S BARBER</small>
            </span>
          </a>

          <nav className="ncb-nav" aria-label="Navigasi Nalcut Barbershop">
            <a href="#layanan">Layanan &amp; Harga</a>
            <a href="#barber">Barber Kami</a>
            <a href="#booking">Booking Online</a>
            <a href="#galeri">Galeri Model</a>
            <a href="#membership">Membership</a>
            <a href="#lokasi">Lokasi &amp; Jam</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="ncb-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20Nalcut%20Barbershop%2C%20saya%20mau%20tanya%20jadwal%20kosong%20hari%20ini."
              target="_blank"
              rel="noreferrer"
              className="ncb-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Chat CS Barbershop</span>
            </a>
            <a href="#booking" className="ncb-btn-header-cta">
              <Calendar size={15} />
              <span>Booking Sekarang</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="ncb-hero">
        <div className="ncb-wrap">
          <div className="ncb-hero-grid">
            <div className="ncb-hero-copy">
              <div className="ncb-hero-tag">
                <Crown size={14} className="ncb-icon-gold" />
                <span>TAMPIL RAPI, PERCAYA DIRI SETIAP HARI</span>
              </div>

              <h1>
                Potong Rambut Tanpa Antre Lama
              </h1>

              <p className="ncb-hero-sub">
                Pilih layanan, barber, tanggal, dan waktu kedatanganmu. Nikmati pengalaman grooming yang nyaman dengan hasil potongan presisi sesuai karakter dan gaya hidupmu.
              </p>

              <div className="ncb-hero-actions">
                <a href="#booking" className="ncb-btn-hero-primary">
                  <Scissors size={17} />
                  <span>Booking Jadwal Sekarang</span>
                  <ArrowUpRight size={17} />
                </a>

                <a href="#layanan" className="ncb-btn-hero-secondary">
                  <span>Lihat Daftar Harga</span>
                </a>
              </div>

              {/* Operating Info Badges */}
              <div className="ncb-hero-info-pills">
                <div className="ncb-info-pill">
                  <Clock size={15} className="ncb-icon-gold" />
                  <span>Buka Setiap Hari (10.00–22.00)</span>
                </div>
                <div className="ncb-info-pill">
                  <UserCheck size={15} className="ncb-icon-gold" />
                  <span>Barber Berpengalaman</span>
                </div>
                <div className="ncb-info-pill">
                  <ShieldCheck size={15} className="ncb-icon-gold" />
                  <span>Peralatan Steril Higienis</span>
                </div>
                <div className="ncb-info-pill">
                  <Coffee size={15} className="ncb-icon-gold" />
                  <span>Ruang Tunggu AC + Kopi</span>
                </div>
              </div>
            </div>

            <div className="ncb-hero-visual-frame">
              <img src="/barber/hero-barber.jpg" alt="Gentlemen Barbershop Nalcut Grooming" />
              <div className="ncb-hero-floating-status">
                <div className="ncb-status-indicator">
                  <span className="ncb-pulse-dot" />
                  <strong>3 Kursi Barber Siap Melayani</strong>
                </div>
                <small>Andi, Rizky, dan Dimas standby di workshop hari ini</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Keunggulan Barbershop */}
      <section id="keunggulan" className="ncb-advantages-section ncb-wrap">
        <header className="ncb-section-head center">
          <span className="ncb-badge-tag">KENAPA MEMILIH NALCUT?</span>
          <h2>Standar grooming premium yang menjaga<br /><em>penampilanmu tetap berkelas.</em></h2>
          <p>
            Kenyamanan waktu Anda adalah prioritas kami. Nikmati layanan potong rambut rapi tanpa harus membuang waktu dalam antrean panjang.
          </p>
        </header>

        <div className="ncb-advantages-grid">
          {whyChooseUs.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div key={idx} className="ncb-adv-card">
                <div className="ncb-adv-icon-wrap">
                  <Icon size={24} className="ncb-icon-gold" />
                </div>
                <h3>{adv.title}</h3>
                <p>{adv.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 02: Layanan dan Harga */}
      <section id="layanan" className="ncb-pricing-section">
        <div className="ncb-wrap">
          <header className="ncb-section-head center">
            <span className="ncb-badge-tag">MENU LAYANAN &amp; HARGA TRANSPARAN</span>
            <h2>Pilihan perawatan rambut dan wajah<br /><em>dengan tarif bersahabat.</em></h2>
            <p>
              Seluruh harga sudah termasuk konsultasi model rambut dan penataan pomade/hair tonic.
            </p>
          </header>

          <div className="ncb-pricing-grid">
            {servicePriceList.map((svc, idx) => (
              <div key={idx} className={`ncb-price-item-card ${svc.popular ? 'popular' : ''}`}>
                {svc.popular && <span className="ncb-popular-tag">Paling Sering Dipesan</span>}
                <div className="ncb-price-item-head">
                  <h4>{svc.name}</h4>
                  <span className="ncb-price-badge">{svc.price}</span>
                </div>
                <span className="ncb-duration-meta">
                  <Clock size={12} /> Durasi: ~{svc.duration}
                </span>
                <p className="ncb-price-item-desc">{svc.desc}</p>
                <div className="ncb-price-item-foot">
                  <a href="#booking" className="ncb-btn-choose-service">
                    <span>Pilih Layanan</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Profil Barber & Spesialisasi */}
      <section id="barber" className="ncb-barbers-section ncb-wrap">
        <header className="ncb-section-head center">
          <span className="ncb-badge-tag">TIM BARBER PROFESIONAL</span>
          <h2>Pilih barber langganan dengan<br /><em>keahlian gaya rambut yang kamu suka.</em></h2>
          <p>
            Masing-masing barber kami memiliki jam terbang tinggi dan spesialisasi teknik potongan tersendiri.
          </p>
        </header>

        <div className="ncb-barbers-grid">
          {barbersProfileList.map((barber, idx) => (
            <div key={idx} className="ncb-barber-profile-card">
              <div className="ncb-barber-photo-box">
                <img src={barber.image} alt={barber.name} />
                <span className="ncb-exp-tag">{barber.exp}</span>
              </div>
              <div className="ncb-barber-info">
                <div className="ncb-barber-header-row">
                  <div>
                    <h3>{barber.name}</h3>
                    <span className="ncb-barber-title">{barber.title}</span>
                  </div>
                  <div className="ncb-rating-pill">
                    <Star size={13} fill="#c89b3c" color="#c89b3c" />
                    <strong>{barber.rating}</strong>
                  </div>
                </div>

                <div className="ncb-barber-spec-row">
                  <small>Spesialisasi:</small>
                  <strong>{barber.specialty}</strong>
                </div>

                <p className="ncb-barber-desc">{barber.desc}</p>

                <a href="#booking" className="ncb-btn-book-barber">
                  <Scissors size={14} />
                  <span>Booking dengan {barber.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 04: Sistem Booking On-Demand */}
      <section id="booking" className="ncb-booking-engine-section">
        <div className="ncb-wrap">
          <BarbershopBookingWidget />
        </div>
      </section>

      {/* Section 05: Galeri Gaya Rambut Interaktif */}
      <section id="galeri" className="ncb-lookbook-section ncb-wrap">
        <header className="ncb-section-head center">
          <span className="ncb-badge-tag">INSPIRASI MODEL RAMBUT</span>
          <h2>Lihat hasil potongan karya barber kami<br /><em>dan temukan gaya terbaikmu.</em></h2>
          <p>
            Kamu bisa memilih gaya rambut di bawah ini sebagai referensi potongan saat melakukan booking.
          </p>
        </header>

        <HairstyleLookbook />
      </section>

      {/* Section 06: Paket Promo & Membership Bulanan */}
      <section id="membership" className="ncb-membership-section">
        <div className="ncb-wrap">
          <header className="ncb-section-head center">
            <span className="ncb-badge-tag">PAKET HEMAT &amp; MEMBERSHIP</span>
            <h2>Grooming rutin lebih hemat dengan<br /><em>paket membership bulanan.</em></h2>
            <p>
              Dapatkan kuota potong rambut rutin, diskon produk styling, dan prioritas antrean.
            </p>
          </header>

          <div className="ncb-membership-grid">
            {membershipPackages.map((pkg, idx) => (
              <div key={idx} className={`ncb-member-card ${pkg.highlight ? 'highlight' : ''}`}>
                {pkg.highlight && <span className="ncb-member-popular-badge">Paling Populer</span>}
                <div className="ncb-member-head">
                  <h3>{pkg.name}</h3>
                  <div className="ncb-member-price">
                    <strong>{pkg.price}</strong>
                    <small>{pkg.period}</small>
                  </div>
                  <span className="ncb-member-quota">{pkg.quota}</span>
                  <p className="ncb-member-desc">{pkg.desc}</p>
                </div>

                <ul className="ncb-member-perks">
                  {pkg.perks.map((perk, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={15} className="ncb-icon-gold" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6281573550017?text=Halo%20Nalcut%20Barbershop%2C%20saya%20ingin%20bergabung%20dengan%20Paket%20Membership%20${encodeURIComponent(pkg.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="ncb-btn-join-member"
                >
                  <span>Daftar Membership Ini</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>

          {/* Loyalty Program Info */}
          <div className="ncb-loyalty-banner">
            <div className="ncb-loyalty-content">
              <Award size={28} className="ncb-icon-gold" />
              <div>
                <h4>Program Loyalty Point: Kunjungan ke-6 Gratis!</h4>
                <p>Kumpulkan stempel digital di setiap kunjungan potong rambut. Dapatkan 1x Regular Haircut gratis setelah 5x potong.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 07: Lokasi & Jam Operasional */}
      <section id="lokasi" className="ncb-location-section ncb-wrap">
        <header className="ncb-section-head">
          <div>
            <span className="ncb-badge-tag">LOKASI &amp; WAKTU BUKA</span>
            <h2>Kunjungi workshop Nalcut Barbershop<br /><em>di lokasi strategis.</em></h2>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="ncb-link-more"
          >
            <span>Buka di Google Maps ↗</span>
          </a>
        </header>

        <div className="ncb-location-grid">
          <div className="ncb-loc-info-card">
            <h4>Alamat &amp; Kontak</h4>
            <p className="ncb-loc-address">
              <MapPin size={16} className="ncb-icon-gold" />
              <span>Jl. Tebet Timur Dalam Raya No. 32, Jakarta Selatan (Sebelah Coffee Shop, Seberang Taman)</span>
            </p>
            <p className="ncb-loc-phone">
              <Phone size={16} className="ncb-icon-gold" />
              <span>+62 815 7355 0017 (WhatsApp Booking &amp; Info)</span>
            </p>

            <div className="ncb-hours-table">
              <label>Jadwal Operasional:</label>
              <div className="ncb-hours-row">
                <span>Senin – Jumat:</span>
                <strong>10.00 – 22.00 WIB</strong>
              </div>
              <div className="ncb-hours-row">
                <span>Sabtu – Minggu:</span>
                <strong>09.00 – 23.00 WIB</strong>
              </div>
              <div className="ncb-hours-row">
                <span>Hari Libur Nasional:</span>
                <strong>Tetap Buka (09.00 – 22.00)</strong>
              </div>
            </div>

            <div className="ncb-loc-actions">
              <a href="#booking" className="ncb-btn-loc-book">
                <Scissors size={15} />
                <span>Booking Jadwal Sekarang</span>
              </a>
            </div>
          </div>

          <div className="ncb-loc-amenities-card">
            <h4>Fasilitas Workshop</h4>
            <ul className="ncb-amenities-list">
              <li><CheckCircle2 size={15} className="ncb-icon-gold" /> <span>3 Kursi Barber Kulit Ergonomis</span></li>
              <li><CheckCircle2 size={15} className="ncb-icon-gold" /> <span>Ruang Tunggu Full AC &amp; Sofa Empuk</span></li>
              <li><CheckCircle2 size={15} className="ncb-icon-gold" /> <span>Free High-Speed Wi-Fi &amp; Charging Station</span></li>
              <li><CheckCircle2 size={15} className="ncb-icon-gold" /> <span>Complimentary Black Coffee &amp; Mineral Water</span></li>
              <li><CheckCircle2 size={15} className="ncb-icon-gold" /> <span>Area Parkir Mobil &amp; Motor Luas Aman</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 08: FAQ */}
      <section id="faq" className="ncb-faq-section ncb-wrap">
        <header className="ncb-section-head">
          <div>
            <span className="ncb-badge-tag">PERTANYAAN UMUM</span>
            <h2>Semua hal yang sering ditanyakan seputar<br /><em>layanan di Nalcut Barbershop.</em></h2>
          </div>
        </header>

        <div className="ncb-faq-list">
          <details open>
            <summary>
              <span>01</span> Apakah saya harus booking online terlebih dahulu atau bisa langsung datang?<b>+</b>
            </summary>
            <p>
              Anda tetap bisa datang langsung (*walk-in*), namun kami sangat menyarankan untuk booking online terlebih dahulu agar kursi barber dan slot waktu Anda terjamin tanpa perlu menunggu antrean pelanggan lain.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Apakah saya bebas memilih barber langganan saya?<b>+</b>
            </summary>
            <p>
              Bisa 100%! Pada form booking online, Anda dapat memilih nama barber (*Andi, Rizky, Dimas*) atau memilih opsi *Siapa Saja yang Siap Paling Cepat*.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Bagaimana jika saya datang terlambat dari jam booking?<b>+</b>
            </summary>
            <p>
              Kami memberikan toleransi keterlambatan maksimal 15 menit. Jika lebih dari itu, jadwal Anda dapat dialihkan ke slot berikutnya agar tidak mengganggu pelanggan lain yang sudah memesan tepat waktu.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Metode pembayaran apa saja yang diterima di lokasi?<b>+</b>
            </summary>
            <p>
              Kami menerima pembayaran tunai (cash), QRIS (GoPay, OVO, Dana, ShopeePay, BCA Mobile, dll), dan kartu debit bank.
            </p>
          </details>

          <details>
            <summary>
              <span>05</span> Bisakah Naltech Studio membuatkan website barbershop &amp; booking online seperti Nalcut?<b>+</b>
            </summary>
            <p>
              Tentu saja! Ini adalah concept demo project dari Naltech Studio. Kami membantu pemilik barbershop, salon kecantikan, dan bisnis grooming memiliki landing page premium dengan sistem reservasi kursi online terintegrasi WhatsApp.
            </p>
          </details>
        </div>
      </section>

      {/* Section 09: Final CTA */}
      <section className="ncb-final-cta-section ncb-wrap">
        <div className="ncb-final-cta-card">
          <div className="ncb-cta-glow" />
          <div className="ncb-final-cta-inner">
            <span className="ncb-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Ingin memiliki website barbershop &amp; sistem booking<br />
              sekelas <em>Nalcut?</em>
            </h2>
            <p>
              Naltech membantu pengusaha barbershop dan studio grooming menghadirkan platform digital profesional yang memudahkan pelanggan memesan jadwal secara mandiri dan meningkatkan loyalitas kunjungan.
            </p>
            <div className="ncb-cta-actions">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20barbershop%20dan%20booking%20seperti%20Nalcut."
                target="_blank"
                rel="noreferrer"
                className="ncb-btn-cta-wa"
              >
                <MessageCircle size={18} />
                <span>Konsultasi Project Website Barbershop</span>
                <ArrowUpRight size={18} />
              </a>
              <Link href="/" className="ncb-btn-cta-portfolio">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ncb-footer ncb-wrap">
        <div className="ncb-footer-grid">
          <div className="ncb-footer-col brand">
            <a className="ncb-logo" href="#top">
              <span className="ncb-logo-icon">
                <Scissors size={20} />
              </span>
              <span className="ncb-logo-text">
                NAL<strong>CUT</strong> <small>GENTLEMEN&apos;S BARBER</small>
              </span>
            </a>
            <p>
              Gentlemen&apos;s Barbershop dengan sistem booking online tanpa antre. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="ncb-footer-col">
            <strong>Layanan Populer</strong>
            <a href="#layanan">Regular Haircut (Rp40K)</a>
            <a href="#layanan">Haircut &amp; Wash (Rp55K)</a>
            <a href="#layanan">Premium Haircut (Rp75K)</a>
            <a href="#layanan">Haircut &amp; Shave (Rp65K)</a>
          </div>

          <div className="ncb-footer-col">
            <strong>Barber Kami</strong>
            <a href="#barber">Andi Pratama (Senior)</a>
            <a href="#barber">Rizky Kurniawan (Pro)</a>
            <a href="#barber">Dimas Anggoro (Creative)</a>
            <a href="#membership">Membership Bulanan</a>
          </div>

          <div className="ncb-footer-col">
            <strong>Kontak &amp; Alamat</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="ncb-address">Jakarta Selatan, Indonesia</p>
          </div>
        </div>

        <div className="ncb-footer-bottom">
          <small>
            © 2026 Nalcut Barbershop · Barbershop Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Tampil Rapi, Percaya Diri Setiap Hari · Garansi Kepuasan 100%</span>
        </div>
      </footer>
    </main>
  );
}
