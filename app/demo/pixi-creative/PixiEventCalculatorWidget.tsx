'use client';

import React, { useState, useMemo } from 'react';
import {
  Users,
  MapPin,
  Sparkles,
  Calculator,
  CheckCircle2,
  Clock,
  Send,
  ShieldCheck,
  Award,
} from 'lucide-react';

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
    desc: 'Family gathering, bonding kantor, outbound tematik, & malam keakraban / gala dinner.',
    baseCostPerPax: 420000,
    minPax: 40,
  },
  {
    id: 'company-trip',
    name: 'Private & Company Trip',
    badge: 'Tour & Travel',
    desc: 'Wisata instansi, perjalanan dinas, study tour, incentive trip destinasi nusantara.',
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
    name: 'Fasilitator Outbound & Game Master Bersertifikat',
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
  const [pax, setPax] = useState<number>(80);
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

  // Calculations
  const baseTotal = useMemo(() => {
    const raw = currentType.baseCostPerPax * pax * currentDuration.factor * currentDest.multiplier;
    return raw;
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
    <div className="w-full bg-[#0d1322] border border-slate-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl text-slate-100 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Widget */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Event & Budget Simulator
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Simulasi Anggaran & Rencana Acara
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mt-1">
            Hitung estimasi kebutuhan MICE, Gathering, Company Trip, atau Event Organizer Anda secara transparan.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-800/60 px-4 py-2 rounded-xl border border-slate-700/50 self-start md:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Gratis Konsultasi & Proposal Resmi</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Left Config Panel (7 cols) */}
        <div className="lg:col-span-7 space-y-7">
          {/* Step 1: Jenis Acara */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500 text-white inline-flex items-center justify-center text-xs font-black">1</span>
                PILIH JENIS LAYANAN ACARA
              </span>
              <span className="text-[11px] font-normal text-slate-500">Pilih salah satu</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EVENT_TYPES.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 relative ${
                      isSelected
                        ? 'bg-gradient-to-br from-orange-500/20 to-slate-800/90 border-orange-500 ring-1 ring-orange-500/50 shadow-lg shadow-orange-500/10'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-white text-sm leading-snug">
                        {type.name}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      )}
                    </div>
                    <span className="inline-block px-2 py-0.5 mt-1.5 rounded text-[10px] font-semibold bg-slate-800 text-orange-300 border border-slate-700">
                      {type.badge}
                    </span>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {type.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Jumlah Peserta Slider */}
          <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500 text-white inline-flex items-center justify-center text-xs font-black">2</span>
                ESTIMASI JUMLAH PESERTA
              </label>
              <div className="flex items-baseline gap-1 bg-orange-500/15 text-orange-400 px-3 py-1 rounded-xl border border-orange-500/30">
                <Users className="w-4 h-4" />
                <span className="text-lg font-black text-white">{pax}</span>
                <span className="text-xs font-medium text-orange-300">Pax</span>
              </div>
            </div>
            <input
              type="range"
              min="20"
              max="600"
              step="5"
              value={pax}
              onChange={(e) => setPax(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-medium">
              <span>20 Pax (Intimate)</span>
              <span>100 Pax (Medium)</span>
              <span>300 Pax (Large)</span>
              <span>600+ Pax (Mega Event)</span>
            </div>
          </div>

          {/* Step 3: Lokasi & Durasi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500 text-white inline-flex items-center justify-center text-xs font-black">3</span>
                LOKASI / DESTINASI
              </label>
              <div className="relative">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  aria-label="Pilih Lokasi atau Destinasi Acara"
                  className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 appearance-none font-medium"
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
                <MapPin className="w-4 h-4 text-slate-500 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500 text-white inline-flex items-center justify-center text-xs font-black">4</span>
                DURASI KEGIATAN
              </label>
              <div className="relative">
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  aria-label="Pilih Durasi Kegiatan Acara"
                  className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 appearance-none font-medium"
                >
                  {DURATIONS.map((dur) => (
                    <option key={dur.id} value={dur.id}>
                      {dur.name}
                    </option>
                  ))}
                </select>
                <Clock className="w-4 h-4 text-slate-500 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Step 4: Add-on & Fasilitas */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white inline-flex items-center justify-center text-xs font-black">5</span>
              KEBUTUHAN FASILITAS & ADD-ON SPESIFIK
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ADDON_SERVICES.map((addon) => {
                const checked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      checked
                        ? 'bg-orange-500/10 border-orange-500/60 text-slate-100'
                        : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        checked
                          ? 'bg-orange-500 border-orange-500 text-white'
                          : 'border-slate-700 bg-slate-800'
                      }`}
                    >
                      {checked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-white leading-tight">
                        {addon.name}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {addon.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Summary & WhatsApp Trigger (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-7 rounded-3xl border border-slate-800 relative">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-orange-400" />
                RINGKASAN SIMULASI
              </span>
              <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                {pax} Pax • {currentDuration.days >= 1 ? `${currentDuration.days} Hari` : 'Half-day'}
              </span>
            </div>

            {/* Price Box */}
            <div className="my-6 p-5 rounded-2xl bg-gradient-to-br from-orange-500/15 via-slate-800/50 to-slate-900 border border-orange-500/30">
              <div className="text-xs text-orange-300 font-semibold tracking-wide">
                Perkiraan Nilai Investasi Acara
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mt-1 tracking-tight">
                {formatRupiah(grandTotal)}
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/80">
                <span>Rata-rata per Peserta:</span>
                <span className="font-bold text-orange-400 text-sm">
                  {formatRupiah(perPaxEstimate)} <span className="text-[11px] font-normal text-slate-400">/pax</span>
                </span>
              </div>
            </div>

            {/* Checklist of what is included */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="font-semibold text-slate-200 mb-1 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Paket Mencakup Standar Pixi Creative:
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Penyusunan konsep, timeline, & minute-by-minute rundown</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Tim Crew & Field Coordinator On-Site di Hari H</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Sourcing & negosiasi venue / akomodasi terbaik</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Standard audio sound system, mic wireless, & teknisi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Manajemen registrasi tamu & hospitality koordinasi</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="pt-2 border-t border-slate-800/80 text-orange-300">
                  + {selectedAddons.length} Fitur & Layanan Tambahan Terpilih
                </div>
              )}
            </div>

            {/* Optional User Identifiers */}
            <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Nama Anda (Opsional):
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Bpk. Dimas / Ibu Rina"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-xs text-white rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Instansi / Perusahaan (Opsional):
                </label>
                <input
                  type="text"
                  placeholder="Contoh: PT Nusantara / Bappeda / Komunitas"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-xs text-white rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
          </div>

          {/* CTA Action WhatsApp */}
          <div className="mt-6 pt-4 border-t border-slate-800">
            <a
              href={`https://wa.me/6285842345332?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] text-white font-bold text-sm shadow-xl shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <Send className="w-4 h-4 shrink-0" />
              <span>Kirim Rencana ke WhatsApp (+62 8584 234 5332)</span>
            </a>
            <p className="text-[11px] text-slate-500 text-center mt-2.5">
              *Estimasi bersifat indikatif. Tim Pixi Creative akan mengirimkan proposal detail & penyesuaian budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
