'use client';

import { useState } from 'react';
import {
  Calculator,
  Truck,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  BadgePercent,
  Shirt,
} from 'lucide-react';

interface ServicePackage {
  id: string;
  name: string;
  pricePerKg: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

const packages: ServicePackage[] = [
  {
    id: 'cuci-kering',
    name: 'Cuci Kering Lipat',
    pricePerKg: 7000,
    duration: '24 Jam Selesai',
    features: ['Cuci higienis 1 mesin 1 pelanggan', 'Kering 100% siap pakai', 'Dilipat rapi dalam plastik'],
  },
  {
    id: 'cuci-setrika',
    name: 'Cuci + Setrika Uap',
    pricePerKg: 10000,
    duration: '24 Jam Selesai',
    features: ['Cuci higienis + pelembut kain', 'Setrika uap boiler licin anti kusut', 'Parfum wangi segar tahan lama'],
    popular: true,
  },
  {
    id: 'express',
    name: 'Express Kilat',
    pricePerKg: 15000,
    duration: '6 Jam Selesai (Same Day)',
    features: ['Prioritas kurir jemput & antar', 'Selesai di hari yang sama', 'Cocok untuk kebutuhan darurat'],
  },
];

export default function LaundroInteractiveCalculator() {
  const [selectedPkgId, setSelectedPkgId] = useState<string>('cuci-setrika');
  const [weightKg, setWeightKg] = useState<number>(3);
  const [bedcoverCount, setBedcoverCount] = useState<number>(0);
  const [promoCode, setPromoCode] = useState<string>('');
  const [isPromoApplied, setIsPromoApplied] = useState<boolean>(false);

  // Scheduler state
  const [customerName, setCustomerName] = useState<string>('');
  const [customerArea, setCustomerArea] = useState<string>('Tebet');
  const [customerAddress, setCustomerAddress] = useState<string>('');
  const [pickupTimeSlot, setPickupTimeSlot] = useState<string>('Pagi (08:00 - 11:00)');

  const selectedPkg = packages.find((p) => p.id === selectedPkgId) || packages[1];

  // Price calculations
  const baseKiloanPrice = weightKg * selectedPkg.pricePerKg;
  const bedcoverPrice = bedcoverCount * 25000;
  const rawTotal = baseKiloanPrice + bedcoverPrice;
  const discountAmount = isPromoApplied ? Math.min(rawTotal, 10000) : 0;
  const finalTotal = Math.max(0, rawTotal - discountAmount);

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'LAUNDROHEMAT' || promoCode.trim().toUpperCase() === 'HEMAT') {
      setIsPromoApplied(true);
    } else {
      alert('Kode promo tidak valid. Coba gunakan: LAUNDROHEMAT');
    }
  };

  const generateWhatsAppUrl = () => {
    const text = `Halo Laundro! Saya ingin order jemput laundry:
- Nama: ${customerName || 'Pelanggan Laundro'}
- Area/Alamat: ${customerArea} (${customerAddress || 'Alamat detail via chat'})
- Paket: ${selectedPkg.name} (${formatRupiah(selectedPkg.pricePerKg)}/kg)
- Estimasi Berat: ${weightKg} kg (~${weightKg * 4}-${weightKg * 6} helai pakaian)
${bedcoverCount > 0 ? `- Tambahan: ${bedcoverCount} Bed Cover (${formatRupiah(bedcoverPrice)})\n` : ''}- Jam Penjemputan: ${pickupTimeSlot}
- Estimasi Total Biaya: ${formatRupiah(finalTotal)}${isPromoApplied ? ' (Termasuk Diskon Rp10.000)' : ''}

Mohon konfirmasi kedatangan kurir ya, terima kasih!`;

    return `https://wa.me/6281573550017?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="ld-calculator-wrapper">
      {/* 1. Price Package Cards Grid */}
      <div className="ld-package-grid">
        {packages.map((pkg) => {
          const isSelected = pkg.id === selectedPkgId;
          return (
            <div
              key={pkg.id}
              className={`ld-pkg-card ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedPkgId(pkg.id)}
            >
              {pkg.popular && <span className="ld-pkg-badge">Paling Populer</span>}
              <div className="ld-pkg-head">
                <h4>{pkg.name}</h4>
                <div className="ld-pkg-price">
                  <strong>{formatRupiah(pkg.pricePerKg)}</strong>
                  <small> / kg</small>
                </div>
              </div>
              <span className="ld-pkg-time">
                <Clock size={13} /> {pkg.duration}
              </span>
              <ul className="ld-pkg-features">
                {pkg.features.map((feat, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={14} className="ld-icon-cyan" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`ld-btn-select-pkg ${isSelected ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPkgId(pkg.id);
                }}
              >
                {isSelected ? '✓ Paket Dipilih' : 'Pilih Paket Ini'}
              </button>
            </div>
          );
        })}

        {/* Special Item: Bed Cover */}
        <div className="ld-pkg-card bedcover-card">
          <div className="ld-pkg-head">
            <h4>Bed Cover &amp; Selimut</h4>
            <div className="ld-pkg-price">
              <strong>Rp25.000</strong>
              <small> / pcs</small>
            </div>
          </div>
          <span className="ld-pkg-time">
            <Sparkles size={13} /> Khusus Satuan / Bedding
          </span>
          <ul className="ld-pkg-features">
            <li>
              <CheckCircle2 size={14} className="ld-icon-cyan" />
              <span>Dicuci terpisah steril anti tungau</span>
            </li>
            <li>
              <CheckCircle2 size={14} className="ld-icon-cyan" />
              <span>Dacron tetap empuk &amp; mengembang</span>
            </li>
          </ul>
          <div className="ld-bedcover-counter">
            <span>Jumlah Bed Cover:</span>
            <div className="ld-counter-box">
              <button
                type="button"
                onClick={() => setBedcoverCount(Math.max(0, bedcoverCount - 1))}
              >
                -
              </button>
              <strong>{bedcoverCount}</strong>
              <button
                type="button"
                onClick={() => setBedcoverCount(bedcoverCount + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Calculator & Pickup Scheduler Card */}
      <div id="kalkulator" className="ld-calc-scheduler-card">
        <div className="ld-calc-header">
          <div className="ld-calc-tag">
            <Calculator size={15} />
            <span>ESTIMASI BIAYA &amp; JADWAL JEMPUT OTOMATIS</span>
          </div>
          <h3>Hitung Biaya Laundry &amp; Jadwalkan Penjemputan</h3>
          <p>
            Geser perkiraan berat cucianmu untuk melihat estimasi harga otomatis, lalu lengkapi jadwal penjemputan kurir ke lokasi Anda.
          </p>
        </div>

        <div className="ld-calc-body-grid">
          {/* Left: Interactive Input Sliders & Schedulers */}
          <div className="ld-calc-form">
            {/* Weight Range Slider */}
            <div className="ld-input-group">
              <div className="ld-slider-label-row">
                <span>Perkiraan Berat Cucian:</span>
                <strong>{weightKg} Kilogram (~{weightKg * 4}–{weightKg * 6} helai baju)</strong>
              </div>
              <input
                type="range"
                min={2}
                max={20}
                step={1}
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="ld-range-slider"
              />
              <div className="ld-slider-ticks">
                <small>2 kg (Minimal)</small>
                <small>10 kg (Seminggu)</small>
                <small>20 kg (Keluarga)</small>
              </div>
            </div>

            {/* Selected Package Confirmation */}
            <div className="ld-input-group">
              <label>Paket yang Dipilih:</label>
              <div className="ld-pkg-selector-mini">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    className={`ld-mini-pkg-btn ${selectedPkgId === pkg.id ? 'active' : ''}`}
                    onClick={() => setSelectedPkgId(pkg.id)}
                  >
                    <span>{pkg.name}</span>
                    <small>({formatRupiah(pkg.pricePerKg)}/kg)</small>
                  </button>
                ))}
              </div>
            </div>

            {/* Scheduler Details */}
            <div className="ld-scheduler-subgroup">
              <div className="ld-field-row">
                <div className="ld-field">
                  <label>Nama Lengkap:</label>
                  <input
                    type="text"
                    placeholder="Contoh: Rian / Siska"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="ld-text-input"
                  />
                </div>
                <div className="ld-field">
                  <label>Area Jakarta Selatan:</label>
                  <select
                    value={customerArea}
                    onChange={(e) => setCustomerArea(e.target.value)}
                    className="ld-select-input"
                  >
                    <option value="Tebet">Tebet</option>
                    <option value="Kemang">Kemang</option>
                    <option value="Pancoran">Pancoran</option>
                    <option value="Mampang">Mampang</option>
                    <option value="Pasar Minggu">Pasar Minggu</option>
                    <option value="Kuningan">Kuningan</option>
                    <option value="Fatmawati">Fatmawati</option>
                    <option value="Kalibata">Kalibata</option>
                  </select>
                </div>
              </div>

              <div className="ld-field">
                <label>Alamat Kos / Rumah / Apartemen:</label>
                <input
                  type="text"
                  placeholder="Contoh: Kos Putri Dahlia Kamar 12, Jl. Tebet Barat No. 8"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="ld-text-input"
                />
              </div>

              <div className="ld-field">
                <label>Waktu Penjemputan:</label>
                <div className="ld-timeslot-grid">
                  {[
                    'Pagi (08:00 - 11:00)',
                    'Siang (13:00 - 16:00)',
                    'Malam (18:00 - 21:00)',
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`ld-slot-btn ${pickupTimeSlot === slot ? 'active' : ''}`}
                      onClick={() => setPickupTimeSlot(slot)}
                    >
                      <Calendar size={13} />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Promo Code Input */}
              <div className="ld-promo-input-row">
                <input
                  type="text"
                  placeholder="Punya kode promo? (contoh: LAUNDROHEMAT)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="ld-text-input promo"
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="ld-btn-apply-promo"
                >
                  Gunakan
                </button>
              </div>
              {isPromoApplied && (
                <small className="ld-promo-success">
                  ✓ Voucher LAUNDROHEMAT berhasil digunakan! Diskon Rp10.000.
                </small>
              )}
            </div>
          </div>

          {/* Right: Live Calculation Result Card & WhatsApp Order Generator */}
          <div className="ld-calc-summary-panel">
            <span className="ld-summary-label">RINCIAN ESTIMASI BIAYA</span>

            <div className="ld-cost-breakdown">
              <div className="ld-cost-line">
                <span>{selectedPkg.name} ({weightKg} kg)</span>
                <strong>{formatRupiah(baseKiloanPrice)}</strong>
              </div>
              {bedcoverCount > 0 && (
                <div className="ld-cost-line">
                  <span>Bed Cover ({bedcoverCount} pcs)</span>
                  <strong>{formatRupiah(bedcoverPrice)}</strong>
                </div>
              )}
              {isPromoApplied && (
                <div className="ld-cost-line promo">
                  <span>Diskon Promo Hemat</span>
                  <strong>-{formatRupiah(discountAmount)}</strong>
                </div>
              )}
              <div className="ld-cost-line free-delivery">
                <span>Biaya Antar-Jemput</span>
                <strong>GRATIS</strong>
              </div>
            </div>

            <div className="ld-total-cost-box">
              <span>Estimasi Total:</span>
              <strong>{formatRupiah(finalTotal)}</strong>
              <small>*Ditimbang ulang secara akurat saat kurir tiba</small>
            </div>

            <div className="ld-order-wa-section">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="ld-btn-order-wa"
              >
                <MessageCircle size={18} />
                <span>Pesan &amp; Jemput via WhatsApp</span>
                <ArrowUpRight size={18} />
              </a>
              <small className="ld-wa-guarantee">
                <ShieldCheck size={13} className="ld-icon-cyan" />
                <span>Kurir siap meluncur ke lokasi Anda sesuai jadwal.</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
