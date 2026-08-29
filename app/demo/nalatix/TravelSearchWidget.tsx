'use client';

import { useState } from 'react';

type ServiceType = 'flight' | 'hotel' | 'train' | 'attraction';

export default function TravelSearchWidget() {
  const [activeService, setActiveService] = useState<ServiceType>('flight');
  const [origin, setOrigin] = useState('Jakarta (CGK)');
  const [destination, setDestination] = useState('Bali / Denpasar (DPS)');
  const [hotelCity, setHotelCity] = useState('Bali, Indonesia');
  const [trainOrigin, setTrainOrigin] = useState('Gambir (GMR), Jakarta');
  const [trainDestination, setTrainDestination] = useState('Yogyakarta (YK)');
  const [attractionQuery, setAttractionQuery] = useState('Dufan Ancol, Jakarta');
  const [searchSuccess, setSearchSuccess] = useState(false);

  const handleSwapFlight = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleSwapTrain = () => {
    const temp = trainOrigin;
    setTrainOrigin(trainDestination);
    setTrainDestination(temp);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchSuccess(true);
    setTimeout(() => {
      const target = document.getElementById('deals');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <div className="tk-search-widget">
      {/* Classification Service Tabs */}
      <div className="tk-service-tabs" role="tablist">
        <button
          type="button"
          className={`tk-service-tab ${activeService === 'flight' ? 'active' : ''}`}
          onClick={() => setActiveService('flight')}
        >
          <span className="tk-tab-icon">✈️</span>
          <div>
            <strong>Pesawat</strong>
            <small>Domestik & Int.</small>
          </div>
        </button>

        <button
          type="button"
          className={`tk-service-tab ${activeService === 'hotel' ? 'active' : ''}`}
          onClick={() => setActiveService('hotel')}
        >
          <span className="tk-tab-icon">🏨</span>
          <div>
            <strong>Hotel</strong>
            <small>Resort & Villa</small>
          </div>
        </button>

        <button
          type="button"
          className={`tk-service-tab ${activeService === 'train' ? 'active' : ''}`}
          onClick={() => setActiveService('train')}
        >
          <span className="tk-tab-icon">🚆</span>
          <div>
            <strong>Kereta Api</strong>
            <small>KAI & Whoosh</small>
          </div>
        </button>

        <button
          type="button"
          className={`tk-service-tab ${activeService === 'attraction' ? 'active' : ''}`}
          onClick={() => setActiveService('attraction')}
        >
          <span className="tk-tab-icon">🎢</span>
          <div>
            <strong>Wahana</strong>
            <small>To Do & Wisata</small>
          </div>
        </button>
      </div>

      {/* Form Fields */}
      <form className="tk-search-form" onSubmit={handleSearch}>
        {activeService === 'flight' && (
          <div className="tk-form-grid">
            <div className="tk-field-group">
              <label>Dari (Asal)</label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Kota atau Bandara Asal"
              />
            </div>

            <button type="button" className="tk-swap-btn" onClick={handleSwapFlight} aria-label="Tukar rute">
              ⇄
            </button>

            <div className="tk-field-group">
              <label>Ke (Tujuan)</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Kota atau Bandara Tujuan"
              />
            </div>

            <div className="tk-field-group">
              <label>Tanggal Berangkat</label>
              <input type="text" defaultValue="30 Agu 2026" />
            </div>

            <div className="tk-field-group">
              <label>Penumpang & Kelas</label>
              <select defaultValue="1 Dewasa, Ekonomi">
                <option>1 Dewasa, Ekonomi</option>
                <option>2 Dewasa, Ekonomi</option>
                <option>1 Dewasa, Bisnis</option>
                <option>Keluarga (2 Dewasa + 1 Anak)</option>
              </select>
            </div>
          </div>
        )}

        {activeService === 'hotel' && (
          <div className="tk-form-grid">
            <div className="tk-field-group span-two">
              <label>Kota, Tujuan, atau Nama Hotel</label>
              <input
                type="text"
                value={hotelCity}
                onChange={(e) => setHotelCity(e.target.value)}
                placeholder="Contoh: Bali, Seminyak, Kuta..."
              />
            </div>

            <div className="tk-field-group">
              <label>Check-in / Durasi</label>
              <input type="text" defaultValue="30 Agu 2026 (2 Malam)" />
            </div>

            <div className="tk-field-group">
              <label>Tamu & Kamar</label>
              <select defaultValue="2 Tamu, 1 Kamar">
                <option>1 Tamu, 1 Kamar</option>
                <option>2 Tamu, 1 Kamar</option>
                <option>3 Tamu, 2 Kamar</option>
                <option>4 Tamu, 2 Kamar</option>
              </select>
            </div>
          </div>
        )}

        {activeService === 'train' && (
          <div className="tk-form-grid">
            <div className="tk-field-group">
              <label>Stasiun Asal</label>
              <input
                type="text"
                value={trainOrigin}
                onChange={(e) => setTrainOrigin(e.target.value)}
                placeholder="Stasiun Asal"
              />
            </div>

            <button type="button" className="tk-swap-btn" onClick={handleSwapTrain} aria-label="Tukar stasiun">
              ⇄
            </button>

            <div className="tk-field-group">
              <label>Stasiun Tujuan</label>
              <input
                type="text"
                value={trainDestination}
                onChange={(e) => setTrainDestination(e.target.value)}
                placeholder="Stasiun Tujuan"
              />
            </div>

            <div className="tk-field-group">
              <label>Tanggal Pergi</label>
              <input type="text" defaultValue="30 Agu 2026" />
            </div>

            <div className="tk-field-group">
              <label>Jumlah Penumpang</label>
              <select defaultValue="1 Dewasa">
                <option>1 Dewasa</option>
                <option>2 Dewasa</option>
                <option>3 Dewasa</option>
                <option>4 Dewasa</option>
              </select>
            </div>
          </div>
        )}

        {activeService === 'attraction' && (
          <div className="tk-form-grid">
            <div className="tk-field-group span-two">
              <label>Cari Wahana, Theme Park & Atraksi</label>
              <input
                type="text"
                value={attractionQuery}
                onChange={(e) => setAttractionQuery(e.target.value)}
                placeholder="Contoh: Dufan, Trans Studio, Bali Zoo..."
              />
            </div>

            <div className="tk-field-group">
              <label>Tanggal Kunjungan</label>
              <input type="text" defaultValue="30 Agu 2026" />
            </div>

            <div className="tk-field-group">
              <label>Jumlah Tiket</label>
              <select defaultValue="2 Tiket">
                <option>1 Tiket</option>
                <option>2 Tiket</option>
                <option>3 Tiket</option>
                <option>4 Tiket</option>
              </select>
            </div>
          </div>
        )}

        <div className="tk-form-action">
          <button type="submit" className="tk-submit-btn">
            <span>Cari Tiket Murah</span>
            <b>🔍</b>
          </button>
        </div>
      </form>

      {searchSuccess && (
        <div className="tk-search-alert">
          <span>🎉</span>
          <div>
            <strong>Menampilkan tiket terbaik untuk perjalananmu!</strong>
            <small>Cek promo dan tarif termurah di daftar rekomendasi bawah.</small>
          </div>
        </div>
      )}
    </div>
  );
}
