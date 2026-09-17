'use client';

import React, { useState, useMemo } from 'react';
import {
  Users,
  MapPin,
  Sparkles,
  Clock,
  ShieldCheck,
  Building2,
  User,
  Check,
} from 'lucide-react';

const WhatsAppIcon = ({ size = 18, className = '', fill = 'currentColor' }: { size?: number; className?: string; fill?: string }) => (
  <svg
    width={size}
    height={size}
    className={`pxc-wa-icon ${className}`}
    style={{ width: `${size}px`, height: `${size}px`, flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.486-8.414z" />
  </svg>
);

interface EventTypeOption {
  id: string;
  name: string;
  badge: string;
  desc: string;
  baseCostPerPax: number;
  minPax: number;
}

const EVENT_TYPES: EventTypeOption[] = [
  {
    id: 'mice',
    name: 'MICE (Meeting & Conference)',
    badge: 'Kementerian & Korporat',
    desc: 'Rapat kerja formal, konvensi nasional, simposium, seminar berkala, & eksibisi.',
    baseCostPerPax: 350000,
    minPax: 30,
  },
  {
    id: 'gathering',
    name: 'Corporate Gathering & Outing',
    badge: 'Team Building',
    desc: 'Family gathering, bonding kantor, outbound tematik, & gala dinner keakraban.',
    baseCostPerPax: 420000,
    minPax: 40,
  },
  {
    id: 'company-trip',
    name: 'Private & Company Trip',
    badge: 'Tour & Travel',
    desc: 'Wisata instansi, perjalanan dinas, study tour, & incentive trip nusantara.',
    baseCostPerPax: 650000,
    minPax: 20,
  },
  {
    id: 'event-organizer',
    name: 'Event Organizer & Launching',
    badge: 'Full Production',
    desc: 'Brand launching, festival, sosialisasi publik, workshop, & pameran produk.',
    baseCostPerPax: 480000,
    minPax: 50,
  },
];

const DESTINATIONS = [
  { id: 'jogja', name: 'Yogyakarta & Sekitarnya', multiplier: 1.0 },
  { id: 'bali', name: 'Bali & Nusa Penida', multiplier: 1.35 },
  { id: 'bandung', name: 'Bandung & Lembang', multiplier: 1.15 },
  { id: 'jakarta', name: 'Jabodetabek & Bogor', multiplier: 1.2 },
  { id: 'malang', name: 'Malang & Bromo', multiplier: 1.18 },
  { id: 'labuan-bajo', name: 'Labuan Bajo & Flores', multiplier: 1.6 },
  { id: 'custom', name: 'Kota Lain di Seluruh Indonesia', multiplier: 1.1 },
];

const DURATIONS = [
  { id: 'half-day', name: 'Half Day (4–6 Jam)', days: 0.5, factor: 0.8 },
  { id: 'full-day', name: 'Full Day (1 Hari Penuh)', days: 1, factor: 1.0 },
  { id: '2d1n', name: '2 Hari 1 Malam (2D1N)', days: 2, factor: 1.7 },
  { id: '3d2n', name: '3 Hari 2 Malam (3D2N)', days: 3, factor: 2.3 },
  { id: 'custom', name: '4+ Hari (Custom Durasi)', days: 4, factor: 2.9 },
];

interface AddonOption {
  id: string;
  name: string;
  desc: string;
  priceType: 'fixed' | 'perpax';
  price: number;
}

const ADDON_SERVICES: AddonOption[] = [
  {
    id: 'led-stage',
    name: 'LED Videotron & Stage 3D Custom',
    desc: 'Panggung megah dengan backdrop videotron resolusi tinggi dan lighting panggung.',
    priceType: 'fixed',
    price: 8500000,
  },
  {
    id: 'mc-entertain',
    name: 'MC Profesional & Live Music / Band',
    desc: 'Master of Ceremony berpengalaman (bilingual) dan live music akustik/full band.',
    priceType: 'fixed',
    price: 4500000,
  },
  {
    id: 'photo-video',
    name: 'Cinematic Photo & Video + Drone Aerial',
    desc: 'Dokumentasi fotografer & videografer profesional, teaser 1 menit & video rekap 4K.',
    priceType: 'fixed',
    price: 3800000,
  },
  {
    id: 'merch-pack',
    name: 'Merchandise & Goodie Bag Kit',
    desc: 'Tumbler custom, totebag eksklusif, name tag lanyard, notes & pulpen premium.',
    priceType: 'perpax',
    price: 65000,
  },
  {
    id: 'outbound-coach',
    name: 'Fasilitator Outbound & Game Master',
    desc: 'Fun games, character building, team synergy equipment, dan instruktur profesional.',
    priceType: 'fixed',
    price: 3500000,
  },
  {
    id: 'transport-vip',
    name: 'Transportasi Armada Pariwisata (Bus / HiAce)',
    desc: 'Bus pariwisata executive AC, driver ramah, bbm, parkir, dan tol terfasilitasi penuh.',
    priceType: 'fixed',
    price: 4000000,
  },
];

export default function PixiEventCalculatorWidget() {
  const [selectedType, setSelectedType] = useState<string>('mice');
  const [pax, setPax] = useState<number>(65);
  const [destination, setDestination] = useState<string>('jogja');
  const [duration, setDuration] = useState<string>('full-day');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'mc-entertain',
    'photo-video',
  ]);
  const [clientName, setClientName] = useState<string>('');
  const [institutionName, setInstitutionName] = useState<string>('');

  const currentType = useMemo(
    () => EVENT_TYPES.find((t) => t.id === selectedType) || EVENT_TYPES[0],
    [selectedType]
  );
  const currentDest = useMemo(
    () => DESTINATIONS.find((d) => d.id === destination) || DESTINATIONS[0],
    [destination]
  );
  const currentDuration = useMemo(
    () => DURATIONS.find((d) => d.id === duration) || DURATIONS[1],
    [duration]
  );

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const baseTotal = useMemo(() => {
    return currentType.baseCostPerPax * pax * currentDuration.factor * currentDest.multiplier;
  }, [currentType, pax, currentDuration, currentDest]);

  const addonsTotal = useMemo(() => {
    return selectedAddons.reduce((sum, addonId) => {
      const addon = ADDON_SERVICES.find((a) => a.id === addonId);
      if (!addon) return sum;
      if (addon.priceType === 'perpax') {
        return sum + addon.price * pax;
      }
      return sum + addon.price;
    }, 0);
  }, [selectedAddons, pax]);

  const grandTotal = useMemo(() => {
    return Math.round((baseTotal + addonsTotal) / 50000) * 50000;
  }, [baseTotal, addonsTotal]);

  const perPaxEstimate = useMemo(() => {
    return Math.round(grandTotal / pax / 1000) * 1000;
  }, [grandTotal, pax]);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const sliderPercent = ((pax - 20) / (600 - 20)) * 100;

  const whatsappMessage = useMemo(() => {
    const selectedAddonNames = selectedAddons
      .map((id) => ADDON_SERVICES.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const intro = clientName ? `Halo Pixi Creative, saya ${clientName}` : `Halo Pixi Creative`;
    const inst = institutionName ? ` dari ${institutionName}` : '';
    
    return encodeURIComponent(
      `${intro}${inst}, saya ingin konsultasi dan meminta penawaran proposal acara:\n\n` +
      `📌 *Jenis Acara*: ${currentType.name}\n` +
      `👥 *Estimasi Peserta*: ${pax} Orang\n` +
      `📍 *Destinasi/Lokasi*: ${currentDest.name}\n` +
      `⏱️ *Durasi*: ${currentDuration.name}\n` +
      `✨ *Kebutuhan Layanan Tambahan*: ${selectedAddonNames || 'Standar Event Package'}\n` +
      `💰 *Simulasi Estimasi*: ± ${formatRupiah(grandTotal)} (${formatRupiah(perPaxEstimate)}/pax)\n\n` +
      `Mohon dibantu info ketersediaan tanggal, penyusunan konsep rundown, dan proposal resminya. Terima kasih!`
    );
  }, [
    clientName,
    institutionName,
    currentType,
    pax,
    currentDest,
    currentDuration,
    selectedAddons,
    grandTotal,
    perPaxEstimate
  ]);

  return (
    <div className="pxc-calc-card">
      {/* Background Decorative Glow */}
      <div className="pxc-calc-glow-top" />
      <div className="pxc-calc-glow-bottom" />

      {/* Header Widget */}
      <div className="pxc-calc-header">
        <div>
          <div className="pxc-calc-tag">
            <Sparkles style={{ width: '14px', height: '14px' }} />
            <span>Interactive Event & Budget Simulator</span>
          </div>
          <h3 className="pxc-calc-title">
            Simulasi Anggaran & Rencana Acara
          </h3>
          <p className="pxc-calc-subtitle">
            Hitung estimasi kebutuhan MICE, Gathering, Company Trip, atau Event Organizer Anda secara transparan.
          </p>
        </div>
        <div className="pxc-calc-guarantee">
          <ShieldCheck style={{ width: '16px', height: '16px', color: '#34d399' }} />
          <span>Gratis Konsultasi & Proposal Resmi</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="pxc-calc-grid">
        {/* Left Config Panel */}
        <div className="pxc-calc-controls">
          {/* Step 1: Jenis Acara */}
          <div className="pxc-calc-step">
            <div className="pxc-calc-step-head">
              <span className="pxc-calc-step-label">
                <span className="pxc-calc-step-num">1</span>
                PILIH JENIS LAYANAN ACARA
              </span>
              <span className="pxc-calc-step-hint">Pilih salah satu</span>
            </div>
            <div className="pxc-calc-types-grid">
              {EVENT_TYPES.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`pxc-calc-type-btn ${isSelected ? 'active' : ''}`}
                  >
                    <div className="pxc-calc-type-top">
                      <span className="pxc-calc-type-name">{type.name}</span>
                      {isSelected ? (
                        <div className="pxc-type-check-active">
                          <Check style={{ width: '12px', height: '12px', color: '#ffffff' }} />
                        </div>
                      ) : (
                        <div className="pxc-type-check-idle" />
                      )}
                    </div>
                    <span className="pxc-calc-type-badge">{type.badge}</span>
                    <p className="pxc-calc-type-desc">{type.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Jumlah Peserta Slider */}
          <div className="pxc-calc-step pxc-calc-pax-box">
            <div className="pxc-calc-step-head">
              <span className="pxc-calc-step-label">
                <span className="pxc-calc-step-num">2</span>
                ESTIMASI JUMLAH PESERTA
              </span>
              <div className="pxc-calc-pax-badge">
                <Users style={{ width: '14px', height: '14px', color: '#ea580c' }} />
                <strong>{pax}</strong>
                <span>Pax</span>
              </div>
            </div>
            <input
              type="range"
              min="20"
              max="600"
              step="5"
              value={pax}
              onChange={(e) => setPax(Number(e.target.value))}
              aria-label="Estimasi Jumlah Peserta"
              className="pxc-calc-range"
              style={{
                background: `linear-gradient(to right, #ea580c 0%, #ea580c ${sliderPercent}%, #e2e8f0 ${sliderPercent}%, #e2e8f0 100%)`,
              }}
            />
            <div className="pxc-calc-pax-labels">
              <span>20 Pax (Intimate)</span>
              <span>100 Pax (Medium)</span>
              <span>300 Pax (Large)</span>
              <span>600+ Pax (Mega)</span>
            </div>
          </div>

          {/* Step 3 & 4: Lokasi & Durasi */}
          <div className="pxc-calc-row-2">
            <div className="pxc-calc-field">
              <span className="pxc-calc-step-label">
                <span className="pxc-calc-step-num">3</span>
                LOKASI / DESTINASI
              </span>
              <div className="pxc-calc-select-wrap">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  aria-label="Pilih Lokasi atau Destinasi Acara"
                  className="pxc-calc-select"
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
                <MapPin className="pxc-calc-select-icon" />
              </div>
            </div>

            <div className="pxc-calc-field">
              <span className="pxc-calc-step-label">
                <span className="pxc-calc-step-num">4</span>
                DURASI KEGIATAN
              </span>
              <div className="pxc-calc-select-wrap">
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  aria-label="Pilih Durasi Kegiatan Acara"
                  className="pxc-calc-select"
                >
                  {DURATIONS.map((dur) => (
                    <option key={dur.id} value={dur.id}>
                      {dur.name}
                    </option>
                  ))}
                </select>
                <Clock className="pxc-calc-select-icon" />
              </div>
            </div>
          </div>

          {/* Step 5: Add-on & Fasilitas */}
          <div className="pxc-calc-step">
            <span className="pxc-calc-step-label">
              <span className="pxc-calc-step-num">5</span>
              KEBUTUHAN FASILITAS & ADD-ON
            </span>
            <div className="pxc-calc-addons-grid">
              {ADDON_SERVICES.map((addon) => {
                const checked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`pxc-calc-addon-btn ${checked ? 'checked' : ''}`}
                  >
                    <div className={`pxc-calc-checkbox ${checked ? 'active' : ''}`}>
                      {checked && <Check style={{ width: '12px', height: '12px', color: '#ffffff' }} />}
                    </div>
                    <div className="pxc-calc-addon-text">
                      <span className="pxc-calc-addon-name">{addon.name}</span>
                      <span className="pxc-calc-addon-price">
                        {addon.priceType === 'perpax'
                          ? `+${formatRupiah(addon.price)} / pax`
                          : `+${formatRupiah(addon.price)} / event`}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Summary Card */}
        <div className="pxc-calc-summary-side">
          <div className="pxc-calc-summary-box">
            <div className="pxc-calc-summary-head">
              <div className="pxc-summary-tag-row">
                <span className="pxc-summary-kicker">RINGKASAN ESTIMASI ACARA</span>
                <span className="pxc-calc-summary-type">{currentType.badge}</span>
              </div>
              <h4 className="pxc-summary-title">{currentType.name}</h4>
            </div>

            <div className="pxc-calc-summary-details">
              <div className="pxc-calc-detail-row">
                <span>Peserta</span>
                <strong>{pax} Pax</strong>
              </div>
              <div className="pxc-calc-detail-row">
                <span>Destinasi</span>
                <strong>{currentDest.name}</strong>
              </div>
              <div className="pxc-calc-detail-row">
                <span>Durasi</span>
                <strong>{currentDuration.name}</strong>
              </div>
              <div className="pxc-calc-detail-row">
                <span>Layanan Add-on</span>
                <strong>{selectedAddons.length} Dipilih</strong>
              </div>
            </div>

            <div className="pxc-calc-price-block">
              <span className="pxc-calc-price-label">ESTIMASI ANGGARAN TOTAL</span>
              <div className="pxc-calc-price-value">± {formatRupiah(grandTotal)}</div>
              <span className="pxc-calc-price-pax">
                ± {formatRupiah(perPaxEstimate)} / orang (all-in)
              </span>
            </div>

            {/* Client input form for WhatsApp proposal */}
            <div className="pxc-calc-user-fields">
              <div className="pxc-calc-input-wrap">
                <User className="pxc-calc-input-icon" style={{ width: '15px', height: '15px' }} />
                <input
                  type="text"
                  placeholder="Nama Anda / PIC"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="pxc-calc-input"
                />
              </div>
              <div className="pxc-calc-input-wrap">
                <Building2 className="pxc-calc-input-icon" style={{ width: '15px', height: '15px' }} />
                <input
                  type="text"
                  placeholder="Instansi / Perusahaan (Opsional)"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  className="pxc-calc-input"
                />
              </div>
            </div>

            <a
              href={`https://wa.me/6285842345332?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pxc-calc-submit-btn"
            >
              <WhatsAppIcon size={18} fill="#ffffff" />
              <span>Dapatkan Proposal Resmi via WhatsApp</span>
            </a>

            <div className="pxc-calc-footer-note">
              <span>* Estimasi bersifat fleksibel dan dapat disesuaikan dengan alokasi anggaran instansi Anda.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
