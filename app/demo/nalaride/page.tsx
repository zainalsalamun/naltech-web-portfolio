import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NalaRide — Vehicle Rental Concept by Naltech',
  description: 'Contoh landing page rental mobil dan motor yang dirancang oleh Naltech.',
  openGraph: { title: 'NalaRide — Vehicle Rental Concept by Naltech', description: 'Jalan lebih jauh, tanpa repot.', images: [new URL('/rental/hero-suv.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')] },
  twitter: { title: 'NalaRide — Vehicle Rental Concept by Naltech', description: 'Jalan lebih jauh, tanpa repot.', images: [new URL('/rental/hero-suv.jpg', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')] },
};

export default function NalaRidePage() {
  return (
    <main className="ride-page">
      <div className="ride-demo"><a href="/">← Kembali ke portfolio</a><span>Concept project by Naltech</span></div>
      <header className="ride-header">
        <a className="ride-logo" href="#top"><span>NR</span>NalaRide</a>
        <nav><a href="#fleet">Armada</a><a href="#benefits">Keunggulan</a><a href="#how">Cara sewa</a><a href="#faq">FAQ</a></nav>
        <a className="ride-header-cta" href="#booking">Pesan kendaraan <b>↗</b></a>
      </header>
      <section id="top" className="ride-hero">
        <div className="ride-hero-bg" />
        <div className="ride-overlay" />
        <div className="ride-hero-copy">
          <p><span>●</span> Rental mobil & motor terpercaya</p>
          <h1>Jalan lebih jauh,<br /><em>tanpa repot.</em></h1>
          <div><p>Pilih kendaraan terbaik untuk perjalananmu. Harga transparan, armada terawat, dan bantuan 24 jam.</p><div className="ride-rating"><strong>4.9</strong><span>★★★★★</span><small>2.400+ perjalanan</small></div></div>
        </div>
        <form id="booking" className="ride-booking">
          <label><span>Lokasi pengambilan</span><strong>⌖</strong><input aria-label="Lokasi pengambilan" defaultValue="Jakarta Selatan" /></label>
          <label><span>Tanggal mulai</span><strong>□</strong><input aria-label="Tanggal mulai" defaultValue="29 Agu 2026" /></label>
          <label><span>Tanggal selesai</span><strong>□</strong><input aria-label="Tanggal selesai" defaultValue="31 Agu 2026" /></label>
          <label><span>Jenis kendaraan</span><strong>⌄</strong><select aria-label="Jenis kendaraan" defaultValue="Semua"><option>Semua</option><option>Mobil</option><option>Motor</option></select></label>
          <button type="button">Cari kendaraan <span>↗</span></button>
        </form>
      </section>

      <section className="ride-trust"><p>Perjalanan nyaman dimulai dari kendaraan yang tepat</p><div><span>Harga transparan</span><span>Armada terawat</span><span>Antar ke lokasi</span><span>Bantuan 24 jam</span><span>Tanpa deposit*</span></div></section>

      <section id="fleet" className="ride-fleet ride-wrap">
        <header className="ride-section-head"><p><span>01</span> Armada pilihan</p><h2>Pilih teman<br /><em>perjalananmu.</em></h2><a href="#booking">Lihat semua kendaraan ↗</a></header>
        <div className="ride-tabs"><button className="active">Semua</button><button>Mobil keluarga</button><button>SUV</button><button>Motor</button><button>Premium</button></div>
        <div className="ride-vehicles">
          <article><div className="ride-vehicle-image"><img src="/rental/coastal-suv.jpg" alt="SUV putih di tepi pantai" /><span>Paling populer</span></div><div className="ride-vehicle-info"><small>Mobil keluarga · 7 kursi</small><h3>Aruna MPV</h3><div><span>⚙ Otomatis</span><span>◉ 7 kursi</span><span>▣ 2 bagasi</span></div><footer><p>Mulai dari <strong>Rp425.000</strong> / hari</p><a href="#booking">Pilih mobil ↗</a></footer></div></article>
          <article><div className="ride-vehicle-image"><img src="/rental/city-suv.jpg" alt="SUV hitam di jalan perkotaan" /><span>Premium</span></div><div className="ride-vehicle-info"><small>SUV premium · 5 kursi</small><h3>Terra X</h3><div><span>⚙ Otomatis</span><span>◉ 5 kursi</span><span>◇ All terrain</span></div><footer><p>Mulai dari <strong>Rp875.000</strong> / hari</p><a href="#booking">Pilih mobil ↗</a></footer></div></article>
          <article><div className="ride-vehicle-image"><img src="/rental/scooter.jpg" alt="Skuter putih di jalan perkotaan" /><span>Hemat</span></div><div className="ride-vehicle-info"><small>Skuter · 2 pengendara</small><h3>Velo 125</h3><div><span>⚙ Otomatis</span><span>◉ 2 helm</span><span>⌁ Irit bensin</span></div><footer><p>Mulai dari <strong>Rp95.000</strong> / hari</p><a href="#booking">Pilih motor ↗</a></footer></div></article>
        </div>
      </section>

      <section id="benefits" className="ride-benefits">
        <div className="ride-wrap">
          <header className="ride-section-head inverse"><p><span>02</span> Kenapa NalaRide</p><h2>Yang kamu pikirkan<br />hanya <em>tujuan.</em></h2></header>
          <div className="ride-benefit-grid">
            <article><span>✓</span><small>01</small><h3>Harga tanpa kejutan</h3><p>Harga yang tampil sudah jelas sejak awal. Tidak ada biaya tersembunyi saat kendaraan dikembalikan.</p></article>
            <article><span>⌁</span><small>02</small><h3>Antar sesuai lokasi</h3><p>Kendaraan bisa diantar ke rumah, hotel, stasiun, atau bandara sesuai jadwal pilihanmu.</p></article>
            <article><span>◎</span><small>03</small><h3>Selalu bersih & prima</h3><p>Setiap armada diperiksa, dibersihkan, dan diservis rutin sebelum digunakan kembali.</p></article>
            <article><span>◌</span><small>04</small><h3>Bantuan 24 jam</h3><p>Tim perjalanan siap membantu ketika ada kendala, dari awal sewa sampai kendaraan kembali.</p></article>
          </div>
        </div>
      </section>

      <section id="how" className="ride-how ride-wrap">
        <header className="ride-section-head"><p><span>03</span> Cara menyewa</p><h2>Tiga langkah,<br /><em>langsung jalan.</em></h2></header>
        <div className="ride-steps">
          <article><span>01</span><div className="ride-step-ui"><i>⌖</i><b>Jakarta Selatan</b><small>29—31 Agustus 2026</small></div><h3>Tentukan perjalanan</h3><p>Pilih lokasi, tanggal, serta jenis kendaraan yang kamu butuhkan.</p></article>
          <article><span>02</span><div className="ride-step-ui select"><p><i>✓</i>Aruna MPV</p><p><i>○</i>Terra X</p><p><i>○</i>Velo 125</p></div><h3>Pilih kendaraan</h3><p>Bandingkan kapasitas, fasilitas, dan harga armada yang tersedia.</p></article>
          <article><span>03</span><div className="ride-step-ui ready"><i>✓</i><b>Pesanan dikonfirmasi</b><small>Armada siap diantar</small></div><h3>Konfirmasi & berangkat</h3><p>Lengkapi data, lakukan pembayaran, lalu kendaraan siap digunakan.</p></article>
        </div>
      </section>

      <section className="ride-destination">
        <div className="ride-destination-image"><img src="/rental/hero-suv.jpg" alt="Perjalanan SUV di jalan pegunungan" /><div><span>Explore more</span><strong>Mulai cerita<br />dari jalan.</strong></div></div>
        <div className="ride-destination-copy"><p><span>04</span> Destinasi favorit</p><h2>Kota, pantai,<br />atau pegunungan?</h2><p>NalaRide siap menemani perjalanan singkat dalam kota hingga road trip akhir pekan bersama orang tersayang.</p><div><article><b>01</b><span>Puncak & Bogor<small>1—2 hari · keluarga</small></span><strong>↗</strong></article><article><b>02</b><span>Bandung & Lembang<small>2—3 hari · road trip</small></span><strong>↗</strong></article><article><b>03</b><span>Bali & sekitarnya<small>3—7 hari · mobil & motor</small></span><strong>↗</strong></article></div></div>
      </section>

      <section className="ride-stats ride-wrap"><article><strong>4.9<span>/5</span></strong><p>rating pengguna</p></article><article><strong>250<span>+</span></strong><p>kendaraan terawat</p></article><article><strong>12<span>k+</span></strong><p>perjalanan selesai</p></article><article><strong>24<span>jam</span></strong><p>bantuan perjalanan</p></article></section>

      <section className="ride-review"><div className="ride-wrap"><span>“</span><blockquote>Pesan malam, besok pagi mobil sudah sampai di hotel. Bersih, prosesnya jelas, dan timnya cepat merespons. Road trip jadi jauh lebih santai.</blockquote><div><strong>Nadia & Reza</strong><small>Jakarta · Sewa Aruna MPV selama 4 hari</small></div></div></section>

      <section id="faq" className="ride-faq ride-wrap">
        <header><p><span>05</span> Pertanyaan umum</p><h2>Sebelum kamu<br /><em>berangkat.</em></h2><a href="mailto:hello@naltech.id">Masih ada pertanyaan? ↗</a></header>
        <div>
          <details open><summary>Apa saja syarat untuk menyewa kendaraan?<b>+</b></summary><p>Siapkan identitas resmi, SIM yang masih berlaku sesuai jenis kendaraan, dan dokumen pendukung yang diminta saat konfirmasi.</p></details>
          <details><summary>Apakah kendaraan bisa diantar ke bandara atau hotel?<b>+</b></summary><p>Bisa. Tentukan lokasi pengantaran pada saat pemesanan. Biaya pengantaran bergantung pada jarak dan area layanan.</p></details>
          <details><summary>Apakah harga sudah termasuk bahan bakar?<b>+</b></summary><p>Belum. Kendaraan diterima dengan level bahan bakar tertentu dan dikembalikan pada level yang sama.</p></details>
          <details><summary>Bagaimana jika terjadi kendala saat perjalanan?<b>+</b></summary><p>Hubungi dukungan 24 jam. Tim akan membantu diagnosis, penggantian kendaraan, atau penanganan darurat sesuai kondisi.</p></details>
        </div>
      </section>

      <section className="ride-cta ride-wrap"><div><p>Concept website · Naltech Studio</p><h2>Kendaraan siap.<br /><em>Kamu mau ke mana?</em></h2><a href="#booking">Cari kendaraan <span>↗</span></a></div><div className="ride-cta-road"><i /><i /><span>NR</span></div></section>

      <footer className="ride-footer ride-wrap"><a className="ride-logo" href="#top"><span>NR</span>NalaRide</a><p>Concept rental website by Naltech Studio.<br />Bukan layanan rental kendaraan aktif.</p><div><a href="#fleet">Armada</a><a href="#benefits">Keunggulan</a><a href="#how">Cara sewa</a><a href="#faq">FAQ</a></div><div><a href="/">Portfolio Naltech</a><a href="mailto:hello@naltech.id">Buat project serupa</a></div><small>© 2026 Naltech Studio · Concept project</small></footer>
    </main>
  );
}
