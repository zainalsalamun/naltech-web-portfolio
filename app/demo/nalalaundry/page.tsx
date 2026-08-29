import type { Metadata } from 'next';
import Link from 'next/link';
import './nalalaundry.css';
import LaundryProcessReel from './LaundryProcessReel';
import LaundryPriceCalculator from './LaundryPriceCalculator';
import {
  Sparkles,
  Shirt,
  ShieldCheck,
  Truck,
  Star,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  Waves,
  Tag,
  Flame,
  PackageCheck,
  MessageCircle,
  Phone,
  Award,
  Zap,
  MapPin,
  HeartHandshake,
  BadgePercent,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'NalaLaundry — Jasa Laundry Premium & Antar Jemput Gratis by Naltech',
  description: 'Layanan laundry kiloan & satuan premium dengan 1 mesin 1 pelanggan, sterilisasi UV-C, parfum microcapsule tahan 14 hari, dan antar-jemput gratis ke depan pintu rumah Anda.',
  alternates: {
    canonical: '/demo/nalalaundry',
  },
  openGraph: {
    title: 'NalaLaundry — Jasa Laundry Premium & Antar Jemput Gratis by Naltech',
    description: 'Pakaian bersih higienis & wangi tahan 14 hari, antar-jemput gratis ke depan pintu.',
    images: [{ url: `${siteUrl}/laundry/hero-laundry.jpg`, width: 1200, height: 630, alt: 'NalaLaundry Premium Laundry Service' }],
  },
  twitter: {
    title: 'NalaLaundry — Jasa Laundry Premium & Antar Jemput Gratis by Naltech',
    description: 'Pakaian bersih higienis & wangi tahan 14 hari, antar-jemput gratis ke depan pintu.',
    images: [`${siteUrl}/laundry/hero-laundry.jpg`],
  },
};

const laundryStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'DryCleaningOrLaundry',
    name: 'NalaLaundry (Concept by Naltech)',
    description: 'Jasa laundry kiloan dan satuan premium dengan antar jemput gratis karya Naltech Studio.',
    url: `${siteUrl}/demo/nalalaundry`,
    image: `${siteUrl}/laundry/hero-laundry.jpg`,
    priceRange: 'Rp8.000 - Rp65.000',
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
        name: 'NalaLaundry',
        item: `${siteUrl}/demo/nalalaundry`,
      },
    ],
  },
];

export default function NalaLaundryPage() {
  return (
    <main className="nly-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(laundryStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="nly-promo-ribbon">
        <div className="nly-wrap nly-ribbon-content">
          <span className="nly-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO PELANGGAN BARU 2026</span>
          </span>
          <p>
            Diskon <strong>30% Laundry Kiloan Pertama</strong> + Gratis Antar Jemput ke Rumah pakai kode: <code>NALACUCI</code>
          </p>
          <a href="#kalkulator" className="nly-ribbon-link">
            <span>Klaim Diskon</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="nly-demo-bar">
        <div className="nly-wrap nly-demo-inner">
          <Link href="/" className="nly-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="nly-header">
        <div className="nly-wrap nly-header-inner">
          <a className="nly-logo" href="#top">
            <span className="nly-logo-icon">
              <Shirt size={22} />
            </span>
            <span className="nly-logo-text">
              NALA<strong>LAUNDRY</strong> <small>PREMIUM CARE</small>
            </span>
          </a>

          <nav className="nly-nav" aria-label="Navigasi NalaLaundry">
            <a href="#kelebihan">Kelebihan</a>
            <a href="#proses-video">Video Proses</a>
            <a href="#daftar-harga">Daftar Harga</a>
            <a href="#promo">Promo</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nly-header-actions">
            <a
              href="https://wa.me/6281573550017?text=Halo%20NalaLaundry%2C%20saya%20ingin%20jadwalkan%20penjemputan%20laundry%20ke%20rumah."
              target="_blank"
              rel="noreferrer"
              className="nly-btn-header-wa"
            >
              <MessageCircle size={15} />
              <span>Chat CS Antar Jemput</span>
            </a>
            <a href="#daftar-harga" className="nly-btn-header-cta">
              <Truck size={15} />
              <span>Pesan Antar Jemput</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="nly-hero">
        <div className="nly-wrap">
          <div className="nly-hero-grid">
            <div className="nly-hero-copy">
              <div className="nly-hero-tag">
                <ShieldCheck size={14} className="nly-icon-aqua" />
                <span>1 MESIN 1 PELANGGAN · HIGIENIS &amp; ANTI TERTUKAR</span>
              </div>

              <h1>
                Pakaian bersih higienis &amp; wangi tahan 14 hari,<br />
                layanan antar-jemput <em>gratis ke depan pintumu.</em>
              </h1>

              <p className="nly-hero-sub">
                Solusi laundry kiloan dan satuan premium tanpa repot keluar rumah. Kami merawat setiap helai pakaian Anda dengan mesin cuci standar perhotelan, deterjen enzim ramah lingkungan, setrika uap boiler, dan sterilisasi UV-C.
              </p>

              <div className="nly-hero-actions">
                <a
                  href="https://wa.me/6281573550017?text=Halo%20NalaLaundry%2C%20saya%20ingin%20jadwalkan%20penjemputan%20laundry%20sekarang."
                  target="_blank"
                  rel="noreferrer"
                  className="nly-btn-hero-primary"
                >
                  <Truck size={17} />
                  <span>Pesan Antar Jemput Gratis</span>
                  <ArrowUpRight size={17} />
                </a>

                <a href="#daftar-harga" className="nly-btn-hero-secondary">
                  <span>Lihat Daftar Harga</span>
                </a>
              </div>

              <div className="nly-hero-trust-row">
                <div className="nly-trust-pill">
                  <CheckCircle2 size={15} className="nly-icon-aqua" />
                  <span>Garansi Cuci Ulang 100%</span>
                </div>
                <div className="nly-trust-pill">
                  <Clock size={15} className="nly-icon-aqua" />
                  <span>Express 6 Jam &amp; Reguler 24 Jam</span>
                </div>
                <div className="nly-trust-pill">
                  <Sparkles size={15} className="nly-icon-aqua" />
                  <span>Parfum Microcapsule 14 Hari</span>
                </div>
              </div>
            </div>

            <div className="nly-hero-visual-card">
              <img src="/laundry/hero-laundry.jpg" alt="Pakaian Bersih Rapi NalaLaundry" />
              <div className="nly-hero-top-badge">
                <ShieldCheck size={15} className="nly-icon-green" />
                <span>1 Mesin 1 Pelanggan · Sterilisasi UV-C 99.9%</span>
              </div>
              <div className="nly-hero-floating-stat">
                <Sparkles size={20} className="nly-icon-aqua" />
                <div>
                  <strong>100.000+ Helai Pakaian Bersih &amp; Rapi</strong>
                  <small>Dipercaya 15.000+ Keluarga, Dokter, &amp; Profesional</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Kelebihan Layanan (Why Choose Us) */}
      <section id="kelebihan" className="nly-advantages-section nly-wrap">
        <header className="nly-section-head center">
          <span className="nly-badge-tag">01 · KELEBIHAN LAYANAN KAMI</span>
          <h2>Mengapa ribuan pelanggan setia<br />mempercayakan pakaiannya pada <em>NalaLaundry?</em></h2>
          <p>
            Komitmen kami adalah memberikan standar kebersihan terbaik tanpa kompromi pada kualitas serat pakaian Anda.
          </p>
        </header>

        <div className="nly-advantages-grid">
          <div className="nly-adv-card">
            <div className="nly-adv-icon">
              <Truck size={26} />
            </div>
            <h3>Antar-Jemput Gratis ke Rumah</h3>
            <p>Kurir kami siap menjemput dan mengantar pakaian langsung ke depan pintu rumah, apartemen, atau kantor Anda tanpa biaya tambahan.</p>
          </div>

          <div className="nly-adv-card">
            <div className="nly-adv-icon">
              <ShieldCheck size={26} />
            </div>
            <h3>1 Mesin Khusus 1 Pelanggan</h3>
            <p>Pakaian Anda tidak pernah dicampur dengan pakaian orang lain. Mencegah risiko penularan kuman, kotoran, dan pakaian tertukar.</p>
          </div>

          <div className="nly-adv-card">
            <div className="nly-adv-icon">
              <Sparkles size={26} />
            </div>
            <h3>Parfum Microcapsule 14 Hari</h3>
            <p>Keharuman mewah standar parfum perancis yang melekat pada serat kain dan tetap harum tahan lama meski disimpan di lemari 14 hari.</p>
          </div>

          <div className="nly-adv-card">
            <div className="nly-adv-icon">
              <Waves size={26} />
            </div>
            <h3>Sterilisasi Ozon &amp; UV-C 99.9%</h3>
            <p>Dilengkapi teknologi desinfeksi ozon dan sinar ultraviolet untuk membasmi 99.9% bakteri, virus, dan tungau penyebab alergi kulit.</p>
          </div>
        </div>
      </section>

      {/* Section 02: Video Singkat Proses Pelayanan Laundry */}
      <section id="proses-video" className="nly-process-section">
        <div className="nly-wrap">
          <header className="nly-section-head center">
            <span className="nly-badge-tag">02 · TRANSPARANSI KUALITAS</span>
            <h2>Lihat bagaimana kami merawat pakaianmu<br />lewat <em>cuplikan video proses higienis.</em></h2>
            <p>
              Setiap langkah dari penimbangan hingga pengantaran dilakukan dengan SOP ketat dan teknologi modern.
            </p>
          </header>

          <LaundryProcessReel />
        </div>
      </section>

      {/* Section 03: Banner Promo Spesial */}
      <section id="promo" className="nly-promo-section nly-wrap">
        <div className="nly-promo-banner-card">
          <div className="nly-promo-glow" />
          <div className="nly-promo-copy">
            <span className="nly-promo-kicker">
              <BadgePercent size={14} /> PROMO SPESIAL BULAN INI
            </span>
            <h2>Diskon 30% Laundry Kiloan Pertama &amp; Gratis Ongkir</h2>
            <p>
              Coba layanan NalaLaundry hari ini dan rasakan bedanya pakaian yang dicuci dengan standar higienis bintang lima. Masukkan kode voucher <code>NALACUCI</code> saat memesan via WhatsApp.
            </p>
            <div className="nly-promo-actions">
              <a
                href="https://wa.me/6281573550017?text=Halo%20NalaLaundry%2C%20saya%20ingin%20klaim%20promo%20diskon%2030%25%20kode%20NALACUCI%20untuk%20antar%20jemput."
                target="_blank"
                rel="noreferrer"
                className="nly-btn-claim-promo"
              >
                <Sparkles size={16} />
                <span>Klaim Promo via WhatsApp</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Daftar Harga & Kalkulator Biaya */}
      <section id="daftar-harga" className="nly-pricing-section nly-wrap">
        <header className="nly-section-head center">
          <span className="nly-badge-tag">04 · DAFTAR HARGA TRANSPARAN</span>
          <h2>Tarif bersahabat dengan kualitas<br />perawatan <em>pakaian kelas premium.</em></h2>
          <p>
            Tanpa biaya tersembunyi. Sudah termasuk deterjen ramah lingkungan, pelembut kain, setrika uap, dan plastik pelindung.
          </p>
        </header>

        <LaundryPriceCalculator />
      </section>

      {/* Section 05: Testimoni Konsumen dengan Foto Asli */}
      <section id="testimoni" className="nly-reviews-section nly-wrap">
        <header className="nly-section-head center">
          <span className="nly-badge-tag">05 · KEPERCAYAAN PELANGGAN</span>
          <h2>Apa kata mereka yang telah rutin<br />berlangganan di <em>NalaLaundry?</em></h2>
          <p>
            Ulasan jujur dari ibu rumah tangga, tenaga medis, hingga eksekutif profesional.
          </p>
        </header>

        <div className="nly-reviews-grid">
          <div className="nly-review-item-card">
            <div className="nly-reviewer-head">
              <div className="nly-reviewer-avatar">
                <img src="/laundry/customer-1.jpg" alt="dr. Shinta Paramitha" />
              </div>
              <div>
                <strong>dr. Shinta Paramitha</strong>
                <small>Dokter Spesialis · Pelanggan Laundry Kiloan &amp; Jas Lab</small>
              </div>
            </div>
            <div className="nly-rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#0284C7" color="#0284C7" />
              ))}
            </div>
            <blockquote className="nly-review-text">
              &ldquo;Sebagai tenaga medis, faktor higienitas pakaian sangat krusial. NalaLaundry menjamin 1 mesin 1 pelanggan dengan sterilisasi UV-C. Jas lab dan pakaian harian saya selalu steril, bersih, dan harum lembut tanpa bau apek.&rdquo;
            </blockquote>
            <div className="nly-review-verified">
              <CheckCircle2 size={13} className="nly-icon-aqua" />
              <span>Pelanggan Terverifikasi · Sejak 2024</span>
            </div>
          </div>

          <div className="nly-review-item-card">
            <div className="nly-reviewer-head">
              <div className="nly-reviewer-avatar">
                <img src="/laundry/customer-3.jpg" alt="Andri Gunawan" />
              </div>
              <div>
                <strong>Andri Gunawan</strong>
                <small>Senior Product Manager · Pelanggan Kemeja &amp; Jas</small>
              </div>
            </div>
            <div className="nly-rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#0284C7" color="#0284C7" />
              ))}
            </div>
            <blockquote className="nly-review-text">
              &ldquo;Sangat membantu buat saya yang sibuk meeting. Kurirnya on-time jemput di lobby apartemen, setrika uapnya rapi tanpa lipatan kusut, dan wanginya beneran awet sampai seminggu lebih di lemari kerja.&rdquo;
            </blockquote>
            <div className="nly-review-verified">
              <CheckCircle2 size={13} className="nly-icon-aqua" />
              <span>Pelanggan Terverifikasi · Sejak 2025</span>
            </div>
          </div>

          <div className="nly-review-item-card">
            <div className="nly-reviewer-head">
              <div className="nly-reviewer-avatar">
                <img src="/laundry/customer-2.jpg" alt="Ratna Dewi Wulandari" />
              </div>
              <div>
                <strong>Ratna Dewi Wulandari</strong>
                <small>Ibu Rumah Tangga · Pelanggan Bedcover &amp; Pakaian Keluarga</small>
              </div>
            </div>
            <div className="nly-rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#0284C7" color="#0284C7" />
              ))}
            </div>
            <blockquote className="nly-review-text">
              &ldquo;Sudah langganan untuk bedcover jumbo dan baju harian keluarga. Harganya sangat bersahabat, nggak pernah ada baju luntur atau tertukar, dan pengemasan plastiknya tebal serta rapi banget.&rdquo;
            </blockquote>
            <div className="nly-review-verified">
              <CheckCircle2 size={13} className="nly-icon-aqua" />
              <span>Pelanggan Terverifikasi · Sejak 2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06: FAQ */}
      <section id="faq" className="nly-faq-section nly-wrap">
        <header className="nly-section-head">
          <div>
            <span className="nly-badge-tag">06 · PERTANYAAN UMUM</span>
            <h2>Semua hal yang sering ditanyakan<br /><em>seputar layanan NalaLaundry.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaLaundry%2C%20saya%20ada%20pertanyaan%20seputar%20laundry."
            target="_blank"
            rel="noreferrer"
            className="nly-link-more"
          >
            <span>Tanya Customer Service via WA ↗</span>
          </a>
        </header>

        <div className="nly-faq-list">
          <details open>
            <summary>
              <span>01</span> Bagaimana cara memesan layanan antar-jemput laundry?<b>+</b>
            </summary>
            <p>
              Cukup klik tombol pesan antar-jemput WhatsApp, kirimkan alamat lengkap dan perkiraan berat pakaian Anda. Kurir kami akan datang menjemput sesuai jadwal yang Anda pilih.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Berapa batas minimal order untuk mendapatkan gratis ongkir?<b>+</b>
            </summary>
            <p>
              Gratis antar-jemput berlaku untuk pemesanan minimal 5 kg (atau total transaksi minimal Rp40.000) dengan radius pengantaran hingga 7 km dari workshop kami.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah pakaian saya dijamin tidak akan tertukar atau luntur?<b>+</b>
            </summary>
            <p>
              Ya, 100% terjamin! Kami menerapkan sistem <strong>1 Mesin 1 Pelanggan</strong> dengan tagging barcode digital di setiap keranjang cuci. Pakaian berwarna terang dan gelap juga dipisahkan secara teliti.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech Studio membuatkan website jasa laundry / usaha jasa lokal seperti NalaLaundry?<b>+</b>
            </summary>
            <p>
              Sangat bisa! Ini adalah concept demo project dari Naltech Studio. Kami merancang website usaha laundry, dry clean, jasa antar-jemput lokal, kalkulator harga interaktif, dan integrasi WhatsApp ordering yang cepat dan efektif.
            </p>
          </details>
        </div>
      </section>

      {/* Section 07: Final CTA */}
      <section className="nly-cta-section nly-wrap">
        <div className="nly-cta-card">
          <div className="nly-cta-glow" />
          <div className="nly-cta-inner">
            <span className="nly-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Ingin memiliki website usaha laundry &amp; jasa lokal<br />
              sekelas <em>NalaLaundry?</em>
            </h2>
            <p>
              Naltech membantu pengusaha laundry, dry cleaning atelier, dan bisnis jasa harian menghadirkan landing page profesional berkonversi tinggi dengan kalkulator harga otomatis dan integrasi WhatsApp instan.
            </p>
            <div className="nly-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20usaha%20laundry%20atau%20jasa%20seperti%20NalaLaundry."
                target="_blank"
                rel="noreferrer"
                className="nly-btn-primary"
              >
                <MessageCircle size={17} />
                <span>Konsultasi Project Website Jasa Laundry</span>
                <ArrowUpRight size={17} />
              </a>
              <Link href="/" className="nly-btn-secondary">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="nly-footer nly-wrap">
        <div className="nly-footer-grid">
          <div className="nly-footer-col brand">
            <a className="nly-logo" href="#top">
              <span className="nly-logo-icon">
                <Shirt size={20} />
              </span>
              <span className="nly-logo-text">
                NALA<strong>LAUNDRY</strong> <small>PREMIUM CARE</small>
              </span>
            </a>
            <p>
              Layanan laundry kiloan dan satuan premium dengan antar jemput gratis. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="nly-footer-col">
            <strong>Layanan Kami</strong>
            <a href="#daftar-harga">Laundry Kiloan Komplit</a>
            <a href="#daftar-harga">Laundry Satuan &amp; Jas</a>
            <a href="#daftar-harga">Bedcover &amp; Selimut</a>
            <a href="#daftar-harga">Deep Clean Sepatu &amp; Tas</a>
          </div>

          <div className="nly-footer-col">
            <strong>Keunggulan</strong>
            <a href="#kelebihan">1 Mesin 1 Pelanggan</a>
            <a href="#proses-video">Sterilisasi UV-C &amp; Ozon</a>
            <a href="#kelebihan">Parfum Tahan 14 Hari</a>
            <a href="#kalkulator">Kalkulator Biaya Laundry</a>
          </div>

          <div className="nly-footer-col">
            <strong>Pengembang Studio</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="nly-address">Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="nly-footer-bottom">
          <small>
            © 2026 NalaLaundry · Laundry Service Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Garansi 100% Bersih Higienis, Rapi, &amp; Wangi Tahan Lama</span>
        </div>
      </footer>
    </main>
  );
}
