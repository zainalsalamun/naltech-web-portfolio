const projects = [
  { slug: 'senja-coffee', category: 'Food & Beverage', title: 'Senja Coffee', description: 'Landing page hangat untuk coffee shop lokal dengan menu, cerita brand, dan reservasi.', accent: 'from-[#f0a969] to-[#7b392b]', number: '01' },
  { slug: 'ruang-arsitek', category: 'Architecture', title: 'Ruang Arsitek', description: 'Portfolio minimal untuk studio arsitektur yang menonjolkan proyek dan pendekatan desain.', accent: 'from-[#d9d2c5] to-[#62645e]', number: '02' },
  { slug: 'lumiere-skincare', category: 'Beauty & Wellness', title: 'Lumière', description: 'Etalase produk premium dengan storytelling yang lembut dan fokus pada konversi.', accent: 'from-[#f4d9d2] to-[#b87172]', number: '03' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navigasi utama">
        <a className="brand" href="#top" aria-label="Naltech home">NALTECH<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Karya</a><a href="#services">Layanan</a>
          <a className="nav-cta" href="mailto:hello@naltech.id">Mulai proyek</a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div className="eyebrow"><span /> Digital studio · Indonesia</div>
        <h1>Website yang membuat<br /><em>brand dipilih.</em></h1>
        <div className="hero-bottom">
          <p>Kami merancang website yang terasa berbeda, bekerja cepat, dan mengubah pengunjung menjadi pelanggan.</p>
          <a className="circle-link" href="#work" aria-label="Lihat karya pilihan">↓</a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-card art-card-back"><span>CREATIVE</span></div>
          <div className="art-card art-card-front">
            <div className="mini-nav"><b>N.</b><i /><i /><i /></div>
            <div className="mini-copy"><small>WEBSITE STUDIO</small><strong>Ideas made<br />visible.</strong></div>
            <div className="mini-orb" />
          </div>
          <p>Strategi · Desain · Development</p>
        </div>
      </section>

      <section id="work" className="work shell">
        <header className="section-heading">
          <div><span>01</span><p>Karya pilihan</p></div>
          <h2>Satu standar.<br />Banyak karakter.</h2>
        </header>
        <div className="project-grid">
          {projects.map((project) => (
            <a className="project-card" href={`/demo/${project.slug}`} key={project.slug}>
              <div className={`project-visual bg-gradient-to-br ${project.accent}`}>
                <span className="project-number">{project.number}</span>
                <div className="browser-mockup">
                  <div className="browser-bar"><i /><i /><i /></div>
                  <div className="browser-content"><small>{project.category}</small><strong>{project.title}</strong><span /></div>
                </div>
              </div>
              <div className="project-info">
                <div><small>{project.category}</small><h3>{project.title}</h3></div>
                <p>{project.description}</p><span className="arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="services" className="manifesto">
        <div className="shell manifesto-inner">
          <p className="eyebrow light"><span /> Cara kami bekerja</p>
          <h2>Bukan sekadar terlihat bagus.<br /><em>Harus terasa tepat.</em></h2>
          <div className="services"><p>Brand strategy</p><p>Web design</p><p>Development</p><p>Launch support</p></div>
        </div>
      </section>

      <footer className="footer shell">
        <div><span>Punya ide?</span><h2>Mari kita buat<br />jadi nyata.</h2></div>
        <a href="mailto:hello@naltech.id">hello@naltech.id <span>↗</span></a>
        <p>© 2026 Naltech Studio</p>
      </footer>
    </main>
  );
}
