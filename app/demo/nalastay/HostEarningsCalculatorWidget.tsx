'use client';

import { useState } from 'react';
import {
  Home,
  MapPin,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Star,
  Heart,
  Users,
  Compass,
  Waves,
  Palmtree,
  Flame,
  Tent,
  Building,
  DollarSign,
  SlidersHorizontal,
  Info,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

interface LocationConfig {
  id: string;
  name: string;
  province: string;
  baseRate: number;
}

const locations: LocationConfig[] = [
  { id: 'bali', name: 'Bali (Canggu, Ubud, Uluwatu)', province: 'Bali', baseRate: 1850000 },
  { id: 'jogja', name: 'Yogyakarta (Malioboro, Sleman)', province: 'D.I. Yogyakarta', baseRate: 950000 },
  { id: 'bandung', name: 'Bandung (Dago Pakar, Lembang)', province: 'Jawa Barat', baseRate: 1250000 },
  { id: 'jakarta', name: 'Jakarta (Kemang, Senopati, SCBD)', province: 'DKI Jakarta', baseRate: 1400000 },
  { id: 'lombok', name: 'Lombok (Kuta Mandalika, Senggigi)', province: 'NTB', baseRate: 1600000 },
  { id: 'bajo', name: 'Labuan Bajo (Waecicu, Komodo)', province: 'NTT', baseRate: 2400000 },
];

interface SampleStay {
  id: string;
  title: string;
  location: string;
  category: string;
  distance: string;
  dates: string;
  rating: number;
  reviewsCount: number;
  pricePerNight: number;
  image: string;
  isSuperhost: boolean;
}

const sampleStays: SampleStay[] = [
  {
    id: 'stay-1',
    title: 'Villa Serenity Oceanfront with Infinity Pool',
    location: 'Canggu, Bali',
    category: 'pools',
    distance: '260 km dari pusat kota',
    dates: '12 – 17 Jul',
    rating: 4.95,
    reviewsCount: 128,
    pricePerNight: 2850000,
    image: '/stay/hero-villa.jpg',
    isSuperhost: true,
  },
  {
    id: 'stay-2',
    title: 'The Palms Modern Tropical Villa & Garden',
    location: 'Ubud, Bali',
    category: 'tropical',
    distance: 'Pemandangan sawah terasering',
    dates: '20 – 25 Jul',
    rating: 4.92,
    reviewsCount: 94,
    pricePerNight: 2150000,
    image: '/stay/villa-pool.jpg',
    isSuperhost: true,
  },
  {
    id: 'stay-3',
    title: 'Cliffside Sunset Luxury Suite & Beach Access',
    location: 'Uluwatu, Bali',
    category: 'beach',
    distance: 'Akses langsung pantai privat',
    dates: '1 – 6 Agu',
    rating: 4.98,
    reviewsCount: 162,
    pricePerNight: 3400000,
    image: '/stay/villa-beach.jpg',
    isSuperhost: true,
  },
  {
    id: 'stay-4',
    title: 'Dago Heritage Panoramic Pine Forest Villa',
    location: 'Bandung, Jawa Barat',
    category: 'design',
    distance: 'Udara sejuk pegunungan',
    dates: '8 – 13 Agu',
    rating: 4.88,
    reviewsCount: 76,
    pricePerNight: 1650000,
    image: '/stay/hero-villa.jpg',
    isSuperhost: false,
  },
];

export default function HostEarningsCalculatorWidget() {
  const [selectedLocId, setSelectedLocId] = useState<string>('bali');
  const [propertyType, setPropertyType] = useState<'entire' | 'private' | 'shared'>('entire');
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [nightsBooked, setNightsBooked] = useState<number>(15);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [likedStays, setLikedStays] = useState<Record<string, boolean>>({});

  const currentLoc = locations.find((l) => l.id === selectedLocId) || locations[0];

  // Price calculations
  const typeMultiplier = propertyType === 'entire' ? 1.0 : propertyType === 'private' ? 0.6 : 0.35;
  const bedroomMultiplier = 1 + (bedrooms - 1) * 0.35;
  const calculatedRatePerNight = Math.round(currentLoc.baseRate * typeMultiplier * bedroomMultiplier);
  const estimatedMonthlyIncome = calculatedRatePerNight * nightsBooked;
  const estimatedAnnualIncome = estimatedMonthlyIncome * 12;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const toggleLike = (stayId: string) => {
    setLikedStays((prev) => ({ ...prev, [stayId]: !prev[stayId] }));
  };

  const filteredStays = sampleStays.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <div className="ns-calculator-showcase-container">
      {/* 1. Host Earnings Calculator Card */}
      <div className="ns-calc-card">
        <div className="ns-calc-header">
          <div className="ns-calc-badge">
            <Home size={14} />
            <span>KALKULATOR PENGHASILAN TUAN RUMAH</span>
          </div>
          <h2>Buka Pintu Rumahmu,<br />Raih Estimasi <em>{formatRupiah(estimatedMonthlyIncome)}</em> / bulan</h2>
          <p className="ns-calc-sub">
            {nightsBooked} malam di estimasi tarif {formatRupiah(calculatedRatePerNight)}/malam di {currentLoc.name}.
          </p>
        </div>

        {/* Input Selectors Grid */}
        <div className="ns-calc-inputs-grid">
          {/* Location Picker */}
          <div className="ns-input-box">
            <label>
              <MapPin size={14} className="ns-icon-coral" />
              <span>Lokasi Properti Anda</span>
            </label>
            <select
              value={selectedLocId}
              onChange={(e) => setSelectedLocId(e.target.value)}
              className="ns-select"
            >
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.name} ({loc.province})
                </option>
              ))}
            </select>
          </div>

          {/* Property Type Picker */}
          <div className="ns-input-box">
            <label>
              <Home size={14} className="ns-icon-coral" />
              <span>Tipe Ruang yang Disewakan</span>
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value as 'entire' | 'private' | 'shared')}
              className="ns-select"
            >
              <option value="entire">Seluruh Rumah / Villa</option>
              <option value="private">Kamar Privat Mewah</option>
              <option value="shared">Kamar Bersama / Glamping</option>
            </select>
          </div>

          {/* Bedrooms Count */}
          <div className="ns-input-box">
            <label>
              <Users size={14} className="ns-icon-coral" />
              <span>Jumlah Kamar Tidur</span>
            </label>
            <div className="ns-btn-group">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  className={`ns-btn-pill ${bedrooms === num ? 'active' : ''}`}
                  onClick={() => setBedrooms(num)}
                >
                  {num} {num === 4 ? '+' : ''} Kamar
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Nights Slider Bar */}
        <div className="ns-slider-wrap">
          <div className="ns-slider-label">
            <span>Estimasi Malam Tersewa per Bulan:</span>
            <strong>{nightsBooked} Malam / bulan</strong>
          </div>
          <input
            type="range"
            min={3}
            max={30}
            step={1}
            value={nightsBooked}
            onChange={(e) => setNightsBooked(Number(e.target.value))}
            className="ns-range-slider"
          />
          <div className="ns-slider-bounds">
            <small>3 Malam (Santai / Weekend)</small>
            <small>15 Malam (Rata-rata)</small>
            <small>30 Malam (Okupansi Maksimal)</small>
          </div>
        </div>

        {/* Calculated Results Summary & Action Bar */}
        <div className="ns-calc-result-bar">
          <div className="ns-income-projection">
            <div className="ns-income-item">
              <small>Estimasi Penghasilan Bulanan:</small>
              <strong>{formatRupiah(estimatedMonthlyIncome)}</strong>
            </div>
            <div className="ns-income-item sub">
              <small>Proyeksi per Tahun:</small>
              <span>{formatRupiah(estimatedAnnualIncome)} / tahun</span>
            </div>
          </div>

          <div className="ns-calc-actions">
            <a
              href={`https://wa.me/6281573550017?text=Halo%20NalaStay%2C%20saya%20tertarik%20mendaftarkan%20rumah%20saya%20di%20${encodeURIComponent(currentLoc.name)}%20(${propertyType}%2C%20${bedrooms}%20kamar).%20Bisa%20bantu%20onboarding%20menjadi%20tuan%20rumah%3F`}
              target="_blank"
              rel="noreferrer"
              className="ns-btn-host-primary"
            >
              <Sparkles size={16} />
              <span>Mulai Daftarkan Rumahmu</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#komunitas"
              className="ns-btn-host-secondary"
            >
              <span>Konsultasi dengan Superhost Mentor</span>
            </a>
          </div>
        </div>

        <div className="ns-calc-trust-guarantee">
          <ShieldCheck size={16} className="ns-icon-coral" />
          <span>Dilindungi <strong>NalaCover Rp15 Miliar</strong> perlindungan kerusakan properti &amp; liabilitas gratis untuk setiap pemesanan.</span>
        </div>
      </div>

      {/* 2. Airbnb Style Category Pills & Stays Showcase */}
      <div id="showcase-penginapan" className="ns-showcase-section">
        <div className="ns-showcase-head">
          <div>
            <span className="ns-badge-tag">INSPIRASI PROPERTI TUAN RUMAH</span>
            <h3>Lihat Bagaimana Tuan Rumah Lain Meraih Cuan</h3>
          </div>

          {/* Category Filter Pills */}
          <div className="ns-category-filter-bar">
            {[
              { id: 'all', label: 'Semua Kategori', icon: Compass },
              { id: 'pools', label: 'Amazing Pools', icon: Waves },
              { id: 'tropical', label: 'Tropical Villas', icon: Palmtree },
              { id: 'beach', label: 'Beachfront', icon: Flame },
              { id: 'design', label: 'Creative Design', icon: Building },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`ns-cat-pill ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stays Grid Matching Screenshot */}
        <div className="ns-stays-grid">
          {filteredStays.map((stay) => (
            <div key={stay.id} className="ns-stay-card">
              <div className="ns-stay-image-wrap">
                <img src={stay.image} alt={stay.title} />
                <button
                  type="button"
                  className={`ns-btn-favorite ${likedStays[stay.id] ? 'liked' : ''}`}
                  onClick={() => toggleLike(stay.id)}
                  aria-label="Simpan ke favorit"
                >
                  <Heart size={18} fill={likedStays[stay.id] ? '#FF385C' : 'rgba(0,0,0,0.5)'} color="#ffffff" />
                </button>
                {stay.isSuperhost && (
                  <span className="ns-badge-superhost">Superhost</span>
                )}
              </div>

              <div className="ns-stay-info">
                <div className="ns-stay-info-head">
                  <strong>{stay.location}</strong>
                  <span className="ns-rating-box">
                    <Star size={13} fill="#222222" color="#222222" />
                    <span>{stay.rating.toFixed(2)}</span>
                  </span>
                </div>

                <p className="ns-stay-dist">{stay.distance}</p>
                <p className="ns-stay-dates">{stay.dates}</p>

                <div className="ns-stay-price-row">
                  <strong>{formatRupiah(stay.pricePerNight)}</strong>
                  <span> / malam</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
