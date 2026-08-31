import './the-united-wave.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Camera, Play, Radio, Video } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The United Wave — Whatever Happens, Stay United',
  description: 'Konsep rumah digital The United Wave, fan media Manchester United dari Indonesia.',
  alternates: { canonical: '/demo/the-united-wave' },
  openGraph: {
    title: 'The United Wave — Whatever Happens, Stay United',
    description: 'News, match reaction, fan insight, podcast, dan suara United dari Indonesia.',
    url: '/demo/the-united-wave',
    images: [{ url: '/the-united-wave/murderball.jpg', width: 1216, height: 2160, alt: 'The United Wave concept website' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The United Wave — Whatever Happens, Stay United',
    description: 'Rumah digital fan media Manchester United dari Indonesia.',
    images: ['/the-united-wave/murderball.jpg'],
  },
};

const instagramUrl = 'https://www.instagram.com/theunitedwave/?hl=en';
const youtubeUrl = 'https://www.youtube.com/@theunitedwave';

const formats = [
  ['01', 'Wave News', 'Update klub dan kabar terbaru dengan konteks yang mudah diikuti.'],
  ['02', 'Match Reaction', 'Reaksi jujur dari kick-off sampai obrolan panjang setelah peluit akhir.'],
  ['03', 'Fan Insight', 'Opini, polling, dan sudut pandang supporter Indonesia tanpa kehilangan identitas.'],
  ['04', 'The United Talk', 'Percakapan panjang bersama figur sepak bola, legenda, dan sesama fan media.'],
];

const waveFaces = ['JAMILO', 'MARDEL', 'KEYLIE', 'KOKOH', 'GAUTAMA', 'MAKARIOS'];

export default function TheUnitedWavePage() {
  return (
    <main className="uw-page">
      <Link className="uw-demo" href="/#work">← Concept project by Naltech Studio</Link>

      <nav className="uw-nav" aria-label="Navigasi The United Wave">
        <a className="uw-brand" href="#top" aria-label="The United Wave, kembali ke atas">
          <img src="/the-united-wave/logo.jpg" alt="Logo The United Wave" />
          <span>THE UNITED WAVE</span>
        </a>
        <div className="uw-nav-links">
          <a href="#latest">Latest</a>
          <a href="#formats">Formats</a>
          <a href="#about">About</a>
        </div>
        <a className="uw-watch" href={youtubeUrl} target="_blank" rel="noreferrer">
          Watch now <Play size={14} fill="currentColor" />
        </a>
      </nav>

      <header className="uw-hero" id="top">
        <div className="uw-hero-copy">
          <div className="uw-kicker"><span>Indonesia</span> · MUFC fan media channel</div>
          <h1>WHATEVER<br />HAPPENS, <em>STAY</em><br />UNITED.</h1>
          <p>
            News, match reaction, fan insight, dan obrolan tanpa jaim—
            dibawakan dari Indonesia untuk semua yang memilih tetap United.
          </p>
          <div className="uw-actions">
            <a className="uw-primary" href={youtubeUrl} target="_blank" rel="noreferrer">
              <Video size={18} /> Tonton di YouTube <ArrowRight size={18} />
            </a>
            <a className="uw-secondary" href={instagramUrl} target="_blank" rel="noreferrer">
              <Camera size={18} /> Ikuti @theunitedwave
            </a>
          </div>
          <div className="uw-proof">
            <div><strong>108K</strong><span>Instagram followers</span></div>
            <div><strong>33.9K</strong><span>YouTube subscribers</span></div>
            <div><strong>1.7K+</strong><span>Videos published</span></div>
          </div>
        </div>

        <div className="uw-hero-stage" aria-label="Visual The United Wave">
          <div className="uw-stage-number">#01</div>
          <div className="uw-photo-frame">
            <img src="/the-united-wave/murderball.jpg" alt="The United Wave fan culture collaboration" />
          </div>
          <div className="uw-logo-card">
            <img src="/the-united-wave/logo.jpg" alt="" />
            <div><span>THE HOME OF</span><strong>WE ARE WAVE</strong></div>
          </div>
          <div className="uw-live-card"><Radio size={16} /><span><b>LIVE REACTION</b> Matchday is better together.</span></div>
          <div className="uw-orbit" aria-hidden="true">WAVE · UNITED · INDONESIA · </div>
        </div>
      </header>

      <div className="uw-ticker" aria-label="Topik The United Wave">
        <div>
          <span>NEWS</span><i>●</i><span>MATCH REACTION</span><i>●</i><span>FAN INSIGHT</span><i>●</i>
          <span>PODCAST</span><i>●</i><span>COMMUNITY</span><i>●</i><span>STAY UNITED</span><i>●</i>
        </div>
      </div>

      <section className="uw-latest" id="latest">
        <div className="uw-section-head">
          <div><span>01 / LATEST PULSE</span><h2>WHAT THE WAVE<br />IS <em>TALKING ABOUT.</em></h2></div>
          <p>Berita boleh berubah cepat. Suara fans tetap perlu tempat untuk pulang.</p>
        </div>
        <div className="uw-story-grid">
          <a className="uw-story uw-story-main" href="https://www.youtube.com/watch?v=qZeYjKy8fx4" target="_blank" rel="noreferrer">
            <div className="uw-story-image"><img src="/the-united-wave/indonesia.webp" alt="The United Wave Indonesia" /><span>Match review</span></div>
            <div className="uw-story-copy"><small>Latest on YouTube · 12 min</small><h3>Kokoh United: “Senne Lammens top, Kobbie Mainoo gokil!”</h3><b>Watch the conversation <ArrowUpRight size={17} /></b></div>
          </a>
          <a className="uw-story" href="https://www.instagram.com/theunitedwave/" target="_blank" rel="noreferrer">
            <div className="uw-story-image"><img src="/the-united-wave/murderball.jpg" alt="The United Wave fan culture" /><span>Fan culture</span></div>
            <div className="uw-story-copy"><small>Collaboration</small><h3>Passion that stays ignited.</h3><b>See on Instagram <ArrowUpRight size={17} /></b></div>
          </a>
          <a className="uw-story" href="https://www.instagram.com/theunitedwave/" target="_blank" rel="noreferrer">
            <div className="uw-story-image"><img src="/the-united-wave/old-trafford.jpg" alt="Open trip menuju Old Trafford" /><span>Community</span></div>
            <div className="uw-story-copy"><small>Old Trafford trip</small><h3>Dari Indonesia, pulang ke Theatre of Dreams.</h3><b>See the journey <ArrowUpRight size={17} /></b></div>
          </a>
        </div>
      </section>

      <section className="uw-manifesto" id="about">
        <div className="uw-manifesto-mark"><img src="/the-united-wave/logo.jpg" alt="" /></div>
        <div className="uw-manifesto-copy">
          <span>02 / THE PHILOSOPHY</span>
          <h2>A WAVE DOESN’T<br />ASK WHO YOU ARE.<br /><em>IT MOVES AS ONE.</em></h2>
          <div>
            <p>The United Wave lahir dari keberagaman gairah fans sepak bola Indonesia. Beda opini, beda generasi, satu kecintaan yang terus bergerak.</p>
            <p>Nama “Wave” menjadi simbol energi kolektif: datang bergantian, membesar bersama, dan tidak pernah benar-benar berhenti.</p>
          </div>
        </div>
      </section>

      <section className="uw-formats" id="formats">
        <div className="uw-section-head uw-head-light">
          <div><span>03 / OUR FORMATS</span><h2>MORE THAN<br /><em>NINETY MINUTES.</em></h2></div>
          <p>Satu ekosistem konten untuk mengikuti United sepanjang pekan.</p>
        </div>
        <div className="uw-format-list">
          {formats.map(([number, title, body]) => (
            <article key={title}>
              <span>{number}</span><h3>{title}</h3><p>{body}</p><b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="uw-channel">
        <div className="uw-channel-copy">
          <span>04 / WATCH TOGETHER</span>
          <h2>THE STAND<br />NEVER GOES<br /><em>QUIET.</em></h2>
          <p>Live reaction, interview eksklusif, podcast, dan review pertandingan—semuanya ada di satu kanal.</p>
          <a href={youtubeUrl} target="_blank" rel="noreferrer"><Play size={17} fill="currentColor" /> Open YouTube channel <ArrowRight size={17} /></a>
        </div>
        <div className="uw-screen">
          <div className="uw-screen-top"><i /><i /><i /><span>youtube.com/@theunitedwave</span></div>
          <div className="uw-screen-body">
            <div className="uw-play"><Play size={38} fill="currentColor" /></div>
            <small>FEATURED INTERVIEW</small>
            <strong>LUIS NANI EXCLUSIVE<br />IN JAKARTA</strong>
            <p>“Klub ini sedang berproses untuk bangkit.”</p>
          </div>
        </div>
      </section>

      <section className="uw-people">
        <div className="uw-people-intro"><span>05 / VOICES OF THE WAVE</span><h2>ONE CREST.<br /><em>MANY VOICES.</em></h2></div>
        <div className="uw-face-row">
          {waveFaces.map((name, index) => <div key={name}><small>0{index + 1}</small><strong>{name}</strong><span>W</span></div>)}
        </div>
      </section>

      <section className="uw-final">
        <div className="uw-final-logo"><img src="/the-united-wave/logo.jpg" alt="Logo The United Wave" /></div>
        <div><span>#WEAREWAVE</span><h2>WHATEVER<br />HAPPENS,<br /><em>STAY UNITED.</em></h2></div>
        <div className="uw-final-actions">
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={18} /></a>
          <a href={youtubeUrl} target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={18} /></a>
        </div>
      </section>

      <footer className="uw-footer">
        <a className="uw-brand" href="#top"><img src="/the-united-wave/logo.jpg" alt="" /><span>THE UNITED WAVE</span></a>
        <p>Fan media channel from Indonesia. Concept website independently created by Naltech Studio.</p>
        <span>NOT AFFILIATED WITH MANCHESTER UNITED FC.</span>
      </footer>
    </main>
  );
}
