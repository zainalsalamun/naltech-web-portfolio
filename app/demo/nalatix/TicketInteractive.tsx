'use client';

import { useState } from 'react';

interface EventItem {
  id: string;
  title: string;
  category: 'concert' | 'festival' | 'orchestra' | 'indie';
  categoryLabel: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  priceFrom: number;
  image: string;
  tag?: string;
  badgeType?: 'hot' | 'limited' | 'presale' | 'selling-fast';
  headliner: string;
}

const allEvents: EventItem[] = [
  {
    id: 'soundwave-2026',
    title: 'Soundwave Jakarta Festival 2026',
    category: 'festival',
    categoryLabel: 'Music Festival',
    date: '24—25 Okt 2026',
    time: '15.00—23.30 WIB',
    venue: 'Stadion Madya GBK',
    city: 'Jakarta',
    priceFrom: 385000,
    image: '/tickets/hero-concert.jpg',
    tag: 'Festival 2 Hari',
    badgeType: 'hot',
    headliner: '18 Musisi Internasional & Nasional',
  },
  {
    id: 'aruna-symphony',
    title: 'Aruna Symphony: Melodi Ruang Jiwa',
    category: 'orchestra',
    categoryLabel: 'Orkestra & Seni',
    date: '14 Nov 2026',
    time: '19.30 WIB',
    venue: 'Aula Simfonia Jakarta',
    city: 'Jakarta',
    priceFrom: 450000,
    image: '/tickets/orchestra-hall.jpg',
    tag: 'VIP Seat Limited',
    badgeType: 'limited',
    headliner: 'Grand Philharmonic & Paduan Suara 60 Musisi',
  },
  {
    id: 'nusantara-indie-fest',
    title: 'Nusantara Indie Sun Fest 2026',
    category: 'festival',
    categoryLabel: 'Outdoor Fest',
    date: '12—13 Des 2026',
    time: '14.00—23.00 WITA',
    venue: 'Pantai Melasti Beach Arena',
    city: 'Bali',
    priceFrom: 295000,
    image: '/tickets/festival-crowd.jpg',
    tag: 'Beachside Stage',
    badgeType: 'presale',
    headliner: 'The Panturas, Hindia, Reality Club & 12 Lainnya',
  },
  {
    id: 'electric-echoes-tour',
    title: 'The Electric Echoes: Resonance Tour',
    category: 'indie',
    categoryLabel: 'Indie Rock Live',
    date: '08 Nov 2026',
    time: '20.00 WIB',
    venue: 'Livehouse M Bloc Space',
    city: 'Jakarta',
    priceFrom: 220000,
    image: '/tickets/indie-fest.jpg',
    tag: 'Standing Room Only',
    badgeType: 'selling-fast',
    headliner: 'Album Launch Showcase + Special Secret Guest',
  },
];

const ticketTiers = [
  {
    id: 'presale',
    name: 'Presale Festival Standing',
    price: 385000,
    desc: 'Akses area festival standing, gate masuk reguler, wristband festival.',
    badge: 'Paling Laris',
    available: true,
  },
  {
    id: 'vip-seated',
    name: 'VIP Front Seated (Numbered)',
    price: 850000,
    desc: 'Kursi tribun tengah berpenomoran, fast track gate, exclusive lanyard, free poster.',
    badge: 'Sisa 14 Tiket',
    available: true,
  },
  {
    id: 'vvip-experience',
    name: 'VVIP Soundcheck & Lounge',
    price: 1650000,
    desc: 'Akses soundcheck eksklusif, private AC lounge, free buffet & merchandise pack resmi.',
    badge: 'Limited Pass',
    available: true,
  },
];

export default function TicketInteractive() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('Semua Kota');

  // Booking simulator state
  const [selectedTier, setSelectedTier] = useState(ticketTiers[0]);
  const [ticketCount, setTicketCount] = useState<number>(2);
  const [includeInsurance, setIncludeInsurance] = useState<boolean>(true);
  const [includeMerch, setIncludeMerch] = useState<boolean>(false);
  const [attendeeName, setAttendeeName] = useState<string>('Bintang Pratama');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const filteredEvents = allEvents.filter((ev) => {
    const matchCat = activeCategory === 'all' || ev.category === activeCategory;
    const matchCity = selectedCity === 'Semua Kota' || ev.city === selectedCity;
    const matchSearch =
      searchQuery.trim() === '' ||
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.headliner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchCity && matchSearch;
  });

  const insuranceFee = includeInsurance ? 15000 * ticketCount : 0;
  const merchFee = includeMerch ? 120000 * ticketCount : 0;
  const subtotal = selectedTier.price * ticketCount;
  const adminFee = Math.round(subtotal * 0.035); // 3.5%
  const total = subtotal + adminFee + insuranceFee + merchFee;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const handleSimulateOrder = () => {
    setBookingSuccess(true);
  };

  return (
    <>
      {/* Quick Search & Filter Bar */}
      <section className="tix-search-bar" id="search-section">
        <div className="tix-search-container">
          <div className="tix-search-field">
            <span className="tix-search-icon">🔍</span>
            <div className="tix-input-group">
              <label htmlFor="search-input">Cari Event / Musisi</label>
              <input
                id="search-input"
                type="text"
                placeholder="Contoh: Soundwave, Aruna, Indie Fest..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="tix-search-divider" />

          <div className="tix-search-field">
            <span className="tix-search-icon">📍</span>
            <div className="tix-input-group">
              <label htmlFor="city-select">Lokasi Kota</label>
              <select
                id="city-select"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="Semua Kota">Semua Kota</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bali">Bali</option>
                <option value="Bandung">Bandung</option>
                <option value="Surabaya">Surabaya</option>
              </select>
            </div>
          </div>

          <div className="tix-search-divider" />

          <div className="tix-search-field">
            <span className="tix-search-icon">🗓</span>
            <div className="tix-input-group">
              <label htmlFor="date-input">Waktu Event</label>
              <select id="date-input" defaultValue="Semua Waktu">
                <option value="Semua Waktu">Semua Waktu</option>
                <option value="Bulan Ini">Bulan Ini</option>
                <option value="Weekend Ini">Weekend Ini</option>
                <option value="Tahun 2026">Tahun 2026</option>
              </select>
            </div>
          </div>

          <a href="#events-grid" className="tix-search-submit">
            Cari Tiket <span>↗</span>
          </a>
        </div>
      </section>

      {/* Featured Events Section */}
      <section id="events-grid" className="tix-events-section tix-wrap">
        <header className="tix-section-head">
          <div className="tix-badge-tag">
            <span className="tix-pulse-dot" /> 01 · Lineup & Event Pilihan
          </div>
          <h2>
            Tiket resmi pilihan,<br />
            <em>amankan tempatmu hari ini.</em>
          </h2>
          <p>Seluruh event terverifikasi langsung dengan promotor resmi. 100% garansi keaslian tiket.</p>
        </header>

        {/* Category Tabs */}
        <div className="tix-category-tabs" role="tablist">
          <button
            type="button"
            className={activeCategory === 'all' ? 'active' : ''}
            onClick={() => setActiveCategory('all')}
          >
            🔥 Semua Event ({allEvents.length})
          </button>
          <button
            type="button"
            className={activeCategory === 'festival' ? 'active' : ''}
            onClick={() => setActiveCategory('festival')}
          >
            🎪 Music Festival
          </button>
          <button
            type="button"
            className={activeCategory === 'orchestra' ? 'active' : ''}
            onClick={() => setActiveCategory('orchestra')}
          >
            🎻 Orkestra & Seni
          </button>
          <button
            type="button"
            className={activeCategory === 'indie' ? 'active' : ''}
            onClick={() => setActiveCategory('indie')}
          >
            🎸 Indie & Rock
          </button>
        </div>

        {/* Event Cards Grid */}
        <div className="tix-cards-grid">
          {filteredEvents.length === 0 ? (
            <div className="tix-empty-state">
              <p>Tidak ada event yang sesuai dengan pencarianmu.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setSelectedCity('Semua Kota');
                }}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            filteredEvents.map((ev) => (
              <article className="tix-card" key={ev.id}>
                <div className="tix-card-media">
                  <img src={ev.image} alt={ev.title} loading="lazy" />
                  <div className="tix-media-overlay" />
                  <div className="tix-card-top-badges">
                    <span className="tix-cat-pill">{ev.categoryLabel}</span>
                    {ev.badgeType === 'hot' && <span className="tix-status-pill hot">🔥 FAST SELLING</span>}
                    {ev.badgeType === 'limited' && <span className="tix-status-pill limited">⚡ TIKET TERBATAS</span>}
                    {ev.badgeType === 'presale' && <span className="tix-status-pill presale">✨ PRESALE 2</span>}
                    {ev.badgeType === 'selling-fast' && <span className="tix-status-pill hot">🎟️ SISA 18%</span>}
                  </div>
                  <div className="tix-card-date-badge">
                    <strong>{ev.date.split(' ')[0]}</strong>
                    <small>{ev.date.split(' ').slice(1).join(' ')}</small>
                  </div>
                </div>

                <div className="tix-card-body">
                  <div className="tix-card-meta-row">
                    <span>📍 {ev.venue}, {ev.city}</span>
                    <span>⏰ {ev.time}</span>
                  </div>
                  <h3 className="tix-card-title">{ev.title}</h3>
                  <p className="tix-card-headliner">👥 {ev.headliner}</p>

                  <div className="tix-card-footer">
                    <div className="tix-card-price">
                      <small>Mulai dari</small>
                      <strong>{formatRupiah(ev.priceFrom)}</strong>
                    </div>
                    <a href="#booking-simulator" className="tix-btn-buy">
                      Pesan Tiket <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      {/* Interactive Booking Simulator & Live E-Ticket Generator */}
      <section id="booking-simulator" className="tix-simulator-section tix-wrap">
        <header className="tix-section-head">
          <div className="tix-badge-tag">
            <span className="tix-pulse-dot" /> 02 · Simulasi Pemesanan & E-Ticket
          </div>
          <h2>
            Pilih kategori tiket,<br />
            <em>lihat E-Ticket instanmu.</em>
          </h2>
          <p>
            Coba alur pemesanan interaktif di bawah ini untuk melihat bagaimana pengalaman checkout tiket cepat NalaTix bekerja.
          </p>
        </header>

        <div className="tix-sim-layout">
          {/* Left: Selector & Form */}
          <div className="tix-sim-controls">
            <div className="tix-sim-card">
              <h4>1. Pilih Kategori Tiket (Soundwave Fest 2026)</h4>
              <div className="tix-tier-list">
                {ticketTiers.map((tier) => (
                  <label
                    key={tier.id}
                    className={`tix-tier-item ${selectedTier.id === tier.id ? 'selected' : ''}`}
                    onClick={() => setSelectedTier(tier)}
                  >
                    <input
                      type="radio"
                      name="ticket-tier"
                      checked={selectedTier.id === tier.id}
                      onChange={() => setSelectedTier(tier)}
                    />
                    <div className="tix-tier-info">
                      <div className="tix-tier-header">
                        <strong>{tier.name}</strong>
                        <span className="tix-tier-badge">{tier.badge}</span>
                      </div>
                      <p>{tier.desc}</p>
                      <strong className="tix-tier-price">{formatRupiah(tier.price)} <small>/ tiket</small></strong>
                    </div>
                  </label>
                ))}
              </div>

              <div className="tix-stepper-row">
                <div>
                  <strong>Jumlah Tiket</strong>
                  <small>Maks. 4 tiket per transaksi</small>
                </div>
                <div className="tix-stepper">
                  <button
                    type="button"
                    disabled={ticketCount <= 1}
                    onClick={() => setTicketCount((c) => Math.max(1, c - 1))}
                  >
                    -
                  </button>
                  <span>{ticketCount}</span>
                  <button
                    type="button"
                    disabled={ticketCount >= 4}
                    onClick={() => setTicketCount((c) => Math.min(4, c + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="tix-addons">
                <h4>2. Tambahan Pelindung & Aksesoris</h4>
                <label className="tix-addon-checkbox">
                  <input
                    type="checkbox"
                    checked={includeInsurance}
                    onChange={(e) => setIncludeInsurance(e.target.checked)}
                  />
                  <div>
                    <strong>🛡️ Tiket Refund Protection (+Rp15.000 / tiket)</strong>
                    <small>Jaminan uang kembali 100% jika berhalangan hadir dengan alasan medis/darurat.</small>
                  </div>
                </label>
                <label className="tix-addon-checkbox">
                  <input
                    type="checkbox"
                    checked={includeMerch}
                    onChange={(e) => setIncludeMerch(e.target.checked)}
                  />
                  <div>
                    <strong>👕 Official T-Shirt Soundwave 2026 (+Rp120.000 / pcs)</strong>
                    <small>Edisi terbatas, ambil langsung di merchandise booth festival.</small>
                  </div>
                </label>
              </div>

              <div className="tix-input-name">
                <label htmlFor="attendee-name">Nama Pemegang Tiket Utama</label>
                <input
                  id="attendee-name"
                  type="text"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  placeholder="Nama sesuai KTP/ID"
                />
              </div>

              <div className="tix-price-summary">
                <div className="tix-summary-row">
                  <span>{selectedTier.name} ({ticketCount}x)</span>
                  <span>{formatRupiah(subtotal)}</span>
                </div>
                <div className="tix-summary-row">
                  <span>Biaya Layanan & Gate Scan (3.5%)</span>
                  <span>{formatRupiah(adminFee)}</span>
                </div>
                {includeInsurance && (
                  <div className="tix-summary-row highlight">
                    <span>Refund Protection ({ticketCount}x)</span>
                    <span>{formatRupiah(insuranceFee)}</span>
                  </div>
                )}
                {includeMerch && (
                  <div className="tix-summary-row highlight">
                    <span>Official Merch Pack ({ticketCount}x)</span>
                    <span>{formatRupiah(merchFee)}</span>
                  </div>
                )}
                <div className="tix-summary-total">
                  <div>
                    <small>Total Pembayaran</small>
                    <strong>{formatRupiah(total)}</strong>
                  </div>
                  <button
                    type="button"
                    className="tix-btn-checkout"
                    onClick={handleSimulateOrder}
                  >
                    Simulasi Beli Sekarang ⚡
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Digital E-Ticket Pass Preview */}
          <div className="tix-sim-preview">
            <div className="tix-pass-card">
              <div className="tix-pass-glow" />
              <div className="tix-pass-header">
                <div className="tix-pass-brand">
                  <span>NT</span>
                  <div>
                    <strong>NALATIX PASS</strong>
                    <small>Official Verified E-Ticket</small>
                  </div>
                </div>
                <span className="tix-hologram">★ AUTHENTIC</span>
              </div>

              <div className="tix-pass-event">
                <span className="tix-event-tag">FESTIVAL 2026</span>
                <h3>Soundwave Jakarta Festival</h3>
                <p>24—25 Okt 2026 · Stadion Madya GBK</p>
              </div>

              <div className="tix-pass-details">
                <div>
                  <small>KATEGORI TIKET</small>
                  <strong>{selectedTier.name}</strong>
                </div>
                <div>
                  <small>JUMLAH</small>
                  <strong>{ticketCount} Tiket Pass</strong>
                </div>
                <div>
                  <small>NAMA PEMEGANG</small>
                  <strong>{attendeeName || 'Pengunjung NalaTix'}</strong>
                </div>
                <div>
                  <small>GATE ENTRANCE</small>
                  <strong>GATE 03 (WEST)</strong>
                </div>
              </div>

              <div className="tix-pass-perforated">
                <span className="notch-left" />
                <div className="dashed-line" />
                <span className="notch-right" />
              </div>

              <div className="tix-pass-barcode-section">
                <div className="tix-qr-box">
                  <div className="tix-qr-sim">
                    {/* Simulated SVG QR Code Pattern */}
                    <svg viewBox="0 0 100 100" width="80" height="80" fill="currentColor">
                      <rect x="0" y="0" width="30" height="30" rx="4" />
                      <rect x="5" y="5" width="20" height="20" fill="#0f172a" rx="2" />
                      <rect x="9" y="9" width="12" height="12" rx="1" />
                      <rect x="70" y="0" width="30" height="30" rx="4" />
                      <rect x="75" y="5" width="20" height="20" fill="#0f172a" rx="2" />
                      <rect x="79" y="9" width="12" height="12" rx="1" />
                      <rect x="0" y="70" width="30" height="30" rx="4" />
                      <rect x="5" y="75" width="20" height="20" fill="#0f172a" rx="2" />
                      <rect x="9" y="79" width="12" height="12" rx="1" />
                      <rect x="40" y="10" width="10" height="10" />
                      <rect x="55" y="10" width="8" height="8" />
                      <rect x="40" y="30" width="20" height="10" />
                      <rect x="10" y="40" width="15" height="10" />
                      <rect x="40" y="50" width="10" height="20" />
                      <rect x="55" y="45" width="15" height="15" />
                      <rect x="75" y="40" width="20" height="10" />
                      <rect x="40" y="75" width="20" height="15" />
                      <rect x="75" y="70" width="10" height="20" />
                      <rect x="88" y="75" width="10" height="10" />
                    </svg>
                  </div>
                  <div className="tix-qr-info">
                    <strong>NX-2026-8849-SW</strong>
                    <small>Dynamic QR Code · Auto-Refresh Setiap 30 Detik (Anti Screenshot Duplikat)</small>
                  </div>
                </div>
                <div className="tix-pass-status-pill">
                  {bookingSuccess ? '✅ SIMULASI TIKET AKTIF' : '● SIAP DIGUNAKAN DI GATE'}
                </div>
              </div>
            </div>

            {bookingSuccess && (
              <div className="tix-alert-success">
                <span>🎉</span>
                <div>
                  <strong>Simulasi Pemesanan Berhasil!</strong>
                  <p>E-ticket instan dan barcode siap di-scan langsung di gate tanpa perlu cetak kertas.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
