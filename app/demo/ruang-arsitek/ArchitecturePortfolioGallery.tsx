'use client';

import { useState } from 'react';
import {
  Building2,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Ruler,
  Layers,
  Compass,
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  dimensions: string; // e.g. "LT 500 m² / LB 680 m²"
  style: string;
  year: string;
  concept: string;
  image: string;
}

const architecturalProjects: ProjectItem[] = [
  {
    id: 'concrete_haven',
    title: 'The Concrete Haven Residence',
    category: 'Rumah Tinggal & Villa',
    location: 'Pondok Indah, Jakarta Selatan',
    dimensions: 'LT 500 m² / LB 680 m²',
    style: 'Modern Brutalist & Natural Teak Wood',
    year: '2025',
    concept: 'Hunian 3 lantai dengan fasad beton ekspos bertekstur sirip kayu, courtyard taman tengah, dan kolam renang privat yang teduh.',
    image: '/architecture/project-concrete.jpg',
  },
  {
    id: 'svara_villa',
    title: 'Svara Tropical Sanctuary Villa',
    category: 'Rumah Tinggal & Villa',
    location: 'Canggu, Bali',
    dimensions: 'LT 600 m² / LB 450 m²',
    style: 'Contemporary Tropical Open-Air Living',
    year: '2024',
    concept: 'Penerapan konsep passive cooling dengan atap miring tinggi, material batu andesit lokal, dan bukaan kaca lipat menuju infinity pool.',
    image: '/architecture/hero-villa.jpg',
  },
  {
    id: 'arunika_pavilion',
    title: 'Arunika Pavilion & Coffee Roastery',
    category: 'Komersial & Restoran',
    location: 'Dago Atas, Bandung',
    dimensions: 'LT 850 m² / LB 380 m²',
    style: 'Industrial Glasshouse & Exposed Brickwork',
    year: '2024',
    concept: 'Bangunan komersial kafe dengan bentang struktur baja ekspos, skylight matahari alami, dan lanskap terasering pegunungan.',
    image: '/architecture/project-commercial.jpg',
  },
  {
    id: 'monolith_penthouse',
    title: 'The Monolith Penthouse Interior Fit-Out',
    category: 'Desain Interior',
    location: 'SCBD Sudirman, Jakarta Pusat',
    dimensions: 'LB 280 m²',
    style: 'Minimalist Warm Japandi & Custom Walnut Joinery',
    year: '2025',
    concept: 'Interior apartemen mewah dengan seamless hidden storage, mood lighting arsitektural, dan marmer travertine Italia.',
    image: '/architecture/project-interior.jpg',
  },
  {
    id: 'samudra_resort',
    title: 'Samudra Cliffside Retreat & Boutique Resort',
    category: 'Hospitality & Resort',
    location: 'Uluwatu, Bali',
    dimensions: 'Kawasan 1.8 Hektar (12 Paviliun)',
    style: 'Sustainable Organic Limestone & Water Pavilions',
    year: '2023',
    concept: 'Master planning resort tepi tebing dengan material batu kapur lokal, atap sirap ramah lingkungan, dan jalur pejalan kaki terintegrasi.',
    image: '/architecture/project-tropical.jpg',
  },
];

const categoryTabs = ['Semua Proyek', 'Rumah Tinggal & Villa', 'Komersial & Restoran', 'Desain Interior', 'Hospitality & Resort'];

export default function ArchitecturePortfolioGallery() {
  const [activeTab, setActiveTab] = useState<string>('Semua Proyek');

  const filteredProjects = activeTab === 'Semua Proyek'
    ? architecturalProjects
    : architecturalProjects.filter((p) => p.category === activeTab);

  return (
    <div className="ras-gallery-container">
      {/* Category Tabs */}
      <div className="ras-gallery-tabs">
        {categoryTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`ras-gallery-tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <span>{tab}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="ras-gallery-grid">
        {filteredProjects.map((item) => (
          <div key={item.id} className="ras-project-card">
            <div className="ras-project-media">
              <img src={item.image} alt={item.title} />
              <span className="ras-project-category-badge">{item.category}</span>
              <span className="ras-project-year-badge">{item.year}</span>
            </div>

            <div className="ras-project-body">
              <div className="ras-project-meta-row">
                <span className="ras-project-location">
                  <MapPin size={12} className="ras-icon-sienna" /> {item.location}
                </span>
                <span className="ras-project-dim">
                  <Ruler size={12} /> {item.dimensions}
                </span>
              </div>

              <h4>{item.title}</h4>
              <span className="ras-project-style">
                <Compass size={11} className="ras-icon-sienna" /> {item.style}
              </span>
              <p className="ras-project-desc">{item.concept}</p>

              <div className="ras-project-footer">
                <a href="#kalkulator" className="ras-btn-similar-concept">
                  <span>Konsultasikan Konsep Serupa</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
