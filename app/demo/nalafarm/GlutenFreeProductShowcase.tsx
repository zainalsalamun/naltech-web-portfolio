'use client';

import { useState } from 'react';
import {
  ShoppingBag,
  Sparkles,
  Leaf,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Heart,
  Wheat,
  Info,
} from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: 'cookies' | 'flour' | 'noodle';
  categoryLabel: string;
  weight: string;
  price: string;
  description: string;
  ingredients: string[];
  dietTags: string[];
  image: string;
  isBestSeller?: boolean;
}

const productList: ProductItem[] = [
  {
    id: 'blackmond',
    name: 'Blackmond Healthy Cookies',
    category: 'cookies',
    categoryLabel: 'Cookies & Camilan',
    weight: '180 gram',
    price: 'Rp28.500',
    description: 'Camilan cookies cokelat pekat asli berpadu renyahnya kacang almond, dibuat dari tepung singkong mocaf dan gula kelapa alami.',
    ingredients: ['Tepung Singkong Mocaf', 'Kacang Almond', 'Kakao Bubuk Asli', 'Gula Kelapa Organik', 'Minyak Nabati'],
    dietTags: ['100% Bebas Gluten', 'Tanpa Telur (Egg-Free)', 'Bebas Kolesterol'],
    image: '/farm/product-cookies.jpg',
    isBestSeller: true,
  },
  {
    id: 'pumpberry',
    name: 'Pumpberry Superfood Cookies',
    category: 'cookies',
    categoryLabel: 'Cookies & Camilan',
    weight: '180 gram',
    price: 'Rp29.500',
    description: 'Kelezatan buah cranberry kering berpadu biji labu (pumpkin seeds) dan biji rami (flaxseed) yang kaya antioksidan dan omega-3.',
    ingredients: ['Tepung Mocaf', 'Dried Cranberry', 'Pumpkin Seeds', 'Flaxseed', 'Gula Kelapa'],
    dietTags: ['100% Bebas Gluten', 'Tinggi Serat Alami', 'Sumber Omega-3'],
    image: '/farm/ingredient-cocoa.jpg',
    isBestSeller: true,
  },
  {
    id: 'tepung-mocaf',
    name: 'Tepung Singkong Serbaguna All-Purpose',
    category: 'flour',
    categoryLabel: 'Tepung Bebas Gluten',
    weight: '1 Kilogram',
    price: 'Rp32.000',
    description: 'Pengganti tepung terigu serbaguna dengan perbandingan 1:1. Sempurna untuk membuat aneka kue bolu, roti, muffin, dan gorengan renyah.',
    ingredients: ['100% Singkong Segar Nusantara Pilihan'],
    dietTags: ['100% Gluten-Free Certified', 'Rendah Glikemik', 'Tanpa Pemutih Kimia'],
    image: '/farm/ingredient-cassava.jpg',
    isBestSeller: true,
  },
  {
    id: 'veggie-noodle',
    name: 'Veggie Noodle Bayam & Wortel',
    category: 'noodle',
    categoryLabel: 'Mie Sayur Sehat',
    weight: '3 Porsi (200g)',
    price: 'Rp18.000',
    description: 'Mie sayur kering sehat tanpa bahan pengawet, pewarna sintetis, dan tanpa MSG. Dibuat dengan sari pati bayam hijau segar.',
    ingredients: ['Tepung Singkong', 'Tepung Beras', 'Ekstrak Bayam Organik', 'Minyak Nabati'],
    dietTags: ['Bebas Gluten', 'Bebas MSG & Pengawet', 'Kaya Vitamin A & Zat Besi'],
    image: '/farm/hero-farm.jpg',
  },
  {
    id: 'cheesethins',
    name: 'Cheesethins Crispy Edam Snack',
    category: 'cookies',
    categoryLabel: 'Cookies & Camilan',
    weight: '100 gram',
    price: 'Rp24.000',
    description: 'Keripik keju panggang renyah dengan rasa gurih keju edam asli berkualitas tinggi, camilan sempurna saat bersantai tanpa rasa bersalah.',
    ingredients: ['Tepung Singkong', 'Keju Edam Asli', 'Biji Rami', 'Garam Laut'],
    dietTags: ['100% Bebas Gluten', 'Dipanggang Bukan Digoreng', 'Tanpa MSG'],
    image: '/farm/product-cookies.jpg',
  },
  {
    id: 'blackthins',
    name: 'Blackthins Crispy Dark Chocolate',
    category: 'cookies',
    categoryLabel: 'Cookies & Camilan',
    weight: '100 gram',
    price: 'Rp24.000',
    description: 'Kepingan tipis cokelat panggang renyah dengan taburan kelapa gurih, sumber camilan manis sehat bebas gluten untuk seluruh keluarga.',
    ingredients: ['Tepung Singkong', 'Kakao Asli', 'Kelapa Panggang', 'Gula Tebu Alami'],
    dietTags: ['100% Bebas Gluten', 'Tinggi Serat', 'Non-GMO'],
    image: '/farm/ingredient-cocoa.jpg',
  },
];

export default function GlutenFreeProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = productList.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <div id="produk-sehat" className="nf-showcase-container">
      {/* Category Pills Bar */}
      <div className="nf-category-pills-bar">
        {[
          { id: 'all', label: 'Semua Produk Pilihan' },
          { id: 'cookies', label: 'Cookies & Camilan Sehat' },
          { id: 'flour', label: 'Tepung Singkong Serbaguna' },
          { id: 'noodle', label: 'Mie Sayur & Pasta Sehat' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`nf-cat-pill ${activeCategory === tab.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(tab.id)}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="nf-products-grid">
        {filteredProducts.map((prod) => (
          <div key={prod.id} className="nf-product-card">
            <div className="nf-product-image-frame">
              <img src={prod.image} alt={prod.name} />
              {prod.isBestSeller && (
                <span className="nf-badge-bestseller">
                  <Sparkles size={12} /> Best Seller
                </span>
              )}
              <span className="nf-badge-category">{prod.categoryLabel}</span>
            </div>

            <div className="nf-product-content">
              <div className="nf-product-header">
                <h4>{prod.name}</h4>
                <div className="nf-price-tag">
                  <strong>{prod.price}</strong>
                  <small> / {prod.weight}</small>
                </div>
              </div>

              <p className="nf-product-desc">{prod.description}</p>

              {/* Diet Tags */}
              <div className="nf-diet-tags">
                {prod.dietTags.map((dt, dtIdx) => (
                  <span key={dtIdx} className="nf-diet-chip">
                    <CheckCircle2 size={11} className="nf-icon-green" />
                    <span>{dt}</span>
                  </span>
                ))}
              </div>

              {/* Ingredients Summary */}
              <div className="nf-ingredients-box">
                <small className="nf-ing-label">Komposisi Alami:</small>
                <p>{prod.ingredients.join(' · ')}</p>
              </div>

              {/* Store Buy Actions */}
              <div className="nf-product-actions">
                <a
                  href={`https://wa.me/6281573550017?text=Halo%20NalaFarm%2C%20saya%20tertarik%20membeli%20produk%20${encodeURIComponent(prod.name)}%20(${encodeURIComponent(prod.price)}).%20Bisa%20bantu%20order%3F`}
                  target="_blank"
                  rel="noreferrer"
                  className="nf-btn-buy-store"
                >
                  <ShoppingBag size={14} />
                  <span>Beli di Official Store</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Online Store Marketplace Banner */}
      <div className="nf-marketplace-links-card">
        <div className="nf-market-copy">
          <Leaf size={24} className="nf-icon-green" />
          <div>
            <strong>Temukan Produk NalaFarm di Toko Online Favoritmu</strong>
            <p>Tersedia pengiriman ke seluruh Indonesia dengan garansi packing aman dan promo gratis ongkir.</p>
          </div>
        </div>

        <div className="nf-market-btn-group">
          <a
            href="https://shopee.co.id"
            target="_blank"
            rel="noreferrer"
            className="nf-btn-market shopee"
          >
            <span>Shopee Mall</span>
            <ArrowUpRight size={14} />
          </a>
          <a
            href="https://tokopedia.com"
            target="_blank"
            rel="noreferrer"
            className="nf-btn-market tokopedia"
          >
            <span>Tokopedia Official</span>
            <ArrowUpRight size={14} />
          </a>
          <a
            href="https://wa.me/6281573550017?text=Halo%20NalaFarm%2C%20saya%20ingin%20belanja%20produk%20makanan%20sehat%20bebas%20gluten."
            target="_blank"
            rel="noreferrer"
            className="nf-btn-market wa"
          >
            <span>WhatsApp Store</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
