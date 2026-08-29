import type { Metadata } from 'next';
import './nara.css';

export const metadata: Metadata = {
  title: 'NARA Atelier — Modern Fashion Concept by Naltech',
  description: 'Contoh landing page fashion editorial modern yang dirancang oleh Naltech.',
  alternates: { canonical: '/demo/nara-atelier' },
  openGraph: { title: 'NARA Atelier — Modern Fashion Concept by Naltech', description: 'Quiet forms. Bold presence.', images: [new URL('/fashion/hero.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id')] },
  twitter: { title: 'NARA Atelier — Modern Fashion Concept by Naltech', description: 'Quiet forms. Bold presence.', images: [new URL('/fashion/hero.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id')] },
};

export default function NaraAtelierPage() {
  return (
    <main className="na-page">
      <div className="na-demo"><a href="/">← Kembali ke portfolio</a><span>Concept project by Naltech</span></div>
      <header className="na-header">
        <a className="na-logo" href="#top">NARA<span>ATELIER</span></a>
        <nav><a href="#collection">New collection</a><a href="#lookbook">Lookbook</a><a href="#story">Our story</a></nav>
        <div><a href="#newsletter">Search</a><a href="#collection">Bag (0)</a><a className="na-menu" href="#collection">Menu</a></div>
      </header>
      <section id="top" className="na-hero">
        <div className="na-hero-copy"><p>SPRING / SUMMER 2026</p><h1>Quiet forms.<br /><em>Bold presence.</em></h1><div><p>A study in movement, structure, and ease. Designed in Jakarta, made for wherever life takes you.</p><a href="#collection">Explore collection <span>↘</span></a></div></div>
        <div className="na-hero-image"><img src="/fashion/hero.jpg" alt="Model mengenakan koleksi terbaru NARA Atelier" /><span>LOOK 01 / 24</span></div>
        <aside><span>N</span><p>MODERN ESSENTIALS<br />FOR EVERYDAY LIFE</p></aside>
      </section>

      <section className="na-ticker"><div><span>NEW SEASON</span><i>✦</i><span>RESPONSIBLY MADE</span><i>✦</i><span>JAKARTA / INDONESIA</span><i>✦</i><span>FREE SHIPPING OVER 2M</span></div></section>

      <section id="collection" className="na-collection na-wrap">
        <header className="na-heading"><p><span>01</span> New collection</p><h2>Essential pieces.<br /><em>Endless ways.</em></h2><div><button className="active">Women</button><button>Men</button><button>Objects</button></div></header>
        <div className="na-products">
          <article><div><img src="/fashion/look-one.jpg" alt="NARA structured blazer" /><button aria-label="Tambahkan Structured Blazer ke wishlist">♡</button><span>NEW</span></div><footer><p><strong>Structured Blazer 01</strong><small>Wool blend · Charcoal</small></p><b>Rp2.890.000</b></footer></article>
          <article><div><img src="/fashion/look-two.jpg" alt="NARA fluid dress" /><button aria-label="Tambahkan Fluid Dress ke wishlist">♡</button></div><footer><p><strong>Fluid Dress 02</strong><small>Tencel twill · Bone</small></p><b>Rp2.450.000</b></footer></article>
          <article><div><img src="/fashion/hero.jpg" alt="NARA sculpted coat" /><button aria-label="Tambahkan Sculpted Coat ke wishlist">♡</button><span>LIMITED</span></div><footer><p><strong>Sculpted Coat 03</strong><small>Organic cotton · Black</small></p><b>Rp3.750.000</b></footer></article>
        </div>
        <a className="na-view-all" href="#lookbook">View all pieces <span>↗</span></a>
      </section>

      <section id="story" className="na-manifesto">
        <div className="na-manifesto-copy"><p><span>02</span> Our philosophy</p><h2>Less noise.<br />More <em>meaning.</em></h2><p>NARA creates considered clothing for modern life—precise in form, effortless in movement, and made to remain relevant beyond a single season.</p><blockquote>Designed with restraint.<br />Worn without rules.</blockquote><a href="#craft">Discover our approach ↘</a></div>
        <div className="na-manifesto-art"><span>FORM<br />/ 01</span><div><i /><i /><b>N</b></div><p>JAKARTA<br />2026</p></div>
      </section>

      <section id="lookbook" className="na-lookbook">
        <header className="na-heading na-wrap"><p><span>03</span> Lookbook</p><h2>Between structure<br />and <em>movement.</em></h2><p>Spring / Summer 2026<br />Photographed in Jakarta</p></header>
        <div className="na-look-grid"><figure><img src="/fashion/hero.jpg" alt="NARA campaign look one" /><figcaption>LOOK 01 · SCULPTED COAT</figcaption></figure><figure><img src="/fashion/look-two.jpg" alt="NARA campaign look two" /><figcaption>LOOK 08 · FLUID DRESS</figcaption></figure><figure><img src="/fashion/look-one.jpg" alt="NARA campaign look three" /><figcaption>LOOK 16 · MODULAR SET</figcaption></figure></div>
      </section>

      <section id="craft" className="na-craft na-wrap">
        <header className="na-heading"><p><span>04</span> Considered craft</p><h2>Made slowly.<br /><em>Kept longer.</em></h2></header>
        <div className="na-craft-grid"><div className="na-craft-image"><img src="/fashion/detail.jpg" alt="Detail koleksi dan material NARA Atelier" /><span>DETAIL / MATERIAL / FORM</span></div><div className="na-craft-list"><article><span>01</span><div><h3>Responsible materials</h3><p>Natural, recycled, and lower-impact fibers selected for feel, function, and longevity.</p></div></article><article><span>02</span><div><h3>Local craftsmanship</h3><p>Cut and constructed in small runs with experienced makers across Java.</p></div></article><article><span>03</span><div><h3>Designed for repair</h3><p>Thoughtful construction and aftercare support help every piece live longer.</p></div></article><article><span>04</span><div><h3>Limited production</h3><p>Measured quantities reduce excess while protecting the value of each garment.</p></div></article></div></div>
      </section>

      <section className="na-campaign"><img src="/fashion/look-two.jpg" alt="NARA Atelier seasonal campaign" /><div><p>CAMPAIGN 02 / 2026</p><h2>A new language<br />of <em>ease.</em></h2><a href="#collection">Shop the edit <span>↗</span></a></div><aside>ART DIRECTION · NARA STUDIO<br />PHOTOGRAPHY · CONCEPT IMAGE</aside></section>

      <section className="na-journal na-wrap"><header className="na-heading"><p><span>05</span> NARA Journal</p><h2>Notes on form,<br />people, and <em>process.</em></h2></header><div className="na-journal-grid"><article><span>01 / PROCESS</span><h3>Why one good coat can shape an entire wardrobe.</h3><a href="#newsletter">Read story ↗</a></article><article><span>02 / PEOPLE</span><h3>In conversation with ceramic artist Ayu Larasati.</h3><a href="#newsletter">Read story ↗</a></article><article><span>03 / MATERIAL</span><h3>A closer look at our regenerated wool blend.</h3><a href="#newsletter">Read story ↗</a></article></div></section>

      <section id="newsletter" className="na-newsletter"><div className="na-wrap"><p>PRIVATE NOTES / EARLY ACCESS</p><h2>Stay close to<br /><em>what comes next.</em></h2><form><label><span>Email address</span><input type="email" placeholder="your@email.com" aria-label="Email address" /></label><button type="button">Join the list <span>↗</span></button></form><small>By subscribing, you agree to receive news from NARA Atelier.</small></div></section>

      <footer className="na-footer na-wrap"><a className="na-logo" href="#top">NARA<span>ATELIER</span></a><p>Modern essentials designed in Jakarta.<br />Made with intention.</p><div><a href="#collection">Shop</a><a href="#lookbook">Lookbook</a><a href="#story">About</a><a href="#craft">Responsibility</a></div><div><a href="/">Portfolio Naltech</a><a href="mailto:naltechai@gmail.com">Create a project like this</a></div><small>© 2026 NARA Atelier · Concept website by Naltech Studio · Not an active fashion store</small></footer>
    </main>
  );
}
