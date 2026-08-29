import type { Metadata } from 'next';
import Link from 'next/link';
import './nalatix.css';

export const metadata: Metadata = {
  title: 'NalaTix — Online Ticketing & Concert Experience by Naltech',
  description: 'Momen panggung, cerita yang berdering. Contoh website penjualan tiket konser & event online oleh Naltech.',
  openGraph: {
    title: 'NalaTix — Online Ticketing & Concert Experience by Naltech',
    description: 'Momen panggung, cerita yang berdering.',
    images: [new URL('/tickets/hero-concert.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')],
  },
  twitter: {
    title: 'NalaTix — Online Ticketing & Concert Experience by Naltech',
    description: 'Momen panggung, cerita yang berdering.',
    images: [new URL('/tickets/hero-concert.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')],
  },
};

export default function NalaTixPage() {
  return (
    <main className="nt-page">
      <div className="nt-demo">
        <Link href="/">← Kembali ke portfolio</Link>
        <span>Concept project by Naltech</span>
      </div>

      <header className="nt-header">
        <a className="nt-logo" href="#top">NALATIX<span>●</span></a>
        <nav>
          <a href="#events">Event</a>
          <a href="#story">Cerita</a>
          <a href="#lineup">Lineup</a>
          <a href="#tickets">Tiket</a>
        </nav>
        <a className="nt-book" href="#tickets">Pesan tiket <b>↗</b></a>
      </header>

      <section id="top" className="nt-hero">
        <div className="nt-hero-copy">
          <p>CONCERT · FESTIVAL · LIVE STAGE</p>
          <h1>Momen panggung,<br />cerita yang<br /><em>berdering.</em></h1>
          <div>
            <p>Beli tiket konser musik, festival akbar, hingga panggung seni terkurasi tanpa antre rumit—dari layar ponsel langsung ke pintu gate.</p>
            <a href="#events">Lihat jadwal <span>↘</span></a>
          </div>
        </div>
        <div className="nt-hero-image">
          <img src="/tickets/hero-concert.jpg" alt="Panggung Konser Musik NalaTix" />
          <div>
            <span>OFFICIAL TICKETING</span>
            <strong>100% GARANSI MASUK</strong>
          </div>
        </div>
        <p className="nt-scroll">SCROLL TO DISCOVER <span>↓</span></p>
      </section>

      <section className="nt-ticker">
        <div>
          <span>100% TIKET RESMI PROMOTOR</span>
          <i>✦</i>
          <span>FAST QR GATE SCAN</span>
          <i>✦</i>
          <span>ANTI-SCALPER SYSTEM</span>
          <i>✦</i>
          <span>WHATSAPP E-TICKET</span>
          <i>✦</i>
          <span>GARANSI REFUND RESMI</span>
        </div>
      </section>

      <section id="events" className="nt-events nt-wrap">
        <header className="nt-heading">
          <p><span>01</span> Pilihan event</p>
          <h2>Panggung terbaik<br />musim <em>ini.</em></h2>
          <a href="#tickets">Semua jadwal ↗</a>
        </header>
        <div className="nt-event-grid">
          <article className="nt-event-main">
            <img src="/tickets/hero-concert.jpg" alt="Soundwave Jakarta Festival 2026" />
            <div>
              <small>Festival 2 Hari · GBK Jakarta</small>
              <h3>Soundwave Jakarta 2026</h3>
              <p>18 Musisi Internasional & Nasional · 24—25 Oktober 2026</p>
              <strong>385K</strong>
            </div>
          </article>
          <div className="nt-event-cards">
            <article>
              <span>CONCERT</span>
              <h3>Aruna<br />Symphony</h3>
              <p>Aula Simfonia Jakarta · 14 Nov 2026</p>
              <strong>450K</strong>
              <i>01</i>
            </article>
            <article>
              <span>FESTIVAL</span>
              <h3>Nusantara<br />Indie Fest</h3>
              <p>Pantai Melasti Bali · 12—13 Des 2026</p>
              <strong>295K</strong>
              <i>02</i>
            </article>
            <article>
              <span>LIVE SHOW</span>
              <h3>The Electric<br />Echoes Tour</h3>
              <p>M Bloc Livehouse · 08 Nov 2026</p>
              <strong>220K</strong>
              <i>03</i>
            </article>
            <article>
              <span>SPECIAL</span>
              <h3>Gelak Tawa<br />Comedy Fest</h3>
              <p>Balai Sarbini Jakarta · 29 Nov 2026</p>
              <strong>180K</strong>
              <i>04</i>
            </article>
          </div>
        </div>
      </section>

      <section id="story" className="nt-story">
        <div className="nt-story-art">
          <div className="nt-sun">
            <i /><i />
            <span>N</span>
          </div>
          <p>EST. 2026<br />JAKARTA</p>
        </div>
        <div className="nt-story-copy">
          <p><span>02</span> Tentang NalaTix</p>
          <h2>Musik lebih dekat,<br />tanpa rasa <em>khawatir.</em></h2>
          <p>NalaTix lahir dari keyakinan sederhana: pengalaman nonton konser seharusnya menyenangkan sejak detik pertama membeli tiket. Kami menghubungkan promotor resmi dan penonton melalui sistem antrean yang adil, perlindungan anti-calo, dan scan barcode instan di gate.</p>
          <blockquote>“Panggung adalah tempat cerita dan energi bertemu.<br />Tiketmu harus semudah itu didapat.”</blockquote>
          <a href="#lineup">Kenal lebih dekat ↘</a>
        </div>
      </section>

      <section id="lineup" className="nt-lineup nt-wrap">
        <header className="nt-heading">
          <p><span>03</span> Akses & Kategori</p>
          <h2>Pilih tempat<br />terbaikmu di <em>venue.</em></h2>
        </header>
        <div className="nt-lineup-grid">
          <div className="nt-lineup-photo">
            <img src="/tickets/festival-crowd.jpg" alt="Suasana penonton festival" />
            <span>OFFICIAL PASS · FAST SCAN GATE</span>
          </div>
          <div className="nt-lineup-list">
            <article>
              <span>01</span>
              <div>
                <h3>Festival Standing (Presale)</h3>
                <p>Akses area festival depan panggung, wristband resmi</p>
              </div>
              <strong>385K</strong>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>VIP Seated (Numbered)</h3>
                <p>Kursi tribun berpenomoran, fast track gate, poster resmi</p>
              </div>
              <strong>850K</strong>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>VVIP Soundcheck Pass</h3>
                <p>Akses soundcheck intim, AC lounge, merchandise pack</p>
              </div>
              <strong>1.650K</strong>
            </article>
            <article>
              <span>04</span>
              <div>
                <h3>Group 4-Pack Pass</h3>
                <p>Paket 4 tiket festival untuk rombongan teman</p>
              </div>
              <strong>1.380K</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="nt-gallery">
        <figure>
          <img src="/tickets/hero-concert.jpg" alt="Panggung Konser Musik" />
          <figcaption>Main Stage GBK · 21.00</figcaption>
        </figure>
        <figure>
          <img src="/tickets/festival-crowd.jpg" alt="Suasana Festival Musik" />
          <figcaption>Sun Fest Beach · Sunset</figcaption>
        </figure>
        <figure>
          <img src="/tickets/indie-fest.jpg" alt="Live Performance Indie Rock" />
          <figcaption>Livehouse M Bloc · Intimate</figcaption>
        </figure>
      </section>

      <section className="nt-review">
        <div className="nt-wrap">
          <span>“</span>
          <blockquote>Beli tiket konser paling santai. Sistemnya lancar tanpa lag, QR barcode langsung aktif di WhatsApp, dan pas di gate venue tinggal scan dalam satu detik.</blockquote>
          <div>
            <strong>Dimas & Amanda</strong>
            <small>Penonton Soundwave Festival & Aruna Symphony 2026</small>
          </div>
        </div>
      </section>

      <section id="tickets" className="nt-visit nt-wrap">
        <header>
          <p><span>05</span> Amankan Tiket</p>
          <h2>Panggungmu<br />menunggumu.</h2>
          <a href="https://wa.me/6281573550017?text=Halo%20Naltech%2C%20saya%20tertarik%20dengan%20konsep%20website%20NalaTix." target="_blank" rel="noreferrer">Konsultasi tiket ↗</a>
        </header>
        <div className="nt-visit-card">
          <div>
            <small>LOKASI & VENUE</small>
            <p>Stadion Madya GBK & Venue Terpilih<br />Gate Buka 14.00 WIB</p>
          </div>
          <div>
            <small>PEMBAYARAN</small>
            <p>QRIS, Virtual Account, Kartu Kredit<br />E-Wallet & PayLater</p>
          </div>
          <div>
            <small>LAYANAN</small>
            <p>support@nalatix.id<br />+62 815 7355 0017</p>
          </div>
          <a href="mailto:naltechai@gmail.com">
            Pesan tiket sekarang <span>↗</span>
          </a>
          <div className="nt-visit-sun">
            <i />
            <span>N</span>
          </div>
        </div>
      </section>

      <footer className="nt-footer nt-wrap">
        <a className="nt-logo" href="#top">NALATIX<span>●</span></a>
        <p>Online ticketing & live event platform.<br />Dari layar langsung ke panggung.</p>
        <div>
          <a href="#events">Event</a>
          <a href="#story">Cerita</a>
          <a href="#lineup">Lineup</a>
          <a href="#tickets">Tiket</a>
        </div>
        <div>
          <Link href="/">Portfolio Naltech</Link>
          <a href="mailto:naltechai@gmail.com">Buat project serupa</a>
        </div>
        <small>© 2026 NalaTix · Concept website by Naltech Studio · Bukan platform tiket aktif</small>
      </footer>
    </main>
  );
}
