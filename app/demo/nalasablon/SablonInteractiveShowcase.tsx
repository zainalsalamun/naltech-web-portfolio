'use client';

import { useState } from 'react';
import {
  Star,
  CheckCircle2,
  ArrowUpRight,
  Calculator,
  MessageCircle,
  Shirt,
  Coffee,
  Package,
  ShoppingBag,
  Layers,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

interface Testimonial {
  id: number;
  brand: string;
  category: string;
  client: string;
  role: string;
  order: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    brand: 'Senja Coffee Lab',
    category: 'Paper Cup & Gelas Kopi',
    client: 'Dimas Anggara',
    role: 'Founder & Head Barista',
    order: '12.000 pcs Cup Sablon Food Grade',
    quote:
      'Sablon paper cup & cold cup 16oz dari NalaSablon sangat presisi. Tinta food grade anti luntur dan anti bocor meski terkena embun es seharian. Sudah repeat order 4 kali!',
    rating: 5,
  },
  {
    id: 2,
    brand: 'Urban Nomad Clothing',
    category: 'Kaos & Apparel Distro',
    client: 'Reza Fahmi',
    role: 'Creative Director',
    order: '2.500 pcs Kaos Plastisol High Density',
    quote:
      'Plastisol high density di kaos cotton combed 24s detailnya luar biasa. Tarikan screen sangat rata dan tekstur timbulnya tahan dicuci berulang kali tanpa retak.',
    rating: 5,
  },
  {
    id: 3,
    brand: 'Lumière Skincare',
    category: 'Mailer Box & Shopping Bag',
    client: 'Dr. Sarah Olivia',
    role: 'Brand Owner',
    order: '5.000 pcs Corrugated Box & Pouch',
    quote:
      'Mailer box kraft klinik kami jadi terkesan sangat mewah berkat sablon putih solid dan jahit tepi rapi. Klien unboxing selalu puas dan posting di Instagram!',
    rating: 5,
  },
  {
    id: 4,
    brand: 'NARA Atelier',
    category: 'Tote Bag & Canvas Bag',
    client: 'Nadia Pratama',
    role: 'Fashion Designer',
    order: '1.500 pcs Canvas Tote Bag Premium',
    quote:
      'Tote bag kanvas tebal dengan sablon rubber 4 warna akurasinya 99% persis dengan file desain kami. Tidak ada warna yang meleset dan finishing sangat bersih.',
    rating: 5,
  },
  {
    id: 5,
    brand: 'Java Beans Roastery',
    category: 'Standing Pouch Kopi',
    client: 'Hendra Wijaya',
    role: 'Head of Operations',
    order: '4.000 pcs Foil Standing Pouch',
    quote:
      'Standing pouch foil sablon matte black membuat kemasan kopi specialty kami sangat menonjol di rak cafe. Pengerjaan kilat cuma 4 hari kerja langsung beres.',
    rating: 5,
  },
  {
    id: 6,
    brand: 'Karsa Coffee & Eatery',
    category: 'Cup Sleeve & Paper Bag',
    client: 'Bima Santoso',
    role: 'Co-Founder',
    order: '8.000 pcs Cup Sleeve & Bag',
    quote:
      'Gelas sablon, sleeve cup, dan paper bag custom semuanya satu pintu di NalaSablon. Pelayanan sangat responsif dan ada garansi ganti baru jika ada reject.',
    rating: 5,
  },
];

interface ServiceEstimate {
  id: string;
  name: string;
  iconName: string;
  basePrice: number;
  unit: string;
  minQty: number;
  leadTime: string;
}

const serviceEstimates: ServiceEstimate[] = [
  {
    id: 'apparel',
    name: 'Sablon Kaos & Apparel',
    iconName: 'shirt',
    basePrice: 38000,
    unit: 'pcs (Sudah Termasuk Kaos Combed 24s/30s)',
    minQty: 24,
    leadTime: '3–5 Hari Kerja',
  },
  {
    id: 'cup',
    name: 'Sablon Paper Cup & Gelas Plastik',
    iconName: 'coffee',
    basePrice: 550,
    unit: 'pcs (Sudah Termasuk Gelas 12oz/16oz)',
    minQty: 500,
    leadTime: '3–4 Hari Kerja',
  },
  {
    id: 'box',
    name: 'Sablon Mailer Box & Packaging',
    iconName: 'package',
    basePrice: 3200,
    unit: 'pcs (Corrugated E-Flute / Kraft Box)',
    minQty: 100,
    leadTime: '4–6 Hari Kerja',
  },
  {
    id: 'totebag',
    name: 'Sablon Tote Bag Kanvas & Blacu',
    iconName: 'shopping-bag',
    basePrice: 15500,
    unit: 'pcs (Kanvas Tebal Premium + Resleting)',
    minQty: 50,
    leadTime: '3–5 Hari Kerja',
  },
  {
    id: 'pouch',
    name: 'Sablon Standing Pouch & Ziplock',
    iconName: 'layers',
    basePrice: 1100,
    unit: 'pcs (Aluminium Foil Food Grade)',
    minQty: 200,
    leadTime: '3–4 Hari Kerja',
  },
];

export default function SablonInteractiveShowcase() {
  const [selectedService, setSelectedService] = useState<string>('apparel');
  const [quantity, setQuantity] = useState<number>(100);

  const activeService = serviceEstimates.find((s) => s.id === selectedService) ?? serviceEstimates[0];

  // Dynamic discount calculation based on volume
  let discountMultiplier = 1.0;
  if (quantity >= 1000) discountMultiplier = 0.82;
  else if (quantity >= 500) discountMultiplier = 0.88;
  else if (quantity >= 200) discountMultiplier = 0.94;

  const unitPrice = Math.round(activeService.basePrice * discountMultiplier);
  const totalPrice = unitPrice * quantity;

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="ns-interactive-wrap">
      {/* 1. Infinite Auto-Scrolling Testimonial Rail (Halaman Testimoni Bergerak) */}
      <div className="ns-marquee-container" aria-label="Testimoni Bergerak Pelanggan NalaSablon">
        <div className="ns-marquee-track">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <article key={`${item.id}-${idx}`} className="ns-marquee-card">
              <div className="ns-marquee-header">
                <div className="ns-brand-badge">
                  <Sparkles size={13} className="ns-icon-sparkle" />
                  <strong>{item.brand}</strong>
                </div>
                <div className="ns-rating-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#00E59B" color="#00E59B" />
                  ))}
                </div>
              </div>

              <blockquote className="ns-marquee-quote">"{item.quote}"</blockquote>

              <div className="ns-marquee-footer">
                <div>
                  <strong>{item.client}</strong>
                  <small>{item.role}</small>
                </div>
                <span className="ns-order-tag">{item.order}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 2. Interactive Service Estimator & Quick Contact */}
      <div id="calculator" className="ns-calculator-box">
        <div className="ns-calc-head">
          <div className="ns-calc-title">
            <Calculator size={20} className="ns-icon-cyan" />
            <div>
              <h3>Kalkulator Estimasi Biaya &amp; Waktu Cetak</h3>
              <p>Pilih layanan kemasan/apparel dan tentukan jumlah pcs untuk melihat estimasi harga transparan.</p>
            </div>
          </div>
          <span className="ns-badge-free">
            <ShieldCheck size={14} />
            <span>Garansi Retur 100%</span>
          </span>
        </div>

        {/* Service Type Selector */}
        <div className="ns-service-selector-grid">
          {serviceEstimates.map((srv) => (
            <button
              key={srv.id}
              type="button"
              className={`ns-srv-btn ${selectedService === srv.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedService(srv.id);
                if (quantity < srv.minQty) setQuantity(srv.minQty);
              }}
            >
              <div className="ns-srv-icon">
                {srv.id === 'apparel' && <Shirt size={18} />}
                {srv.id === 'cup' && <Coffee size={18} />}
                {srv.id === 'box' && <Package size={18} />}
                {srv.id === 'totebag' && <ShoppingBag size={18} />}
                {srv.id === 'pouch' && <Layers size={18} />}
              </div>
              <div className="ns-srv-info">
                <strong>{srv.name}</strong>
                <small>Min. {srv.minQty} pcs</small>
              </div>
            </button>
          ))}
        </div>

        {/* Quantity Controls & Output Result */}
        <div className="ns-calc-result-grid">
          <div className="ns-qty-control">
            <label htmlFor="qtyInput">
              <span>Jumlah Pesanan (Pcs):</span>
              <strong>{quantity} pcs</strong>
            </label>
            <input
              id="qtyInput"
              type="range"
              min={activeService.minQty}
              max={5000}
              step={25}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="ns-range-slider"
            />
            <div className="ns-qty-presets">
              {[50, 100, 250, 500, 1000, 2500].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={`ns-preset-btn ${quantity === preset ? 'active' : ''}`}
                  onClick={() => setQuantity(Math.max(activeService.minQty, preset))}
                >
                  {preset} pcs
                </button>
              ))}
            </div>
          </div>

          <div className="ns-price-display-card">
            <div className="ns-price-meta">
              <div>
                <small>Harga Satuan</small>
                <strong>{formatRupiah(unitPrice)} <small>/pcs</small></strong>
              </div>
              <div>
                <small>Estimasi Pengerjaan</small>
                <strong className="ns-lead-time">{activeService.leadTime}</strong>
              </div>
            </div>

            <div className="ns-total-row">
              <div>
                <small>Estimasi Total Investasi</small>
                <h2>{formatRupiah(totalPrice)}</h2>
              </div>

              <a
                href={`https://wa.me/6281573550017?text=Halo%20NalaSablon%2C%20saya%20tertarik%20pesan%20layanan%20${encodeURIComponent(activeService.name)}%20sebanyak%20${quantity}%20pcs.`}
                target="_blank"
                rel="noreferrer"
                className="ns-btn-wa-order"
              >
                <MessageCircle size={16} />
                <span>Konsultasi &amp; Kirim Desain</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            <p className="ns-price-note">
              <CheckCircle2 size={13} className="ns-icon-green" />
              <span>Sudah termasuk film cetak, setting layout gratis, &amp; quality control ketat.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
