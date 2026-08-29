import type { Metadata } from 'next';
import Link from 'next/link';
import './nalatix.css';
import TicketInteractive from './TicketInteractive';

export const metadata: Metadata = {
  title: 'NalaTix — Online Ticketing & Event Booking Concept by Naltech',
  description: 'Contoh landing page penjualan tiket konser, festival musik, dan event online modern yang dirancang oleh Naltech.',
  openGraph: {
    title: 'NalaTix — Online Ticketing & Event Booking Concept by Naltech',
    description: 'Nonton musisi favorit, tanpa drama antre. Platform tiket event & konser resmi.',
    images: [new URL('/tickets/hero-concert.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')],
  },
  twitter: {
    title: 'NalaTix — Online Ticketing & Event Booking Concept by Naltech',
    description: 'Nonton musisi favorit, tanpa drama antre. Platform tiket event & konser resmi.',
    images: [new URL('/tickets/hero-concert.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')],
  },
};

export default function NalaTixPage() {
  return (
    <main className="tix-page">
      {/* Top Demo Bar */}
      <div className="tix-demo-bar">
        <Link href="/">← Kembali ke portfolio Naltech</Link>
        <span>Concept project by Naltech</span>
      </div>

      {/* Header */}
      <header className="tix-header">
        <a className="tix-logo" href="#top">
          <span className="tix-logo-icon">🎟️</span>
          <span>Nala<strong>Tix</strong></span>
        </a>
        <nav aria-label="Navigasi NalaTix">
          <a href="#events-grid">Event Pilihan</a>
          <a href="#booking-simulator">Beli Tiket</a>
          <a href="#features">Keunggulan</a>
          <a href="#how">Cara Beli</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="tix-header-cta" href="#events-grid">
          Jelajahi Event <b>↗</b>
        </a>
      </header>

      {/* Hero Section */}
      <section id="top" className="tix-hero">
        <div className="tix-hero-glow" />
        <div className="tix-hero-copy">
          <div className="tix-kicker">
            <span className="tix-kicker-dot" />
            <span>Platform Penjualan Tiket Konser & Event Terkurasi</span>
          </div>
          <h1>
            Nonton musisi favorit,<br />
            <em>tanpa drama antre.</em>
          </h1>
          <p>
            Ribuan tiket konser musik, festival akbar, orkestra, hingga pertunjukan seni dalam satu tempat. 100% tiket resmi, garansi masuk venue, dan E-ticket instan langsung di ponselmu.
          </p>

          <div className="tix-hero-actions">
            <a href="#events-grid" className="tix-hero-btn-primary">
              Cari Tiket Konser <b>↗</b>
            </a>
            <a href="#booking-simulator" className="tix-hero-btn-secondary">
              Simulasi E-Ticket ⚡
            </a>
          </div>

          <div className="tix-hero-proof">
            <div>
              <strong>85.000+</strong>
              <small>Tiket Terbit</small>
            </div>
            <div>
              <strong>4.9 ★★★★★</strong>
              <small>Rating Kepuasan</small>
            </div>
            <div>
              <strong>100% Resmi</strong>
              <small>Direct Promoter Partner</small>
            </div>
          </div>
        </div>

        {/* Hero Visual Card / VIP Pass Preview */}
        <div className="tix-hero-visual" aria-label="Preview Kartu Tiket Festival NalaTix">
          <div className="tix-hero-card">
            <div className="tix-hero-card-img">
              <img src="/tickets/hero-concert.jpg" alt="Konser Soundwave Jakarta 2026" />
              <div className="tix-flash-sale-badge">
                <span>⚡ FLASH SALE</span>
                <small>Presale 2 Berakhir dalam 03:42:15</small>
              </div>
            </div>
            <div className="tix-hero-card-body">
              <div className="tix-hero-card-header">
                <span className="tix-pill-music">MUSIC FESTIVAL</span>
                <strong className="tix-price-tag">Rp385.000</strong>
              </div>
              <h3>Soundwave Jakarta 2026</h3>
              <p>📍 Stadion Madya Gelora Bung Karno · 24—25 Okt 2026</p>
              <div className="tix-hero-card-footer">
                <div className="tix-lineup-avatars">
                  <span>🎤</span>
                  <span>🎸</span>
                  <span>🎹</span>
                  <small>+15 Musisi</small>
                </div>
                <a href="#booking-simulator" className="tix-btn-mini-buy">Ambil Tiket ↗</a>
              </div>
            </div>
          </div>

          {/* Floating Micro Cards */}
          <div className="tix-float-card card-top">
            <span className="tix-float-icon">✓</span>
            <div>
              <b>E-Ticket Langsung Aktif</b>
              <small>Scan QR barcode langsung di Gate</small>
            </div>
          </div>

          <div className="tix-float-card card-bottom">
            <span className="tix-float-icon">🛡️</span>
            <div>
              <b>Garansi Anti-Calo</b>
              <small>Verifikasi ID & Enkripsi Dinamis</small>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="tix-ticker-rail" aria-label="Keunggulan Utama NalaTix">
        <div className="tix-ticker-content">
          <span>100% TIKET RESMI PROMOTOR</span>
          <i>✦</i>
          <span>FAST SCAN TURNSTILE GATE</span>
          <i>✦</i>
          <span>ANTI-SCALPER QUEUE SYSTEM</span>
          <i>✦</i>
          <span>REFUND PROTECTION GUARANTEE</span>
          <i>✦</i>
          <span>INSTANT WHATSAPP E-TICKET</span>
          <i>✦</i>
          <span>30+ METODE PEMBAYARAN</span>
          <i>✦</i>
          <span>CUSTOMER SUPPORT 24/7</span>
          <i>✦</i>
        </div>
      </section>

      {/* Interactive Search, Filterable Event Grid & Booking Simulator */}
      <TicketInteractive />

      {/* Features & Security Section */}
      <section id="features" className="tix-features-section">
        <div className="tix-wrap">
          <header className="tix-section-head inverse">
            <div className="tix-badge-tag">
              <span className="tix-pulse-dot" /> 03 · Standar Keamanan & Teknologi
            </div>
            <h2>
              Dirancang untuk pengalaman<br />
              <em>nonton paling tenang.</em>
            </h2>
            <p>Kami memastikan proses dari beli tiket sampai masuk ke venue berlangsung mulus tanpa kendala.</p>
          </header>

          <div className="tix-features-grid">
            <article className="tix-feature-box">
              <div className="tix-feature-icon">🛡️</div>
              <small>01 · SISTEM ANTRIAN</small>
              <h3>Anti-Bot & Anti-Scalper</h3>
              <p>
                Sistem antrian server elastis dengan validasi NIK dan verifikasi OTP. Memastikan tiket didapatkan penonton asli, bukan bot atau calo tiket.
              </p>
            </article>

            <article className="tix-feature-box">
              <div className="tix-feature-icon">⚡</div>
              <small>02 · GATE OFFLINE SCAN</small>
              <h3>Scan Barcode 1.2 Detik</h3>
              <p>
                E-Ticket dilengkapi dynamic barcode yang dapat dibaca offline oleh scanner gate venue. Masuk area konser cepat tanpa antre berjam-jam.
              </p>
            </article>

            <article className="tix-feature-box">
              <div className="tix-feature-icon">💳</div>
              <small>03 · PEMBAYARAN FLEKSIBEL</small>
              <h3>30+ Opsi Pembayaran</h3>
              <p>
                Dukungan instan untuk QRIS, BCA/Mandiri/BRI Virtual Account, Kartu Kredit, GoPay, OVO, ShopeePay, hingga cicilan PayLater tanpa kartu.
              </p>
            </article>

            <article className="tix-feature-box">
              <div className="tix-feature-icon">🔄</div>
              <small>04 · TRANSFER & REFUND</small>
              <h3>Transfer Tiket Aman</h3>
              <p>
                Beli untuk teman atau keluarga? Fitur transfer nama tiket resmi tersedia langsung di dashboard akun tanpa biaya tambahan.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="tix-how-section tix-wrap">
        <header className="tix-section-head">
          <div className="tix-badge-tag">
            <span className="tix-pulse-dot" /> 04 · Alur Pembelian
          </div>
          <h2>
            Tiga langkah gampang,<br />
            <em>langsung siap sing along.</em>
          </h2>
        </header>

        <div className="tix-steps-grid">
          <article className="tix-step-card">
            <span className="tix-step-num">01</span>
            <div className="tix-step-visual">
              <i>🔍</i>
              <b>Pilih Konser & Kategori</b>
              <small>Tribun, Festival, atau VIP</small>
            </div>
            <h3>Pilih Jadwal & Seat</h3>
            <p>Jelajahi konser impianmu, pilih kategori kursi atau festival standing sesuai budget dan preferensimu.</p>
          </article>

          <article className="tix-step-card">
            <span className="tix-step-num">02</span>
            <div className="tix-step-visual">
              <i>💳</i>
              <b>Bayar Bebas Ribet</b>
              <small>QRIS / VA / E-Wallet</small>
            </div>
            <h3>Selesaikan Pembayaran</h3>
            <p>Pilih metode pembayaran favoritmu dengan konfirmasi instan dalam hitungan detik tanpa upload bukti transfer.</p>
          </article>

          <article className="tix-step-card">
            <span className="tix-step-num">03</span>
            <div className="tix-step-visual">
              <i>📱</i>
              <b>E-Ticket QR Siap</b>
              <small>Langsung di WhatsApp & Email</small>
            </div>
            <h3>Scan & Masuk Venue</h3>
            <p>Cukup tunjukkan barcode di ponselmu kepada petugas gate atau turnstile scanner. Selamat menikmati pertunjukan!</p>
          </article>
        </div>
      </section>

      {/* Audience Experience & Review Section */}
      <section className="tix-reviews-section">
        <div className="tix-wrap">
          <div className="tix-quote-card">
            <span className="tix-quote-mark">“</span>
            <blockquote>
              Beli tiket konser paling santai yang pernah saya alami. Pas war tiket sistemnya adil tanpa lag, E-ticket langsung masuk WhatsApp dalam 10 detik, dan pas di gate GBK tinggal scan QR langsung tembus masuk.
            </blockquote>
            <div className="tix-reviewer">
              <strong>Dimas Suryo & Amanda</strong>
              <small>Penonton VIP Soundwave Festival & Aruna Symphony 2026</small>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="tix-faq-section tix-wrap">
        <header className="tix-section-head">
          <div className="tix-badge-tag">
            <span className="tix-pulse-dot" /> 05 · Pertanyaan Umum
          </div>
          <h2>
            Semua hal yang sering<br />
            <em>ditanyakan penonton.</em>
          </h2>
          <p>Butuh bantuan lain seputar tiket? <a href="mailto:naltechai@gmail.com">Hubungi tim kami ↗</a></p>
        </header>

        <div className="tix-faq-list">
          <details open>
            <summary>
              <span>01</span> Apakah tiket yang dijual di NalaTix 100% resmi?<b>+</b>
            </summary>
            <p>
              Ya, 100% resmi. NalaTix bekerja sama langsung sebagai exclusive ticketing partner dengan promotor, label musik, dan penyelenggara event terverifikasi. Setiap tiket memiliki serial barcode unik yang terhubung ke gate scanner venue.
            </p>
          </details>

          <details>
            <summary>
              <span>02</span> Bagaimana jika saya membeli tiket untuk teman atau keluarga?<b>+</b>
            </summary>
            <p>
              Anda dapat mengisi nama masing-masing pemegang tiket saat proses pemesanan, atau menggunakan fitur resmi *Transfer Tiket* yang tersedia di dashboard akun hingga H-1 acara.
            </p>
          </details>

          <details>
            <summary>
              <span>03</span> Apakah E-Ticket perlu dicetak fisik?<b>+</b>
            </summary>
            <p>
              Tidak perlu. Cukup buka E-Ticket di smartphone Anda melalui aplikasi, email, atau WhatsApp resmi NalaTix. Scanner di gate pintu masuk didesain untuk membaca layar ponsel secara presisi.
            </p>
          </details>

          <details>
            <summary>
              <span>04</span> Bagaimana prosedur jika event ditunda atau dibatalkan?<b>+</b>
            </summary>
            <p>
              Jika event dibatalkan secara resmi oleh pihak penyelenggara, pengembalian dana (refund) 100% akan diproses otomatis ke rekening atau metode pembayaran asal Anda dalam 7–14 hari kerja.
            </p>
          </details>

          <details>
            <summary>
              <span>05</span> Apakah konsep landing page ini bisa disesuaikan untuk event saya?<b>+</b>
            </summary>
            <p>
              Tentu saja! Ini adalah concept demo yang dirancang dan dikembangkan oleh Naltech Studio. Kami dapat merancang sistem ticketing kustom, integrasi payment gateway, manajemen seat seating chart, hingga dashboard gate scanner untuk event Anda.
            </p>
          </details>
        </div>
      </section>

      {/* Final CTA */}
      <section className="tix-cta-section tix-wrap">
        <div className="tix-cta-box">
          <div className="tix-cta-glow" />
          <div className="tix-cta-copy">
            <small>Concept website · Naltech Studio</small>
            <h2>
              Punya rencana event atau festival?<br />
              <em>Mari bikin website tiket sekeren ini.</em>
            </h2>
            <p>
              Naltech membantu promotor, brand, dan kreator membangun website ticketing modern yang cepat, aman dari bot, dan berkonversi tinggi.
            </p>
            <div className="tix-cta-buttons">
              <a href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20membuat%20website%20ticketing%20event%20seperti%20NalaTix." target="_blank" rel="noreferrer" className="tix-cta-primary">
                Konsultasi Project Tiket <b>↗</b>
              </a>
              <Link href="/" className="tix-cta-secondary">
                Lihat Portfolio Naltech Lainnya
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tix-footer tix-wrap">
        <div className="tix-footer-brand">
          <a className="tix-logo" href="#top">
            <span className="tix-logo-icon">🎟️</span>
            <span>Nala<strong>Tix</strong></span>
          </a>
          <p>
            Platform concept ticketing & event booking dirancang oleh Naltech Studio.<br />
            Bukan platform tiket aktif — dibuat sebagai showcase kapabilitas web design & engineering.
          </p>
        </div>

        <nav className="tix-footer-nav" aria-label="Navigasi Footer NalaTix">
          <a href="#events-grid">Event Pilihan</a>
          <a href="#booking-simulator">Simulasi Tiket</a>
          <a href="#features">Keunggulan</a>
          <a href="#how">Cara Beli</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="tix-footer-bottom">
          <small>© 2026 NalaTix · Concept project by <Link href="/">Naltech Studio</Link></small>
          <a href="https://wa.me/6281573550017" target="_blank" rel="noreferrer" className="tix-footer-contact">
            Hubungi Naltech Studio ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
