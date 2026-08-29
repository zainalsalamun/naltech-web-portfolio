'use client';

import { useState } from 'react';
import {
  Play,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Truck,
  Tag,
  Waves,
  Flame,
  PackageCheck,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

interface ProcessStep {
  id: string;
  stepNum: string;
  title: string;
  shortDesc: string;
  icon: typeof Tag;
  duration: string;
  videoImage: string;
  highlights: string[];
}

const stepsData: ProcessStep[] = [
  {
    id: 'step-tagging',
    stepNum: '01',
    title: 'Penimbangan & Tagging Barcode Anti-Tertukar',
    shortDesc: 'Pakaian ditimbang secara transparan di depan Anda atau direkam video saat tiba di workshop.',
    icon: Tag,
    duration: '0:35 · 4K Quality',
    videoImage: '/laundry/process-sorting.jpg',
    highlights: [
      'Pemisahan warna putih, berwarna, dan bahan sensitif',
      'Pemberian barcode digital khusus per pelanggan',
      'Pengecekan saku dan catatan noda membandel',
    ],
  },
  {
    id: 'step-washing',
    stepNum: '02',
    title: 'Pencucian Higienis 1 Mesin 1 Pelanggan',
    shortDesc: 'Tidak pernah dicampur dengan pakaian orang lain demi higienitas dan kesehatan maksimal.',
    icon: Waves,
    duration: '0:48 · 4K Quality',
    videoImage: '/laundry/process-washing.jpg',
    highlights: [
      '1 Mesin Khusus untuk 1 Nota Pelanggan',
      'Deterjen ramah lingkungan dengan formula pengangkat noda',
      'Sterilisasi Ozon & UV-C pembasmi 99.9% kuman dan tungau',
    ],
  },
  {
    id: 'step-steam',
    stepNum: '03',
    title: 'Setrika Uap Bertekanan & Parfum Microcapsule',
    shortDesc: 'Setrika uap boiler bertekanan tinggi merapikan pakaian tanpa risiko gosong atau merusak serat.',
    icon: Flame,
    duration: '0:42 · 4K Quality',
    videoImage: '/laundry/process-steam.jpg',
    highlights: [
      'Setrika uap boiler aman untuk kain sutra & rajut',
      'Semprotan parfum microcapsule tahan harum hingga 14 hari',
      'Pengecekan lipatan presisi standar hotel bintang lima',
    ],
  },
  {
    id: 'step-packing',
    stepNum: '04',
    title: 'Pengemasan Kedap Udara & Antar Tepat Waktu',
    shortDesc: 'Pakaian dikemas rapat dengan plastik tebal anti-debu dan diantar langsung ke rumah Anda.',
    icon: PackageCheck,
    duration: '0:38 · 4K Quality',
    videoImage: '/laundry/hero-laundry.jpg',
    highlights: [
      'Plastik seal kedap udara menjaga kebersihan & keharuman',
      'Hanger cover gratis untuk pakaian satuan & jas',
      'Armada kurir tepat waktu sesuai jadwal janji temu',
    ],
  },
];

export default function LaundryProcessReel() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentStep = stepsData[activeStepIndex];
  const IconComponent = currentStep.icon;

  return (
    <div className="nly-process-container">
      {/* Step Selector Pills */}
      <div className="nly-process-tabs">
        {stepsData.map((step, idx) => {
          const TabIcon = step.icon;
          return (
            <button
              key={step.id}
              type="button"
              className={`nly-process-tab ${activeStepIndex === idx ? 'active' : ''}`}
              onClick={() => {
                setActiveStepIndex(idx);
                setIsPlaying(false);
              }}
            >
              <span className="nly-tab-num">{step.stepNum}</span>
              <TabIcon size={16} />
              <span>{step.title.split('&')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Main Process Reel Card */}
      <div className="nly-reel-card">
        <div className="nly-reel-grid">
          {/* Left: Video Preview Player */}
          <div className="nly-video-frame">
            <img src={currentStep.videoImage} alt={currentStep.title} />
            <div className="nly-video-overlay" />

            <div className="nly-video-badge">
              <span className="nly-live-dot" />
              <span>{currentStep.duration}</span>
            </div>

            <button
              type="button"
              className={`nly-btn-play ${isPlaying ? 'playing' : ''}`}
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label="Putar cuplikan video proses laundry"
            >
              <Play size={24} fill="#ffffff" color="#ffffff" />
            </button>

            <div className="nly-video-caption">
              <span className="nly-caption-step">Tahap {currentStep.stepNum} dari 04</span>
              <strong>{currentStep.title}</strong>
            </div>
          </div>

          {/* Right: Step Description & Quality Checklist */}
          <div className="nly-step-info-box">
            <div className="nly-step-badge">
              <IconComponent size={14} className="nly-icon-aqua" />
              <span>STANDAR OPERASIONAL HIGIENIS NALALAUNDRY</span>
            </div>

            <h3>{currentStep.title}</h3>
            <p className="nly-step-desc">{currentStep.shortDesc}</p>

            <ul className="nly-step-checklist">
              {currentStep.highlights.map((item, hIdx) => (
                <li key={hIdx}>
                  <CheckCircle2 size={16} className="nly-icon-aqua" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="nly-step-action-row">
              <a
                href="https://wa.me/6281573550017?text=Halo%20NalaLaundry%2C%20saya%20tertarik%20dengan%20layanan%20laundry%20antar%20jemput.%20Bisa%20jadwalkan%20penjemputan%20hari%20ini%3F"
                target="_blank"
                rel="noreferrer"
                className="nly-btn-process-cta"
              >
                <Truck size={16} />
                <span>Jadwalkan Antar Jemput Gratis</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
