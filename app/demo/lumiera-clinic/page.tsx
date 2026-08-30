import type { Metadata } from 'next';
import Link from 'next/link';
import BookingForm from './BookingForm';
import './lumiera.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';
const whatsappUrl = 'https://wa.me/6281573550017?text=Halo%20Lumiera%2C%20saya%20ingin%20konsultasi%20sebelum%20memilih%20perawatan.';

export const metadata: Metadata = {
  title: 'Lumiera Aesthetic Clinic — Konsultasi & Perawatan Kulit',
  description: 'Demo landing page klinik kecantikan profesional dengan konsultasi personal, harga transparan, katalog treatment, tim dokter, cabang, dan booking online.',
  alternates: { canonical: '/demo/lumiera-clinic' },
  openGraph: { title: 'Lumiera Aesthetic Clinic', description: 'Kenali kebutuhan kulitmu sebelum memilih perawatan.', url: '/demo/lumiera-clinic', images: [{ url: `${siteUrl}/lumiera/hero-consultation.webp`, width: 1536, height: 1024, alt: 'Konsultasi kulit di Lumiera Aesthetic Clinic' }] },
  twitter: { card: 'summary_large_image', title: 'Lumiera Aesthetic Clinic', description: 'Perawatan yang tepat untuk kulit yang lebih sehat.', images: [`${siteUrl}/lumiera/hero-consultation.webp`] },
};

const treatments = [
  { icon: '◌', name: 'Hydrating Facial', purpose: 'Membantu menjaga kelembapan dan membuat kulit terasa lebih nyaman.', suited: 'Kulit kering & dehidrasi', duration: '60 menit', price: 'Rp250.000', consult: 'Disarankan', tone: 'ivory' },
  { icon: '✦', name: 'Acne Care Facial', purpose: 'Perawatan bertahap untuk membantu merawat kulit rentan berjerawat.', suited: 'Jerawat & komedo', duration: '75 menit', price: 'Rp300.000', consult: 'Wajib', tone: 'rose' },
  { icon: '☼', name: 'Brightening Facial', purpose: 'Membantu merawat tampilan kulit kusam dan warna yang tidak merata.', suited: 'Kusam & uneven tone', duration: '75 menit', price: 'Rp350.000', consult: 'Disarankan', tone: 'sage' },
];

const packages = [
  { name: 'Teen Skin Care', for: 'Remaja & pemula', period: '1 bulan', price: 'Rp750.000', features: ['Konsultasi awal', 'Basic facial', 'Panduan home care', 'Kontrol'] },
  { name: 'Acne Care Program', for: 'Perawatan bertahap', period: '3 bulan', price: 'Rp2.500.000', features: ['Konsultasi personal', 'Beberapa sesi', 'Evaluasi berkala', 'Foto progres dengan izin'] },
  { name: 'Bridal Preparation', for: 'Calon pengantin', period: '3–6 bulan', price: 'Mulai Rp4.500.000', features: ['Rencana perawatan', 'Facial berkala', 'Body treatment', 'Evaluasi pra-acara'] },
];

const faqs = [
  ['Apakah harus konsultasi sebelum treatment?', 'Beberapa perawatan dasar dapat dipesan langsung, tetapi tindakan tertentu memerlukan konsultasi dan pemeriksaan terlebih dahulu.'],
  ['Apakah treatment cocok untuk remaja?', 'Tergantung usia, kondisi, dan jenis perawatan. Pelanggan di bawah umur perlu mengikuti kebijakan persetujuan orang tua atau wali.'],
  ['Apakah hasil langsung terlihat?', 'Respons setiap orang berbeda. Beberapa perawatan memerlukan beberapa sesi, home care, dan evaluasi berkala.'],
  ['Apakah harga di website merupakan harga final?', 'Harga yang ditampilkan merupakan harga awal. Biaya final dijelaskan setelah konsultasi dan sebelum tindakan dilakukan.'],
  ['Bagaimana jika memiliki riwayat alergi?', 'Sampaikan riwayat alergi saat registrasi dan sebelum tindakan. Tim dapat menunda atau menyesuaikan layanan berdasarkan pemeriksaan.'],
];

export default function LumieraClinicPage() {
  const structuredData = { '@context': 'https://schema.org', '@type': 'MedicalClinic', name: 'Lumiera Aesthetic Clinic', description: 'Klinik kecantikan dengan konsultasi dan program perawatan personal.', url: `${siteUrl}/demo/lumiera-clinic`, image: `${siteUrl}/lumiera/clinic-interior.webp`, telephone: '+6281573550017', priceRange: '$$', address: { '@type': 'PostalAddress', streetAddress: 'Jl. Senopati Raya No. 18', addressLocality: 'Jakarta Selatan', addressCountry: 'ID' } };

  return (
    <main className="la-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="la-demo"><Link href="/">← Kembali ke Naltech</Link><span>Demo website · Aesthetic clinic</span><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp klinik ↗</a></div>
      <header className="la-header">
        <a className="la-logo" href="#top"><span>L</span><div>LUMIERA<small>Aesthetic Clinic</small></div></a>
        <nav aria-label="Navigasi Lumiera"><a href="#about">Tentang</a><a href="#treatments">Perawatan</a><a href="#doctor">Tim Klinik</a><a href="#pricing">Harga</a><a href="#branch">Cabang</a><a href="#faq">FAQ</a></nav>
        <div className="la-head-actions"><a href="#booking">Masuk</a><a href="#booking">Booking sekarang <b>↗</b></a></div>
      </header>

      <section id="top" className="la-hero">
        <img src="/lumiera/hero-consultation.webp" alt="Dokter dan pasien sedang melakukan konsultasi kulit" width={1536} height={1024} fetchPriority="high" />
        <div className="la-hero-shade" />
        <div className="la-hero-copy">
          <p><span>✦</span> Konsultasi · Perawatan · Pendampingan</p>
          <h1>Kenali kebutuhan<br />kulitmu <em>sebelum</em><br />memilih perawatan.</h1>
          <p>Konsultasikan kondisi dan kebutuhan kulit bersama tim profesional, lalu pilih jadwal perawatan yang sesuai tanpa harus menunggu lama.</p>
          <div><a href="#booking">Booking konsultasi <b>↗</b></a><a href="#treatments">Lihat perawatan</a></div>
        </div>
        <aside><span>Slot terdekat</span><strong>Hari ini · 14.30 WIB</strong><small>Jakarta Selatan · Konsultasi awal</small><a href="#booking">Pilih jadwal →</a></aside>
      </section>

      <section className="la-trust" aria-label="Keunggulan utama"><span>✓ Konsultasi sebelum tindakan</span><span>✓ Jadwal transparan</span><span>✓ Harga dijelaskan di awal</span><span>✓ Prosedur higienis</span><span>✓ Perawatan personal</span></section>

      <section id="about" className="la-needs la-shell">
        <header className="la-section-head"><p><span>01</span> Mulai dari kebutuhanmu</p><h2>Belum tahu treatment<br />yang tepat? <em>Tidak apa-apa.</em></h2><p>Kami tidak memberikan diagnosis melalui website. Pilih kebutuhan awal agar tim kami dapat mengarahkanmu ke konsultasi yang sesuai.</p></header>
        <div className="la-need-grid"><a href="#booking"><span>01</span><b>Jerawat &amp; komedo</b><small>Mulai dengan konsultasi kulit</small><i>↗</i></a><a href="#booking"><span>02</span><b>Kulit kusam</b><small>Eksplorasi brightening care</small><i>↗</i></a><a href="#booking"><span>03</span><b>Kering &amp; sensitif</b><small>Kenali hydrating &amp; soothing care</small><i>↗</i></a><a href="#booking"><span>04</span><b>Tekstur &amp; garis halus</b><small>Diskusikan healthy-aging plan</small><i>↗</i></a><a href="#booking"><span>05</span><b>Hair &amp; scalp</b><small>Pemeriksaan sebelum program</small><i>↗</i></a><a href="#booking"><span>06</span><b>Saya belum tahu</b><small>Tim kami siap membantu</small><i>↗</i></a></div>
      </section>

      <section className="la-benefits">
        <div className="la-shell"><header className="la-section-head inverse"><p><span>02</span> Mengapa Lumiera</p><h2>Profesional dalam tindakan.<br /><em>Hangat dalam pelayanan.</em></h2></header><div className="la-benefit-grid"><article><span>◎</span><small>01</small><h3>Konsultasi personal</h3><p>Pemeriksaan dan penjelasan dilakukan sebelum memilih layanan.</p></article><article><span>✦</span><small>02</small><h3>Tenaga profesional</h3><p>Kompetensi dan lingkup layanan tim ditampilkan dengan jelas.</p></article><article><span>⌁</span><small>03</small><h3>Prosedur higienis</h3><p>Standar kebersihan ruangan dan peralatan menjadi bagian dari setiap pelayanan.</p></article><article><span>Rp</span><small>04</small><h3>Harga transparan</h3><p>Rincian biaya disampaikan sebelum pelanggan menyetujui tindakan.</p></article></div></div>
      </section>

      <section id="treatments" className="la-treatments la-shell">
        <header className="la-section-head"><p><span>03</span> Treatment populer</p><h2>Informasi jelas.<br /><em>Keputusan lebih tenang.</em></h2><a href="#pricing">Lihat daftar harga ↗</a></header>
        <div className="la-treatment-grid">{treatments.map((item) => <article key={item.name}><div className={`la-treatment-art ${item.tone}`}><span>{item.icon}</span><small>{item.suited}</small></div><div className="la-treatment-copy"><p>{item.consult === 'Wajib' ? 'Wajib konsultasi' : 'Konsultasi disarankan'}</p><h3>{item.name}</h3><p>{item.purpose}</p><div><span><small>Durasi</small><b>{item.duration}</b></span><span><small>Harga mulai</small><b>{item.price}</b></span></div><footer><a href="#booking">Lihat detail</a><a href="#booking">Booking treatment ↗</a></footer></div></article>)}</div>
        <p className="la-disclaimer">Hasil dan kesesuaian treatment berbeda pada setiap pelanggan. Rekomendasi final diberikan setelah konsultasi dan pemeriksaan.</p>
      </section>

      <section id="doctor" className="la-doctor">
        <figure><img src="/lumiera/doctor-alya.webp" alt="Potret profesional dr. Alya Rahmani" width={1080} height={1350} loading="lazy" /><figcaption>Tim profesional sesuai kompetensi &amp; kewenangan</figcaption></figure>
        <div><p className="la-label"><span>04</span> Kenali tim kami</p><h2>Didampingi dengan<br /><em>penjelasan yang jernih.</em></h2><p>Setiap rencana perawatan dimulai dari percakapan tentang kebutuhan, riwayat, dan ekspektasi yang realistis.</p><div className="la-doctor-card"><span>Medical &amp; aesthetic consultant</span><h3>dr. Alya Rahmani</h3><p>Berfokus pada konsultasi kesehatan kulit dan perencanaan perawatan estetika sesuai kebutuhan pelanggan.</p><ul><li>Konsultasi kulit &amp; acne care</li><li>Perencanaan healthy-aging</li><li>Jakarta Selatan</li><li>Senin, Rabu, Jumat · 11.00–19.00</li></ul><a href="#booking">Booking dengan dr. Alya <b>↗</b></a></div><small>*Profil dan kredensial pada demo ini bersifat ilustratif.</small></div>
      </section>

      <section className="la-booking-flow la-shell"><header className="la-section-head"><p><span>05</span> Cara booking</p><h2>Dari konsultasi<br />ke jadwal dalam <em>4 langkah.</em></h2></header><div><article><span>01</span><b>Pilih kebutuhan</b><p>Ceritakan tujuan utama atau pilih “Saya belum tahu”.</p></article><article><span>02</span><b>Pilih cabang &amp; tim</b><p>Tentukan lokasi serta tenaga yang tersedia.</p></article><article><span>03</span><b>Pilih jadwal</b><p>Lihat slot tanggal dan waktu yang paling nyaman.</p></article><article><span>04</span><b>Konfirmasi</b><p>Tim menghubungi untuk memastikan detail kunjungan.</p></article></div></section>

      <section id="pricing" className="la-packages">
        <div className="la-shell"><header className="la-section-head inverse"><p><span>06</span> Program perawatan</p><h2>Rencana yang mengikuti<br /><em>ritme kulitmu.</em></h2><p>Program dipilih setelah penilaian tenaga profesional, bukan hanya berdasarkan pilihan di website.</p></header><div className="la-package-grid">{packages.map((item, index) => <article key={item.name} className={index === 1 ? 'featured' : ''}><span>{item.for}</span><h3>{item.name}</h3><p>{item.period}</p><strong>{item.price}</strong><ul>{item.features.map(feature => <li key={feature}>✓ {feature}</li>)}</ul><a href="#booking">Konsultasikan program <b>↗</b></a></article>)}</div><p className="la-price-note">Harga dan fasilitas merupakan contoh. Biaya final mengikuti hasil konsultasi, produk, alat, tenaga, dan lokasi klinik.</p></div>
      </section>

      <section id="branch" className="la-branch">
        <div className="la-branch-image"><img src="/lumiera/clinic-interior.webp" alt="Interior resepsionis dan ruang tunggu Lumiera" width={1536} height={1024} loading="lazy" /><span>Ruang nyaman · Prosedur higienis</span></div>
        <div className="la-branch-copy"><p className="la-label"><span>07</span> Cabang kami</p><h2>Datang dengan tenang.<br /><em>Pulang lebih memahami kulit.</em></h2><div><article><span>Cabang utama</span><h3>Jakarta Selatan</h3><p>Jl. Senopati Raya No. 18<br />Kebayoran Baru, Jakarta Selatan</p></article><article><span>Jam operasional</span><p><b>Senin–Jumat</b> 10.00–20.00<br /><b>Sabtu</b> 09.00–21.00<br /><b>Minggu</b> 09.00–18.00</p></article><article><span>Fasilitas</span><p>Parkir · Musala · Ruang konsultasi privat · Akses lift</p></article></div><a href="#booking">Pilih cabang &amp; jadwal <b>↗</b></a></div>
      </section>

      <section className="la-testimonial"><div className="la-shell"><span>“</span><blockquote>Sebelum treatment, prosedur dan biayanya dijelaskan terlebih dahulu. Saya juga mendapatkan arahan perawatan setelah kunjungan.</blockquote><div><strong>NR · Acne Care Facial</strong><small>Cabang Jakarta Selatan · Kunjungan terverifikasi</small></div><p>Respons dan hasil perawatan dapat berbeda pada setiap pelanggan.</p></div></section>

      <section id="faq" className="la-faq la-shell"><header><p className="la-label"><span>08</span> Pertanyaan umum</p><h2>Sebelum datang<br /><em>ke klinik.</em></h2><a href={whatsappUrl} target="_blank" rel="noreferrer">Tanya melalui WhatsApp ↗</a></header><div>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>0{index + 1}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></section>

      <section id="booking" className="la-book la-shell"><div><p className="la-label"><span>09</span> Konsultasi &amp; booking</p><h2>Mulai dengan<br /><em>percakapan.</em></h2><p>Isi informasi singkat berikut. Tim kami akan menghubungi Anda untuk mengonfirmasi jadwal dan menjelaskan langkah berikutnya.</p><div className="la-book-safe"><span>!</span><p>Form ini tidak memberikan diagnosis. Jika mengalami reaksi setelah tindakan yang membutuhkan bantuan segera, hubungi klinik secara langsung.</p></div></div><BookingForm /></section>

      <section className="la-final la-shell"><p>Perawatan yang tepat dimulai dari informasi yang tepat.</p><h2>Kenali kulitmu.<br /><em>Rencanakan dengan tenang.</em></h2><a href="#booking">Booking konsultasi <span>↗</span></a><div className="la-final-mark"><span>L</span><i /><i /></div></section>

      <footer className="la-footer"><div><a className="la-logo" href="#top"><span>L</span><div>LUMIERA<small>Aesthetic Clinic</small></div></a><p>Konsultasi dan perawatan personal untuk remaja dan dewasa.</p></div><nav><small>Jelajahi</small><a href="#about">Tentang</a><a href="#treatments">Perawatan</a><a href="#doctor">Tim klinik</a><a href="#pricing">Harga</a></nav><nav><small>Bantuan</small><a href="#booking">Booking</a><a href={whatsappUrl}>WhatsApp</a><a href="#faq">FAQ</a><a href="#branch">Cabang</a></nav><div><small>Catatan demo</small><p>Nama, profil, harga, jadwal, dan alamat pada halaman ini merupakan contoh untuk kebutuhan portfolio.</p></div><small>© 2026 Lumiera Aesthetic Clinic · Demo concept by Naltech Studio</small></footer>

      <div className="la-mobile-bar"><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href="#booking">Konsultasi</a><a href="#booking">Booking</a></div>
    </main>
  );
}
