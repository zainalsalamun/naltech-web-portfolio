'use client';

import { useState } from 'react';
import { Scissors, Clock, UserCheck, ArrowUpRight, Sparkles } from 'lucide-react';

interface HairstyleItem {
  id: string;
  name: string;
  category: string;
  barber: string;
  duration: string;
  serviceName: string;
  image: string;
  desc: string;
}

const hairstylesData: HairstyleItem[] = [
  {
    id: 'taper-fade',
    name: 'Mid Taper Fade',
    category: 'Fade',
    barber: 'Andi Pratama',
    duration: '40 Menit',
    serviceName: 'Haircut & Wash',
    image: '/barber/style-fade.jpg',
    desc: 'Gradasi halus di pelipis dan tengkuk, mempertahankan ketebalan rambut bagian atas untuk styling natural.',
  },
  {
    id: 'french-crop',
    name: 'Textured French Crop',
    category: 'Crop',
    barber: 'Rizky Kurniawan',
    duration: '45 Menit',
    serviceName: 'Premium Haircut',
    image: '/barber/style-crop.jpg',
    desc: 'Potongan poni pendek bertekstur dengan samping rapi, sangat cocok untuk iklim tropis dan pria berwajah oval.',
  },
  {
    id: 'pompadour',
    name: 'Classic Executive Pompadour',
    category: 'Pompadour',
    barber: 'Andi Pratama',
    duration: '50 Menit',
    serviceName: 'Premium Haircut & Shave',
    image: '/barber/style-pompadour.jpg',
    desc: 'Gaya maskulin klasik dengan volume atas mengkilap dan sisiran rapi ala gentlemans club tempo dulu.',
  },
  {
    id: 'two-block',
    name: 'Modern Two Block Cut',
    category: 'Asian Cut',
    barber: 'Dimas Anggoro',
    duration: '40 Menit',
    serviceName: 'Haircut & Wash',
    image: '/barber/style-twoblock.jpg',
    desc: 'Potongan samping undercut tersembunyi dengan bagian atas jatuh bertekstur layer ala aktor Korea & Tokyo modern.',
  },
  {
    id: 'low-fade',
    name: 'Clean Low Fade & Line-Up',
    category: 'Fade',
    barber: 'Rizky Kurniawan',
    duration: '35 Menit',
    serviceName: 'Regular Haircut',
    image: '/barber/style-fade.jpg',
    desc: 'Garis batas tajam dan gradasi tipis di bagian bawah telinga, memberikan kesan maskulin dan segar.',
  },
  {
    id: 'mullet-modern',
    name: 'Modern Drop Mullet',
    category: 'Crop',
    barber: 'Dimas Anggoro',
    duration: '45 Menit',
    serviceName: 'Premium Haircut',
    image: '/barber/style-crop.jpg',
    desc: 'Kombinasi samping tipis dengan ekor belakang berlayer, pilihan favorit pria yang menyukai gaya ekspresif.',
  },
];

const categories = ['Semua Gaya', 'Fade', 'Crop', 'Pompadour', 'Asian Cut'];

export default function HairstyleLookbook() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua Gaya');

  const filteredStyles = activeCategory === 'Semua Gaya'
    ? hairstylesData
    : hairstylesData.filter((item) => item.category === activeCategory);

  return (
    <div className="ncb-lookbook-container">
      {/* Category Filter Pills */}
      <div className="ncb-lookbook-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`ncb-filter-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            <span>{cat}</span>
          </button>
        ))}
      </div>

      {/* Styles Grid */}
      <div className="ncb-lookbook-grid">
        {filteredStyles.map((item) => (
          <div key={item.id} className="ncb-style-card">
            <div className="ncb-style-image-box">
              <img src={item.image} alt={item.name} />
              <span className="ncb-style-tag">{item.category}</span>
            </div>

            <div className="ncb-style-info">
              <h4>{item.name}</h4>
              <p className="ncb-style-desc">{item.desc}</p>

              <div className="ncb-style-meta-row">
                <span className="ncb-barber-tag">
                  <UserCheck size={13} className="ncb-icon-gold" />
                  <span>Karya: {item.barber}</span>
                </span>
                <span className="ncb-duration-tag">
                  <Clock size={13} />
                  <span>{item.duration}</span>
                </span>
              </div>

              <div className="ncb-style-action-row">
                <a href="#booking" className="ncb-btn-choose-style">
                  <Scissors size={14} />
                  <span>Pilih Gaya Ini untuk Booking</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
