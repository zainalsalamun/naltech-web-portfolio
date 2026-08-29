'use client';

import { useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Ticket,
  Calendar,
  Users,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  QrCode,
  Info,
  Compass,
} from 'lucide-react';

interface CandiDestination {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  location: string;
  openHours: string;
  adultPrice: number;
  childPrice: number;
  image: string;
  description: string;
  highlights: string[];
}

const candiList: CandiDestination[] = [
  {
    id: 'prambanan',
    name: 'Candi Prambanan',
    badge: 'Situs Warisan Dunia UNESCO',
    tagline: 'Candi Hindu Terbesar di Indonesia & Mahakarya Abad ke-9',
    location: 'Jl. Raya Solo - Yogyakarta No.16, Sleman / Klaten',
    openHours: '06.30 – 17.00 WIB (Setiap Hari)',
    adultPrice: 50000,
    childPrice: 25000,
    image: '/candi/candi-prambanan.jpg',
    description:
      'Kompleks mahakarya arsitektur Hindu yang menjulang tinggi 47 meter. Terdiri dari 3 candi utama persembahan untuk Trimurti (Siwa, Wisnu, Brahma) dengan relief epik Ramayana yang terpahat indah.',
    highlights: [
      'Pementasan Sendratari Ramayana Panggung Terbuka',
      'Taman Wisata Rusa & Museum Sejarah Candi',
      'Spot Sunset Spektakuler di Balik Stupa Raksasa',
      'Fasilitas Shuttle Listrik & Jalur Ramah Kursi Roda',
    ],
  },
  {
    id: 'plaosan',
    name: 'Candi Plaosan',
    badge: 'Candi Kembar Romantis',
    tagline: 'Simbol Cinta Sejati & Harmoni Hindu - Buddha',
    location: 'Dukuh Plaosan, Desa Bugisan, Prambanan, Klaten',
    openHours: '08.00 – 17.00 WIB',
    adultPrice: 10000,
    childPrice: 5000,
    image: '/candi/candi-plaosan.jpg',
    description:
      'Dibangun oleh Rakai Pikatan untuk permaisurinya Pramodawardhani. Candi kembar (Plaosan Lor & Plaosan Kidul) ini memancarkan aura romantis dengan latar hamparan sawah hijau nan asri.',
    highlights: [
      'Spot Foto Sunset Siluet Paling Estetik di Jogja',
      'Arsitektur Paduan Hindu & Buddha yang Unik',
      'Suasana Sejuk, Tenang & Jauh dari Keramaian',
      'Dekat Spot Kuliner Tradisional Desa Wisata Bugisan',
    ],
  },
  {
    id: 'kalasan',
    name: 'Candi Kalasan',
    badge: 'Candi Buddha Tertua',
    tagline: 'Mahakarya Seni Relief Bajralepa Tertua di Tanah Jawa',
    location: 'Jl. Raya Yogya-Solo Km 13, Kalasan, Sleman',
    openHours: '08.00 – 17.00 WIB',
    adultPrice: 10000,
    childPrice: 5000,
    image: '/candi/candi-kalasan.jpg',
    description:
      'Candi Buddha yang didirikan pada tahun 778 Masehi sebagai persembahan untuk Dewi Tara. Dikenal dengan lapisan pelindung batu kuno (Bajralepa) yang membuat reliefnya tetap halus berkilau.',
    highlights: [
      'Pahatan Relief Kala & Pohon Kahyangan yang Sangat Detail',
      'Akses Sangat Mudah Tepat di Pinggir Jalan Utama Solo-Jogja',
      'Kerap Dijadikan Referensi Arsitektur Kuno Dunia',
      'Harga Tiket Masuk Sangat Terjangkau',
    ],
  },
  {
    id: 'ratuboko',
    name: 'Candi Ratu Boko',
    badge: 'Situs Istana Keraton Megah',
    tagline: 'Kompleks Keraton di Atas Bukit dengan Gerbang Ikonik',
    location: 'Jl. Raya Piyungan - Prambanan Km 2, Bokoharjo',
    openHours: '07.00 – 17.30 WIB',
    adultPrice: 40000,
    childPrice: 20000,
    image: '/candi/hero-footage.jpg',
    description:
      'Situs pemukiman keraton purba di atas perbukitan setinggi 196 meter. Menawarkan pemandangan panorama Gunung Merapi dan Candi Prambanan dari ketinggian.',
    highlights: [
      'Gerbang Utama Siluet Ikonik Tempat Berburu Senja',
      'Pendopo Keraton, Gua Pembakaran & Kolam Pemandian Kuno',
      'Restoran Boko Sunset dengan Pemandangan Lembah',
      'Tersedia Tiket Terusan Shuttle dari Prambanan',
    ],
  },
];

export default function CandiSelectorWidget() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [selectedCandiId, setSelectedCandiId] = useState<string>('prambanan');
  
  // Booking Form State
  const [visitDate, setVisitDate] = useState<string>('2026-09-01');
  const [adultCount, setAdultCount] = useState<number>(2);
  const [childCount, setChildCount] = useState<number>(0);
  const [ticketType, setTicketType] = useState<'reguler' | 'terusan' | 'ramayana'>('reguler');

  const activeCandi = candiList.find((c) => c.id === selectedCandiId) ?? candiList[0];

  // Price calculations
  let adultPrice = activeCandi.adultPrice;
  let childPrice = activeCandi.childPrice;

  if (ticketType === 'terusan') {
    adultPrice = Math.round(activeCandi.adultPrice * 1.5);
    childPrice = Math.round(activeCandi.childPrice * 1.5);
  } else if (ticketType === 'ramayana') {
    adultPrice = 175000;
    childPrice = 125000;
  }

  const totalPrice = adultCount * adultPrice + childCount * childPrice;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="ncw-container">
      {/* 1. Cinematic Video Footage Hero Card (Penarik Fokus Pengunjung) */}
      <div className="ncw-footage-card">
        <div className="ncw-footage-media">
          <img src="/candi/hero-footage.jpg" alt="Video Footage Keagungan Candi Nusantara" />

          <div className="ncw-footage-overlay">
            <div className="ncw-footage-top">
              <span className="ncw-badge-live">
                <span className="ncw-dot-pulse" />
                <span>4K HDR CINEMATIC FOOTAGE</span>
              </span>
              <button
                type="button"
                className="ncw-btn-mute"
                onClick={() => setIsMuted(!isMuted)}
                title={isMuted ? 'Nyalakan Suara Alam' : 'Matikan Suara'}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                <span>{isMuted ? 'Mute' : 'Audio On'}</span>
              </button>
            </div>

            <div className="ncw-footage-center">
              <button
                type="button"
                className="ncw-btn-play-center"
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? 'Jeda Footage' : 'Putar Footage'}
              >
                {isPlaying ? <Pause size={22} /> : <Play size={22} />}
              </button>
            </div>

            <div className="ncw-footage-bottom">
              <div>
                <span className="ncw-footage-kicker">CINEMATIC EXPERIENCE</span>
                <h3>Sunrise Magis &amp; Arsitektur Megah Candi Nusantara</h3>
                <small>
                  <MapPin size={12} /> Kawasan Cagar Budaya Prambanan - Sleman &amp; Klaten
                </small>
              </div>
              <span className="ncw-timecode">0:24 / 0:45</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Temple Selection Column (Kolom Pilihan Candi Persis di Bawah Headline) */}
      <div id="pilihan-candi" className="ncw-selection-section">
        <div className="ncw-section-header">
          <span className="ncw-badge-sub">KOLOM PILIHAN DESTINASI CANDI</span>
          <h2>Pilih Destinasi Candi<br />yang Ingin <em>Kamu Kunjungi.</em></h2>
          <p>
            Klik pada salah satu candi di bawah ini untuk melihat ulasan lengkap, jam buka, harga tiket resmi, dan reservasi e-tiket instan.
          </p>
        </div>

        {/* Temple Selector Tab Pills */}
        <div className="ncw-candi-tabs" role="tablist" aria-label="Daftar Candi">
          {candiList.map((candi) => (
            <button
              key={candi.id}
              type="button"
              className={`ncw-candi-tab-btn ${selectedCandiId === candi.id ? 'active' : ''}`}
              onClick={() => setSelectedCandiId(candi.id)}
              role="tab"
              aria-selected={selectedCandiId === candi.id}
            >
              <Compass size={16} />
              <div className="ncw-tab-text">
                <strong>{candi.name}</strong>
                <small>{candi.badge}</small>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Temple Detail & Step-by-Step E-Ticket Booking Card */}
        <div className="ncw-selected-card">
          <div className="ncw-card-grid">
            {/* Left: Temple Details & Highlights */}
            <div className="ncw-candi-info-col">
              <div className="ncw-candi-tag">
                <Sparkles size={13} className="ncw-icon-gold" />
                <span>{activeCandi.badge}</span>
              </div>

              <h3>{activeCandi.name}</h3>
              <p className="ncw-tagline">{activeCandi.tagline}</p>

              <div className="ncw-quick-specs">
                <div className="ncw-spec-row">
                  <MapPin size={15} className="ncw-icon-pin" />
                  <span>{activeCandi.location}</span>
                </div>
                <div className="ncw-spec-row">
                  <Clock size={15} className="ncw-icon-clock" />
                  <span>{activeCandi.openHours}</span>
                </div>
              </div>

              <p className="ncw-desc">{activeCandi.description}</p>

              <div className="ncw-highlights-box">
                <strong>Daya Tarik Utama:</strong>
                <ul className="ncw-hl-list">
                  {activeCandi.highlights.map((hl, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} className="ncw-icon-check" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Step-by-Step Easy Ticket Booking Form (Ramah Pengguna Awam) */}
            <div className="ncw-booking-col">
              <div className="ncw-form-box">
                <div className="ncw-form-head">
                  <Ticket size={18} className="ncw-icon-gold" />
                  <div>
                    <h4>Form Pemesanan E-Tiket Cepat</h4>
                    <small>Mudah, resmi &amp; langsung scan QR Code di pintu masuk</small>
                  </div>
                </div>

                {/* Step 1: Visit Date */}
                <div className="ncw-field">
                  <label htmlFor="visitDate">
                    <Calendar size={14} />
                    <span>Langkah 1: Pilih Tanggal Kunjungan</span>
                  </label>
                  <input
                    id="visitDate"
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="ncw-input"
                  />
                </div>

                {/* Step 2: Ticket Type */}
                <div className="ncw-field">
                  <label>
                    <Info size={14} />
                    <span>Langkah 2: Pilih Kategori Tiket</span>
                  </label>
                  <div className="ncw-ticket-type-grid">
                    <button
                      type="button"
                      className={`ncw-type-btn ${ticketType === 'reguler' ? 'active' : ''}`}
                      onClick={() => setTicketType('reguler')}
                    >
                      <strong>Reguler</strong>
                      <small>Masuk Candi Utama</small>
                    </button>
                    <button
                      type="button"
                      className={`ncw-type-btn ${ticketType === 'terusan' ? 'active' : ''}`}
                      onClick={() => setTicketType('terusan')}
                    >
                      <strong>Paket Terusan</strong>
                      <small>2 Candi + Shuttle</small>
                    </button>
                    <button
                      type="button"
                      className={`ncw-type-btn ${ticketType === 'ramayana' ? 'active' : ''}`}
                      onClick={() => setTicketType('ramayana')}
                    >
                      <strong>Sendratari</strong>
                      <small>Show Ramayana</small>
                    </button>
                  </div>
                </div>

                {/* Step 3: Visitor Quantity */}
                <div className="ncw-field">
                  <label>
                    <Users size={14} />
                    <span>Langkah 3: Jumlah Pengunjung</span>
                  </label>
                  <div className="ncw-qty-row">
                    <div className="ncw-qty-item">
                      <div>
                        <strong>Dewasa (≥ 10 Th)</strong>
                        <small>{formatRupiah(adultPrice)}</small>
                      </div>
                      <div className="ncw-counter">
                        <button
                          type="button"
                          onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                        >
                          -
                        </button>
                        <span>{adultCount}</span>
                        <button type="button" onClick={() => setAdultCount(adultCount + 1)}>
                          +
                        </button>
                      </div>
                    </div>

                    <div className="ncw-qty-item">
                      <div>
                        <strong>Anak (3–9 Th)</strong>
                        <small>{formatRupiah(childPrice)}</small>
                      </div>
                      <div className="ncw-counter">
                        <button
                          type="button"
                          onClick={() => setChildCount(Math.max(0, childCount - 1))}
                        >
                          -
                        </button>
                        <span>{childCount}</span>
                        <button type="button" onClick={() => setChildCount(childCount + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Total & Action Button */}
                <div className="ncw-total-box">
                  <div className="ncw-total-price">
                    <small>Total Biaya Tiket ({adultCount + childCount} Pengunjung):</small>
                    <strong>{formatRupiah(totalPrice)}</strong>
                  </div>

                  <a
                    href={`https://wa.me/6281573550017?text=Halo%20Taman%20Wisata%20Candi%20(NalaCandi)%2C%20saya%20ingin%20pesan%20E-Tiket%20${encodeURIComponent(activeCandi.name)}%20tanggal%20${visitDate}%20kategori%20${ticketType}%20untuk%20${adultCount}%20Dewasa%20dan%20${childCount}%20Anak.%20Total%20${encodeURIComponent(formatRupiah(totalPrice))}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="ncw-btn-submit"
                  >
                    <QrCode size={16} />
                    <span>Dapatkan E-Tiket Sekarang</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="ncw-guarantee">
                  <ShieldCheck size={14} className="ncw-icon-check" />
                  <span>Resmi &amp; Tanpa Antre di Loket · E-Tiket Dikirim ke WhatsApp &amp; Email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
