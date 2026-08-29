'use client';

import { useState } from 'react';
import {
  Camera,
  Sparkles,
  GraduationCap,
  Heart,
  Package,
  Clock,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Award,
  Video,
  Image as ImageIcon,
  Layers,
  Check,
} from 'lucide-react';

interface PhotoPackage {
  id: string;
  category: 'wisuda' | 'wedding' | 'product';
  name: string;
  price: number;
  duration: string;
  deliverables: string;
  desc: string;
}

const packagesData: PhotoPackage[] = [
  // Wisuda
  { id: 'grad_personal', category: 'wisuda', name: 'Paket Personal Wisuda', price: 350000, duration: '30 Menit', deliverables: '15 Foto Edit + All Raw Files', desc: 'Sesi solo wisudawan di kampus/outdoor dengan arahan pose natural.' },
  { id: 'grad_friend', category: 'wisuda', name: 'Paket Best Friend (2-3 Orang)', price: 650000, duration: '60 Menit', deliverables: '30 Foto Edit + All Raw Files', desc: 'Sesi wisuda bersama sahabat terdekat, foto personal & kombinasi bareng.' },
  { id: 'grad_family', category: 'wisuda', name: 'Paket Family (Max 6 Orang)', price: 750000, duration: '60 Menit', deliverables: '35 Foto Edit (Formal & Candid)', desc: 'Momen berharga bersama orang tua dan keluarga tercinta saat wisuda.' },
  { id: 'grad_group', category: 'wisuda', name: 'Paket Graduation Group (Max 10 Orang)', price: 1200000, duration: '90 Menit', deliverables: '50 Foto Edit + All Raw Files', desc: 'Sesi rombongan satu geng/sirkel dengan konsep fun dan formal.' },
  { id: 'grad_fullday', category: 'wisuda', name: 'Paket Full Day Graduation', price: 2000000, duration: '3 Jam Penuh', deliverables: '100 Foto Edit + Unlimited Capture', desc: 'Liputan wisuda dari prosesi pelepasan hingga sesi foto keluarga santai.' },

  // Wedding
  { id: 'wed_akad', category: 'wedding', name: 'Paket Akad Intimate', price: 3500000, duration: 'Max 4 Jam', deliverables: '150 Foto Edit + Galeri Digital', desc: '1 Fotografer profesional untuk dokumentasi akad nikah khidmat.' },
  { id: 'wed_essential', category: 'wedding', name: 'Paket Wedding Essential', price: 7500000, duration: 'Max 8 Jam', deliverables: '350 Foto Edit + Flashdrive Box', desc: '2 Fotografer meliput persiapan, akad, hingga resepsi pernikahan.' },
  { id: 'wed_complete', category: 'wedding', name: 'Paket Wedding Complete (Foto + Video)', price: 12500000, duration: 'Max 10 Jam', deliverables: '500 Foto Edit + Video Cinematic + Album', desc: 'Tim 4 orang (2 Foto + 2 Video), teaser 1 menit & cinematic video 4K.' },
  { id: 'wed_premium', category: 'wedding', name: 'Paket Premium Story Full Day', price: 20000000, duration: 'Full Day (12 Jam)', deliverables: 'Unlimited Edit + 2 Album + Drone 4K', desc: 'Tim 5 orang, drone coverage, 2 exclusive photobook, & same-day edit.' },

  // Product
  { id: 'prod_starter', category: 'product', name: 'Paket Starter UMKM (5 Produk)', price: 500000, duration: '1-2 Hari', deliverables: '10 Foto Edit Katalog Latar Bersih', desc: 'Foto katalog produk berlatar putih/polos untuk toko online.' },
  { id: 'prod_market', category: 'product', name: 'Paket Marketplace (10 Produk)', price: 1200000, duration: '2-3 Hari', deliverables: '30 Foto Edit (3 Sudut/Produk)', desc: 'Standar marketplace Tokopedia & Shopee dengan warna akurat.' },
  { id: 'prod_social', category: 'product', name: 'Paket Social Media Lifestyle (10 Produk)', price: 2000000, duration: '3-4 Hari', deliverables: '40 Foto Konsep Lifestyle + Properti', desc: 'Foto bernuansa tematik & estetik dengan properti studio pendukung.' },
  { id: 'prod_brand', category: 'product', name: 'Paket Brand Campaign (20 Produk)', price: 3500000, duration: '4-5 Hari', deliverables: '60 Foto Edit (Katalog + Lifestyle)', desc: 'Moodboard custom, styling produk, & format high-res untuk website.' },
];

interface AddonItem {
  id: string;
  name: string;
  price: number;
}

const addonOptions: AddonItem[] = [
  { id: 'extra_photos', name: 'Tambahan 10 Foto Edit Khusus', price: 200000 },
  { id: 'extra_hour', name: 'Tambahan Waktu 1 Jam di Lokasi', price: 500000 },
  { id: 'second_shooter', name: 'Tambahan 1 Fotografer Kedua', price: 1500000 },
  { id: 'cinematic_video', name: 'Video Teaser Highlight Cinematic 60s', price: 2000000 },
  { id: 'album_box', name: 'Cetak Album Foto Eksklusif & Box', price: 750000 },
];

export default function PhotoBookingWidget() {
  const [selectedCategory, setSelectedCategory] = useState<'wisuda' | 'wedding' | 'product'>('wisuda');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('grad_family');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [sessionDate, setSessionDate] = useState<string>('Sabtu, 24 Oktober 2026');
  const [sessionLocation, setSessionLocation] = useState<string>('Outdoor Kampus / Taman');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerWa, setCustomerWa] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('Konsep natural candid, bawa orang tua & adik');

  const filteredPackages = packagesData.filter((p) => p.category === selectedCategory);
  const currentPackage = packagesData.find((p) => p.id === selectedPackageId) || filteredPackages[0];

  const handleCategoryChange = (cat: 'wisuda' | 'wedding' | 'product') => {
    setSelectedCategory(cat);
    const firstPkg = packagesData.find((p) => p.category === cat);
    if (firstPkg) setSelectedPackageId(firstPkg.id);
  };

  const toggleAddon = (id: string) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter((aId) => aId !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  const addonsTotal = selectedAddonIds.reduce((sum, aId) => {
    const item = addonOptions.find((a) => a.id === aId);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalCost = currentPackage.price + addonsTotal;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const generateWhatsAppUrl = () => {
    const bookingCode = `LC-${Math.floor(1000 + Math.random() * 9000)}`;
    const addonNames = selectedAddonIds
      .map((aId) => addonOptions.find((a) => a.id === aId)?.name)
      .join(', ');
    const name = customerName.trim() || 'Klien Lensa Cerita';

    const message = `Halo Lensa Cerita Photography! Saya ingin mengajukan booking sesi foto:
- No. Booking: #${bookingCode}
- Nama Pemesan: ${name}
- Kategori: Fotografi ${selectedCategory.toUpperCase()}
- Paket Dipilih: ${currentPackage.name} (${formatRupiah(currentPackage.price)})
- Add-on: ${addonNames || 'Tanpa Add-on'}
- Rencana Tanggal & Waktu: ${sessionDate}
- Lokasi Sesi: ${sessionLocation}
- Estimasi Total Biaya: ${formatRupiah(totalCost)}
- Catatan / Konsep: ${customerNotes}

Mohon konfirmasi ketersediaan slot jadwal fotografer ya, terima kasih!`;

    return `https://wa.me/6281573550017?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="lcp-booking-wizard-card">
      <div className="lcp-wizard-header">
        <div className="lcp-wizard-badge">
          <Camera size={14} className="lcp-icon-gold" />
          <span>ON-DEMAND PHOTO SESSION BOOKING</span>
        </div>
        <h3>Booking Sesi Foto &amp; Cek Ketersediaan Jadwal</h3>
        <p>Pilih kategori pemotretan, paket layanan, dan add-on yang sesuai dengan kebutuhan visual Anda.</p>
      </div>

      <div className="lcp-wizard-grid">
        {/* Left Column: Interactive Inputs */}
        <div className="lcp-wizard-controls-col">
          {/* 1. Category Switcher */}
          <div className="lcp-form-group">
            <label className="lcp-group-label">1. Pilih Kategori Pemotretan:</label>
            <div className="lcp-category-tabs">
              <button
                type="button"
                className={`lcp-cat-tab ${selectedCategory === 'wisuda' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('wisuda')}
              >
                <GraduationCap size={16} />
                <span>Wisuda (Graduation)</span>
              </button>

              <button
                type="button"
                className={`lcp-cat-tab ${selectedCategory === 'wedding' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('wedding')}
              >
                <Heart size={16} />
                <span>Pernikahan &amp; Prewedding</span>
              </button>

              <button
                type="button"
                className={`lcp-cat-tab ${selectedCategory === 'product' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('product')}
              >
                <Package size={16} />
                <span>Produk UMKM &amp; Kuliner</span>
              </button>
            </div>
          </div>

          {/* 2. Package Selector */}
          <div className="lcp-form-group">
            <label className="lcp-group-label">2. Pilih Paket Layanan:</label>
            <div className="lcp-packages-list-grid">
              {filteredPackages.map((pkg) => {
                const isSelected = pkg.id === selectedPackageId;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    className={`lcp-pkg-select-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedPackageId(pkg.id)}
                  >
                    <div className="lcp-pkg-btn-top">
                      <strong>{pkg.name}</strong>
                      <span className="lcp-pkg-btn-price">{formatRupiah(pkg.price)}</span>
                    </div>
                    <div className="lcp-pkg-btn-meta">
                      <span><Clock size={11} /> {pkg.duration}</span>
                      <span><ImageIcon size={11} /> {pkg.deliverables}</span>
                    </div>
                    <small>{pkg.desc}</small>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Add-on Services Checklist */}
          <div className="lcp-form-group">
            <label className="lcp-group-label">3. Layanan Tambahan (Add-on Opsional):</label>
            <div className="lcp-addons-grid">
              {addonOptions.map((addon) => {
                const isChecked = selectedAddonIds.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    className={`lcp-addon-btn ${isChecked ? 'active' : ''}`}
                    onClick={() => toggleAddon(addon.id)}
                  >
                    <div className="lcp-addon-checkbox">
                      {isChecked ? <Check size={12} className="lcp-icon-gold" /> : <div className="lcp-dot-empty" />}
                    </div>
                    <div className="lcp-addon-info">
                      <span>{addon.name}</span>
                      <strong>+{formatRupiah(addon.price)}</strong>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Date & Location Inputs */}
          <div className="lcp-form-group">
            <div className="lcp-two-fields">
              <div>
                <label className="lcp-field-label">4. Perkiraan Tanggal &amp; Jam:</label>
                <input
                  type="text"
                  value={sessionDate}
                  onChange={(e) => setSessionDate(e.target.value)}
                  placeholder="Contoh: 15 November 2026, 14:00"
                  className="lcp-text-input"
                />
              </div>

              <div>
                <label className="lcp-field-label">5. Lokasi Pemotretan:</label>
                <input
                  type="text"
                  value={sessionLocation}
                  onChange={(e) => setSessionLocation(e.target.value)}
                  placeholder="Contoh: UI Depok / Studio Tebet / Venue"
                  className="lcp-text-input"
                />
              </div>
            </div>
          </div>

          {/* 5. Customer Details */}
          <div className="lcp-form-group">
            <div className="lcp-two-fields">
              <div>
                <label className="lcp-field-label">Nama Pemesan:</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Contoh: Amanda Saraswati"
                  className="lcp-text-input"
                />
              </div>

              <div>
                <label className="lcp-field-label">Nomor WhatsApp:</label>
                <input
                  type="tel"
                  value={customerWa}
                  onChange={(e) => setCustomerWa(e.target.value)}
                  placeholder="Contoh: 081234567890"
                  className="lcp-text-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Ticket Summary */}
        <div className="lcp-wizard-summary-col">
          <div className="lcp-summary-ticket">
            <div className="lcp-ticket-top">
              <span className="lcp-ticket-kicker">RINGKASAN SESI FOTO</span>
              <h4>Lensa Cerita Studio</h4>
              <span className="lcp-ticket-code">KODE: #LC-{Math.floor(1000 + Math.random() * 9000)}</span>
            </div>

            <div className="lcp-ticket-divider" />

            <div className="lcp-ticket-details">
              <div className="lcp-ticket-row">
                <span>Kategori:</span>
                <strong className="lcp-cat-name">{selectedCategory.toUpperCase()}</strong>
              </div>

              <div className="lcp-ticket-row">
                <span>Paket Dipilih:</span>
                <strong>{currentPackage.name}</strong>
              </div>

              <div className="lcp-ticket-row">
                <span>Durasi:</span>
                <strong><Clock size={12} /> {currentPackage.duration}</strong>
              </div>

              <div className="lcp-ticket-row">
                <span>Hasil Deliverables:</span>
                <strong>{currentPackage.deliverables}</strong>
              </div>

              <div className="lcp-ticket-row">
                <span>Lokasi:</span>
                <strong><MapPin size={12} /> {sessionLocation}</strong>
              </div>

              {selectedAddonIds.length > 0 && (
                <div className="lcp-ticket-addons-box">
                  <label>Add-on Pilihan:</label>
                  <ul>
                    {selectedAddonIds.map((aId) => {
                      const item = addonOptions.find((a) => a.id === aId);
                      return item ? (
                        <li key={aId}>
                          <span>{item.name}</span>
                          <strong>+{formatRupiah(item.price)}</strong>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              )}

              <div className="lcp-ticket-total-box">
                <span>Estimasi Total Biaya:</span>
                <strong>{formatRupiah(totalCost)}</strong>
                <small>*DP 30-50% untuk mengunci tanggal jadwal.</small>
              </div>
            </div>

            <div className="lcp-ticket-guarantees">
              <ul>
                <li><CheckCircle2 size={13} className="lcp-icon-gold" /> <span>Panduan pose santai &amp; natural di lokasi</span></li>
                <li><CheckCircle2 size={13} className="lcp-icon-gold" /> <span>Penyimpanan aman di private cloud storage</span></li>
              </ul>
            </div>

            <div className="lcp-ticket-cta">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="lcp-btn-ticket-wa"
              >
                <MessageCircle size={17} />
                <span>Ajukan Booking via WhatsApp</span>
                <ArrowUpRight size={17} />
              </a>
              <small className="lcp-ticket-note">
                <ShieldCheck size={12} className="lcp-icon-gold" />
                <span>Admin akan konfirmasi ketersediaan fotografer dalam 15 menit.</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
