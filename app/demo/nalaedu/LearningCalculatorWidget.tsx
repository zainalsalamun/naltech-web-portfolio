'use client';

import { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Award,
  Video,
  MessageCircle,
  TrendingUp,
  Percent,
} from 'lucide-react';

interface GradeLevel {
  id: string;
  name: string;
  badge: string;
  classes: string;
  description: string;
  popularSubjects: string[];
  baseMonthlyPrice: number;
}

const gradeLevels: GradeLevel[] = [
  {
    id: 'sd',
    name: 'SD / Madrasah Ibtidaiyah',
    badge: 'Fondasi Juara Kelas',
    classes: 'Kelas 1 – 6 SD',
    description:
      'Video animasi 3D interaktif, calistung ceria, kuis berhadiah poin, dan konsep dasar Matematika, IPAS, serta Bahasa Inggris yang mudah dipahami anak.',
    popularSubjects: ['Matematika Ceria', 'IPAS (Sains & Sosial)', 'Bahasa Indonesia', 'English for Kids'],
    baseMonthlyPrice: 119000,
  },
  {
    id: 'smp',
    name: 'SMP / Madrasah Tsanawiyah',
    badge: 'Penguatan Konsep & ANBK',
    classes: 'Kelas 7 – 9 SMP',
    description:
      'Pendalaman konsep Kurikulum Merdeka, rangkuman rumus cepat (Master Formula), bedah soal Asesmen Nasional (ANBK), dan persiapan masuk SMA favorit.',
    popularSubjects: ['Matematika SMP', 'IPA Terpadu (Fisika/Biologi)', 'Bahasa Inggris', 'Persiapan Masuk SMA Favorit'],
    baseMonthlyPrice: 139000,
  },
  {
    id: 'sma',
    name: 'SMA / SMK / MA',
    badge: 'Paling Populer · Sukses UTBK',
    classes: 'Kelas 10 – 12 SMA/SMK',
    description:
      'Fokus materi akademik peminatan, ribuan soal HOTS, sistem Tryout adaptif dengan penilaian IRT resmi, dan pendampingan lolos PTN impian (SNBP & SNBT).',
    popularSubjects: ['Penalaran Umum (TPS)', 'Literasi Bhs Indonesia & Inggris', 'Matematika Tingkat Lanjut', 'Fisika, Kimia & Biologi'],
    baseMonthlyPrice: 159000,
  },
  {
    id: 'univ',
    name: 'Universitas & Persiapan Karir',
    badge: 'Skill Masa Depan',
    classes: 'Mahasiswa & Fresh Graduate',
    description:
      'Modul praktis persiapan karir industri teknologi dan bisnis, persiapan TOEFL/IELTS berstandar internasional, Coding, Data Analytics, dan matrikulasi kuliah.',
    popularSubjects: ['TOEFL & IELTS Masterclass', 'Python & Data Analytics', 'Full-Stack Web Development', 'Business Communication'],
    baseMonthlyPrice: 179000,
  },
];

interface DurationOption {
  id: string;
  months: number;
  label: string;
  badge?: string;
  discountPct: number;
  bonuses: string[];
}

const durationOptions: DurationOption[] = [
  {
    id: '1m',
    months: 1,
    label: '1 Bulan (Paket Ujian / Kilat)',
    discountPct: 0,
    bonuses: [
      'Akses Penuh Ribuan Video Materi',
      'Bank Soal & Pembahasan Lengkap',
      '5x Sesi Tanya Tutor via Chat',
    ],
  },
  {
    id: '6m',
    months: 6,
    label: '6 Bulan (1 Semester Penuh)',
    badge: 'Hemat 35%',
    discountPct: 35,
    bonuses: [
      'Live Teaching Interaktif 3x Seminggu',
      'Bank Soal & Tryout Berbasis IRT',
      'Klinik PR 24 Jam dengan Master Teacher',
      'Rapor Perkembangan Belajar Bulanan',
    ],
  },
  {
    id: '12m',
    months: 12,
    label: '12 Bulan (1 Tahun Ajaran Penuh)',
    badge: 'Paling Hemat · 55% OFF',
    discountPct: 55,
    bonuses: [
      'Konseling Jurusan & Minat Bakat 1-on-1',
      'Akses Unlimited Semua Materi Selama 1 Tahun',
      'Master Teacher Dedicated & Klinik PR 24 Jam',
      'Garansi Nilai Rapor Naik atau Uang Kembali',
      'Gratis Modul Cetak Eksklusif Dikirim ke Rumah',
    ],
  },
];

export default function LearningCalculatorWidget() {
  const [selectedGradeId, setSelectedGradeId] = useState<string>('sma');
  const [selectedDurationId, setSelectedDurationId] = useState<string>('12m');

  const activeGrade = gradeLevels.find((g) => g.id === selectedGradeId) ?? gradeLevels[2];
  const activeDuration = durationOptions.find((d) => d.id === selectedDurationId) ?? durationOptions[2];

  // Pricing calculation
  const rawMonthly = activeGrade.baseMonthlyPrice;
  const discountedMonthly = Math.round(rawMonthly * (1 - activeDuration.discountPct / 100));
  const totalPackageCost = discountedMonthly * activeDuration.months;
  const normalTotalCost = rawMonthly * activeDuration.months;
  const totalSavings = normalTotalCost - totalPackageCost;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div id="kalkulator-belajar" className="ne-calc-wrapper">
      <div className="ne-calc-header">
        <div className="ne-header-pill">
          <Sparkles size={14} />
          <span>CTA DUA KOLOM PILIHAN PAKET BELAJAR</span>
        </div>
        <h2>Pilih Jenjang &amp; Durasi Belajar,<br /><em>Dapatkan Biaya Terbaik.</em></h2>
        <p>
          Sesuaikan kebutuhan belajar mulai dari SD hingga bangku kuliah dengan pilihan waktu belajar fleksibel dan diskon beasiswa hemat s.d. 55%.
        </p>
      </div>

      {/* Two-Column Interactive Grid */}
      <div className="ne-two-col-grid">
        {/* ================= COLUMN 1: Pilihan Jenjang SD s/d Universitas ================= */}
        <div className="ne-col ne-grade-col">
          <div className="ne-col-title">
            <span className="ne-step-num">KOLOM 1</span>
            <h3>Pilih Jenjang Pendidikan</h3>
            <small>Tersedia untuk semua tingkatan kelas</small>
          </div>

          <div className="ne-grade-list" role="tablist" aria-label="Pilihan Jenjang Pendidikan">
            {gradeLevels.map((grade) => (
              <button
                key={grade.id}
                type="button"
                className={`ne-grade-card ${selectedGradeId === grade.id ? 'active' : ''}`}
                onClick={() => setSelectedGradeId(grade.id)}
                role="tab"
                aria-selected={selectedGradeId === grade.id}
              >
                <div className="ne-grade-card-top">
                  <div className="ne-grade-icon-box">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <span className="ne-grade-badge">{grade.badge}</span>
                    <h4>{grade.name}</h4>
                    <span className="ne-grade-class">{grade.classes}</span>
                  </div>
                </div>

                <p className="ne-grade-desc">{grade.description}</p>

                <div className="ne-subjects-tag-row">
                  {grade.popularSubjects.map((sub, sIdx) => (
                    <span key={sIdx} className="ne-subject-chip">
                      {sub}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ================= COLUMN 2: Lama Waktu Belajar & Ragam Biaya ================= */}
        <div className="ne-col ne-pricing-col">
          <div className="ne-col-title">
            <span className="ne-step-num">KOLOM 2</span>
            <h3>Lama Waktu Belajar &amp; Biaya</h3>
            <small>Pilih durasi paket &amp; nikmati diskon beasiswa</small>
          </div>

          {/* Duration Selector Buttons */}
          <div className="ne-duration-list">
            {durationOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`ne-duration-card ${selectedDurationId === opt.id ? 'active' : ''}`}
                onClick={() => setSelectedDurationId(opt.id)}
              >
                <div className="ne-duration-top">
                  <div className="ne-radio-indicator">
                    <div className="ne-radio-dot" />
                  </div>
                  <div>
                    <strong>{opt.label}</strong>
                    {opt.badge && <span className="ne-discount-pill">{opt.badge}</span>}
                  </div>
                </div>

                <div className="ne-duration-price-preview">
                  <small>Hanya</small>
                  <b>{formatRupiah(Math.round(activeGrade.baseMonthlyPrice * (1 - opt.discountPct / 100)))}</b>
                  <span>/bulan</span>
                </div>
              </button>
            ))}
          </div>

          {/* Live Calculated Package Summary Box */}
          <div className="ne-summary-box">
            <div className="ne-summary-head">
              <div>
                <span className="ne-summary-kicker">RINGKASAN PAKET PILIHAN</span>
                <h4>{activeGrade.name} ({activeDuration.months} Bulan)</h4>
              </div>
              {activeDuration.discountPct > 0 && (
                <div className="ne-save-tag">
                  <Percent size={13} />
                  <span>Hemat {formatRupiah(totalSavings)}</span>
                </div>
              )}
            </div>

            <div className="ne-pricing-display">
              <div className="ne-price-main">
                <small>Investasi Belajar per Bulan:</small>
                <div className="ne-price-number-row">
                  <strong>{formatRupiah(discountedMonthly)}</strong>
                  <span className="ne-per-month">/bulan</span>
                  {activeDuration.discountPct > 0 && (
                    <del className="ne-price-del">{formatRupiah(rawMonthly)}/bln</del>
                  )}
                </div>
                <p className="ne-total-note">
                  Total dibayar untuk {activeDuration.months} bulan: <strong>{formatRupiah(totalPackageCost)}</strong> (Bisa dicicil)
                </p>
              </div>
            </div>

            {/* Inclusions List for Active Duration */}
            <div className="ne-bonuses-container">
              <strong>Fasilitas &amp; Keunggulan Paket Ini:</strong>
              <ul className="ne-bonus-list">
                {activeDuration.bonuses.map((bonus, bIdx) => (
                  <li key={bIdx}>
                    <CheckCircle2 size={15} className="ne-icon-check" />
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="ne-action-buttons">
              <a
                href={`https://wa.me/6281573550017?text=Halo%20NalaEdu%2C%20saya%20tertarik%20mendaftar%20paket%20${encodeURIComponent(activeGrade.name)}%20durasi%20${activeDuration.months}%20Bulan%20dengan%20biaya%20${encodeURIComponent(formatRupiah(totalPackageCost))}.%20Bisa%20bantu%20aktivasi%3F`}
                target="_blank"
                rel="noreferrer"
                className="ne-btn-primary"
              >
                <Zap size={16} />
                <span>Mulai Belajar Sekarang (Akses Instan)</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://wa.me/6281573550017?text=Halo%20NalaEdu%2C%20saya%20ingin%20konsultasi%20gratis%20pemilihan%20paket%20belajar%20dan%20tes%20minat%20bakat."
                target="_blank"
                rel="noreferrer"
                className="ne-btn-consult"
              >
                <MessageCircle size={15} />
                <span>Konsultasi Gratis dengan Tim Edukasi</span>
              </a>
            </div>

            <div className="ne-trust-foot">
              <ShieldCheck size={14} className="ne-icon-check" />
              <span>Garansi 100% Kepuasan Belajar · Akses Instan di HP, Tablet &amp; Laptop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
