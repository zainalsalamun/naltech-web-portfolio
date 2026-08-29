'use client';

import { useState } from 'react';
import {
  Calculator,
  Heart,
  Sparkles,
  Users,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  UtensilsCrossed,
  Palette,
  Camera,
  Gem,
  Music,
  Crown,
  Check,
} from 'lucide-react';

interface WeddingConcept {
  id: string;
  name: string;
  desc: string;
  venueBase: number;
  cateringPerPax: number;
  decorBase: number;
}

const conceptsData: WeddingConcept[] = [
  {
    id: 'intimate',
    name: 'Intimate Garden / Restaurant',
    desc: 'Nuansa hangat, santai, dan dekat dengan keluarga & sahabat inti.',
    venueBase: 18000000,
    cateringPerPax: 135000,
    decorBase: 16000000,
  },
  {
    id: 'ballroom',
    name: 'Classic Luxury Ballroom',
    desc: 'Kemegahan ballroom ber-AC dengan karpet mewah dan chandelier kristal.',
    venueBase: 35000000,
    cateringPerPax: 155000,
    decorBase: 28000000,
  },
  {
    id: 'traditional',
    name: 'Traditional Royal Heritage',
    desc: 'Prosesi adat sakral (Jawa/Sunda/Minang) dengan dekorasi gebyok & ornamen khas.',
    venueBase: 25000000,
    cateringPerPax: 145000,
    decorBase: 24000000,
  },
  {
    id: 'glasshouse',
    name: 'Luxury Glasshouse / Outdoor',
    desc: 'Transparansi elegan dengan pemandangan alam terbuka dan fairy lights romantis.',
    venueBase: 40000000,
    cateringPerPax: 165000,
    decorBase: 30000000,
  },
];

interface VendorItem {
  id: string;
  name: string;
  baseCost: number;
  icon: typeof Camera;
}

const optionalVendors: VendorItem[] = [
  { id: 'documentation', name: 'Foto & Video Cinematic (Drone + Teaser)', baseCost: 12000000, icon: Camera },
  { id: 'attire_mua', name: 'Busana Pengantin & MUA Flawless', baseCost: 10000000, icon: Gem },
  { id: 'entertainment', name: 'Band Akustik / Chamber & MC Resepsi', baseCost: 7500000, icon: Music },
  { id: 'wo_team', name: 'Tim Wedding Organizer Full Day (10 Crew)', baseCost: 15000000, icon: Crown },
];

export default function WeddingBudgetSimulatorWidget() {
  const [guestCount, setGuestCount] = useState<number>(300);
  const [selectedConceptId, setSelectedConceptId] = useState<string>('ballroom');
  const [selectedVendorIds, setSelectedVendorIds] = useState<string[]>([
    'documentation',
    'attire_mua',
    'entertainment',
    'wo_team',
  ]);
  const [targetDate, setTargetDate] = useState<string>('Desember 2026');
  const [cityLocation, setCityLocation] = useState<string>('Jakarta / Tangerang');

  const currentConcept = conceptsData.find((c) => c.id === selectedConceptId) || conceptsData[1];

  const toggleVendor = (id: string) => {
    if (selectedVendorIds.includes(id)) {
      if (selectedVendorIds.length > 1) {
        setSelectedVendorIds(selectedVendorIds.filter((vId) => vId !== id));
      }
    } else {
      setSelectedVendorIds([...selectedVendorIds, id]);
    }
  };

  // Calculations
  const venueCost = currentConcept.venueBase;
  const cateringCost = guestCount * currentConcept.cateringPerPax;
  const decorCost = currentConcept.decorBase + (guestCount > 300 ? (guestCount - 300) * 15000 : 0);
  
  const optionalVendorsTotal = selectedVendorIds.reduce((sum, vId) => {
    const item = optionalVendors.find((v) => v.id === vId);
    return sum + (item ? item.baseCost : 0);
  }, 0);

  const totalEstimatedCost = venueCost + cateringCost + decorCost + optionalVendorsTotal;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const generateWhatsAppUrl = () => {
    const vendorNames = selectedVendorIds
      .map((vId) => optionalVendors.find((v) => v.id === vId)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `Halo Seraya Wedding Organizer, saya ingin berkonsultasi mengenai simulasi pernikahan kami:
- Jumlah Undangan: ${guestCount} Tamu
- Konsep Acara: ${currentConcept.name}
- Perkiraan Waktu: ${targetDate}
- Lokasi Acara: ${cityLocation}
- Vendor Tambahan: ${vendorNames}
- Estimasi Simulasi Anggaran: ${formatRupiah(totalEstimatedCost)}

Mohon info ketersediaan slot tim pada tanggal tersebut dan pengiriman katalog paket lengkap ya, terima kasih!`;

    return `https://wa.me/6281573550017?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="swo-sim-card">
      <div className="swo-sim-header">
        <div className="swo-sim-badge">
          <Calculator size={14} className="swo-icon-gold" />
          <span>SIMULASI ANGGARAN PERNIKAHAN REALISTIS</span>
        </div>
        <h3>Rencanakan Anggaran Hari Bahagiamu</h3>
        <p>Sesuaikan jumlah tamu dan konsep untuk mendapatkan gambaran estimasi biaya pernikahan yang terukur.</p>
      </div>

      <div className="swo-sim-grid">
        {/* Left Side: Interactive Input Controls */}
        <div className="swo-sim-controls-col">
          {/* 1. Guest Count Slider */}
          <div className="swo-control-group">
            <div className="swo-slider-header">
              <label className="swo-label">
                <Users size={15} className="swo-icon-rose" />
                <span>1. Perkiraan Jumlah Tamu Undangan:</span>
              </label>
              <span className="swo-guest-counter">{guestCount} Tamu</span>
            </div>
            <input
              type="range"
              min="50"
              max="1000"
              step="25"
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="swo-slider-range"
            />
            <div className="swo-slider-ticks">
              <span>50 (Intimate)</span>
              <span>300 (Harmoni)</span>
              <span>600 (Celebration)</span>
              <span>1.000+ (Grand)</span>
            </div>
          </div>

          {/* 2. Wedding Concept Selector */}
          <div className="swo-control-group">
            <label className="swo-label">
              <Sparkles size={15} className="swo-icon-gold" />
              <span>2. Pilih Konsep &amp; Suasana Pernikahan:</span>
            </label>
            <div className="swo-concepts-grid">
              {conceptsData.map((concept) => {
                const isSelected = concept.id === selectedConceptId;
                return (
                  <button
                    key={concept.id}
                    type="button"
                    className={`swo-concept-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedConceptId(concept.id)}
                  >
                    <div className="swo-concept-top">
                      <strong>{concept.name}</strong>
                      <div className="swo-check-dot">
                        {isSelected ? <Check size={12} className="swo-icon-gold" /> : <div className="swo-empty-dot" />}
                      </div>
                    </div>
                    <small>{concept.desc}</small>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Vendor Components Checklist */}
          <div className="swo-control-group">
            <label className="swo-label">
              <ShieldCheck size={15} className="swo-icon-green" />
              <span>3. Modul Vendor &amp; Layanan Tambahan:</span>
            </label>
            <div className="swo-vendors-checklist-grid">
              {optionalVendors.map((vendor) => {
                const isChecked = selectedVendorIds.includes(vendor.id);
                const Icon = vendor.icon;
                return (
                  <button
                    key={vendor.id}
                    type="button"
                    className={`swo-vendor-chk-card ${isChecked ? 'active' : ''}`}
                    onClick={() => toggleVendor(vendor.id)}
                  >
                    <div className="swo-chk-icon-wrap">
                      <Icon size={16} className={isChecked ? 'swo-icon-gold' : 'swo-icon-dim'} />
                    </div>
                    <div className="swo-chk-text">
                      <span>{vendor.name}</span>
                      <strong>{formatRupiah(vendor.baseCost)}</strong>
                    </div>
                    <div className="swo-chk-box">
                      {isChecked ? <CheckCircle2 size={16} className="swo-icon-gold" /> : <div className="swo-chk-empty" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Date & City Location Inputs */}
          <div className="swo-two-cols-group">
            <div className="swo-field">
              <label>Perkiraan Bulan / Tanggal:</label>
              <input
                type="text"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                placeholder="Contoh: November 2026"
                className="swo-input-box"
              />
            </div>
            <div className="swo-field">
              <label>Kota / Area Rencana Acara:</label>
              <input
                type="text"
                value={cityLocation}
                onChange={(e) => setCityLocation(e.target.value)}
                placeholder="Contoh: Jakarta Selatan"
                className="swo-input-box"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Estimated Budget Breakdown & WhatsApp Trigger */}
        <div className="swo-sim-output-col">
          <div className="swo-output-header">
            <span className="swo-output-kicker">ESTIMASI RENCANA ANGGARAN</span>
            <h4>{currentConcept.name}</h4>
            <span className="swo-guest-badge">{guestCount} Undangan</span>
          </div>

          <div className="swo-output-divider" />

          {/* Itemized Table Breakdown */}
          <div className="swo-cost-breakdown-list">
            <div className="swo-breakdown-row">
              <span>Sewa Venue &amp; Fasilitas Gedung</span>
              <strong>{formatRupiah(venueCost)}</strong>
            </div>

            <div className="swo-breakdown-row">
              <span>Catering ({guestCount} Pax Buffet + Stall)</span>
              <strong>{formatRupiah(cateringCost)}</strong>
            </div>

            <div className="swo-breakdown-row">
              <span>Dekorasi Pelaminan &amp; Lighting</span>
              <strong>{formatRupiah(decorCost)}</strong>
            </div>

            {selectedVendorIds.map((vId) => {
              const item = optionalVendors.find((v) => v.id === vId);
              if (!item) return null;
              return (
                <div key={vId} className="swo-breakdown-row">
                  <span>{item.name.split('(')[0].trim()}</span>
                  <strong>{formatRupiah(item.baseCost)}</strong>
                </div>
              );
            })}
          </div>

          {/* Total Budget Card */}
          <div className="swo-total-investment-box">
            <span>Perkiraan Total Anggaran:</span>
            <strong>{formatRupiah(totalEstimatedCost)}</strong>
            <small>*Simulasi awal. Anggaran final disesuaikan setelah kurasi vendor detail.</small>
          </div>

          {/* Action Trigger */}
          <div className="swo-output-action-area">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="swo-btn-sim-wa"
            >
              <MessageCircle size={17} />
              <span>Konsultasikan Simulasi Ini via WA</span>
              <ArrowUpRight size={17} />
            </a>
            <small className="swo-sim-note">
              <Heart size={12} className="swo-icon-rose" />
              <span>Sesi konsultasi awal &amp; review ketersediaan tanggal 100% gratis.</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
