'use client';

import { useState } from 'react';
import {
  Tag,
  CheckCircle2,
  Sparkles,
  Truck,
  ArrowUpRight,
  Calculator,
  Shirt,
  Layers,
  Sparkle,
  MessageCircle,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface PriceCategory {
  id: string;
  name: string;
  items: { name: string; duration: string; price: string; note: string }[];
}

const priceCategories: PriceCategory[] = [
  {
    id: 'kiloan',
    name: 'Laundry Kiloan Premium',
    items: [
      {
        name: 'Cuci Komplit Reguler (Cuci + Kering + Setrika + Parfum)',
        duration: 'Selesai 24 Jam',
        price: 'Rp8.000 / kg',
        note: '1 Mesin 1 Pelanggan · Parfum Microcapsule 14 Hari',
      },
      {
        name: 'Cuci Komplit Express Kilat (Cuci + Setrika Uap)',
        duration: 'Selesai 6 Jam',
        price: 'Rp14.000 / kg',
        note: 'Prioritas utama antar jemput kilat hari yang sama',
      },
      {
        name: 'Cuci Kering Lipat Rapi',
        duration: 'Selesai 24 Jam',
        price: 'Rp6.000 / kg',
        note: 'Cocok untuk pakaian santai & kaos harian',
      },
      {
        name: 'Setrika Uap Boiler Saja',
        duration: 'Selesai 24 Jam',
        price: 'Rp5.000 / kg',
        note: 'Setrika uap licin rapi bebas risiko gosong',
      },
    ],
  },
  {
    id: 'satuan',
    name: 'Laundry Satuan Eksklusif',
    items: [
      {
        name: 'Jas Pria / Blazer Formal',
        duration: '2 Hari Kerja',
        price: 'Rp35.000 / pcs',
        note: 'Termasuk hanger + cover pelindung jas',
      },
      {
        name: 'Gaun Pesta / Kebaya Brokat',
        duration: '3 Hari Kerja',
        price: 'Rp45.000 / pcs',
        note: 'Treatment wet clean khusus payet & manik-manik',
      },
      {
        name: 'Kemeja Katun / Celana Bahan',
        duration: '1 Hari Kerja',
        price: 'Rp15.000 / pcs',
        note: 'Pembersihan kerah noda membandel',
      },
      {
        name: 'Jaket Kulit / Windbreaker / Hoodie',
        duration: '2 Hari Kerja',
        price: 'Rp30.000 / pcs',
        note: 'Perawatan pelembab serat kulit khusus',
      },
    ],
  },
  {
    id: 'bedcover',
    name: 'Bedcover, Selimut & Gorden',
    items: [
      {
        name: 'Bedcover Ukuran King / Jumbo (No. 1)',
        duration: '2 Hari Kerja',
        price: 'Rp35.000 / pcs',
        note: 'Pengeringan mesin anti-bau apek & steril UV',
      },
      {
        name: 'Bedcover Ukuran Single (No. 3)',
        duration: '2 Hari Kerja',
        price: 'Rp25.000 / pcs',
        note: 'Bahan dacron tetap mengembang empuk',
      },
      {
        name: 'Selimut Tebal / Sprei Set',
        duration: '1 Hari Kerja',
        price: 'Rp20.000 / pcs',
        note: 'Basmi tungau & debu mikroskopis',
      },
      {
        name: 'Karpet Bulu / Permadani Rumah',
        duration: '3 Hari Kerja',
        price: 'Rp18.000 / m²',
        note: 'Deep vacuum & pembersih serat karpet',
      },
    ],
  },
  {
    id: 'sepatu',
    name: 'Sepatu & Tas (Deep Clean)',
    items: [
      {
        name: 'Sneakers / Canvas Shoes Deep Clean',
        duration: '2 Hari Kerja',
        price: 'Rp35.000 / pasang',
        note: 'Membersihkan upper, midsole, dan insole',
      },
      {
        name: 'Leather Shoes / Boots Premium Polish',
        duration: '3 Hari Kerja',
        price: 'Rp50.000 / pasang',
        note: 'Pembersihan mendalam + kondisioner kulit',
      },
      {
        name: 'Ransel Kerja / Tas Sekolah',
        duration: '2 Hari Kerja',
        price: 'Rp35.000 / pcs',
        note: 'Hilangkan noda daki dan noda tinta',
      },
      {
        name: 'Women Luxury Handbag Treatment',
        duration: '4 Hari Kerja',
        price: 'Rp65.000 / pcs',
        note: 'Formula khusus tanpa merusak lapisan coating',
      },
    ],
  },
];

export default function LaundryPriceCalculator() {
  const [activeTab, setActiveTab] = useState<string>('kiloan');

  // Calculator states
  const [weightKg, setWeightKg] = useState<number>(5);
  const [includeBedcover, setIncludeBedcover] = useState<boolean>(false);
  const [shoesCount, setShoesCount] = useState<number>(0);
  const [serviceSpeed, setServiceSpeed] = useState<'regular' | 'express'>('regular');

  // Calculations
  const ratePerKg = serviceSpeed === 'regular' ? 8000 : 14000;
  const kiloanTotal = weightKg * ratePerKg;
  const bedcoverTotal = includeBedcover ? 35000 : 0;
  const shoesTotal = shoesCount * 35000;
  const grandTotal = kiloanTotal + bedcoverTotal + shoesTotal;
  const isFreeDelivery = grandTotal >= 40000;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const activeCategoryData = priceCategories.find((c) => c.id === activeTab) || priceCategories[0];

  return (
    <div className="nly-pricing-section-container">
      {/* 1. Category Tabs */}
      <div className="nly-price-category-tabs">
        {priceCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`nly-price-tab ${activeTab === cat.id ? 'active' : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* 2. Menu Cards Grid for Active Category */}
      <div className="nly-price-items-grid">
        {activeCategoryData.items.map((item, idx) => (
          <div key={idx} className="nly-price-card">
            <div className="nly-price-card-head">
              <h4>{item.name}</h4>
              <span className="nly-price-badge">{item.price}</span>
            </div>

            <p className="nly-price-note">{item.note}</p>

            <div className="nly-price-card-foot">
              <span className="nly-duration-tag">
                <Clock size={13} /> {item.duration}
              </span>
              <a
                href={`https://wa.me/6281573550017?text=Halo%20NalaLaundry%2C%20saya%20ingin%20pesan%20layanan%20${encodeURIComponent(item.name)}%20(${encodeURIComponent(item.price)}).`}
                target="_blank"
                rel="noreferrer"
                className="nly-btn-order-item"
              >
                <span>Pesan Layanan</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Interactive Weight & Cost Estimator Card */}
      <div id="kalkulator" className="nly-calc-box">
        <div className="nly-calc-grid">
          <div className="nly-calc-inputs">
            <div className="nly-calc-badge">
              <Calculator size={14} />
              <span>SIMULASI ESTIMASI BIAYA</span>
            </div>
            <h3>Hitung Biaya Laundrymu</h3>
            <p>
              Geser estimasi berat pakaianmu dan tambahkan item satuan untuk melihat total perkiraan biaya secara transparan.
            </p>

            {/* Speed toggle */}
            <div className="nly-speed-toggle-row">
              <label>Pilihan Kecepatan:</label>
              <div className="nly-speed-btns">
                <button
                  type="button"
                  className={`nly-speed-btn ${serviceSpeed === 'regular' ? 'active' : ''}`}
                  onClick={() => setServiceSpeed('regular')}
                >
                  Reguler (24 Jam · Rp8.000/kg)
                </button>
                <button
                  type="button"
                  className={`nly-speed-btn ${serviceSpeed === 'express' ? 'active' : ''}`}
                  onClick={() => setServiceSpeed('express')}
                >
                  Express (6 Jam · Rp14.000/kg)
                </button>
              </div>
            </div>

            {/* Weight Range Slider */}
            <div className="nly-slider-input-group">
              <div className="nly-slider-header-row">
                <span>Berat Pakaian Kiloan:</span>
                <strong>{weightKg} kg (~{weightKg * 4}–{weightKg * 6} helai baju)</strong>
              </div>
              <input
                type="range"
                min={3}
                max={25}
                step={1}
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="nly-range-slider"
              />
              <div className="nly-slider-labels">
                <small>3 kg (Minimal order)</small>
                <small>15 kg (Keluarga)</small>
                <small>25 kg (Banyak)</small>
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="nly-addons-row">
              <label className="nly-checkbox-label">
                <input
                  type="checkbox"
                  checked={includeBedcover}
                  onChange={(e) => setIncludeBedcover(e.target.checked)}
                />
                <span>+ 1 Bedcover King (+Rp35.000)</span>
              </label>

              <div className="nly-shoes-counter">
                <span>+ Sepatu (+Rp35.000/psg):</span>
                <div className="nly-counter-controls">
                  <button
                    type="button"
                    onClick={() => setShoesCount(Math.max(0, shoesCount - 1))}
                  >
                    -
                  </button>
                  <span>{shoesCount} pasang</span>
                  <button
                    type="button"
                    onClick={() => setShoesCount(shoesCount + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Result Output Card */}
          <div className="nly-calc-summary-card">
            <span className="nly-summary-kicker">ESTIMASI TOTAL BIAYA</span>
            <div className="nly-total-price">
              <strong>{formatRupiah(grandTotal)}</strong>
              <small>Sudah termasuk cuci, setrika uap &amp; parfum 14 hari</small>
            </div>

            <div className="nly-delivery-status">
              <Truck size={18} className={isFreeDelivery ? 'nly-icon-green' : 'nly-icon-dim'} />
              <div>
                <strong>{isFreeDelivery ? 'Gratis Antar Jemput!' : 'Tambah sedikit lagi untuk Gratis Ongkir'}</strong>
                <small>{isFreeDelivery ? 'Kurir siap menjemput ke lokasi Anda' : 'Gratis ongkir minimal order Rp40.000'}</small>
              </div>
            </div>

            <div className="nly-calc-cta-row">
              <a
                href={`https://wa.me/6281573550017?text=Halo%20NalaLaundry%2C%20saya%20ingin%20order%20laundry%20estimasi%20${weightKg}kg%20(${serviceSpeed === 'regular' ? 'Reguler%2024Jam' : 'Express%206Jam'})%20${includeBedcover ? '%2B%201%20Bedcover%20' : ''}${shoesCount > 0 ? `%2B%20${shoesCount}%20Sepatu%20` : ''}dengan%20estimasi%20total%20${encodeURIComponent(formatRupiah(grandTotal))}.%20Bisa%20jemput%20sekarang%3F`}
                target="_blank"
                rel="noreferrer"
                className="nly-btn-order-wa-main"
              >
                <MessageCircle size={16} />
                <span>Pesan Antar Jemput via WhatsApp</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="nly-calc-guarantee-note">
              <ShieldCheck size={14} className="nly-icon-aqua" />
              <span>Garansi 100% cuci ulang gratis jika ada noda tertinggal atau kurang wangi.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
