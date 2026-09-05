import './podkesan-cur.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Headphones,
  MessageCircleHeart,
  Mic2,
  Play,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'PODKESAN CUR — Podcast Tongkrongan',
  description: 'Konsep rumah digital PODKESAN CUR: episode terbaru, ANdaCURhat, jadwal, dan ruang kumpul pendengar.',
  alternates: { canonical: '/demo/podkesan-cur' },
  openGraph: {
    title: 'PODKESAN CUR — Harusnya Lucu Banget',
    description: 'Podcast tongkrongan Patra, Diaz, dan Dhika. Mengudara setiap Senin, Rabu, dan Jumat.',
    url: '/demo/podkesan-cur',
    images: [{ url: '/podkesan-cur/friends.jpg', width: 640, height: 640, alt: 'PODKESAN CUR' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PODKESAN CUR — Harusnya Lucu Banget',
    description: 'Podcast tongkrongan yang seru, harusnya lucu banget, dan tentu tidak memberi solusi.',
    images: ['/podkesan-cur/friends.jpg'],
  },
};

const instagramUrl = 'https://www.instagram.com/podkesan.cur/';
const spotifyUrl = 'https://open.spotify.com/show/5Y4JTcUmxTcHYaYiqxsKtz';
const saweriaUrl = 'https://saweria.co/podcastancur';

const episodes = [
  {
    number: '968',
    title: 'Episode Banyak Sensornya',
    detail: 'Bareng Bang Valent · 54 menit',
    tone: 'lime',
  },
  {
    number: '967',
    title: 'Rio Terobsesi Jadi Naykilla',
    detail: 'Obrolan tanpa filter · 47 menit',
    tone: 'pink',
  },
  {
    number: '966',
    title: 'Tamu dari Zoetermeer',
    detail: 'Curhat lintas benua · 59 menit',
    tone: 'yellow',
  },
];

export default function PodkesanCurPage() {
  return (
    <main className="pc-page">
      <Link className="pc-demo" href="/#work">
        <span>CONCEPT WEBSITE</span> BY NALTECH STUDIO <ArrowUpRight size={14} />
      </Link>

      <nav className="pc-nav" aria-label="Navigasi PODKESAN CUR">
        <a className="pc-brand" href="#top" aria-label="PODKESAN CUR, kembali ke atas">
          <img src="/podkesan-cur/logo.jpg" alt="Logo PODKESAN CUR" width={52} height={52} />
          <strong>PODKESAN<span>/CUR</span></strong>
        </a>
        <div className="pc-nav-links">
          <a href="#episode">Episode</a>
          <a href="#about">Tentang</a>
          <a href="#ancurhat">ANdaCURhat</a>
        </div>
        <a className="pc-listen" href={spotifyUrl} target="_blank" rel="noreferrer">
          <Play size={15} fill="currentColor" /> Putar sekarang
        </a>
      </nav>

      <header className="pc-hero" id="top">
        <div className="pc-halftone" aria-hidden="true" />
        <div className="pc-hero-copy">
          <p className="pc-kicker"><Mic2 size={17} /> Dulunya Podcast Ancur · Patra, Diaz, Dhika</p>
          <h1>
            <span>PODKESAN</span>
            <em>CUR!</em>
          </h1>
          <p className="pc-hero-note">Podcast tongkrongan yang seru dan harusnya lucu banget. <b>Harusnya ya.</b></p>
          <div className="pc-actions">
            <a href={spotifyUrl} target="_blank" rel="noreferrer"><Headphones size={19} /> Dengerin di Spotify <ArrowUpRight size={18} /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer"><Camera size={19} /> @podkesan.cur</a>
          </div>
        </div>

        <div className="pc-hero-art">
          <div className="pc-photo-card">
            <img src="/podkesan-cur/friends.jpg" alt="PODKESAN CUR bersama teman dan bintang tamu" />
            <span>18+</span>
          </div>
          <div className="pc-burst">HARUSNYA<br /><strong>LUCU!</strong></div>
          <div className="pc-schedule"><CalendarDays size={19} /><span>BARU TIAP</span><b>SEN · RAB · JUM</b></div>
          <div className="pc-sound" aria-label="Gelombang audio sedang diputar">
            {[24, 45, 68, 34, 80, 52, 30, 62, 88, 41, 72, 27].map((height, index) => (
              <i key={index} style={{ height: `${height}%`, animationDelay: `${index * -0.08}s` }} />
            ))}
          </div>
        </div>
      </header>

      <div className="pc-ticker" aria-hidden="true">
        <div><span>NGOBROL</span><i>★</i><span>CURHAT</span><i>★</i><span>KETAWA</span><i>★</i><span>NO SOLUSI</span><i>★</i><span>INSYAALLAH</span><i>★</i><span>NGOBROL</span><i>★</i></div>
      </div>

      <section className="pc-episodes" id="episode">
        <header className="pc-section-head">
          <p>01 / LAGI ANGET</p>
          <h2>EPISODE BARU.<br /><em>MASALAH LAMA.</em></h2>
          <a href={spotifyUrl} target="_blank" rel="noreferrer">Lihat semua episode <ArrowUpRight size={18} /></a>
        </header>

        <div className="pc-episode-grid">
          <a className="pc-featured" href={spotifyUrl} target="_blank" rel="noreferrer">
            <img src="/podkesan-cur/horror.jpg" alt="Artwork episode PODKESAN CUR" />
            <div className="pc-featured-copy">
              <span>PILIHAN CUR</span>
              <h3>SETAN PUN<br />BOLEH IKUT<br />NONGKRONG.</h3>
              <p>Cerita horor, pertemanan, hubungan, sampai masalah hidup yang tidak pernah benar-benar selesai.</p>
              <b><Play size={15} fill="currentColor" /> Putar episode</b>
            </div>
          </a>

          <div className="pc-episode-list">
            {episodes.map((episode) => (
              <a href={spotifyUrl} target="_blank" rel="noreferrer" key={episode.number} className={`pc-episode ${episode.tone}`}>
                <span>EP. {episode.number}</span>
                <h3>{episode.title}</h3>
                <p>{episode.detail}</p>
                <b><Play size={15} fill="currentColor" /></b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pc-about" id="about">
        <div className="pc-about-title">
          <p>02 / SIAPA KITA?</p>
          <h2>TONGKRONGAN<br />YANG KELEWAT<br /><em>DIREKAM.</em></h2>
        </div>
        <div className="pc-about-copy">
          <p>Obrolan Patra, Diaz, dan Dhika tentang apa saja—dari yang sedang ramai sampai curhatan paling personal. Spontan, dekat, dan selalu terasa seperti duduk di meja yang sama.</p>
          <div className="pc-stats">
            <article><strong>968+</strong><span>episode dan terus bertambah</span></article>
            <article><strong>3×</strong><span>mengudara setiap minggu</span></article>
            <article><strong>21.7K</strong><span>teman nongkrong di Instagram</span></article>
          </div>
        </div>
        <div className="pc-hosts" aria-label="Host PODKESAN CUR">
          {['PATRA', 'DIAZ', 'DHIKA'].map((host, index) => (
            <div key={host}><small>0{index + 1}</small><strong>{host}</strong><span>HOST / CUR</span></div>
          ))}
        </div>
      </section>

      <section className="pc-ancurhat" id="ancurhat">
        <div className="pc-ancurhat-badge"><MessageCircleHeart size={42} /><span>#ANdaCURhat</span></div>
        <div className="pc-ancurhat-copy">
          <p>03 / CERITA LO, RISIKO LO</p>
          <h2>PUNYA CURHATAN<br />YANG TERLALU<br /><em>ANCUR?</em></h2>
          <p>Kirim cerita lewat Instagram atau dukung acara lewat Saweria. Pesan bisa dibacakan, dibahas, mungkin juga ditertawakan—tapi apakah akan diberi solusi? Tentu tidak.</p>
          <div>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Curhat lewat Instagram <Camera size={18} /></a>
            <a href={saweriaUrl} target="_blank" rel="noreferrer">Kirim lewat Saweria <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className="pc-final">
        <p>Podcast komedi · Indonesia</p>
        <h2>DATANG BUAT<br />CURHAT. PULANG<br /><em>MAKIN ANCUR.</em></h2>
        <a href={spotifyUrl} target="_blank" rel="noreferrer">Mulai dengar <ArrowDownRight size={22} /></a>
      </section>

      <footer className="pc-footer">
        <a className="pc-brand" href="#top"><img src="/podkesan-cur/logo.jpg" alt="" width={52} height={52} /><strong>PODKESAN<span>/CUR</span></strong></a>
        <div><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href={spotifyUrl} target="_blank" rel="noreferrer">Spotify ↗</a><a href={saweriaUrl} target="_blank" rel="noreferrer">Saweria ↗</a></div>
        <p>Concept website independently created by Naltech Studio. Not an official PODKESAN CUR website.</p>
      </footer>
    </main>
  );
}
