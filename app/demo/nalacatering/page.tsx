import type { Metadata } from 'next';
import Link from 'next/link';
import './nalacatering.css';
import CateringVideoReel from './CateringVideoReel';
import {
  Sparkles,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Utensils,
  Award,
  Star,
  Heart,
  Calendar,
  Clock,
  Wine,
  Gift,
  Users,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'NalaCatering & Décor — Partner Terbaik di Hari Bahagiamu by Naltech',
  description: 'Jasa catering pernikahan rasa bintang 5 dan dekorasi pelaminan mewah terpercaya. Lengkap dengan promo bonus kambing guling, photobooth 360, dan free VIP food tasting dirancang oleh Naltech Studio.',
  alternates: { canonical: '/demo/nalacatering' },
  openGraph: {
    title: 'NalaCatering & Décor — Partner Terbaik di Hari Bahagiamu by Naltech',
    description: 'Jasa catering pernikahan rasa bintang 5 dan dekorasi pelaminan mewah terpercaya.',
    images: [{ url: `${siteUrl}/catering/hero-ballroom.jpg`, width: 1200, height: 630, alt: 'NalaCatering Ballroom Wedding' }],
  },
  twitter: {
    title: 'NalaCatering & Décor — Partner Terbaik di Hari Bahagiamu by Naltech',
    description: 'Jasa catering pernikahan rasa bintang 5 dan dekorasi pelaminan mewah terpercaya.',
    images: [`${siteUrl}/catering/hero-ballroom.jpg`],
  },
};

const cateringStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'NalaCatering & Décor (Concept by Naltech)',
    description: 'Jasa catering pernikahan dan dekorasi acara eksklusif karya Naltech Studio.',
    url: `${siteUrl}/demo/nalacatering`,
    image: `${siteUrl}/catering/hero-ballroom.jpg`,
    servesCuisine: 'Indonesian Wedding Cuisine, International Buffet',
    priceRange: '$$$',
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
        name: 'NalaCatering & Décor',
        item: `${siteUrl}/demo/nalacatering`,
      },
    ],
  },
];

export default function NalaCateringPage() {
  return (
    <main className="nc-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="nc-promo-ribbon">
        <div className="nc-wrap nc-ribbon-content">
          <span className="nc-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO WEDDING SEASON 2026</span>
          </span>
          <p>
            Cashback s.d. <strong>Rp15.000.000</strong> + Bonus 2 Ekor Kambing Guling &amp; Free Photobooth 360 pakai kode <code>NALABAHAGIA</code>
          </p>
          <a href="#paket" className="nc-ribbon-link">
            <span>Klaim Bonus Paket</span>
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
              <Wine size={20} />
            </span>
            <span className="nc-logo-text">
              NALA<strong>CATERING</strong> <small>&amp; DÉCOR</small>
            </span>
          </a>

          <nav className="nc-nav" aria-label="Navigasi Catering & Dekorasi">
            <a href="#kelebihan">Kelebihan Kami</a>
            <a href="#video">Video Acara</a>
            <a href="#paket">Paket &amp; Bonus</a>
            <a href="#galeri">Galeri Dekorasi</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nc-header-actions">
            <a href="tel:+6281573550017" className="nc-btn-phone-header">
              <Phone size={14} />
              <span>+62 815 7355 0017</span>
            </a>
            <a
              href="https://wa.me/6281573550017?text=Halo%20NalaCatering%2C%20saya%20ingin%20jadwalkan%20Free%20Food%20Tasting%20dan%20konsultasi%20paket%20pernikahan."
              target="_blank"
              rel="noreferrer"
              className="nc-btn-wa-header"
            >
              <MessageCircle size={15} />
              <span>Free Food Tasting</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="nc-hero">
        <div className="nc-wrap nc-hero-grid">
          <div className="nc-hero-copy">
            <div className="nc-hero-tag">
              <Sparkles size={14} className="nc-icon-gold" />
              <span>YOUR TRUSTED WEDDING &amp; EVENT ATELIER</span>
            </div>

            <h1>
              Partner terbaik di hari bahagiamu,<br />
              rasa istimewa, <em>dekorasi memesona.</em>
            </h1>

            <p className="nc-hero-sub">
              Mewujudkan pesta pernikahan impian tanpa rasa cemas. Kami memadukan kelezatan kuliner standar hotel bintang 5, kemegahan dekorasi bunga segar, serta manajemen acara berpengalaman yang siap mendampingi setiap detik momen bahagiamu.
            </p>

            {/* Quick Trust Pillars */}
            <div className="nc-hero-trust">
              <div className="nc-trust-item">
                <ShieldCheck size={18} />
                <span>100% Halal MUI &amp; Higienis</span>
              </div>
              <div className="nc-trust-item">
                <Award size={18} />
                <span>500+ Pernikahan Sukses</span>
              </div>
              <div className="nc-trust-item">
                <Utensils size={18} />
                <span>Free Food Tasting 6 Orang</span>
              </div>
            </div>

            <div className="nc-hero-actions">
              <a href="#video" className="nc-btn-primary">
                <Sparkles size={17} />
                <span>Lihat Video Acara &amp; Paket</span>
                <ArrowUpRight size={17} />
              </a>
              <a
                href="https://wa.me/6281573550017?text=Halo%20NalaCatering%2C%20saya%20ingin%20konsultasi%20jadwal%20pernikahan."
                target="_blank"
                rel="noreferrer"
                className="nc-btn-secondary"
              >
                <Phone size={16} />
                <span>Hubungi Wedding Specialist</span>
              </a>
            </div>
          </div>

          {/* Hero Visual: Grand Luxury Ballroom with Flower Arch */}
          <div className="nc-hero-visual">
            <div className="nc-hero-arch">
              <img
                src="/catering/hero-ballroom.jpg"
                alt="Kemegahan Dekorasi Pernikahan NalaCatering & Décor"
              />
              <div className="nc-hero-floating-card">
                <span className="nc-card-label">ALL-IN WEDDING PARTNER</span>
                <strong>Grand Ballroom &amp; Intimate Garden</strong>
                <small>Kapasitas 200 hingga 3.000 Tamu Undangan</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Key Advantages & 5-Star Standards (Kelebihan Layanan) */}
      <section id="kelebihan" className="nc-advantages-section nc-wrap">
        <header className="nc-section-head center">
          <span className="nc-badge-tag">01 · KELEBIHAN &amp; STANDAR PELAYANAN</span>
          <h2>Mengapa kami menjadi partner<br />terbaik di <em>hari bahagiamu?</em></h2>
          <p>
            Kami memahami bahwa pernikahan adalah momen sekali seumur hidup. Standar kesempurnaan rasa dan visual adalah prioritas utama kami.
          </p>
        </header>

        <div className="nc-advantages-grid">
          <div className="nc-advantage-card">
            <div className="nc-adv-icon">
              <Utensils size={24} />
            </div>
            <h3>Cita Rasa Kuliner Bintang 5</h3>
            <p>Diramu oleh Executive Chef berpengalaman dengan bahan baku segar premium. Pilihan menu Nusantara autentik, Western steak carving, hingga Asian delight.</p>
          </div>

          <div className="nc-advantage-card">
            <div className="nc-adv-icon">
              <Sparkles size={24} />
            </div>
            <h3>Dekorasi Mewah Bunga Segar</h3>
            <p>Desain pelaminan spektakuler dengan rangkaian fresh flower grade-A, tata lampu ambient dramatis, dan ornamen mewah yang memukau para tamu.</p>
          </div>

          <div className="nc-advantage-card">
            <div className="nc-adv-icon">
              <Users size={24} />
            </div>
            <h3>Tim Service &amp; WO Profesional</h3>
            <p>Kapten perjamuan dan staf pramusaji berseragam rapi yang sigap mengisi ulang buffet, menjaga kebersihan meja, dan melayani tamu VIP dengan ramah.</p>
          </div>

          <div className="nc-advantage-card">
            <div className="nc-adv-icon">
              <Gift size={24} />
            </div>
            <h3>Bonus Melimpah Tanpa Biaya Tersembunyi</h3>
            <p>Nikmati bonus kambing guling, photobooth 360, dekorasi akad, kamar honeymoon, hingga food tasting gratis untuk keluarga sebelum hari H.</p>
          </div>
        </div>
      </section>

      {/* Section 02: Interactive Short Video Reels & Package Bonus System */}
      <section id="video" className="nc-reels-section-wrap">
        <div className="nc-wrap">
          <CateringVideoReel />
        </div>
      </section>

      {/* Section 03: Gallery Showcase */}
      <section id="galeri" className="nc-gallery-section nc-wrap">
        <header className="nc-section-head">
          <div>
            <span className="nc-badge-tag">03 · DOKUMENTASI VISUAL &amp; KULINER</span>
            <h2>Galeri pelaminan &amp;<br />sajian <em>prasmanan istimewa.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaCatering%2C%20bisa%20kirimkan%20PDF%20Pricelist%20dan%20Galeri%20Lengkap%3F"
            target="_blank"
            rel="noreferrer"
            className="nc-link-more"
          >
            <span>Minta PDF Katalog Lengkap ↗</span>
          </a>
        </header>

        <div className="nc-gallery-grid">
          <article className="nc-gallery-card">
            <img src="/catering/hero-ballroom.jpg" alt="Dekorasi Grand Ballroom" />
            <div className="nc-gallery-caption">
              <strong>Grand Ballroom Flower Arch</strong>
              <small>The Dharmawangsa Hotel · 1.000 Tamu</small>
            </div>
          </article>

          <article className="nc-gallery-card">
            <img src="/catering/buffet-spread.jpg" alt="Buffet Prasmanan Mewah" />
            <div className="nc-gallery-caption">
              <strong>Gourmet Buffet Banquet Spread</strong>
              <small>8 Menu Utama + 6 Food Stalls</small>
            </div>
          </article>

          <article className="nc-gallery-card">
            <img src="/catering/kuliner-station.jpg" alt="Live Cooking Station" />
            <div className="nc-gallery-caption">
              <strong>Live Cooking &amp; Carving Station</strong>
              <small>Roast Beef, Dim Sum &amp; Sate Maranggi</small>
            </div>
          </article>

          <article className="nc-gallery-card">
            <img src="/catering/garden-venue.jpg" alt="Intimate Garden Wedding" />
            <div className="nc-gallery-caption">
              <strong>Intimate Fairy Light Garden</strong>
              <small>Plataran Hutan Kota · 350 Tamu</small>
            </div>
          </article>
        </div>
      </section>

      {/* Section 04: Testimonials */}
      <section id="testimoni" className="nc-reviews-section nc-wrap">
        <div className="nc-review-card">
          <span className="nc-quote-mark">“</span>
          <blockquote>
            Keputusan terbaik kami adalah memilih NalaCatering &amp; Décor! Makanannya dipuji semua keluarga dan tamu, porsi melimpah sampai acara selesai, dan dekorasi pelaminannya bener-bener megah persis seperti 3D visual yang dipresentasikan. Beneran jadi partner terbaik di hari bahagia kami!
          </blockquote>
          <div className="nc-reviewer">
            <div className="nc-rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#C89B7B" color="#C89B7B" />
              ))}
            </div>
            <strong>Aditya &amp; Gabriella</strong>
            <small>Resepsi di Grand Ballroom Pullman · Paket Royal 1.000 Pax</small>
          </div>
        </div>
      </section>

      {/* Section 05: FAQ */}
      <section id="faq" className="nc-faq-section nc-wrap">
        <header className="nc-section-head">
          <div>
            <span className="nc-badge-tag">05 · PERTANYAAN UMUM</span>
            <h2>Semua hal yang ingin kamu<br /><em>ketahui seputar layanan kami.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaCatering%2C%20saya%20ada%20pertanyaan%20seputar%20catering."
            target="_blank"
            rel="noreferrer"
            className="nc-link-more"
          >
            <span>Konsultasi Bebas Biaya ↗</span>
          </a>
        </header>

        <div className="nc-faq-list">
          <details open>
            <summary>
              <span>01</span> Bagaimana cara menjadwalkan VIP Food Tasting sebelum memutuskan pesan?<b>+</b>
            </summary>
            <p>
              Cukup klik tombol &ldquo;Free Food Tasting&rdquo; atau hubungi WhatsApp kami di +62 815 7355 0017. Tim kami akan menyiapkan sesi tester menu untuk 6 orang keluarga secara gratis di kantor NalaCatering atau dikirimkan ke rumah Anda.
            </p>

          </details>

          <details>
            <summary>
              <span>02</span> Apakah tema dekorasi bisa di-custom sesuai keinginan pengantin?<b>+</b>
            </summary>
            <p>
              Tentu saja! Desainer dekorasi kami akan membuatkan sketsa 3D rendering khusus sesuai palet warna, konsep adat/modern, dan dimensi gedung yang Anda pilih sebelum pengerjaan.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Bagaimana jika jumlah tamu bertambah menjelang hari H?<b>+</b>
            </summary>
            <p>
              Penambahan porsi buffet atau stall makanan dapat dilakukan paling lambat H-14 sebelum acara dengan penyesuaian invoice yang transparan.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech Studio membuatkan website pernikahan atau landing page catering untuk bisnis saya?<b>+</b>
            </summary>
            <p>
              Sangat bisa! Ini adalah project demo dari Naltech Studio. Kami membantu vendor pernikahan, catering, wedding organizer, dan hotel membangun website berkelas dengan fitur booking, kalkulator paket, dan showcase video reels.
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
              Ingin memiliki website catering &amp; wedding<br />
              semenawan <em>NalaCatering?</em>
            </h2>
            <p>
              Naltech membantu pemilik usaha wedding organizer, catering bintang 5, dan dekorasi acara menghadirkan website representatif berkonversi tinggi yang memikat calon pengantin.
            </p>
            <div className="nc-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20wedding%20atau%20catering%20seperti%20NalaCatering."
                target="_blank"
                rel="noreferrer"
                className="nc-btn-primary"
              >
                <MessageCircle size={17} />
                <span>Konsultasi Project Website Wedding</span>
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
                <Wine size={18} />
              </span>
              <span className="nc-logo-text">
                NALA<strong>CATERING</strong> <small>&amp; DÉCOR</small>
              </span>
            </a>
            <p>
              Partner pernikahan dan catering terpercaya di Indonesia. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="nc-footer-col">
            <strong>Layanan Kami</strong>
            <a href="#paket">Paket Wedding All-In</a>
            <a href="#galeri">Dekorasi Pelaminan</a>
            <a href="#video">Catering Prasmanan</a>
            <a href="#video">Food Stall Nusantara</a>
            <a href="#paket">Intimate Garden Party</a>
          </div>

          <div className="nc-footer-col">
            <strong>Promo &amp; Informasi</strong>
            <a href="#paket">Klaim Bonus Kambing Guling</a>
            <a href="#kelebihan">Sertifikasi Halal MUI</a>
            <a href="#faq">Panduan Food Tasting</a>
            <a href="#faq">Jadwal Ketersediaan Tanggal</a>
          </div>

          <div className="nc-footer-col">
            <strong>Kontak Langsung</strong>
            <a href="tel:+6281573550017">+62 815 7355 0017 (Call/WA)</a>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <Link href="/">Naltech Studio Portfolio</Link>
            <p className="nc-address">Jakarta &amp; Bandung, Indonesia</p>
          </div>
        </div>

        <div className="nc-footer-bottom">
          <small>
            © 2026 NalaCatering &amp; Décor · Wedding Catering Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>Jakarta · Bandung · Surabaya · Bali</span>
        </div>
      </footer>
    </main>
  );
}
