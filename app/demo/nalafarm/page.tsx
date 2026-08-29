import type { Metadata } from 'next';
import Link from 'next/link';
import './nalafarm.css';
import GlutenFreeProductShowcase from './GlutenFreeProductShowcase';
import {
  Sparkles,
  Leaf,
  Sprout,
  Wheat,
  Heart,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Sun,
  Droplets,
  Globe,
  Users,
  Award,
  BookOpen,
  MessageCircle,
  Phone,
  Layers,
  Star,
  Trees,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'NalaFarm — Pelopor Makanan Sehat Bebas Gluten & Profil UMKM by Naltech',
  description: 'Profil perusahaan dan brand camilan sehat bebas gluten berbahan dasar singkong lokal Indonesia. Menerapkan pertanian berkelanjutan dan memberdayakan 500+ petani lokal.',
  alternates: {
    canonical: '/demo/nalafarm',
  },
  openGraph: {
    title: 'NalaFarm — Pelopor Makanan Sehat Bebas Gluten by Naltech',
    description: 'Camilan sehat bebas gluten dari singkong lokal nusantara. Memberdayakan petani lokal dan ramah lingkungan.',
    images: [{ url: `${siteUrl}/farm/hero-farm.jpg`, width: 1200, height: 630, alt: 'NalaFarm Gluten-Free Indonesian Brand' }],
  },
  twitter: {
    title: 'NalaFarm — Pelopor Makanan Sehat Bebas Gluten by Naltech',
    description: 'Camilan sehat bebas gluten dari singkong lokal nusantara.',
    images: [`${siteUrl}/farm/hero-farm.jpg`],
  },
};

const farmStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NalaFarm (Concept by Naltech)',
    description: 'Brand makanan sehat bebas gluten dan profil perusahaan UMKM berbasis singkong nusantara karya Naltech Studio.',
    url: `${siteUrl}/demo/nalafarm`,
    image: `${siteUrl}/farm/hero-farm.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surabaya',
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
        name: 'NalaFarm',
        item: `${siteUrl}/demo/nalafarm`,
      },
    ],
  },
];

export default function NalaFarmPage() {
  return (
    <main className="nf-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(farmStructuredData) }}
      />

      {/* Top Header Promo Ribbon */}
      <div className="nf-promo-ribbon">
        <div className="nf-wrap nf-ribbon-content">
          <span className="nf-ribbon-badge">
            <Sparkles size={13} />
            <span>PROMO BULAN HIDUP SEHAT 2026</span>
          </span>
          <p>
            Diskon <strong>20% untuk Semua Produk</strong> di Shopee &amp; Tokopedia Official Store pakai kode voucher: <code>NALASEHAT</code>
          </p>
          <a href="#produk-sehat" className="nf-ribbon-link">
            <span>Belanja Sekarang</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Top Demo Bar */}
      <div className="nf-demo-bar">
        <div className="nf-wrap nf-demo-inner">
          <Link href="/" className="nf-back-link">
            ← Kembali ke portfolio Naltech
          </Link>
          <span>Concept project by Naltech Studio</span>
        </div>
      </div>

      {/* Main Header with Online Store Link */}
      <header className="nf-header">
        <div className="nf-wrap nf-header-inner">
          <a className="nf-logo" href="#top">
            <span className="nf-logo-icon">
              <Sprout size={22} />
            </span>
            <span className="nf-logo-text">
              NALA<strong>FARM</strong> <small>GLUTEN FREE</small>
            </span>
          </a>

          <nav className="nf-nav" aria-label="Navigasi NalaFarm">
            <a href="#tentang-kami">Tentang Kami</a>
            <a href="#visi-misi">Visi &amp; Misi</a>
            <a href="#bahan-alami">Bahan Alami</a>
            <a href="#produk-sehat">Produk Pilihan</a>
            <a href="#dampak-petani">Dampak Petani</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nf-header-actions">
            <a
              href="https://shopee.co.id"
              target="_blank"
              rel="noreferrer"
              className="nf-btn-header-store"
            >
              <ShoppingBag size={15} />
              <span>Toko Online / Belanja ↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="nf-hero">
        <div className="nf-wrap">
          <div className="nf-hero-grid">
            <div className="nf-hero-copy">
              <div className="nf-hero-tag">
                <Leaf size={14} className="nf-icon-green" />
                <span>100% BEBAS GLUTEN · ALAMI DARI BUMI NUSANTARA</span>
              </div>

              <h1>
                Kebaikan alam Indonesia untuk hidup sehat,<br />
                camilan bebas gluten <em>dari singkong lokal pilihan.</em>
              </h1>

              <p className="nf-hero-sub">
                NalaFarm berkomitmen menghadirkan produk pangan sehat ramah celiac dan ramah pencernaan. Kami memberdayakan ratusan petani singkong lokal dengan menerapkan pertanian berkelanjutan bebas bahan kimia sintetis.
              </p>

              <div className="nf-hero-actions">
                <a href="#produk-sehat" className="nf-btn-hero-primary">
                  <ShoppingBag size={16} />
                  <span>Jelajahi Produk Kami</span>
                  <ArrowUpRight size={16} />
                </a>

                <a href="#tentang-kami" className="nf-btn-hero-secondary">
                  <span>Pelajari Kisah Brand</span>
                </a>
              </div>

              <div className="nf-hero-trust-badges">
                <div className="nf-trust-item">
                  <ShieldCheck size={16} className="nf-icon-green" />
                  <span>100% Gluten-Free</span>
                </div>
                <div className="nf-trust-item">
                  <CheckCircle2 size={16} className="nf-icon-green" />
                  <span>Halal &amp; BPOM RI</span>
                </div>
                <div className="nf-trust-item">
                  <Leaf size={16} className="nf-icon-green" />
                  <span>Non-GMO &amp; Tanpa MSG</span>
                </div>
              </div>
            </div>

            <div className="nf-hero-visual">
              <img src="/farm/hero-farm.jpg" alt="Pertanian Berkelanjutan NalaFarm" />
              <div className="nf-hero-floating-card">
                <Trees size={22} className="nf-icon-green" />
                <div>
                  <strong>Pertanian Berkelanjutan Zero-Waste</strong>
                  <small>500+ Petani Lokal Tumbuh Bersama NalaFarm</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Visi, Misi & Keberlanjutan */}
      <section id="visi-misi" className="nf-vision-section nf-wrap">
        <header className="nf-section-head center">
          <span className="nf-badge-tag">01 · VISI &amp; MISI PERUSAHAAN</span>
          <h2>Membangun ekosistem pangan sehat<br />yang <em>berkelanjutan &amp; adil bagi semua.</em></h2>
          <p>
            Kami percaya bahwa makanan bergizi terbaik berawal dari tanah yang sehat dan kesejahteraan para petani yang merawatnya.
          </p>
        </header>

        <div className="nf-mission-grid">
          <div className="nf-mission-card">
            <div className="nf-mission-icon">
              <Sun size={26} />
            </div>
            <span className="nf-mission-step">Misi 01</span>
            <h3>Mengangkat Potensi Singkong Lokal</h3>
            <p>
              Mengubah singkong nusantara menjadi tepung mocaf berkualitas dunia yang bebas gluten dan kaya nutrisi sebagai alternatif sehat terigu impor.
            </p>
          </div>

          <div className="nf-mission-card">
            <div className="nf-mission-icon">
              <Users size={26} />
            </div>
            <span className="nf-mission-step">Misi 02</span>
            <h3>Kemitraan Petani Berkelanjutan</h3>
            <p>
              Membina dan membeli hasil panen 500+ petani singkong lokal dengan harga adil (*fair trade*) untuk meningkatkan kesejahteraan keluarga petani.
            </p>
          </div>

          <div className="nf-mission-card">
            <div className="nf-mission-icon">
              <Droplets size={26} />
            </div>
            <span className="nf-mission-step">Misi 03</span>
            <h3>Produksi Ramah Lingkungan (Zero-Waste)</h3>
            <p>
              Memanfaatkan seluruh bagian umbi singkong tanpa limbah. Kulit singkong diolah kembali menjadi pakan ternak dan pupuk kompos organik.
            </p>
          </div>
        </div>
      </section>

      {/* Section 02: Bahan-Bahan Utama dari Alam */}
      <section id="bahan-alami" className="nf-ingredients-section">
        <div className="nf-wrap">
          <header className="nf-section-head center">
            <span className="nf-badge-tag">02 · KEBAIKAN BAHAN ALAMI</span>
            <h2>Bahan murni dari alam tanpa kompromi<br />pada <em>kesehatan &amp; cita rasa lezat.</em></h2>
            <p>
              Kami hanya memilih bahan baku nabati terbaik tanpa pengawet sintetis, pewarna kimia, atau pemanis buatan.
            </p>
          </header>

          <div className="nf-ingredients-grid">
            <div className="nf-ing-card">
              <div className="nf-ing-img-wrap">
                <img src="/farm/ingredient-cassava.jpg" alt="Tepung Singkong Mocaf" />
              </div>
              <div className="nf-ing-content">
                <span className="nf-ing-tag">BAHAN UTAMA</span>
                <h3>Tepung Singkong Mocaf</h3>
                <p>
                  Diproses melalui fermentasi alami tanpa pemutih. 100% bebas gluten, mudah dicerna oleh lambung sensitif, dan memiliki indeks glikemik lebih rendah dibanding terigu.
                </p>
              </div>
            </div>

            <div className="nf-ing-card">
              <div className="nf-ing-img-wrap">
                <img src="/farm/ingredient-cocoa.jpg" alt="Kakao Asli & Gula Kelapa" />
              </div>
              <div className="nf-ing-content">
                <span className="nf-ing-tag">PEMANIS &amp; RASA ALAMI</span>
                <h3>Gula Kelapa Organik &amp; Kakao Murni</h3>
                <p>
                  Menggunakan gula kelapa organik dari penderes lokal sebagai pemanis alami rendah GI, dipadu dengan kakao gelap murni kaya antioksidan polifenol.
                </p>
              </div>
            </div>

            <div className="nf-ing-card">
              <div className="nf-ing-img-wrap">
                <img src="/farm/product-cookies.jpg" alt="Superfood Seeds & Almond" />
              </div>
              <div className="nf-ing-content">
                <span className="nf-ing-tag">NUTRISI SUPERFOOD</span>
                <h3>Biji Rami, Biji Labu &amp; Almond</h3>
                <p>
                  Kaya akan serat pangan, asam lemak esensial Omega-3, vitamin E, dan mineral penting untuk mendukung energi serta daya tahan tubuh sehari-hari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Showcase Produk Sehat Bebas Gluten */}
      <section className="nf-products-section nf-wrap">
        <header className="nf-section-head center">
          <span className="nf-badge-tag">03 · KATALOG PRODUK PILIHAN</span>
          <h2>Camilan &amp; bahan makanan sehat<br />favorit <em>keluarga Indonesia.</em></h2>
          <p>
            Tersedia dalam berbagai pilihan cookies renyah, tepung serbaguna bebas gluten, hingga mie sayur bernutrisi tinggi.
          </p>
        </header>

        <GlutenFreeProductShowcase />
      </section>

      {/* Section 04: Tentang Kami (About Us) & Dampak Kemitraan Petani */}
      <section id="tentang-kami" className="nf-about-section">
        <div className="nf-wrap nf-about-grid">
          <div className="nf-about-copy">
            <span className="nf-badge-tag">04 · TENTANG KAMI (ABOUT US)</span>
            <h2>Dari kebun singkong lokal<br />menuju <em>meja makan dunia.</em></h2>
            <p>
              NalaFarm lahir dari sebuah kepedulian terhadap melimpahnya hasil panen singkong petani lokal yang bernilai rendah di pasaran tradisional. Dengan sentuhan riset fermentasi modern, kami berhasil mengubah singkong menjadi tepung mocaf serbaguna dan ragam cookies bebas gluten berkualitas tinggi.
            </p>
            <p>
              Kini produk NalaFarm telah dipercaya oleh ribuan keluarga di Indonesia dan diekspor ke berbagai negara sebagai bukti bahwa produk olahan UMKM lokal mampu bersaing di kancah internasional.
            </p>

            <div className="nf-impact-stats-row" id="dampak-petani">
              <div className="nf-impact-stat">
                <strong>500+</strong>
                <small>Petani Singkong Lokal Diberdayakan</small>
              </div>
              <div className="nf-impact-stat">
                <strong>1.200 Ha</strong>
                <small>Lahan Pertanian Berkelanjutan</small>
              </div>
              <div className="nf-impact-stat">
                <strong>12+</strong>
                <small>Negara Tujuan Ekspor Pangan</small>
              </div>
            </div>
          </div>

          <div className="nf-about-visual">
            <img src="/farm/story-farmers.jpg" alt="Petani Singkong Mitra NalaFarm" />
            <div className="nf-about-floating-card">
              <Heart size={20} className="nf-icon-green" />
              <div>
                <strong>Program Kemitraan Adil (Fair Trade)</strong>
                <small>Meningkatkan Pendapatan Petani hingga 45%</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: FAQ */}
      <section id="faq" className="nf-faq-section nf-wrap">
        <header className="nf-section-head">
          <div>
            <span className="nf-badge-tag">05 · PERTANYAAN UMUM (FAQ)</span>
            <h2>Semua yang sering ditanyakan<br /><em>seputar produk &amp; diet bebas gluten.</em></h2>
          </div>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaFarm%2C%20saya%20ada%20pertanyaan%20seputar%20produk%20bebas%20gluten."
            target="_blank"
            rel="noreferrer"
            className="nf-link-more"
          >
            <span>Tanya Customer Care via WhatsApp ↗</span>
          </a>
        </header>

        <div className="nf-faq-list">
          <details open>
            <summary>
              <span>01</span> Apakah produk NalaFarm aman untuk penderita celiac &amp; alergi gluten?<b>+</b>
            </summary>
            <p>
              Sangat aman! Seluruh produk kami dibuat di fasilitas produksi khusus bebas gluten (*dedicated gluten-free facility*) dan telah teruji laboratorium dengan standar &lt; 5 ppm gluten, aman untuk penderita celiac disease dan sensitivitas gluten.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Bagaimana cara menggunakan Tepung Singkong Serbaguna untuk membuat kue?<b>+</b>
            </summary>
            <p>
              Tepung Singkong Mocaf NalaFarm dapat digunakan dengan perbandingan 1:1 menggantikan tepung terigu protein sedang pada aneka resep cookies, muffin, pancake, dan gorengan tanpa perlu penyesuaian resep yang rumit.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah cookies NalaFarm cocok untuk anak-anak dan diet diabetes?<b>+</b>
            </summary>
            <p>
              Ya! Kami menggunakan gula kelapa organik yang memiliki indeks glikemik rendah (Low GI ~35) dan kaya serat alami, sehingga tidak menyebabkan lonjakan gula darah drastis dan bebas dari bahan pengawet kimia berbahaya.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bisakah Naltech Studio membuatkan website profil UMKM &amp; brand produk seperti NalaFarm?<b>+</b>
            </summary>
            <p>
              Tentu saja! Ini adalah concept demo project dari Naltech Studio. Kami merancang website profil perusahaan UMKM, katalog produk interaktif, integrasi marketplace (Shopee / Tokopedia), dan narasi brand berkelanjutan yang profesional dan memikat pembeli.
            </p>
          </details>
        </div>
      </section>

      {/* Section 06: Final CTA */}
      <section className="nf-cta-section nf-wrap">
        <div className="nf-cta-card">
          <div className="nf-cta-glow" />
          <div className="nf-cta-inner">
            <span className="nf-cta-tag">CONCEPT PROJECT · NALTECH STUDIO</span>
            <h2>
              Ingin memiliki website profil UMKM &amp; brand produk<br />
              sekelas <em>NalaFarm / Ladang Lima?</em>
            </h2>
            <p>
              Naltech membantu pelaku UMKM, brand makanan sehat, dan industri agrikultur membangun identitas digital berkelas dunia dengan profil perusahaan yang inspiratif dan katalog produk siap belanja.
            </p>
            <div className="nf-cta-buttons">
              <a
                href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20profil%20UMKM%20atau%20brand%20produk%20seperti%20NalaFarm."
                target="_blank"
                rel="noreferrer"
                className="nf-btn-primary"
              >
                <MessageCircle size={17} />
                <span>Konsultasi Project Website Brand UMKM</span>
                <ArrowUpRight size={17} />
              </a>
              <Link href="/" className="nf-btn-secondary">
                <span>Lihat Portfolio Naltech Lainnya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="nf-footer nf-wrap">
        <div className="nf-footer-grid">
          <div className="nf-footer-col brand">
            <a className="nf-logo" href="#top">
              <span className="nf-logo-icon">
                <Sprout size={20} />
              </span>
              <span className="nf-logo-text">
                NALA<strong>FARM</strong> <small>GLUTEN FREE</small>
              </span>
            </a>
            <p>
              Pelopor makanan sehat bebas gluten dari singkong nusantara. Concept demo website engineered by Naltech Studio.
            </p>
          </div>

          <div className="nf-footer-col">
            <strong>Produk Pilihan</strong>
            <a href="#produk-sehat">Blackmond Cookies</a>
            <a href="#produk-sehat">Pumpberry Cookies</a>
            <a href="#produk-sehat">Tepung Singkong Mocaf</a>
            <a href="#produk-sehat">Veggie Noodle Sehat</a>
          </div>

          <div className="nf-footer-col">
            <strong>Tentang Brand</strong>
            <a href="#tentang-kami">Profil Perusahaan</a>
            <a href="#visi-misi">Visi &amp; Misi Keberlanjutan</a>
            <a href="#bahan-alami">Bahan Alami Singkong</a>
            <a href="#dampak-petani">Kemitraan 500+ Petani</a>
          </div>

          <div className="nf-footer-col">
            <strong>Pengembang Studio</strong>
            <Link href="/">Naltech Studio</Link>
            <a href="mailto:naltechai@gmail.com">naltechai@gmail.com</a>
            <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer">
              +62 815 7355 0017
            </a>
            <p className="nf-address">Surabaya &amp; Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="nf-footer-bottom">
          <small>
            © 2026 NalaFarm · Healthy Food UMKM Concept by <Link href="/">Naltech Studio</Link>
          </small>
          <span>100% Produk Kebanggaan Indonesia · Halal &amp; BPOM Terverifikasi</span>
        </div>
      </footer>
    </main>
  );
}
