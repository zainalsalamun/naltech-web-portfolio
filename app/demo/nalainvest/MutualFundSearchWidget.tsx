'use client';

import { useState, useEffect } from 'react';
import {
  Search,
  SlidersHorizontal,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  CheckCircle2,
  PieChart,
  Coins,
  Building2,
  Lock,
  Percent,
  Zap,
  Info,
  Calendar,
  Filter,
} from 'lucide-react';

interface SliderInfo {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  bulletPoints: string[];
  ctaLabel: string;
  ctaLink: string;
  badge: string;
  highlightNumber: string;
  highlightLabel: string;
  bgGradient: string;
}

const sliderData: SliderInfo[] = [
  {
    id: 'promo-cashback',
    tag: 'PROMO SPESIAL INVESTOR',
    title: 'Cashback Investasi 10% s.d. Rp1.500.000',
    subtitle: 'Mulai langkah awal finansialmu dengan bonus unit reksadana langsung masuk ke portofoliomu.',
    bulletPoints: [
      'Gunakan kode promo: NALACUAN saat pembelian pertama',
      'Berlaku untuk semua jenis Reksadana Pasar Uang & Saham',
      'Bebas biaya transaksi pembelian & penjualan (0% Fee)',
    ],
    ctaLabel: 'Klaim Bonus Investasi',
    ctaLink: 'https://wa.me/6281573550017?text=Halo%20NalaInvest%2C%20saya%20ingin%20klaim%20bonus%20cashback%20investasi%20kode%20NALACUAN.',
    badge: 'Limited Offer 2026',
    highlightNumber: 'Rp1.5 Juta',
    highlightLabel: 'Maksimal Cashback',
    bgGradient: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
  },
  {
    id: 'robo-advisor',
    tag: 'TEKNOLOGI ROBO-ADVISOR AI',
    title: 'Portofolio Otomatis Sesuai Profil Risikomu',
    subtitle: 'Bingung memilih produk? Algoritma cerdas NalaInvest menyusun alokasi aset ideal secara objektif.',
    bulletPoints: [
      'Analisis profil risiko psikologis & tujuan masa depan',
      'Auto-rebalancing berkala saat pasar mengalami gejolak',
      'Diversifikasi optimal antara Pasar Uang, Obligasi, & Saham',
    ],
    ctaLabel: 'Cek Profil Risikomu',
    ctaLink: '#kalkulator',
    badge: 'Fitur AI Cerdas',
    highlightNumber: '100% Otomatis',
    highlightLabel: 'Diversifikasi Pintar',
    bgGradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
  },
  {
    id: 'ojk-security',
    tag: 'KEAMANAN & LEGALITAS RESMI',
    title: '100% Berizin & Diawasi Otoritas Jasa Keuangan',
    subtitle: 'Dana dan aset investasimu tidak dipegang oleh aplikasi, melainkan disimpan aman di Bank Kustodian.',
    bulletPoints: [
      'Izin Agen Penjual Efek Reksa Dana (APERD) dari OJK RI',
      'Dana tersimpan di Bank Kustodian (BCA, Mandiri, HSBC, Standard Chartered)',
      'Enkripsi data tingkat perbankan 256-bit SSL & Biometric Security',
    ],
    ctaLabel: 'Lihat Lisensi Resmi',
    ctaLink: '#legalitas',
    badge: 'OJK Verified',
    highlightNumber: 'Rp10.000',
    highlightLabel: 'Minimal Mulai Investasi',
    bgGradient: 'linear-gradient(135deg, #1e293b 0%, #0f766e 100%)',
  },
  {
    id: 'dca-routine',
    tag: 'METODE DOLLAR COST AVERAGING',
    title: 'Nabung Rutin Mulai Rp10.000/Hari Jadi Aset Ratusan Juta',
    subtitle: 'Disiplin investasi berkala mengalahkan fluktuasi pasar jangka pendek dan memaksimalkan bunga majemuk.',
    bulletPoints: [
      'Fitur Autodebet otomatis dari rekening bank atau e-wallet',
      'Bebas tarik dana kapan saja tanpa denda penalti penarikan',
      'Laporan perkembangan aset real-time dan notifikasi dividen',
    ],
    ctaLabel: 'Simulasi Nabung Rutin',
    ctaLink: '#kalkulator',
    badge: 'Strategi Finansial',
    highlightNumber: '+16.8% / thn',
    highlightLabel: 'Potensi Return Saham',
    bgGradient: 'linear-gradient(135deg, #134e4a 0%, #065f46 100%)',
  },
];

interface MutualFundProduct {
  id: string;
  name: string;
  manager: string;
  category: 'Pasar Uang' | 'Pendapatan Tetap' | 'Saham' | 'Campuran';
  isSharia: boolean;
  riskLevel: 'Rendah' | 'Rendah-Sedang' | 'Sedang' | 'Tinggi';
  return1Y: number;
  return3Y: number;
  minBuy: number;
  aum: string;
  badge?: string;
}

const mutualFunds: MutualFundProduct[] = [
  {
    id: 'sucor-money',
    name: 'Sucorinvest Money Market Fund',
    manager: 'PT Sucorinvest Asset Management',
    category: 'Pasar Uang',
    isSharia: false,
    riskLevel: 'Rendah',
    return1Y: 6.42,
    return3Y: 19.85,
    minBuy: 10000,
    aum: 'Rp6.8 Triliun',
    badge: 'Top Pick Likuiditas',
  },
  {
    id: 'mandiri-investa',
    name: 'Mandiri Investa Pasar Uang',
    manager: 'PT Mandiri Manajemen Investasi',
    category: 'Pasar Uang',
    isSharia: false,
    riskLevel: 'Rendah',
    return1Y: 5.85,
    return3Y: 17.60,
    minBuy: 10000,
    aum: 'Rp12.4 Triliun',
    badge: 'Favorit Pemula',
  },
  {
    id: 'bahana-sharia',
    name: 'Bahana Likuid Syariah Kelas G',
    manager: 'PT Bahana TCW Investment Management',
    category: 'Pasar Uang',
    isSharia: true,
    riskLevel: 'Rendah',
    return1Y: 5.65,
    return3Y: 16.90,
    minBuy: 10000,
    aum: 'Rp2.1 Triliun',
    badge: 'Syariah DSN-MUI',
  },
  {
    id: 'manulife-obligasi',
    name: 'Manulife Obligasi Unggulan Kelas A',
    manager: 'PT Manulife Aset Manajemen Indonesia',
    category: 'Pendapatan Tetap',
    isSharia: false,
    riskLevel: 'Rendah-Sedang',
    return1Y: 8.85,
    return3Y: 26.40,
    minBuy: 100000,
    aum: 'Rp4.3 Triliun',
    badge: 'Kinerja Stabil',
  },
  {
    id: 'batavia-dana-kas',
    name: 'Batavia Dana Kas Maxima',
    manager: 'PT Batavia Prosperindo Aset Manajemen',
    category: 'Pendapatan Tetap',
    isSharia: false,
    riskLevel: 'Rendah-Sedang',
    return1Y: 8.20,
    return3Y: 24.15,
    minBuy: 100000,
    aum: 'Rp3.7 Triliun',
  },
  {
    id: 'sucor-equity',
    name: 'Sucorinvest Equity Fund',
    manager: 'PT Sucorinvest Asset Management',
    category: 'Saham',
    isSharia: false,
    riskLevel: 'Tinggi',
    return1Y: 16.85,
    return3Y: 48.90,
    minBuy: 100000,
    aum: 'Rp3.1 Triliun',
    badge: 'Top Return 3 Thn',
  },
  {
    id: 'bnp-syariah-saham',
    name: 'BNP Paribas Pesona Syariah',
    manager: 'PT BNP Paribas Asset Management',
    category: 'Saham',
    isSharia: true,
    riskLevel: 'Tinggi',
    return1Y: 14.50,
    return3Y: 41.20,
    minBuy: 100000,
    aum: 'Rp1.9 Triliun',
    badge: 'Saham Syariah',
  },
  {
    id: 'schroder-dana-terpadu',
    name: 'Schroder Dana Terpadu Progresif',
    manager: 'PT Schroder Investment Management Indonesia',
    category: 'Campuran',
    isSharia: false,
    riskLevel: 'Sedang',
    return1Y: 11.20,
    return3Y: 33.50,
    minBuy: 100000,
    aum: 'Rp2.8 Triliun',
    badge: 'Alokasi Fleksibel',
  },
];

export default function MutualFundSearchWidget() {
  // Slider State
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedRisk, setSelectedRisk] = useState<string>('Semua');

  // Calculator State
  const [initialCapital, setInitialCapital] = useState<number>(1000000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500000);
  const [years, setYears] = useState<number>(5);
  const [expectedAnnualReturn, setExpectedAnnualReturn] = useState<number>(12);

  // Auto rotate slider every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % sliderData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Filter logic
  const filteredFunds = mutualFunds.filter((fund) => {
    const matchQuery =
      fund.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fund.manager.toLowerCase().includes(searchQuery.toLowerCase());

    const matchCategory =
      selectedCategory === 'Semua' ||
      (selectedCategory === 'Syariah' ? fund.isSharia : fund.category === selectedCategory);

    const matchRisk = selectedRisk === 'Semua' || fund.riskLevel === selectedRisk;

    return matchQuery && matchCategory && matchRisk;
  });

  // Calculate investment projection
  const totalMonths = years * 12;
  const monthlyRate = expectedAnnualReturn / 100 / 12;
  const totalSaved = initialCapital + monthlyContribution * totalMonths;

  // Future value formula for DCA
  const futureInitial = initialCapital * Math.pow(1 + monthlyRate, totalMonths);
  const futureContributions =
    monthlyRate > 0
      ? monthlyContribution * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate)
      : monthlyContribution * totalMonths;

  const totalFutureValue = Math.round(futureInitial + futureContributions);
  const totalProfit = totalFutureValue - totalSaved;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const currentSlide = sliderData[activeSlideIndex];

  return (
    <div className="ni-widget-container">
      {/* 1. Multi-Info Slider (Slider Memuat Beberapa Info Sekaligus) */}
      <div
        className="ni-slider-card"
        style={{ background: currentSlide.bgGradient }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="ni-slider-content-grid">
          <div className="ni-slider-copy">
            <div className="ni-slide-meta">
              <span className="ni-slide-tag">{currentSlide.tag}</span>
              <span className="ni-slide-badge">{currentSlide.badge}</span>
            </div>

            <h3>{currentSlide.title}</h3>
            <p className="ni-slide-sub">{currentSlide.subtitle}</p>

            <ul className="ni-slide-bullets">
              {currentSlide.bulletPoints.map((pt, pIdx) => (
                <li key={pIdx}>
                  <CheckCircle2 size={15} className="ni-bullet-check" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="ni-slide-actions">
              <a
                href={currentSlide.ctaLink}
                className="ni-btn-slide-cta"
                target={currentSlide.ctaLink.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
              >
                <span>{currentSlide.ctaLabel}</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="ni-slider-metric-box">
            <span className="ni-metric-label">{currentSlide.highlightLabel}</span>
            <strong className="ni-metric-num">{currentSlide.highlightNumber}</strong>
            <small className="ni-metric-note">Transparan · Tanpa Potongan Biaya Tersembunyi</small>

            <div className="ni-slider-controls">
              <button
                type="button"
                onClick={() =>
                  setActiveSlideIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1))
                }
                className="ni-btn-nav"
                aria-label="Slide sebelumnya"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="ni-slider-dots">
                {sliderData.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`ni-dot ${activeSlideIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveSlideIndex(idx)}
                    aria-label={`Buka slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveSlideIndex((prev) => (prev + 1) % sliderData.length)
                }
                className="ni-btn-nav"
                aria-label="Slide berikutnya"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Form Sederhana Pencarian & Filter Produk Reksadana */}
      <div id="cari-reksadana" className="ni-search-section">
        <div className="ni-search-header">
          <div className="ni-search-badge">
            <SlidersHorizontal size={14} />
            <span>FORM PENCARIAN &amp; FILTER PRODUK</span>
          </div>
          <h2>Cari &amp; Temukan Reksadana Terbaik<br />Sesuai <em>Tujuan Finansialmu.</em></h2>
          <p>
            Filter berdasarkan nama manajer investasi, kategori aset, imbal hasil historis, dan kriteria syariah dengan mudah.
          </p>
        </div>

        {/* Search Input Bar & Category Pills */}
        <div className="ni-filter-bar">
          <div className="ni-search-input-wrap">
            <Search size={18} className="ni-search-icon" />
            <input
              type="text"
              placeholder="Cari nama produk atau Manajer Investasi (cth: Sucorinvest, Mandiri, Manulife, Batavia...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ni-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="ni-btn-clear"
              >
                Reset
              </button>
            )}
          </div>

          <div className="ni-category-pills">
            {['Semua', 'Pasar Uang', 'Pendapatan Tetap', 'Saham', 'Campuran', 'Syariah'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`ni-cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results List / Grid */}
        <div className="ni-funds-results">
          <div className="ni-results-info">
            <span>Menampilkan <strong>{filteredFunds.length}</strong> produk reksadana pilihan</span>
            <small>Data historis terverifikasi OJK</small>
          </div>

          {filteredFunds.length === 0 ? (
            <div className="ni-no-results">
              <Info size={32} />
              <h4>Tidak ada produk yang sesuai kriteria pencarian</h4>
              <p>Coba gunakan kata kunci yang lebih umum atau ubah pilihan kategori filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Semua');
                  setSelectedRisk('Semua');
                }}
                className="ni-btn-reset-filters"
              >
                Reset Semua Filter
              </button>
            </div>
          ) : (
            <div className="ni-funds-grid">
              {filteredFunds.map((fund) => (
                <div key={fund.id} className="ni-fund-card">
                  <div className="ni-fund-card-head">
                    <div>
                      <div className="ni-fund-tags">
                        <span className="ni-tag-cat">{fund.category}</span>
                        {fund.isSharia && <span className="ni-tag-sharia">Syariah</span>}
                        {fund.badge && <span className="ni-tag-top">{fund.badge}</span>}
                      </div>
                      <h4>{fund.name}</h4>
                      <small className="ni-fund-manager">
                        <Building2 size={12} /> {fund.manager}
                      </small>
                    </div>
                  </div>

                  <div className="ni-fund-metrics-row">
                    <div className="ni-metric-unit">
                      <small>Return 1 Tahun</small>
                      <strong className="ni-positive-return">
                        <TrendingUp size={14} /> +{fund.return1Y.toFixed(2)}%
                      </strong>
                    </div>

                    <div className="ni-metric-unit">
                      <small>Return 3 Tahun</small>
                      <strong>+{fund.return3Y.toFixed(2)}%</strong>
                    </div>

                    <div className="ni-metric-unit">
                      <small>Min. Beli</small>
                      <span>{formatRupiah(fund.minBuy)}</span>
                    </div>

                    <div className="ni-metric-unit">
                      <small>Total AUM</small>
                      <span>{fund.aum}</span>
                    </div>
                  </div>

                  <div className="ni-fund-card-footer">
                    <div className="ni-risk-indicator">
                      <span className="ni-risk-dot" />
                      <span>Risiko: <strong>{fund.riskLevel}</strong></span>
                    </div>

                    <a
                      href={`https://wa.me/6281573550017?text=Halo%20NalaInvest%2C%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(fund.name)}%20(${fund.category}).%20Bisa%20bantu%20simulasi%20dan%20pembelian%3F`}
                      target="_blank"
                      rel="noreferrer"
                      className="ni-btn-buy-fund"
                    >
                      <span>Beli / Simulasi</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 3. Interactive Compound Interest & DCA Investment Simulator */}
      <div id="kalkulator" className="ni-calc-section">
        <div className="ni-calc-grid">
          <div className="ni-calc-controls">
            <span className="ni-calc-kicker">SIMULASI KEUNTUNGAN FINANSIAL</span>
            <h3>Hitung Pertumbuhan Asetmu</h3>
            <p>
              Lihat bagaimana kekuatan investasi rutin dan imbal hasil majemuk mengembangkan modal kecil menjadi dana masa depan yang signifikan.
            </p>

            <div className="ni-slider-input-group">
              <div className="ni-slider-label-row">
                <label>Modal Investasi Awal:</label>
                <strong>{formatRupiah(initialCapital)}</strong>
              </div>
              <input
                type="range"
                min={100000}
                max={50000000}
                step={500000}
                value={initialCapital}
                onChange={(e) => setInitialCapital(Number(e.target.value))}
                className="ni-range-slider"
              />
            </div>

            <div className="ni-slider-input-group">
              <div className="ni-slider-label-row">
                <label>Investasi Rutin Bulanan (DCA):</label>
                <strong>{formatRupiah(monthlyContribution)} / bln</strong>
              </div>
              <input
                type="range"
                min={50000}
                max={10000000}
                step={50000}
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="ni-range-slider"
              />
            </div>

            <div className="ni-slider-input-group">
              <div className="ni-slider-label-row">
                <label>Jangka Waktu Investasi:</label>
                <strong>{years} Tahun ({totalMonths} Bulan)</strong>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="ni-range-slider"
              />
            </div>

            <div className="ni-slider-input-group">
              <div className="ni-slider-label-row">
                <label>Estimasi Imbal Hasil Rata-rata per Tahun:</label>
                <strong>{expectedAnnualReturn}% / tahun</strong>
              </div>
              <input
                type="range"
                min={5}
                max={18}
                step={0.5}
                value={expectedAnnualReturn}
                onChange={(e) => setExpectedAnnualReturn(Number(e.target.value))}
                className="ni-range-slider"
              />
            </div>
          </div>

          <div className="ni-calc-result-box">
            <span className="ni-res-tag">ESTIMASI HASIL INVESTASI ({years} TAHUN)</span>
            <div className="ni-res-main-number">
              <small>Nilai Akhir Portofolio:</small>
              <strong>{formatRupiah(totalFutureValue)}</strong>
            </div>

            <div className="ni-res-breakdown-grid">
              <div className="ni-res-item">
                <small>Total Modal Disetor:</small>
                <span>{formatRupiah(totalSaved)}</span>
              </div>
              <div className="ni-res-item profit">
                <small>Keuntungan Pertumbuhan Aset:</small>
                <strong>+{formatRupiah(totalProfit)}</strong>
              </div>
            </div>

            <div className="ni-res-cta">
              <a
                href={`https://wa.me/6281573550017?text=Halo%20NalaInvest%2C%20saya%20ingin%20memulai%20investasi%20dengan%20modal%20awal%20${encodeURIComponent(formatRupiah(initialCapital))}%20dan%20rutin%20${encodeURIComponent(formatRupiah(monthlyContribution))}/bulan%20target%20${years}%20tahun.`}
                target="_blank"
                rel="noreferrer"
                className="ni-btn-start-invest"
              >
                <Zap size={16} />
                <span>Mulai Investasi Portofolio Ini</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="ni-res-disclaimer">
              <Info size={13} />
              <span>Simulasi ini merupakan ilustrasi matematis berdasarkan asumsi imbal hasil historis masa lalu.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
