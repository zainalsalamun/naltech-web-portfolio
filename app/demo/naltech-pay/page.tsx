import type { Metadata } from 'next';
import MotionObserver from './MotionObserver';

export const metadata: Metadata = {
  title: 'Naltech Pay — Concept Fintech Website by Naltech',
  description: 'Contoh landing page fintech orisinal yang dirancang dan dikembangkan oleh Naltech.',
  openGraph: { title: 'Naltech Pay — Concept Fintech Website by Naltech', description: 'Urus uang tanpa bikin pusing.', images: [] },
  twitter: { title: 'Naltech Pay — Concept Fintech Website by Naltech', description: 'Urus uang tanpa bikin pusing.', images: [] },
};

export default function NaltechPayPage() {
  return (
    <main className="pay-page">
      <MotionObserver />
      <div className="pay-demo-bar"><a href="/">← Kembali ke portfolio</a><span>Concept project by Naltech</span></div>
      <header className="pay-header">
        <a className="pay-logo" href="#top"><span>n</span>naltech pay</a>
        <nav><a href="#features">Fitur</a><a href="#how">Cara kerja</a><a href="#security">Keamanan</a></nav>
        <a className="pay-download" href="#download">Coba sekarang <b>↗</b></a>
      </header>
      <section id="top" className="pay-hero">
        <div className="pay-copy">
          <p className="pay-kicker"><span>●</span> Satu aplikasi untuk transaksi harian</p>
          <h1>Urus uang tanpa<br /><em>bikin pusing.</em></h1>
          <p>Kirim uang, bayar kebutuhan, dan pantau pengeluaran dalam satu tempat yang sederhana, cepat, dan aman.</p>
          <div className="pay-actions"><a href="#download">Mulai pakai gratis <b>↗</b></a><span>Tanpa biaya bulanan</span></div>
          <div className="pay-trust"><div><b>4.9</b><span>★★★★★</span><small>12 ribu+ ulasan</small></div><div><b>2 jt+</b><small>pengguna aktif</small></div></div>
        </div>
        <div className="pay-scene" aria-label="Preview aplikasi Naltech Pay">
          <div className="pay-blob" />
          <div className="pay-phone">
            <div className="pay-speaker" />
            <div className="pay-screen"><div className="pay-app-top"><span>Halo, Raka</span><b>◉</b></div><small>Total saldo</small><strong>Rp8.450.000</strong><div className="pay-quick"><span>↑<small>Kirim</small></span><span>↓<small>Terima</small></span><span>⌁<small>Bayar</small></span><span>＋<small>Lainnya</small></span></div><p>Aktivitas terbaru</p><div className="pay-row"><i>♫</i><div><b>Langganan musik</b><small>Hari ini</small></div><strong>-Rp54.990</strong></div><div className="pay-row"><i>↓</i><div><b>Transfer masuk</b><small>Kemarin</small></div><strong className="positive">+Rp750.000</strong></div></div>
          </div>
          <div className="pay-card pay-card-one"><span>✓</span><div><b>Transfer berhasil</b><small>Sampai dalam 3 detik</small></div></div>
          <div className="pay-card pay-card-two"><small>Hemat bulan ini</small><b>Rp127.500</b><i>↗ 18%</i></div>
          <div className="pay-card pay-card-three"><span>◎</span> Terenkripsi & terlindungi</div>
        </div>
      </section>

      <section className="pay-rail" aria-label="Keunggulan produk"><p>Dirancang untuk transaksi yang lebih ringan</p><div><span>Transfer instan</span><span>Budget otomatis</span><span>Bayar tagihan</span><span>Proteksi 24/7</span><span>Tanpa biaya bulanan</span></div></section>

      <section id="features" className="pay-features pay-wrap">
        <header className="pay-section-title" data-reveal><p><span>01</span> Fitur utama</p><h2>Satu aplikasi.<br /><em>Banyak beresnya.</em></h2></header>
        <div className="pay-feature-grid">
          <article className="pay-feature-main" data-reveal><div className="pay-copy-block"><span>Transfer</span><h3>Kirim ke siapa saja,<br />selesai dalam hitungan detik.</h3><p>Transfer ke bank dan dompet digital tanpa langkah rumit. Simpan tujuan favorit untuk transaksi berikutnya.</p><a href="#download">Coba kirim uang ↗</a></div><div className="pay-transfer-ui"><div><small>Kirim uang</small><strong>Rp250.000</strong></div><p>Ke rekening</p><section><i>RA</i><span><b>Rani Aulia</b><small>Bank Nusantara · 8821</small></span><b>✓</b></section><button>Lanjutkan</button></div></article>
          <article className="pay-feature-small budget" data-reveal><span>Budget pintar</span><h3>Tahu uang pergi ke mana.</h3><p>Pengeluaran tersusun otomatis agar keputusan finansial terasa lebih mudah.</p><div className="pay-donut"><span>62%</span></div><small>Kebutuhan bulan ini</small></article>
          <article className="pay-feature-small bills" data-reveal><span>Tagihan</span><h3>Bayar tepat waktu,<br />tanpa mengingat semuanya.</h3><div className="pay-bill-list"><p><i>⌁</i><span>Internet rumah<small>Jatuh tempo 24 Sep</small></span><b>Rp389k</b></p><p><i>⚡</i><span>Listrik<small>Jatuh tempo 28 Sep</small></span><b>Rp246k</b></p></div></article>
        </div>
      </section>

      <section id="how" className="pay-how">
        <div className="pay-wrap">
          <header className="pay-section-title inverse" data-reveal><p><span>02</span> Cara kerja</p><h2>Mulai dalam<br /><em>tiga langkah.</em></h2></header>
          <div className="pay-steps">
            <article data-reveal><span>01</span><div className="pay-step-visual"><i>☺</i><b>Buat akunmu</b><small>Kurang dari 2 menit</small></div><h3>Daftar dengan mudah</h3><p>Masukkan nomor ponsel dan ikuti proses verifikasi yang sederhana.</p></article>
            <article data-reveal><span>02</span><div className="pay-step-visual"><i>⌘</i><b>Hubungkan sumber dana</b><small>Aman dan terenkripsi</small></div><h3>Siapkan pembayaran</h3><p>Pilih rekening utama atau metode pembayaran yang paling nyaman.</p></article>
            <article data-reveal><span>03</span><div className="pay-step-visual"><i>↗</i><b>Siap digunakan</b><small>Kapan saja, di mana saja</small></div><h3>Transaksi tanpa drama</h3><p>Kirim, bayar, dan pantau seluruh aktivitas dari satu dashboard.</p></article>
          </div>
        </div>
      </section>

      <section className="pay-insight pay-wrap">
        <div className="pay-insight-copy" data-reveal><p className="pay-kicker"><span>●</span> Insight keuangan</p><h2>Lebih paham.<br /><em>Lebih terkendali.</em></h2><p>Naltech Pay merangkum kebiasaan transaksi menjadi insight yang mudah dipahami, supaya Anda bisa membuat keputusan lebih baik setiap hari.</p><ul><li><span>✓</span>Kategori otomatis untuk setiap transaksi</li><li><span>✓</span>Notifikasi saat pengeluaran mendekati batas</li><li><span>✓</span>Ringkasan mingguan yang mudah dibaca</li></ul></div>
        <div className="pay-insight-ui" data-reveal><header><div><small>Pengeluaran September</small><strong>Rp4.280.500</strong></div><span>30 hari ▾</span></header><div className="pay-chart"><i style={{height:'38%'}} /><i style={{height:'54%'}} /><i style={{height:'47%'}} /><i style={{height:'71%'}} /><i style={{height:'60%'}} /><i className="active" style={{height:'88%'}} /><i style={{height:'67%'}} /></div><div className="pay-chart-label"><span>1</span><span>5</span><span>10</span><span>15</span><span>20</span><span>25</span><span>30</span></div><section><p><i className="food">●</i><span>Makanan & minuman</span><b>Rp1.420.000</b></p><p><i className="transport">●</i><span>Transportasi</span><b>Rp840.500</b></p><p><i className="shopping">●</i><span>Belanja</span><b>Rp720.000</b></p></section></div>
      </section>

      <section id="security" className="pay-security">
        <div className="pay-wrap pay-security-inner">
          <div className="pay-shield" aria-hidden="true" data-reveal><div><span>n</span><i>✓</i></div><p>Secured by design</p></div>
          <div data-reveal><p className="pay-kicker"><span>●</span> Keamanan berlapis</p><h2>Tenang di setiap<br /><em>transaksi.</em></h2><p>Konsep pengalaman ini menunjukkan bagaimana keamanan dapat dijelaskan dengan bahasa yang transparan dan mudah dipahami pengguna.</p><div className="pay-security-points"><article><span>◎</span><div><h3>Proteksi real-time</h3><p>Aktivitas tidak biasa ditandai secara otomatis.</p></div></article><article><span>◈</span><div><h3>Enkripsi data</h3><p>Informasi sensitif dilindungi di setiap lapisan.</p></div></article><article><span>⌁</span><div><h3>Kontrol di tanganmu</h3><p>Bekukan akses kapan saja langsung dari aplikasi.</p></div></article></div></div>
        </div>
      </section>

      <section className="pay-faq pay-wrap">
        <header className="pay-section-title" data-reveal><p><span>03</span> Pertanyaan umum</p><h2>Hal yang sering<br /><em>ditanyakan.</em></h2></header>
        <div className="pay-faq-list" data-reveal>
          <details open><summary>Apakah Naltech Pay merupakan aplikasi finansial sungguhan?<b>+</b></summary><p>Belum. Ini adalah concept project untuk menunjukkan kemampuan Naltech merancang landing page produk fintech yang lengkap dan meyakinkan.</p></details>
          <details><summary>Apakah desain ini menyalin produk lain?<b>+</b></summary><p>Tidak. Struktur mengikuti pola umum landing page produk digital, sementara branding, konten, layout, dan seluruh elemen visual dibuat secara orisinal.</p></details>
          <details><summary>Bisakah konsep seperti ini dibuat untuk brand saya?<b>+</b></summary><p>Bisa. Naltech akan menyesuaikan strategi, identitas visual, fitur, dan kebutuhan teknis berdasarkan bisnis serta audiens Anda.</p></details>
          <details><summary>Apakah dapat dikembangkan menjadi aplikasi nyata?<b>+</b></summary><p>Desain dapat dikembangkan lebih lanjut setelah kebutuhan produk, keamanan, regulasi, dan integrasi teknis didefinisikan bersama tim terkait.</p></details>
        </div>
      </section>

      <section id="download" className="pay-cta pay-wrap"><div data-reveal><p>Concept project · Naltech Studio</p><h2>Urus uang lebih ringan.<br /><em>Mulai dari sini.</em></h2><a href="mailto:naltechai@gmail.com">Buat project seperti ini <span>↗</span></a></div><div className="pay-cta-phone" data-reveal><span>n</span><strong>naltech pay</strong><small>money, made lighter.</small></div></section>

      <footer className="pay-footer pay-wrap"><a className="pay-logo" href="#top"><span>n</span>naltech pay</a><p>Concept website by Naltech Studio.<br />Bukan produk finansial aktif.</p><div><a href="#features">Fitur</a><a href="#how">Cara kerja</a><a href="#security">Keamanan</a></div><div><a href="/">Portfolio Naltech</a><a href="mailto:naltechai@gmail.com">Mulai project</a></div><small>© 2026 Naltech Studio · Concept project</small></footer>
    </main>
  );
}
