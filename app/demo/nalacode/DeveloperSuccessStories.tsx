'use client';

import { useState } from 'react';
import {
  TrendingUp,
  Star,
  CheckCircle2,
  Building2,
  Briefcase,
  ArrowUpRight,
  Sparkles,
  Award,
  DollarSign,
  MessageCircle,
  Clock,
  User,
} from 'lucide-react';

interface SuccessStory {
  id: string;
  name: string;
  avatar: string;
  category: 'career-switcher' | 'fresh-grad' | 'remote-worker';
  previousRole: string;
  currentRole: string;
  company: string;
  salaryHike: string;
  learningDuration: string;
  storyQuote: string;
  keySkills: string[];
}

const successStories: SuccessStory[] = [
  {
    id: 'bayu-goto',
    name: 'Bayu Wicaksono',
    avatar: '/code/story-career-switch.jpg',
    category: 'career-switcher',
    previousRole: 'Mantan Barista Cafe',
    currentRole: 'Frontend Software Engineer',
    company: 'GoTo (Tokopedia)',
    salaryHike: '+280% Kenaikan Gaji',
    learningDuration: '5 Bulan Belajar',
    storyQuote:
      'Dulu sama sekali nggak paham coding dan mikir ini cuma buat orang jenius matematika. Di NalaCode, saya langsung diajak bikin website e-commerce nyata dari browser. Portofolio GitHub itulah yang bikin saya langsung di-hire Tokopedia!',
    keySkills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'siti-traveloka',
    name: 'Siti Rahmawati',
    avatar: '/code/hero-developer.jpg',
    category: 'career-switcher',
    previousRole: 'Mantan Staff Administrasi',
    currentRole: 'Full-Stack Web Developer',
    company: 'Traveloka',
    salaryHike: '+320% Kenaikan Gaji',
    learningDuration: '6 Bulan Belajar',
    storyQuote:
      'Bosan dengan rutinitas admin berpenghasilan pas-pasan, saya nekat belajar coding malam hari setelah kerja. Fitur AI Code Reviewer beneran ngebimbing waktu error 24 jam. Sekarang hidup saya berubah total dan bisa WFH.',
    keySkills: ['Node.js', 'Express', 'React', 'PostgreSQL'],
  },
  {
    id: 'kevin-remote',
    name: 'Kevin Sanjaya',
    avatar: '/code/story-remote-dev.jpg',
    category: 'remote-worker',
    previousRole: 'Freelancer Serabutan',
    currentRole: 'Remote React Developer',
    company: 'Fintech Startup (San Francisco, US)',
    salaryHike: '$2,800 USD / Bulan (~Rp44 Juta)',
    learningDuration: '7 Bulan Belajar',
    storyQuote:
      'NalaCode mengajarkan standar penulisan kode Clean Architecture dan bahasa Inggris teknis. Setelah lulus, saya dibimbing melamar lowongan remote global. Sekarang saya kerja dari rumah di Bali dengan gaji dollar!',
    keySkills: ['React', 'Redux Toolkit', 'GraphQL', 'CI/CD'],
  },
  {
    id: 'rizky-dana',
    name: 'Rizky Fauzan',
    avatar: '/code/feature-interactive-editor.jpg',
    category: 'fresh-grad',
    previousRole: 'Fresh Graduate Akuntansi',
    currentRole: 'Backend Golang Engineer',
    company: 'DANA Indonesia',
    salaryHike: 'Gaji Pertama Rp14.000.000',
    learningDuration: '4 Bulan Belajar',
    storyQuote:
      'Meskipun bukan lulusan Teknik Informatika, materi bedah algoritma dan optimasi database di NalaCode sangat terstruktur. Saya bisa melewati tes coding live interview dengan sangat percaya diri.',
    keySkills: ['Golang', 'Docker', 'Redis', 'Microservices'],
  },
  {
    id: 'anisa-telkom',
    name: 'Anisa Larasati',
    avatar: '/code/story-career-switch.jpg',
    category: 'career-switcher',
    previousRole: 'Mantan Guru Honorer',
    currentRole: 'Python & AI Engineer',
    company: 'Telkom Indonesia',
    salaryHike: '+300% Kenaikan Gaji',
    learningDuration: '5 Bulan Belajar',
    storyQuote:
      'Dari gaji honorer yang minim, sekarang saya memegang proyek machine learning predictive model. Kurikulum NalaCode sangat mutakhir dan langsung relevan dengan kebutuhan industri saat ini.',
    keySkills: ['Python', 'Pandas', 'TensorFlow', 'FastAPI'],
  },
  {
    id: 'fahmi-bukalapak',
    name: 'Fahmi Idris',
    avatar: '/code/hero-developer.jpg',
    category: 'fresh-grad',
    previousRole: 'Lulusan SMK Non-IT',
    currentRole: 'Mobile App Developer',
    company: 'Bukalapak',
    salaryHike: 'Gaji Pertama Rp13.500.000',
    learningDuration: '4 Bulan Belajar',
    storyQuote:
      'Jangan minder walau cuma lulusan SMK. Kunci di dunia tech adalah portofolio karya aplikasi nyata yang berjalan lancar. NalaCode benar-benar mengawal sampai kita punya aplikasi di Play Store.',
    keySkills: ['Flutter', 'Dart', 'Firebase', 'State Management'],
  },
];

export default function DeveloperSuccessStories() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredStories = successStories.filter((story) => {
    if (selectedFilter === 'all') return true;
    return story.category === selectedFilter;
  });

  return (
    <div id="testimoni" className="nc-stories-container">
      <div className="nc-stories-header center">
        <div className="nc-stories-badge">
          <Sparkles size={14} />
          <span>BUKTI NYATA &amp; KISAH SUKSES ALUMNI</span>
        </div>
        <h2>Dari Nol Hingga Bekerja di<br /><em>Perusahaan Teknologi Terkemuka.</em></h2>
        <p>
          Lebih dari 1.800.000+ pembelajar telah mengubah masa depan mereka. Simak bagaimana para career switcher dan fresh graduate berhasil meraih karir impian.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="nc-stories-filter-tabs">
        {[
          { id: 'all', label: 'Semua Kisah Sukses' },
          { id: 'career-switcher', label: 'Non-IT Career Switcher' },
          { id: 'fresh-grad', label: 'Fresh Graduate & SMK' },
          { id: 'remote-worker', label: 'Remote Worker Global (USD)' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`nc-filter-pill ${selectedFilter === tab.id ? 'active' : ''}`}
            onClick={() => setSelectedFilter(tab.id)}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Stories Grid */}
      <div className="nc-stories-grid">
        {filteredStories.map((story) => (
          <div key={story.id} className="nc-story-card">
            {/* Top Card: Profile & Company Hired */}
            <div className="nc-story-head">
              <div className="nc-story-avatar">
                <img src={story.avatar} alt={story.name} />
              </div>
              <div className="nc-story-meta">
                <h4>{story.name}</h4>
                <div className="nc-prev-role">
                  <User size={12} />
                  <span>{story.previousRole}</span>
                </div>
                <div className="nc-new-role">
                  <Briefcase size={12} className="nc-icon-cyan" />
                  <strong>{story.currentRole}</strong>
                </div>
              </div>
            </div>

            {/* Badges Bar: Company + Salary Hike */}
            <div className="nc-story-badges-row">
              <span className="nc-badge-company">
                <Building2 size={13} /> {story.company}
              </span>
              <span className="nc-badge-salary">
                <TrendingUp size={13} /> {story.salaryHike}
              </span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="nc-story-quote">
              &ldquo;{story.storyQuote}&rdquo;
            </blockquote>

            {/* Card Footer: Skills and Learning Time */}
            <div className="nc-story-foot">
              <div className="nc-skills-chips">
                {story.keySkills.map((sk, skIdx) => (
                  <span key={skIdx} className="nc-chip-skill">
                    {sk}
                  </span>
                ))}
              </div>

              <div className="nc-duration-info">
                <Clock size={12} />
                <small>{story.learningDuration}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA for Trust Building */}
      <div className="nc-trust-cta-banner">
        <div className="nc-trust-cta-copy">
          <Award size={24} className="nc-icon-cyan" />
          <div>
            <strong>Siap Menjadi Kisah Sukses Berikutnya?</strong>
            <p>Konsultasikan latar belakangmu dengan Career Advisor kami secara gratis.</p>
          </div>
        </div>

        <a
          href="https://wa.me/6281573550017?text=Halo%20NalaCode%2C%20saya%20tertarik%20konsultasi%20career%20switch%20menjadi%20software%20engineer."
          target="_blank"
          rel="noreferrer"
          className="nc-btn-counseling"
        >
          <MessageCircle size={16} />
          <span>Konsultasi Karir Gratis via WA</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
