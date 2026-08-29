'use client';

import { useState } from 'react';
import { Camera, MapPin, Sparkles, ArrowUpRight, Aperture } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  location: string;
  concept: string;
  gear: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'grad-ui',
    title: 'Wisuda Nadia & Rekan — Universitas Indonesia',
    category: 'Wisuda',
    location: 'Rektorat UI Depok',
    concept: 'Natural candid outdoor dengan hangatnya sinar matahari sore dan pose keluarga yang rileks.',
    gear: 'Sony A7IV · FE 85mm f/1.4 GM',
    image: '/photo/portfolio-grad-1.jpg',
  },
  {
    id: 'wed-aditya',
    title: 'Pernikahan Aditya & Vania — Golden Hour Altar',
    category: 'Pernikahan',
    location: 'Botanical Sanctuary, Bogor',
    concept: 'Dokumentasi emosional akad & intimate sunset reception bernuansa hangat dan penuh tawa.',
    gear: 'Sony A7IV · FE 35mm & 50mm f/1.2 GM',
    image: '/photo/portfolio-wedding-1.jpg',
  },
  {
    id: 'prod-lumiere',
    title: 'Katalog Skincare & Perfume — Lumière Botanics',
    category: 'Produk UMKM',
    location: 'Studio Lensa Cerita, Tebet',
    concept: 'Clean aesthetic studio dengan lighting softbox ganda dan refleksi permukaan kaca akrilik.',
    gear: 'Sony A7R V · FE 90mm f/2.8 Macro G',
    image: '/photo/portfolio-product-1.jpg',
  },
  {
    id: 'food-arunika',
    title: 'Menu Branding & Flatlay — Kopi & Artisan Bakery',
    category: 'Kuliner',
    location: 'Senja Coffee Roastery, Bandung',
    concept: 'Menonjolkan tekstur renyah croissant, uap kopi segar, dan ornamen kayu vintage yang estetik.',
    gear: 'Sony A7IV · FE 24-70mm f/2.8 GM II',
    image: '/photo/portfolio-food-1.jpg',
  },
  {
    id: 'grad-itb',
    title: 'Graduation Squad — Institut Teknologi Bandung',
    category: 'Wisuda',
    location: 'Kampus Ganesha ITB, Bandung',
    concept: 'Sesi kelompok 8 orang dengan perpaduan gaya formal ceria dan pelemparan toga ikonik.',
    gear: 'Sony A7IV · FE 24-70mm f/2.8 GM II',
    image: '/photo/portfolio-grad-1.jpg',
  },
  {
    id: 'prewed-jogja',
    title: 'Prewedding Story — Gumuk Pasir & Heritage',
    category: 'Prewedding',
    location: 'Parangkusumo, Yogyakarta',
    concept: 'Gaya sinematik editorial dengan kibasan kain tenun dan hembusan angin pantai dramatis.',
    gear: 'Sony A7IV · FE 85mm f/1.4 GM',
    image: '/photo/portfolio-wedding-1.jpg',
  },
];

const categoryTabs = ['Semua Karya', 'Wisuda', 'Pernikahan', 'Prewedding', 'Produk UMKM', 'Kuliner'];

export default function PhotoPortfolioGallery() {
  const [activeTab, setActiveTab] = useState<string>('Semua Karya');

  const filteredItems = activeTab === 'Semua Karya'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <div className="lcp-portfolio-gallery-box">
      {/* Category Tabs */}
      <div className="lcp-gallery-tabs">
        {categoryTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`lcp-gallery-tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <span>{tab}</span>
          </button>
        ))}
      </div>

      {/* Grid of Portfolio Cards */}
      <div className="lcp-gallery-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="lcp-gallery-card">
            <div className="lcp-gallery-img-wrap">
              <img src={item.image} alt={item.title} />
              <span className="lcp-gallery-badge">{item.category}</span>
            </div>

            <div className="lcp-gallery-body">
              <h4>{item.title}</h4>
              <span className="lcp-gallery-location">
                <MapPin size={12} /> {item.location}
              </span>
              <p className="lcp-gallery-concept">{item.concept}</p>

              <div className="lcp-gallery-footer">
                <span className="lcp-gallery-gear">
                  <Aperture size={12} className="lcp-icon-gold" /> {item.gear}
                </span>
                <a href="#booking" className="lcp-btn-book-similar">
                  <span>Booking Sesi Serupa</span>
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
