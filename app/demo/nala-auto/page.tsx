import './nala-auto.css';
import './font-fix.css';
import type { Metadata } from 'next';
import { ArrowRight, BadgeCheck, CarFront, ChevronDown, Gauge, MapPin, MessageCircle, ShieldCheck, Sparkles, Wrench } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';
const whatsappUrl = 'https://wa.me/6281573550017?text=Halo%20Nala%20Auto%2C%20saya%20ingin%20konsultasi%20tentang%20mobil.';

export const metadata: Metadata = {
  title: 'Nala Auto — Showroom Mobil Pilihan',
  description: 'Showroom mobil pilihan dengan unit terinspeksi, harga transparan, dan layanan konsultasi personal.',
  alternates: { canonical: '/demo/nala-auto' },
  openGraph: { title: 'Nala Auto — Mobil pilihan, keputusan lebih tenang', description: 'Temukan mobil bekas pilihan dengan inspeksi transparan dan layanan trade-in.', url: `${siteUrl}/demo/nala-auto`, images: [{ url: `${siteUrl}/rental/hero-suv.jpg`, width: 1800, height: 2700, alt: 'SUV pilihan di showroom Nala Auto' }] },
  twitter: { card: 'summary_large_image', title: 'Nala Auto — Mobil pilihan, keputusan lebih tenang', description: 'Showroom mobil pilihan dengan proses yang lebih tenang.', images: [`${siteUrl}/rental/hero-suv.jpg`] },
};

const cars = [
  { name: 'Honda Brio Satya E', meta: '2023 · 18.200 km · City car', price: 'Hubungi untuk harga', image: '/rental/city-suv.jpg', tag: 'City car' },
  { name: 'Honda Freed E', meta: '2015 · 72.400 km · MPV', price: 'Hubungi untuk harga', image: '/rental/coastal-suv.jpg', tag: 'Family pick' },
  { name: 'Honda Mobilio RS', meta: '2022 · 24.800 km · MPV', price: 'Hubungi untuk harga', image: '/rental/city-suv.jpg', tag: 'Siap jalan' },
  { name: 'Honda CR-V Turbo', meta: '2022 · 21.100 km · SUV', price: 'Hubungi untuk harga', image: '/rental/hero-suv.jpg', tag: 'Paling dicari' },
  { name: 'Honda HR-V 1.5 SE', meta: '2022 · 24.800 km · SUV', price: 'Hubungi untuk harga', image: '/rental/city-suv.jpg', tag: 'Paling dicari' },
  { name: 'Toyota Avanza G', meta: '2023 · 16.900 km · MPV', price: 'Hubungi untuk harga', image: '/rental/coastal-suv.jpg', tag: 'Best seller' },
  { name: 'Toyota Veloz Q', meta: '2023 · 19.600 km · MPV', price: 'Hubungi untuk harga', image: '/rental/city-suv.jpg', tag: 'Family pick' },
  { name: 'Toyota Innova Reborn', meta: '2021 · 39.700 km · Diesel', price: 'Hubungi untuk harga', image: '/rental/hero-suv.jpg', tag: 'Best seller' },
  { name: 'Toyota Innova Zenix Hybrid', meta: '2023 · 14.500 km · Hybrid', price: 'Hubungi untuk harga', image: '/rental/coastal-suv.jpg', tag: 'Hybrid' },
  { name: 'Mitsubishi Pajero Sport', meta: '2022 · 28.600 km · Diesel', price: 'Hubungi untuk harga', image: '/rental/hero-suv.jpg', tag: 'SUV premium' },
  { name: 'Toyota Fortuner 2.8 VRZ', meta: '2023 · 18.200 km · Diesel', price: 'Hubungi untuk harga', image: '/rental/hero-suv.jpg', tag: 'Paling dicari' },
];

const services = [
  { icon: ShieldCheck, title: 'Unit terinspeksi', text: 'Kondisi kendaraan dijelaskan apa adanya sebelum Anda memutuskan.' },
  { icon: BadgeCheck, title: 'Dokumen aman', text: 'BPKB, STNK, dan riwayat servis kami bantu cek bersama.' },
  { icon: Wrench, title: 'Support setelah beli', text: 'Butuh bantuan setelah serah terima? Tim kami tetap siap.' },
];

export default function NalaAutoPage() {
  return <main className="na-page" id="top">
    <div className="na-topbar"><span><Sparkles size={14} /> Unit baru setiap minggu</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Konsultasi gratis <ArrowRight size={14} /></a></div>
    <nav className="na-nav" aria-label="Navigasi Nala Auto"><a className="na-logo" href="#top"><span>NA</span><strong>NALA<em>AUTO</em></strong></a><div className="na-links"><a href="#stock">Stok mobil</a><a href="#why">Kenapa kami</a><a href="#trade">Trade-in</a><a href="#visit">Lokasi</a></div><a className="na-nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Tanya advisor</a></nav>

    <section className="na-hero"><div className="na-hero-copy"><p className="na-kicker"><span /> SHOWROOM MOBIL PILIHAN</p><h1>Mobil yang<br /><em>tepat untukmu.</em></h1><p className="na-lead">Temukan kendaraan yang sudah kami pilih dan inspeksi dengan teliti. Prosesnya jelas, komunikasinya jujur, dan keputusan tetap di tangan Anda.</p><div className="na-actions"><a className="na-primary" href="#stock">Lihat stok mobil <ArrowRight size={17} /></a><a className="na-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">Bicara dengan advisor</a></div><div className="na-hero-proof"><span><BadgeCheck size={16} /> 100% transparan</span><span><Gauge size={16} /> Test drive tersedia</span></div></div><div className="na-hero-media"><img src="/rental/hero-suv.jpg" alt="SUV pilihan Nala Auto" /><div className="na-media-label"><CarFront size={18} /><span>READY TO DRIVE<small>Unit pilihan minggu ini</small></span></div><div className="na-media-index">01 <i>/</i> 03</div></div></section>

    <section className="na-trust"><span>PARTNER PERJALANAN ANDA</span><div><b>TOYOTA</b><b>HONDA</b><b>MITSUBISHI</b><b>SUZUKI</b><b>DAIHATSU</b></div></section>

    <section className="na-stock" id="stock"><div className="na-section-head"><div><p className="na-kicker"><span /> STOK TERBARU</p><h2>Siap menemani<br /><em>lebih jauh.</em></h2></div><p>Pilih dari unit yang paling sesuai dengan ritme hidup, kebutuhan keluarga, dan rencana perjalanan Anda.</p></div><div className="na-filter"><button className="active">Semua unit</button><button>SUV <ChevronDown size={14} /></button><button>MPV <ChevronDown size={14} /></button><button>City car <ChevronDown size={14} /></button><button className="na-filter-more">Filter & urutkan <ChevronDown size={14} /></button></div><div className="na-car-grid">{cars.map((car, index) => <article className="na-car-card" key={car.name}><div className="na-car-image"><img src={car.image} alt={car.name} /><span>0{index + 1}</span><b>{car.tag}</b><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Tanya ${car.name}`}><ArrowRight size={17} /></a></div><div className="na-car-info"><p>{car.meta}</p><h3>{car.name}</h3><div><strong>{car.price}</strong><span>Detail unit <ArrowRight size={14} /></span></div></div></article>)}</div><a className="na-outline" href={whatsappUrl} target="_blank" rel="noreferrer">Minta daftar unit lengkap <ArrowRight size={17} /></a></section>

    <section className="na-why" id="why"><div className="na-section-head na-light"><div><p className="na-kicker"><span /> CARA KAMI BEKERJA</p><h2>Lebih nyaman<br /><em>sejak awal.</em></h2></div><p>Karena membeli mobil bukan keputusan kecil. Kami membuat setiap langkah terasa lebih jelas.</p></div><div className="na-service-grid">{services.map(({ icon: Icon, title, text }, index) => <article key={title}><div><span>0{index + 1}</span><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="na-trade" id="trade"><div className="na-trade-card"><p className="na-kicker"><span /> TRADE-IN</p><h2>Mobil lama<br />bisa jadi <em>langkah baru.</em></h2><p>Hemat waktu dan biaya dengan menukar mobil lama Anda. Kirim detailnya, kami bantu berikan estimasi awal secara cepat.</p><a className="na-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Cek estimasi trade-in <ArrowRight size={17} /></a></div><div className="na-trade-note"><span>01</span><strong>Kirim detail mobil lama</strong><span>02</span><strong>Dapatkan estimasi harga</strong><span>03</span><strong>Upgrade dengan tenang</strong></div></section>

    <section className="na-visit" id="visit"><div><p className="na-kicker"><span /> DATANG LANGSUNG</p><h2>Temui mobilnya.<br /><em>Rasakan bedanya.</em></h2><p>Datang ke showroom untuk melihat unit pilihan, melakukan test drive, dan berdiskusi bersama advisor kami.</p><a className="na-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Atur kunjungan <ArrowRight size={17} /></a></div><div className="na-address"><MapPin size={24} /><strong>Nala Auto Showroom<small>Jl. Magelang Km 8, Yogyakarta<br />Senin—Minggu · 09.00—20.00</small></strong></div></section>

    <footer className="na-footer"><a className="na-logo" href="#top"><span>NA</span><strong>NALA<em>AUTO</em></strong></a><p>Mobil pilihan, keputusan lebih tenang.</p><div><a href="#stock">Stok mobil</a><a href="#trade">Trade-in</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp ↗</a></div><small>Concept website independently created by Naltech Studio.</small></footer>
  </main>;
}
