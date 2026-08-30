'use client';

import { useState } from 'react';
import {
  Calculator,
  Compass,
  Layers,
  Ruler,
  Building2,
  Home,
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Award,
  HardHat,
  FileText,
  Clock,
  Sliders,
  Check,
} from 'lucide-react';

interface ProjectTypeOption {
  id: 'residential' | 'commercial' | 'interior' | 'masterplan';
  name: string;
  baseDesignRate: number; // per m2
  baseBuildRate: number; // per m2
  desc: string;
}

const projectTypes: ProjectTypeOption[] = [
  {
    id: 'residential',
    name: 'Rumah Tinggal Mewah / Villa Tropis',
    baseDesignRate: 200000,
    baseBuildRate: 6500000,
    desc: 'Hunian privat dengan penataan zonasi ruang intim, pencahayaan alami, & taman dalam.',
  },
  {
    id: 'commercial',
    name: 'Komersial (Kafe, Resto, Kantor, Toko)',
    baseDesignRate: 250000,
    baseBuildRate: 7500000,
    desc: 'Bangunan komersial berdaya tarik visual tinggi, sirkulasi pengunjung lancar, & efisien.',
  },
  {
    id: 'interior',
    name: 'Desain Interior & Custom Fit-Out',
    baseDesignRate: 180000,
    baseBuildRate: 4500000,
    desc: 'Penataan interior menyeluruh, mood lighting, material lantai/dinding, & custom perabot.',
  },
  {
    id: 'masterplan',
    name: 'Kawasan / Villa Compound / Resort',
    baseDesignRate: 120000,
    baseBuildRate: 5500000,
    desc: 'Master planning penataan tapak lanskap, kontur lahan, sirkulasi jalan, & zonasi massa.',
  },
];

interface ScopeItem {
  id: string;
  name: string;
  ratePerM2: number;
  flatFee: number;
  defaultChecked: boolean;
}

const scopeOptions: ScopeItem[] = [
  { id: 'concept_3d', name: 'Konsep Skematik & 3D Realistic Render (Eksterior & Interior)', ratePerM2: 0, flatFee: 0, defaultChecked: true },
  { id: 'ded_drawings', name: 'Gambar Kerja Teknis Lengkap (DED Arsitektur, Struktur, MEP)', ratePerM2: 0, flatFee: 0, defaultChecked: true },
  { id: 'rab_boq', name: 'Rencana Anggaran Biaya (RAB) & Bill of Quantity Detail Tender', ratePerM2: 25000, flatFee: 0, defaultChecked: true },
  { id: 'material_spec', name: 'Spesifikasi & Kurasi Sampel Material Finishing (Moodboard)', ratePerM2: 20000, flatFee: 0, defaultChecked: true },
  { id: 'supervision', name: 'Pengawasan Berkala Lapangan (Site Supervision 12x Kunjungan)', ratePerM2: 0, flatFee: 15000000, defaultChecked: false },
  { id: 'pbg_permit', name: 'Pendampingan Teknis Izin Persetujuan Bangunan Gedung (PBG/IMB)', ratePerM2: 0, flatFee: 10000000, defaultChecked: false },
];

export default function ArchitectFeeEstimator() {
  const [selectedType, setSelectedType] = useState<'residential' | 'commercial' | 'interior' | 'masterplan'>('residential');
  const [buildingAreaM2, setBuildingAreaM2] = useState<number>(350);
  const [selectedScopes, setSelectedScopes] = useState<string[]>(['concept_3d', 'ded_drawings', 'rab_boq', 'material_spec']);
  const [projectLocation, setProjectLocation] = useState<string>('Pondok Indah, Jakarta Selatan');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');

  const currentType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];

  const toggleScope = (id: string) => {
    // Keep mandatory base items
    if (id === 'concept_3d' || id === 'ded_drawings') return;
    if (selectedScopes.includes(id)) {
      setSelectedScopes(selectedScopes.filter((sId) => sId !== id));
    } else {
      setSelectedScopes([...selectedScopes, id]);
    }
  };

  // Calculations
  const additionalScopePerM2 = selectedScopes.reduce((sum, sId) => {
    const item = scopeOptions.find((s) => s.id === sId);
    return sum + (item ? item.ratePerM2 : 0);
  }, 0);

  const flatFees = selectedScopes.reduce((sum, sId) => {
    const item = scopeOptions.find((s) => s.id === sId);
    return sum + (item ? item.flatFee : 0);
  }, 0);

  const designFeeRatePerM2 = currentType.baseDesignRate + additionalScopePerM2;
  const totalDesignFee = (buildingAreaM2 * designFeeRatePerM2) + flatFees;
  const totalEstimatedConstructionCost = buildingAreaM2 * currentType.baseBuildRate;

  // Estimated design duration
  const estimatedWeeks = buildingAreaM2 <= 200 ? '6–8 Minggu' : buildingAreaM2 <= 500 ? '8–10 Minggu' : '10–14 Minggu';

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const generateWhatsAppUrl = () => {
    const scopeNames = selectedScopes
      .map((sId) => scopeOptions.find((s) => s.id === sId)?.name)
      .join('\n• ');
    const name = clientName.trim() || 'Klien RUANG/STUDIO';

    const message = `Halo RUANG/STUDIO! Saya ingin berkonsultasi mengenai perancangan arsitektur:
- Nama Klien: ${name}
- No. WhatsApp: ${clientPhone || '-'}
- Tipe Proyek: ${currentType.name}
- Rencana Luas Bangunan: ${buildingAreaM2} m²
- Lokasi Lahan: ${projectLocation}
- Estimasi Biaya Jasa Arsitek: ${formatRupiah(totalDesignFee)}
- Estimasi Budget Konstruksi: ${formatRupiah(totalEstimatedConstructionCost)}

Lingkup Jasa yang Diinginkan:
• ${scopeNames}

Mohon informasi ketersediaan jadwal survei lokasi dan sesi konsultasi awal dengan Principal Architect ya, terima kasih!`;

    return `https://wa.me/6281573550017?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="ras-estimator-card">
      <div className="ras-estimator-header">
        <div className="ras-estimator-badge">
          <Calculator size={14} className="ras-icon-sienna" />
          <span>SIMULASI BIAYA ARSITEK &amp; KONSTRUKSI</span>
        </div>
        <h3>Kalkulator Estimasi Biaya Desain &amp; Bangunan</h3>
        <p>Transparansi anggaran perancangan arsitektur berstandar Ikatan Arsitek Indonesia (IAI) &amp; perkiraan biaya fisik.</p>
      </div>

      <div className="ras-estimator-grid">
        {/* Left Column: Interactive Inputs */}
        <div className="ras-estimator-inputs-col">
          {/* 1. Project Type Selector */}
          <div className="ras-form-group">
            <label className="ras-group-label">1. Pilih Tipologi Proyek Bangunan:</label>
            <div className="ras-types-grid">
              {projectTypes.map((type) => {
                const isSelected = type.id === selectedType;
                return (
                  <button
                    key={type.id}
                    type="button"
                    className={`ras-type-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <div className="ras-type-btn-top">
                      <strong>{type.name}</strong>
                      <span className="ras-type-rate">{formatRupiah(type.baseDesignRate)}/m²</span>
                    </div>
                    <small>{type.desc}</small>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Building Area Slider */}
          <div className="ras-form-group">
            <div className="ras-slider-header">
              <label className="ras-group-label">2. Rencana Luas Bangunan (LB):</label>
              <span className="ras-slider-badge">{buildingAreaM2} m²</span>
            </div>
            <input
              type="range"
              min={100}
              max={1500}
              step={25}
              value={buildingAreaM2}
              onChange={(e) => setBuildingAreaM2(Number(e.target.value))}
              className="ras-range-slider"
            />
            <div className="ras-slider-markers">
              <span>100 m² (Compact)</span>
              <span>350 m² (Medium)</span>
              <span>750 m² (Luxury)</span>
              <span>1.500 m² (Grand/Resort)</span>
            </div>
          </div>

          {/* 3. Scope of Work Checkboxes */}
          <div className="ras-form-group">
            <label className="ras-group-label">3. Ruang Lingkup Layanan Studio:</label>
            <div className="ras-scopes-list">
              {scopeOptions.map((scope) => {
                const isChecked = selectedScopes.includes(scope.id);
                const isMandatory = scope.id === 'concept_3d' || scope.id === 'ded_drawings';
                return (
                  <button
                    key={scope.id}
                    type="button"
                    className={`ras-scope-btn ${isChecked ? 'active' : ''} ${isMandatory ? 'mandatory' : ''}`}
                    onClick={() => toggleScope(scope.id)}
                  >
                    <div className="ras-scope-check">
                      {isChecked ? <Check size={12} className="ras-icon-sienna" /> : <div className="ras-empty-dot" />}
                    </div>
                    <div className="ras-scope-info">
                      <span>{scope.name}</span>
                      {isMandatory && <small className="ras-mandatory-tag">Paket Utama Wajib</small>}
                      {scope.ratePerM2 > 0 && <small>+{formatRupiah(scope.ratePerM2)}/m²</small>}
                      {scope.flatFee > 0 && <small>+{formatRupiah(scope.flatFee)} flat</small>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Location & Contact Data */}
          <div className="ras-form-group">
            <div className="ras-two-inputs">
              <div>
                <label className="ras-field-label">Lokasi / Alamat Lahan:</label>
                <input
                  type="text"
                  value={projectLocation}
                  onChange={(e) => setProjectLocation(e.target.value)}
                  placeholder="Contoh: Canggu, Bali / Menteng, Jakarta"
                  className="ras-text-input"
                />
              </div>

              <div>
                <label className="ras-field-label">Nama Klien / Pemilik:</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Contoh: Bpk. Wijaya"
                  className="ras-text-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Output Summary & Proposal Generator */}
        <div className="ras-estimator-summary-col">
          <div className="ras-summary-card">
            <div className="ras-summary-top">
              <span className="ras-summary-kicker">PROPOSAL ANGGARAN AWAL</span>
              <h4>RUANG/STUDIO ARCHITECTS</h4>
              <span className="ras-summary-tag">{currentType.name}</span>
            </div>

            <div className="ras-summary-divider" />

            <div className="ras-summary-metrics">
              <div className="ras-metric-row">
                <span>Luas Bangunan (LB):</span>
                <strong>{buildingAreaM2} m²</strong>
              </div>

              <div className="ras-metric-row">
                <span>Rate Desain Arsitek:</span>
                <strong>{formatRupiah(designFeeRatePerM2)} / m²</strong>
              </div>

              <div className="ras-metric-row">
                <span>Estimasi Waktu Desain:</span>
                <strong><Clock size={12} /> {estimatedWeeks}</strong>
              </div>

              <div className="ras-metric-row highlight">
                <span>Estimasi Biaya Jasa Arsitek:</span>
                <strong>{formatRupiah(totalDesignFee)}</strong>
              </div>

              <div className="ras-build-cost-box">
                <span className="ras-build-cost-label">Estimasi Biaya Konstruksi Fisik Bangunan:</span>
                <strong>{formatRupiah(totalEstimatedConstructionCost)}</strong>
                <small>*Estimasi struktur, arsitektur, MEP &amp; finishing standar mewah ({formatRupiah(currentType.baseBuildRate)}/m²).</small>
              </div>
            </div>

            <div className="ras-summary-guarantees">
              <label>Jaminan Mutu &amp; Layanan:</label>
              <ul>
                <li><CheckCircle2 size={13} className="ras-icon-sienna" /> <span>Principal Architect tersertifikasi IAI &amp; Izin PBG</span></li>
                <li><CheckCircle2 size={13} className="ras-icon-sienna" /> <span>Desain Passive Cooling &amp; Efisiensi Energi</span></li>
                <li><CheckCircle2 size={13} className="ras-icon-sienna" /> <span>3x Sesi Revisi Skematik Desain 3D Bebas Biaya</span></li>
              </ul>
            </div>

            <div className="ras-summary-cta">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="ras-btn-consult-wa"
              >
                <MessageCircle size={17} />
                <span>Konsultasi Desain via WhatsApp</span>
                <ArrowUpRight size={17} />
              </a>
              <small className="ras-cta-note">
                <ShieldCheck size={12} className="ras-icon-sienna" />
                <span>Konsultasi tahap awal &amp; review denah lahan via online bebas biaya.</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
