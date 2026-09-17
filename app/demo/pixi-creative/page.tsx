import type { Metadata } from 'next';
import Link from 'next/link';
import './pixi.css';
import PixiEventCalculatorWidget from './PixiEventCalculatorWidget';
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  Award,
  BookOpen,
  Layers,
  ChevronRight,
  Phone,
  Mail,
  Building2,
  Star,
  FolderKanban,
  Check,
  Quote,
  HelpCircle,
  Plane,
  Calculator,
} from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://studio.naltech.web.id';

export const metadata: Metadata = {
  title: 'PIXI CREATIVE — Event Organizer, MICE & Company Trip Planner',
  description: 'Pixi Creative adalah penyedia layanan event organizer, MICE, corporate gathering, private & company trip, serta event planner profesional di Yogyakarta dan seluruh Indonesia.',
  alternates: {
    canonical: '/demo/pixi-creative',
  },
  openGraph: {
    title: 'PIXI CREATIVE — Event Organizer, MICE & Company Trip Planner',
    description: 'Kami Tidak Sekadar Merancang Acara, Kami Menciptakan Kenangan Yang Akan Selalu Dikenang. Solusi Acara Lengkap & Profesional.',
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'PIXI CREATIVE Event Planner' }],
  },
};

const pixiStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pixi Creative (Event Planner & Organizer)',
    description: 'Penyedia jasa Event Organizer, MICE, Corporate Gathering, dan Travel Planner profesional.',
    url: `${siteUrl}/demo/pixi-creative`,
    telephone: '+6285842345332',
    email: 'pixicreative01@gmail.com',
    priceRange: 'Rp5.000.000 - Rp200.000.000+',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Yogyakarta',
      addressCountry: 'ID',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Naltech Studio',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: `${siteUrl}/#work`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pixi Creative',
        item: `${siteUrl}/demo/pixi-creative`,
      },
    ],
  },
];

const mainServices = [
  {
    id: 'mice',
    title: 'MICE (Meeting, Incentive, Conference & Exhibition)',
    shortDesc: 'Solusi terintegrasi untuk rapat kerja, konferensi skala nasional, simposium, pameran industri, dan program incentive.',
    icon: Building2,
    badge: 'Kementerian & Korporat',
    features: [
      'Penyusunan format agenda, timeline, & protokoler resmi',
      'Kurasi venue & convention center berstandar bintang',
      'Manajemen registrasi peserta, badge digital, & hospitality',
      'Penyediaan audio visual, LED videotron, & backdrop panggung',
      'Akomodasi, transportasi VIP, & pengawalan perizinan lengkap',
    ],
    highlight: 'Dipercaya untuk agenda kementerian & organisasi profesional.',
  },
  {
    id: 'event-organizer',
    title: 'Event Organizer (EO)',
    shortDesc: 'Pengelolaan eksekusi acara dari pra-event hingga evaluasi lapangan dengan koordinasi disiplin dan tim lapangan berpengalaman.',
    icon: Sparkles,
    badge: 'Full Operational On-Site',
    features: [
      'Manajemen panggung & minute-by-minute rundown acara',
      'Koordinasi multi-vendor (audio, lighting, catering, dekorasi)',
      'Pengadaan MC profesional, artis / band, & live talent',
      'Dokumentasi cinematic photo, aftermovie video 4K & drone',
      'Tim standby penanganan kendala & protokol darurat',
    ],
    highlight: 'Fokus pada kelancaran teknis tanpa celah di hari H.',
  },
  {
    id: 'company-trip',
    title: 'Private & Company Trip (Tour & Travel)',
    shortDesc: 'Pengelolaan perjalanan dinas, employee gathering, family outing, study tour, dan incentive trip ke destinasi terbaik nusantara.',
    icon: Plane,
    badge: 'Tour & Travel Manajemen',
    features: [
      'Itinerary fleksibel & personal sesuai kebutuhan instansi',
      'Armada transportasi pariwisata executive (Bus, HiAce, Alphard)',
      'Booking hotel & resort terpilih dengan rate corporate terbaik',
      'Fasilitator outbound, team building trainer, & fun games',
      'Manajemen konsumsi, kuliner khas lokal, & tiket wisata',
    ],
    highlight: 'Bukan sekadar wisata, tapi momen mempererat ikatan tim.',
  },
  {
    id: 'event-planner',
    title: 'Event Planner (Strategic Planning)',
    shortDesc: 'Pendampingan konseptual dari perumusan ide, moodboard kreatif, pemetaan alokasi anggaran, hingga kurasi seluruh kebutuhan.',
    icon: BookOpen,
    badge: 'Creative & Concept Strategy',
    features: [
      'Brainstorming konsep unik & storytelling tema acara',
      'Alokasi anggaran efisien & negosiasi harga vendor rekanan',
      'Desain visual identitas (branding, backdrop, merchandise)',
      'Timeline persiapan terstruktur & sesi meeting berkala',
      'Konsultasi intensif bersama PIC khusus yang responsif',
    ],
    highlight: 'Mengubah ide abstrak menjadi rencana matang yang realistis.',
  },
];

const pillarsOfExcellence = [
  {
    number: '01',
    title: 'Pengalaman & Profesionalisme',
    desc: 'Telah teruji menangani ratusan event kementerian, BUMN, instansi kesehatan, dan korporat swasta dengan standar operasional yang disiplin.',
  },
  {
    number: '02',
    title: 'Kreativitas & Inovasi',
    desc: 'Setiap acara dirancang memiliki karakter dan cerita yang unik. Kami menyajikan konsep segar yang membuat audiens terinspirasi dan antusias.',
  },
  {
    number: '03',
    title: 'Manajemen yang Efisien',
    desc: 'Pengelolaan anggaran yang transparan dan optimal, meminimalkan pemborosan tanpa mengorbankan kualitas maupun estetika acara.',
  },
  {
    number: '04',
    title: 'Kualitas Layanan Prima',
    desc: 'Mulai dari komunikasi pra-acara yang cepat hingga keramahan tim kru lapangan, kami menjunjung tinggi keramahan dan hospitality.',
  },
  {
    number: '05',
    title: 'Detail-Oriented & Terstruktur',
    desc: 'Rundown minute-by-minute, checklist perlengkapan, serta koordinasi teknis yang diperiksa berlapis agar tidak ada yang terlewat.',
  },
  {
    number: '06',
    title: 'Kesiapan Menghadapi Masalah',
    desc: 'Kami selalu menyiapkan SOP contingency plan (rencana cadangan) untuk cuaca, teknis audio-visual, hingga perubahan alur mendadak.',
  },
  {
    number: '07',
    title: 'Pendekatan Personal & Fleksibel',
    desc: 'Kami mendengar kebutuhan spesifik Anda dan menyesuaikan format acara sesuai kultur organisasi serta preferensi peserta.',
  },
  {
    number: '08',
    title: 'Harga yang Bersaing & Terbuka',
    desc: 'Penawaran proposal yang jelas, itemized, dan fleksibel disesuaikan dengan pagu anggaran instansi maupun perusahaan Anda.',
  },
];

const portfolioItems = [
  {
    title: 'Sosialisasi Kredit Program Perumahan (KPP) & FLPP',
    category: 'MICE / Acara Kementerian',
    location: 'Yogyakarta',
    date: 'November 2025',
    desc: 'Penyelenggaraan acara penting sosialisasi FLPP & KPP yang dihadiri langsung oleh Menteri Perumahan dan Kawasan Permukiman (PKP), Bapak Maruarar Sirait.',
    tag: 'Menteri PKP RI',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
  },
  {
    title: 'Penggalangan Komitmen Puskesmas Kotagede',
    category: 'Institutional Workshop & Gathering',
    location: 'Kotagede, Yogyakarta',
    date: 'Mei 2026',
    desc: 'Fasilitasi agenda penggalangan komitmen pelayanan kesehatan terpadu, team motivation session, dan penandatanganan pakta integritas.',
    tag: 'Dinas Kesehatan / Puskesmas',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  },
  {
    title: 'Company Outing & Gathering Puskesmas Ngaglik 2',
    category: 'Private & Company Trip',
    location: 'Yogyakarta & Destinasi Wisata',
    date: 'Mei 2026',
    desc: 'Konsep "Small Group, Big Fun" dengan rangkaian fun outbound, team building, kuliner nusantara, dan dokumentasi penuh kebersamaan.',
    tag: 'Gathering & Outbound',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  },
  {
    title: 'Lokakarya Nasional Pembaruan Hukum Pidana',
    category: 'MICE / Seminar Nasional',
    location: 'Hotel Convention Hall',
    date: 'Februari 2026',
    desc: 'Langkah strategis dalam menyosialisasikan pembaruan hukum pidana nasional yang dihadiri praktisi hukum, akademisi, dan instansi terkait.',
    tag: 'Simposium Hukum',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  },
  {
    title: 'Monitoring Progress Pelaksanaan BSPS',
    category: 'Monitoring & Government Evaluation',
    location: 'Kabupaten & Wilayah Kerja',
    date: 'November 2025',
    desc: 'Rapat koordinasi dan monitoring evaluasi progres Bantuan Stimulan Perumahan Swadaya bersama tim teknis dan jajaran dinas terkait.',
    tag: 'Program BSPS',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  },
  {
    title: 'Incentive Trip & Leadership Outbound Korporat',
    category: 'Incentive & Corporate Outing',
    location: 'Bali & Yogyakarta',
    date: 'Quarterly Event',
    desc: 'Program reward & leadership retreat dengan rangkaian gala dinner eksklusif, jeep adventure, dan workshop peningkatan performa tim.',
    tag: 'Corporate Retreat',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  },
];

const testimonials = [
  {
    name: 'Biro Umum & Protokol Kementerian',
    role: 'Penyelenggara Acara Tingkat Nasional',
    text: 'Koordinasi Pixi Creative sangat sigap dan detail. Mulai dari protokoler menteri, persiapan audio visual panggung, hingga alur tamu berjalan sangat rapi dan khidmat tanpa kendala teknis.',
    rating: 5,
  },
  {
    name: 'Puskesmas Kotagede Yogyakarta',
    role: 'Penggalangan Komitmen & Workshop',
    text: 'Acara penggalangan komitmen kami menjadi sangat berkesan. Rundown dikemas interaktif sehingga seluruh staf bersemangat dan pesan utama tersampaikan dengan sangat baik.',
    rating: 5,
  },
  {
    name: 'Puskesmas Ngaglik 2 Yogyakarta',
    role: 'Family & Employee Gathering',
    text: 'Kru Pixi Creative sangat ramah, sigap membantu kebutuhan peserta dari yang muda hingga senior. Games outbound seru dan dokumentasinya estetik banget!',
    rating: 5,
  },
  {
    name: 'Manager HR & General Affairs Perusahaan Swasta',
    role: 'Corporate Trip & Annual Meeting',
    text: 'Sangat terbantu dengan sistem manajemen anggaran yang transparan dari Pixi. Semua fasilitas hotel, transportasi, dan panggung meeting sesuai ekspektasi pimpinan.',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'Berapa lama waktu ideal untuk merencanakan acara bersama Pixi Creative?',
    a: 'Untuk acara MICE, gathering besar, atau company trip (100+ pax), waktu ideal adalah 3–8 minggu sebelum hari H. Namun untuk acara rapat kerja, seminar singkat, atau gathering intimate, kami juga siap melayani fast-track planning dalam waktu 1–2 minggu.',
  },
  {
    q: 'Apakah anggaran acara bisa disesuaikan dengan pagu anggaran kantor / instansi kami?',
    a: 'Tentu. Tim Pixi Creative sangat fleksibel. Kami dapat menyusun item proposal secara modular sehingga alokasi venue, konsumsi, produksi, maupun hiburan dapat disesuaikan secara pas dengan plafon anggaran yang telah disetujui instansi Anda.',
  },
  {
    q: 'Wilayah mana saja yang dijangkau oleh layanan Pixi Creative?',
    a: 'Kantor dan basis operasional utama kami berada di Yogyakarta, namun kami telah berpengalaman melayani acara MICE, pameran, dan company trip di berbagai kota di seluruh Indonesia, termasuk Bali, Bandung, Jakarta, Malang, Lombok, Labuan Bajo, dan kota-kota lainnya.',
  },
  {
    q: 'Bagaimana penanganan Pixi Creative bila terjadi kendala cuaca atau teknis di lapangan?',
    a: 'Setiap event kami lengkapi dengan SOP Contingency Plan. Untuk outdoor trip/outbound, kami selalu menyiapkan venue alternatif indoor, genset cadangan untuk sound system, perlengkapan medis P3K, serta tim teknisi standby yang siap bergerak cepat.',
  },
  {
    q: 'Bagaimana cara berkonsultasi dan mendapatkan penawaran proposal resmi?',
    a: 'Anda dapat langsung menggunakan simulator anggaran interaktif di atas atau menghubungi kami via WhatsApp di +62 8584 234 5332 atau email pixicreative01@gmail.com. Konsultasi konsep dan pembuatan draft proposal awal 100% GRATIS.',
  },
];

export default function PixiCreativePage() {
  const whatsappUrl = 'https://wa.me/6285842345332?text=Halo%20Pixi%20Creative%2C%20saya%20ingin%20konsultasi%20mengenai%20penyelenggaraan%20acara%20kami.';

  return (
    <div className="pixi-page min-h-screen bg-slate-950 text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pixiStructuredData) }}
      />

      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-50 pixi-nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors border border-slate-700/50"
            >
              <span>← Naltech Showcase</span>
            </Link>
            <div className="h-4 w-px bg-slate-800 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-400 flex items-center justify-center font-black text-white text-base shadow-lg shadow-orange-500/25">
                P
              </div>
              <span className="font-extrabold text-white tracking-wider text-base sm:text-lg">
                PIXI <span className="text-orange-500 font-normal">CREATIVE</span>
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-300">
            <a href="#beranda" className="hover:text-orange-400 transition-colors">Beranda</a>
            <a href="#tentang-kami" className="hover:text-orange-400 transition-colors">Tentang Kami</a>
            <a href="#layanan" className="hover:text-orange-400 transition-colors">Layanan</a>
            <a href="#simulasi" className="hover:text-orange-400 transition-colors text-orange-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Simulasi Biaya
            </a>
            <a href="#portofolio" className="hover:text-orange-400 transition-colors">Portofolio</a>
            <a href="#keunggulan" className="hover:text-orange-400 transition-colors">Keunggulan</a>
            <a href="#kontak" className="hover:text-orange-400 transition-colors">Kontak</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Konsultasi Gratis</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="beranda" className="relative pt-16 pb-24 sm:pt-24 sm:pb-32 pixi-hero-bg overflow-hidden border-b border-slate-800">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 pixi-dot-pattern-dark opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full pixi-badge-dark text-xs sm:text-sm font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pixi-pulse-indicator" />
              <span>Event Organizer, MICE & Travel Planner Profesional</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              &quot;Kami Tidak Sekadar Merancang Acara, <br className="hidden sm:inline" />
              <span className="pixi-shimmer-text">Kami Menciptakan Kenangan</span> Yang Akan Selalu Dikenang&quot;
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Solusi acara yang lengkap, terstruktur, dan profesional bersama <strong className="text-white font-semibold">Pixi Creative</strong>. Menghadirkan solusi kreatif untuk kebutuhan MICE, meeting kementerian, corporate gathering, dan perjalanan wisata istimewa di seluruh Indonesia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#simulasi"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm sm:text-base shadow-xl shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-5 h-5" />
                <span>Simulasi Anggaran & Rencana Acara</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 font-bold text-sm sm:text-base border border-slate-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Diskusi Langsung via WhatsApp</span>
              </a>
            </div>

            {/* Proof Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-12 border-t border-slate-800/80 mt-12 text-left">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-orange-400 font-mono">150+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Acara & MICE Sukses</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">100+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Instansi & Korporat Klien</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">99.4%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Tingkat Kepuasan Klien</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-sky-400 font-mono">100%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Dedicated Field PIC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="tentang-kami" className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                TENTANG KAMI
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Mewujudkan Ide Menjadi Pengalaman Luar Biasa dan Tak Terlupakan
              </h2>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-white font-semibold">Pixi Creative</strong> lahir dari dedikasi dan pengalaman bertahun-tahun di industri event organizer, MICE, serta hospitality & travel management. Kami hadir sebagai partner strategis yang siap mendampingi kebutuhan meeting, training, corporate gathering, seminar kementerian, hingga agenda perjalanan wisata instansi.
                </p>
                <p>
                  Kami meyakini bahwa setiap acara memiliki cerita dan tujuan yang unik. Oleh karena itu, pendekatan kami selalu berbasis kebutuhan spesifik klien—mengombinasikan konsep visual kreatif, efisiensi pengelolaan anggaran, serta eksekusi operasional yang presisi di lapangan.
                </p>
              </div>

              {/* Tagline highlight box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-950/40 via-slate-900 to-slate-900 border-l-4 border-orange-500 border-y border-r border-slate-800">
                <p className="text-orange-300 font-semibold italic text-sm sm:text-base">
                  &quot;Creating Memorable Experiences, Delivering Exceptional Events.&quot;
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  — Filosofi Utama Tim Pixi Creative dalam Setiap Penyelenggaraan Acara
                </p>
              </div>

              {/* Core Attributes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Tim Berpengalaman</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Kru Lapangan Sigap</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Jaringan Venue Luas</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Rundown Akurat</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Anggaran Fleksibel</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Respon Cepat 24/7</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      PIXI CREATIVE REPUTATION
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      Verified EO Partner
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      Dipercaya Ratusan Instansi Pemerintah, Korporat & Komunitas
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Kami bangga telah dipercaya oleh berbagai kementerian negara, dinas kesehatan, rumah sakit, puskesmas, BUMN, hingga perusahaan swasta terkemuka untuk menyelenggarakan acara formal maupun gathering keakraban.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-slate-300">Siap Menyelenggarakan:</div>
                    <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                      <li>Konferensi & Rapat Kerja Kementerian</li>
                      <li>Sosialisasi Program Nasional & Lokakarya</li>
                      <li>Family Gathering & Outbound Team Building</li>
                      <li>Incentive Tour & Perjalanan Wisata Kelompok</li>
                    </ul>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm transition-colors text-center"
                  >
                    <span>Hubungi PIC Kami Sekarang</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section id="layanan" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              LAYANAN UTAMA KAMI
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Solusi Acara Komprehensif Sesuai Kebutuhan Anda
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Dari konsep strategis, koordinasi operasional di lapangan, hingga paket wisata terpadu—Pixi Creative siap mengeksekusi setiap detail acara Anda.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="p-7 sm:p-9 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 pixi-card-dark-hover flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {srv.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {srv.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 space-y-2.5">
                      <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Cakupan Layanan:
                      </div>
                      <ul className="space-y-2">
                        {srv.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-orange-300 font-medium italic">
                      {srv.highlight}
                    </span>
                    <a
                      href={`https://wa.me/6285842345332?text=Halo%20Pixi%20Creative%2C%20saya%20tertarik%20konsultasi%20mengenai%20layanan%20${encodeURIComponent(srv.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-800 hover:bg-orange-500 hover:text-white px-3.5 py-2 rounded-xl transition-colors shrink-0"
                    >
                      <span>Konsultasi</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SIMULATOR SECTION */}
      <section id="simulasi" className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              KALKULATOR ACARA INTERAKTIF
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Rencanakan Acara & Simulasi Anggaran Anda
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Sesuaikan jenis acara, estimasi jumlah peserta, lokasi, dan opsi fasilitas. Anda dapat langsung mengirimkan rancangan tersebut ke tim Pixi Creative via WhatsApp.
            </p>
          </div>

          {/* Embedded Widget */}
          <PixiEventCalculatorWidget />
        </div>
      </section>

      {/* PORTFOLIO & PAST TRACK RECORD SECTION */}
      <section id="portofolio" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <FolderKanban className="w-3.5 h-3.5" />
                PORTOFOLIO & REKAM JEJAK
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Dokumentasi Acara & Kepercayaan Klien
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Bukti nyata komitmen Pixi Creative dalam menyukseskan agenda resmi instansi kementerian, dinas kesehatan, hingga gathering perusahaan.
              </p>
            </div>
            <div className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl self-start md:self-auto font-medium">
              ✨ Telah menangani event dari puluhan hingga ratusan peserta
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 pixi-card-dark-hover flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${item.badgeColor}`}>
                      {item.tag}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {item.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{item.location}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">{item.category}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Event Terlaksana Sukses
                  </span>
                  <a
                    href={`https://wa.me/6285842345332?text=Halo%20Pixi%20Creative%2C%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20portofolio%20${encodeURIComponent(item.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
                  >
                    <span>Detail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 PILLARS OF EXCELLENCE (KENAPA HARUS PILIH KAMI) */}
      <section id="keunggulan" className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              KENAPA HARUS PILIH KAMI?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              8 Keunggulan Utama Pixi Creative
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Kami memberikan kepastian kualitas, ketepatan waktu, dan kenyamanan menyeluruh bagi para penanggung jawab acara.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillarsOfExcellence.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/30 transition-all space-y-3"
              >
                <div className="text-2xl font-black font-mono text-orange-400">
                  {item.number}
                </div>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 sm:py-28 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5" />
              TESTIMONI & REVIEW KLIEN
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Temukan Pendapat Klien Tentang Layanan Kami
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Kepuasan dan kenyamanan klien adalah prioritas tertinggi yang kami jaga di setiap penyelenggaraan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between relative"
              >
                <Quote className="w-8 h-8 text-orange-500/20 absolute top-6 right-6 pointer-events-none" />
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed italic">
                    &quot;{t.text}&quot;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-orange-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-slate-400 text-sm">
              Informasi seputar konsultasi, sistem kerja, dan penawaran anggaran acara bersama Pixi Creative.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 [&_summary::-webkit-details-marker]:hidden open:border-orange-500/40 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-white text-sm sm:text-base select-none gap-4">
                  <span>{faq.q}</span>
                  <span className="w-6 h-6 rounded-full bg-slate-800 group-open:bg-orange-500 flex items-center justify-center text-slate-400 group-open:text-white shrink-0 transition-colors">
                    <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90" />
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4 pt-3 border-t border-slate-800/80">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA & CONTACT SECTION */}
      <section id="kontak" className="py-20 sm:py-28 bg-gradient-to-b from-[#090d16] to-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/40 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  YOUR EVENT, OUR MASTERPIECE
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Siap Menciptakan Acara yang Berkesan & Spektakuler?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Diskusikan konsep, kebutuhan venue, hingga estimasi anggaran acara Anda bersama tim konsultan Pixi Creative. Kami siap mengirimkan draft proposal resmi secara cepat dan transparan.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat WhatsApp (+62 8584 234 5332)</span>
                  </a>
                  <a
                    href="mailto:pixicreative01@gmail.com"
                    className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm sm:text-base border border-slate-700 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-orange-400" />
                    <span>Kirim Email Resmi</span>
                  </a>
                </div>
              </div>

              {/* Direct Info Card */}
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800">
                  INFORMASI KONTAK RESMI
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-slate-400 text-xs">Call / Message / WhatsApp:</div>
                      <div className="font-bold text-white">+62 8584 234 5332</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-slate-400 text-xs">Official Email:</div>
                      <div className="font-bold text-white">pixicreative01@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-slate-400 text-xs">Wilayah Operasional:</div>
                      <div className="font-bold text-white">Yogyakarta & Seluruh Indonesia</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[11px] text-orange-300">
                  ⚡ <strong>Fast Response</strong>: Tim kami merespons konsultasi setiap hari pukul 08.00 – 21.00 WIB.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center font-black text-white text-sm">
                  P
                </div>
                <span className="font-black text-white text-base tracking-wider">
                  PIXI <span className="text-orange-500 font-normal">CREATIVE</span>
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Event Organizer (EO), MICE, dan Tour & Travel Planner profesional. Mewujudkan acara terencana, berkesan, dan bernilai tinggi bagi instansi, perusahaan, dan komunitas Anda.
              </p>
            </div>

            <div>
              <div className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-xs">
                Layanan Utama
              </div>
              <ul className="space-y-2">
                <li><a href="#layanan" className="hover:text-orange-400 transition-colors">MICE (Meeting & Conference)</a></li>
                <li><a href="#layanan" className="hover:text-orange-400 transition-colors">Event Organizer (EO)</a></li>
                <li><a href="#layanan" className="hover:text-orange-400 transition-colors">Private & Company Trip</a></li>
                <li><a href="#layanan" className="hover:text-orange-400 transition-colors">Event Planner & Strategy</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-xs">
                Navigasi Cepat
              </div>
              <ul className="space-y-2">
                <li><a href="#beranda" className="hover:text-orange-400 transition-colors">Beranda</a></li>
                <li><a href="#tentang-kami" className="hover:text-orange-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#simulasi" className="hover:text-orange-400 transition-colors">Simulasi Biaya</a></li>
                <li><a href="#portofolio" className="hover:text-orange-400 transition-colors">Portofolio</a></li>
                <li><a href="#kontak" className="hover:text-orange-400 transition-colors">Hubungi Kami</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © {new Date().getFullYear()} PIXI CREATIVE. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Naltech Studio Showcase
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING QUICK ACTION BUTTON */}
      <aside aria-label="Aksi Cepat WhatsApp" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-2xl shadow-emerald-950/60 transition-all transform hover:scale-105 active:scale-95"
        >
          <span className="w-2 h-2 rounded-full bg-white pixi-pulse-indicator" />
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Tanya Pixi Creative (WhatsApp)</span>
        </a>
      </aside>
    </div>
  );
}
