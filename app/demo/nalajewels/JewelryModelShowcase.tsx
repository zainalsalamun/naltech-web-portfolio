'use client';

import { useState } from 'react';
import {
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  ArrowUpRight,
  Eye,
  ShieldCheck,
  Gem,
  Scale,
  Award,
  Heart,
} from 'lucide-react';

interface JewelryProduct {
  id: string;
  name: string;
  category: 'kids' | 'adult' | 'matching';
  categoryLabel: string;
  modelVisualDesc: string;
  purity: string;
  weight: string;
  price: string;
  image: string;
  targetUser: string;
  specs: string[];
}

const products: JewelryProduct[] = [
  {
    id: 'clover-studs',
    name: 'Little Clover Baby & Toddler Studs',
    category: 'kids',
    categoryLabel: 'Perhiasan Anak & Bayi',
    modelVisualDesc:
      'Ukuran mungil 4mm tampak sangat manis dan proporsional di daun telinga balita usia 0–6 tahun. Menggunakan pengait toge ulir bulat yang tidak menusuk leher si kecil saat tidur.',
    purity: 'Emas Asli 750 (18K) Hypoallergenic',
    weight: '0.85 gram',
    price: 'Rp1.250.000',
    image: '/jewelry/kids-model-earrings.jpg',
    targetUser: 'Bayi & Anak Usia 0–7 Tahun',
    specs: [
      'Bebas Nikel (100% Anti Alergi & Gatal)',
      'Kunci Toge Ulir Bulat Anti Hilang',
      'Desain Halus Tanpa Sudut Tajam',
      'Sertifikat Keaslian & Free Gift Box',
    ],
  },
  {
    id: 'solitaire-necklace',
    name: 'Celeste Solitaire Diamond Pendant Necklace',
    category: 'adult',
    categoryLabel: 'Perhiasan Dewasa & Ibu',
    modelVisualDesc:
      'Panjang rantai 42cm jatuh pas dan presisi di lekuk tulang selangka (collarbone). Liontin solitaire berkilau tegas tanpa terlihat berlebihan untuk kerja maupun acara formal.',
    purity: 'Emas Kuning 750 (18K) + Berlian VVS1',
    weight: '2.40 gram',
    price: 'Rp6.850.000',
    image: '/jewelry/adult-model-necklace.jpg',
    targetUser: 'Wanita Dewasa & Ibu Modern',
    specs: [
      'Rantai Rolo 42cm Adjustable s.d. 45cm',
      'Berlian Asli Bersertifikasi Eksklusif',
      'Setting Cakar 4 Kokoh Anti Lepas',
      'Garansi Cuci & Reparasi Seumur Hidup',
    ],
  },
  {
    id: 'mother-daughter-set',
    name: 'Eternal Bond Mother & Daughter Necklace Set',
    category: 'matching',
    categoryLabel: 'Koleksi Kembaran Ibu & Anak',
    modelVisualDesc:
      'Set 2 kalung senada yang dirancang khusus: Kalung Ibu 45cm & Kalung Anak 35cm. Tampak harmonis dan anggun saat dikenakan bersamaan dalam foto keluarga dan momen bonding.',
    purity: 'Emas Kuning 750 (18K) Signature',
    weight: '4.80 gram (Set Isi 2 Pcs)',
    price: 'Rp5.450.000',
    image: '/jewelry/hero-mother-child.jpg',
    targetUser: 'Ibu & Putri Tercinta',
    specs: [
      'Set Lengkap: 1 Kalung Dewasa + 1 Kalung Anak',
      'Free Grafir Inisial Nama di Liontin',
      'Kunci Pengaman Ganda Aman untuk Anak',
      'Packaging Kotak Mewah Pita Emas',
    ],
  },
  {
    id: 'emerald-diamond-ring',
    name: 'Royal Emerald & Diamond Ring Stack',
    category: 'adult',
    categoryLabel: 'Perhiasan Dewasa & Ibu',
    modelVisualDesc:
      'Batu zamrud cutting cushion 1.2 ct dengan lingkaran berlian mikro halo. Proporsi pas menutup setengah buku jari tangan, memberi kesan mewah dan aristokrat.',
    purity: 'Emas Kuning 750 (18K) + Zamrud Alami',
    weight: '3.65 gram',
    price: 'Rp9.200.000',
    image: '/jewelry/ring-wrist-stack.jpg',
    targetUser: 'Koleksi Pesta & Cincin Tunangan',
    specs: [
      'Zamrud Alami Cut Cushion Bersertifikat',
      'Lingkaran 24 Butir Micro Diamond Halo',
      'Bisa Custom Ukuran Jari (Size 10–18)',
      'Jaminan Buyback Transparan 100%',
    ],
  },
  {
    id: 'baby-bell-bracelet',
    name: 'Sweet Charm Baby Bell Gold Bracelet',
    category: 'kids',
    categoryLabel: 'Perhiasan Anak & Bayi',
    modelVisualDesc:
      'Gelang rantai fleksibel 12cm yang melingkar longgar dan aman di pergelangan tangan bayi. Lonceng mungil berbunyi gemerincing lembut saat si kecil aktif menggerakkan tangan.',
    purity: 'Emas Asli 700 (17K) Halus',
    weight: '1.60 gram',
    price: 'Rp1.980.000',
    image: '/jewelry/kids-model-earrings.jpg',
    targetUser: 'Kado Kelahiran & Ulang Tahun Anak',
    specs: [
      'Dilengkapi Rantai Tambahan +3cm (Bisa Dipakai Hingga Usia 5 Tahun)',
      'Lonceng Bunyi Lembut & Halus',
      'Bahan Hypoallergenic Anti Karat',
      'Free Kartu Ucapan & Box Kado Beludru',
    ],
  },
  {
    id: 'tennis-bracelet',
    name: 'Aura Luxury Diamond Tennis Bracelet',
    category: 'adult',
    categoryLabel: 'Perhiasan Dewasa & Ibu',
    modelVisualDesc:
      'Panjang 17cm melingkar fleksibel mengikuti gerakan pergelangan tangan. Deretan batu berlian tersusun rapat yang memantulkan kilau cahaya 360 derajat.',
    purity: 'Emas Putih / Kuning 750 (18K)',
    weight: '4.20 gram',
    price: 'Rp7.400.000',
    image: '/jewelry/ring-wrist-stack.jpg',
    targetUser: 'Perhiasan Formal & Glamour',
    specs: [
      'Kunci Pengunci Samping Ganda (Double Lock Safety)',
      'Struktur Rantai Lentur Anti Kaku',
      'Sertifikat Keaslian Kadar Emas SNI',
      'Gratis Perawatan Cuci Emas Berkala',
    ],
  },
];

export default function JewelryModelShowcase() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'kids' | 'adult' | 'matching'>('all');
  const [selectedProduct, setSelectedProduct] = useState<JewelryProduct>(products[0]);

  const filteredProducts =
    activeFilter === 'all' ? products : products.filter((p) => p.category === activeFilter);

  return (
    <div className="nj-showcase-component">
      {/* Segment Filter Nav */}
      <div className="nj-filter-nav" role="tablist" aria-label="Filter Kategori Perhiasan">
        <button
          type="button"
          className={`nj-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          <Sparkles size={14} />
          <span>Semua Koleksi Model</span>
        </button>
        <button
          type="button"
          className={`nj-filter-btn ${activeFilter === 'kids' ? 'active' : ''}`}
          onClick={() => setActiveFilter('kids')}
        >
          <Heart size={14} />
          <span>Perhiasan Anak &amp; Bayi</span>
        </button>
        <button
          type="button"
          className={`nj-filter-btn ${activeFilter === 'adult' ? 'active' : ''}`}
          onClick={() => setActiveFilter('adult')}
        >
          <Gem size={14} />
          <span>Perhiasan Dewasa &amp; Ibu</span>
        </button>
        <button
          type="button"
          className={`nj-filter-btn ${activeFilter === 'matching' ? 'active' : ''}`}
          onClick={() => setActiveFilter('matching')}
        >
          <Award size={14} />
          <span>Mother &amp; Daughter Sets</span>
        </button>
      </div>

      {/* Grid of Products on Real Models */}
      <div className="nj-products-grid">
        {filteredProducts.map((item) => (
          <article key={item.id} className="nj-product-card">
            {/* Visual Frame: Real Model Wearing The Piece */}
            <div className="nj-card-visual">
              <img src={item.image} alt={`${item.name} dipakai model`} />
              <div className="nj-visual-overlay-tag">
                <Eye size={13} />
                <span>Dipakai Pada Model</span>
              </div>
              <span className="nj-category-tag">{item.categoryLabel}</span>
            </div>

            <div className="nj-card-body">
              <div className="nj-card-meta">
                <span className="nj-purity-badge">
                  <ShieldCheck size={13} />
                  <span>{item.purity}</span>
                </span>
                <span className="nj-weight-badge">
                  <Scale size={13} />
                  <span>{item.weight}</span>
                </span>
              </div>

              <h3>{item.name}</h3>

              {/* Crucial On-Model Visual Description */}
              <div className="nj-model-guide-box">
                <small className="nj-guide-label">
                  <Eye size={12} /> Panduan Proporsi Pada Model:
                </small>
                <p>{item.modelVisualDesc}</p>
              </div>

              <ul className="nj-spec-bullets">
                {item.specs.slice(0, 2).map((sp, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={13} className="nj-icon-gold" />
                    <span>{sp}</span>
                  </li>
                ))}
              </ul>

              <div className="nj-card-footer">
                <div className="nj-price-info">
                  <small>Harga Emas Resmi</small>
                  <strong>{item.price}</strong>
                </div>

                <a
                  href={`https://wa.me/6281573550017?text=Halo%20NalaJewels%2C%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(item.name)}%20(${item.purity}).`}
                  target="_blank"
                  rel="noreferrer"
                  className="nj-btn-order-wa"
                >
                  <ShoppingBag size={15} />
                  <span>Pesan Sekarang</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
