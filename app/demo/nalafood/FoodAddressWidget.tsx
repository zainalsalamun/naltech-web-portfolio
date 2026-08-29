'use client';

import { useState } from 'react';

export default function FoodAddressWidget() {
  const [address, setAddress] = useState('Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan');
  const [submitted, setSubmitted] = useState(false);
  const [activeChip, setActiveChip] = useState('Senopati, Jaksel');

  const presetLocations = [
    { label: 'Senopati, Jaksel', full: 'Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan' },
    { label: 'Dago, Bandung', full: 'Jl. Ir. H. Juanda No. 108, Dago, Kota Bandung' },
    { label: 'Tunjungan, Surabaya', full: 'Jl. Tunjungan No. 24, Genteng, Kota Surabaya' },
    { label: 'Seminyak, Bali', full: 'Jl. Kayu Aya No. 88, Seminyak, Kuta, Badung, Bali' },
  ];

  const handleUseCurrentLocation = () => {
    setAddress('📍 Lokasi Saat Ini (GPS Terdeteksi: ±15 meter)');
    setActiveChip('');
  };

  const handleSelectPreset = (preset: { label: string; full: string }) => {
    setAddress(preset.full);
    setActiveChip(preset.label);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      const target = document.getElementById('restaurants');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <div className="nf-address-box">
      <form className="nf-address-form" onSubmit={handleSubmit}>
        <div className="nf-input-wrapper">
          <span className="nf-pin-icon" aria-hidden="true">📍</span>
          <input
            type="text"
            className="nf-address-input"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setActiveChip('');
            }}
            placeholder="Ketik alamat pengantaran atau nama gedung..."
            aria-label="Alamat Pengantaran"
          />
          <button
            type="button"
            className="nf-btn-gps"
            onClick={handleUseCurrentLocation}
            title="Gunakan lokasi saya sekarang"
          >
            <span>📌</span>
            <b>Lokasi Saya</b>
          </button>
        </div>

        <button type="submit" className="nf-btn-explore">
          <span>Eksplor Restoran Terdekat</span>
          <b>↗</b>
        </button>
      </form>

      {/* Quick Location Chips */}
      <div className="nf-preset-chips">
        <span className="nf-chips-label">Area Populer:</span>
        <div className="nf-chips-list">
          {presetLocations.map((preset) => (
            <button
              key={preset.label}
              type="button"
              className={`nf-chip ${activeChip === preset.label ? 'active' : ''}`}
              onClick={() => handleSelectPreset(preset)}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {submitted && (
        <div className="nf-location-alert" role="status">
          <span className="nf-alert-icon">🛵</span>
          <div>
            <strong>Menemukan 148+ restoran aktif di sekitarmu!</strong>
            <small>Estimasi pengantaran rata-rata 18–25 menit dengan jaminan makanan tetap hangat.</small>
          </div>
        </div>
      )}
    </div>
  );
}
