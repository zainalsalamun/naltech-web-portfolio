'use client';

import { useState } from 'react';
import {
  Calculator,
  Store,
  BadgePercent,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Award,
  BookOpen,
  Image as ImageIcon,
} from 'lucide-react';

interface ResellerTier {
  id: string;
  name: string;
  minOrder: number;
  discountPct: number;
  recommendedFor: string;
  benefits: string[];
}

const resellerTiers: ResellerTier[] = [
  {
    id: 'starter',
    name: 'Paket Reseller Starter',
    minOrder: 500000,
    discountPct: 10,
    recommendedFor: 'Mahasiswa, Ibu Rumah Tangga, & Pemula Usaha',
    benefits: [
      'Diskon produk 10% dari harga retail',
      'Minimal order ringan Rp500.000',
      'Mendapatkan katalog digital PDF',
      'Foto produk resmi tanpa watermark',
      'Boleh mix aneka produk (sambal & keripik)',
    ],
  },
  {
    id: 'silver',
    name: 'Paket Reseller Silver',
    minOrder: 1500000,
    discountPct: 15,
    recommendedFor: 'Toko Online Aktif, Kantin, & Penjual WhatsApp',
    benefits: [
      'Diskon produk 15% dari harga retail',
      'Minimal order Rp1.500.000',
      'Katalog PDF + Video promosi Reels/TikTok',
      'Template Instagram Story & materi copywriting',
      'Prioritas pemrosesan stok',
      'Masuk ke grup edukasi reseller resmi',
    ],
  },
  {
    id: 'gold',
    name: 'Paket Agen & Toko Gold',
    minOrder: 3000000,
    discountPct: 20,
    recommendedFor: 'Toko Oleh-Oleh, Minimarket Lokal, & Warung Makan',
    benefits: [
      'Diskon produk 20% (Margin sangat tinggi)',
      'Minimal order Rp3.000.000',
      'Mendapatkan display stand banner promosi toko',
      'Gratis subsidi ongkos kirim kargo',
      'Akses repeat order prioritas utama',
      'Dukungan promosi wilayah dari pusat',
    ],
  },
  {
    id: 'distributor',
    name: 'Paket Distributor Wilayah',
    minOrder: 10000000,
    discountPct: 25,
    recommendedFor: 'Distributor Kota, Grosir Makanan, & Agen Utama',
    benefits: [
      'Diskon maksimal 25% harga pabrik',
      'Minimal order Rp10.000.000',
      'Hak eksklusif distribusi per wilayah kota',
      'Bisa supply ke reseller binaan sendiri',
      'Konsultasi strategi penjualan 1-on-1',
      'Garansi retur produk rusak di perjalanan',
    ],
  },
];

export default function ResellerProfitCalculator() {
  const [selectedTierId, setSelectedTierId] = useState<string>('silver');
  const [targetSalesPcs, setTargetSalesPcs] = useState<number>(100);
  const [resellerName, setResellerName] = useState<string>('');
  const [resellerCity, setResellerCity] = useState<string>('Surabaya / Luar Kota');
  const [salesChannel, setSalesChannel] = useState<string>('WhatsApp & Toko Online');

  const currentTier = resellerTiers.find((t) => t.id === selectedTierId) || resellerTiers[1];

  // Assumptions
  const avgRetailPrice = 35000; // e.g. Rp35.000 per sambal/snack average
  const resellerPrice = avgRetailPrice * (1 - currentTier.discountPct / 100);
  const profitPerPcs = avgRetailPrice - resellerPrice;

  const totalCapitalOutlay = targetSalesPcs * resellerPrice;
  const totalGrossRevenue = targetSalesPcs * avgRetailPrice;
  const totalNetProfit = targetSalesPcs * profitPerPcs;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const generateWhatsAppResellerUrl = () => {
    const name = resellerName.trim() || 'Calon Mitra Reseller';
    const message = `Halo Rasa Nusantara! Saya tertarik mendaftar program Kemitraan Reseller:
- Nama Calon Mitra: ${name}
- Domisili / Kota: ${resellerCity}
- Paket Kemitraan: ${currentTier.name} (Diskon ${currentTier.discountPct}%)
- Target Penjualan: ${targetSalesPcs} pcs/bulan
- Estimasi Modal Awal: ${formatRupiah(totalCapitalOutlay)}
- Kanal Penjualan: ${salesChannel}

Mohon kirimkan syarat pendaftaran, katalog grosir PDF, dan cara pemesanan paket reseller ya, terima kasih!`;

    return `https://wa.me/6281573550017?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="rns-reseller-calc-card">
      <div className="rns-calc-header">
        <div className="rns-calc-badge">
          <BadgePercent size={14} className="rns-icon-terracotta" />
          <span>SIMULASI KEUNTUNGAN KEMITRAAN</span>
        </div>
        <h3>Kalkulator Estimasi Laba Reseller &amp; Agen</h3>
        <p>Hitung potensi keuntungan bersih bulanan Anda berdasarkan tingkatan kemitraan dan jumlah penjualan produk.</p>
      </div>

      <div className="rns-calc-grid">
        {/* Left Side: Inputs */}
        <div className="rns-calc-inputs-col">
          {/* 1. Tier Selector */}
          <div className="rns-calc-form-group">
            <label className="rns-calc-label">1. Pilih Tingkat Kemitraan:</label>
            <div className="rns-tier-selector-grid">
              {resellerTiers.map((tier) => {
                const isSelected = tier.id === selectedTierId;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    className={`rns-tier-select-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedTierId(tier.id)}
                  >
                    <div className="rns-tier-btn-top">
                      <strong>{tier.name}</strong>
                      <span className="rns-tier-pct-badge">Diskon {tier.discountPct}%</span>
                    </div>
                    <small>Min. Order: {formatRupiah(tier.minOrder)}</small>
                    <p className="rns-tier-rec">{tier.recommendedFor}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Target Sales Slider */}
          <div className="rns-calc-form-group">
            <div className="rns-slider-head">
              <label className="rns-calc-label">2. Target Penjualan per Bulan:</label>
              <span className="rns-slider-value">{targetSalesPcs} pcs / bulan</span>
            </div>
            <input
              type="range"
              min={20}
              max={500}
              step={10}
              value={targetSalesPcs}
              onChange={(e) => setTargetSalesPcs(Number(e.target.value))}
              className="rns-range-slider"
            />
            <div className="rns-slider-markers">
              <span>20 pcs (Santai)</span>
              <span>100 pcs (Aktif)</span>
              <span>250 pcs (Toko)</span>
              <span>500 pcs (Grosir)</span>
            </div>
          </div>

          {/* 3. Reseller Data */}
          <div className="rns-calc-form-group">
            <div className="rns-two-fields">
              <div>
                <label className="rns-field-label">Nama Calon Mitra:</label>
                <input
                  type="text"
                  value={resellerName}
                  onChange={(e) => setResellerName(e.target.value)}
                  placeholder="Contoh: Rina Wijaya"
                  className="rns-calc-input"
                />
              </div>

              <div>
                <label className="rns-field-label">Kota / Domisili:</label>
                <input
                  type="text"
                  value={resellerCity}
                  onChange={(e) => setResellerCity(e.target.value)}
                  placeholder="Contoh: Bandung, Jawa Barat"
                  className="rns-calc-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Profit Summary & WhatsApp Trigger */}
        <div className="rns-calc-results-col">
          <div className="rns-results-box">
            <div className="rns-results-head">
              <span className="rns-results-kicker">PROYEKSI LABA BULANAN</span>
              <h4>{currentTier.name}</h4>
              <span className="rns-tier-tag">Margin {currentTier.discountPct}% per Produk</span>
            </div>

            <div className="rns-results-divider" />

            <div className="rns-calc-metrics">
              <div className="rns-metric-row">
                <span>Target Terjual:</span>
                <strong>{targetSalesPcs} pcs / bulan</strong>
              </div>

              <div className="rns-metric-row">
                <span>Harga Beli Modal:</span>
                <strong>{formatRupiah(resellerPrice)} / pcs</strong>
              </div>

              <div className="rns-metric-row">
                <span>Harga Jual Retail Rekomendasi:</span>
                <strong>{formatRupiah(avgRetailPrice)} / pcs</strong>
              </div>

              <div className="rns-metric-row">
                <span>Keuntungan Bersih per Pcs:</span>
                <strong className="rns-text-green">+{formatRupiah(profitPerPcs)} / pcs</strong>
              </div>

              <div className="rns-metric-row">
                <span>Modal Pembelian Produk:</span>
                <strong>{formatRupiah(totalCapitalOutlay)}</strong>
              </div>

              <div className="rns-profit-highlight-card">
                <span>Estimasi Laba Bersih Anda:</span>
                <strong>{formatRupiah(totalNetProfit)}</strong>
                <small>*Potensi pendapatan tambahan setiap bulan tanpa perlu produksi sendiri.</small>
              </div>
            </div>

            {/* Benefits of this tier */}
            <div className="rns-tier-benefits-list">
              <label>Fasilitas yang Anda Peroleh:</label>
              <ul>
                {currentTier.benefits.map((b, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={13} className="rns-icon-amber" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rns-results-action">
              <a
                href={generateWhatsAppResellerUrl()}
                target="_blank"
                rel="noreferrer"
                className="rns-btn-reseller-wa"
              >
                <MessageCircle size={17} />
                <span>Daftar Kemitraan via WhatsApp</span>
                <ArrowUpRight size={17} />
              </a>
              <small className="rns-reseller-note">
                <ShieldCheck size={12} className="rns-icon-amber" />
                <span>Tanpa biaya pendaftaran tambahan, cukup pembelian paket perdana.</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
