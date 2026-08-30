import type { Metadata } from 'next';
import Link from 'next/link';
import './rasa-nusantara.css';
import NusantaraProductCatalog from './NusantaraProductCatalog';
import ResellerProfitCalculator from './ResellerProfitCalculator';
import {
  ShoppingBag,
  Flame,
  Sparkles,
  Utensils,
  Package,
  ShieldCheck,
  Truck,
  Users,
  Calculator,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  Award,
  Store,
  BadgePercent,
  Heart,
  Tag,
  Star,
  Check,
  Clock,
  MapPin,
  Sparkle,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'Rasa Nusantara — Makanan Khas Daerah & Program Kemitraan Reseller by Naltech',
  description: 'Nikmati aneka camilan gurih, sambal kemasan toples, dan lauk rendang siap saji autentik khas daerah dengan kemasan aman berstandar pangan. Tersedia program kemitraan reseller kuliner.',
  alternates: {
    canonical: '/demo/rasa-nusantara',
  },
  openGraph: {
    title: 'Rasa Nusantara — Cita Rasa Lokal yang Selalu Dirindukan',
    description: 'Makanan khas daerah autentik dan peluang usaha reseller kuliner bersama Rasa Nusantara.',
    images: [{ url: `${siteUrl}/food-local/hero-food-spread.jpg`, width: 1200, height: 630, alt: 'Rasa Nusantara Kuliner Lokal' }],
  },
  twitter: {
    title: 'Rasa Nusantara — Cita Rasa Lokal yang Selalu Dirindukan',
    description: 'Makanan khas daerah autentik dan peluang usaha reseller kuliner bersama Rasa Nusantara.',
    images: [`${siteUrl}/food-local/hero-food-spread.jpg`],
  },
};

const foodStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'Rasa Nusantara (Concept by Naltech)',
    description: 'Etalase digital makanan khas daerah dan program kemitraan reseller kuliner dengan sistem checkout WhatsApp karya Naltech Studio.',
    url: `${siteUrl}/demo/rasa-nusantara`,
    image: `${siteUrl}/food-local/hero-food-spread.jpg`,
    priceRange: 'Rp18.000 - Rp250.000',
    servesCuisine: 'Indonesian Local Specialty',
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
        name: 'Rasa Nusantara',
        item: `${siteUrl}/demo/rasa-nusantara`,
      },
    ],
  },
];

const pillarsValues = [
  {
    title: 'Bahan Alami Pilihan',
    desc: 'Bahan baku singkong, pisang kepok, cabai rawit, dan rempah-rempah diperoleh langsung dari kelompok tani lokal mitra terpercaya.',
    icon: Sparkles,
  },
  {
    title: 'Resep Warisan Autentik',
    desc: 'Mempertahankan cita rasa asli khas daerah dengan racikan bumbu rempah tradisional yang kaya aroma dan gurih alami.',
    icon: Utensils,
  },
  {
    title: 'Produksi Bersih & Higienis',
    desc: 'Pengolahan menerapkan protokol kebersihan standar industri pangan dengan izin edar P-IRT resmi dan uji masa simpan lab.',
    icon: ShieldCheck,
  },
  {
    title: 'Kemasan Vakum Food-Grade',
    desc: 'Standing pouch tebal berlapis aluminium foil dan toples segil vakum untuk menjaga kerenyahan dan kesegaran rasa hingga 8-12 bulan.',
    icon: Package,
  },
  {
    title: 'Siap Kirim se-Indonesia',
    desc: 'Pengemasan berlapis kardus tebal dan bubble wrap anti-hancur, aman dikirim melalui ekspedisi reguler, same day, hingga kargo.',
    icon: Truck,
  },
  {
    title: 'Peluang Reseller Menguntungkan',
    desc: 'Margin laba 15%–25% dengan modal mulai Rp500.000, lengkap dengan materi promosi foto/video HD dan bimbingan jualan.',
    icon: BadgePercent,
  },
];

const bundlingPackages = [
  {
    name: 'Paket Coba Rasa',
    price: 'Rp75.000',
    normalPrice: 'Rp85.000',
    badge: 'Cocok untuk Pemula',
    contents: ['1 Keripik Singkong Balado', '1 Keripik Pisang Cokelat Lumer', '1 Sambal Teri Pedas', 'Bonus Kartu Ucapan'],
    desc: 'Pilihan pas untuk Anda yang ingin mencicipi ragam cita rasa camilan & sambal terfavorit kami.',
  },
  {
    name: 'Paket Keluarga Nusantara',
    price: 'Rp175.000',
    normalPrice: 'Rp200.000',
    badge: 'Paling Hemat Keluarga',
    contents: ['3 Aneka Keripik Renyah', '2 Toples Sambal Pilihan', '1 Abon Sapi Gurih Rempah (150g)', 'Kardus Box Khusus'],
    desc: 'Stok camilan dan lauk praktis siap saji untuk santap bersama keluarga tercinta di rumah.',
  },
  {
    name: 'Paket Oleh-Oleh 5 Rasa',
    price: 'Rp200.000',
    normalPrice: 'Rp235.000',
    badge: 'Favorit Buah Tangan',
    contents: ['5 Produk Unggulan Lengkap', 'Tas Jinjing Spunbond Eksklusif', 'Box Corrugated Tebal', 'Kartu Titip Salam'],
    desc: 'Kemasan rapi dan praktis dibawa sebagai buah tangan saat berkunjung ke kerabat atau dinas luar kota.',
  },
  {
    name: 'Hampers Nusantara Gift Box',
    price: 'Rp250.000',
    normalPrice: 'Rp300.000',
    badge: 'Hadiah & Hari Raya',
    contents: ['6 Varian Camilan & Lauk Rendang', 'Exclusive Hardbox Pita Merah Bata', 'Hangtag Custom Nama Pengirim', 'Paper Bag Mewah'],
    desc: 'Hadiah istimewa untuk hari raya Idul Fitri, Natal, bingkisan relasi bisnis, dan acara kantor.',
  },
];

const testimonialsList = [
  {
    quote: 'Sambal terinya benar-benar gurih dan pedasnya mantap! Kemasan toplesnya sangat rapat, waktu dikirim ke Balikpapan sama sekali tidak bocor. Keripik singkongnya juga renyah banget.',
    author: 'Ratna Kusuma',
    location: 'Balikpapan (Konsumen Luar Kota)',
    item: 'Paket Oleh-Oleh 5 Rasa',
  },
  {
    quote: 'Bergabung jadi reseller paket Silver sangat membantu pemasukan sampingan. Foto dan video yang disediakan di grup reseller tinggal saya upload ke status WA dan Instagram, langsung banyak yang repeat order.',
    author: 'Hendra Saputra',
    location: 'Surabaya (Mitra Reseller Aktif)',
    item: 'Paket Reseller Silver',
  },
  {
    quote: 'Rendang suwir kemasannya jadi penyelamat saat anak kos lagi malas masak. Rasanya persis seperti rendang masakan ibu di rumah, tinggal tuang di atas nasi hangat langsung nikmat.',
    author: 'Farhan Dwi',
    location: 'Yogyakarta (Mahasiswa)',
    item: 'Rendang Sapi Suwir Kemasan Vakum',
  },
];

export default function RasaNusantaraFoodPage() {
  return (
    <main className="rns-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(foodStructuredData) }}
      />

      {/* Top Promo Ribbon */}
      <div className="rns-promo-ribbon">
        <div className="rns-wrap rns-ribbon-content">
          <span className="rns-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO KULINER NUSANTARA</span>
          </span>
          <p>
            Gratis Ongkir se-Jawa (Min. Belanja Rp150.000) &amp; <strong>Diskon 15% Paket Reseller Perdana</strong>.
          </p>
          <a href="#katalog" className="rns-ribbon-link">
            <span>Belanja Sekarang</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="rns-demo-bar">
        <div className="rns-wrap rns-demo-inner">
          <Link href="/" className="rns-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Header */}
      <header className="rns-header">
        <div className="rns-wrap rns-header-inner">
          <a className="rns-logo" href="#top">
            <span className="rns-logo-icon">
              <Flame size={20} />
            </span>
            <span className="rns-logo-text">
              RASA<strong>NUSANTARA</strong> <small>KULINER LOKAL &amp; OLEH-OLEH</small>
            </span>
          </a>

          <nav className="rns-nav" aria-label="Navigasi Rasa Nusantara">
            <a href="#katalog">Katalog Produk</a>
            <a href="#bundling">Paket Hemat</a>
            <a href="#keunggulan">Keunggulan</a>
            <a href="#reseller">Program Reseller</a>
            <a href="#simulasi">Simulasi Margin</a>
            <a href="#keamanan">Keamanan Pangan</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="rns-header-actions">
            <a href="#katalog" className="rns-btn-header-cart">
              <ShoppingBag size={15} />
              <span>Belanja Produk</span>
            </a>
            <a href="#reseller" className="rns-btn-header-reseller">
              <Store size={15} />
              <span>Gabung Reseller</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="rns-hero">
        <div className="rns-wrap">
          <div className="rns-hero-grid">
            <div className="rns-hero-copy">
              <div className="rns-hero-tag">
                <Flame size={14} className="rns-icon-terracotta" />
                <span>CITA RASA LOKAL, SIAP DINIKMATI DI MANA SAJA</span>
              </div>

              <h1>
                Cita Rasa Lokal yang Selalu Dirindukan
              </h1>

              <p className="rns-hero-sub">
                Nikmati berbagai makanan khas daerah yang dibuat dari bahan pilihan, diproses secara higienis, dan dikemas aman untuk dikirim ke seluruh Indonesia. Tersedia pula peluang usaha kemitraan reseller dengan margin menguntungkan.
              </p>

              <div className="rns-hero-actions">
                <a href="#katalog" className="rns-btn-hero-primary">
                  <ShoppingBag size={17} />
                  <span>Belanja Produk Sekarang</span>
                  <ArrowUpRight size={17} />
                </a>

                <a href="#reseller" className="rns-btn-hero-secondary">
                  <Store size={17} />
                  <span>Gabung Jadi Reseller</span>
                </a>
              </div>

              {/* Operating Info Badges */}
              <div className="rns-hero-badges-row">
                <div className="rns-badge-item">
                  <ShieldCheck size={15} className="rns-icon-terracotta" />
                  <span>Izin Edar P-IRT Resmi</span>
                </div>
                <div className="rns-badge-item">
                  <Truck size={15} className="rns-icon-terracotta" />
                  <span>Pengiriman Aman Anti-Bocor</span>
                </div>
                <div className="rns-badge-item">
                  <BadgePercent size={15} className="rns-icon-terracotta" />
                  <span>Margin Reseller s/d 25%</span>
                </div>
              </div>
            </div>

            <div className="rns-hero-visual-frame">
              <img src="/food-local/hero-food-spread.jpg" alt="Aneka Makanan Khas Nusantara Rasa Nusantara" />
              <div className="rns-hero-floating-glass">
                <div className="rns-floating-header">
                  <Sparkle size={18} className="rns-icon-amber" />
                  <div>
                    <strong>Resep Autentik Tradisional</strong>
                    <small>Rempah asli tanpa pengawet berbahaya</small>
                  </div>
                </div>
                <div className="rns-pills-row">
                  <span className="rns-pill">Keripik Balado</span>
                  <span className="rns-pill">Sambal Teri Pedas</span>
                  <span className="rns-pill">Rendang Suwir</span>
                  <span className="rns-pill">Hampers Gift</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: 6 Keunggulan Produk */}
      <section id="keunggulan" className="rns-values-section rns-wrap">
        <header className="rns-section-head center">
          <span className="rns-badge-tag">MENGAPA MEMILIH KAMI</span>
          <h2>Kualitas rasa dan kemasan terbaik<br /><em>untuk kepuasan setiap penikmat kuliner.</em></h2>
          <p>
            Kami menggabungkan resep warisan khas nusantara dengan standar pengolahan modern dan pengemasan kedap udara.
          </p>
        </header>

        <div className="rns-values-grid">
          {pillarsValues.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="rns-value-card">
                <div className="rns-value-icon-box">
                  <Icon size={24} className="rns-icon-terracotta" />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 02: Interactive E-Catalog & Shopping Cart */}
      <section id="katalog" className="rns-catalog-section">
        <div className="rns-wrap">
          <header className="rns-section-head center">
            <span className="rns-badge-tag">ETALASE PRODUK NUSANTARA</span>
            <h2>Pilih camilan, sambal, &amp; lauk favorit<br /><em>langsung pesan praktis via WhatsApp.</em></h2>
            <p>
              Pilih produk dan varian rasa yang Anda inginkan, masukkan ke keranjang belanja, dan kirim rincian pesanan secara instan.
            </p>
          </header>

          <NusantaraProductCatalog />
        </div>
      </section>

      {/* Section 03: Paket Bundling Hemat & Hampers */}
      <section id="bundling" className="rns-bundling-section rns-wrap">
        <header className="rns-section-head center">
          <span className="rns-badge-tag">PILIHAN PAKET HEMAT &amp; HAMPERS</span>
          <h2>Kombinasi produk lebih lengkap<br /><em>dengan harga yang jauh lebih hemat.</em></h2>
          <p>
            Pilihan ideal untuk stok camilan keluarga, buah tangan mudik, dan bingkisan hadiah perusahaan.
          </p>
        </header>

        <div className="rns-bundling-grid">
          {bundlingPackages.map((pkg, idx) => (
            <div key={idx} className="rns-bundling-card">
              <span className="rns-bundling-badge">{pkg.badge}</span>
              <div className="rns-bundling-head">
                <h3>{pkg.name}</h3>
                <div className="rns-bundling-price">
                  <strong>{pkg.price}</strong>
                  <del>{pkg.normalPrice}</del>
                </div>
                <p className="rns-bundling-desc">{pkg.desc}</p>
              </div>

              <div className="rns-bundling-contents-box">
                <label>Isi Paket Termasuk:</label>
                <ul>
                  {pkg.contents.map((c, cIdx) => (
                    <li key={cIdx}>
                      <CheckCircle2 size={14} className="rns-icon-terracotta" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/6281573550017?text=Halo%20Rasa%20Nusantara%2C%20saya%20mau%20pesan%20${encodeURIComponent(pkg.name)}%20(${pkg.price}).`}
                target="_blank"
                rel="noreferrer"
                className="rns-btn-bundling-order"
              >
                <ShoppingBag size={14} />
                <span>Pesan Paket Ini</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section 04: Program Reseller & Profit Calculator */}
      <section id="reseller" className="rns-reseller-section">
        <div className="rns-wrap">
          <header className="rns-section-head center">
            <span className="rns-badge-tag">PELUANG KEMITRAAN KULINER</span>
            <h2>Mulai usaha makanan lokal dengan modal fleksibel<br /><em>dan dukungan penjualan lengkap dari pusat.</em></h2>
            <p>
              Dapatkan harga khusus grosir, materi promosi foto/video tanpa watermark, dan panduan jualan di media sosial.
            </p>
          </header>

          <div id="simulasi" className="rns-calc-wrapper">
            <ResellerProfitCalculator />
          </div>
        </div>
      </section>

      {/* Section 05: Standar Keamanan & Legalitas Pangan */}
      <section id="keamanan" className="rns-safety-section rns-wrap">
        <div className="rns-safety-grid">
          <div className="rns-safety-copy">
            <span className="rns-badge-tag">STANDAR MUTU &amp; KEAMANAN</span>
            <h2>Diproduksi higienis &amp; aman<br /><em>untuk dinikmati seluruh anggota keluarga.</em></h2>
            <p>
              Kami mengutamakan kualitas pengolahan makanan dari pemilihan bahan baku segar, proses pemasakan bersih, hingga pengemasan vakum kedap udara yang melindungi kualitas rasa saat pengiriman jarak jauh.
            </p>

            <div className="rns-safety-points">
              <div className="rns-safety-item">
                <ShieldCheck size={20} className="rns-icon-terracotta" />
                <div>
                  <strong>Terdaftar Izin Edar P-IRT</strong>
                  <small>Memenuhi standar kelayakan tempat produksi industri rumah tangga pangan.</small>
                </div>
              </div>

              <div className="rns-safety-item">
                <Clock size={20} className="rns-icon-terracotta" />
                <div>
                  <strong>Masa Simpan Jelas &amp; Teruji</strong>
                  <small>Setiap kemasan mencantumkan tanggal produksi, tanggal kadaluarsa, dan cara simpan.</small>
                </div>
              </div>

              <div className="rns-safety-item">
                <Package size={20} className="rns-icon-terracotta" />
                <div>
                  <strong>Segel Vakum Aluminium Foil</strong>
                  <small>Mencegah kontaminasi udara dan menjaga kerenyahan keripik hingga berbulan-bulan.</small>
                </div>
              </div>
            </div>
          </div>

          <div className="rns-safety-media-frame">
            <img src="/food-local/production-hygiene.jpg" alt="Proses Pengemasan Bersih Rasa Nusantara" />
            <div className="rns-safety-floating-note">
              <CheckCircle2 size={16} className="rns-icon-green" />
              <span>Garansi 100% Produk Diganti Baru Jika Kemasan Diterima Dalam Kondisi Bocor / Rusak.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06: Testimoni */}
      <section className="rns-testi-section rns-wrap">
        <header className="rns-section-head center">
          <span className="rns-badge-tag">CERITA PELANGGAN &amp; MITRA</span>
          <h2>Dipercaya oleh ribuan penikmat kuliner<br /><em>dan puluhan mitra reseller di berbagai kota.</em></h2>
        </header>

        <div className="rns-testi-grid">
          {testimonialsList.map((t, idx) => (
            <div key={idx} className="rns-testi-card">
              <div className="rns-testi-stars">
                {Array.from({ length: 5 }).map((_, sIdx) => (
                  <Star key={sIdx} size={14} className="rns-star-fill" />
                ))}
              </div>
              <p className="rns-testi-quote">“{t.quote}”</p>
              <div className="rns-testi-author">
                <strong>{t.author}</strong>
                <small>{t.location}</small>
                <span className="rns-testi-badge">{t.item}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 07: FAQ */}
      <section id="faq" className="rns-faq-section rns-wrap">
        <header className="rns-section-head">
          <div>
            <span className="rns-badge-tag">PERTANYAAN UMUM</span>
            <h2>Semua hal yang perlu Anda ketahui<br />seputar <em>produk &amp; reseller Rasa Nusantara.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20Rasa%20Nusantara%2C%20saya%20ada%20pertanyaan%20seputar%20produk%20dan%20reseller."
            target="_blank"
            rel="noreferrer"
            className="rns-link-more"
          >
            <span>Tanya Admin via WhatsApp ↗</span>
          </a>
        </header>

        <div className="rns-faq-list">
          <details open>
            <summary>
              <span>01</span> Apakah produk aman dikirim ke luar pulau / luar kota?<b>+</b>
            </summary>
            <p>
              Sangat aman! Seluruh produk camilan dan sambal dikemas dengan standing pouch tebal dan toples segel vakum, kemudian dilapisi bubble wrap tebal dan kardus corrugated. Kami juga bekerja sama dengan ekspedisi Paxel (khusus makanan), J&amp;T, dan kargo.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Berapa lama masa simpan produk setelah kemasan dibuka?<b>+</b>
            </summary>
            <p>
              Dalam kondisi tersegel, produk tahan 6–12 bulan sesuai label pada kemasan. Setelah dibuka, untuk aneka sambal sebaiknya disimpan di dalam lemari es dan dikonsumsi dalam waktu 2–3 minggu.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah mitra reseller boleh memesan aneka varian produk campur (mix)?<b>+</b>
            </summary>
            <p>
              Ya, minimal order paket reseller (misalnya Starter Rp500.000) bebas dicampur antara aneka keripik, sambal toples, maupun lauk rendang sesuai preferensi pasar Anda.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Apakah mitra reseller mendapatkan foto dan materi promosi siap posting?<b>+</b>
            </summary>
            <p>
              Tentu saja! Begitu pendaftaran dan pemesanan pertama terkonfirmasi, Anda akan menerima link Google Drive berisi foto produk resolusi tinggi tanpa watermark, video pendek Reels/TikTok, serta template copywriting status WhatsApp.
            </p>
          </details>

          <details>
            <summary>
              <span>05</span> Bisakah Naltech Studio membuatkan website kuliner lokal &amp; katalog online serupa?<b>+</b>
            </summary>
            <p>
              Pasti bisa! Ini adalah portfolio concept demo project karya Naltech Studio. Kami membantu produsen makanan lokal, UMKM kuliner, dan brand oleh-oleh memiliki landing page modern dengan katalog belanja cepat dan sistem pendaftaran reseller terintegrasi WhatsApp.
            </p>
          </details>
        </div>
      </section>

      {/* Section 08: Final CTA */}
      <section className="rns-final-cta-section rns-wrap">
        <div className="rns-final-cta-card">
          <div className="rns-cta-glow" />
          <div className="rns-final-cta-inner">
            <span className="rns-cta-tag">CITA RASA AUTENTIK NUSANTARA</span>
            <h2>
              Siap menikmati kelezatan kuliner khas daerah<br />
              atau <em>memulai bisnis reseller Anda hari ini?</em>
            </h2>
            <p>
              Pesan camilan favorit Anda sekarang atau konsultasikan paket kemitraan reseller bersama tim Rasa Nusantara.
            </p>
            <div className="rns-cta-actions">
              <a href="#katalog" className="rns-btn-cta-primary">
                <ShoppingBag size={18} />
                <span>Belanja Produk Sekarang</span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://wa.me/6281573550017?text=Halo%20Rasa%20Nusantara%2C%20saya%20ingin%20konsultasi%20paket%20reseller."
                target="_blank"
                rel="noreferrer"
                className="rns-btn-cta-secondary"
              >
                <MessageCircle size={18} />
                <span>Konsultasi Reseller via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="rns-footer rns-wrap">
        <div className="rns-footer-grid">
          <div className="rns-footer-col brand">
            <a className="rns-logo" href="#top">
              <span className="rns-logo-icon">
                <Flame size={20} />
              </span>
              <span className="rns-logo-text">
                RASA<strong>NUSANTARA</strong> <small>KULINER LOKAL &amp; OLEH-OLEH</small>
              </span>
            </a>
            <p>
              Cita rasa lokal yang selalu dirindukan. Makanan khas daerah autentik dan peluang kemitraan reseller terpercaya. Concept project by Naltech Studio.
            </p>
          </div>

          <div className="rns-footer-col">
            <strong>Kategori Produk</strong>
            <a href="#katalog">Camilan Keripik Gurih</a>
            <a href="#katalog">Aneka Sambal Kemasan</a>
            <a href="#katalog">Lauk Siap Saji (Rendang &amp; Abon)</a>
            <a href="#bundling">Hampers &amp; Oleh-Oleh</a>
          </div>

          <div className="rns-footer-col">
            <strong>Program Kemitraan</strong>
            <a href="#reseller">Paket Reseller Starter (Rp500K)</a>
            <a href="#reseller">Paket Reseller Silver (Rp1.5M)</a>
            <a href="#reseller">Paket Agen Gold (Rp3.0M)</a>
            <a href="#simulasi">Kalkulator Simulasi Laba</a>
          </div>

          <div className="rns-footer-col">
            <strong>Rumah Produksi &amp; Kontak</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="rns-address">Jakarta / Pengiriman ke Seluruh Indonesia</p>
          </div>
        </div>

        <div className="rns-footer-bottom">
          <small>
            © 2026 Rasa Nusantara · Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Cita Rasa Lokal, Siap Dinikmati di Mana Saja · Food-Grade Certified</span>
        </div>
      </footer>
    </main>
  );
}
