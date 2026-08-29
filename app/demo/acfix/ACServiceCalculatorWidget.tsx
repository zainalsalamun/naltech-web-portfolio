'use client';

import { useState } from 'react';
import {
  Snowflake,
  Wind,
  Droplets,
  Wrench,
  RotateCcw,
  Zap,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Calendar,
  Home,
  Building2,
  Store,
  UtensilsCrossed,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  icon: typeof Snowflake;
  desc: string;
}

const serviceOptions: ServiceOption[] = [
  { id: 'cuci', name: 'Cuci AC', basePrice: 75000, icon: Snowflake, desc: 'Pembersihan evaporator, blower fan, filter debu, dan drainase air' },
  { id: 'service', name: 'Service AC', basePrice: 100000, icon: Wrench, desc: 'Pengecekan kelistrikan, sensor termistor, dan perbaikan komponen' },
  { id: 'freon', name: 'Tambah Freon', basePrice: 150000, icon: Wind, desc: 'Pengisian ulang freon R32 / R410A / R22 sesuai tekanan standar' },
  { id: 'bongkar-pasang', name: 'Bongkar Pasang', basePrice: 250000, icon: RotateCcw, desc: 'Relokasi unit indoor & outdoor, pemipaan rapi dan vakum pipa' },
  { id: 'bocor', name: 'AC Bocor Air / Menetes', basePrice: 85000, icon: Droplets, desc: 'Pembersihan pipa pembuangan tersumbat lumut & perbaikan talang air' },
  { id: 'mati-total', name: 'Mati Total / Error PCB', basePrice: 125000, icon: Zap, desc: 'Diagnosa modul sensor, kapasitor mesin, dan kelistrikan kompresor' },
];

const propertyTypes = [
  { id: 'rumah', label: 'Rumah', icon: Home },
  { id: 'kantor', label: 'Kantor', icon: Building2 },
  { id: 'toko', label: 'Toko / Ruko', icon: Store },
  { id: 'apartemen', label: 'Apartemen', icon: Building2 },
  { id: 'restoran', label: 'Restoran', icon: UtensilsCrossed },
];

const acCapacities = [
  '1/2 PK',
  '3/4 PK',
  '1 PK',
  '1.5 PK',
  '2 PK',
  'Inverter Multi-Split',
  'Cassette / Standing Floor',
];

export default function ACServiceCalculatorWidget() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('cuci');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('1/2 PK');
  const [unitCount, setUnitCount] = useState<number>(3);
  const [selectedProperty, setSelectedProperty] = useState<string>('rumah');
  const [selectedTime, setSelectedTime] = useState<string>('Pagi (08:30 - 10:00)');
  const [areaLocation, setAreaLocation] = useState<string>('Jakarta Selatan');

  const activeService = serviceOptions.find((s) => s.id === selectedServiceId) || serviceOptions[0];

  // Capacity multiplier calculation
  let capacityMultiplier = 1.0;
  if (selectedCapacity === '1.5 PK' || selectedCapacity === '2 PK') {
    capacityMultiplier = 1.25;
  } else if (selectedCapacity === 'Inverter Multi-Split') {
    capacityMultiplier = 1.35;
  } else if (selectedCapacity === 'Cassette / Standing Floor') {
    capacityMultiplier = 1.8;
  }

  // Multi-unit bundle discount
  let bundleDiscount = 0;
  if (unitCount >= 4) {
    bundleDiscount = 0.1; // 10% discount for 4+ units
  } else if (unitCount >= 3) {
    bundleDiscount = 0.05; // 5% discount for 3 units
  }

  const rawUnitCost = activeService.basePrice * capacityMultiplier;
  const subtotal = rawUnitCost * unitCount;
  const discountAmount = subtotal * bundleDiscount;
  const estimatedTotal = Math.round(subtotal - discountAmount);

  // Duration calculation
  const baseMinutes = selectedServiceId === 'cuci' ? 25 : selectedServiceId === 'bongkar-pasang' ? 60 : 35;
  const totalMinutes = Math.min(180, baseMinutes * unitCount);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const generateWhatsAppUrl = () => {
    const propertyLabel = propertyTypes.find((p) => p.id === selectedProperty)?.label || selectedProperty;
    const text = `Halo ACFix! Saya ingin booking teknisi AC datang hari ini:
- Layanan: ${activeService.name}
- Kapasitas: ${selectedCapacity}
- Jumlah AC: ${unitCount} Unit
- Estimasi Biaya: ${formatRupiah(estimatedTotal)}
- Lokasi / Tipe Properti: ${propertyLabel} (${areaLocation})
- Jadwal Kedatangan: ${selectedTime}

Mohon konfirmasi ketersediaan teknisi terdekat, terima kasih!`;

    return `https://wa.me/6281573550017?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="acf-calc-widget">
      <div className="acf-calc-container">
        {/* Left: Input Selection Controls */}
        <div className="acf-calc-controls">
          <div className="acf-calc-kicker">
            <Sparkles size={14} className="acf-icon-cyan" />
            <span>KALKULATOR ESTIMASI BIAYA SERVICE AC</span>
          </div>
          <h3>Hitung Estimasi Biaya Service</h3>
          <p className="acf-calc-intro">
            Pilih jenis layanan, kapasitas PK, dan jumlah unit AC Anda untuk mendapatkan estimasi biaya transparan dan akurat.
          </p>

          {/* 1. Service Type Selector */}
          <div className="acf-input-group">
            <label className="acf-group-label">1. Pilih Masalah / Jenis Layanan:</label>
            <div className="acf-services-chip-grid">
              {serviceOptions.map((svc) => {
                const isSelected = svc.id === selectedServiceId;
                const Icon = svc.icon;
                return (
                  <button
                    key={svc.id}
                    type="button"
                    className={`acf-service-chip ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedServiceId(svc.id)}
                  >
                    <Icon size={16} className={isSelected ? 'acf-icon-cyan' : 'acf-icon-dim'} />
                    <div className="acf-chip-text">
                      <strong>{svc.name}</strong>
                      <small>Mulai {formatRupiah(svc.basePrice)}</small>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. AC Capacity & Property Segment */}
          <div className="acf-two-cols">
            <div className="acf-input-group">
              <label className="acf-group-label">2. Kapasitas / Jenis AC:</label>
              <select
                value={selectedCapacity}
                onChange={(e) => setSelectedCapacity(e.target.value)}
                className="acf-select"
              >
                {acCapacities.map((cap) => (
                  <option key={cap} value={cap}>
                    {cap}
                  </option>
                ))}
              </select>
            </div>

            <div className="acf-input-group">
              <label className="acf-group-label">3. Tipe Properti:</label>
              <div className="acf-property-pills">
                {propertyTypes.map((prop) => {
                  const isSelected = prop.id === selectedProperty;
                  const Icon = prop.icon;
                  return (
                    <button
                      key={prop.id}
                      type="button"
                      className={`acf-property-pill ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedProperty(prop.id)}
                    >
                      <Icon size={13} />
                      <span>{prop.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. Number of AC Units Counter */}
          <div className="acf-input-group">
            <div className="acf-counter-head">
              <label className="acf-group-label">4. Jumlah Unit AC yang Ingin Dikerjakan:</label>
              <span className="acf-unit-display">{unitCount} Unit AC</span>
            </div>
            <div className="acf-slider-wrapper">
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={unitCount}
                onChange={(e) => setUnitCount(Number(e.target.value))}
                className="acf-range-slider"
              />
              <div className="acf-slider-marks">
                <span>1 Unit</span>
                <span>3 Unit (Favorit)</span>
                <span>5 Unit</span>
                <span>10+ Unit (Kantor/Resto)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Calculation Output & Instant Dispatcher Form */}
        <div className="acf-calc-output">
          <div className="acf-thermostat-header">
            <div className="acf-thermo-badge">
              <Snowflake size={14} />
              <span>ESTIMASI BIAYA TRANSPARAN</span>
            </div>
            <span className="acf-garansi-tag">Garansi 30 Hari</span>
          </div>

          <div className="acf-price-display-block">
            <small>Estimasi Total Biaya:</small>
            <div className="acf-price-value">
              <strong>{formatRupiah(estimatedTotal)}</strong>
            </div>
            <p className="acf-price-sub">
              {unitCount} Unit {selectedCapacity} · {activeService.name}
              {bundleDiscount > 0 && <span className="acf-discount-text"> (Hemat {formatRupiah(discountAmount)})</span>}
            </p>
          </div>

          <div className="acf-specs-row">
            <div className="acf-spec-item">
              <Clock size={15} className="acf-icon-cyan" />
              <div>
                <small>Estimasi Waktu:</small>
                <strong>~{totalMinutes} Menit</strong>
              </div>
            </div>
            <div className="acf-spec-item">
              <ShieldCheck size={15} className="acf-icon-cyan" />
              <div>
                <small>Proteksi Kerja:</small>
                <strong>SOP Anti-Becek</strong>
              </div>
            </div>
          </div>

          {/* Booking Inputs */}
          <div className="acf-quick-booking-form">
            <div className="acf-form-field">
              <label>Wilayah / Area Anda:</label>
              <select
                value={areaLocation}
                onChange={(e) => setAreaLocation(e.target.value)}
                className="acf-form-select"
              >
                <option value="Jakarta Selatan">Jakarta Selatan (Tebet, Kemang, Cilandak, dll)</option>
                <option value="Jakarta Barat">Jakarta Barat (Kebon Jeruk, Puri, Grogol, dll)</option>
                <option value="Jakarta Pusat">Jakarta Pusat (Menteng, Sudirman, Tanah Abang)</option>
                <option value="Jakarta Timur">Jakarta Timur (Rawamangun, Duren Sawit, dll)</option>
                <option value="Jakarta Utara">Jakarta Utara (Kelapa Gading, PIK, Sunter)</option>
                <option value="Tangerang & BSD">Tangerang &amp; BSD Serpong</option>
                <option value="Depok & Bekasi">Depok &amp; Bekasi</option>
              </select>
            </div>

            <div className="acf-form-field">
              <label>Pilih Slot Jam Kedatangan:</label>
              <div className="acf-time-slots-grid">
                {[
                  'Pagi (08:30 - 10:00)',
                  'Siang (11:00 - 12:30)',
                  'Siang (13:30 - 15:00)',
                  'Sore (15:30 - 17:00)',
                ].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`acf-time-slot-btn ${selectedTime === slot ? 'active' : ''}`}
                    onClick={() => setSelectedTime(slot)}
                  >
                    <Calendar size={11} />
                    <span>{slot.split('(')[0]}</span>
                    <small>{slot.match(/\((.*?)\)/)?.[1]}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="acf-cta-button-row">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="acf-btn-booking-wa"
              >
                <MessageCircle size={16} />
                <span>Booking Teknisi Datang Hari Ini</span>
                <ArrowUpRight size={16} />
              </a>
              <div className="acf-trust-micro">
                <CheckCircle2 size={12} className="acf-icon-green" />
                <span>Tanpa Biaya Tambahan Tersembunyi · Teknisi Bersertifikat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
