'use client';

import { useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Gift,
  CheckCircle2,
  ArrowUpRight,
  MapPin,
  Clock,
  Users,
  MessageCircle,
  Phone,
  Calendar,
  Utensils,
  Award,
} from 'lucide-react';

interface VideoReel {
  id: string;
  title: string;
  concept: string;
  venue: string;
  pax: string;
  duration: string;
  views: string;
  image: string;
  description: string;
  menuHighlights: string[];
}

const videoReels: VideoReel[] = [
  {
    id: 'ballroom-grand',
    title: 'The Royal Ballroom Celebration',
    concept: 'Luxury Modern Classic Ballroom',
    venue: 'The Dharmawangsa Ballroom, Jakarta',
    pax: '1.000 Tamu Undangan',
    duration: '0:30',
    views: '124.5k Views',
    image: '/catering/hero-ballroom.jpg',
    description:
      'Dekorasi lengkungan floral megah setinggi 4.5 meter berpadu lampu kristal gantung dan 8 stall kuliner nusantara & western live cooking.',
    menuHighlights: ['Roast Beef Carving with Mushroom Sauce', 'Zuppa Soup Puff Pastry', 'Sate Maranggi Purwakarta', 'Dessert Fountain Bar'],
  },
  {
    id: 'garden-intimate',
    title: 'Twinkling Fairy Lights Garden',
    concept: 'Intimate Botanical Garden Party',
    venue: 'Plataran Senayan Hutan Kota',
    pax: '350 Tamu Undangan',
    duration: '0:20',
    views: '98.2k Views',
    image: '/catering/garden-venue.jpg',
    description:
      'Suasana resepsi outdoor hangat di bawah kanopi lampu gantung, meja kayu panjang rustic, dan sajian buffet fusion organik segar.',
    menuHighlights: ['Salmon Teriyaki Rice Bowl', 'BBQ Grill Wagyu Skewers', 'Mocktail Barista Station', 'Gelato Artisan Corner'],
  },
  {
    id: 'traditional-modern',
    title: 'Mahakarya Adat Jawa Modern',
    concept: 'Tradisional Kontemporer Mewah',
    venue: 'Balai Kartini Convention Hall',
    pax: '800 Tamu Undangan',
    duration: '0:25',
    views: '86.4k Views',
    image: '/catering/buffet-spread.jpg',
    description:
      'Gebyok ukir kayu putih dengan rangkaian bunga melati segar, sentuhan adat agung berpadu sajian prasmanan selera keraton.',
    menuHighlights: ['Nasi Liwet Keraton Komplit', 'Tengkleng Iga Sapi Rempah', 'Es Doger Heritage', 'Kambing Guling Koki Bintang 5'],
  },
  {
    id: 'culinary-craft',
    title: 'Behind the Scenes 5-Star Kitchen',
    concept: 'Standar Kebersihan & Live Cooking',
    venue: 'Central Kitchen NalaCatering',
    pax: 'Hygiene Sanitation Standar Hotel',
    duration: '0:15',
    views: '142.1k Views',
    image: '/catering/kuliner-station.jpg',
    description:
      'Para chef profesional dan tim captain service berseragam rapi memastikan setiap hidangan tersaji hangat, higienis, dan lezat.',
    menuHighlights: ['100% Bahan Segar Halal MUI', 'Proses Masak Live di Venue', 'Pelayanan Ramah & Siap Sedia', 'Sistem Pemanas Chafing Modern'],
  },
];

interface WeddingPackage {
  id: string;
  name: string;
  badge: string;
  pax: string;
  price: string;
  priceNum: string;
  idealFor: string;
  bonuses: string[];
  features: string[];
}

const packages: WeddingPackage[] = [
  {
    id: 'intimate',
    name: 'Intimate Blossom Package',
    badge: 'Pilihan Intimate Wedding',
    pax: '300 Pax',
    price: 'Rp75.000.000',
    priceNum: '75 Juta',
    idealFor: 'Resepsi Intimate Garden / Glasshouse Venue',
    bonuses: [
      'FREE 1 Ekor Kambing Guling Spesial',
      'FREE Photobooth 2 Jam Unlimited Print',
      'FREE VIP Food Tasting untuk 4 Orang',
      'FREE Dekorasi Akad Nikah & Hand Bouquet',
    ],
    features: [
      'Buffet Utama 300 Porsi (6 Menu Pilihan)',
      '3 Food Stall @ 150 Porsi (Total 450 Porsi)',
      'Dekorasi Pelaminan 6-8 Meter + Mini Garden',
      'Lorong Masuk VIP & Meja Penerima Tamu',
      'Tim Service Captain & Waiter Profesional',
    ],
  },
  {
    id: 'elegance',
    name: 'Grand Elegance Package',
    badge: 'Paling Banyak Dipilih',
    pax: '600 Pax',
    price: 'Rp135.000.000',
    priceNum: '135 Juta',
    idealFor: 'Resepsi Gedung / Ballroom Menengah',
    bonuses: [
      'FREE 2 Ekor Kambing Guling Koki Bintang 5',
      'FREE Photobooth 360 Video Booth 3 Jam',
      'FREE Menginap 1 Malam di Honeymoon Hotel',
      'FREE VIP Food Tasting untuk 6 Orang',
      'FREE Coffee & Mocktail Bar 150 Cup',
    ],
    features: [
      'Buffet Utama 600 Porsi (7 Menu Pilihan)',
      '5 Food Stall @ 250 Porsi (Total 1.250 Porsi)',
      'Dekorasi Pelaminan 10-12 Meter Megah',
      'Gazebo Masuk, Kotak Angpao & Photo Gallery',
      'Full Equipment Chafing Dish & Meja VIP Keluarga',
    ],
  },
  {
    id: 'royal',
    name: 'Royal Majestic Ballroom Package',
    badge: 'Paket Sultan All-In',
    pax: '1.000 Pax',
    price: 'Rp215.000.000',
    priceNum: '215 Juta',
    idealFor: 'Grand Ballroom Hotel Bintang 5 & Convention Hall',
    bonuses: [
      'FREE 3 Ekor Kambing Guling Premium',
      'FREE Photobooth 360 + Custom Photo Wall',
      'FREE Menginap 2D1N Suite Hotel Bintang 5',
      'FREE Live Acoustic Band / Music Entertainment',
      'FREE VIP Food Tasting untuk 8 Orang',
    ],
    features: [
      'Buffet Utama 1.000 Porsi (8 Menu Pilihan Chef)',
      '7 Food Stall @ 350 Porsi (Total 2.450 Porsi)',
      'Grand Backdrop Pelaminan 14-18 Meter + Lighting',
      'Dekorasi Karpet Jalan, Centerpiece & Flower Arch',
      'Dedicated Event Captain & Wedding Coordinator',
    ],
  },
];

export default function CateringVideoReel() {
  const [playingId, setPlayingId] = useState<string>('ballroom-grand');
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [selectedPkg, setSelectedPkg] = useState<string>('elegance');

  const activeReel = videoReels.find((r) => r.id === playingId) ?? videoReels[0];
  const activePackage = packages.find((p) => p.id === selectedPkg) ?? packages[1];

  return (
    <div className="nc-interactive-wrap">
      {/* 1. Short Video Reels Grid (Rangkaian Video Pendek Acara) */}
      <div className="nc-reels-section">
        <div className="nc-reels-header">
          <div>
            <span className="nc-kicker">VIDEO REELS ACARA</span>
            <h3>Cuplikan Video Pendek Hari Bahagia</h3>
            <p>Klik video untuk melihat atmosfer pesta, kemegahan dekorasi, dan antusiasme para tamu.</p>
          </div>
          <button
            type="button"
            className="nc-btn-sound-toggle"
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? 'Nyalakan Audio' : 'Matikan Audio'}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span>{isMuted ? 'Audio Bisu' : 'Audio Aktif'}</span>
          </button>
        </div>

        <div className="nc-reels-grid">
          {videoReels.map((reel) => (
            <div
              key={reel.id}
              className={`nc-reel-card ${playingId === reel.id ? 'active' : ''}`}
              onClick={() => setPlayingId(reel.id)}
            >
              <div className="nc-reel-media">
                <img src={reel.image} alt={reel.title} />

                {/* Simulated Video Player Overlay */}
                <div className="nc-player-overlay">
                  <div className="nc-play-circle">
                    {playingId === reel.id ? <Pause size={18} /> : <Play size={18} />}
                  </div>
                  <span className="nc-duration-tag">
                    <Clock size={11} /> {reel.duration}
                  </span>
                  <span className="nc-views-tag">{reel.views}</span>

                  {playingId === reel.id && (
                    <div className="nc-soundwave-indicator">
                      <span /><span /><span /><span /><span />
                    </div>
                  )}
                </div>

                <div className="nc-reel-caption">
                  <span className="nc-reel-concept">{reel.concept}</span>
                  <h4>{reel.title}</h4>
                  <small>
                    <MapPin size={12} /> {reel.venue}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Selected Video Highlight Details */}
        <div className="nc-active-reel-detail">
          <div className="nc-detail-grid">
            <div className="nc-detail-copy">
              <span className="nc-detail-badge">
                <Sparkles size={13} />
                <span>NOW PLAYING HIGHLIGHT</span>
              </span>
              <h3>{activeReel.title}</h3>
              <p className="nc-detail-venue">
                <MapPin size={14} className="nc-icon-gold" />
                <strong>{activeReel.venue}</strong> · <span>{activeReel.pax}</span>
              </p>
              <p className="nc-detail-desc">{activeReel.description}</p>
            </div>

            <div className="nc-detail-menu">
              <strong>
                <Utensils size={14} /> Menu Favorit di Acara Ini:
              </strong>
              <div className="nc-menu-chips">
                {activeReel.menuHighlights.map((menu, i) => (
                  <span key={i} className="nc-menu-chip">
                    <CheckCircle2 size={13} className="nc-icon-gold" />
                    <span>{menu}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Packages with Exclusive Bonuses (Paket Lengkap & Promo Bonus Melimpah) */}
      <div id="paket" className="nc-packages-container">
        <div className="nc-pkg-header center">
          <span className="nc-kicker">PILIHAN PAKET ALL-IN-ONE</span>
          <h2>Paket Pernikahan Lengkap<br />dengan <em>Bonus Melimpah.</em></h2>
          <p>
            Semua kebutuhan catering rasa bintang 5 dan dekorasi pelaminan mewah sudah dirangkum rapi tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Package Switcher Tabs */}
        <div className="nc-pkg-tabs">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              type="button"
              className={`nc-tab-btn ${selectedPkg === pkg.id ? 'active' : ''}`}
              onClick={() => setSelectedPkg(pkg.id)}
            >
              <strong>{pkg.name}</strong>
              <span>{pkg.pax} · {pkg.priceNum}</span>
            </button>
          ))}
        </div>

        {/* Active Package Display Card */}
        <div className="nc-pkg-card-active">
          <div className="nc-pkg-hero-row">
            <div>
              <span className="nc-badge-hot">
                <Sparkles size={13} />
                <span>{activePackage.badge}</span>
              </span>
              <h3>{activePackage.name}</h3>
              <p className="nc-ideal">{activePackage.idealFor}</p>
            </div>

            <div className="nc-price-tag-box">
              <small>Investasi Paket Lengkap</small>
              <strong>{activePackage.price}</strong>
              <span>Termasuk Pajak &amp; Service Fee</span>
            </div>
          </div>

          <div className="nc-pkg-content-grid">
            {/* Exclusive Bonus Box */}
            <div className="nc-bonus-box">
              <div className="nc-bonus-title">
                <Gift size={18} className="nc-icon-gold" />
                <h4>Bonus Eksklusif Hari Bahagia:</h4>
              </div>
              <ul className="nc-bonus-list">
                {activePackage.bonuses.map((bonus, bIdx) => (
                  <li key={bIdx}>
                    <Sparkles size={14} className="nc-icon-gold" />
                    <strong>{bonus}</strong>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions */}
            <div className="nc-features-box">
              <h4>Fasilitas Catering &amp; Dekorasi:</h4>
              <ul className="nc-features-list">
                {activePackage.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <CheckCircle2 size={15} className="nc-icon-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Action Row with Direct Phone & WhatsApp Numbers */}
          <div className="nc-pkg-cta-bar">
            <div className="nc-cta-info">
              <Calendar size={16} className="nc-icon-gold" />
              <span>Gratis VIP Food Tasting untuk 6 Orang Keluarga di Kantor/Venue Anda</span>
            </div>

            <div className="nc-cta-action-btns">
              <a
                href="https://wa.me/6281573550017?text=Halo%20NalaCatering%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(activePackage.name)}%20(${activePackage.pax}).%20Bisa%20jadwalkan%20Free%20Food%20Tasting%3F"
                target="_blank"
                rel="noreferrer"
                className="nc-btn-order-wa"
              >
                <MessageCircle size={16} />
                <span>Klaim Bonus &amp; Food Tasting</span>
                <ArrowUpRight size={16} />
              </a>

              <a href="tel:+6281573550017" className="nc-btn-call">
                <Phone size={15} />
                <span>+62 815 7355 0017</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
