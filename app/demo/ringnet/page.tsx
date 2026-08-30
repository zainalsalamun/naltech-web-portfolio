import type { Metadata } from 'next';
import './ringnet.css';
import { CoverageChecker, PackageFinder } from './RingNetInteractions';

export const metadata: Metadata = {
  title: 'RingNet — Internet Fiber untuk Rumah dan Bisnis | Naltech Studio',
  description: 'Demo landing page RingNet untuk layanan internet fiber rumah, UMKM, kantor, dan perusahaan dengan dukungan teknis 24/7.',
  alternates: { canonical: '/demo/ringnet' },
  openGraph: {
    title: 'RingNet — Internet Stabil untuk Rumah dan Bisnis',
    description: 'Cek jangkauan, temukan paket, dan konsultasikan kebutuhan internet bersama RingNet.',
    url: '/demo/ringnet',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: 'RingNet — Internet Stabil untuk Rumah dan Bisnis',
    description: 'Cek jangkauan, temukan paket, dan konsultasikan kebutuhan internet bersama RingNet.',
    images: [],
  },
};

const whatsappUrl = 'https://wa.me/6287839988767?text=Halo%20RingNet%2C%20saya%20ingin%20cek%20coverage%20dan%20paket%20internet.';

const packages = [
  { name: 'Ring Home 20', speed: '20 Mbps', fit: '1–4 perangkat', tag: 'Paling hemat', features: ['Unlimited sesuai ketentuan', 'Fiber optic', 'Dukungan teknis'] },
  { name: 'Ring Home 50', speed: '50 Mbps', fit: 'Keluarga & streaming', tag: 'Paling populer', features: ['Banyak perangkat', 'Meeting & streaming', 'Dukungan teknis 24/7'] },
  { name: 'Ring Home 100', speed: '100 Mbps', fit: 'Gaming & creator', tag: 'Performa tinggi', features: ['Gaming & live streaming', 'Rumah produktif', 'Prioritas konsultasi'] },
  { name: 'Ring Home Pro', speed: 'Fleksibel', fit: 'Rumah besar & usaha', tag: 'Kebutuhan khusus', features: ['Kapasitas menyesuaikan', 'Survey kebutuhan', 'Rancangan jaringan'] },
];

const businessSolutions = [
  ['Internet Dedicated', 'Bandwidth khusus untuk operasional yang membutuhkan kestabilan, SLA, opsi IP public, dan monitoring.'],
  ['Broadband Business', 'Koneksi praktis untuk UMKM, toko, kafe, sekolah, dan kantor kecil.'],
  ['Bandwidth on Demand', 'Tambahan kapasitas sementara untuk event, webinar, konferensi, dan live streaming.'],
  ['Managed Service', 'Pendampingan router, access point, konfigurasi, monitoring, dan troubleshooting.'],
  ['Local Loop', 'Koneksi point-to-point untuk menghubungkan lokasi atau jaringan pelanggan.'],
  ['Collocation', 'Penempatan perangkat sesuai fasilitas dan layanan yang tersedia setelah konsultasi.'],
];

const faqs = [
  ['Apakah paket RingNet unlimited?', 'Ketentuan unlimited dan kebijakan FUP mengikuti paket serta wilayah. Tim akan menjelaskan detailnya sebelum pemasangan.'],
  ['Berapa biaya pemasangan?', 'Biaya bergantung pada paket, lokasi, perangkat, dan kebutuhan jalur instalasi. Rincian diberikan setelah coverage atau survey dikonfirmasi.'],
  ['Berapa lama proses pemasangan?', 'Estimasi jadwal diberikan setelah lokasi dinyatakan terjangkau dan kebutuhan instalasi selesai diperiksa.'],
  ['Apakah RingNet tersedia di lokasi saya?', 'Gunakan pemeriksaan coverage, kemudian kirim lokasi sendiri melalui WhatsApp agar tim jaringan dapat mengonfirmasi.'],
  ['Apakah tersedia paket bisnis dan IP public?', 'Tersedia layanan broadband bisnis dan dedicated. Opsi IP public mengikuti layanan dan kebijakan yang berlaku.'],
  ['Bagaimana melaporkan gangguan?', 'Hubungi support 24/7 melalui WhatsApp dan sertakan ID pelanggan serta ringkasan gangguan.'],
];

export default function RingNetPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'InternetServiceProvider',
    name: 'RingNet',
    legalName: 'PT Ring Media Nusantara',
    foundingDate: '2020',
    telephone: '+6287839988767',
    url: 'https://studio.naltech.web.id/demo/ringnet',
  };

  return (
    <main className="rn-page" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="rn-demo-back" href="/">← Demo project by Naltech Studio</a>
      <div className="rn-topbar"><span>● Support pelanggan 24/7</span><a href={whatsappUrl}>WhatsApp 0878-3998-8767 ↗</a></div>
      <header className="rn-header">
        <a className="rn-logo" href="#top"><img src="/ringnet/logo.png" alt="RingNet Internet Service Provider" className="rn-brand-logo" /></a>
        <nav aria-label="Navigasi RingNet"><a href="#home">Internet Rumah</a><a href="#business">Internet Bisnis</a><a href="#services">Layanan</a><a href="#coverage">Coverage</a><a href="#about">Tentang</a><a href="#faq">Bantuan</a></nav>
        <div><a href="#coverage">Cek coverage</a><a href="#register">Daftar sekarang <b>↗</b></a></div>
      </header>

      <section className="rn-hero">
        <div className="rn-hero-copy">
          <p><span>✦</span> Internet fiber untuk rumah dan bisnis</p>
          <h1>Internet stabil<br />untuk <em>semua</em><br />kebutuhanmu.</h1>
          <p>Nikmati koneksi internet unlimited dengan jaringan fiber optic, dukungan teknis 24/7, dan pilihan layanan untuk rumah maupun bisnis.</p>
          <div><a href="#coverage">Cek jangkauan <b>↗</b></a><a href="#packages">Lihat paket</a></div>
          <small>Masukkan lokasi untuk mengetahui ketersediaan jaringan RingNet di area Anda.</small>
        </div>
        <div className="rn-hero-visual" aria-label="Ilustrasi koneksi internet rumah dan bisnis">
          <article className="home"><span>Internet Rumah</span><strong>Streaming, kerja &amp; belajar tanpa batas.</strong><div className="house"><i /><i /><b>Wi-Fi</b></div></article>
          <article className="business"><span>Internet Bisnis</span><strong>Koneksi andal untuk operasional.</strong><div className="building"><i /><i /><i /><b>24/7</b></div></article>
          <div className="signal"><i /><i /><i /><span>FIBER<br /><b>CONNECTED</b></span></div>
        </div>
      </section>

      <section className="rn-proof" aria-label="Informasi kepercayaan RingNet">
        <span><small>Beroperasi sejak</small><b>2020</b></span><span><small>Dukungan teknis</small><b>24/7</b></span><span><small>Infrastruktur</small><b>Fiber optic</b></span><span><small>Legalitas</small><b>ISP berizin</b></span><span><small>Keanggotaan</small><b>APJII</b></span>
      </section>

      <section className="rn-needs rn-shell">
        <header className="rn-section-head"><p><span>01</span> Pilih kebutuhan</p><h2>Internet untuk<br /><em>kebutuhan apa?</em></h2><p>Mulai dari konteks penggunaan agar solusi yang ditawarkan tetap relevan dan mudah dipahami.</p></header>
        <div className="rn-need-grid">
          <article id="home"><span>Untuk rumah</span><h3>Koneksi untuk seluruh aktivitas keluarga.</h3><p>Streaming, gaming, belajar, bekerja, CCTV, dan banyak perangkat dalam satu jaringan.</p><ul><li>Unlimited</li><li>Fiber optic</li><li>Banyak perangkat</li><li>Bantuan teknis</li></ul><a href="#packages">Lihat paket rumah <b>↗</b></a></article>
          <article id="business"><span>Untuk bisnis</span><h3>Infrastruktur yang mengikuti operasional.</h3><p>Untuk UMKM, kantor, sekolah, hotel, klinik, hingga perusahaan dengan kebutuhan khusus.</p><ul><li>Dedicated bandwidth</li><li>SLA &amp; monitoring</li><li>Opsi IP public</li><li>Technical support</li></ul><a href="#business-solutions">Konsultasi bisnis <b>↗</b></a></article>
        </div>
      </section>

      <section id="packages" className="rn-packages">
        <div className="rn-shell"><header className="rn-section-head inverse"><p><span>02</span> Paket internet rumah</p><h2>Pilih kecepatan.<br /><em>Sesuaikan aktivitas.</em></h2><p>Harga, biaya pemasangan, perangkat, pajak, FUP, dan promo perlu dikonfirmasi berdasarkan wilayah.</p></header>
          <div className="rn-package-grid">{packages.map((item, index) => <article key={item.name} className={index === 1 ? 'featured' : ''}><span>{item.tag}</span><h3>{item.name}</h3><strong>{item.speed}</strong><p>{item.fit}</p><div>Harga dikonfirmasi admin</div><ul>{item.features.map(feature => <li key={feature}>✓ {feature}</li>)}</ul><a href={`${whatsappUrl}%0APaket%3A%20${encodeURIComponent(item.name)}`} target="_blank" rel="noreferrer">Tanya paket <b>↗</b></a></article>)}</div>
          <p className="rn-disclaimer">Informasi paket merupakan contoh struktur. RingNet perlu mengisi harga dan ketentuan aktual sebelum dipublikasikan sebagai penawaran resmi.</p>
        </div>
      </section>

      <section className="rn-finder rn-shell"><div><p className="rn-label"><span>03</span> Rekomendasi paket</p><h2>Bantu kami memahami<br /><em>cara kamu terhubung.</em></h2><p>Jawab tiga pertanyaan singkat untuk mendapatkan titik awal paket. Hasil akhir tetap mengikuti coverage dan konfirmasi tim.</p></div><PackageFinder /></section>

      <section id="business-solutions" className="rn-business">
        <div className="rn-shell"><header className="rn-section-head"><p><span>04</span> Internet bisnis</p><h2>Koneksi andal untuk<br /><em>operasional bisnis.</em></h2><a href="#register">Minta penawaran ↗</a></header><div className="rn-business-grid">{businessSolutions.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href="#register">Konsultasikan layanan →</a></article>)}</div></div>
      </section>

      <section id="coverage" className="rn-coverage"><div className="rn-coverage-copy"><p className="rn-label"><span>05</span> Cek coverage</p><h2>Apakah RingNet sudah<br /><em>tersedia di lokasimu?</em></h2><p>Masukkan area secara singkat. Pemeriksaan ini tidak menyatakan jaringan tersedia secara otomatis; hasil akhirnya perlu dikonfirmasi tim.</p><div><span><b>01</b> Isi area pemasangan</span><span><b>02</b> Tim memeriksa jaringan</span><span><b>03</b> Dapatkan hasil &amp; pilihan paket</span></div></div><CoverageChecker whatsappUrl={whatsappUrl} /></section>

      <section className="rn-advantages rn-shell"><header className="rn-section-head"><p><span>06</span> Mengapa RingNet</p><h2>Jaringan kuat.<br /><em>Dukungan yang dekat.</em></h2><p>Klaim teknis terukur seperti uptime dan latency hanya ditampilkan setelah tersedia data aktual.</p></header><div>{[['Fiber optic','Infrastruktur untuk mendukung koneksi cepat dan stabil.'],['Unlimited','Pemakaian mengikuti ketentuan paket tanpa kuota utama cepat habis.'],['Multiple upstream','Mendukung ketahanan konektivitas jaringan.'],['Support 24/7','Tim menerima laporan gangguan kapan pun dibutuhkan.'],['Harga kompetitif','Pilihan layanan disesuaikan untuk rumah hingga perusahaan.'],['ISP berizin','Informasi legal dan keanggotaan ditampilkan transparan.']].map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="services" className="rn-services"><div className="rn-shell"><p className="rn-label"><span>07</span> Layanan tambahan</p><div><h2>Satu partner untuk<br />kebutuhan <em>jaringanmu.</em></h2><ul><li>Broadband rumah &amp; bisnis</li><li>Internet dedicated</li><li>Bandwidth on demand</li><li>Managed network service</li><li>Local loop</li><li>Collocation</li></ul></div></div></section>

      <section className="rn-process rn-shell"><header className="rn-section-head"><p><span>08</span> Proses pemasangan</p><h2>Dari lokasi hingga<br /><em>koneksi aktif.</em></h2><p>Setiap tahap dikonfirmasi agar pelanggan memahami kebutuhan, biaya, dan jadwal pemasangan.</p></header><div>{[['Cek jangkauan','Kirim lokasi pemasangan.'],['Pilih paket','Sesuaikan dengan aktivitas.'],['Survey lokasi','Teknisi memeriksa jalur.'],['Konfirmasi','Terima rincian biaya dan jadwal.'],['Instalasi','Perangkat dan jaringan dipasang.'],['Aktivasi','Koneksi diuji sebelum diserahkan.']].map(([title,text],i)=><article key={title}><span>0{i+1}</span><b>{title}</b><p>{text}</p></article>)}</div></section>

      <section className="rn-area"><div className="rn-map" aria-hidden="true"><i /><i /><i /><i /><span>Coverage<br /><b>dikonfirmasi manual</b></span></div><div><p className="rn-label"><span>09</span> Area layanan</p><h2>Periksa berdasarkan<br /><em>alamat pemasangan.</em></h2><p>Alamat kantor tidak otomatis mewakili seluruh cakupan jaringan. Status area ditentukan dari data teknis RingNet.</p><div className="rn-area-status"><span><i className="available" /> Area terverifikasi <b>Gunakan data aktual</b></span><span><i className="survey" /> Perlu survey <b>Dikonfirmasi tim</b></span><span><i /> Rencana ekspansi <b>Gunakan data aktual</b></span></div><a href="#coverage">Cek lokasi saya <b>↗</b></a></div></section>

      <section className="rn-quote"><div className="rn-shell"><span>“</span><blockquote>Koneksi digunakan untuk operasional kantor dan video conference. Proses pemasangan serta respons support berjalan baik.</blockquote><div><strong>Contoh format testimoni pelanggan bisnis</strong><small>Ganti dengan testimoni asli dan izin publikasi sebelum website resmi digunakan.</small></div></div></section>

      <section id="about" className="rn-about rn-shell"><div><p className="rn-label"><span>10</span> Tentang RingNet</p><h2>Tumbuh bersama<br /><em>kebutuhan koneksi.</em></h2><p>PT Ring Media Nusantara atau RingNet adalah perusahaan penyedia layanan internet yang beroperasi sejak November 2020. RingNet melayani kebutuhan konektivitas rumah, bisnis, dan perusahaan melalui infrastruktur fiber optic dan jaringan pendukung lainnya.</p><a href="#register">Hubungi RingNet <b>↗</b></a></div><div className="rn-legal"><span>Legalitas &amp; keanggotaan</span><article><b>Izin penyelenggaraan ISP</b><small>Nomor dan tahun diisi dari dokumen aktual</small></article><article><b>Izin jaringan tetap lokal</b><small>Dokumen ditampilkan jika dapat dipublikasikan</small></article><article><b>Media fiber optic &amp; microwave</b><small>Detail mengikuti perizinan perusahaan</small></article><article><b>Keanggotaan APJII</b><small>Status dan nomor anggota perlu diverifikasi</small></article></div></section>

      <section id="faq" className="rn-faq rn-shell"><header><p className="rn-label"><span>11</span> Bantuan</p><h2>Pertanyaan yang<br /><em>sering ditanyakan.</em></h2><a href={whatsappUrl}>Tanya support ↗</a></header><div>{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>

      <section id="register" className="rn-register"><div className="rn-shell"><div><p className="rn-label"><span>12</span> Daftar pemasangan</p><h2>Pilih kebutuhan.<br /><em>Lanjutkan sendiri.</em></h2><p>Website tidak meneruskan data pribadi secara otomatis. Setelah WhatsApp terbuka, Anda dapat meninjau dan melengkapi informasi yang ingin dikirim.</p></div><div className="rn-register-options"><a href={whatsappUrl} target="_blank" rel="noreferrer"><span>Rumah</span><strong>Daftar internet rumah</strong><b>↗</b></a><a href="https://wa.me/6287839988767?text=Halo%20RingNet%2C%20saya%20ingin%20konsultasi%20internet%20bisnis." target="_blank" rel="noreferrer"><span>Bisnis</span><strong>Minta penawaran bisnis</strong><b>↗</b></a><a href="https://wa.me/6287839988767?text=Halo%20RingNet%2C%20saya%20ingin%20mengajukan%20kerja%20sama." target="_blank" rel="noreferrer"><span>Mitra</span><strong>Ajukan kerja sama</strong><b>↗</b></a><small>Siapkan nama, area pemasangan, paket atau layanan yang diminati, serta waktu yang diinginkan.</small></div></div></section>

      <section className="rn-final rn-shell"><p>Siap menggunakan internet yang lebih stabil?</p><h2>Cek jaringan.<br /><em>Temukan paketmu.</em></h2><div><a href="#coverage">Cek coverage <b>↗</b></a><a href={whatsappUrl}>Konsultasi WhatsApp</a></div><small>Tim membantu memeriksa lokasi dan menjelaskan pilihan paket tanpa biaya konsultasi.</small><div className="rn-final-orbit"><i /><i /><i /><span>R</span></div></section>

      <footer className="rn-footer"><div><a className="rn-logo" href="#top"><img src="/ringnet/logo.png" alt="RingNet Internet Service Provider" className="rn-brand-logo footer" /></a><p>Internet fiber untuk rumah, bisnis, dan perusahaan.</p><small>PT Ring Media Nusantara</small></div><nav><b>Layanan</b><a href="#home">Internet Rumah</a><a href="#business-solutions">Internet Bisnis</a><a href="#coverage">Coverage</a><a href="#services">Layanan Jaringan</a></nav><nav><b>Perusahaan</b><a href="#about">Tentang RingNet</a><a href="#about">Legalitas</a><span>Partner · Data aktual</span><span>Karier · Segera</span></nav><nav><b>Bantuan</b><a href="#faq">FAQ</a><a href={whatsappUrl}>Hubungi Kami</a><a href={whatsappUrl}>Lapor Gangguan</a><span>Support 24/7</span></nav><small>© 2026 RingNet · Demo revamp concept by Naltech Studio. Data harga, coverage, legalitas, partner, dan testimoni perlu diverifikasi sebelum penggunaan resmi.</small></footer>

      <div className="rn-mobile-bar"><a href={whatsappUrl}>WhatsApp</a><a href="#coverage">Cek Coverage</a><a href="#register">Daftar</a></div>
    </main>
  );
}
