'use client';

import { useState } from 'react';
import {
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Calendar,
  MapPin,
  Flame,
  Zap,
  Gauge,
  CircleDot,
  RotateCcw,
} from 'lucide-react';

interface SymptomOption {
  id: string;
  label: string;
  icon: typeof AlertTriangle;
  category: string;
}

const symptomsList: SymptomOption[] = [
  { id: 'brebet', label: 'Mesin brebet / tersendat saat digas', icon: AlertTriangle, category: 'Mesin' },
  { id: 'starter', label: 'Motor sulit starter / aki drop', icon: Zap, category: 'Kelistrikan' },
  { id: 'rem', label: 'Rem berbunyi mencicit / kurang pakem', icon: CircleDot, category: 'Pengereman' },
  { id: 'berat', label: 'Tarikan motor terasa berat / lemot', icon: Gauge, category: 'Performa' },
  { id: 'kasar', label: 'Suara mesin kasar / menggelitik (knocking)', icon: Flame, category: 'Mesin' },
  { id: 'gredeg', label: 'Gredeg di tarikan awal (CVT matic)', icon: RotateCcw, category: 'CVT / Transmisi' },
  { id: 'asap', label: 'Knalpot keluar asap / boros bensin', icon: AlertTriangle, category: 'Pembakaran' },
  { id: 'getar', label: 'Stang bergetar / ban oleng', icon: Gauge, category: 'Kaki-kaki' },
];

export default function MotorDiagnosticWidget() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['brebet']);
  const [motorBrand, setMotorBrand] = useState<string>('Honda');
  const [motorModel, setMotorModel] = useState<string>('Vario 160 / 125');
  const [branch, setBranch] = useState<string>('MotoCare Tebet (Pit 01-04)');
  const [bookingTime, setBookingTime] = useState<string>('Pagi (09:00 - 10:30)');

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      if (selectedSymptoms.length > 1) {
        setSelectedSymptoms(selectedSymptoms.filter((s) => s !== id));
      }
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  // Dynamic Diagnosis logic
  const generateDiagnosis = () => {
    const causes: string[] = [];
    const actions: string[] = [];
    let minPrice = 75000;
    let maxPrice = 125000;
    let duration = '30 - 45 Menit';

    if (selectedSymptoms.includes('brebet') || selectedSymptoms.includes('asap')) {
      causes.push('Injektor tersumbat kerak karbon atau busi aus / celah longgar');
      actions.push('Pembersihan Throttle Body + Infus Injector Cleaner');
      minPrice += 35000;
      maxPrice += 65000;
    }

    if (selectedSymptoms.includes('gredeg') || selectedSymptoms.includes('berat')) {
      causes.push('Mangkok ganda CVT kotor oleh debu kampas, roller aus, atau v-belt retak');
      actions.push('Service CVT Lengkap + Pembersihan Mangkok Ganda & Re-greasing High-Temp');
      minPrice += 45000;
      maxPrice += 75000;
      duration = '45 - 60 Menit';
    }

    if (selectedSymptoms.includes('starter')) {
      causes.push('Voltase aki di bawah 12.4V atau dinamo starter kotor');
      actions.push('Pengecekan Voltase Digital & Peremajaan Jalur Kelistrikan');
      minPrice += 20000;
      maxPrice += 40000;
    }

    if (selectedSymptoms.includes('rem')) {
      causes.push('Kampas rem aus menipis atau piringan cakram berdebu/terkontaminasi');
      actions.push('Penggantian Kampas Rem Orisinil & Bleeding Minyak Rem DOT 4');
      minPrice += 30000;
      maxPrice += 55000;
    }

    if (selectedSymptoms.includes('kasar')) {
      causes.push('Oli mesin sudah encer/berkurang drastis atau setelan klep merenggang');
      actions.push('Ganti Oli Mesin Full Synthetic + Penyetelan Celah Klep Presisi');
      minPrice += 40000;
      maxPrice += 70000;
    }

    if (selectedSymptoms.includes('getar')) {
      causes.push('Komstir kendor / aus atau velg & laher roda oblak');
      actions.push('Penyetelan & Greasing Komstir / Balancing Roda');
      minPrice += 35000;
      maxPrice += 60000;
    }

    return {
      causes: causes.length ? causes : ['Perlu inspeksi fisik menyeluruh oleh mekanik di pit'],
      actions: actions.length ? actions : ['General Check-up 24 Titik Standar Pabrikan'],
      minPrice,
      maxPrice,
      duration,
    };
  };

  const diagResult = generateDiagnosis();

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const generateWhatsAppUrl = () => {
    const symptomLabels = selectedSymptoms
      .map((id) => symptomsList.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join('\n  - ');

    const text = `Halo MotoCare! Saya ingin booking servis motor tanpa antre:
- Motor: ${motorBrand} ${motorModel}
- Keluhan Gejala:
  - ${symptomLabels}
- Rekomendasi Diagnosa: ${diagResult.actions[0] || 'General Check-up'}
- Estimasi Biaya: ${formatRupiah(diagResult.minPrice)} - ${formatRupiah(diagResult.maxPrice)}
- Cabang: ${branch}
- Jadwal Kedatangan: ${bookingTime}

Mohon siapkan mekanik dan pit slot sebelum saya tiba ya, terima kasih!`;

    return `https://wa.me/6281573550017?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="mc-diagnostic-container">
      {/* 1. Interactive Symptom Selector */}
      <div className="mc-symptom-section">
        <div className="mc-diag-badge">
          <Wrench size={14} className="mc-icon-orange" />
          <span>INTERACTIVE DIAGNOSTIC ENGINE</span>
        </div>
        <h3>Apa Masalah Motor Kamu?</h3>
        <p className="mc-diag-sub">
          Pilih satu atau beberapa gejala di bawah. Sistem pintar kami akan mendeteksi kemungkinan kerusakan dan menyiapkan estimasi biaya perbaikan secara transparan.
        </p>

        <div className="mc-symptoms-grid">
          {symptomsList.map((sym) => {
            const isSelected = selectedSymptoms.includes(sym.id);
            const Icon = sym.icon;
            return (
              <button
                key={sym.id}
                type="button"
                className={`mc-symptom-card ${isSelected ? 'active' : ''}`}
                onClick={() => toggleSymptom(sym.id)}
              >
                <div className="mc-symptom-head">
                  <span className="mc-sym-cat">{sym.category}</span>
                  <div className="mc-sym-checkbox">
                    {isSelected ? <CheckCircle2 size={16} className="mc-icon-orange" /> : <div className="mc-check-empty" />}
                  </div>
                </div>
                <div className="mc-sym-body">
                  <Icon size={18} className={isSelected ? 'mc-icon-orange' : 'mc-icon-dim'} />
                  <span>{sym.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Dynamic Diagnostic Result & Booking Form */}
      <div className="mc-diagnosis-card">
        <div className="mc-diagnosis-grid">
          {/* Left: Diagnostic Analysis Output */}
          <div className="mc-diag-output-box">
            <span className="mc-diag-kicker">HASIL DIAGNOSA AWAL MEKANIK</span>

            <div className="mc-diag-cause-group">
              <label>Kemungkinan Sumber Masalah:</label>
              <ul className="mc-cause-list">
                {diagResult.causes.map((c, idx) => (
                  <li key={idx}>
                    <AlertTriangle size={15} className="mc-icon-orange" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mc-diag-action-group">
              <label>Tindakan Servis yang Direkomendasikan:</label>
              <ul className="mc-action-list">
                {diagResult.actions.map((a, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={15} className="mc-icon-green" />
                    <strong>{a}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mc-diag-metrics-row">
              <div className="mc-metric-item">
                <small>Estimasi Biaya Servis:</small>
                <strong>{formatRupiah(diagResult.minPrice)} – {formatRupiah(diagResult.maxPrice)}</strong>
              </div>
              <div className="mc-metric-item">
                <small>Estimasi Waktu Pengerjaan:</small>
                <strong><Clock size={14} className="mc-icon-orange" /> {diagResult.duration}</strong>
              </div>
            </div>
          </div>

          {/* Right: Pit Booking Scheduler */}
          <div className="mc-diag-booking-box">
            <span className="mc-booking-kicker">JADWALKAN PIT STOP · DATANG TINGGAL SERVIS</span>
            <h4>Siapkan Pit &amp; Mekanik</h4>

            <div className="mc-form-row">
              <div className="mc-form-field">
                <label>Merk Motor:</label>
                <select
                  value={motorBrand}
                  onChange={(e) => setMotorBrand(e.target.value)}
                  className="mc-select"
                >
                  <option value="Honda">Honda</option>
                  <option value="Yamaha">Yamaha</option>
                  <option value="Suzuki">Suzuki</option>
                  <option value="Vespa Matic">Vespa Matic</option>
                  <option value="Kawasaki">Kawasaki</option>
                </select>
              </div>

              <div className="mc-form-field">
                <label>Tipe / Model:</label>
                <input
                  type="text"
                  placeholder="Contoh: Vario 160 / NMAX"
                  value={motorModel}
                  onChange={(e) => setMotorModel(e.target.value)}
                  className="mc-input"
                />
              </div>
            </div>

            <div className="mc-form-field">
              <label>Pilih Cabang Bengkel:</label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="mc-select"
              >
                <option value="MotoCare Tebet (Pit 01-04)">MotoCare Tebet — Jl. Tebet Raya No. 45</option>
                <option value="MotoCare Kemang (Pit 01-03)">MotoCare Kemang — Jl. Kemang Selatan No. 12</option>
                <option value="MotoCare Fatmawati (Pit 01-05)">MotoCare Fatmawati — Jl. RS Fatmawati No. 88</option>
                <option value="MotoCare Serpong (Pit 01-04)">MotoCare BSD Serpong — Ruko Boulevard No. 19</option>
              </select>
            </div>

            <div className="mc-form-field">
              <label>Slot Waktu Kedatangan:</label>
              <div className="mc-slots-grid">
                {[
                  'Pagi (09:00 - 10:30)',
                  'Siang (11:00 - 12:30)',
                  'Sore (14:00 - 15:30)',
                  'Malam (16:30 - 18:00)',
                ].map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`mc-slot-btn ${bookingTime === time ? 'active' : ''}`}
                    onClick={() => setBookingTime(time)}
                  >
                    <Calendar size={12} />
                    <span>{time.split('(')[0]}</span>
                    <small>{time.match(/\((.*?)\)/)?.[1]}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="mc-booking-action-row">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="mc-btn-booking-wa"
              >
                <MessageCircle size={16} />
                <span>Booking Servis Tanpa Antre</span>
                <ArrowUpRight size={16} />
              </a>
              <small className="mc-guarantee-note">
                <ShieldCheck size={13} className="mc-icon-green" />
                <span>Garansi servis 14 hari / 500 KM + 100% Spare part orisinil.</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
