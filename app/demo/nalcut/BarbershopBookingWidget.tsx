'use client';

import { useState } from 'react';
import {
  Scissors,
  Sparkles,
  Clock,
  Calendar,
  Star,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
  UserCheck,
  ShieldCheck,
  Award,
  Check,
  RotateCcw,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration: number; // in minutes
  desc: string;
  category: string;
}

const servicesData: ServiceItem[] = [
  { id: 'regular', name: 'Regular Haircut', price: 40000, duration: 30, desc: 'Konsultasi gaya, potong rambut presisi, dan styling pomade', category: 'Haircut' },
  { id: 'wash', name: 'Haircut & Wash', price: 55000, duration: 40, desc: 'Potong rambut, keramas pijat relaksasi, dan styling', category: 'Haircut' },
  { id: 'premium', name: 'Premium Haircut', price: 75000, duration: 60, desc: 'Konsultasi detail bentuk wajah, haircut, wash, hot towel, & styling', category: 'Haircut' },
  { id: 'shave', name: 'Haircut & Shave', price: 65000, duration: 45, desc: 'Potong rambut dan cukur jenggot/kumis dengan pisau steril', category: 'Combo' },
  { id: 'beard', name: 'Beard Trim & Kumis', price: 30000, duration: 20, desc: 'Merapikan garis jenggot, kumis, dan aftershave cooling lotion', category: 'Grooming' },
  { id: 'color', name: 'Hair Coloring / Highlight', price: 150000, duration: 90, desc: 'Pewarnaan rambut profesional (ash grey, blonde, brown, hitam)', category: 'Treatment' },
  { id: 'kids', name: 'Kids Haircut', price: 35000, duration: 25, desc: 'Potong rambut anak yang ramah, rapi, dan cepat', category: 'Haircut' },
  { id: 'massage', name: 'Head Massage & Relaksasi', price: 25000, duration: 15, desc: 'Pijat kepala dan pundak dengan minyak aromaterapi', category: 'Treatment' },
];

interface BarberItem {
  id: string;
  name: string;
  title: string;
  exp: string;
  specialty: string;
  rating: number;
  image: string;
  status: string;
}

const barbersData: BarberItem[] = [
  {
    id: 'andi',
    name: 'Andi Pratama',
    title: 'Senior Barber',
    exp: '7 Tahun Pengalaman',
    specialty: 'Fade, Pompadour, Classic Slick Back',
    rating: 4.9,
    image: '/barber/barber-andi.jpg',
    status: 'Tersedia Hari Ini',
  },
  {
    id: 'rizky',
    name: 'Rizky Kurniawan',
    title: 'Professional Barber',
    exp: '5 Tahun Pengalaman',
    specialty: 'French Crop, Taper Fade, Textured Cut',
    rating: 4.8,
    image: '/barber/barber-rizky.jpg',
    status: 'Tersedia Hari Ini',
  },
  {
    id: 'dimas',
    name: 'Dimas Anggoro',
    title: 'Creative Barber',
    exp: '4 Tahun Pengalaman',
    specialty: 'Mullet Modern, Two Block, Hair Tattoo',
    rating: 4.8,
    image: '/barber/barber-dimas.jpg',
    status: 'Tersedia Hari Ini',
  },
  {
    id: 'any',
    name: 'Siapa Saja (Paling Cepat)',
    title: 'Any Available Barber',
    exp: 'Tersedia Langsung',
    specialty: 'Langsung dilayani barber yang standby',
    rating: 4.9,
    image: '/barber/hero-barber.jpg',
    status: 'Slot Kursi Siap',
  },
];

const timeSlots = [
  '10:00 - 10:45',
  '11:30 - 12:15',
  '13:00 - 13:45',
  '14:30 - 15:15',
  '16:00 - 16:45',
  '17:30 - 18:15',
  '19:00 - 19:45',
  '20:30 - 21:15',
];

export default function BarbershopBookingWidget() {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(['premium']);
  const [selectedBarberId, setSelectedBarberId] = useState<string>('andi');
  const [selectedDay, setSelectedDay] = useState<string>('Hari Ini');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('14:30 - 15:15');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerWa, setCustomerWa] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('Model Fade / Rapikan samping');

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter((sId) => sId !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const selectedServices = servicesData.filter((s) => selectedServiceIds.includes(s.id));
  const totalPrice = selectedServices.reduce((sum, item) => sum + item.price, 0);
  const totalDuration = selectedServices.reduce((sum, item) => sum + item.duration, 0);
  const selectedBarber = barbersData.find((b) => b.id === selectedBarberId) || barbersData[0];

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const generateWhatsAppUrl = () => {
    const bookingCode = `NC-${Math.floor(1000 + Math.random() * 9000)}`;
    const serviceNames = selectedServices.map((s) => s.name).join(', ');
    const name = customerName.trim() || 'Pelanggan Nalcut';

    const message = `Halo Nalcut Barbershop! Saya ingin konfirmasi booking jadwal potong rambut:
- No. Booking: #${bookingCode}
- Nama: ${name}
- Layanan: ${serviceNames}
- Barber Pilihan: ${selectedBarber.name} (${selectedBarber.title})
- Jadwal: ${selectedDay}, Pukul ${selectedTimeSlot}
- Estimasi Durasi: ~${totalDuration} Menit
- Estimasi Total Biaya: ${formatRupiah(totalPrice)}
- Catatan Model: ${customerNotes || 'Sesuai rekomendasi barber'}

Mohon siapkan kursi dan konfirmasi ketersediaan slotnya ya, terima kasih!`;

    return `https://wa.me/6281573550017?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="ncb-booking-wizard-card">
      <div className="ncb-wizard-header">
        <div className="ncb-wizard-badge">
          <Scissors size={14} className="ncb-icon-gold" />
          <span>SISTEM BOOKING ON-DEMAND</span>
        </div>
        <h3>Reservasi Kursi Barber Tanpa Antre</h3>
        <p>Pilih layanan, barber langganan, dan jam kedatangan yang sesuai dengan jadwalmu.</p>
      </div>

      <div className="ncb-wizard-grid">
        {/* Left Column: Interactive 4 Steps */}
        <div className="ncb-wizard-steps-col">
          {/* Step 1: Pilih Layanan */}
          <div className="ncb-step-box">
            <div className="ncb-step-title">
              <span className="ncb-step-num">1</span>
              <div>
                <h4>Pilih Layanan Grooming</h4>
                <small>Bisa memilih lebih dari satu layanan sekaligus</small>
              </div>
            </div>

            <div className="ncb-services-picker-grid">
              {servicesData.map((svc) => {
                const isSelected = selectedServiceIds.includes(svc.id);
                return (
                  <button
                    key={svc.id}
                    type="button"
                    className={`ncb-service-select-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => toggleService(svc.id)}
                  >
                    <div className="ncb-svc-header">
                      <span className="ncb-svc-name">{svc.name}</span>
                      <div className="ncb-svc-checkbox">
                        {isSelected ? <Check size={14} className="ncb-icon-gold" /> : <div className="ncb-circle-empty" />}
                      </div>
                    </div>
                    <div className="ncb-svc-meta">
                      <strong>{formatRupiah(svc.price)}</strong>
                      <span><Clock size={11} /> {svc.duration}m</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Pilih Barber */}
          <div className="ncb-step-box">
            <div className="ncb-step-title">
              <span className="ncb-step-num">2</span>
              <div>
                <h4>Pilih Barber Langganan</h4>
                <small>Setiap barber memiliki keahlian dan spesialisasi gaya rambut</small>
              </div>
            </div>

            <div className="ncb-barbers-picker-grid">
              {barbersData.map((barber) => {
                const isSelected = barber.id === selectedBarberId;
                return (
                  <button
                    key={barber.id}
                    type="button"
                    className={`ncb-barber-select-card ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedBarberId(barber.id)}
                  >
                    <img src={barber.image} alt={barber.name} className="ncb-barber-avatar" />
                    <div className="ncb-barber-details">
                      <strong>{barber.name}</strong>
                      <span className="ncb-barber-role">{barber.title}</span>
                      <small className="ncb-barber-spec">{barber.specialty}</small>
                      <div className="ncb-barber-rating">
                        <Star size={11} fill="#c89b3c" color="#c89b3c" />
                        <span>{barber.rating}</span>
                        <small>({barber.exp})</small>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Pilih Tanggal & Waktu */}
          <div className="ncb-step-box">
            <div className="ncb-step-title">
              <span className="ncb-step-num">3</span>
              <div>
                <h4>Pilih Hari &amp; Jam Kedatangan</h4>
                <small>Slot waktu diperbarui secara real-time</small>
              </div>
            </div>

            {/* Day Selector */}
            <div className="ncb-day-pills">
              {['Hari Ini', 'Besok (Minggu)', 'Lusa (Senin)'].map((day) => (
                <button
                  key={day}
                  type="button"
                  className={`ncb-day-pill ${selectedDay === day ? 'active' : ''}`}
                  onClick={() => setSelectedDay(day)}
                >
                  <Calendar size={13} />
                  <span>{day}</span>
                </button>
              ))}
            </div>

            {/* Time Slot Selector */}
            <div className="ncb-time-slots-grid">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`ncb-slot-btn ${selectedTimeSlot === slot ? 'active' : ''}`}
                  onClick={() => setSelectedTimeSlot(slot)}
                >
                  <Clock size={12} />
                  <span>{slot}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Data Pelanggan */}
          <div className="ncb-step-box">
            <div className="ncb-step-title">
              <span className="ncb-step-num">4</span>
              <div>
                <h4>Data Pelanggan</h4>
                <small>Cukup nama dan nomor WhatsApp untuk konfirmasi</small>
              </div>
            </div>

            <div className="ncb-form-two-cols">
              <div className="ncb-input-group">
                <label>Nama Lengkap:</label>
                <input
                  type="text"
                  placeholder="Contoh: Farhan Pratama"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="ncb-text-input"
                />
              </div>

              <div className="ncb-input-group">
                <label>Nomor WhatsApp:</label>
                <input
                  type="tel"
                  placeholder="Contoh: 081234567890"
                  value={customerWa}
                  onChange={(e) => setCustomerWa(e.target.value)}
                  className="ncb-text-input"
                />
              </div>
            </div>

            <div className="ncb-input-group">
              <label>Catatan Model Rambut / Referensi (Opsional):</label>
              <input
                type="text"
                placeholder="Contoh: Taper Fade tipis samping, atas agak panjang"
                value={customerNotes}
                onChange={(e) => setCustomerNotes(e.target.value)}
                className="ncb-text-input"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Step 5 Confirmation Ticket Summary */}
        <div className="ncb-summary-ticket-col">
          <div className="ncb-ticket-card">
            <div className="ncb-ticket-head">
              <span className="ncb-ticket-kicker">RINGKASAN TIKET BOOKING</span>
              <h4>Gentlemen&apos;s Cut Reservation</h4>
              <span className="ncb-ticket-code">KODE: #NC-{Math.floor(1000 + Math.random() * 9000)}</span>
            </div>

            <div className="ncb-ticket-divider" />

            {/* Selected Items Breakdown */}
            <div className="ncb-ticket-body">
              <div className="ncb-summary-row">
                <span className="ncb-label">Layanan Dipilih:</span>
                <strong className="ncb-val-list">
                  {selectedServices.map((s) => (
                    <span key={s.id}>{s.name} ({formatRupiah(s.price)})</span>
                  ))}
                </strong>
              </div>

              <div className="ncb-summary-row">
                <span className="ncb-label">Barber:</span>
                <strong className="ncb-val-highlight">{selectedBarber.name}</strong>
              </div>

              <div className="ncb-summary-row">
                <span className="ncb-label">Jadwal Kedatangan:</span>
                <strong className="ncb-val">{selectedDay} · {selectedTimeSlot}</strong>
              </div>

              <div className="ncb-summary-row">
                <span className="ncb-label">Estimasi Durasi:</span>
                <strong className="ncb-val"><Clock size={13} /> ~{totalDuration} Menit</strong>
              </div>

              <div className="ncb-summary-total-box">
                <span>Total Pembayaran di Lokasi:</span>
                <strong>{formatRupiah(totalPrice)}</strong>
                <small>Bisa bayar tunai / QRIS setelah selesai potong</small>
              </div>
            </div>

            {/* Rules of Booking */}
            <div className="ncb-ticket-rules">
              <label>Aturan Kedatangan:</label>
              <ul>
                <li>Datang 10 menit sebelum jadwal reservasi.</li>
                <li>Toleransi keterlambatan maksimal 15 menit.</li>
                <li>Tunjukkan nama / nomor booking saat tiba.</li>
              </ul>
            </div>

            {/* WhatsApp Booking Trigger */}
            <div className="ncb-ticket-action">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="ncb-btn-ticket-wa"
              >
                <MessageCircle size={17} />
                <span>Konfirmasi Booking via WhatsApp</span>
                <ArrowUpRight size={17} />
              </a>
              <small className="ncb-ticket-guarantee">
                <ShieldCheck size={13} className="ncb-icon-gold" />
                <span>Garansi potong ulang jika hasil kurang sesuai keinginan.</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
