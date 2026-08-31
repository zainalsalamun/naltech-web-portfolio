import './nalchester.css';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Clock3,
  Flame,
  MessageCircle,
  Newspaper,
  Play,
  Radio,
  ShieldCheck,
  Trophy,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nalchester — Denyut Merah. Suara Bola. | Naltech Studio',
  description: 'Demo landing page media fan independen untuk Manchester United dan dunia sepak bola.',
  alternates: { canonical: '/demo/nalchester' },
  openGraph: {
    title: 'Nalchester — Denyut Merah. Suara Bola.',
    description: 'Berita, opini, taktik, dan suara dari tribun.',
    url: '/demo/nalchester',
    images: [{ url: '/nalchester/og.png', width: 1733, height: 907, alt: 'Nalchester — Denyut Merah. Suara Bola.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nalchester — Denyut Merah. Suara Bola.',
    description: 'Berita, opini, taktik, dan suara dari tribun.',
    images: ['/nalchester/og.png'],
  },
};

const contentPillars = [
  {
    number: '01',
    title: 'Red Alert',
    body: 'Berita resmi, rumor terverifikasi, dan perkembangan transfer tanpa clickbait.',
    icon: Newspaper,
  },
  {
    number: '02',
    title: 'Match Pulse',
    body: 'Preview, line-up, reaksi langsung, skor akhir, dan rating pemain.',
    icon: Radio,
  },
  {
    number: '03',
    title: 'Tactical Board',
    body: 'Taktik dijelaskan dengan bahasa sederhana, tajam, dan enak dibaca.',
    icon: BarChart3,
  },
  {
    number: '04',
    title: 'Fan Stand',
    body: 'Polling, opini, meme, dan ruang debat untuk suara-suara dari tribun.',
    icon: MessageCircle,
  },
];

const schedule = [
  ['Senin', 'The Debrief', '3 poin penting dari pekan terakhir'],
  ['Rabu', 'Tactical Board', 'Bedah pola, peran, dan keputusan'],
  ['Kamis', 'Archive Night', 'Momen klasik dan cerita yang tak pudar'],
  ['Matchday', 'Match Pulse', 'Dari line-up sampai peluit akhir'],
];

export default function Home() {
  return (
    <main className="nc-nalchester-page">
      <Link className="nc-demo-back" href="/#work">← Demo project by Naltech Studio</Link>
      <nav className="nc-site-nav" aria-label="Navigasi utama">
        <a className="nc-brand" href="#top" aria-label="Nalchester, kembali ke atas">
          <img src="/nalchester/nalchester-crest.png" alt="Logo Nalchester" />
          <span>NALCHESTER</span>
        </a>
        <div className="nc-nav-links">
          <a href="#tentang">Tentang</a>
          <a href="#konten">Konten</a>
          <a href="#jadwal">Jadwal</a>
        </div>
        <a className="nc-nav-cta" href="#komunitas">
          Join the stand <ArrowUpRight size={17} />
        </a>
      </nav>

      <header className="nc-hero" id="top">
        <div className="nc-hero-grid" aria-hidden="true" />
        <div className="nc-hero-copy">
          <div className="nc-eyebrow"><span /> Media fan independen</div>
          <h1>
            DENYUT <span>MERAH.</span><br />
            SUARA BOLA.
          </h1>
          <p>
            Rumah digital untuk fans Manchester United dan penikmat sepak bola—
            berita yang jelas, opini yang berani, dan analisis tanpa basa-basi.
          </p>
          <div className="nc-hero-actions">
            <a className="nc-button-primary" href="#konten">
              Jelajahi Nalchester <ArrowRight size={18} />
            </a>
            <a className="nc-button-ghost" href="#tentang">
              <span className="nc-play"><Play size={14} fill="currentColor" /></span>
              Kenali identitas kami
            </a>
          </div>
          <div className="nc-hero-proof">
            <div><strong>MUFC</strong><span>Fokus utama</span></div>
            <div><strong>360°</strong><span>Dunia sepak bola</span></div>
            <div><strong>100%</strong><span>Suara independen</span></div>
          </div>
        </div>

        <div className="nc-hero-visual" aria-label="Identitas Nalchester">
          <div className="nc-orbit nc-orbit-one" />
          <div className="nc-orbit nc-orbit-two" />
          <div className="nc-crest-glow" />
          <img src="/nalchester/nalchester-crest.png" alt="Crest heritage Nalchester" />
          <div className="nc-match-card">
            <div className="nc-live"><span /> The Red Pulse</div>
            <strong>Matchday lives here.</strong>
            <div className="nc-match-meta"><Clock3 size={14} /> 90 menit. Setiap emosi.</div>
          </div>
        </div>
      </header>

      <div className="nc-ticker" aria-label="Topik Nalchester">
        <div>
          <span>MANCHESTER UNITED</span><i>✦</i><span>TRANSFER</span><i>✦</i>
          <span>TAKTIK</span><i>✦</i><span>MATCHDAY</span><i>✦</i>
          <span>FAN CULTURE</span><i>✦</i><span>SEPAK BOLA</span><i>✦</i>
        </div>
      </div>

      <section className="nc-manifesto" id="tentang">
        <div className="nc-section-tag">/ FILOSOFI</div>
        <div className="nc-manifesto-content">
          <p className="nc-manifesto-lead">
            Sepak bola bukan sekadar skor. Ia adalah <em>denyut</em> yang menyatukan
            jutaan suara dalam satu momen.
          </p>
          <div className="nc-manifesto-side">
            <p>
              Nalchester hadir dari tribun menuju timeline: membawa emosi fans,
              menjaga fakta, dan membedah permainan dengan kepala tetap dingin.
            </p>
            <div className="nc-principles">
              <span><ShieldCheck size={18} /> Independen</span>
              <span><Flame size={18} /> Berani</span>
              <span><Trophy size={18} /> Football-first</span>
            </div>
          </div>
        </div>
      </section>

      <section className="nc-content-section" id="konten">
        <div className="nc-section-heading">
          <div>
            <div className="nc-section-tag nc-light">/ APA YANG KAMI BAWA</div>
            <h2>SATU BADGE.<br /><span>BANYAK CERITA.</span></h2>
          </div>
          <p>Dibuat untuk timeline yang bergerak cepat, tanpa kehilangan konteks.</p>
        </div>

        <div className="nc-pillar-grid">
          {contentPillars.map(({ number, title, body, icon: Icon }) => (
            <article className="nc-pillar-card" key={title}>
              <div className="nc-pillar-top"><span>{number}</span><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className="nc-card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="nc-schedule-section" id="jadwal">
        <div className="nc-schedule-intro">
          <div className="nc-section-tag">/ RITME KAMI</div>
          <h2>SELALU ADA<br /><span>ALASAN UNTUK KEMBALI.</span></h2>
          <p>Konten teratur, reaksi tepat waktu, dan cerita yang hidup sepanjang pekan.</p>
        </div>
        <div className="nc-schedule-list">
          {schedule.map(([day, title, desc], index) => (
            <div className="nc-schedule-row" key={day}>
              <span className="nc-day">{day}</span>
              <div><strong>{title}</strong><small>{desc}</small></div>
              <span className="nc-row-number">0{index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="nc-community" id="komunitas">
        <div className="nc-community-mark"><img src="/nalchester/nalchester-crest.png" alt="" /></div>
        <div>
          <div className="nc-section-tag nc-light">/ THE FAN STAND</div>
          <h2>JANGAN CUMA<br />JADI PENONTON.</h2>
          <p>Ikuti Nalchester dan ikut menentukan percakapan berikutnya.</p>
        </div>
        <a className="nc-community-cta" href="mailto:hello@nalchester.id">
          <span>Masuk ke komunitas</span><ArrowUpRight size={24} />
        </a>
      </section>

      <footer>
        <a className="nc-brand nc-footer-brand" href="#top">
          <img src="/nalchester/nalchester-crest.png" alt="Logo Nalchester" />
          <span>NALCHESTER</span>
        </a>
        <p>Akun fan independen. Tidak berafiliasi dengan Manchester United Football Club.</p>
        <div className="nc-footer-links"><a href="#top">Instagram</a><a href="#top">TikTok</a><a href="#top">YouTube</a></div>
      </footer>
    </main>
  );
}
