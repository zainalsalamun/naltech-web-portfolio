import './home-themes.css';

const projects = [
  { slug: 'senja-coffee', type: 'Food & Beverage', name: 'Senja Coffee', result: '+38% reservasi online', theme: 'coffee', number: '01' },
  { slug: 'ruang-arsitek', type: 'Architecture', name: 'Ruang Arsitek', result: '2.4× inquiry berkualitas', theme: 'space', number: '02' },
  { slug: 'lumiere-skincare', type: 'Beauty & Wellness', name: 'Lumière', result: '+46% product discovery', theme: 'lumiere', number: '03' },
  { slug: 'naltech-pay', type: 'Fintech Concept', name: 'Naltech Pay', result: 'Product landing experience', theme: 'pay', number: '04' },
  { slug: 'nalaride', type: 'Vehicle Rental', name: 'NalaRide', result: 'Rental booking experience', theme: 'ride', number: '05' },
  { slug: 'karsa-coffee', type: 'Coffee Shop', name: 'Karsa Coffee', result: 'Coffee shop brand experience', theme: 'karsa', number: '06' },
  { slug: 'nara-atelier', type: 'Fashion & Apparel', name: 'NARA Atelier', result: 'Editorial commerce experience', theme: 'nara', number: '07' },
];

const services = [
  { icon: '✦', title: 'Website Bisnis', text: 'Landing page dan company profile yang menjelaskan value bisnis dengan cepat dan meyakinkan.' },
  { icon: '◎', title: 'UI/UX Design', text: 'Pengalaman digital yang intuitif, konsisten, dan enak digunakan di setiap ukuran layar.' },
  { icon: '↗', title: 'Web Development', text: 'Website modern yang cepat, aman, mudah dirawat, dan siap tumbuh bersama bisnis.' },
  { icon: '◌', title: 'Growth Support', text: 'Optimasi performa, analitik, SEO dasar, serta dukungan setelah website diluncurkan.' },
];

const faqs = [
  ['Berapa lama proses pembuatan website?', 'Rata-rata 2–5 minggu, tergantung jumlah halaman dan kompleksitas fitur. Timeline final kami sepakati sebelum project dimulai.'],
  ['Apakah saya bisa mengubah konten sendiri?', 'Bisa. Kami dapat menyiapkan sistem pengelolaan konten yang sederhana serta panduan penggunaan untuk tim Anda.'],
  ['Apakah sudah termasuk domain dan hosting?', 'Kami membantu memilih dan menyiapkan domain serta hosting. Biaya layanan pihak ketiga akan dijelaskan secara transparan sejak awal.'],
  ['Bagaimana proses revisinya?', 'Setiap tahap memiliki sesi review terjadwal. Anda dapat memberi masukan terarah sebelum kami lanjut ke tahap berikutnya.'],
];

export default function Home() {
  return (
    <main className="nl-page">
      <div className="nl-announcement">Slot project September sudah dibuka <a href="mailto:hello@naltech.id">Amankan jadwal →</a></div>
      <header className="nl-header shell">
        <a className="nl-logo" href="#top" aria-label="Naltech home"><img src="/naltech-logo.png" alt="" />NALTECH</a>
        <nav className="nl-nav" aria-label="Navigasi utama"><a href="#services">Layanan</a><a href="#work">Portfolio</a><a href="#process">Proses</a><a href="#faq">FAQ</a></nav>
        <a className="nl-contact" href="mailto:hello@naltech.id">Konsultasi gratis <b>↗</b></a>
      </header>

      <section id="top" className="nl-hero shell">
        <div className="nl-hero-copy">
          <p className="nl-kicker">Web design & development studio</p>
          <h1>Website keren.<br /><span>Bisnis makin jalan.</span></h1>
          <p className="nl-intro">Dari ide sampai online, Naltech membantu bisnis Anda punya website yang profesional, cepat, dan siap mendatangkan pelanggan.</p>
          <div className="nl-actions"><a className="nl-primary" href="mailto:hello@naltech.id">Mulai project <b>↗</b></a><a className="nl-secondary" href="#work">Lihat portfolio</a></div>
          <div className="nl-proof"><strong>Partner digital untuk bisnis bertumbuh</strong><span>Strategi jelas · Desain orisinal · Support responsif</span></div>
        </div>
        <div className="nl-showcase" aria-label="Preview website buatan Naltech">
          <div className="nl-glow" />
          <div className="nl-browser">
            <div className="nl-browser-top"><i /><i /><i /><span>naltech.id/project</span></div>
            <div className="nl-browser-body"><div className="nl-mini-nav"><b>MODU.</b><span>Work&nbsp;&nbsp; Studio&nbsp;&nbsp; Contact</span></div><p>Architecture for<br />better living.</p><div className="nl-photo"><i /><i /></div></div>
          </div>
          <div className="nl-float nl-float-one"><span>↑</span><div><b>+42%</b><small>conversion rate</small></div></div>
          <div className="nl-float nl-float-two"><span>✓</span><div><b>PageSpeed 96</b><small>fast & optimized</small></div></div>
          <div className="nl-float nl-float-three"><span>●</span> Live in 21 days</div>
        </div>
      </section>

      <section className="nl-trust shell" aria-label="Keunggulan Naltech">
        <p>Dirancang untuk bisnis yang serius tumbuh</p>
        <div><span>Mobile-first</span><span>SEO-ready</span><span>Fast loading</span><span>Easy to manage</span><span>After-launch support</span></div>
      </section>

      <section id="services" className="nl-services">
        <div className="shell">
          <header className="nl-section-head"><p><span>01</span> Yang kami kerjakan</p><h2>Semua yang Anda butuhkan<br />untuk tampil <em>meyakinkan.</em></h2></header>
          <div className="nl-service-grid">
            {services.map((service, index) => <article className="nl-service-card" key={service.title}><span>{service.icon}</span><small>0{index + 1}</small><h3>{service.title}</h3><p>{service.text}</p><a href="mailto:hello@naltech.id" aria-label={`Diskusikan ${service.title}`}>Pelajari lebih lanjut ↗</a></article>)}
          </div>
        </div>
      </section>

      <section id="work" className="nl-work shell">
        <header className="nl-section-head dark"><p><span>02</span> Portfolio pilihan</p><h2>Beda bisnis,<br /><em>beda cerita.</em></h2><a href="mailto:hello@naltech.id">Diskusikan project Anda ↗</a></header>
        <div className="nl-projects">
          {projects.map((project) => (
            <a className="nl-project" href={`/demo/${project.slug}`} key={project.slug}>
              <div className={`nl-project-art ${project.theme}`}>
                <span>{project.number}</span>
                <div className="nl-project-browser"><div><i /><i /><i /></div><section><small>{project.type}</small><strong>{project.name}</strong><b>Lihat project</b></section></div>
              </div>
              <div className="nl-project-meta"><div><small>{project.type}</small><h3>{project.name}</h3></div><p>{project.result}</p><span>↗</span></div>
            </a>
          ))}
        </div>
      </section>

      <section id="process" className="nl-process">
        <div className="shell">
          <header className="nl-section-head"><p><span>03</span> Proses kerja</p><h2>Terarah dari awal.<br /><em>Tenang sampai online.</em></h2></header>
          <div className="nl-steps">
            <article><span>01</span><div>✦</div><h3>Kenalan & strategi</h3><p>Kami memahami bisnis, audiens, dan target Anda sebelum mulai mendesain.</p></article>
            <article><span>02</span><div>⌁</div><h3>Desain & validasi</h3><p>Arah visual diterjemahkan menjadi tampilan nyata untuk direview bersama.</p></article>
            <article><span>03</span><div>⌘</div><h3>Development</h3><p>Desain dibangun menjadi website responsif, cepat, dan mudah digunakan.</p></article>
            <article><span>04</span><div>↗</div><h3>Launch & support</h3><p>Kami bantu website online dan tetap mendampingi setelah peluncuran.</p></article>
          </div>
        </div>
      </section>

      <section className="nl-results shell">
        <div className="nl-result-copy"><p className="nl-kicker">Hasil yang bisa dirasakan</p><h2>Desain bagus itu penting.<br /><em>Dampaknya lebih penting.</em></h2><p>Kami menggabungkan pemikiran bisnis, komunikasi yang jernih, dan teknologi modern agar website bekerja sebagai aset—bukan sekadar pajangan.</p></div>
        <div className="nl-numbers"><article><strong>96<span>+</span></strong><p>rata-rata skor performa</p></article><article><strong>2–5<span>mgg</span></strong><p>rata-rata waktu pengerjaan</p></article><article><strong>100<span>%</span></strong><p>desain responsif</p></article><article><strong>30<span>hari</span></strong><p>support setelah launch</p></article></div>
      </section>

      <section className="nl-testimonial"><div className="shell"><span>“</span><blockquote>Naltech tidak cuma membuat website kami terlihat lebih profesional. Mereka membantu kami menyederhanakan pesan bisnis, dan inquiry yang masuk jadi jauh lebih relevan.</blockquote><div><strong>Andra Wijaya</strong><small>Founder, Ruang Studio</small></div></div></section>

      <section id="faq" className="nl-faq shell">
        <header><p className="nl-kicker">Frequently asked questions</p><h2>Yang sering<br /><em>ditanyakan.</em></h2><p>Belum menemukan jawaban? <a href="mailto:hello@naltech.id">Ngobrol dengan kami ↗</a></p></header>
        <div>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>0{index + 1}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="nl-final shell">
        <div className="nl-final-orb"><span>N</span><i /><i /></div>
        <p>Punya rencana website?</p><h2>Mari bikin sesuatu<br />yang <em>berdampak.</em></h2><a href="mailto:hello@naltech.id">Ceritakan project Anda <span>↗</span></a>
      </section>

      <footer className="nl-footer shell">
        <a className="nl-logo" href="#top"><img src="/naltech-logo.png" alt="" />NALTECH</a>
        <p>Web design & development studio<br />Jakarta, Indonesia</p>
        <div><a href="#services">Layanan</a><a href="#work">Portfolio</a><a href="#process">Proses</a><a href="#faq">FAQ</a></div>
        <div className="nl-socials">
          <a href="mailto:hello@naltech.id"><span>@</span>Email</a>
          <a href="https://www.instagram.com/naltech.ai/" target="_blank" rel="noreferrer"><span>IG</span>Instagram</a>
          <a href="https://www.tiktok.com/@naltech.ai" target="_blank" rel="noreferrer"><span>TT</span>TikTok</a>
          <a href="https://www.facebook.com/share/1EUS6YwWAt/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><span>FB</span>Facebook</a>
        </div>
        <small>© 2026 Naltech Studio. All rights reserved.</small>
      </footer>
    </main>
  );
}
