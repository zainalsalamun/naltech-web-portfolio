'use client';

import { useState } from 'react';
import { Sparkles, ShoppingBag, CheckCircle2, ArrowUpRight, Palette, Eye } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  desc: string;
  material: string;
  price: string;
  colors: string[];
  image: string;
  features: string[];
}

const categories: CategoryItem[] = [
  {
    id: 'bergo-pet',
    name: 'Bergo Pet',
    badge: 'Paling Laris Harian',
    tagline: 'Pad Busa Anti-Mleyot, Tegak Natural & Praktis',
    desc: 'Didesain khusus dengan soft-pad lentur yang membingkai wajah tirus dan rapi seharian tanpa perlu disetrika ulang.',
    material: 'Jersey Korea Premium (Adem, dingin & tidak menerawang)',
    price: 'Rp49.000',
    colors: ['#D4A373', '#CCD5AE', '#E9D8A6', '#6B705C', '#333333', '#C59B9B'],
    image: '/hijab/bergo-daily.jpg',
    features: ['Soft Pad Antem (Anti Tembem)', 'Jahitan Tepi Double Stitch Rapi', 'Bebas Gerah Sepanjang Hari', 'Tersedia 18 Pilihan Warna'],
  },
  {
    id: 'bergo-non-pet',
    name: 'Bergo Non Pet',
    badge: 'Casual & Santai',
    tagline: 'Flowy Tanpa Busa, Nyaman di Rumah & Olahraga',
    desc: 'Cutting muka oval presisi yang mengikuti lekuk alami kepala. Sangat ringan, fleksibel, dan nyaman untuk daily activities.',
    material: 'Rayon Spandex Organik (Sangat lentur & menyerap keringat)',
    price: 'Rp45.000',
    colors: ['#A3B18A', '#588157', '#344E41', '#DDA15E', '#BC6C25', '#283618'],
    image: '/hijab/hero-model.jpg',
    features: ['Desain Muka Oval Seamless', 'Ringan & Breathable', 'Cocok untuk Olahraga & Rumah', 'Tersedia 14 Pilihan Warna'],
  },
  {
    id: 'pashmina-instan',
    name: 'Pashmina Instan',
    badge: 'Inovasi Sat-Set',
    tagline: 'Sudah Menyatu dengan Inner Ciput, Bebas Jarum Pentul',
    desc: 'Solusi tampil cantik dalam 10 detik! Ciput katun rajut anti-pusing sudah terjahit rapi di dalam pashmina ceruty.',
    material: 'Ceruty Babydoll Armani + Inner Katun Lycra',
    price: 'Rp65.000',
    colors: ['#E8B4B8', '#EED6D3', '#A49393', '#67595E', '#E8D5C4', '#3E2C41'],
    image: '/hijab/hero-model.jpg',
    features: ['10 Detik Langsung Rapi', 'Tanpa Butuh Jarum/Peniti', 'Bahan Flowy Draping Mewah', 'Tersedia 22 Pilihan Warna'],
  },
  {
    id: 'pashmina-pesta',
    name: 'Pashmina Pesta & Silk',
    badge: 'Koleksi Mewah & Formal',
    tagline: 'Kilau Shimmer Elegan untuk Kondangan & Wisuda',
    desc: 'Kain silk bertekstur shimmer lembut yang memancarkan kilau mewah di bawah cahaya pesta tanpa terasa licin.',
    material: 'Mulberry Silk Shimmer & Cradenza Import',
    price: 'Rp89.000',
    colors: ['#D4AF37', '#E5D3B3', '#8C7B65', '#C0C0C0', '#4A3B32', '#B76E79'],
    image: '/hijab/pashmina-silk.jpg',
    features: ['Kilau Shimmer Mewah', 'Mudah Di-styling Berbagai Look', 'Tidak Licin & Tidak Budeg', 'Tersedia 16 Pilihan Warna'],
  },
  {
    id: 'segi-empat-voal',
    name: 'Segi Empat Voal',
    badge: 'Tegak Paripurna',
    tagline: 'Voal Ultrafine Motif & Polos dengan Laser Cut Butik',
    desc: 'Serat benang rapat yang membuat bagian dahi selalu tegak melengkung sempurna, tidak letoi saat terkena angin.',
    material: 'Ultrafine Voal 60s Premium Quality',
    price: 'Rp79.000',
    colors: ['#F3E9DC', '#C6AC8F', '#5E503F', '#22333B', '#EAE0D5', '#895737'],
    image: '/hijab/voal-motif.jpg',
    features: ['Tegak Paripurna di Dahi', 'Finishing Laser Cut Presisi', 'Motif Digital Eksklusif', 'Tersedia 30+ Varian'],
  },
  {
    id: 'inner-ciput',
    name: 'Inner Ciput Rajut',
    badge: 'Aksesoris Wajib',
    tagline: 'Ciput Silang Anti Pusing & Mengunci Rambut Rapi',
    desc: 'Dibuat dengan teknik rajut 4-way stretch yang tidak menekan tulang telinga sehingga nyaman dipakai berjam-jam.',
    material: 'Benang Rajut Anpus Elastane',
    price: 'Rp25.000',
    colors: ['#000000', '#F5F5DC', '#808080', '#8B4513', '#D2B48C', '#FFFFFF'],
    image: '/hijab/bergo-daily.jpg',
    features: ['Anti Pusing & Sakit Telinga', 'Rambut Terkunci Sempurna', 'Menyerap Keringat Cepat', 'Tersedia 12 Warna Netral'],
  },
];

export default function HijabCategorySelector() {
  const [selectedId, setSelectedId] = useState('bergo-pet');
  const activeItem = categories.find((c) => c.id === selectedId) ?? categories[0];

  return (
    <div className="nh-category-component">
      {/* Category CTA Buttons Bar */}
      <div className="nh-category-nav" role="tablist" aria-label="Kategori Produk Hijab">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`nh-cat-btn ${selectedId === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedId(cat.id)}
            role="tab"
            aria-selected={selectedId === cat.id}
          >
            <span className="nh-btn-indicator" />
            <span className="nh-btn-text">
              <strong>{cat.name}</strong>
              <small>{cat.badge}</small>
            </span>
          </button>
        ))}
      </div>

      {/* Active Category Display Showcase */}
      <div className="nh-category-showcase">
        <div className="nh-showcase-grid">
          {/* Left: Product Information & Specs */}
          <div className="nh-showcase-copy">
            <div className="nh-showcase-tag">
              <Sparkles size={14} className="nh-icon-sparkle" />
              <span>{activeItem.badge}</span>
            </div>

            <h3>{activeItem.tagline}</h3>
            <p className="nh-showcase-desc">{activeItem.desc}</p>

            <div className="nh-showcase-material">
              <strong>Karakteristik Bahan:</strong>
              <p>{activeItem.material}</p>
            </div>

            <div className="nh-feature-list">
              {activeItem.features.map((feat, idx) => (
                <div key={idx} className="nh-feature-item">
                  <CheckCircle2 size={16} className="nh-icon-check" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Color Swatches */}
            <div className="nh-color-row">
              <span className="nh-color-label">
                <Palette size={14} /> Pilihan Warna:
              </span>
              <div className="nh-swatches">
                {activeItem.colors.map((color, i) => (
                  <span
                    key={i}
                    className="nh-swatch"
                    style={{ backgroundColor: color }}
                    title={`Pilihan warna ${i + 1}`}
                  />
                ))}
                <small className="nh-more-colors">+10 lainnya</small>
              </div>
            </div>

            {/* Price & Action CTA */}
            <div className="nh-action-row">
              <div className="nh-price-box">
                <span>Harga Spesial</span>
                <strong>{activeItem.price}</strong>
              </div>

              <a
                href={`https://wa.me/6281573550017?text=Halo%20NalaHijab%2C%20saya%20tertarik%20pesan%20produk%20${encodeURIComponent(activeItem.name)}.`}
                target="_blank"
                rel="noreferrer"
                className="nh-btn-order"
              >
                <ShoppingBag size={16} />
                <span>Pesan Koleksi Ini</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right: Real Model Product Preview */}
          <div className="nh-showcase-visual">
            <div className="nh-visual-frame">
              <img src={activeItem.image} alt={activeItem.name} />
              <div className="nh-visual-badge">
                <Eye size={14} />
                <span>Real Model Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
