import type { Metadata } from 'next';
import Link from 'next/link';
import './laundro.css';
import LaundroInteractiveCalculator from './LaundroInteractiveCalculator';
import {
  Truck,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Shirt,
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Flame,
  Waves,
  Zap,
  Phone,
  Star,
  Layers,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'Laundro — Laundry Bersih Tanpa Keluar Rumah | Antar Jemput Gratis',
  description: 'Kami jemput pakaian Anda, cuci higienis, keringkan, setrika uap, dan antar kembali ke rumah. Layanan laundry on-demand terbaik untuk mahasiswa, pekerja kantoran, dan keluarga.',
  alternates: {
    canonical: '/demo/laundro',
  },
  openGraph: {
    title: 'Laundro — Laundry Bersih Tanpa Keluar Rumah',
    description: 'Kami jemput pakaian Anda, cuci, keringkan, dan antar kembali ke rumah. Pesan jemput via WhatsApp.',
    images: [{ url: `${siteUrl}/laundro/hero-laundro.jpg`, width: 1200, height: 630, alt: 'Laundro Laundry & Pickup' }],
  },
  twitter: {
    title: 'Laundro — Laundry Bersih Tanpa Keluar Rumah',
    description: 'Kami jemput pakaian Anda, cuci, keringkan, dan antar kembali ke rumah.',
    images: [`${siteUrl}/laundro/hero-laundro.jpg`],
  },
};

const laundroStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'DryCleaningOrLaundry',
    name: 'Laundro (Concept by Naltech)',
    description: 'Layanan on-demand laundry dan jemput antar pakaian karya Naltech Studio.',
    url: `${siteUrl}/demo/laundro`,
    image: `${siteUrl}/laundro/hero-laundro.jpg`,
    priceRange: 'Rp7.000 - Rp25.000',
    areaServed: 'Jakarta Selatan',
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
        name: 'Laundro',
        item: `${siteUrl}/demo/laundro`,
      },
    ],
  },
];

export default function LaundroPage() {
  return (
    <main className="ld-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(laundroStructuredData) }}
      />

      {/* Top Demo Bar */}
      <div className="ld-demo-bar">
        <div className="ld-wrap ld-demo-inner">
          <Link href="/" className="ld-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Header */}
      <header className="ld-header">
        <div className="ld-wrap ld-header-inner">
          <a className="ld-logo" href="#top">
            <span className="ld-logo-icon">
              <Shirt size={22} />
            </span>
            <span className="ld-logo-text">
              LAUND<strong>RO</strong> <small>PICKUP &amp; DELIVERY</small>
            </span>
          </a>

          <nav className="ld-nav" aria-label="Navigasi Laundro">
            <a href="#masalah">Masalah</a>
            <a href="#cara-kerja">Cara Kerja</a>
            <a href="#harga">Harga</a>
            <a href="#kalkulator">Kalkulator</a>
            <a href="#kenapa-kami">Kenapa Kami</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#area-layanan">Area Layanan</a>
          </nav>

          <div className="ld-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20Laundro%2C%20saya%20ingin%20pesan%20jemput%20laundry%20hari%20ini."
              target="_blank"
              rel="noreferrer"
              className="ld-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Chat WhatsApp</span>
            </a>
            <a href="#kalkulator" className="ld-btn-header-cta">
              <Truck size={15} />
              <span>Jemput Sekarang</span>
            </a>
          </div>
        </div>
      </header>

      {/* Section 1: Hero */}
      <section id="top" className="ld-hero">
        <div className="ld-wrap">
          <div className="ld-hero-grid">
            <div className="ld-hero-copy">
              <div className="ld-hero-tag">
                <Truck size={14} className="ld-icon-cyan" />
                <span>LAUNDRY ON-DEMAND · GRATIS JEMPUT ANTAR</span>
              </div>

              <h1>
                Laundry Bersih Tanpa Keluar Rumah.
              </h1>

              <p className="ld-hero-sub">
                Kami jemput pakaian Anda, cuci, keringkan, setrika uap rapi, dan antar kembali ke rumah. Solusi praktis untuk mahasiswa, pekerja kantoran, dan keluarga sibuk.
              </p>

              <div className="ld-hero-actions">
                <a href="#kalkulator" className="ld-btn-hero-primary">
                  <Truck size={17} />
                  <span>Jemput Laundry Sekarang</span>
                  <ArrowUpRight size={17} />
                </a>

                <a href="#harga" className="ld-btn-hero-secondary">
                  <span>Lihat Harga</span>
                </a>
              </div>

              <div className="ld-hero-trust-row">
                <div className="ld-trust-item">
                  <CheckCircle2 size={15} className="ld-icon-cyan" />
                  <span>Gratis Antar Jemput</span>
                </div>
                <div className="ld-trust-item">
                  <Clock size={15} className="ld-icon-cyan" />
                  <span>Bisa Same Day (6 Jam)</span>
                </div>
                <div className="ld-trust-item">
                  <ShieldCheck size={15} className="ld-icon-cyan" />
                  <span>1 Mesin 1 Pelanggan</span>
                </div>
              </div>
            </div>

            <div className="ld-hero-visual">
              <img src="/laundro/hero-laundro.jpg" alt="Pakaian Bersih Rapi Laundro" />
              <div className="ld-hero-floating-badge">
                <Sparkles size={20} className="ld-icon-cyan" />
                <div>
                  <strong>Jemput di Depan Pintu Kos &amp; Rumah</strong>
                  <small>Tinggal WhatsApp, Kurir Tiba Tepat Waktu</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Masalah (Customer Pain Points) */}
      <section id="masalah" className="ld-problem-section ld-wrap">
        <header className="ld-section-head center">
          <span className="ld-badge-tag">SECTION 02 · PROBLEM</span>
          <h2>Sibuk kerja? Kuliah?<br /><em>Cucian menumpuk?</em></h2>
          <p>
            Menghabiskan waktu berharga di akhir pekan hanya untuk mencuci dan menyetrika pakaian bukan lagi pilihan yang menyenangkan.
          </p>
        </header>

        <div className="ld-problem-grid">
          <div className="ld-problem-card">
            <div className="ld-problem-icon">
              <Clock size={24} />
            </div>
            <h3>Tidak Punya Waktu</h3>
            <p>
              Jadwal kuliah padat, tugas menumpuk, atau lembur kerja seharian membuat Anda terlalu lelah untuk mencuci pakaian sendiri.
            </p>
          </div>

          <div className="ld-problem-card">
            <div className="ld-problem-icon">
              <Shirt size={24} />
            </div>
            <h3>Cucian Menumpuk</h3>
            <p>
              Pakaian kotor menggunung di keranjang kos atau sudut kamar, membuat ruangan terasa sumpek dan pakaian bersih cepat habis.
            </p>
          </div>

          <div className="ld-problem-card">
            <div className="ld-problem-icon">
              <AlertCircle size={24} />
            </div>
            <h3>Harus Keluar Rumah</h3>
            <p>
              Macet di jalan, cuaca hujan, dan repot harus membawa kantong pakaian berat ke tempat laundry konvensional.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Solusi & Cara Kerja */}
      <section id="cara-kerja" className="ld-how-it-works-section">
        <div className="ld-wrap">
          <header className="ld-section-head center">
            <span className="ld-badge-tag">SECTION 03 · CARA KERJA</span>
            <h2>4 Langkah praktis laundry<br /><em>tanpa perlu melangkah keluar pintu.</em></h2>
            <p>
              Cukup pesan lewat WhatsApp atau form website, kami urus seluruh proses pencucian dari awal hingga akhir.
            </p>
          </header>

          <div className="ld-steps-grid">
            <div className="ld-step-item">
              <div className="ld-step-number">01</div>
              <h3>Pesan</h3>
              <p>Pilih paket layanan dan tentukan jam penjemputan sesuai jadwal luang Anda melalui WhatsApp / website.</p>
            </div>

            <div className="ld-step-item">
              <div className="ld-step-number">02</div>
              <h3>Kami Jemput</h3>
              <p>Kurir ramah kami langsung meluncur ke kos, rumah, atau apartemen Anda untuk menimbang pakaian secara transparan.</p>
            </div>

            <div className="ld-step-item">
              <div className="ld-step-number">03</div>
              <h3>Kami Cuci</h3>
              <p>Pakaian diproses dengan sistem 1 mesin 1 pelanggan, deterjen ramah serat, setrika uap, dan sterilisasi wangi.</p>
            </div>

            <div className="ld-step-item">
              <div className="ld-step-number">04</div>
              <h3>Kami Antar</h3>
              <p>Pakaian yang sudah bersih, wangi, dan rapi kami antar kembali tepat waktu langsung ke depan pintu Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Harga & Estimasi Biaya (Interactive Laundry Calculator) */}
      <section id="harga" className="ld-pricing-section ld-wrap">
        <header className="ld-section-head center">
          <span className="ld-badge-tag">SECTION 04 · DAFTAR HARGA</span>
          <h2>Tarif transparan kiloan &amp; satuan<br /><em>lengkap dengan simulasi biaya.</em></h2>
          <p>
            Tanpa biaya tersembunyi. Termasuk deterjen ramah lingkungan, setrika uap, parfum microcapsule, dan plastik pelindung.
          </p>
        </header>

        <LaundroInteractiveCalculator />
      </section>

      {/* Section 5: Kenapa Kami? (6 Keunggulan) */}
      <section id="kenapa-kami" className="ld-advantages-section ld-wrap">
        <header className="ld-section-head center">
          <span className="ld-badge-tag">SECTION 05 · KENAPA KAMI?</span>
          <h2>Standar kualitas yang membuat ribuan<br />pelanggan <em>nyaman mempercayakan pakaiannya.</em></h2>
        </header>

        <div className="ld-adv-grid-6">
          <div className="ld-adv-box">
            <div className="ld-adv-icon-wrap">
              <Truck size={22} />
            </div>
            <h4>Gratis Pickup</h4>
            <p>Kurir menjemput dan mengantar pakaian tanpa biaya tambahan untuk seluruh area layanan kami.</p>
          </div>

          <div className="ld-adv-box">
            <div className="ld-adv-icon-wrap">
              <Zap size={22} />
            </div>
            <h4>Bisa Same Day</h4>
            <p>Layanan Express 6 jam selesai untuk pakaian yang harus segera digunakan hari ini juga.</p>
          </div>

          <div className="ld-adv-box">
            <div className="ld-adv-icon-wrap">
              <Sparkles size={22} />
            </div>
            <h4>Harga Transparan</h4>
            <p>Ditimbang secara akurat di depan Anda tanpa ada biaya tersembunyi atau mark-up tidak jelas.</p>
          </div>

          <div className="ld-adv-box">
            <div className="ld-adv-icon-wrap">
              <ShieldCheck size={22} />
            </div>
            <h4>Pakaian Dipisahkan</h4>
            <p>1 Mesin khusus untuk 1 pelanggan. Tidak pernah dicampur untuk menjaga higienitas dan anti tertukar.</p>
          </div>

          <div className="ld-adv-box">
            <div className="ld-adv-icon-wrap">
              <Phone size={22} />
            </div>
            <h4>Tracking Pesanan</h4>
            <p>Dapatkan update real-time mulai dari saat dijemput, sedang dicuci, hingga kurir menuju tempat Anda.</p>
          </div>

          <div className="ld-adv-box">
            <div className="ld-adv-icon-wrap">
              <CheckCircle2 size={22} />
            </div>
            <h4>Garansi Cucian</h4>
            <p>Garansi 100% cuci ulang gratis tanpa debat jika ada noda tertinggal atau cucian kurang wangi.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Testimoni Konsumen */}
      <section id="testimoni" className="ld-reviews-section">
        <div className="ld-wrap">
          <header className="ld-section-head center">
            <span className="ld-badge-tag">SECTION 06 · TESTIMONIAL</span>
            <h2>Pengalaman nyata dari mereka yang<br /><em>sudah bebas dari drama mencuci.</em></h2>
          </header>

          <div className="ld-reviews-grid">
            <div className="ld-review-card featured">
              <div className="ld-review-quote-mark">&ldquo;</div>
              <p className="ld-review-main-text">
                &ldquo;Biasanya harus keluar kos untuk laundry. Sekarang tinggal WhatsApp, langsung dijemput. Setrika uapnya rapi banget dan wanginya awet seminggu di lemari.&rdquo;
              </p>
              <div className="ld-reviewer-profile">
                <img src="/laundro/customer-kos.jpg" alt="Anissa Putri" />
                <div>
                  <strong>Anissa Putri</strong>
                  <small>Mahasiswi Tebet · Pelanggan Rutin Kiloan</small>
                </div>
              </div>
            </div>

            <div className="ld-review-card">
              <div className="ld-rating-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#06b6d4" color="#06b6d4" />
                ))}
              </div>
              <p className="ld-review-sub-text">
                &ldquo;Sangat ngebantu buat pekerja SCBD yang pulang malam. Paket express 6 jam beneran kilat dan kurirnya sopan banget pas jemput di lobby apartemen.&rdquo;
              </p>
              <div className="ld-reviewer-mini">
                <strong>Dimas Prasetyo</strong>
                <small>Software Engineer · Apartemen Kuningan</small>
              </div>
            </div>

            <div className="ld-review-card">
              <div className="ld-rating-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#06b6d4" color="#06b6d4" />
                ))}
              </div>
              <p className="ld-review-sub-text">
                &ldquo;Bedcover jumbo keluarga selalu dicuci di Laundro. Hasilnya empuk, harum segar, dan plastik packagingnya tebal kedap udara.&rdquo;
              </p>
              <div className="ld-reviewer-mini">
                <strong>Ibu Maya Herlina</strong>
                <small>Ibu Rumah Tangga · Kemang Pratama</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Area Layanan (Jakarta Selatan) */}
      <section id="area-layanan" className="ld-coverage-section ld-wrap">
        <div className="ld-coverage-box">
          <div className="ld-coverage-copy">
            <span className="ld-badge-tag">SECTION 07 · AREA LAYANAN</span>
            <h2>Siap jemput di seluruh area<br /><em>Jakarta Selatan &amp; Sekitarnya.</em></h2>
            <p>
              Kurir kami standby setiap hari dari jam 07:00 hingga 21:00 WIB untuk menjemput pakaian kotor Anda.
            </p>

            <div className="ld-coverage-tags-grid">
              {['Kemang', 'Tebet', 'Pancoran', 'Mampang', 'Pasar Minggu', 'Kuningan', 'Fatmawati', 'Kalibata', 'Pejaten', 'Cilandak'].map((area) => (
                <div key={area} className="ld-area-tag">
                  <MapPin size={14} className="ld-icon-cyan" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="ld-coverage-note">
              <HelpCircle size={15} className="ld-icon-cyan" />
              <span>Lokasi Anda di luar daftar? Chat CS WhatsApp kami untuk cek jangkauan kurir.</span>
            </div>
          </div>

          <div className="ld-coverage-map-visual">
            <img src="/laundro/service-washing.jpg" alt="Workshop Laundro Jakarta Selatan" />
            <div className="ld-coverage-floating-badge">
              <Clock size={16} className="ld-icon-cyan" />
              <span>Pickup Cepat: Rata-rata 25 Menit Tiba</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ld-final-cta-section ld-wrap">
        <div className="ld-final-cta-card">
          <div className="ld-cta-glow" />
          <div className="ld-final-cta-inner">
            <span className="ld-cta-tag">JEMPUT SEKARANG</span>
            <h2>
              Cucian menumpuk hari ini?<br />
              <em>Kami jemput sekarang.</em>
            </h2>
            <p>
              Kirimkan alamat dan jumlah pakaian Anda via WhatsApp. Kurir kami segera meluncur ke lokasi Anda.
            </p>
            <div className="ld-cta-actions">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Laundro%2C%20cucian%20saya%20sedang%20menumpuk.%20Bisa%20jemput%20sekarang%3F"
                target="_blank"
                rel="noreferrer"
                className="ld-btn-cta-wa"
              >
                <MessageCircle size={18} />
                <span>Pesan via WhatsApp</span>
                <ArrowUpRight size={18} />
              </a>
              <a href="#kalkulator" className="ld-btn-cta-calc">
                <span>Hitung Estimasi Biaya</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ld-footer ld-wrap">
        <div className="ld-footer-grid">
          <div className="ld-footer-col brand">
            <a className="ld-logo" href="#top">
              <span className="ld-logo-icon">
                <Shirt size={20} />
              </span>
              <span className="ld-logo-text">
                LAUND<strong>RO</strong> <small>PICKUP &amp; DELIVERY</small>
              </span>
            </a>
            <p>
              Layanan on-demand laundry express dengan gratis jemput antar ke depan pintu rumah Anda. Concept demo landing page engineered by Naltech Studio.
            </p>
          </div>

          <div className="ld-footer-col">
            <strong>Layanan</strong>
            <a href="#harga">Cuci Kering (Rp7.000/kg)</a>
            <a href="#harga">Cuci + Setrika (Rp10.000/kg)</a>
            <a href="#harga">Express 6 Jam (Rp15.000/kg)</a>
            <a href="#harga">Bed Cover (Rp25.000)</a>
          </div>

          <div className="ld-footer-col">
            <strong>Area Layanan</strong>
            <a href="#area-layanan">Kemang &amp; Tebet</a>
            <a href="#area-layanan">Pancoran &amp; Mampang</a>
            <a href="#area-layanan">Pasar Minggu &amp; Kuningan</a>
            <a href="#area-layanan">Kalibata &amp; Fatmawati</a>
          </div>

          <div className="ld-footer-col">
            <strong>Pengembang Studio</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="ld-address">Jakarta Selatan, Indonesia</p>
          </div>
        </div>

        <div className="ld-footer-bottom">
          <small>
            © 2026 Laundro · On-Demand Laundry Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Garansi 100% Bersih, Wangi, &amp; Tepat Waktu</span>
        </div>
      </footer>
    </main>
  );
}
