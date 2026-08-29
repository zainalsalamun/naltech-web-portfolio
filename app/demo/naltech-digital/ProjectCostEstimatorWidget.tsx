'use client';

import { useState } from 'react';
import {
  Smartphone,
  Globe,
  LayoutDashboard,
  Cpu,
  Layers,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Database,
  CreditCard,
  Bell,
  FileSpreadsheet,
  MapPin,
  Lock,
  Zap,
} from 'lucide-react';

interface ProjectCategory {
  id: string;
  name: string;
  icon: typeof Smartphone;
  baseTimeline: string;
  techStack: string[];
}

const projectCategories: ProjectCategory[] = [
  {
    id: 'mobile',
    name: 'Aplikasi Mobile (Android & iOS)',
    icon: Smartphone,
    baseTimeline: '3 - 6 Minggu',
    techStack: ['Flutter (Multi-platform)', 'Node.js / Go REST API', 'PostgreSQL / Supabase', 'Cloud Storage'],
  },
  {
    id: 'website',
    name: 'Website Bisnis & Company Profile',
    icon: Globe,
    baseTimeline: '1 - 3 Minggu',
    techStack: ['Next.js 16 & React 19', 'Tailwind CSS 4', 'SEO Architecture', 'Vercel / Cloud Edge'],
  },
  {
    id: 'dashboard',
    name: 'Dashboard Admin & Sistem Informasi',
    icon: LayoutDashboard,
    baseTimeline: '3 - 5 Minggu',
    techStack: ['Next.js App Router', 'Role-Based Auth', 'PostgreSQL / Supabase', 'Export Excel / PDF'],
  },
  {
    id: 'custom',
    name: 'Custom ERP / Sistem Terintegrasi',
    icon: Cpu,
    baseTimeline: '4 - 8 Minggu',
    techStack: ['Full-Stack Microservices', 'Payment Gateway API', 'Real-time WebSockets', 'Automated Backups'],
  },
  {
    id: 'maintenance',
    name: 'Maintenance & Peningkatan Aplikasi',
    icon: Layers,
    baseTimeline: 'Fleksibel / Bulanan',
    techStack: ['Code Refactoring', 'Performance Tuning', 'Bug Fixing & Patching', 'Feature Upgrade'],
  },
];

interface FeatureItem {
  id: string;
  label: string;
  icon: typeof Lock;
  category: string;
}

const featureOptions: FeatureItem[] = [
  { id: 'auth', label: 'Autentikasi & Multi-Role (Admin, Staff, Klien)', icon: Lock, category: 'Keamanan' },
  { id: 'payment', label: 'Payment Gateway (QRIS, VA Bank, E-Wallet)', icon: CreditCard, category: 'Finansial' },
  { id: 'notif', label: 'Notifikasi WhatsApp & Push Notifications', icon: Bell, category: 'Komunikasi' },
  { id: 'report', label: 'Laporan Keuangan, Grafik & Export Excel/PDF', icon: FileSpreadsheet, category: 'Analitik' },
  { id: 'maps', label: 'Integrasi Google Maps & Tracking Lokasi', icon: MapPin, category: 'Logistik' },
  { id: 'realtime', label: 'Data Realtime & Sinkronisasi Multi-Device', icon: Zap, category: 'Performa' },
];

const businessScales = [
  { id: 'umkm', label: 'UMKM / Go Digital', desc: 'Solusi praktis siap pakai' },
  { id: 'sekolah', label: 'Sekolah & Organisasi', desc: 'Sistem komunitas terstruktur' },
  { id: 'startup', label: 'Startup / Validasi MVP', desc: 'Cepat rilis ke pasar' },
  { id: 'enterprise', label: 'Perusahaan / Korporat', desc: 'Custom workflow skala penuh' },
];

export default function ProjectCostEstimatorWidget() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('mobile');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth', 'payment', 'report']);
  const [selectedScale, setSelectedScale] = useState<string>('umkm');
  const [businessTypeInput, setBusinessTypeInput] = useState<string>('Retail / F&B / Jasa');

  const currentCategory = projectCategories.find((c) => c.id === selectedCategoryId) || projectCategories[0];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      if (selectedFeatures.length > 1) {
        setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
      }
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const generateWhatsAppUrl = () => {
    const scaleLabel = businessScales.find((b) => b.id === selectedScale)?.label || selectedScale;
    const featuresList = selectedFeatures
      .map((fId) => featureOptions.find((f) => f.id === fId)?.label)
      .filter(Boolean)
      .join(', ');

    const message = `Halo Naltech, saya tertarik membuat aplikasi/website.
- Jenis Usaha: ${businessTypeInput} (${scaleLabel})
- Kategori Proyek: ${currentCategory.name}
- Fitur yang Dibutuhkan: ${featuresList}

Saya ingin berkonsultasi mengenai estimasi waktu dan biaya pengembangannya. Terima kasih!`;

    return `https://wa.me/6281573550017?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="nds-calc-card">
      <div className="nds-calc-grid">
        {/* Left: Input Selection Controls */}
        <div className="nds-calc-controls">
          <div className="nds-calc-badge">
            <Sparkles size={14} className="nds-icon-blue" />
            <span>INTERACTIVE SCOPE &amp; TECH ESTIMATOR</span>
          </div>

          <h3>Konsultasikan Kebutuhan Sistem Anda</h3>
          <p className="nds-calc-sub">
            Pilih kategori platform dan modul fitur yang Anda perlukan untuk melihat rekomendasi arsitektur teknologi dan perkiraan timeline pengembangannya.
          </p>

          {/* 1. Category Selector */}
          <div className="nds-form-block">
            <label className="nds-block-label">1. Pilih Kategori Proyek:</label>
            <div className="nds-category-btns">
              {projectCategories.map((cat) => {
                const isSelected = cat.id === selectedCategoryId;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`nds-cat-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedCategoryId(cat.id)}
                  >
                    <Icon size={16} className={isSelected ? 'nds-icon-blue' : 'nds-icon-dim'} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Feature Modules Selector */}
          <div className="nds-form-block">
            <label className="nds-block-label">2. Pilih Modul &amp; Fitur yang Diperlukan:</label>
            <div className="nds-features-grid">
              {featureOptions.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                const Icon = feat.icon;
                return (
                  <button
                    key={feat.id}
                    type="button"
                    className={`nds-feat-card ${isChecked ? 'active' : ''}`}
                    onClick={() => toggleFeature(feat.id)}
                  >
                    <div className="nds-feat-header">
                      <span className="nds-feat-cat">{feat.category}</span>
                      <div className="nds-feat-check">
                        {isChecked ? <CheckCircle2 size={16} className="nds-icon-blue" /> : <div className="nds-check-circle" />}
                      </div>
                    </div>
                    <div className="nds-feat-content">
                      <Icon size={16} className={isChecked ? 'nds-icon-blue' : 'nds-icon-dim'} />
                      <span>{feat.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Business Scale & Industry Type */}
          <div className="nds-two-cols">
            <div className="nds-form-block">
              <label className="nds-block-label">3. Target Skala Penggunaan:</label>
              <div className="nds-scale-pills">
                {businessScales.map((scale) => {
                  const isSelected = scale.id === selectedScale;
                  return (
                    <button
                      key={scale.id}
                      type="button"
                      className={`nds-scale-pill ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedScale(scale.id)}
                    >
                      <strong>{scale.label}</strong>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="nds-form-block">
              <label className="nds-block-label">4. Bidang / Jenis Usaha:</label>
              <input
                type="text"
                placeholder="Contoh: Toko Kasir, Sekolah, Klinik, Fintech"
                value={businessTypeInput}
                onChange={(e) => setBusinessTypeInput(e.target.value)}
                className="nds-input"
              />
            </div>
          </div>
        </div>

        {/* Right: Architecture Recommendation & WhatsApp Direct Funnel */}
        <div className="nds-calc-output">
          <div className="nds-output-top">
            <span className="nds-output-kicker">REKOMENDASI ARSITEKTUR NALTECH</span>
            <h4>{currentCategory.name}</h4>

            <div className="nds-timeline-box">
              <Clock size={16} className="nds-icon-cyan" />
              <div>
                <small>Estimasi Timeline Pengerjaan:</small>
                <strong>{currentCategory.baseTimeline}</strong>
              </div>
            </div>
          </div>

          <div className="nds-tech-stack-section">
            <label>Rekomendasi Tech Stack Modern:</label>
            <div className="nds-stack-pills">
              {currentCategory.techStack.map((tech, idx) => (
                <span key={idx} className="nds-stack-tag">
                  <Database size={12} className="nds-icon-cyan" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="nds-scope-deliverables">
            <label>Sudah Termasuk dalam Lingkup:</label>
            <ul className="nds-deliverables-list">
              <li>
                <CheckCircle2 size={14} className="nds-icon-green" />
                <span>Desain UI/UX Khusus (Figma Prototype)</span>
              </li>
              <li>
                <CheckCircle2 size={14} className="nds-icon-green" />
                <span>Backend API &amp; Database Terstruktur</span>
              </li>
              <li>
                <CheckCircle2 size={14} className="nds-icon-green" />
                <span>{selectedFeatures.length} Modul Fitur Pilihan Terintegrasi</span>
              </li>
              <li>
                <CheckCircle2 size={14} className="nds-icon-green" />
                <span>Garansi Maintenance &amp; Bug Fixing Pasca-Rilis</span>
              </li>
            </ul>
          </div>

          <div className="nds-output-action-box">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="nds-btn-wa-consult"
            >
              <MessageCircle size={17} />
              <span>Konsultasi Project Saya via WhatsApp</span>
              <ArrowUpRight size={17} />
            </a>
            <small className="nds-consult-note">
              <ShieldCheck size={13} className="nds-icon-cyan" />
              <span>Gratis sesi konsultasi &amp; pemetaan kebutuhan tanpa komitmen awal.</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
